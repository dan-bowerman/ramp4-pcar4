import{r as p,a as h}from"./main.01d97856.js";import{h as m}from"./PooledRBush.714c92d3.js";import{_ as u}from"./georeference.80956283.js";import"./quat.9ecda1e4.js";import"./vec33.4741f6e9.js";import"./BufferView.cb711820.js";class T{async createIndex(t,o){const e=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new m;const a=this.createMeshData(t),n=p(o)?await o.invoke("createIndexThread",a,{transferList:e}):this.createIndexThread(a).result;return this.createPooledRBush().fromJSON(n)}createIndexThread(t){const o=new Float64Array(t.position),e=this.createPooledRBush();return t.components?this.createIndexComponentsThread(e,o,t.components.map(a=>new Uint32Array(a))):this.createIndexAllThread(e,o)}createIndexAllThread(t,o){const e=new Array(o.length/9);let a=0;for(let n=0;n<o.length;n+=9)e[a++]=c(o,n+0,n+3,n+6);return t.load(e),{result:t.toJSON()}}createIndexComponentsThread(t,o,e){let a=0;for(const s of e)a+=s.length/3;const n=new Array(a);let l=0;for(const s of e)for(let i=0;i<s.length;i+=3)n[l++]=c(o,3*s[i+0],3*s[i+1],3*s[i+2]);return t.load(n),{result:t.toJSON()}}createMeshData(t){const o=(t.transform?u({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(e=>!e.faces)?{position:o}:{position:o,components:t.components.map(e=>e.faces)}}createPooledRBush(){return new m(9,h("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function c(r,t,o,e){return{minX:Math.min(r[t+0],r[o+0],r[e+0]),maxX:Math.max(r[t+0],r[o+0],r[e+0]),minY:Math.min(r[t+1],r[o+1],r[e+1]),maxY:Math.max(r[t+1],r[o+1],r[e+1]),p0:[r[t+0],r[t+1],r[t+2]],p1:[r[o+0],r[o+1],r[o+2]],p2:[r[e+0],r[e+1],r[e+2]]}}export{T as ElevationSamplerWorker,T as default};
