import{fR as g,s as _,hs as $,fP as O,cA as C,b9 as k,ar as D,aj as Q,c5 as v,r as F,cc as P,ct as A,C as G,bo as q,cq as Z,cs as M,ht as N}from"./main.d81f1731.js";import{m as z}from"./FeatureStore.8d6f38fb.js";import{f as E,g as b}from"./projectionSupport.c2d15f30.js";import{L}from"./QueryEngine.3ff75ee6.js";import{T as B,L as W,O as J}from"./geojson.cef56889.js";import{u as U,i as V,n as H}from"./clientSideDefaults.60dc264d.js";import{y as Y,d as T,c as w,u as I,h as x}from"./sourceUtils.4b99abcb.js";import"./PooledRBush.86e8db31.js";import"./centroid.141a44b8.js";import"./json.2d0d6862.js";import"./WhereClause.e06b3aad.js";import"./QueryEngineCapabilities.83e56447.js";import"./quantizationUtils.06afb82e.js";import"./utils.7a3261b9.js";import"./spatialQuerySupport.858b50c1.js";const K={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class me{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=await this._fetch(t?.signal));const a=B(n,{geometryType:e.geometryType}),o=e.fields||a.fields||[],u=e.hasZ!=null?e.hasZ:a.hasZ,d=a.geometryType,p=e.objectIdField||a.objectIdFieldName||"__OBJECTID",h=e.spatialReference||g;let s=e.timeInfo;o===a.fields&&a.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:a.unknownFields}});let l=o.find(r=>r.name===p);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1):(l={alias:p,name:p,type:a.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(l));const c={};for(const r of o){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new _("geojson-layer:invalid-field-name","field name is missing",{field:r});if(!$.jsonValues.includes(r.type))throw new _("geojson-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});if(r.name!==l.name){const f=O(r);f!==void 0&&(c[r.name]=f)}}this._fieldsIndex=new C(o);const y=this._fieldsIndex.requiredFields.indexOf(l);if(y>-1&&this._fieldsIndex.requiredFields.splice(y,1),s){if(s.startTimeField){const r=this._fieldsIndex.get(s.startTimeField);r?(s.startTimeField=r.name,r.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const r=this._fieldsIndex.get(s.endTimeField);r?(s.endTimeField=r.name,r.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const r=this._fieldsIndex.get(s.trackIdField);r?s.trackIdField=r.name:(s.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}const S=d?U(d):null,m={warnings:i,featureErrors:[],layerDefinition:{...K,drawingInfo:S,templates:V(c),extent:null,geometryType:d,objectIdField:p,fields:o,hasZ:!!u,timeInfo:s}};this._queryEngine=new L({fields:o,geometryType:d,hasM:!1,hasZ:u,objectIdField:p,spatialReference:h,timeInfo:s,featureStore:new z({geometryType:d,hasM:!1,hasZ:u}),cacheSpatialQueries:!0}),this._createDefaultAttributes=H(c,p);const j=await this._createFeatures(n);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const R=this._normalizeFeatures(j,m.warnings,m.featureErrors);if(this._queryEngine.featureStore.addMany(R),m.layerDefinition.extent=this._queryEngine.fullExtent,m.layerDefinition.timeInfo){const{start:r,end:f}=this._queryEngine.timeExtent;m.layerDefinition.timeInfo.timeExtent=[r,f]}return m}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([Y(t,i),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=k(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const n=this._normalizeFeatures(i);n&&this._queryEngine.featureStore.addMany(n)},i=>{this._queryEngine.featureStore.clear(),D(i)||Q.getLogger("esri.layers.GeoJSONLayer").error(new _("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:i,objectIdField:n}=this._queryEngine,a=W(e,{geometryType:t,hasZ:i,objectIdField:n});if(!v(this._queryEngine.spatialReference,g))for(const o of a)F(o.geometry)&&(o.geometry=P(b(A(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),g,this._queryEngine.spatialReference)));return a}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:i}=this.loadOptions,n=(await G(t,{responseType:"json",query:{...i},signal:e})).data;return await J(n),n}_normalizeFeatures(e,t,i){const{objectIdField:n}=this._queryEngine,a=[];for(const o of e){const u=this._createDefaultAttributes(),d=T(this._fieldsIndex,u,o.attributes,!0,t);d?i?.push(d):(this._assignObjectId(u,o.attributes,!0),o.attributes=u,o.objectId=u[n],a.push(o))}return a}_applyEdits(e){const{adds:t,updates:i,deletes:n}=e,a={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(a,t),i&&i.length&&this._applyUpdateEdits(a,i),n&&n.length){for(const o of n)a.deleteResults.push(w(o));this._queryEngine.featureStore.removeManyById(n)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:a}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:n,hasM:a,hasZ:o,objectIdField:u,spatialReference:d,featureStore:p}=this._queryEngine,h=[];for(const s of t){if(s.geometry&&n!==q(s.geometry)){i.push(I("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),c=T(this._fieldsIndex,l,s.attributes);if(c)i.push(c);else{if(this._assignObjectId(l,s.attributes),s.attributes=l,s.uid!=null){const y=s.attributes[u];e.uidToObjectId[s.uid]=y}F(s.geometry)&&(s.geometry=b(x(s.geometry,d),s.geometry.spatialReference,d)),h.push(s),i.push(w(s.attributes[u]))}}p.addMany(Z([],h,n,o,a,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:n,hasZ:a,objectIdField:o,spatialReference:u,featureStore:d}=this._queryEngine;for(const p of t){const{attributes:h,geometry:s}=p,l=h&&h[o];if(l==null){e.push(I(`Identifier field ${o} missing`));continue}if(!d.has(l)){e.push(I(`Feature with object id ${l} missing`));continue}const c=M(d.getFeature(l),i,a,n);if(F(s)){if(i!==q(s)){e.push(I("Incorrect geometry type."));continue}c.geometry=b(x(s,u),s.spatialReference,u)}if(h){const y=T(this._fieldsIndex,c.attributes,h);if(y){e.push(y);continue}}d.add(N(c,i,a,n,o)),e.push(w(l))}}_createObjectIdGenerator(e,t){const i=e.fieldsIndex.get(e.objectIdField);if(i.type==="esriFieldTypeString")return()=>i.name+"-"+Date.now().toString(16);let n=Number.NEGATIVE_INFINITY;for(const a of t)a.objectId&&(n=Math.max(n,a.objectId));return n=Math.max(0,n)+1,()=>n++}_assignObjectId(e,t,i=!1){const n=this._queryEngine.objectIdField;e[n]=i&&n in t?t[n]:this._objectIdGenerator()}async _checkProjection(e){try{await E(g,e)}catch{throw new _("geojson-layer","Projection not supported")}}}export{me as default};
