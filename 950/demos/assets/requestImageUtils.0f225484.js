import{C as S}from"./main.5d3fa3f4.js";function c(t,e,n=32774,i=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:n,opAlpha:n,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function b(t,e,n,i,s=32774,W=32774,o=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:n,dstAlpha:i,opRgb:s,opAlpha:W,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const T={face:1029,mode:2305},y={face:1028,mode:2305},L=t=>t===2?T:t===1?y:null,Q={zNear:0,zFar:1},U={r:!0,g:!0,b:!0,a:!0};function O(t){return P.intern(t)}function w(t){return k.intern(t)}function $(t){return z.intern(t)}function m(t){return B.intern(t)}function C(t){return F.intern(t)}function A(t){return K.intern(t)}function R(t){return N.intern(t)}function D(t){return j.intern(t)}function V(t){return x.intern(t)}class l{constructor(e,n){this.makeKey=e,this.makeRef=n,this.interns=new Map}intern(e){if(!e)return null;const n=this.makeKey(e),i=this.interns;return i.has(n)||i.set(n,this.makeRef(e)),i.get(n)}}function r(t){return"["+t.join(",")+"]"}const P=new l(u,t=>({__tag:"Blending",...t}));function u(t){return t?r([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const k=new l(d,t=>({__tag:"Culling",...t}));function d(t){return t?r([t.face,t.mode]):null}const z=new l(p,t=>({__tag:"PolygonOffset",...t}));function p(t){return t?r([t.factor,t.units]):null}const B=new l(_,t=>({__tag:"DepthTest",...t}));function _(t){return t?r([t.func]):null}const F=new l(f,t=>({__tag:"StencilTest",...t}));function f(t){return t?r([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const K=new l(g,t=>({__tag:"DepthWrite",...t}));function g(t){return t?r([t.zNear,t.zFar]):null}const N=new l(v,t=>({__tag:"ColorWrite",...t}));function v(t){return t?r([t.r,t.g,t.b,t.a]):null}const j=new l(I,t=>({__tag:"StencilWrite",...t}));function I(t){return t?r([t.mask]):null}const x=new l(M,t=>({blending:O(t.blending),culling:w(t.culling),polygonOffset:$(t.polygonOffset),depthTest:m(t.depthTest),stencilTest:C(t.stencilTest),depthWrite:A(t.depthWrite),colorWrite:R(t.colorWrite),stencilWrite:D(t.stencilWrite)}));function M(t){return t?r([u(t.blending),d(t.culling),p(t.polygonOffset),_(t.depthTest),f(t.stencilTest),g(t.depthWrite),v(t.colorWrite),I(t.stencilWrite)]):null}class X{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this.setBlending(e.blending),this.setCulling(e.culling),this.setPolygonOffset(e.polygonOffset),this.setDepthTest(e.depthTest),this.setStencilTest(e.stencilTest),this.setDepthWrite(e.depthWrite),this.setColorWrite(e.colorWrite),this.setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(e){this._blending=this.setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(e){this._culling=this.setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(e){this._polygonOffset=this.setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(e){this._depthTest=this.setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(e){this._stencilTest=this.setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(e){this._depthWrite=this.setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(e){this._colorWrite=this.setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(e){this._stencilWrite=this.setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(e,n,i,s){return(i||e!==n)&&(s(e),this._pipelineInvalid=!0),e}}function q(t,e,n){for(let i=0;i<n;++i)e[2*i]=t[i],e[2*i+1]=t[i]-e[2*i]}function Y(t,e,n,i){for(let s=0;s<i;++s)h[0]=t[s],q(h,a,1),e[s]=a[0],n[s]=a[1]}const h=new Float64Array(1),a=new Float32Array(2),Z=b(770,1,771,771),E=c(1,1),G=c(0,771);function tt(t){return t===2?null:t===1?G:E}const et=5e5,H={factor:-1,units:-2};function it(t){return t?H:null}function nt(t){return t===3||t===2?513:515}async function st(t,e){const{data:n}=await S(t,{responseType:"image",...e});return n}export{X as K,G as a,nt as b,tt as c,U as d,it as e,et as f,V as g,Q as l,q as o,Y as r,L as s,st as t,Z as u};
