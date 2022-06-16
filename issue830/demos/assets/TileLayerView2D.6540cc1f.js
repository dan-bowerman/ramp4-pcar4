import{e as c,d as g,i as _,s as p,E as v,r as I,aj as T,hV as V,it as q,iu as Q,ar as m,c9 as y}from"./main.d81f1731.js";import{r as b,o as d,n as w}from"./imageUtils.9c3310e4.js";import{l as S,u as F}from"./LayerView.4f0b2111.js";import{i as P}from"./RefreshableLayerView.7b49c970.js";import{s as U,a as C}from"./drapedUtils.a2383c4b.js";import"./BitmapTileContainer.b29e7ca9.js";import"./Bitmap.0f0e6f29.js";import"./Container.74d58c2a.js";import"./Texture.86a95cd7.js";import"./TileContainer.e64144a7.js";import"./Utils.2a8a3b0a.js";import"./WGLContainer.5e07d6b3.js";import"./definitions.21e97413.js";import"./VertexArrayObject.0e200249.js";import"./ShaderCompiler.5f74af17.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.dfbd1a0d.js";import"./earcut.f20dd8d8.js";const R=e=>{let t=class extends e{async fetchPopupFeatures(s,a){const{layer:l}=this;if(!s)return Promise.reject(new p("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:l}));if(l.type!=="tile")return Promise.reject(new p("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:l.type}));const n=this.get("view.scale"),h=l.allSublayers.toArray().filter(i=>{const r=i.minScale===0||n<=i.minScale,o=i.maxScale===0||n>=i.maxScale;return i.popupTemplate&&i.popupEnabled&&i.visible&&r&&o});return v(h.map(async i=>{const r=i.createQuery(),o=I(a)?a.event:null,f=U({renderer:i.renderer,event:o});return r.geometry=this.createFetchPopupFeaturesQueryGeometry(s,f),r.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(r)).features})).then(i=>[].concat(...i.map(r=>r.value).filter(Boolean)))}};return c([g()],t.prototype,"layer",void 0),t=c([_("esri.layers.mixins.TileLayerView")],t),t},x=T.getLogger("esri.views.2d.layers.TileLayerView2D"),L=[0,0];let u=class extends R(P(b(S(F)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let s;t||(s=new p("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(s=new p("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",()=>{this.doRefresh()}),s&&this.addResolvingPromise(Promise.reject(s))}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new V(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new q({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,s)=>this.fetchTile(t,s)}),this._tileStrategy=new Q({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return C(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)),this.notifyChange("updating"))}isUpdating(){var e;return((e=this._fetchQueue)==null?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(L,t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:a,resamplingLevel:l=0}=t;if(!s)try{return await this._fetchImage(e,a)}catch(i){if(!m(i)&&!this.resampling)return d(this._tileInfoView.tileInfo.size);if(l<3){const r=this._tileInfoView.getTileParentId(e.id);if(r){const o=new y(r),f=await this.fetchTile(o,{...t,resamplingLevel:l+1});return w(this._tileInfoView,f,o,e)}}throw i}const n=new y(0,0,0,0);let h;try{if(await s.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:a}),n.level!==e.level&&!this.resampling)return d(this._tileInfoView.tileInfo.size);h=await this._fetchImage(n,a)}catch(i){if(m(i))throw i;h=await this._fetchImage(e,a)}return this.resampling?w(this._tileInfoView,h,n,e):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){m(t)||x.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};c([g()],u.prototype,"resampling",null),u=c([_("esri.views.2d.layers.TileLayerView2D")],u);const ee=u;export{ee as default};
