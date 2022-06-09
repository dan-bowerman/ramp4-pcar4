import{bB as de,jr as ue,e as t,d as r,cM as x,h$ as ce,js as P,i as n,ai as H,m as ee,iw as te,cz as he,r as d,jt as re,ju as ge,C as se,hg as fe,f as ve,s as E,M as me,p as ie,jv as be,jw as Se,jx as we,iP as $e,cS as oe,o as je,jy as Oe,S,jz as xe,jA as Fe,N as v,l as c,jB as Ie,jC as Le,cY as Te,cZ as Be,c_ as Ee,jp as Ae,c$ as qe,jD as Ne,d3 as Pe,jE as _e,dg as Me,bF as Re,jF as ke,jG as Qe,jH as Ue}from"./main.92c7f41d.js";import{s as De,l as Ke}from"./FetchAssociatedFeatureLayer.f8728b15.js";import{n as Ce,N as Ve}from"./SceneService.04d9b95b.js";import{s as ze,l as Ge,u as He,m as Je}from"./I3SLayerDefinitions.4fb6cb32.js";import"./resourceUtils.57795aba.js";let y=class extends de(ue){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:void 0}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([x("service","title",["alias","name"])],y.prototype,"readTitle",null),t([r()],y.prototype,"layer",void 0),t([r({type:ce,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([x("service","id")],y.prototype,"readIdOnlyOnce",null),t([r(P(String))],y.prototype,"modelName",void 0),t([r(P(Boolean))],y.prototype,"isEmpty",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([n("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,Ze=H.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),J=Oe();let o=class extends ee.LoadableMixin(te(ae)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new he(this.fields)}readAssociatedLayer(e,s){const i=this.layer.associatedFeatureServiceItem,a=s.associatedLayerID;return d(i)&&typeof a=="number"?new re({portalItem:i,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=d(e)?e.signal:null,i=this._fetchService(s).then(()=>{this.indexInfo=Ce(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,Ze,s)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return ge(this,e)}async _fetchService(e){const s=(await se(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){var i,a,p,h;const q=(i=this.getFeatureType(s?.feature))==null||(a=i.domains)==null?void 0:a[e];return q&&q.type!=="inherited"?q:(p=(h=this.getField(e))==null?void 0:h.domain)!=null?p:null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return d(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:De,{query:s,data:{supportsZ:i,supportsM:a,isVersioned:p}}=e;return{query:s,data:{supportsZ:i,supportsM:a,isVersioned:p}}}createQuery(){const e=new fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),s)).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),s))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:d(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),ve(this.associatedLayer))throw new E("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new E("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],o.prototype,"parsedUrl",null),t([r({type:ze,readOnly:!0})],o.prototype,"nodePages",void 0),t([r({type:[Ge],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([r({type:[He],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([r({type:[Je],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],o.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([r({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([r(J.fields)],o.prototype,"fields",void 0),t([r({readOnly:!0})],o.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:re})],o.prototype,"associatedLayer",void 0),t([x("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([r(J.outFields)],o.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([r({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],o.prototype,"apiKey",void 0),t([r({readOnly:!0,type:me,aliasOf:"layer.fullExtent"})],o.prototype,"fullExtent",void 0),t([r({readOnly:!0,type:ie,aliasOf:"layer.spatialReference"})],o.prototype,"spatialReference",void 0),t([r({readOnly:!0,aliasOf:"layer.version"})],o.prototype,"version",void 0),t([r({readOnly:!0,type:be,aliasOf:"layer.elevationInfo"})],o.prototype,"elevationInfo",void 0),t([r({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],o.prototype,"minScale",void 0),t([r({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],o.prototype,"maxScale",void 0),t([r({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([r({types:Se,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([r(we)],o.prototype,"popupEnabled",void 0),t([r({type:$e,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([r()],o.prototype,"types",null),t([r()],o.prototype,"typeIdField",null),t([r({json:{write:!1}}),oe(new je({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([r()],o.prototype,"geometryType",null),t([r()],o.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),o=t([n("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const _=o;var M;const Z={type:S,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:le}}},read:!1}};function le(e,s,i){if(e&&Array.isArray(e))return new S(e.map(a=>{const p=We(a);if(p){const h=new p;return h.read(a,i),h}i&&i.messages&&a&&i.messages.push(new xe("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i}))}))}let f=M=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Fe(this,e=>M.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}))}};function We(e){return e.layerType==="group"?f:_}t([r({type:["hide","show","hide-children"],json:{write:!0}})],f.prototype,"listMode",void 0),t([r(Z)],f.prototype,"sublayers",void 0),f=M=t([n("esri.layers.buildingSublayers.BuildingGroupSublayer")],f),function(e){function s(i,a){i.forEach(p=>{a(p),p.type==="building-group"&&s(p.sublayers,a)})}e.sublayersProperty=Z,e.readSublayers=le,e.forEachSublayer=s}(f||(f={}));const m=f;let F=class extends v{constructor(){super(...arguments),this.type=null}};t([r({type:String,readOnly:!0,json:{write:!0}})],F.prototype,"type",void 0),F=t([n("esri.layers.support.BuildingFilterAuthoringInfo")],F);const ne=F;var R;let w=R=class extends v{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new R({filterType:this.filterType,filterValues:c(this.filterValues)})}};t([r({type:String,json:{write:!0}})],w.prototype,"filterType",void 0),t([r({type:[String],json:{write:!0}})],w.prototype,"filterValues",void 0),w=R=t([n("esri.layers.support.BuildingFilterAuthoringInfoType")],w);const Xe=w;var k;const Ye=S.ofType(Xe);let I=k=class extends v{clone(){return new k({filterTypes:c(this.filterTypes)})}};t([r({type:Ye,json:{write:!0}})],I.prototype,"filterTypes",void 0),I=k=t([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],I);const et=I;var Q;const tt=S.ofType(et);let $=Q=class extends ne{constructor(){super(...arguments),this.type="checkbox"}clone(){return new Q({filterBlocks:c(this.filterBlocks)})}};t([r({type:["checkbox"]})],$.prototype,"type",void 0),t([r({type:tt,json:{write:!0}})],$.prototype,"filterBlocks",void 0),$=Q=t([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],$);const W=$;let L=class extends v{};t([r({readOnly:!0,json:{read:!1}})],L.prototype,"type",void 0),L=t([n("esri.layers.support.BuildingFilterMode")],L);const A=L;var U;let T=U=class extends A{constructor(){super(...arguments),this.type="solid"}clone(){return new U}};t([r({type:["solid"],readOnly:!0,json:{write:!0}})],T.prototype,"type",void 0),T=U=t([n("esri.layers.support.BuildingFilterModeSolid")],T);const D=T;var K;let j=K=class extends A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:c(this.edges)})}};t([oe({wireFrame:"wire-frame"})],j.prototype,"type",void 0),t([r(Ie)],j.prototype,"edges",void 0),j=K=t([n("esri.layers.support.BuildingFilterModeWireFrame")],j);const X=j;var C;let B=C=class extends A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new C}};t([r({type:["x-ray"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=C=t([n("esri.layers.support.BuildingFilterModeXRay")],B);const Y=B;var V;const rt={nonNullable:!0,types:{key:"type",base:A,typeMap:{solid:D,"wire-frame":X,"x-ray":Y}},json:{read:e=>{switch(e&&e.type){case"solid":return D.fromJSON(e);case"wireFrame":return X.fromJSON(e);case"x-ray":return Y.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=V=class extends v{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new D,this.title=""}clone(){return new V({filterExpression:this.filterExpression,filterMode:c(this.filterMode),title:this.title})}};t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([r(rt)],b.prototype,"filterMode",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=V=t([n("esri.layers.support.BuildingFilterBlock")],b);const st=b;var z;const it=S.ofType(st);let g=z=class extends v{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Le(),this.name=null}clone(){return new z({description:this.description,filterBlocks:c(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:c(this.filterAuthoringInfo)})}};t([r({type:String,json:{write:!0}})],g.prototype,"description",void 0),t([r({type:it,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterBlocks",void 0),t([r({types:{key:"type",base:ne,typeMap:{checkbox:W}},json:{read:e=>(e&&e.type)==="checkbox"?W.fromJSON(e):null,write:!0}})],g.prototype,"filterAuthoringInfo",void 0),t([r({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"id",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"name",void 0),g=z=t([n("esri.layers.support.BuildingFilter")],g);const ot=g,at=H.getLogger("esri.layers.support.BuildingSummaryStatistics");let u=class extends v{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([r({type:String})],u.prototype,"fieldName",void 0),t([r({type:String})],u.prototype,"modelName",void 0),t([r({type:String})],u.prototype,"label",void 0),t([r({type:Number})],u.prototype,"min",void 0),t([r({type:Number})],u.prototype,"max",void 0),t([r({json:{read:e=>Array.isArray(e)&&(e.every(s=>typeof s=="string")||e.every(s=>typeof s=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([r({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([n("esri.layers.support.BuildingFieldStatistics")],u);let O=class extends ee.LoadableMixin(te(v)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(at.error("building summary statistics are not loaded"),null)}load(e){const s=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(s)),Promise.resolve(this)}async _fetchService(e){const s=(await se(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(s,{origin:"service"})}};t([r({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([r({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([n("esri.layers.support.BuildingSummaryStatistics")],O);const pe=O,N=H.getLogger("esri.layers.BuildingSceneLayer"),ye=S.ofType(ot),G=c(m.sublayersProperty);G.json.origins["web-scene"]={type:[_],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},G.json.origins["portal-item"]={type:[_],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let l=class extends Ve(Te(Be(Ee(Ae(qe(Ne(Pe))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new _e({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.type==="building-group"?s.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,s,i){const a=m.readSublayers(e,s,i);return m.forEachSublayer(a,p=>p.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(a,this.sublayerOverrides),this.sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:s,context:i}){m.forEachSublayer(e,a=>a.read(s.get(a.id),i))}readSublayerOverrides(e,s){const i=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?i.set(a.id,a):s.messages.push(new E("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:i,context:s}}writeSublayerOverrides(e,s,i){const a=[];m.forEachSublayer(this.sublayers,p=>{const h=p.write({},i);Object.keys(h).length>1&&a.push(h)}),a.length>0&&(s.sublayers=a)}writeUnappliedOverrides(e,s){s.sublayers=[],e.overrides.forEach(i=>{s.sublayers.push(c(i))})}write(e,s){return e=super.write(e,s),!s||s.origin!=="web-scene"&&s.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,s):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,s){if(super.read(e,s),s&&(s.origin==="web-scene"||s.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,s);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this.sublayerOverrides=i}}readSummaryStatistics(e,s){if(typeof s.statisticsHRef=="string"){const i=Me(this.parsedUrl.path,s.statisticsHRef);return new pe({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const s=d(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Re).then(()=>this._fetchService(s)).then(()=>this._fetchAssociatedFeatureService(s));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return ke(this,e=>{m.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,s){return this._debouncedSaveOperations(1,{...s,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new E("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&N.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&N.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const s=new Ke(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await s.fetchPortalItem()}catch(i){N.warn("Associated feature service item could not be loaded",i)}}};t([r({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],l.prototype,"allSublayers",void 0),t([r(G)],l.prototype,"sublayers",void 0),t([x("service","sublayers")],l.prototype,"readSublayers",null),t([r({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([r({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([r({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([x("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([r({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([r(Qe)],l.prototype,"fullExtent",void 0),t([r({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([r(P(ie))],l.prototype,"spatialReference",void 0),t([r(Ue)],l.prototype,"elevationInfo",null),t([r({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([r()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([n("esri.layers.BuildingSceneLayer")],l);const ut=l;export{ut as default};
