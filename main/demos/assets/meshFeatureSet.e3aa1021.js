import{e as u,d,jd as ue,ci as pe,cK as he,i as tt,J as mt,je as Wt,jf as fe,jg as $t,bX as Xt,r as f,ag as U,jh as k,l as C,e6 as ge,ji as E,aR as M,dr as Ct,aW as D,jj as me,a7 as de,hI as ye,V as we,aq as xe,c as st,s as bt,gj as Ot,gF as Yt,gM as Dt,gQ as Kt,gS as ht,gk as ve,aS as Qt,gt as ft,jk as te,jl as $e,gz as be,gC as Ae,aU as ee,aM as Me,m as Fe,iu as Re,dy as Te,iL as je,M as At,ch as Ce,av as yt,cM as Oe,h as De}from"./main.d8c8794a.js";import{r as dt,k as Le,x as Ie,v as Lt,F as It,B as St,M as Pt,a as zt,R as Et,b as Se,c as it,q as Mt,l as Ft,d as Pe,e as ut,O as gt}from"./georeference.1d654df7.js";import{x as ze}from"./earcut.f20dd8d8.js";import{n as Ee}from"./deduplicate.19a81c42.js";import{a as kt}from"./quat.e8579619.js";import{e as ne}from"./vec33.c1079321.js";var V;const wt=new WeakMap;let ke=0,O=V=class extends mt{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,n,r){if(t instanceof HTMLImageElement){const o={type:"image-element",src:Wt(t.src,r),crossOrigin:t.crossOrigin};e[n]=o}else if(t instanceof HTMLCanvasElement){const o=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this.encodeImageData(o)};e[n]=s}else if(t instanceof HTMLVideoElement){const o={type:"video-element",src:Wt(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[n]=o}else{const o={type:"image-data",imageData:this.encodeImageData(t)};e[n]=o}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this.decodeImageData(t.imageData),n=document.createElement("canvas");return n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e,0,0),n}case"image-data":return this.decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this.imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this.imageDataContainsTransparent(t);if(e){const n=e.substr(e.length-4,4).toLowerCase(),r=e.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(t){t!=null?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(n="")=>`d:${n},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(wt.has(this.data)||wt.set(this.data,++ke),e(wt.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this.cloneWrap()};return new V(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const n=this.clone();return t.set(this,n),n}cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}encodeImageData(t){let e="";for(let n=0;n<t.data.length;n++)e+=String.fromCharCode(t.data[n]);return{data:btoa(e),width:t.width,height:t.height}}decodeImageData(t){const e=atob(t.data),n=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return fe(n,t.width,t.height)}imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}static from(t){return typeof t=="string"?new V({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new V({data:t}):$t(V,t)}};u([d({type:String,json:{write:ue}})],O.prototype,"url",null),u([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],O.prototype,"data",null),u([pe("data")],O.prototype,"writeData",null),u([he("data")],O.prototype,"readData",null),u([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],O.prototype,"transparent",null),u([d({json:{write:!0}})],O.prototype,"wrap",void 0),u([d({readOnly:!0})],O.prototype,"contentHash",null),O=V=u([tt("esri.geometry.support.MeshTexture")],O);const ot=O;var Rt;let L=Rt=class extends mt{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new Rt(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{color:f(this.color)?this.color.clone():null,colorTexture:f(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:f(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};u([d({type:Xt,json:{write:!0}})],L.prototype,"color",void 0),u([d({type:ot,json:{write:!0}})],L.prototype,"colorTexture",void 0),u([d({type:ot,json:{write:!0}})],L.prototype,"normalTexture",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaMode",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaCutoff",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"doubleSided",void 0),L=Rt=u([tt("esri.geometry.support.MeshMaterial")],L);const Ut=L;var Tt;let I=Tt=class extends Ut{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new Tt(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:f(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:f(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:f(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:f(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null}}};u([d({type:Xt,json:{write:!0}})],I.prototype,"emissiveColor",void 0),u([d({type:ot,json:{write:!0}})],I.prototype,"emissiveTexture",void 0),u([d({type:ot,json:{write:!0}})],I.prototype,"occlusionTexture",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],I.prototype,"metallic",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],I.prototype,"roughness",void 0),u([d({type:ot,json:{write:!0}})],I.prototype,"metallicRoughnessTexture",void 0),I=Tt=u([tt("esri.geometry.support.MeshMaterialMetallicRoughness")],I);const Ue=I;var pt;const N=U.getLogger("esri.geometry.support.MeshVertexAttributes");let A=pt=class extends mt{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return q(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},N)}castPosition(t){return t&&t instanceof Float32Array&&N.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),q(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},N)}castUv(t){return q(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},N)}castNormal(t){return q(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},N)}castTangent(t){return q(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},N)}clone(){const t={position:C(this.position),uv:C(this.uv),normal:C(this.normal),tangent:C(this.tangent),color:C(this.color)};return new pt(t)}clonePositional(){const t={position:C(this.position),normal:C(this.normal),tangent:C(this.tangent),uv:this.uv,color:this.color};return new pt(t)}};function xt(t,e,n,r){const{loggerTag:o,stride:s}=e;return t.length%s!=0?(r.error(o,`Invalid array length, expected a multiple of ${s}`),new n([])):t}function q(t,e,n,r,o){if(!t)return t;if(t instanceof e)return xt(t,r,e,o);for(const s of n)if(t instanceof s)return xt(new e(t),r,e,o);if(Array.isArray(t))return xt(new e(t),r,e,o);{const s=n.map(i=>`'${i.name}'`);return o.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new e([])}}function et(t,e,n){e[n]=We(t)}function We(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t[n];return e}u([d({json:{write:et}})],A.prototype,"color",void 0),u([k("color")],A.prototype,"castColor",null),u([d({nonNullable:!0,json:{write:et}})],A.prototype,"position",void 0),u([k("position")],A.prototype,"castPosition",null),u([d({json:{write:et}})],A.prototype,"uv",void 0),u([k("uv")],A.prototype,"castUv",null),u([d({json:{write:et}})],A.prototype,"normal",void 0),u([k("normal")],A.prototype,"castNormal",null),u([d({json:{write:et}})],A.prototype,"tangent",void 0),u([k("tangent")],A.prototype,"castTangent",null),A=pt=u([tt("esri.geometry.support.MeshVertexAttributes")],A);const Ne=A;var rt;const _e=U.getLogger("esri.geometry.support.MeshComponent");let S=rt=class extends mt{constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(t){return $t(rt,t)}castFaces(t){return q(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},_e)}castMaterial(t){return $t(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?Ue:Ut,t)}clone(){return new rt({faces:C(this.faces),shading:this.shading,material:C(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const n={faces:C(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new rt(n)}};u([d({json:{write:!0}})],S.prototype,"faces",void 0),u([k("faces")],S.prototype,"castFaces",null),u([d({type:Ut,json:{write:!0}})],S.prototype,"material",void 0),u([k("material")],S.prototype,"castMaterial",null),u([d({type:String,json:{write:!0}})],S.prototype,"shading",void 0),u([d({type:Boolean})],S.prototype,"trustSourceNormals",void 0),S=rt=u([tt("esri.geometry.support.MeshComponent")],S);const K=S;function Be(t){const e=Ze(t.rings,t.hasZ,1),n=[];let r=0,o=0;for(const a of e.polygons){const c=a.count,l=a.index,g=new Float64Array(e.position.buffer,3*l*e.position.BYTES_PER_ELEMENT,3*c),m=a.holeIndices.map(h=>h-l),p=new Uint32Array(ze(g,m,3));n.push({position:g,faces:p}),r+=g.length,o+=p.length}const s=He(n,r,o),i=Ee(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(i.buffer),s.faces=i.indices,s}function He(t,e,n){if(t.length===1)return t[0];const r=new Float64Array(e),o=new Uint32Array(n);let s=0,i=0,a=0;for(const c of t){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(let l=0;l<c.faces.length;l++)o[i++]=c.faces[l]+a;a=s/3}return{position:r,faces:o}}function Ze(t,e,n){const r=t.length,o=new Array(r),s=new Array(r),i=new Array(r);let a=0,c=0,l=0,g=0;for(let h=0;h<r;++h)g+=t[h].length;const m=new Float64Array(3*g);let p=0;for(let h=r-1;h>=0;h--){const y=t[h],R=n===1&&Ve(y);if(R&&r!==1)o[a++]=y;else{let v=y.length;for(let w=0;w<a;++w)v+=o[w].length;const $={index:p,pathLengths:new Array(a+1),count:v,holeIndices:new Array(a)};$.pathLengths[0]=y.length,y.length>0&&(i[l++]={index:p,count:y.length}),p=R?at(y,y.length-1,-1,m,p,y.length,e):at(y,0,1,m,p,y.length,e);for(let w=0;w<a;++w){const b=o[w];$.holeIndices[w]=p,$.pathLengths[w+1]=b.length,b.length>0&&(i[l++]={index:p,count:b.length}),p=at(b,0,1,m,p,b.length,e)}a=0,$.count>0&&(s[c++]=$)}}for(let h=0;h<a;++h){const y=o[h];y.length>0&&(i[l++]={index:p,count:y.length}),p=at(y,0,1,m,p,y.length,e)}return c<r&&(s.length=c),l<r&&(i.length=l),{position:m,polygons:s,outlines:i}}function at(t,e,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const c=t[e];r[o++]=c[0],r[o++]=c[1],r[o++]=i?c[2]:0,e+=n}return o/3}function Ve(t){return!ge(t,!1,!1)}const jt=U.getLogger("esri.geometry.support.meshUtils.centerAt");function qe(t,e,n){var r;if(!t.vertexAttributes||!t.vertexAttributes.position)return;const o=(r=n?.origin)!=null?r:t.origin;f(t.transform)?(n?.geographic!=null&&n.geographic!==t.transform.geographic&&jt.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),Ge(t.transform,e,o)):dt(t.spatialReference,n)?Je(t,e,o):Xe(t,e,o)}function Ge(t,e,n){const r=e.x-n.x,o=e.y-n.y,s=e.hasZ&&n.hasZ?e.z-n.z:0,i=t.origin;t.origin=[i[0]+r,i[1]+o,i[2]+s]}function Je(t,e,n){const r=Le(t.vertexAttributes,n,{geographic:!0}),{position:o,normal:s,tangent:i}=Ie(r,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=i,t.vertexAttributesChanged()}function Xe(t,e,n){const r=Qe,o=Ke;if(E(e,o,t.spatialReference)){if(!E(n,r,t.spatialReference)){const s=t.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,jt.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}Ye(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else jt.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}function Ye(t,e,n){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]}const Ke=M(),Qe=M();async function tn(t,e,n){const{loadGLTFMesh:r}=await Ct(import("./loadGLTFMesh.9345ca33.js"),n),o=await re(e,n),s=r(new D({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:en(o),useTransform:!0,signal:f(n)?n.signal:null});s.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:i,components:a}=await s;t.vertexAttributes=i,t.components=a}function en(t){const e=de(t.url);return n=>{var r;const o=me(n,e,e),s=o?o.replace(/^ *\.\//,""):null;return(r=t.files.get(s))!=null?r:n}}async function re(t,e){return t instanceof Blob?Q.fromBlob(t):typeof t=="string"?new Q(t):Array.isArray(t)?nn(t,e):rn(t,e)}async function nn(t,e){const n=new Map;let r=null;const o=await ye(t.map(async i=>({name:i.name,source:await re(i instanceof Blob?i:i.source,e)}))),s=[];for(const i of o)i&&(we(e)?i.source.dispose():s.push(i));xe(e);for(const{name:i,source:a}of s)(st(r)||/\.(gltf|glb)/i.test(i))&&(r=a.url),n.set(i,a.url),a.files&&a.files.forEach((c,l)=>n.set(l,c));if(st(r))throw new bt("mesh-load-external:missing-files","Missing files to load external mesh source");return new Q(r,()=>s.forEach(({source:i})=>i.dispose()),n)}async function rn(t,e){const{default:n}=await Ct(import("./main.d8c8794a.js").then(function(o){return o.lW}),e),r=typeof t.multipart[0]=="string"?await Promise.all(t.multipart.map(async o=>(await n(o,{responseType:"array-buffer"})).data)):t.multipart;return Q.fromBlob(new Blob(r))}class Q{constructor(e,n=()=>{},r=new Map){this.url=e,this.dispose=n,this.files=r}static fromBlob(e){const n=URL.createObjectURL(e);return new Q(n,()=>URL.revokeObjectURL(n))}}const on=U.getLogger("esri.geometry.support.meshUtils.offset");function sn(t,e,n){t.vertexAttributes&&t.vertexAttributes.position&&(f(t.transform)?(n?.geographic!=null&&n.geographic!==t.transform.geographic&&on.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),an(t.transform,e)):dt(t.spatialReference,n)?ln(t,e):cn(t,e))}function an(t,e){const n=t.origin;t.origin=Ot(M(),n,e)}function ln(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,i=new Float64Array(r.length),a=f(o)?new Float32Array(o.length):null,c=f(s)?new Float32Array(s.length):null,l=t.extent.center,g=un;Yt(n,[l.x,l.y,l.z],Nt,Dt(n)),Kt(_t,Nt),ht(g,e,_t),Lt(r,n,i),f(o)&&It(o,r,i,n,a),f(s)&&St(s,r,i,n,c),oe(i,g),Pt(i,r,n),f(o)&&zt(a,r,i,n,o),f(s)&&Et(c,r,i,n,s),t.vertexAttributesChanged()}function cn(t,e){oe(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function oe(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const un=M(),Nt=ne(),_t=kt();function pn(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=xn,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let c=0,l=0,g=0,m=0;for(let p=0;p<t.length;p++){const h=t[p],y=c/3;for(const v of e)a[m++]=y+v;const R=h.corners;for(let v=0;v<4;v++){const $=R[v];let w=0;i[g++]=.25*n[v][0]+h.uvOrigin[0],i[g++]=h.uvOrigin[1]-.25*n[v][1];for(let b=0;b<3;b++)h.axis[b]!==0?(o[c++]=.5*h.axis[b],s[l++]=h.axis[b]):(o[c++]=.5*$[w++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function hn(t,e){const n=t.components[0],r=n.faces,o=vn[e],s=6*o,i=new Uint32Array(6),a=new Uint32Array(r.length-6);let c=0,l=0;for(let g=0;g<r.length;g++)g>=s&&g<s+6?i[c++]=r[g]:a[l++]=r[g];if(f(t.vertexAttributes.uv)){const g=new Float32Array(t.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let h=0;h<p.length;h++)g[m+h]=p[h];t.vertexAttributes.uv=g}return t.components=[new K({faces:i,material:n.material}),new K({faces:a})],t}function fn(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((e-1)*n*2));let c=0,l=0,g=0,m=0;for(let p=0;p<=e;p++){const h=p/e*Math.PI+.5*Math.PI,y=Math.cos(h),R=Math.sin(h);x[2]=R;const v=p===0||p===e,$=v?n-1:n;for(let w=0;w<=$;w++){const b=w/$*2*Math.PI;x[0]=-Math.sin(b)*y,x[1]=Math.cos(b)*y;for(let P=0;P<3;P++)o[c]=.5*x[P],s[c]=x[P],++c;i[l++]=(w+(v?.5:0))/n,i[l++]=p/e,p!==0&&w!==n&&(p!==e&&(a[g++]=m,a[g++]=m+1,a[g++]=m-n),p!==1&&(a[g++]=m,a[g++]=m-n,a[g++]=m-n-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function gn(t=0){const n=Math.round(16*2**t),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*n));let c=0,l=0,g=0,m=0,p=0;for(let h=0;h<=5;h++){const y=h===0||h===5,R=h<=1||h>=5-1,v=h===2||h===4,$=y?n-1:n;for(let w=0;w<=$;w++){const b=w/$*2*Math.PI,P=y?0:.5;x[0]=P*Math.sin(b),x[1]=P*-Math.cos(b),x[2]=h<=2?.5:-.5;for(let W=0;W<3;W++)o[c++]=x[W],s[l++]=R?W===2?h<=1?1:-1:0:W===2?0:x[W]/P;i[g++]=(w+(y?.5:0))/n,i[g++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,v||h===0||w===n||(h!==5&&(a[m++]=p,a[m++]=p+1,a[m++]=p-n),h!==1&&(a[m++]=p,a[m++]=p-n,a[m++]=p-n-1)),p++}}return{position:o,normal:s,uv:i,faces:a}}function mn(t,e){const n=typeof e=="number"?e:e!=null?e.width:1,r=typeof e=="number"?e:e!=null?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function dn(t){const e=nt.facingAxisOrderSwap[t],n=nt.position,r=nt.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const g=e[l],m=Math.abs(g)-1,p=g>=0?1:-1;o[i]=n[c+m]*p,s[i]=r[c+m]*p,i++}}return{position:o,normal:s,uv:new Float32Array(nt.uv),faces:new Uint32Array(nt.faces)}}const _=1,B=2,H=3,nt={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[H,_,B],west:[-H,-_,B],north:[-_,H,B],south:[_,-H,B],up:[_,B,H],down:[_,-B,-H]}};function lt(t,e,n){yn(t),wn(t,n&&n.size);const{vertexAttributes:r,transform:o}=Se(t,e,n);return{vertexAttributes:new Ne({...r,uv:t.uv}),transform:o,components:[new K({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}function yn(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function wn(t,e){if(e==null)return;const n=typeof e=="number"?[e,e,e]:[e.width!=null?e.width:1,e.depth!=null?e.depth:1,e.height!=null?e.height:1];z[0]=n[0],z[4]=n[1],z[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let o=0;o<3;o++)x[o]=t.position[r+o];ht(x,x,z);for(let o=0;o<3;o++)t.position[r+o]=x[o]}if(n[0]!==n[1]||n[1]!==n[2]){z[0]=1/n[0],z[4]=1/n[1],z[8]=1/n[2];for(let r=0;r<t.normal.length;r+=3){for(let o=0;o<3;o++)x[o]=t.normal[r+o];ht(x,x,z),ve(x,x);for(let o=0;o<3;o++)t.normal[r+o]=x[o]}}}const xn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},vn={south:0,east:1,north:2,west:3,up:4,down:5},x=M(),z=kt(),se=U.getLogger("esri.geometry.support.meshUtils.rotate");function $n(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||e[3]===0)return;const r=t.spatialReference;if(f(t.transform)){var o;n?.geographic!=null&&n.geographic!==t.transform.geographic&&se.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const i=(o=n?.origin)!=null?o:t.transform.getOriginPoint(r);bn(t.transform,e,i)}else{var s;const i=(s=n?.origin)!=null?s:t.origin;dt(t.spatialReference,n)?An(t,e,i):Mn(t,e,i)}}function bn(t,e,n){const r=Qt(G,n.x,n.y,n.z),o=ft(G,r,t.origin);t.applyLocalInverse(o,Bt),t.rotation=Mt(t.rotation,e,it()),t.applyLocalInverse(o,o),ft(o,o,Bt),t.translation=Ot(M(),t.translation,o)}function An(t,e,n){const r=t.spatialReference,o=Dt(r),s=ie;E(n,s,o)||E(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(c)?new Float32Array(c.length):null;Yt(o,s,J,o),Kt(Zt,J);const p=Ht;ht(Ft(Ht),Ft(e),Zt),p[3]=e[3],Lt(i,r,l),f(a)&&It(a,i,l,r,g),f(c)&&St(c,i,l,r,m),Y(l,p,3,s),Pt(l,i,r),f(a)&&(Y(g,p,3),zt(g,i,l,r,a)),f(c)&&(Y(m,p,4),Et(m,i,l,r,c)),t.vertexAttributesChanged()}function Mn(t,e,n){const r=ie;if(!E(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,se.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}Y(t.vertexAttributes.position,e,3,r),Y(t.vertexAttributes.normal,e,3),Y(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function Y(t,e,n,r=te){if(!st(t)){$e(J),be(J,J,Pe(e),Ft(e));for(let o=0;o<t.length;o+=n){for(let s=0;s<3;s++)G[s]=t[o+s]-r[s];Ae(G,G,J);for(let s=0;s<3;s++)t[o+s]=G[s]+r[s]}}}const G=M(),Bt=M(),Ht=it(),J=ne(),Zt=kt(),ie=M(),ae=U.getLogger("esri.geometry.support.meshUtils.scale");function Fn(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if(f(t.transform)){var o;n?.geographic!=null&&n.geographic!==t.transform.geographic&&ae.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=(o=n?.origin)!=null?o:t.transform.getOriginPoint(r);Rn(t.transform,e,s)}else{const s=dt(t.spatialReference,n),i=n&&n.origin||t.origin;s?Tn(t,e,i):jn(t,e,i)}}function Rn(t,e,n){const r=Qt(X,n.x,n.y,n.z),o=ft(X,r,t.origin);t.applyLocalInverse(o,Vt);const s=ee(M(),t.scale,e);t.scale=s,t.applyLocalInverse(o,o),ft(o,o,Vt),t.translation=Ot(M(),t.translation,o)}function Tn(t,e,n){const r=t.spatialReference,o=Dt(r),s=ce;E(n,s,o)||E(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(c)?new Float32Array(c.length):null;Lt(i,r,l),f(a)&&It(a,i,l,r,g),f(c)&&St(c,i,l,r,m),le(l,e,s),Pt(l,i,r),f(a)&&zt(g,i,l,r,a),f(c)&&Et(m,i,l,r,c),t.vertexAttributesChanged()}function jn(t,e,n){const r=ce;if(!E(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ae.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}le(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}function le(t,e,n=te){if(t)for(let r=0;r<t.length;r+=3){for(let o=0;o<3;o++)X[o]=t[r+o]-n[o];ee(X,X,e);for(let o=0;o<3;o++)t[r+o]=X[o]+n[o]}}const X=M(),Vt=M(),ce=M();var j;const T=U.getLogger("esri.geometry.Mesh");let F=j=class extends Me(Fe.LoadableMixin(Re(Te))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new A,this.type="mesh"}initialize(){(st(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(je(()=>{var t;return{vertexAttributes:this.vertexAttributes,components:(t=this.components)==null?void 0:t.map(e=>e.clone()),transform:f(this.transform)?this.transform.clone():null}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&f(this.external)&&f(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(t.length===0||this.components&&this.components.length===0)return{extent:new At({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new D({x:0,y:0,z:0,spatialReference:e})};const n=f(this.transform)?this.transform.project(t,e):t;let r=1/0,o=1/0,s=1/0,i=-1/0,a=-1/0,c=-1/0,l=0,g=0,m=0;const p=n.length,h=1/(p/3);let y=0;for(;y<p;){const R=n[y++],v=n[y++],$=n[y++];r=Math.min(r,R),o=Math.min(o,v),s=Math.min(s,$),i=Math.max(i,R),a=Math.max(a,v),c=Math.max(c,$),l+=h*R,g+=h*v,m+=h*$}return{extent:new At({xmin:r,ymin:o,zmin:s,xmax:i,ymax:a,zmax:c,spatialReference:e}),center:new D({x:l,y:g,z:m,spatialReference:e})}}get anchor(){if(f(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new D({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return f(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&f(this.external)&&f(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(K.from(t)),this.notifyChange("components")):T.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(e!==-1)return this.components.splice(e,1),void this.notifyChange("components")}T.error("removeComponent()","Provided component is not part of the list of components")}else T.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,n,r){return ut(vt.x,t,Z),ut(vt.y,e,qt),ut(vt.z,n,Gt),Mt(Z,qt,Z),Mt(Z,Gt,Z),$n(this,Z,r),this}offset(t,e,n,r){return this.loaded?(ct[0]=t,ct[1]=e,ct[2]=n,sn(this,ct,r),this):(T.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(Fn(this,t,e),this):(T.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(qe(this,t,e),this):(T.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return f(this.external)&&this.addResolvingPromise(tn(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,n={components:this.components?this.components.map(r=>r.cloneWithDeduplication(t,e)):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:f(this.transform)?this.transform.clone():null,external:f(this.external)?{source:this.external.source,extent:f(this.external.extent)?this.external.extent.clone():null}:null};return new j(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await import("./gltfexport.936962bc.js");return e(this,t)}static createBox(t,e){if(!(t instanceof D))return T.error(".createBox()","expected location to be a Point instance"),null;const n=new j(lt(pn(),t,e));return e&&e.imageFace&&e.imageFace!=="all"?hn(n,e.imageFace):n}static createSphere(t,e){return t instanceof D?new j(lt(fn(e&&e.densificationFactor||0),t,e)):(T.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof D?new j(lt(gn(e&&e.densificationFactor||0),t,e)):(T.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){var n;if(!(t instanceof D))return T.error(".createPlane()","expected location to be a Point instance"),null;const r=(n=e?.facing)!=null?n:"up",o=mn(r,e?.size);return new j(lt(dn(r),t,{...e,size:o}))}static createFromPolygon(t,e){if(!(t instanceof Ce))return T.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=Be(t);return new j({vertexAttributes:new A({position:n.position}),components:[new K({faces:n.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,n){if(!(t instanceof D))throw T.error(".createfromGLTF()","expected location to be a Point instance"),new bt("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await Ct(import("./loadGLTFMesh.9345ca33.js"),n);return new j(await r(t,e,n))}static createWithExternalSource(t,e,n){var r,o,s;const i=(r=n?.extent)!=null?r:null,a=(o=n?.transform.clone())!=null?o:new gt;a.origin=[t.x,t.y,(s=t.z)!=null?s:0];const c=t.spatialReference;return new j({external:{source:e,extent:i},transform:a,spatialReference:c})}static createIncomplete(t,e){var n,r;const o=(n=e?.transform.clone())!=null?n:new gt;o.origin=[t.x,t.y,(r=t.z)!=null?r:0];const s=t.spatialReference,i=new j({transform:o,spatialReference:s});return i.addResolvingPromise(Promise.reject(new bt("mesh-incomplete","Mesh resources are not complete"))),i}};u([d({type:[K],json:{write:!0}})],F.prototype,"components",void 0),u([d({type:gt,json:{write:!0}})],F.prototype,"transform",void 0),u([d({constructOnly:!0})],F.prototype,"external",void 0),u([d({readOnly:!0})],F.prototype,"hasExtent",null),u([d({readOnly:!0})],F.prototype,"boundingInfo",null),u([d({readOnly:!0})],F.prototype,"anchor",null),u([d({readOnly:!0})],F.prototype,"origin",null),u([d({readOnly:!0,json:{read:!1}})],F.prototype,"extent",null),u([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],F.prototype,"hasZ",void 0),u([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],F.prototype,"hasM",void 0),u([d({type:A,nonNullable:!0,json:{write:!0}})],F.prototype,"vertexAttributes",void 0),F=j=u([tt("esri.geometry.Mesh")],F);const vt={x:yt(1,0,0),y:yt(0,1,0),z:yt(0,0,1)},Z=it(),qt=it(),Gt=it(),ct=M(),Jt=F;function Cn(t,e,n){const r=n.features;n.features=[],delete n.geometryType;const o=Oe.fromJSON(n);o.geometryType="mesh";const s=o.spatialReference,i=st(t.outFields)||!t.outFields.length?()=>({}):On(t.outFields.includes("*")?null:new Set(t.outFields));for(const a of r){const c=Dn(a,s,e);f(c)&&o.features.push(new De({geometry:c,attributes:i(a)}))}return o}function On(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const n in e)t.has(n)||delete e[n];return e}}function Dn(t,e,n){const{status:r,source:o}=Sn(t);if(r===0)return null;const s=Ln(t,e,n),i=At.fromJSON(t.geometry);i.spatialReference=e;const a=In(t,n);return r===1?Jt.createIncomplete(s,{extent:i,transform:a}):Jt.createWithExternalSource(s,o,{extent:i,transform:a})}function Ln({attributes:t},e,{transformFieldRoles:n}){return new D({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}function In({attributes:t,assetMappings:e},{transformFieldRoles:n}){var r;return new gt({translation:[t[n.translationX],t[n.translationY],t[n.translationZ]],rotation:ut([t[n.rotationX],t[n.rotationY],t[n.rotationZ]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:!((r=e.flags)!=null&&r.includes("PROJECT_VERTICES"))})}function Sn(t){if(!t.assetMappings)return{status:0};const e=[],n=new Map;for(const r of t.assetMappings){const o=r.seqNo,s=r.assetName,i=r.assetURL,a=r.conversionStatus;if(a==="FAILED")return{status:0};if(a!=="COMPLETED")return{status:1};if(o==null)e.push({name:s,source:i});else{const c=n.get(s);let l;c?l=c.multipart:(l=[],e.push({name:s,source:{multipart:l}}),n.set(s,{multipart:l})),l[o]=i}}return{status:2,source:e}}var Nn=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:Cn},Symbol.toStringTag,{value:"Module"}));export{Nn as a,Ue as c,K as f,ot as m,Ne as y};
