import{r as x,C as f,s as u,jC as A,E as K,at as $,dv as E,aj as L,e as d,d as c,jI as M,p as w,cN as m,M as S,d2 as k,d3 as q,cl as F,i as C,q as z,jJ as V,dl as J,jK as D,jL as B,jM as Z,O as b,b as G,B as O,_ as H}from"./main.368f1782.js";import{getSiblingOfSameTypeI as Q}from"./resourceUtils.eeba0eff.js";async function W(s,a,e,t,i,r){let o=null;if(x(e)){const n=`${s}/nodepages/`,h=n+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await f(h,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:n}}catch(v){x(i)&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",h,v),o=v}}if(!a)return null;const l=`${s}/nodes/`,p=l+(a&&a.split("/").pop());try{return{type:"node",rootNode:(await f(p,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:l}}catch(n){throw new u("sceneservice:root-node-missing","Root node missing.",{pageError:o,nodeError:n,url:p})}}function X(s){return s&&"getAtOrigin"in s&&"originOf"in s}function j(s){s&&s.writtenProperties&&s.writtenProperties.forEach(a=>{const e=a.target;a.newOrigin&&a.oldOrigin!==a.newOrigin&&X(e)&&e.updateOrigin(a.propName,a.newOrigin)})}async function R(s,a,e){if(!a||!a.resources)return;const t=a.portalItem===s.portalItem?new Set(s.paths):new Set;s.paths.length=0,s.portalItem=a.portalItem;const i=new Set(a.resources.toKeep.map(n=>n.resource.path)),r=new Set,o=[];i.forEach(n=>{t.delete(n),s.paths.push(n)});for(const n of a.resources.toUpdate)if(t.delete(n.resource.path),i.has(n.resource.path)||r.has(n.resource.path)){const{resource:h,content:v,finish:P,error:U}=n,_=Q(h,A());s.paths.push(_.path),o.push(N({resource:_,content:v,finish:P,error:U},e))}else s.paths.push(n.resource.path),o.push(Y(n,e)),r.add(n.resource.path);for(const n of a.resources.toAdd)o.push(N(n,e)),s.paths.push(n.resource.path);if(t.forEach(n=>{const h=a.portalItem.resourceFromPath(n);o.push(h.portalItem.removeResource(h).catch(()=>{}))}),o.length===0)return;const l=await K(o);$(e);const p=l.filter(n=>"error"in n).map(n=>n.error);if(p.length>0)throw new u("save:resources","Failed to save one or more resources",{errors:p})}async function N(s,a){const e=await E(s.resource.portalItem.addResource(s.resource,s.content,a));if(e.ok!==!0)throw s.error&&s.error(e.error),e.error;s.finish&&s.finish(s.resource)}async function Y(s,a){const e=await E(s.resource.update(s.content,a));if(e.ok!==!0)throw s.error(e.error),e.error;s.finish(s.resource)}const y=L.getLogger("esri.layers.mixins.SceneService"),oe=s=>{let a=class extends s{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=z(async(e,t,i)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(i,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return w.fromJSON(e.spatialReference);{const t=e.store,i=t.indexCRS||t.geographicCRS,r=i&&parseInt(i.substring(i.lastIndexOf("/")+1,i.length),10);return r!=null?new w(r):null}}readFullExtent(e,t,i){if(e!=null&&typeof e=="object"){const l=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return S.fromJSON(l,i)}const r=t.store,o=this._readSpatialReference(t);return o==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<I)?null:new S({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},i=e.split(".");return i.length>=2&&(t.major=parseInt(i[0],10),t.minor=parseInt(i[1],10)),t}readVersion(e,t){const i=t.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const i=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return V(this.url,t.name);let r=t.name;if(!r&&this.url){const o=J(this.url);x(o)&&(r=o.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),D(r)}set url(e){const t=B({layer:this,url:e,nonStandardUrlAllowed:!1,logger:y});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){Z(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=b(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=W(this.parsedUrl.path,this.rootNode,e,this.apiKey,y,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if(e?.type==="page"){var t,i;const o=e.rootIndex%e.pageSize,l=(t=e.rootPage)==null||(i=t.nodes)==null?void 0:i[o];if(l==null||l.obb==null||l.obb.center==null||l.obb.halfSize==null)throw new u("sceneservice:invalid-node-page","Invalid node page.");if(l.obb.center[0]<I||this.fullExtent==null||this.fullExtent.hasZ)return;const p=l.obb.halfSize,n=l.obb.center[2],h=Math.sqrt(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]);this.fullExtent.zmin=n-h,this.fullExtent.zmax=n+h}else if(e?.type==="node"){var r;const o=(r=e.rootNode)==null?void 0:r.mbs;if(!Array.isArray(o)||o.length!==4||o[0]<I)return;const l=o[2],p=o[3];this.fullExtent.zmin=l-p,this.fullExtent.zmax=l+p}}async _fetchService(e){if(this.url==null)throw new u("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await f(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await f(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(i=!0),i)return this.read(t.data,{origin:"service",url:this.parsedUrl}),this._fetchVoxelServiceLayer();const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){const t=(await f(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,i){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const o of r)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((o,l,p)=>p.indexOf(o)===l),i===1&&(e.typeKeywords=e.typeKeywords.filter(o=>o!=="Hosted Service")))}async _saveAs(e,t){const i={...T,...t};let r=G.from(e);r||(y.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new u("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const o=r.portal||O.getDefault();await this._ensureLoadBeforeSave(),r.type=g,r.portal=o;const l={origin:"portal-item",url:null,messages:[],portal:o,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},p={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations),await this._validateAgainstJSONSchema(p,l,i),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,i,1),await o._signIn(),await o.user.addItem({item:r,folder:i&&i.folder,data:p}),await R(this.resourceReferences,l,null),this.portalItem=r,j(l),l.portalItem=r,r}async _save(e){const t={...T,...e};this.portalItem||(y.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new u("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==g&&(y.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+g),await Promise.reject(new u("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${g}"`))),await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&b(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||O.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(r,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:r}),await R(this.resourceReferences,i,null),j(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){let r=t.messages.filter(o=>o.type==="error").map(o=>new u(o.name,o.message,o.details));if(i&&i.validationOptions.ignoreUnsupported&&(r=r.filter(o=>o.name!=="layer:unsupported"&&o.name!=="symbol:unsupported"&&o.name!=="symbol-layer:unsupported"&&o.name!=="property:unsupported"&&o.name!=="url:unsupported"&&o.name!=="scenemodification:unsupported")),i.validationOptions.enabled||ee){const o=(await H(()=>import("./schemaValidator.aee8a868.js"),["assets/schemaValidator.aee8a868.js","assets/main.368f1782.js","assets/main.6f812d7a.css","assets/_commonjsHelpers.8a97ce0f.js"])).validate(e,i.portalItemLayerType);if(o.length>0){const l=`Layer item did not validate:
${o.join(`
`)}`;if(y.error(`_validateAgainstJSONSchema(): ${l}`),i.validationOptions.failPolicy==="throw"){const p=o.map(n=>new u("sceneservice:schema-validation",n)).concat(r);throw new u("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:p})}}}if(r.length>0)throw new u("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return d([c(M)],a.prototype,"id",void 0),d([c({type:w})],a.prototype,"spatialReference",void 0),d([m("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),d([c({type:S})],a.prototype,"fullExtent",void 0),d([m("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),d([c({readOnly:!0,type:k})],a.prototype,"heightModelInfo",void 0),d([c({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),d([c({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),d([c({readOnly:!0})],a.prototype,"version",void 0),d([m("version",["store.version"])],a.prototype,"readVersion",null),d([c({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),d([c({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),d([c({type:String})],a.prototype,"title",void 0),d([m("portal-item","title")],a.prototype,"readTitlePortalItem",null),d([m("service","title",["name"])],a.prototype,"readTitleService",null),d([c({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),d([c(q)],a.prototype,"url",null),d([F("url")],a.prototype,"writeUrl",null),d([c()],a.prototype,"parsedUrl",null),d([c({readOnly:!0})],a.prototype,"store",void 0),d([c({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),a=d([C("esri.layers.mixins.SceneService")],a),a},I=-1e38,ee=!1,g="Scene Service",T={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};export{oe as N,X as i,W as n};
