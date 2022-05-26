import{e as s,d as i,aW as P,cK as n,cL as N,ch as k,h as m,i as A,J as j,dd as w,r as x,n as J,k as O,x as q,cN as F,v as I,C as K,cO as C}from"./main.5d410746.js";import{a as E,u as d,d as L,b as M,p as Q,o as T}from"./networkService.980f87e2.js";import"./GPMessage.9fab60c7.js";function h(r){return r.features.map(e=>{const c=O.fromJSON(r.spatialReference),o=m.fromJSON(e);return q(o.geometry).spatialReference=c,o})}function B(r){return w(r.features.map(e=>(x(e.geometry)&&(e.geometry.spatialReference=r.spatialReference),J(e.geometry))))}let t=class extends j{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(r){return B(r)}readPointBarriers(r,e){return B(e.barriers)}readPolylineBarriers(r){return B(r)}readPolygonBarriers(r){return B(r)}readIncidents(r,e){return h(e.saPolylines)}readServiceAreaPolygons(r,e){return h(e.saPolygons)}};s([i({type:[P]})],t.prototype,"facilities",void 0),s([n("facilities")],t.prototype,"readFacilities",null),s([i({type:[E]})],t.prototype,"messages",void 0),s([i({type:[P]})],t.prototype,"pointBarriers",void 0),s([n("pointBarriers",["barriers"])],t.prototype,"readPointBarriers",null),s([i({type:[N]})],t.prototype,"polylineBarriers",void 0),s([n("polylineBarriers")],t.prototype,"readPolylineBarriers",null),s([i({type:[k]})],t.prototype,"polygonBarriers",void 0),s([n("polygonBarriers")],t.prototype,"readPolygonBarriers",null),s([i({type:[m]})],t.prototype,"serviceAreaPolylines",void 0),s([n("serviceAreaPolylines",["saPolylines"])],t.prototype,"readIncidents",null),s([i({type:[m]})],t.prototype,"serviceAreaPolygons",void 0),s([n("serviceAreaPolygons",["saPolygons"])],t.prototype,"readServiceAreaPolygons",null),t=s([A("esri.rest.support.ServiceAreaSolveResult")],t);const V=t,W=T({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function Z(r,e,c){const o=[],p=[],l={},u={},g=F(r),{path:v}=g;e.facilities&&e.facilities.features&&d(e.facilities.features,p,"facilities.features",l),e.pointBarriers&&e.pointBarriers.features&&d(e.pointBarriers.features,p,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&d(e.polylineBarriers.features,p,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&d(e.polygonBarriers.features,p,"polygonBarriers.features",l);const $=await I(p);for(const a in l){const y=l[a];o.push(a),u[a]=$.slice(y[0],y[1])}if(L(u,o)){let a=null;try{a=await M(v,e.apiKey,c)}catch{}a&&!a.hasZ&&Q(u,o)}for(const a in u)u[a].forEach((y,R)=>{e.get(a)[R].geometry=y});const S={...c,query:{...g.query,...W.toQueryParams(e),f:"json"}},{data:b}=await K(`${v}/solveServiceArea`,S);return V.fromJSON(b)}let f=class extends C{constructor(r){super(r),this.url=null}solve(r,e){return Z(this.url,r,e)}};s([i()],f.prototype,"url",void 0),f=s([A("esri.tasks.ServiceAreaTask")],f);const H=f;export{H as default};
