import{e as o,i as n,aA as p,r as y,iw as m}from"./main.7dbc90fb.js";import u from"./FeatureLayerView2D.a321b49c.js";import"./Container.734b43bf.js";import"./drapedUtils.6582f277.js";import"./definitions.21e97413.js";import"./LayerView.fddb0cea.js";import"./schemaUtils.8627649f.js";import"./Utils.60a4d83b.js";import"./Texture.b479c6db.js";import"./MaterialKey.f58cf799.js";import"./visualVariablesUtils.37fbde30.js";import"./CIMSymbolHelper.786e5dde.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.7013d9e5.js";import"./quantizationUtils.07b38d8e.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.e78e8029.js";import"./popupUtils.95f26a9a.js";import"./RefreshableLayerView.7b5711ed.js";function d(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends u{initialize(){this.handles.add([p(this.view,"viewpoint",()=>this._update())])}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(l=>d(l,s)).map(l=>l.subtypeCode);if(!t.length)return e;e=y(e)?e:new m().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=t,i.sourceLayer=this.layer}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=o([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const T=a;export{T as default};
