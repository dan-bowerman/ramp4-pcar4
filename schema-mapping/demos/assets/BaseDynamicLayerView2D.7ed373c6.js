import{aj as o,ar as p,e as r,d as a,i as n}from"./main.8e56079f.js";import{t as m}from"./BitmapContainer.8e38e6f3.js";import{l as h,u as d}from"./LayerView.2f54581d.js";import{S as c}from"./ExportStrategy.e9673ef4.js";import{i as y}from"./RefreshableLayerView.db05bfa9.js";import"./WGLContainer.f0e4b568.js";import"./definitions.21e97413.js";import"./VertexArrayObject.2696d18f.js";import"./Texture.38355af9.js";import"./Utils.4df25d17.js";import"./ShaderCompiler.69ddf6b0.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.93c5cf7f.js";import"./Container.576a39a8.js";import"./earcut.f20dd8d8.js";import"./Bitmap.87de3bb9.js";const g=o.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends y(h(d)){update(i){this.strategy.update(i).catch(e=>{p(e)||g.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([n("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const $=t;export{$ as default};
