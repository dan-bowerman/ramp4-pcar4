import{e as u,d,jg as pe,cl as he,cN as fe,i as tt,N as dt,jh as Ut,ji as ge,jj as At,b_ as Jt,r as f,aj as k,jk as z,l as C,e9 as me,jl as E,aU as M,du as Ot,_ as ht,aZ as D,jm as de,aa as ye,hL as we,X as xe,at as ve,f as st,s as bt,gm as Dt,gI as Kt,gP as Pt,gT as Qt,gV as ft,gn as $e,aV as te,gw as gt,jn as ee,jo as Ae,gC as be,gF as Me,aX as ne,aP as Fe,m as Re,ix as Te,dB as je,iO as Ce,M as Mt,ck as Oe,ay as wt,cP as De,h as Pe}from"./main.b43b33c5.js";import{r as yt,k as Le,x as Ie,v as Lt,F as It,B as _t,M as St,a as Et,R as zt,b as _e,c as it,q as Ft,l as Rt,d as Se,e as ut,O as mt}from"./georeference.eed97a36.js";import{x as Ee}from"./earcut.f20dd8d8.js";import{n as ze}from"./deduplicate.319725b1.js";import{a as kt}from"./quat.80192fd3.js";import{e as re}from"./vec33.6c7f76d1.js";var Z;const xt=new WeakMap;let ke=0,O=Z=class extends dt{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,n,r){if(t instanceof HTMLImageElement){const o={type:"image-element",src:Ut(t.src,r),crossOrigin:t.crossOrigin};e[n]=o}else if(t instanceof HTMLCanvasElement){const o=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this.encodeImageData(o)};e[n]=s}else if(t instanceof HTMLVideoElement){const o={type:"video-element",src:Ut(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[n]=o}else{const o={type:"image-data",imageData:this.encodeImageData(t)};e[n]=o}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this.decodeImageData(t.imageData),n=document.createElement("canvas");return n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e,0,0),n}case"image-data":return this.decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this.imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this.imageDataContainsTransparent(t);if(e){const n=e.substr(e.length-4,4).toLowerCase(),r=e.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(t){t!=null?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(n="")=>`d:${n},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(xt.has(this.data)||xt.set(this.data,++ke),e(xt.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this.cloneWrap()};return new Z(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const n=this.clone();return t.set(this,n),n}cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}encodeImageData(t){let e="";for(let n=0;n<t.data.length;n++)e+=String.fromCharCode(t.data[n]);return{data:btoa(e),width:t.width,height:t.height}}decodeImageData(t){const e=atob(t.data),n=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return ge(n,t.width,t.height)}imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}static from(t){return typeof t=="string"?new Z({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new Z({data:t}):At(Z,t)}};u([d({type:String,json:{write:pe}})],O.prototype,"url",null),u([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],O.prototype,"data",null),u([he("data")],O.prototype,"writeData",null),u([fe("data")],O.prototype,"readData",null),u([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],O.prototype,"transparent",null),u([d({json:{write:!0}})],O.prototype,"wrap",void 0),u([d({readOnly:!0})],O.prototype,"contentHash",null),O=Z=u([tt("esri.geometry.support.MeshTexture")],O);const ot=O;var Tt;let P=Tt=class extends dt{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new Tt(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{color:f(this.color)?this.color.clone():null,colorTexture:f(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:f(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};u([d({type:Jt,json:{write:!0}})],P.prototype,"color",void 0),u([d({type:ot,json:{write:!0}})],P.prototype,"colorTexture",void 0),u([d({type:ot,json:{write:!0}})],P.prototype,"normalTexture",void 0),u([d({nonNullable:!0,json:{write:!0}})],P.prototype,"alphaMode",void 0),u([d({nonNullable:!0,json:{write:!0}})],P.prototype,"alphaCutoff",void 0),u([d({nonNullable:!0,json:{write:!0}})],P.prototype,"doubleSided",void 0),P=Tt=u([tt("esri.geometry.support.MeshMaterial")],P);const Nt=P;var jt;let L=jt=class extends Nt{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new jt(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:f(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:f(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:f(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:f(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null}}};u([d({type:Jt,json:{write:!0}})],L.prototype,"emissiveColor",void 0),u([d({type:ot,json:{write:!0}})],L.prototype,"emissiveTexture",void 0),u([d({type:ot,json:{write:!0}})],L.prototype,"occlusionTexture",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],L.prototype,"metallic",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],L.prototype,"roughness",void 0),u([d({type:ot,json:{write:!0}})],L.prototype,"metallicRoughnessTexture",void 0),L=jt=u([tt("esri.geometry.support.MeshMaterialMetallicRoughness")],L);const Ne=L;var pt;const U=k.getLogger("esri.geometry.support.MeshVertexAttributes");let b=pt=class extends dt{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return G(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},U)}castPosition(t){return t&&t instanceof Float32Array&&U.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),G(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},U)}castUv(t){return G(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},U)}castNormal(t){return G(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},U)}castTangent(t){return G(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},U)}clone(){const t={position:C(this.position),uv:C(this.uv),normal:C(this.normal),tangent:C(this.tangent),color:C(this.color)};return new pt(t)}clonePositional(){const t={position:C(this.position),normal:C(this.normal),tangent:C(this.tangent),uv:this.uv,color:this.color};return new pt(t)}};function vt(t,e,n,r){const{loggerTag:o,stride:s}=e;return t.length%s!=0?(r.error(o,`Invalid array length, expected a multiple of ${s}`),new n([])):t}function G(t,e,n,r,o){if(!t)return t;if(t instanceof e)return vt(t,r,e,o);for(const s of n)if(t instanceof s)return vt(new e(t),r,e,o);if(Array.isArray(t))return vt(new e(t),r,e,o);{const s=n.map(i=>`'${i.name}'`);return o.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new e([])}}function et(t,e,n){e[n]=Ue(t)}function Ue(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t[n];return e}u([d({json:{write:et}})],b.prototype,"color",void 0),u([z("color")],b.prototype,"castColor",null),u([d({nonNullable:!0,json:{write:et}})],b.prototype,"position",void 0),u([z("position")],b.prototype,"castPosition",null),u([d({json:{write:et}})],b.prototype,"uv",void 0),u([z("uv")],b.prototype,"castUv",null),u([d({json:{write:et}})],b.prototype,"normal",void 0),u([z("normal")],b.prototype,"castNormal",null),u([d({json:{write:et}})],b.prototype,"tangent",void 0),u([z("tangent")],b.prototype,"castTangent",null),b=pt=u([tt("esri.geometry.support.MeshVertexAttributes")],b);const We=b;var rt;const Be=k.getLogger("esri.geometry.support.MeshComponent");let I=rt=class extends dt{constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(t){return At(rt,t)}castFaces(t){return G(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},Be)}castMaterial(t){return At(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?Ne:Nt,t)}clone(){return new rt({faces:C(this.faces),shading:this.shading,material:C(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const n={faces:C(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new rt(n)}};u([d({json:{write:!0}})],I.prototype,"faces",void 0),u([z("faces")],I.prototype,"castFaces",null),u([d({type:Nt,json:{write:!0}})],I.prototype,"material",void 0),u([z("material")],I.prototype,"castMaterial",null),u([d({type:String,json:{write:!0}})],I.prototype,"shading",void 0),u([d({type:Boolean})],I.prototype,"trustSourceNormals",void 0),I=rt=u([tt("esri.geometry.support.MeshComponent")],I);const K=I;function Ve(t){const e=Ze(t.rings,t.hasZ,1),n=[];let r=0,o=0;for(const a of e.polygons){const c=a.count,l=a.index,g=new Float64Array(e.position.buffer,3*l*e.position.BYTES_PER_ELEMENT,3*c),m=a.holeIndices.map(h=>h-l),p=new Uint32Array(Ee(g,m,3));n.push({position:g,faces:p}),r+=g.length,o+=p.length}const s=He(n,r,o),i=ze(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(i.buffer),s.faces=i.indices,s}function He(t,e,n){if(t.length===1)return t[0];const r=new Float64Array(e),o=new Uint32Array(n);let s=0,i=0,a=0;for(const c of t){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(let l=0;l<c.faces.length;l++)o[i++]=c.faces[l]+a;a=s/3}return{position:r,faces:o}}function Ze(t,e,n){const r=t.length,o=new Array(r),s=new Array(r),i=new Array(r);let a=0,c=0,l=0,g=0;for(let h=0;h<r;++h)g+=t[h].length;const m=new Float64Array(3*g);let p=0;for(let h=r-1;h>=0;h--){const y=t[h],R=n===1&&Ge(y);if(R&&r!==1)o[a++]=y;else{let v=y.length;for(let w=0;w<a;++w)v+=o[w].length;const $={index:p,pathLengths:new Array(a+1),count:v,holeIndices:new Array(a)};$.pathLengths[0]=y.length,y.length>0&&(i[l++]={index:p,count:y.length}),p=R?at(y,y.length-1,-1,m,p,y.length,e):at(y,0,1,m,p,y.length,e);for(let w=0;w<a;++w){const A=o[w];$.holeIndices[w]=p,$.pathLengths[w+1]=A.length,A.length>0&&(i[l++]={index:p,count:A.length}),p=at(A,0,1,m,p,A.length,e)}a=0,$.count>0&&(s[c++]=$)}}for(let h=0;h<a;++h){const y=o[h];y.length>0&&(i[l++]={index:p,count:y.length}),p=at(y,0,1,m,p,y.length,e)}return c<r&&(s.length=c),l<r&&(i.length=l),{position:m,polygons:s,outlines:i}}function at(t,e,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const c=t[e];r[o++]=c[0],r[o++]=c[1],r[o++]=i?c[2]:0,e+=n}return o/3}function Ge(t){return!me(t,!1,!1)}const Ct=k.getLogger("esri.geometry.support.meshUtils.centerAt");function Xe(t,e,n){var r;if(!t.vertexAttributes||!t.vertexAttributes.position)return;const o=(r=n?.origin)!=null?r:t.origin;f(t.transform)?(n?.geographic!=null&&n.geographic!==t.transform.geographic&&Ct.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),Ye(t.transform,e,o)):yt(t.spatialReference,n)?qe(t,e,o):Je(t,e,o)}function Ye(t,e,n){const r=e.x-n.x,o=e.y-n.y,s=e.hasZ&&n.hasZ?e.z-n.z:0,i=t.origin;t.origin=[i[0]+r,i[1]+o,i[2]+s]}function qe(t,e,n){const r=Le(t.vertexAttributes,n,{geographic:!0}),{position:o,normal:s,tangent:i}=Ie(r,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=i,t.vertexAttributesChanged()}function Je(t,e,n){const r=tn,o=Qe;if(E(e,o,t.spatialReference)){if(!E(n,r,t.spatialReference)){const s=t.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,Ct.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}Ke(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else Ct.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}function Ke(t,e,n){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]}const Qe=M(),tn=M();async function en(t,e,n){const{loadGLTFMesh:r}=await Ot(ht(()=>import("./loadGLTFMesh.00ca559b.js"),["assets/loadGLTFMesh.00ca559b.js","assets/main.b43b33c5.js","assets/main.6f812d7a.css","assets/quat.80192fd3.js","assets/BufferView.9c0a9831.js","assets/vec33.6c7f76d1.js","assets/DefaultMaterial_COLOR_GAMMA.16a43867.js","assets/types.af8f306d.js","assets/georeference.eed97a36.js","assets/earcut.f20dd8d8.js","assets/deduplicate.319725b1.js"]),n),o=await oe(e,n),s=r(new D({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:nn(o),useTransform:!0,signal:f(n)?n.signal:null});s.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:i,components:a}=await s;t.vertexAttributes=i,t.components=a}function nn(t){const e=ye(t.url);return n=>{var r;const o=de(n,e,e),s=o?o.replace(/^ *\.\//,""):null;return(r=t.files.get(s))!=null?r:n}}async function oe(t,e){return t instanceof Blob?Q.fromBlob(t):typeof t=="string"?new Q(t):Array.isArray(t)?rn(t,e):on(t,e)}async function rn(t,e){const n=new Map;let r=null;const o=await we(t.map(async i=>({name:i.name,source:await oe(i instanceof Blob?i:i.source,e)}))),s=[];for(const i of o)i&&(xe(e)?i.source.dispose():s.push(i));ve(e);for(const{name:i,source:a}of s)(st(r)||/\.(gltf|glb)/i.test(i))&&(r=a.url),n.set(i,a.url),a.files&&a.files.forEach((c,l)=>n.set(l,c));if(st(r))throw new bt("mesh-load-external:missing-files","Missing files to load external mesh source");return new Q(r,()=>s.forEach(({source:i})=>i.dispose()),n)}async function on(t,e){const{default:n}=await Ot(ht(()=>import("./main.b43b33c5.js").then(function(o){return o.lY}),["assets/main.b43b33c5.js","assets/main.6f812d7a.css"]),e),r=typeof t.multipart[0]=="string"?await Promise.all(t.multipart.map(async o=>(await n(o,{responseType:"array-buffer"})).data)):t.multipart;return Q.fromBlob(new Blob(r))}class Q{constructor(e,n=()=>{},r=new Map){this.url=e,this.dispose=n,this.files=r}static fromBlob(e){const n=URL.createObjectURL(e);return new Q(n,()=>URL.revokeObjectURL(n))}}const sn=k.getLogger("esri.geometry.support.meshUtils.offset");function an(t,e,n){t.vertexAttributes&&t.vertexAttributes.position&&(f(t.transform)?(n?.geographic!=null&&n.geographic!==t.transform.geographic&&sn.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),ln(t.transform,e)):yt(t.spatialReference,n)?cn(t,e):un(t,e))}function ln(t,e){const n=t.origin;t.origin=Dt(M(),n,e)}function cn(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,i=new Float64Array(r.length),a=f(o)?new Float32Array(o.length):null,c=f(s)?new Float32Array(s.length):null,l=t.extent.center,g=pn;Kt(n,[l.x,l.y,l.z],Wt,Pt(n)),Qt(Bt,Wt),ft(g,e,Bt),Lt(r,n,i),f(o)&&It(o,r,i,n,a),f(s)&&_t(s,r,i,n,c),se(i,g),St(i,r,n),f(o)&&Et(a,r,i,n,o),f(s)&&zt(c,r,i,n,s),t.vertexAttributesChanged()}function un(t,e){se(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function se(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const pn=M(),Wt=re(),Bt=kt();function hn(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=vn,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let c=0,l=0,g=0,m=0;for(let p=0;p<t.length;p++){const h=t[p],y=c/3;for(const v of e)a[m++]=y+v;const R=h.corners;for(let v=0;v<4;v++){const $=R[v];let w=0;i[g++]=.25*n[v][0]+h.uvOrigin[0],i[g++]=h.uvOrigin[1]-.25*n[v][1];for(let A=0;A<3;A++)h.axis[A]!==0?(o[c++]=.5*h.axis[A],s[l++]=h.axis[A]):(o[c++]=.5*$[w++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function fn(t,e){const n=t.components[0],r=n.faces,o=$n[e],s=6*o,i=new Uint32Array(6),a=new Uint32Array(r.length-6);let c=0,l=0;for(let g=0;g<r.length;g++)g>=s&&g<s+6?i[c++]=r[g]:a[l++]=r[g];if(f(t.vertexAttributes.uv)){const g=new Float32Array(t.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let h=0;h<p.length;h++)g[m+h]=p[h];t.vertexAttributes.uv=g}return t.components=[new K({faces:i,material:n.material}),new K({faces:a})],t}function gn(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((e-1)*n*2));let c=0,l=0,g=0,m=0;for(let p=0;p<=e;p++){const h=p/e*Math.PI+.5*Math.PI,y=Math.cos(h),R=Math.sin(h);x[2]=R;const v=p===0||p===e,$=v?n-1:n;for(let w=0;w<=$;w++){const A=w/$*2*Math.PI;x[0]=-Math.sin(A)*y,x[1]=Math.cos(A)*y;for(let _=0;_<3;_++)o[c]=.5*x[_],s[c]=x[_],++c;i[l++]=(w+(v?.5:0))/n,i[l++]=p/e,p!==0&&w!==n&&(p!==e&&(a[g++]=m,a[g++]=m+1,a[g++]=m-n),p!==1&&(a[g++]=m,a[g++]=m-n,a[g++]=m-n-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function mn(t=0){const n=Math.round(16*2**t),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*n));let c=0,l=0,g=0,m=0,p=0;for(let h=0;h<=5;h++){const y=h===0||h===5,R=h<=1||h>=5-1,v=h===2||h===4,$=y?n-1:n;for(let w=0;w<=$;w++){const A=w/$*2*Math.PI,_=y?0:.5;x[0]=_*Math.sin(A),x[1]=_*-Math.cos(A),x[2]=h<=2?.5:-.5;for(let N=0;N<3;N++)o[c++]=x[N],s[l++]=R?N===2?h<=1?1:-1:0:N===2?0:x[N]/_;i[g++]=(w+(y?.5:0))/n,i[g++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,v||h===0||w===n||(h!==5&&(a[m++]=p,a[m++]=p+1,a[m++]=p-n),h!==1&&(a[m++]=p,a[m++]=p-n,a[m++]=p-n-1)),p++}}return{position:o,normal:s,uv:i,faces:a}}function dn(t,e){const n=typeof e=="number"?e:e!=null?e.width:1,r=typeof e=="number"?e:e!=null?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function yn(t){const e=nt.facingAxisOrderSwap[t],n=nt.position,r=nt.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const g=e[l],m=Math.abs(g)-1,p=g>=0?1:-1;o[i]=n[c+m]*p,s[i]=r[c+m]*p,i++}}return{position:o,normal:s,uv:new Float32Array(nt.uv),faces:new Uint32Array(nt.faces)}}const W=1,B=2,V=3,nt={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[V,W,B],west:[-V,-W,B],north:[-W,V,B],south:[W,-V,B],up:[W,B,V],down:[W,-B,-V]}};function lt(t,e,n){wn(t),xn(t,n&&n.size);const{vertexAttributes:r,transform:o}=_e(t,e,n);return{vertexAttributes:new We({...r,uv:t.uv}),transform:o,components:[new K({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}function wn(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function xn(t,e){if(e==null)return;const n=typeof e=="number"?[e,e,e]:[e.width!=null?e.width:1,e.depth!=null?e.depth:1,e.height!=null?e.height:1];S[0]=n[0],S[4]=n[1],S[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let o=0;o<3;o++)x[o]=t.position[r+o];ft(x,x,S);for(let o=0;o<3;o++)t.position[r+o]=x[o]}if(n[0]!==n[1]||n[1]!==n[2]){S[0]=1/n[0],S[4]=1/n[1],S[8]=1/n[2];for(let r=0;r<t.normal.length;r+=3){for(let o=0;o<3;o++)x[o]=t.normal[r+o];ft(x,x,S),$e(x,x);for(let o=0;o<3;o++)t.normal[r+o]=x[o]}}}const vn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},$n={south:0,east:1,north:2,west:3,up:4,down:5},x=M(),S=kt(),ie=k.getLogger("esri.geometry.support.meshUtils.rotate");function An(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||e[3]===0)return;const r=t.spatialReference;if(f(t.transform)){var o;n?.geographic!=null&&n.geographic!==t.transform.geographic&&ie.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const i=(o=n?.origin)!=null?o:t.transform.getOriginPoint(r);bn(t.transform,e,i)}else{var s;const i=(s=n?.origin)!=null?s:t.origin;yt(t.spatialReference,n)?Mn(t,e,i):Fn(t,e,i)}}function bn(t,e,n){const r=te(X,n.x,n.y,n.z),o=gt(X,r,t.origin);t.applyLocalInverse(o,Vt),t.rotation=Ft(t.rotation,e,it()),t.applyLocalInverse(o,o),gt(o,o,Vt),t.translation=Dt(M(),t.translation,o)}function Mn(t,e,n){const r=t.spatialReference,o=Pt(r),s=ae;E(n,s,o)||E(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(c)?new Float32Array(c.length):null;Kt(o,s,Y,o),Qt(Zt,Y);const p=Ht;ft(Rt(Ht),Rt(e),Zt),p[3]=e[3],Lt(i,r,l),f(a)&&It(a,i,l,r,g),f(c)&&_t(c,i,l,r,m),J(l,p,3,s),St(l,i,r),f(a)&&(J(g,p,3),Et(g,i,l,r,a)),f(c)&&(J(m,p,4),zt(m,i,l,r,c)),t.vertexAttributesChanged()}function Fn(t,e,n){const r=ae;if(!E(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ie.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}J(t.vertexAttributes.position,e,3,r),J(t.vertexAttributes.normal,e,3),J(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function J(t,e,n,r=ee){if(!st(t)){Ae(Y),be(Y,Y,Se(e),Rt(e));for(let o=0;o<t.length;o+=n){for(let s=0;s<3;s++)X[s]=t[o+s]-r[s];Me(X,X,Y);for(let s=0;s<3;s++)t[o+s]=X[s]+r[s]}}}const X=M(),Vt=M(),Ht=it(),Y=re(),Zt=kt(),ae=M(),le=k.getLogger("esri.geometry.support.meshUtils.scale");function Rn(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if(f(t.transform)){var o;n?.geographic!=null&&n.geographic!==t.transform.geographic&&le.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=(o=n?.origin)!=null?o:t.transform.getOriginPoint(r);Tn(t.transform,e,s)}else{const s=yt(t.spatialReference,n),i=n&&n.origin||t.origin;s?jn(t,e,i):Cn(t,e,i)}}function Tn(t,e,n){const r=te(q,n.x,n.y,n.z),o=gt(q,r,t.origin);t.applyLocalInverse(o,Gt);const s=ne(M(),t.scale,e);t.scale=s,t.applyLocalInverse(o,o),gt(o,o,Gt),t.translation=Dt(M(),t.translation,o)}function jn(t,e,n){const r=t.spatialReference,o=Pt(r),s=ue;E(n,s,o)||E(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(c)?new Float32Array(c.length):null;Lt(i,r,l),f(a)&&It(a,i,l,r,g),f(c)&&_t(c,i,l,r,m),ce(l,e,s),St(l,i,r),f(a)&&Et(g,i,l,r,a),f(c)&&zt(m,i,l,r,c),t.vertexAttributesChanged()}function Cn(t,e,n){const r=ue;if(!E(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,le.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}ce(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}function ce(t,e,n=ee){if(t)for(let r=0;r<t.length;r+=3){for(let o=0;o<3;o++)q[o]=t[r+o]-n[o];ne(q,q,e);for(let o=0;o<3;o++)t[r+o]=q[o]+n[o]}}const q=M(),Gt=M(),ue=M();var j;const T=k.getLogger("esri.geometry.Mesh");let F=j=class extends Fe(Re.LoadableMixin(Te(je))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new b,this.type="mesh"}initialize(){(st(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(Ce(()=>{var t;return{vertexAttributes:this.vertexAttributes,components:(t=this.components)==null?void 0:t.map(e=>e.clone()),transform:f(this.transform)?this.transform.clone():null}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&f(this.external)&&f(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(t.length===0||this.components&&this.components.length===0)return{extent:new Mt({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new D({x:0,y:0,z:0,spatialReference:e})};const n=f(this.transform)?this.transform.project(t,e):t;let r=1/0,o=1/0,s=1/0,i=-1/0,a=-1/0,c=-1/0,l=0,g=0,m=0;const p=n.length,h=1/(p/3);let y=0;for(;y<p;){const R=n[y++],v=n[y++],$=n[y++];r=Math.min(r,R),o=Math.min(o,v),s=Math.min(s,$),i=Math.max(i,R),a=Math.max(a,v),c=Math.max(c,$),l+=h*R,g+=h*v,m+=h*$}return{extent:new Mt({xmin:r,ymin:o,zmin:s,xmax:i,ymax:a,zmax:c,spatialReference:e}),center:new D({x:l,y:g,z:m,spatialReference:e})}}get anchor(){if(f(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new D({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return f(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&f(this.external)&&f(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(K.from(t)),this.notifyChange("components")):T.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(e!==-1)return this.components.splice(e,1),void this.notifyChange("components")}T.error("removeComponent()","Provided component is not part of the list of components")}else T.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,n,r){return ut($t.x,t,H),ut($t.y,e,Xt),ut($t.z,n,Yt),Ft(H,Xt,H),Ft(H,Yt,H),An(this,H,r),this}offset(t,e,n,r){return this.loaded?(ct[0]=t,ct[1]=e,ct[2]=n,an(this,ct,r),this):(T.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(Rn(this,t,e),this):(T.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(Xe(this,t,e),this):(T.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return f(this.external)&&this.addResolvingPromise(en(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,n={components:this.components?this.components.map(r=>r.cloneWithDeduplication(t,e)):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:f(this.transform)?this.transform.clone():null,external:f(this.external)?{source:this.external.source,extent:f(this.external.extent)?this.external.extent.clone():null}:null};return new j(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await ht(()=>import("./gltfexport.7145b123.js"),["assets/gltfexport.7145b123.js","assets/main.b43b33c5.js","assets/main.6f812d7a.css","assets/quat.80192fd3.js","assets/georeference.eed97a36.js","assets/vec33.6c7f76d1.js","assets/BufferView.9c0a9831.js","assets/earcut.f20dd8d8.js","assets/deduplicate.319725b1.js"]);return e(this,t)}static createBox(t,e){if(!(t instanceof D))return T.error(".createBox()","expected location to be a Point instance"),null;const n=new j(lt(hn(),t,e));return e&&e.imageFace&&e.imageFace!=="all"?fn(n,e.imageFace):n}static createSphere(t,e){return t instanceof D?new j(lt(gn(e&&e.densificationFactor||0),t,e)):(T.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof D?new j(lt(mn(e&&e.densificationFactor||0),t,e)):(T.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){var n;if(!(t instanceof D))return T.error(".createPlane()","expected location to be a Point instance"),null;const r=(n=e?.facing)!=null?n:"up",o=dn(r,e?.size);return new j(lt(yn(r),t,{...e,size:o}))}static createFromPolygon(t,e){if(!(t instanceof Oe))return T.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=Ve(t);return new j({vertexAttributes:new b({position:n.position}),components:[new K({faces:n.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,n){if(!(t instanceof D))throw T.error(".createfromGLTF()","expected location to be a Point instance"),new bt("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await Ot(ht(()=>import("./loadGLTFMesh.00ca559b.js"),["assets/loadGLTFMesh.00ca559b.js","assets/main.b43b33c5.js","assets/main.6f812d7a.css","assets/quat.80192fd3.js","assets/BufferView.9c0a9831.js","assets/vec33.6c7f76d1.js","assets/DefaultMaterial_COLOR_GAMMA.16a43867.js","assets/types.af8f306d.js","assets/georeference.eed97a36.js","assets/earcut.f20dd8d8.js","assets/deduplicate.319725b1.js"]),n);return new j(await r(t,e,n))}static createWithExternalSource(t,e,n){var r,o,s;const i=(r=n?.extent)!=null?r:null,a=(o=n?.transform.clone())!=null?o:new mt;a.origin=[t.x,t.y,(s=t.z)!=null?s:0];const c=t.spatialReference;return new j({external:{source:e,extent:i},transform:a,spatialReference:c})}static createIncomplete(t,e){var n,r;const o=(n=e?.transform.clone())!=null?n:new mt;o.origin=[t.x,t.y,(r=t.z)!=null?r:0];const s=t.spatialReference,i=new j({transform:o,spatialReference:s});return i.addResolvingPromise(Promise.reject(new bt("mesh-incomplete","Mesh resources are not complete"))),i}};u([d({type:[K],json:{write:!0}})],F.prototype,"components",void 0),u([d({type:mt,json:{write:!0}})],F.prototype,"transform",void 0),u([d({constructOnly:!0})],F.prototype,"external",void 0),u([d({readOnly:!0})],F.prototype,"hasExtent",null),u([d({readOnly:!0})],F.prototype,"boundingInfo",null),u([d({readOnly:!0})],F.prototype,"anchor",null),u([d({readOnly:!0})],F.prototype,"origin",null),u([d({readOnly:!0,json:{read:!1}})],F.prototype,"extent",null),u([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],F.prototype,"hasZ",void 0),u([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],F.prototype,"hasM",void 0),u([d({type:b,nonNullable:!0,json:{write:!0}})],F.prototype,"vertexAttributes",void 0),F=j=u([tt("esri.geometry.Mesh")],F);const $t={x:wt(1,0,0),y:wt(0,1,0),z:wt(0,0,1)},H=it(),Xt=it(),Yt=it(),ct=M(),qt=F;function On(t,e,n){const r=n.features;n.features=[],delete n.geometryType;const o=De.fromJSON(n);o.geometryType="mesh";const s=o.spatialReference,i=st(t.outFields)||!t.outFields.length?()=>({}):Dn(t.outFields.includes("*")?null:new Set(t.outFields));for(const a of r){const c=Pn(a,s,e);f(c)&&o.features.push(new Pe({geometry:c,attributes:i(a)}))}return o}function Dn(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const n in e)t.has(n)||delete e[n];return e}}function Pn(t,e,n){const{status:r,source:o}=_n(t);if(r===0)return null;const s=Ln(t,e,n),i=Mt.fromJSON(t.geometry);i.spatialReference=e;const a=In(t,n);return r===1?qt.createIncomplete(s,{extent:i,transform:a}):qt.createWithExternalSource(s,o,{extent:i,transform:a})}function Ln({attributes:t},e,{transformFieldRoles:n}){return new D({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}function In({attributes:t,assetMappings:e},{transformFieldRoles:n}){var r;return new mt({translation:[t[n.translationX],t[n.translationY],t[n.translationZ]],rotation:ut([t[n.rotationX],t[n.rotationY],t[n.rotationZ]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:!((r=e.flags)!=null&&r.includes("PROJECT_VERTICES"))})}function _n(t){if(!t.assetMappings)return{status:0};const e=[],n=new Map;for(const r of t.assetMappings){const o=r.seqNo,s=r.assetName,i=r.assetURL,a=r.conversionStatus;if(a==="FAILED")return{status:0};if(a!=="COMPLETED")return{status:1};if(o==null)e.push({name:s,source:i});else{const c=n.get(s);let l;c?l=c.multipart:(l=[],e.push({name:s,source:{multipart:l}}),n.set(s,{multipart:l})),l[o]=i}}return{status:2,source:e}}var Wn=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:On},Symbol.toStringTag,{value:"Module"}));export{Wn as a,Ne as c,K as f,ot as m,We as y};
