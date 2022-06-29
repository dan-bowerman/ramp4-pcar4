import{e as s,d as a,i as u,s as l,cP as h,f as c,r as p}from"./main.56314a08.js";import f from"./FeatureLayerView2D.2a6cd014.js";import{e as v}from"./util.13ee63df.js";import"./Container.03bf8517.js";import"./drapedUtils.f575b44e.js";import"./definitions.21e97413.js";import"./LayerView.744d8aef.js";import"./schemaUtils.7159da1e.js";import"./Utils.5c62e419.js";import"./Texture.54772fdb.js";import"./MaterialKey.8c1d2494.js";import"./visualVariablesUtils.689de2a1.js";import"./CIMSymbolHelper.ef619218.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.31f822a0.js";import"./quantizationUtils.b440a86a.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./popupUtils.5069c1fc.js";import"./RefreshableLayerView.881fc01c.js";function d(e,t){if(c(e)&&c(t))return null;const r={};return p(t)&&(r.geometry=t.toJSON()),p(e)&&(r.where=e),r}let o=class extends f{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",()=>this._update())])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new l("stream-controller",this.errorString)}on(e,t){e==="data-received"&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),e==="data-received"&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new l("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(r=>{const i=h.fromJSON(r);return i.features.forEach(n=>{n.layer=this.layer,n.sourceLayer=this.layer}),i})}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(d(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(y=>y.toJSON()),i=v(e.geometryType),n=e.timeInfo&&e.timeInfo.toJSON()||null,m=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:n,source:this.layer.parsedUrl,serviceFilter:d(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:m,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};s([a()],o.prototype,"errorString",void 0),s([a({readOnly:!0})],o.prototype,"connectionError",null),s([a()],o.prototype,"connectionStatus",void 0),o=s([u("esri.views.2d.layers.StreamLayerView2D")],o);const H=o;export{H as default};
