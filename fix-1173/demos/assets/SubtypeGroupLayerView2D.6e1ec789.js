import{e as o,i as n,aD as p,r as y,iB as m}from"./main.f21fb970.js";import u from"./FeatureLayerView2D.2fd23b24.js";import"./Container.c78fa9d0.js";import"./drapedUtils.760349a2.js";import"./definitions.21e97413.js";import"./LayerView.83603fd1.js";import"./schemaUtils.430ec3fb.js";import"./Utils.907b96aa.js";import"./Texture.17e7b9b0.js";import"./MaterialKey.53296158.js";import"./visualVariablesUtils.c80d4874.js";import"./CIMSymbolHelper.ed4c2ea8.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.571cefae.js";import"./quantizationUtils.fd529cb7.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.2291ea3a.js";import"./popupUtils.fe1252b1.js";import"./RefreshableLayerView.da9c8c6c.js";function d(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends u{initialize(){this.handles.add([p(this.view,"viewpoint",()=>this._update())])}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(l=>d(l,s)).map(l=>l.subtypeCode);if(!t.length)return e;e=y(e)?e:new m().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=t,i.sourceLayer=this.layer}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=o([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const T=a;export{T as default};
