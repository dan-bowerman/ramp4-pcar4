import{di as N,kE as A,r as m,jN as F,jg as _,f as I,kF as V,kG as C,kH as G,kI as M,kJ as q,jC as B,dg as E,dh as j,kK as H,e as p,d as y,cj as U,ck as Y,i as T,N as Q,ie as Z,jz as W,kL as X,l as ee,kM as te,S as ie,O as re,C as oe,cY as se,cZ as ne,c_ as ae,jp as pe,c$ as le,jD as ce,d3 as ye,b7 as de,ix as ue,ab as me,bF as he,s as w,cM as fe,jH as ge}from"./main.c52d903d.js";import{i as ve,N as we}from"./SceneService.73996572.js";import{s as Se,l as $e,u as Oe,m as be}from"./I3SLayerDefinitions.ba4260d9.js";import"./resourceUtils.f5843663.js";function $(e){return R[xe(e)]||je}function xe(e){return e instanceof Blob?e.type:Ie(e.url)}function Ie(e){const t=N(e);return O[t]||L}const R={},L="text/plain",je=R[L],O={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in O)R[O[e]]=e;function b(e){const t=m(e)&&e.origins?e.origins:[void 0];return(i,r)=>{const s=Te(e,i,r);for(const a of t){const n=A(i,a,r);for(const o in s)n[o]=s[o]}}}function Te(e,t,i){if(m(e)&&e.type==="resource")return Re(e,t,i);switch(m(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:r,write:s}=H;return{read:r,write:s}}}}function Re(e,t,i){const r=q(t,i);return{type:String,read:(s,a,n)=>{const o=F(s,a,n);return r.type===String?o:typeof r.type=="function"?new r.type({url:o}):void 0},write:{writer(s,a,n,o){if(!o||!o.resources)return typeof s=="string"?void(a[n]=_(s,o)):void(a[n]=s.write({},o));const d=Ue(s),c=d?_(d,{...o,verifyItemRelativeUrls:o&&o.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,h=r.type!==String&&(!ve(this)||o&&o.origin&&this.originIdOf(i)>V(o.origin));o&&o.portalItem&&m(c)&&!C(c)?h?_e(this,i,s,c,a,n,o,e):Ne(c,a,n,o):o&&o.portalItem&&(I(c)||m(G(c))||M(c)||h)?k(this,i,s,c,a,n,o,e):a[n]=c}}}}function k(e,t,i,r,s,a,n,o){const d=B(),c=P(i,r,n),h=E(j(o,"prefix"),d),D=`${h}.${$(c)}`,g=n.portalItem.resourceFromPath(D);M(r)&&n.resources.pendingOperations.push(Me(r).then(K=>{g.path=`${h}.${$(K)}`,s[a]=g.itemRelativeUrl}).catch(()=>{})),J(e,t,g,c,n.resources.toAdd),s[a]=g.itemRelativeUrl}function _e(e,t,i,r,s,a,n,o){const d=n.portalItem.resourceFromPath(r),c=P(i,r,n);$(c)===N(d.path)?(J(e,t,d,c,n.resources.toUpdate),s[a]=r):k(e,t,i,r,s,a,n,o)}function Ne(e,t,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[i]=e}function J(e,t,i,r,s){s.push({resource:i,content:r,finish:a=>{Le(e,t,a)}})}function P(e,t,i){return typeof e=="string"?{url:t}:new Blob([JSON.stringify(e.toJSON(i))],{type:"application/json"})}async function Me(e){const t=(await import("./main.c52d903d.js").then(function(r){return r.lY})).default,{data:i}=await t(e,{responseType:"blob"});return i}function Ue(e){return I(e)?null:typeof e=="string"?e:e.url}function Le(e,t,i){typeof e[t]=="string"?e[t]=i.url:e[t].url=i.url}var x;let u=x=class extends Q{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Z(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new W("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const s=new U;X(e,s,r.layer.spatialReference),t[i]=s.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new x({geometry:ee(this.geometry),type:this.type})}};p([y({type:U}),b()],u.prototype,"geometry",void 0),p([Y(["web-scene","portal-item"],"geometry")],u.prototype,"writeGeometry",null),p([y({type:["clip","mask","replace"],nonNullable:!0}),b()],u.prototype,"type",void 0),u=x=p([T("esri.layers.support.SceneModification")],u);const S=u;var f;let v=f=class extends te(ie.ofType(S)){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}clone(){return new f({url:this.url,items:this.items.map(e=>e.clone())})}_readModifications(e,t){for(const i of e)this.add(S.fromJSON(i,t))}static fromJSON(e,t){const i=new f;return i._readModifications(e,t),i}static async fromUrl(e,t,i){const r={url:re(e),origin:"service"},s=await oe(e,{responseType:"json",signal:j(i,"signal")}),a=t.toJSON(),n=[];for(const o of s.data)n.push(S.fromJSON({...o,geometry:{...o.geometry,spatialReference:a}},r));return new f({url:e,items:n})}};p([y({type:String})],v.prototype,"url",void 0),v=f=p([T("esri.layers.support.SceneModifications")],v);const z=v;let l=class extends we(se(ne(ae(pe(le(ce(ye))))))){constructor(...e){super(...e),this.handles=new de,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(ue(this,"modifications","after-changes",()=>this.modifications=this.modifications,null,null,!0))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:me(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=j(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(i){he(i)}if(await this._fetchService(t),m(this._modificationsSource)){const i=await z.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",i,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!I(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new w("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new w("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new w("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};p([y({type:String,readOnly:!0})],l.prototype,"geometryType",void 0),p([y({type:["show","hide"]})],l.prototype,"listMode",void 0),p([y({type:["IntegratedMeshLayer"]})],l.prototype,"operationalLayerType",void 0),p([y({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),p([y({type:Se,readOnly:!0})],l.prototype,"nodePages",void 0),p([y({type:[$e],readOnly:!0})],l.prototype,"materialDefinitions",void 0),p([y({type:[Oe],readOnly:!0})],l.prototype,"textureSetDefinitions",void 0),p([y({type:[be],readOnly:!0})],l.prototype,"geometryDefinitions",void 0),p([y({readOnly:!0})],l.prototype,"serviceUpdateTimeStamp",void 0),p([y({type:z}),b({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],l.prototype,"modifications",void 0),p([fe(["web-scene","portal-item"],"modifications")],l.prototype,"readModifications",null),p([y(ge)],l.prototype,"elevationInfo",void 0),p([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),l=p([T("esri.layers.IntegratedMeshLayer")],l);const De=l;export{De as default};
