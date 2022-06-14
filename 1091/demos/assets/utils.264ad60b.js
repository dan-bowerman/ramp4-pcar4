import{fO as S}from"./main.748a25d3.js";function v(n,l){return Number(n.toFixed(l))}function D(n){const{normalizationTotal:l}=n;return{classBreaks:I(n),normalizationTotal:l}}function I(n){const l=n.definition,{classificationMethod:t,breakCount:e,normalizationType:u,definedInterval:r}=l,i=[];let o=n.values;if(o.length===0)return[];o=o.sort((s,f)=>s-f);const d=o[0],p=o[o.length-1];if(t==="equal-interval")if(o.length>=e){const s=(p-d)/e;let f=d;for(let c=1;c<e;c++){const a=v(d+c*s,6);i.push({minValue:f,maxValue:a,label:b(f,a,u)}),f=a}i.push({minValue:f,maxValue:p,label:b(f,p,u)})}else o.forEach(s=>{i.push({minValue:s,maxValue:s,label:b(s,s,u)})});else if(t==="natural-breaks"){const s=N(o),f=n.valueFrequency||s.valueFrequency,c=k(s.uniqueValues,f,e);let a=d;for(let m=1;m<e;m++)if(s.uniqueValues.length>m){const h=v(s.uniqueValues[c[m]],6);i.push({minValue:a,maxValue:h,label:b(a,h,u)}),a=h}i.push({minValue:a,maxValue:p,label:b(a,p,u)})}else if(t==="quantile")if(o.length>=e&&d!==p){let s=d,f=Math.ceil(o.length/e),c=0;for(let a=1;a<e;a++){let m=f+c-1;m>o.length&&(m=o.length-1),m<0&&(m=0),i.push({minValue:s,maxValue:o[m],label:b(s,o[m],u)}),s=o[m],c+=f,f=Math.ceil((o.length-c)/(e-a))}i.push({minValue:s,maxValue:p,label:b(s,p,u)})}else{let s=-1;for(let f=0;f<o.length;f++){const c=o[f];c!==s&&(s=c,i.push({minValue:s,maxValue:c,label:b(s,c,u)}),s=c)}}else if(t==="standard-deviation"){const s=E(o),f=$(o,s);if(f===0)i.push({minValue:o[0],maxValue:o[0],label:b(o[0],o[0],u)});else{const c=C(d,p,e,s,f)*f;let a=0,m=d;for(let V=e;V>=1;V--){const x=v(s-(V-.5)*c,6);i.push({minValue:m,maxValue:x,label:b(m,x,u)}),m=x,a++}let h=v(s+.5*c,6);i.push({minValue:m,maxValue:h,label:b(m,h,u)}),m=h,a++;for(let V=1;V<=e;V++)h=a===2*e?p:v(s+(V+.5)*c,6),i.push({minValue:m,maxValue:h,label:b(m,h,u)}),m=h,a++}}else if(t==="defined-interval"){if(!r)return i;const s=o[0],f=o[o.length-1],c=Math.ceil((f-s)/r);let a=s;for(let m=1;m<c;m++){const h=v(s+m*r,6);i.push({minValue:a,maxValue:h,label:b(a,h,u)}),a=h}i.push({minValue:a,maxValue:f,label:b(a,f,u)})}return i}function b(n,l,t){let e=null;return e=n===l?t&&t==="percent-of-total"?n+"%":n.toString():t&&t==="percent-of-total"?n+"% - "+l+"%":n+" - "+l,e}function N(n){const l=[],t=[];let e=Number.MIN_VALUE,u=1,r=-1;for(let i=0;i<n.length;i++){const o=n[i];o===e?(u++,t[r]=u):o!==null&&(l.push(o),e=o,u=1,t.push(u),r++)}return{uniqueValues:l,valueFrequency:t}}function k(n,l,t){const e=n.length,u=[];t>e&&(t=e);for(let i=0;i<t;i++)u.push(Math.round(i*e/t-1));u.push(e-1);let r=T(u,n,l,t);return q(r.mean,r.sdcm,u,n,l,t)&&(r=T(u,n,l,t)),u}function T(n,l,t,e){let u=[],r=[],i=[],o=0;const d=[],p=[];for(let a=0;a<e;a++){const m=g(a,n,l,t);d.push(m.sbMean),p.push(m.sbSdcm),o+=p[a]}let s,f=o,c=!0;for(;c||o<f;){c=!1,u=[];for(let a=0;a<e;a++)u.push(n[a]);for(let a=0;a<e;a++)for(let m=n[a]+1;m<=n[a+1];m++)if(s=l[m],a>0&&m!==n[a+1]&&Math.abs(s-d[a])>Math.abs(s-d[a-1]))n[a]=m;else if(a<e-1&&n[a]!==m-1&&Math.abs(s-d[a])>Math.abs(s-d[a+1])){n[a+1]=m-1;break}f=o,o=0,r=[],i=[];for(let a=0;a<e;a++){r.push(d[a]),i.push(p[a]);const m=g(a,n,l,t);d[a]=m.sbMean,p[a]=m.sbSdcm,o+=p[a]}}if(o>f){for(let a=0;a<e;a++)n[a]=u[a],d[a]=r[a],p[a]=i[a];o=f}return{mean:d,sdcm:p}}function q(n,l,t,e,u,r){let i=0,o=0,d=0,p=0,s=!0;for(let f=0;f<2&&s;f++){f===0&&(s=!1);for(let c=0;c<r-1;c++)for(;t[c+1]+1!==t[c+2];){t[c+1]=t[c+1]+1;const a=g(c,t,e,u);d=a.sbMean,i=a.sbSdcm;const m=g(c+1,t,e,u);if(p=m.sbMean,o=m.sbSdcm,!(i+o<l[c]+l[c+1])){t[c+1]=t[c+1]-1;break}l[c]=i,l[c+1]=o,n[c]=d,n[c+1]=p,s=!0}for(let c=r-1;c>0;c--)for(;t[c]!==t[c-1]+1;){t[c]=t[c]-1;const a=g(c-1,t,e,u);d=a.sbMean,i=a.sbSdcm;const m=g(c,t,e,u);if(p=m.sbMean,o=m.sbSdcm,!(i+o<l[c-1]+l[c])){t[c]=t[c]+1;break}l[c-1]=i,l[c]=o,n[c-1]=d,n[c]=p,s=!0}}return s}function C(n,l,t,e,u){let r=Math.max(e-n,l-e)/u/t;return r=r>=1?1:r>=.5?.5:.25,r}function E(n){let l=0;for(let t=0;t<n.length;t++)l+=n[t];return l/=n.length,l}function $(n,l){let t=0;for(let e=0;e<n.length;e++){const u=n[e];t+=(u-l)*(u-l)}return t/=n.length,Math.sqrt(t)}function g(n,l,t,e){let u=0,r=0;for(let d=l[n]+1;d<=l[n+1];d++){const p=e[d];u+=t[d]*p,r+=p}r<=0&&console.log("Exception in Natural Breaks calculation");const i=u/r;let o=0;for(let d=l[n]+1;d<=l[n+1];d++)o+=e[d]*(t[d]-i)**2;return{sbMean:i,sbSdcm:o}}const w="equal-interval",B=1,U=5,G=10,P=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,y=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),O=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function A(n){const l=n.normalizationField!=null||n.normalizationType!=null,t=n.minValue!=null||n.maxValue!=null,e=!!n.sqlExpression&&n.supportsSQLExpression;return!l&&!t&&!e}function X(n){const l=n.returnDistinct?[...new Set(n.values)]:n.values,t=l.filter(u=>u!=null).length,e={count:t};return n.supportsNullCount&&(e.nullcount=l.length-t),n.percentileParams&&(e.median=z(l,n.percentileParams)),e}function L(n){const{values:l,useSampleStdDev:t,supportsNullCount:e}=n;let u=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,i=null,o=null,d=null,p=null,s=0;const f=n.minValue==null?-1/0:n.minValue,c=n.maxValue==null?1/0:n.maxValue;for(const m of l)Number.isFinite(m)?m>=f&&m<=c&&(i+=m,u=Math.min(u,m),r=Math.max(r,m),s++):typeof m=="string"&&s++;if(s&&i!=null){o=i/s;let m=0;for(const h of l)Number.isFinite(h)&&h>=f&&h<=c&&(m+=(h-o)**2);p=t?s>1?m/(s-1):0:s>0?m/s:0,d=Math.sqrt(p)}else u=null,r=null;const a={avg:o,count:s,max:r,min:u,stddev:d,sum:i,variance:p};return e&&(a.nullcount=l.length-s),n.percentileParams&&(a.median=z(l,n.percentileParams)),a}function z(n,l){const{fieldType:t,value:e,orderBy:u,isDiscrete:r}=l,i=_(t,u==="desc");if((n=[...n].filter(a=>a!=null).sort((a,m)=>i(a,m))).length===0)return null;if(e<=0)return n[0];if(e>=1)return n[n.length-1];const o=(n.length-1)*e,d=Math.floor(o),p=d+1,s=o%1,f=n[d],c=n[p];return p>=n.length||r||typeof f=="string"||typeof c=="string"?f:f*(1-s)+c*s}function _(n,l){const t=l?1:-1,e=Y(l),u=F(l);if(!(!!n&&["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...y].includes(n)))return(r,i)=>typeof r=="number"&&typeof i=="number"?e(r,i):typeof r=="string"&&typeof i=="string"?u(r,i):t;if(n==="esriFieldTypeDate")return(r,i)=>{const o=new Date(r).getTime(),d=new Date(i).getTime();return isNaN(o)||isNaN(d)?t:e(o,d)};if(y.has(n))return(r,i)=>e(r,i);if(n==="esriFieldTypeString")return(r,i)=>u(r,i);if(n==="esriFieldTypeGUID"||n==="esriFieldTypeGlobalID"){const r=F(l);return(i,o)=>r(M(i),M(o))}return l?(r,i)=>1:(r,i)=>-1}function F(n){return n?(l,t)=>(l=l.toUpperCase())>(t=t.toUpperCase())?-1:l<t?1:0:(l,t)=>(l=l.toUpperCase())<(t=t.toUpperCase())?-1:l>t?1:0}function Y(n){return n?(l,t)=>t-l:(l,t)=>l-t}function M(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function Z(n,l){let t;for(t in n)O.indexOf(t)>-1&&(Number.isFinite(n[t])||(n[t]=null));return l&&["avg","stddev","variance"].forEach(e=>{n[e]!=null&&(n[e]=Math.ceil(n[e]))}),n}function nn(n){const l={};for(let t of n)(t==null||typeof t=="string"&&t.trim()==="")&&(t=null),l[t]==null?l[t]={count:1,data:t}:l[t].count++;return{count:l}}function tn(n,l,t){const e=n.count,u=[];t&&l&&l.type==="coded-value"&&l.codedValues.forEach(r=>{const i=r.code;e.hasOwnProperty(i)||(e[i]={data:i,count:0})});for(const r in e){const i=e[r];u.push({value:i.data,count:i.count,label:i.label})}return{uniqueValueInfos:u}}function ln(n,l,t,e){let u=null;switch(l){case"log":n!==0&&(u=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(e)&&e!==0&&(u=n/e*100);break;case"field":Number.isFinite(t)&&t!==0&&(u=n/t);break;case"natural-log":n>0&&(u=Math.log(n));break;case"square-root":n>0&&(u=n**.5)}return u}function Q(n,l){const t=H({field:l.field,normalizationType:l.normalizationType,normalizationField:l.normalizationField,classificationMethod:l.classificationMethod,standardDeviationInterval:l.standardDeviationInterval,breakCount:l.numClasses||U});return n=j(n,l.minValue,l.maxValue),D({definition:t,values:n,normalizationTotal:l.normalizationTotal})}function j(n,l,t){return l=l??-1/0,t=t??1/0,n.filter(e=>Number.isFinite(e)&&e>=l&&e<=t)}function H(n){const l=n.field,t=n.classificationMethod||w,e=n.normalizationType,u=n.normalizationField,r=new S;return r.classificationField=l,r.breakCount=n.breakCount,r.classificationMethod=t,r.standardDeviationInterval=t==="standard-deviation"?n.standardDeviationInterval||B:void 0,r.normalizationType=e,r.normalizationField=e==="field"?u:void 0,r}function en(n,l){let t=n.classBreaks;const e=t.length,u=t[0].minValue,r=t[e-1].maxValue,i=l==="standard-deviation",o=P;return t=t.map(d=>{const p=d.label,s={minValue:d.minValue,maxValue:d.maxValue,label:p};if(i&&p){const f=p.match(o).map(c=>+c.trim());f.length===2?(s.minStdDev=f[0],s.maxStdDev=f[1],f[0]<0&&f[1]>0&&(s.hasAvg=!0)):f.length===1&&(p.includes("<")?(s.minStdDev=null,s.maxStdDev=f[0]):p.includes(">")&&(s.minStdDev=f[0],s.maxStdDev=null))}return s}),{minValue:u,maxValue:r,classBreakInfos:t,normalizationTotal:n.normalizationTotal}}function an(n,l){const{min:t,max:e,intervals:u}=J(n,l),r=u.map((i,o)=>({minValue:u[o][0],maxValue:u[o][1],count:0}));for(const i of n)if(i!=null&&i>=t&&i<=e){const o=K(u,i);o>-1&&r[o].count++}return{bins:r,minValue:t,maxValue:e,normalizationTotal:l.normalizationTotal}}function J(n,l){const{field:t,classificationMethod:e,standardDeviationInterval:u,normalizationType:r,normalizationField:i,normalizationTotal:o,minValue:d,maxValue:p}=l,s=l.numBins||G;let f=null,c=null,a=null;if((!e||e==="equal-interval")&&!r){if(d!=null&&p!=null)f=d,c=p;else{const m=L({values:n,minValue:d,maxValue:p,useSampleStdDev:!r,supportsNullCount:A({normalizationType:r,normalizationField:i,minValue:d,maxValue:p})});f=m.min,c=m.max}a=R(f,c,s)}else{const{classBreaks:m}=Q(n,{field:t,normalizationType:r,normalizationField:i,normalizationTotal:o,classificationMethod:e,standardDeviationInterval:u,minValue:d,maxValue:p,numClasses:s});f=m[0].minValue,c=m[m.length-1].maxValue,a=m.map(h=>[h.minValue,h.maxValue])}return{min:f,max:c,intervals:a}}function K(n,l){let t=-1;for(let e=n.length-1;e>=0;e--)if(l>=n[e][0]){t=e;break}return t}function R(n,l,t){const e=(l-n)/t,u=[];let r,i=n;for(let o=1;o<=t;o++)r=i+e,r=Number(r.toFixed(16)),u.push([i,o===t?l:r]),i=r;return u}export{en as D,ln as T,Z as V,L as c,z as d,_ as f,nn as g,tn as h,X as m,A as s,Q as y,an as z};
