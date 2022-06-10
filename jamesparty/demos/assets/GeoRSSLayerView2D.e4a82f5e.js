import{aC as p,cO as c,S as g,iP as w,iQ as f,co as l,e as d,i as u}from"./main.5a2439db.js";import{l as S,u as V}from"./LayerView.7096c1cc.js";import{i as b}from"./GraphicContainer.3a5f17a6.js";import{i as v}from"./BaseGraphicContainer.adbbd164.js";import"./Container.150017f5.js";import"./Utils.df34d6e9.js";import"./Texture.aba4d182.js";import"./CIMSymbolHelper.ad155e5d.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.b40ef1b7.js";import"./json.2d0d6862.js";import"./VertexArrayObject.c7545c39.js";import"./FeatureContainer.0c9272c2.js";import"./TileContainer.54717be9.js";import"./WGLContainer.f636eb36.js";import"./ShaderCompiler.a6063da2.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.f75e46ca.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.45482178.js";import"./visualVariablesUtils.1214923f.js";import"./Matcher.5e224fd7.js";import"./tileUtils.716c0c8e.js";import"./TileClipper.49767ca2.js";import"./cimSymbolUtils.c3dfe4de.js";import"./quantizationUtils.35ad1ee0.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.fbaa59be.js";import"./MD5.f9440c6b.js";import"./util.1aa4a8ea.js";import"./ComputedAttributeStorage.6577f8bc.js";import"./FeatureSetReader.cdadf237.js";import"./centroid.6d583f29.js";import"./vec3f32.9cc42d31.js";let m=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const a=this.graphicsViews.reverse().map(i=>i.hitTest(e));return(await Promise.all(a)).flat().filter((i,t)=>(i&&(i.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),i.layer=this.layer,i.sourceLayer=this.layer),!!i))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([p(this.layer,"featureCollections",e=>{this._clear();for(const{popupInfo:r,featureSet:a,layerDefinition:i}of e){const t=c.fromJSON(a),h=new g(t.features),n=i.drawingInfo,y=r?w.fromJSON(r):null,s=f(n.renderer),o=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:s,container:new b(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=o,this._popupTemplates.set(o,y),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(o),this.container.addChild(o.container)}}),p(this.layer,"polygonSymbol",e=>{this._graphicsViewMap.polygon.renderer=new l({symbol:e})}),p(this.layer,"lineSymbol",e=>{this._graphicsViewMap.polyline.renderer=new l({symbol:e})}),p(this.layer,"pointSymbol",e=>{this._graphicsViewMap.point.renderer=new l({symbol:e})})],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};m=d([u("esri.views.2d.layers.GeoRSSLayerView2D")],m);const pe=m;export{pe as default};
