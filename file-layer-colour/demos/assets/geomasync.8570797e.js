import{ec as s,dU as g,dB as l,dM as v,dL as z,dO as p,dX as y,ea as N,M as x,cO as I,em as M,dW as c,ef as J,ee as Z,eg as k,aZ as $,dJ as E,ck as F,eh as X,dK as B,dw as L,u as j,dI as H,cK as D}from"./main.e7277a66.js";import{c as m,d as b,h as d,l as Q,i as Y,j as _,k as O}from"./arcadeUtils.0e5720c4.js";import{S as nn,g as tn,A as en,w as rn,x as un,p as on,O as an,d as sn,h as fn,j as cn,k as ln,R as gn,E as dn,l as hn,y as wn,W,K as G,F as S,M as P,m as mn,P as K,U as q,G as An,V as pn,b as yn,I as En,q as C,J as T,v as In}from"./geometryEngineAsync.95e8aadc.js";import"./FeatureSetReader.f6c9c4af.js";import"./centroid.613b8198.js";function U(t){return X.indexOf("4.")===0?F.fromExtent(t):new F({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function A(t){if(g(t,2,2),!(t[0]instanceof l&&t[1]instanceof l)){if(!(t[0]instanceof l&&t[1]===null)){if(!(t[1]instanceof l&&t[0]===null)){if(t[0]!==null||t[1]!==null)throw new Error("Illegal Argument")}}}}function V(t,r){if(t.type!=="polygon"&&t.type!=="polyline"&&t.type!=="extent")return H(0);let i=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(i=_(t.spatialReference)/D(t.spatialReference));let o=0;if(t.type==="polyline")for(const n of t.paths)for(let e=1;e<n.length;e++)o+=O(n[e],n[e-1],i);else if(t.type==="polygon")for(const n of t.rings){for(let e=1;e<n.length;e++)o+=O(n[e],n[e-1],i);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(o+=O(n[0],n[n.length-1],i))}else t.type==="extent"&&(o+=2*O([t.xmin,t.ymin,0],[t.xmax,t.ymin,0],i),o+=2*O([t.xmin,t.ymin,0],[t.xmin,t.ymax,0],i),o*=2,o+=4*Math.abs(c(t.zmax,0)*i-c(t.zmin,0)*i));const a=new I({hasZ:!1,hasM:!1,spatialReference:t.spatialReference,paths:[[0,0],[0,o]]});return S(a,r)}function $n(t){t.mode==="async"&&(t.functions.disjoint=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]===null||n[1]===null||nn(n[0],n[1])})},t.functions.intersects=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&tn(n[0],n[1])})},t.functions.touches=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&en(n[0],n[1])})},t.functions.crosses=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&rn(n[0],n[1])})},t.functions.within=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&un(n[0],n[1])})},t.functions.contains=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&on(n[0],n[1])})},t.functions.overlaps=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&an(n[0],n[1])})},t.functions.equals=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return g(n,2,2),n[0]===n[1]||(n[0]instanceof l&&n[1]instanceof l?sn(n[0],n[1]):!(!v(n[0])||!v(n[1]))&&n[0].getTime()===n[1].getTime())})},t.functions.relate=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,3,3),n[0]instanceof l&&n[1]instanceof l)return fn(n[0],n[1],z(n[2]));if(n[0]instanceof l&&n[1]===null||n[1]instanceof l&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new Error("Illegal Argument")})},t.functions.intersection=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]===null||n[1]===null?null:cn(n[0],n[1])})},t.functions.union=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){const e=[];if((n=s(n)).length===0)throw new Error("Function called with wrong number of Parameters");if(n.length===1)if(p(n[0])){const u=s(n[0]);for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof l))throw new Error("Illegal Argument");e.push(u[f])}}else{if(!y(n[0])){if(n[0]instanceof l)return N(m(n[0]),r.spatialReference);if(n[0]===null)return null;throw new Error("Illegal Argument")}{const u=s(n[0].toArray());for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof l))throw new Error("Illegal Argument");e.push(u[f])}}}else for(let u=0;u<n.length;u++)if(n[u]!==null){if(!(n[u]instanceof l))throw new Error("Illegal Argument");e.push(n[u])}return e.length===0?null:ln(e)})},t.functions.difference=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]===null?m(n[0]):n[0]===null?null:gn(n[0],n[1])})},t.functions.symmetricdifference=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]===null&&n[1]===null?null:n[0]===null?m(n[1]):n[1]===null?m(n[0]):dn(n[0],n[1])})},t.functions.clip=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,2),!(n[1]instanceof x)&&n[1]!==null)throw new Error("Illegal Argument");if(n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[1]===null?null:hn(n[0],n[1])})},t.functions.cut=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,2),!(n[1]instanceof I)&&n[1]!==null)throw new Error("Illegal Argument");if(n[0]===null)return[];if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[1]===null?[m(n[0])]:wn(n[0],n[1])})},t.functions.area=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(M(n[0]))return n[0].sumArea(b(c(n[1],-1)),!1,r.abortSignal).then(e=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(p(n[0])||y(n[0])){const e=J(n[0],r.spatialReference);return e===null?0:W(e,b(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return W(n[0],b(c(n[1],-1)))})},t.functions.areageodetic=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(M(n[0]))return n[0].sumArea(b(c(n[1],-1)),!0,r.abortSignal).then(e=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(p(n[0])||y(n[0])){const e=J(n[0],r.spatialReference);return e===null?0:G(e,b(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return G(n[0],b(c(n[1],-1)))})},t.functions.length=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(M(n[0]))return n[0].sumLength(d(c(n[1],-1)),!1,r.abortSignal).then(e=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(p(n[0])||y(n[0])){const e=Z(n[0],r.spatialReference);return e===null?0:S(e,d(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return S(n[0],d(c(n[1],-1)))})},t.functions.length3d=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(p(n[0])||y(n[0])){const e=Z(n[0],r.spatialReference);return e===null?0:e.hasZ===!0?V(e,d(c(n[1],-1))):S(e,d(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[0].hasZ===!0?V(n[0],d(c(n[1],-1))):S(n[0],d(c(n[1],-1)))})},t.functions.lengthgeodetic=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(M(n[0]))return n[0].sumLength(d(c(n[1],-1)),!0,r.abortSignal).then(e=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(p(n[0])||y(n[0])){const e=Z(n[0],r.spatialReference);return e===null?0:P(e,d(c(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return P(n[0],d(c(n[1],-1)))})},t.functions.distance=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){n=s(n),g(n,2,3);let e=n[0];(p(n[0])||y(n[0]))&&(e=k(n[0],r.spatialReference));let u=n[1];if((p(n[1])||y(n[1]))&&(u=k(n[1],r.spatialReference)),!(e instanceof l))throw new Error("Illegal Argument");if(!(u instanceof l))throw new Error("Illegal Argument");return mn(e,u,d(c(n[2],-1)))})},t.functions.distancegeodetic=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){n=s(n),g(n,2,3);const e=n[0],u=n[1];if(!(e instanceof $))throw new Error("Illegal Argument");if(!(u instanceof $))throw new Error("Illegal Argument");const f=new I({paths:[],spatialReference:e.spatialReference});return f.addPath([e,u]),P(f,d(c(n[2],-1)))})},t.functions.densify=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return n[0]instanceof F||n[0]instanceof I?K(n[0],e,d(c(n[2],-1))):n[0]instanceof x?K(U(n[0]),e,d(c(n[2],-1))):n[0]})},t.functions.densifygeodetic=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return n[0]instanceof F||n[0]instanceof I?q(n[0],e,d(c(n[2],-1))):n[0]instanceof x?q(U(n[0]),e,d(c(n[2],-1))):n[0]})},t.functions.generalize=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,4),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return An(n[0],e,B(c(n[2],!0)),d(c(n[3],-1)))})},t.functions.buffer=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return e===0?m(n[0]):pn(n[0],e,d(c(n[2],-1)))})},t.functions.buffergeodetic=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return e===0?m(n[0]):yn(n[0],e,d(c(n[2],-1)))})},t.functions.offset=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,6),n[0]===null)return null;if(!(n[0]instanceof F||n[0]instanceof I))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");const u=E(c(n[4],10));if(isNaN(u))throw new Error("Illegal Argument");const f=E(c(n[5],0));if(isNaN(f))throw new Error("Illegal Argument");return En(n[0],e,d(c(n[2],-1)),z(c(n[3],"round")).toLowerCase(),u,f)})},t.functions.rotate=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){n=s(n),g(n,2,3);let e=n[0];if(e===null)return null;if(!(e instanceof l))throw new Error("Illegal Argument");e instanceof x&&(e=F.fromExtent(e));const u=E(n[1]);if(isNaN(u))throw new Error("Illegal Argument");const f=c(n[2],null);if(f===null)return C(e,u);if(f instanceof $)return C(e,u,f);throw new Error("Illegal Argument")})},t.functions.centroid=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return null;let e=n[0];if((p(n[0])||y(n[0]))&&(e=k(n[0],r.spatialReference)),e===null)return null;if(!(e instanceof l))throw new Error("Illegal Argument");return e instanceof $?N(m(n[0]),r.spatialReference):e instanceof F?e.centroid:e instanceof I?Q(e):e instanceof L?Y(e):e instanceof x?e.center:null})},t.functions.multiparttosinglepart=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){n=s(n),g(n,1,1);const e=[];if(n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[0]instanceof $?[N(m(n[0]),r.spatialReference)]:n[0]instanceof x?[N(m(n[0]),r.spatialReference)]:T(n[0]).then(u=>{if(u instanceof F){const f=[],w=[];for(let h=0;h<u.rings.length;h++)if(u.isClockwise(u.rings[h])){const R=j({rings:[u.rings[h]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});f.push(R)}else w.push({ring:u.rings[h],pt:u.getPoint(h,0)});for(let h=0;h<w.length;h++)for(let R=0;R<f.length;R++)if(f[R].contains(w[h].pt)){f[R].addRing(w[h].ring);break}return f}if(u instanceof I){const f=[];for(let w=0;w<u.paths.length;w++){const h=j({paths:[u.paths[w]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});f.push(h)}return f}if(n[0]instanceof L){const f=N(m(n[0]),r.spatialReference);for(let w=0;w<f.points.length;w++)e.push(f.getPoint(w));return e}return null})})},t.functions.issimple=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return!0;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return In(n[0])})},t.functions.simplify=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return T(n[0])})})}export{$n as registerFunctions};
