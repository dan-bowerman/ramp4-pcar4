import{h as a,S as h,e as s,d as o,i as m}from"./main.e7277a66.js";import{l as n,u as c}from"./LayerView.3491da7c.js";import{i as l}from"./GraphicContainer.297b2b07.js";import{i as g}from"./BaseGraphicContainer.dcf13e52.js";import"./Container.1f623d53.js";import"./Utils.257daa3e.js";import"./Texture.c6a96cd4.js";import"./CIMSymbolHelper.4bd191cb.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.95c5015e.js";import"./json.2d0d6862.js";import"./VertexArrayObject.0ce2c95a.js";import"./FeatureContainer.21883c10.js";import"./TileContainer.3d03628e.js";import"./WGLContainer.eb3cb6bb.js";import"./ShaderCompiler.a9cd9b1e.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.134883be.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.9d4966eb.js";import"./visualVariablesUtils.f1449149.js";import"./Matcher.9c03ece4.js";import"./tileUtils.d99b95e4.js";import"./TileClipper.2cc49a0b.js";import"./cimSymbolUtils.91b89469.js";import"./quantizationUtils.8a6d0236.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.93e7c340.js";import"./MD5.f9440c6b.js";import"./util.5f9ec3b4.js";import"./ComputedAttributeStorage.998dd83b.js";import"./FeatureSetReader.f6c9c4af.js";import"./centroid.613b8198.js";import"./vec3f32.9cc42d31.js";const d={remove(){},pause(){},resume(){}};let p=class extends n(c){initialize(){this.graphicsView=new g({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new l(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(e=>!!e.popupTemplate)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){var e;let t;return typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):h.isCollection(i)&&i.length>0&&(t=i.map(r=>r&&r.uid).toArray()),t=(e=t)==null?void 0:e.filter(r=>r!=null),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):d}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};s([o()],p.prototype,"graphicsView",void 0),p=s([m("esri.views.2d.layers.GraphicsLayerView2D")],p);const Z=p;export{Z as default};
