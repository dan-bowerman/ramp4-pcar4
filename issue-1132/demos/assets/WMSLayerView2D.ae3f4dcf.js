import{e as s,d as h,iC as C,i as I,j4 as S,s as c,ai as F,aq as V,M as $}from"./main.a76a9de0.js";import{t as E}from"./BitmapContainer.0ba414e3.js";import{l as R,u as q}from"./LayerView.6d1f5cfa.js";import{S as W}from"./ExportStrategy.39759f1f.js";import{i as _}from"./RefreshableLayerView.f720398f.js";import"./WGLContainer.d5b6148b.js";import"./definitions.21e97413.js";import"./VertexArrayObject.030efe1a.js";import"./Texture.67a85fb0.js";import"./Utils.87d2921a.js";import"./ShaderCompiler.f45836b4.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.50ead739.js";import"./Container.d6bb31fd.js";import"./earcut.f20dd8d8.js";import"./Bitmap.1cfa85d3.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new S({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new c("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:n}=a;if(!n)return Promise.reject(new c("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));const l=this.createFetchPopupFeaturesQuery(r);if(!l)return Promise.resolve([]);const{extent:i,width:o,height:p,x:d,y}=l;if(!(i&&o&&p))throw new c("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:o,height:p});const u=a.fetchFeatureInfo(i,o,p,d,y);return Promise.resolve(u?[u]:[])}};return s([h()],e.prototype,"exportImageParameters",void 0),s([h({readOnly:!0})],e.prototype,"exportImageVersion",null),s([h()],e.prototype,"layer",void 0),s([h(C)],e.prototype,"timeExtent",void 0),e=s([I("esri.layers.mixins.WMSLayerView")],e),e},L=F.getLogger("esri.views.2d.layers.WMSLayerView2D");let m=class extends U(_(R(q))){initialize(){const{layer:t,view:e}=this;t.supportsSpatialReference(e.spatialReference)||this.addResolvingPromise(Promise.reject(new c("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:t})))}update(t){this.strategy.update(t).catch(e=>{V(e)||L.error(e)})}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:r}=t;this._bitmapContainer=new E,this.container.addChild(this._bitmapContainer),this.strategy=new W({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e}=this,r=this._bitmapContainer,{x:a,y:n}=t,{spatialReference:l}=e;let i=null,o=0,p=0;if(r.children.some(M=>{const{width:f,height:w,resolution:v,x:g,y:x}=M,P=g+v*f,b=x-v*w;return a>=g&&a<=P&&n<=x&&n>=b&&(i=new $({xmin:g,ymin:b,xmax:P,ymax:x,spatialReference:l}),o=f,p=w,!0)}),!i)return null;const d=i.width/o,y=Math.round((a-i.xmin)/d),u=Math.round((i.ymax-n)/d);return{extent:i,width:o,height:p,x:y,y:u}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,a){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,...a})}};s([h()],m.prototype,"strategy",void 0),s([h()],m.prototype,"updating",void 0),m=s([I("esri.views.2d.layers.WMSLayerView2D")],m);const ee=m;export{ee as default};
