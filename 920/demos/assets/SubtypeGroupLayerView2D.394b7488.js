import{e as o,i as n,aD as p,r as y,iC as m}from"./main.18c7b5d3.js";import u from"./FeatureLayerView2D.808280d1.js";import"./Container.54d10cb1.js";import"./drapedUtils.fff28897.js";import"./definitions.21e97413.js";import"./LayerView.838ebee2.js";import"./schemaUtils.996082ba.js";import"./Utils.6ea0df4e.js";import"./Texture.7d428d24.js";import"./MaterialKey.798ce4e7.js";import"./visualVariablesUtils.20d7d3ec.js";import"./CIMSymbolHelper.8e395a4c.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.7a75a58c.js";import"./quantizationUtils.90daf433.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.1245281c.js";import"./popupUtils.5219f1a0.js";import"./RefreshableLayerView.b4e27375.js";function d(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends u{initialize(){this.handles.add([p(this.view,"viewpoint",()=>this._update())])}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(l=>d(l,s)).map(l=>l.subtypeCode);if(!t.length)return e;e=y(e)?e:new m().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=t,i.sourceLayer=this.layer}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=o([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const T=a;export{T as default};
