import{e as s,d as o,i as w,N as P,aj as $,cZ as x,c_ as A,c$ as D,jp as R,d0 as k,jD as N,d4 as U,r as d,cA as Q,k1 as m,bG as q,t as C,hg as G,ju as V,f,s as p,dh as K,C as M,_ as W,jR as Z,ar as z,kU as B,kV as H,kW as J,kX as X,cN as h,jH as Y,k4 as ee,k5 as te,k6 as v,jT as re,kY as se,jw as ie,jx as oe,iP as ae,k9 as ne,jy as le}from"./main.0395d05a.js";import{N as pe}from"./SceneService.5fd4a8e9.js";import{s as de,l as ye}from"./FetchAssociatedFeatureLayer.a3859ae4.js";import{s as L,l as ue,u as ce,m as he}from"./I3SLayerDefinitions.35676edf.js";import"./resourceUtils.b6ec0066.js";let u=class extends P{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};s([o({type:String,json:{read:!0,write:!0}})],u.prototype,"name",void 0),s([o({type:String,json:{read:!0,write:!0}})],u.prototype,"field",void 0),s([o({type:[Number],json:{read:!0,write:!0}})],u.prototype,"currentRangeExtent",void 0),s([o({type:[Number],json:{read:!0,write:!0}})],u.prototype,"fullRangeExtent",void 0),s([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=s([w("esri.layers.support.RangeInfo")],u);const fe=u,ge=["3DObject","Point"],c=$.getLogger("esri.layers.SceneLayer"),b=le();let i=class extends pe(x(A(D(R(k(N(U))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,a,n,l;const y=(r=this.getFeatureType(t?.feature))==null||(a=r.domains)==null?void 0:a[e];return y&&y.type!=="inherited"?y:(n=(l=this.getField(e))==null?void 0:l.domain)!=null?n:null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return d(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return d(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new Q(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:L.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return me[this.profile]||"mesh"}set renderer(e){m(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:de,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:a,supportsUploadWithItemId:n,supportsReturnServiceEditsInSourceSpatialReference:l},data:{supportsZ:y,supportsM:F,isVersioned:S,supportsAttachment:j},operations:{supportsEditing:_,supportsUpdate:E,supportsQuery:O,supportsQueryAttachments:T}}=e,g=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:l,supportsRollbackOnFailure:a,supportsGeometryUpdate:!1,supportsUploadWithItemId:n},data:{supportsAttachment:j,supportsZ:y,supportsM:F,isVersioned:S},operations:{supportsQuery:O,supportsQueryAttachments:T,supportsEditing:_&&g,supportsAdd:!1,supportsDelete:!1,supportsUpdate:E&&g}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){e!=null?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return d(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return r!=null&&I[r]?I[r]:(c.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=d(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(q).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>C(this,{origin:"service"},t)).then(()=>m(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}createQuery(){const e=new G;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const a of r.features)a.layer=this,a.sourceLayer=this;return r})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return V(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),f(this.associatedLayer))throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.statisticsInfo)if(a.name===r.name){const n=K(this.parsedUrl.path,a.href);return M(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new p("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(0,e)}async applyEdits(e,t){const r=await W(()=>import("./editingSupport.37cd1d86.js"),["assets/editingSupport.37cd1d86.js","assets/main.0395d05a.js","assets/main.6f812d7a.css"]);if(await this.load(),f(this.associatedLayer))throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&ge.indexOf(e.layerType)===-1)throw new p("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});function t(r,a){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const y=a&&a.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=y;break;case"vertex-reference-frame":n=!0,l=!y;break;default:n=!1}}if(!n)throw new p("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new p("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new p("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(n=>n.name===e.name)),r=!!(d(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(n=>n&&e.name===n.name)),a={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=a}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(f(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(f(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=Z(this);for(let r=0;r<e.length;r++){const a=e[r],n=this.originIdOf(a),l=this.associatedLayer.originIdOf(a);n<l&&(l===2||l===3)&&t.setAtOrigin(a,this.associatedLayer[a],l)}}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].indexOf(this.profile)===-1)return;const t=new ye(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){z(r)||this._logWarningOnPopupEnabled()}}_logWarningOnPopupEnabled(){B(this,["popupTemplate","popupEnabled"],()=>this.popupEnabled&&this.popupTemplate!=null).then(()=>()=>{const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)})}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode!=="absolute-height"&&c.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&c.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};s([o({types:{key:"type",base:H,typeMap:{selection:J}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),s([o({type:[fe],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),s([o({json:{read:!1}})],i.prototype,"associatedLayer",void 0),s([o({type:["show","hide"]})],i.prototype,"listMode",void 0),s([o({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),s([o({...b.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"fields",void 0),s([o()],i.prototype,"types",null),s([o()],i.prototype,"typeIdField",null),s([o()],i.prototype,"formTemplate",null),s([o({readOnly:!0})],i.prototype,"fieldsIndex",null),s([o({type:X,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),s([o(b.outFields)],i.prototype,"outFields",void 0),s([o({type:L,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),s([h("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),s([o({type:[ue],readOnly:!0})],i.prototype,"materialDefinitions",void 0),s([o({type:[ce],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),s([o({type:[he],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),s([o({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),s([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),s([o({readOnly:!0})],i.prototype,"statisticsInfo",void 0),s([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([o(Y)],i.prototype,"elevationInfo",null),s([o({type:String})],i.prototype,"geometryType",null),s([o(ee)],i.prototype,"labelsVisible",void 0),s([o({type:[te],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:v},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:v},write:!0}})],i.prototype,"labelingInfo",void 0),s([o(re)],i.prototype,"legendEnabled",void 0),s([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,a;if(typeof e=="number"&&e>=0&&e<=1)return e;const n=(r=t.layerDefinition)==null||(a=r.drawingInfo)==null?void 0:a.transparency;return n!==void 0?se(n):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),s([o({types:ie,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),s([o({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),s([h("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),s([o({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),s([o(oe)],i.prototype,"popupEnabled",void 0),s([o({type:ae,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),s([o({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),s([h("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),s([o({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),s([h("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),s([o({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),s([o({type:String,json:{read:!1}})],i.prototype,"profile",void 0),s([h("service","profile",["store.profile"])],i.prototype,"readProfile",null),s([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),s([o(ne)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=s([w("esri.layers.SceneLayer")],i);const I={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},me={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Fe=i;export{Fe as default};
