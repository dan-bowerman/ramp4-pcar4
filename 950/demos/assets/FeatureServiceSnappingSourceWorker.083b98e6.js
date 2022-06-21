import{e as a,d as o,i as S,aQ as M,bb as j,b9 as w,hc as P,f as p,dt as T,bA as x,aj as _,hd as B,r as l,he as q,hf as k,hg as F,M as H,bG as N,J as L,A as J,hh as V,hi as Q,hj as D,hk as G,cr as U,dp as Z,fV as W,hl as X,hm as z,P as K,hn as A,b8 as Y,ho as ee,hp as te,p as E,at as y,hq as se,du as ie,hr as re}from"./main.5d3fa3f4.js";import{e as ne,m as ae}from"./FeatureStore.4738e5ed.js";import{L as oe}from"./QueryEngine.fda7953f.js";import"./PooledRBush.cae93679.js";import"./centroid.f6553013.js";import"./WhereClause.d2600853.js";import"./projectionSupport.42e57db8.js";import"./json.2d0d6862.js";import"./QueryEngineCapabilities.83e56447.js";import"./quantizationUtils.1d77df6f.js";import"./utils.b6e32621.js";import"./spatialQuerySupport.b1180011.js";let b=class extends M{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(e,t){this.pending.push({promise:e,callback:t}),this.pending.length===1&&this.process()}process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const e=this.pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this.pending.shift(),this.process()})}};a([o()],b.prototype,"updating",void 0),b=a([S("esri.core.AsyncSequence")],b);class le{constructor(t,s){this.data=t,this.resolution=s,this.state={type:0},this.alive=!0}process(t){switch(this.state.type){case 0:return this.state=this.gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 1:case 3:break;case 2:return this.state=this.gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 4:this.state=this.goToDone(this.state,t)}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case 0:case 1:return 0;case 2:return this.state.featureCount;case 3:return this.state.previous.featureCount;case 4:return this.state.features.length;case 5:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case 0:return"created";case 1:return"fetch-count";case 2:return"fetched-count";case 3:return"fetch-features";case 4:return"fetched-features";case 5:return"done"}}gotoFetchCount(t,s){return{type:1,previous:t,task:w(async i=>{const r=await P(s.fetchCount(this,i));this.state.type===1&&(this.state=this.gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}gotoFetchedCount(t,s){return{type:2,featureCount:s,previous:t}}gotoFetchFeatures(t,s){return{type:3,previous:t,task:w(async i=>{const r=await P(s.fetchFeatures(this,t.featureCount,i));this.state.type===3&&(this.state=this.gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}gotoFetchedFeatures(t,s){return{type:4,previous:t,features:s}}goToDone(t,s){return s.finish(this,t.features),{type:5,previous:t}}reset(){const t=this.state;switch(this.state={type:0},t.type){case 0:case 2:case 4:case 5:break;case 1:case 3:t.task.abort()}}intersects(t){return!(!p(t)&&this.data.extent)||(T(t,O),x(this.data.extent,O))}}const O=j(),ue=_.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let h=class extends B{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new b,this.pendingEditsAbortController=new AbortController}get minimumVerticesPerFeature(){var e;switch((e=this.store)==null?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),s=this.filterProperties(e);JSON.stringify(t)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(l(e)&&l(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this.initializeFetchExtent(),this.updatingHandles.add(this,"configuration",()=>this.refresh()),this.updatingHandles.add(this,"tilesOfInterest",(e,t)=>{q(e,t,({id:s},{id:i})=>s===i)||this.process()},1)}destroy(){this.pendingTiles.forEach(e=>this.deletePendingTile(e)),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach(e=>this.deletePendingTile(e)),this.process()}applyEdits(e){this.pendingEdits.push(e,async t=>{if(t.addedFeatures.length===0&&t.updatedFeatures.length===0&&t.deletedFeatures.length===0)return;for(const[,i]of this.pendingTiles)i.reset();const s={...t,deletedFeatures:t.deletedFeatures.map(({objectId:i,globalId:r})=>i&&i!==-1?i:this.lookupObjectIdByGlobalId(r))};await this.updatingHandles.addPromise(this.store.processEdits(s,(i,r)=>this.queryFeaturesById(i,r),this.pendingEditsAbortController.signal)),this.processPendingTiles()})}initializeFetchExtent(){if(!this.capabilities.query.supportsExtent)return;const e=w(async t=>{try{var s;const i=await k(this.url,new F({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this.configuration.customParameters,signal:t});this.store.extent=H.fromJSON((s=i.data)==null?void 0:s.extent)}catch(i){N(i),ue.warn("Failed to fetch data extent",i)}});this.updatingHandles.addPromise(e.promise.then(()=>this.process())),this.handles.add(L(()=>e.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}process(){this.markTilesNotAlive(),this.createPendingTiles(),this.deletePendingTiles(),this.processPendingTiles()}markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1}createPendingTiles(){const e=this.collectMissingTilesInfo();if(this.setAvailability(p(e)?1:e.coveredArea/e.fullArea),!p(e))for(const{data:t,resolution:s}of e.missingTiles){const i=this.pendingTiles.get(t.id);i?(i.resolution=s,i.alive=!0):this.createPendingTile(t,s)}}collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.tilesOfInterest[t],i=this.store.process(s,(r,n)=>this.verifyTileComplexity(r,n));p(e)?e=i:e.prepend(i)}return e}deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this.deletePendingTile(e)}processPendingTiles(){const e={fetchCount:(t,s)=>this.fetchCount(t,s),fetchFeatures:(t,s,i)=>this.fetchFeatures(t,s,i),finish:(t,s)=>this.finishPendingTile(t,s),resume:()=>this.processPendingTiles()};if(this.ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this.verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}verifyTileComplexity(e,t){return this.verifyVertexComplexity(e)&&this.verifyFeatureDensity(e,t)}verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<ce}verifyFeatureDensity(e,t){if(p(this.tileInfo))return!1;const s=this.tileSize*t;return e*(de/(s*s))<pe}ensureFetchAllCounts(e){let t=!0;for(const[,s]of this.pendingTiles)s.state.type<2&&this.updatingHandles.addPromise(s.process(e)),s.state.type<=1&&(t=!1);return t}finishPendingTile(e,t){this.store.add(e.data,t),this.deletePendingTile(e),this.updateAvailability()}updateAvailability(){const e=this.collectMissingTilesInfo();this.setAvailability(p(e)?1:e.coveredArea/e.fullArea)}setAvailability(e){this._set("availability",e)}createPendingTile(e,t){const s=new le(e,t);return this.pendingTiles.set(e.id,s),s}deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id)}async fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this.createCountQuery(e),{query:this.customParameters,timeout:I,signal:t})}async fetchFeatures(e,t,s){let i,r=0,n=0,c=t;for(;;){const f=this.createFeaturesQuery(e),d=this.setPagingParameters(f,r,c),{features:u,exceededTransferLimit:g}=await this.queryFeatures(f,s);if(d&&(r+=J(f.num)),n+=u.length,i=i?i.concat(u):u,c=t-n,!d||!g||c<=0)return i}}filterProperties(e){return p(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}lookupObjectIdByGlobalId(e){const t=this.globalIdField,s=this.objectIdField;if(p(t))throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach(r=>{var n;e===r.attributes[t]&&(i=(n=r.objectId)!=null?n:r.attributes[s])}),p(i))throw new Error(`Expected to find a feature with globalId ${e}`);return i}queryFeaturesById(e,t){const s=this.createFeaturesQuery(null);return s.objectIds=e,this.queryFeatures(s,t)}queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this.queryFeaturesPBF(e,t):this.queryFeaturesJSON(e,t)}async queryFeaturesPBF(e,t){const{sourceSpatialReference:s}=this,{data:i}=await V(this.url,e,new Q({sourceSpatialReference:s}),{query:this.configuration.customParameters,timeout:I,signal:t});return D(i)}async queryFeaturesJSON(e,t){const{sourceSpatialReference:s}=this,{data:i}=await G(this.url,e,s,{query:this.configuration.customParameters,timeout:I,signal:t});return U(i,this.objectIdField)}createCountQuery(e){const t=this.createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}createFeaturesQuery(e){const t=this.createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,l(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}createBaseQuery(e){const t=new F({returnZ:!1,returnM:!1,geometry:l(this.tileInfo)&&l(e)?Z(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this.configuration.filter;return l(s)&&(t.where=s.where,t.gdbVersion=s.gdbVersion,t.timeExtent=s.timeExtent),t.outSpatialReference=this.spatialReference,t}setPagingParameters(e,t,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:c,supportsResultType:f}=this.capabilities.query,d=i?F.MAX_MAX_RECORD_COUNT_FACTOR:1,u=d*((f||r)&&n?n:c||he);return e.start=t,i?(e.maxRecordCountFactor=Math.min(d,Math.ceil(s/u)),e.num=Math.min(s,e.maxRecordCountFactor*u)):e.num=Math.min(s,u),!0}};a([o({constructOnly:!0})],h.prototype,"url",void 0),a([o({constructOnly:!0})],h.prototype,"objectIdField",void 0),a([o({constructOnly:!0})],h.prototype,"globalIdField",void 0),a([o({constructOnly:!0})],h.prototype,"capabilities",void 0),a([o({constructOnly:!0})],h.prototype,"sourceSpatialReference",void 0),a([o({constructOnly:!0})],h.prototype,"spatialReference",void 0),a([o({constructOnly:!0})],h.prototype,"store",void 0),a([o({readOnly:!0})],h.prototype,"minimumVerticesPerFeature",null),a([o()],h.prototype,"filter",null),a([o()],h.prototype,"customParameters",null),a([o({readOnly:!0})],h.prototype,"configuration",null),a([o()],h.prototype,"tileInfo",null),a([o()],h.prototype,"tileSize",null),a([o()],h.prototype,"tilesOfInterest",void 0),a([o({readOnly:!0})],h.prototype,"updating",null),a([o({readOnly:!0})],h.prototype,"availability",void 0),h=a([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],h);const he=2e3,I=6e5,ce=1e6,de=25,pe=1;function fe(e){return 32+e.length}function ge(){return 16}function ye(e){if(!e)return 0;let t=32;for(const s in e)if(e.hasOwnProperty(s)){const i=e[s];switch(typeof i){case"string":t+=fe(i);break;case"number":t+=ge();break;case"boolean":t+=4}}return t}function $(e,t){return 32+e.length*t}class me{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=s.byteSize,!0)}get(t){return this.used(t),this._store.get(t)}has(t){return this.used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[i,r]of this._store){if(this._byteSize<=t)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let m=class extends M{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10485760,this.tileBounds=new ne,this.tiles=new me,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=j()}add(e,t){const s=[];for(const i of t)this.referenceFeature(i.objectId)===0&&s.push(i);this.addTileStorage(e,new Set(t.map(({objectId:i})=>i)),ve(t)),this.featureStore.addMany(s),this.tiles.applyByteSizeLimit(this.maximumByteSize,i=>this.removeTileStorage(i))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(e,t,s){return this.processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this.processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}addTileStorage(e,t,s){this.tiles.set(e.id,new Se(e,t,s)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}remove({id:e}){const t=this.tiles.get(e);t&&this.removeTileStorage(t)}removeTileStorage(e){const t=[];for(const i of e.objectIds)this.unreferenceFeature(i)===1&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s)}processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const s of e)t.objectIds.delete(s);this.tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this.refCounts.delete(t)}async processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const c of i){const f=W(this.tmpBoundingRect,c.geometry,r,n);p(f)||this.tileBounds.forEachInBounds(f,d=>{const u=this.tiles.get(d);this.featureStore.add(c),u.objectIds.has(c.objectId)||(u.objectIds.add(c.objectId),this.referenceFeature(c.objectId),this.tileFeatureCounts.set(u.data.id,u.objectIds.size))})}}process(e,t=()=>!0){if(p(this.tileInfo)||!e.extent||l(this.extent)&&!x(T(this.extent,this.tmpBoundingRect),e.extent))return new C(e);if(this.tiles.has(e.id))return new C(e);const s=this.createTileTree(e,this.tileInfo);return this.simplify(s,t,null,0,1),this.collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map(({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){const t=this.tileFeatureCounts.get(e.id);return t??0}async fetchCount(e,t,s,i){const r=this.tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await X(t,s,i);return this.tileFeatureCounts.set(e.id,n.data.count),n.data.count}createTileTree(e,t){const s=new R(e.level,e.row,e.col);return t.updateTileInfo(s,1),this.tileBounds.forEachInBounds(e.extent,i=>{const r=this.tiles.get(i).data;this.tilesAreRelated(e,r)&&this.populateChildren(s,r,t,this.tileFeatureCounts.get(r.id)||0)}),s}tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,c=t.col>>r,f=e.row<<1,d=c-(e.col<<1)+(n-f<<1),u=e.children[d];if(l(u))this.populateChildren(u,t,s,i);else{const g=new R(e.level+1,n,c);s.updateTileInfo(g,1),e.children[d]=g,this.populateChildren(g,t,s,i)}}simplify(e,t,s,i,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this.remove(e),l(s)&&(s.children[i]=null),n);const c=r/2,f=c*c;let d=0;for(let u=0;u<e.children.length;u++){const g=e.children[u];d+=l(g)?this.simplify(g,t,e,u,c):f}return d===0?this.mergeChildren(e):1-d/n<we&&(this.purge(e),l(s)&&(s.children[i]=null),d=n),d}mergeChildren(e){const t=new Set;let s=0;this.forEachLeaf(e,i=>{const r=this.tiles.get(i.id);if(r){s+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this.referenceFeature(n));this.remove(i)}}),this.addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size)}forEachLeaf(e,t){for(const s of e.children)p(s)||(s.isLeaf?t(s):this.forEachLeaf(s,t))}purge(e){if(!p(e))if(e.isLeaf)this.remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this.purge(s),e.children[t]=null}}collectMissingTiles(e,t,s){const i=new Ie(s,e,this.extent);return this.collectMissingTilesRecurse(t,i,1),i.info}collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const i=s/2;for(let r=0;r<e.children.length;r++){const n=e.children[r];p(n)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),i):this.collectMissingTilesRecurse(n,t,i)}}referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),t===1?0:2}unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return t===0?(this.refCounts.delete(e),1):(t>0&&this.refCounts.set(e,t),2)}get test(){return{tiles:Array.from(this.tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this.refCounts.keys()).map(e=>`${e}:${this.refCounts.get(e)}`)}}};function ve(e){return e.reduce((t,s)=>t+Fe(s),0)}function Fe(e){return 32+be(e.geometry)+ye(e.attributes)}function be(e){if(p(e))return 0;const t=$(e.lengths,4);return 32+$(e.coords,8)+t}a([o({constructOnly:!0})],m.prototype,"featureStore",void 0),a([o()],m.prototype,"tileInfo",void 0),a([o()],m.prototype,"extent",void 0),a([o()],m.prototype,"maximumByteSize",void 0),m=a([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],m);class Se{constructor(t,s,i){this.data=t,this.objectIds=s,this.byteSize=i}}class R{constructor(t,s,i){this.level=t,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(l(this.children[0])||l(this.children[1])||l(this.children[2])||l(this.children[3]))}}class C{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=z(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class Ie{constructor(t,s,i){this.tileInfo=t,this.extent=null,this.info=new C(s),l(i)&&(this.extent=T(i))}addMissing(t,s,i,r){const n={id:null,level:t,row:s,col:i};this.tileInfo.updateTileInfo(n,1),!l(n.extent)||l(this.extent)&&!x(this.extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=z(n.extent))}}const we=.18751;let v=class extends K.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=A(),this.handles=new Y,this.updatingHandles=new ee,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}async setup(e){const{geometryType:t,objectIdField:s,timeInfo:i,fields:r}=e.serviceInfo;return this.featureStore=new ae({...e.serviceInfo,hasZ:!1,hasM:!1}),this.queryEngine=new oe({spatialReference:e.spatialReference,featureStore:this.featureStore,geometryType:t,fields:r,hasZ:!1,hasM:!1,objectIdField:s,timeInfo:i?te.fromJSON(i):null}),this.featureFetcher=new h({store:new m({featureStore:this.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:E.fromJSON(e.spatialReference),sourceSpatialReference:E.fromJSON(e.serviceInfo.spatialReference)}),this.handles.add([this.featureFetcher.watch("availability",n=>this.emit("notify-availability",{availability:n}),!0),this.watch("updating",()=>this.notifyUpdating())]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this.updatingHandles.addPromise(this.whenSetup.promise),this.updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){return await this.whenSetup.promise,y(t),{result:await this.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:l(e.filter)?e.filter:{where:"1=1"}},l(t)?t.signal:null)}}async updateTiles(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),y(t),this.featureFetcher.tileSize=e.tileSize,this.featureFetcher.tilesOfInterest=e.tiles,this.featureFetcher.tileInfo=l(e.tileInfo)?se.fromJSON(e.tileInfo):null,{result:{}}}async refresh(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),y(t),this.featureFetcher.refresh(),{result:{}}}async whenNotUpdating(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),y(t),await ie(re(this,"updating"),t),{result:{}}}async getDebugInfo(e,t){return y(t),{result:this.featureFetcher.debugInfo}}async beginApplyEdits(e,t){this.updatingHandles.addPromise(this.whenSetup.promise),y(t);const s=A();return this.pendingApplyEdits.set(e.id,s),this.featureFetcher.applyEdits(s.promise),this.updatingHandles.addPromise(s.promise),{result:{}}}async endApplyEdits(e,t){const s=this.pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),y(t),{result:{}}}updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=l(e.filter)?F.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};function _e(){return new v}a([o({readOnly:!0})],v.prototype,"updating",null),a([o()],v.prototype,"isInitializing",void 0),v=a([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],v);export{v as FeatureServiceSnappingSourceWorker,_e as default};
