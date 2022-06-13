import{a as Br}from"./devEnvironmentUtils.444b8fd1.js";import{gg as Gt,aT as N,lv as G,ax as nt,gN as Vr,lw as et,lx as Hr,hB as Gr,f as H,cL as Ur,ai as He,am as De,P as kr,kI as yt,ly as qr,hZ as _e,lz as we,r as g,lA as Wr,W as jr,ap as Xr,gx as Tt,hA as Kr,s as Ut,f$ as Qr,d0 as ne,lB as Yr,fZ as Zr,aM as Jr,aU as fe,lC as ei,lD as ti,gs as tt,gm as Ge,gl as Ue,aW as ue,gr as st,gv as W,gt as kt,aV as Z,lE as ri,h0 as ii,lF as ke,gq as qt,jn as oi,gB as ai,gE as rt,gw as ni,lG as si,lH as _t,lI as Wt,jm as Ke,a as li,lJ as ci,gC as di,al as wt,e as P,gU as ui,lK as jt,lL as Le,du as Xt,C as mi,A as hi,bF as Kt,lM as St,lN as Qt,dh as pi,gW as Ct,gD as vi,lO as Mt}from"./main.ce88c1f2.js";import{a as Ee}from"./quat.2da219b0.js";import{e as Yt,a as fi,f as gi,r as At,c as xi}from"./vec33.e14caab9.js";import{c as it,x as $e,u as Zt,i as pe,L as bi,O as $t,E as yi}from"./BufferView.b1946b5b.js";import{l as Pt,u as Ti,h as _i,s as wi,c as me,f as Si,a as Ci,n as Mi,o as he,r as le,b as Ai,d as $i,e as Ot,g as Pi,t as Oi,i as Fi,j as zi,k as Ii}from"./DefaultMaterial_COLOR_GAMMA.e23eb09e.js";import{t as Jt,r as Di,g as Li,u as Ei,c as Ri,s as Ni,b as Bi,l as Vi,d as Hi,e as Gi,f as Ui}from"./requestImageUtils.70a49f53.js";import{o as J,n as ki,u as qi,c as Wi}from"./Texture.4decc677.js";import{a as ji,f as Xi,o as Ki,l as Qi,r as Yi,n as Zi}from"./VertexArrayObject.643de000.js";import{A as er}from"./InterleavedLayout.07cf9ce2.js";import{t as Ji}from"./vec3f32.9cc42d31.js";class lt{constructor(e,r,i,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=o,this.center=N(),G(e.length>=1),G(i.length%this._numIndexPerPrimitive==0),G(i.length>=e.length*this._numIndexPerPrimitive),G(o.size===3||o.size===4);const{data:a,size:n}=o,c=e.length;let d=n*i[this._numIndexPerPrimitive*e[0]];se.clear(),se.push(d),this.bbMin=nt(a[d],a[d+1],a[d+2]),this.bbMax=Vr(this.bbMin);for(let u=0;u<c;++u){const p=this._numIndexPerPrimitive*e[u];for(let m=0;m<this._numIndexPerPrimitive;++m){d=n*i[p+m],se.push(d);let f=a[d];this.bbMin[0]=Math.min(f,this.bbMin[0]),this.bbMax[0]=Math.max(f,this.bbMax[0]),f=a[d+1],this.bbMin[1]=Math.min(f,this.bbMin[1]),this.bbMax[1]=Math.max(f,this.bbMax[1]),f=a[d+2],this.bbMin[2]=Math.min(f,this.bbMin[2]),this.bbMax[2]=Math.max(f,this.bbMax[2])}}et(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let u=0;u<se.length;++u){d=se.getItemAt(u);const p=a[d]-this.center[0],m=a[d+1]-this.center[1],f=a[d+2]-this.center[2],h=p*p+m*m+f*f;if(h<=l)continue;const b=Math.sqrt(h),y=.5*(b-this.radius);this.radius=this.radius+y,l=this.radius*this.radius;const x=y/b;this.center[0]+=p*x,this.center[1]+=m*x,this.center[2]+=f*x}se.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Hr(this.bbMin,this.bbMax)>1){const e=et(N(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let l=0;l<8;++l)o[l]=0;const{data:a,size:n}=this.position;for(let l=0;l<r;++l){let u=0;const p=this._numIndexPerPrimitive*this.primitiveIndices[l];let m=n*this.indices[p],f=a[m],h=a[m+1],b=a[m+2];for(let y=1;y<this._numIndexPerPrimitive;++y){m=n*this.indices[p+y];const x=a[m],R=a[m+1],C=a[m+2];x<f&&(f=x),R<h&&(h=R),C<b&&(b=C)}f<e[0]&&(u|=1),h<e[1]&&(u|=2),b<e[2]&&(u|=4),i[l]=u,++o[u]}let c=0;for(let l=0;l<8;++l)o[l]>0&&++c;if(c<2)return;const d=new Array(8);for(let l=0;l<8;++l)d[l]=o[l]>0?new Uint32Array(o[l]):void 0;for(let l=0;l<8;++l)o[l]=0;for(let l=0;l<r;++l){const u=i[l];d[u][o[u]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)d[l]!==void 0&&(this._children[l]=new lt(d[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){se.prune()}}const se=new Gt({deallocator:null});class ct{constructor(){this.id=Gr()}unload(){}}class tr extends ct{constructor(e,r=[],i=0,o=-1){super(),this._primitiveType=i,this.edgeIndicesLength=o,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[a,n]of e)n&&this._vertexAttributes.set(a,{...n});if(r==null||r.length===0){const a=eo(this._vertexAttributes),n=Pt(a);this.edgeIndicesLength=this.edgeIndicesLength<0?a:this.edgeIndicesLength;for(const c of this._vertexAttributes.keys())this._indices.set(c,n)}else for(const[a,n]of r)n&&(this._indices.set(a,to(n)),a==="position"&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(a).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return H(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===0?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const r=this.indices.get("position"),i=this.vertexAttributes.get("position");return Ti(i,r,e)}computeAttachmentOriginPoints(e){const r=this.indices.get("position"),i=this.vertexAttributes.get("position");return _i(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(e.length===0)return null;const r=this.primitiveType===0?3:1;G(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=Pt(e.length/r),o=this.vertexAttributes.get("position");return new lt(i,r,e,o)}}function eo(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function to(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}function ro(){if(H(Qe)){const t=e=>Ur(`esri/libs/basisu/${e}`);Qe=import("./basis_transcoder.c8b2406d.js").then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Qe}let Qe,j=null,Fe=null;async function rr(){return H(Fe)&&(Fe=ro(),j=await Fe),Fe}function io(t,e){if(H(j))return t.byteLength;const r=new j.BasisFile(new Uint8Array(t)),i=or(r)?ir(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function oo(t,e){if(H(j))return t.byteLength;const r=new j.KTX2File(new Uint8Array(t)),i=ar(r)?ir(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function ir(t,e,r,i,o){const a=ji(e?37496:37492),n=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function or(t){return t.getNumImages()>=1&&!t.isUASTC()}function ar(t){return t.getFaces()>=1&&t.isETC1S()}async function ao(t,e,r){H(j)&&(j=await rr());const i=new j.BasisFile(new Uint8Array(r));if(!or(i))return null;i.startTranscoding();const o=nr(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,c)=>i.transcodeImage(c,0,a,n,0,0));return i.close(),i.delete(),o}async function no(t,e,r){H(j)&&(j=await rr());const i=new j.KTX2File(new Uint8Array(r));if(!ar(i))return null;i.startTranscoding();const o=nr(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,c)=>i.transcodeImage(c,a,0,0,n,0,-1,-1));return i.close(),i.delete(),o}function nr(t,e,r,i,o,a,n,c){const{compressedTextureETC:d,compressedTextureS3TC:l}=t.capabilities,[u,p]=d?i?[1,37496]:[0,37492]:l?i?[3,33779]:[2,33776]:[13,6408],m=e.hasMipmap?r:Math.min(1,r),f=[];for(let x=0;x<m;x++)f.push(new Uint8Array(n(x,u))),c(x,u,f[x]);const h=f.length>1,b=h?9987:9729,y={...e,samplingMode:b,hasMipmap:h,internalFormat:p,width:o,height:a};return new J(t,y,{type:"compressed",levels:f})}const Se=He.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),so=542327876,lo=131072,co=4;function dt(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function uo(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const mo=dt("DXT1"),ho=dt("DXT3"),po=dt("DXT5"),vo=31,fo=0,go=1,xo=2,bo=3,yo=4,To=7,_o=20,wo=21;function So(t,e,r){const{textureData:i,internalFormat:o,width:a,height:n}=Co(r,e.hasMipmap);return e.samplingMode=i.levels.length>1?9987:9729,e.hasMipmap=i.levels.length>1,e.internalFormat=o,e.width=a,e.height=n,new J(t,e,i)}function Co(t,e){const r=new Int32Array(t,0,vo);if(r[fo]!==so)return Se.error("Invalid magic number in DDS header"),null;if(!(r[_o]&co))return Se.error("Unsupported format, must contain a FourCC code"),null;const i=r[wo];let o,a;switch(i){case mo:o=8,a=33776;break;case ho:o=16,a=33778;break;case po:o=16,a=33779;break;default:return Se.error("Unsupported FourCC code:",uo(i)),null}let n=1,c=r[yo],d=r[bo];(3&c)==0&&(3&d)==0||(Se.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,d=d+3&-4);const l=c,u=d;let p,m;r[xo]&lo&&e!==!1&&(n=Math.max(1,r[To])),n===1||De(c)&&De(d)||(Se.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let f=r[go]+4;const h=[];for(let b=0;b<n;++b)m=(c+3>>2)*(d+3>>2)*o,p=new Uint8Array(t,f,m),h.push(p),f+=m,c=Math.max(1,c>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:h},internalFormat:a,width:l,height:u}}const qe=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),Mo=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Ao=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];function $o(t,e=Mo,r=qe,i=-1,o=1){let a=null;return e===Ao?a=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):a=new Float32Array([i,i,o,i,i,o,o,o]),new Xi(t,r,{geometry:e},{geometry:Ki.createVertex(t,35044,a)})}class V extends ct{constructor(e,r){super(),this.data=e,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new kr,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=V.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;H(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){yt(e.src)||e.preload==="auto"&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){qr(e.src)||yt(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,r){if(H(e))return 0;if(_e(e)||we(e))return r.encoding===V.KTX2_ENCODING?oo(e,r.mipmap):r.encoding===V.BASIS_ENCODING?io(e,r.mipmap):e.byteLength;const{width:i,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?V.getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*o*(r.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var r;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(g(this._glTexture))return this._glTexture;if(g(this._loadingPromise))return this._loadingPromise;const i=this.data;return H(i)?(this._glTexture=new J(e,this.createDescriptor(e),null),this._glTexture):typeof i=="string"?this.loadFromURL(e,r,i):i instanceof Image?this.loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this.loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this.loadFromImage(e,i,r):(_e(i)||we(i))&&this.params.encoding===V.DDS_ENCODING?this.loadFromDDSData(e,i):(_e(i)||we(i))&&this.params.encoding===V.KTX2_ENCODING?this.loadFromKTX2(e,i):(_e(i)||we(i))&&this.params.encoding===V.BASIS_ENCODING?this.loadFromBasis(e,i):we(i)?this.loadFromPixelData(e,i):_e(i)?this.loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this.data instanceof HTMLVideoElement)||H(this._glTexture)||this.data.readyState<2||i===this.data.currentTime)return i;if(g(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:a,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this.drawStretchedTexture(e,r,o,a,n,this._glTexture)}else{const{width:o,height:a}=this.data,{width:n,height:c}=this._glTexture.descriptor;o!==n||a!==c?this._glTexture.updateData(0,0,0,Math.min(o,n),Math.min(a,c),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,r){return this._glTexture=So(e,this.createDescriptor(e),r),this._glTexture}loadFromKTX2(e,r){return this.loadAsync(()=>no(e,this.createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}loadFromBasis(e,r){return this.loadAsync(()=>ao(e,this.createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}loadFromPixelData(e,r){G(this.params.width>0&&this.params.height>0);const i=this.createDescriptor(e);return i.pixelFormat=this.params.components===1?6409:this.params.components===3?6407:6408,i.width=this.params.width,i.height=this.params.height,this._glTexture=new J(e,i,r),this._glTexture}loadFromURL(e,r,i){return this.loadAsync(async o=>{const a=await Jt(i,{signal:o});return this.loadFromImage(e,a,r)})}loadFromImageElement(e,r,i){return i.complete?this.loadFromImage(e,i,r):this.loadAsync(async o=>{const a=await Wr(i,i.src,!1,o);return this.loadFromImage(e,a,r)})}loadFromVideoElement(e,r,i){return i.readyState>=2?this.loadFromImage(e,i,r):this.loadFromVideoElementAsync(e,r,i)}loadFromVideoElementAsync(e,r,i){return this.loadAsync(o=>new Promise((a,n)=>{const c=()=>{i.removeEventListener("loadeddata",d),i.removeEventListener("error",l),Qr(u)},d=()=>{i.readyState>=2&&(c(),a(this.loadFromImage(e,i,r)))},l=p=>{c(),n(p||new Ut("Failed to load video"))};i.addEventListener("loadeddata",d),i.addEventListener("error",l);const u=jr(o,()=>l(Xr()))}))}loadFromImage(e,r,i){const o=V.getDataDimensions(r);this.params.width=o.width,this.params.height=o.height;const a=this.createDescriptor(e);return a.pixelFormat=this.params.components===3?6407:6408,!this.requiresPowerOfTwo(e,a)||De(o.width)&&De(o.height)?(a.width=o.width,a.height=o.height,this._glTexture=new J(e,a,r),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(e,r,o,a,i),this._glTexture)}loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}requiresPowerOfTwo(e,r){const o=typeof r.wrapMode=="number"?r.wrapMode===33071:r.wrapMode.s===33071&&r.wrapMode.t===33071;return!ki(e.gl)&&(r.hasMipmap||!o)}makePowerOfTwoTexture(e,r,i,o,a){const{width:n,height:c}=i,d=Tt(n),l=Tt(c);let u;switch(o.width=d,o.height=l,this.params.powerOfTwoResizeMode){case 2:o.textureCoordinateScaleFactor=[n/d,c/l],u=new J(e,o),u.updateData(0,0,0,n,c,r);break;case 1:case null:case void 0:u=this.stretchToPowerOfTwo(e,r,o,a());break;default:Kr(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&u.generateMipmap(),u}stretchToPowerOfTwo(e,r,i,o){const a=new J(e,i),n=new Qi(e,{colorTarget:0,depthStencilTarget:0},a),c=new J(e,{target:3553,pixelFormat:i.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),d=$o(e),l=e.getBoundFramebufferObject();return this.drawStretchedTexture(e,o,n,d,c,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:c,framebuffer:n}:(d.dispose(!0),c.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(l),a}drawStretchedTexture(e,r,i,o,a,n){e.bindFramebuffer(i);const c=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const d=r.program;e.useProgram(d),d.setUniform4f("color",1,1,1,1),d.bindTexture(a,"tex"),e.bindVAO(o),r.bindPipelineState(e),e.drawArrays(5,0,Yi(o,"geometry")),e.bindFramebuffer(null),e.setViewport(c.x,c.y,c.width,c.height)}unload(){if(g(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(g(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),g(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}V.DDS_ENCODING="image/vnd-ms.dds",V.KTX2_ENCODING="image/ktx2",V.BASIS_ENCODING="image/x.basis";function s(t,...e){let r="";for(let i=0;i<e.length;i++)r+=t[i]+e[i];return r+=t[t.length-1],r}(function(t){function e(i){return Math.round(i).toString()}function r(i){return i.toPrecision(8)}t.int=e,t.float=r})(s||(s={}));const Po=.1,ut=.001;function ce(t,e){const r=t.fragment;switch(e.alphaDiscardMode){case 0:r.code.add(s`
        #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(ut)}) { discard; } }
      `);break;case 1:r.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}class Oo{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,r,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,r),this._technique),this._technique}ensureResources(e){return 2}}class Fo extends Oo{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then(r=>this._texture=r),this._acquire(e.normalTextureId).then(r=>this._textureNormal=r),this._acquire(e.emissiveTextureId).then(r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId).then(r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId).then(r=>this._textureMetallicRoughness=r)}dispose(){this._texture=ne(this._texture),this._textureNormal=ne(this._textureNormal),this._textureEmissive=ne(this._textureEmissive),this._textureOcclusion=ne(this._textureOcclusion),this._textureMetallicRoughness=ne(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}updateTexture(e){(H(this._texture)||e!==this._texture.id)&&(this._texture=ne(this._texture),this._textureId=e,this._acquire(this._textureId).then(r=>this._texture=r))}bindTextures(e){g(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),g(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),g(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),g(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),g(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const r=g(this._texture)?this._texture.glTexture:null;g(r)&&r.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){return H(e)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(e).then(r=>this._disposed?(ne(r),null):r).finally(()=>--this._numLoading))}}function zo(t){return Math.abs(t*t*t)}function Io(t,e,r){const i=r.parameters,o=r.paddingPixelsOverride;return Ce.scale=Math.min(i.divisor/(e-i.offset),1),Ce.factor=zo(t),Ce.minPixelSize=i.minPixelSize,Ce.paddingPixels=o,Ce}function Do(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Lo(t,e){return Math.max(Yr(t*e.scale,t,e.factor),Do(t,e))}function Eo(t,e,r,i){return Lo(t,Io(e,r,i))}const Ce={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function Ro(t){return!!g(t)&&!t.visible}const ze=Zr();function No(t,e,r,i,o,a,n){if(!Ro(e))if(t.boundingInfo){G(t.primitiveType===0);const c=r.tolerance;sr(t.boundingInfo,i,o,c,a,n)}else{const c=t.indices.get("position"),d=t.vertexAttributes.get("position");cr(i,o,0,c.length/3,c,d,void 0,a,n)}}const Bo=N();function sr(t,e,r,i,o,a){if(H(t))return;const n=Ho(e,r,Bo);if(ei(ze,t.getBBMin()),ti(ze,t.getBBMax()),g(o)&&o.applyToAabb(ze),Go(ze,e,n,i)){const{primitiveIndices:c,indices:d,position:l}=t,u=c?c.length:d.length/3;if(u>Xo){const p=t.getChildren();if(p!==void 0){for(let m=0;m<8;++m)p[m]!==void 0&&sr(p[m],e,r,i,o,a);return}}cr(e,r,0,u,d,l,c,o,a)}}const lr=N();function cr(t,e,r,i,o,a,n,c,d){if(n)return Vo(t,e,r,i,o,a,n,c,d);const l=a.data,u=a.stride||a.size,p=t[0],m=t[1],f=t[2],h=e[0]-p,b=e[1]-m,y=e[2]-f;for(let x=r,R=3*r;x<i;++x){let C=u*o[R++],S=l[C++],F=l[C++],T=l[C];C=u*o[R++];let _=l[C++],M=l[C++],v=l[C];C=u*o[R++];let w=l[C++],z=l[C++],I=l[C];g(c)&&([S,F,T]=c.applyToVertex(S,F,T,x),[_,M,v]=c.applyToVertex(_,M,v,x),[w,z,I]=c.applyToVertex(w,z,I,x));const A=_-S,L=M-F,D=v-T,E=w-S,k=z-F,K=I-T,te=b*K-k*y,xe=y*E-K*h,be=h*k-E*b,q=A*te+L*xe+D*be;if(Math.abs(q)<=Number.EPSILON)continue;const U=p-S,re=m-F,ie=f-T,X=U*te+re*xe+ie*be;if(q>0){if(X<0||X>q)continue}else if(X>0||X<q)continue;const Q=re*D-L*ie,ye=ie*A-D*U,Te=U*L-A*re,oe=h*Q+b*ye+y*Te;if(q>0){if(oe<0||X+oe>q)continue}else if(oe>0||X+oe<q)continue;const ae=(E*Q+k*ye+K*Te)/q;ae>=0&&d(ae,dr(A,L,D,E,k,K,lr),x,!1)}}function Vo(t,e,r,i,o,a,n,c,d){const l=a.data,u=a.stride||a.size,p=t[0],m=t[1],f=t[2],h=e[0]-p,b=e[1]-m,y=e[2]-f;for(let x=r;x<i;++x){const R=n[x];let C=3*R,S=u*o[C++],F=l[S++],T=l[S++],_=l[S];S=u*o[C++];let M=l[S++],v=l[S++],w=l[S];S=u*o[C];let z=l[S++],I=l[S++],A=l[S];g(c)&&([F,T,_]=c.applyToVertex(F,T,_,x),[M,v,w]=c.applyToVertex(M,v,w,x),[z,I,A]=c.applyToVertex(z,I,A,x));const L=M-F,D=v-T,E=w-_,k=z-F,K=I-T,te=A-_,xe=b*te-K*y,be=y*k-te*h,q=h*K-k*b,U=L*xe+D*be+E*q;if(Math.abs(U)<=Number.EPSILON)continue;const re=p-F,ie=m-T,X=f-_,Q=re*xe+ie*be+X*q;if(U>0){if(Q<0||Q>U)continue}else if(Q>0||Q<U)continue;const ye=ie*E-D*X,Te=X*L-E*re,oe=re*D-L*ie,ae=h*ye+b*Te+y*oe;if(U>0){if(ae<0||Q+ae>U)continue}else if(ae>0||Q+ae<U)continue;const bt=(k*ye+K*Te+te*oe)/U;bt>=0&&d(bt,dr(L,D,E,k,K,te,lr),R,!1)}}const Ft=N(),zt=N();function dr(t,e,r,i,o,a,n){return fe(Ft,t,e,r),fe(zt,i,o,a),tt(n,Ft,zt),Ge(n,n),n}function Ho(t,e,r){return fe(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Go(t,e,r,i){return Uo(t,e,r,i,1/0)}function Uo(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let c=Math.min(a,n),d=Math.max(a,n);const l=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(d=Math.min(d,Math.max(l,u)),d<0||(c=Math.max(c,Math.min(l,u)),c>d))return!1;const p=(t[2]-i-e[2])*r[2],m=(t[5]+i-e[2])*r[2];return d=Math.min(d,Math.max(p,m)),!(d<0)&&(c=Math.max(c,Math.min(p,m)),!(c>d)&&c<o)}function ko(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;o&&(a=Eo(a,i,e,o));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Jr(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function qo(t,e,r){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;e.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,o)}function ur(t,e){const r=e?ur(e):{};for(const i in t){let o=t[i];o&&o.forEach&&(o=jo(o)),o==null&&i in r||(r[i]=o)}return r}function Wo(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(r=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o)}return r}function jo(t){const e=[];return t.forEach(r=>e.push(r)),e}const It={multiply:1,ignore:2,replace:3,tint:4},Xo=1e3;class Ko extends ct{constructor(e,r){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=qe,this._parameters=ur(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Wo(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){g(this.repository)&&this.repository.materialChanged(this)}}const Qo={renderOccluded:1};function Yo(t,e,r){const i=st(t.direction,W(r,e,t.origin));return Ue(r,t.origin,ue(r,t.direction,i)),r}function Zo(){return{origin:null,direction:null}}new wi(Zo);function Jo(t,e){const r=st(t,e)/(Z(t)*Z(e));return-kt(r)}const ea=He.getLogger("esri.geometry.support.sphere");function mt(){return ri()}function mr(t,e=mt()){return ii(e,t)}function ta(t,e){return ke(t[0],t[1],t[2],e)}function ra(t){return t}function ia(t){t[0]=t[1]=t[2]=t[3]=0}function oa(t){return t}function ht(t){return Array.isArray(t)?t[3]:t}function ee(t){return Array.isArray(t)?t:pa}function aa(t,e,r,i){return ke(t,e,r,i)}function na(t,e,r){return t!==r&&qt(r,t),r[3]=t[3]+e,r}function sa(t,e,r){return ea.error("sphere.setExtent is not yet supported"),t===r?r:mr(t,r)}function We(t,e,r){if(H(e))return!1;const{origin:i,direction:o}=e,a=la;a[0]=i[0]-t[0],a[1]=i[1]-t[1],a[2]=i[2]-t[2];const n=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),d=c*c-4*n*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-t[3]*t[3]);if(d<0)return!1;const l=Math.sqrt(d);let u=(-c-l)/(2*n);const p=(-c+l)/(2*n);return(u<0||p<u&&p>0)&&(u=p),!(u<0)&&(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),!0)}const la=N();function ca(t,e){return We(t,e,null)}function da(t,e,r){if(We(t,e,r))return r;const i=hr(t,e,me.get());return Ue(r,e.origin,ue(me.get(),e.direction,ni(e.origin,i)/Z(e.direction))),r}function hr(t,e,r){const i=me.get(),o=Si.get();tt(i,e.origin,e.direction);const a=ht(t);tt(r,i,e.origin),ue(r,r,1/Z(r)*a);const n=vr(t,e.origin),c=Jo(e.origin,r);return oi(o),ai(o,o,c+n,i),rt(r,r,o),r}function ua(t,e,r){return We(t,e,r)?r:(Yo(e,ee(t),r),pr(t,r,r))}function pr(t,e,r){const i=W(me.get(),e,ee(t)),o=ue(me.get(),i,t[3]/Z(i));return Ue(r,o,ee(t))}function ma(t,e){const r=W(me.get(),e,ee(t)),i=si(r),o=t[3]*t[3];return Math.sqrt(Math.abs(i-o))}function vr(t,e){const r=W(me.get(),e,ee(t)),i=Z(r),o=ht(t),a=o+Math.abs(o-i);return kt(o/a)}const Ye=N();function fr(t,e,r,i){const o=W(Ye,e,ee(t));switch(r){case 0:{const a=_t(o,Ye)[2];return fe(i,-Math.sin(a),Math.cos(a),0)}case 1:{const a=_t(o,Ye),n=a[1],c=a[2],d=Math.sin(n);return fe(i,-d*Math.cos(c),-d*Math.sin(c),Math.cos(n))}case 2:return Ge(i,o);default:return}}function gr(t,e){const r=W(ot,e,ee(t));return Z(r)-t[3]}function ha(t,e,r,i){const o=gr(t,e),a=fr(t,e,2,ot),n=ue(ot,a,r-o);return Ue(i,e,n)}const pa=N(),ot=N();Object.freeze({__proto__:null,create:mt,copy:mr,fromCenterAndRadius:ta,wrap:ra,clear:ia,fromRadius:oa,getRadius:ht,getCenter:ee,fromValues:aa,elevate:na,setExtent:sa,intersectRay:We,intersectsRay:ca,intersectRayClosestSilhouette:da,closestPointOnSilhouette:hr,closestPoint:ua,projectPoint:pr,distanceToSilhouette:ma,angleToSilhouette:vr,axisAt:fr,altitudeAt:gr,setAltitudeAt:ha});class va{constructor(e=0){this.offset=e,this.sphere=mt(),this.tmpVertex=N()}applyToVertex(e,r,i){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*r+o[8]*i+o[12],n=o[1]*e+o[5]*r+o[9]*i+o[13],c=o[2]*e+o[6]*r+o[10]*i+o[14];const d=this.offset/Math.sqrt(a*a+n*n+c*c);a+=a*d,n+=n*d,c+=c*d;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*a+l[4]*n+l[8]*c+l[12],this.tmpVertex[1]=l[1]*a+l[5]*n+l[9]*c+l[13],this.tmpVertex[2]=l[2]*a+l[6]*n+l[10]*c+l[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const o=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*o,r[1]+=r[1]*o,r[2]+=r[2]*o}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const Dt=new va;function fa(t){return g(t)?(Dt.offset=t,Dt):null}function ga(t,e,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=t.length;i*=a;for(let c=0;c<n;++c){const d=2*t[c];o[i]=e[d],o[i+1]=e[d+1],i+=a}}function xr(t,e,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,c=t.length;if(i*=n,o==null||o===1)for(let d=0;d<c;++d){const l=3*t[d];a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],i+=n}else for(let d=0;d<c;++d){const l=3*t[d];for(let u=0;u<o;++u)a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],i+=n}}function xa(t,e,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,c=t.length;if(i*=n,o===1)for(let d=0;d<c;++d){const l=4*t[d];a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],a[i+3]=e[l+3],i+=n}else for(let d=0;d<c;++d){const l=4*t[d];for(let u=0;u<o;++u)a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],a[i+3]=e[l+3],i+=n}}function ba(t,e,r,i,o,a=1){if(!r)return void xr(t,e,i,o,a);const n=i.typedBuffer,c=i.typedBufferStride,d=t.length,l=r[0],u=r[1],p=r[2],m=r[4],f=r[5],h=r[6],b=r[8],y=r[9],x=r[10],R=r[12],C=r[13],S=r[14];if(o*=c,a===1)for(let F=0;F<d;++F){const T=3*t[F],_=e[T],M=e[T+1],v=e[T+2];n[o]=l*_+m*M+b*v+R,n[o+1]=u*_+f*M+y*v+C,n[o+2]=p*_+h*M+x*v+S,o+=c}else for(let F=0;F<d;++F){const T=3*t[F],_=e[T],M=e[T+1],v=e[T+2],w=l*_+m*M+b*v+R,z=u*_+f*M+y*v+C,I=p*_+h*M+x*v+S;for(let A=0;A<a;++A)n[o]=w,n[o+1]=z,n[o+2]=I,o+=c}}function ya(t,e,r,i,o,a=1){if(!r)return void xr(t,e,i,o,a);const n=r,c=i.typedBuffer,d=i.typedBufferStride,l=t.length,u=n[0],p=n[1],m=n[2],f=n[4],h=n[5],b=n[6],y=n[8],x=n[9],R=n[10],C=!Wt(n),S=1e-6,F=1-S;if(o*=d,a===1)for(let T=0;T<l;++T){const _=3*t[T],M=e[_],v=e[_+1],w=e[_+2];let z=u*M+f*v+y*w,I=p*M+h*v+x*w,A=m*M+b*v+R*w;if(C){const L=z*z+I*I+A*A;if(L<F&&L>S){const D=1/Math.sqrt(L);z*=D,I*=D,A*=D}}c[o+0]=z,c[o+1]=I,c[o+2]=A,o+=d}else for(let T=0;T<l;++T){const _=3*t[T],M=e[_],v=e[_+1],w=e[_+2];let z=u*M+f*v+y*w,I=p*M+h*v+x*w,A=m*M+b*v+R*w;if(C){const L=z*z+I*I+A*A;if(L<F&&L>S){const D=1/Math.sqrt(L);z*=D,I*=D,A*=D}}for(let L=0;L<a;++L)c[o+0]=z,c[o+1]=I,c[o+2]=A,o+=d}}function Ta(t,e,r,i,o,a=1){if(!r)return void xa(t,e,i,o,a);const n=r,c=i.typedBuffer,d=i.typedBufferStride,l=t.length,u=n[0],p=n[1],m=n[2],f=n[4],h=n[5],b=n[6],y=n[8],x=n[9],R=n[10],C=!Wt(n),S=1e-6,F=1-S;if(o*=d,a===1)for(let T=0;T<l;++T){const _=4*t[T],M=e[_],v=e[_+1],w=e[_+2],z=e[_+3];let I=u*M+f*v+y*w,A=p*M+h*v+x*w,L=m*M+b*v+R*w;if(C){const D=I*I+A*A+L*L;if(D<F&&D>S){const E=1/Math.sqrt(D);I*=E,A*=E,L*=E}}c[o+0]=I,c[o+1]=A,c[o+2]=L,c[o+3]=z,o+=d}else for(let T=0;T<l;++T){const _=4*t[T],M=e[_],v=e[_+1],w=e[_+2],z=e[_+3];let I=u*M+f*v+y*w,A=p*M+h*v+x*w,L=m*M+b*v+R*w;if(C){const D=I*I+A*A+L*L;if(D<F&&D>S){const E=1/Math.sqrt(D);I*=E,A*=E,L*=E}}for(let D=0;D<a;++D)c[o+0]=I,c[o+1]=A,c[o+2]=L,c[o+3]=z,o+=d}}function Lt(t,e,r,i,o,a=1){const n=i.typedBuffer,c=i.typedBufferStride,d=t.length;if(o*=c,a===1){if(r===4)for(let l=0;l<d;++l){const u=4*t[l];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=c}else if(r===3)for(let l=0;l<d;++l){const u=3*t[l];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=c}}else if(r===4)for(let l=0;l<d;++l){const u=4*t[l];for(let p=0;p<a;++p)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=c}else if(r===3)for(let l=0;l<d;++l){const u=3*t[l];for(let p=0;p<a;++p)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=c}}function _a(t,e,r,i,o,a){for(const n of e.fieldNames){const c=t.vertexAttributes.get(n),d=t.indices.get(n);if(c&&d)switch(n){case"position":{G(c.size===3);const l=o.getField(n,pe);l&&ba(d,c.data,r,l,a);break}case"normal":{G(c.size===3);const l=o.getField(n,pe);l&&ya(d,c.data,i,l,a);break}case"uv0":{G(c.size===2);const l=o.getField(n,Zt);l&&ga(d,c.data,l,a);break}case"color":{G(c.size===3||c.size===4);const l=o.getField(n,$e);l&&Lt(d,c.data,c.size,l,a);break}case"symbolColor":{G(c.size===3||c.size===4);const l=o.getField(n,$e);l&&Lt(d,c.data,c.size,l,a);break}case"tangent":{G(c.size===4);const l=o.getField(n,it);l&&Ta(d,c.data,i,l,a);break}}}}function de(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.sliceHighlightDisabled?s`#define highlightSlice(_color_, _pos_) (_color_)`:s`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r),t.fragment.code.add(o)}else{const r=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r)}}function wa(t,e,r,i){e.slicePlaneEnabled&&(g(r)?(i?(W(Et,r.origin,i),t.setUniform3fv("slicePlaneOrigin",Et)):t.setUniform3fv("slicePlaneOrigin",r.origin),t.setUniform3fv("slicePlaneBasis1",r.basis1),t.setUniform3fv("slicePlaneBasis2",r.basis2)):(t.setUniform3fv("slicePlaneBasis1",Ke),t.setUniform3fv("slicePlaneBasis2",Ke),t.setUniform3fv("slicePlaneOrigin",Ke)))}const Et=N();function br({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function yr(t){return!!li("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}function Pe(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add("modelOriginHi","vec3"),t.attributes.add("modelOriginLo","vec3"),t.attributes.add("model","mat3"),t.attributes.add("modelNormal","mat3")),e.instancedDoublePrecision&&(t.vertex.include(br,e),t.vertex.uniforms.add("viewOriginHi","vec3"),t.vertex.uniforms.add("viewOriginLo","vec3"));const r=[s`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,s`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,s`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,s`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,e.vertexTangents?s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:s``];t.vertex.code.add(r[0]),t.vertex.code.add(r[1]),t.vertex.code.add(r[2]),e.output===2&&t.vertex.code.add(r[3]),t.vertex.code.add(r[4])}(function(t){class e{}function r(i,o){Di(o,Rt,Nt,3),i.setUniform3fv("viewOriginHi",Rt),i.setUniform3fv("viewOriginLo",Nt)}t.Uniforms=e,t.bindCustomOrigin=r})(Pe||(Pe={}));const Rt=N(),Nt=N();function Sa(t){t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Tr(t,e){const r=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(Sa),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(s`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${e.viewingMode===1?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?s`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function Ca(t,e,r){if(!e.verticalOffset)return;const i=Ma(e.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;t.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}function Ma(t,e,r,i=Aa){return i.screenLength=t.screenLength,i.perDistance=Math.tan(.5*e)/(.5*r),i.minWorldLength=t.minWorldLength,i.maxWorldLength=t.maxWorldLength,i}const Aa={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},$a=ke(1,1,0,1),Pa=ke(1,0,1,1);function Oa(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.constants.add("occludedHighlightFlag","vec4",$a).add("unoccludedHighlightFlag","vec4",Pa),t.fragment.code.add(s`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function Fa(t,e){t.bindTexture(e.highlightDepthTexture,"depthTex"),t.setUniform4f("highlightViewportPixelSz",0,0,e.inverseViewport[0],e.inverseViewport[1])}function Re(t,e){t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("cameraNearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.code.add(s`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function za(t,e){e.multipassTerrainEnabled&&e.terrainLinearDepthTexture&&t.bindTexture(e.terrainLinearDepthTexture,"terrainDepthTexture")}function ve(t,e){e.attributeTextureCoordinates===1&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),e.attributeTextureCoordinates===2&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),e.attributeTextureCoordinates===0&&t.vertex.code.add(s`void forwardTextureCoordinates() {}`)}function Ia(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function _r(t,e){t.include(ve,e),t.fragment.code.add(s`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.attributeTextureCoordinates===1&&t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),e.attributeTextureCoordinates===2&&(t.include(Ia),t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}Ji(0,.6,.2);function wr(t,e){const r=t.fragment,i=e.hasMetalnessAndRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;e.pbrMode===1&&i&&t.include(_r,e),e.pbrMode!==2?(e.pbrMode===0&&r.code.add(s`float getBakedOcclusion() { return 1.0; }`),e.pbrMode===1&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`),e.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(s`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(s`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(s`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${e.hasMetalnessAndRoughnessTexture?e.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(s`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Da(t,e,r=!1){r||(t.setUniform3fv("mrrFactors",e.mrrFactors),t.setUniform3fv("emissionFactor",e.emissiveFactor))}function pt(t){t.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function vt(t){t.fragment.include(pt),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(s`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function La(t,e,r){e.shadowMappingEnabled&&e.shadowMap.bindView(t,r)}function Me(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add("instanceFeatureAttribute","vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),t.vertex.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(s`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.vvInstancingEnabled?s`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function Ea(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}function Ra(t,e){Ea(t,e),e.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}function Na(t,e,r){t.setUniform3f("camPos",r[3]-e[0],r[7]-e[1],r[11]-e[2])}function Ba(t,e){t.setUniformMatrix4fv("proj",e)}function Va(t,e,r){di(Bt,r,e),t.setUniform3fv("localOrigin",e),t.setUniformMatrix4fv("view",Bt)}const Bt=ci();class Sr{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Ha{constructor(e,r,i=()=>this.dispose()){this.release=i,r&&(this._config=r.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=wt(this._program),this._pipeline=this._config=null}reload(e){wt(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,r){}bindMaterial(e,r){}bindDraw(e){}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}getPipelineState(e,r){return this._pipeline}}class Ga{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function O(t={}){return(e,r)=>{var i,o;e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r);const a=e._parameterNames.length-1,n=t.count||2,c=Math.ceil(Math.log2(n)),d=(o=e._parameterBits)!=null?o:[0];let l=0;for(;d[l]+c>16;)l++,l>=d.length&&d.push(0);e._parameterBits=d;const u=d[l],p=(1<<c)-1<<u;d[l]+=c,Object.defineProperty(e,r,{get(){return this[a]},set(m){if(this[a]!==m&&(this[a]=m,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~p|+m<<u&p,typeof m!="number"&&typeof m!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof m}})}}class Cr extends Zi{constructor(e,r,i){super(e,r.generateSource("vertex"),r.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new Gt({deallocator:null}),this._fragmentUniforms=qi()?r.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(H(e)||e.glName==null){const o=this._textures.get(r);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(r)),null}let i=this._textures.get(r);return i==null?(i=this._allocTextureUnit(e),this._textures.set(r,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(r,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),g(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if((e.type==="sampler2D"||e.type==="samplerCube")&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const Ua={mask:255},ka={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},qa={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function Mr(t,e){e.output===0&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):e.output===1||e.output===3?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("cameraNearFar","vec2"),t.vertex.code.add(s`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):t.vertex.code.add(s`void forwardLinearDepth() {}`)}function Ar(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ae(t,e){e.linearDepth?t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Wa(t){const e=s`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.fragment.code.add(e),t.vertex.code.add(e)}function je(t,e){e.normalType===0&&(t.attributes.add("normal","vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`)),e.normalType===1&&(t.include(Wa),t.attributes.add("normalCompressed","vec2"),t.vertex.code.add(s`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===3&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}function ft(t){t.attributes.add("position","vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function ja(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function $r(t,e){e.symbolColor?(t.include(ja),t.attributes.add("symbolColor","vec4"),t.varyings.add("colorMixMode","mediump float")):t.fragment.uniforms.add("colorMixMode","int"),e.symbolColor?t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Pr(t,e){e.attributeColor?(t.attributes.add("color","vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function at(t,e){t.include(ft),t.vertex.include(br,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),t.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),t.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),t.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),t.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),t.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),t.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),t.vertex.uniforms.add("uTransform_ProjFromView","mat4"),t.vertex.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),t.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),t.fragment.code.add(s`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}(function(t){class e{constructor(){this.worldFromModel_RS=Ee(),this.worldFromModel_TH=N(),this.worldFromModel_TL=N()}}t.ModelTransform=e;class r{constructor(){this.worldFromView_TH=N(),this.worldFromView_TL=N(),this.viewFromCameraRelative_RS=Ee(),this.projFromView=Yt()}}function i(a,n){a.setUniformMatrix3fv("uTransform_WorldFromModel_RS",n.worldFromModel_RS),a.setUniform3fv("uTransform_WorldFromModel_TH",n.worldFromModel_TH),a.setUniform3fv("uTransform_WorldFromModel_TL",n.worldFromModel_TL)}function o(a,n){a.setUniform3fv("uTransform_WorldFromView_TH",n.worldFromView_TH),a.setUniform3fv("uTransform_WorldFromView_TL",n.worldFromView_TL),a.setUniformMatrix4fv("uTransform_ProjFromView",n.projFromView),a.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",n.viewFromCameraRelative_RS)}t.ViewProjectionTransform=r,t.bindModelTransform=i,t.bindViewProjTransform=o})(at||(at={}));function Ne(t,e){e.normalType===0||e.normalType===1?(t.include(je,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),t.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):e.normalType===2?(t.include(at,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
    void forwardNormal() {
      vNormalWorld = ${e.viewingMode===1?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(s`void forwardNormal() {}`)}(function(t){function e(r,i){r.setUniformMatrix4fv("viewNormal",i)}t.bindUniforms=e})(Ne||(Ne={}));function Xa(t,e){t.fragment.include(pt),e.output===3?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):e.output===1&&t.fragment.code.add(s`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function Or(t,e){const r=t.vertex.code,i=t.fragment.code;e.output!==1&&e.output!==3||(t.include(Ae,{linearDepth:!0}),t.include(ve,e),t.include(Me,e),t.include(Xa,e),t.include(de,e),t.vertex.uniforms.add("cameraNearFar","vec2"),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(s`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),t.include(ce,e),i.add(s`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),e.output===2&&(t.include(Ae,{linearDepth:!1}),t.include(je,e),t.include(Ne,e),t.include(ve,e),t.include(Me,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.vertex.uniforms.add("viewNormal","mat4"),t.varyings.add("vPositionView","vec3"),r.add(s`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${e.normalType===0?s`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),t.include(de,e),t.include(ce,e),i.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${e.normalType===3?s`
            vec3 normal = screenDerivativeNormal(vPositionView);`:s`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),e.output===4&&(t.include(Ae,{linearDepth:!1}),t.include(ve,e),t.include(Me,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(s`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(de,e),t.include(ce,e),t.include(Oa),i.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function Be(t){t.include(pt),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Ka(t,e){const r=t.fragment;e.vertexTangents?(t.attributes.add("tangent","vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===2?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.attributeTextureCoordinates!==0&&(t.include(_r,e),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(s`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function gt(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(s`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(s`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function Qa(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==1&&e.pbrMode!==2||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function Ya(t){const e=t.fragment;e.uniforms.add("lightingMainDirection","vec3"),e.uniforms.add("lightingMainIntensity","vec3"),e.uniforms.add("lightingFixedFactor","float"),e.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Za(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Fr(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function xt(t,e){const r=t.fragment.code;t.include(Fr),e.pbrMode===3||e.pbrMode===4?(r.add(s`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==1&&e.pbrMode!==2||(t.include(Za),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function zr(t,e){const r=t.fragment;t.include(Ya),t.include(gt,e),e.pbrMode!==0&&t.include(xt,e),t.include(Qa,e),e.receiveShadows&&t.include(vt,e),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),t.include(Fr),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===0?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.viewingMode===1?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),e.pbrMode===0||e.pbrMode===4?r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):e.pbrMode!==1&&e.pbrMode!==2||(r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===2?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Ja(t,e){const r=t.fragment;r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode===1?r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):e.doubleSidedMode===2?r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}function en(t,e){const r=s`
  /*
  *  ${e.name}
  *  ${e.output===0?"RenderOutput: Color":e.output===1?"RenderOutput: Depth":e.output===3?"RenderOutput: Shadow":e.output===2?"RenderOutput: Normal":e.output===4?"RenderOutput: Highlight":""}
  */
  `;Wi()&&(t.fragment.code.add(r),t.vertex.code.add(r))}function tn(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Ve(t){t.include(tn),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(1)}) {
        return allMixed;
      }
      else if (mode == ${s.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${s.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${s.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}const rn=He.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Ir{constructor(){this.includedModules=new Map}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&rn.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r))}}class Dr extends Ir{constructor(){super(...arguments),this.vertex=new Vt,this.fragment=new Vt,this.attributes=new nn,this.varyings=new sn,this.extensions=new ge,this.constants=new B}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),c=a.code.generateSource(),d=e==="vertex"?cn:ln,l=this.constants.generateSource().concat(a.constants.generateSource());return`
${r.join(`
`)}

${d}

${l.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${c.join(`
`)}`}}class on{constructor(){this._entries=new Map}add(e,r,i){const o=`${e}_${r}_${i}`;return this._entries.set(o,{name:e,type:r,arraySize:i}),this}generateSource(){const e=r=>r?`[${r}]`:"";return Array.from(this._entries.values()).map(r=>`uniform ${r.type} ${r.name}${e(r.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class an{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Vt extends Ir{constructor(){super(...arguments),this.uniforms=new on,this.code=new an,this.constants=new B}get builder(){return this}}class nn{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class sn{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class ge{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?ge.ALLOWLIST_VERTEX:ge.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}ge.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ge.ALLOWLIST_VERTEX=[];class B{constructor(){this._entries=[]}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=B.numberToFloatStr(i);break;case"int":o=B.numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${B.numberToFloatStr(i[0])},                            ${B.numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${B.numberToFloatStr(i[0])},                            ${B.numberToFloatStr(i[1])},                            ${B.numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${B.numberToFloatStr(i[0])},                            ${B.numberToFloatStr(i[1])},                            ${B.numberToFloatStr(i[2])},                            ${B.numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${B.numberToIntStr(i[0])},                             ${B.numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${B.numberToIntStr(i[0])},                             ${B.numberToIntStr(i[1])},                             ${B.numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${B.numberToIntStr(i[0])},                             ${B.numberToIntStr(i[1])},                             ${B.numberToIntStr(i[2])},                             ${B.numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>B.numberToFloatStr(a)).join(", ")})`}return this._entries.push(`const ${r} ${e} = ${o};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ln=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,cn=`precision highp float;
precision highp sampler2D;`;function dn(t){const e=new Dr,r=e.vertex.code,i=e.fragment.code;return e.include(en,{name:"Default Material Shader",output:t.output}),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),e.include(ft),e.varyings.add("vpos","vec3"),e.include(Me,t),e.include(Pe,t),e.include(Tr,t),t.output!==0&&t.output!==7||(e.include(je,t),e.include(Ae,{linearDepth:!1}),t.normalType===0&&t.offsetBackfaces&&e.include(Ar),e.include(Ka,t),e.include(Ne,t),t.instancedColor&&e.attributes.add("instanceColor","vec4"),e.varyings.add("localvpos","vec3"),e.include(ve,t),e.include(Mr,t),e.include($r,t),e.include(Pr,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),r.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(ut)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===0?s`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${t.normalType===0&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${t.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),t.output===7&&(e.include(de,t),e.include(ce,t),t.multipassTerrainEnabled&&(e.fragment.include(Be),e.include(Re,t)),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(Ve),i.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?s`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===0&&(e.include(de,t),e.include(zr,t),e.include(gt,t),e.include(ce,t),t.receiveShadows&&e.include(vt,t),t.multipassTerrainEnabled&&(e.fragment.include(Be),e.include(Re,t)),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(wr,t),e.include(xt,t),e.fragment.include(Ve),e.include(Ja,t),i.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${t.normalType===3?s`
        vec3 normal = screenDerivativeNormal(localvpos);`:s`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===1?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===1?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?s`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t.hasNormalTexture?s`
              mat3 tangentSpace = ${t.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${t.pbrMode===1||t.pbrMode===2?t.viewingMode===1?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===1||t.pbrMode===2?s`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(Or,t),e}const un=Object.freeze({__proto__:null,build:dn});class Oe extends Ha{initializeProgram(e){const r=Oe.shader.get(),i=this.configuration,o=r.build({OITEnabled:i.transparencyPassType===0,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?3:0,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:yr(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Cr(e.rctx,o,qe)}bindPass(e,r){var i,o;Ba(this.program,r.camera.projectionMatrix);const a=this.configuration.output;(this.configuration.output===1||r.multipassTerrainEnabled||a===3)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),za(this.program,r)),a===7&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",It[e.colorMixMode])),a===0?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",It[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Da(this.program,e,this.configuration.isSchematic)):a===4&&Fa(this.program,r),Ra(this.program,e),Ca(this.program,e,r),qo(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==2&&e.textureAlphaMode!==3||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),(i=r.shadowMap)==null||i.bind(this.program),(o=r.ssaoHelper)==null||o.bind(this.program,r.camera)}bindDraw(e){const r=this.configuration.instancedDoublePrecision?nt(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Va(this.program,r,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===0||this.configuration.output===7||this.configuration.output===1&&this.configuration.screenSizePerspective||this.configuration.output===2&&this.configuration.screenSizePerspective||this.configuration.output===4&&this.configuration.screenSizePerspective)&&Na(this.program,r,e.camera.viewInverseTransposeMatrix),this.configuration.output===2&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Pe.bindCustomOrigin(this.program,r),wa(this.program,this.configuration,e.slicePlane,r),this.configuration.output===0&&La(this.program,e,r)}setPipeline(e,r){const i=this.configuration,o=e===3,a=e===2;return Li({blending:i.output!==0&&i.output!==7||!i.transparent?null:o?Ei:Ri(e),culling:mn(i)&&Ni(i.cullFace),depthTest:{func:Bi(e)},depthWrite:o||a?i.writeDepth&&Vi:null,colorWrite:Hi,stencilWrite:i.sceneHasOcludees?Ua:null,stencilTest:i.sceneHasOcludees?r?qa:ka:null,polygonOffset:o||a?null:Gi(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function mn(t){return t.cullFace?t.cullFace!==0:!t.slicePlaneEnabled&&!t.transparent&&!t.doubleSidedMode}Oe.shader=new Sr(un,()=>import("./DefaultMaterial.glsl.488dfb99.js"));class $ extends Ga{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}P([O({count:8})],$.prototype,"output",void 0),P([O({count:4})],$.prototype,"alphaDiscardMode",void 0),P([O({count:3})],$.prototype,"doubleSidedMode",void 0),P([O()],$.prototype,"isSchematic",void 0),P([O()],$.prototype,"vertexColors",void 0),P([O()],$.prototype,"offsetBackfaces",void 0),P([O()],$.prototype,"symbolColors",void 0),P([O()],$.prototype,"vvSize",void 0),P([O()],$.prototype,"vvColor",void 0),P([O()],$.prototype,"verticalOffset",void 0),P([O()],$.prototype,"receiveShadows",void 0),P([O()],$.prototype,"slicePlaneEnabled",void 0),P([O()],$.prototype,"sliceHighlightDisabled",void 0),P([O()],$.prototype,"receiveAmbientOcclusion",void 0),P([O()],$.prototype,"screenSizePerspective",void 0),P([O()],$.prototype,"textureAlphaPremultiplied",void 0),P([O()],$.prototype,"hasColorTexture",void 0),P([O()],$.prototype,"usePBR",void 0),P([O()],$.prototype,"hasMetalnessAndRoughnessTexture",void 0),P([O()],$.prototype,"hasEmissionTexture",void 0),P([O()],$.prototype,"hasOcclusionTexture",void 0),P([O()],$.prototype,"hasNormalTexture",void 0),P([O()],$.prototype,"instanced",void 0),P([O()],$.prototype,"instancedColor",void 0),P([O()],$.prototype,"instancedDoublePrecision",void 0),P([O()],$.prototype,"vertexTangents",void 0),P([O()],$.prototype,"normalsTypeDerivate",void 0),P([O()],$.prototype,"writeDepth",void 0),P([O()],$.prototype,"sceneHasOcludees",void 0),P([O()],$.prototype,"transparent",void 0),P([O()],$.prototype,"enableOffset",void 0),P([O({count:3})],$.prototype,"cullFace",void 0),P([O({count:4})],$.prototype,"transparencyPassType",void 0),P([O()],$.prototype,"multipassTerrainEnabled",void 0),P([O()],$.prototype,"cullAboveGround",void 0);function hn(t){const e=new Dr,r=e.vertex.code,i=e.fragment.code;return e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),e.include(ft),e.varyings.add("vpos","vec3"),e.include(Me,t),e.include(Pe,t),e.include(Tr,t),t.output!==0&&t.output!==7||(e.include(je,t),e.include(Ae,{linearDepth:!1}),t.offsetBackfaces&&e.include(Ar),t.instancedColor&&e.attributes.add("instanceColor","vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.include(ve,t),e.include(Mr,t),e.include($r,t),e.include(Pr,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),r.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(ut)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${t.multipassTerrainEnabled?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===7&&(e.include(de,t),e.include(ce,t),t.multipassTerrainEnabled&&(e.fragment.include(Be),e.include(Re,t)),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(Ve),i.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?s`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===0&&(e.include(de,t),e.include(zr,t),e.include(gt,t),e.include(ce,t),t.receiveShadows&&e.include(vt,t),t.multipassTerrainEnabled&&(e.fragment.include(Be),e.include(Re,t)),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(wr,t),e.include(xt,t),e.fragment.include(Ve),i.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${t.pbrMode===1?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===1?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?s`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${s`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode===1||t.pbrMode===2?t.viewingMode===1?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===1||t.pbrMode===2?s`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(Or,t),e}const pn=Object.freeze({__proto__:null,build:hn});class Xe extends Oe{initializeProgram(e){const r=Xe.shader.get(),i=this.configuration,o=r.build({OITEnabled:i.transparencyPassType===0,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:yr(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Cr(e.rctx,o,qe)}}Xe.shader=new Sr(pn,()=>import("./RealisticTree.glsl.345aeb76.js"));class Lr extends Ko{constructor(e){super(e,fn),this.supportsEdges=!0,this.techniqueConfig=new $,this.vertexBufferLayout=xn(this.parameters),this.instanceBufferLayout=e.instanced?bn(this.parameters):null}isVisibleInPass(e){return e!==4&&e!==6&&e!==7||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const r=e.instanced,i=e.vertexColors,o=e.symbolColors,a=!!r&&r.indexOf("color")>-1,n=e.vvColorEnabled,c=e.colorMixMode==="replace",d=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(a||n||o)?!!c||d:i?c?l:d:a||n||o?!!c||d:c?l:d}getTechniqueConfig(e,r){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=this.parameters.verticalOffset!==null,this.techniqueConfig.screenSizePerspective=this.parameters.screenSizePerspective!==null,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate=this.parameters.normals==="screenDerivative",this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=r.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=r.cullAboveGround,e!==0&&e!==7||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?1:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!r.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=r.transparencyPassType,this.techniqueConfig.enableOffset=r.camera.relativeElevation<Ui),this.techniqueConfig}intersect(e,r,i,o,a,n,c){if(this.parameters.verticalOffset!==null){const d=o.camera;fe(Je,i[12],i[13],i[14]);let l=null;switch(o.viewingMode){case 1:l=Ge(Ht,Je);break;case 2:l=qt(Ht,_n)}let u=0;if(this.parameters.verticalOffset!==null){const p=W(wn,Je,d.eye),m=Z(p),f=ue(p,p,1/m);let h=null;this.parameters.screenSizePerspective&&(h=st(l,f)),u+=ko(d,m,this.parameters.verticalOffset,h,this.parameters.screenSizePerspective)}ue(l,l,u),ui(Ze,l,o.transform.inverseRotation),a=W(yn,a,Ze),n=W(Tn,n,Ze)}No(e,r,o,a,n,fa(o.verticalOffset),c)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||e===20}createGLMaterial(e){return e.output===0||e.output===7||e.output===1||e.output===2||e.output===3||e.output===4?new vn(e):null}createBufferWriter(){return new gn(this.vertexBufferLayout,this.instanceBufferLayout)}}class vn extends Fo{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const r=this._material.parameters;return this.updateTexture(r.textureId),this.ensureTechnique(r.treeRendering?Xe:Oe,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==0&&this._output!==7||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,r){r.bindPass(this._material.parameters,e),this.bindTextures(r.program)}}const fn={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Ee(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Po,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Qo};class gn{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,r,i,o){_a(r,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,o)}}function xn(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=er().vec3f("position").vec3f("normal");return t.vertexTangents&&r.vec4f("tangent"),e&&r.vec2f("uv0"),t.vertexColors&&r.vec4u8("color"),t.symbolColors&&r.vec4u8("symbolColor"),r}function bn(t){let e=er();return e=t.instancedDoublePrecision?e.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):e.mat4f("model").mat4f("modelNormal"),t.instanced&&t.instanced.indexOf("color")>-1&&(e=e.vec4f("instanceColor")),t.instanced&&t.instanced.indexOf("featureAttribute")>-1&&(e=e.vec4f("instanceFeatureAttribute")),e}const yn=N(),Tn=N(),_n=nt(0,0,1),Ht=N(),Ze=N(),Je=N(),wn=N(),Y=He.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Sn(t,e){const r=await Cn(t,e);return{resource:r,textures:await On(r.textureDefinitions,e)}}async function Cn(t,e){const r=g(e)&&e.streamDataRequester;if(r)return Mn(t,r,e);const i=await Xt(mi(t,hi(e)));if(i.ok===!0)return i.value.data;Kt(i.error),Er(i.error)}async function Mn(t,e,r){const i=await Xt(e.request(t,"json",r));if(i.ok===!0)return i.value;Kt(i.error),Er(i.error.details.url)}function Er(t){throw new Ut("",`Request for object resource failed: ${t}`)}function An(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(Y.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const c=a[n];c&&c.values?(c.valueType!=null&&c.valueType!=="UInt32"&&(Y.warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`),i=!1),c.valuesPerElement!=null&&c.valuesPerElement!==1&&(Y.warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`),i=!1)):(Y.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),i=!1)}}else Y.warn("Indexed geometries must specify faces"),i=!1;break}default:Y.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(Y.warn("Geometry requires material"),i=!1);const o=t.params.vertexAttributes;for(const a in o)o[a].values||(Y.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function $n(t,e){const r=[],i=[],o=[],a=[],n=t.resource,c=jt.parse(n.version||"1.0","wosr");zn.validate(c);const d=n.model.name,l=n.model.geometries,u=n.materialDefinitions,p=t.textures;let m=0;const f=new Map;for(let h=0;h<l.length;h++){const b=l[h];if(!An(b))continue;const y=Fn(b),x=b.params.vertexAttributes,R=[];for(const v in x){const w=x[v],z=w.values;R.push([v,{data:z,size:w.valuesPerElement,exclusive:!0}])}const C=[];if(b.params.topology!=="PerAttributeArray"){const v=b.params.faces;for(const w in v)C.push([w,new Uint32Array(v[w].values)])}const S=p&&p[y.texture];if(S&&!f.has(y.texture)){const{image:v,params:w}=S,z=new V(v,w);a.push(z),f.set(y.texture,z)}const F=f.get(y.texture),T=F?F.id:void 0;let _=o[y.material]?o[y.material][y.texture]:null;if(!_){const v=u[y.material.substring(y.material.lastIndexOf("/")+1)].params;v.transparency===1&&(v.transparency=0);const w=S&&S.alphaChannelUsage,z=v.transparency>0||w==="transparency"||w==="maskAndTransparency",I=S?Rr(S.alphaChannelUsage):void 0,A={ambient:St(v.diffuse),diffuse:St(v.diffuse),opacity:1-(v.transparency||0),transparent:z,textureAlphaMode:I,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:v.externalColorMixMode||"tint",textureAlphaPremultiplied:!!S&&!!S.params.preMultiplyAlpha};g(e)&&e.materialParamsMixin&&Object.assign(A,e.materialParamsMixin),_=new Lr(A),o[y.material]||(o[y.material]={}),o[y.material][y.texture]=_}i.push(_);const M=new tr(R,C);m+=C.position?C.position.length:0,r.push(M)}return{name:d,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,boundingBox:Pn(r),numberOfVertices:m,lodThreshold:null}}function Pn(t){const e=Qt();return t.forEach(r=>{const i=r.boundingInfo;g(i)&&(Le(e,i.getBBMin()),Le(e,i.getBBMax()))}),e}async function On(t,e){const r=[];for(const a in t){const n=t[a],c=n.images[0].data;if(!c){Y.warn("Externally referenced texture data is not yet supported");continue}const d=n.encoding+";base64,"+c,l="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",p={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:Rr(u)!==1},m=g(e)&&e.disableTextures?Promise.resolve(null):Jt(d,e);r.push(m.then(f=>({refId:l,image:f,params:p,alphaChannelUsage:u})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function Rr(t){switch(t){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function Fn(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const zn=new jt(1,2,"wosr");async function In(t,e){const r=Nr(Br(t));if(r.fileType==="wosr"){const d=await(e.cache?e.cache.loadWOSR(r.url,e):Sn(r.url,e)),l=$n(d,e);return{lods:[l],referenceBoundingBox:l.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:d.remove}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):Ci(new Mi(e.streamDataRequester),r.url,e,e.usePBR)),o=pi(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&g(o)&&i.meta.uri.indexOf("/RealisticTrees/")!==-1&&En(i,o);const a=i.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},n={...e.materialParamsMixin,treeRendering:i.customMeta.esriTreeRendering};if(r.specifiedLodIndex!=null){const d=Ie(i,a,n,r.specifiedLodIndex);let l=d[0].boundingBox;return r.specifiedLodIndex!==0&&(l=Ie(i,a,n,0)[0].boundingBox),{lods:d,referenceBoundingBox:l,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const c=Ie(i,a,n);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function Nr(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Ie(t,e,r,i){const o=t.model,a=Ee(),n=new Array,c=new Map,d=new Map;return o.lods.forEach((l,u)=>{if(i!==void 0&&u!==i)return;const p={name:l.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:g(l.lodThreshold)?l.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Qt()};n.push(p),l.parts.forEach(m=>{const f=m.material+(m.attributes.normal?"_normal":"")+(m.attributes.color?"_color":"")+(m.attributes.texCoord0?"_texCoord0":"")+(m.attributes.tangent?"_tangent":""),h=o.materials.get(m.material),b=g(m.attributes.texCoord0),y=g(m.attributes.normal),x=Dn(h.alphaMode);if(!c.has(f)){if(b){if(g(h.textureColor)&&!d.has(h.textureColor)){const E=o.textures.get(h.textureColor),k={...E.parameters,preMultiplyAlpha:x!==1};d.set(h.textureColor,new V(E.data,k))}if(g(h.textureNormal)&&!d.has(h.textureNormal)){const E=o.textures.get(h.textureNormal);d.set(h.textureNormal,new V(E.data,E.parameters))}if(g(h.textureOcclusion)&&!d.has(h.textureOcclusion)){const E=o.textures.get(h.textureOcclusion);d.set(h.textureOcclusion,new V(E.data,E.parameters))}if(g(h.textureEmissive)&&!d.has(h.textureEmissive)){const E=o.textures.get(h.textureEmissive);d.set(h.textureEmissive,new V(E.data,E.parameters))}if(g(h.textureMetallicRoughness)&&!d.has(h.textureMetallicRoughness)){const E=o.textures.get(h.textureMetallicRoughness);d.set(h.textureMetallicRoughness,new V(E.data,E.parameters))}}const v=h.color[0]**(1/he),w=h.color[1]**(1/he),z=h.color[2]**(1/he),I=h.emissiveFactor[0]**(1/he),A=h.emissiveFactor[1]**(1/he),L=h.emissiveFactor[2]**(1/he),D=g(h.textureColor)&&b?d.get(h.textureColor):null;c.set(f,new Lr({...e,transparent:x===0,textureAlphaMode:x,textureAlphaCutoff:h.alphaCutoff,diffuse:[v,w,z],ambient:[v,w,z],opacity:h.opacity,doubleSided:h.doubleSided,doubleSidedType:"winding-order",cullFace:h.doubleSided?0:2,vertexColors:!!m.attributes.color,vertexTangents:!!m.attributes.tangent,normals:y?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:g(D)?D.id:void 0,colorMixMode:h.colorMixMode,normalTextureId:g(h.textureNormal)&&b?d.get(h.textureNormal).id:void 0,textureAlphaPremultiplied:g(D)&&!!D.params.preMultiplyAlpha,occlusionTextureId:g(h.textureOcclusion)&&b?d.get(h.textureOcclusion).id:void 0,emissiveTextureId:g(h.textureEmissive)&&b?d.get(h.textureEmissive).id:void 0,metallicRoughnessTextureId:g(h.textureMetallicRoughness)&&b?d.get(h.textureMetallicRoughness).id:void 0,emissiveFactor:[I,A,L],mrrFactors:[h.metallicFactor,h.roughnessFactor,e.mrrFactors[2]],isSchematic:!1,...r}))}const R=Ln(m.indices||m.attributes.position.count,m.primitiveType),C=m.attributes.position.count,S=le(pe,C);fi(S,m.attributes.position,m.transform);const F=[["position",{data:S.typedBuffer,size:S.elementCount,exclusive:!0}]],T=[["position",R]];if(g(m.attributes.normal)){const v=le(pe,C);Ct(a,m.transform),gi(v,m.attributes.normal,a),F.push(["normal",{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),T.push(["normal",R])}if(g(m.attributes.tangent)){const v=le(it,C);Ct(a,m.transform),Ai(v,m.attributes.tangent,a),F.push(["tangent",{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),T.push(["tangent",R])}if(g(m.attributes.texCoord0)){const v=le(Zt,C);$i(v,m.attributes.texCoord0),F.push(["uv0",{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),T.push(["uv0",R])}if(g(m.attributes.color)){const v=le($e,C);if(m.attributes.color.elementCount===4)m.attributes.color instanceof it?Ot(v,m.attributes.color,255):m.attributes.color instanceof $e?Pi(v,m.attributes.color):m.attributes.color instanceof bi&&Ot(v,m.attributes.color,1/256);else{Oi(v,255,255,255,255);const w=new $t(v.buffer,0,4);m.attributes.color instanceof pe?At(w,m.attributes.color,255):m.attributes.color instanceof $t?xi(w,m.attributes.color):m.attributes.color instanceof yi&&At(w,m.attributes.color,1/256)}F.push(["color",{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),T.push(["color",R])}const _=new tr(F,T);p.stageResources.geometries.push(_),p.stageResources.materials.push(c.get(f)),b&&(g(h.textureColor)&&p.stageResources.textures.push(d.get(h.textureColor)),g(h.textureNormal)&&p.stageResources.textures.push(d.get(h.textureNormal)),g(h.textureOcclusion)&&p.stageResources.textures.push(d.get(h.textureOcclusion)),g(h.textureEmissive)&&p.stageResources.textures.push(d.get(h.textureEmissive)),g(h.textureMetallicRoughness)&&p.stageResources.textures.push(d.get(h.textureMetallicRoughness))),p.numberOfVertices+=C;const M=_.boundingInfo;g(M)&&(Le(p.boundingBox,M.getBBMin()),Le(p.boundingBox,M.getBBMax()))})}),n}function Dn(t){switch(t){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function Ln(t,e){switch(e){case 4:return Ii(t);case 5:return zi(t);case 6:return Fi(t)}}function En(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];t.customMeta.esriTreeRendering=!0;for(const o of i.parts){const a=o.attributes.normal;if(H(a))return;const n=o.attributes.position,c=n.count,d=N(),l=N(),u=N(),p=le($e,c),m=le(pe,c),f=vi(Yt(),o.transform);for(let h=0;h<c;h++){n.getVec(h,l),a.getVec(h,d),rt(l,l,o.transform),W(u,l,e.center),Mt(u,u,e.radius);const b=u[2],y=Z(u),x=Math.min(.45+.55*y*y,1);Mt(u,u,e.radius),rt(u,u,f),Ge(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&et(u,u,d,b>-1?.2:Math.min(-4*b-3.8,1)),m.setVec(h,u),p.set(h,0,255*x),p.set(h,1,255*x),p.set(h,2,255*x),p.set(h,3,255)}o.attributes.normal=m,o.attributes.color=p}}}var Xn=Object.freeze(Object.defineProperty({__proto__:null,fetch:In,gltfToEngineResources:Ie,parseUrl:Nr},Symbol.toStringTag,{value:"Module"}));export{dn as P,hn as j,Xn as o};
