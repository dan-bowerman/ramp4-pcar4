import{dU as A,em as l,dO as m,dA as F,dX as h,dI as d,dW as f,dH as p,dQ as v}from"./main.ca84d437.js";import{J as s}from"./arcadeUtils.04562adb.js";import{WhereClause as g}from"./WhereClause.38f6f1a6.js";import"./FeatureSetReader.cc5574bb.js";import"./centroid.0388ac96.js";function i(t,e,a,n,u,r){if(n.length===1){if(m(n[0]))return d(s(t,n[0],f(n[1],-1)));if(h(n[0]))return d(s(t,n[0].toArray(),f(n[1],-1)))}else if(n.length===2){if(m(n[0]))return d(s(t,n[0],f(n[1],-1)));if(h(n[0]))return d(s(t,n[0].toArray(),f(n[1],-1)));if(l(n[0]))return n[0].load().then(c=>y(g.create(n[1],c.getFieldsIndex()),r,u).then(o=>n[0].calculateStatistic(t,o,f(n[2],1e3),e.abortSignal)))}else if(n.length===3&&l(n[0]))return n[0].load().then(c=>y(g.create(n[1],c.getFieldsIndex()),r,u).then(o=>n[0].calculateStatistic(t,o,f(n[2],1e3),e.abortSignal)));return d(s(t,n,-1))}function y(t,e,a){try{const n=t.getVariables();if(n.length>0){const u=[];for(let r=0;r<n.length;r++){const c={name:n[r]};u.push(e.evaluateIdentifier(a,c))}return p(u).then(r=>{const c={};for(let o=0;o<n.length;o++)c[n[o]]=r[o];return t.parameters=c,t})}return d(t)}catch(n){return v(n)}}function w(t){t.mode==="async"&&(t.functions.stdev=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("stdev",n,u,r,e,t)})},t.functions.variance=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("variance",n,u,r,e,t)})},t.functions.average=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("mean",n,u,r,e,t)})},t.functions.mean=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("mean",n,u,r,e,t)})},t.functions.sum=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("sum",n,u,r,e,t)})},t.functions.min=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("min",n,u,r,e,t)})},t.functions.max=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("max",n,u,r,e,t)})},t.functions.count=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){if(A(r,1,1),l(r[0]))return r[0].count(n.abortSignal);if(m(r[0])||F(r[0]))return r[0].length;if(h(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}export{w as registerFunctions};
