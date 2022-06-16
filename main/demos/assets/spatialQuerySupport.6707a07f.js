import{o as x,bq as p,g6 as j,v as D,u as J,f as w,g7 as V,g8 as B,bd as Z,fR as _,_ as F,r as z,bt as L,bu as G,g9 as W,ga as $,bv as Y,gb as k,gc as H,gd as K,ge as Q,bi as v,cH as N,bh as R,dq as X,gf as ee,s as S,c4 as M,bo as te}from"./main.33556030.js";import{f as I,g as T}from"./projectionSupport.207ec2c1.js";function ve(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:i}=e;let s=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(r&&i)t.forEach(l=>{const a=n.getAttribute(l,r),u=n.getAttribute(l,i);a==null||isNaN(a)||(s=Math.min(s,a)),u==null||isNaN(u)||(o=Math.max(o,u))});else{const l=r||i;t.forEach(a=>{const u=n.getAttribute(a,l);u==null||isNaN(u)||(s=Math.min(s,u),o=Math.max(o,u))})}return{start:s,end:o}}function be(e,t,n){if(!t||!e)return null;const{startTimeField:r,endTimeField:i}=e;if(!r&&!i)return null;const{start:s,end:o}=t;return s===null&&o===null?null:s===void 0&&o===void 0?ne():r&&i?re(n,r,i,s,o):ie(n,r||i,s,o)}function re(e,t,n,r,i){return r!=null&&i!=null?s=>{const o=e.getAttribute(s,t),l=e.getAttribute(s,n);return(o==null||o<=i)&&(l==null||l>=r)}:r!=null?s=>{const o=e.getAttribute(s,n);return o==null||o>=r}:i!=null?s=>{const o=e.getAttribute(s,t);return o==null||o<=i}:void 0}function ie(e,t,n,r){return n!=null&&r!=null&&n===r?i=>e.getAttribute(i,t)===n:n!=null&&r!=null?i=>{const s=e.getAttribute(i,t);return s>=n&&s<=r}:n!=null?i=>e.getAttribute(i,t)>=n:r!=null?i=>e.getAttribute(i,t)<=r:void 0}function ne(){return()=>!1}const se=new x({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),A=Object.freeze({}),E=new p,oe=new p,b=new p,d={esriGeometryPoint:$,esriGeometryPolyline:Y,esriGeometryPolygon:k,esriGeometryMultipoint:H};function we(e,t,n,r=e.hasZ,i=e.hasM){if(w(t))return null;const s=e.hasZ&&r,o=e.hasM&&i;if(n){const l=G(b,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,i);return $(l,s,o)}return $(t,s,o)}function y(e,t,n,r,i,s,o=t,l=n){const a=t&&o,u=n&&l,c=z(r)?"coords"in r?r:r.geometry:null;if(w(c))return null;if(i){let f=L(oe,c,t,n,e,i,o,l);return s&&(f=G(b,f,a,u,e,s)),d[e](f,a,u)}if(s){const f=G(b,c,t,n,e,s,o,l);return d[e](f,a,u)}return W(E,c,t,n,o,l),d[e](E,a,u)}async function Ie(e,t,n){const{outFields:r,orderByFields:i,groupByFieldsForStatistics:s,outStatistics:o}=e;if(r)for(let l=0;l<r.length;l++)r[l]=r[l].trim();if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(s)for(let l=0;l<s.length;l++)s[l]=s[l].trim();if(o)for(let l=0;l<o.length;l++)o[l].onStatisticField&&(o[l].onStatisticField=o[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),le(e,t,n)}async function le(e,t,n){if(!e)return null;let{where:r}=e;if(e.where=r=r&&r.trim(),(!r||/^1 *= *1$/.test(r)||t&&t===r)&&(e.where=null),!e.geometry)return e;let i=await ae(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:a}=e.geometry;i=j(i),i.spatialReference=a}e.geometry=i,await I(i.spatialReference,n);const s=(await D(J(i)))[0];if(w(s))throw A;const o=s.toJSON(),l=await T(o,o.spatialReference,n);if(!l)throw A;return l.spatialReference=n,e.geometry=l,e}async function ae(e){const{geometry:t,distance:n,units:r}=e;if(n==null||"vertexAttributes"in t)return t;const i=t.spatialReference,s=r?se.fromJSON(r):V(i),o=i&&(B(i)||Z(i))?t:await I(i,_).then(()=>T(t,_));return(await ue())(o.spatialReference,o,n,s)}async function ue(){return(await F(()=>import("./geometryEngineJSON.1787cb60.js"),["assets/geometryEngineJSON.1787cb60.js","assets/geometryEngineBase.fd888c07.js","assets/geometryEngineJSON.d8a905b4.js","assets/json.2d0d6862.js"])).geodesicBuffer}function Pe(e){return e&&U in e?JSON.parse(JSON.stringify(e,ce)):e}const U="_geVersion",ce=(e,t)=>e!==U?t:void 0;function fe(e){return e==="mesh"?K:Q(e)}function O(e,t){return e?t?4:3:t?3:2}function pe(e,t,n,r){return q(e,t,n,r.coords[0],r.coords[1])}function me(e,t,n,r,i,s){const o=O(i,s),{coords:l,lengths:a}=r;if(!a)return!1;for(let u=0,c=0;u<a.length;u++,c+=o)if(!q(e,t,n,l[c],l[c+1]))return!1;return!0}function q(e,t,n,r,i){if(!e)return!1;const s=O(t,n),{coords:o,lengths:l}=e;let a=!1,u=0;for(const c of l)a=ye(a,o,s,u,c,r,i),u+=c*s;return a}function ye(e,t,n,r,i,s,o){let l=e,a=r;for(let u=r,c=r+i*n;u<c;u+=n){a=u+n,a===c&&(a=r);const f=t[u],m=t[u+1],C=t[a],g=t[a+1];(m<o&&g>=o||g<o&&m>=o)&&f+(o-m)/(g-m)*(C-f)<s&&(l=!l)}return l}const h="feature-store:unsupported-query",Re={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},P={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function ge(e){return P.spatialRelationship[e]===!0}function Se(e){return P.queryGeometry[te(e)]===!0}function de(e){return P.layerGeometry[e]===!0}function he(){return F(()=>import("./geometryEngineJSON.1787cb60.js"),["assets/geometryEngineJSON.1787cb60.js","assets/geometryEngineBase.fd888c07.js","assets/geometryEngineJSON.d8a905b4.js","assets/json.2d0d6862.js"])}function _e(e,t,n,r,i){if(v(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const s=N(new p,t,!1,!1);return Promise.resolve(o=>pe(s,!1,!1,o))}if(v(t)&&n==="esriGeometryMultipoint"){const s=N(new p,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(o=>me(s,!1,!1,o,r,i))}if(R(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(s=>X(t,y(n,r,i,s)));if(R(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(s=>ee(t,y(n,r,i,s)));if(R(t)&&e==="esriSpatialRelIntersects"){const s=fe(n);return Promise.resolve(o=>s(t,y(n,r,i,o)))}return he().then(s=>{const o=s[Re[e]].bind(null,t.spatialReference,t);return l=>o(y(n,r,i,l))})}async function Ne(e,t,n){const{spatialRel:r,geometry:i}=e;if(i){if(!ge(r))throw new S(h,"Unsupported query spatial relationship",{query:e});if(M(i.spatialReference)&&M(n)){if(!Se(i))throw new S(h,"Unsupported query geometry type",{query:e});if(!de(t))throw new S(h,"Unsupported layer geometry type",{query:e});if(e.outSR)return I(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function Me(e){if(R(e))return!0;if(v(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}export{Me as I,y as J,we as O,Ie as P,A as U,le as Z,Ne as a,be as n,ve as t,_e as v,Pe as z};
