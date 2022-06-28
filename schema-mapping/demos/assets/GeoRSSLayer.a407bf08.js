import{jp as p,jr as u,c_ as d,c$ as c,jq as h,d0 as v,d4 as S,dn as m,r as g,bG as f,C as b,jT as j,a0 as C,e as o,d as r,cN as G,M as _,jJ as w,jU as x,d3 as P,i as R,jV as n,jW as k,jX as F,jY as $,jZ as E}from"./main.e3a581a7.js";const M=["atom","xml"],L={base:n,key:"type",typeMap:{"simple-line":k},errorContext:"symbol"},T={base:n,key:"type",typeMap:{"picture-marker":F,"simple-marker":$},errorContext:"symbol"},A={base:n,key:"type",typeMap:{"simple-fill":E},errorContext:"symbol"};let t=class extends p(u(d(c(h(v(S)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}readFeatureCollections(e,s){return s.featureCollection.layers.forEach(i=>{var l;const a=i.layerDefinition.drawingInfo.renderer.symbol;a&&a.type==="esriSFS"&&(l=a.outline)!=null&&l.style.includes("esriSFS")&&(a.outline.style="esriSLSSolid")}),s.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?m(this.url,M)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const s=g(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(f).then(()=>this._fetchService(s)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var s;const i=this.spatialReference,{data:l}=await b(C.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:j(i)?void 0:(s=i.wkid)!=null?s:JSON.stringify(i)},signal:e});return l}_hasGeometry(e){var s,i;return(s=(i=this.featureCollections)==null?void 0:i.some(l=>{var a,y;return((a=l.featureSet)==null?void 0:a.geometryType)===e&&((y=l.featureSet.features)==null?void 0:y.length)>0}))!=null&&s}};o([r()],t.prototype,"description",void 0),o([r()],t.prototype,"featureCollections",void 0),o([G("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([r({type:_,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([r(w)],t.prototype,"id",void 0),o([r(x)],t.prototype,"legendEnabled",void 0),o([r({types:L,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([r({type:["show","hide"]})],t.prototype,"listMode",void 0),o([r({types:T,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([r({types:A,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([r({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([r(P)],t.prototype,"url",void 0),o([r({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([r({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([R("esri.layers.GeoRSSLayer")],t);const O=t;export{O as default};
