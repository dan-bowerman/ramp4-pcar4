import{e as p,d as y,p as le,M as we,i as V,d5 as $e,aQ as Pe,N as k,o as J,d6 as Ve,d7 as ue,cP as ie,v as Oe,cQ as E,C as j,_ as Te,W as Je,aq as ce,d8 as Ne,bX as N,d9 as je,da as Ee,db as Re,r as U,a1 as q,dc as Fe,ck as ke,dd as Ae,de as _e,aT as Ce,K as Ue,df as qe,a0 as pe,R as ze,av as B,s as Be,cR as Ke}from"./main.13425aba.js";import{a as xe}from"./GPMessage.865a0764.js";let M=class extends Pe{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};p([y({type:le})],M.prototype,"outSpatialReference",void 0),p([y({type:we})],M.prototype,"processExtent",void 0),p([y({type:le})],M.prototype,"processSpatialReference",void 0),p([y({nonNullable:!0})],M.prototype,"returnFeatureCollection",void 0),p([y({nonNullable:!0})],M.prototype,"returnM",void 0),p([y({nonNullable:!0})],M.prototype,"returnZ",void 0),M=p([V("esri/rest/geoprocessor/GPOptions")],M),M.from=$e(M);const oe=M;let G=class extends k{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};p([y({type:we})],G.prototype,"extent",void 0),p([y()],G.prototype,"height",void 0),p([y()],G.prototype,"href",void 0),p([y()],G.prototype,"opacity",void 0),p([y()],G.prototype,"rotation",void 0),p([y()],G.prototype,"scale",void 0),p([y()],G.prototype,"visible",void 0),p([y()],G.prototype,"width",void 0),G=p([V("esri.layer.support.MapImage")],G);const ye=G;let A=class extends k{constructor(e){super(e),this.itemId=null,this.url=null}};p([y({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],A.prototype,"itemId",void 0),p([y({type:String,json:{write:!0}})],A.prototype,"url",void 0),A=p([V("esri.rest.support.DataFile")],A);const re=A,de=new J({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let _=class extends k{constructor(e){super(e),this.distance=0,this.units=null}};p([y({json:{write:!0}})],_.prototype,"distance",void 0),p([y({json:{read:de.read,write:de.write}})],_.prototype,"units",void 0),_=p([V("esri/rest/support/LinearUnit")],_);const fe=_,me=new J({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let C=class extends k{constructor(e){super(e),this.dataType=null,this.value=null}};p([y({json:{read:me.read,write:me.write}})],C.prototype,"dataType",void 0),p([y()],C.prototype,"value",void 0),C=p([V("esri.rest.support.ParameterValue")],C);const We=C;let R=class extends k{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};p([y()],R.prototype,"format",void 0),p([y({json:{read:{source:"itemID"},write:{target:"itemID"}}})],R.prototype,"itemId",void 0),p([y()],R.prototype,"url",void 0),R=p([V("esri/rest/support/RasterData")],R);const he=R;async function De(e,a,t,r,n){const i={},o={},u=[];return Ze(r,u,i),Oe(u).then(s=>{const{outSpatialReference:l,processExtent:d,processSpatialReference:f,returnFeatureCollection:m,returnM:w,returnZ:b}=t,{path:g}=E(e);for(const x in i){const D=i[x];o[x]=s.slice(D[0],D[1])}const c=l?l.wkid||l:null,S=f?f.wkid||f:null,P=a==="execute"?{returnFeatureCollection:m||void 0,returnM:w||void 0,returnZ:b||void 0}:null,h=Q({...d?{context:{extent:d,outSR:c,processSR:S}}:{"env:outSR":c,"env:processSR":S},...r,...P,f:"json"},null,o),v={...n,query:h};return j(`${g}/${a}`,v)})}function Ze(e,a,t){for(const r in e){const n=e[r];if(n&&typeof n=="object"&&n instanceof ie){const{features:i}=n;t[r]=[a.length,a.length+i.length],i.forEach(o=>{a.push(o.geometry)})}}}function ne(e){const a=e.dataType,t=We.fromJSON(e);switch(a){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return t;case"GPDate":t.value=new Date(t.value);break;case"GPDataFile":t.value=re.fromJSON(t.value);break;case"GPLinearUnit":t.value=fe.fromJSON(t.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const r=e.value.url;t.value=r?re.fromJSON(t.value):ie.fromJSON(t.value);break}case"GPRasterData":case"GPRasterDataLayer":{const r=e.value.mapImage;t.value=r?ye.fromJSON(r):he.fromJSON(t.value);break}case"GPField":t.value=ue.fromJSON(t.value);break;case"GPMultiValue:GPDate":{const r=t.value;t.value=r.map(n=>new Date(n));break}case"GPMultiValue:GPDataFile":t.value=t.value.map(r=>re.fromJSON(r));break;case"GPMultiValue:GPLinearUnit":t.value=t.value.map(r=>fe.fromJSON(r));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":t.value=t.value.map(r=>ie.fromJSON(r));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":t.value=t.value.map(r=>r?ye.fromJSON(r):he.fromJSON(t.value));break;case"GPMultiValue:GPField":t.value=t.value.map(r=>ue.fromJSON(r))}return t}function Q(e,a,t){for(const r in e){const n=e[r];Array.isArray(n)?e[r]=JSON.stringify(n.map(i=>Q({item:i},!0).item)):n instanceof Date&&(e[r]=n.getTime())}return Ve(e,a,t)}async function Qe(e,a,t,r){return t=oe.from(t||{}),De(e,"execute",t,a,r).then(n=>{const i=n.data.results||[],o=n.data.messages||[];return{results:i.map(ne),messages:o.map(u=>xe.fromJSON(u))}})}var K;const Ye=new J({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let T=K=class extends k{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:a,sourceUrl:t}=this,{path:r}=E(t),n={...this.requestOptions,...e,query:{f:"json"}};return this._clearTimer(),j(`${r}/jobs/${a}/cancel`,n).then(i=>{const o=K.fromJSON(i.data);return this.messages=o.messages,this.jobStatus=o.jobStatus,this})}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:a}=E(this.sourceUrl),t={...this.requestOptions,...e,query:{f:"json"}},r=`${a}/jobs/${this.jobId}`;return j(r,t).then(({data:n})=>{const i=K.fromJSON(n);return this.messages=i.messages,this.jobStatus=i.jobStatus,this})}fetchResultData(e,a,t){a=oe.from(a||{});const{returnFeatureCollection:r,returnM:n,returnZ:i,outSpatialReference:o}=a,{path:u}=E(this.sourceUrl),s=Q({returnFeatureCollection:r,returnM:n,returnZ:i,outSR:o,returnType:"data",f:"json"},null),l={...this.requestOptions,...t,query:s},d=`${u}/jobs/${this.jobId}/results/${e}`;return j(d,l).then(f=>ne(f.data))}fetchResultImage(e,a,t){const{path:r}=E(this.sourceUrl),n={...a.toJSON(),f:"json"},i=Q(n),o={...this.requestOptions,...t,query:i},u=`${r}/jobs/${this.jobId}/results/${e}`;return j(u,o).then(s=>ne(s.data))}async fetchResultMapImageLayer(){const{path:e}=E(this.sourceUrl),a=e.indexOf("/GPServer/"),t=`${e.substring(0,a)}/MapServer/jobs/${this.jobId}`;return new(await Te(()=>import("./main.13425aba.js").then(function(r){return r.m0}),["assets/main.13425aba.js","assets/main.6f812d7a.css"])).default({url:t})}async waitForJobCompletion(e={}){const{interval:a=1e3,signal:t,statusCallback:r}=e;return new Promise((n,i)=>{Je(t,()=>{this._clearTimer(),i(ce())}),this._clearTimer();const o=setInterval(()=>{this._timer||i(ce()),this.checkJobStatus(this.requestOptions).then(u=>{const{jobStatus:s}=u;switch(this.jobStatus=s,s){case"job-succeeded":this._clearTimer(),n(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":r&&r(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),i(this)}})},a);this._timer=o})}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};p([y()],T.prototype,"jobId",void 0),p([y({json:{read:Ye.read}})],T.prototype,"jobStatus",void 0),p([y({type:[xe]})],T.prototype,"messages",void 0),p([y()],T.prototype,"requestOptions",void 0),p([y({json:{write:!0}})],T.prototype,"sourceUrl",void 0),T=K=p([V("esri.rest.support.JobInfo")],T);const He=T;async function Xe(e,a,t,r){return t=oe.from(t||{}),De(e,"submitJob",t,a,r).then(n=>{const i=He.fromJSON(n.data);return i.sourceUrl=e,i})}const Y=new J({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"});Y.fromJSON.bind(Y);const et=Y.toJSON.bind(Y),H=new J({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"});H.fromJSON.bind(H);const tt=H.toJSON.bind(H),ae="simple-marker",rt="picture-marker",be="simple-line",at="simple-fill",it="shield-label-symbol",nt="text";function st(e,a){const{graphic:t,renderer:r,symbol:n}=a,i=n.type;if(i===nt||i===it||!("visualVariables"in r)||!r.visualVariables)return;const o=r.getVisualVariablesForType("size"),u=r.getVisualVariablesForType("color"),s=r.getVisualVariablesForType("opacity"),l=r.getVisualVariablesForType("rotation"),d=o[0],f=u[0],m=s[0],w=l[0];if(d){const b=i===ae?n.style:null,g=Ne(d,t,{shape:b});g!=null&&(i===ae?e.size=N(g):i===rt?(e.width=N(g),e.height=N(g)):i===be?e.width=N(g):e.outline&&(e.outline.width=N(g)))}if(f){const b=je(f,t);(b&&i===ae||i===be||i===at)&&(e.color=b?b.toJSON():void 0)}if(m){const b=Ee(m,t);b!=null&&e.color&&(e.color[3]=Math.round(255*b))}w&&(e.angle=-Re(r,t))}function ot(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function lt(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function ge(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function ut(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function ct(e,a=15){const t=e.canvas.width,r=e.canvas.height,n=e.getImageData(0,0,t,r).data;let i,o,u,s,l,d;e:for(o=r;o--;)for(i=t;i--;)if(n[4*(t*o+i)+3]>a){d=o;break e}if(!d)return null;e:for(i=t;i--;)for(o=d+1;o--;)if(n[4*(t*o+i)+3]>a){l=i;break e}e:for(i=0;i<=l;++i)for(o=d+1;o--;)if(n[4*(t*o+i)+3]>a){u=i;break e}e:for(o=0;o<=d;++o)for(i=u;i<=l;++i)if(n[4*(t*o+i)+3]>a){s=o;break e}return{x:u,y:s,width:l-u,height:d-s}}function pt(e,a){const t=e.allLayerViews.items;if(a===e.scale)return t.filter(n=>!n.suspended);const r=new Array;for(const n of t)gt(n.parent)&&!r.includes(n.parent)||!n.visible||a&&"isVisibleAtScale"in n&&!n.isVisibleAtScale(a)||r.push(n);return r}function yt(e){return e&&e.type==="bing-maps"}function Ie(e){return e&&"blendMode"in e&&"effect"in e}function dt(e){return e&&e.type==="csv"}function ft(e){return e&&e.type==="feature"}function mt(e){return e&&e.type==="geojson"}function ht(e){return e&&e.type==="graphics"}function bt(e){return e&&e.type==="group"}function gt(e){return e&&e.declaredClass==="esri.views.2d.layers.GroupLayerView2D"}function vt(e){return e&&e.type==="imagery"}function St(e){return e&&e.type==="imagery-tile"}function wt(e){return e&&e.type==="kml"}function Pt(e){return e&&e.type==="map-image"}function xt(e){return e&&e.type==="map-notes"}function Dt(e){return e&&e.type==="open-street-map"}function It(e){const a=e.layer;if(Ie(a)){const t=a.blendMode;if((!t||t==="normal")&&(a.effect||"featureEffect"in e&&e.featureEffect))return!0}return!1}function Mt(e){return e&&e.type==="stream"}function Gt(e){return e&&e.type==="tile"}function Lt(e){return e&&e.type==="vector-tile"}function $t(e){return e&&e.type==="web-tile"}function Vt(e){return e&&e.type==="wms"}function Ot(e){return e&&e.type==="wmts"}let I=class extends Pe{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};p([y()],I.prototype,"attributionVisible",void 0),p([y()],I.prototype,"exportOptions",void 0),p([y()],I.prototype,"forceFeatureAttributes",void 0),p([y()],I.prototype,"format",void 0),p([y()],I.prototype,"label",void 0),p([y()],I.prototype,"layout",void 0),p([y()],I.prototype,"layoutOptions",void 0),p([y()],I.prototype,"outScale",void 0),p([y()],I.prototype,"scalePreserved",void 0),p([y()],I.prototype,"showLabels",void 0),I=p([V("esri.rest.support.PrintTemplate")],I);const Tt=I,ve={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},Se=new J({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Jt=new J({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),X=new Map;async function Nt(e,a,t){const r=Ge(e);let n=X.get(r);return Promise.resolve().then(()=>n?{data:n.gpMetadata}:(n={gpServerUrl:r,is11xService:!1,legendLayerNameMap:{},legendLayers:[]},j(r,{query:{f:"json"}}))).then(i=>(n.gpMetadata=i.data,n.cimVersion=n.gpMetadata.cimVersion,n.is11xService=!!n.cimVersion,X.set(r,n),Me(a,n))).then(i=>{const o=er(n);let u;const s=l=>o==="sync"?l.results&&l.results[0]&&l.results[0].value:u.fetchResultData("Output_File",null,t).then(d=>d.value);return o==="async"?Xe(e,i,null,t).then(l=>(u=l,l.waitForJobCompletion({interval:a.updateDelay}).then(s))):Qe(e,i,null,t).then(s)})}async function Me(e,a){a=a||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};const t=e.template||new Tt;t.showLabels==null&&(t.showLabels=!0);const r=t.exportOptions;let n;const i=tt(t.layout);if(r&&(n={dpi:r.dpi},i.toLowerCase()==="map_only"||i==="")){const f=r.width,m=r.height;n.outputSize=[f,m]}const o=t.layoutOptions;let u;if(o){let f,m;o.scalebarUnit==="Miles"||o.scalebarUnit==="Kilometers"?(f="Kilometers",m="Miles"):o.scalebarUnit!=="Meters"&&o.scalebarUnit!=="Feet"||(f="Meters",m="Feet"),u={titleText:o.titleText,authorText:o.authorText,copyrightText:o.copyrightText,customTextElements:o.customTextElements,scaleBarOptions:{metricUnit:Se.toJSON(f),metricLabel:ve[f],nonMetricUnit:Se.toJSON(m),nonMetricLabel:ve[m]}}}let s=null;o!=null&&o.legendLayers&&(s=o.legendLayers.map(f=>{a.legendLayerNameMap[f.layerId]=f.title;const m={id:f.layerId};return f.subLayerIds&&(m.subLayerIds=f.subLayerIds),m}));const l=await jt(e,t,a);if(l.operationalLayers){const f=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),m=/[\u0600-\u06FF]/,w=g=>{const c=g.text,S=g.font,P=S&&S.family&&S.family.toLowerCase();c&&S&&(P==="arial"||P==="arial unicode ms")&&(S.family=f.test(c)?"Arial Unicode MS":"Arial",S.style!=="normal"&&m.test(c)&&(S.family="Arial Unicode MS"))},b=()=>{throw new Be("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};l.operationalLayers.forEach(g=>{var c,S,P;(c=g.featureCollection)!=null&&c.layers?g.featureCollection.layers.forEach(h=>{var v,x,D,L;if((v=h.layerDefinition)!=null&&(x=v.drawingInfo)!=null&&(D=x.renderer)!=null&&D.symbol){const O=h.layerDefinition.drawingInfo.renderer;O.symbol.type==="esriTS"?w(O.symbol):O.symbol.type!=="CIMSymbolReference"||a.is11xService||b()}(L=h.featureSet)!=null&&L.features&&h.featureSet.features.forEach(O=>{O.symbol&&(O.symbol.type==="esriTS"?w(O.symbol):O.symbol.type!=="CIMSymbolReference"||a.is11xService||b())})}):!a.is11xService&&(S=g.layerDefinition)!=null&&(P=S.drawingInfo)!=null&&P.renderer&&JSON.stringify(g.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&b()})}e.outSpatialReference&&(l.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(l,{exportOptions:n,layoutOptions:u||{}}),Object.assign(l.layoutOptions,{legendOptions:{operationalLayers:s??a.legendLayers.slice()}}),a.legendLayers.length=0,X.set(a.gpServerUrl,a);const d={Web_Map_as_JSON:JSON.stringify(l),Format:et(t.format),Layout_Template:i};return e.extraParameters&&Object.assign(d,e.extraParameters),d}async function jt(e,a,t){const r=e.view;let n=r.spatialReference;const i={operationalLayers:await Et(r,a,t)};let o=t.ssExtent||e.extent||r.extent;if(n&&n.isWrappable&&(o=o.clone()._normalize(!0),n=o.spatialReference),i.mapOptions={extent:o&&o.toJSON(),spatialReference:n&&n.toJSON(),showAttribution:a.attributionVisible},t.ssExtent=null,r.background&&(i.background=r.background.toJSON()),r.rotation&&(i.mapOptions.rotation=-r.rotation),a.scalePreserved&&(i.mapOptions.scale=a.outScale||r.scale),U(r.timeExtent)){const u=U(r.timeExtent.start)?r.timeExtent.start.getTime():null,s=U(r.timeExtent.end)?r.timeExtent.end.getTime():null;i.mapOptions.time=[u,s]}return i}function Ge(e){let a=e;const t=a.lastIndexOf("/GPServer/");return t>0&&(a=a.slice(0,t+9)),a}async function Et(e,a,t){const r=[],n={layerView:null,printTemplate:a,view:e};let i=0;a.scalePreserved&&(i=a.outScale||e.scale);const o=pt(e,i);for(const u of o){const s=u.layer;if(!s.loaded||bt(s))continue;let l;n.layerView=u,l=It(u)?await ee(s,n,t):yt(s)?Rt(s):dt(s)?await Ft(s,n,t):ft(s)?await kt(s,n,t):mt(s)?await At(s,n,t):ht(s)?await _t(s,n,t):vt(s)?Ct(s,t):St(s)?Ut(s,t):wt(s)?await qt(s,n,t):Pt(s)?zt(s,n,t):xt(s)?await Bt(n,t):Dt(s)?Kt():Mt(s)?await Wt(s,n,t):Gt(s)?Zt(s):Lt(s)?await Qt(s,n,t):$t(s)?Yt(s):Vt(s)?Ht(s):Ot(s)?Xt(s):await ee(s,n,t),l&&(Array.isArray(l)?r.push(...l):(l.id=s.id,l.title=t.legendLayerNameMap[s.id]||s.title,l.opacity=s.opacity,l.minScale=s.minScale||0,l.maxScale=s.maxScale||0,Ie(s)&&s.blendMode&&s.blendMode!=="normal"&&(l.blendMode=s.blendMode),r.push(l)))}if(i&&r.forEach(u=>{u.minScale=0,u.maxScale=0}),e.graphics&&e.graphics.length){const u=await $(null,e.graphics,a,t);u&&r.push(u)}return r}function Rt(e){return{culture:e.culture,key:e.key,type:"BingMaps"+(e.style==="aerial"?"Aerial":e.style==="hybrid"?"Hybrid":"Road")}}async function Ft(e,a,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const r=a.layerView,n=a.printTemplate;let i;return!t.is11xService||r.filter?$(e,await te(r),n,t):(i={type:"CSV"},e.write(i,{origin:"web-map"}),delete i.popupInfo,delete i.layerType,i.showLabels=n.showLabels&&e.labelsVisible,i)}async function $(e,a,t,r){let n;const i=lt(),o=ut(),u=ge(),s=ot(),l=ge();if(l.layerDefinition.name="textLayer",delete l.layerDefinition.drawingInfo,e){if(e.declaredClass==="esri.layers.FeatureLayer"||e.declaredClass==="esri.layers.StreamLayer"?i.layerDefinition.name=o.layerDefinition.name=u.layerDefinition.name=s.layerDefinition.name=r.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:e.declaredClass==="esri.layers.GraphicsLayer"&&(a=e.graphics.items),e.renderer){const h=e.renderer.toJSON();i.layerDefinition.drawingInfo.renderer=h,o.layerDefinition.drawingInfo.renderer=h,u.layerDefinition.drawingInfo.renderer=h,s.layerDefinition.drawingInfo.renderer=h}if(t.showLabels&&e.labelsVisible&&typeof e.write=="function"){var d,f;const h=(d=e.write({},{origin:"web-map"}).layerDefinition)==null||(f=d.drawingInfo)==null?void 0:f.labelingInfo;h&&(n=!0,i.layerDefinition.drawingInfo.labelingInfo=h,o.layerDefinition.drawingInfo.labelingInfo=h,u.layerDefinition.drawingInfo.labelingInfo=h,s.layerDefinition.drawingInfo.labelingInfo=h)}}let m;e!=null&&e.renderer||n||(delete i.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete u.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo);const w=e?.fieldsIndex,b=e?.renderer;if(w){const h=new Set;n&&await Fe(h,e),b&&typeof b.collectRequiredFields=="function"&&await b.collectRequiredFields(h,w),m=Array.from(h);const v=w.fields.map(x=>x.toJSON());i.layerDefinition.fields=v,o.layerDefinition.fields=v,u.layerDefinition.fields=v,s.layerDefinition.fields=v}const g=a&&a.length;let c;for(let h=0;h<g;h++){var S;const v=a[h]||a.getItemAt(h);if(v.visible===!1||!v.geometry||(c=v.toJSON(),c.hasOwnProperty("popupTemplate")&&delete c.popupTemplate,c.geometry&&c.geometry.z&&delete c.geometry.z,c.symbol&&c.symbol.outline&&c.symbol.outline.type==="esriCLS"&&!r.is11xService))continue;!r.is11xService&&c.symbol&&c.symbol.outline&&c.symbol.outline.color&&c.symbol.outline.color[3]&&(c.symbol.outline.color[3]=255);const x=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!c.symbol&&e&&e.renderer&&x&&!r.is11xService){const D=e.renderer,L=await D.getSymbolAsync(v);if(!L)continue;c.symbol=L.toJSON(),"hasVisualVariables"in D&&D.hasVisualVariables()&&st(c.symbol,{renderer:D,graphic:v,symbol:L})}if(c.symbol&&(c.symbol.angle||delete c.symbol.angle,Z(c.symbol)?c.symbol=await W(c.symbol,r):c.symbol.text&&delete c.attributes),(!t||!t.forceFeatureAttributes)&&(S=m)!=null&&S.length){const D={};m.forEach(L=>{c.attributes&&c.attributes.hasOwnProperty(L)&&(D[L]=c.attributes[L])}),c.attributes=D}v.geometry.type==="polygon"?i.featureSet.features.push(c):v.geometry.type==="polyline"?o.featureSet.features.push(c):v.geometry.type==="point"?c.symbol&&c.symbol.text?l.featureSet.features.push(c):u.featureSet.features.push(c):v.geometry.type==="multipoint"?s.featureSet.features.push(c):v.geometry.type==="extent"&&(c.geometry=ke.fromExtent(v.geometry).toJSON(),i.featureSet.features.push(c))}const P=[i,o,s,u,l].filter(h=>h.featureSet.features.length>0);for(const h of P){const v=h.featureSet.features.every(x=>x.symbol);!v||t&&t.forceFeatureAttributes||h.featureSet.features.forEach(x=>{delete x.attributes}),v&&delete h.layerDefinition.drawingInfo,h.layerDefinition.drawingInfo&&h.layerDefinition.drawingInfo.renderer&&await Le(h.layerDefinition.drawingInfo.renderer,r)}return P.length?{featureCollection:{layers:P},showLabels:n}:null}async function kt(e,a,t){var r,n;let i;const o=e.renderer,u=parseFloat(t.cimVersion);if(e.featureReduction&&(!t.is11xService||u<2.9)||o?.type==="dot-density"&&(!t.is11xService||u<2.6))return ee(e,a,t);e.legendEnabled&&t.legendLayers.push({id:e.id});const s=a.layerView,{printTemplate:l,view:d}=a,f=o&&("valueExpression"in o&&o.valueExpression||"hasVisualVariables"in o&&o.hasVisualVariables()),m=((r=e.source)==null?void 0:r.type)!=="feature-layer"&&((n=e.source)==null?void 0:n.type)!=="ogc-feature";if(!t.is11xService&&f||s.filter||m||!o||"field"in o&&o.field!=null&&(typeof o.field!="string"||!e.getField(o.field))){const c=await te(s);i=await $(e,c,l,t)}else{var w,b;if(i={id:(g=e.write()).id,title:g.title,opacity:g.opacity,minScale:g.minScale,maxScale:g.maxScale,url:g.url,layerType:g.layerType,customParameters:g.customParameters,layerDefinition:g.layerDefinition},i.showLabels=l.showLabels&&e.labelsVisible,z(i,e),(w=i.layerDefinition)!=null&&(b=w.drawingInfo)!=null&&b.renderer&&(delete i.layerDefinition.minScale,delete i.layerDefinition.maxScale,await Le(i.layerDefinition.drawingInfo.renderer,t),"visualVariables"in o&&o.visualVariables&&o.visualVariables[0])){const S=o.visualVariables[0];if(S.type==="size"&&S.maxSize&&typeof S.maxSize!="number"&&S.minSize&&typeof S.minSize!="number"){const P=Ae(S,d.scale);i.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=P.minSize,i.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=P.maxSize}}const c=_e(s);c&&(i.layerDefinition||(i.layerDefinition={}),i.layerDefinition.definitionExpression=i.layerDefinition.definitionExpression?`(${i.layerDefinition.definitionExpression}) AND (${c})`:c)}var g;return i}async function At(e,{layerView:a,printTemplate:t},r){return e.legendEnabled&&r.legendLayers.push({id:e.id}),$(e,await te(a),t,r)}async function _t(e,{printTemplate:a},t){return $(e,null,a,t)}function Ct(e,a){e.legendEnabled&&a.legendLayers.push({id:e.id});const t={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;if(t.bandIds=e.bandIds,t.compressionQuality=e.compressionQuality,t.format=e.format,t.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(t.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(a.is11xService)e.renderingRule&&(t.renderingRule=e.renderingRule.toJSON()),e.renderer&&(t.layerDefinition=t.layerDefinition||{},t.layerDefinition.drawingInfo=t.layerDefinition.drawingInfo||{},t.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const n=e.exportImageServiceParameters.combineRendererWithRenderingRule();n&&(t.renderingRule=n.toJSON())}return z(t,e),t}function Ut(e,a){e.legendEnabled&&a.legendLayers.push({id:e.id});const t={bandIds:(r=e.write()||{}).bandIds,customParameters:r.customParameters,interpolation:r.interpolation,layerDefinition:r.layerDefinition};var r;return t.layerType="ArcGISImageServiceLayer",z(t,e),t}async function qt(e,a,t){const r=a.printTemplate;if(t.is11xService){const n={type:"kml"};return e.write(n,{origin:"web-map"}),delete n.layerType,n.url=q(e.url),n}{const n=[],i=a.layerView;i.allVisibleMapImages.forEach((s,l)=>{const d={id:`${e.id}_image${l}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:s.extent};s.href.substr(0,22)==="data:image/png;base64,"?d.imageData=s.href.substr(22):d.url=s.href,n.push(d)});const o=[...i.allVisiblePoints.items,...i.allVisiblePolylines.items,...i.allVisiblePolygons.items],u={id:e.id,...await $(null,o,r,t)};return n.push(u),n}}function zt(e,{view:a},t){let r;const n={id:e.id,subLayerIds:[]};let i=[];const o=a.scale,u=l=>{const d=o===0,f=l.minScale===0||o<=l.minScale,m=l.maxScale===0||o>=l.maxScale;if(l.visible&&(d||f&&m))if(l.sublayers)l.sublayers.forEach(u);else{const w=l.toExportImageJSON(),b={id:l.id,name:l.title,layerDefinition:{drawingInfo:w.drawingInfo,definitionExpression:w.definitionExpression,source:w.source}};i.unshift(b),n.subLayerIds.push(l.id)}};var s;return e.sublayers&&e.sublayers.forEach(u),i.length&&(i=i.map(({id:l,name:d,layerDefinition:f})=>({id:l,name:d,layerDefinition:f})),r={layerType:(s=e.write()).layerType,customParameters:s.customParameters},r.layers=i,r.visibleLayers=e.capabilities.exportMap.supportsDynamicLayers?void 0:n.subLayerIds,z(r,e),e.legendEnabled&&t.legendLayers.push(n)),r}async function Bt({layerView:e,printTemplate:a},t){const r=[],n=e.layer;if(U(n.featureCollections))for(const i of n.featureCollections){const o=await $(i,i.source,a,t);o&&r.push(...o.featureCollection.layers)}else if(U(n.sublayers))for(const i of n.sublayers){const o=await $(null,i.graphics,a,t);o&&r.push(...o.featureCollection.layers)}return{featureCollection:{layers:r}}}function Kt(){return{type:"OpenStreetMap"}}async function ee(e,{printTemplate:a,view:t},r){const n={type:"image"},i={format:"png",ignoreBackground:!0,layers:[e],rotation:0},o=r.ssExtent||t.extent.clone();let u=96,s=!0,l=!0;if(a.exportOptions){const m=a.exportOptions;m.dpi>0&&(u=m.dpi),m.width>0&&(s=m.width%2==t.width%2),m.height>0&&(l=m.height%2==t.height%2)}if(a.layout==="map-only"&&a.scalePreserved&&(!a.outScale||a.outScale===t.scale)&&u===96&&(!s||!l)&&(i.area={x:0,y:0,width:t.width,height:t.height},s||(i.area.width-=1),l||(i.area.height-=1),!r.ssExtent)){const m=t.toMap(Ce(i.area.width,i.area.height));o.ymin=m.y,o.xmax=m.x,r.ssExtent=o}n.extent=o.clone()._normalize(!0).toJSON();const d=await t.takeScreenshot(i),{data:f}=Ue(d.dataUrl);return n.imageData=f,n}async function Wt(e,{layerView:a,printTemplate:t},r){return e.legendEnabled&&r.legendLayers.push({id:e.id}),$(e,await te(a),t,r)}function Zt(e){const a={layerType:(t=e.write()).layerType,customParameters:t.customParameters};var t;return z(a,e),a}async function Qt(e,a,t){if(t.is11xService&&e.serviceUrl&&e.styleUrl){const r=se(e.styleUrl,e.apiKey),n=se(e.serviceUrl,e.apiKey);if(!r&&!n||t.cimVersion!=="2.1.0"){const i={type:"VectorTileLayer"};return i.styleUrl=q(e.styleUrl),i.token=r,n!==r&&(i.additionalTokens=[{url:e.serviceUrl,token:n}]),i}}return ee(e,a,t)}function Yt(e){const a={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(a.subDomains=e.subDomains),a}function Ht(e){let a;const t=[],r=n=>{n.visible&&(n.sublayers?n.sublayers.forEach(r):n.name&&t.unshift(n.name))};return e.sublayers&&e.sublayers.forEach(r),t.length&&(a={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:t,url:q(e.url),version:e.version}),a}function Xt(e){const a=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:a.imageFormat,layer:a.id,style:a.styleId,tileMatrixSet:a.tileMatrixSetId,url:q(e.url)}}function z(e,a){a.url&&(e.url=q(e.url||a.url),e.token=se(e.url,a.apiKey))}function se(e,a){var t,r;return qe(e)&&(a||pe.apiKey)?a||pe.apiKey:(t=ze)==null||(r=t.findCredential(e))==null?void 0:r.token}async function W(e,a){a.canvas||(a.canvas=document.createElement("canvas"));const t=1024;a.canvas.width=t,a.canvas.height=t;const r=a.canvas.getContext("2d");let n,i;if(e.path){var o;const u=new Path2D(e.path);u.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(u);const s=ct(r);if(!s)return null;r.clearRect(0,0,t,t);const l=B(e.size)/Math.max(s.width,s.height);r.scale(l,l);const d=t/l,f=d/2-s.width/2-s.x,m=d/2-s.height/2-s.y;if(r.translate(f,m),Array.isArray(e.color)&&r.fill(u),(o=e.outline)!=null&&o.width&&Array.isArray(e.outline.color)){const b=e.outline;r.lineWidth=B(b.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${b.color[0]},${b.color[1]},${b.color[2]},${b.color[3]/255})`,r.stroke(u),s.width+=r.lineWidth,s.height+=r.lineWidth}s.width*=l,s.height*=l;const w=r.getImageData(t/2-s.width/2,t/2-s.height/2,Math.ceil(s.width),Math.ceil(s.height));n=w.width,i=w.height,r.canvas.width=n,r.canvas.height=i,r.putImageData(w,0,0)}else{const u=e.contentType==="image/svg+xml"?"data:image/svg+xml;base64,"+e.imageData:e.url,s=(await j(u,{responseType:"image"})).data;n=B(e.width),i=B(e.height),r.canvas.width=n,r.canvas.height=i,r.drawImage(s,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:N(i),width:N(n),xoffset:e.xoffset,yoffset:e.yoffset}}async function Le(e,a){const t=e.type;if(t==="simple"&&Z(e.symbol))e.symbol=await W(e.symbol,a);else if(t==="uniqueValue"||t==="classBreaks"){Z(e.defaultSymbol)&&(e.defaultSymbol=await W(e.defaultSymbol,a));const r=e[t==="uniqueValue"?"uniqueValueInfos":"classBreakInfos"];if(r)for(const n of r)Z(n.symbol)&&(n.symbol=await W(n.symbol,a))}}async function te(e){return e.queryFeatures(e.createQuery()).then(a=>a.features)}function er(e){return e.gpMetadata&&e.gpMetadata.executionType?Jt.fromJSON(e.gpMetadata.executionType):"sync"}function Z(e){return e&&(e.path||e.contentType==="image/svg+xml"||e.url&&e.url.endsWith(".svg"))}const tr=new J({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let F=class extends Ke{constructor(...e){super(...e),this._gpMetadata=null,this.updateDelay=1e3}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?tr.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,a){return e&&(e.updateDelay=this.updateDelay),Nt(this.url,e,{...this.requestOptions,...a})}async _getGpPrintParams(e){const a=Ge(this.url),t=X.get(a);return Me(e,t)}};p([y()],F.prototype,"_gpMetadata",void 0),p([y({readOnly:!0})],F.prototype,"mode",null),p([y()],F.prototype,"updateDelay",void 0),F=p([V("esri.tasks.PrintTask")],F);const ir=F;export{ir as default};
