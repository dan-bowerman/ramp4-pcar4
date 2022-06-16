import{e as s,i as y,d as p,iC as E,j1 as S,s as U,r as c,j2 as $,E as A,fN as G,aj as M,iS as V,ar as F}from"./main.d81f1731.js";import{t as H}from"./BitmapContainer.3811990c.js";import{l as T,u as L}from"./LayerView.4f0b2111.js";import{t as R,i as j}from"./BaseGraphicContainer.a17c13a3.js";import{I as D}from"./Utils.2a8a3b0a.js";import{S as N}from"./ExportStrategy.ee16a9cb.js";import{s as O,a as Q}from"./drapedUtils.a2383c4b.js";import{t as k,d as z}from"./popupUtils.bbca41fc.js";import{i as W}from"./RefreshableLayerView.7b49c970.js";import"./WGLContainer.5e07d6b3.js";import"./definitions.21e97413.js";import"./VertexArrayObject.0e200249.js";import"./Texture.86a95cd7.js";import"./ShaderCompiler.5f74af17.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.dfbd1a0d.js";import"./Container.74d58c2a.js";import"./earcut.f20dd8d8.js";import"./CIMSymbolHelper.6195b7da.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.c2d15f30.js";import"./json.2d0d6862.js";import"./FeatureContainer.d2521915.js";import"./TileContainer.e64144a7.js";import"./visualVariablesUtils.f51751ab.js";import"./visualVariablesUtils.3495de08.js";import"./Matcher.195a1046.js";import"./tileUtils.3e1bf3bd.js";import"./TileClipper.c0322d55.js";import"./cimSymbolUtils.635a6f3e.js";import"./quantizationUtils.06afb82e.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.7b307d4a.js";import"./MD5.f9440c6b.js";import"./util.a045113e.js";import"./ComputedAttributeStorage.f92beeac.js";import"./FeatureSetReader.3ceecf49.js";import"./centroid.141a44b8.js";import"./vec3f32.9cc42d31.js";import"./Bitmap.0f0e6f29.js";let g=class extends R{renderChildren(e){if(e.drawPhase!==D.HIGHLIGHT||(this.attributeView.bindTextures(e.context),!this.children.some(a=>a.hasData)))return;super.renderChildren(e);const{painter:r}=e,t=r.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}};g=s([y("esri.views.2d.layers.support.HighlightGraphicContainer")],g);const B=g,J=e=>{let r=class extends e{initialize(){this.exportImageParameters=new S({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,a){const{layer:m}=this;if(!t)return Promise.reject(new U("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:m}));const l=this.get("view.scale"),f=[],w=async i=>{const n=i.minScale===0||l<=i.minScale,o=i.maxScale===0||l>=i.maxScale;if(i.visible&&n&&o){if(i.sublayers)i.sublayers.forEach(w);else if(i.popupEnabled){const d=z(i,{...a,defaultPopupTemplateEnabled:!1});c(d)&&f.unshift({sublayer:i,popupTemplate:d})}}},P=m.sublayers.toArray().reverse().map(w);await Promise.all(P);const _=f.map(async({sublayer:i,popupTemplate:n})=>{await i.load().catch(()=>{});const o=i.createQuery(),d=c(a)?a.event:null,v=O({renderer:i.renderer,event:d}),x=this.createFetchPopupFeaturesQueryGeometry(t,v);if(o.geometry=x,o.outFields=await k(i,n),this.layer.type==="map-image"&&"floors"in this.view){var I,b;const q=(I=this.view)==null||(b=I.floors)==null?void 0:b.clone(),u=$(q,i);c(u)&&(o.where=o.where?`(${o.where}) AND (${u})`:u)}const C=await this._loadArcadeModules(n);return C&&C.arcadeUtils.hasGeometryOperations(n)||(o.maxAllowableOffset=x.width/v),(await i.queryFeatures(o)).features});return(await A(_)).reduce((i,n)=>n.value?[...i,...n.value]:i,[]).filter(i=>i!=null)}canResume(){var t;return!!super.canResume()&&((t=this.timeExtent)==null||!t.isEmpty)}_loadArcadeModules(t){if(t.get("expressionInfos.length")||Array.isArray(t.content)&&t.content.some(a=>a.type==="expression"))return G()}};return s([p()],r.prototype,"exportImageParameters",void 0),s([p({readOnly:!0})],r.prototype,"exportImageVersion",null),s([p()],r.prototype,"layer",void 0),s([p()],r.prototype,"suspended",void 0),s([p(E)],r.prototype,"timeExtent",void 0),r=s([y("esri.views.layers.MapImageLayerView")],r),r},K=M.getLogger("esri.views.2d.layers.MapImageLayerView2D");let h=class extends J(W(T(L))){constructor(){super(...arguments),this._highlightGraphics=new V}update(e){this.strategy.update(e).catch(r=>{F(r)||K.error(r)})}attach(){const{imageMaxWidth:e,imageMaxHeight:r,version:t}=this.layer,a=t>=10.3,m=t>=10;this._bitmapContainer=new H,this.container.addChild(this._bitmapContainer);const l=new j({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new B(this.view.featuresTilingScheme)});this.container.addChild(l.container),this.strategy=new N({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:r,imageRotationSupported:a,imageNormalizationSupported:m,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(this.watch("view.floors",()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,r){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,r){return Q(e,r,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,r,t,a){return this.layer.fetchImage(e,r,t,{timeExtent:this.timeExtent,floors:this.view.floors,...a})}};s([p()],h.prototype,"strategy",void 0),s([p()],h.prototype,"updating",void 0),h=s([y("esri.views.2d.layers.MapImageLayerView2D")],h);const Re=h;export{Re as default};
