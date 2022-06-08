import{e,i as p,J as q,d as t,n as O,dy as S,M as U,ch as x,S as N,it as _,aA as u,aM as I,bz as L,iu as M,L as j,aN as P,ag as V,cb as R}from"./main.d8c8794a.js";import{s as E}from"./Container.3578f784.js";let b=class extends q{};b=e([p("esri.views.layers.support.ClipArea")],b);const y=b;var f;let o=f=class extends y{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};e([t({type:[Number,String],json:{write:!0}})],o.prototype,"left",void 0),e([t({type:[Number,String],json:{write:!0}})],o.prototype,"right",void 0),e([t({type:[Number,String],json:{write:!0}})],o.prototype,"top",void 0),e([t({type:[Number,String],json:{write:!0}})],o.prototype,"bottom",void 0),e([t({readOnly:!0})],o.prototype,"version",null),o=f=e([p("esri.views.layers.support.ClipRect")],o);const z=o;var $;const A={base:S,key:"type",typeMap:{extent:U,polygon:x}};let d=$=class extends y{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new $({geometry:this.geometry.clone()})}};e([t({types:A,json:{read:O,write:!0}})],d.prototype,"geometry",void 0),e([t({readOnly:!0})],d.prototype,"version",null),d=$=e([p("esri.views.layers.support.Geometry")],d);const C=d;let h=class extends y{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};e([t({type:[[[Number]]],json:{write:!0}})],h.prototype,"path",void 0),e([t({readOnly:!0})],h.prototype,"version",null),h=e([p("esri.views.layers.support.Path")],h);const H=h,m=N.ofType({key:"type",base:y,typeMap:{rect:z,path:H,geometry:C}}),F=s=>{let i=class extends s{constructor(){super(...arguments),this.clips=new m,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var n;this.container||(this.container=new E),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([u(this,"suspended",r=>{this.container&&(this.container.visible=!r),this.view&&!r&&this.updateRequested&&this.view.requestUpdate()},!0),u(this,["layer.opacity","container"],()=>{var r,l;this.container&&(this.container.opacity=(r=(l=this.layer)==null?void 0:l.opacity)!=null?r:1)},!0),u(this,["layer.blendMode"],r=>{this.container&&(this.container.blendMode=r)},!0),u(this,["layer.effect"],r=>{this.container&&(this.container.effect=r)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),(n=this.view)!=null&&n.whenLayerView?this.view.whenLayerView(this.layer).then(r=>{r!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}isVisibleAtScale(n){let r=!0;const l=this.layer,c=l.minScale,v=l.maxScale;if(c!=null&&v!=null){let g=!c,w=!v;!g&&n<=c&&(g=!0),!w&&n>=v&&(w=!0),r=g&&w}return r}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(n){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",n),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(n))):this.updateRequested=!1}hitTest(n,r){return Promise.resolve(null)}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return e([t({type:m,set(n){const r=_(n,this._get("clips"),m);this._set("clips",r)}})],i.prototype,"clips",void 0),e([t()],i.prototype,"moving",void 0),e([t()],i.prototype,"attached",void 0),e([t()],i.prototype,"container",void 0),e([t()],i.prototype,"suspended",void 0),e([t({readOnly:!0})],i.prototype,"updateParameters",void 0),e([t()],i.prototype,"updateRequested",void 0),e([t()],i.prototype,"updating",null),e([t()],i.prototype,"view",void 0),i=e([p("esri.views.2d.layers.LayerView2D")],i),i};let a=class extends I(L(M(j.EventedMixin(P)))){constructor(s){super(s),this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if(s.name!=="layerview:create-error"){const i=this.layer&&this.layer.id||"no id",n=this.layer&&this.layer.title||"no title";throw V.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${n}', id: '${i}')`,s),s}})}get fullOpacity(){return R(this.get("layer.opacity"),1)*R(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&this.layer.legendEnabled===!0}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var s;return((s=this.layer)==null?void 0:s.visible)===!0}set visible(s){s!==void 0?this._override("visible",s):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const s=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},i=this;return i.view&&i.view.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};e([t()],a.prototype,"fullOpacity",null),e([t()],a.prototype,"layer",void 0),e([t()],a.prototype,"parent",void 0),e([t({readOnly:!0})],a.prototype,"suspended",null),e([t({readOnly:!0})],a.prototype,"suspendInfo",null),e([t({readOnly:!0})],a.prototype,"legendEnabled",null),e([t({type:Boolean,readOnly:!0})],a.prototype,"updating",null),e([t({readOnly:!0})],a.prototype,"updatingProgress",null),e([t()],a.prototype,"visible",null),a=e([p("esri.views.layers.LayerView")],a);const B=a;export{F as l,B as u};
