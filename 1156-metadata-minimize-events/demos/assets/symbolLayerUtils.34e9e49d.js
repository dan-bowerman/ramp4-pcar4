import{fX as p,jd as h,s as o,C as d,r as c,je as b,_ as w,f_ as v,jf as z}from"./main.b43b33c5.js";let i=a();function a(){return new p(50)}function P(){i=a()}function S(e,r){if(e.type==="icon")return y(e,r);if(e.type==="object")return f(e,r);throw new o("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function x(e,r){if(e.type==="icon")return j(e,r);if(e.type==="object")return g(e,r);throw new o("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function y(e,r){if(e.resource.href)return _(e.resource.href).then(t=>[t.width,t.height]);if(e.resource.primitive)return c(r)?[r,r]:[256,256];throw new o("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function j(e,r){return y(e,r).then(t=>{if(e.size==null)return t;const n=t[0]/t[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function _(e){return d(e,{responseType:"image"}).then(r=>r.data)}function f(e,r){return L(e,r).then(t=>h(t))}async function g(e,r){const t=await f(e,r);return b(t,e)}async function L(e,r){if(!e.isPrimitive){const n=e.resource.href,s=i.get(n);if(s!==void 0)return Promise.resolve(s);const l=await w(()=>import("./objectResourceUtils.b87c0724.js").then(function(m){return m.o}),["assets/objectResourceUtils.b87c0724.js","assets/devEnvironmentUtils.444b8fd1.js","assets/main.b43b33c5.js","assets/main.6f812d7a.css","assets/quat.80192fd3.js","assets/vec33.6c7f76d1.js","assets/BufferView.9c0a9831.js","assets/DefaultMaterial_COLOR_GAMMA.16a43867.js","assets/types.af8f306d.js","assets/requestImageUtils.7f2b0428.js","assets/Texture.0058c972.js","assets/VertexArrayObject.74a56c16.js","assets/InterleavedLayout.b3b98de6.js","assets/vec3f32.9cc42d31.js"]),u=await l.fetch(n,{disableTextures:!0});return i.put(n,u.referenceBoundingBox),u.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=v(z(e.resource.primitive)),c(r)))for(let n=0;n<t.length;n++)t[n]*=r;return t?Promise.resolve(t):Promise.reject(new o("symbol:invalid-resource","The symbol does not have a valid resource"))}export{P as clearBoundingBoxCache,y as computeIconLayerResourceSize,S as computeLayerResourceSize,x as computeLayerSize,f as computeObjectLayerResourceSize};
