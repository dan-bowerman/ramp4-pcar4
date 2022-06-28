import{id as J,ie as D,M as K,ds as L,f as U,cK as I,r as S,aZ as b,ig as V,s as Y,ih as F}from"./main.e3a581a7.js";const G=5e-4;function _(t,n,i){return!V(t,n,i)}function P(t,n,i){const o=_(t,n,i);if(o&&!J())throw new Y("rasterprojectionhelper-project","projection engine is not loaded");return o}const $=function(t,n,i){const o=(t[0]+t[4]+t[4*n.cols]+t[4*n.cols+4])/4,e=(t[1]+t[5]+t[4*n.rows+1]+t[4*n.rows+5])/4,a=(t[4*n.cols]-t[0]+t[4*n.cols+4]-t[4])/i[0]*.5,s=(t[4*n.cols+1]-t[1]+t[4*n.cols+5]-t[5])/i[1]*.5;return[a===0||isNaN(a)?0:Math.abs(o-t[2*n.rows+2])/Math.abs(a),s===0||isNaN(s)?0:Math.abs(e-t[2*n.rows+3])/Math.abs(s)]},tt={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},T=32,q=4,nt=q;async function rt(){if(J())return null;await D()}function lt(t,n,i){return P(t.spatialReference,n)?i?F(n,t.spatialReference,t):F(t.spatialReference,n,t):null}function B(t,n,i,o=null){if(t.spatialReference.equals(n))return t;P(t.spatialReference,n,o);const e=i.center,a=new K({xmin:e.x-t.x/2,xmax:e.x+t.x/2,ymin:e.y-t.y/2,ymax:e.y+t.y/2,spatialReference:t.spatialReference}),s=L(a,n,o);return U(s)?null:{x:s.xmax-s.xmin,y:s.ymax-s.ymin}}function Q(t,n=.01){return I(t)?n/I(t):0}function O(t,n,i=null,o=!0){const e=t.spatialReference;if(e.equals(n))return t;P(e,n,i);const a=L(t,n,i);if(o&&n.isGeographic){const[s,r]=A(e,!0),c=Q(e);c&&s!=null&&r!=null&&(Math.abs(t.x-s)<c&&Math.abs(180-a.x)<G?a.x-=360:Math.abs(t.x-r)<c&&Math.abs(180+a.x)<G&&(a.x+=360))}return a}function at(t,n,i=null){const o=t[0].spatialReference;return o.equals(n)?t:(P(o,n,i),L(t,n,i))}function Z(t){const n=W(t[0].spatialReference);if(t.length<2||!S(n))return t[0];let{xmin:i,xmax:o,ymin:e,ymax:a}=t[0];for(let s=1;s<t.length;s++){const r=t[s];o=r.xmax+n*s,e=Math.min(e,r.ymin),a=Math.max(a,r.ymax)}return new K({xmin:i,xmax:o,ymin:e,ymax:a,spatialReference:t[0].spatialReference})}function it(t,n,i=null,o=!0){if(t.spatialReference.equals(n))return t;const e=ot(t),a=W(t.spatialReference,!0);return!S(a)||e===0?X(t,n,i,o):Z(t.clone().normalize().map(s=>X(s,n,i,o)))}function X(t,n,i=null,o=!0){const e=t.spatialReference;if(e.equals(n))return t;P(e,n,i);const a=L(t,n,i);let[s,r]=A(e,!0);if(a&&o&&e.isWebMercator&&n.isGeographic&&s!=null&&r!=null){if(Math.abs(t.xmin-s)<.001&&Math.abs(r-t.xmax)>1e3&&Math.abs(180-a.xmax)<G){a.xmin=-180;const u=[];u.push(new b(t.xmax,t.ymin,e)),u.push(new b(t.xmax,(t.ymin+t.ymax)/2,e)),u.push(new b(t.xmax,t.ymax,e));const x=u.map(m=>O(m,n,i)).filter(m=>!isNaN(m?.x)).map(m=>m.x);a.xmax=Math.max.apply(null,x)}if(Math.abs(t.xmax-r)<.001&&Math.abs(s-t.xmin)>1e3&&Math.abs(180+a.xmin)<G){a.xmax=180;const u=[];u.push(new b(t.xmin,t.ymin,e)),u.push(new b(t.xmin,(t.ymin+t.ymax)/2,e)),u.push(new b(t.xmin,t.ymax,e));const x=u.map(m=>O(m,n,i)).filter(m=>!isNaN(m?.x)).map(m=>m.x);a.xmin=Math.min.apply(null,x)}}[s,r]=A(n,!0);const c=Q(n);return c&&s!=null&&r!=null&&a&&(Math.abs(a.xmin-s)<c&&(a.xmin=s),Math.abs(a.xmax-r)<c&&(a.xmax=r)),a}function W(t,n=!1){const i=n?20037508342787e-6:20037508342788905e-9;return t.isWebMercator?2*i:t.wkid&&t.isGeographic?360:2*tt[t.wkid]||null}function A(t,n=!1){const i=[],o=W(t,n);return S(o)&&(i.push(-o/2),i.push(o/2)),i}function E(t,n,i,o){let e=(t-n)/i;return e-Math.floor(e)!=0?e=Math.floor(e):o&&(e-=1),e}function ot(t,n=!1){const i=W(t.spatialReference);if(!S(i))return 0;const o=n?0:-(i/2);return E(t.xmax,o,i,!0)-E(t.xmin,o,i,!1)}function ct(t){const n=t.storageInfo.origin.x,i=W(t.spatialReference,!0);if(!S(i))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const o=i/2,{nativePixelSize:e,storageInfo:a,extent:s}=t,{maximumPyramidLevel:r,blockWidth:c,pyramidScalingFactor:M}=a;let f=e.x;const u=[],x=S(t.transform)&&t.transform.type==="gcs-shift",m=n+(x?0:o),h=x?i-n:o-n;for(let p=0;p<=r;p++){const d=(s.xmax-n)/f/c,w=d-Math.floor(d)==0?d:Math.ceil(d),g=h/f/c,l=g-Math.floor(g)==0?g:Math.ceil(g),R=Math.floor(m/f/c),y=Math.round(m/f)%c,v=(c-Math.round(h/f)%c)%c;u.push({resolutionX:f,blockWidth:c,datsetColumnCount:w,worldColumnCountFromOrigin:l,leftMargin:y,rightPadding:v,originColumnOffset:R}),f*=M}return{originX:n,halfWorldWidth:o,pyramidsInfo:u,hasGCSSShiftTransform:x}}function xt(t){const n=t.isAdaptive&&t.spacing==null,i=t.spacing||[T,T];let o=H(t),e={cols:o.size[0]+1,rows:o.size[1]+1},a=$(o.offsets,e,i);const s=(a[0]+a[1])/2,r=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;return n&&(r||s>nt)&&(o=H({...t,spacing:[q,q]}),e={cols:o.size[0]+1,rows:o.size[1]+1},a=$(o.offsets,e,i)),o.error=a,o.coefficients=et(o.offsets,e,r),o}function H(t){const{projectedExtent:n,srcBufferExtent:i,pixelSize:o,datumTransformation:e,rasterTransform:a}=t,s=n.spatialReference,r=i.spatialReference;P(s,r);const{xmin:c,ymin:M,xmax:f,ymax:u}=n,x=W(r),m=t.hasWrapAround||a?.type==="gcs-shift",h=t.spacing||[T,T],p={x:h[0]*o.x,y:h[1]*o.y},d={cols:Math.ceil((f-c)/p.x-.1/h[0])+1,rows:Math.ceil((u-M)/p.y-.1/h[1])+1},w=p.x,g=p.y,l=[];let R,y=0;const v=[];for(let z=0;z<d.cols;z++)for(let C=0;C<d.rows;C++)v.push(new b({x:c+w*z,y:u-g*C,spatialReference:s}));const k=at(v,r,e);for(let z=0;z<d.cols;z++){const C=[];for(let j=0;j<d.rows;j++){let N=k[z*d.rows+j];a&&(N=a.inverseTransform(N)),C.push(N),z>0&&m&&N&&R[j]&&S(x)&&N.x<R[j].x&&(N.x+=x),N?(l.push((N.x-i.xmin)/(i.xmax-i.xmin)),l.push((i.ymax-N.y)/(i.ymax-i.ymin))):(l.push(NaN),l.push(NaN),y++)}R=C}return{offsets:l,error:null,coefficients:null,outofBoundPointCount:y,spacing:h,size:[d.cols-1,d.rows-1]}}function et(t,n,i){const{cols:o,rows:e}=n,a=new Float32Array((o-1)*(e-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),r=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let c=0;c<o-1;c++){for(let M=0;M<e-1;M++){let f=c*e*2+2*M;const u=t[f],x=t[f+1],m=t[f+2],h=t[f+3];f+=2*e;const p=t[f],d=t[f+1],w=t[f+2],g=t[f+3];let l=0,R=12*(M*(o-1)+c);for(let y=0;y<3;y++)a[R++]=s[l++]*u+s[l++]*m+s[l++]*w;l=0;for(let y=0;y<3;y++)a[R++]=s[l++]*x+s[l++]*h+s[l++]*g;l=0;for(let y=0;y<3;y++)a[R++]=r[l++]*u+r[l++]*p+r[l++]*w;l=0;for(let y=0;y<3;y++)a[R++]=r[l++]*x+r[l++]*d+r[l++]*g}if(i)for(let M=0;M<a.length;M++)isNaN(a[M])&&(a[M]=-1)}return a}function ft(t){const n=t.clone().normalize();return n.length===1?n[0]:Z(n)}function ut(t,n,i){const{storageInfo:o,pixelSize:e}=n;let a,s=!1;const{pyramidResolutions:r}=o;if(S(r)&&r.length){const x=(t.x+t.y)/2,m=r[r.length-1],h=(m.x+m.y)/2,p=(e.x+e.y)/2;if(x<=p)a=0;else if(x>=h)a=r.length,s=x/h>8;else{let w,g=p;for(let l=1;l<=r.length;l++){if(w=(r[l-1].x+r[l-1].y)/2,x<=w){x===w?a=l:i==="down"?(a=l-1,s=x/g>8):a=i==="up"||x-g>w-x||x/g>2?l:l-1;break}g=w}}const d=a===0?e:r[a-1];return{pyramidLevel:a,pyramidResolution:new b({x:d.x,y:d.y,spatialReference:n.spatialReference}),excessiveReading:s}}const c=Math.log(t.x/e.x)/Math.LN2,M=Math.log(t.y/e.y)/Math.LN2,f=n.storageInfo.maximumPyramidLevel||0;a=i==="down"?Math.floor(Math.min(c,M)):i==="up"?Math.ceil(Math.max(c,M)):Math.round((c+M)/2),a<0?a=0:a>f&&(s=a>f+3,a=f);const u=2**a;return{pyramidLevel:a,pyramidResolution:new b({x:u*n.nativePixelSize.x,y:u*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:s}}function mt(t,n,i=512,o=!0){const{extent:e,spatialReference:a,pixelSize:s}=t,r=B(new b({x:s.x,y:s.y,spatialReference:a}),n,e);if(r==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(r.x+r.y)/2,M=I(n),f=c*M*96*39.37,u=n.isGeographic?256/i*2958287637958547e-7:256/i*591657527591555e-6;let x=t.dataType==="vector-magdir"||t.dataType==="vector-uv";const m=it(e,n);x||o&&(n.isGeographic||n.isWebMercator)&&(x=m.xmin*m.xmax<0);let h,p=f;const d=1.001;if(x){p=u;const y=n.isGeographic?1341104507446289e-21:.29858214164761665,v=y*(96*M*39.37),k=n.isGeographic?4326:3857;h=B(new b({x:y,y,spatialReference:{wkid:k}}),a,m),h.x*=p/v,h.y*=p/v}else{h={x:s.x,y:s.y};const y=Math.ceil(Math.log(Math.min(t.width,t.height)/32)/Math.LN2);let v=0;for(;p<u*(d/2)&&v<y;)v++,p*=2,h.x*=2,h.y*=2;Math.max(p,u)/Math.min(p,u)<=d&&(p=u)}const w=[p],g=[{x:h.x,y:h.y}],l=70.5310735,R=Math.min(l,f)/d;for(;p>=R;)p/=2,h.x/=2,h.y/=2,w.push(p),g.push({x:h.x,y:h.y});return{projectedPixelSize:r,scales:w,srcResolutions:g,isCustomTilingScheme:!x}}export{ut as A,mt as F,ot as G,xt as L,W as P,B as R,ct as T,rt as d,it as j,ft as q,O as v,lt as w,_ as x};
