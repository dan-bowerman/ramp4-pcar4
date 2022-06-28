import{a as kt,_ as vt,cM as Nt}from"./main.e3a581a7.js";import{S as Et,o as Rt}from"./definitions.21e97413.js";import{g as ut}from"./GeometryUtils.ea8c8742.js";class L{constructor(t,i){this.x=t,this.y=i}clone(){return new L(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){this.x=t,this.y=i}normalize(){const t=this.x,i=this.y,e=Math.sqrt(t*t+i*i);this.x/=e,this.y/=e}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t}move(t,i){this.x+=t,this.y+=i}assign(t){this.x=t.x,this.y=t.y}assignAdd(t,i){this.x=t.x+i.x,this.y=t.y+i.y}assignSub(t,i){this.x=t.x-i.x,this.y=t.y-i.y}rotate(t,i){const e=this.x,x=this.y;this.x=e*t-x*i,this.y=e*i+x*t}scale(t){this.x*=t,this.y*=t}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}static distance(t,i){const e=i.x-t.x,x=i.y-t.y;return Math.sqrt(e*e+x*x)}static add(t,i){return new L(t.x+i.x,t.y+i.y)}static sub(t,i){return new L(t.x-i.x,t.y-i.y)}}const Lt=128e3;let dt=null,bt=null;async function At(){return dt||(dt=It()),dt}async function It(){bt=await(kt("esri-csp-restrictions")?await vt(()=>import("./libtess-asm.2ffdb046.js"),[]).then(t=>t.l):await vt(()=>import("./libtess.666bc0df.js"),[]).then(t=>t.l)).load({locateFile:()=>Nt("esri/core/libs/libtess/libtess.wasm")})}function Bt(o,t){const i=Math.max(o.length,Lt);return bt.triangulate(o,t,i)}function Mt(o,t){return o.x===t.x&&o.y===t.y}function Dt(o){if(!o)return;const t=o.length;if(t<=1)return;let i=0;for(let e=1;e<t;e++)Mt(o[e],o[i])||++i===e||(o[i]=o[e]);o.length=i+1}function B(o,t){return o.x=t.y,o.y=-t.x,o}function $(o,t){return o.x=-t.y,o.y=t.x,o}function wt(o,t){return o.x=t.x,o.y=t.y,o}function gt(o,t){return o.x=-t.x,o.y=-t.y,o}function _t(o){return Math.sqrt(o.x*o.x+o.y*o.y)}function St(o,t){return o.x*t.y-o.y*t.x}function Tt(o,t){return o.x*t.x+o.y*t.y}function it(o,t,i,e){return o.x=t.x*i+t.y*e,o.y=t.x*e-t.y*i,o}class Wt{constructor(t,i,e){this.writeVertex=t,this.writeTriangle=i,this.canUseThinTessellation=e,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}tessellate(t,i){Dt(t),this.canUseThinTessellation&&i.halfWidth<Et&&!i.offset?this.tessellateThin_(t,i):this.tessellate_(t,i)}tessellateThin_(t,i){if(t.length<2)return;const e=i.wrapDistance||65535;let x=i.initialDistance||0,l=!1,r=t[0].x,u=t[0].y;const a=t.length;for(let c=1;c<a;++c){l&&(l=!1,x=0);let N=t[c].x,v=t[c].y,m=N-r,p=v-u,n=Math.sqrt(m*m+p*p);if(m/=n,p/=n,x+n>e){l=!0;const s=(e-x)/n;n=e-x,N=(1-s)*r+s*N,v=(1-s)*u+s*v,--c}const y=this.writeVertex(r,u,0,0,m,p,p,-m,0,-1,x),f=this.writeVertex(r,u,0,0,m,p,-p,m,0,1,x);x+=n;const d=this.writeVertex(N,v,0,0,m,p,p,-m,0,-1,x),h=this.writeVertex(N,v,0,0,m,p,-p,m,0,1,x);this.writeTriangle(y,f,d),this.writeTriangle(f,d,h),r=N,u=v}}tessellate_(t,i){const e=t[0],x=t[t.length-1],l=Mt(e,x),r=l?3:2;if(t.length<r)return;const u=i.pixelCoordRatio,a=i.capType!=null?i.capType:0,c=i.joinType!=null?i.joinType:2,N=i.miterLimit!=null?Math.min(i.miterLimit,4):2,v=i.roundLimit!=null?Math.min(i.roundLimit,1.05):1.05,m=i.halfWidth!=null?i.halfWidth:2,p=!!i.textured;let n,y,f=null,d=null;const h=this.prevNormal,s=this.nextNormal;let Q=-1,O=-1;const _=this.joinNormal;let M,P;const ht=this.textureNormalLeft,nt=this.textureNormalRight,E=this.textureNormal;let V=-1,w=-1;const mt=i.wrapDistance||65535;let T=i.initialDistance||0;const Pt=this.writeVertex,Vt=this.writeTriangle,k=function(q,xt,J,I,W,j){const C=Pt(n,y,M,P,J,I,q,xt,W,j,T);return V>=0&&w>=0&&C>=0&&Vt(V,w,C),V=w,w=C,C};l&&(f=t[t.length-2],s.x=x.x-f.x,s.y=x.y-f.y,O=_t(s),s.x/=O,s.y/=O);let Y=!1;for(let q=0;q<t.length;++q){if(Y&&(Y=!1,T=0),f&&(h.x=-s.x,h.y=-s.y,Q=O,T+Q>mt&&(Y=!0)),Y){const g=(mt-T)/Q;Q=mt-T,f={x:(1-g)*f.x+g*t[q].x,y:(1-g)*f.y+g*t[q].y},--q}else f=t[q];n=f.x,y=f.y;const xt=q<=0&&!Y,J=q===t.length-1;if(xt||(T+=Q),d=J?l?t[1]:null:t[q+1],d?(s.x=d.x-n,s.y=d.y-y,O=_t(s),s.x/=O,s.y/=O):(s.x=void 0,s.y=void 0),!l){if(xt){$(_,s),M=_.x,P=_.y,a===2&&(k(-s.y-s.x,s.x-s.y,s.x,s.y,0,-1),k(s.y-s.x,-s.x-s.y,s.x,s.y,0,1)),a===1&&(k(-s.y-s.x,s.x-s.y,s.x,s.y,-1,-1),k(s.y-s.x,-s.x-s.y,s.x,s.y,-1,1)),a!==1&&a!==0||(k(-s.y,s.x,s.x,s.y,0,-1),k(s.y,-s.x,s.x,s.y,0,1));continue}if(J){B(_,h),M=_.x,P=_.y,a!==1&&a!==0||(k(h.y,-h.x,-h.x,-h.y,0,-1),k(-h.y,h.x,-h.x,-h.y,0,1)),a===2&&(k(h.y-h.x,-h.x-h.y,-h.x,-h.y,0,-1),k(-h.y-h.x,h.x-h.y,-h.x,-h.y,0,1)),a===1&&(k(h.y-h.x,-h.x-h.y,-h.x,-h.y,1,-1),k(-h.y-h.x,h.x-h.y,-h.x,-h.y,1,1));continue}}let I,W,j=-St(h,s);if(Math.abs(j)<.01)Tt(h,s)>0?(_.x=h.x,_.y=h.y,j=1,I=Number.MAX_VALUE,W=!0):($(_,s),j=1,I=1,W=!1);else{_.x=(h.x+s.x)/j,_.y=(h.y+s.y)/j,I=_t(_);const g=(I-1)*m*u;W=I>4||g>Q&&g>O}M=_.x,P=_.y;let C=c;switch(c){case 0:I<1.05&&(C=2);break;case 1:I<v&&(C=2);break;case 2:I>N&&(C=0)}switch(C){case 2:if(k(_.x,_.y,-h.x,-h.y,0,-1),k(-_.x,-_.y,-h.x,-h.y,0,1),J)break;if(p){const g=Y?0:T;V=this.writeVertex(n,y,M,P,s.x,s.y,_.x,_.y,0,-1,g),w=this.writeVertex(n,y,M,P,s.x,s.y,-_.x,-_.y,0,1,g)}break;case 0:{const g=j<0;let R,D,G,z;if(g){const b=V;V=w,w=b,R=ht,D=nt}else R=nt,D=ht;if(W)G=g?$(this.innerPrev,h):B(this.innerPrev,h),z=g?B(this.innerNext,s):$(this.innerNext,s);else{const b=g?gt(this.inner,_):wt(this.inner,_);G=b,z=b}const A=g?B(this.bevelStart,h):$(this.bevelStart,h);k(G.x,G.y,-h.x,-h.y,R.x,R.y);const rt=k(A.x,A.y,-h.x,-h.y,D.x,D.y);if(J)break;const U=g?$(this.bevelEnd,s):B(this.bevelEnd,s);if(W){const b=this.writeVertex(n,y,M,P,-h.x,-h.y,0,0,0,0,T);V=this.writeVertex(n,y,M,P,s.x,s.y,z.x,z.y,R.x,R.y,T),w=this.writeVertex(n,y,M,P,s.x,s.y,U.x,U.y,D.x,D.y,T),this.writeTriangle(rt,b,w)}else{if(p){const b=this.bevelMiddle;b.x=(A.x+U.x)/2,b.y=(A.y+U.y)/2,it(E,b,-h.x,-h.y),k(b.x,b.y,-h.x,-h.y,E.x,E.y),it(E,b,s.x,s.y),V=this.writeVertex(n,y,M,P,s.x,s.y,b.x,b.y,E.x,E.y,T),w=this.writeVertex(n,y,M,P,s.x,s.y,z.x,z.y,R.x,R.y,T)}else{const b=V;V=w,w=b}k(U.x,U.y,s.x,s.y,D.x,D.y)}if(g){const b=V;V=w,w=b}break}case 1:{const g=j<0;let R,D;if(g){const S=V;V=w,w=S,R=ht,D=nt}else R=nt,D=ht;const G=g?gt(this.inner,_):wt(this.inner,_);let z,A;W?(z=g?$(this.innerPrev,h):B(this.innerPrev,h),A=g?B(this.innerNext,s):$(this.innerNext,s)):(z=G,A=G);const rt=g?B(this.roundStart,h):$(this.roundStart,h),U=g?$(this.roundEnd,s):B(this.roundEnd,s),b=k(z.x,z.y,-h.x,-h.y,R.x,R.y),yt=k(rt.x,rt.y,-h.x,-h.y,D.x,D.y);if(J)break;const H=this.writeVertex(n,y,M,P,-h.x,-h.y,0,0,0,0,T);W||this.writeTriangle(V,w,H);const X=gt(this.outer,G),K=this.writeVertex(n,y,M,P,s.x,s.y,U.x,U.y,D.x,D.y,T);let Z,tt;const lt=I>2;if(lt){let S;I!==Number.MAX_VALUE?(X.x/=I,X.y/=I,S=Tt(h,X),S=(I*(S*S-1)+1)/S):S=-1,Z=g?B(this.startBreak,h):$(this.startBreak,h),Z.x+=h.x*S,Z.y+=h.y*S,tt=g?$(this.endBreak,s):B(this.endBreak,s),tt.x+=s.x*S,tt.y+=s.y*S}it(E,X,-h.x,-h.y);const at=this.writeVertex(n,y,M,P,-h.x,-h.y,X.x,X.y,E.x,E.y,T);it(E,X,s.x,s.y);const pt=p?this.writeVertex(n,y,M,P,s.x,s.y,X.x,X.y,E.x,E.y,T):at,ft=H,ot=p?this.writeVertex(n,y,M,P,s.x,s.y,0,0,0,0,T):H;let st=-1,et=-1;if(lt&&(it(E,Z,-h.x,-h.y),st=this.writeVertex(n,y,M,P,-h.x,-h.y,Z.x,Z.y,E.x,E.y,T),it(E,tt,s.x,s.y),et=this.writeVertex(n,y,M,P,s.x,s.y,tt.x,tt.y,E.x,E.y,T)),p?lt?(this.writeTriangle(ft,yt,st),this.writeTriangle(ft,st,at),this.writeTriangle(ot,pt,et),this.writeTriangle(ot,et,K)):(this.writeTriangle(ft,yt,at),this.writeTriangle(ot,pt,K)):lt?(this.writeTriangle(H,yt,st),this.writeTriangle(H,st,et),this.writeTriangle(H,et,K)):(this.writeTriangle(H,yt,at),this.writeTriangle(H,pt,K)),W?(V=this.writeVertex(n,y,M,P,s.x,s.y,A.x,A.y,R.x,R.y,T),w=K):(V=p?this.writeVertex(n,y,M,P,s.x,s.y,A.x,A.y,R.x,R.y,T):b,this.writeTriangle(V,ot,K),w=K),g){const S=V;V=w,w=S}break}}}}}class ct{constructor(t,i,e){this.ratio=t,this.x=i,this.y=e}}class jt{constructor(t,i,e,x=8,l=8){this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=x,this.pixelMargin=l,this.tileSize=Rt*x,this.dz=t,this.yPos=i,this.xPos=e}setPixelMargin(t){t!==this.pixelMargin&&(this.pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this.finalRatio=this.tileSize/t*(1<<this.dz);let i=this.pixelRatio*this.pixelMargin;i/=this.finalRatio;const e=t>>this.dz;i>e&&(i=e),this.margin=i,this.xmin=e*this.xPos-i,this.ymin=e*this.yPos-i,this.xmax=this.xmin+e+2*i,this.ymax=this.ymin+e+2*i}reset(t){this.type=t,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new L(t,i),this._firstPt=new L(t,i),this._dist=0}lineTo(t,i){const e=this._isIn(t,i),x=new L(t,i),l=L.distance(this._prevPt,x);let r,u,a,c,N,v,m,p;if(e)this._prevIsIn?this._lineTo(t,i,!0):(r=this._prevPt,u=x,a=this._intersect(u,r),this.start=this._dist+l*(1-this._r),this._lineTo(a.x,a.y,!0),this._lineTo(u.x,u.y,!0));else if(this._prevIsIn)u=this._prevPt,r=x,a=this._intersect(u,r),this._lineTo(a.x,a.y,!0),this._lineTo(r.x,r.y,!1);else{const n=this._prevPt,y=x;if(n.x<=this.xmin&&y.x<=this.xmin||n.x>=this.xmax&&y.x>=this.xmax||n.y<=this.ymin&&y.y<=this.ymin||n.y>=this.ymax&&y.y>=this.ymax)this._lineTo(y.x,y.y,!1);else{const f=[];if((n.x<this.xmin&&y.x>this.xmin||n.x>this.xmin&&y.x<this.xmin)&&(c=(this.xmin-n.x)/(y.x-n.x),p=n.y+c*(y.y-n.y),p<=this.ymin?v=!1:p>=this.ymax?v=!0:f.push(new ct(c,this.xmin,p))),(n.x<this.xmax&&y.x>this.xmax||n.x>this.xmax&&y.x<this.xmax)&&(c=(this.xmax-n.x)/(y.x-n.x),p=n.y+c*(y.y-n.y),p<=this.ymin?v=!1:p>=this.ymax?v=!0:f.push(new ct(c,this.xmax,p))),(n.y<this.ymin&&y.y>this.ymin||n.y>this.ymin&&y.y<this.ymin)&&(c=(this.ymin-n.y)/(y.y-n.y),m=n.x+c*(y.x-n.x),m<=this.xmin?N=!1:m>=this.xmax?N=!0:f.push(new ct(c,m,this.ymin))),(n.y<this.ymax&&y.y>this.ymax||n.y>this.ymax&&y.y<this.ymax)&&(c=(this.ymax-n.y)/(y.y-n.y),m=n.x+c*(y.x-n.x),m<=this.xmin?N=!1:m>=this.xmax?N=!0:f.push(new ct(c,m,this.ymax))),f.length===0)N?v?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):v?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(f.length>1&&f[0].ratio>f[1].ratio)this.start=this._dist+l*f[1].ratio,this._lineTo(f[1].x,f[1].y,!0),this._lineTo(f[0].x,f[0].y,!0);else{this.start=this._dist+l*f[0].ratio;for(let d=0;d<f.length;d++)this._lineTo(f[d].x,f[d].y,!0)}this._lineTo(y.x,y.y,!1)}}this._dist+=l,this._prevIsIn=e,this._prevPt=x}close(){if(this.line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const e=this.line;let x=e.length;for(;x>=4&&(e[0].x===e[1].x&&e[0].x===e[x-2].x||e[0].y===e[1].y&&e[0].y===e[x-2].y);)e.pop(),e[0].x=e[x-2].x,e[0].y=e[x-2].y,--x}}result(t=!0){return this._pushLine(),this.lines.length===0?null:(this.type===3&&t&&F.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(this.type!==2)throw new Error("Only valid for lines");this._pushLine();const t=this.lines,i=t.length;if(i===0)return null;const e=[];for(let x=0;x<i;x++)e.push({line:t[x],start:this.starts[x]||0});return e}_isIn(t,i){return t>=this.xmin&&t<=this.xmax&&i>=this.ymin&&i<=this.ymax}_intersect(t,i){let e,x,l;if(i.x>=this.xmin&&i.x<=this.xmax)x=i.y<=this.ymin?this.ymin:this.ymax,l=(x-t.y)/(i.y-t.y),e=t.x+l*(i.x-t.x);else if(i.y>=this.ymin&&i.y<=this.ymax)e=i.x<=this.xmin?this.xmin:this.xmax,l=(e-t.x)/(i.x-t.x),x=t.y+l*(i.y-t.y);else{x=i.y<=this.ymin?this.ymin:this.ymax,e=i.x<=this.xmin?this.xmin:this.xmax;const r=(e-t.x)/(i.x-t.x),u=(x-t.y)/(i.y-t.y);r<u?(l=r,x=t.y+r*(i.y-t.y)):(l=u,e=t.x+u*(i.x-t.x))}return this._r=l,new L(e,x)}_pushLine(){this.line&&(this.type===1?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===2?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===3&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(t,i,e){this.type!==3?e&&(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.push(new L(t,i))):(e||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),i<this.ymin&&(i=this.ymin),i>this.ymax&&(i=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.push(new L(t,i)),this._is_h=!1,this._is_v=!1)}_lineTo(t,i,e){let x,l;if(this.type!==3)if(e){if(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(x=this.line[this.line.length-1],x.equals(t,i)))return;this.line.push(new L(t,i))}else this.line&&this.line.length>0&&this._pushLine();else if(e||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),i<this.ymin&&(i=this.ymin),i>this.ymax&&(i=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){x=this.line[this.line.length-1];const r=x.x===t,u=x.y===i;if(r&&u)return;this._is_h&&r||this._is_v&&u?(x.x=t,x.y=i,l=this.line[this.line.length-2],l.x===t&&l.y===i?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(l=this.line[this.line.length-2],this._is_h=l.x===t,this._is_v=l.y===i)):(this._is_h=l.x===t,this._is_v=l.y===i)):(this.line.push(new L(t,i)),this._is_h=r,this._is_v=u)}else this.line.push(new L(t,i))}}class Ct{setExtent(t){this._ratio=t===4096?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this.lines=[],this.line=null}moveTo(t,i){this.line&&this.lines.push(this.line),this.line=[];const e=this._ratio;this.line.push(new L(t*e,i*e))}lineTo(t,i){const e=this._ratio;this.line.push(new L(t*e,i*e))}close(){const t=this.line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this.line&&this.lines.push(this.line),this.lines.length===0?null:this.lines}}class F{static simplify(t,i,e){if(!e)return;const x=-i,l=t+i,r=-i,u=t+i,a=[],c=[],N=e.length;for(let m=0;m<N;++m){const p=e[m];if(!p||p.length<2)continue;let n,y=p[0];const f=p.length;for(let d=1;d<f;++d)n=p[d],y.x===n.x&&(y.x<=x&&(y.y>n.y?(a.push(m),a.push(d),a.push(0),a.push(-1)):(c.push(m),c.push(d),c.push(0),c.push(-1))),y.x>=l&&(y.y<n.y?(a.push(m),a.push(d),a.push(1),a.push(-1)):(c.push(m),c.push(d),c.push(1),c.push(-1)))),y.y===n.y&&(y.y<=r&&(y.x<n.x?(a.push(m),a.push(d),a.push(2),a.push(-1)):(c.push(m),c.push(d),c.push(2),c.push(-1))),y.y>=u&&(y.x>n.x?(a.push(m),a.push(d),a.push(3),a.push(-1)):(c.push(m),c.push(d),c.push(3),c.push(-1)))),y=n}if(a.length===0||c.length===0)return;F.fillParent(e,c,a),F.fillParent(e,a,c);const v=[];F.calcDeltas(v,c,a),F.calcDeltas(v,a,c),F.addDeltas(v,e)}static fillParent(t,i,e){const x=e.length,l=i.length;for(let r=0;r<l;r+=4){const u=i[r],a=i[r+1],c=i[r+2],N=t[u][a-1],v=t[u][a];let m=8092,p=-1;for(let n=0;n<x;n+=4){if(e[n+2]!==c)continue;const y=e[n],f=e[n+1],d=t[y][f-1],h=t[y][f];switch(c){case 0:case 1:if(ut(N.y,d.y,h.y)&&ut(v.y,d.y,h.y)){const s=Math.abs(h.y-d.y);s<m&&(m=s,p=n)}break;case 2:case 3:if(ut(N.x,d.x,h.x)&&ut(v.x,d.x,h.x)){const s=Math.abs(h.x-d.x);s<m&&(m=s,p=n)}}}i[r+3]=p}}static calcDeltas(t,i,e){const x=i.length;for(let l=0;l<x;l+=4){const r=[],u=F.calcDelta(l,i,e,r);t.push(i[l]),t.push(i[l+1]),t.push(i[l+2]),t.push(u)}}static calcDelta(t,i,e,x){const l=i[t+3];if(l===-1)return 0;const r=x.length;return r>1&&x[r-2]===l?0:(x.push(l),F.calcDelta(l,e,i,x)+1)}static addDeltas(t,i){const e=t.length;let x=0;for(let l=0;l<e;l+=4){const r=t[l+3];r>x&&(x=r)}for(let l=0;l<e;l+=4){const r=i[t[l]],u=t[l+1],a=x-t[l+3];switch(t[l+2]){case 0:r[u-1].x-=a,r[u].x-=a,u===1&&(r[r.length-1].x-=a),u===r.length-1&&(r[0].x-=a);break;case 1:r[u-1].x+=a,r[u].x+=a,u===1&&(r[r.length-1].x+=a),u===r.length-1&&(r[0].x+=a);break;case 2:r[u-1].y-=a,r[u].y-=a,u===1&&(r[r.length-1].y-=a),u===r.length-1&&(r[0].y-=a);break;case 3:r[u-1].y+=a,r[u].y+=a,u===1&&(r[r.length-1].y+=a),u===r.length-1&&(r[0].y+=a)}}}}export{Wt as a,At as b,Ct as e,jt as n,Bt as r,L as t};
