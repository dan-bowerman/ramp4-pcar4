import{C as j,r as i,A as b,lX as y,lR as S,b_ as T,lF as q,ay as I,gW as B,f as N}from"./main.79067ed0.js";import{a as M}from"./quat.a5de1b77.js";import{m as k,c as z,y as K,f as P}from"./meshFeatureSet.f820d37b.js";import{T as Q,i as R,c as L,x as O,u as V,L as W,O as F,E as X}from"./BufferView.b745b135.js";import{a as D,f as G,g as H,r as J,c as U,h as Y}from"./vec33.f814e9a1.js";import{n as Z,a as _,r as $,o as tt,b as et,t as A,d as nt,m as ot,e as rt,g as st,p as at,i as it,j as lt,k as ct,q as ut}from"./DefaultMaterial_COLOR_GAMMA.597adf84.js";import{b as ft}from"./georeference.83d81b30.js";import"./earcut.f20dd8d8.js";import"./deduplicate.6aee09c3.js";import"./types.d1923525.js";async function jt(t,e,o){const s=new Z(mt(o)),n=(await _(s,e,o,!0)).model,f=n.lods.shift(),c=new Map,l=new Map;n.textures.forEach((h,C)=>c.set(C,gt(h))),n.materials.forEach((h,C)=>l.set(C,xt(h,c)));const a=dt(f);for(const h of a.parts)ht(a,h,l);const{position:d,normal:u,tangent:r,color:m,texCoord0:p}=a.vertexAttributes,x={position:d.typedBuffer,normal:i(u)?u.typedBuffer:null,tangent:i(r)?r.typedBuffer:null,uv:i(p)?p.typedBuffer:null,color:i(m)?m.typedBuffer:null},v=ft(x,t,o);return{transform:v.transform,components:a.components,spatialReference:t.spatialReference,vertexAttributes:new K({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function mt(t){return t!=null&&t.resolveFile?{busy:!1,request:async(e,o,s)=>{const n=t.resolveFile(e);return(await j(n,{responseType:o==="image"?"image":o==="binary"?"array-buffer":"json",signal:i(s)?s.signal:null})).data}}:null}function w(t,e){if(N(t))return"-";const o=t.typedBuffer;return`${S(e,o.buffer,()=>e.size)}/${o.byteOffset}/${o.byteLength}`}function pt(t){return i(t)?t.toString():"-"}function dt(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,n=new Map,f=[];for(const c of t.parts){const{attributes:{position:l,normal:a,color:d,tangent:u,texCoord0:r}}=c,m=`
      ${w(l,s)}/
      ${w(a,s)}/
      ${w(d,s)}/
      ${w(u,s)}/
      ${w(r,s)}/
      ${pt(c.transform)}
    `;let p=!1;const x=S(n,m,()=>(p=!0,{start:e,length:l.count}));p&&(e+=l.count),a&&(o.normal=!0),d&&(o.color=!0),u&&(o.tangent=!0),r&&(o.texCoord0=!0),f.push({gltf:c,writeVertices:p,region:x})}return{vertexAttributes:{position:$(Q,e),normal:o.normal?$(R,e):null,tangent:o.tangent?$(L,e):null,color:o.color?$(O,e):null,texCoord0:o.texCoord0?$(V,e):null},parts:f,components:[]}}function gt(t){return new k({data:t.data,wrap:wt(t.parameters.wrap)})}function xt(t,e){const o=new T(vt(t.color,t.opacity)),s=t.emissiveFactor?new T(Ct(t.emissiveFactor)):null;return new z({color:o,colorTexture:b(y(t.textureColor,n=>e.get(n))),normalTexture:b(y(t.textureNormal,n=>e.get(n))),emissiveColor:s,emissiveTexture:b(y(t.textureEmissive,n=>e.get(n))),occlusionTexture:b(y(t.textureOcclusion,n=>e.get(n))),alphaMode:$t(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:b(y(t.textureMetallicRoughness,n=>e.get(n)))})}function ht(t,e,o){e.writeVertices&&bt(t,e);const s=e.gltf,n=yt(s.indices||s.attributes.position.count,s.primitiveType),f=e.region.start;if(f)for(let c=0;c<n.length;c++)n[c]+=f;t.components.push(new P({faces:n,material:o.get(s.material),trustSourceNormals:!0}))}function bt(t,e){const{position:o,normal:s,tangent:n,color:f,texCoord0:c}=t.vertexAttributes,l=e.region.start,{attributes:a,transform:d}=e.gltf,u=a.position.count;if(D(o.slice(l,u),a.position,d),i(a.normal)&&i(s)){const r=B(M(),d);G(s.slice(l,u),a.normal,r)}else i(s)&&H(s,0,0,1,{dstIndex:l,count:u});if(i(a.tangent)&&i(n)){const r=B(M(),d);et(n.slice(l,u),a.tangent,r)}else i(n)&&A(n,0,0,1,1,{dstIndex:l,count:u});if(i(a.texCoord0)&&i(c)?nt(c.slice(l,u),a.texCoord0):i(c)&&ot(c,0,0,{dstIndex:l,count:u}),i(a.color)&&i(f)){const r=a.color,m=f.slice(l,u);if(r.elementCount===4)r instanceof L?rt(m,r,255):r instanceof O?st(m,r):r instanceof W&&at(m,r,8);else{A(m,255,255,255,255);const p=F.fromTypedArray(m.typedBuffer,m.typedBufferStride);r instanceof R?J(p,r,255):r instanceof F?U(p,r):r instanceof X&&Y(p,r,8)}}else i(f)&&A(f.slice(l,u),255,255,255,255)}function yt(t,e){switch(e){case 4:return ct(t,ut);case 5:return lt(t);case 6:return it(t)}}function $t(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function wt(t){return{horizontal:E(t.s),vertical:E(t.t)}}function E(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function g(t){return t**(1/tt)*255}function vt(t,e){return q(g(t[0]),g(t[1]),g(t[2]),e)}function Ct(t){return I(g(t[0]),g(t[1]),g(t[2]))}export{jt as loadGLTFMesh};
