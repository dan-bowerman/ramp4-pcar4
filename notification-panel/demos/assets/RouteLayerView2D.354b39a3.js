import{b7 as p,f as o,e as a,i as m}from"./main.c52d903d.js";import{l as h,u as l}from"./LayerView.000dd805.js";import{i as n}from"./GraphicContainer.50bd8c04.js";import{i as c}from"./BaseGraphicContainer.a595baf9.js";import"./Container.cbf01ce0.js";import"./Utils.8ae49c7c.js";import"./Texture.0454533a.js";import"./CIMSymbolHelper.491594c5.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.89dfad4f.js";import"./json.2d0d6862.js";import"./VertexArrayObject.f256c953.js";import"./FeatureContainer.a54c7636.js";import"./TileContainer.365549ca.js";import"./WGLContainer.7e482e7f.js";import"./ShaderCompiler.517746f8.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.fb2041eb.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.cad33b30.js";import"./visualVariablesUtils.0ac534c7.js";import"./Matcher.aa8ad76d.js";import"./tileUtils.35064d50.js";import"./TileClipper.a06f1050.js";import"./cimSymbolUtils.c5ef70b3.js";import"./quantizationUtils.0663063e.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.b83dfee8.js";import"./MD5.f9440c6b.js";import"./util.6f7ce7d4.js";import"./ComputedAttributeStorage.6fa5ed3d.js";import"./FeatureSetReader.2431be11.js";import"./centroid.eda4ba95.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
