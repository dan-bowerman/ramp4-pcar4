import{n as c}from"./VertexArrayObject.a8082f13.js";function d(o){let e="";for(const t in o){const n=o[t];if(typeof n=="boolean")n&&(e+=`#define ${t}
`);else if(typeof n=="number")e+=`#define ${t} ${n.toFixed()}
`;else if(typeof n=="object"){const r=n.options;let s=0;for(const l in r)e+=`#define ${r[l]} ${(s++).toFixed()}
`;e+=`#define ${t} ${r[n.value]}
`}}return e}function u(o,e,t,n){t=t||{},n=n||"";const r=typeof e.shaders=="function"?e.shaders(t):e.shaders;return new c(o,n+r.vertexShader,n+r.fragmentShader,e.attributes)}class p{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,t=new Map){if(t.has(e))return t.get(e);const n=this.read(e);if(!n)throw new Error(`cannot find shader file ${e}`);const r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=r.exec(n);const l=[];for(;s!=null;)l.push({path:s[1],start:s.index,length:s[0].length}),s=r.exec(n);let f=0,i="";return l.forEach(a=>{i+=n.slice(f,a.start),i+=t.has(a.path)?"":this.resolve(a.path,t),f=a.start+a.length}),i+=n.slice(f),t.set(e,i),i}read(e){return this.readFile(e)}}export{p as e,d as n,u as t};
