import{aB as V,b8 as j,iV as K,ag as N,e as n,d as u,i as I,hb as Z,q as ee,is as L,M as te,bA as ie,hT as se,ir as re,r as d,i0 as ae,c as Q,x as le,aW as oe,ho as ne,ao as z,E,cC as he,iW as O,iX as A,cF as ue,bJ as ce,iY as de,iA as ye,s as T,h as J,iT as me,aA as F}from"./multi-ramp.341296fa.js";import{p as pe}from"./AnimatedFlowView2D.99060fe3.js";import{l as fe,u as ge}from"./LayerView.703e68f2.js";import{x as be,j as we,d as _e}from"./WGLContainer.475bfb4d.js";import{r as H,o as X}from"./TileContainer.1c164067.js";import{I as C,n as ve}from"./Utils.e4d1e739.js";import{g as G,u as B,s as Pe,i as Te}from"./RawBlockCache.13bdb8e0.js";import{F as Ve,w as $,j as Ie}from"./rasterProjectionHelper.ed3b1268.js";import{r as Y}from"./util.5029dc45.js";import{o as q,f as xe}from"./VertexArrayObject.e7cef5ce.js";import"./Texture.702ff444.js";import{a as Re}from"./Container.1fb687c6.js";import{d as Se}from"./popupUtils.4947cb65.js";import{i as ze}from"./RefreshableLayerView.1306e06a.js";import"./definitions.21e97413.js";import"./ShaderCompiler.863b0ae6.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.5e5f63c3.js";import"./earcut.f20dd8d8.js";class Ce extends H{constructor(e,t,s,r,a,l=null){super(e,t,s,r,a),this.bitmap=new be(l,null,null),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}_createTransforms(){return{dvs:V(),tileMat3:V()}}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class De extends X{constructor(){super(...arguments),this.isCustomTilingScheme=!1}createTile(e){const t=this._getTileBounds(e),[s,r]=this._tileInfoView.tileInfo.size;return new Ce(e,t[0],t[3],s,r)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (tile)",brushes:[we.raster],target:()=>this.children.map(s=>s.bitmap),drawPhase:C.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===C.MAP&&super.doRender(e)}_getTileBounds(e){const t=this._tileInfoView.getTileBounds(j(),e);if(this.isCustomTilingScheme&&e.world){const{tileInfo:s}=this._tileInfoView,r=K(s.spatialReference);if(r){const{resolution:a}=s.lodAt(e.level),l=r/a%s.size[0],o=l?(s.size[0]-l)*a:0;t[0]-=o*e.world,t[2]-=o*e.world}}return t}}const Fe=[0,0],W=N.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let y=class extends Z{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this.previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._isCustomTilingScheme=!1,this._globalUpdateRequested=!1,this.container=null,this.layer=null,this.redrawOrRefetch=ee((i,e)=>!this.previousLOD||this.layerView.suspended?Promise.resolve():i?this.doRefresh():this._redrawImage(e))}get useWebGLForProcessing(){var i;return(i=this._get("useWebGLForProcessing"))==null||i}set useWebGLForProcessing(i){this._set("useWebGLForProcessing",i)}get useProgressiveUpdate(){return this._get("useProgressiveUpdate")==null||this._get("useProgressiveUpdate")}set useProgressiveUpdate(i){if(this._tileStrategy&&this.useProgressiveUpdate!==i){this._tileStrategy.destroy(),this.container.removeAllChildren();const e=this._getCacheSize(i);this._tileStrategy=new L({cachePolicy:"purge",acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),cacheSize:e,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",i),this.layerView.requestUpdate()}}update(i){this._fetchQueue.pause(),this._fetchQueue.state=i.state,this._tileStrategy.update(i),this._fetchQueue.resume();const{extent:e,resolution:t,scale:s}=i.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var a;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const l=this._srcResolutions[r.level],o=e.toJSON?e:te.fromJSON(e);G(this._blockCacheRegistryUrl,this._blockCacheRegistryId,o,t,l,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,((a=this.previousLOD)==null?void 0:a.level)!==r.level&&(this.previousLOD=r,this._symbolizerParams==null||this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0))}}moveEnd(){!this.layerView.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=new AbortController,this._fetchQueue.length===0&&this._redrawImage(this._abortController.signal).then(()=>{this._globalUpdateRequested=!1,this.layerView.requestUpdate()}));const i=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(i),this.layerView.requestUpdate()}get updating(){return this._fetchQueue.length>0||this._globalUpdateRequested||!(!this.updatingHandles||!this.updatingHandles.updating)}attach(){ie().supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new se(this.layerView.tileInfo,this.layerView.fullExtent);const i=this._computeFetchConcurrency();this._fetchQueue=new re({tileInfoView:this._tileInfoView,concurrency:i,process:(t,s)=>this._fetchTile1(t,s)});const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new L({cachePolicy:"purge",acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),cacheSize:e,tileInfoView:this._tileInfoView}),this._updateBlockCacheRegistry()}acquireTile(i){const e=this.container.createTile(i);return this._enqueueTileFetch(e),this.layerView.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,e}releaseTile(i){this._fetchQueue.abort(i.key.id),this.container.removeChild(i),i.once("detach",()=>{i.destroy(),this.layerView.requestUpdate()}),this.layerView.requestUpdate()}uninstall(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,this.notifyChange("updating"),B(this._blockCacheRegistryUrl,this._blockCacheRegistryId)}createEmptyTilePixelBlock(i=null){const e=i==null||i.join(",")===this._tileInfoView.tileInfo.size.join(",");if(e&&d(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;i=i||this._tileInfoView.tileInfo.size;const[t,s]=i,r=new ae({width:t,height:s,pixels:[new Uint8Array(t*s)],mask:new Uint8Array(t*s),pixelType:"u8"});return e&&(this._emptyTilePixelBlock=r),r}_fetchTile1(i,e){const t=!Q(e)&&e.signal,s=this.canUseWebGLForProcessing(),r={allowPartialFill:!0,datumTransformation:this.layerView.datumTransformation,interpolation:s?"nearest":this.layer.interpolation,registryId:this._blockCacheRegistryId,requestRawData:s,signal:le(t),srcResolution:this._srcResolutions[i.level],timeExtent:this.layerView.timeExtent,tileInfo:this.layerView.tileInfo};return this.fetchTile(i,r)}_getCacheSize(i){return i?40:0}_initializeTileInfo(){const i=this.layerView.view.spatialReference,e=new oe({x:this.layerView.fullExtent.xmin,y:this.layerView.fullExtent.ymax,spatialReference:i}),{scales:t,srcResolutions:s,isCustomTilingScheme:r}=Ve(this.layer.rasterInfo,i),a=ne.create({spatialReference:i,size:512,scales:t});(a.origin.x===0||a.origin.x>e.x)&&(a.origin=e),this._isCustomTilingScheme=r,this.layerView.set("tileInfo",a),this._srcResolutions=s??[]}_computeFetchConcurrency(){const{blockBoundary:i}=this.layer.rasterInfo.storageInfo,e=i[i.length-1];return(e.maxCol-e.minCol+1)*(e.maxRow-e.minRow+1)>64?2:10}async _enqueueTileFetch(i,e){if(!this._fetchQueue.has(i.key.id)){try{const t=await this._fetchQueue.push(i.key);this.notifyChange("updating");const{bandIds:s}=this.layer;let r=!this.useProgressiveUpdate||this.layerView.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.layerView.moving&&this._fetchQueue.length===0){r=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(o){z(o)&&W.error(o)}this._globalUpdateRequested=!1}!this.canUseWebGLForProcessing()&&this.type!=="rasterVF"||this.layerView.hasTilingEffects||this._symbolizerParams!=null||this._updateSymbolizerParams();const a=this._tileInfoView.getTileCoords(Fe,i.key),l=this._tileInfoView.getTileResolution(i.key);await this.updateTileSource(i,{source:t,symbolizerParams:this._symbolizerParams,globalSymbolizerParams:this._globalSymbolizerParams,suspended:r,bandIds:s,coords:a,resolution:l}),i.once("attach",()=>this.layerView.requestUpdate()),this.container.addChild(i)}catch(t){z(t)||W.error(t)}this.layerView.requestUpdate()}}async _redrawImage(i){if(this.container.children.length===0)return;await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects?await this._updateGlobalSymbolizerParams(i):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const e=this.container.children.map(async t=>this.updateTileSymbolizerParameters(t,{local:this._symbolizerParams,global:this._globalSymbolizerParams}));await E(e),this.container.requestRender()}async _updateGlobalSymbolizerParams(i){const e={srcResolution:this._srcResolutions[this.previousLOD.level],registryId:this._blockCacheRegistryId,signal:i},t=await this.layer.fetchPixels(this.layerView.view.extent,this.layerView.view.width,this.layerView.view.height,e);if(!t||!t.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:he(t.pixelBlock,this.layer.bandIds),isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});!this.canUseWebGLForProcessing()&&s&&s.type==="stretch"&&this.layer.renderer&&this.layer.renderer.type==="raster-stretch"&&(s.factor=s.factor.map(r=>255*r),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(i=!1){const{url:e,rasterInfo:t,raster:s}=this.layer,{multidimensionalDefinition:r}=this.layer.normalizeRasterFetchOptions({multidimensionalDefinition:this.layer.multidimensionalDefinition,timeExtent:this.layerView.timeExtent}),a=t!=null&&t.multidimensionalInfo?s.getSliceIndex(r):null,l=Te(e,a);if(l!==this._blockCacheRegistryUrl){if(this._blockCacheRegistryUrl!=null&&B(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=Pe(l,this.layer.raster.rasterInfo),i){const o=this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale),c=this._srcResolutions[o.level];G(l,this._blockCacheRegistryId,this.layerView.view.extent,this.layerView.view.resolution,c,this.layer.raster.ioConfig.sampling)}this._blockCacheRegistryUrl=l}}async doRefresh(){await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset(),this.notifyChange("updating");const i=[];this._tileStrategy.tiles.forEach(e=>i.push(this._enqueueTileFetch(e))),await E(i)}};n([u()],y.prototype,"_globalUpdateRequested",void 0),n([u()],y.prototype,"container",void 0),n([u()],y.prototype,"layer",void 0),n([u()],y.prototype,"layerView",void 0),n([u()],y.prototype,"type",void 0),n([u()],y.prototype,"useWebGLForProcessing",null),n([u()],y.prototype,"useProgressiveUpdate",null),n([u()],y.prototype,"updating",null),y=n([I("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],y);let w=class extends y{constructor(){super(...arguments),this.container=null,this.layer=null,this.type="raster"}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!(this.layer.interpolation==="majority"&&Y(this.layer))}fetchTile(i,e){return this.layer.fetchTile(i.level,i.row,i.col,e)}async updateTileSource(i,e){const{bandIds:t}=this.layer,s=this._getLayerInterpolation(),r=this.canUseWebGLForProcessing(),{source:a,symbolizerParams:l,globalSymbolizerParams:o,suspended:c,coords:g,resolution:m}=e,{bitmap:h}=i;if([h.x,h.y]=g,h.resolution=m,a&&d(a)&&d(a.pixelBlock)){const p={extent:a.extent,pixelBlock:a.pixelBlock};if(h.rawPixelData=p,r)h.source=a.pixelBlock,h.isRendereredSource=!1;else{const f=await this.layer.applyRenderer(p,o?.type==="stretch"?o:null);h.source=f,h.isRendereredSource=!0}h.symbolizerParameters=r?l:null,r?h.transformGrid||(h.transformGrid=a.transformGrid):h.transformGrid=null}else{const p=this.createEmptyTilePixelBlock();h.source=p,h.symbolizerParameters=r?l:null,h.transformGrid=null}h.bandIds=r?t:null,h.width=this._tileInfoView.tileInfo.size[0],h.height=this._tileInfoView.tileInfo.size[1],h.interpolation=s,h.suspended=c,h.invalidateTexture()}async updateTileSymbolizerParameters(i,e){const{local:t,global:s}=e,{bandIds:r}=this.layer,a=this._getLayerInterpolation(),l=this.canUseWebGLForProcessing(),{bitmap:o}=i,{rawPixelData:c}=o;!l&&d(c)?(o.source=await this.layer.applyRenderer(c,s?.type==="stretch"?s:null),o.isRendereredSource=!0):(o.isRendereredSource&&d(c)&&(o.source=c.pixelBlock),o.isRendereredSource=!1),o.symbolizerParameters=l?s||t:null,o.bandIds=l?r:null,o.interpolation=a,o.suspended=!1}install(i){this.container=new De(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,i.addChild(this.container)}uninstall(){this.container.removeAllChildren(),this.container.remove(),super.uninstall()}_getLayerInterpolation(){const i=this.layer.renderer.type;if(i==="raster-colormap"||i==="unique-value"||i==="class-breaks")return"nearest";const{interpolation:e}=this.layer,{renderer:t}=this.layer;return t.type==="raster-stretch"&&t.colorRamp!=null?e==="bilinear"||e==="cubic"?"bilinear":"nearest":e}};n([u()],w.prototype,"container",void 0),n([u()],w.prototype,"layer",void 0),n([u()],w.prototype,"type",void 0),w=n([I("esri.views.2d.layers.imagery.ImageryTileView2D")],w);const Ue=w;class ke extends Re{constructor(e=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.rawPixelData=null,this.width=null,this.source=e}destroy(){var e,t;d(this.vaoData)&&((e=this.vaoData.magdir)==null||e.vao.dispose(),(t=this.vaoData.scalar)==null||t.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO())}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO()}invalidateVAO(){var e,t;!this._vaoInvalidated&&d(this.vaoData)&&((e=this.vaoData.magdir)==null||e.vao.dispose(),(t=this.vaoData.scalar)==null||t.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(e){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,d(this.source)&&!d(this.vaoData)){const{style:t}=this.symbolizerParameters;switch(t){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const s=O(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(e.context,s);this.vaoData={magdir:r}}break;case"simple_scalar":{const s=A(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(e.context,s);this.vaoData={scalar:r}}break;case"wind_speed":{const s=O(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(e.context,s),a=A(this.source,this.symbolizerParameters),l=this._createVectorFieldVAO(e.context,a);this.vaoData={magdir:r,scalar:l}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:V()}}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(e,t){const{vertexData:s,indexData:r}=t,a=q.createVertex(e,35044,new Float32Array(s)),l=q.createIndex(e,35044,new Uint32Array(r)),o=ve("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:5126,normalized:!1},{location:1,name:"a_offset",count:2,type:5126,normalized:!1},{location:2,name:"a_vv",count:2,type:5126,normalized:!1}]});return{vao:new xe(e,o.attributes,o.bufferLayouts,{geometry:a},l),elementCount:r.length}}}class Le extends H{constructor(e,t,s,r,a,l=null){super(e,t,s,r,a),this.tileData=new ke(l),this.tileData.coordScale=[r,a],this.tileData.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null}set stencilRef(e){this.tileData.stencilRef=e}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return{dvs:V(),tileMat3:V()}}setTransform(e,t){super.setTransform(e,t);const s=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[a,l]=this.tileData.offset,o=[this.x+a*t,this.y-l*t],[c,g]=e.toScreenNoRotation([0,0],o),{symbolTileSize:m}=this.tileData.symbolizerParameters,h=Math.round((this.width-this.tileData.offset[0])/m)*m,p=Math.round((this.height-this.tileData.offset[1])/m)*m,f=h/this.rangeX*s,x=p/this.rangeY*s;ue(r,f,0,0,0,x,0,c,g,1),ce(this.transforms.dvs,e.displayViewMat3,r),this.tileData.transforms.dvs=this.transforms.dvs}onAttach(){this.tileData.stage=this.stage}onDetach(){this.tileData.stage=null}}class Ee extends X{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"]}createTile(e){const t=this._tileInfoView.getTileBounds(j(),e),[s,r]=this._tileInfoView.tileInfo.size;return new Le(e,t[0],t[3],s,r)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf tile)",brushes:[_e],target:()=>this.children.map(s=>s.tileData),drawPhase:C.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===C.MAP&&this.symbolTypes.forEach(t=>{e.renderPass=t,super.doRender(e)})}}let _=class extends y{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.type="rasterVF"}canUseWebGLForProcessing(){return!1}async fetchTile(i,e){const t=await this.layer.fetchTile(i.level,i.row,i.col,e);return this.layer.rasterInfo.dataType==="vector-magdir"&&t!=null&&t.pixelBlock&&(t.pixelBlock=await this.layer.convertVectorFieldData(t.pixelBlock,e)),t}updateTileSource(i,e){const t=e.symbolizerParams,{tileData:s}=i;s.key=i.key,s.width=this._tileInfoView.tileInfo.size[0],s.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:r}=t,{source:a}=e;if(s.offset=this._getTileSymbolOffset(s.key,r),d(a)&&d(a.pixelBlock)){const l={extent:a.extent,pixelBlock:a.pixelBlock};s.rawPixelData=l,s.source=this._sampleVectorFieldData(a.pixelBlock,t,s.offset),s.symbolizerParameters=t}else{const l=[Math.round((this._tileInfoView.tileInfo[0]-s.offset[0])/r),Math.round((this._tileInfoView.tileInfo[1]-s.offset[1])/r)],o=this.createEmptyTilePixelBlock(l);s.source=o,s.symbolizerParameters=t}return s.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(i,e){var t;const s=e.local,{symbolTileSize:r}=s,{tileData:a}=i;a.offset=this._getTileSymbolOffset(a.key,r);const l=a.symbolizerParameters.symbolTileSize;return a.symbolizerParameters=s,d((t=a.rawPixelData)==null?void 0:t.pixelBlock)&&l!==r&&(a.source=this._sampleVectorFieldData(a.rawPixelData.pixelBlock,a.symbolizerParameters,a.offset)),Promise.resolve(null)}install(i){this.container=new Ee(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=this.layer.watch("renderer",e=>this._updateSymbolType(e)),i.addChild(this.container)}uninstall(){this.container.removeAllChildren(),this._handle.remove(),this._handle=null,this.container.remove(),super.uninstall()}_getTileSymbolOffset(i,e){const t=i.col*this._tileInfoView.tileInfo.size[0]%e,s=i.row*this._tileInfoView.tileInfo.size[1]%e;return[t>e/2?e-t:-t,s>e/2?e-s:-s]}_sampleVectorFieldData(i,e,t){const{symbolTileSize:s}=e;return de(i,"vector-uv",s,t)}_updateSymbolType(i){i.type==="vector-field"&&(this.container.symbolTypes=i.style==="wind-barb"?["scalar","triangle"]:i.style==="simple-scalar"?["scalar"]:["triangle"])}};n([u()],_.prototype,"container",void 0),n([u()],_.prototype,"layer",void 0),n([u()],_.prototype,"type",void 0),_=n([I("esri.views.2d.layers.imagery.VectorFieldTileView2D")],_);const Oe=_,Ae=i=>{let e=class extends i{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(t,s){const{layer:r}=this;if(!t)return Promise.reject(new T("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const{popupEnabled:a}=r,l=Se(r,s);if(!a||!d(l))throw new T("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:l});const o=[],{value:c,magdirValue:g}=await r.identify(t,{timeExtent:this.timeExtent});let m="";if(c&&c.length){var h,p;m=r.type==="imagery-tile"&&r.hasStandardTime()&&c[0]!=null?c.map(S=>r.getStandardTimeValue(S)).join(", "):c.join(", ");const f={ObjectId:0},x="Raster.ServicePixelValue";f[x]=this._formatAttributeValue(m,x);const D=(h=r.rasterInfo)==null||(p=h.attributeTable)==null?void 0:p.features;if(D&&D.length>0){const S=D.filter(b=>{const P=b.attributes.value||b.attributes.Value||b.attributes.VALUE;return String(P)===m});if(S.length>0){const b=S[0];if(b){for(const P in b.attributes)if(b.attributes.hasOwnProperty(P)){const k=this._rasterFieldPrefix+P;f[k]=this._formatAttributeValue(b.attributes[P],k)}}}}const U=r.rasterInfo.dataType;U!=="vector-magdir"&&U!=="vector-uv"||(f["Raster.Magnitude"]=g?.[0],f["Raster.Direction"]=g?.[1]);const R=new J(this.fullExtent.clone(),null,f);R.layer=r,R.sourceLayer=R.layer,o.push(R)}return o}updateFullExtent(){const t=this.layer.tileInfo;if(!(t&&t.spatialReference))return Promise.reject(new T("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));if(Q(this.layer.fullExtent))return Promise.reject(new T("layerview:extent-missing","The layer doesn't provide a full extent.",{layer:this.layer}));const s=$(this.layer.fullExtent,this.view.spatialReference,!1),r=Ie(this.layer.fullExtent,this.view.spatialReference,s);return r==null?Promise.reject(new T("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})):(this._set("fullExtent",r),this.datumTransformation||(this.datumTransformation=$(this.layer.fullExtent,this.view.spatialReference,!0)),Promise.resolve())}_formatAttributeValue(t,s){if(typeof t=="string"){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,a=this._getFieldInfo(r,s),l=a&&a.format;if(l){let o,c;return t.trim().indexOf(",")>-1?(o=",",c=o+" ",this._formatDelimitedString(t,o,c,l)):t.trim().indexOf(" ")>-1?(o=c=" ",this._formatDelimitedString(t,o,c,l)):this._formatNumberFromString(t,l)}}return t}_getFieldInfo(t,s){if(!t||!t.length||!s)return;const r=s.toLowerCase();let a;return t.some(l=>!(!l.fieldName||l.fieldName.toLowerCase()!==r&&l.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(a=l,!0)),a}_formatDelimitedString(t,s,r,a){return t&&s&&r&&a?t.trim().split(s).map(l=>this._formatNumberFromString(l,a)).join(r):t}_formatNumberFromString(t,s){if(!t||!s)return t;const r=Number(t);return isNaN(r)?t:s.format(r)}};return n([u()],e.prototype,"layer",void 0),n([u(ye)],e.prototype,"timeExtent",void 0),n([u()],e.prototype,"view",void 0),n([u()],e.prototype,"fullExtent",void 0),n([u()],e.prototype,"tileInfo",void 0),n([u({readOnly:!0})],e.prototype,"hasTilingEffects",null),e=n([I("esri.views.layers.ImageryTileLayerView")],e),e},M=N.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let v=class extends Ae(ze(fe(ge))){constructor(){super(...arguments),this._useWebGLForProcessing=!0,this._useProgressiveUpdate=!0,this.subview=null}initialize(){const i=this.updateFullExtent();this.addResolvingPromise(i)}get useWebGLForProcessing(){return this._useWebGLForProcessing}set useWebGLForProcessing(i){this._useWebGLForProcessing=i,this.subview&&"useWebGLForProcessing"in this.subview&&(this.subview.useWebGLForProcessing=i)}get useProgressiveUpdate(){return this._useWebGLForProcessing}set useProgressiveUpdate(i){this._useProgressiveUpdate=i,this.subview&&"useProgressiveUpdate"in this.subview&&(this.subview.useProgressiveUpdate=i)}update(i){this.subview.update(i),this.notifyChange("updating")}isUpdating(){return!this.subview||this.subview.updating}attach(){this.layer.increaseRasterJobHandlerUsage(),this._updateSubview(),this.handles.add([me(this.layer,["bandIds","renderer","interpolation","multidimensionalDefinition"],(i,e,t)=>{const s=t==="multidimensionalDefinition",r=t==="interpolation"&&(i==="majority"||e==="majority")&&Y(this.layer),a=t==="renderer"&&e.type!==i.type;a&&this._updateSubview();const l=s||r||a;this.subview.redrawOrRefetch(l).catch(o=>{z(o)||M.error(o)}),this.notifyChange("updating")}),F(this,["layer.blendMode"],i=>{this.subview&&(this.subview.container.blendMode=i)},!0),F(this,["layer.effect"],i=>{this.subview&&(this.subview.container.effect=i)},!0),F(this,"timeExtent",()=>{this.subview.redrawOrRefetch(!0).catch(i=>{z(i)||M.error(i)})})],"attach")}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this.subview.uninstall()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.subview.moveEnd()}async hitTest(i,e){return[new J({attributes:{},geometry:i.clone()})]}doRefresh(){return this.subview.doRefresh()}_updateSubview(){const i=this.layer.renderer.type==="vector-field"?"rasterVF":this.layer.renderer.type==="animated-flow"?"rasterAnimatedFlow":"raster";if(this.subview){if(this.subview.type===i)return;this.subview.uninstall()}const{layer:e}=this;let t;t=i==="rasterVF"?new Oe({layer:e,layerView:this}):i==="rasterAnimatedFlow"?new pe({layer:e,layerView:this}):new Ue({layer:e,layerView:this}),"useWebGLForProcessing"in t&&(t.useWebGLForProcessing=this._useWebGLForProcessing),"useProgressiveUpdate"in t&&(t.useProgressiveUpdate=this._useProgressiveUpdate),"previousLOD"in t&&(t.previousLOD=this.subview&&"previousLOD"in this.subview&&this.subview.previousLOD),t.attach(),t.install(this.container),t.container.blendMode=e.blendMode,t.container.effect=e.effect,this.subview=t,this.requestUpdate()}};n([u()],v.prototype,"subview",void 0),n([u()],v.prototype,"useWebGLForProcessing",null),n([u()],v.prototype,"useProgressiveUpdate",null),v=n([I("esri.views.2d.layers.ImageryTileLayerView2D")],v);const at=v;export{at as default};
