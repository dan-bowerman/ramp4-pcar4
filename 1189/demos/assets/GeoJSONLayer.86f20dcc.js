import{aj as x,e as r,d as s,i as b,m as w,q as J,r as O,cP as N,M as I,s as m,f as $,ck as R,cW as k,a as q,io as S,j_ as P,j$ as T,k0 as D,jp as G,k1 as L,jq as Q,jr as z,c_ as Z,d0 as C,d4 as V,p as j,k2 as f,k3 as B,O as g,_ as U,jv as W,hh as c,jI as A,k4 as M,d7 as H,jJ as K,k5 as X,k6 as Y,k7 as ee,jU as te,k8 as re,jy as se,iQ as ie,k9 as oe,jx as ne,ka as ae,kb as le,kc as ue,d3 as de,jz as pe}from"./main.e026b28b.js";import{a as he}from"./clientSideDefaults.0a485e03.js";import"./QueryEngineCapabilities.83e56447.js";const v=x.getLogger("esri.layers.graphics.sources.GeoJSONSource");let p=class extends w{constructor(){super(...arguments),this.type="geojson",this.refresh=J(async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=O(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(i=>N.fromJSON(i))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(i=>({count:i.count,extent:I.fromJSON(i.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new m("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,i=[],n=[],d=[];if(e.addFeatures)for(const a of e.addFeatures)i.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)d.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:i,updates:d,deletes:n}).then(({extent:a,timeExtent:l,featureEditResults:u})=>(this.sourceJSON.extent=a,l&&(this.sourceJSON.timeInfo.timeExtent=[l.start,l.end]),this._createEditsResult(u)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,i=this._geometryForSerialization(e);return i?{geometry:i.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return $(t)?null:t.type==="mesh"||t.type==="extent"?R.fromExtent(t.extent):t}async _startWorker(e){this._connection=await k("GeoJSONSourceWorker",{strategy:q("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:i,hasZ:n,geometryType:d,objectIdField:a,url:l,timeInfo:u,customParameters:E}=this.layer,_=this.layer.originOf("spatialReference")==="defaults",F={url:l,customParameters:E,fields:t&&t.map(y=>y.toJSON()),geometryType:S.toJSON(d),hasZ:n,objectIdField:a,timeInfo:u?u.toJSON():null,spatialReference:_?null:i&&i.toJSON()},h=await this._connection.invoke("load",F,{signal:e});for(const y of h.warnings)v.warn(y.message,{layer:this.layer,warning:y});h.featureErrors.length&&v.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`,h.featureErrors),this.sourceJSON=h.layerDefinition,this.capabilities=he(this.sourceJSON.hasZ,!0)}};r([s()],p.prototype,"capabilities",void 0),r([s()],p.prototype,"type",void 0),r([s({constructOnly:!0})],p.prototype,"layer",void 0),r([s()],p.prototype,"sourceJSON",void 0),p=r([b("esri.layers.graphics.sources.GeoJSONSource")],p);const ce=p,ye=pe();let o=class extends P(T(D(G(L(Q(z(Z(C(V))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new ce({layer:this}),this.spatialReference=j.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),f(this.renderer,this.fieldsIndex),B(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?g(this.url):null}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=g(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const i=await U(()=>import("./editingSupport.692c2f67.js"),["assets/editingSupport.692c2f67.js","assets/main.e026b28b.js","assets/main.6f812d7a.css"]);await this.load();const n=await i.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return W(this,e)}createQuery(){const e=new c,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:n}=this;return e.timeExtent=i!=null&&n!=null?n.offset(-i.value,i.unit):n||null,e}getFieldDomain(e,t){let i,n=!1;const d=t&&t.feature,a=d&&d.attributes,l=this.typeIdField&&a&&a[this.typeIdField];return l!=null&&this.types&&(n=this.types.some(u=>u.id==l&&(i=u.domains&&u.domains[e],i&&i.type==="inherited"&&(i=this._getLayerDomain(e)),!0))),n||i||(i=this._getLayerDomain(e)),i}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(i=>{if(i!=null&&i.features)for(const n of i.features)n.layer=n.sourceLayer=this;return i})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return O(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(i=>(i.name===e&&(t=i.domain),!!t)),t}};r([s({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),r([s({type:String})],o.prototype,"copyright",void 0),r([s({readOnly:!0})],o.prototype,"createQueryVersion",null),r([s({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([s({type:String})],o.prototype,"displayField",void 0),r([s({type:Boolean})],o.prototype,"editingEnabled",void 0),r([s(A)],o.prototype,"elevationInfo",void 0),r([s(M)],o.prototype,"featureReduction",void 0),r([s({type:[H],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([s(ye.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([s({type:I,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([s({type:["point","polygon","polyline","multipoint"],json:{read:{reader:S.read}}})],o.prototype,"geometryType",void 0),r([s({type:Boolean})],o.prototype,"hasZ",void 0),r([s(K)],o.prototype,"id",void 0),r([s({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([s(X)],o.prototype,"labelsVisible",void 0),r([s({type:[Y],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee},write:!0}})],o.prototype,"labelingInfo",void 0),r([s(te)],o.prototype,"legendEnabled",void 0),r([s({type:["show","hide"]})],o.prototype,"listMode",void 0),r([s({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([s(re)],o.prototype,"opacity",void 0),r([s({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),r([s({readOnly:!0})],o.prototype,"parsedUrl",null),r([s(se)],o.prototype,"popupEnabled",void 0),r([s({type:ie,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([s({types:oe,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ne}}}})],o.prototype,"renderer",null),r([s(ae)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],o.prototype,"source",void 0),r([s({type:j})],o.prototype,"spatialReference",void 0),r([s({type:[le]})],o.prototype,"templates",void 0),r([s()],o.prototype,"title",void 0),r([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([s({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([s({type:[ue]})],o.prototype,"types",void 0),r([s(de)],o.prototype,"url",null),o=r([b("esri.layers.GeoJSONLayer")],o);const ve=o;export{ve as default};
