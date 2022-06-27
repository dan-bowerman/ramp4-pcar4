import{at as h,c5 as m,fS as o,r as g,cc as _,ct as d,cA as f,A as w,s as u,b9 as E,ar as F,aj as q}from"./main.8eac6be0.js";import{m as S}from"./FeatureStore.f557ef46.js";import{g as x,f as T}from"./projectionSupport.166a50e0.js";import{L as b}from"./QueryEngine.0aa74d83.js";import{O as j,L as I}from"./geojson.09ccfd89.js";import{d as C}from"./sourceUtils.de3ab402.js";import{K as P}from"./wfsUtils.d9249f87.js";import"./PooledRBush.fc41cb87.js";import"./centroid.c1c57d24.js";import"./json.2d0d6862.js";import"./WhereClause.7a0830d3.js";import"./QueryEngineCapabilities.83e56447.js";import"./quantizationUtils.6bea12e9.js";import"./utils.cce487fc.js";import"./spatialQuerySupport.96434dbb.js";import"./xmlUtils.9790bce4.js";class D{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await P(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await j(s),h(e);const a=I(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!m(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=_(x(d(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};C(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:p,objectIdField:y,customParameters:c}=e;this._featureType=p,this._customParameters=c,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new f(r),await this._checkProjection(n),h(t),this._queryEngine=new b({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:i,hasM:!1,hasZ:!1})});const l=await this._snapshotFeatures(w(t.signal));return this._queryEngine.featureStore.addMany(l),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),F(s)||q.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await T(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{D as default};
