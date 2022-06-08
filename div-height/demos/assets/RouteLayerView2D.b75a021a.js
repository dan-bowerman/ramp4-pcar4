import{b7 as p,f as o,e as a,i as m}from"./main.01d97856.js";import{l as h,u as l}from"./LayerView.98b45e41.js";import{i as n}from"./GraphicContainer.b7c43afc.js";import{i as c}from"./BaseGraphicContainer.452a1ec6.js";import"./Container.5840746a.js";import"./Utils.38d6ea28.js";import"./Texture.c104a5bc.js";import"./CIMSymbolHelper.e6d77851.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.efd13b15.js";import"./json.2d0d6862.js";import"./VertexArrayObject.f96b84cd.js";import"./FeatureContainer.e4458ee2.js";import"./TileContainer.c76ea3a3.js";import"./WGLContainer.267ecd04.js";import"./ShaderCompiler.30544dd4.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.22063618.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.7c70609f.js";import"./visualVariablesUtils.1c838bd9.js";import"./Matcher.a33c91d4.js";import"./tileUtils.004065ab.js";import"./TileClipper.46cb310b.js";import"./cimSymbolUtils.d3be1090.js";import"./quantizationUtils.12e14402.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.8265c5d2.js";import"./MD5.f9440c6b.js";import"./util.68dfe897.js";import"./ComputedAttributeStorage.38cc819a.js";import"./FeatureSetReader.c510f5cb.js";import"./centroid.ab157588.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
