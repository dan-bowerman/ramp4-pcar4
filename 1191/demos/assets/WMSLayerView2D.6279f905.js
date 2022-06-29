import{e as s,d as h,iD as S,i as I,j5 as C,s as c,aj as F,ar as V,M as $}from"./main.56314a08.js";import{t as E}from"./BitmapContainer.91a8449c.js";import{l as R,u as W}from"./LayerView.744d8aef.js";import{S as _}from"./ExportStrategy.5c2b56fc.js";import{i as q}from"./RefreshableLayerView.881fc01c.js";import"./WGLContainer.e47295d9.js";import"./definitions.21e97413.js";import"./VertexArrayObject.22b83405.js";import"./Texture.54772fdb.js";import"./Utils.5c62e419.js";import"./ShaderCompiler.5fc11a3f.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.8c1d2494.js";import"./Container.03bf8517.js";import"./earcut.f20dd8d8.js";import"./Bitmap.46e1407f.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new C({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new c("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:n}=a;if(!n)return Promise.reject(new c("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));const l=this.createFetchPopupFeaturesQuery(r);if(!l)return Promise.resolve([]);const{extent:i,width:o,height:p,x:d,y}=l;if(!(i&&o&&p))throw new c("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:o,height:p});const u=a.fetchFeatureInfo(i,o,p,d,y);return Promise.resolve(u?[u]:[])}};return s([h()],e.prototype,"exportImageParameters",void 0),s([h({readOnly:!0})],e.prototype,"exportImageVersion",null),s([h()],e.prototype,"layer",void 0),s([h(S)],e.prototype,"timeExtent",void 0),e=s([I("esri.layers.mixins.WMSLayerView")],e),e},j=F.getLogger("esri.views.2d.layers.WMSLayerView2D");let m=class extends U(q(R(W))){initialize(){const{layer:t,view:e}=this;t.supportsSpatialReference(e.spatialReference)||this.addResolvingPromise(Promise.reject(new c("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:t})))}update(t){this.strategy.update(t).catch(e=>{V(e)||j.error(e)})}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:r}=t;this._bitmapContainer=new E,this.container.addChild(this._bitmapContainer),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e}=this,r=this._bitmapContainer,{x:a,y:n}=t,{spatialReference:l}=e;let i=null,o=0,p=0;if(r.children.some(M=>{const{width:f,height:w,resolution:v,x:g,y:x}=M,P=g+v*f,b=x-v*w;return a>=g&&a<=P&&n<=x&&n>=b&&(i=new $({xmin:g,ymin:b,xmax:P,ymax:x,spatialReference:l}),o=f,p=w,!0)}),!i)return null;const d=i.width/o,y=Math.round((a-i.xmin)/d),u=Math.round((i.ymax-n)/d);return{extent:i,width:o,height:p,x:y,y:u}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,a){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,...a})}};s([h()],m.prototype,"strategy",void 0),s([h()],m.prototype,"updating",void 0),m=s([I("esri.views.2d.layers.WMSLayerView2D")],m);const ee=m;export{ee as default};
