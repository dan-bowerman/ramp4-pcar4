import{e as i,d as a,aY as B,cM as u,cN as A,cj as S,h as v,i as b,N as F,cO as j,p as C,r as O,cP as k,v as w,C as J,cQ as x}from"./main.a76a9de0.js";import{c as T,a as q,u as c,d as I,b as M,p as Q,o as E}from"./networkService.c1b79fa4.js";import"./GPMessage.3c7feded.js";function K(r){return r.features.map(e=>{const d=C.fromJSON(r.spatialReference),o=v.fromJSON(e);return O(o.geometry)&&(o.geometry.spatialReference=d),o})}function y(r){return j.fromJSON(r).features.map(e=>e.geometry)}let t=class extends F{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(r){return y(r)}readIncidents(r){return y(r)}readPointBarriers(r,e){return y(e.barriers)}readPolylineBarriers(r){return y(r)}readPolygonBarriers(r){return y(r)}readRoutes(r){return K(r)}};i([a({type:[T]})],t.prototype,"directions",void 0),i([a({type:[B]})],t.prototype,"facilities",void 0),i([u("facilities")],t.prototype,"readFacilities",null),i([a({type:[B]})],t.prototype,"incidents",void 0),i([u("incidents")],t.prototype,"readIncidents",null),i([a({type:[q]})],t.prototype,"messages",void 0),i([a({type:[B]})],t.prototype,"pointBarriers",void 0),i([u("pointBarriers",["barriers"])],t.prototype,"readPointBarriers",null),i([a({type:[A]})],t.prototype,"polylineBarriers",void 0),i([u("polylineBarriers")],t.prototype,"readPolylineBarriers",null),i([a({type:[S]})],t.prototype,"polygonBarriers",void 0),i([u("polygonBarriers")],t.prototype,"readPolygonBarriers",null),i([a({type:[v]})],t.prototype,"routes",void 0),i([u("routes")],t.prototype,"readRoutes",null),t=i([b("esri.rest.support.ClosestFacilitySolveResult")],t);const V=t,Y=E({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function Z(r,e,d){const o=[],l=[],n={},p={},g=k(r),{path:h}=g;e.incidents&&e.incidents.features&&c(e.incidents.features,l,"incidents.features",n),e.facilities&&e.facilities.features&&c(e.facilities.features,l,"facilities.features",n),e.pointBarriers&&e.pointBarriers.features&&c(e.pointBarriers.features,l,"pointBarriers.features",n),e.polylineBarriers&&e.polylineBarriers.features&&c(e.polylineBarriers.features,l,"polylineBarriers.features",n),e.polygonBarriers&&e.polygonBarriers.features&&c(e.polygonBarriers.features,l,"polygonBarriers.features",n);const $=await w(l);for(const s in n){const f=n[s];o.push(s),p[s]=$.slice(f[0],f[1])}if(I(p,o)){let s=null;try{s=await M(h,e.apiKey,d)}catch{}s&&!s.hasZ&&Q(p,o)}for(const s in p)p[s].forEach((f,R)=>{e.get(s)[R].geometry=f});const N={...d,query:{...g.query,...Y.toQueryParams(e),f:"json"}},{data:P}=await J(`${h}/solveClosestFacility`,N);return V.fromJSON(P)}let m=class extends x{constructor(r){super(r),this.url=null}solve(r,e){return Z(this.url,r,e)}};i([a()],m.prototype,"url",void 0),m=i([b("esri.tasks.ClosestFacilityTask")],m);const H=m;export{H as default};
