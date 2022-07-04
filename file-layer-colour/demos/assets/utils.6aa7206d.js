import{e as f,d as y,i as C,N as Y,cT as g,cN as $,cl as O,aZ as R,M as j}from"./main.e7277a66.js";let x=class extends Y{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};f([y()],x.prototype,"affectsPixelSize",null),f([y({json:{write:!0}})],x.prototype,"spatialReference",void 0),x=f([C("esri.layers.support.rasterTransforms.BaseRasterTransform")],x);const T=x;let d=class extends T{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return(e=e.clone()).type==="point"?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return(e=e.clone()).type==="point"?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};f([g({GCSShiftXform:"gcs-shift"})],d.prototype,"type",void 0),f([y()],d.prototype,"tolerance",void 0),d=f([C("esri.layers.support.rasterTransforms.GCSShiftTransform")],d);const M=d;let v=class extends T{constructor(){super(...arguments),this.type="identity"}};f([g({IdentityXform:"identity"})],v.prototype,"type",void 0),v=f([C("esri.layers.support.rasterTransforms.IdentityTransform")],v);const z=v;function w(e,o,s){const{x:t,y:n}=o;if(s<2)return{x:e[0]+t*e[2]+n*e[4],y:e[1]+t*e[3]+n*e[5]};if(s===2){const p=t*t,X=n*n,S=t*n;return{x:e[0]+t*e[2]+n*e[4]+p*e[6]+S*e[8]+X*e[10],y:e[1]+t*e[3]+n*e[5]+p*e[7]+S*e[9]+X*e[11]}}const r=t*t,a=n*n,u=t*n,i=r*t,m=r*n,h=t*a,l=n*a;return{x:e[0]+t*e[2]+n*e[4]+r*e[6]+u*e[8]+a*e[10]+i*e[12]+m*e[14]+h*e[16]+l*e[18],y:e[1]+t*e[3]+n*e[5]+r*e[7]+u*e[9]+a*e[11]+i*e[13]+m*e[15]+h*e[17]+l*e[19]}}function I(e,o,s){const{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:u}=o;let i=[];if(s<2)i.push({x:t,y:a}),i.push({x:r,y:a}),i.push({x:t,y:n}),i.push({x:r,y:n});else{let l=10;for(let p=0;p<l;p++)i.push({x:t,y:n+(a-n)*p/(l-1)}),i.push({x:r,y:n+(a-n)*p/(l-1)});l=8;for(let p=1;p<=l;p++)i.push({x:t+(r-t)*p/l,y:n}),i.push({x:t+(r-t)*p/l,y:a})}i=i.map(l=>w(e,l,s));const m=i.map(l=>l.x),h=i.map(l=>l.y);return new j({xmin:Math.min.apply(null,m),xmax:Math.max.apply(null,m),ymin:Math.min.apply(null,h),ymax:Math.max.apply(null,h),spatialReference:u})}function F(e){const[o,s,t,n,r,a]=e,u=t*a-r*n,i=r*n-t*a;return[(r*s-o*a)/u,(t*s-o*n)/i,a/u,n/i,-r/u,-t/i]}let c=class extends T{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,o){const{coeffX:s,coeffY:t}=o;if(s==null||!s.length||t==null||!t.length||s.length!==t.length)return null;const n=[];for(let r=0;r<s.length;r++)n.push(s[r]),n.push(t[r]);return n}writeForwardCoefficients(e,o,s){const t=[],n=[];for(let r=0;r<e?.length;r++)r%2==0?t.push(e[r]):n.push(e[r]);o.coeffX=t,o.coeffY=n}get inverseCoefficients(){let e=this._get("inverseCoefficients");const o=this._get("forwardCoefficients");return!e&&o&&this.polynomialOrder<2&&(e=F(o)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,o){const{inverseCoeffX:s,inverseCoeffY:t}=o;if(s==null||!s.length||t==null||!t.length||s.length!==t.length)return null;const n=[];for(let r=0;r<s.length;r++)n.push(s[r]),n.push(t[r]);return n}writeInverseCoefficients(e,o,s){const t=[],n=[];for(let r=0;r<e?.length;r++)r%2==0?t.push(e[r]):n.push(e[r]);o.inverseCoeffX=t,o.inverseCoeffY=n}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if(e.type==="point"){const o=w(this.forwardCoefficients,e,this.polynomialOrder);return new R({x:o.x,y:o.y,spatialReference:e.spatialReference})}return I(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if(e.type==="point"){const o=w(this.inverseCoefficients,e,this.polynomialOrder);return new R({x:o.x,y:o.y,spatialReference:e.spatialReference})}return I(this.inverseCoefficients,e,this.polynomialOrder)}};f([y({json:{write:!0}})],c.prototype,"polynomialOrder",void 0),f([y()],c.prototype,"forwardCoefficients",void 0),f([$("forwardCoefficients",["coeffX","coeffY"])],c.prototype,"readForwardCoefficients",null),f([O("forwardCoefficients")],c.prototype,"writeForwardCoefficients",null),f([y({json:{write:!0}})],c.prototype,"inverseCoefficients",null),f([$("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],c.prototype,"readInverseCoefficients",null),f([O("inverseCoefficients")],c.prototype,"writeInverseCoefficients",null),f([y()],c.prototype,"affectsPixelSize",null),f([g({PolynomialXform:"polynomial"})],c.prototype,"type",void 0),c=f([C("esri.layers.support.rasterTransforms.PolynomialTransform")],c);const G=c,P={GCSShiftXform:M,IdentityXform:z,PolynomialXform:G},_=Object.keys(P);function b(e){const o=e?.type;return!e||_.includes(o)}function k(e){if(!e?.type)return null;const o=P[e?.type];if(o){const s=new o;return s.read(e),s}return null}export{M as c,b as e,k as f,G as m};
