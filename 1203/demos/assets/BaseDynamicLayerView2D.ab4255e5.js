import{aj as o,ar as p,e as r,d as a,i as n}from"./main.1ef22a98.js";import{t as m}from"./BitmapContainer.8602f0ae.js";import{l as h,u as d}from"./LayerView.051dafe9.js";import{S as c}from"./ExportStrategy.8370f25f.js";import{i as y}from"./RefreshableLayerView.f7c9c3eb.js";import"./WGLContainer.27ca7d90.js";import"./definitions.21e97413.js";import"./VertexArrayObject.2edcc9e8.js";import"./Texture.1f24528f.js";import"./Utils.fe795a0b.js";import"./ShaderCompiler.744bb4d5.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.85f4a5bc.js";import"./Container.74ebb87e.js";import"./earcut.f20dd8d8.js";import"./Bitmap.4690ba86.js";const g=o.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends y(h(d)){update(i){this.strategy.update(i).catch(e=>{p(e)||g.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([n("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const $=t;export{$ as default};
