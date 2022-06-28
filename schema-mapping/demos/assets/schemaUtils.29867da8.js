import{bw as xe,bb as _,ck as ve,A as K,av as S,aj as j,cd as Z,e as D,d as Se,cl as we,i as ze,cm as oe,cn as ee,l as ue,a as H,f as X,co as k,s as g,r as G,cp as Ve,ce as $e,a9 as Fe}from"./main.e3a581a7.js";import{A,E as $,q as Ee}from"./Utils.7a075ce5.js";import{F as Me,L as F}from"./MaterialKey.aa7ba002.js";import{o as Ie}from"./visualVariablesUtils.3543203a.js";import{n as Te,A as Oe,d as ke,e as Re,O as Ne,t as Ce}from"./CIMSymbolHelper.29bd0fb0.js";import{b as Le,s as _e,k as Ae}from"./definitions.21e97413.js";import{l as Pe}from"./cimSymbolUtils.5b5fca36.js";import{x as Y}from"./MD5.f9440c6b.js";import{e as Ke}from"./util.44a49e70.js";function qe(e){if(!e)return A.NONE;let t=0;for(const i of e)if(i.type==="size"){const n=Ie(i);t|=n,i.target==="outline"&&(t|=n<<4)}else i.type==="color"?t|=A.COLOR:i.type==="opacity"?t|=A.OPACITY:i.type==="rotation"&&(t|=A.ROTATION);return t}const Lt=512,_t=50;function At(e,t){if(!t.isWrappable)return null;const[i,n]=xe(t);return e[2]>n?[_([e[0],e[1],n,e[3]]),_([i,e[1],i+e[2]-n,e[3]])]:e[0]<i?[_([i,e[1],e[2],e[3]]),_([n-(i-e[0]),e[1],n,e[3]])]:null}function Pt(e){return e==="text"||e==="esriTS"}function Kt(e){return e==="simple-marker"||e==="picture-marker"||e==="esriSMS"||e==="esriPMS"}function qt(e){switch(K(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function Be(e,t,i){var n,s,l;if(!i||i.glyphMosaicItems.length===0)return e;const a=Te(t.text)[1],r=i.glyphMosaicItems,o=Oe(r,a,{scale:S(t.font.size)/Le,angle:(n=t.angle)!=null?n:0,xOffset:(s=t.xoffset)!=null?s:0,yOffset:(l=t.yoffset)!=null?l:0,hAlign:ke(t.horizontalAlignment||"center"),vAlign:Re(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:_e*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=S(o.x-o.halfWidth),e[1]=S(o.y-o.halfHeight),e[2]=S(o.width),e[3]=S(o.height),e}function Bt(e){if(!e)return null;const{xmin:t,ymin:i,xmax:n,ymax:s,spatialReference:l}=e;return new ve({rings:[[[t,i],[t,s],[n,s],[n,i],[t,i]]],spatialReference:l})}const Je={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},De=.707;function ce(e){if(!("visualVariables"in e)||!e.hasVisualVariables("size"))return 0;const t=e.getVisualVariablesForType("size");if(!t[0])return 0;const i=t[0];if(i.target==="outline")return 0;if(i.transformationType==="stops")return i.stops.map(n=>n.size).reduce(q,0);if(i.transformationType==="clamped-linear"){let n=-1/0,s=-1/0;return n=typeof i.maxSize=="number"?i.maxSize:i.maxSize.stops.map(l=>l.size).reduce(q,0),s=typeof i.minSize=="number"?i.minSize:i.minSize.stops.map(l=>l.size).reduce(q,0),Math.max(n,s)}return i.transformationType==="real-world-size"?30:void 0}function Ue(e){return e.type in Je}async function Jt(e,t,i,n,s,l){if(!e||l&&l.type==="cluster")return 0;if(e.type==="heatmap")return Math.round(3*e.blurRadius);if(e.type==="dot-density")return 0;if(e.type==="dictionary")return t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?100:200;const a=e.getSymbols(),r=ce(e),o=[];for(const c of a)o.push(je(c,r,i,t,n,s));const u=await Promise.all(o);return S(u.reduce(q,0))}const R=[0,0,0,0];function w(e,t){return e??t}function Ge(e,t){return e.outline==null?t:w(e.outline.width,t)}const te={sdf:!0,code:99,metrics:Ae.metrics,rect:new Ce(0,0,24,24),page:0,textureBinding:2};function We(e){const t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[te]};const i=[];for(let n=0;n<t;n++)i.push({...te,code:e.text.charCodeAt(n)});return{glyphMosaicItems:i}}async function de(e,t,i,n,s,l){if(e.type==="simple-marker"){const a=Math.max(w(e.size,12),t);return ie(e)+a*De}if(e.type==="picture-marker"){const a=Math.max(w(e.height,12),t),r=w(e.width,12)*(a/w(e.height,12))/2,o=a/2;return ie(e)+Math.sqrt(r*r+o*o)}if(e.type==="text"){const a=We(e);Be(R,e.toJSON(),a);const r=Math.abs(R[0]),o=Math.abs(R[1]),u=R[2],c=R[3];return Math.max(r,o)+Math.max(u,c)}if(e.type==="simple-line"){const a=e,r=Math.max(w(a.width,.75),t)/2;return a.marker?Math.max(6*a.width,2*t):r}if(e.type==="simple-fill"||e.type==="picture-fill")return Math.max(Ge(e,0),t)/2;if(e.type==="cim"){const a={geometryType:n,fields:s,spatialReference:l},r={type:"cim",rendererKey:0,data:e.data,maxVVSize:t};await Pe(r,a,i);const o=Ne.getEnvelope(e.data,i);return o?Math.sqrt(o.width*o.width+o.height*o.height):0}return e.type==="web-style"?de(await e.fetchCIMSymbol(),t,i,n,s,l):0}async function je(e,t,i,n,s,l){return Ue(e)?Math.min(await de(e,t,i,n,s,l),75):0}function ie(e){const t=w(e.xoffset,0),i=w(e.yoffset,0);return Math.sqrt(t*t+i*i)}function q(e,t){return Math.max(e,t)}const B=8,fe=B-2,He=j.getLogger("esri.renderers.visualVariables.support.utils"),Dt=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),i=t.visualVariables.map(n=>pe(n)?me(n):n);return t.visualVariables=i,t};function Xe(e){return e.map(t=>pe(t)?me(t.clone()):t)}function pe(e){return(e.type==="size"||e.type==="color"||e.type==="opacity")&&e.stops!=null}function me(e){return e.stops=Ze(e.type,e.stops),e}function I(e,t,i){return(1-i)*e+i*t}function Ye(e,t){const[i,...n]=t,s=n.pop(),l=n[0].value,a=n[n.length-1].value,r=(a-l)/fe,o=[];for(let u=l;u<a;u+=r){let c=0;for(;u>=n[c].value;)c++;const p=n[c],d=t[c-1],m=u-d.value,b=p.value===d.value?1:m/(p.value-d.value);if(e==="color"){const h=n[c],y=t[c-1],f=h.color.clone();f.r=I(y.color.r,f.r,b),f.g=I(y.color.g,f.g,b),f.b=I(y.color.b,f.b,b),f.a=I(y.color.a,f.a,b),o.push({value:u,color:f,label:h.label})}else if(e==="size"){const h=n[c],y=t[c-1],f=Z(h.size),L=I(Z(y.size),f,b);o.push({value:u,size:L,label:h.label})}else{const h=n[c],y=I(t[c-1].opacity,h.opacity,b);o.push({value:u,opacity:y,label:h.label})}}return[i,...o,s]}function Qe(e){const[t,...i]=e,n=i.pop();for(;i.length>fe;){let s=0,l=0;for(let a=1;a<i.length;a++){const r=i[a-1],o=i[a],u=Math.abs(o.value-r.value);u>l&&(l=u,s=a)}i.splice(s,1)}return[t,...i,n]}function Ze(e,t){return t.length<=B?t:(He.warn(`Found ${t.length} Visual Variable stops, but MapView only supports ${B}. Displayed stops will be simplified.`),t.length>2*B?Ye(e,t):Qe(t))}var W;let N=W=class extends oe{writeLevels(e,t,i){for(const n in e){const s=this.levels[n];return void(t.stops=s)}}clone(){return new W({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:ee(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:ee(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:ue(this.levels)})}};D([Se()],N.prototype,"levels",void 0),D([we("levels")],N.prototype,"writeLevels",null),N=W=D([ze("esri.views.2d.engine.LevelDependentSizeVariable")],N);const ye=j.getLogger("esri.views.2d.layers.support.clusterUtils");H.add("esri-cluster-arcade-enabled",!0);const et=H("esri-cluster-arcade-enabled"),tt=(e,t,i,n)=>{const s=t.clone();if(!lt(s))return s;if(i.fields)for(const l of i.fields)at(e,l);if("visualVariables"in s){const l=(s.visualVariables||[]).filter(r=>r.valueExpression!=="$view.scale"),a=it(l);l.forEach(r=>{r.type==="rotation"?r.field?r.field=T(e,r.field,"avg_angle"):r.valueExpression&&(r.field=P(e,r.valueExpression,"avg_angle"),r.valueExpression=null):r.normalizationField?(r.field=T(e,r.field,"norm",r.normalizationField),r.normalizationField=null):r.field?r.field=T(e,r.field,"avg"):(r.field=P(e,r.valueExpression,"avg"),r.valueExpression=null)}),X(a)&&!nt(l)&&(l.push(st(i,n)),s.dynamicClusterSize=!0),s.visualVariables=l}switch(s.type){case"simple":break;case"unique-value":s.field?s.field=T(e,s.field,"mode"):s.valueExpression&&(s.field=P(e,s.valueExpression,"mode"),s.valueExpression=null);break;case"class-breaks":s.normalizationField?(s.field=T(e,s.field,"norm",s.normalizationField),s.normalizationField=null):s.field?s.field=T(e,s.field,"avg"):(s.field=P(e,s.valueExpression,"avg"),s.valueExpression=null)}return s},it=e=>{for(const t of e)if(t.type==="size")return t;return null},nt=e=>{for(const t of e)if(t.field==="cluster_count")return!0;return!1},st=(e,t)=>{const i=[new k({value:0,size:0}),new k({value:1})];if(X(t))return new oe({field:"cluster_count",stops:[...i,new k({value:2,size:0})]});const n=Object.keys(t).reduce((s,l)=>({...s,[l]:[...i,new k({value:Math.max(2,t[l].minValue),size:e.clusterMinSize}),new k({value:Math.max(3,t[l].maxValue),size:e.clusterMaxSize})]}),{});return new N({field:"cluster_count",levels:n})},lt=e=>{const t=i=>ye.error(new g("Unsupported-renderer",i,{renderer:e}));if(e.type==="unique-value"){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if(e.type==="class-breaks"){if(e.normalizationField){const i=e.normalizationType;if(i!=="field")return t(`FeatureReductionCluster does not support a normalizationType of ${i}`),!1}}else if(e.type!=="simple")return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!et){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some(i=>!(!("valueExpression"in i)||!i.valueExpression)))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function rt(e,t,i){switch(e){case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"norm":{const n=i,s="field",l=t.toLowerCase()+",norm:"+s+","+n.toLowerCase();return"cluster_avg_"+Y(l)}}}function at(e,t){const{name:i,outStatistic:n}=t,{onStatisticField:s,onStatisticValueExpression:l,statisticType:a}=n;if(l){const r=Y(l.toLowerCase());e.push({name:i,outStatistic:{onStatisticField:r,onStatisticValueExpression:l,statisticType:a}})}else s?e.push({name:i,outStatistic:{onStatisticField:s,statisticType:a}}):ye.error(new g("mapview-unsupported-field","Unable to handle field",{field:t}))}function P(e,t,i){const n=Y(t),s=i==="mode"?`cluster_type_${n}`:`cluster_avg_${n}`;return e.some(l=>l.name===s)||e.push({name:s,outStatistic:{onStatisticField:n,onStatisticValueExpression:t,statisticType:i}}),s}function T(e,t,i,n){if(t==="cluster_count"||e.some(l=>l.name===t))return t;const s=rt(i,t,n);return e.some(l=>l.name===s)||(i==="norm"?e.push({name:s,outStatistic:{onStatisticField:t,onStatisticNormalizationField:n,statisticType:i}}):e.push({name:s,outStatistic:{onStatisticField:t,statisticType:i}})),s}const O=j.getLogger("esri.views.2d.layers.features.schemaUtils"),x="ValidationError",ot={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function E(e){return Me(e)}function M(e){if(e.type==="line-marker"){var t;return{type:"line-marker",color:(t=e.color)==null?void 0:t.toJSON(),placement:e.placement,style:e.style}}return Fe(e.toJSON()).toJSON()}function C(e){let t=0,i=0,n=!1,s=!0,l=!0;if(G(e)&&(i=ce(e),"visualVariables"in e&&(t=qe(e.visualVariables||[]),n=e.type==="dot-density"),!n)){const a=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&a.push(e.backgroundFillSymbol);for(const r of a)if(r.type==="cim"&&(s=!1),r.type==="simple-fill"||r.type==="picture-fill"){const o=r.outline;o&&o.style!=="none"&&o.style!=="solid"&&(l=!1);const u=o&&o.style!=="none"&&o.style!=="solid",c=r.type==="simple-fill"&&r.style!=="none"&&r.style!=="solid";(r.type==="picture-fill"||c||u)&&(s=!1)}}return n&&(l=!1),{vvFlags:t,maxVVSize:i,supportsOutlineFills:l,stride:{fill:n?"dot-density":s?"simple":"default"}}}function Q(e,t,i){return V(e,C(t),i)}function V(e,t,i){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return ut(e,t,i);case"simple-marker":case"picture-marker":return dt(e,t,i);case"simple-line":return ct(e,t,i);case"text":return ft(e,t,i);case"label":return mt(e,t,i);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...M(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function ut(e,t,i){const n=t.supportsOutlineFills,s=F($.FILL,{...t,isOutlinedFill:n}),l=i?E(s):s,a=e.clone(),r=a.outline;t.supportsOutlineFills||(a.outline=null);const o={materialKey:l,hash:a.hash(),isOutlinedFill:!!t.supportsOutlineFills,...M(a)};if(t.supportsOutlineFills)return o;const u=[];if(u.push(o),r){const c=F($.LINE,{...t,isOutline:!0}),p={materialKey:i?E(c):c,hash:r.hash(),...M(r)};u.push(p)}return{type:"composite-symbol",layers:u,hash:u.reduce((c,p)=>p.hash+c,"")}}function ct(e,t,i){const n=F($.LINE,t),s=i?E(n):n,l=e.clone(),a=l.marker;l.marker=null;const r=[];if(r.push({materialKey:s,hash:l.hash(),...M(l)}),a){var o;const u=F($.MARKER,t),c=i?E(u):u;a.color=(o=a.color)!=null?o:l.color,r.push({materialKey:c,hash:a.hash(),lineWidth:l.width,...M(a)})}return{type:"composite-symbol",layers:r,hash:r.reduce((u,c)=>c.hash+u,"")}}function dt(e,t,i){const n=F($.MARKER,t),s=i?E(n):n,l=M(e);return{materialKey:s,hash:e.hash(),...l,angle:e.angle,maxVVSize:t.maxVVSize}}function ft(e,t,i){const n=F($.TEXT,t),s=i?E(n):n,l=M(e);return{materialKey:s,hash:e.hash(),...l,angle:e.angle,maxVVSize:t.maxVVSize}}function pt(e,t){const i=e.labelPlacement,n=ot[t];if(!e.symbol)return O.warn("No ILabelClass symbol specified."),!0;if(!n)return O.error(new g("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!n.some(s=>s===i)){const s=n[0];i&&O.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${s}`),e.labelPlacement=s}return!1}function ne(e,t){const i=ue(e);return i.some(n=>pt(n,t))?[]:i}function mt(e,t,i){const n=e.toJSON(),s=F($.LABEL,{...t,placement:n.labelPlacement});return{materialKey:i?E(s):s,hash:e.hash(),...n,labelPlacement:n.labelPlacement}}function yt(e){return H("esri-2d-update-debug")&&console.debug("Created new schema",se(e,!0)),se(e)}function se(e,t=!1){try{var i,n;const s=bt(e,t),l={};return s.map(a=>gt(l,e,a)),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map(a=>a.toJSON()),gdbVersion:e.gdbVersion,historicMoment:(i=e.historicMoment)==null?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:(n=e.timeExtent)==null?void 0:n.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:s,targets:l}}catch(s){if(s.fieldName===x)return O.error(s),null;throw s}}function gt(e,t,i){switch(i.target){case"feature":return void re(e,le(t),i);case"aggregate":{if(!("featureReduction"in t))return;const n=t.featureReduction;if(n.type==="selection")throw new g(x,"Mapview does not support `selection` reduction type",n);return re(e,le(t),i),void ht(e,n,i)}}}function ge(e,t){for(const i in t){const n=t[i];if(n.target!==e.name)continue;const s=e.attributes[i];s?(s.context.mesh=s.context.mesh||n.context.mesh,s.context.storage=s.context.storage||n.context.storage):e.attributes[i]=n}return e}function le(e){var t,i,n,s,l;return[(t=(i=K(e.filter))==null?void 0:i.toJSON())!=null?t:null,(n=(s=K((l=K(e.featureEffect))==null?void 0:l.filter))==null?void 0:s.toJSON())!=null?n:null]}function re(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),ge(e.feature,i.attributes.fields),e}function ht(e,t,i){return e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:S(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(S(t.clusterMaxSize)/64),fields:i.aggregateFields}}),ge(e.aggregate,i.attributes.fields),e}function v(e,t){return t.field?z(e,{...t,type:"field",field:t.field}):t.valueExpression?z(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function z(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const n=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:n}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const n=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:n}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return t.target==="aggregate"&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function bt(e,t=!1){const i=new Array;let n=0;return i.push(xt(e,n++,t)),i}function U(e,t,i,n,s,l=!1){const a=z(t,{type:"label-expression",target:n,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:r}=a;return{...Q(i,e,l),fieldIndex:r,target:n,index:s}}function xt(e,t,i=!1){const n={indexCount:0,fields:{}},s="featureReduction"in e&&e.featureReduction,l=s?"aggregate":"feature";if("sublayers"in e){const a={type:"subtype",subtypeField:e.subtypeField,renderers:{},stride:{fill:"default"}},r={type:"subtype",mapping:{},target:"feature"},o={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:n,storage:r,mesh:{matcher:a,aggregateMatcher:null,labels:o,sortKey:null}},c=new Set;let p=0;for(const{renderer:d,subtypeCode:m,labelingInfo:b,labelsVisible:h}of e.sublayers){const y=J(n,l,d,i),f=ae(n,l,d),L=h&&b;if("visualVariables"in d&&d.visualVariables&&d.visualVariables.length)throw new g(x,"Visual variables are currently not supported for subtype layers");if(y.type==="dictionary")throw new g(x,"Dictionary renderer is not supported in subtype layers");if(y.type==="subtype")throw new g(x,"Nested subtype renderers is not supported");if(G(f)&&f.type==="subtype")throw new g(x,"Nested subtype storage is not supported");if(G(f)&&f.type==="dot-density")throw new g(x,"Dot density attributes are not supported in subtype layers");if(c.has(m))throw new g(x,"Subtype codes for sublayers must be unique");c.add(m),a.renderers[m]=y,r.mapping[m]=f,L&&(o.classes[m]=L.map(be=>U(d,n,be,"feature",p++,i)))}return u}if(e.renderer.type==="heatmap"){const{blurRadius:a,fieldOffset:r,field:o}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:n,target:l,storage:null,mesh:{blurRadius:a,fieldOffset:r,field:v(n,{target:l,field:o,resultType:"numeric"}).field}}}{const a=[],r=l==="aggregate"?tt(a,e.renderer,s,null):e.renderer;he(n,a);const o=J(n,l,r,i);let u=null;const c=ae(n,l,r),p=Ke(e.geometryType);let d=e.labelsVisible&&e.labelingInfo||[],m=[];if(s){if(s.type==="selection")throw new g(x,"Mapview does not support `selection` reduction type",s);if(s.symbol){const f=new Ve({symbol:s.symbol,visualVariables:"visualVariables"in r?r.visualVariables:null});u=J(n,l,f,i)}m=s&&s.labelsVisible&&s.labelingInfo||[]}d=ne(d,p),m=ne(m,p);let b=0;const h=[...d.map(f=>U(r,n,f,"feature",b++,i)),...m.map(f=>U(r,n,f,"aggregate",b++,i))],y=vt(n,e.orderBy);return{type:"symbol",target:l,attributes:n,aggregateFields:a,storage:c,mesh:{matcher:o,labels:{type:"simple",classes:h},aggregateMatcher:u,sortKey:y}}}}function vt(e,t){if(X(t)||!t.length)return null;t.length>1&&O.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const i=t[0],n=i.order==="ascending"?"asc":"desc";return i.field?{field:i.field,order:n}:i.valueExpression?{fieldIndex:z(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(O.error(new g(x,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}function he(e,t){const i={mesh:!0,storage:!0};for(const n of t){const{name:s,outStatistic:l}=n,{statisticType:a,onStatisticField:r}=l;let o=null,u=null,c=null;const p="numeric",d="feature";"onStatisticValueExpression"in l?u=z(e,{type:"expression",target:d,valueExpression:l.onStatisticValueExpression,resultType:p}).fieldIndex:"onStatisticNormalizationField"in l?(o=z(e,{type:"field",target:d,field:r,resultType:p}).field,c=l.onStatisticNormalizationField):o=z(e,{type:"field",target:d,field:r,resultType:p}).field,z(e,{type:"statistic",target:"aggregate",name:s,context:i,inField:o,inNormalizationField:c,inFieldIndex:u,statisticType:a})}}function ae(e,t,i){switch(i.type){case"dot-density":return St(e,t,i.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return wt(e,t,i.visualVariables);case"heatmap":return null}}function St(e,t,i){return!i||!i.length?{type:"dot-density",mapping:[],target:t}:{type:"dot-density",mapping:i.map((n,s)=>{const{field:l,fieldIndex:a}=v(e,{valueExpression:n.valueExpression,field:n.field,resultType:"numeric",target:t});return{binding:s,field:l,fieldIndex:a}}),target:t}}function wt(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const n={storage:!0},s="numeric";return{type:"visual-variable",mapping:Xe(i).map(l=>{var a;const r=Ee(l.type),{field:o,fieldIndex:u}=v(e,{target:t,valueExpression:l.valueExpression,field:l.field,context:n,resultType:s});switch(l.type){case"size":return l.valueExpression==="$view.scale"?null:{type:"size",binding:r,field:o,fieldIndex:u,normalizationField:v(e,{target:t,field:l.normalizationField,context:n,resultType:s}).field,valueRepresentation:(a=l.valueRepresentation)!=null?a:null};case"color":return{type:"color",binding:r,field:o,fieldIndex:u,normalizationField:v(e,{target:t,field:l.normalizationField,context:n,resultType:s}).field};case"opacity":return{type:"opacity",binding:r,field:o,fieldIndex:u,normalizationField:v(e,{target:t,field:l.normalizationField,context:n,resultType:s}).field};case"rotation":return{type:"rotation",binding:r,field:o,fieldIndex:u}}}).filter(l=>l),target:t}}function J(e,t,i,n=!1){const s=$e(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return zt(s,i,n);case"class-breaks":return Vt(s,t,i,n);case"unique-value":return $t(s,t,i,n);case"dictionary":return Ft(s,i,n)}}function zt(e,t,i=!1){const n=t.getSymbols(),s=n.length?n[0]:null,{stride:l}=C(t);return{type:"simple",symbol:Q(s,t,i),stride:l}}function Vt(e,t,i,n=!1){const s={mesh:!0,use:"renderer.field"},l=i.backgroundFillSymbol,{field:a,fieldIndex:r}=v(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:s}),o=i.normalizationType,u=o==="log"?"esriNormalizeByLog":o==="percent-of-total"?"esriNormalizeByPercentOfTotal":o==="field"?"esriNormalizeByField":null,c=C(i),p=i.classBreakInfos.map(d=>({symbol:V(d.symbol,c,n),min:d.minValue,max:d.maxValue})).sort((d,m)=>d.min-m.min);return{type:"interval",attributes:e.fields,field:a,fieldIndex:r,backgroundFillSymbol:V(l,c,n),defaultSymbol:V(i.defaultSymbol,c,n),intervals:p,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:u,isMaxInclusive:i.isMaxInclusive,stride:c.stride}}function $t(e,t,i,n=!1){const s=[],l=i.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&typeof i.field!="string")throw new g(x,"Expected renderer.field to be a string",i);const{field:r,fieldIndex:o}=v(e,{...a,field:i.field,valueExpression:i.valueExpression}),u=C(i);for(const c of i.uniqueValueInfos)s.push({value:""+c.value,symbol:V(c.symbol,u,n)});return{type:"map",attributes:e.fields,field:r,fieldIndex:o,field2:v(e,{...a,field:i.field2}).field,field3:v(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:V(l,u),defaultSymbol:V(i.defaultSymbol,u),map:s,stride:u.stride}}function Ft(e,t,i=!1){return{type:"dictionary",renderer:t.toJSON(),stride:{fill:"default"}}}var Ut=Object.freeze(Object.defineProperty({__proto__:null,addAggregateFields:he,createMatcherSchema:J,createSchema:yt,createSymbolSchema:Q,createSymbolSchemaOptions:C},Symbol.toStringTag,{value:"Module"}));export{yt as B,J as _,Jt as a,it as b,Lt as c,Bt as d,tt as e,st as f,At as g,Kt as h,Ut as i,lt as m,Pt as p,Dt as s,_t as u,qt as y,Q as z};
