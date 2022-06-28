import{gr as ar,go as ir,gA as sr,e as m,d as A,i as lr,N as cr,aU as w,ay as ur,gB as H,gC as fr,gD as gr,gE as J,gF as G,gG as pr,gH as yr,gI as P,gJ as hr,gK as V,gL as mr,aZ as Ar,r as j,gM as Tr,gN as $r,gO as C,aj as dr,gP as R,gQ as Er,gR as Fr,gS as Mr,gT as q,gU as U,gV as W,gW as vr,gn as xr,f as h,gX as N,gY as Z,gZ as wr,g_ as Pr,g$ as Rr}from"./main.648ca69b.js";import{I as k,v as Nr,P as br,e as K,a as Q}from"./quat.b79daae2.js";import{e as T,a as E,b as _r,c as Lr,f as $,o as X}from"./vec33.75e7e2a2.js";import{T as g,i as f}from"./BufferView.1416a523.js";function F(r=Cr){return[r[0],r[1],r[2],r[3]]}function lt(r,t,e=F()){return ar(e,r),e[3]=t,e}function ct(r,t,e=F()){return k(M,r,S(r)),k(D,t,S(t)),Nr(M,D,M),Br(e,sr(br(e,M)))}function ut(r){return r}function S(r){return ir(r[3])}function Br(r,t){return r[3]=t,r}const Cr=[0,0,1,0],M=K(),D=K();F();var Y;let y=Y=class extends cr{constructor(r){super(r),this.origin=w(),this.translation=w(),this.rotation=F(),this.scale=ur(1,1,1),this.geographic=!0}get localMatrix(){const r=T();return H(r,r,this.scale),fr(r,r,S(this.rotation),this.rotation),gr(r,r,this.translation),r}get localMatrixInverse(){return J(T(),this.localMatrix)}applyLocal(r,t){return G(t,r,this.localMatrix)}applyLocalInverse(r,t){return G(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),o=g.fromTypedArray(e),n=g.fromTypedArray(r);if(this.geographic){const l=pr(yr(t)),c=T();return P(t,this.origin,c,l),hr(c,c,this.localMatrix),E(o,n,c),V(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;mr(a,_r)?Lr(o,n):E(o,n,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,o]=this.origin;return new Ar({x:t,y:e,z:o,spatialReference:r})}equals(r){return j(r)&&this.geographic===r.geographic&&Tr(this.origin,r.origin)&&$r(this.localMatrix,r.localMatrix)}clone(){const r={origin:C(this.origin),translation:C(this.translation),rotation:F(this.rotation),scale:C(this.scale),geographic:this.geographic};return new Y(r)}};m([A({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"origin",void 0),m([A({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"translation",void 0),m([A({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"rotation",void 0),m([A({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"scale",void 0),m([A({type:Boolean,nonNullable:!0,json:{write:!0}})],y.prototype,"geographic",void 0),m([A()],y.prototype,"localMatrix",null),m([A()],y.prototype,"localMatrixInverse",null),y=Y=m([lr("esri.geometry.support.MeshTransform")],y);const jr=y;function b(r,t){var e;return r.isGeographic||r.isWebMercator&&((e=t?.geographic)==null||e)}const _=dr.getLogger("esri.geometry.support.meshUtils.normalProjection");function Sr(r,t,e,o,n){return B(o)?(L(0,f.fromTypedArray(r),g.fromTypedArray(t),g.fromTypedArray(e),o,f.fromTypedArray(n)),n):(_.error("Cannot convert spatial reference to PCPF"),n)}function Yr(r,t,e,o,n){return B(o)?(L(1,f.fromTypedArray(r),g.fromTypedArray(t),g.fromTypedArray(e),o,f.fromTypedArray(n)),n):(_.error("Cannot convert to spatial reference from PCPF"),n)}function zr(r,t,e){return V(r,t,0,e,R(t),0,r.length/3),e}function Ir(r,t,e){return V(r,R(e),0,t,e,0,r.length/3),t}function Vr(r,t,e){if(h(r))return t;const o=g.fromTypedArray(r),n=g.fromTypedArray(t);return E(n,o,e),t}function Or(r,t,e){if(h(r))return t;N(u,e);const o=f.fromTypedArray(r),n=f.fromTypedArray(t);return $(n,o,u),Z(u)||X(n,n),t}function Gr(r,t,e){if(h(r))return t;N(u,e);const o=f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n=f.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if($(n,o,u),Z(u)||X(n,n),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function qr(r,t,e,o,n){if(!B(o))return _.error("Cannot convert spatial reference to PCPF"),n;L(0,f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),g.fromTypedArray(t),g.fromTypedArray(e),o,f.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function Ur(r,t,e,o,n){if(!B(o))return _.error("Cannot convert to spatial reference from PCPF"),n;L(1,f.fromTypedArray(r,16),g.fromTypedArray(t),g.fromTypedArray(e),o,f.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function L(r,t,e,o,n,a){if(!t)return;const i=e.count,l=R(n);if(rr(n))for(let c=0;c<i;c++)o.getVec(c,v),t.getVec(c,p),P(l,v,x,l),q(u,x),r===1&&U(u,u),W(p,p,u),a.setVec(c,p);else for(let c=0;c<i;c++){o.getVec(c,v),t.getVec(c,p),P(l,v,x,l),q(u,x);const d=vr(e.get(c,1));let s=Math.cos(d);r===0&&(s=1/s),u[0]*=s,u[1]*=s,u[2]*=s,u[3]*=s,u[4]*=s,u[5]*=s,r===1&&U(u,u),W(p,p,u),xr(p,p),a.setVec(c,p)}return a}function B(r){return rr(r)||Wr(r)}function rr(r){return r.isWGS84||Er(r)||Fr(r)||Mr(r)}function Wr(r){return r.isWebMercator}const v=w(),p=w(),x=T(),u=Q();function tr(r,t,e){return b(t.spatialReference,e)?Jr(r,t,e):Hr(r,t,e)}function kr(r,t,e){const{position:o,normal:n,tangent:a}=r;if(h(t))return{position:o,normal:n,tangent:a};const i=t.localMatrix;return tr({position:Vr(o,new Float64Array(o.length),i),normal:j(n)?Or(n,new Float32Array(n.length),i):null,tangent:j(a)?Gr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function ft(r,t,e){if(e!=null&&e.useTransform){var o;const{position:n,normal:a,tangent:i}=r;return{vertexAttributes:{position:n,normal:a,tangent:i},transform:new jr({origin:[t.x,t.y,(o=t.z)!=null?o:0],geographic:b(t.spatialReference,e)})}}return{vertexAttributes:tr(r,t,e),transform:null}}function Dr(r,t,e){return b(t.spatialReference,e)?er(r,t,e):z(r,t,e)}function gt(r,t,e,o){if(h(t))return Dr(r,e,o);const n=kr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?z(n,e,o):b(e.spatialReference,o)?er(n,e,o):z(n,e,o)}function Hr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:d}=O(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=n[s+0]*c+a,o[s+1]=n[s+1]*c+i,o[s+2]=n[s+2]*d+l;return{position:o,normal:r.normal,tangent:r.tangent}}function Jr(r,t,e){const o=t.spatialReference,n=nr(t,e,I),a=new Float64Array(r.position.length),i=Zr(r.position,n,o,a),l=N(or,n);return{position:i,normal:Kr(i,a,r.normal,l,o),tangent:Qr(i,a,r.tangent,l,o)}}function Zr(r,t,e,o){E(g.fromTypedArray(o),g.fromTypedArray(r),t);const n=new Float64Array(r.length);return Ir(o,n,e)}function Kr(r,t,e,o,n){if(h(e))return null;const a=new Float32Array(e.length);return $(f.fromTypedArray(a),f.fromTypedArray(e),o),Yr(a,r,t,n,a),a}function Qr(r,t,e,o,n){if(h(e))return null;const a=new Float32Array(e.length);$(f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=e[i];return Ur(a,r,t,n,a),a}function z(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:d}=O(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=(n[s+0]-a)/c,o[s+1]=(n[s+1]-i)/c,o[s+2]=(n[s+2]-l)/d;return{position:o,normal:r.normal,tangent:r.tangent}}function er(r,t,e){const o=t.spatialReference;nr(t,e,I);const n=J(et,I),a=new Float64Array(r.position.length),i=Xr(r.position,o,n,a),l=N(or,n);return{position:i,normal:rt(r.normal,r.position,a,o,l),tangent:tt(r.tangent,r.position,a,o,l)}}function nr(r,t,e){P(r.spatialReference,[r.x,r.y,r.z||0],e,R(r.spatialReference));const{horizontal:o,vertical:n}=O(t?t.unit:null,r.spatialReference);return H(e,e,[o,o,n]),e}function Xr(r,t,e,o){const n=zr(r,t,o),a=g.fromTypedArray(n),i=new Float64Array(n.length),l=g.fromTypedArray(i);return E(l,a,e),i}function rt(r,t,e,o,n){if(h(r))return null;const a=Sr(r,t,e,o,new Float32Array(r.length)),i=f.fromTypedArray(a);return $(i,i,n),a}function tt(r,t,e,o,n){if(h(r))return null;const a=qr(r,t,e,o,new Float32Array(r.length)),i=f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return $(i,i,n),a}function O(r,t){if(h(r))return nt;const e=t.isGeographic?1:wr(t),o=t.isGeographic?1:Pr(t),n=Rr(1,r,"meters");return{horizontal:n*e,vertical:n*o}}const I=T(),et=T(),or=Q(),nt={horizontal:1,vertical:1};export{qr as B,Sr as F,Ir as M,jr as O,Ur as R,kr as _,Yr as a,ft as b,F as c,S as d,lt as e,gt as f,Dr as k,ut as l,ct as q,b as r,zr as v,tr as x};
