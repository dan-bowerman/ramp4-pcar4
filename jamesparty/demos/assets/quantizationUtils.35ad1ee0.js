import{be as P,bi as d,bh as L,bf as M,bg as A,r as g,f as q}from"./main.5a2439db.js";const f=(r,n,t)=>[n,t],s=(r,n,t)=>[n,t,r[2]],m=(r,n,t)=>[n,t,r[2],r[3]];function V(r){return r?{originPosition:r.originPosition==="upper-left"?"upperLeft":r.originPosition==="lower-left"?"lowerLeft":r.originPosition,scale:r.tolerance?[r.tolerance,r.tolerance]:[1,1],translate:g(r.extent)?[r.extent.xmin,r.extent.ymax]:[0,0]}:null}function h({scale:r,translate:n},t){return Math.round((t-n[0])/r[0])}function x({scale:r,translate:n},t){return Math.round((n[1]-t)/r[1])}function p(r,n,t){const o=[];let u,i,l,e;for(let a=0;a<t.length;a++){const c=t[a];a>0?(l=h(r,c[0]),e=x(r,c[1]),l===u&&e===i||(o.push(n(c,l-u,e-i)),u=l,i=e)):(u=h(r,c[0]),i=x(r,c[1]),o.push(n(c,u,i)))}return o.length>0?o:null}function v(r,n,t,o){return p(r,t?o?m:s:o?s:f,n)}function B(r,n,t,o){const u=[],i=t?o?m:s:o?s:f;for(let l=0;l<n.length;l++){const e=p(r,i,n[l]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function C(r,n,t,o){const u=[],i=t?o?m:s:o?s:f;for(let l=0;l<n.length;l++){const e=p(r,i,n[l]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function y({scale:r,translate:n},t){return t*r[0]+n[0]}function z({scale:r,translate:n},t){return n[1]-t*r[1]}function b(r,n,t){const o=new Array(t.length);if(!t.length)return o;const[u,i]=r.scale;let l=y(r,t[0][0]),e=z(r,t[0][1]);o[0]=n(t[0],l,e);for(let a=1;a<t.length;a++){const c=t[a];l+=c[0]*u,e-=c[1]*i,o[a]=n(c,l,e)}return o}function w(r,n,t){const o=new Array(t.length);for(let u=0;u<t.length;u++)o[u]=b(r,n,t[u]);return o}function E(r,n,t,o){return b(r,t?o?m:s:o?s:f,n)}function F(r,n,t,o){return w(r,t?o?m:s:o?s:f,n)}function G(r,n,t,o){return w(r,t?o?m:s:o?s:f,n)}function I(r,n,t,o,u){return n.xmin=h(r,t.xmin),n.ymin=x(r,t.ymin),n.xmax=h(r,t.xmax),n.ymax=x(r,t.ymax),n!==t&&(o&&(n.zmin=t.zmin,n.zmax=t.zmax),u&&(n.mmin=t.mmin,n.mmax=t.mmax)),n}function N(r,n,t,o,u){return n.points=v(r,t.points,o,u),n}function O(r,n,t,o,u){return n.x=h(r,t.x),n.y=x(r,t.y),n!==t&&(o&&(n.z=t.z),u&&(n.m=t.m)),n}function S(r,n,t,o,u){const i=B(r,t.rings,o,u);return i?(n.rings=i,n):null}function T(r,n,t,o,u){const i=C(r,t.paths,o,u);return i?(n.paths=i,n):null}function j(r,n){return r&&n?P(n)?O(r,{},n,!1,!1):d(n)?T(r,{},n,!1,!1):L(n)?S(r,{},n,!1,!1):M(n)?N(r,{},n,!1,!1):A(n)?I(r,{},n,!1,!1):null:null}function k(r,n,t,o,u){return g(t)&&(n.points=E(r,t.points,o,u)),n}function D(r,n,t,o,u){return q(t)||(n.x=y(r,t.x),n.y=z(r,t.y),n!==t&&(o&&(n.z=t.z),u&&(n.m=t.m))),n}function H(r,n,t,o,u){return g(t)&&(n.rings=G(r,t.rings,o,u)),n}function J(r,n,t,o,u){return g(t)&&(n.paths=F(r,t.paths,o,u)),n}export{H as B,J as C,O,j as U,k as q,V as s,D as v};
