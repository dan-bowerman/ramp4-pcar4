import{d as ie,e as ue,n as ce,t as ge}from"./vec33.2ed1febd.js";import{c as Te,u as Se,r as Ie,e as Oe}from"./types.5c4dd1d4.js";import{ly as fe,at as Be,lP as le,f as de,C as Ce,dv as _e,bG as Ue,s as Q,aj as $e,hA as pe,lQ as Ae,lK as he,K as ve,lR as Me,gI as Ne,gC as Re,gB as Ee,gA as Le,a4 as Pe,r as W,lS as me,lT as Fe,lU as je,lV as De,gN as ee,aU as C,gv as te,aW as Ve,gs as Ge,aV as N,gl as v,aX as q,ak as ke,lz as ze}from"./main.f21fb970.js";import{P as qe,e as Je,t as He,b as Xe}from"./quat.a8699602.js";import{B as Ke,g as Ye,d as Qe,i as K,c as re,u as ye,x as We,L as Ze,O as et,E as tt,F as rt,w as nt,q as st,A as ot,V as at}from"./BufferView.5dc64cce.js";function it(n,e,t){if(n.count!==e.count)return void ie.error("source and destination buffers need to have the same number of elements");const s=n.count,r=t[0],o=t[1],a=t[2],c=t[3],u=t[4],i=t[5],f=t[6],l=t[7],p=t[8],m=t[9],U=t[10],h=t[11],$=t[12],T=t[13],S=t[14],x=t[15],y=n.typedBuffer,I=n.typedBufferStride,w=e.typedBuffer,R=e.typedBufferStride;for(let A=0;A<s;A++){const _=A*I,E=A*R,L=w[E],P=w[E+1],F=w[E+2],j=w[E+3];y[_]=r*L+u*P+p*F+$*j,y[_+1]=o*L+i*P+m*F+T*j,y[_+2]=a*L+f*P+U*F+S*j,y[_+3]=c*L+l*P+h*F+x*j}}function ut(n,e,t){if(n.count!==e.count)return void ie.error("source and destination buffers need to have the same number of elements");const s=n.count,r=t[0],o=t[1],a=t[2],c=t[3],u=t[4],i=t[5],f=t[6],l=t[7],p=t[8],m=n.typedBuffer,U=n.typedBufferStride,h=e.typedBuffer,$=e.typedBufferStride;for(let T=0;T<s;T++){const S=T*U,x=T*$,y=h[x],I=h[x+1],w=h[x+2],R=h[x+3];m[S]=r*y+c*I+f*w,m[S+1]=o*y+u*I+l*w,m[S+2]=a*y+i*I+p*w,m[S+3]=R}}function ct(n,e,t){const s=Math.min(n.count,e.count),r=n.typedBuffer,o=n.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride;for(let u=0;u<s;u++){const i=u*o,f=u*c;r[i]=t*a[f],r[i+1]=t*a[f+1],r[i+2]=t*a[f+2],r[i+3]=t*a[f+3]}}function ft(n,e,t){const s=Math.min(n.count,e.count),r=n.typedBuffer,o=n.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride;for(let u=0;u<s;u++){const i=u*o,f=u*c;r[i]=a[f]>>t,r[i+1]=a[f+1]>>t,r[i+2]=a[f+2]>>t,r[i+3]=a[f+3]>>t}}Object.freeze({__proto__:null,transformMat4:it,transformMat3:ut,scale:ct,shiftRight:ft});function lt(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f){for(let l=0;l<9;++l)s[u+l]=o[i+l];u+=r,i+=a}}Object.freeze({__proto__:null,copy:lt});function dt(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f){for(let l=0;l<16;++l)s[u+l]=o[i+l];u+=r,i+=a}}Object.freeze({__proto__:null,copy:dt});function pt(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f)s[u]=o[i],u+=r,i+=a}function J(n,e){const t=n.count;e||(e=new n.TypedArrayConstructor(t));for(let s=0;s<t;s++)e[s]=n.get(s);return e}Object.freeze({__proto__:null,copy:pt,makeDense:J});function we(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f)s[u]=o[i],s[u+1]=o[i+1],u+=r,i+=a}function ht(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;if(Te(e.elementType)){const f=Se(e.elementType);if(Ie(e.elementType))for(let l=0;l<c;++l)s[u]=Math.max(o[i]/f,-1),s[u+1]=Math.max(o[i+1]/f,-1),u+=r,i+=a;else for(let l=0;l<c;++l)s[u]=o[i]/f,s[u+1]=o[i+1]/f,u+=r,i+=a}else we(n,e,t);return n}function mt(n,e,t,s){var r,o;const a=n.typedBuffer,c=n.typedBufferStride,u=(r=s?.count)!=null?r:n.count;let i=((o=s?.dstIndex)!=null?o:0)*c;for(let f=0;f<u;++f)a[i]=e,a[i+1]=t,i+=c}Object.freeze({__proto__:null,copy:we,normalizeIntegerBuffer:ht,fill:mt});function yt(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f)s[u]=o[i],s[u+1]=o[i+1],s[u+2]=o[i+2],s[u+3]=o[i+3],u+=r,i+=a}function wt(n,e,t,s,r,o){var a,c;const u=n.typedBuffer,i=n.typedBufferStride,f=(a=o?.count)!=null?a:n.count;let l=((c=o?.dstIndex)!=null?c:0)*i;for(let p=0;p<f;++p)u[l]=e,u[l+1]=t,u[l+2]=s,u[l+3]=r,l+=i}Object.freeze({__proto__:null,copy:yt,fill:wt});function Qt(n,e){return new n(new ArrayBuffer(e*n.ElementCount*Oe(n.ElementType)))}class Wt{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return fe(e)?(Be(t),le(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,s){if(de(this.streamDataRequester))return(await Ce(t,{responseType:bt[e]})).data;const r=await _e(this.streamDataRequester.request(t,e,s));if(r.ok===!0)return r.value;throw Ue(r.error),new Q("",`Request for resource failed: ${r.error}`)}}const bt={image:"image",binary:"array-buffer",json:"json"},xt=$e.getLogger("esri.views.3d.glTF");class gt{error(e){throw new Q("gltf-loader-error",e)}errorUnsupported(e){throw new Q("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){xt.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}}function Tt(n={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...n}}function St(n,e={}){return{data:n,parameters:{wrap:{s:10497,t:10497,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}class ne{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const be={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},It={pbrMetallicRoughness:be,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ot={ESRI_externalColorMixMode:"tint"},se=(n={})=>{const e={...be,...n.pbrMetallicRoughness},t=Bt({...Ot,...n.extras});return{...It,...n,pbrMetallicRoughness:e,extras:t}};function Bt(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:pe(n.ESRI_externalColorMixMode),n.ESRI_externalColorMixMode="tint"}return n}const Ct={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},_t=n=>({...Ct,...n});function Ut(n){let e,t;return n.replace(/^(.*\/)?([^/]*)$/,(s,r,o)=>(e=r||"",t=o||"","")),{dirPart:e,filePart:t}}const D={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class g{constructor(e,t,s,r,o){this.context=e,this.errorContext=t,this.uri=s,this.json=r,this.glbBuffer=o,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=Ut(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(r.scenes==null,"Scenes must be defined."),t.errorUnsupportedIf(r.meshes==null,"Meshes must be defined"),t.errorUnsupportedIf(r.nodes==null,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,s,r){if(fe(s)){const c=ve(s);if(c.mediaType!=="model/gltf-binary")try{const i=JSON.parse(c.isBase64?atob(c.data):c.data);return new g(e,t,s,i)}catch{}const u=le(s);if(g.isGLBData(u))return this.fromGLBData(e,t,s,u)}if(s.endsWith(".gltf")){const c=await e.loadJSON(s,r);return new g(e,t,s,c)}const o=await e.loadBinary(s,r);if(g.isGLBData(o))return this.fromGLBData(e,t,s,o);const a=await e.loadJSON(s,r);return new g(e,t,s,a)}static isGLBData(e){const t=new ne(e);return t.remainingBytes()>=4&&t.readUint32()===D.MAGIC}static async fromGLBData(e,t,s,r){const o=await g.parseGLBData(t,r);return new g(e,t,s,o.json,o.binaryData)}static async parseGLBData(e,t){const s=new ne(t);e.assert(s.remainingBytes()>=12,"GLB binary data is insufficiently large.");const r=s.readUint32(),o=s.readUint32(),a=s.readUint32();e.assert(r===D.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=a,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(o!==2,"An unsupported GLB container version was detected. Only version 2 is supported.");let c,u,i=0;for(;s.remainingBytes()>=8;){const f=s.readUint32(),l=s.readUint32();i===0?(e.assert(l===D.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(f>=0,"No JSON data found."),c=await Rt(s.readUint8Array(f))):i===1?(e.errorUnsupportedIf(l!==D.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),u=s.readUint8Array(f)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),i+=1}return c||e.error("No GLB JSON chunk detected."),{json:c,binaryData:u}}async getBuffer(e,t){const s=this.json.buffers[e],r=this.errorContext;if(s.uri==null)return r.assert(this.glbBuffer!=null,"GLB buffer not present"),this.glbBuffer;const o=await this.getBufferLoader(e,t);return r.assert(o.byteLength===s.byteLength,"Buffer byte lengths should match."),o}async getBufferLoader(e,t){const s=this.bufferLoaders.get(e);if(s)return s;const r=this.json.buffers[e],o=this.context.loadBinary(this.resolveUri(r.uri),t).then(a=>new Uint8Array(a));return this.bufferLoaders.set(e,o),o}async getAccessor(e,t){const s=this.errorContext;s.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const r=this.json.accessors[e];s.errorUnsupportedIf(r?.bufferView==null,"Some accessor does not specify a bufferView."),s.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],a=await this.getBuffer(o.buffer,t),c=vt[r.type],u=Mt[r.componentType],i=c*u,f=o.byteStride||i;return{raw:a.buffer,byteStride:f,byteOffset:a.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:f===i,componentCount:c,componentByteSize:u,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(e.indices==null)return null;const s=await this.getAccessor(e.indices,t);if(s.isDenselyPacked)switch(s.componentType){case 5121:return new Uint8Array(s.raw,s.byteOffset,s.entryCount);case 5123:return new Uint16Array(s.raw,s.byteOffset,s.entryCount);case 5125:return new Uint32Array(s.raw,s.byteOffset,s.entryCount)}else switch(s.componentType){case 5121:return J(this.wrapAccessor(Qe,s));case 5123:return J(this.wrapAccessor(Ye,s));case 5125:return J(this.wrapAccessor(Ke,s))}}async getPositionData(e,t){const s=this.errorContext;s.errorUnsupportedIf(e.attributes.POSITION==null,"No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);return s.errorUnsupportedIf(r.componentType!==5126,"Expected type FLOAT for POSITION vertex attribute, but found "+G[r.componentType]),s.errorUnsupportedIf(r.componentCount!==3,"POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this.wrapAccessor(K,r)}async getNormalData(e,t){const s=this.errorContext;s.assert(e.attributes.NORMAL!=null,"No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);return s.errorUnsupportedIf(r.componentType!==5126,"Expected type FLOAT for NORMAL vertex attribute, but found "+G[r.componentType]),s.errorUnsupportedIf(r.componentCount!==3,"NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this.wrapAccessor(K,r)}async getTangentData(e,t){const s=this.errorContext;s.assert(e.attributes.TANGENT!=null,"No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);return s.errorUnsupportedIf(r.componentType!==5126,"Expected type FLOAT for TANGENT vertex attribute, but found "+G[r.componentType]),s.errorUnsupportedIf(r.componentCount!==4,"TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed()),new re(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){const s=this.errorContext;s.assert(e.attributes.TEXCOORD_0!=null,"No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);return s.errorUnsupportedIf(r.componentCount!==2,"TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed()),r.componentType===5126?this.wrapAccessor(ye,r):(s.errorUnsupportedIf(!r.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),Nt(r))}async getVertexColors(e,t){const s=this.errorContext;s.assert(e.attributes.COLOR_0!=null,"No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(s.errorUnsupportedIf(r.componentCount!==4&&r.componentCount!==3,"COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed()),r.componentCount===4){if(r.componentType===5126)return this.wrapAccessor(re,r);if(r.componentType===5121)return this.wrapAccessor(We,r);if(r.componentType===5123)return this.wrapAccessor(Ze,r)}else if(r.componentCount===3){if(r.componentType===5126)return this.wrapAccessor(K,r);if(r.componentType===5121)return this.wrapAccessor(et,r);if(r.componentType===5123)return this.wrapAccessor(tt,r)}s.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+G[r.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,t,s){let r=this.materialCache.get(e.material);if(!r){const o=e.material!=null?se(this.json.materials[e.material]):se(),a=o.pbrMetallicRoughness,c=this.hasVertexColors(e),u=this.getTexture(a.baseColorTexture,t),i=this.getTexture(o.normalTexture,t),f=s?this.getTexture(o.occlusionTexture,t):null,l=s?this.getTexture(o.emissiveTexture,t):null,p=s?this.getTexture(a.metallicRoughnessTexture,t):null,m=e.material!=null?e.material:-1;r={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:a.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await u,normalTexture:await i,name:o.name,id:m,occlusionTexture:await f,emissiveTexture:await l,emissiveFactor:o.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:await p,vertexColors:c,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return r}async getTexture(e,t){if(!e)return null;this.errorContext.errorUnsupportedIf((e.texCoord||0)!==0,"Only TEXCOORD with index 0 is supported.");const s=e.index,r=this.errorContext,o=this.json.textures[s],a=_t(o.sampler!=null?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(o.source==null,"Source is expected to be defined for a texture.");const c=this.json.images[o.source],u=await this.loadTextureImageData(s,o,t);return Me(this.textureCache,s,()=>{const i=l=>l===33071||l===33648||l===10497,f=l=>(r.error(`Unexpected TextureSampler WrapMode: ${l}. Using default REPEAT(10497).`),10497);return{data:u,wrapS:i(a.wrapS)?a.wrapS:f(a.wrapS),wrapT:i(a.wrapT)?a.wrapT:f(a.wrapT),minFilter:a.minFilter,name:c.name,id:s}})}getNodeTransform(e){if(e===void 0)return At;let t=this.nodeTransformCache.get(e);if(!t){const s=this.getNodeTransform(this.getNodeParent(e)),r=this.json.nodes[e];r.matrix?t=Ne(ue(),s,r.matrix):r.translation||r.rotation||r.scale?(t=ce(s),r.translation&&Re(t,t,r.translation),r.rotation&&(V[3]=qe(V,r.rotation),Ee(t,t,V[3],V)),r.scale&&Le(t,t,r.scale)):t=s,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Pe(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=he.parse(this.json.asset.version,"glTF");$t.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&e.extensionsRequired.length!==0&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(s=>{this.nodeParentMap.set(s,t)})})}async loadTextureImageData(e,t,s){const r=this.textureLoaders.get(e);if(r)return r;const o=this.createTextureLoader(t,s);return this.textureLoaders.set(e,o),o}async createTextureLoader(e,t){const s=this.json.images[e.source];if(s.uri)return this.context.loadImage(this.resolveUri(s.uri),t);const r=this.errorContext;r.errorUnsupportedIf(s.bufferView==null,"Image bufferView must be defined."),r.errorUnsupportedIf(s.mimeType==null,"Image mimeType must be defined.");const o=this.json.bufferViews[s.bufferView],a=await this.getBuffer(o.buffer,t);return r.errorUnsupportedIf(o.byteStride!=null,"byteStride not supported for image buffer"),Et(new Uint8Array(a.buffer,a.byteOffset+(o.byteOffset||0),o.byteLength),s.mimeType)}}const $t=new he(2,0,"glTF"),At=Ae(ue(),Math.PI/2),V=Je(),vt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Mt={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function Nt(n){switch(n.componentType){case 5120:return new at(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case 5121:return new ot(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case 5122:return new st(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case 5123:return new nt(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case 5125:return new rt(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case 5126:return new ye(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);default:return void pe(n.componentType)}}async function Rt(n){return new Promise((e,t)=>{const s=new Blob([n]),r=new FileReader;r.onload=()=>{const o=r.result;e(JSON.parse(o))},r.onerror=o=>{t(o)},r.readAsText(s)})}async function Et(n,e){return new Promise((t,s)=>{const r=new Blob([n],{type:e}),o=URL.createObjectURL(r),a=new Image;a.addEventListener("load",()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then(()=>t(a),()=>t(a)):t(a)}),a.addEventListener("error",c=>{URL.revokeObjectURL(o),s(c)}),a.src=o})}const G={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Lt=0;async function Zt(n,e,t={},s=!0){const r=await g.load(n,H,e,t),o="gltf_"+Lt++,a={lods:[],materials:new Map,textures:new Map,meta:Pt(r)},c=!(!r.json.asset.extras||r.json.asset.extras.ESRI_type!=="symbolResource"),u=new Map;await Ft(r,async(i,f,l,p)=>{var m;const U=(m=u.get(l))!=null?m:0;u.set(l,U+1);const h=i.mode!==void 0?i.mode:4,$=h===4||h===5||h===6?h:null;if(de($))return void H.warnUnsupported("Unsupported primitive mode ("+Gt[h]+"). Skipping primitive.");if(!r.hasPositions(i))return void H.warn("Skipping primitive without POSITION vertex attribute.");const T=r.getPositionData(i,t),S=r.getMaterial(i,t,s),x=r.hasNormals(i)?r.getNormalData(i,t):null,y=r.hasTangents(i)?r.getTangentData(i,t):null,I=r.hasTextureCoordinates(i)?r.getTextureCoordinates(i,t):null,w=r.hasVertexColors(i)?r.getVertexColors(i,t):null,R=r.getIndexData(i,t),A={transform:ce(f),attributes:{position:await T,normal:x?await x:null,texCoord0:I?await I:null,color:w?await w:null,tangent:y?await y:null},indices:await R,primitiveType:$,material:Dt(a,await S,o)};let _=null;W(a.meta)&&W(a.meta.ESRI_lod)&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(_=a.meta.ESRI_lod.thresholds[l]),a.lods[l]=a.lods[l]||{parts:[],name:p,lodThreshold:_},a.lods[l].parts[U]=A});for(const i of a.lods)i.parts=i.parts.filter(f=>!!f);return{model:a,meta:{isEsriSymbolResource:c,uri:r.uri},customMeta:{}}}function Pt(n){const e=n.json;let t=null;return e.nodes.forEach(s=>{const r=s.extras;W(r)&&(r.ESRI_proxyEllipsoid||r.ESRI_lod)&&(t=r)}),t}async function Ft(n,e){const t=n.json,s=t.scenes[t.scene||0].nodes,r=s.length>1,o=[];for(const c of s){const u=t.nodes[c];o.push(a(c,0)),jt(u)&&!r&&u.extensions.MSFT_lod.ids.forEach((i,f)=>a(i,f+1))}async function a(c,u){const i=t.nodes[c],f=n.getNodeTransform(c);if(H.warnUnsupportedIf(i.weights!=null,"Morph targets are not supported."),i.mesh!=null){const l=t.meshes[i.mesh];for(const p of l.primitives)o.push(e(p,f,u,l.name))}for(const l of i.children||[])o.push(a(l,u))}await Promise.all(o)}function jt(n){return n.extensions&&n.extensions.MSFT_lod&&Array.isArray(n.extensions.MSFT_lod.ids)}function Dt(n,e,t){const s=o=>{const a=`${t}_tex_${o&&o.id}${o&&o.name?"_"+o.name:""}`;if(o&&!n.textures.has(a)){const c=St(o.data,{wrap:{s:o.wrapS,t:o.wrapT},mipmap:Vt.some(u=>u===o.minFilter),noUnpackFlip:!0});n.textures.set(a,c)}return a},r=`${t}_mat_${e.id}_${e.name}`;if(!n.materials.has(r)){const o=Tt({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?s(e.colorTexture):void 0,textureNormal:e.normalTexture?s(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?s(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?s(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?s(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});n.materials.set(r,o)}return r}const H=new gt,Vt=[9987,9985],Gt=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];class Z{constructor(e){this.allocator=e,this._items=[],this._itemsPtr=0,this.grow()}get(){return this._itemsPtr===0&&me(()=>this.reset()),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*oe);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,oe));e++)this._items.push(this.allocator())}}const oe=1024;class d{constructor(e,t,s){this.itemByteSize=e,this.itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize)}get(){this._itemsPtr===0&&me(()=>this.reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let s=0;s<this._itemsPerBuffer;++s)this._items.push(this.itemCreate(t,s*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=M){return new d(16,Fe,e)}static createVec3f64(e=M){return new d(24,je,e)}static createVec4f64(e=M){return new d(32,De,e)}static createMat3f64(e=M){return new d(72,He,e)}static createMat4f64(e=M){return new d(128,ge,e)}static createQuatf64(e=M){return new d(32,Xe,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const M=4096;d.createVec2f64();const er=d.createVec3f64();d.createVec4f64();d.createMat3f64();const tr=d.createMat4f64();d.createQuatf64();function kt(n){return n?{origin:ee(n.origin),vector:ee(n.vector)}:{origin:C(),vector:C()}}new Z(()=>({origin:null,vector:null}));function zt(n,e,t){return te(Y,e,n),te(ae,t,n),Ve(Ge(Y,Y,ae))/2}new Z(kt);new Z(()=>({p0:null,p1:null,p2:null}));const Y=C(),ae=C();let B=(()=>{const n=new Uint32Array(131072);for(let e=0;e<n.length;++e)n[e]=e;return n})();const xe=new Uint16Array([0]),X=(()=>{const n=new Uint16Array(65536);for(let e=0;e<n.length;++e)n[e]=e;return n})();function qt(n){if(n===1)return xe;if(n<X.length)return new Uint16Array(X.buffer,0,n);if(n>B.length){const e=Math.max(2*B.length,n);B=new Uint32Array(e);for(let t=0;t<B.length;t++)B[t]=t}return new Uint32Array(B.buffer,0,n)}function rr(n){if(n===1)return new Uint16Array(xe);if(n<X.length)return new Uint16Array(X.slice(0,n));if(n>B.length){const e=new Uint32Array(n);for(let t=0;t<e.length;t++)e[t]=t;return e}return new Uint32Array(B.slice(0,n))}function nr(n,e,t){if(!n)return!1;const{size:s,data:r}=n;N(t,0,0,0),N(O,0,0,0);let o=0,a=0;for(let c=0;c<e.length-2;c+=3){const u=e[c+0]*s,i=e[c+1]*s,f=e[c+2]*s;N(b,r[u+0],r[u+1],r[u+2]),N(k,r[i+0],r[i+1],r[i+2]),N(z,r[f+0],r[f+1],r[f+2]);const l=zt(b,k,z);l?(v(b,b,k),v(b,b,z),q(b,b,1/3*l),v(t,t,b),o+=l):(v(O,O,b),v(O,O,k),v(O,O,z),a+=3)}return(a!==0||o!==0)&&(o!==0?(q(t,t,1/o),!0):a!==0&&(q(t,O,1/a),!0))}function sr(n,e,t){if(!n||!e)return!1;const{size:s,data:r}=n;N(t,0,0,0);let o=-1,a=0;for(let c=0;c<e.length;c++){const u=e[c]*s;o!==u&&(t[0]+=r[u+0],t[1]+=r[u+1],t[2]+=r[u+2],a++),o=u}return a>1&&q(t,t,1/a),a>0}const b=C(),k=C(),z=C(),O=C();function or(n,e=qt){return typeof n=="number"?e(n):ke(n)||ze(n)?new Uint32Array(n):n}function ar(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,s=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let o=0;o<t;o+=1)o%2==0?(s[r++]=o,s[r++]=o+1,s[r++]=o+2):(s[r++]=o+1,s[r++]=o,s[r++]=o+2)}else{let r=0;for(let o=0;o<t;o+=1)if(o%2==0){const a=n[o],c=n[o+1],u=n[o+2];s[r++]=a,s[r++]=c,s[r++]=u}else{const a=n[o+1],c=n[o],u=n[o+2];s[r++]=a,s[r++]=c,s[r++]=u}}return s}function ir(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,s=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let o=0;o<t;++o)s[r++]=0,s[r++]=o+1,s[r++]=o+2;return s}{const r=n[0];let o=n[1],a=0;for(let c=0;c<t;++c){const u=n[c+2];s[a++]=r,s[a++]=o,s[a++]=u,o=u}return s}}const ur=2.1;export{Zt as a,ut as b,er as c,ht as d,ct as e,tr as f,yt as g,sr as h,ir as i,ar as j,or as k,qt as l,mt as m,Wt as n,ur as o,ft as p,rr as q,Qt as r,Z as s,wt as t,nr as u};
