import{b8 as p,f as o,e as a,i as m}from"./main.7e770098.js";import{l as h,u as l}from"./LayerView.2cfe5faa.js";import{i as n}from"./GraphicContainer.bf39cec0.js";import{i as c}from"./BaseGraphicContainer.e9f7f95e.js";import"./Container.0236d127.js";import"./Utils.da415636.js";import"./Texture.e34dfe71.js";import"./CIMSymbolHelper.7448930e.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.7126dab3.js";import"./json.2d0d6862.js";import"./VertexArrayObject.3f42f0ed.js";import"./FeatureContainer.698cd3bb.js";import"./TileContainer.4bb52356.js";import"./WGLContainer.46d4b10e.js";import"./ShaderCompiler.470f30ad.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.68915317.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.7530bc74.js";import"./visualVariablesUtils.662e14e0.js";import"./Matcher.36fee914.js";import"./tileUtils.d0accb83.js";import"./TileClipper.7fb34a28.js";import"./cimSymbolUtils.04c36690.js";import"./quantizationUtils.9d34219a.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.6e7a8ccc.js";import"./MD5.f9440c6b.js";import"./util.6dabdd9d.js";import"./ComputedAttributeStorage.fb019644.js";import"./FeatureSetReader.a64de1d8.js";import"./centroid.a47fefc5.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
