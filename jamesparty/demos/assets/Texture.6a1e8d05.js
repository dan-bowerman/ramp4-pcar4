import{ai as f,a as E,s as w,r as T,am as u}from"./main.20e70297.js";const A=f.getLogger("esri/views/webgl");function D(i,e){switch(e){case i.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case i.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case i.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case i.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case i.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case i.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const M=!!E("enable-feature:webgl-debug");function I(){return M}function y(){return M}function c(i){if(I()){const e=i.getError();if(e){const t=D(i,e),r=new Error().stack;A.error(new w("webgl-error","WebGL error occured",{message:t,stack:r}))}}}const b=33984;var m;(function(i){i[i.Texture=0]="Texture",i[i.Buffer=1]="Buffer",i[i.VAO=2]="VAO",i[i.VertexShader=3]="VertexShader",i[i.FragmentShader=4]="FragmentShader",i[i.Program=5]="Program",i[i.Framebuffer=6]="Framebuffer",i[i.Renderbuffer=7]="Renderbuffer",i[i.COUNT=8]="COUNT"})(m||(m={}));const L=33306;function N(i){return window.WebGL2RenderingContext&&i instanceof window.WebGL2RenderingContext}const g=4;class o{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(m.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},this._descriptor.target===34067?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(m.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,this._descriptor.target===34067?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),e===void 0&&(e=null),e===null&&(this._descriptor.width=this._descriptor.width||g,this._descriptor.height=this._descriptor.height||g);const p=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES),a=this._descriptor;o._validateTexture(this._context,a),r.pixelStorei(r.UNPACK_ALIGNMENT,a.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,a.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.preMultiplyAlpha?1:0);const h=a.pixelFormat;let l=a.internalFormat?a.internalFormat:this._deriveInternalFormat(h,a.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let s=e.width,n=e.height;e instanceof HTMLVideoElement&&(s=e.videoWidth,n=e.videoHeight),a.width&&a.height,r.texImage2D(t,0,l,h,a.dataType,e),c(r),a.hasMipmap&&this.generateMipmap(),a.width===void 0&&(a.width=s),a.height===void 0&&(a.height=n)}else{a.width!=null&&a.height!=null||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&l===r.DEPTH_STENCIL&&(l=r.DEPTH24_STENCIL8);let s=a.width,n=a.height;if(U(e)){const d=Math.round(Math.log(Math.max(s,n))/Math.LN2)+1;a.hasMipmap=a.hasMipmap&&d===e.levels.length;for(let _=0;;++_){const x=e.levels[Math.min(_,e.levels.length-1)];if(r.compressedTexImage2D(t,_,l,s,n,0,x),s===1&&n===1||!a.hasMipmap)break;s=Math.max(1,s>>1),n=Math.max(1,n>>1)}}else if(T(e))r.texImage2D(t,0,l,s,n,0,h,a.dataType,e),c(r),a.hasMipmap&&this.generateMipmap();else for(let d=0;r.texImage2D(t,d,l,s,n,0,h,a.dataType,null),c(r),(s!==1||n!==1)&&a.hasMipmap;++d)s=Math.max(1,s>>1),n=Math.max(1,n>>1)}o._applySamplingMode(r,this._descriptor),o._applyWrapMode(r,this._descriptor),o._applyAnisotropicFilteringParameters(this._context,this._descriptor),c(r),this._context.bindTexture(p,o.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,p,a,h,l=3553){h||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,n=this._descriptor,d=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||p>n.width||a>n.height||t+p>n.width||r+a>n.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,n.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0),h instanceof ImageData||h instanceof HTMLImageElement||h instanceof HTMLCanvasElement||h instanceof HTMLVideoElement?s.texSubImage2D(l,e,t,r,n.pixelFormat,n.dataType,h):s.texSubImage2D(l,e,t,r,p,a,n.pixelFormat,n.dataType,h),this._context.bindTexture(d,o.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,o._validateTexture(this._context,e)),e.samplingMode===9729?(this._samplingModeDirty=!0,e.samplingMode=9985):e.samplingMode===9728&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,o.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,o._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(o._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(o._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.webglVersion==="webgl")return e;if(t===5126)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=u(t.width)&&u(t.height);N(e.gl)||r||(typeof t.wrapMode=="number"?t.wrapMode!==33071&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===33071&&t.wrapMode.t===33071||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,p=t.samplingMode;r===9985||r===9987?(r=9729,t.hasMipmap||(p=9729)):r!==9984&&r!==9986||(r=9728,t.hasMipmap||(p=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,p)}static _applyWrapMode(e,t){typeof t.wrapMode=="number"?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const p=e.capabilities.textureFilterAnisotropic;!p||e.gl.texParameterf(t.target,p.TEXTURE_MAX_ANISOTROPY,(r=t.maxAnisotropy)!=null?r:1)}}function U(i){return T(i)&&"type"in i&&i.type==="compressed"}o.TEXTURE_UNIT_FOR_UPDATES=0;export{y as c,b as e,L as f,N as n,o,m as r,c as s,I as u};
