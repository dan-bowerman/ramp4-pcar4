import{bh as xt,bj as ot,bi as nt,aj as Z,s as Q,cj as Ot,cB as O,r as pt,av as Mt,cC as ht,b_ as Pt,ab as $t,at as tt,ah as wt,a7 as gt,a8 as dt,B as Lt,O as It,ac as zt,ad as Xt}from"./main.ca84d437.js";import{t as Ht,a as Jt,p as Rt,b as Yt,m as at,q as lt,O as I,R as B,u as X,v as k,w as Ft,x as At,k as Tt}from"./CIMSymbolHelper.6d248ce1.js";import{q as Et,C as Gt,B as Wt,v as jt}from"./quantizationUtils.22300185.js";import{E as V}from"./Utils.f627c5e3.js";import{L as Dt}from"./MaterialKey.dbf44d02.js";import{c as Ut,a as Vt}from"./devEnvironmentUtils.444b8fd1.js";function Bt(t){if(!t)return null;switch(t.type){case"CIMPointSymbol":{const e=t.symbolLayers;return e&&e.length===1?Bt(e[0]):null}case"CIMVectorMarker":{var r;const e=t.markerGraphics;if(!e||e.length!==1)return null;const o=e[0];if(!o)return null;const i=o.geometry;if(!i)return null;const n=o.symbol;return!n||n.type!=="CIMPolygonSymbol"&&n.type!=="CIMLineSymbol"||(r=n.symbolLayers)!=null&&r.some(s=>!!s.effects)?null:{geom:i,asFill:n.type==="CIMPolygonSymbol"}}case"sdf":return{geom:t.geom,asFill:t.asFill}}return null}function qt(t){return t?t.rings?t.rings:t.paths?t.paths:t.xmin!==void 0&&t.ymin!==void 0&&t.xmax!==void 0&&t.ymax!==void 0?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function Kt(t){let r=1/0,e=-1/0,o=1/0,i=-1/0;for(const n of t)for(const s of n)s[0]<r&&(r=s[0]),s[0]>e&&(e=s[0]),s[1]<o&&(o=s[1]),s[1]>i&&(i=s[1]);return new Ht(r,o,e-r,i-o)}function st(t){let r=1/0,e=-1/0,o=1/0,i=-1/0;for(const n of t)for(const s of n)s[0]<r&&(r=s[0]),s[0]>e&&(e=s[0]),s[1]<o&&(o=s[1]),s[1]>i&&(i=s[1]);return[r,o,e,i]}function St(t){return t?t.rings?st(t.rings):t.paths?st(t.paths):xt(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function bt(t,r,e,o,i){const[n,s,l,c]=t;if(l<n||c<s)return[0,0,0];const f=l-n,m=c-s,y=128,a=1,u=Math.floor(.5*(.5*y-a)),g=(y-2*(u+a))/Math.max(f,m),h=Math.round(f*g)+2*u,S=Math.round(m*g)+2*u;let d=1;r&&(d=S/g/(r.ymax-r.ymin));let v=0,N=0;if(o)if(i){if(r&&e&&r.ymax-r.ymin>0){const b=(r.xmax-r.xmin)/(r.ymax-r.ymin);v=o.x/(e*b),N=o.y/e}}else v=o.x,N=o.y;return v=.5*(r.xmax+r.xmin)+v*(r.xmax-r.xmin),N=.5*(r.ymax+r.ymin)+N*(r.ymax-r.ymin),v-=n,N-=s,v*=g,N*=g,v+=u,N+=u,[d,v/h-.5,-(N/S-.5)]}function Je(t){const r=qt(t.geom),e=Kt(r),o=128,i=1,n=Math.floor(.5*(.5*o-i)),s=(o-2*(n+i))/Math.max(e.width,e.height),l=Math.round(e.width*s)+2*n,c=Math.round(e.height*s)+2*n,f=[];for(const y of r)if(y&&y.length>1){const a=[];for(const u of y){let[g,h]=u;g-=e.x,h-=e.y,g*=s,h*=s,g+=n-.5,h+=n-.5,t.asFill?a.push([g,h]):a.push([Math.round(g),Math.round(h)])}if(t.asFill){const u=a.length-1;a[0][0]===a[u][0]&&a[0][1]===a[u][1]||a.push(a[0])}f.push(a)}const m=_t(f,l,c,n);return t.asFill&&Zt(f,l,c,n,m),[Qt(m,n),l,c]}function _t(t,r,e,o){const i=r*e,n=new Array(i),s=o*o+1;for(let l=0;l<i;++l)n[l]=s;for(const l of t){const c=l.length;for(let f=1;f<c;++f){const m=l[f-1],y=l[f];let a,u,g,h;m[0]<y[0]?(a=m[0],u=y[0]):(a=y[0],u=m[0]),m[1]<y[1]?(g=m[1],h=y[1]):(g=y[1],h=m[1]);let S=Math.floor(a)-o,d=Math.floor(u)+o,v=Math.floor(g)-o,N=Math.floor(h)+o;S<0&&(S=0),d>r&&(d=r),v<0&&(v=0),N>e&&(N=e);const b=y[0]-m[0],M=y[1]-m[1],P=b*b+M*M;for(let x=S;x<d;x++)for(let C=v;C<N;C++){let w,z,L=(x-m[0])*b+(C-m[1])*M;L<0?(w=m[0],z=m[1]):L>P?(w=y[0],z=y[1]):(L/=P,w=m[0]+L*b,z=m[1]+L*M);const F=(x-w)*(x-w)+(C-z)*(C-z),R=(e-C-1)*r+x;F<n[R]&&(n[R]=F)}}}for(let l=0;l<i;++l)n[l]=Math.sqrt(n[l]);return n}function Zt(t,r,e,o,i){for(const n of t){const s=n.length;for(let l=1;l<s;++l){const c=n[l-1],f=n[l];let m,y,a,u;c[0]<f[0]?(m=c[0],y=f[0]):(m=f[0],y=c[0]),c[1]<f[1]?(a=c[1],u=f[1]):(a=f[1],u=c[1]);let g=Math.floor(m),h=Math.floor(y)+1,S=Math.floor(a),d=Math.floor(u)+1;g<o&&(g=o),h>r-o&&(h=r-o),S<o&&(S=o),d>e-o&&(d=e-o);for(let v=S;v<d;++v){if(c[1]>v==f[1]>v)continue;const N=(e-v-1)*r;for(let b=g;b<h;++b)b<(f[0]-c[0])*(v-c[1])/(f[1]-c[1])+c[0]&&(i[N+b]=-i[N+b]);for(let b=o;b<g;++b)i[N+b]=-i[N+b]}}}}function Qt(t,r){const e=2*r,o=t.length,i=new Uint8Array(4*o);for(let n=0;n<o;++n){const s=.5-t[n]/e;Jt(s,i,4*n)}return i}const te=96/72;class ct{static executeEffects(r,e){const o=Yt(e),i=te;let n=new at(o);for(const s of r){const l=lt(s);l&&(n=l.execute(n,s,i,!0))}return n}static next(r){const e=r.next();return Rt(e),e}static applyEffects(r,e){if(!r)return e;let o=new at(e);for(const s of r){const l=lt(s);l&&(o=l.execute(o,s,1,!1))}let i,n=null;for(;i=o.next();)n?ot(n)?ot(i)&&n.paths.push(...i.paths):nt(n)&&nt(i)&&n.rings.push(...i.rings):n=i;return n}}function vt(t,r,e,o,i){const n=t.referencesGeometry()&&i?ee(r,o,i):r,s=t.repurposeFeature(n);try{return t.evaluate({...e,$feature:s})}catch(l){return Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",l),null}}const K=new Map;function ee(t,r,e){const{transform:o,hasZ:i,hasM:n}=e;K.has(r)||K.set(r,ie(r));const s=K.get(r)(t.geometry,o,i,n);return{...t,geometry:s}}function ie(t){const r={};switch(t){case"esriGeometryPoint":return(e,o,i,n)=>jt(o,r,e,i,n);case"esriGeometryPolygon":return(e,o,i,n)=>Wt(o,r,e,i,n);case"esriGeometryPolyline":return(e,o,i,n)=>Gt(o,r,e,i,n);case"esriGeometryMultipoint":return(e,o,i,n)=>Et(o,r,e,i,n);default:return Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new Q("mapview-arcade",`Unable to handle geometryType: ${t}`)),e=>e}}const Nt=Z.getLogger("esri.symbols.cim.cimAnalyzer");function et(t){switch(t){case"Butt":return 0;case"Square":return 2;default:return 1}}function it(t){switch(t){case"Bevel":return 0;case"Miter":return 2;default:return 1}}function re(t){switch(t){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function oe(t){switch(t){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function ne(t){let r="",e="";if(t){const o=t.toLowerCase();o.indexOf("italic")!==-1?r="italic":o.indexOf("oblique")!==-1&&(r="oblique"),o.indexOf("bold")!==-1?e="bold":o.indexOf("light")!==-1&&(e="lighter")}return{style:r,weight:e}}function ae(t){return t.underline?"underline":t.strikethrough?"line-through":"none"}function ft(t,r,e,o){let i;t[r]?i=t[r]:(i={},t[r]=i),i[e]=o}function mt(t){const r=t.markerPlacement;return r&&r.angleToLine?1:0}async function le(t,r,e,o,i){const n=o??[];if(!t)return n;let s,l;const c={};if(t.type!=="CIMSymbolReference")return Nt.error("Expect cim type to be 'CIMSymbolReference'"),n;if(s=t.symbol,l=t.primitiveOverrides,l){const m=[];for(const y of l){const a=y.valueExpressionInfo;if(a&&r){const u=a.expression,g=Ot(u,r.spatialReference,r.fields).then(h=>{h&&ft(c,y.primitiveName,y.propertyName,h)});m.push(g)}else y.value!=null&&ft(c,y.primitiveName,y.propertyName,y.value)}m.length>0&&await Promise.all(m)}const f=[];switch(kt(s,e,f),f.length>0&&await Promise.all(f),s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":se(s,l,c,r,n,e,i)}return n}function se(t,r,e,o,i,n,s){if(!t)return;const l=t.symbolLayers;if(!l)return;const c=t.effects;let f;const m=I.getSize(t);t.type==="CIMPointSymbol"&&t.angleAlignment==="Map"&&(f=1);let y=l.length;for(;y--;){const a=l[y];if(!a||a.enable===!1)continue;let u;c&&c.length&&(u=[...c]);const g=a.effects;g&&g.length&&(c?u.push(...g):u=[...g]);const h=[];switch(B.findApplicableOverrides(a,r,h),a.type){case"CIMSolidFill":ce(a,u,e,h,o,i);break;case"CIMPictureFill":fe(a,u,e,h,o,n,i);break;case"CIMHatchFill":me(a,u,e,h,o,i);break;case"CIMGradientFill":ue(a,u,e,h,o,i);break;case"CIMSolidStroke":ye(a,u,e,h,o,i,t.type==="CIMPolygonSymbol",m);break;case"CIMPictureStroke":pe(a,u,e,h,o,i,t.type==="CIMPolygonSymbol",m);break;case"CIMGradientStroke":he(a,u,e,h,o,i,t.type==="CIMPolygonSymbol",m);break;case"CIMCharacterMarker":if(_(a,u,e,h,o,i))break;break;case"CIMPictureMarker":if(_(a,u,e,h,o,i))break;t.type==="CIMLineSymbol"&&(f=mt(a)),ge(a,u,e,h,o,n,i,f,m);break;case"CIMVectorMarker":if(_(a,u,e,h,o,i))break;t.type==="CIMLineSymbol"&&(f=mt(a)),de(a,u,e,h,o,i,n,f,m,s);break;default:Nt.error("Cannot analyze CIM layer",a.type)}}}function ce(t,r,e,o,i,n){const s=t.primitiveName,l=X(t.color),[c,f]=J(o,s),m=O(JSON.stringify(t)+f).toString();n.push({type:"fill",templateHash:m,materialHash:c?()=>m:m,cim:t,materialOverrides:null,colorLocked:t.colorLocked,color:p(s,e,"Color",i,l,Y),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:r})}function fe(t,r,e,o,i,n,s){const l=t.primitiveName,c=t.tintColor?X(t.tintColor):{r:255,g:255,b:255,a:1},[f,m]=J(o,l),y=O(JSON.stringify(t)+m).toString(),a=O(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString();let u=k(t.scaleX);if("width"in t){const g=t.width;let h=1;const S=n.getResource(t.url);pt(S)&&(h=S.width/S.height),u/=h*(t.height/g)}s.push({type:"fill",templateHash:y,materialHash:f?()=>a:a,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:r,color:p(l,e,"TintColor",i,c,Y),height:p(l,e,"Height",i,t.height),scaleX:p(l,e,"ScaleX",i,u),angle:p(l,e,"Rotation",i,k(t.rotation)),offsetX:p(l,e,"OffsetX",i,k(t.offsetX)),offsetY:p(l,e,"OffsetY",i,k(t.offsetY)),url:t.url})}function me(t,r,e,o,i,n){const s=["Rotation","OffsetX","OffsetY"],l=o.filter(u=>u.primitiveName!==t.primitiveName&&s.indexOf(u.propertyName)===-1),c=t.primitiveName,[f,m]=J(o,c),y=O(JSON.stringify(t)+m).toString(),a=O(`${t.separation}${JSON.stringify(t.lineSymbol)}`).toString();n.push({type:"fill",templateHash:y,materialHash:f?j(a,e,l,i):a,cim:t,materialOverrides:l,colorLocked:t.colorLocked,effects:r,color:{r:255,g:255,b:255,a:1},height:p(c,e,"Separation",i,t.separation),scaleX:1,angle:p(c,e,"Rotation",i,k(t.rotation)),offsetX:p(c,e,"OffsetX",i,k(t.offsetX)),offsetY:p(c,e,"OffsetY",i,k(t.offsetY))})}function ue(t,r,e,o,i,n){const s=t.primitiveName,[l,c]=J(o,s),f=O(JSON.stringify(t)+c).toString();n.push({type:"fill",templateHash:f,materialHash:l?j(f,e,o,i):f,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:r,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function ye(t,r,e,o,i,n,s,l){const c=t.primitiveName,f=X(t.color),m=t.width!==void 0?t.width:4,y=et(t.capStyle),a=it(t.joinStyle),u=t.miterLimit,[g,h]=J(o,c),S=O(JSON.stringify(t)+h).toString();let d,v;if(r&&r.length>0){const N=r[r.length-1];if(N.type==="CIMGeometricEffectDashes"&&N.lineDashEnding==="NoConstraint"){const b=(r=[...t.effects]).pop();d=b.dashTemplate,v=b.scaleDash}}n.push({type:"line",templateHash:S,materialHash:g?()=>S:S,cim:t,materialOverrides:null,isOutline:s,colorLocked:t.colorLocked,effects:r,color:p(c,e,"Color",i,f,Y),width:p(c,e,"Width",i,m),cap:p(c,e,"CapStyle",i,y),join:p(c,e,"JoinStyle",i,a),miterLimit:p(c,e,"MiterLimit",i,u),referenceWidth:l,zOrder:rt(t.name),dashTemplate:d,scaleDash:v})}function pe(t,r,e,o,i,n,s,l){const c=O(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(),f=t.primitiveName,m=X(t.tintColor),y=t.width!==void 0?t.width:4,a=et(t.capStyle),u=it(t.joinStyle),g=t.miterLimit,[h,S]=J(o,f),d=O(JSON.stringify(t)+S).toString();n.push({type:"line",templateHash:d,materialHash:h?()=>c:c,cim:t,materialOverrides:null,isOutline:s,colorLocked:t.colorLocked,effects:r,color:p(f,e,"TintColor",i,m,Y),width:p(f,e,"Width",i,y),cap:p(f,e,"CapStyle",i,a),join:p(f,e,"JoinStyle",i,u),miterLimit:p(f,e,"MiterLimit",i,g),referenceWidth:l,zOrder:rt(t.name),dashTemplate:null,scaleDash:!1,url:t.url})}function he(t,r,e,o,i,n,s,l){const c=t.primitiveName,f=t.width!==void 0?t.width:4,m=et(t.capStyle),y=it(t.joinStyle),a=t.miterLimit,[u,g]=J(o,c),h=O(JSON.stringify(t)+g).toString();n.push({type:"line",templateHash:h,materialHash:u?j(h,e,o,i):h,cim:t,materialOverrides:null,isOutline:s,colorLocked:t.colorLocked,effects:r,color:{r:128,g:128,b:128,a:1},width:p(c,e,"Width",i,f),cap:p(c,e,"CapStyle",i,m),join:p(c,e,"JoinStyle",i,y),miterLimit:p(c,e,"MiterLimit",i,a),referenceWidth:l,zOrder:rt(t.name),dashTemplate:null,scaleDash:!1})}function _(t,r,e,o,i,n){const s=t.markerPlacement;if(!s||s.type!=="CIMMarkerPlacementInsidePolygon")return!1;const l=s,c=["Rotation","OffsetX","OffsetY"],f=o.filter(d=>d.primitiveName!==t.primitiveName&&c.indexOf(d.propertyName)===-1),m="url"in t?t.url:null,[y,a]=J(o,l.primitiveName),u=O(JSON.stringify(t)+a).toString();let g=l.stepY,h=null,S=1;return s.shiftOddRows&&(g*=2,h=function(d){return d?2*d:0},S=.5),n.push({type:"fill",templateHash:u,materialHash:y?j(u,e,f,i):u,cim:t,materialOverrides:f,colorLocked:t.colorLocked,effects:r,color:{r:255,g:255,b:255,a:1},height:p(l.primitiveName,e,"StepY",i,g,h),scaleX:S,angle:p(l.primitiveName,e,"GridAngle",i,l.gridAngle),offsetX:p(l.primitiveName,e,"OffsetX",i,k(l.offsetX)),offsetY:p(l.primitiveName,e,"OffsetY",i,k(l.offsetY)),url:m}),!0}function ge(t,r,e,o,i,n,s,l,c){var f;const m=t.primitiveName,y=k(t.size);let a=k(t.scaleX);const u=k(t.rotation),g=k(t.offsetX),h=k(t.offsetY),S=t.tintColor?X(t.tintColor):{r:255,g:255,b:255,a:1},d=O(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(),[v,N]=J(o,m),b=O(JSON.stringify(t)+N).toString(),M=(f=t.anchorPoint)!=null?f:{x:0,y:0};if("width"in t){const P=t.width;let x=1;const C=n.getResource(t.url);pt(C)&&(x=C.width/C.height),a/=x*(y/P)}s.push({type:"marker",templateHash:b,materialHash:v?()=>d:d,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:r,scaleSymbolsProportionally:!1,alignment:l,size:p(m,e,"Size",i,y),scaleX:p(m,e,"ScaleX",i,a),rotation:p(m,e,"Rotation",i,u),offsetX:p(m,e,"OffsetX",i,g),offsetY:p(m,e,"OffsetY",i,h),color:p(m,e,"TintColor",i,S,Y),anchorPoint:{x:M.x,y:-M.y},isAbsoluteAnchorPoint:t.anchorPointUnits!=="Relative",outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:t.rotateClockwise,referenceSize:c,sizeRatio:1,markerPlacement:t.markerPlacement,url:t.url})}function de(t,r,e,o,i,n,s,l,c,f){const m=t.markerGraphics;if(!m)return;let y=0;if(t.scaleSymbolsProportionally){const a=t.frame;a&&(y=a.ymax-a.ymin)}for(const a of m)if(a){const u=a.symbol;if(!u)continue;switch(u.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":be(t,r,a,o,e,i,n,s,l,c,y,f);break;case"CIMTextSymbol":Se(t,r,a,e,o,i,n,l,c,y)}}}function Se(t,r,e,o,i,n,s,l,c,f){const m=[];B.findApplicableOverrides(e,i,m);const y=e.geometry;if(!("x"in y)||!("y"in y))return;const a=e.symbol,u=ae(a),g=ne(a.fontStyleName),h=Ft(a.fontFamilyName);a.font={family:h,decoration:u,...g};const S=t.frame,d=y.x-.5*(S.xmin+S.xmax),v=y.y-.5*(S.ymin+S.ymax),N=t.size/f,b=t.primitiveName,M=k(a.height)*N,P=k(a.angle),x=(k(a.offsetX)+d)*N,C=(k(a.offsetY)+v)*N,w=X(I.getFillColor(a));let z=X(I.getStrokeColor(a)),L=I.getStrokeWidth(a);L||(z=X(I.getFillColor(a.haloSymbol)),L=a.haloSize*N);const[F,R]=J(i,b),T=JSON.stringify(t.effects)+Number(t.colorLocked)+JSON.stringify(t.anchorPoint)+t.anchorPointUnits+JSON.stringify(t.markerPlacement),A=O(JSON.stringify(e)+T+R).toString(),H=p(e.primitiveName,o,"TextString",n,e.textString,At,a.textCase),{fontStyleName:G}=a,$=h+(G?"-"+G.toLowerCase():"-regular"),W=$;s.push({type:"text",templateHash:A,materialHash:F||typeof H=="function"||H.match(/\[(.*?)\]/)?(D,q,U)=>W+"-"+Tt(H,D,q,U):W+"-"+O(H),cim:a,materialOverrides:null,colorLocked:t.colorLocked,effects:r,alignment:l,anchorPoint:{x:t.anchorPoint?t.anchorPoint.x:0,y:t.anchorPoint?t.anchorPoint.y:0},isAbsoluteAnchorPoint:t.anchorPointUnits!=="Relative",fontName:$,decoration:u,weight:p(b,o,"Weight",n,g.weight),style:p(b,o,"Size",n,g.style),size:p(b,o,"Size",n,M),angle:p(b,o,"Rotation",n,P),offsetX:p(b,o,"OffsetX",n,x),offsetY:p(b,o,"OffsetY",n,C),horizontalAlignment:re(a.horizontalAlignment),verticalAlignment:oe(a.verticalAlignment),text:H,color:w,outlineColor:z,outlineSize:L,referenceSize:c,sizeRatio:1,markerPlacement:t.markerPlacement})}function be(t,r,e,o,i,n,s,l,c,f,m,y){const a=e.symbol,u=a.symbolLayers;if(!u)return;if(y)return void ut(t,r,e,i,o,n,s,l,c,f,m);let g=u.length;if(ke(u))return void ve(t,e,u,o,i,n,s,c,f,m);const h=ct.applyEffects(a.effects,e.geometry);if(h)for(;g--;){const d=u[g];if(d&&d.enable!==!1)switch(d.type){case"CIMSolidFill":case"CIMSolidStroke":{var S;const v=ct.applyEffects(d.effects,h),N=St(v);if(!N)continue;const[b,M,P]=bt(N,t.frame,t.size,t.anchorPoint,t.anchorPointUnits!=="Relative"),x=d.type==="CIMSolidFill",C={type:"sdf",geom:v,asFill:x},w=t.primitiveName,z=(S=k(t.size))!=null?S:10,L=k(t.rotation),F=k(t.offsetX),R=k(t.offsetY),T=d.path,A=d.primitiveName,H=X(x?I.getFillColor(d):I.getStrokeColor(d)),G=x?{r:0,g:0,b:0,a:0}:X(I.getStrokeColor(d)),$=I.getStrokeWidth(d);if(!x&&!$)break;let W=!1,D="";for(const E of o)E.primitiveName!==A&&E.primitiveName!==w||(E.value!==void 0?D+=`-${E.primitiveName}-${E.propertyName}-${JSON.stringify(E.value)}`:E.valueExpressionInfo&&(W=!0));const q=JSON.stringify({...t,markerGraphics:null}),U=O(JSON.stringify(C)+T).toString(),Ct={type:"marker",templateHash:O(JSON.stringify(e)+JSON.stringify(d)+q+D).toString(),materialHash:W?()=>U:U,cim:C,materialOverrides:null,colorLocked:t.colorLocked,effects:r,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:c,anchorPoint:{x:M,y:P},isAbsoluteAnchorPoint:!1,size:p(t.primitiveName,i,"Size",n,z),rotation:p(t.primitiveName,i,"Rotation",n,L),offsetX:p(t.primitiveName,i,"OffsetX",n,F),offsetY:p(t.primitiveName,i,"OffsetY",n,R),scaleX:1,frameHeight:m,rotateClockwise:t.rotateClockwise,referenceSize:f,sizeRatio:b,color:p(A,i,"Color",n,H,Y),outlineColor:p(A,i,"Color",n,G,Y),outlineWidth:p(A,i,"Width",n,$),markerPlacement:t.markerPlacement,path:T};s.push(Ct);break}default:ut(t,r,e,i,o,n,s,l,c,f,m)}}}function ve(t,r,e,o,i,n,s,l,c,f){const m=r.geometry,y=e[0],a=e[1],u=St(m);if(!u)return;const[g,h,S]=bt(u,t.frame,t.size,t.anchorPoint,t.anchorPointUnits!=="Relative"),d={type:"sdf",geom:m,asFill:!0},v=t.primitiveName,N=k(t.size),b=k(t.rotation),M=k(t.offsetX),P=k(t.offsetY),x=a.path,C=a.primitiveName,w=y.primitiveName,z=X(I.getFillColor(a)),L=X(I.getStrokeColor(y)),F=I.getStrokeWidth(y);let R=!1,T="";for(const $ of o)$.primitiveName!==C&&$.primitiveName!==w&&$.primitiveName!==v||($.value!==void 0?T+=`-${$.primitiveName}-${$.propertyName}-${JSON.stringify($.value)}`:$.valueExpressionInfo&&(R=!0));const A=JSON.stringify({...t,markerGraphics:null}),H=O(JSON.stringify(d)+x).toString(),G={type:"marker",templateHash:O(JSON.stringify(r)+JSON.stringify(a)+JSON.stringify(y)+A+T).toString(),materialHash:R?()=>H:H,cim:d,materialOverrides:null,colorLocked:t.colorLocked,effects:t.effects,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:l,anchorPoint:{x:h,y:S},isAbsoluteAnchorPoint:!1,size:p(t.primitiveName,i,"Size",n,N),rotation:p(t.primitiveName,i,"Rotation",n,b),offsetX:p(t.primitiveName,i,"OffsetX",n,M),offsetY:p(t.primitiveName,i,"OffsetY",n,P),scaleX:1,frameHeight:f,rotateClockwise:t.rotateClockwise,referenceSize:c,sizeRatio:g,color:p(C,i,"Color",n,z,Y),outlineColor:p(w,i,"Color",n,L,Y),outlineWidth:p(w,i,"Width",n,F),markerPlacement:t.markerPlacement,path:x};s.push(G)}function ut(t,r,e,o,i,n,s,l,c,f,m){const y=Ne(t,e);let a=[];const u=["Rotation","OffsetX","OffsetY"];a=i.filter(C=>C.primitiveName!==t.primitiveName||u.indexOf(C.propertyName)===-1);let g="";for(const C of i)C.value!==void 0&&(g+=`-${C.primitiveName}-${C.propertyName}-${JSON.stringify(C.value)}`);const[h,S,d]=I.getTextureAnchor(y,l),v=t.primitiveName,N=k(t.rotation),b=k(t.offsetX),M=k(t.offsetY),P=O(JSON.stringify(y)+g).toString(),x={type:"marker",templateHash:P,materialHash:a.length===0?P:j(P,o,a,n),cim:y,materialOverrides:a,colorLocked:t.colorLocked,effects:r,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:c,anchorPoint:{x:h,y:S},isAbsoluteAnchorPoint:!1,size:t.size,rotation:p(v,o,"Rotation",n,N),offsetX:p(v,o,"OffsetX",n,b),offsetY:p(v,o,"OffsetY",n,M),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:m,rotateClockwise:t.rotateClockwise,referenceSize:f,sizeRatio:d/Mt(t.size),markerPlacement:t.markerPlacement};s.push(x)}function Ne(t,r){return{type:t.type,enable:!0,name:t.name,colorLocked:t.colorLocked,primitiveName:t.primitiveName,anchorPoint:t.anchorPoint,anchorPointUnits:t.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:t.rotateClockwise,rotation:0,size:t.size,billboardMode3D:t.billboardMode3D,depth3D:t.depth3D,frame:t.frame,markerGraphics:[r],scaleSymbolsProportionally:t.scaleSymbolsProportionally,respectFrame:t.respectFrame,clippingPath:t.clippingPath}}function rt(t){if(t&&t.indexOf("Level_")===0){const r=parseInt(t.substr(6),10);if(r!==NaN)return r}return 0}function Y(t){if(!t||t.length===0)return null;const r=new Pt(t).toRgba();return{r:r[0],g:r[1],b:r[2],a:r[3]}}function p(t,r,e,o,i,n,s){const l=r[t];if(l){const c=l[e];if(typeof c=="string"||typeof c=="number"||c instanceof Array)return n?n.call(null,c,s):c;if(c!=null&&c instanceof ht)return(f,m,y)=>{let a=vt(c,f,{$view:y},o.geometryType,m);return a!==null&&n&&(a=n.call(null,a,s)),a!==null?a:i}}return i}function j(t,r,e,o){for(const i of e)if(i.valueExpressionInfo){const n=r[i.primitiveName]&&r[i.primitiveName][i.propertyName];n instanceof ht&&(i.fn=(s,l,c)=>vt(n,s,{$view:c},o.geometryType,l))}return(i,n,s)=>{for(const l of e)l.fn&&(l.value=l.fn(i,n,s));return O(t+B.buildOverrideKey(e)).toString()}}function Re(t,r){if(!r||r.length===0)return t;const e=JSON.parse(JSON.stringify(t));return B.applyOverrides(e,r),e}function J(t,r){let e=!1,o="";for(const i of t)i.primitiveName===r&&(i.value!==void 0?o+=`-${i.primitiveName}-${i.propertyName}-${JSON.stringify(i.value)}`:i.valueExpressionInfo&&(e=!0));return[e,o]}function kt(t,r,e){if(t&&r)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const o=t.symbolLayers;if(!o)return;for(const i of o)switch(i.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in i&&i.url&&e.push(r.fetchResource(i.url,null));break;case"CIMVectorMarker":{const n=i.markerGraphics;if(!n)continue;for(const s of n)if(s){const l=s.symbol;l&&kt(l,r,e)}}}}}}const ke=t=>t&&t.length===2&&t[0].enable&&t[1].enable&&t[0].type==="CIMSolidStroke"&&t[1].type==="CIMSolidFill"&&!t[0].effects&&!t[1].effects,Ce={marker:V.MARKER,fill:V.FILL,line:V.LINE,text:V.TEXT};class xe{constructor(r,e,o,i){const n={minScale:e?.minScale,maxScale:e?.maxScale},s=Oe(n);this.layers=r,this.data=e,this.hash=this._createHash()+s,this.rendererKey=o;const l={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:o};for(const c of r){const f=Ce[c.type];c.materialKey=Dt(f,l),c.maxVVSize=i,c.scaleInfo=n,c.templateHash+=s}}get type(){return"expanded-cim"}_createHash(){let r="";for(const e of this.layers)r+=e.templateHash;return r}}function Oe(t){return t.minScale||t.maxScale?t.minScale+"-"+t.maxScale:""}async function Me(t,r,e){if(!t.name)return Promise.reject(new Q("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(t.styleName&&t.styleName==="Esri2DPointSymbolsStyle")return Pe(t,e);try{return $e(await $t(t,r,e),t.name,r,e)}catch(o){return tt(o),null}}async function Pe(t,r){const e=wt.replace(/\{SymbolName\}/gi,t.name);try{const o=await gt(e,r);return dt(o.data)}catch(o){return tt(o),null}}async function $e(t,r,e,o){const i=t.data,n={portal:e&&e.portal||Lt.getDefault(),url:It(t.baseUrl),origin:"portal-item"},s=i.items.find(c=>c.name===r);if(!s)throw new Q("symbolstyleutils:symbol-name-not-found",`The symbol name '${r}' could not be found`,{symbolName:r});let l=zt(Xt(s,"cimRef"),n);Ut()&&(l=Vt(l));try{const c=await gt(l,o);return dt(c.data)}catch(c){return tt(c),null}}const yt=async(t,r,e)=>new xe(await le(t.data,r,e),t.data,t.rendererKey,t.maxVVSize),Ye=async(t,r,e,o)=>{if(!t)return null;if(t.type==="cim")return yt(t,r,e);if(t.type==="web-style"){const i={type:"cim",data:await Me(t,null,o),rendererKey:t.rendererKey,maxVVSize:t.maxVVSize};return yt(i,r,e)}return t};function Fe(t){if(!t)return null;const{type:r,cim:e,url:o,materialHash:i}=t,n={cim:e,type:r,mosaicHash:i,url:o,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(r){case"marker":n.size=t.size,n.path=t.path;break;case"line":n.dashTemplate=t.dashTemplate;break;case"text":n.text=t.text,n.fontName=t.fontName}return n}export{ct as f,Fe as i,Ye as l,Je as m,Re as q,Bt as r,vt as s};
