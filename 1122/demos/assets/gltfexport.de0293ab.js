import{a as X,E as F,f as U,aU as M,gv as v,gs as J,gm as Q,r as g,aY as z,aT as B,s as P,ly as q,K as ee,gL as D,jm as te,gN as V,lW as j,lR as se}from"./main.c8cfc77c.js";import{N as ie,c as re,n as ne,e as ae,C as oe}from"./quat.990987cc.js";import{c as he}from"./meshFeatureSet.f71653a0.js";import{f as ce}from"./georeference.50cc5e53.js";import"./earcut.f20dd8d8.js";import"./deduplicate.a22a5d2e.js";import"./vec33.998a7993.js";import"./BufferView.52eba152.js";class w{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this.length=w.HEADER_SIZE,this.length+=w.CHUNK_HEADER_SIZE;const s=this.textToArrayBuffer(e);if(this.length+=this.alignTo(s.byteLength,4),t&&(this.length+=w.CHUNK_HEADER_SIZE,this.length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();const r=this.writeChunk(s,12,1313821514,32);t&&this.writeChunk(t,r,5130562)}writeHeader(){this.outView.setUint32(0,w.MAGIC,!0),this.outView.setUint32(4,w.VERSION,!0),this.outView.setUint32(8,this.length,!0)}writeChunk(e,t,s,r=0){const n=this.alignTo(e.byteLength,4);for(this.outView.setUint32(t,n,!0),this.outView.setUint32(t+=4,s,!0),this.writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this.outView.setUint8(t,r),t++;return t}writeArrayBuffer(e,t,s,r,n){new Uint8Array(e,s,n).set(new Uint8Array(t,r,n),0)}textToArrayBuffer(e){if(X("esri-text-encoder"))return new TextEncoder().encode(e).buffer;const t=new Uint8Array(e.length);for(let s=0;s<t.length;++s)t[s]=e.charCodeAt(s);return t.buffer}alignTo(e,t){return t*Math.ceil(e/t)}}w.HEADER_SIZE=12,w.CHUNK_HEADER_SIZE=8,w.MAGIC=1179937895,w.VERSION=2;var R,b,T,p,$,O,G;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(R||(R={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(b||(b={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(T||(T={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(p||(p={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}($||($={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(O||(O={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(G||(G={}));class fe{constructor(e,t,s,r,n){this.buffer=e,this.componentType=s,this.dataType=r,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:n};const a=this.getElementSize();a>=4&&n!==T.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=a),t.bufferViews.push(this.bufferView),this.numComponentsForDataType=this.calculateNumComponentsForDataType()}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType,r=this.accessorMin[s];this.accessorMin[s]=typeof r!="number"?e:Math.min(r,e);const n=this.accessorMax[s];this.accessorMax[s]=typeof n!="number"?e:Math.max(n,e)}}get dataSize(){return this.data.length*this.sizeComponentType()}get byteSize(){function e(t,s){return s*Math.ceil(t/s)}return e(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}createTypedArray(e,t){switch(this.componentType){case 5120:return new Int8Array(e,t);case 5126:return new Float32Array(e,t);case 5122:return new Int16Array(e,t);case 5121:return new Uint8Array(e,t);case 5125:return new Uint32Array(e,t);case 5123:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this.createTypedArray(e,t).set(this.data)}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then(t=>{const s=new Uint8Array(t);for(let r=0;r<s.length;++r)this.data.push(s[r]);delete this.asyncWritePromise}),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this.getElementSize(),t=this.numComponentsForDataType,s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this.accessorMin.length;++n)typeof this.accessorMin[n]!="number"&&(this.accessorMin[n]=0),typeof this.accessorMax[n]!="number"&&(this.accessorMax[n]=0);const r={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:r.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise(e=>this.finalizedPromiseResolve=e)}finalize(){const e=this.bufferView;return new Promise(t=>{const s=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&s.push(this.asyncWritePromise),t(F(s))}).then(()=>{this.isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()})}getElementSize(){return this.sizeComponentType()*this.numComponentsForDataType}sizeComponentType(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}calculateNumComponentsForDataType(){switch(this.dataType){case p.SCALAR:return 1;case p.VEC2:return 2;case p.VEC3:return 3;case p.VEC4:case p.MAT2:return 4;case p.MAT3:return 9;case p.MAT4:return 16}}}class k{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this.buffer=t}addBufferView(e,t,s){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new fe(this,this.gltf,e,t,s);return this.bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this.bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this.bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this.getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const r of this.bufferViews)r.writeOutToBuffer(t,s),s+=r.byteSize;return t}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise(e=>{e(F(this.getViewFinalizePromises()))}).then(()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e}),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}getTotalSize(){let e=0;for(const t of this.bufferViews)e+=t.byteSize;return e}}function ue(i,e){if(i.components)for(const t of i.components)t.faces&&t.shading==="smooth"&&le(t,e)}function le(i,e){U(e.normal)&&(e.normal=new Float32Array(e.position.length));const t=i.faces,{position:s,normal:r}=e,n=t.length/3;for(let a=0;a<n;++a){const h=3*t[3*a+0],o=3*t[3*a+1],c=3*t[3*a+2],l=M(pe,s[h+0],s[h+1],s[h+2]),d=M(ge,s[o+0],s[o+1],s[o+2]),m=M(me,s[c+0],s[c+1],s[c+2]),y=v(d,d,l),A=v(m,m,l),u=J(y,y,A);r[h+0]+=u[0],r[h+1]+=u[1],r[h+2]+=u[2],r[o+0]+=u[0],r[o+1]+=u[1],r[o+2]+=u[2],r[c+0]+=u[0],r[c+1]+=u[1],r[c+2]+=u[2]}for(let a=0;a<r.length;a+=3)M(E,r[a],r[a+1],r[a+2]),Q(E,E),r[a+0]=E[0],r[a+1]=E[1],r[a+2]=E[2]}function de(i){if(g(i.transform))return i.transform.getOriginPoint(i.spatialReference);const e=i.extent.xmax-i.extent.width/2,t=i.extent.ymax-i.extent.height/2,s=i.extent.zmin;return new z({x:e,y:t,z:s,spatialReference:i.extent.spatialReference})}const pe=B(),ge=B(),me=B(),E=B();function we(i){const e=H(i);return g(e)?e.toDataURL():""}async function Y(i){const e=H(i);if(U(e))throw new P("imageToArrayBuffer","Unsupported image type");const t=await ye(i),s=await new Promise(r=>e.toBlob(r,t));if(!s)throw new P("imageToArrayBuffer","Failed to encode image");return{data:await s.arrayBuffer(),type:t}}async function ye(i){if(!(i instanceof HTMLImageElement))return"image/png";const e=i.src;if(q(e)){const{mediaType:t}=ee(e);return t==="image/jpeg"?t:"image/png"}return/\.png$/i.test(e)?"image/png":/\.(jpg|jpeg)$/i.test(e)?"image/jpeg":"image/png"}function H(i){if(i instanceof HTMLCanvasElement)return i;if(i instanceof HTMLVideoElement)return null;const e=document.createElement("canvas");e.width=i.width,e.height=i.height;const t=e.getContext("2d");return i instanceof HTMLImageElement?t.drawImage(i,0,0,i.width,i.height):i instanceof ImageData&&t.putImageData(i,i.width,i.height),e}function be(i){const e=[],t=new Uint8Array(i);for(let s=0;s<t.length;s++)e.push(String.fromCharCode(t[s]));return"data:application/octet-stream;base64,"+btoa(e.join(""))}function Ae(i){if(i.byteLength<8)return!1;const e=new Uint8Array(i);return e[0]===137&&e[1]===80&&e[2]===78&&e[3]===71&&e[4]===13&&e[5]===10&&e[6]===26&&e[7]===10}class xe{constructor(e,t,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this.addScenes(e)}addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===R.GLB||this.gltf.extras.options.imageOutputType===b.GLB;t&&(this.gltf.extras.binChunkBuffer=new k(this.gltf)),e.forEachScene(s=>{this.addScene(s)}),t&&this.gltf.extras.binChunkBuffer.finalize()}addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode(s=>{t.nodes||(t.nodes=[]);const r=this.addNode(s);t.nodes.push(r)}),this.gltf.scenes.push(t)}addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;D(s,te)||(t.translation=V(s));const r=e.rotation;ie(r,re)||(t.rotation=ne(r));const n=e.scale;D(n,j)||(t.scale=V(n)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this.addMesh(e.mesh):e.forEachNode(h=>{t.children||(t.children=[]);const o=this.addNode(h);t.children.push(o)});const a=this.gltf.nodes.length;return this.gltf.nodes.push(t),a}addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras.options.bufferOutputType===R.GLB;let r;r=s?this.gltf.extras.binChunkBuffer:new k(this.gltf),this.params.origin||(this.params.origin=de(e));const n=ce(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});ue(e,n),this.flipYZAxis(n);const a=r.addBufferView(5126,p.VEC3,T.ARRAY_BUFFER);let h,o,c,l;n.normal&&(h=r.addBufferView(5126,p.VEC3,T.ARRAY_BUFFER)),e.vertexAttributes.uv&&(o=r.addBufferView(5126,p.VEC2,T.ARRAY_BUFFER)),n.tangent&&(c=r.addBufferView(5126,p.VEC4,T.ARRAY_BUFFER)),e.vertexAttributes.color&&(l=r.addBufferView(5121,p.VEC4,T.ARRAY_BUFFER)),a.startAccessor("POSITION"),h&&h.startAccessor("NORMAL"),o&&o.startAccessor("TEXCOORD_0"),c&&c.startAccessor("TANGENT"),l&&l.startAccessor("COLOR_0");const d=n.position.length/3,{position:m,normal:y,tangent:A}=n,{color:u,uv:x}=e.vertexAttributes;for(let f=0;f<d;++f)a.push(m[3*f+0]),a.push(m[3*f+1]),a.push(m[3*f+2]),h&&g(y)&&(h.push(y[3*f+0]),h.push(y[3*f+1]),h.push(y[3*f+2])),o&&g(x)&&(o.push(x[2*f+0]),o.push(x[2*f+1])),c&&g(A)&&(c.push(A[4*f+0]),c.push(A[4*f+1]),c.push(A[4*f+2]),c.push(A[4*f+3])),l&&g(u)&&(l.push(u[4*f+0]),l.push(u[4*f+1]),l.push(u[4*f+2]),l.push(u[4*f+3]));const W=a.endAccessor(),_=this.addAccessor(a.index,W);let L,S,N,I,C;if(h){const f=h.endAccessor();L=this.addAccessor(h.index,f)}if(o){const f=o.endAccessor();S=this.addAccessor(o.index,f)}if(c){const f=c.endAccessor();N=this.addAccessor(c.index,f)}if(l){const f=l.endAccessor();I=this.addAccessor(l.index,f)}e.components&&e.components.length>0&&e.components[0].faces?(C=r.addBufferView(5125,p.SCALAR,T.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(C,e.components,t,_,L,S,N,I)):this.addMeshVertexNonIndexed(e.components,t,_,L,S,N,I),a.finalize(),h&&h.finalize(),o&&o.finalize(),c&&c.finalize(),C&&C.finalize(),l&&l.finalize(),s||r.finalize();const K=this.gltf.meshes.length;return this.gltf.meshes.push(t),K}flipYZAxis({position:e,normal:t,tangent:s}){this.flipYZBuffer(e,3),this.flipYZBuffer(t,3),this.flipYZBuffer(s,4)}flipYZBuffer(e,t){if(!U(e))for(let s=1,r=2;s<e.length;s+=t,r+=t){const n=e[s],a=e[r];e[s]=a,e[r]=-n}}addMaterial(e){if(e===null)return;const t=this.materialMap.indexOf(e);if(t!==-1)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=O.MASK;break;case"auto":case"blend":s.alphaMode=O.BLEND}e.alphaCutoff!==.5&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=h=>h**2.1,n=h=>{const o=h.toRgba();return o[0]=r(o[0]/255),o[1]=r(o[1]/255),o[2]=r(o[2]/255),o};if(g(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=n(e.color)),g(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),g(e.normalTexture)&&(s.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof he){if(g(e.emissiveTexture)&&(s.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),g(e.emissiveColor)){const h=n(e.emissiveColor);s.emissiveFactor=[h[0],h[1],h[2]]}g(e.occlusionTexture)&&(s.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),g(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1;const a=this.gltf.materials.length;return this.gltf.materials.push(s),this.materialMap.push(e),a}addTexture(e){return this.gltf.textures||(this.gltf.textures=[]),se(this.textureMap,e,()=>{const t={sampler:this.addSampler(e),source:this.addImage(e)},s=this.gltf.textures.length;return this.gltf.textures.push(t),s})}addImage(e){const t=this.imageMap.get(e);if(t!=null)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{s.extras=e.data;for(let n=0;n<this.gltf.images.length;++n)if(e.data===this.gltf.images[n].extras)return n;switch(this.gltf.extras.options.imageOutputType){case b.GLB:{const n=this.gltf.extras.binChunkBuffer.addBufferView(5121,p.SCALAR),a=Y(e.data).then(({data:h,type:o})=>(s.mimeType=o,h));n.writeAsync(a).then(()=>{n.finalize()}),s.bufferView=n.index;break}case b.DataURI:s.uri=we(e.data);break;default:this.gltf.extras.promises.push(Y(e.data).then(({data:n,type:a})=>{s.uri=n,s.mimeType=a}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(e,r),r}addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=10497,s=10497;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":t=33071,s=33071;break;case"mirror":t=33648,s=33648}else{switch(e.wrap.vertical){case"clamp":s=33071;break;case"mirror":s=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}const r={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}addMeshVertexIndexed(e,t,s,r,n,a,h,o){for(const c of t){e.startAccessor("INDICES");for(let m=0;m<c.faces.length;++m)e.push(c.faces[m]);const l=e.endAccessor(),d={attributes:{POSITION:r},indices:this.addAccessor(e.index,l),material:this.addMaterial(c.material)};n&&c.shading!=="flat"&&(d.attributes.NORMAL=n),a&&(d.attributes.TEXCOORD_0=a),h&&c.shading!=="flat"&&(d.attributes.TANGENT=h),o&&(d.attributes.COLOR_0=o),s.primitives.push(d)}}addMeshVertexNonIndexed(e,t,s,r,n,a,h){const o={attributes:{POSITION:s}};r&&(o.attributes.NORMAL=r),n&&(o.attributes.TEXCOORD_0=n),a&&(o.attributes.TANGENT=a),h&&(o.attributes.COLOR_0=h),e&&(o.material=this.addMaterial(e[0].material)),t.primitives.push(o)}}class Te{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){const t=this._scenes.indexOf(e);t>=0&&this._scenes.splice(t,1)}forEachScene(e){this._scenes.forEach(e)}}class Re{constructor(){this.name="",this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}}class Ee{constructor(e){this.mesh=e,this.name="",this.translation=B(),this.rotation=ae(),this.scale=V(j),this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}set rotationAngles(e){oe(this.rotation,e[0],e[1],e[2])}}const Be="model.gltf",Z="model.glb";function Ce(i,e,t){const s=new xe(i,e=e||{},t);let r=s.params;r?r.origin||(r.origin=new z({x:-1,y:-1,z:-1})):r={origin:new z({x:-1,y:-1,z:-1})};const n=r.origin,a=s.gltf,h=a.extras.promises;let o=1,c=1,l=null;return F(h).then(()=>{const d={origin:n};delete a.extras;const m=typeof e.jsonSpacing=="number"?e.jsonSpacing:4,y=JSON.stringify(a,(A,u)=>{if(A!=="extras"){if(u instanceof ArrayBuffer){if(Ae(u))switch(e.imageOutputType){case b.DataURI:case b.GLB:break;case b.External:default:{const x=`img${c}.png`;return c++,d[x]=u,x}}switch(e.bufferOutputType){case R.DataURI:return be(u);case R.GLB:if(l)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(l=u);case R.External:default:{const x=`data${o}.bin`;return o++,d[x]=u,x}}}return u}},m);return e.bufferOutputType===R.GLB||e.imageOutputType===b.GLB?d[Z]=new w(y,l).buffer:d[Be]=y,d})}function Me(i,e){return Ce(i,{bufferOutputType:R.GLB,imageOutputType:b.GLB,jsonSpacing:0},e)}class Oe{constructor(e,t){this.file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this.file)}download(e){return new Promise(()=>{const t=new Blob([this.file.data],{type:this.file.type});let s=e;if(s||(s="model.glb"),s.split(".").pop()!=="glb"&&(s+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,s);else{const r=document.createElement("a"),n=URL.createObjectURL(t);r.href=n,r.download=s,document.body.appendChild(r),r.click(),setTimeout(function(){document.body.removeChild(r),window.URL.revokeObjectURL(n)},0)}})}}function _e(i,e){const t=new Te,s=new Re;t.addScene(s);const r=new Ee(i);return s.addNode(r),Me(t,e).then(n=>new Oe(n[Z],n.origin))}export{_e as toBinaryGLTF};
