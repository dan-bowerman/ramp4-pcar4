import{b8 as p,f as o,e as a,i as m}from"./main.1ef22a98.js";import{l as h,u as l}from"./LayerView.051dafe9.js";import{i as n}from"./GraphicContainer.c4a8cb74.js";import{i as c}from"./BaseGraphicContainer.9290dc10.js";import"./Container.74ebb87e.js";import"./Utils.fe795a0b.js";import"./Texture.1f24528f.js";import"./CIMSymbolHelper.0efb36f2.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.3fff8810.js";import"./json.2d0d6862.js";import"./VertexArrayObject.2edcc9e8.js";import"./FeatureContainer.dc8f9c99.js";import"./TileContainer.517b0b1f.js";import"./WGLContainer.27ca7d90.js";import"./ShaderCompiler.744bb4d5.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.85f4a5bc.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.b8bed38b.js";import"./visualVariablesUtils.1830f066.js";import"./Matcher.f4d02893.js";import"./tileUtils.d0915ea8.js";import"./TileClipper.716003bc.js";import"./cimSymbolUtils.1dd5fcba.js";import"./quantizationUtils.400926d5.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.c618cf9a.js";import"./MD5.f9440c6b.js";import"./util.b615955d.js";import"./ComputedAttributeStorage.532ec565.js";import"./FeatureSetReader.1b82b63d.js";import"./centroid.fb8de639.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
