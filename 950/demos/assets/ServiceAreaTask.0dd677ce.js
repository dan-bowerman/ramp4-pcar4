import{e as s,d as i,aZ as P,cN as n,cO as N,ck as k,h as g,i as h,N as j,dg as w,r as O,u as x,p as J,A as q,cQ as F,v as I,C as Q,cR as Z}from"./main.5d3fa3f4.js";import{a as C,u as d,d as E,b as K,p as M,o as T}from"./networkService.b3078d3b.js";import"./GPMessage.4fbaf9e9.js";function A(r){return r.features.map(e=>{const c=J.fromJSON(r.spatialReference),o=g.fromJSON(e);return q(o.geometry).spatialReference=c,o})}function B(r){return w(r.features.map(e=>(O(e.geometry)&&(e.geometry.spatialReference=r.spatialReference),x(e.geometry))))}let t=class extends j{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(r){return B(r)}readPointBarriers(r,e){return B(e.barriers)}readPolylineBarriers(r){return B(r)}readPolygonBarriers(r){return B(r)}readIncidents(r,e){return A(e.saPolylines)}readServiceAreaPolygons(r,e){return A(e.saPolygons)}};s([i({type:[P]})],t.prototype,"facilities",void 0),s([n("facilities")],t.prototype,"readFacilities",null),s([i({type:[C]})],t.prototype,"messages",void 0),s([i({type:[P]})],t.prototype,"pointBarriers",void 0),s([n("pointBarriers",["barriers"])],t.prototype,"readPointBarriers",null),s([i({type:[N]})],t.prototype,"polylineBarriers",void 0),s([n("polylineBarriers")],t.prototype,"readPolylineBarriers",null),s([i({type:[k]})],t.prototype,"polygonBarriers",void 0),s([n("polygonBarriers")],t.prototype,"readPolygonBarriers",null),s([i({type:[g]})],t.prototype,"serviceAreaPolylines",void 0),s([n("serviceAreaPolylines",["saPolylines"])],t.prototype,"readIncidents",null),s([i({type:[g]})],t.prototype,"serviceAreaPolygons",void 0),s([n("serviceAreaPolygons",["saPolygons"])],t.prototype,"readServiceAreaPolygons",null),t=s([h("esri.rest.support.ServiceAreaSolveResult")],t);const V=t,z=T({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function D(r,e,c){const o=[],p=[],l={},u={},m=F(r),{path:v}=m;e.facilities&&e.facilities.features&&d(e.facilities.features,p,"facilities.features",l),e.pointBarriers&&e.pointBarriers.features&&d(e.pointBarriers.features,p,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&d(e.polylineBarriers.features,p,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&d(e.polygonBarriers.features,p,"polygonBarriers.features",l);const $=await I(p);for(const a in l){const y=l[a];o.push(a),u[a]=$.slice(y[0],y[1])}if(E(u,o)){let a=null;try{a=await K(v,e.apiKey,c)}catch{}a&&!a.hasZ&&M(u,o)}for(const a in u)u[a].forEach((y,R)=>{e.get(a)[R].geometry=y});const S={...c,query:{...m.query,...z.toQueryParams(e),f:"json"}},{data:b}=await Q(`${v}/solveServiceArea`,S);return V.fromJSON(b)}let f=class extends Z{constructor(r){super(r),this.url=null}solve(r,e){return D(this.url,r,e)}};s([i()],f.prototype,"url",void 0),f=s([h("esri.tasks.ServiceAreaTask")],f);const U=f;export{U as default};
