import{e as o,i as n,aC as p,r as y,iB as m}from"./main.748a25d3.js";import u from"./FeatureLayerView2D.41b4a87a.js";import"./Container.e0a83bdf.js";import"./drapedUtils.15aa7d23.js";import"./definitions.21e97413.js";import"./LayerView.6f772454.js";import"./schemaUtils.a2002e32.js";import"./Utils.ab30ace6.js";import"./Texture.6c08bf03.js";import"./MaterialKey.406a5ef3.js";import"./visualVariablesUtils.6d0762f3.js";import"./CIMSymbolHelper.049aea35.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.0d5c5c80.js";import"./quantizationUtils.f52c0d81.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.85654f3e.js";import"./popupUtils.32131a65.js";import"./RefreshableLayerView.4926bc58.js";function d(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends u{initialize(){this.handles.add([p(this.view,"viewpoint",()=>this._update())])}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(l=>d(l,s)).map(l=>l.subtypeCode);if(!t.length)return e;e=y(e)?e:new m().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=t,i.sourceLayer=this.layer}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=o([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const T=a;export{T as default};
