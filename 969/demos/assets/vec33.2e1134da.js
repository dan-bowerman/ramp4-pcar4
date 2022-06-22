import{aj as z}from"./main.69b94f24.js";function g(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function w(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function O(t,n,e,i,u,c,d,s,o,f,r,a,l,p,y,m){return[t,n,e,i,u,c,d,s,o,f,r,a,l,p,y,m]}function T(t,n){return new Float64Array(t,n,16)}const V=g();Object.freeze({__proto__:null,create:g,clone:w,fromValues:O,createView:T,IDENTITY:V});const j=z.getLogger("esri.views.3d.support.buffer.math");function q(t,n,e){if(t.count!==n.count)return void j.error("source and destination buffers need to have the same number of elements");const i=t.count,u=e[0],c=e[1],d=e[2],s=e[4],o=e[5],f=e[6],r=e[8],a=e[9],l=e[10],p=e[12],y=e[13],m=e[14],v=t.typedBuffer,b=t.typedBufferStride,S=n.typedBuffer,I=n.typedBufferStride;for(let B=0;B<i;B++){const h=B*b,_=B*I,M=S[_],x=S[_+1],$=S[_+2];v[h]=u*M+s*x+r*$+p,v[h+1]=c*M+o*x+a*$+y,v[h+2]=d*M+f*x+l*$+m}}function A(t,n,e){if(t.count!==n.count)return void j.error("source and destination buffers need to have the same number of elements");const i=t.count,u=e[0],c=e[1],d=e[2],s=e[3],o=e[4],f=e[5],r=e[6],a=e[7],l=e[8],p=t.typedBuffer,y=t.typedBufferStride,m=n.typedBuffer,v=n.typedBufferStride;for(let b=0;b<i;b++){const S=b*y,I=b*v,B=m[I],h=m[I+1],_=m[I+2];p[S]=u*B+s*h+r*_,p[S+1]=c*B+o*h+a*_,p[S+2]=d*B+f*h+l*_}}function D(t,n,e){const i=Math.min(t.count,n.count),u=t.typedBuffer,c=t.typedBufferStride,d=n.typedBuffer,s=n.typedBufferStride;for(let o=0;o<i;o++){const f=o*c,r=o*s;u[f]=e*d[r],u[f+1]=e*d[r+1],u[f+2]=e*d[r+2]}}function E(t,n){const e=Math.min(t.count,n.count),i=t.typedBuffer,u=t.typedBufferStride,c=n.typedBuffer,d=n.typedBufferStride;for(let s=0;s<e;s++){const o=s*u,f=s*d,r=c[f],a=c[f+1],l=c[f+2],p=Math.sqrt(r*r+a*a+l*l);if(p>0){const y=1/p;i[o]=y*r,i[o+1]=y*a,i[o+2]=y*l}}}function F(t,n,e){const i=Math.min(t.count,n.count),u=t.typedBuffer,c=t.typedBufferStride,d=n.typedBuffer,s=n.typedBufferStride;for(let o=0;o<i;o++){const f=o*c,r=o*s;u[f]=d[r]>>e,u[f+1]=d[r+1]>>e,u[f+2]=d[r+2]>>e}}Object.freeze({__proto__:null,transformMat4:q,transformMat3:A,scale:D,normalize:E,shiftRight:F});function L(t,n,e){const i=t.typedBuffer,u=t.typedBufferStride,c=n.typedBuffer,d=n.typedBufferStride,s=e?e.count:n.count;let o=(e&&e.dstIndex?e.dstIndex:0)*u,f=(e&&e.srcIndex?e.srcIndex:0)*d;for(let r=0;r<s;++r)i[o]=c[f],i[o+1]=c[f+1],i[o+2]=c[f+2],o+=u,f+=d}function N(t,n,e,i,u){var c,d;const s=t.typedBuffer,o=t.typedBufferStride,f=(c=u?.count)!=null?c:t.count;let r=((d=u?.dstIndex)!=null?d:0)*o;for(let a=0;a<f;++a)s[r]=n,s[r+1]=e,s[r+2]=i,r+=o}Object.freeze({__proto__:null,copy:L,fill:N});export{q as a,V as b,L as c,j as d,g as e,A as f,N as g,F as h,w as n,E as o,D as r,T as t};
