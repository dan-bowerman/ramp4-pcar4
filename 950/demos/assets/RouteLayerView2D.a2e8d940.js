import{b8 as p,f as o,e as a,i as m}from"./main.5d3fa3f4.js";import{l as h,u as l}from"./LayerView.55407bd6.js";import{i as n}from"./GraphicContainer.86e33935.js";import{i as c}from"./BaseGraphicContainer.80aef075.js";import"./Container.a1eaeb88.js";import"./Utils.4f878ec2.js";import"./Texture.318bc74e.js";import"./CIMSymbolHelper.02c1f484.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.42e57db8.js";import"./json.2d0d6862.js";import"./VertexArrayObject.39e8505e.js";import"./FeatureContainer.a2827b3e.js";import"./TileContainer.a0e5acce.js";import"./WGLContainer.8cdfe9ec.js";import"./ShaderCompiler.29bd1c46.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.d4af34ae.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.70a37b05.js";import"./visualVariablesUtils.47d8e4ce.js";import"./Matcher.f2ddc8aa.js";import"./tileUtils.24b2f427.js";import"./TileClipper.befbac83.js";import"./cimSymbolUtils.0a8ac76a.js";import"./quantizationUtils.1d77df6f.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.d2690a7a.js";import"./MD5.f9440c6b.js";import"./util.a1eb4b26.js";import"./ComputedAttributeStorage.65ec73d0.js";import"./FeatureSetReader.54cd34df.js";import"./centroid.f6553013.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
