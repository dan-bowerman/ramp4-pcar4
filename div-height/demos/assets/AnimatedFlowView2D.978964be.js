import{ai as w,r as u,f as m,gn as _,bK as b,bM as x,bO as f,bP as C,aD as M,e as l,d as c,i as D,aP as v,aq as $,aY as L,M as z,au as y,as as A,iW as O}from"./main.01d97856.js";import{a as P,c as F}from"./WGLContainer.267ecd04.js";import{I as T}from"./Utils.38d6ea28.js";import{a as W}from"./Container.5840746a.js";import{o as S,f as j}from"./VertexArrayObject.f96b84cd.js";import"./Texture.c104a5bc.js";class I extends P{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"flow",brushes:[F],target:()=>this.children,drawPhase:T.MAP});return[...super.prepareRenderPasses(e),t]}}const q=w.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class B{constructor(e,t,n,a){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=n,this.pixelRatio=a}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t=await this.flowStyle.loadResources({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e.signal);this.state={name:"loaded",resources:t}}prepareForRendering(e,t,n){if(this.state.name!=="loaded")return void q.error("Only loaded resources can be attached.");const a=this.state.resources;a.prepareForRendering(e,t,n),this.state={name:"attached",resources:a}}destroy(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){return this.flowStyle.areResourcesCompatible(e.flowStyle)?!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio)&&(this.flowStyle=e.flowStyle,!0):!1}}class V extends W{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(e){this._displayData=e,this.requestRender()}clear(){u(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(e){const{displayData:t}=this;if(m(t))return;const n=t.extent.xmin,a=t.extent.ymax,o=[0,0];e.toScreen(o,[n,a]);const r=(t.extent.xmax-t.extent.xmin)/t.size[0]/e.resolution,d=_(e.rotation),{dvs:s}=this.transforms;b(s),x(s,s,[-1,1,0]),f(s,s,[2/(e.size[0]*e.pixelRatio),-2/(e.size[1]*e.pixelRatio),1]),x(s,s,[o[0],o[1],0]),C(s,s,d),f(s,s,[r*e.pixelRatio,r*e.pixelRatio,1])}_createTransforms(){return{dvs:M()}}}const U=1.15,E=w.getLogger("esri.views.2d.engine.flow.FlowStrategy");let p=class extends v{constructor(i){super(i),this._flowDisplayObject=new V,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(i){const{flowStyle:e}=this.flowContainer;if(m(e))return void this._clear();const{extent:t,rotation:n,resolution:a,pixelRatio:o}=i.state,r=Y(t,n);r.expand(U);const d=[Math.round((r.xmax-r.xmin)/a),Math.round((r.ymax-r.ymin)/a)],s=new B(e,r,d,o);if(u(this._loading)){if(this._loading.update(s))return;this._loading.destroy(),this._loading=null}!m(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(s)||(s.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},g=>{$(g)||(E.error("A resource failed to load.",g),this._loading=null)}),this._loading=s)}_clear(){this._flowDisplayObject.clear(),u(this._loading)&&(this._loading.destroy(),this._loading=null)}};l([c()],p.prototype,"_loading",void 0),l([c()],p.prototype,"flowContainer",void 0),l([c()],p.prototype,"updating",null),p=l([D("esri.views.2d.engine.flow.FlowStrategy")],p);const K=p;function Y(i,e){const t=new L({x:(i.xmax+i.xmin)/2,y:(i.ymax+i.ymin)/2,spatialReference:i.spatialReference}),n=i.xmax-i.xmin,a=i.ymax-i.ymin,o=Math.abs(Math.cos(_(e))),r=Math.abs(Math.sin(_(e))),d=o*n+r*a,s=r*n+o*a,g=new z({xmin:t.x-d/2,ymin:t.y-s/2,xmax:t.x+d/2,ymax:t.y+s/2,spatialReference:i.spatialReference});return g.centerAt(t),g}function k(i){const e=y(i.lineWidth),t=2*e,n=Math.round(y(i.lineLength)/t)+1,a=e,o=10,r=i.lineColor.toRgba(),d=[r[0]/255,r[1]/255,r[2]/255,r[3]],{lineSpeed:s,fadeDuration:g,density:R}=i;return{lineRenderWidth:e,segmentLength:t,verticesPerLine:n,lineCollisionWidth:a,lineSpacing:o,lineColor:d,lineSpeed:s,fadeDuration:g,density:R,smoothing:y(i.smoothing),velocityScale:1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}class G{constructor(e,t){this._vertexData=e,this._indexData=t}prepareForRendering(e,t,n){const a=S.createVertex(e,35044,this._vertexData),o=S.createIndex(e,35044,this._indexData),r=new j(e,t,n,{geometry:a},o);this.vertexBuffer=a,this.indexBuffer=o,this.vertexArray=r,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}}class H{constructor(e,t,n){this._loadImagery=e,this._createStreamlinesMesh=t,this._rendererSettings=k(n)}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(e){let t=!0;return t=t&&e._loadImagery===this._loadImagery,t=t&&e._createStreamlinesMesh===this._createStreamlinesMesh,t=t&&e._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,t=t&&e._rendererSettings.segmentLength===this._rendererSettings.segmentLength,t=t&&e._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,t=t&&e._rendererSettings.density===this._rendererSettings.density,t=t&&e._rendererSettings.smoothing===this._rendererSettings.smoothing,t=t&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,t=t&&e._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,t=t&&e._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,t=t&&e._rendererSettings.mergeLines===this._rendererSettings.mergeLines,t=t&&e._rendererSettings.interpolate===this._rendererSettings.interpolate,t&&this._rendererSettings.mergeLines&&(t=e._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),!!t}async loadResources(e,t){const{extent:n,size:a}=e;A(t);const o=await this._loadImagery(n,a[0],a[1],t),{vertexData:r,indexData:d}=await this._createStreamlinesMesh(this._rendererSettings,o,t);return new G(r,d)}}let h=class extends v{constructor(){super(...arguments),this._loadImagery=(i,e,t,n)=>O(this.layer,i,e,t,n),this._createStreamlinesMesh=(i,e,t)=>this.layer.createStreamlinesMesh({flowData:e,rendererSettings:i},{signal:t}),this.container=null,this.layer=null,this.type="rasterAnimatedFlow",this.redrawOrRefetch=async()=>{this._rendererChanged()}}get updating(){return!this._strategy||this._strategy.updating}update(i){i.stationary?this._strategy.update(i):this.layerView.requestUpdate()}install(i){this.container=new I,i.addChild(this.container),this._strategy=new K({flowContainer:this.container}),this._rendererChanged()}uninstall(){this._strategy.destroy(),this.container.removeAllChildren(),this.container.remove()}moveEnd(){}async doRefresh(){}attach(){}_rendererChanged(){if(this.layer.renderer.type!=="animated-flow")return;const i=new H(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer);this.container.flowStyle=i,this.layerView.requestUpdate()}};l([c()],h.prototype,"_strategy",void 0),l([c()],h.prototype,"container",void 0),l([c()],h.prototype,"layer",void 0),l([c()],h.prototype,"layerView",void 0),l([c()],h.prototype,"type",void 0),l([c()],h.prototype,"updating",null),h=l([D("esri.views.2d.engine.flow.AnimatedFlowView2D")],h);const te=h;export{te as p};
