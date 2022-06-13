import{ai as k,aj as H,ak as X,f as F,r as S,al as xt}from"./main.9f707e1a.js";import{r as g,s as M,o as D,f as G,c as j}from"./Texture.7d1c53c4.js";const T=k.getLogger("esri.views.webgl.BufferObject");class z{constructor(t,i,e,n,o){this._context=t,this.bufferType=i,this.usage=e,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(g.Buffer,this),this._glName=this._context.gl.createBuffer(),M(this._context.gl),n&&this.setData(n,o)}static createIndex(t,i,e,n){return new z(t,34963,i,e,n)}static createVertex(t,i,e){return new z(t,34962,i,e)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===34962?this._size:this._indexType===5125?4*this._size:2*this._size}dispose(){var t;(t=this._context)!=null&&t.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(g.Buffer,this),this._context=null):this._glName&&T.warn("Leaked WebGL buffer object")}setData(t,i){if(!t)return;if(typeof t=="number"){if(t<0&&T.error("Buffer size cannot be negative!"),this._size=t,this.bufferType===34963&&i)switch(this._indexType=i,this._size=t,i){case 5123:t*=2;break;case 5125:t*=4}}else{let o=t.byteLength;H(t)&&(o/=2,this._indexType=5123),X(t)&&(o/=4,this._indexType=5125),this._size=o}const e=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;n.bufferData(this.bufferType,t,this.usage),M(n),this._context.bindVAO(e)}setSubData(t,i=0,e=0,n=t.byteLength){if(!t)return;(i<0||i>=this._size)&&T.error("offset is out of range!");let o=i,s=e,a=n,c=t.byteLength;H(t)?(c/=2,o*=2,s*=2,a*=2):X(t)&&(c/=4,o*=4,s*=4,a*=4),n===void 0&&(n=c-1),e>=n&&T.error("end must be bigger than start!"),i+e-n>this._size&&T.error("An attempt to write beyond the end of the buffer!");const h=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const l=this._context.gl,f=ArrayBuffer.isView(t)?t.buffer:t,d=s===0&&a===t.byteLength?f:f.slice(s,a);l.bufferSubData(this.bufferType,o,d),M(l),this._context.bindVAO(h)}setSubDataFromView(t,i,e,n){if(!t)return;(i<0||i>=this._size)&&T.error("offset is out of range!"),e>=n&&T.error("end must be bigger than start!"),i+e-n>this._size&&T.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl,a=e===0&&n===t.length?t:t.subarray(e,n);s.bufferSubData(this.bufferType,i*t.BYTES_PER_ELEMENT,a),M(s),this._context.bindVAO(o)}}class C{constructor(t,i){this._context=t,this._desc=i,this._context.instanceCounter.increment(g.Renderbuffer,this);const e=this._context.gl;this.glName=e.createRenderbuffer(),this._context.bindRenderbuffer(this),e.renderbufferStorage(e.RENDERBUFFER,i.internalFormat,i.width,i.height)}get descriptor(){return this._desc}resize(t,i){const e=this._desc;if(e.width===t&&e.height===i)return;e.width=t,e.height=i;const n=this._context.gl;this._context.bindRenderbuffer(this),n.renderbufferStorage(n.RENDERBUFFER,e.internalFormat,e.width,e.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(g.Renderbuffer,this),this._context=null)}}function Zt(r,t){return r.vertexBuffers[t].size/bt(r.layout[t])}function bt(r){return r[0].stride}function Tt(r,t,i,e,n){const o=r.gl,s=r.capabilities.instancing;r.bindBuffer(i);for(const a of e){const c=t.get(a.name);c===void 0&&console.error(`There is no location for vertex attribute '${a.name}' defined.`),a.baseInstance&&!a.divisor&&console.error(`Vertex attribute '${a.name}' uses baseInstanceOffset without divisor.`);const h=(n||(0+a.baseInstance?a.baseInstance:0))*a.stride;if(a.count<=4)o.vertexAttribPointer(c,a.count,a.type,a.normalized,a.stride,a.offset+h),o.enableVertexAttribArray(c),a.divisor>0&&s&&s.vertexAttribDivisor(c,a.divisor);else if(a.count===9)for(let l=0;l<3;l++)o.vertexAttribPointer(c+l,3,a.type,a.normalized,a.stride,a.offset+12*l+h),o.enableVertexAttribArray(c+l),a.divisor>0&&s&&s.vertexAttribDivisor(c+l,a.divisor);else if(a.count===16)for(let l=0;l<4;l++)o.vertexAttribPointer(c+l,4,a.type,a.normalized,a.stride,a.offset+16*l+h),o.enableVertexAttribArray(c+l),a.divisor>0&&s&&s.vertexAttribDivisor(c+l,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count)}}function At(r,t,i,e){const n=r.gl,o=r.capabilities.instancing;r.bindBuffer(i);for(const s of e){const a=t.get(s.name);if(s.count<=4)n.disableVertexAttribArray(a),s.divisor&&s.divisor>0&&o&&o.vertexAttribDivisor(a,0);else if(s.count===9)for(let c=0;c<3;c++)n.disableVertexAttribArray(a+c),s.divisor&&s.divisor>0&&o&&o.vertexAttribDivisor(a+c,0);else if(s.count===16)for(let c=0;c<4;c++)n.disableVertexAttribArray(a+c),s.divisor&&s.divisor>0&&o&&o.vertexAttribDivisor(a+c,0);else console.error("Unsupported vertex attribute element count: "+s.count)}r.unbindBuffer(34962)}function vt(r){switch(r){case 6406:case 6409:case 36168:case 33778:case 33779:case 37490:case 37491:case 37496:case 37497:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34837:return 12;case 34836:return 16;case 33776:case 33777:case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return .5}return 0}function V(r){if(F(r))return 0;if("descriptor"in r)return r.glName?V(r.descriptor):0;const t=r.internalFormat||"pixelFormat"in r&&r.pixelFormat;if(!t)return 0;const i="hasMipmap"in r&&r.hasMipmap?1.3:1,e=r.width*r.height;return vt(t)*e*i}const Et=k.getLogger("esri.views.webgl.FrameBufferObject");class y{constructor(t,i,e=null,n=null){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...i},t.instanceCounter.increment(g.Framebuffer,this),S(e)){Array.isArray(e)||(e=[e]);for(let c=0;c<e.length;++c){var o,s;const h=e[c];let l;v(h)?(l=h.descriptor,this._colorAttachments.set(36064+c,h)):(l=h,this._colorAttachments.set(36064+c,new D(t,h))),((o=this._desc)==null?void 0:o.colorTarget)!==0&&((s=this._desc)==null?void 0:s.colorTarget)!==2&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateColorAttachmentPoint(36064+c),this._validateTextureDimensions(l,this._desc)}}if(n instanceof C){var a;const c=(a=this._desc.depthStencilTarget)!=null?a:3;c===2?this._stencilAttachment=n:c===1||c===3?this._depthAttachment=n:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),W(n.descriptor,this._desc)}else if(S(n)){let c;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),v(n)?(this._depthStencilTexture=n,c=n.descriptor):this._depthStencilTexture=new D(this._context,n),this._validateTextureDimensions(c,this._desc)}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(g.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(36064);return t&&v(t)?t:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return V(this.colorAttachment)+V(this.depthStencilAttachment)}getColorTexture(t){const i=this._colorAttachments.get(t);return i&&v(i)?i:null}framebufferTexture2D(t,i,e=36064,n=3553,o=0){i.framebufferTexture2D(i.FRAMEBUFFER,e,n,t,o)}attachColorTexture(t,i=36064){if(!t)return;this._validateColorAttachmentPoint(i);const e=t.descriptor;this._validateTextureDimensions(e,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(t.glName,this._context.gl,i)),this._colorAttachments.set(i,t)}detachColorTexture(t=36064){const i=this._colorAttachments.get(t);if(v(i)){const e=i;return this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,t)),this._colorAttachments.delete(t),e}}attachDepthStencilTexture(t){if(F(t))return;const i=t.descriptor;i.pixelFormat!==34041&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),i.dataType!==34042&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(i,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==4&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(t.glName,this._context.gl,G)),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,G)),this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(F(t))return;const i=t.descriptor;if(i.internalFormat!==34041&&i.internalFormat!==33189&&console.error("Depth/Stencil buffer must have correct internalFormat"),W(i,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=i.internalFormat===34041?3:1,this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,n=this._desc.depthStencilTarget===1?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,i=this._depthAttachment;if(i&&this._initialized){this._context.bindFramebuffer(this);const e=this._desc.depthStencilTarget===1?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null)}return this._depthAttachment=null,i}detachAll(){this.detachColorTexture(),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(t,i,e,n,o,s,a){(t<0||i<0||o<0||s<0)&&console.error("Offsets cannot be negative!"),(e<=0||n<=0)&&console.error("Copy width and height must be greater than zero!");const c=this._desc,h=a.descriptor;a.descriptor.target!==3553&&console.error("Texture target must be TEXTURE_2D!"),(t+e>c.width||i+n>c.height||o+e>h.width||s+n>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context,f=l.bindTexture(a,D.TEXTURE_UNIT_FOR_UPDATES);l.bindFramebuffer(this),l.gl.copyTexSubImage2D(3553,0,o,s,t,i,e,n),l.bindTexture(f,D.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,i,e,n,o,s,a){(e<=0||n<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,i,e,n,o,s,a)}resize(t,i){const e=this._desc;if(e.width!==t||e.height!==i){if(!this._initialized)return e.width=t,e.height=i,this._colorAttachments.forEach(n=>{n&&n.resize(t,i)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,i));e.width=t,e.height=i,this._colorAttachments.forEach(n=>{n&&n.resize(t,i)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(t,i):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,i),this._stencilAttachment&&this._stencilAttachment.resize(t,i)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(t=3553){var i,e,n,o;const s=this._context.gl;if(this._initialized)return void s.bindFramebuffer(s.FRAMEBUFFER,this.glName);this._glName&&s.deleteFramebuffer(this._glName);const a=this._context,c=s.createFramebuffer(),h=this._desc,l=(i=h.colorTarget)!=null?i:1,f=(e=h.width)!=null?e:1,d=(n=h.height)!=null?n:1;if(s.bindFramebuffer(s.FRAMEBUFFER,c),this._colorAttachments.size===0)if(l===0)this._colorAttachments.set(36064,yt(a,h,this.descriptor.colorTarget===2?34067:3553));else{const u=new C(a,{internalFormat:32854,width:f,height:d});this._colorAttachments.set(36064,u)}this._colorAttachments.forEach((u,P)=>{u&&(v(u)?this.framebufferTexture2D(u.glName,s,P,t):s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,u.glName))});const m=(o=h.depthStencilTarget)!=null?o:0;switch(m){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new C(a,{internalFormat:h.depthStencilTarget===1?33189:34041,width:f,height:d}));const u=m===1?s.DEPTH_ATTACHMENT:s.DEPTH_STENCIL_ATTACHMENT;s.framebufferRenderbuffer(s.FRAMEBUFFER,u,s.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new C(a,{internalFormat:36168,width:f,height:d})),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.STENCIL_ATTACHMENT,s.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){a.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const u={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:f,height:d};this._depthStencilTexture=new D(a,u)}this.framebufferTexture2D(this._depthStencilTexture.glName,s,s.DEPTH_STENCIL_ATTACHMENT,t)}j()&&s.checkFramebufferStatus(s.FRAMEBUFFER)!==s.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=c,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach((t,i)=>{if(v(t))this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,i)),t.dispose();else if(t instanceof WebGLRenderbuffer){const e=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(t)}}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===1?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,i,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,t,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateTextureDimensions(t,i){t.target!==3553&&t.target!==34067&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),i.width!==void 0&&i.width>=0&&i.height!==void 0&&i.height>=0?i.width===t.width&&i.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(i.width=t.width,i.height=t.height)}_validateColorAttachmentPoint(t){if(y._MAX_COLOR_ATTACHMENTS===-1){const e=this._context.capabilities.drawBuffers;if(e){const n=this._context.gl;y._MAX_COLOR_ATTACHMENTS=n.getParameter(e.MAX_COLOR_ATTACHMENTS)}else y._MAX_COLOR_ATTACHMENTS=1}const i=t-36064;i+1>y._MAX_COLOR_ATTACHMENTS&&Et.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${i+1}. Implementation supports up to ${y._MAX_COLOR_ATTACHMENTS} color attachments`)}}function v(r){return"type"in r&&r.type==="texture"}function yt(r,t,i){return new D(r,{target:i,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:t.width,height:t.height})}function W(r,t){t.width!==void 0&&t.width>=0&&t.height!==void 0&&t.height>=0?t.width===r.width&&t.height===r.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=r.width,t.height=r.height)}y._MAX_COLOR_ATTACHMENTS=-1;const St=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var q,nt={exports:{}};(q=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])!==void 0&&(nt.exports=q);const Ft=nt.exports;var Q,st={exports:{}};Q=st,function(r){var t=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];t!==void 0&&(Q.exports=t)}();const Y=st.exports;var ot={exports:{}};(function(r){(function(t){var i=function(){return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]}();i!==void 0&&(r.exports=i)})()})(ot);const Dt=ot.exports;var p=999,Z=9999,N=0,B=1,K=2,J=3,tt=4,R=5,wt=6,Ut=7,Mt=8,et=9,Ct=10,it=11,Rt=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Pt(){var r,t,i,e=0,n=0,o=p,s=[],a=[],c=1,h=0,l=0,f=!1,d=!1,m="";return function(_){return a=[],_!==null?P(_.replace?_.replace(/\r\n/g,`
`):_):ct()};function u(_){_.length&&a.push({type:Rt[o],data:_,position:l,line:c,column:h})}function P(_){var A;for(e=0,i=(m+=_).length;r=m[e],e<i;){switch(A=e,o){case N:e=ut();break;case B:e=ft();break;case K:e=$();break;case J:e=dt();break;case tt:e=mt();break;case it:e=_t();break;case R:e=gt();break;case Z:e=pt();break;case et:e=lt();break;case p:e=ht()}A!==e&&(m[A]===`
`?(h=0,++c):++h)}return n+=e,m=m.slice(e),a}function ct(_){return s.length&&u(s.join("")),o=Ct,u("(eof)"),a}function ht(){return s=s.length?[]:s,t==="/"&&r==="*"?(l=n+e-1,o=N,t=r,e+1):t==="/"&&r==="/"?(l=n+e-1,o=B,t=r,e+1):r==="#"?(o=K,l=n+e,e):/\s/.test(r)?(o=et,l=n+e,e):(f=/\d/.test(r),d=/[^\w_]/.test(r),l=n+e,o=f?tt:d?J:Z,e)}function lt(){return/[^\s]/g.test(r)?(u(s.join("")),o=p,e):(s.push(r),t=r,e+1)}function $(){return r!=="\r"&&r!==`
`||t==="\\"?(s.push(r),t=r,e+1):(u(s.join("")),o=p,e)}function ft(){return $()}function ut(){return r==="/"&&t==="*"?(s.push(r),u(s.join("")),o=p,e+1):(s.push(r),t=r,e+1)}function dt(){if(t==="."&&/\d/.test(r))return o=R,e;if(t==="/"&&r==="*")return o=N,e;if(t==="/"&&r==="/")return o=B,e;if(r==="."&&s.length){for(;L(s););return o=R,e}if(r===";"||r===")"||r==="("){if(s.length)for(;L(s););return u(r),o=p,e+1}var _=s.length===2&&r!=="=";if(/[\w_\d\s]/.test(r)||_){for(;L(s););return o=p,e}return s.push(r),t=r,e+1}function L(_){for(var A,w,I=0;;){if(A=Y.indexOf(_.slice(0,_.length+I).join("")),w=Y[A],A===-1){if(I--+_.length>0)continue;w=_.slice(0,1).join("")}return u(w),l+=w.length,(s=s.slice(w.length)).length}}function _t(){return/[^a-fA-F0-9]/.test(r)?(u(s.join("")),o=p,e):(s.push(r),t=r,e+1)}function mt(){return r==="."||/[eE]/.test(r)?(s.push(r),o=R,t=r,e+1):r==="x"&&s.length===1&&s[0]==="0"?(o=it,s.push(r),t=r,e+1):/[^\d]/.test(r)?(u(s.join("")),o=p,e):(s.push(r),t=r,e+1)}function gt(){return r==="f"&&(s.push(r),t=r,e+=1),/[eE]/.test(r)||r==="-"&&/[eE]/.test(t)?(s.push(r),t=r,e+1):/[^\d]/.test(r)?(u(s.join("")),o=p,e):(s.push(r),t=r,e+1)}function pt(){if(/[^\d\w_]/.test(r)){var _=s.join("");return o=Ft.indexOf(_)>-1?Mt:Dt.indexOf(_)>-1?Ut:wt,u(s.join("")),o=p,e}return s.push(r),t=r,e+1}}function Lt(r){var t=Pt(),i=[];return i=(i=i.concat(t(r))).concat(t(null))}function Nt(r){return Lt(r)}function Bt(r){return r.map(t=>t.type!=="eof"?t.data:"").join("")}const O=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function Ot(r,t="100",i="300 es"){const e=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of r)if(n.type==="preprocessor"){const o=e.exec(n.data);if(o){const s=o[1].replace(/\s\s+/g," ");if(s===i)return s;if(s===t)return n.data="#version "+i,t;throw new Error("unknown glsl version: "+s)}}return r.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:`
`}),null}function zt(r,t){for(let i=t-1;i>=0;i--){const e=r[i];if(e.type!=="whitespace"&&e.type!=="block-comment"){if(e.type!=="keyword")break;if(e.data==="attribute"||e.data==="in")return!0}}return!1}function U(r,t,i,e){e=e||i;for(const n of r)if(n.type==="ident"&&n.data===i)return e in t?t[e]++:t[e]=0,U(r,t,e+"_"+t[e],e);return i}function at(r,t,i="afterVersion"){function e(c,h){for(let l=h;l<c.length;l++){const f=c[l];if(f.type==="operator"&&f.data===";")return l}return null}function n(c){let h=-1,l=0,f=-1;for(let d=0;d<c.length;d++){const m=c[d];if(m.type==="preprocessor"&&(m.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++l:m.data.match(/\#endif\s*.*/)&&--l),i!=="afterVersion"&&i!=="afterPrecision"||m.type==="preprocessor"&&/^#version/.test(m.data)&&(f=Math.max(f,d)),i==="afterPrecision"&&m.type==="keyword"&&m.data==="precision"){const u=e(c,d);if(u===null)throw new Error("precision statement not followed by any semicolons!");f=Math.max(f,u)}h<f&&l===0&&(h=d)}return h+1}const o={data:`
`,type:"whitespace"},s=c=>c<r.length&&/[^\r\n]$/.test(r[c].data);let a=n(r);s(a-1)&&r.splice(a++,0,o);for(const c of t)r.splice(a++,0,c);s(a-1)&&s(a)&&r.splice(a,0,o)}function Vt(r,t,i,e="lowp"){at(r,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:e},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function kt(r,t,i,e,n="lowp"){at(r,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:e.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function jt(r,t){let i,e,n=-1;for(let o=t;o<r.length;o++){const s=r[o];if(s.type==="operator"&&(s.data==="["&&(i=o),s.data==="]")){e=o;break}s.type==="integer"&&(n=parseInt(s.data,10))}return i&&e&&r.splice(i,e-i+1),n}function $t(r,t){const i=It();if(S(i))return i;const e=Nt(r);if(Ot(e,"100","300 es")==="300 es")throw new Error("shader is already glsl 300 es");let n=null,o=null;const s={},a={};for(let c=0;c<e.length;++c){const h=e[c];switch(h.type){case"keyword":t===35633&&h.data==="attribute"?h.data="in":h.data==="varying"&&(h.data=t===35633?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(h.data.trim())&&(h.data=h.data.replace(/(2D|Cube|EXT)/g,"")),t===35632&&h.data==="gl_FragColor"&&(n||(n=U(e,s,"fragColor"),Vt(e,n,"vec4")),h.data=n),t===35632&&h.data==="gl_FragData"){const l=jt(e,c+1),f=U(e,s,"fragData");kt(e,f,"vec4",l,"mediump"),h.data=f}else t===35632&&h.data==="gl_FragDepthEXT"&&(o||(o=U(e,s,"gl_FragDepth")),h.data=o);break;case"ident":if(St.indexOf(h.data)>=0){if(t===35633&&zt(e,c))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");h.data in a||(a[h.data]=U(e,s,h.data)),h.data=a[h.data]}}}for(let c=e.length-1;c>=0;--c){const h=e[c];if(h.type==="preprocessor"){const l=h.data.match(/\#extension\s+(.*)\:/);if(l&&l[1]&&O.indexOf(l[1].trim())>=0){const m=e[c+1];e.splice(c,m&&m.type==="whitespace"?2:1)}const f=h.data.match(/\#ifdef\s+(.*)/);f&&f[1]&&O.indexOf(f[1].trim())>=0&&(h.data="#if 1");const d=h.data.match(/\#ifndef\s+(.*)/);d&&d[1]&&O.indexOf(d[1].trim())>=0&&(h.data="#if 0")}}return Ht(r,Bt(e))}function It(r){return null}function Ht(r,t){return t}class Kt{constructor(t,i,e,n){this._context=t,this._locations=n,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),i.length===0&&console.error("Shaders source should not be empty!"),this._vShader=rt(this._context,35633,i),this._fShader=rt(this._context,35632,e),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(g.VertexShader,this),this._context.instanceCounter.increment(g.FragmentShader,this)}get glName(){if(S(this._glName))return this._glName;if(F(this._vShader))return null;const t=this._context.gl,i=t.createProgram();return t.attachShader(i,this._vShader),t.attachShader(i,this._fShader),this._locations.forEach((e,n)=>t.bindAttribLocation(i,e,n)),t.linkProgram(i),j()&&!t.getProgramParameter(i,t.LINK_STATUS)&&console.error(`Could not link shader
validated: ${t.getProgramParameter(i,t.VALIDATE_STATUS)}, gl error ${t.getError()}, vertex: ${t.getShaderParameter(this._vShader,t.COMPILE_STATUS)}, fragment: ${t.getShaderParameter(this._fShader,t.COMPILE_STATUS)}, info log: ${t.getProgramInfoLog(i)}`),this._glName=i,this._context.instanceCounter.increment(g.Program,this),i}dispose(){const t=this._context.gl;this._vShader&&(t.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(g.VertexShader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null,this._context.instanceCounter.decrement(g.FragmentShader,this)),this._glName&&(t.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(g.Program,this))}_getUniformLocation(t){return this._nameToUniformLocation[t]===void 0&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this.glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return this._getUniformLocation(t)!==null}setUniform1i(t,i){const e=this._nameToUniform1[t];(e===void 0||i!==e)&&(this._context.useProgram(this),this._context.gl.uniform1i(this._getUniformLocation(t),i),this._nameToUniform1[t]=i)}setUniform1iv(t,i){const e=this._nameToUniform1v[t];b(e,i)&&(this._context.useProgram(this),this._context.gl.uniform1iv(this._getUniformLocation(t),i),e===void 0?this._nameToUniform1v[t]=Array.from(i):x(i,e))}setUniform2iv(t,i){const e=this._nameToUniform2[t];b(e,i)&&(this._context.useProgram(this),this._context.gl.uniform2iv(this._getUniformLocation(t),i),e===void 0?this._nameToUniform2[t]=Array.from(i):x(i,e))}setUniform3iv(t,i){const e=this._nameToUniform3[t];b(e,i)&&(this._context.useProgram(this),this._context.gl.uniform3iv(this._getUniformLocation(t),i),e===void 0?this._nameToUniform3[t]=Array.from(i):x(i,e))}setUniform4iv(t,i){const e=this._nameToUniform4[t];b(e,i)&&(this._context.useProgram(this),this._context.gl.uniform4iv(this._getUniformLocation(t),i),e===void 0?this._nameToUniform4[t]=Array.from(i):x(i,e))}setUniform1f(t,i){const e=this._nameToUniform1[t];(e===void 0||i!==e)&&(this._context.useProgram(this),this._context.gl.uniform1f(this._getUniformLocation(t),i),this._nameToUniform1[t]=i)}setUniform1fv(t,i){const e=this._nameToUniform1v[t];b(e,i)&&(this._context.useProgram(this),this._context.gl.uniform1fv(this._getUniformLocation(t),i),e===void 0?this._nameToUniform1v[t]=Array.from(i):x(i,e))}setUniform2f(t,i,e){const n=this._nameToUniform2[t];(n===void 0||i!==n[0]||e!==n[1])&&(this._context.useProgram(this),this._context.gl.uniform2f(this._getUniformLocation(t),i,e),n===void 0?this._nameToUniform2[t]=[i,e]:(n[0]=i,n[1]=e))}setUniform2fv(t,i){const e=this._nameToUniform2[t];b(e,i)&&(this._context.useProgram(this),this._context.gl.uniform2fv(this._getUniformLocation(t),i),e===void 0?this._nameToUniform2[t]=Array.from(i):x(i,e))}setUniform3f(t,i,e,n){const o=this._nameToUniform3[t];(o===void 0||i!==o[0]||e!==o[1]||n!==o[2])&&(this._context.useProgram(this),this._context.gl.uniform3f(this._getUniformLocation(t),i,e,n),o===void 0?this._nameToUniform3[t]=[i,e,n]:(o[0]=i,o[1]=e,o[2]=n))}setUniform3fv(t,i){const e=this._nameToUniform3[t];b(e,i)&&(this._context.useProgram(this),this._context.gl.uniform3fv(this._getUniformLocation(t),i),e===void 0?this._nameToUniform3[t]=Array.from(i):x(i,e))}setUniform4f(t,i,e,n,o){const s=this._nameToUniform4[t];(s===void 0||i!==s[0]||e!==s[1]||n!==s[2]||o!==s[3])&&(this._context.useProgram(this),this._context.gl.uniform4f(this._getUniformLocation(t),i,e,n,o),s===void 0?this._nameToUniform4[t]=[i,e,n,o]:(s[0]=i,s[1]=e,s[2]=n,s[3]=o))}setUniform4fv(t,i){const e=this._nameToUniform4[t];b(e,i)&&(this._context.useProgram(this),this._context.gl.uniform4fv(this._getUniformLocation(t),i),e===void 0?this._nameToUniform4[t]=Array.from(i):x(i,e))}setUniformMatrix3fv(t,i,e=!1,n=!1){const o=this._nameToUniformMatrix3[t];(n?o!==i:Wt(o,i))&&(this._context.useProgram(this),this._context.gl.uniformMatrix3fv(this._getUniformLocation(t),e,i),o===void 0?this._nameToUniformMatrix3[t]=Array.from(i):x(i,o))}setUniformMatrix4fv(t,i,e=!1){const n=this._nameToUniformMatrix4[t];qt(n,i)&&(this._context.useProgram(this),this._context.gl.uniformMatrix4fv(this._getUniformLocation(t),e,i),n===void 0?this._nameToUniformMatrix4[t]=Array.from(i):x(i,n))}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){}}function b(r,t){if(F(r)||r.length!==t.length)return!0;for(let i=0;i<r.length;++i)if(r[i]!==t[i])return!0;return!1}function rt(r,t,i){const e=r.webglVersion==="webgl2"?$t(i,t):i,n=r.gl,o=n.createShader(t);return n.shaderSource(o,e),n.compileShader(o),j()&&!n.getShaderParameter(o,n.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===35633?"vertex":"fragment"," shader")),console.error(n.getShaderInfoLog(o)),console.error(Xt(e)),r.webglVersion==="webgl2"&&(console.log("Shader source before transpilation:"),console.log(i))),o}function Xt(r){let t=2;return r.replace(/\n/g,()=>`
`+Gt(t++)+":")}function Gt(r){return r>=1e3?r.toString():("  "+r).slice(-3)}function x(r,t){for(let i=0;i<r.length;++i)t[i]=r[i]}function Wt(r,t){return!!F(r)||(r.length!==9?b(r,t):r.length!==9||r[0]!==t[0]||r[1]!==t[1]||r[2]!==t[2]||r[3]!==t[3]||r[4]!==t[4]||r[5]!==t[5]||r[6]!==t[6]||r[7]!==t[7]||r[8]!==t[8])}function qt(r,t){return!!F(r)||(r.length!==16?b(r,t):r.length!==16||r[0]!==t[0]||r[1]!==t[1]||r[2]!==t[2]||r[3]!==t[3]||r[4]!==t[4]||r[5]!==t[5]||r[6]!==t[6]||r[7]!==t[7]||r[8]!==t[8]||r[9]!==t[9]||r[10]!==t[10]||r[11]!==t[11]||r[12]!==t[12]||r[13]!==t[13]||r[14]!==t[14]||r[15]!==t[15])}const E=k.getLogger("esri.views.webgl.VertexArrayObject");class Jt{constructor(t,i,e,n,o=null){this._context=t,this._locations=i,this._layout=e,this._buffers=n,this._indexBuffer=o,this._glName=null,this._initialized=!1,t.instanceCounter.increment(g.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((t,i)=>t+this._buffers[i].size,S(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){if(!this._context)return void((this._glName||t&&Object.getOwnPropertyNames(this._buffers).length>0)&&E.warn("Leaked WebGL VAO"));if(this._glName){var i,e;const n=(i=this._context)==null||(e=i.capabilities)==null?void 0:e.vao;n?(n.deleteVertexArray(this._glName),this._glName=null):E.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const n in this._buffers)this._buffers[n].dispose(),delete this._buffers[n];this._indexBuffer=xt(this._indexBuffer)}this._context.instanceCounter.decrement(g.VAO,this),this._context=null}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const i=t.createVertexArray();t.bindVertexArray(i),this._bindLayout(),t.bindVertexArray(null),this._glName=i}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:i,_indexBuffer:e}=this;t||E.error("Vertex buffer dictionary is empty!");const n=this._context.gl;for(const o in t){const s=t[o];s||E.error("Vertex buffer is uninitialized!");const a=i[o];a||E.error("Vertex element descriptor is empty!"),Tt(this._context,this._locations,s,a)}S(e)&&(this._context.capabilities.vao?n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.glName):this._context.bindBuffer(e))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:i}=this;t||E.error("Vertex buffer dictionary is empty!");for(const e in t){const n=t[e];n||E.error("Vertex buffer is uninitialized!");const o=i[e];At(this._context,this._locations,n,o)}S(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}export{vt as a,C as e,Jt as f,y as l,Kt as n,z as o,Zt as r};
