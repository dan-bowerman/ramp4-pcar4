import type {
    IFSAResult,
    IGeosearchConfig,
    INameResponse,
    INTSResult,
    IRawNameResult,
    LocateResponseList,
    NameResultList,
    NTSResultList,
    queryFeatureResults
} from '../definitions';

export function make(config: IGeosearchConfig, query: string): Query {
    const latLngRegDD =
        /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/;
    const ntsReg = /^\d{2,3}[A-P]/;
    const fsaReg = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/;
    if (latLngRegDD.test(query)) {
        const queryStr = query.slice(0, -1);
        // Lat/Long search in decimal degrees format
        return new LatLongQuery(config, queryStr);
    } else if (fsaReg.test(query)) {
        // FSA search (postal area code)
        return new FSAQuery(config, query);
    } else if (ntsReg.test(query)) {
        // NTS search
        return new NTSQuery(config, query.substring(0, 6).toUpperCase());
        // } else if (/^[A-Za-z]/.test(query)) {
    } else {
        // name based search
        const q = new Query(config, query);
        q.onComplete = q.search().then(results => {
            q.results = results;
            return q;
        });
        return q;
    }
}

export class Query {
    config: IGeosearchConfig;
    query: string | undefined;
    results: NameResultList = [];
    onComplete: any;
    latLongResult: any;
    featureResults: queryFeatureResults = undefined;

    constructor(config: IGeosearchConfig, query?: string) {
        this.query = query;
        this.config = config;
    }

    search(): Promise<NameResultList> {
        return (<Promise<IRawNameResult>>this.jsonRequest(this.getUrl())).then(
            r => this.normalizeNameItems(r.items)
        );
    }

    private getUrl(
        useLocate?: boolean,
        restrict?: number[],
        lat?: number,
        lon?: number
    ): string {
        let url = '';
        if (useLocate) {
            // URL for FSA and NFA search
            url = this.config.geoLocateUrl + '?q=' + this.query;
        } else if (lat && lon) {
            // lat long URL
            url = `${this.config.geoNameUrl}?lat=${lat}&lon=${lon}&num=${this.config.maxResults}`;
        } else {
            // plain name based search
            url = `${this.config.geoNameUrl}?q=${this.query}&num=${this.config.maxResults}`;
        }
        return url;
    }

    normalizeNameItems(items: INameResponse[]): NameResultList {
        return items
            .filter(i => this.config.types.validTypes[i.concise.code])
            .map(i => {
                return {
                    name: i.name,
                    location: i.location,
                    province: this.config.provinces.list[i.province.code],
                    type: this.config.types.allTypes[i.concise.code],
                    LatLon: { lat: i.latitude, lon: i.longitude },
                    bbox: i.bbox
                };
            });
    }

    jsonRequest(url: string) {
        return new Promise((resolve, reject) => {
            const xobj = new XMLHttpRequest();
            xobj.open('GET', url, true);
            xobj.responseType = 'json';
            xobj.onload = () => {
                if (xobj.status === 200) {
                    const rawResponse =
                        typeof xobj.response === 'string'
                            ? JSON.parse(xobj.response)
                            : xobj.response;
                    // TODO: sort query results?
                    resolve(rawResponse);
                } else {
                    reject('Could not load results from remote service.');
                }
            };
            xobj.send();
        });
    }

    locateByQuery(): Promise<LocateResponseList> {
        return <Promise<LocateResponseList>>(
            this.jsonRequest(this.getUrl(true, undefined))
        );
    }

    nameByLatLon(lat: number, lon: number, restrict?: number[]): any {
        return (<Promise<IRawNameResult>>(
            this.jsonRequest(this.getUrl(false, restrict, lat, lon))
        )).then(r => {
            return this.normalizeNameItems(r.items);
        });
    }
}

export class LatLongQuery extends Query {
    constructor(config: IGeosearchConfig, query: string) {
        super(config, query);
        let coords: number[];

        // remove extra spaces and delimiters (the filter). convert string numbers to floaty numbers
        const filteredQuery = query
            .split(/[\s|,|;|]/)
            .filter(n => !isNaN(n as any) && n !== '')
            .map(n => parseFloat(n));
        coords = filteredQuery;
        // TODO: check and convert DMS format if applicable

        // apply buffer to create bbox from point coordinates
        const buff = 0.015;
        const boundingBox = [
            coords[1] - buff,
            coords[0] - buff,
            coords[1] + buff,
            coords[0] + buff
        ];
        // prep the lat/long result that needs to be generated along with name based results
        this.latLongResult = {
            name: `${coords[0]},${coords[1]}`,
            location: {
                latitude: coords[0],
                longitude: coords[1]
            },
            type: 'Latitude/Longitude',
            position: [coords[1], coords[0]],
            bbox: boundingBox
        };

        this.onComplete = new Promise((resolve, reject) => {
            this.nameByLatLon(coords[0], coords[1]).then((r: any) => {
                if (r) {
                    this.results = r;
                    resolve(this);
                } else {
                    reject('Given lat lon coordinates cannot be found');
                }
            });
        });
    }
}

export class FSAQuery extends Query {
    constructor(config: IGeosearchConfig, query: string) {
        // extract the first three characters to conduct FSA search
        query = query.substring(0, 3).toUpperCase();
        super(config, query);

        this.onComplete = new Promise((resolve, reject) => {
            this.formatLocationResult().then(fLR => {
                if (fLR) {
                    this.featureResults = fLR;
                    this.nameByLatLon(
                        fLR.LatLon.lat,
                        fLR.LatLon.lon,
                        Object.keys(fLR._provinces).map(x => parseInt(x))
                    ).then((r: any) => {
                        this.results = r;
                        resolve(this);
                    });
                } else {
                    reject('FSA code given cannot be found.');
                }
            });
        });
    }

    formatLocationResult(): Promise<IFSAResult | undefined> {
        return this.locateByQuery().then(locateResponseList => {
            // query check added since it can be null but will never be in this case (make TS happy)
            if (locateResponseList.length === 1 && this.query) {
                const provList = this.config.provinces.fsaToProvinces(
                    this.query
                );
                return <IFSAResult>{
                    fsa: this.query,
                    code: 'FSA',
                    desc: this.config.types.allTypes.FSA,
                    province: Object.keys(provList)
                        .map(i => provList[i])
                        .join(','),
                    _provinces: provList,
                    LatLon: {
                        lat: locateResponseList[0].geometry.coordinates[1],
                        lon: locateResponseList[0].geometry.coordinates[0]
                    }
                };
            }
        });
    }
}

/**
 * National Topographic System (NTS)
 *
 * The following definitions have the form "name (value constraints) - description"
 *
 * Sheet (two or three digits)      - aka "Map Numbers" are blocks of approximately 4,915,200 hectares.
 * Map Units Subdivision ([A-P])    - each sheet is subdivided further into 16 blocks, approximately 307,200 hectares
 * Map Sheet Unit ([1-16])          - each map unit is subdivided further into 16 blocks, approximately 19,200 hectares
 * Blocks ([A-L])                   - each map sheet unit is subdivided further into 12 blocks, approximately 1600 hectares
 * Units ([1-100]*)                 - each block is finally divided into 100 units, approximately 64 hectares
 *
 * Two subsets of the complete NTS format is supported:
 *     - Sheet and Map Unit Subdivision
 *     - Sheet, Map Unit Subdivision, and Map Sheet Unit
 *
 * Note that "Blocks" and "Units" are currently not supported on geogratis and are ignored on the query.
 */
export class NTSQuery extends Query {
    unitName: string;
    unit!: INTSResult;
    mapSheets: NTSResultList = [];

    constructor(config: IGeosearchConfig, query: string) {
        super(config, query);
        // front pad 0 if NTS starts with two digits
        query = isNaN(parseInt(query[2])) ? '0' + query : query;
        this.unitName = query;
        this.onComplete = new Promise((resolve, reject) => {
            this.locateByQuery().then(lr => {
                // query check added since it can be null but will never be in this case (make TS happy)
                if (lr.length > 0 && this.query) {
                    const allSheets = this.locateToResult(lr);
                    this.unit = allSheets[0];
                    this.mapSheets = allSheets;

                    this.featureResults = this.unit;

                    this.nameByLatLon(
                        this.unit.LatLon.lat,
                        this.unit.LatLon.lon
                    ).then((r: any) => {
                        this.results = r;
                        resolve(this);
                    });
                } else {
                    reject('Given NTS code not found');
                }
            });
        });
    }

    locateToResult(lrl: LocateResponseList): NTSResultList {
        const results = lrl.map(ls => {
            const title = ls.title.split(' ');
            return <INTSResult>{
                nts: title.shift() || '', // 064D or 064D06
                location: title.join(' '), // "NUMABIN BAY"
                code: 'NTS', // "NTS"
                desc: this.config.types.allTypes.NTS, // "National Topographic System"
                LatLon: {
                    lat: ls.geometry.coordinates[1],
                    lon: ls.geometry.coordinates[0]
                },
                bbox: <number[]>ls.bbox
            };
        });
        return results;
    }

    equals(otherQ: NTSQuery): boolean {
        return this.unitName === otherQ.unitName;
    }
}
