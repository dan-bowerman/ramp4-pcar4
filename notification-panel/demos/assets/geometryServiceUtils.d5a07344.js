import{$ as c,s as o,B as s,ja as u,jb as g}from"./main.c52d903d.js";async function f(e=null,l){var i,t;if(c.geometryServiceUrl)return c.geometryServiceUrl;if(!e)throw new o("internal:geometry-service-url-not-configured");let n;n="portal"in e?e.portal||s.getDefault():e,await n.load({signal:l});const r=(i=n.helperServices)==null||(t=i.geometry)==null?void 0:t.url;if(!r)throw new o("internal:geometry-service-url-not-configured");return r}async function y(e,l,i=null,t){const n=await f(i,t),r=new u;r.geometries=[e],r.outSpatialReference=l;const a=await g(n,r,{signal:t});if(a&&Array.isArray(a)&&a.length===1)return a[0];throw new o("internal:geometry-service-projection-failed")}export{f as getGeometryServiceURL,y as projectGeometry};
