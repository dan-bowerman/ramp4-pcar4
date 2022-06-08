import{h as a,S as h,e as s,d as o,i as m}from"./main.c52d903d.js";import{l as n,u as c}from"./LayerView.000dd805.js";import{i as l}from"./GraphicContainer.50bd8c04.js";import{i as g}from"./BaseGraphicContainer.a595baf9.js";import"./Container.cbf01ce0.js";import"./Utils.8ae49c7c.js";import"./Texture.0454533a.js";import"./CIMSymbolHelper.491594c5.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.89dfad4f.js";import"./json.2d0d6862.js";import"./VertexArrayObject.f256c953.js";import"./FeatureContainer.a54c7636.js";import"./TileContainer.365549ca.js";import"./WGLContainer.7e482e7f.js";import"./ShaderCompiler.517746f8.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.fb2041eb.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.cad33b30.js";import"./visualVariablesUtils.0ac534c7.js";import"./Matcher.aa8ad76d.js";import"./tileUtils.35064d50.js";import"./TileClipper.a06f1050.js";import"./cimSymbolUtils.c5ef70b3.js";import"./quantizationUtils.0663063e.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.b83dfee8.js";import"./MD5.f9440c6b.js";import"./util.6f7ce7d4.js";import"./ComputedAttributeStorage.6fa5ed3d.js";import"./FeatureSetReader.2431be11.js";import"./centroid.eda4ba95.js";import"./vec3f32.9cc42d31.js";const d={remove(){},pause(){},resume(){}};let p=class extends n(c){initialize(){this.graphicsView=new g({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new l(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(e=>!!e.popupTemplate)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){var e;let t;return typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):h.isCollection(i)&&i.length>0&&(t=i.map(r=>r&&r.uid).toArray()),t=(e=t)==null?void 0:e.filter(r=>r!=null),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):d}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};s([o()],p.prototype,"graphicsView",void 0),p=s([m("esri.views.2d.layers.GraphicsLayerView2D")],p);const Z=p;export{Z as default};
