import{aj as _,hW as w,iu as g,iv as I,c9 as p,ar as h,e as n,d,i as S}from"./main.b43b33c5.js";import{r as v,n as y}from"./imageUtils.1dd9fb43.js";import{l as T,u as V}from"./LayerView.865b4d97.js";import{i as x}from"./RefreshableLayerView.95b6d535.js";import"./BitmapTileContainer.1c70b7e9.js";import"./Bitmap.c7aa2b96.js";import"./Container.0ad245fd.js";import"./Texture.0058c972.js";import"./TileContainer.117bbcf6.js";import"./Utils.9c79efbc.js";import"./WGLContainer.8164b0f2.js";import"./definitions.21e97413.js";import"./VertexArrayObject.74a56c16.js";import"./ShaderCompiler.7c102acb.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.9566f724.js";import"./earcut.f20dd8d8.js";const M=[102113,102100,3857,3785,900913],q=[0,0],b=_.getLogger("esri.views.2d.layers.WMTSLayerView2D");let r=class extends x(v(T(V))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new w(e),this._fetchQueue=new g({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],()=>this._refresh()),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(q,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue.length>0}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:o=0}=t;if(!i)return this._fetchImage(e,s);const a=new p(0,0,0,0);let u;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),u=await this._fetchImage(a,s)}catch(l){if(h(l))throw l;if(o<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const f=new p(c),m=await this.fetchTile(f,{...t,resamplingLevel:o+1});return y(this._tileInfoView,m,f,e)}}throw l}return y(this._tileInfoView,u,a,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){h(t)||b.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{h(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0})};this._tileRequests.set(e,t)}),this.notifyChange("updating")}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>s.tileInfo.spatialReference.wkid===t.wkid);return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>M.indexOf(s.tileInfo.spatialReference.wkid)>-1)),i}};n([d()],r.prototype,"suspended",void 0),n([d({readOnly:!0})],r.prototype,"tileMatrixSet",null),r=n([S("esri.views.2d.layers.WMTSLayerView2D")],r);const J=r;export{J as default};
