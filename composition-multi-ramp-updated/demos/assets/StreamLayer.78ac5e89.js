import{e,d as i,i as g,J as w,ag as I,jZ as S,jm as j,j_ as $,jn as x,jo as k,cW as T,cX as R,cY as F,cZ as P,jY as O,d1 as D,k as v,s as p,r as N,bD as _,j$ as u,kX as E,kY as L,cm as J,js as U,he as A,C,k0 as G,t as Z,jt as V,k1 as W,M as Y,ik as c,k2 as q,k3 as z,k4 as M,jR as X,hZ as h,kZ as B,k_ as K,jv as Q,iN as H,k6 as ee,ju as te,cK as m,k7 as ie,d0 as re,k$ as se,l0 as oe,jw as ne}from"./multi-ramp.341296fa.js";var y;let a=y=class extends w{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],a.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=y=e([g("esri.layers.support.PurgeOptions")],a);const b=a,ae=I.getLogger("esri.layers.StreamLayer"),f=ne();let t=class extends S(j($(x(k(T(R(F(P(O(D)))))))))){constructor(...r){super(...r),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(r,s){return typeof r=="string"?{url:r,...s}:r}load(r){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=N(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},r).catch(_).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){u(r,this.fieldsIndex),this._set("renderer",r)}readRenderer(r,s,o){const n=(s=s.layerDefinition||s).drawingInfo&&s.drawingInfo.renderer||void 0;if(n){const l=E(n,s,o)||void 0;return l||ae.error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),l}if(s.defaultSymbol)return s.types&&s.types.length?new L({defaultSymbol:d(s.defaultSymbol,s,o),field:s.typeIdField,uniqueValueInfos:s.types.map(l=>({id:l.id,symbol:d(l.symbol,l,o)}))}):new J({symbol:d(s.defaultSymbol,s,o)})}createPopupTemplate(r){return U(this,r)}createQuery(){const r=new A;return r.returnGeometry=!0,r.outFields=["*"],r.where=this.definitionExpression||"1=1",r}getFieldDomain(r,s){if(!this.fields)return null;let o=null;return this.fields.some(n=>(n.name===r&&(o=n.domain),!!o)),o}getField(r){return this.fieldsIndex.get(r)}async _fetchService(r){var s;if(this.webSocketUrl){var o;if((o=this.timeInfo)==null||!o.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:n}=await C(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:r});this.sourceJSON=n}return this.sourceJSON={...(s=this.sourceJSON)!=null?s:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),G(this.timeInfo,this.fieldsIndex),Z(this,{origin:"service"})}};e([i({type:String})],t.prototype,"copyright",void 0),e([i({readOnly:!0})],t.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),e([i({type:String})],t.prototype,"displayField",void 0),e([i({type:V})],t.prototype,"elevationInfo",void 0),e([i(W)],t.prototype,"featureReduction",void 0),e([i(f.fields)],t.prototype,"fields",void 0),e([i(f.fieldsIndex)],t.prototype,"fieldsIndex",void 0),e([i({type:Y})],t.prototype,"geometryDefinition",void 0),e([i({type:c.apiValues,json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),e([i(q)],t.prototype,"labelsVisible",void 0),e([i({type:[z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:M},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),e([i(X)],t.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i({type:h})],t.prototype,"maxReconnectionAttempts",void 0),e([i({type:h})],t.prototype,"maxReconnectionInterval",void 0),e([i(B)],t.prototype,"maxScale",void 0),e([i(K)],t.prototype,"minScale",void 0),e([i({type:String})],t.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),e([i(Q)],t.prototype,"popupEnabled",void 0),e([i({type:H,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),e([i({type:b})],t.prototype,"purgeOptions",void 0),e([i({types:ee,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:te,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),e([m("service","renderer",["drawingInfo.renderer","defaultSymbol"]),m("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],t.prototype,"readRenderer",null),e([i(ie)],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i({type:v,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],t.prototype,"type",void 0),e([i(re)],t.prototype,"url",void 0),e([i({type:Number})],t.prototype,"updateInterval",void 0),e([i({type:String})],t.prototype,"webSocketUrl",void 0),t=e([g("esri.layers.StreamLayer")],t);const d=se({types:oe}),pe=t;export{pe as default};
