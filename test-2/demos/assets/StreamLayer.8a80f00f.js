import{e,d as i,i as g,J as w,ag as I,kd as S,jD as j,ke as $,jE as x,jF as k,cW as T,cX as F,cY as R,cZ as P,kc as D,d1 as O,k as v,s as p,r as N,bD as E,kf as u,la as L,lb as _,cm as J,jI as U,hb as A,C,kg as G,t as W,jJ as M,kh as V,M as q,ih as c,ki as z,kj as K,kk as X,k5 as Y,hW as h,lc as Z,ld as B,jL as Q,iK as H,km as ee,jK as te,cK as m,kn as ie,d0 as re,le as se,lf as oe,jM as ae}from"./main.4a115682.js";var y;let n=y=class extends w{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],n.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"maxObservations",void 0),n=y=e([g("esri.layers.support.PurgeOptions")],n);const b=n,ne=I.getLogger("esri.layers.StreamLayer"),f=ae();let t=class extends S(j($(x(k(T(F(R(P(D(O)))))))))){constructor(...r){super(...r),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(r,s){return typeof r=="string"?{url:r,...s}:r}load(r){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=N(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},r).catch(E).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){u(r,this.fieldsIndex),this._set("renderer",r)}readRenderer(r,s,o){const a=(s=s.layerDefinition||s).drawingInfo&&s.drawingInfo.renderer||void 0;if(a){const l=L(a,s,o)||void 0;return l||ne.error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),l}if(s.defaultSymbol)return s.types&&s.types.length?new _({defaultSymbol:d(s.defaultSymbol,s,o),field:s.typeIdField,uniqueValueInfos:s.types.map(l=>({id:l.id,symbol:d(l.symbol,l,o)}))}):new J({symbol:d(s.defaultSymbol,s,o)})}createPopupTemplate(r){return U(this,r)}createQuery(){const r=new A;return r.returnGeometry=!0,r.outFields=["*"],r.where=this.definitionExpression||"1=1",r}getFieldDomain(r,s){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===r&&(o=a.domain),!!o)),o}getField(r){return this.fieldsIndex.get(r)}async _fetchService(r){var s;if(this.webSocketUrl){var o;if((o=this.timeInfo)==null||!o.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:a}=await C(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:r});this.sourceJSON=a}return this.sourceJSON={...(s=this.sourceJSON)!=null?s:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),G(this.timeInfo,this.fieldsIndex),W(this,{origin:"service"})}};e([i({type:String})],t.prototype,"copyright",void 0),e([i({readOnly:!0})],t.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),e([i({type:String})],t.prototype,"displayField",void 0),e([i({type:M})],t.prototype,"elevationInfo",void 0),e([i(V)],t.prototype,"featureReduction",void 0),e([i(f.fields)],t.prototype,"fields",void 0),e([i(f.fieldsIndex)],t.prototype,"fieldsIndex",void 0),e([i({type:q})],t.prototype,"geometryDefinition",void 0),e([i({type:c.apiValues,json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),e([i(z)],t.prototype,"labelsVisible",void 0),e([i({type:[K],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:X},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),e([i(Y)],t.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i({type:h})],t.prototype,"maxReconnectionAttempts",void 0),e([i({type:h})],t.prototype,"maxReconnectionInterval",void 0),e([i(Z)],t.prototype,"maxScale",void 0),e([i(B)],t.prototype,"minScale",void 0),e([i({type:String})],t.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),e([i(Q)],t.prototype,"popupEnabled",void 0),e([i({type:H,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),e([i({type:b})],t.prototype,"purgeOptions",void 0),e([i({types:ee,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:te,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),e([m("service","renderer",["drawingInfo.renderer","defaultSymbol"]),m("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],t.prototype,"readRenderer",null),e([i(ie)],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i({type:v,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],t.prototype,"type",void 0),e([i(re)],t.prototype,"url",void 0),e([i({type:Number})],t.prototype,"updateInterval",void 0),e([i({type:String})],t.prototype,"webSocketUrl",void 0),t=e([g("esri.layers.StreamLayer")],t);const d=se({types:oe}),pe=t;export{pe as default};
