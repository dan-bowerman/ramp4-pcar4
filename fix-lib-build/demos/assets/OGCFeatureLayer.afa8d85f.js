import{e as r,d as o,i as P,m as Q,cP as N,r as b,p as g,f as z,kS as J,s as $,jD as Z,j_ as A,j$ as U,jo as V,jZ as W,k0 as H,jp as K,c_ as X,c$ as Y,jq as ee,d0 as te,d4 as re,k1 as O,ju as se,hg as D,k2 as ie,jH as oe,k3 as ne,d7 as ae,M as pe,im as R,k5 as le,k6 as ue,k4 as de,jT as ce,jx as ye,iP as he,k8 as fe,jw as me,k9 as ge,kb as ve,d3 as Se,jy as we}from"./main.368f1782.js";import{N as xe,v as T,x as be,k as je,T as Ie,S as Fe,I as $e,F as C,j as Oe}from"./ogcFeatureUtils.c2d1391e.js";import"./geojson.e58b80d7.js";import"./clientSideDefaults.2507f15c.js";import"./QueryEngineCapabilities.83e56447.js";let f=class extends Q{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:n,supportedCrs:s},layer:{apiKey:a,capabilities:l,customParameters:p}}=this;return{capabilities:l,collection:e,layerDefinition:t,queryParameters:{apiKey:a,customParameters:p},spatialReference:n,supportedCrs:s}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(n=>N.fromJSON(n))}queryFeaturesJSON(e,t={}){const n=this.getFeatureDefinition();return this.load(t).then(()=>xe(n,e,t))}queryObjectIds(e,t={}){return null}supportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var n;const s=new RegExp(`^${t}$`,"i");return(n=e.conformsTo.some(a=>s.test(a)))!=null&&n}_getCapabilities(e,t){var n,s,a,l,p,u,c;const d=b(t)?(n=t.components)==null?void 0:n.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:(s=(a=d==null||(l=d.limit)==null||(p=l.schema)==null?void 0:p.maximum)!=null?a:d==null||(u=d.limitFeatures)==null||(c=u.schema)==null?void 0:c.maximum)!=null?s:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const n=(t=e.extent)==null?void 0:t.spatial;if(!n)return null;const s=n.bbox[0],a=s.length===4,l=s[0],p=s[1],u=a?void 0:s[2];return{xmin:l,ymin:p,xmax:a?s[2]:s[3],ymax:a?s[3]:s[4],zmin:u,zmax:a?void 0:s[5],spatialReference:g.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const n=(t=e.storageCrs)!=null?t:C,s=T(n);return z(s)?g.WGS84:new g({wkid:s})}_getSupportedSpatialReferences(e,t){var n;const s="#/crs",a=(n=e.crs)!=null?n:[C],l=a.includes(s)?a.filter(u=>u!==s).concat(t.crs):a,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(u=>!p.test(u))}async _loadOGCServices(e,t){const n=b(t)?t.signal:null,{apiKey:s,collectionId:a,customParameters:l,fields:p,geometryType:u,hasZ:c,objectIdField:d,timeInfo:j,url:E}=e,_={fields:p?.map(h=>h.toJSON()),geometryType:J.toJSON(u),hasZ:c,objectIdField:d,timeInfo:j?.toJSON()},m={apiKey:s,customParameters:l,signal:n},v=await be(E,m),[I,F]=await Promise.all([je(v,m),Ie(v,m)]);if(!this._conformsToType(I,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new $("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=F.collections.find(h=>h.id===a);if(!y)throw new $("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const k=this._conformsToType(I,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Fe(v,m):null,S=await $e(y,_,m),q=this._getCapabilities(S.hasZ,k),G=this._getExtent(y),B=this._getStorageSpatialReference(y).toJSON(),M=this._getSupportedSpatialReferences(y,F),L=new RegExp(`^${Oe}`,"i"),w={};for(const h of M){const x=T(h);b(x)&&(w[x]||(w[x]=h.replace(L,"")))}S.extent=G,this.featureDefinition={capabilities:q,collection:y,layerDefinition:S,queryParameters:{},spatialReference:B,supportedCrs:w}}};r([o()],f.prototype,"featureDefinition",void 0),r([o({constructOnly:!0})],f.prototype,"layer",void 0),r([o()],f.prototype,"type",void 0),f=r([P("esri.layers.graphics.sources.OGCFeatureSource")],f);const De=f,Re=we();let i=class extends Z(A(U(V(W(H(K(X(Y(ee(te(re))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new De({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return se(this,e)}createQuery(){return new D}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var n;let s,a=!1;const l=t==null||(n=t.feature)==null?void 0:n.attributes,p=this.typeIdField&&l?.[this.typeIdField];return p!=null&&this.types&&(a=this.types.some(u=>{var c,d;return u.id==p&&(s=(c=u.domains)==null?void 0:c[e],((d=s)==null?void 0:d.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),a||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(D.from(e)||this.createQuery(),t)).then(n=>{var s;return n==null||(s=n.features)==null||s.forEach(a=>{a.layer=a.sourceLayer=this}),n})}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),O(this.renderer,this.fieldsIndex),ie(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"capabilities",void 0),r([o({type:String,json:{write:!0}})],i.prototype,"collectionId",void 0),r([o({type:String})],i.prototype,"copyright",void 0),r([o({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),r([o({type:String})],i.prototype,"definitionExpression",void 0),r([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],i.prototype,"description",void 0),r([o({type:String})],i.prototype,"displayField",void 0),r([o(oe)],i.prototype,"elevationInfo",void 0),r([o(ne)],i.prototype,"featureReduction",void 0),r([o({type:[ae],json:{origins:{service:{name:"layerDefinition.fields"}}}})],i.prototype,"fields",void 0),r([o(Re.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([o({readOnly:!0,type:pe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],i.prototype,"fullExtent",void 0),r([o({type:R.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:R.read}}}}})],i.prototype,"geometryType",void 0),r([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],i.prototype,"hasZ",void 0),r([o({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),r([o({type:[le],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}}}})],i.prototype,"labelingInfo",void 0),r([o(de)],i.prototype,"labelsVisible",void 0),r([o(ce)],i.prototype,"legendEnabled",void 0),r([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],i.prototype,"objectIdField",void 0),r([o({type:["OGCFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(ye)],i.prototype,"popupEnabled",void 0),r([o({type:he,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({types:fe,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:me,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],i.prototype,"renderer",null),r([o(ge)],i.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],i.prototype,"source",void 0),r([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],i.prototype,"spatialReference",void 0),r([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],i.prototype,"title",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),r([o({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),r([o({type:[ve]})],i.prototype,"types",void 0),r([o(Se)],i.prototype,"url",void 0),i=r([P("esri.layers.OGCFeatureLayer")],i);const ke=i;export{ke as default};
