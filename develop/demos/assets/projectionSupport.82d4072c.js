import{b$ as g,c0 as b,c1 as t,c2 as c,c3 as u,ba as m,c4 as l,r as M,c5 as Z}from"./main.36623018.js";import{t as p}from"./json.2d0d6862.js";const o=[0,0];function f(e,n){if(!n)return null;if("x"in n){const s={x:0,y:0};return[s.x,s.y]=e(n.x,n.y,o),n.z!=null&&(s.z=n.z),n.m!=null&&(s.m=n.m),s}if("xmin"in n){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=e(n.xmin,n.ymin,o),[s.xmax,s.ymax]=e(n.xmax,n.ymax,o),n.hasZ&&(s.zmin=n.zmin,s.zmax=n.zmax,s.hasZ=!0),n.hasM&&(s.mmin=n.mmin,s.mmax=n.mmax,s.hasM=!0),s}return"rings"in n?{rings:h(n.rings,e),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:h(n.paths,e),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:x(n.points,e),hasM:n.hasM,hasZ:n.hasZ}:void 0}function h(e,n){const s=[];for(const i of e)s.push(x(i,n));return s}function x(e,n){const s=[];for(const i of e){const r=n(i[0],i[1],[0,0]);s.push(r),i.length>2&&r.push(i[2]),i.length>3&&r.push(i[3])}return s}async function v(e,n){if(!n)return;const s=Array.isArray(e)?e.map(i=>M(i.geometry)&&i.geometry.spatialReference):[e];await Z(s.map(i=>({source:i,dest:n})))}const y=f.bind(null,g),_=f.bind(null,b);function S(e,n,s){return e&&(s||(s=n,n=e.spatialReference),t(n)&&t(s)&&!c(n,s)?u(n,s)?m(s)?y(e):_(e):l(p,[e],n,s,null)[0]:e)}class z{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,s,i){if(!n||!n.length||!s||!i||c(s,i))return n;const r={geometries:n,inSpatialReference:s,outSpatialReference:i,resolve:null};return this._jobs.push(r),new Promise(a=>{r.resolve=a,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:s,inSpatialReference:i,outSpatialReference:r,resolve:a}=n;u(i,r)?m(r)?a(s.map(y)):a(s.map(_)):a(l(p,s,i,r,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const d=new z;function w(e,n,s){return d.push(e,n,s)}export{w as M,v as f,S as g};
