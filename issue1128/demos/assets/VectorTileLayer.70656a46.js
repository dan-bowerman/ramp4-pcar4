import{ai as J,O as I,a4 as K,C as w,s as E,as as j,c8 as z,aq as X,l as $,kG as N,dg as O,hL as b,kr as Y,ks as H,M as Q,$ as k,cU as V,l4 as Z,l5 as q,a0 as G,a9 as ee,l6 as F,l7 as M,hq as U,jo as te,jp as re,cX as se,cY as ie,cZ as le,c_ as oe,j_ as ae,jD as ne,c$ as ue,d3 as ce,bF as C,bC as pe,b8 as he,e as p,d as h,p as ye,ck as de,cM as fe,i as me}from"./main.d79ca98c.js";import{o as ge}from"./jsonContext.747a3c2b.js";import{a as Ae}from"./StyleRepository.f6484e33.js";import"./GeometryUtils.d4e26b77.js";import"./definitions.21e97413.js";let T=null;function Se(t){if(T)return T;const e={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return T=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+e[t]}),T}const ve=J.getLogger("esri.layers.support.SpriteSource"),xe=1.15;class we{constructor(e,r,s,i){this.baseURL=e,this.devicePixelRatio=r,this.maxTextureSize=s,this._spriteImageFormat=i,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const r in this._spritesData)e.push(r);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>xe;const r=I(this.baseURL),s=r.query?"?"+K(r.query):"",i=this._isRetina?"@2x":"",o=`${r.path}${i}.${this._spriteImageFormat}${s}`,l=`${r.path}${i}.json${s}`;return Promise.all([w(l,e),w(o,{responseType:"image",...e})]).then(([a,n])=>{const u=Object.keys(a.data);if(!u||u.length===0||u.length===1&&u[0]==="_ssl"||!n||!n.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=a.data;const y=n.data,A=Math.max(this.maxTextureSize,4096);if(y.width>A||y.height>A){const g=`Sprite resource for style ${r.path} is bigger than the maximum allowed of ${A} pixels}`;throw ve.error(g),new E("SpriteSource",g)}this.width=y.width,this.height=y.height;const d=document.createElement("canvas"),f=d.getContext("2d");d.width=y.width,d.height=y.height,f.drawImage(y,0,0,y.width,y.height);const _=f.getImageData(0,0,y.width,y.height),m=new Uint8Array(_.data);let R;for(let g=0;g<m.length;g+=4)R=m[g+3]/255,m[g]=m[g]*R,m[g+1]=m[g+1]*R,m[g+2]=m[g+2]*R;this.image=m})}}class Ie{constructor(e){this.url=e}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=w(this.url).then(e=>e.data.index)),this._tileIndexPromise}async dataKey(e,r){const s=await this.fetchTileIndex();return j(r),this._getIndexedDataKey(s,e)}_getIndexedDataKey(e,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new z(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let o,l,a=e,n=s.pop();if(a===1)return n;for(;s.length;)if(o=s.pop(),l=(1&o.col)+((1&o.row)<<1),a){if(a[l]===0){n=null;break}if(a[l]===1){n=o;break}n=o,a=a[l]}return n}}class be{constructor(e,r){this._tilemap=e,this._tileIndexUrl=r}async fetchTileIndex(e){return this._tileIndexPromise||(this._tileIndexPromise=w(this._tileIndexUrl,{query:{...e?.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(e,r){const{level:s,row:i,col:o}=e,l=new z(e);return this._tilemap.fetchAvailabilityUpsample(s,i,o,l,r).then(()=>(l.world=e.world,l)).catch(a=>{if(X(a))throw a;return null})}}class Ue{constructor(e,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=e,this.sourceUrl=r;const i=I(this.sourceUrl),o=$(s),l=o.tiles;if(i)for(let d=0;d<l.length;d++){const f=I(l[d]);f&&(N(f.path)||(f.path=O(i.path,f.path)),l[d]=b(f.path,{...i.query,...f.query}))}this.tileServers=l;const a=s.capabilities&&s.capabilities.split(",").map(d=>d.toLowerCase().trim()),n=s?.exportTilesAllowed===!0,u=a?.includes("tilemap")===!0,y=n&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:u},exportTiles:n?{maxExportTilesCount:+y}:null},this.tileInfo=Y(o.tileInfo,o,null,{ignoreMinMaxLOD:!0});const A=s.tileMap?b(O(i.path,s.tileMap),i.query):null;u?(this.type="vector-tile",this.tilemap=new be(new H({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),A)):A&&(this.tilemap=new Ie(A)),this.fullExtent=Q.fromJSON(s.fullExtent)}async getRefKey(e,r){var s,i;return(s=(i=this.tilemap)==null?void 0:i.dataKey(e,r))!=null?s:e}getSourceTileUrl(e,r,s){return this.tileServers[r%this.tileServers.length].replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString())}isCompatibleWith(e){const r=this.tileInfo,s=e.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,o=s.lods,l=Math.min(i.length,o.length);for(let a=0;a<l;a++){const n=i[a],u=o[a];if(n.level!==u.level||Math.round(n.scale)!==Math.round(u.scale))return!1}return!0}}const L=k.defaults&&k.defaults.io.corsEnabledServers;async function _e(t,e){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof t=="string"?[t,null]:[null,t.jsonUrl];await S(r,"esri",t,i,e);const o={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&x(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&x(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return v(o.spriteUrl),v(o.glyphsUrl),o}function v(t){if(!t)return;const e=Z(t);L&&!L.includes(e)&&L.push(e)}function x(...t){let e;for(let r=0;r<t.length;++r)q(t[r])?e&&(e=e.split("://")[0]+":"+t[r].trim()):e=N(t[r])?t[r]:O(e,t[r]);return V(e)}async function S(t,e,r,s,i){let o,l,a;if(j(i),typeof r=="string"){const u=G(r);v(u),a=await w(u,{...i,responseType:"json",query:{f:"json",...i?.query}}),a.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=u,l=u}else a={data:r},o=r.jsonUrl||null,l=s;const n=a.data;return W(n)?(t.styleUrl=o||null,Te(t,n,l,i)):Re(n)?t.sourceUrl?D(t,n,l,!1,e,i):(t.sourceUrl=o||null,D(t,n,l,!0,e,i)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function W(t){return!!t.sources}function Re(t){return!W(t)}async function Te(t,e,r,s){const i=r?ee(r):F;t.styleBase=i,t.style=e,t.styleUrl&&v(t.styleUrl),e["sprite-format"]&&e["sprite-format"].toLowerCase()==="webp"&&(t.spriteFormat="webp");const o=[];if(e.sources&&e.sources.esri){const l=e.sources.esri;l.url?await S(t,"esri",x(i,l.url),void 0,s):o.push(S(t,"esri",l,i,s))}for(const l of Object.keys(e.sources))l!=="esri"&&e.sources[l].type==="vector"&&(e.sources[l].url?o.push(S(t,l,x(i,e.sources[l].url),void 0,s)):e.sources[l].tiles&&o.push(S(t,l,e.sources[l],i,s)));await Promise.all(o)}async function D(t,e,r,s,i,o){const l=r?V(r)+"/":F,a=Pe(e,l),n=new Ue(i,b(l,o?.query),a);if(!s&&t.primarySourceName in t.sourceNameToSource){const u=t.sourceNameToSource[t.primarySourceName];if(!u.isCompatibleWith(n))return Promise.resolve();n.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(n.fullExtent):u.fullExtent=n.fullExtent.clone()),u.tileInfo.lods.length<n.tileInfo.lods.length&&(u.tileInfo=n.tileInfo)}if(s?(t.sourceBase=l,t.source=e,t.validatedSource=a,t.primarySourceName=i,t.sourceUrl&&v(t.sourceUrl)):v(l),t.sourceNameToSource[i]=n,!t.style)return e.defaultStyles==null?Promise.reject():typeof e.defaultStyles=="string"?S(t,"",x(l,e.defaultStyles,"root.json"),void 0,o):S(t,"",e.defaultStyles,x(l,"root.json"),o)}function Pe(t,e){if(t.hasOwnProperty("tileInfo"))return t;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,o=2958287637957775e-7;const l=[],a=t.hasOwnProperty("minzoom")?+t.minzoom:0,n=t.hasOwnProperty("maxzoom")?+t.maxzoom:22;for(let u=0;u<=n;u++)u>=a&&l.push({level:u,scale:o,resolution:i}),i/=2,o/=2;for(const u of t.tiles)v(x(e,u));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:t.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:{wkid:102100}}}}class B{constructor(e,r){this.lockedSchemaPixelSize=e,this.isGCS=r}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:this.lockedSchemaPixelSize===256&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:this.lockedSchemaPixelSize===256?e>0?e-1:0:e}getShift(e,r){let s=0,i=0;return(this.lockedSchemaPixelSize===256||this.isGCS)&&(e[2]%2&&(s=r),e[1]%2&&(i=r)),[s,i]}getScale(e){if(this.isGCS){if(this.lockedSchemaPixelSize===512)return 4}else if(this.lockedSchemaPixelSize===256&&e===0)return 1;return 2}static create256x256CompatibleTileInfo(e){if(!e)return null;if(e.size[0]===256&&e.size[1]===256)return e;const r=256,s=e.spatialReference.isGeographic,i=[],o=e.lods.length;for(let l=0;l<o;l++){const a=e.lods[l],n=s?a.resolution:2*a.resolution;i.push(new M({level:a.level,scale:a.scale,resolution:n}))}return new U({size:[r,r],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:i})}static create512x512CompatibleTileInfo(e){if(!e||e.size[0]===256||e.size[1]===256)return null;const r=512,s=[],i=e.lods.length;for(let o=0;o<i;o++){const l=e.lods[o],a=.5*l.resolution;s.push(new M({level:l.level,scale:l.scale,resolution:a}))}return new U({size:[r,r],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:s})}}const P=1e-6;function $e(t,e){if(t===e)return!0;if(!t&&e!=null||t!=null&&!e||!t.spatialReference.equals(e.spatialReference)||t.dpi!==e.dpi)return!1;const r=t.origin,s=e.origin;if(Math.abs(r.x-s.x)>=P||Math.abs(r.y-s.y)>=P)return!1;let i,o;t.lods[0].scale>e.lods[0].scale?(i=t,o=e):(o=t,i=e);for(let l=i.lods[0].scale;l>=o.lods[o.lods.length-1].scale-P;l/=2)if(Math.abs(l-o.lods[0].scale)<P)return!0;return!1}function Le(t,e){if(t===e)return t;if(!t&&e!=null)return e;if(t!=null&&!e)return t;const r=t.size[0],s=t.format,i=t.dpi,o={x:t.origin.x,y:t.origin.y},l=t.spatialReference.toJSON(),a=t.lods[0].scale>e.lods[0].scale?t.lods[0]:e.lods[0],n=t.lods[t.lods.length-1].scale<=e.lods[e.lods.length-1].scale?t.lods[t.lods.length-1]:e.lods[e.lods.length-1],u=a.scale,y=a.resolution,A=n.scale,d=[];let f=u,_=y,m=0;for(;f>A;)d.push({level:m,resolution:_,scale:f}),m++,f/=2,_/=2;return new U({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:d,spatialReference:l})}let c=class extends te(re(se(ie(le(oe(ae(ne(ue(ce))))))))){constructor(...t){super(...t),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}destroy(){this._spriteSourceMap.clear()}async prefetchResources(t){await this.loadSpriteSource(globalThis.devicePixelRatio||1,t)}load(t){const e=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},t).catch(C).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await w(r,{...t,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},ge(this.portalItem))}).catch(C).then(()=>this._loadStyle(t));return this.addResolvingPromise(e),Promise.resolve(this)}get attributionDataUrl(){const t=this.currentStyleInfo,e=t&&t.serviceUrl&&I(t.serviceUrl);if(!e)return null;const r=this._getDefaultAttribution(e.path);return r?b(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const t=this.primarySource;return t?t.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var t;return((t=this.primarySource)==null?void 0:t.fullExtent)||null}get parsedUrl(){return this.serviceUrl?I(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(t,e){t&&q(t)&&(t=`https:${t}`),e.styleUrl=t}get tileInfo(){var t;const e=[];for(const s in this.sourceNameToSource)e.push(this.sourceNameToSource[s]);let r=((t=this.primarySource)==null?void 0:t.tileInfo)||new U;if(e.length>1)for(let s=0;s<e.length;s++)$e(r,e[s].tileInfo)&&(r=Le(r,e[s].tileInfo));return r}readVersion(t,e){return e.version?parseFloat(e.version):parseFloat(e.currentVersion)}get compatibleTileInfo256(){return B.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return B.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(t=1,e){if(!this._spriteSourceMap.has(t)){var r;const s=pe(),i=(r=this.currentStyleInfo)!=null&&r.spriteUrl?b(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,o=new we(i,t,s.maxTextureSize,this.currentStyleInfo.spriteFormat);await o.load(e),this._spriteSourceMap.set(t,o)}return Promise.resolve(this._spriteSourceMap.get(t))}async loadStyle(t,e){var r;const s=t||this.style||this.url;return this._loadingTask&&typeof s=="string"&&this.url===s||((r=this._loadingTask)==null||r.abort(),this._loadingTask=he(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(s,{signal:i})),e)),this._loadingTask.promise}getStyleLayerId(t){return this.styleRepository.getStyleLayerId(t)}getStyleLayerIndex(t){return this.styleRepository.getStyleLayerIndex(t)}getPaintProperties(t){return $(this.styleRepository.getPaintProperties(t))}setPaintProperties(t,e){const r=this.styleRepository.isPainterDataDriven(t);this.styleRepository.setPaintProperties(t,e);const s=this.styleRepository.isPainterDataDriven(t);this.emit("paint-change",{layer:t,paint:e,isDataDriven:r||s})}getStyleLayer(t){return $(this.styleRepository.getStyleLayer(t))}setStyleLayer(t,e){this.styleRepository.setStyleLayer(t,e),this.emit("style-layer-change",{layer:t,index:e})}deleteStyleLayer(t){this.styleRepository.deleteStyleLayer(t),this.emit("delete-style-layer",{layer:t})}getLayoutProperties(t){return $(this.styleRepository.getLayoutProperties(t))}setLayoutProperties(t,e){this.styleRepository.setLayoutProperties(t,e),this.emit("layout-change",{layer:t,layout:e})}setStyleLayerVisibility(t,e){this.styleRepository.setStyleLayerVisibility(t,e),this.emit("style-layer-visibility-change",{layer:t,visibility:e})}getStyleLayerVisibility(t){return this.styleRepository.getStyleLayerVisibility(t)}write(t,e){return e&&e.origin&&!this.styleUrl?(e.messages&&e.messages.push(new E("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(t,e)}getTileUrl(t,e,r){return null}async _getSourceAndStyle(t,e){if(!t)throw new Error("invalid style!");const r=await _e(t,{...e,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Se("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof t=="string"?(this.url=t,this.style=null):(this.url=null,this.style=t),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new Ae(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(t){const e=t.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!e)return;const s=e[2]&&e[2].toLowerCase();if(!s)return;const i=e[1]||"";for(const o of r)if(o.toLowerCase().includes(s))return G(`//static.arcgis.com/attribution/Vector${i}/${o}`)}async _loadStyle(t){var e,r;return(e=(r=this._loadingTask)==null?void 0:r.promise)!=null?e:this.loadStyle(null,t)}};p([h({readOnly:!0})],c.prototype,"attributionDataUrl",null),p([h({type:["show","hide"]})],c.prototype,"listMode",void 0),p([h({readOnly:!0,json:{read:!1}})],c.prototype,"capabilities",null),p([h({readOnly:!0})],c.prototype,"currentStyleInfo",void 0),p([h({json:{read:!1},readOnly:!0,type:Q})],c.prototype,"fullExtent",null),p([h()],c.prototype,"style",void 0),p([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),p([h({type:["VectorTileLayer"]})],c.prototype,"operationalLayerType",void 0),p([h({readOnly:!0})],c.prototype,"parsedUrl",null),p([h({readOnly:!0})],c.prototype,"serviceUrl",null),p([h({type:ye,readOnly:!0})],c.prototype,"spatialReference",null),p([h({readOnly:!0})],c.prototype,"styleRepository",void 0),p([h({readOnly:!0})],c.prototype,"sourceNameToSource",void 0),p([h({readOnly:!0})],c.prototype,"primarySource",void 0),p([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],c.prototype,"styleUrl",null),p([de(["portal-item","web-document"],"styleUrl")],c.prototype,"writeStyleUrl",null),p([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:U})],c.prototype,"tileInfo",null),p([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],c.prototype,"type",void 0),p([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],c.prototype,"url",void 0),p([h({readOnly:!0})],c.prototype,"version",void 0),p([fe("version",["version","currentVersion"])],c.prototype,"readVersion",null),p([h({readOnly:!0})],c.prototype,"compatibleTileInfo256",null),p([h({readOnly:!0})],c.prototype,"compatibleTileInfo512",null),p([h({type:Boolean})],c.prototype,"symbolCollisionBoxesVisible",void 0),p([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),c=p([me("esri.layers.VectorTileLayer")],c);const Be=c;export{Be as default};
