import{e as i,d as a,aZ as B,cN as u,cO as A,ck as S,h as v,i as b,N as F,cP as k,p as C,r as O,cQ as j,v as w,C as J,cR as x}from"./main.54285943.js";import{c as T,a as q,u as c,d as I,b as Q,p as Z,o as E}from"./networkService.850013be.js";import"./GPMessage.2fb0417f.js";function K(r){return r.features.map(e=>{const d=C.fromJSON(r.spatialReference),o=v.fromJSON(e);return O(o.geometry)&&(o.geometry.spatialReference=d),o})}function y(r){return k.fromJSON(r).features.map(e=>e.geometry)}let t=class extends F{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(r){return y(r)}readIncidents(r){return y(r)}readPointBarriers(r,e){return y(e.barriers)}readPolylineBarriers(r){return y(r)}readPolygonBarriers(r){return y(r)}readRoutes(r){return K(r)}};i([a({type:[T]})],t.prototype,"directions",void 0),i([a({type:[B]})],t.prototype,"facilities",void 0),i([u("facilities")],t.prototype,"readFacilities",null),i([a({type:[B]})],t.prototype,"incidents",void 0),i([u("incidents")],t.prototype,"readIncidents",null),i([a({type:[q]})],t.prototype,"messages",void 0),i([a({type:[B]})],t.prototype,"pointBarriers",void 0),i([u("pointBarriers",["barriers"])],t.prototype,"readPointBarriers",null),i([a({type:[A]})],t.prototype,"polylineBarriers",void 0),i([u("polylineBarriers")],t.prototype,"readPolylineBarriers",null),i([a({type:[S]})],t.prototype,"polygonBarriers",void 0),i([u("polygonBarriers")],t.prototype,"readPolygonBarriers",null),i([a({type:[v]})],t.prototype,"routes",void 0),i([u("routes")],t.prototype,"readRoutes",null),t=i([b("esri.rest.support.ClosestFacilitySolveResult")],t);const M=t,V=E({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function z(r,e,d){const o=[],l=[],n={},p={},g=j(r),{path:h}=g;e.incidents&&e.incidents.features&&c(e.incidents.features,l,"incidents.features",n),e.facilities&&e.facilities.features&&c(e.facilities.features,l,"facilities.features",n),e.pointBarriers&&e.pointBarriers.features&&c(e.pointBarriers.features,l,"pointBarriers.features",n),e.polylineBarriers&&e.polylineBarriers.features&&c(e.polylineBarriers.features,l,"polylineBarriers.features",n),e.polygonBarriers&&e.polygonBarriers.features&&c(e.polygonBarriers.features,l,"polygonBarriers.features",n);const $=await w(l);for(const s in n){const f=n[s];o.push(s),p[s]=$.slice(f[0],f[1])}if(I(p,o)){let s=null;try{s=await Q(h,e.apiKey,d)}catch{}s&&!s.hasZ&&Z(p,o)}for(const s in p)p[s].forEach((f,P)=>{e.get(s)[P].geometry=f});const R={...d,query:{...g.query,...V.toQueryParams(e),f:"json"}},{data:N}=await J(`${h}/solveClosestFacility`,R);return M.fromJSON(N)}let m=class extends x{constructor(r){super(r),this.url=null}solve(r,e){return z(this.url,r,e)}};i([a()],m.prototype,"url",void 0),m=i([b("esri.tasks.ClosestFacilityTask")],m);const L=m;export{L as default};
