import{bW as U,aj as v,s as L}from"./main.56314a08.js";import"./Texture.54772fdb.js";const E=new Float32Array(1);new Uint32Array(E.buffer);function ot(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function ct(t,n){return 65535&t|n<<16}function ut(t,n,e,r){return 255&t|(255&n)<<8|(255&e)<<16|r<<24}var s,m,y,h,O,p,_;(function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"})(s||(s={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(m||(m={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(y||(y={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(h||(h={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(O||(O={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(p||(p={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(_||(_={}));class g{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(n,e,r,a,i,u,A,c,f){this.color=n,this.haloColor=e,this.haloSize=r,this.size=a,this.angle=i,this.offsetX=u,this.offsetY=A,this.hAnchor=c,this.vAnchor=f}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}g.pool=new U(g);const I=v.getLogger("esri.views.2d.engine.webgl.Utils"),o="geometry",D=[{name:o,strideInBytes:36,divisor:0}],P=[{name:o,strideInBytes:32,divisor:0}],F=[{name:o,strideInBytes:20,divisor:0}],$=[{name:o,strideInBytes:12,divisor:0}],B=[{name:o,strideInBytes:40,divisor:0}],b=[{name:o,strideInBytes:36,divisor:0}],z=[{name:o,strideInBytes:36,divisor:0}];function l(t){const n={};for(const e of t)n[e.name]=e.strideInBytes;return n}const G=l(D),H=l(P),x=l(F),X=l($),Y=l(B),Z=l(b),V=l(z);function lt(t,{fill:n}){switch(t){case s.MARKER:return G;case s.FILL:return n==="dot-density"?X:n==="simple"?x:H;case s.LINE:return Y;case s.TEXT:return Z;case s.LABEL:return V}}const k=[o],q=[o],K=[o],W=[o],j=[o];function J(t){switch(t){case s.MARKER:return k;case s.FILL:return q;case s.LINE:return K;case s.TEXT:return W;case s.LABEL:return j}}function Q(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function ft(t,n){switch(n%4){case 0:case 2:return new Uint32Array(Math.floor(t*n/4));case 1:case 3:return new Uint8Array(t*n)}}function ht(t,n){switch(n%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function It(t){return t!=null}function Tt(t){return typeof t=="number"}function Lt(t){switch(t){case"butt":return 0;case"round":return 1;case"square":return 2;default:return I.error(new L("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function At(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return I.error(new L("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function dt(t){switch(t){case"opacity":return h.OPACITY;case"color":return h.COLOR;case"rotation":return h.ROTATION;case"size":return h.SIZE;default:return I.error(`Cannot interpret unknown vv: ${t}`),null}}function St(t,n,e,r,a,i,u){for(const c in i){const f=i[c].stride,d=Q(f),C=i[c].data,w=e[c].data,M=f*a.vertexCount/d,N=f*t/d,R=f*a.vertexFrom/d;for(let T=0;T<M;++T)w[T+N]=C[T+R]}const A=a.indexCount;for(let c=0;c<A;++c)r[c+n]=u[c+a.indexFrom]-a.vertexFrom+t}const mt={[o]:35044};function yt(t,n){const e=[];for(let r=0;r<5;++r){const a=J(r),i={};for(const u of a)i[u]={data:n(r,u)};e.push({data:t(r),buffers:i})}return e}function tt(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function Ot(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void I.error(new L("webgl-utils",`Unable to handle type ${t}`))}}function pt(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void I.error(new L("webgl-utils",`Unable to handle type ${t}`))}}function nt(t){const n={};for(const e in t){const r=t[e];let a=0;n[e]=r.map(i=>{const u={...i,normalized:i.normalized||!1,divisor:i.divisor||0,offset:a,stride:0};return a+=i.count*tt(i.type),u}),n[e].forEach(i=>i.stride=a)}return n}const et=t=>{const n=new Map;for(const e in t)for(const r of t[e])n.set(r.name,r.location);return n},rt=t=>{const n={};for(const e in t){const r=t[e];n[e]=r.length?r[0].stride:0}return n},S=new Map,_t=(t,n)=>{if(!S.has(t)){const e=nt(n),r={strides:rt(e),bufferLayouts:e,attributes:et(n)};S.set(t,r)}return S.get(t)};function gt(t){t(s.FILL),t(s.LINE),t(s.MARKER),t(s.TEXT),t(s.LABEL)}const Ct=t=>"path"in t&&st(t.path),wt=t=>"url"in t&&t.url||"imageData"in t&&t.imageData,Mt=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,Nt=t=>"url"in t&&t.url&&t.url.includes(".gif")||"contentType"in t&&t.contentType==="image/gif"||"imageData"in t&&t.imageData.includes("data:image/gif"),Rt=t=>"url"in t&&t.url&&t.url.includes(".png")||"contentType"in t&&t.contentType==="image/png"||"imageData"in t&&t.imageData.includes("data:image/png"),Ut=t=>t.type&&t.type.toLowerCase().indexOf("3d")!==-1;function vt(t){switch(t.type){case"line":{const n=t;return n.cim.type==="CIMSolidStroke"&&!n.dashTemplate}case"fill":return t.cim.type==="CIMSolidFill";case"esriSFS":return t.style==="esriSFSSolid"||t.style==="esriSFSNull";case"esriSLS":return t.style==="esriSLSSolid"||t.style==="esriSLSNull";default:return!1}}const Et=t=>t.includes("data:image/svg+xml");function Dt(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function Pt(t){const n="maxVVSize"in t&&t.maxVVSize,e="width"in t&&t.width||"size"in t&&t.size||0;return n||e}function Ft(t){const n=[];for(let e=0;e<t.length;e++)n.push(t.charCodeAt(e));return n}const st=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4));export{ht as $,O as A,s as E,Ot as H,y as I,ot as M,_ as O,Tt as P,pt as Q,ft as R,At as V,St as X,mt as Z,yt as _,Mt as a,It as b,Nt as c,Et as d,p as e,vt as f,gt as i,Q as j,Lt as k,Ut as l,Dt as m,_t as n,Ct as o,Pt as p,dt as q,wt as s,Rt as u,ct as w,ut as x,Ft as y,lt as z};
