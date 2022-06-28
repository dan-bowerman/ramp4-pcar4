import{b8 as p,f as o,e as a,i as m}from"./main.648ca69b.js";import{l as h,u as l}from"./LayerView.408b0ef4.js";import{i as n}from"./GraphicContainer.88be4552.js";import{i as c}from"./BaseGraphicContainer.d6fd324d.js";import"./Container.ab94d613.js";import"./Utils.7ec2de38.js";import"./Texture.3d3d767c.js";import"./CIMSymbolHelper.15a7eef6.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.0886ebbd.js";import"./json.2d0d6862.js";import"./VertexArrayObject.6e97a673.js";import"./FeatureContainer.d680d397.js";import"./TileContainer.d40fc583.js";import"./WGLContainer.05651a64.js";import"./ShaderCompiler.af403f4d.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.d4b7dc98.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.327bfa28.js";import"./visualVariablesUtils.5bf27517.js";import"./Matcher.15713837.js";import"./tileUtils.a5b77d1c.js";import"./TileClipper.9409338c.js";import"./cimSymbolUtils.fb26ccd7.js";import"./quantizationUtils.8651a974.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.7cc1f7fd.js";import"./MD5.f9440c6b.js";import"./util.8fcd9ed2.js";import"./ComputedAttributeStorage.043ee100.js";import"./FeatureSetReader.ca2e327e.js";import"./centroid.0c58d595.js";import"./vec3f32.9cc42d31.js";let r=class extends h(l){constructor(){super(...arguments),this._handles=new p,this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,i){return this.graphicsViews.length?(await Promise.all(this.graphicsViews.map(e=>e.hitTest(t)))).flat().filter((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)):null}update(t){if(this.graphicsViews)for(const i of this.graphicsViews)i.processUpdate(t)}attach(){o(this.layer.featureCollections)||this.layer.featureCollections.forEach(t=>{const i=new c({view:this.view,graphics:t.source,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});i.renderer=t.renderer,this._popupTemplates.set(i,t.popupTemplate),this.graphicsViews.push(i),this.container.addChild(i.container)})}detach(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}};r=a([m("esri.views.2d.layers.RouteLayerView2D")],r);const W=r;export{W as default};
