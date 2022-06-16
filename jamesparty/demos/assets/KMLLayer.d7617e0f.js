import{P as E,kM as _,m as k,kN as x,kO as j,r as y,M as d,d5 as c,S as h,e as r,d as l,jj as L,kP as $,cN as p,i as v,jo as O,jq as F,jp as M,c_ as N,c$ as P,d0 as I,d4 as C,jE as K,p as f,dn as R,bG as T,cl as H,d3 as J}from"./main.d830b49c.js";import{j as z,S,g,d as m}from"./kmlUtils.2b56ff03.js";var u;let o=u=class extends E.EventedMixin(_(k)){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){x(this,"networkLink").then(()=>j(this,"visible")).then(()=>this.load())}load(e){if(!this.networkLink||this.networkLink.viewFormat)return;const s=y(e)?e.signal:null,t=this._fetchService(this._get("networkLink").href,s).then(a=>{const n=z(a.sublayers);this.fullExtent=d.fromJSON(n),this.sourceJSON=a;const b=c(h.ofType(u),S(u,a));this.sublayers?this.sublayers.addMany(b):this.sublayers=b,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(t),Promise.resolve(this)}set sublayers(e){const s=this._get("sublayers");s&&(s.forEach(t=>{t.parent=null,t.layer=null}),this._sublayersHandles.forEach(t=>t.remove()),this._sublayersHandles=null),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null})]),this._set("sublayers",e)}castSublayers(e){return c(h.ofType(u),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,s){return!!s.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(s=>s.layer=e)}_fetchService(e,s){return g(e,this.layer.outSpatialReference,this.layer.refreshInterval,s).then(t=>m(t.data))}};r([l()],o.prototype,"description",void 0),r([l()],o.prototype,"id",void 0),r([l({readOnly:!0,value:null})],o.prototype,"networkLink",void 0),r([l({json:{write:{allowNull:!0}}})],o.prototype,"parent",void 0),r([l({value:null,json:{write:{allowNull:!0}}})],o.prototype,"sublayers",null),r([L("sublayers")],o.prototype,"castSublayers",null),r([l({value:null,json:{read:{source:"name",reader:e=>$(e)}}})],o.prototype,"title",void 0),r([l({value:!0})],o.prototype,"visible",null),r([p("visible",["visibility"])],o.prototype,"readVisible",null),r([l()],o.prototype,"sourceJSON",void 0),r([l({value:null})],o.prototype,"layer",null),r([l({type:d})],o.prototype,"fullExtent",void 0),o=u=r([v("esri.layers.support.KMLSublayer")],o);const w=o,A=["kml","xml"];let i=class extends O(F(M(N(P(I(C)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new K({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.sublayers}),this.outSpatialReference=f.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",(e,s)=>{s&&s.forEach(t=>{t.parent=null,t.layer=null}),e&&e.forEach(t=>{t.parent=this,t.layer=this})},!0),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}readSublayersFromItemOrWebMap(e,s){this._visibleFolders=s.visibleFolders}readSublayers(e,s,t){return S(w,s,t,this._visibleFolders)}writeSublayers(e,s){const t=[],a=e.toArray();for(;a.length;){const n=a[0];n.networkLink||(n.visible&&t.push(n.id),n.sublayers&&a.push(...n.sublayers.toArray())),a.shift()}s.visibleFolders=t}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?R(this.url,A)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,s=[],t=a=>{a.visible&&(s.push(a),a.sublayers&&a.sublayers.forEach(t))};return e&&e.forEach(t),s}get fullExtent(){return this._recomputeFullExtent()}load(e){const s=y(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(T).then(()=>this._fetchService(s))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const s=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:g(this.url,this.outSpatialReference,this.refreshInterval,e)),t=m(s.data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;y(this.extent)&&(e=this.extent.clone());const s=t=>{if(t.sublayers)for(const a of t.sublayers.items)s(a),a.visible&&a.fullExtent&&(y(e)?e.union(a.fullExtent):e=a.fullExtent.clone())};return s(this),e}};r([l({readOnly:!0})],i.prototype,"allSublayers",void 0),r([l({type:f})],i.prototype,"outSpatialReference",void 0),r([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([l({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"legendEnabled",void 0),r([l({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),r([l({type:["KML"]})],i.prototype,"operationalLayerType",void 0),r([l({})],i.prototype,"resourceInfo",void 0),r([l({type:h.ofType(w),json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),r([p(["web-map","portal-item"],"sublayers",["visibleFolders"])],i.prototype,"readSublayersFromItemOrWebMap",null),r([p("service","sublayers",["sublayers"])],i.prototype,"readSublayers",null),r([H("sublayers")],i.prototype,"writeSublayers",null),r([l({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),r([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],i.prototype,"title",null),r([l(J)],i.prototype,"url",void 0),r([l({readOnly:!0})],i.prototype,"visibleSublayers",null),r([l({type:d})],i.prototype,"extent",void 0),r([l()],i.prototype,"fullExtent",null),i=r([v("esri.layers.KMLLayer")],i);const V=i;export{V as default};
