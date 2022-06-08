import{ai as o,aq as p,e as r,d as a,i as n}from"./main.938cf89d.js";import{t as m}from"./BitmapContainer.7de49572.js";import{l as h,u as d}from"./LayerView.2b9bf7f3.js";import{S as c}from"./ExportStrategy.a54d6c2d.js";import{i as y}from"./RefreshableLayerView.9796a58a.js";import"./WGLContainer.ccd3036e.js";import"./definitions.21e97413.js";import"./VertexArrayObject.798e72c2.js";import"./Texture.66a4a4f6.js";import"./Utils.13eadeba.js";import"./ShaderCompiler.fd685dc8.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.97d36441.js";import"./Container.48ff2d64.js";import"./earcut.f20dd8d8.js";import"./Bitmap.f66060ce.js";const g=o.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends y(h(d)){update(i){this.strategy.update(i).catch(e=>{p(e)||g.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([n("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const $=t;export{$ as default};
