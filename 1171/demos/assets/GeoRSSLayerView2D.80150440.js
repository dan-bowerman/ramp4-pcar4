import{aD as p,cP as c,S as g,iQ as w,iR as f,cp as l,e as d,i as u}from"./main.8eac6be0.js";import{l as S,u as V}from"./LayerView.4d7e9789.js";import{i as b}from"./GraphicContainer.884ab526.js";import{i as v}from"./BaseGraphicContainer.8722d776.js";import"./Container.6c2b0645.js";import"./Utils.4d9771c0.js";import"./Texture.8222a230.js";import"./CIMSymbolHelper.36dc1165.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.166a50e0.js";import"./json.2d0d6862.js";import"./VertexArrayObject.902f7dcc.js";import"./FeatureContainer.ffcf30aa.js";import"./TileContainer.e42eadec.js";import"./WGLContainer.bf04a44d.js";import"./ShaderCompiler.9041a83c.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.d885248e.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.b4a494fd.js";import"./visualVariablesUtils.893055be.js";import"./Matcher.2726b476.js";import"./tileUtils.200f9835.js";import"./TileClipper.a5bdff43.js";import"./cimSymbolUtils.167217ec.js";import"./quantizationUtils.6bea12e9.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.5bb079fc.js";import"./MD5.f9440c6b.js";import"./util.c67b156e.js";import"./ComputedAttributeStorage.a9c855a2.js";import"./FeatureSetReader.f2920f99.js";import"./centroid.c1c57d24.js";import"./vec3f32.9cc42d31.js";let m=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const a=this.graphicsViews.reverse().map(i=>i.hitTest(e));return(await Promise.all(a)).flat().filter((i,t)=>(i&&(i.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),i.layer=this.layer,i.sourceLayer=this.layer),!!i))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([p(this.layer,"featureCollections",e=>{this._clear();for(const{popupInfo:r,featureSet:a,layerDefinition:i}of e){const t=c.fromJSON(a),h=new g(t.features),n=i.drawingInfo,y=r?w.fromJSON(r):null,s=f(n.renderer),o=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:s,container:new b(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=o,this._popupTemplates.set(o,y),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(o),this.container.addChild(o.container)}}),p(this.layer,"polygonSymbol",e=>{this._graphicsViewMap.polygon.renderer=new l({symbol:e})}),p(this.layer,"lineSymbol",e=>{this._graphicsViewMap.polyline.renderer=new l({symbol:e})}),p(this.layer,"pointSymbol",e=>{this._graphicsViewMap.point.renderer=new l({symbol:e})})],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};m=d([u("esri.views.2d.layers.GeoRSSLayerView2D")],m);const pe=m;export{pe as default};
