import{dR as F,ej as l,dL as m,dx as A,dU as h,dF as d,dT as f,dE as p,dN as v}from"./multi-ramp.54622117.js";import{J as s}from"./arcadeUtils.8073d1db.js";import{WhereClause as g}from"./WhereClause.68ca626b.js";import"./FeatureSetReader.4a7f8c4d.js";import"./centroid.7b902fe9.js";function i(t,e,a,n,u,r){if(n.length===1){if(m(n[0]))return d(s(t,n[0],f(n[1],-1)));if(h(n[0]))return d(s(t,n[0].toArray(),f(n[1],-1)))}else if(n.length===2){if(m(n[0]))return d(s(t,n[0],f(n[1],-1)));if(h(n[0]))return d(s(t,n[0].toArray(),f(n[1],-1)));if(l(n[0]))return n[0].load().then(c=>y(g.create(n[1],c.getFieldsIndex()),r,u).then(o=>n[0].calculateStatistic(t,o,f(n[2],1e3),e.abortSignal)))}else if(n.length===3&&l(n[0]))return n[0].load().then(c=>y(g.create(n[1],c.getFieldsIndex()),r,u).then(o=>n[0].calculateStatistic(t,o,f(n[2],1e3),e.abortSignal)));return d(s(t,n,-1))}function y(t,e,a){try{const n=t.getVariables();if(n.length>0){const u=[];for(let r=0;r<n.length;r++){const c={name:n[r]};u.push(e.evaluateIdentifier(a,c))}return p(u).then(r=>{const c={};for(let o=0;o<n.length;o++)c[n[o]]=r[o];return t.parameters=c,t})}return d(t)}catch(n){return v(n)}}function $(t){t.mode==="async"&&(t.functions.stdev=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("stdev",n,u,r,e,t)})},t.functions.variance=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("variance",n,u,r,e,t)})},t.functions.average=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("mean",n,u,r,e,t)})},t.functions.mean=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("mean",n,u,r,e,t)})},t.functions.sum=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("sum",n,u,r,e,t)})},t.functions.min=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("min",n,u,r,e,t)})},t.functions.max=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("max",n,u,r,e,t)})},t.functions.count=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){if(F(r,1,1),l(r[0]))return r[0].count(n.abortSignal);if(m(r[0])||A(r[0]))return r[0].length;if(h(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}export{$ as registerFunctions};
