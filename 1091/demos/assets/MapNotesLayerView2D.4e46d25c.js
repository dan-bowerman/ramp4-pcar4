import{r as p,h as u,S as g,aC as h,ix as f,f as w,e as y,i as V}from"./main.748a25d3.js";import{l as v,u as C}from"./LayerView.6f772454.js";import{i as l}from"./GraphicContainer.136b6b17.js";import{i as m}from"./BaseGraphicContainer.a06b5e2f.js";import"./Container.e0a83bdf.js";import"./Utils.ab30ace6.js";import"./Texture.6c08bf03.js";import"./CIMSymbolHelper.049aea35.js";import"./BidiEngine.aae60613.js";import"./definitions.21e97413.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.738ed878.js";import"./json.2d0d6862.js";import"./VertexArrayObject.95602135.js";import"./FeatureContainer.0c99e305.js";import"./TileContainer.2b72d99f.js";import"./WGLContainer.3a51bc2a.js";import"./ShaderCompiler.9998492e.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.406a5ef3.js";import"./earcut.f20dd8d8.js";import"./visualVariablesUtils.b6082523.js";import"./visualVariablesUtils.6d0762f3.js";import"./Matcher.62ee130a.js";import"./tileUtils.7e55b46f.js";import"./TileClipper.63e49892.js";import"./cimSymbolUtils.0d5c5c80.js";import"./quantizationUtils.f52c0d81.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.a2002e32.js";import"./MD5.f9440c6b.js";import"./util.85654f3e.js";import"./ComputedAttributeStorage.8332ec8d.js";import"./FeatureSetReader.22753a64.js";import"./centroid.63fac104.js";import"./vec3f32.9cc42d31.js";const d="sublayers",n="layerView",_=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends v(C){async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){p(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():p(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){const e=Array.from(this.graphicsViews(),async r=>{const a=await r.hitTest(i);if(p(this._graphicsViewsFeatureCollectionMap)){const s=this._graphicsViewsFeatureCollectionMap.get(r);for(const o of a)!o.popupTemplate&&s.popupTemplate&&(o.popupTemplate=s.popupTemplate)}return a});return(await Promise.all(e)).flat()}highlight(i){let t;if(typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):g.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray()),t=t.filter(e=>e!=null),!t.length)return _;for(const e of this.graphicsViews())e.addHighlight(t);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(t)}}}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(p(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of e){const a=new l(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const s=new m({view:i,graphics:r.source,renderer:r.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(s,r),this.container.addChild(s.container),this.handles.add([h(r,"visible",o=>s.container.visible=o),h(s,"updating",()=>this.notifyChange("updating"))],n)}}else p(this.layer.sublayers)&&this.handles.add(f(this.layer,"sublayers","change",()=>this._createGraphicsViews(),()=>this._createGraphicsViews(),()=>this._destroyGraphicsViews()),d)}detach(){this._destroyGraphicsViews(),this.handles.remove(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),w(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const r of this.layer.sublayers){const a=new l(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const s=new m({view:t,graphics:r.graphics,requestUpdateCallback:e,container:a});this.handles.add([r.on("graphic-update",s.graphicUpdateHandler),h(r,"visible",o=>s.container.visible=o),h(s,"updating",()=>this.notifyChange("updating"))],n),this.container.addChild(s.container),i.push(s)}this._graphicsViews=i}};c=y([V("esri.views.2d.layers.MapNotesLayerView2D")],c);const oi=c;export{oi as default};
