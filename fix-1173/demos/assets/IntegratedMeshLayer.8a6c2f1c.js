import{dj as N,kE as K,r as m,jN as F,jg as R,f as I,kF as V,kG as E,kH as G,kI as M,kJ as C,jC as q,dh as B,di as b,_ as H,kK as Q,e as p,d,ck as U,cl as Y,i as T,N as Z,ie as W,jz as X,kL as ee,l as te,kM as ie,S as re,O as oe,C as se,cZ as ne,c_ as ae,c$ as pe,jp as le,d0 as ce,jD as de,d4 as ye,b8 as ue,ix as me,ac as he,bG as fe,s as w,cN as ge,jH as ve}from"./main.f21fb970.js";import{i as we,N as Se}from"./SceneService.6791cc66.js";import{s as $e,l as Oe,u as _e,m as xe}from"./I3SLayerDefinitions.6bf24280.js";import"./resourceUtils.d4cf0bc3.js";function $(e){return j[Ie(e)]||Te}function Ie(e){return e instanceof Blob?e.type:be(e.url)}function be(e){const t=N(e);return O[t]||L}const j={},L="text/plain",Te=j[L],O={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in O)j[O[e]]=e;function _(e){const t=m(e)&&e.origins?e.origins:[void 0];return(i,r)=>{const s=je(e,i,r);for(const a of t){const n=K(i,a,r);for(const o in s)n[o]=s[o]}}}function je(e,t,i){if(m(e)&&e.type==="resource")return Re(e,t,i);switch(m(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:r,write:s}=Q;return{read:r,write:s}}}}function Re(e,t,i){const r=C(t,i);return{type:String,read:(s,a,n)=>{const o=F(s,a,n);return r.type===String?o:typeof r.type=="function"?new r.type({url:o}):void 0},write:{writer(s,a,n,o){if(!o||!o.resources)return typeof s=="string"?void(a[n]=R(s,o)):void(a[n]=s.write({},o));const y=Le(s),c=y?R(y,{...o,verifyItemRelativeUrls:o&&o.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,h=r.type!==String&&(!we(this)||o&&o.origin&&this.originIdOf(i)>V(o.origin));o&&o.portalItem&&m(c)&&!E(c)?h?Ne(this,i,s,c,a,n,o,e):Me(c,a,n,o):o&&o.portalItem&&(I(c)||m(G(c))||M(c)||h)?P(this,i,s,c,a,n,o,e):a[n]=c}}}}function P(e,t,i,r,s,a,n,o){const y=q(),c=J(i,r,n),h=B(b(o,"prefix"),y),D=`${h}.${$(c)}`,g=n.portalItem.resourceFromPath(D);M(r)&&n.resources.pendingOperations.push(Ue(r).then(A=>{g.path=`${h}.${$(A)}`,s[a]=g.itemRelativeUrl}).catch(()=>{})),k(e,t,g,c,n.resources.toAdd),s[a]=g.itemRelativeUrl}function Ne(e,t,i,r,s,a,n,o){const y=n.portalItem.resourceFromPath(r),c=J(i,r,n);$(c)===N(y.path)?(k(e,t,y,c,n.resources.toUpdate),s[a]=r):P(e,t,i,r,s,a,n,o)}function Me(e,t,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[i]=e}function k(e,t,i,r,s){s.push({resource:i,content:r,finish:a=>{Pe(e,t,a)}})}function J(e,t,i){return typeof e=="string"?{url:t}:new Blob([JSON.stringify(e.toJSON(i))],{type:"application/json"})}async function Ue(e){const t=(await H(()=>import("./main.f21fb970.js").then(function(r){return r.lY}),["assets/main.f21fb970.js","assets/main.6f812d7a.css"])).default,{data:i}=await t(e,{responseType:"blob"});return i}function Le(e){return I(e)?null:typeof e=="string"?e:e.url}function Pe(e,t,i){typeof e[t]=="string"?e[t]=i.url:e[t].url=i.url}var x;let u=x=class extends Z{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!W(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new X("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const s=new U;ee(e,s,r.layer.spatialReference),t[i]=s.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new x({geometry:te(this.geometry),type:this.type})}};p([d({type:U}),_()],u.prototype,"geometry",void 0),p([Y(["web-scene","portal-item"],"geometry")],u.prototype,"writeGeometry",null),p([d({type:["clip","mask","replace"],nonNullable:!0}),_()],u.prototype,"type",void 0),u=x=p([T("esri.layers.support.SceneModification")],u);const S=u;var f;let v=f=class extends ie(re.ofType(S)){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}clone(){return new f({url:this.url,items:this.items.map(e=>e.clone())})}_readModifications(e,t){for(const i of e)this.add(S.fromJSON(i,t))}static fromJSON(e,t){const i=new f;return i._readModifications(e,t),i}static async fromUrl(e,t,i){const r={url:oe(e),origin:"service"},s=await se(e,{responseType:"json",signal:b(i,"signal")}),a=t.toJSON(),n=[];for(const o of s.data)n.push(S.fromJSON({...o,geometry:{...o.geometry,spatialReference:a}},r));return new f({url:e,items:n})}};p([d({type:String})],v.prototype,"url",void 0),v=f=p([T("esri.layers.support.SceneModifications")],v);const z=v;let l=class extends Se(ne(ae(pe(le(ce(de(ye))))))){constructor(...e){super(...e),this.handles=new ue,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(me(this,"modifications","after-changes",()=>this.modifications=this.modifications,null,null,!0))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:he(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=b(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(i){fe(i)}if(await this._fetchService(t),m(this._modificationsSource)){const i=await z.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",i,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!I(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new w("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new w("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new w("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};p([d({type:String,readOnly:!0})],l.prototype,"geometryType",void 0),p([d({type:["show","hide"]})],l.prototype,"listMode",void 0),p([d({type:["IntegratedMeshLayer"]})],l.prototype,"operationalLayerType",void 0),p([d({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),p([d({type:$e,readOnly:!0})],l.prototype,"nodePages",void 0),p([d({type:[Oe],readOnly:!0})],l.prototype,"materialDefinitions",void 0),p([d({type:[_e],readOnly:!0})],l.prototype,"textureSetDefinitions",void 0),p([d({type:[xe],readOnly:!0})],l.prototype,"geometryDefinitions",void 0),p([d({readOnly:!0})],l.prototype,"serviceUpdateTimeStamp",void 0),p([d({type:z}),_({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],l.prototype,"modifications",void 0),p([ge(["web-scene","portal-item"],"modifications")],l.prototype,"readModifications",null),p([d(ve)],l.prototype,"elevationInfo",void 0),p([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),l=p([T("esri.layers.IntegratedMeshLayer")],l);const Ae=l;export{Ae as default};
