import{cp as B,cq as U,cr as v,cs as O,f as d,ct as _,cu as G,r as p,cv as N,ai as P,a as S,cw as L,V as $,aq as F,s as A,cx as H,cy as Y,cz as X,c9 as Z,A as l,aM as j}from"./main.805a311c.js";import{b as w,t as Q}from"./FeatureSetReader.7d002d29.js";import{N as q,O as V,K as J,l as M,J as K}from"./definitions.21e97413.js";import{c as W,u as tt,f,e as et,b as st,n as rt,l as it,r as nt,s as k,d as h}from"./visualVariablesUtils.2ab06c69.js";import{Q as at}from"./Utils.93118947.js";function ot({coords:u,lengths:t}){let e=0;for(const s of t){for(let r=1;r<s;r++)u[2*(e+r)]+=u[2*(e+r)-2],u[2*(e+r)+1]+=u[2*(e+r)-1];e+=s}}class g extends w{constructor(t,e,s){super(t),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s,this._features=e}static fromFeatures(t,e,s){const r=B([],t,e,!1,!1,s);for(let i=0;i<r.length;i++)r[i].displayId=t[i].displayId;return g.fromOptimizedFeatures(r,e)}static fromFeatureSet(t,e){const s=U(t,e);return g.fromOptimizedFeatureSet(s)}static fromOptimizedFeatureSet(t){const{features:e,geometryType:s}=t,r=g.fromOptimizedFeatures(e,s);r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform;for(const i of t.fields)i.type==="esriFieldTypeDate"&&r._dateFields.add(i.name);return r}static fromOptimizedFeatures(t,e,s){const r=w.createInstance(),i=new g(r,t,e);return i._transform=s,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter(s=>!e.has(s.objectId))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new g(this.instance,this._features,this.geometryType);return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return v(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return O(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return d(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return _(this._current)?G(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if(this.geometryType==="esriGeometryPoint"||!t)return t;const e=t.clone();return ot(e),e}readHydratedGeometry(){const t=this._current.geometry;if(d(t))return null;const e=t.clone();return p(this._transform)&&N(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!_(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return d(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!_(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return d(e)?t:e.translate[1]-t*e.scale[1]}getX(){return _(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return _(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!_(this._current))return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){if(!_(this._current))return null;if(!this._current.centroid){const e=this._computeCentroid();if(!e)return null;e.coords[0]=(e.coords[0]-this._tx)/this._sx,e.coords[1]=(e.coords[1]-this._ty)/this._sy,this._current.centroid=e}const t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}_readAttribute(t,e){const s=this._current.attributes[t];if(s!==void 0)return s!=null&&e&&this._dateFields.has(t)?new Date(s):s;const r=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const n in r)if(n.toLocaleLowerCase().trim()===i){const a=this._current.attributes[n];return a!=null&&e&&this._dateFields.has(n)?new Date(a):a}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const m=P.getLogger("esri.views.layers.2d.features.support.AttributeStore"),I=rt(it,m),x={sharedArrayBuffer:S("esri-shared-array-buffer"),atomics:S("esri-atomics")};function D(u,t){return e=>t(u(e))}class ht{constructor(t,e,s,r){this.size=0,this.texelSize=4;const{pixelType:i,layout:n,textureOnly:a}=r;this.textureOnly=a||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(i,s,t,e))}get buffer(){return Z(this.data,t=>t.buffer)}unsetComponentAllTexels(t,e){const s=l(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=l(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=l(this.data);for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){l(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){l(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=f(t);return l(this.data)[s*this.texelSize+e]}setData(t,e,s){const r=f(t),i=1<<e;(this.layout&i)!=0?(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):m.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===5121&&this._shared&&x.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===5121&&this._shared&&x.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=l(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||this._ctype==="local"),i=this.pixelType,n=this.layout,a=l(this.data);return{start:t,end:e,data:r&&a.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&r!=="local"?SharedArrayBuffer:ArrayBuffer,n=at(t),a=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let o=0;o<a.length;o+=4)a[o+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class gt{constructor(t,e){this._client=t,this.config=e,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(q),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?5126:5121;I(`Creating AttributeStore ${x.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}update(t,e){this.config=e;const s=e.schema.processors[0].storage,r=L(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),r&&(S("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),t.storage.data=!0,this._schema=s,this._attributeComputeMap.clear(),!d(s))){switch(s.target){case"feature":this._targetType=tt;break;case"aggregate":this._targetType=W}if(s.type==="subtype")for(const i in s.mapping){const n=s.mapping[i];if(p(n))for(const a of n.mapping)this._bindAttribute(a)}else for(const i of s.mapping)this._bindAttribute(i)}}onTileData(t,e){if(d(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const r=s.getDisplayId();this.setAttributeData(r,s)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController}async setHighlight(t,e){const r=this._getBlock(0),i=e.map(n=>f(n));r.lock(),r.unsetComponentAllTexels(0,1),r.setComponent(0,1,i),r.unlock(),this._idsToHighlight.clear();for(const n of t)this._idsToHighlight.add(n);await this.sendUpdates()}async updateFilters(t,e){const{config:s,service:r,spatialReference:i}=e,{filters:n}=s,a=n.map((o,c)=>this._updateFilter(o,c,r,i));(await Promise.all(a)).some(o=>o)&&(t.storage.filters=!0,S("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=f(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?V:0}unsetAttributeData(t){const e=f(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=f(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==et(t))return;const r=this._attributeComputeMap,i=this.config.supportsTextureFloat?1:2,n=4;r.size&&r.forEach((a,o)=>{const c=o*i%n,b=Math.floor(o*i/n),y=this._getBlock(b+J),T=a(e);if(this.config.supportsTextureFloat)y.setData(s,c,T);else if(T===M)y.setData(s,c,255),y.setData(s,c+1,255);else{const C=j(Math.round(T),-32767,32766)+32768,E=255&C,R=(65280&C)>>8;y.setData(s,c,E),y.setData(s,c+1,R)}})}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=$(),this._nextUpdate.promise;const t={blocks:this._blocks.map(e=>p(e)?e.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const r=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>r.resolve())}},s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s}).catch(e=>F(e)?(this._createResourcesPromise=null,this._createResources()):(m.error(new A("mapview-attribute-store","Encountered an error during client update",e)),Promise.resolve())),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){function e(){return t.normalizationField?n=>{const a=n.readAttribute(t.normalizationField);return a?n.readAttribute(t.field)/a:null}:n=>n.readAttribute(t.field)}function s(){return t.normalizationField&&m.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),n=>n.getComputedNumericAtIndex(t.fieldIndex)}let r;if(t.fieldIndex!=null)r=s();else{if(!t.field)return;r=e()}t.valueRepresentation&&(r=D(r,n=>nt(n,t.valueRepresentation)));const i=n=>n===null||isNaN(n)||n===1/0?M:n;this._attributeComputeMap.set(t.binding,D(r,i))}_createResources(){if(p(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(K),I("Initializing AttributeStore");const t={shared:x.sharedArrayBuffer&&this._client.type!=="local",size:this._size,blocks:H(this._blocks,s=>({textureOnly:s.textureOnly,buffer:s.buffer,pixelType:s.pixelType}))},e=this._client.initialize(t,this._signal).catch(s=>{F(s)?this._createResourcesPromise=null:m.error(new A("mapview-attribute-store","Encountered an error during client initialization",s))});return this._createResourcesPromise=e,e.then(()=>d(this._createResourcesPromise)?this._createResources():void 0),e}_getBlock(t){const e=this._blocks[t];if(p(e))return e;I(`Initializing AttributeBlock at index ${t}`);const s=x.sharedArrayBuffer,r=this._client.type,i=new ht(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=i,this._createResourcesPromise=null,i}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return I("Expanding block size to",t,this._blocks),Y(this._blocks,e=>e.expand(t)),this._createResourcesPromise=null,this._size=t,0}return m.error(new A("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,r){const i=this._filters[e],n=p(i)&&i.hash;if(!i&&!t||n===JSON.stringify(t))return!1;if(d(t)){if(!i)return!1;const o=1<<e+1,c=this._getBlock(0);return this._filters[e]=null,c.setComponentAllTexels(0,o),this.sendUpdates(),!0}return await(await this._getFilter(e,s)).update(t,r),!0}async _getFilter(t,e){const s=this._filters[t];if(p(s))return s;const{default:r}=await import("./FeatureFilter.898e6920.js"),i=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new X(e.fields)});return this._filters[t]=i,i}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=st(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const n=!!(s&1<<i),a=this._filters[i];e|=(!n||d(a)||a.check(t)?1:0)<<i}let r=0;if(this._idsToHighlight.size){const i=t.getObjectId();r=this.getHighlightFlag(i)}return e<<1|r}}class ut{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return k(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function z(u,t,e){if(!(u.length>t))for(;u.length<=t;)u.push(e)}class ft{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new ut,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(Q.create(this._allocatedSize,h)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),z(this._numerics[t],e,0)}_ensureInstanceId(t){z(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),z(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),k(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&h)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&h,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&h,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&h,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&h,0,s)}getComputedNumericAtIndex(t,e){const s=t&h;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&h;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&h;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&h;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&h;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&h;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&h)]}getYMin(t){return this._bounds[4*(t&h)+1]}getXMax(t){return this._bounds[4*(t&h)+2]}getYMax(t){return this._bounds[4*(t&h)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,i=1/0,n=-1/0,a=-1/0;s.forEachVertex((c,b)=>{r=Math.min(r,c),i=Math.min(i,b),n=Math.max(n,c),a=Math.max(a,b)});const o=t&h;return z(this._bounds,4*o+4,0),this._bounds[4*o]=r,this._bounds[4*o+1]=i,this._bounds[4*o+2]=n,this._bounds[4*o+3]=a,!0}}export{gt as M,g as d,ft as r};
