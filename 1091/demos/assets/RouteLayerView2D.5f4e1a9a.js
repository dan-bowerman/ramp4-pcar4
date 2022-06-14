import{b7 as p,f as o,e as a,i as m}from"./main.748a25d3.js";import{l as h,u as l}from"./LayerView.6f772454.js";import{i as n}from"./GraphicContainer.136b6b17.js";import{i as c}from"./BaseGraphicContainer.a06b5e2f.js";import"./Container.e0a83bdf.js";import"./Utils.ab30ace6.js";import"./Texture.6c08bf03.js";import"./CIMSymbolHelper.049aea35.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.738ed878.js";import"./json.2d0d6862.js";import"./VertexArrayObject.95602135.js";import"./FeatureContainer.0c99e305.js";import"./TileContainer.2b72d99f.js";import"./WGLContainer.3a51bc2a.js";import"./ShaderCompiler.9998492e.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.406a5ef3.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.b6082523.js";import"./visualVariablesUtils.6d0762f3.js";import"./Matcher.62ee130a.js";import"./tileUtils.7e55b46f.js";import"./TileClipper.63e49892.js";import"./cimSymbolUtils.0d5c5c80.js";import"./quantizationUtils.f52c0d81.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.a2002e32.js";import"./MD5.f9440c6b.js";import"./util.85654f3e.js";import"./ComputedAttributeStorage.8332ec8d.js";import"./FeatureSetReader.22753a64.js";import"./centroid.63fac104.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
