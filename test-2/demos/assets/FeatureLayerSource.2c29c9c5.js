import{o as _,e as f,d as F,i as O,m as w,q as E,r as S,a as q,c as I,Q as v,C as h,f as T,M as A,y as x,g as j,s as R,j as k,k as J,h as N,n as Q,K as b}from"./main.4a115682.js";import{u as U}from"./clientSideDefaults.30cc67d6.js";import"./QueryEngineCapabilities.83e56447.js";const D=new _({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function C(t){return typeof t=="string"?b(t)||{data:t}:new Promise((e,s)=>{const a=new FileReader;a.readAsDataURL(t),a.onload=()=>e(b(a.result)),a.onerror=i=>s(i)})}const $=new Set(["Feature Layer","Table"]);let p=class extends w{constructor(){super(...arguments),this.type="feature-layer",this.refresh=E(async()=>{var t,e;await this.load();const s=(t=this.sourceJSON.editingInfo)==null?void 0:t.lastEditDate;if(s==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const a=s!==((e=this.sourceJSON.editingInfo)==null?void 0:e.lastEditDate);return{dataChanged:a,updates:a?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(t){const e=S(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:s,infoFor3D:a,gdbVersion:i,spatialReference:u,fieldsIndex:r}=this.layer,o=q("featurelayer-pbf")&&t&&I(a)?"pbf":"json";return new v({url:e.path,format:o,fieldsIndex:r,infoFor3D:a,dynamicDataSource:s,gdbVersion:i,sourceSpatialReference:u})}async addAttachment(t,e){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",i=this._getLayerRequestOptions(),u=this._getFormDataForAttachment(e,i.query);try{const r=await h(a,{body:u});return this._createFeatureEditResult(r.data.addAttachmentResult)}catch(r){throw this._createAttachmentErrorResult(s,r)}}async updateAttachment(t,e,s){await this.load();const a=t.attributes[this.layer.objectIdField],i=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",u=this._getLayerRequestOptions({query:{attachmentId:e}}),r=this._getFormDataForAttachment(s,u.query);try{const o=await h(i,{body:r});return this._createFeatureEditResult(o.data.updateAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(a,o)}}async applyEdits(t,e){await this.load();const s=t.addFeatures.map(this._serializeFeature,this),a=t.updateFeatures.map(this._serializeFeature,this),i=this._getFeatureIds(t.deleteFeatures,e?.globalIdUsed);T(s,a,this.layer.spatialReference);const u=[],r=[],o=[...t.deleteAttachments];for(const d of t.addAttachments)u.push(await this._serializeAttachment(d));for(const d of t.updateAttachments)r.push(await this._serializeAttachment(d));const n=u.length||r.length||o.length?{adds:u,updates:r,deletes:o}:null,l={gdbVersion:e?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:e?.rollbackOnFailureEnabled,useGlobalIds:e?.globalIdUsed,returnEditMoment:e?.returnEditMoment,usePreviousEditMoment:e?.usePreviousEditMoment,sessionId:e?.sessionId};e!=null&&e.returnServiceEditsOption?(l.edits=JSON.stringify([{id:this.layer.layerId,adds:s,updates:a,deletes:i,attachments:n}]),l.returnServiceEditsOption=D.toJSON(e?.returnServiceEditsOption),l.returnServiceEditsInSourceSR=e?.returnServiceEditsInSourceSR):(l.adds=s.length?JSON.stringify(s):null,l.updates=a.length?JSON.stringify(a):null,l.deletes=i.length?e!=null&&e.globalIdUsed?JSON.stringify(i):i.join(","):null,l.attachments=n&&JSON.stringify(n));const c=this._getLayerRequestOptions({method:"post",query:l}),m=e!=null&&e.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,g=await h(m+"/applyEdits",c);return this._createEditsResult(g)}async deleteAttachments(t,e){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await h(a,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const s=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:a,url:i}=this.layer,{data:u}=await h(`${i}/${a}`,s),{id:r,extent:o,fullExtent:n,timeExtent:l}=u,c=o||n;return{id:r,fullExtent:c&&A.fromJSON(c),timeExtent:l&&x.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(t,e={}){const{parsedUrl:s}=this.layer,a=s.path;await this.load();const i=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:u}=t,r=[];for(const o of u){const n=a+"/"+o+"/attachments";r.push(h(n,i))}return Promise.all(r).then(o=>u.map((n,l)=>({parentObjectId:n,attachmentInfos:o[l].data.attachmentInfos}))).then(o=>j(o,a))}return this.queryTask.executeAttachmentQuery(t,i)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:a}=await h(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:q("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=a}this.sourceJSON=this._patchServiceJSON(t);const s=t.type;if(!$.has(s))throw new R("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(t){var e;if(t.type!=="Table"&&t.geometryType&&(t==null||(e=t.drawingInfo)==null||!e.renderer)&&!t.defaultSymbol){const s=U(t.geometryType).renderer;k("drawingInfo.renderer",s,t)}return t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t){const{geometry:e,attributes:s}=t;return I(e)?{attributes:s}:e.type==="mesh"||e.type==="extent"?null:{geometry:e.toJSON(),attributes:s}}async _serializeAttachment(t){const{feature:e,attachment:s}=t,{globalId:a,name:i,contentType:u,data:r,uploadId:o}=s,n={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(n.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),o)n.uploadId=o;else if(r){const l=await C(r);n.contentType=l.mediaType,n.data=l.data,r instanceof File&&(n.name=r.name)}return i&&(n.name=i),u&&(n.contentType=u),n}_getFeatureIds(t,e){const s=t[0];return s?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map(s=>s.attributes&&s.attributes[e])}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(t){return t.map(e=>e.globalId)}_createEditsResult(t){var e;const s=t.data,{layerId:a}=this.layer,i=[];let u=null;if(Array.isArray(s))for(const n of s)i.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===a&&(u={addResults:n.addResults,updateResults:n.updateResults,deleteResults:n.deleteResults,attachments:n.attachments,editMoment:n.editMoment});else u=s;const r=(e=u)==null?void 0:e.attachments,o={addFeatureResults:u.addResults?u.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:u.updateResults?u.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:u.deleteResults?u.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:r&&r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:r&&r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:r&&r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[]};if(u.editMoment&&(o.editMoment=u.editMoment),i.length>0){o.editedFeatureResults=[];for(const n of i){const{adds:l,updates:c,deletes:m,spatialReference:g}=n.editedFeatures,d=g?new J(g):null;o.editedFeatureResults.push({layerId:n.id,editedFeatures:{adds:l?.map(y=>this._createEditedFeature(y,d))||[],updates:c?.map(y=>({original:this._createEditedFeature(y[0],d),current:this._createEditedFeature(y[1],d)}))||[],deletes:m?.map(y=>this._createEditedFeature(y,d))||[],spatialReference:d}})}}return o}_createEditedFeature(t,e){return new N({attributes:t.attributes,geometry:Q({...t.geometry,spatialReference:e})})}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new R("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const s=e.details.messages&&e.details.messages[0]||e.message,a=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new R("feature-layer-source:attachment-failure",s,{code:a})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const a in e){const i=e[a];i!=null&&(s.set?s.set(a,i):s.append(a,i))}return s}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:s,dynamicDataSource:a}=this.layer;return{...t,query:{gdbVersion:s,layer:a?JSON.stringify({source:a}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}};f([F()],p.prototype,"type",void 0),f([F({constructOnly:!0})],p.prototype,"layer",void 0),f([F({readOnly:!0})],p.prototype,"queryTask",null),p=f([O("esri.layers.graphics.sources.FeatureLayerSource")],p);const G=p;export{G as default};
