import{e as s,i as y,d as p,iD as E,j2 as U,s as $,r as c,j3 as A,E as G,fO as M,aj as S,iT as V,ar as F}from"./main.ec877ec7.js";import{t as T}from"./BitmapContainer.0266c074.js";import{l as H,u as D}from"./LayerView.a23d679c.js";import{t as L,i as R}from"./BaseGraphicContainer.dce5571d.js";import{I as j}from"./Utils.8c4365da.js";import{S as O}from"./ExportStrategy.4f4ebb0c.js";import{s as N,a as Q}from"./drapedUtils.bfb419ef.js";import{t as k,d as z}from"./popupUtils.b3481254.js";import{i as W}from"./RefreshableLayerView.0599d45e.js";import"./WGLContainer.6305132c.js";import"./definitions.21e97413.js";import"./VertexArrayObject.caee29e5.js";import"./Texture.926b8804.js";import"./ShaderCompiler.d3ebf518.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.282b3b27.js";import"./Container.5bf75aec.js";import"./earcut.f20dd8d8.js";import"./CIMSymbolHelper.f8f4b592.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.0ab8ce83.js";import"./json.2d0d6862.js";import"./FeatureContainer.c716a1c2.js";import"./TileContainer.94fdd16e.js";import"./visualVariablesUtils.e5347641.js";import"./visualVariablesUtils.808e59c7.js";import"./Matcher.55b28696.js";import"./tileUtils.e40525c2.js";import"./TileClipper.eb8a6957.js";import"./cimSymbolUtils.11e76ba2.js";import"./quantizationUtils.09e4e44a.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.f5a4e6c0.js";import"./MD5.f9440c6b.js";import"./util.e68e99f5.js";import"./ComputedAttributeStorage.39f491d0.js";import"./FeatureSetReader.8c57007c.js";import"./centroid.529c799b.js";import"./vec3f32.9cc42d31.js";import"./Bitmap.3e02385f.js";let g=class extends L{renderChildren(e){if(e.drawPhase!==j.HIGHLIGHT||(this.attributeView.bindTextures(e.context),!this.children.some(a=>a.hasData)))return;super.renderChildren(e);const{painter:r}=e,t=r.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}};g=s([y("esri.views.2d.layers.support.HighlightGraphicContainer")],g);const B=g,J=e=>{let r=class extends e{initialize(){this.exportImageParameters=new U({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,a){const{layer:m}=this;if(!t)return Promise.reject(new $("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:m}));const l=this.get("view.scale"),f=[],w=async i=>{const n=i.minScale===0||l<=i.minScale,o=i.maxScale===0||l>=i.maxScale;if(i.visible&&n&&o){if(i.sublayers)i.sublayers.forEach(w);else if(i.popupEnabled){const d=z(i,{...a,defaultPopupTemplateEnabled:!1});c(d)&&f.unshift({sublayer:i,popupTemplate:d})}}},P=m.sublayers.toArray().reverse().map(w);await Promise.all(P);const _=f.map(async({sublayer:i,popupTemplate:n})=>{await i.load().catch(()=>{});const o=i.createQuery(),d=c(a)?a.event:null,v=N({renderer:i.renderer,event:d}),x=this.createFetchPopupFeaturesQueryGeometry(t,v);if(o.geometry=x,o.outFields=await k(i,n),this.layer.type==="map-image"&&"floors"in this.view){var I,b;const q=(I=this.view)==null||(b=I.floors)==null?void 0:b.clone(),u=A(q,i);c(u)&&(o.where=o.where?`(${o.where}) AND (${u})`:u)}const C=await this._loadArcadeModules(n);return C&&C.arcadeUtils.hasGeometryOperations(n)||(o.maxAllowableOffset=x.width/v),(await i.queryFeatures(o)).features});return(await G(_)).reduce((i,n)=>n.value?[...i,...n.value]:i,[]).filter(i=>i!=null)}canResume(){var t;return!!super.canResume()&&((t=this.timeExtent)==null||!t.isEmpty)}_loadArcadeModules(t){if(t.get("expressionInfos.length")||Array.isArray(t.content)&&t.content.some(a=>a.type==="expression"))return M()}};return s([p()],r.prototype,"exportImageParameters",void 0),s([p({readOnly:!0})],r.prototype,"exportImageVersion",null),s([p()],r.prototype,"layer",void 0),s([p()],r.prototype,"suspended",void 0),s([p(E)],r.prototype,"timeExtent",void 0),r=s([y("esri.views.layers.MapImageLayerView")],r),r},K=S.getLogger("esri.views.2d.layers.MapImageLayerView2D");let h=class extends J(W(H(D))){constructor(){super(...arguments),this._highlightGraphics=new V}update(e){this.strategy.update(e).catch(r=>{F(r)||K.error(r)})}attach(){const{imageMaxWidth:e,imageMaxHeight:r,version:t}=this.layer,a=t>=10.3,m=t>=10;this._bitmapContainer=new T,this.container.addChild(this._bitmapContainer);const l=new R({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new B(this.view.featuresTilingScheme)});this.container.addChild(l.container),this.strategy=new O({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:r,imageRotationSupported:a,imageNormalizationSupported:m,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(this.watch("view.floors",()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,r){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,r){return Q(e,r,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,r,t,a){return this.layer.fetchImage(e,r,t,{timeExtent:this.timeExtent,floors:this.view.floors,...a})}};s([p()],h.prototype,"strategy",void 0),s([p()],h.prototype,"updating",void 0),h=s([y("esri.views.2d.layers.MapImageLayerView2D")],h);const Le=h;export{Le as default};
