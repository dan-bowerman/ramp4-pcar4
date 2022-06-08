import{ag as o,ao as p,e as r,d as a,i as n}from"./main.d8c8794a.js";import{t as m}from"./BitmapContainer.ba670fa7.js";import{l as h,u as d}from"./LayerView.5bce5389.js";import{S as c}from"./ExportStrategy.ea11a9c5.js";import{i as g}from"./RefreshableLayerView.027112b1.js";import"./WGLContainer.862c088f.js";import"./definitions.21e97413.js";import"./VertexArrayObject.335494a1.js";import"./Texture.0d71ef2c.js";import"./Utils.0b0f1447.js";import"./ShaderCompiler.44d634d3.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.f44df254.js";import"./Container.3578f784.js";import"./earcut.f20dd8d8.js";import"./Bitmap.6abc0ae2.js";const y=o.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends g(h(d)){update(i){this.strategy.update(i).catch(e=>{p(e)||y.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([n("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const $=t;export{$ as default};
