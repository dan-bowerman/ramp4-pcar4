import{r as p,h as u,S as g,aD as h,ix as f,f as w,e as y,i as V}from"./main.e0908dae.js";import{l as v,u as C}from"./LayerView.367650a2.js";import{i as l}from"./GraphicContainer.8bef67dc.js";import{i as m}from"./BaseGraphicContainer.250a741b.js";import"./Container.c4307a76.js";import"./Utils.8a021768.js";import"./Texture.2a99f0f4.js";import"./CIMSymbolHelper.8f0c05f0.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.80ad8bf9.js";import"./json.2d0d6862.js";import"./VertexArrayObject.72f195cf.js";import"./FeatureContainer.d95ae535.js";import"./TileContainer.dbb8e373.js";import"./WGLContainer.2223bcce.js";import"./ShaderCompiler.506ce913.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.8da40838.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.a221a041.js";import"./visualVariablesUtils.366c5267.js";import"./Matcher.44f6ba16.js";import"./tileUtils.17ad4f74.js";import"./TileClipper.8d6ddf8e.js";import"./cimSymbolUtils.772191da.js";import"./quantizationUtils.b385c209.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.4fc73ed1.js";import"./MD5.f9440c6b.js";import"./util.caf4cd1a.js";import"./ComputedAttributeStorage.c2186434.js";import"./FeatureSetReader.1ffa334f.js";import"./centroid.098c67dd.js";import"./vec3f32.9cc42d31.js";const d="sublayers",n="layerView",_=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends v(C){async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){p(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():p(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){const e=Array.from(this.graphicsViews(),async r=>{const a=await r.hitTest(i);if(p(this._graphicsViewsFeatureCollectionMap)){const s=this._graphicsViewsFeatureCollectionMap.get(r);for(const o of a)!o.popupTemplate&&s.popupTemplate&&(o.popupTemplate=s.popupTemplate)}return a});return(await Promise.all(e)).flat()}highlight(i){let t;if(typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):g.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray()),t=t.filter(e=>e!=null),!t.length)return _;for(const e of this.graphicsViews())e.addHighlight(t);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(t)}}}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(p(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of e){const a=new l(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const s=new m({view:i,graphics:r.source,renderer:r.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(s,r),this.container.addChild(s.container),this.handles.add([h(r,"visible",o=>s.container.visible=o),h(s,"updating",()=>this.notifyChange("updating"))],n)}}else p(this.layer.sublayers)&&this.handles.add(f(this.layer,"sublayers","change",()=>this._createGraphicsViews(),()=>this._createGraphicsViews(),()=>this._destroyGraphicsViews()),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),w(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const r of this.layer.sublayers){const a=new l(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const s=new m({view:t,graphics:r.graphics,requestUpdateCallback:e,container:a});this.handles.add([r.on("graphic-update",s.graphicUpdateHandler),h(r,"visible",o=>s.container.visible=o),h(s,"updating",()=>this.notifyChange("updating"))],n),this.container.addChild(s.container),i.push(s)}this._graphicsViews=i}};c=y([V("esri.views.2d.layers.MapNotesLayerView2D")],c);const oi=c;export{oi as default};
