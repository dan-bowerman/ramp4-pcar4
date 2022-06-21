import{aj as F,e as s,d as n,cT as C,i as f,aQ as T,iS as G,q as N,M as U,iT as z,r as g,ar as O,h as B,C as J,iU as H,iC as L,s as $,hg as A,aZ as k,aD as P,iV as W}from"./main.8e56079f.js";import{p as Q}from"./AnimatedFlowView2D.a2e9679b.js";import{l as Z,u as K}from"./LayerView.2f54581d.js";import{j as X}from"./rasterProjectionHelper.11230048.js";import{s as M}from"./Container.576a39a8.js";import{i as Y}from"./GraphicContainer.38418f72.js";import{i as ee}from"./BaseGraphicContainer.a7b4bd28.js";import{t as te}from"./BitmapContainer.8e38e6f3.js";import{i as ie}from"./Bitmap.87de3bb9.js";import{S as se}from"./ExportStrategy.e9673ef4.js";import{d as re}from"./popupUtils.aca28478.js";import{i as ae}from"./RefreshableLayerView.db05bfa9.js";import"./WGLContainer.f0e4b568.js";import"./definitions.21e97413.js";import"./VertexArrayObject.2696d18f.js";import"./Texture.38355af9.js";import"./Utils.4df25d17.js";import"./ShaderCompiler.69ddf6b0.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.93c5cf7f.js";import"./earcut.f20dd8d8.js";import"./CIMSymbolHelper.d43ea2a6.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.08680ac9.js";import"./json.2d0d6862.js";import"./FeatureContainer.aa00f3ba.js";import"./TileContainer.ea478fca.js";import"./visualVariablesUtils.eccc8069.js";import"./visualVariablesUtils.1bd84e5d.js";import"./Matcher.f23ba30a.js";import"./tileUtils.bf154690.js";import"./TileClipper.3a6cb1c8.js";import"./cimSymbolUtils.b6b48345.js";import"./quantizationUtils.f4033187.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.65154343.js";import"./MD5.f9440c6b.js";import"./util.43221041.js";import"./ComputedAttributeStorage.64c69b41.js";import"./FeatureSetReader.b3872bf1.js";import"./centroid.b8de3416.js";import"./vec3f32.9cc42d31.js";const ne=F.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let l=class extends T{constructor(){super(...arguments),this.attached=!1,this.container=new M,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:"",isOceanStyle:!1,isOceanographic:!1},this.type="Graphics",this._graphics=new G,this._updateGraphics=N(async(e,t)=>{if(!e.stationary)return;const i=e.state,a=new U({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),[r,p]=e.state.size,o={};o.timeExtent=this.timeExtent,o.requestAsImageElement=!1,o.signal=t,this._projectFullExtentPromise==null&&(this._projectFullExtentPromise=this._getProjectedFullExtent(a.spatialReference));const m=this.layer.renderer.type==="vector-field"?this.layer.renderer.symbolTileSize:50,u=await this._projectFullExtentPromise,{extent:d,resolution:b,width:_,height:R}=z(a,r,p,m,u),w=await this.layer.fetchImage(d,_,R,o),c=this.layer.renderer;if(c.type==="vector-field"){const v=w.pixelData.pixelBlock,x=c.sizeVariables[0];!g(v)||x.minDataValue&&x.maxDataValue||(x.minDataValue=v.statistics[0].minValue,x.maxDataValue=v.statistics[0].maxValue),this._pixelData={extent:d,pixelBlock:v};const D=d.clone().normalize(),I={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:D,tileResolution:b,time:JSON.stringify(this.timeExtent||""),isOceanStyle:c.flowRepresentation==="flow-to",isOceanographic:c.style==="ocean-current-kn"||c.style==="ocean-current-m"},V=this._canReuseVectorFieldData(I)?this._dataParameters.extents:[],S=await c.getGraphicsFromPixelData(w.pixelData,this.layer.rasterInfo.dataType==="vector-uv",V);if(V.length){const j=this._graphics.items.filter(E=>g(E.geometry)&&V.some(q=>q.intersects(E.geometry))&&!D.some(q=>q.intersects(E.geometry)));this._graphics.removeMany(j),this._graphics.addMany(S)}else this._graphics.set("items",S);this._graphicsView.update(e),this._dataParameters=I}})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch(t=>{O(t)||ne.error(t)})}hitTest(e){return new B({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this._graphicsView=new ee({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Y(this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await X(this.layer.fullExtent,e)}catch{try{const i=(await J(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?U.fromJSON(i):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,a=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,r=this._dataParameters.extents.some(m=>e.extents.some(u=>m.intersects(u))),p=this._dataParameters.isOceanStyle===e.isOceanStyle,o=this._dataParameters.isOceanographic===e.isOceanographic;return t&&i&&a&&r&&p&&o}};s([n()],l.prototype,"attached",void 0),s([n()],l.prototype,"container",void 0),s([n()],l.prototype,"layer",void 0),s([n()],l.prototype,"timeExtent",void 0),s([n()],l.prototype,"view",void 0),s([n()],l.prototype,"updateRequested",void 0),s([n()],l.prototype,"updating",null),s([C({graphics:"Graphics"})],l.prototype,"type",void 0),l=s([f("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],l);const oe=l,he=F.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let h=class extends T{constructor(){super(...arguments),this.attached=!1,this.container=new M,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{O(t)||he.error(t)})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e){return new B({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new te,this.strategy=new se({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports(e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then(t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=a=>this.layer.applyFilter(a),this.container.requestRender()})})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(r=>r.source).filter(r=>r.extent&&r.extent.intersects(t)).map(r=>({extent:r.extent,pixelBlock:r.originalPixelBlock})),a=H(i,t);return g(a)?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}_fetchImage(e,t,i,a){return(a=a||{}).timeExtent=this.timeExtent,a.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,a).then(r=>r.imageElement?r.imageElement:this.layer.applyRenderer(r.pixelData,{signal:a.signal}).then(p=>{const o=new ie(p.pixelBlock,p.extent.clone(),r.pixelData.pixelBlock);return o.filter=m=>this.layer.applyFilter(m),o}))}};s([n()],h.prototype,"attached",void 0),s([n()],h.prototype,"container",void 0),s([n()],h.prototype,"layer",void 0),s([n()],h.prototype,"strategy",void 0),s([n()],h.prototype,"timeExtent",void 0),s([n()],h.prototype,"view",void 0),s([n()],h.prototype,"updateRequested",void 0),s([n()],h.prototype,"updating",null),s([C({imagery:"Imagery"})],h.prototype,"type",void 0),h=s([f("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h,pe=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,a){const{layer:r}=this;if(!i)throw new $("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:p}=r,o=re(r,a);if(!p||!g(o))throw new $("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:o});const m=await o.getRequiredFields(),u=new A;u.timeExtent=this.timeExtent,u.geometry=i,u.outFields=m,u.outSpatialReference=i.spatialReference;const d=this.view.resolution,b=this.view.type==="2d"?new k(d,d,this.view.spatialReference):new k(.5*d,.5*d,this.view.spatialReference),{returnTopmostRaster:_,showNoDataRecords:R}=o.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:_,pixelSize:b,showNoDataRecords:R,signal:g(a)?a.signal:null};return r.queryVisibleRasters(u,w).then(c=>c)}canResume(){var i;return!!super.canResume()&&((i=this.timeExtent)==null||!i.isEmpty)}};return s([n()],t.prototype,"layer",void 0),s([n()],t.prototype,"suspended",void 0),s([n(L)],t.prototype,"timeExtent",void 0),s([n()],t.prototype,"view",void 0),t=s([f("esri.views.layers.ImageryLayerView")],t),t};let y=class extends pe(ae(Z(K))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add([P(this,["layer.blendMode","layer.effects"],e=>{this.subview&&(this.subview.container.blendMode=e)},!0),P(this,"layer.effect",e=>{this.subview&&(this.subview.container.effect=e)},!0)])}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?"hitTest"in this.subview?[this.subview.hitTest(e)]:[]:null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([P(this,"layer.exportImageServiceParameters.version",e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),this.watch("timeExtent",()=>{"timeExtent"in this.subview&&(this.subview.timeExtent=this.timeExtent),this.requestUpdate()}),this.layer.on("redraw",()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()}),W(this.layer,"renderer",()=>this._setSubView())],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.updating}_setSubView(){var e,t;let i="Imagery";((e=this.layer.renderer)==null?void 0:e.type)==="vector-field"&&this.layer.format==="lerc"&&(i="Graphics");var a,r;((t=this.layer.renderer)==null?void 0:t.type)==="animated-flow"&&(i="Flow"),this.subview&&this.subview.type===i||((a=this.subview)==null||a.uninstall(this.container),(r=this.subview)==null||r.destroy(),this.subview=i==="Imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):i==="Graphics"?new oe({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new Q({layer:this.layer,layerView:this}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect),this.requestUpdate()}};s([n()],y.prototype,"pixelData",null),s([n({readOnly:!0})],y.prototype,"updating",null),s([n()],y.prototype,"subview",void 0),y=s([f("esri.views.2d.layers.ImageryLayerView2D")],y);const tt=y;export{tt as default};
