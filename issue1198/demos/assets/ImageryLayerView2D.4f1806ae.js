import{aj as F,e as s,d as n,cT as T,i as f,aQ as C,iT as G,q as N,M as U,iU as z,r as g,ar as O,h as B,C as J,iV as H,iD as L,s as $,hh as A,aZ as k,aD as D,iW as W}from"./main.648ca69b.js";import{p as Q}from"./AnimatedFlowView2D.9db5ea6a.js";import{l as Z,u as K}from"./LayerView.408b0ef4.js";import{j as X}from"./rasterProjectionHelper.da68a15f.js";import{s as M}from"./Container.ab94d613.js";import{i as Y}from"./GraphicContainer.88be4552.js";import{i as ee}from"./BaseGraphicContainer.d6fd324d.js";import{t as te}from"./BitmapContainer.39d48831.js";import{i as ie}from"./Bitmap.a3528b1f.js";import{S as se}from"./ExportStrategy.f0e6ec8f.js";import{d as re}from"./popupUtils.dacb733f.js";import{i as ae}from"./RefreshableLayerView.61e80be4.js";import"./WGLContainer.05651a64.js";import"./definitions.21e97413.js";import"./VertexArrayObject.6e97a673.js";import"./Texture.3d3d767c.js";import"./Utils.7ec2de38.js";import"./ShaderCompiler.af403f4d.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.d4b7dc98.js";import"./earcut.f20dd8d8.js";import"./CIMSymbolHelper.15a7eef6.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.0886ebbd.js";import"./json.2d0d6862.js";import"./FeatureContainer.d680d397.js";import"./TileContainer.d40fc583.js";import"./visualVariablesUtils.327bfa28.js";import"./visualVariablesUtils.5bf27517.js";import"./Matcher.15713837.js";import"./tileUtils.a5b77d1c.js";import"./TileClipper.9409338c.js";import"./cimSymbolUtils.fb26ccd7.js";import"./quantizationUtils.8651a974.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.7cc1f7fd.js";import"./MD5.f9440c6b.js";import"./util.8fcd9ed2.js";import"./ComputedAttributeStorage.043ee100.js";import"./FeatureSetReader.ca2e327e.js";import"./centroid.0c58d595.js";import"./vec3f32.9cc42d31.js";const ne=F.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let l=class extends C{constructor(){super(...arguments),this.attached=!1,this.container=new M,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:"",isOceanStyle:!1,isOceanographic:!1},this.type="Graphics",this._graphics=new G,this._updateGraphics=N(async(e,t)=>{if(!e.stationary)return;const i=e.state,a=new U({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),[r,p]=e.state.size,o={};o.timeExtent=this.timeExtent,o.requestAsImageElement=!1,o.signal=t,this._projectFullExtentPromise==null&&(this._projectFullExtentPromise=this._getProjectedFullExtent(a.spatialReference));const m=this.layer.renderer.type==="vector-field"?this.layer.renderer.symbolTileSize:50,u=await this._projectFullExtentPromise,{extent:d,resolution:b,width:_,height:R}=z(a,r,p,m,u),w=await this.layer.fetchImage(d,_,R,o),c=this.layer.renderer;if(c.type==="vector-field"){const v=w.pixelData.pixelBlock,x=c.sizeVariables[0];!g(v)||x.minDataValue&&x.maxDataValue||(x.minDataValue=v.statistics[0].minValue,x.maxDataValue=v.statistics[0].maxValue),this._pixelData={extent:d,pixelBlock:v};const P=d.clone().normalize(),I={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:P,tileResolution:b,time:JSON.stringify(this.timeExtent||""),isOceanStyle:c.flowRepresentation==="flow-to",isOceanographic:c.style==="ocean-current-kn"||c.style==="ocean-current-m"},V=this._canReuseVectorFieldData(I)?this._dataParameters.extents:[],S=await c.getGraphicsFromPixelData(w.pixelData,this.layer.rasterInfo.dataType==="vector-uv",V);if(V.length){const j=this._graphics.items.filter(E=>g(E.geometry)&&V.some(q=>q.intersects(E.geometry))&&!P.some(q=>q.intersects(E.geometry)));this._graphics.removeMany(j),this._graphics.addMany(S)}else this._graphics.set("items",S);this._graphicsView.update(e),this._dataParameters=I}})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch(t=>{O(t)||ne.error(t)})}hitTest(e){return new B({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this._graphicsView=new ee({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Y(this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await X(this.layer.fullExtent,e)}catch{try{const i=(await J(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?U.fromJSON(i):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,a=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,r=this._dataParameters.extents.some(m=>e.extents.some(u=>m.intersects(u))),p=this._dataParameters.isOceanStyle===e.isOceanStyle,o=this._dataParameters.isOceanographic===e.isOceanographic;return t&&i&&a&&r&&p&&o}};s([n()],l.prototype,"attached",void 0),s([n()],l.prototype,"container",void 0),s([n()],l.prototype,"layer",void 0),s([n()],l.prototype,"timeExtent",void 0),s([n()],l.prototype,"view",void 0),s([n()],l.prototype,"updateRequested",void 0),s([n()],l.prototype,"updating",null),s([T({graphics:"Graphics"})],l.prototype,"type",void 0),l=s([f("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],l);const oe=l,he=F.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let h=class extends C{constructor(){super(...arguments),this.attached=!1,this.container=new M,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{O(t)||he.error(t)})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e){return new B({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new te,this.strategy=new se({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports(e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then(t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=a=>this.layer.applyFilter(a),this.container.requestRender()})})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(r=>r.source).filter(r=>r.extent&&r.extent.intersects(t)).map(r=>({extent:r.extent,pixelBlock:r.originalPixelBlock})),a=H(i,t);return g(a)?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}_fetchImage(e,t,i,a){return(a=a||{}).timeExtent=this.timeExtent,a.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,a).then(r=>r.imageElement?r.imageElement:this.layer.applyRenderer(r.pixelData,{signal:a.signal}).then(p=>{const o=new ie(p.pixelBlock,p.extent.clone(),r.pixelData.pixelBlock);return o.filter=m=>this.layer.applyFilter(m),o}))}};s([n()],h.prototype,"attached",void 0),s([n()],h.prototype,"container",void 0),s([n()],h.prototype,"layer",void 0),s([n()],h.prototype,"strategy",void 0),s([n()],h.prototype,"timeExtent",void 0),s([n()],h.prototype,"view",void 0),s([n()],h.prototype,"updateRequested",void 0),s([n()],h.prototype,"updating",null),s([T({imagery:"Imagery"})],h.prototype,"type",void 0),h=s([f("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h,pe=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,a){const{layer:r}=this;if(!i)throw new $("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:p}=r,o=re(r,a);if(!p||!g(o))throw new $("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:o});const m=await o.getRequiredFields(),u=new A;u.timeExtent=this.timeExtent,u.geometry=i,u.outFields=m,u.outSpatialReference=i.spatialReference;const d=this.view.resolution,b=this.view.type==="2d"?new k(d,d,this.view.spatialReference):new k(.5*d,.5*d,this.view.spatialReference),{returnTopmostRaster:_,showNoDataRecords:R}=o.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:_,pixelSize:b,showNoDataRecords:R,signal:g(a)?a.signal:null};return r.queryVisibleRasters(u,w).then(c=>c)}canResume(){var i;return!!super.canResume()&&((i=this.timeExtent)==null||!i.isEmpty)}};return s([n()],t.prototype,"layer",void 0),s([n()],t.prototype,"suspended",void 0),s([n(L)],t.prototype,"timeExtent",void 0),s([n()],t.prototype,"view",void 0),t=s([f("esri.views.layers.ImageryLayerView")],t),t};let y=class extends pe(ae(Z(K))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add([D(this,["layer.blendMode","layer.effects"],e=>{this.subview&&(this.subview.container.blendMode=e)},!0),D(this,"layer.effect",e=>{this.subview&&(this.subview.container.effect=e)},!0)])}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?"hitTest"in this.subview?[this.subview.hitTest(e)]:[]:null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([D(this,"layer.exportImageServiceParameters.version",e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),this.watch("timeExtent",()=>{"timeExtent"in this.subview&&(this.subview.timeExtent=this.timeExtent),this.requestUpdate()}),this.layer.on("redraw",()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()}),W(this.layer,"renderer",()=>this._setSubView())],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.updating}_setSubView(){var e,t;let i="Imagery";((e=this.layer.renderer)==null?void 0:e.type)==="vector-field"&&this.layer.format==="lerc"&&(i="Graphics");var a,r;((t=this.layer.renderer)==null?void 0:t.type)==="animated-flow"&&(i="Flow"),this.subview&&this.subview.type===i||((a=this.subview)==null||a.uninstall(this.container),(r=this.subview)==null||r.destroy(),this.subview=i==="Imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):i==="Graphics"?new oe({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new Q({layer:this.layer,layerView:this}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect),this.requestUpdate()}};s([n()],y.prototype,"pixelData",null),s([n({readOnly:!0})],y.prototype,"updating",null),s([n()],y.prototype,"subview",void 0),y=s([f("esri.views.2d.layers.ImageryLayerView2D")],y);const tt=y;export{tt as default};
