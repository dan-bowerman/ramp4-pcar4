import{h as a,S as h,e as s,d as o,i as m}from"./main.5a2439db.js";import{l as n,u as c}from"./LayerView.7096c1cc.js";import{i as l}from"./GraphicContainer.3a5f17a6.js";import{i as g}from"./BaseGraphicContainer.adbbd164.js";import"./Container.150017f5.js";import"./Utils.df34d6e9.js";import"./Texture.aba4d182.js";import"./CIMSymbolHelper.ad155e5d.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.b40ef1b7.js";import"./json.2d0d6862.js";import"./VertexArrayObject.c7545c39.js";import"./FeatureContainer.0c9272c2.js";import"./TileContainer.54717be9.js";import"./WGLContainer.f636eb36.js";import"./ShaderCompiler.a6063da2.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.f75e46ca.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.45482178.js";import"./visualVariablesUtils.1214923f.js";import"./Matcher.5e224fd7.js";import"./tileUtils.716c0c8e.js";import"./TileClipper.49767ca2.js";import"./cimSymbolUtils.c3dfe4de.js";import"./quantizationUtils.35ad1ee0.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.fbaa59be.js";import"./MD5.f9440c6b.js";import"./util.1aa4a8ea.js";import"./ComputedAttributeStorage.6577f8bc.js";import"./FeatureSetReader.cdadf237.js";import"./centroid.6d583f29.js";import"./vec3f32.9cc42d31.js";const d={remove(){},pause(){},resume(){}};let p=class extends n(c){initialize(){this.graphicsView=new g({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new l(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(e=>!!e.popupTemplate)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){var e;let t;return typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):h.isCollection(i)&&i.length>0&&(t=i.map(r=>r&&r.uid).toArray()),t=(e=t)==null?void 0:e.filter(r=>r!=null),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):d}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};s([o()],p.prototype,"graphicsView",void 0),p=s([m("esri.views.2d.layers.GraphicsLayerView2D")],p);const Z=p;export{Z as default};
