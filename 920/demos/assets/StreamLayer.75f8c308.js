import{e,d as i,i as v,N as w,aj as I,k0 as S,jp as j,k1 as $,jq as x,jr as k,cZ as T,c_ as R,c$ as F,d0 as P,j$ as N,d4 as O,p as g,s as p,r as D,bG as _,k2 as u,k_ as E,k$ as L,cp as U,jv as A,hh as C,C as G,k3 as J,t as q,jw as z,k4 as V,M,io as c,k5 as W,k6 as Q,k7 as Z,jU as B,i0 as h,l0 as X,l1 as Y,jy as H,iQ as K,k9 as ee,jx as te,cN as m,ka as ie,d3 as re,l2 as se,l3 as oe,jz as ae}from"./main.18c7b5d3.js";var y;let n=y=class extends w{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],n.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"maxObservations",void 0),n=y=e([v("esri.layers.support.PurgeOptions")],n);const b=n,ne=I.getLogger("esri.layers.StreamLayer"),f=ae();let t=class extends S(j($(x(k(T(R(F(P(N(O)))))))))){constructor(...r){super(...r),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=g.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(r,s){return typeof r=="string"?{url:r,...s}:r}load(r){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=D(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},r).catch(_).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){u(r,this.fieldsIndex),this._set("renderer",r)}readRenderer(r,s,o){const a=(s=s.layerDefinition||s).drawingInfo&&s.drawingInfo.renderer||void 0;if(a){const l=E(a,s,o)||void 0;return l||ne.error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),l}if(s.defaultSymbol)return s.types&&s.types.length?new L({defaultSymbol:d(s.defaultSymbol,s,o),field:s.typeIdField,uniqueValueInfos:s.types.map(l=>({id:l.id,symbol:d(l.symbol,l,o)}))}):new U({symbol:d(s.defaultSymbol,s,o)})}createPopupTemplate(r){return A(this,r)}createQuery(){const r=new C;return r.returnGeometry=!0,r.outFields=["*"],r.where=this.definitionExpression||"1=1",r}getFieldDomain(r,s){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===r&&(o=a.domain),!!o)),o}getField(r){return this.fieldsIndex.get(r)}async _fetchService(r){var s;if(this.webSocketUrl){var o;if((o=this.timeInfo)==null||!o.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:a}=await G(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:r});this.sourceJSON=a}return this.sourceJSON={...(s=this.sourceJSON)!=null?s:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),J(this.timeInfo,this.fieldsIndex),q(this,{origin:"service"})}};e([i({type:String})],t.prototype,"copyright",void 0),e([i({readOnly:!0})],t.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),e([i({type:String})],t.prototype,"displayField",void 0),e([i({type:z})],t.prototype,"elevationInfo",void 0),e([i(V)],t.prototype,"featureReduction",void 0),e([i(f.fields)],t.prototype,"fields",void 0),e([i(f.fieldsIndex)],t.prototype,"fieldsIndex",void 0),e([i({type:M})],t.prototype,"geometryDefinition",void 0),e([i({type:c.apiValues,json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),e([i(W)],t.prototype,"labelsVisible",void 0),e([i({type:[Q],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:Z},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),e([i(B)],t.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i({type:h})],t.prototype,"maxReconnectionAttempts",void 0),e([i({type:h})],t.prototype,"maxReconnectionInterval",void 0),e([i(X)],t.prototype,"maxScale",void 0),e([i(Y)],t.prototype,"minScale",void 0),e([i({type:String})],t.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),e([i(H)],t.prototype,"popupEnabled",void 0),e([i({type:K,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),e([i({type:b})],t.prototype,"purgeOptions",void 0),e([i({types:ee,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:te,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),e([m("service","renderer",["drawingInfo.renderer","defaultSymbol"]),m("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],t.prototype,"readRenderer",null),e([i(ie)],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i({type:g,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],t.prototype,"type",void 0),e([i(re)],t.prototype,"url",void 0),e([i({type:Number})],t.prototype,"updateInterval",void 0),e([i({type:String})],t.prototype,"webSocketUrl",void 0),t=e([v("esri.layers.StreamLayer")],t);const d=se({types:oe}),pe=t;export{pe as default};
