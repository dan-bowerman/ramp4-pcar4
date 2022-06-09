import{o as q,bp as p,g6 as x,v as j,u as J,f as v,g7 as B,g8 as Z,bc as z,fR as N,r as D,bs as V,bt as G,g9 as W,ga as $,bu as Y,gb as k,gc as K,gd as H,ge as L,bh as b,cG as M,bg as R,dp as Q,gf as X,s as S,c3 as F,bn as ee}from"./main.805a311c.js";import{f as I,g as E}from"./projectionSupport.3e481074.js";function $e(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:i}=e;let s=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&i)t.forEach(o=>{const a=n.getAttribute(o,r),u=n.getAttribute(o,i);a==null||isNaN(a)||(s=Math.min(s,a)),u==null||isNaN(u)||(l=Math.max(l,u))});else{const o=r||i;t.forEach(a=>{const u=n.getAttribute(a,o);u==null||isNaN(u)||(s=Math.min(s,u),l=Math.max(l,u))})}return{start:s,end:l}}function be(e,t,n){if(!t||!e)return null;const{startTimeField:r,endTimeField:i}=e;if(!r&&!i)return null;const{start:s,end:l}=t;return s===null&&l===null?null:s===void 0&&l===void 0?ie():r&&i?te(n,r,i,s,l):re(n,r||i,s,l)}function te(e,t,n,r,i){return r!=null&&i!=null?s=>{const l=e.getAttribute(s,t),o=e.getAttribute(s,n);return(l==null||l<=i)&&(o==null||o>=r)}:r!=null?s=>{const l=e.getAttribute(s,n);return l==null||l>=r}:i!=null?s=>{const l=e.getAttribute(s,t);return l==null||l<=i}:void 0}function re(e,t,n,r){return n!=null&&r!=null&&n===r?i=>e.getAttribute(i,t)===n:n!=null&&r!=null?i=>{const s=e.getAttribute(i,t);return s>=n&&s<=r}:n!=null?i=>e.getAttribute(i,t)>=n:r!=null?i=>e.getAttribute(i,t)<=r:void 0}function ie(){return()=>!1}const ne=new q({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),A=Object.freeze({}),U=new p,se=new p,w=new p,d={esriGeometryPoint:$,esriGeometryPolyline:Y,esriGeometryPolygon:k,esriGeometryMultipoint:K};function we(e,t,n,r=e.hasZ,i=e.hasM){if(v(t))return null;const s=e.hasZ&&r,l=e.hasM&&i;if(n){const o=G(w,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,i);return $(o,s,l)}return $(t,s,l)}function y(e,t,n,r,i,s,l=t,o=n){const a=t&&l,u=n&&o,c=D(r)?"coords"in r?r:r.geometry:null;if(v(c))return null;if(i){let f=V(se,c,t,n,e,i,l,o);return s&&(f=G(w,f,a,u,e,s)),d[e](f,a,u)}if(s){const f=G(w,c,t,n,e,s,l,o);return d[e](f,a,u)}return W(U,c,t,n,l,o),d[e](U,a,u)}async function ve(e,t,n){const{outFields:r,orderByFields:i,groupByFieldsForStatistics:s,outStatistics:l}=e;if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(l)for(let o=0;o<l.length;o++)l[o].onStatisticField&&(l[o].onStatisticField=l[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),le(e,t,n)}async function le(e,t,n){if(!e)return null;let{where:r}=e;if(e.where=r=r&&r.trim(),(!r||/^1 *= *1$/.test(r)||t&&t===r)&&(e.where=null),!e.geometry)return e;let i=await oe(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:a}=e.geometry;i=x(i),i.spatialReference=a}e.geometry=i,await I(i.spatialReference,n);const s=(await j(J(i)))[0];if(v(s))throw A;const l=s.toJSON(),o=await E(l,l.spatialReference,n);if(!o)throw A;return o.spatialReference=n,e.geometry=o,e}async function oe(e){const{geometry:t,distance:n,units:r}=e;if(n==null||"vertexAttributes"in t)return t;const i=t.spatialReference,s=r?ne.fromJSON(r):B(i),l=i&&(Z(i)||z(i))?t:await I(i,N).then(()=>E(t,N));return(await ae())(l.spatialReference,l,n,s)}async function ae(){return(await import("./geometryEngineJSON.1787cb60.js")).geodesicBuffer}function Ie(e){return e&&T in e?JSON.parse(JSON.stringify(e,ue)):e}const T="_geVersion",ue=(e,t)=>e!==T?t:void 0;function ce(e){return e==="mesh"?H:L(e)}function _(e,t){return e?t?4:3:t?3:2}function fe(e,t,n,r){return C(e,t,n,r.coords[0],r.coords[1])}function pe(e,t,n,r,i,s){const l=_(i,s),{coords:o,lengths:a}=r;if(!a)return!1;for(let u=0,c=0;u<a.length;u++,c+=l)if(!C(e,t,n,o[c],o[c+1]))return!1;return!0}function C(e,t,n,r,i){if(!e)return!1;const s=_(t,n),{coords:l,lengths:o}=e;let a=!1,u=0;for(const c of o)a=me(a,l,s,u,c,r,i),u+=c*s;return a}function me(e,t,n,r,i,s,l){let o=e,a=r;for(let u=r,c=r+i*n;u<c;u+=n){a=u+n,a===c&&(a=r);const f=t[u],m=t[u+1],O=t[a],g=t[a+1];(m<l&&g>=l||g<l&&m>=l)&&f+(l-m)/(g-m)*(O-f)<s&&(o=!o)}return o}const h="feature-store:unsupported-query",ye={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},P={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Re(e){return P.spatialRelationship[e]===!0}function ge(e){return P.queryGeometry[ee(e)]===!0}function Se(e){return P.layerGeometry[e]===!0}function de(){return import("./geometryEngineJSON.1787cb60.js")}function Pe(e,t,n,r,i){if(b(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const s=M(new p,t,!1,!1);return Promise.resolve(l=>fe(s,!1,!1,l))}if(b(t)&&n==="esriGeometryMultipoint"){const s=M(new p,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>pe(s,!1,!1,l,r,i))}if(R(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(s=>Q(t,y(n,r,i,s)));if(R(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(s=>X(t,y(n,r,i,s)));if(R(t)&&e==="esriSpatialRelIntersects"){const s=ce(n);return Promise.resolve(l=>s(t,y(n,r,i,l)))}return de().then(s=>{const l=s[ye[e]].bind(null,t.spatialReference,t);return o=>l(y(n,r,i,o))})}async function Ne(e,t,n){const{spatialRel:r,geometry:i}=e;if(i){if(!Re(r))throw new S(h,"Unsupported query spatial relationship",{query:e});if(F(i.spatialReference)&&F(n)){if(!ge(i))throw new S(h,"Unsupported query geometry type",{query:e});if(!Se(t))throw new S(h,"Unsupported layer geometry type",{query:e});if(e.outSR)return I(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function Me(e){if(R(e))return!0;if(b(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}export{Me as I,y as J,we as O,ve as P,A as U,le as Z,Ne as a,be as n,$e as t,Pe as v,Ie as z};
