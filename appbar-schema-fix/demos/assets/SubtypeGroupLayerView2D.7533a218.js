import{e as o,i as n,aD as p,r as y,iC as m}from"./main.855c0a69.js";import u from"./FeatureLayerView2D.51b45d66.js";import"./Container.4cfd4189.js";import"./drapedUtils.0b7e88c4.js";import"./definitions.21e97413.js";import"./LayerView.9114f46b.js";import"./schemaUtils.13b2c941.js";import"./Utils.d5095e4c.js";import"./Texture.71816a6f.js";import"./MaterialKey.7de90a8b.js";import"./visualVariablesUtils.7ef49f91.js";import"./CIMSymbolHelper.74c25d7e.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.bcc2eb05.js";import"./quantizationUtils.7eb7363d.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.caae6935.js";import"./popupUtils.c6d788c0.js";import"./RefreshableLayerView.4b03aeb6.js";function d(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends u{initialize(){this.handles.add([p(this.view,"viewpoint",()=>this._update())])}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(l=>d(l,s)).map(l=>l.subtypeCode);if(!t.length)return e;e=y(e)?e:new m().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=t,i.sourceLayer=this.layer}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=o([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const T=a;export{T as default};
