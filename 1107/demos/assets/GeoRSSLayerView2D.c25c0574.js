import{aC as p,cO as c,S as g,iP as w,iQ as f,co as l,e as d,i as u}from"./main.dd0259bc.js";import{l as S,u as V}from"./LayerView.3588734f.js";import{i as b}from"./GraphicContainer.bddbaabd.js";import{i as v}from"./BaseGraphicContainer.5f7734a7.js";import"./Container.8e394c5a.js";import"./Utils.b9329ada.js";import"./Texture.e123821a.js";import"./CIMSymbolHelper.deafcb34.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.4918d8de.js";import"./json.2d0d6862.js";import"./VertexArrayObject.56df4ed1.js";import"./FeatureContainer.8531d445.js";import"./TileContainer.f0aca473.js";import"./WGLContainer.4befc8d6.js";import"./ShaderCompiler.6413d7f4.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.dcfa190b.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.a8f92f19.js";import"./visualVariablesUtils.18680ad0.js";import"./Matcher.ffae65ca.js";import"./tileUtils.663ed073.js";import"./TileClipper.c3595e7e.js";import"./cimSymbolUtils.9710d982.js";import"./quantizationUtils.b1dacd25.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.0364c5ce.js";import"./MD5.f9440c6b.js";import"./util.b30a0be2.js";import"./ComputedAttributeStorage.1c3015f6.js";import"./FeatureSetReader.4e27229f.js";import"./centroid.48fd6e6b.js";import"./vec3f32.9cc42d31.js";let m=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const a=this.graphicsViews.reverse().map(i=>i.hitTest(e));return(await Promise.all(a)).flat().filter((i,t)=>(i&&(i.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),i.layer=this.layer,i.sourceLayer=this.layer),!!i))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([p(this.layer,"featureCollections",e=>{this._clear();for(const{popupInfo:r,featureSet:a,layerDefinition:i}of e){const t=c.fromJSON(a),h=new g(t.features),n=i.drawingInfo,y=r?w.fromJSON(r):null,s=f(n.renderer),o=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:h,renderer:s,container:new b(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=o,this._popupTemplates.set(o,y),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(o),this.container.addChild(o.container)}}),p(this.layer,"polygonSymbol",e=>{this._graphicsViewMap.polygon.renderer=new l({symbol:e})}),p(this.layer,"lineSymbol",e=>{this._graphicsViewMap.polyline.renderer=new l({symbol:e})}),p(this.layer,"pointSymbol",e=>{this._graphicsViewMap.point.renderer=new l({symbol:e})})],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};m=d([u("esri.views.2d.layers.GeoRSSLayerView2D")],m);const pe=m;export{pe as default};
