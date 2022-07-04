import{b8 as p,f as o,e as a,i as m}from"./main.ec877ec7.js";import{l as h,u as l}from"./LayerView.a23d679c.js";import{i as n}from"./GraphicContainer.73a2eec0.js";import{i as c}from"./BaseGraphicContainer.dce5571d.js";import"./Container.5bf75aec.js";import"./Utils.8c4365da.js";import"./Texture.926b8804.js";import"./CIMSymbolHelper.f8f4b592.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.0ab8ce83.js";import"./json.2d0d6862.js";import"./VertexArrayObject.caee29e5.js";import"./FeatureContainer.c716a1c2.js";import"./TileContainer.94fdd16e.js";import"./WGLContainer.6305132c.js";import"./ShaderCompiler.d3ebf518.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.282b3b27.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.e5347641.js";import"./visualVariablesUtils.808e59c7.js";import"./Matcher.55b28696.js";import"./tileUtils.e40525c2.js";import"./TileClipper.eb8a6957.js";import"./cimSymbolUtils.11e76ba2.js";import"./quantizationUtils.09e4e44a.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.f5a4e6c0.js";import"./MD5.f9440c6b.js";import"./util.e68e99f5.js";import"./ComputedAttributeStorage.39f491d0.js";import"./FeatureSetReader.8c57007c.js";import"./centroid.529c799b.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
