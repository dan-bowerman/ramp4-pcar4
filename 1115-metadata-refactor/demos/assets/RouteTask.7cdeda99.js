import{cP as g,v as A,C as h,e as $,i as v,cQ as w}from"./main.bf5b0f8f.js";import{u,d as N,b as R,p as k,f as P,o as S}from"./networkService.ec4b6213.js";import"./GPMessage.1a2cbfc9.js";const T=S({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:t=>t.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function j(t,e,f){const p=[],a=[],s={},i={},m=g(t),{path:o}=m;e.stops&&e.stops.features&&u(e.stops.features,a,"stops.features",s),e.pointBarriers&&e.pointBarriers.features&&u(e.pointBarriers.features,a,"pointBarriers.features",s),e.polylineBarriers&&e.polylineBarriers.features&&u(e.polylineBarriers.features,a,"polylineBarriers.features",s),e.polygonBarriers&&e.polygonBarriers.features&&u(e.polygonBarriers.features,a,"polygonBarriers.features",s);const l=await A(a);for(const r in s){const n=s[r];p.push(r),i[r]=l.slice(n[0],n[1])}if(N(i,p)){let r=null;try{r=await R(o,e.apiKey,f)}catch{}r&&!r.hasZ&&k(i,p)}for(const r in i)i[r].forEach((n,d)=>{e.get(r)[d].geometry=n});const y={...f,query:{...m.query,...T.toQueryParams(e),f:"json"}},B=o.endsWith("/solve")?o:`${o}/solve`,b=await h(B,y);return P(b)}let c=class extends w{constructor(t){super(t)}solve(t,e){return j(this.url,t,e)}};c=$([v("esri.tasks.RouteTask")],c);const C=c;export{C as default};
