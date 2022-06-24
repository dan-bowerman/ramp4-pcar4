import{h as a,S as h,e as s,d as o,i as m}from"./main.f21fb970.js";import{l as n,u as c}from"./LayerView.83603fd1.js";import{i as l}from"./GraphicContainer.9a436b43.js";import{i as g}from"./BaseGraphicContainer.5daaaa26.js";import"./Container.c78fa9d0.js";import"./Utils.907b96aa.js";import"./Texture.17e7b9b0.js";import"./CIMSymbolHelper.ed4c2ea8.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.bab98d6d.js";import"./json.2d0d6862.js";import"./VertexArrayObject.0ec91993.js";import"./FeatureContainer.6fdb30ff.js";import"./TileContainer.3a4a5046.js";import"./WGLContainer.91b33f30.js";import"./ShaderCompiler.7b7f5bcd.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.53296158.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.9479fe4b.js";import"./visualVariablesUtils.c80d4874.js";import"./Matcher.d89fc800.js";import"./tileUtils.b4368f63.js";import"./TileClipper.b804c2e6.js";import"./cimSymbolUtils.571cefae.js";import"./quantizationUtils.fd529cb7.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.430ec3fb.js";import"./MD5.f9440c6b.js";import"./util.2291ea3a.js";import"./ComputedAttributeStorage.aa43a16d.js";import"./FeatureSetReader.52119d96.js";import"./centroid.a20e1265.js";import"./vec3f32.9cc42d31.js";const d={remove(){},pause(){},resume(){}};let p=class extends n(c){initialize(){this.graphicsView=new g({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new l(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(e=>!!e.popupTemplate)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){var e;let t;return typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):h.isCollection(i)&&i.length>0&&(t=i.map(r=>r&&r.uid).toArray()),t=(e=t)==null?void 0:e.filter(r=>r!=null),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):d}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};s([o()],p.prototype,"graphicsView",void 0),p=s([m("esri.views.2d.layers.GraphicsLayerView2D")],p);const Z=p;export{Z as default};
