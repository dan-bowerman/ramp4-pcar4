import{b7 as p,f as o,e as a,i as m}from"./main.32ef8a5a.js";import{l as h,u as l}from"./LayerView.e782c079.js";import{i as n}from"./GraphicContainer.ae04b938.js";import{i as c}from"./BaseGraphicContainer.714c102b.js";import"./Container.a7994563.js";import"./Utils.6e3b6498.js";import"./Texture.074ab60c.js";import"./CIMSymbolHelper.840767d8.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.f1f52084.js";import"./json.2d0d6862.js";import"./VertexArrayObject.041a7dc2.js";import"./FeatureContainer.a3ceb5d5.js";import"./TileContainer.d4091f5a.js";import"./WGLContainer.ca0a3493.js";import"./ShaderCompiler.e717922c.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.f9aa3e19.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.c4581b5e.js";import"./visualVariablesUtils.da743d82.js";import"./Matcher.9d8c18b2.js";import"./tileUtils.176af884.js";import"./TileClipper.30840911.js";import"./cimSymbolUtils.295bb897.js";import"./quantizationUtils.12d90d04.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.4e87ee49.js";import"./MD5.f9440c6b.js";import"./util.d59500d5.js";import"./ComputedAttributeStorage.ffd8f821.js";import"./FeatureSetReader.34544b5f.js";import"./centroid.e6503c05.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
