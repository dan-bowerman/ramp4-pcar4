import{h as a,S as h,e as s,d as o,i as m}from"./main.2465de1c.js";import{l as n,u as c}from"./LayerView.f14ecb62.js";import{i as l}from"./GraphicContainer.780283e7.js";import{i as g}from"./BaseGraphicContainer.be11a9f3.js";import"./Container.f1a7e330.js";import"./Utils.0cbcd3de.js";import"./Texture.2d5ec139.js";import"./CIMSymbolHelper.d4d48658.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.11c801d0.js";import"./json.2d0d6862.js";import"./VertexArrayObject.2a85a873.js";import"./FeatureContainer.d20db9d1.js";import"./TileContainer.98f18d8a.js";import"./WGLContainer.d4c91007.js";import"./ShaderCompiler.4b3dd20e.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.b8de32be.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.04b7d448.js";import"./visualVariablesUtils.fd26e286.js";import"./Matcher.31245101.js";import"./tileUtils.d65770f6.js";import"./TileClipper.a250a4b2.js";import"./cimSymbolUtils.88e6a6af.js";import"./quantizationUtils.f3296faa.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.1ccb2447.js";import"./MD5.f9440c6b.js";import"./util.21527219.js";import"./ComputedAttributeStorage.456473b9.js";import"./FeatureSetReader.cf41146f.js";import"./centroid.9703ccbb.js";import"./vec3f32.9cc42d31.js";const d={remove(){},pause(){},resume(){}};let p=class extends n(c){initialize(){this.graphicsView=new g({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new l(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(e=>!!e.popupTemplate)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){var e;let t;return typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):h.isCollection(i)&&i.length>0&&(t=i.map(r=>r&&r.uid).toArray()),t=(e=t)==null?void 0:e.filter(r=>r!=null),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):d}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};s([o()],p.prototype,"graphicsView",void 0),p=s([m("esri.views.2d.layers.GraphicsLayerView2D")],p);const Z=p;export{Z as default};
