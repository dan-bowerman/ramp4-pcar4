import{d7 as I,e as o,d as s,i as j,jZ as D,jW as E,jY as x,kR as _,jp as G,jq as P,c_ as $,c$ as F,d0 as k,d4 as z,p as h,S as N,ju as B,l as v,M as J,h as W,f as g,s as A,r as L,n as q,v as Q,jA as C,cN as f,cl as Y,kS as Z,c5 as H,ig as K,id as U,ie as V,ds as X}from"./main.b43b33c5.js";import{n as ee}from"./objectIdUtils.8b6ba02d.js";function O(t){return t.layers.some(e=>e.layerDefinition.visibilityField!=null)}const M=new I({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),te=new I({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let b=class extends Z{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get sublayers(){return this.graphics}};o([s({readOnly:!0})],b.prototype,"sublayers",null),o([s()],b.prototype,"layer",void 0),o([s({readOnly:!0})],b.prototype,"visibilityMode",void 0),b=o([j("esri.layers.MapNotesLayer.MapNotesSublayer")],b);const T=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:new D().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:new E().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:new _().toJSON()}];let i=class extends G(P($(F(k(z))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new N(T.map(e=>new b({id:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!O(e)&&r?.origin!=="portal-item"}}}readFeatureCollections(t,e,r){if(!O(e))return null;const a=e.layers.map(l=>{const n=new B;return n.read(l,r),n});return new N({items:a})}readLegacyfeatureCollectionJSON(t,e){return O(e)?v(e.featureCollection):null}readFullExtent(t,e){if(!e.layers.length||e.layers.every(a=>!a.layerDefinition.extent))return new J({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:h.WGS84});const r=h.fromJSON(e.layers[0].layerDefinition.spatialReference);return e.layers.reduce((a,l)=>{const n=l.layerDefinition.extent;return n?J.fromJSON(n).union(a):a},new J({spatialReference:r}))}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(O(e))return null;const a=[];for(let n=0;n<e.layers.length;n++){var l;const{layerDefinition:y,featureSet:p}=e.layers[n],d=(l=y.geometryType)!=null?l:p.geometryType,c=T.find(u=>{var m,S,w;return d===u.geometryTypeJSON&&((m=y.drawingInfo)==null||(S=m.renderer)==null||(w=S.symbol)==null?void 0:w.type)===u.identifyingSymbol.type});if(c){const u=new b({id:c.layerId,title:y.name,layer:this,graphics:p.features.map(({geometry:m,symbol:S,attributes:w,popupInfo:R})=>W.fromJSON({attributes:w,geometry:m,symbol:S,popupTemplate:R}))});a.push(u)}}return new N(a)}writeSublayers(t,e,r,a){const{minScale:l,maxScale:n}=this;if(g(t))return;const y=t.some(u=>u.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing){var p;y&&(a==null||(p=a.messages)==null||p.push(new A("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));return}const d=[];let c=this.spatialReference.toJSON();e:for(const u of t)for(const m of u.graphics)if(L(m.geometry)){c=m.geometry.spatialReference.toJSON();break e}for(const u of T){const m=t.find(S=>u.layerId===S.id);this._writeMapNoteSublayer(d,m,u,l,n,c,a)}q("featureCollection.layers",d,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=v(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(g(this.sublayers))return;let t=null;const e=[];for(const a of this.sublayers)for(const l of a.graphics)if(L(l.geometry)){const n=l.geometry;t?H(n.spatialReference,t)||(K(n.spatialReference,t)||U()||await V(),l.geometry=X(n,t)):t=n.spatialReference,e.push(l)}const r=await Q(e.map(a=>a.geometry));e.forEach((a,l)=>a.geometry=r[l])}_findSublayer(t){var e,r;return g(this.sublayers)?null:(e=(r=this.sublayers)==null?void 0:r.find(a=>a.id===t))!=null?e:null}_writeMapNoteSublayer(t,e,r,a,l,n,y){const p=[];if(!g(e)){for(const d of e.graphics)this._writeMapNote(p,d,r.geometryType,y);this._normalizeObjectIds(p,M),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:v(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:a,maxScale:l,objectIdField:"OBJECTID",fields:[M.toJSON(),te.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,a){if(g(e))return;const{geometry:l,symbol:n,popupTemplate:y}=e;if(g(l))return;var p,d;if(l.type!==r)return void(a==null||(p=a.messages)==null||p.push(new C("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(g(n))return void(a==null||(d=a.messages)==null||d.push(new C("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const c={attributes:{...e.attributes},geometry:l.toJSON(),symbol:n.toJSON()};L(y)&&(c.popupInfo=y.toJSON()),t.push(c)}_normalizeObjectIds(t,e){const r=e.name;let a=ee(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||l.has(y[r]))&&(y[r]=a++),l.add(y[r])}}};o([s({readOnly:!0})],i.prototype,"capabilities",void 0),o([f(["portal-item","web-map"],"capabilities",["layers"])],i.prototype,"readCapabilities",null),o([s({readOnly:!0})],i.prototype,"featureCollections",void 0),o([f(["web-map","portal-item"],"featureCollections",["layers"])],i.prototype,"readFeatureCollections",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],i.prototype,"featureCollectionJSON",void 0),o([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],i.prototype,"readLegacyfeatureCollectionJSON",null),o([s({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],i.prototype,"featureCollectionType",void 0),o([s({json:{write:!1}})],i.prototype,"fullExtent",void 0),o([f(["web-map","portal-item"],"fullExtent",["layers"])],i.prototype,"readFullExtent",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],i.prototype,"legendEnabled",void 0),o([s({type:["show","hide"]})],i.prototype,"listMode",void 0),o([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"minScale",void 0),o([f(["web-map","portal-item"],"minScale",["layers"])],i.prototype,"readMinScale",null),o([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"maxScale",void 0),o([f(["web-map","portal-item"],"maxScale",["layers"])],i.prototype,"readMaxScale",null),o([s({readOnly:!0})],i.prototype,"multipointLayer",null),o([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),o([s({readOnly:!0})],i.prototype,"pointLayer",null),o([s({readOnly:!0})],i.prototype,"polygonLayer",null),o([s({readOnly:!0})],i.prototype,"polylineLayer",null),o([s({type:h})],i.prototype,"spatialReference",void 0),o([f(["web-map","portal-item"],"spatialReference",["layers"])],i.prototype,"readSpatialReference",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],i.prototype,"sublayers",void 0),o([f("web-map","sublayers",["layers"])],i.prototype,"readSublayers",null),o([Y("web-map","sublayers")],i.prototype,"writeSublayers",null),o([s({readOnly:!0})],i.prototype,"textLayer",null),o([s()],i.prototype,"title",void 0),o([s({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),i=o([j("esri.layers.MapNotesLayer")],i);const ie=i;export{ie as default};
