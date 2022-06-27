import{h0 as z,h1 as T,gz as Y,h2 as D,h3 as F,h4 as L,h5 as v,h6 as N,h7 as U,h8 as W,h9 as X,ha as Z,gs as k,gt as I,hb as B,gn as C,aU as G,ay as P,hc as A}from"./main.8eac6be0.js";function j(){return[1,0,0,0,1,0,0,0,1]}function H(n){return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]}function J(n,r,e,o,t,a,c,u,h){return[n,r,e,o,t,a,c,u,h]}function K(n,r){return new Float64Array(n,r,9)}Object.freeze({__proto__:null,create:j,clone:H,fromValues:J,createView:K});function p(){return[0,0,0,1]}function Q(n){return[n[0],n[1],n[2],n[3]]}function R(n,r,e,o){return[n,r,e,o]}function S(n,r){return new Float64Array(n,r,4)}const nn=p();Object.freeze({__proto__:null,create:p,clone:Q,fromValues:R,createView:S,IDENTITY:nn});function rn(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function x(n,r,e){e*=.5;const o=Math.sin(e);return n[0]=o*r[0],n[1]=o*r[1],n[2]=o*r[2],n[3]=Math.cos(e),n}function on(n,r){const e=2*Math.acos(r[3]),o=Math.sin(e/2);return o>z?(n[0]=r[0]/o,n[1]=r[1]/o,n[2]=r[2]/o):(n[0]=1,n[1]=0,n[2]=0),e}function w(n,r,e){const o=r[0],t=r[1],a=r[2],c=r[3],u=e[0],h=e[1],i=e[2],s=e[3];return n[0]=o*s+c*u+t*i-a*h,n[1]=t*s+c*h+a*u-o*i,n[2]=a*s+c*i+o*h-t*u,n[3]=c*s-o*u-t*h-a*i,n}function tn(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),h=Math.cos(e);return n[0]=o*h+c*u,n[1]=t*h+a*u,n[2]=a*h-t*u,n[3]=c*h-o*u,n}function en(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),h=Math.cos(e);return n[0]=o*h-a*u,n[1]=t*h+c*u,n[2]=a*h+o*u,n[3]=c*h-t*u,n}function an(n,r,e){e*=.5;const o=r[0],t=r[1],a=r[2],c=r[3],u=Math.sin(e),h=Math.cos(e);return n[0]=o*h+t*u,n[1]=t*h-o*u,n[2]=a*h+c*u,n[3]=c*h-a*u,n}function cn(n,r){const e=r[0],o=r[1],t=r[2];return n[0]=e,n[1]=o,n[2]=t,n[3]=Math.sqrt(Math.abs(1-e*e-o*o-t*t)),n}function m(n,r,e,o){const t=r[0],a=r[1],c=r[2],u=r[3];let h,i,s,f,l,$=e[0],_=e[1],q=e[2],g=e[3];return i=t*$+a*_+c*q+u*g,i<0&&(i=-i,$=-$,_=-_,q=-q,g=-g),1-i>z?(h=Math.acos(i),s=Math.sin(h),f=Math.sin((1-o)*h)/s,l=Math.sin(o*h)/s):(f=1-o,l=o),n[0]=f*t+l*$,n[1]=f*a+l*_,n[2]=f*c+l*q,n[3]=f*u+l*g,n}function un(n){const r=A(),e=A(),o=A(),t=Math.sqrt(1-r),a=Math.sqrt(r);return n[0]=t*Math.sin(2*Math.PI*e),n[1]=t*Math.cos(2*Math.PI*e),n[2]=a*Math.sin(2*Math.PI*o),n[3]=a*Math.cos(2*Math.PI*o),n}function hn(n,r){const e=r[0],o=r[1],t=r[2],a=r[3],c=e*e+o*o+t*t+a*a,u=c?1/c:0;return n[0]=-e*u,n[1]=-o*u,n[2]=-t*u,n[3]=a*u,n}function sn(n,r){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n[3]=r[3],n}function E(n,r){const e=r[0]+r[4]+r[8];let o;if(e>0)o=Math.sqrt(e+1),n[3]=.5*o,o=.5/o,n[0]=(r[5]-r[7])*o,n[1]=(r[6]-r[2])*o,n[2]=(r[1]-r[3])*o;else{let t=0;r[4]>r[0]&&(t=1),r[8]>r[3*t+t]&&(t=2);const a=(t+1)%3,c=(t+2)%3;o=Math.sqrt(r[3*t+t]-r[3*a+a]-r[3*c+c]+1),n[t]=.5*o,o=.5/o,n[3]=(r[3*a+c]-r[3*c+a])*o,n[a]=(r[3*a+t]+r[3*t+a])*o,n[c]=(r[3*c+t]+r[3*t+c])*o}return n}function Mn(n,r,e,o){const t=.5*Math.PI/180;r*=t,e*=t,o*=t;const a=Math.sin(r),c=Math.cos(r),u=Math.sin(e),h=Math.cos(e),i=Math.sin(o),s=Math.cos(o);return n[0]=a*h*s-c*u*i,n[1]=c*u*s+a*h*i,n[2]=c*h*i-a*u*s,n[3]=c*h*s+a*u*i,n}function fn(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const ln=T,$n=Y,_n=D,qn=w,gn=F,mn=L,pn=v,V=N,In=V,O=U,An=O,b=W,bn=X,dn=Z;function yn(n,r,e){const o=k(r,e);return o<-.999999?(I(M,zn,r),B(M)<1e-6&&I(M,Pn,r),C(M,M),x(n,M,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(I(M,r,e),n[0]=M[0],n[1]=M[1],n[2]=M[2],n[3]=1+o,b(n,n))}const M=G(),zn=P(1,0,0),Pn=P(0,1,0);function jn(n,r,e,o,t,a){return m(d,r,t,a),m(y,e,o,a),m(n,d,y,2*a*(1-a)),n}const d=p(),y=p();function xn(n,r,e,o){const t=wn;return t[0]=e[0],t[3]=e[1],t[6]=e[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],b(n,E(n,t))}const wn=j();Object.freeze({__proto__:null,identity:rn,setAxisAngle:x,getAxisAngle:on,multiply:w,rotateX:tn,rotateY:en,rotateZ:an,calculateW:cn,slerp:m,random:un,invert:hn,conjugate:sn,fromMat3:E,fromEuler:Mn,str:fn,copy:ln,set:$n,add:_n,mul:qn,scale:gn,dot:mn,lerp:pn,length:V,len:In,squaredLength:O,sqrLen:An,normalize:b,exactEquals:bn,equals:dn,rotationTo:yn,sqlerp:jn,setAxes:xn});export{Mn as C,x as I,bn as N,on as P,j as a,S as b,nn as c,p as e,Q as n,K as t,w as v,sn as w};
