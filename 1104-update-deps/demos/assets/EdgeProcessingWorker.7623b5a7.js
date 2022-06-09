import{n as wt}from"./deduplicate.c9a6b125.js";import{y as $t,u as vt,i as yt,c as At,l as It,p as xt,o as bt,m as Lt,T as Nt,h as St,a as Vt,b as Et,d as Ut,A as Ft,O as Dt,x as Wt,g as Bt,w as Mt,E as kt,L as zt,B as Ht,F as Pt,I as Tt,U as Ct,j as Ot,V as qt,M as jt,S as Gt,k as Jt,q as Rt,v as _t,z as Kt,C as Qt,D as Xt,G as Yt,H as Zt}from"./BufferView.6f29efb6.js";import{gl as tn,gm as ct,aT as x,cC as nn,gn as tt,go as en,gp as on,aU as P,gq as nt,gr as C,gs as lt,gt as rn,gu as sn,gv as et,gw as an}from"./main.92c7f41d.js";import{A as R}from"./InterleavedLayout.34623f6a.js";import"./types.92ea621b.js";function ot(t,n,e){const s=n/3,r=new Uint32Array(e+1),a=new Uint32Array(e+1),d=(o,i)=>{o<i?r[o+1]++:a[i+1]++};for(let o=0;o<s;o++){const i=t[3*o],f=t[3*o+1],g=t[3*o+2];d(i,f),d(f,g),d(g,i)}let c=0,p=0;for(let o=0;o<e;o++){const i=r[o+1],f=a[o+1];r[o+1]=c,a[o+1]=p,c+=i,p+=f}const l=new Uint32Array(6*s),u=r[e],h=(o,i,f)=>{if(o<i){const g=r[o+1]++;l[2*g]=i,l[2*g+1]=f}else{const g=a[i+1]++;l[2*u+2*g]=o,l[2*u+2*g+1]=f}};for(let o=0;o<s;o++){const i=t[3*o],f=t[3*o+1],g=t[3*o+2];h(i,f,o),h(f,g,o),h(g,i,o)}const w=(o,i)=>{const f=2*o,g=i-o;for(let v=1;v<g;v++){const I=l[f+2*v],N=l[f+2*v+1];let y=v-1;for(;y>=0&&l[f+2*y]>I;y--)l[f+2*y+2]=l[f+2*y],l[f+2*y+3]=l[f+2*y+1];l[f+2*y+2]=I,l[f+2*y+3]=N}};for(let o=0;o<e;o++)w(r[o],r[o+1]),w(u+a[o],u+a[o+1]);const m=new Int32Array(3*s),b=(o,i)=>o===t[3*i]?0:o===t[3*i+1]?1:o===t[3*i+2]?2:-1,$=(o,i)=>{const f=b(o,i);m[3*i+f]=-1},L=(o,i,f,g)=>{const v=b(o,i);m[3*i+v]=g;const I=b(f,g);m[3*g+I]=i};for(let o=0;o<e;o++){let i=r[o];const f=r[o+1];let g=a[o];const v=a[o+1];for(;i<f&&g<v;){const I=l[2*i],N=l[2*u+2*g];I===N?(L(o,l[2*i+1],N,l[2*u+2*g+1]),i++,g++):I<N?($(o,l[2*i+1]),i++):($(N,l[2*u+2*g+1]),g++)}for(;i<f;)$(o,l[2*i+1]),i++;for(;g<v;)$(l[2*u+2*g],l[2*u+2*g+1]),g++}return m}function rt(t,n){return n.push(t.buffer),{buffer:t.buffer,layout:cn(t.layout)}}function cn(t){const n=new Array;return t.fields.forEach((e,s)=>{const r={...e,constructor:ut(e.constructor)};n.push([s,r])}),{stride:t.stride,fields:n,fieldNames:t.fieldNames}}const ln=[$t,vt,yt,At,It,xt,bt,Lt,Nt,St,Vt,Et,Ut,Ft,Dt,Wt,Bt,Mt,kt,zt,Ht,Pt,Tt,Ct,Ot,qt,jt,Gt,Jt,Rt,_t,Kt,Qt,Xt,Yt,Zt];function ut(t){return`${t.ElementType}_${t.ElementCount}`}const un=new Map;ln.forEach(t=>un.set(ut(t),t));function _(t,n=0){const e=t.stride;return t.fieldNames.filter(s=>{const r=t.fields.get(s).optional;return!(r&&r.glPadding)}).map(s=>{const r=t.fields.get(s),a=r.constructor.ElementCount,d=fn(r.constructor.ElementType),c=r.offset,p=!(!r.optional||!r.optional.glNormalized);return{name:s,stride:e,count:a,type:d,offset:c,normalized:p,divisor:n}})}function fn(t){const n=gn[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}const gn={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},ft=R().vec3f("position").u16("componentIndex").u16("u16padding"),dn=R().vec2u8("sideness");_(dn);const gt=R().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),O=gt.clone().vec3f("normal"),q=gt.clone().vec3f("normalA").vec3f("normalB");class dt{updateSettings(n){this.settings=n,this.edgeHashFunction=n.reducedPrecision?mn:pn}write(n,e,s){const r=this.edgeHashFunction(s);k.seed=r;const a=k.getIntRange(0,255),d=k.getIntRange(0,this.settings.variants-1),c=.7,p=k.getFloat(),l=255*(.5*hn(-(1-Math.min(p/c,1))+Math.max(0,p-c)/(1-c),1.2)+.5);n.position0.setVec(e,s.position0),n.position1.setVec(e,s.position1),n.componentIndex.set(e,s.componentIndex),n.variantOffset.set(e,a),n.variantStroke.set(e,d),n.variantExtension.set(e,l)}trim(n,e){return n.slice(0,e)}}const K=new Float32Array(6),z=new Uint32Array(K.buffer),S=new Uint32Array(1);function pn(t){const n=K;n[0]=t.position0[0],n[1]=t.position0[1],n[2]=t.position0[2],n[3]=t.position1[0],n[4]=t.position1[1],n[5]=t.position1[2],S[0]=5381;for(let e=0;e<z.length;e++)S[0]=31*S[0]+z[e];return S[0]}function mn(t){const n=K;n[0]=F(t.position0[0]),n[1]=F(t.position0[1]),n[2]=F(t.position0[2]),n[3]=F(t.position1[0]),n[4]=F(t.position1[1]),n[5]=F(t.position1[2]),S[0]=5381;for(let e=0;e<z.length;e++)S[0]=31*S[0]+z[e];return S[0]}const st=1e4;function F(t){return Math.round(t*st)/st}function hn(t,n){const e=t<0?-1:1;return Math.abs(t)**n*e}class j{constructor(){this.commonWriter=new dt}updateSettings(n){this.commonWriter.updateSettings(n)}allocate(n){return O.createBuffer(n)}write(n,e,s){this.commonWriter.write(n,e,s),tn(M,s.faceNormal0,s.faceNormal1),ct(M,M),n.normal.setVec(e,M)}trim(n,e){return this.commonWriter.trim(n,e)}}j.Layout=O,j.glLayout=_(O,1);class G{constructor(){this.commonWriter=new dt}updateSettings(n){this.commonWriter.updateSettings(n)}allocate(n){return q.createBuffer(n)}write(n,e,s){this.commonWriter.write(n,e,s),n.normalA.setVec(e,s.faceNormal0),n.normalB.setVec(e,s.faceNormal1)}trim(n,e){return this.commonWriter.trim(n,e)}}G.Layout=q,G.glLayout=_(q,1);const M=x(),k=new nn,V=-1;function wn(t,n,e,s=xn){const r=t.vertices.position,a=t.vertices.componentIndex,d=tt(s.anglePlanar),c=tt(s.angleSignificantEdge),p=Math.cos(c),l=Math.cos(d),u=J.edge,h=u.position0,w=u.position1,m=u.faceNormal0,b=u.faceNormal1,$=In(t),L=An(t),o=L.length/4,i=n.allocate(o);let f=0;const g=o,v=e.allocate(g);let I=0,N=0,y=0;const Q=en(0,o),W=new Float32Array(o);on(W,(E,A,D)=>{r.getVec(L[4*A+0],h),r.getVec(L[4*A+1],w),D[A]=an(h,w)}),Q.sort((E,A)=>W[A]-W[E]);const X=new Array,Y=new Array;for(let E=0;E<o;E++){const A=Q[E],D=W[A],H=L[4*A+0],ht=L[4*A+1],U=L[4*A+2],B=L[4*A+3],Z=B===V;if(r.getVec(H,h),r.getVec(ht,w),Z)P(m,$[3*U+0],$[3*U+1],$[3*U+2]),nt(b,m),u.componentIndex=a.get(H),u.cosAngle=C(m,b);else{if(P(m,$[3*U+0],$[3*U+1],$[3*U+2]),P(b,$[3*B+0],$[3*B+1],$[3*B+2]),u.componentIndex=a.get(H),u.cosAngle=C(m,b),vn(u,l))continue;u.cosAngle<-.9999&&nt(b,m)}N+=D,y++,Z||$n(u,p)?(n.write(i,f++,u),X.push(D)):yn(u,d)&&(e.write(v,I++,u),Y.push(D))}const pt=new Float32Array(X.reverse()),mt=new Float32Array(Y.reverse());return{regular:{instancesData:n.trim(i,f),lodInfo:{lengths:pt}},silhouette:{instancesData:e.trim(v,I),lodInfo:{lengths:mt}},averageEdgeLength:N/y}}function $n(t,n){return t.cosAngle<n}function vn(t,n){return t.cosAngle>n}function yn(t,n){const e=rn(t.cosAngle),s=J.fwd,r=J.ortho;return sn(s,t.position1,t.position0),e*(C(lt(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>n}function An(t){const n=t.faces.length/3,e=t.faces,s=t.neighbors;let r=0;for(let c=0;c<n;c++){const p=s[3*c+0],l=s[3*c+1],u=s[3*c+2],h=e[3*c+0],w=e[3*c+1],m=e[3*c+2];r+=p===V||h<w?1:0,r+=l===V||w<m?1:0,r+=u===V||m<h?1:0}const a=new Int32Array(4*r);let d=0;for(let c=0;c<n;c++){const p=s[3*c+0],l=s[3*c+1],u=s[3*c+2],h=e[3*c+0],w=e[3*c+1],m=e[3*c+2];(p===V||h<w)&&(a[d++]=h,a[d++]=w,a[d++]=c,a[d++]=p),(l===V||w<m)&&(a[d++]=w,a[d++]=m,a[d++]=c,a[d++]=l),(u===V||m<h)&&(a[d++]=m,a[d++]=h,a[d++]=c,a[d++]=u)}return a}function In(t){const n=t.faces.length/3,e=t.vertices.position,s=t.faces,r=T.v0,a=T.v1,d=T.v2,c=new Float32Array(3*n);for(let p=0;p<n;p++){const l=s[3*p+0],u=s[3*p+1],h=s[3*p+2];e.getVec(l,r),e.getVec(u,a),e.getVec(h,d),et(a,a,r),et(d,d,r),lt(r,a,d),ct(r,r),c[3*p+0]=r[0],c[3*p+1]=r[1],c[3*p+2]=r[2]}return c}const J={edge:{position0:x(),position1:x(),faceNormal0:x(),faceNormal1:x(),componentIndex:0,cosAngle:0},ortho:x(),fwd:x()},T={v0:x(),v1:x(),v2:x()},xn={anglePlanar:4,angleSignificantEdge:35};async function Wn(t){const n=Ln(t),e=bn(n),s=[n.data.buffer];return{result:Nn(e,s),transferList:s}}function bn(t){const n=Sn(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return it.updateSettings(t.writerSettings),at.updateSettings(t.writerSettings),wn(n,it,at)}function Ln(t){return{data:ft.createView(t.dataBuffer),indices:t.indicesType==="Uint32Array"?new Uint32Array(t.indicesBuffer):t.indicesType==="Uint16Array"?new Uint16Array(t.indicesBuffer):void 0,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function Nn(t,n){return n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:rt(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:rt(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}function Sn(t,n,e,s){if(n)return{faces:e,facesLength:s,neighbors:ot(e,s,t.count),vertices:t};const r=wt(t.buffer,t.stride/4,{originalIndices:e,originalIndicesLength:s}),a=ot(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:a,vertices:ft.createView(r.buffer)}}const it=new j,at=new G;export{bn as work,Wn as wrappedWork};
