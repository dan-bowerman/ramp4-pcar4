import{ai as C,e as s,d as n,cS as F,i as f,aP as O,iS as G,q as N,M as U,iT as z,r as g,aq as T,h as B,C as J,iU as H,iC as L,s as $,hg as A,aY as k,aC as P,iV as W}from"./main.c8cfc77c.js";import{p as Y}from"./AnimatedFlowView2D.a687c254.js";import{l as K,u as Q}from"./LayerView.d17b607f.js";import{j as X}from"./rasterProjectionHelper.8f7eccb5.js";import{s as M}from"./Container.628b6d4b.js";import{i as Z}from"./GraphicContainer.a9e65068.js";import{i as ee}from"./BaseGraphicContainer.57d57a3e.js";import{t as te}from"./BitmapContainer.72a11bb3.js";import{i as ie}from"./Bitmap.4f99b82b.js";import{S as se}from"./ExportStrategy.50040418.js";import{d as re}from"./popupUtils.63eea849.js";import{i as ae}from"./RefreshableLayerView.be767987.js";import"./WGLContainer.f546f78e.js";import"./definitions.21e97413.js";import"./VertexArrayObject.a8082f13.js";import"./Texture.b9b0d66f.js";import"./Utils.b9d11e71.js";import"./ShaderCompiler.f8ffb66e.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.f662acbd.js";import"./earcut.f20dd8d8.js";import"./CIMSymbolHelper.4a057e57.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.10f156a3.js";import"./json.2d0d6862.js";import"./FeatureContainer.05d85dfb.js";import"./TileContainer.170eb7d4.js";import"./visualVariablesUtils.97e05f5b.js";import"./visualVariablesUtils.c56fe2a5.js";import"./Matcher.8be74d4e.js";import"./tileUtils.bdd8d343.js";import"./TileClipper.5ca51151.js";import"./cimSymbolUtils.f7f0fc0f.js";import"./quantizationUtils.640d33bc.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.f2ba42ff.js";import"./MD5.f9440c6b.js";import"./util.2c850d63.js";import"./ComputedAttributeStorage.f7a1fca5.js";import"./FeatureSetReader.a92ee28d.js";import"./centroid.37529d02.js";import"./vec3f32.9cc42d31.js";const ne=C.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let l=class extends O{constructor(){super(...arguments),this.attached=!1,this.container=new M,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:"",isOceanStyle:!1,isOceanographic:!1},this.type="Graphics",this._graphics=new G,this._updateGraphics=N(async(e,t)=>{if(!e.stationary)return;const i=e.state,a=new U({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),[r,p]=e.state.size,o={};o.timeExtent=this.timeExtent,o.requestAsImageElement=!1,o.signal=t,this._projectFullExtentPromise==null&&(this._projectFullExtentPromise=this._getProjectedFullExtent(a.spatialReference));const m=this.layer.renderer.type==="vector-field"?this.layer.renderer.symbolTileSize:50,u=await this._projectFullExtentPromise,{extent:d,resolution:b,width:_,height:R}=z(a,r,p,m,u),w=await this.layer.fetchImage(d,_,R,o),c=this.layer.renderer;if(c.type==="vector-field"){const v=w.pixelData.pixelBlock,x=c.sizeVariables[0];!g(v)||x.minDataValue&&x.maxDataValue||(x.minDataValue=v.statistics[0].minValue,x.maxDataValue=v.statistics[0].maxValue),this._pixelData={extent:d,pixelBlock:v};const D=d.clone().normalize(),I={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:D,tileResolution:b,time:JSON.stringify(this.timeExtent||""),isOceanStyle:c.flowRepresentation==="flow-to",isOceanographic:c.style==="ocean-current-kn"||c.style==="ocean-current-m"},V=this._canReuseVectorFieldData(I)?this._dataParameters.extents:[],S=await c.getGraphicsFromPixelData(w.pixelData,this.layer.rasterInfo.dataType==="vector-uv",V);if(V.length){const j=this._graphics.items.filter(E=>g(E.geometry)&&V.some(q=>q.intersects(E.geometry))&&!D.some(q=>q.intersects(E.geometry)));this._graphics.removeMany(j),this._graphics.addMany(S)}else this._graphics.set("items",S);this._graphicsView.update(e),this._dataParameters=I}})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch(t=>{T(t)||ne.error(t)})}hitTest(e){return new B({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this._graphicsView=new ee({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Z(this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await X(this.layer.fullExtent,e)}catch{try{const i=(await J(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?U.fromJSON(i):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,a=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,r=this._dataParameters.extents.some(m=>e.extents.some(u=>m.intersects(u))),p=this._dataParameters.isOceanStyle===e.isOceanStyle,o=this._dataParameters.isOceanographic===e.isOceanographic;return t&&i&&a&&r&&p&&o}};s([n()],l.prototype,"attached",void 0),s([n()],l.prototype,"container",void 0),s([n()],l.prototype,"layer",void 0),s([n()],l.prototype,"timeExtent",void 0),s([n()],l.prototype,"view",void 0),s([n()],l.prototype,"updateRequested",void 0),s([n()],l.prototype,"updating",null),s([F({graphics:"Graphics"})],l.prototype,"type",void 0),l=s([f("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],l);const oe=l,he=C.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let h=class extends O{constructor(){super(...arguments),this.attached=!1,this.container=new M,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{T(t)||he.error(t)})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e){return new B({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new te,this.strategy=new se({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports(e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then(t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=a=>this.layer.applyFilter(a),this.container.requestRender()})})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(r=>r.source).filter(r=>r.extent&&r.extent.intersects(t)).map(r=>({extent:r.extent,pixelBlock:r.originalPixelBlock})),a=H(i,t);return g(a)?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}_fetchImage(e,t,i,a){return(a=a||{}).timeExtent=this.timeExtent,a.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,a).then(r=>r.imageElement?r.imageElement:this.layer.applyRenderer(r.pixelData,{signal:a.signal}).then(p=>{const o=new ie(p.pixelBlock,p.extent.clone(),r.pixelData.pixelBlock);return o.filter=m=>this.layer.applyFilter(m),o}))}};s([n()],h.prototype,"attached",void 0),s([n()],h.prototype,"container",void 0),s([n()],h.prototype,"layer",void 0),s([n()],h.prototype,"strategy",void 0),s([n()],h.prototype,"timeExtent",void 0),s([n()],h.prototype,"view",void 0),s([n()],h.prototype,"updateRequested",void 0),s([n()],h.prototype,"updating",null),s([F({imagery:"Imagery"})],h.prototype,"type",void 0),h=s([f("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h,pe=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,a){const{layer:r}=this;if(!i)throw new $("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:p}=r,o=re(r,a);if(!p||!g(o))throw new $("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:o});const m=await o.getRequiredFields(),u=new A;u.timeExtent=this.timeExtent,u.geometry=i,u.outFields=m,u.outSpatialReference=i.spatialReference;const d=this.view.resolution,b=this.view.type==="2d"?new k(d,d,this.view.spatialReference):new k(.5*d,.5*d,this.view.spatialReference),{returnTopmostRaster:_,showNoDataRecords:R}=o.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:_,pixelSize:b,showNoDataRecords:R,signal:g(a)?a.signal:null};return r.queryVisibleRasters(u,w).then(c=>c)}canResume(){var i;return!!super.canResume()&&((i=this.timeExtent)==null||!i.isEmpty)}};return s([n()],t.prototype,"layer",void 0),s([n()],t.prototype,"suspended",void 0),s([n(L)],t.prototype,"timeExtent",void 0),s([n()],t.prototype,"view",void 0),t=s([f("esri.views.layers.ImageryLayerView")],t),t};let y=class extends pe(ae(K(Q))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add([P(this,["layer.blendMode","layer.effects"],e=>{this.subview&&(this.subview.container.blendMode=e)},!0),P(this,"layer.effect",e=>{this.subview&&(this.subview.container.effect=e)},!0)])}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?"hitTest"in this.subview?[this.subview.hitTest(e)]:[]:null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([P(this,"layer.exportImageServiceParameters.version",e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),this.watch("timeExtent",()=>{"timeExtent"in this.subview&&(this.subview.timeExtent=this.timeExtent),this.requestUpdate()}),this.layer.on("redraw",()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()}),W(this.layer,"renderer",()=>this._setSubView())],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.updating}_setSubView(){var e,t;let i="Imagery";((e=this.layer.renderer)==null?void 0:e.type)==="vector-field"&&this.layer.format==="lerc"&&(i="Graphics");var a,r;((t=this.layer.renderer)==null?void 0:t.type)==="animated-flow"&&(i="Flow"),this.subview&&this.subview.type===i||((a=this.subview)==null||a.uninstall(this.container),(r=this.subview)==null||r.destroy(),this.subview=i==="Imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):i==="Graphics"?new oe({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new Y({layer:this.layer,layerView:this}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect),this.requestUpdate()}};s([n()],y.prototype,"pixelData",null),s([n({readOnly:!0})],y.prototype,"updating",null),s([n()],y.prototype,"subview",void 0),y=s([f("esri.views.2d.layers.ImageryLayerView2D")],y);const tt=y;export{tt as default};
