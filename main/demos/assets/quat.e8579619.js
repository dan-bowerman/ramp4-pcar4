import{gZ as j,g_ as T,gw as Y,g$ as v,h0 as D,h1 as F,h2 as L,h3 as Z,h4 as k,h5 as N,h6 as R,h7 as W,gp as X,gq as I,h8 as B,gk as C,aR as G,av as w,h9 as A}from"./main.d8c8794a.js";function x(){return[1,0,0,0,1,0,0,0,1]}function H(n){return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]}function J(n,r,e,o,t,a,c,u,i){return[n,r,e,o,t,a,c,u,i]}function K(n,r){return new Float64Array(n,r,9)}Object.freeze({__proto__:null,create:x,clone:H,fromValues:J,createView:K});function m(){return[0,0,0,1]}function Q(n){return[n[0],n[1],n[2],n[3]]}function S(n,r,e,o){return[n,r,e,o]}function U(n,r){return new Float64Array(n,r,4)}const nn=m();Object.freeze({__proto__:null,create:m,clone:Q,fromValues:S,createView:U,IDENTITY:nn});function rn(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function y(n,r,e){e*=.5;const o=Math.sin(e);return n[0]=o*r[0],n[1]=o*r[1],n[2]=o*r[2],n[3]=Math.cos(e),n}function on(n,r){const e=2*Math.acos(r[3]),o=Math.sin(e/2);return o>j?(n[0]=r[0]/o,n[1]=r[1]/o,n[2]=r[2]/o):(n[0]=1,n[1]=0,n[2]=0),e}function z(n,r,e){const o=r[0],t=r[1],a=r[2],c=r[3],u=e[0],i=e[1],h=e[2],s=e[3];return n[0]=o*s+c*u+t*h-a*i,n[1]=t*s+c*i+a*u-o*h,n[2]=a*s+c*h+o*i-t*u,n[3]=c*s-o*u-t*i-a*h,n}function tn(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+c*u,n[1]=t*i+a*u,n[2]=a*i-t*u,n[3]=c*i-o*u,n}function en(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i-a*u,n[1]=t*i+c*u,n[2]=a*i+o*u,n[3]=c*i-t*u,n}function an(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+t*u,n[1]=t*i-o*u,n[2]=a*i+c*u,n[3]=c*i-a*u,n}function cn(n,r){const e=r[0],o=r[1],t=r[2];return n[0]=e,n[1]=o,n[2]=t,n[3]=Math.sqrt(Math.abs(1-e*e-o*o-t*t)),n}function p(n,r,e,o){const t=r[0],a=r[1],c=r[2],u=r[3];let i,h,s,f,l,$=e[0],_=e[1],g=e[2],q=e[3];return h=t*$+a*_+c*g+u*q,h<0&&(h=-h,$=-$,_=-_,g=-g,q=-q),1-h>j?(i=Math.acos(h),s=Math.sin(i),f=Math.sin((1-o)*i)/s,l=Math.sin(o*i)/s):(f=1-o,l=o),n[0]=f*t+l*$,n[1]=f*a+l*_,n[2]=f*c+l*g,n[3]=f*u+l*q,n}function un(n){const r=A(),e=A(),o=A(),t=Math.sqrt(1-r),a=Math.sqrt(r);return n[0]=t*Math.sin(2*Math.PI*e),n[1]=t*Math.cos(2*Math.PI*e),n[2]=a*Math.sin(2*Math.PI*o),n[3]=a*Math.cos(2*Math.PI*o),n}function hn(n,r){const e=r[0],o=r[1],t=r[2],a=r[3],c=e*e+o*o+t*t+a*a,u=c?1/c:0;return n[0]=-e*u,n[1]=-o*u,n[2]=-t*u,n[3]=a*u,n}function sn(n,r){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n[3]=r[3],n}function E(n,r){const e=r[0]+r[4]+r[8];let o;if(e>0)o=Math.sqrt(e+1),n[3]=.5*o,o=.5/o,n[0]=(r[5]-r[7])*o,n[1]=(r[6]-r[2])*o,n[2]=(r[1]-r[3])*o;else{let t=0;r[4]>r[0]&&(t=1),r[8]>r[3*t+t]&&(t=2);const a=(t+1)%3,c=(t+2)%3;o=Math.sqrt(r[3*t+t]-r[3*a+a]-r[3*c+c]+1),n[t]=.5*o,o=.5/o,n[3]=(r[3*a+c]-r[3*c+a])*o,n[a]=(r[3*a+t]+r[3*t+a])*o,n[c]=(r[3*c+t]+r[3*t+c])*o}return n}function Mn(n,r,e,o){const t=.5*Math.PI/180;r*=t,e*=t,o*=t;const a=Math.sin(r),c=Math.cos(r),u=Math.sin(e),i=Math.cos(e),h=Math.sin(o),s=Math.cos(o);return n[0]=a*i*s-c*u*h,n[1]=c*u*s+a*i*h,n[2]=c*i*h-a*u*s,n[3]=c*i*s+a*u*h,n}function fn(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const ln=T,$n=Y,_n=v,gn=z,qn=D,pn=F,mn=L,V=Z,In=V,O=k,An=O,d=N,dn=R,Pn=W;function bn(n,r,e){const o=X(r,e);return o<-.999999?(I(M,jn,r),B(M)<1e-6&&I(M,wn,r),C(M,M),y(n,M,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(I(M,r,e),n[0]=M[0],n[1]=M[1],n[2]=M[2],n[3]=1+o,d(n,n))}const M=G(),jn=w(1,0,0),wn=w(0,1,0);function xn(n,r,e,o,t,a){return p(P,r,t,a),p(b,e,o,a),p(n,P,b,2*a*(1-a)),n}const P=m(),b=m();function yn(n,r,e,o){const t=zn;return t[0]=e[0],t[3]=e[1],t[6]=e[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],d(n,E(n,t))}const zn=x();Object.freeze({__proto__:null,identity:rn,setAxisAngle:y,getAxisAngle:on,multiply:z,rotateX:tn,rotateY:en,rotateZ:an,calculateW:cn,slerp:p,random:un,invert:hn,conjugate:sn,fromMat3:E,fromEuler:Mn,str:fn,copy:ln,set:$n,add:_n,mul:gn,scale:qn,dot:pn,lerp:mn,length:V,len:In,squaredLength:O,sqrLen:An,normalize:d,exactEquals:dn,equals:Pn,rotationTo:bn,sqlerp:xn,setAxes:yn});export{Mn as C,y as I,dn as N,on as P,x as a,U as b,nn as c,m as e,Q as n,K as t,z as v,sn as w};
