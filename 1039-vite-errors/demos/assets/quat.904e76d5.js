import{g$ as P,h0 as T,gy as Y,h1 as D,h2 as F,h3 as L,h4 as v,h5 as N,h6 as U,h7 as W,h8 as X,h9 as Z,gr as k,gs as I,ha as B,gm as C,aU as G,ay as j,hb as y}from"./main.eb3bf376.js";function x(){return[1,0,0,0,1,0,0,0,1]}function H(n){return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]}function J(n,r,e,o,t,a,c,u,i){return[n,r,e,o,t,a,c,u,i]}function K(n,r){return new Float64Array(n,r,9)}Object.freeze({__proto__:null,create:x,clone:H,fromValues:J,createView:K});function p(){return[0,0,0,1]}function Q(n){return[n[0],n[1],n[2],n[3]]}function R(n,r,e,o){return[n,r,e,o]}function S(n,r){return new Float64Array(n,r,4)}const nn=p();Object.freeze({__proto__:null,create:p,clone:Q,fromValues:R,createView:S,IDENTITY:nn});function rn(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function z(n,r,e){e*=.5;const o=Math.sin(e);return n[0]=o*r[0],n[1]=o*r[1],n[2]=o*r[2],n[3]=Math.cos(e),n}function on(n,r){const e=2*Math.acos(r[3]),o=Math.sin(e/2);return o>P?(n[0]=r[0]/o,n[1]=r[1]/o,n[2]=r[2]/o):(n[0]=1,n[1]=0,n[2]=0),e}function w(n,r,e){const o=r[0],t=r[1],a=r[2],c=r[3],u=e[0],i=e[1],h=e[2],s=e[3];return n[0]=o*s+c*u+t*h-a*i,n[1]=t*s+c*i+a*u-o*h,n[2]=a*s+c*h+o*i-t*u,n[3]=c*s-o*u-t*i-a*h,n}function tn(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+c*u,n[1]=t*i+a*u,n[2]=a*i-t*u,n[3]=c*i-o*u,n}function en(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i-a*u,n[1]=t*i+c*u,n[2]=a*i+o*u,n[3]=c*i-t*u,n}function an(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+t*u,n[1]=t*i-o*u,n[2]=a*i+c*u,n[3]=c*i-a*u,n}function cn(n,r){const e=r[0],o=r[1],t=r[2];return n[0]=e,n[1]=o,n[2]=t,n[3]=Math.sqrt(Math.abs(1-e*e-o*o-t*t)),n}function m(n,r,e,o){const t=r[0],a=r[1],c=r[2],u=r[3];let i,h,s,f,l,$=e[0],_=e[1],q=e[2],g=e[3];return h=t*$+a*_+c*q+u*g,h<0&&(h=-h,$=-$,_=-_,q=-q,g=-g),1-h>P?(i=Math.acos(h),s=Math.sin(i),f=Math.sin((1-o)*i)/s,l=Math.sin(o*i)/s):(f=1-o,l=o),n[0]=f*t+l*$,n[1]=f*a+l*_,n[2]=f*c+l*q,n[3]=f*u+l*g,n}function un(n){const r=y(),e=y(),o=y(),t=Math.sqrt(1-r),a=Math.sqrt(r);return n[0]=t*Math.sin(2*Math.PI*e),n[1]=t*Math.cos(2*Math.PI*e),n[2]=a*Math.sin(2*Math.PI*o),n[3]=a*Math.cos(2*Math.PI*o),n}function hn(n,r){const e=r[0],o=r[1],t=r[2],a=r[3],c=e*e+o*o+t*t+a*a,u=c?1/c:0;return n[0]=-e*u,n[1]=-o*u,n[2]=-t*u,n[3]=a*u,n}function sn(n,r){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n[3]=r[3],n}function E(n,r){const e=r[0]+r[4]+r[8];let o;if(e>0)o=Math.sqrt(e+1),n[3]=.5*o,o=.5/o,n[0]=(r[5]-r[7])*o,n[1]=(r[6]-r[2])*o,n[2]=(r[1]-r[3])*o;else{let t=0;r[4]>r[0]&&(t=1),r[8]>r[3*t+t]&&(t=2);const a=(t+1)%3,c=(t+2)%3;o=Math.sqrt(r[3*t+t]-r[3*a+a]-r[3*c+c]+1),n[t]=.5*o,o=.5/o,n[3]=(r[3*a+c]-r[3*c+a])*o,n[a]=(r[3*a+t]+r[3*t+a])*o,n[c]=(r[3*c+t]+r[3*t+c])*o}return n}function Mn(n,r,e,o){const t=.5*Math.PI/180;r*=t,e*=t,o*=t;const a=Math.sin(r),c=Math.cos(r),u=Math.sin(e),i=Math.cos(e),h=Math.sin(o),s=Math.cos(o);return n[0]=a*i*s-c*u*h,n[1]=c*u*s+a*i*h,n[2]=c*i*h-a*u*s,n[3]=c*i*s+a*u*h,n}function fn(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const ln=T,$n=Y,_n=D,qn=w,gn=F,mn=L,pn=v,V=N,In=V,O=U,yn=O,A=W,An=X,bn=Z;function dn(n,r,e){const o=k(r,e);return o<-.999999?(I(M,Pn,r),B(M)<1e-6&&I(M,jn,r),C(M,M),z(n,M,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(I(M,r,e),n[0]=M[0],n[1]=M[1],n[2]=M[2],n[3]=1+o,A(n,n))}const M=G(),Pn=j(1,0,0),jn=j(0,1,0);function xn(n,r,e,o,t,a){return m(b,r,t,a),m(d,e,o,a),m(n,b,d,2*a*(1-a)),n}const b=p(),d=p();function zn(n,r,e,o){const t=wn;return t[0]=e[0],t[3]=e[1],t[6]=e[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],A(n,E(n,t))}const wn=x();Object.freeze({__proto__:null,identity:rn,setAxisAngle:z,getAxisAngle:on,multiply:w,rotateX:tn,rotateY:en,rotateZ:an,calculateW:cn,slerp:m,random:un,invert:hn,conjugate:sn,fromMat3:E,fromEuler:Mn,str:fn,copy:ln,set:$n,add:_n,mul:qn,scale:gn,dot:mn,lerp:pn,length:V,len:In,squaredLength:O,sqrLen:yn,normalize:A,exactEquals:An,equals:bn,rotationTo:dn,sqlerp:xn,setAxes:zn});export{Mn as C,z as I,An as N,on as P,x as a,S as b,nn as c,p as e,Q as n,K as t,w as v,sn as w};
