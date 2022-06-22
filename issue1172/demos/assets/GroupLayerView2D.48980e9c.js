import{e as d,d as y,iR as g,i as p,S as u,iv as w}from"./main.54285943.js";import{l as _}from"./VertexArrayObject.2ebc6593.js";import"./Texture.751346e4.js";import{a as v}from"./WGLContainer.3ee3b139.js";import{u as V,l as b}from"./LayerView.fa091fee.js";import"./definitions.21e97413.js";import"./Utils.9b88cfea.js";import"./ShaderCompiler.ed9bd9ca.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.46a4cc66.js";import"./Container.5ed1032b.js";import"./earcut.f20dd8d8.js";class f extends v{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0,this.requiresDedicatedFBO=!1}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)}doRender(i){const r=this.createRenderParams(i),{context:t,painter:s,profiler:a}=r;this._prevFBO=t.getBoundFramebufferObject(),a.recordContainerStart(this.name);const n=this._getFbo(r),o=s.getRenderTarget();t.bindFramebuffer(n),s.setRenderTarget(n),t.setDepthWriteEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1);for(const h of this.children)h.beforeRender(i);for(const h of this.children)h.processRender(r);for(const h of this.children)h.afterRender(i);s.setRenderTarget(o),t.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(r,this._clippingInfos?255:0,this.computedOpacity),t.setStencilTestEnabled(!1),t.setStencilWriteMask(0),s.blitTexture(t,n.colorTexture,9728),s.compositeLayer(r,this.computedOpacity),a.recordContainerEnd()}createRenderParams(i){return{...super.createRenderParams(i),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(i){const{context:r,painter:t}=i,{width:s,height:a}=r.getViewport();if(s!==this._lastWidth||a!==this._lastHeight)if(this._lastWidth=s,this._lastHeight=a,this._renderTarget)this._renderTarget.resize(s,a);else{const n={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:s,height:a},o={colorTarget:0,depthStencilTarget:3};this._renderTarget=new _(r,o,n,t.getSharedStencilBuffer())}return this._renderTarget}}let l=class extends V{constructor(e){super(e),this.type="group",this.layerViews=new u}initialize(){this.handles.add([this.layerViews.on("change",e=>this._layerViewsChangeHandler(e)),this.layerViews.on("after-changes",()=>this._layerViewsAfterChangesHandler()),this.layer.watch("visibilityMode",()=>this._visibilityModeHandler(),!0),this.watch("visible",()=>this._visibleHandler(),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()}set layerViews(e){this._set("layerViews",w(e,this._get("layerViews")))}isUpdating(){return this.layerViews.some(e=>e.updating)}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,i)=>e+i.updatingProgress,0)/this.layerViews.length}_hasLayerViewVisibleOverrides(){return this.layerViews.some(e=>e._isOverridden("visible"))}_findLayerViewForLayer(e){return e&&this.layerViews.find(i=>i.layer===e)}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find(i=>{const r=this._findLayerViewForLayer(i);return r&&r.visible});return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach(i=>{i.visible=i===e}))}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(t=>t.watch("visible",s=>this._layerViewVisibleHandler(s,t),!0)).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let r=null;i&&i.visible&&(r=i),this._enforceVisibility(r)}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map(e=>e.watch("updating",()=>this._updateUpdating(),!0)).toArray(),"grouplayerview:updating"),this._updateUpdating()}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const i=this.visible;this.layerViews.forEach(r=>{r.visible=i});break}case"exclusive":this._enforceExclusiveVisibility(e)}}_visibilityModeHandler(){this._enforceVisibility()}_layerViewVisibleHandler(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&((e=this.layer)==null?void 0:e.visibilityMode)==="inherited"&&this._enforceVisibility()}_updateUpdating(){this.notifyChange("updating")}};d([y({cast:g})],l.prototype,"layerViews",null),d([y()],l.prototype,"view",void 0),d([y({readOnly:!0})],l.prototype,"updatingProgress",null),l=d([p("esri.views.layers.GroupLayerView")],l);const m=l;let c=class extends b(m){constructor(){super(...arguments),this.container=new f}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,i)=>this.container.addChildAt(e.container,i))}};c=d([p("esri.views.2d.layers.GroupLayerView2D")],c);const P=c;export{P as default};
