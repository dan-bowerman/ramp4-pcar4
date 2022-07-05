import{aP as $,m as P,q as T,r as S,cP as k,M as j,s as E,A as U,io as c,E as _,cW as N,a as C,e as t,d as r,i as I,j_ as J,j$ as W,k0 as X,jp as D,k1 as Y,jr as Q,jq as L,c_ as V,c$ as z,d0 as G,d4 as M,p as x,k2 as F,k3 as B,d7 as q,n as A,O as H,jv as K,hh as y,jI as Z,k4 as ee,cl as te,k5 as ie,k6 as re,k7 as se,jU as oe,i0 as O,l9 as ae,jy as ne,iQ as le,k9 as pe,jx as de,ka as ue,d3 as ye,jz as ce}from"./main.1ef22a98.js";import{a as me,u as fe}from"./clientSideDefaults.8c9aadbe.js";import{D as he,X as ge,z as we,W as ve,v as Fe}from"./wfsUtils.93b73b9e.js";import"./QueryEngineCapabilities.83e56447.js";import"./geojson.908c4d0a.js";import"./xmlUtils.9790bce4.js";let d=class extends $(P){constructor(){super(...arguments),this.capabilities=me(!1,!1),this.type="wfs",this.refresh=T(async e=>{await this.load();const{extent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=i,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){var i;const o=(i=S(e)&&e.signal)!=null?i:null;return this.addResolvingPromise(this._startWorker({signal:o})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,i={}){await this.load(i);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,i);return k.fromJSON(o)}async queryFeaturesJSON(e,i={}){return await this.load(i),this._connection.invoke("queryFeatures",e?e.toJSON():null,i)}async queryFeatureCount(e,i={}){return await this.load(i),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,i)}async queryObjectIds(e,i={}){return await this.load(i),this._connection.invoke("queryObjectIds",e?e.toJSON():null,i)}async queryExtent(e,i={}){await this.load(i);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,i);return{count:o.count,extent:j.fromJSON(o.extent)}}async querySnapping(e,i={}){return await this.load(i),this._connection.invoke("querySnapping",e,i)}async _createLoadOptions(e){const{url:i,customParameters:o,name:n,namespaceUri:l,spatialReference:a,fields:u,geometryType:m,swapXY:f}=this.layer;if(!i)throw new E("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await he(i,{customParameters:o,...e}));const h=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some(w=>this.layer[w]==null),p=h?await ge(this.wfsCapabilities,n,l,{spatialReference:a,customParameters:o,signal:e?.signal}):{...we(u),geometryType:m,name:n,namespaceUri:l,spatialReference:a,swapXY:f},g=U(ve(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri)),R=c.toJSON(p.geometryType);return{customParameters:o,featureType:g,fields:p.fields.map(w=>w.toJSON()),geometryField:p.geometryField,geometryType:R,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:p.objectIdField,spatialReference:p.spatialReference.toJSON(),swapXY:p.swapXY}}async _startWorker(e){const[i,o]=await _([this._createLoadOptions(e),N("WFSSourceWorker",{...e,strategy:C("feature-layers-workers")?"dedicated":"local"})]),n=i.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=i.value;this._connection=o.value;const{extent:u}=await this._connection.invoke("load",a,e);this.sourceJSON={extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:fe(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([r()],d.prototype,"capabilities",void 0),t([r({constructOnly:!0})],d.prototype,"layer",void 0),t([r()],d.prototype,"sourceJSON",void 0),t([r()],d.prototype,"type",void 0),t([r()],d.prototype,"wfsCapabilities",void 0),d=t([I("esri.layers.graphics.sources.WFSSource")],d);const Oe=d;var v;const b=ce();let s=v=class extends J(W(X(D(Y(Q(L(V(z(G(M)))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new Oe({layer:this}),this.spatialReference=x.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:i,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:m,spatialReference:f,swapXY:h,url:p,wfsCapabilities:g}=e;return new v({customParameters:i,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:m,spatialReference:f,swapXY:h,url:p,wfsCapabilities:g})}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),F(this.renderer,this.fieldsIndex),B(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,i,o){const n=e.filter(l=>l.name!==Fe);this.geometryField&&n.unshift(new q({name:this.geometryField,alias:this.geometryField,type:"geometry"})),A(o,n.map(l=>l.toJSON()),i)}get parsedUrl(){return this.url?H(this.url):null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return K(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:o}=this;return e.timeExtent=i!=null&&o!=null?o.offset(-i.value,i.unit):o||null,e}getFieldDomain(e,i){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,i){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),i)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,i){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),i))}queryFeatureCount(e,i){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),i))}queryExtent(e,i){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),i))}async hasDataChanged(){try{const{dataChanged:e,updates:i}=await this.source.refresh(this.customParameters);return S(i)&&this.read(i,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([r({readOnly:!0,aliasOf:"source.capabilities"})],s.prototype,"capabilities",void 0),t([r({type:String})],s.prototype,"copyright",void 0),t([r({readOnly:!0})],s.prototype,"createQueryVersion",null),t([r({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],s.prototype,"customParameters",void 0),t([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([r({type:String})],s.prototype,"displayField",void 0),t([r(Z)],s.prototype,"elevationInfo",void 0),t([r(ee)],s.prototype,"featureReduction",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),t([r({type:[q],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),t([te("fields")],s.prototype,"writeFields",null),t([r(b.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([r({type:j,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),t([r()],s.prototype,"geometryField",void 0),t([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:c.read},write:{target:"layerDefinition.geometryType",writer:c.write,ignoreOrigin:!0},origins:{service:{read:c.read}}}})],s.prototype,"geometryType",void 0),t([r({type:String})],s.prototype,"id",void 0),t([r(ie)],s.prototype,"labelsVisible",void 0),t([r({type:[re],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:se},write:!0}})],s.prototype,"labelingInfo",void 0),t([r(oe)],s.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],s.prototype,"listMode",void 0),t([r({type:String})],s.prototype,"objectIdField",void 0),t([r({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),t([r({type:O,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxFeatures",void 0),t([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),t([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),t([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),t([r(ae)],s.prototype,"opacity",void 0),t([r(b.outFields)],s.prototype,"outFields",void 0),t([r({readOnly:!0})],s.prototype,"parsedUrl",null),t([r(ne)],s.prototype,"popupEnabled",void 0),t([r({type:le,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([r({types:pe,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:de,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),t([r(ue)],s.prototype,"screenSizePerspectiveEnabled",void 0),t([r({readOnly:!0})],s.prototype,"source",void 0),t([r({type:x,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),t([r({readOnly:!0,type:[O],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),t([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),t([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),t([r({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([r(ye)],s.prototype,"url",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),t([r({aliasOf:"source.wfsCapabilities"})],s.prototype,"wfsCapabilities",void 0),s=v=t([I("esri.layers.WFSLayer")],s);const Re=s;export{Re as default};
