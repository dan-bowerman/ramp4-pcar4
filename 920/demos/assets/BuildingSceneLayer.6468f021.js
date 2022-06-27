import{bC as de,js as ue,e as t,d as r,cN as x,i0 as ce,jt as _,i as n,aj as J,m as ee,ix as te,cA as he,r as d,ju as re,jv as ge,C as se,hh as fe,f as ve,s as A,M as me,p as ie,jw as be,jx as Se,jy as we,iQ as je,cT as oe,o as Oe,jz as $e,S,jA as xe,jB as Fe,N as v,l as c,jC as Ie,jD as Le,cZ as Te,c_ as Be,c$ as Ae,jq as Ee,d0 as qe,jE as Ne,d4 as _e,jF as Pe,dh as Me,bG as Re,jG as ke,jH as Qe,jI as Ue}from"./main.18c7b5d3.js";import{s as De,l as Ce}from"./FetchAssociatedFeatureLayer.53e064d6.js";import{n as Ke,N as Ve}from"./SceneService.1a9f7a36.js";import{s as Ge,l as He,u as Je,m as Ze}from"./I3SLayerDefinitions.543f86b1.js";import"./resourceUtils.bf660512.js";let y=class extends de(ue){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:void 0}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([x("service","title",["alias","name"])],y.prototype,"readTitle",null),t([r()],y.prototype,"layer",void 0),t([r({type:ce,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([x("service","id")],y.prototype,"readIdOnlyOnce",null),t([r(_(String))],y.prototype,"modelName",void 0),t([r(_(Boolean))],y.prototype,"isEmpty",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([n("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,ze=J.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),Z=$e();let o=class extends ee.LoadableMixin(te(ae)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new he(this.fields)}readAssociatedLayer(e,s){const i=this.layer.associatedFeatureServiceItem,a=s.associatedLayerID;return d(i)&&typeof a=="number"?new re({portalItem:i,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=d(e)?e.signal:null,i=this._fetchService(s).then(()=>{this.indexInfo=Ke(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,ze,s)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return ge(this,e)}async _fetchService(e){const s=(await se(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){var i,a,p,h;const q=(i=this.getFeatureType(s?.feature))==null||(a=i.domains)==null?void 0:a[e];return q&&q.type!=="inherited"?q:(p=(h=this.getField(e))==null?void 0:h.domain)!=null?p:null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return d(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:De,{query:s,data:{supportsZ:i,supportsM:a,isVersioned:p}}=e;return{query:s,data:{supportsZ:i,supportsM:a,isVersioned:p}}}createQuery(){const e=new fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),s)).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),s))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:d(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),ve(this.associatedLayer))throw new A("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new A("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],o.prototype,"parsedUrl",null),t([r({type:Ge,readOnly:!0})],o.prototype,"nodePages",void 0),t([r({type:[He],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([r({type:[Je],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([r({type:[Ze],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],o.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([r({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([r(Z.fields)],o.prototype,"fields",void 0),t([r({readOnly:!0})],o.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:re})],o.prototype,"associatedLayer",void 0),t([x("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([r(Z.outFields)],o.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([r({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],o.prototype,"apiKey",void 0),t([r({readOnly:!0,type:me,aliasOf:"layer.fullExtent"})],o.prototype,"fullExtent",void 0),t([r({readOnly:!0,type:ie,aliasOf:"layer.spatialReference"})],o.prototype,"spatialReference",void 0),t([r({readOnly:!0,aliasOf:"layer.version"})],o.prototype,"version",void 0),t([r({readOnly:!0,type:be,aliasOf:"layer.elevationInfo"})],o.prototype,"elevationInfo",void 0),t([r({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],o.prototype,"minScale",void 0),t([r({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],o.prototype,"maxScale",void 0),t([r({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([r({types:Se,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([r(we)],o.prototype,"popupEnabled",void 0),t([r({type:je,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([r()],o.prototype,"types",null),t([r()],o.prototype,"typeIdField",null),t([r({json:{write:!1}}),oe(new Oe({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([r()],o.prototype,"geometryType",null),t([r()],o.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),o=t([n("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const P=o;var M;const z={type:S,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:le}}},read:!1}};function le(e,s,i){if(e&&Array.isArray(e))return new S(e.map(a=>{const p=We(a);if(p){const h=new p;return h.read(a,i),h}i&&i.messages&&a&&i.messages.push(new xe("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i}))}))}let f=M=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Fe(this,e=>M.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}))}};function We(e){return e.layerType==="group"?f:P}t([r({type:["hide","show","hide-children"],json:{write:!0}})],f.prototype,"listMode",void 0),t([r(z)],f.prototype,"sublayers",void 0),f=M=t([n("esri.layers.buildingSublayers.BuildingGroupSublayer")],f),function(e){function s(i,a){i.forEach(p=>{a(p),p.type==="building-group"&&s(p.sublayers,a)})}e.sublayersProperty=z,e.readSublayers=le,e.forEachSublayer=s}(f||(f={}));const m=f;let F=class extends v{constructor(){super(...arguments),this.type=null}};t([r({type:String,readOnly:!0,json:{write:!0}})],F.prototype,"type",void 0),F=t([n("esri.layers.support.BuildingFilterAuthoringInfo")],F);const ne=F;var R;let w=R=class extends v{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new R({filterType:this.filterType,filterValues:c(this.filterValues)})}};t([r({type:String,json:{write:!0}})],w.prototype,"filterType",void 0),t([r({type:[String],json:{write:!0}})],w.prototype,"filterValues",void 0),w=R=t([n("esri.layers.support.BuildingFilterAuthoringInfoType")],w);const Xe=w;var k;const Ye=S.ofType(Xe);let I=k=class extends v{clone(){return new k({filterTypes:c(this.filterTypes)})}};t([r({type:Ye,json:{write:!0}})],I.prototype,"filterTypes",void 0),I=k=t([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],I);const et=I;var Q;const tt=S.ofType(et);let j=Q=class extends ne{constructor(){super(...arguments),this.type="checkbox"}clone(){return new Q({filterBlocks:c(this.filterBlocks)})}};t([r({type:["checkbox"]})],j.prototype,"type",void 0),t([r({type:tt,json:{write:!0}})],j.prototype,"filterBlocks",void 0),j=Q=t([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],j);const W=j;let L=class extends v{};t([r({readOnly:!0,json:{read:!1}})],L.prototype,"type",void 0),L=t([n("esri.layers.support.BuildingFilterMode")],L);const E=L;var U;let T=U=class extends E{constructor(){super(...arguments),this.type="solid"}clone(){return new U}};t([r({type:["solid"],readOnly:!0,json:{write:!0}})],T.prototype,"type",void 0),T=U=t([n("esri.layers.support.BuildingFilterModeSolid")],T);const D=T;var C;let O=C=class extends E{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new C({edges:c(this.edges)})}};t([oe({wireFrame:"wire-frame"})],O.prototype,"type",void 0),t([r(Ie)],O.prototype,"edges",void 0),O=C=t([n("esri.layers.support.BuildingFilterModeWireFrame")],O);const X=O;var K;let B=K=class extends E{constructor(){super(...arguments),this.type="x-ray"}clone(){return new K}};t([r({type:["x-ray"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=K=t([n("esri.layers.support.BuildingFilterModeXRay")],B);const Y=B;var V;const rt={nonNullable:!0,types:{key:"type",base:E,typeMap:{solid:D,"wire-frame":X,"x-ray":Y}},json:{read:e=>{switch(e&&e.type){case"solid":return D.fromJSON(e);case"wireFrame":return X.fromJSON(e);case"x-ray":return Y.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=V=class extends v{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new D,this.title=""}clone(){return new V({filterExpression:this.filterExpression,filterMode:c(this.filterMode),title:this.title})}};t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([r(rt)],b.prototype,"filterMode",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=V=t([n("esri.layers.support.BuildingFilterBlock")],b);const st=b;var G;const it=S.ofType(st);let g=G=class extends v{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Le(),this.name=null}clone(){return new G({description:this.description,filterBlocks:c(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:c(this.filterAuthoringInfo)})}};t([r({type:String,json:{write:!0}})],g.prototype,"description",void 0),t([r({type:it,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterBlocks",void 0),t([r({types:{key:"type",base:ne,typeMap:{checkbox:W}},json:{read:e=>(e&&e.type)==="checkbox"?W.fromJSON(e):null,write:!0}})],g.prototype,"filterAuthoringInfo",void 0),t([r({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"id",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"name",void 0),g=G=t([n("esri.layers.support.BuildingFilter")],g);const ot=g,at=J.getLogger("esri.layers.support.BuildingSummaryStatistics");let u=class extends v{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([r({type:String})],u.prototype,"fieldName",void 0),t([r({type:String})],u.prototype,"modelName",void 0),t([r({type:String})],u.prototype,"label",void 0),t([r({type:Number})],u.prototype,"min",void 0),t([r({type:Number})],u.prototype,"max",void 0),t([r({json:{read:e=>Array.isArray(e)&&(e.every(s=>typeof s=="string")||e.every(s=>typeof s=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([r({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([n("esri.layers.support.BuildingFieldStatistics")],u);let $=class extends ee.LoadableMixin(te(v)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(at.error("building summary statistics are not loaded"),null)}load(e){const s=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(s)),Promise.resolve(this)}async _fetchService(e){const s=(await se(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(s,{origin:"service"})}};t([r({constructOnly:!0,type:String})],$.prototype,"url",void 0),t([r({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],$.prototype,"fields",null),$=t([n("esri.layers.support.BuildingSummaryStatistics")],$);const pe=$,N=J.getLogger("esri.layers.BuildingSceneLayer"),ye=S.ofType(ot),H=c(m.sublayersProperty);H.json.origins["web-scene"]={type:[P],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},H.json.origins["portal-item"]={type:[P],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let l=class extends Ve(Te(Be(Ae(Ee(qe(Ne(_e))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Pe({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.type==="building-group"?s.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,s,i){const a=m.readSublayers(e,s,i);return m.forEachSublayer(a,p=>p.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(a,this.sublayerOverrides),this.sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:s,context:i}){m.forEachSublayer(e,a=>a.read(s.get(a.id),i))}readSublayerOverrides(e,s){const i=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?i.set(a.id,a):s.messages.push(new A("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:i,context:s}}writeSublayerOverrides(e,s,i){const a=[];m.forEachSublayer(this.sublayers,p=>{const h=p.write({},i);Object.keys(h).length>1&&a.push(h)}),a.length>0&&(s.sublayers=a)}writeUnappliedOverrides(e,s){s.sublayers=[],e.overrides.forEach(i=>{s.sublayers.push(c(i))})}write(e,s){return e=super.write(e,s),!s||s.origin!=="web-scene"&&s.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,s):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,s){if(super.read(e,s),s&&(s.origin==="web-scene"||s.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,s);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this.sublayerOverrides=i}}readSummaryStatistics(e,s){if(typeof s.statisticsHRef=="string"){const i=Me(this.parsedUrl.path,s.statisticsHRef);return new pe({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const s=d(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Re).then(()=>this._fetchService(s)).then(()=>this._fetchAssociatedFeatureService(s));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return ke(this,e=>{m.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,s){return this._debouncedSaveOperations(1,{...s,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new A("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&N.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&N.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const s=new Ce(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await s.fetchPortalItem()}catch(i){N.warn("Associated feature service item could not be loaded",i)}}};t([r({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],l.prototype,"allSublayers",void 0),t([r(H)],l.prototype,"sublayers",void 0),t([x("service","sublayers")],l.prototype,"readSublayers",null),t([r({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([r({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([r({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([x("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([r({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([r(Qe)],l.prototype,"fullExtent",void 0),t([r({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([r(_(ie))],l.prototype,"spatialReference",void 0),t([r(Ue)],l.prototype,"elevationInfo",null),t([r({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([r()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([n("esri.layers.BuildingSceneLayer")],l);const ut=l;export{ut as default};
