import{e as l,d as h,i as S,h as A,aN as ne,a as E,x as C,ap as he,it as ce,T as pe,hO as I,cT as ye,al as fe,c6 as L,iu as ge,r as p,ag as oe,iv as _e,iw as le,ix as me,aA as ue,is as M,iy as j,iz as H,iA as B,hb as J,db as G,fI as ve,E as Q,d9 as D,iB as we,iC as K,iD as be,iE as Re,iF as W,iG as P,c as de,s as F,iH as Ee,q as xe,c7 as Z,iI as Fe,S as Se,cM as X,M as Ie,l as qe,ao as q,bA as Y,hP as Oe}from"./main.4a115682.js";import{u as ee}from"./Container.6c587c65.js";import{s as Ce,a as Te}from"./drapedUtils.d6fa9a66.js";import{N as Ve}from"./definitions.21e97413.js";import{l as $e,u as Ue}from"./LayerView.e41c3187.js";import{a as Pe,b as ke,f as Ne,m as Ae,e as Je,B as ze}from"./schemaUtils.53a6076e.js";import{e as te}from"./util.289cb237.js";import{d as k,t as Le}from"./popupUtils.afc6f247.js";import{i as Me}from"./RefreshableLayerView.4a6b9e93.js";import"./Utils.9527b7d9.js";import"./Texture.e6087458.js";import"./MaterialKey.eee57a3a.js";import"./visualVariablesUtils.16602692.js";import"./CIMSymbolHelper.74164035.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.8bfd6f0b.js";import"./quantizationUtils.d39e9497.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";var z;let T=z=class extends A{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(t=!1){if(this.popupTemplate)return this.popupTemplate;const e=this.sourceLayer&&this.sourceLayer.featureReduction;return e&&"popupTemplate"in e&&e.popupEnabled?e.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new z({objectId:this.objectId,...this.cloneProperties()})}};l([h({type:Boolean})],T.prototype,"isAggregate",void 0),l([h({type:Number,json:{read:!0}})],T.prototype,"objectId",void 0),T=z=l([S("esri.AggregateGraphic")],T);const ie=T;let m=class extends ne{constructor(t){super(t),this._filter=null,this.duration=E("mapview-transitions-duration"),this._excludedEffectView=new ee(t),this._includedEffectView=new ee(t)}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(t){this._get("featureEffect")!==t&&this._transitionTo(t)}get filter(){var t;return this._filter||((t=C(this.featureEffect))==null?void 0:t.filter)||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(t){this._set("scale",t),this._excludedEffectView.scale=t,this._includedEffectView.scale=t}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(t,e){this._set("scale",e),this.transitioning?(this._includedEffectView.transitionStep(t,e),this._excludedEffectView.transitionStep(t,e),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=e,this._includedEffectView.scale=e)}end(){this._includedEffectView.end(),this._excludedEffectView.end(),this._filter=null}_transitionTo(t){const e=this._get("featureEffect"),i=C(t),r=C(i?.includedEffect),s=C(i?.excludedEffect),a=this._includedEffectView.canTransitionTo(r)&&this._excludedEffectView.canTransitionTo(s);this._includedEffectView.effect=r,this._excludedEffectView.effect=s,this._set("featureEffect",i),this._filter=i?.filter||e?.filter||null,a||this.end()}};l([h()],m.prototype,"_filter",void 0),l([h()],m.prototype,"_excludedEffectView",void 0),l([h()],m.prototype,"_includedEffectView",void 0),l([h()],m.prototype,"duration",void 0),l([h()],m.prototype,"excludedEffects",null),l([h()],m.prototype,"featureEffect",null),l([h()],m.prototype,"filter",null),l([h()],m.prototype,"hasEffects",null),l([h()],m.prototype,"includedEffects",null),l([h({value:0})],m.prototype,"scale",null),l([h()],m.prototype,"transitioning",null),m=l([S("esri.layers.effects.FeatureEffectView")],m);const je=m;async function He(t,e){if(!t)return null;switch(t.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new(await import("./SymbolTileRenderer.dd08dfb7.js")).default(e);case"heatmap":return new(await import("./HeatmapTileRenderer.3664e3b0.js")).default(e)}}function N(t){return t.some(e=>e.globalId)}function O(t){return t.filter(e=>!e.error).map(e=>{var i;return(i=e.objectId)!=null?i:e.globalId})}function re(t,e){const i=new Set(t);for(const r of e.values())i.add(r);return i}function se(t,e){const i=new Set(t);for(const r of e.values())i.delete(r);return i}let U=class extends ne{constructor(t){super(t),this._hasGlobalIds=!1}normalizeCtorArgs(t){return this._queueProcessor=new he({concurrency:1,process:t.process}),{}}destroy(){this._queueProcessor.clear()}get updating(){return this._queueProcessor.length>0}push(t){const e=this._queueProcessor,i=e.last();switch(t.type){case"update":case"refresh":if(i?.type===t.type)return;e.push(t).finally(()=>this.notifyChange("updating"));break;case"edit":{const r=i?.type==="processed-edit"?i:null;r&&e.popLast();const s=this._mergeEdits(r,t);for(const a of s)e.push(a).finally(()=>this.notifyChange("updating"));break}}this.notifyChange("updating")}_mergeEdits(t,e){var i,r;const{addedFeatures:s,deletedFeatures:a,updatedFeatures:n}=e.edits;if(this._hasGlobalIds=this._hasGlobalIds||N(s)||N(n)||N(a),this._hasGlobalIds)return[t,{type:"processed-edit",edits:{addOrModified:[...s,...n],removed:a}}];const o=new Set(O((i=t?.edits.addOrModified)!=null?i:[])),u=new Set(O((r=t?.edits.removed)!=null?r:[])),d=new Set([...O(s),...O(n)]),c=new Set(O(a));return[{type:"processed-edit",edits:{addOrModified:Array.from(re(se(o,c),d)).map(y=>({objectId:y})),removed:Array.from(re(se(u,d),c)).map(y=>({objectId:y}))}}]}};l([h({readOnly:!0})],U.prototype,"updating",null),U=l([S("esri.views.2d.layers.support.FeatureCommandQueue")],U);const Be=U;function Ge(t){return Array.isArray(t)}let x=class extends ce{constructor(t){super(t),this._startupResolver=pe(),this.isReady=!1}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(t){this.client.tileRenderer=t}get closed(){return this._connection.closed}async startup(t,e,i,r){await this.when();const s=this._controller.signal,a=Ge(i.source)?{transferList:i.source,signal:s}:void 0,n={service:i,config:e,tileInfo:t.tileInfo.toJSON(),tiles:r};await this._connection.invoke("startup",n,a),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(t){return await this._startupResolver.promise,I(this._connection.invoke("updateTiles",t))}async update(t){const e={config:t};return await this._startupResolver.promise,this._connection.invoke("update",e)}async applyUpdate(t){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",t)}async setHighlight(t){return await this._startupResolver.promise,I(this._connection.invoke("controller.setHighlight",t))}async refresh(t){return await this._startupResolver.promise,I(this._connection.invoke("controller.refresh",t))}async querySummaryStatistics(t,e,i){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:t.toJSON(),params:e},i)}async queryUniqueValues(t,e,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:t.toJSON(),params:e},i)}async queryClassBreaks(t,e,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:t.toJSON(),params:e},i)}async queryHistogram(t,e,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryHistogram",{query:t.toJSON(),params:e},i)}async queryFeatures(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",t.toJSON(),e)}async queryVisibleFeatures(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryVisibleFeatures",t.toJSON(),e)}async queryObjectIds(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",t.toJSON(),e)}async queryFeatureCount(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",t.toJSON(),e)}async queryExtent(t,e){return this._connection.invoke("controller.queryExtent",t.toJSON(),e)}async queryLatestObservations(t,e){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",t.toJSON(),e)}async queryStatistics(t){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",t)}async getObjectId(t){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",t)}async getDisplayId(t){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",t)}async getFeatures(t){return await this._startupResolver.promise,this._connection.invoke("controller.getFeatures",t)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(t){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",t)}async onEdits(t){return await this._startupResolver.promise,I(this._connection.invoke("controller.onEdits",t))}async enableEvent(t,e){return await this._startupResolver.promise,I(this._connection.invoke("controller.enableEvent",{name:t,value:e}))}async _startWorker(t){try{this._connection=await ye("Pipeline",{client:this.client,strategy:"dedicated",signal:t})}catch(e){fe(e)}}};l([h()],x.prototype,"isReady",void 0),l([h()],x.prototype,"client",void 0),l([h()],x.prototype,"tileRenderer",null),x=l([S("esri.views.2d.layers.support.FeatureLayerProxy")],x);const Qe=x,De=1e-6;class Ke{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}destroy(){}clear(){this._tiles.forEach(e=>this._releaseTile(e))}tileKeys(){const e=[];return this._tiles.forEach((i,r)=>e.push(r)),e}update(e){const i=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:r,lodInfo:s}=i,{level:a}=s,n=[],o=[],u=new Set,d=new Set;for(const{row:c,colFrom:y,colTo:f}of r)for(let _=y;_<=f;_++){const v=L.getId(a,c,s.normalizeCol(_),s.getWorldForColumn(_)),w=this._getOrAcquireTile(n,v);u.add(v),w.isReady?w.visible=!0:d.add(w.key)}return d.forEach(c=>this._addPlaceholders(u,c)),this._tiles.forEach(c=>{u.has(c.key.id)||(o.push(c.key.id),this._releaseTile(c))}),ge.pool.release(i),{hasMissingTiles:d.size>0,added:n,removed:o}}_getOrAcquireTile(e,i){if(!this._tiles.has(i)){const r=this.acquireTile(new L(i));e.push(i),this._tiles.set(i,r),r.visible=!1}return this._tiles.get(i)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e)}_addPlaceholders(e,i){const r=this._addPlaceholderChildren(e,i);Math.abs(1-r)<De||this._addPlaceholderParent(e,i)||(this._getTile(i.id).visible=!0)}_addPlaceholderChildren(e,i){let r=0;return this._tiles.forEach(s=>{r+=this._addPlaceholderChild(e,s,i)}),r}_addPlaceholderChild(e,i,r){return i.key.level<=r.level||!i.hasData||!r.contains(i.key)?0:(i.visible=!0,e.add(i.key.id),1/(1<<2*(i.key.level-r.level)))}_addPlaceholderParent(e,i){let r=i.getParentKey(),s=0,a=null;for(;p(r);){if(e.has(r.id))return!0;const n=this._getTile(r.id);if(n!=null&&n.isReady)return n.visible=!0,e.add(n.key.id),!0;n!=null&&n.hasData&&n.patchCount>s&&(s=n.patchCount,a=n),r=r.getParentKey()}return!!a&&(a.visible=!0,e.add(a.key.id),!0)}}const $=oe.getLogger("esri.views.layers.FeatureLayerView"),We=t=>{let e=class extends t{constructor(...i){super(...i),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){ue(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],()=>this._handleRequiredFieldsChange(),!0),M(this,"view.floors","change",()=>this._handleRequiredFieldsChange()),M(this,"layer.sublayer","change",()=>this._handleRequiredFieldsChange())}get availableFields(){const{layer:i,layer:{fieldsIndex:r},requiredFields:s}=this;return"outFields"in i&&i.outFields?j(r,[...H(r,i.outFields),...s]):j(r,s)}set effect(i){B($,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=i}get effect(){return B($,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(i){i!==void 0?this._override("featureEffect",i):this._clearOverride("featureEffect")}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(i){$.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(i){throw new Error("missing implementation")}createQuery(){const i={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},r=p(this.filter)?this.filter.createQuery(i):new J(i);if(this.layer.type==="feature"){const s=G(this);p(s)&&(r.where=r.where?`(${r.where}) AND (${s})`:s)}return p(this.timeExtent)&&(r.timeExtent=p(r.timeExtent)?r.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),r}queryFeatures(i,r){throw new Error("missing implementation")}queryObjectIds(i,r){throw new Error("missing implementation")}queryFeatureCount(i,r){throw new Error("missing implementation")}queryExtent(i,r){throw new Error("missing implementation")}async fetchPopupFeatures(i,r){const s=this.validateFetchPopupFeatures(r);if(s)throw s;return this.fetchClientPopupFeatures(r)}_loadArcadeModules(i){if(i.get("expressionInfos.length")||Array.isArray(i.content)&&i.content.some(r=>r.type==="expression"))return ve()}_handleRequiredFieldsChange(){const i=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",i),i.then(()=>{this._updatingRequiredFieldsPromise===i&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const i=this.view.type==="3d",{layer:r,layer:{fieldsIndex:s,objectIdField:a}}=this,n="renderer"in r&&r.renderer,o="orderBy"in r&&r.orderBy,u=r.featureReduction,d=new Set,c=await Q([n?n.collectRequiredFields(d,s):null,D(d,r),i?we(d,r):null,p(this.filter)?K(d,r,this.filter):null,p(this.featureEffect)?K(d,r,this.featureEffect.filter):null,u?be(d,r,u):null,o?Re(d,r,o):null]);if(r.timeInfo&&this.timeExtent&&W(d,r.fieldsIndex,[r.timeInfo.startField,r.timeInfo.endField]),r.type==="feature"&&r.floorInfo&&W(d,r.fieldsIndex,[r.floorInfo.floorField]),r.type==="subtype-group"){P(d,s,r.subtypeField);const f=r.sublayers.map(_=>{var v;return Promise.all([(v=_.renderer)==null?void 0:v.collectRequiredFields(d,s),D(d,_)])});await Q(f)}for(const f of c)f.error&&$.error(f.error);P(d,s,a),i&&"displayField"in r&&r.displayField&&P(d,s,r.displayField);const y=Array.from(d).sort();this._set("requiredFields",y)}validateFetchPopupFeatures(i){if(de(i))return null;for(const r of i.clientGraphics){const s=r.layer;if("popupEnabled"in s&&!s.popupEnabled)return new F("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:s});if("popupTemplate"in s&&!k(s,i))return new F("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:s});if(r.isAggregate&&!(s.featureReduction&&"popupTemplate"in s.featureReduction&&s.featureReduction.popupEnabled&&s.featureReduction.popupTemplate))return new F("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:s})}}async fetchClientPopupFeatures(i){const r=p(i)?i.clientGraphics:null;if(!r||r.length===0)return[];const s=new Array(r.length),a=new Map,n=await this.createPopupQuery(i);for(let o=0;o<r.length;o++){const u=r[o];if(u.isAggregate){s[o]=u;continue}const{layer:d}=u;if(!("popupEnabled"in d))continue;const c=H(this.layer.fieldsIndex,n.outFields),y=k(d,i);if(!p(y))continue;const f=await this._loadArcadeModules(y);f&&f.arcadeUtils.hasGeometryOperations(y)||!Ee(c,u)?a.set(u.getObjectId(),o):s[o]=u}if(this.layer.type==="stream"||a.size===0)return s.filter(Boolean);n.objectIds=Array.from(a.keys());try{const o=await this.layer.queryFeatures(n);for(const u of o.features)s[a.get(u.getObjectId())]=u}catch{}return s.filter(Boolean)}async createPopupQuery(i){const r=this.layer.createQuery(),s=new Set;let a=!1;const n=p(i)&&i.clientGraphics?i.clientGraphics.map(o=>o.layer):[this.layer];for(const o of n){if(!("popupEnabled"in o))continue;const u=k(o,i);if(!p(u))continue;const d=await this._loadArcadeModules(u),c=d&&d.arcadeUtils.hasGeometryOperations(u);a=!(this.layer.geometryType!=="point"&&!c);const y=await Le(this.layer,u);for(const f of y)s.add(f)}if(r.returnGeometry=a,r.returnZ=a,r.returnM=a,r.outFields=Array.from(s),r.outSpatialReference=this.view.spatialReference,this.layer.type==="feature"){const o=G(this);p(o)&&(r.where=r.where?`(${r.where}) AND (${o})`:o)}return r}canResume(){return!!super.canResume()&&(!p(this.timeExtent)||!this.timeExtent.isEmpty)}};return l([h()],e.prototype,"_updatingRequiredFieldsPromise",void 0),l([h({readOnly:!0})],e.prototype,"availableFields",null),l([h()],e.prototype,"effect",null),l([h({type:_e})],e.prototype,"featureEffect",null),l([h({type:le})],e.prototype,"filter",void 0),l([h(me)],e.prototype,"timeExtent",void 0),l([h()],e.prototype,"layer",void 0),l([h({type:Number})],e.prototype,"maximumNumberOfFeatures",null),l([h({readOnly:!0,type:Boolean})],e.prototype,"maximumNumberOfFeaturesExceeded",null),l([h({readOnly:!0})],e.prototype,"requiredFields",void 0),l([h()],e.prototype,"suspended",void 0),l([h()],e.prototype,"view",void 0),e=l([S("esri.views.layers.FeatureLayerView")],e),e};function ae(t){return t&&"openPorts"in t}const R=oe.getLogger("esri.views.2d.layers.FeatureLayerView2D");let g=class extends We(Me($e(Ue))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new Be({process:t=>{switch(t.type){case"processed-edit":return this._doEdit(t);case"refresh":return this._doRefresh(t.dataChanged);case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._lastPixelBuffer=0,this._updateHighlight=xe(async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys()))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.featureEffectView=new je,this._lastDefinitionExpression=null}destroy(){var t,e;Z(this._updateClusterSizeTask,i=>i.remove()),(t=this._proxy)==null||t.destroy(),(e=this.tileRenderer)==null||e.destroy(),this._commandsQueue.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",t=>{this._set("_aggregateValueRanges",t.valueRanges)}),Fe(()=>this.featureEffect,t=>{this.featureEffectView.featureEffect=t},{initial:!0,sync:!0})])}async _initProxy(){if("isTable"in this.layer&&this.layer.isTable)throw new F("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const t=this._createClientOptions();return this._set("_proxy",new Qe({client:t})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions())}get orderByFields(){return this._serviceOptions.type!=="stream"&&this._serviceOptions.orderByFields}get labelsVisible(){const t=this.layer.type==="subtype-group"?this.layer.sublayers.items:[this.layer];return!this.suspended&&t.some(e=>e.labelingInfo&&e.labelsVisible)}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const t=this.availableFields,e=this.layer,i=this.view.floors,{definitionExpression:r}=e,s=this.layer.type!=="subtype-group"&&this.layer.labelsVisible&&this.layer.labelingInfo,a="renderer"in e&&e.renderer,n=e.type==="feature"?e.gdbVersion:void 0,o=e.type==="feature"&&e.historicMoment?e.historicMoment.getTime():void 0,{timeExtent:u}=this,d="customParameters"in e?JSON.stringify(e.customParameters):void 0,c="apiKey"in e?e.apiKey:void 0,y=e.type==="stream"?`${JSON.stringify(e.geometryDefinition)}${e.definitionExpression}`:null,f=JSON.stringify(this.clips),_=e.featureReduction&&e.featureReduction.toJSON(),v="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),w="sublayers"in this.layer&&this.layer.sublayers.items.reduce((b,V)=>b+`${V.visible?1:0}.${JSON.stringify(V.renderer)}.${V.labelsVisible}
.${JSON.stringify(V.labelingInfo)}`,"");return JSON.stringify({orderBy:v,sublayerHash:w,filterHash:p(this.filter)&&this.filter.toJSON(),effectHash:p(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:y,gdbVersion:n,definitionExpression:r,historicMoment:o,availableFields:t,renderer:a,labelingInfo:s,timeExtent:u,floors:i,clipsHash:f,featureReduction:_,customParameters:d,apiKey:c})}async fetchPopupFeatures(t,e){var i;if(p(e)&&e.clientGraphics.length===0)return[];if(((i=this.layer.featureReduction)==null?void 0:i.type)!=="cluster"){const r=Ce({renderer:"renderer"in this.layer&&this.layer.renderer,event:p(e)&&e.event}),s=Te(t,r,this.view),{features:a}=await this.queryVisibleFeatures(new J({geometry:s,outFields:["*"],returnGeometry:!0}));e=p(e)?e:{};const n=new Set(e.clientGraphics.map(o=>o.getObjectId()));for(const o of a)n.has(o.getObjectId())||e.clientGraphics.push(o)}return super.fetchPopupFeatures(t,e)}highlight(t){var e;let i;return t instanceof A?i=[t.getObjectId()]:typeof t=="number"||typeof t=="string"?i=[t]:Array.isArray(t)&&t.length>0?i=typeof t[0]=="number"||typeof t[0]=="string"?t:t.map(r=>r?.getObjectId()):Se.isCollection(t)&&t.length>0&&(i=t.map(r=>r?.getObjectId()).toArray()),i=(e=i)==null?void 0:e.filter(r=>r!=null),i&&i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}async hitTest(t,e){if(!this.tileRenderer)return null;const i=await this.tileRenderer.hitTest(e);if(i.length===0)return null;const{features:r,aggregates:s}=await this._proxy.getFeatures(i);return[...s.map(a=>this._createHittestResult(ie.fromJSON(a))),...r.map(a=>this._createHittestResult(A.fromJSON(a)))]}async queryAggregates(){return(await this._proxy.getAggregates()).map(t=>ie.fromJSON(t))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(t,e,i){const r={...e,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(t),r,i)}async queryUniqueValues(t,e,i){const r={...e,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(t),r,i)}async queryClassBreaks(t,e,i){const r={...e,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(t),r,i)}async queryHistogram(t,e,i){const r={...e,scale:this.view.scale};return this._proxy.queryHistogram(this._cleanUpQuery(t),r,i)}queryFeatures(t,e){return this.queryFeaturesJSON(t,e).then(i=>{const r=X.fromJSON(i);return r.features.forEach(s=>this._setLayersForFeature(s)),r})}queryVisibleFeatures(t,e){return this._proxy.queryVisibleFeatures(this._cleanUpQuery(t),e).then(i=>{const r=X.fromJSON(i);return r.features.forEach(s=>this._setLayersForFeature(s)),r})}queryFeaturesJSON(t,e){return this._proxy.queryFeatures(this._cleanUpQuery(t),e)}queryObjectIds(t,e){return this._proxy.queryObjectIds(this._cleanUpQuery(t),e)}queryFeatureCount(t,e){return this._proxy.queryFeatureCount(this._cleanUpQuery(t),e)}queryExtent(t,e){return this._proxy.queryExtent(this._cleanUpQuery(t),e).then(i=>({count:i.count,extent:Ie.fromJSON(i.extent)}))}setVisibility(t,e){e?this._visibilityOverrides.delete(t):this._visibilityOverrides.add(t),this._update()}update(t){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:e,added:i,removed:r}=this._tileStrategy.update(t);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),e&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new Ke({acquireTile:t=>this._acquireTile(t),releaseTile:t=>this._releaseTile(t),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(ue(this,"renderingConfigHash",()=>this._update()),"attach"),this.layer.type!=="stream"&&this.handles.add(this.layer.on("edits",t=>this._edit(t)),"attach")}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}isUpdating(){var t;const e="renderer"in this.layer&&this.layer.renderer!=null,i=this._commandsQueue.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._proxy||!this._proxy.isReady,a=this._pipelineIsUpdating,n=this.tileRenderer===null||((t=this.tileRenderer)==null?void 0:t.updating),o=e&&(i||r||s||a||n);return E("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${e}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
  -> updatingTileRenderer ${n}
`),o}_createClientOptions(){return{setUpdating:t=>{this._set("_pipelineIsUpdating",t)},emitEvent:t=>{this.emit(t.name,t.event)}}}async _detectQueryMode(t){var e;const i="path"in t,r="editingInfo"in this.layer&&((e=this.layer.editingInfo)==null?void 0:e.lastEditDate),s=!!this.layer.refreshInterval,a=!r&&s;if(i&&(this.layer.type==="feature"||this.layer.type==="subtype-group")&&this.layer.geometryType==="point"&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&!a&&E("featurelayer-snapshot-enabled"))try{const n=await this.layer.queryFeatureCount();if(n<=E("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:n};const o=E("featurelayer-snapshot-point-max-threshold"),u=E("featurelayer-snapshot-point-coverage"),d=this.view.extent,c=C(this.layer.fullExtent),y=c?.clone().intersection(d),f=p(y)?y.width*y.height:0,_=c?.width*c?.height,v=_===0?0:f/_;if(n<=o&&v>=u)return{mode:"snapshot",featureCount:n}}catch(n){R.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:n})}return{mode:"on-demand"}}async _createServiceOptions(){var t;const e=this.layer;if(e.type==="stream")return null;const{capabilities:i,objectIdField:r}=e,s=e.fields.map(b=>b.toJSON()),a=p(e.fullExtent)&&e.fullExtent.toJSON(),n=te(e.geometryType),o=e.timeInfo&&e.timeInfo.toJSON()||null,u=e.spatialReference?e.spatialReference.toJSON():null,d=e.type==="feature"?e.globalIdField:null;let c;e.type==="ogc-feature"?c=e.source.getFeatureDefinition():ae(e.source)?c=await e.source.openPorts():e.parsedUrl&&(c=qe(e.parsedUrl),"dynamicDataSource"in e&&e.dynamicDataSource&&(c.query={layer:JSON.stringify({source:e.dynamicDataSource})}));const y="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,f=(t="subtypeField"in this.layer&&this.layer.subtypeField)!=null?t:null,{mode:_,featureCount:v}=await this._detectQueryMode(c);let w=this.layer.objectIdField;if(this.layer.type==="feature"&&p(this.layer.orderBy)&&this.layer.orderBy.length){const b=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;b&&(w=b)}return{type:_,timeReferenceUnknownClient:y,subtypeField:f,featureCount:v,globalIdField:d,maxRecordCount:i.query.maxRecordCount,tileMaxRecordCount:i.query.tileMaxRecordCount,capabilities:i,fields:s,fullExtent:a,geometryType:n,objectIdField:r,source:c,timeInfo:o,spatialReference:u,orderByFields:w}}async _createMemoryServiceOptions(t){const e=await t.openPorts();return{...this._createServiceOptions(),type:"memory",source:e}}_cleanUpQuery(t){const e=J.from(t)||this.createQuery();return e.outSpatialReference||(e.outSpatialReference=this.view.spatialReference),e}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(t){if(this._validateEdit(t))return this._commandsQueue.push({type:"edit",edits:t})}async doRefresh(t){return this._commandsQueue.push({type:"refresh",dataChanged:t})}_validateEdit(t){const e="globalIdField"in this.layer&&this.layer.globalIdField,i=t.deletedFeatures.some(s=>s.objectId===-1||!s.objectId),r=e&&this.availableFields.includes(e);return i&&!r?(R.error(new F("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${e} to be included the layer's outFields for updates to be reflected on the map`)),null):t}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffectView:t,filter:e}=this;await this._updateRequiredFields();const{renderer:i}=this._getEffectiveRenderer();this._set("_effectiveRenderer",i);const r=this._createSchemaConfig(),s=te(this.layer.geometryType),a=await Pe(i,s,this.view.resourceManager,this.layer.fields,this.layer.spatialReference,this.layer.featureReduction),n=this._createConfiguration(r,e,t.filter),o=this._lastDefinitionExpression!==n.definitionExpression;this._lastDefinitionExpression=n.definitionExpression,this._lastPixelBuffer=a===0?0:Math.max(a,this._lastPixelBuffer),n.schema.source.pixelBuffer=this._lastPixelBuffer;const u=this._createTileRendererHash(i);if(this._serviceOptions.type==="snapshot"&&(n.schema.source.featureCount=this._serviceOptions.featureCount),u!==this._tileRendererHash){await this._initTileRenderer(i);const d=this._serviceOptions;this.tileRenderer.onConfigUpdate(i);const c=this.layer;c.type!=="stream"&&ae(c.source)&&(d.source=await c.source.openPorts()),c.type==="stream"&&await this._initServiceOptions();const y={added:this._tileStrategy.tileKeys(),removed:[]};await this._proxy.startup(this.view.featuresTilingScheme,n,d,y),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(i)}else{this._serviceOptions.type==="snapshot"&&o&&(n.schema.source.featureCount=await this.layer.queryFeatureCount());const d=await this._proxy.update(n);(d.mesh||d.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(d)}catch(c){q(c)||R.error(c)}(d.mesh||d.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(i),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=u,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch{}}async _doEdit(t){try{await this._proxy.onEdits(t)}catch(e){q(e)}}async _doRefresh(t){this._lockGPUUploads();try{await this._proxy.refresh(t)}catch(e){q(e)}this._unlockGPUUploads()}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)}_createUpdateClusterSizeTask(t,e){return this.watch("_aggregateValueRanges",async i=>{this._updateClusterEffectiveRendererSizeVariable(t,e,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable()})}async _updateClusterEffectiveRendererSizeVariable(t,e,i){if(t.dynamicClusterSize&&"visualVariables"in t&&t.visualVariables){const r=ke(t.visualVariables);if(p(r)&&r.field==="cluster_count"){const s=t.visualVariables.indexOf(r);t.visualVariables[s]=Ne(e,i);const a=t.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a)}}}_getEffectiveRenderer(){const t="renderer"in this.layer&&this.layer.renderer,e=this.layer.featureReduction;if(p(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),e&&e.type==="cluster"&&Ae(t)){const i=e,r=[],s=Je(r,t,i,this._aggregateValueRanges);return Z(this._updateClusterSizeTask,a=>a.remove()),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:e}}return{renderer:t,aggregateFields:[],featureReduction:null}}_acquireTile(t){const e=this.tileRenderer.acquireTile(t);return e.once("attach",()=>{this.requestUpdate()}),e}_releaseTile(t){this.tileRenderer.releaseTile(t)}async _initTileRenderer(t){const e=await He(t,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=e,this._set("tileRenderer",e),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(t),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(t){return`${t.type==="heatmap"?"heatmap":"symbol"}.${t.type==="dot-density"}`}get hasFilter(){const t=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return!!this.filter||t||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(t){const e=p(t)?t.timeExtent:null,i=p(this.timeExtent)&&p(e)?this.timeExtent.intersection(e):this.timeExtent||e;let r=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const n=p(t)&&t.where;r=this._addFloorFilterClause(n)}if(!this._visibilityOverrides.size&&!i&&!s)return p(t)?t.toJSON():null;(t=p(t)&&t.clone()||new le).timeExtent=i,r&&(t.where=r);const a=t.toJSON();return a.hiddenIds=Array.from(this._visibilityOverrides),a}_addFloorFilterClause(t){const e=this.layer;let i=t||"";if("floorInfo"in e&&e.floorInfo){var r;let s=this.view.floors;if(!s||!s.length)return i;(r=e.floorInfo.viewAllLevelIds)!=null&&r.length&&(s=e.floorInfo.viewAllLevelIds);const a=s.filter(u=>u!=="").map(u=>"'"+u+"'");a.push("''");const n=e.floorInfo.floorField;let o="("+n+" IN ({ids}) OR "+n+" IS NULL)";if(o=o.replace("{ids}",a.join(", ")),p(i)&&i.includes(n)){let u=new RegExp("AND \\("+n+".*NULL\\)","g");i=i.replace(u,""),u=new RegExp("\\("+n+".*NULL\\)","g"),i=i.replace(u,""),i=i.replace(/\s+/g," ").trim()}i=i!==""?"("+i+") AND "+o:o}return i!==""?i:null}_createConfiguration(t,e,i){const r=this.layer.type==="feature"&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s=this.layer.type==="feature"?this.layer.gdbVersion:void 0,a=new Array(Ve),n=this._injectOverrides(e);a[0]=n,a[1]=p(i)?i.toJSON():null;const o=ze(t);if(de(o))return null;const u=Y();return{definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:o,supportsTextureFloat:u.supportsTextureFloat,maxTextureSize:u.maxTextureSize}}_hasRequiredSupport(t){var e;return!("renderer"in t&&((e=t.renderer)==null?void 0:e.type)==="dot-density"&&!Y().supportsTextureFloat)||(R.error(new F("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1)}_onceTilesUpdated(){return this.requestUpdate(),Oe(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_createSchemaConfig(){const t=this.layer.type==="feature"?this.layer.historicMoment:null,e=this.layer.type==="feature"?this.layer.gdbVersion:null;return{renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:t,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:e,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0}}}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight().catch(e=>{q(e)||R.error(e)})}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight().catch(e=>{q(e)||R.error(e)})}_setLayersForFeature(t){const e=this.layer;t.layer=e,t.sourceLayer=e}_createHittestResult(t){return this._setLayersForFeature(t),p(t.geometry)&&(t.geometry.spatialReference=this.view.spatialReference),t}};l([h()],g.prototype,"_serviceOptions",void 0),l([h()],g.prototype,"_proxy",void 0),l([h()],g.prototype,"_pipelineIsUpdating",void 0),l([h()],g.prototype,"_effectiveRenderer",void 0),l([h()],g.prototype,"_aggregateValueRanges",void 0),l([h()],g.prototype,"_commandsQueue",void 0),l([h()],g.prototype,"featureEffectView",void 0),l([h()],g.prototype,"labelsVisible",null),l([h({readOnly:!0})],g.prototype,"queryMode",null),l([h()],g.prototype,"renderingConfigHash",null),l([h()],g.prototype,"tileRenderer",void 0),l([h()],g.prototype,"updating",void 0),g=l([S("esri.views.2d.layers.FeatureLayerView2D")],g);const _t=g;export{_t as default};
