import { createInstance, geo } from '@/main';

window.debugInstance = null;

let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmax: 3549492,
                            xmin: -2681457,
                            ymax: 3482193,
                            ymin: -883440,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    }
                ],
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'DEFAULT_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: [
                            '/tile/8/285/268',
                            '/tile/8/285/269'
                        ],
                        hasNorthPole: true
                    }
                ],
                basemaps: [
                    {
                        id: 'CBCT',
                        tileSchemaId: 'DEFAULT_NRCAN_Lambert_3978',
                        layers: [
                            {
                                layerType: 'esri-tile',
                                url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBCT3978/MapServer'
                            }
                        ]
                    }
                ],
                initialBasemapId: 'CBCT'
            },
            fixtures: {
                northarrow: {
                    arrowIcon:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjI0IDM4Ny44MTRWNTEyTDMyIDMyMGwxOTItMTkydjEyNi45MTJDNDQ3LjM3NSAyNjAuMTUyIDQzNy43OTQgMTAzLjAxNiAzODAuOTMgMCA1MjEuMjg3IDE1MS43MDcgNDkxLjQ4IDM5NC43ODUgMjI0IDM4Ny44MTR6Ii8+PC9zdmc+',
                    poleIcon:
                        'data:image/png;base64,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'
                }
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: false
};

const rInstance = createInstance(
    document.getElementById('app'),
    config,
    options
);

rInstance.fixture.addDefaultFixtures(['northarrow']);

window.debugInstance = rInstance;
