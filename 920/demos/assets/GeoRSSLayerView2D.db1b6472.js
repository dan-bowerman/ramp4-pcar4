import{aD as p,cP as c,S as g,iQ as w,iR as f,cp as l,e as d,i as u}from"./main.18c7b5d3.js";import{l as S,u as V}from"./LayerView.838ebee2.js";import{i as b}from"./GraphicContainer.48ba861d.js";import{i as v}from"./BaseGraphicContainer.5f011c47.js";import"./Container.54d10cb1.js";import"./Utils.6ea0df4e.js";import"./Texture.7d428d24.js";import"./CIMSymbolHelper.8e395a4c.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.2db6514a.js";import"./json.2d0d6862.js";import"./VertexArrayObject.2ec8af94.js";import"./FeatureContainer.773bc90d.js";import"./TileContainer.d2f7dfb2.js";import"./WGLContainer.1f3cb5f0.js";import"./ShaderCompiler.d92aebf7.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.798ce4e7.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.d62c7eaa.js";import"./visualVariablesUtils.20d7d3ec.js";import"./Matcher.721bf64b.js";import"./tileUtils.d7bcd4e1.js";import"./TileClipper.d4709f9c.js";import"./cimSymbolUtils.7a75a58c.js";import"./quantizationUtils.90daf433.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.996082ba.js";import"./MD5.f9440c6b.js";import"./util.1245281c.js";import"./ComputedAttributeStorage.81d3a7ed.js";import"./FeatureSetReader.30602bf6.js";import"./centroid.5ed4b9dc.js";import"./vec3f32.9cc42d31.js";let m=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const a=this.graphicsViews.reverse().map(i=>i.hitTest(e));return(await Promise.all(a)).flat().filter((i,t)=>(i&&(i.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),i.layer=this.layer,i.sourceLayer=this.layer),!!i))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([p(this.layer,"featureCollections",e=>{this._clear();for(const{popupInfo:r,featureSet:a,layerDefinition:i}of e){const t=c.fromJSON(a),h=new g(t.features),n=i.drawingInfo,y=r?w.fromJSON(r):null,s=f(n.renderer),o=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:s,container:new b(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=o,this._popupTemplates.set(o,y),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(o),this.container.addChild(o.container)}}),p(this.layer,"polygonSymbol",e=>{this._graphicsViewMap.polygon.renderer=new l({symbol:e})}),p(this.layer,"lineSymbol",e=>{this._graphicsViewMap.polyline.renderer=new l({symbol:e})}),p(this.layer,"pointSymbol",e=>{this._graphicsViewMap.point.renderer=new l({symbol:e})})],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};m=d([u("esri.views.2d.layers.GeoRSSLayerView2D")],m);const pe=m;export{pe as default};
