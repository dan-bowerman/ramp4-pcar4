import{cZ as y,c_ as m,c$ as d,d3 as f,jt as u,f as n,r as c,e as o,d as a,S as h,cM as p,i as C}from"./main.4f808ac9.js";let r=class extends y(m(d(f))){constructor(...e){super(...e),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,l){return this.revert("featureCollections","portal-item"),t.layers.map(s=>{const i=new u;return i.read(s,l),i})}readFeatureCollectionsFromWebMap(e,t,l){return t.featureCollection.layers.map(s=>{const i=new u;return i.read(s,l),i})}get fullExtent(){if(n(this.featureCollections))return null;const e=null;return this.featureCollections.reduce((t,l)=>n(l.fullExtent)?t:n(t)?l.fullExtent.clone():t.union(l.fullExtent),e)}get maxScale(){if(n(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce((t,l)=>t==null?l.maxScale:Math.min(t,l.maxScale),e)}set maxScale(e){c(this.featureCollections)&&this.featureCollections.forEach(t=>{t.maxScale=e}),this._set("maxScale",e)}get minScale(){if(n(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce((t,l)=>t==null?l.minScale:Math.min(t,l.minScale),e)}set minScale(e){c(this.featureCollections)&&this.featureCollections.forEach(t=>{t.minScale=e}),this._set("minScale",e)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!n(this.featureCollections))return this.featureCollections.find(t=>t.title===e)}};o([a()],r.prototype,"barrierLines",null),o([a()],r.prototype,"barrierPoints",null),o([a()],r.prototype,"barrierPolygons",null),o([a()],r.prototype,"directionLines",null),o([a()],r.prototype,"directionPoints",null),o([a({type:h.ofType(u)})],r.prototype,"featureCollections",void 0),o([p("portal-item","featureCollections",["layers"])],r.prototype,"readFeatureCollectionsFromItem",null),o([p("web-map","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollectionsFromWebMap",null),o([a({readOnly:!0})],r.prototype,"fullExtent",null),o([a({type:["show","hide"]})],r.prototype,"listMode",void 0),o([a()],r.prototype,"minScale",null),o([a()],r.prototype,"routeInfo",null),o([a()],r.prototype,"stops",null),o([a({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),r=o([C("esri.layers.RouteLayer")],r);const F=r;export{F as default};
