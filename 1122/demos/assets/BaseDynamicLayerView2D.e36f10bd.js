import{ai as o,aq as p,e as r,d as a,i as n}from"./main.c8cfc77c.js";import{t as m}from"./BitmapContainer.72a11bb3.js";import{l as h,u as d}from"./LayerView.d17b607f.js";import{S as c}from"./ExportStrategy.50040418.js";import{i as y}from"./RefreshableLayerView.be767987.js";import"./WGLContainer.f546f78e.js";import"./definitions.21e97413.js";import"./VertexArrayObject.a8082f13.js";import"./Texture.b9b0d66f.js";import"./Utils.b9d11e71.js";import"./ShaderCompiler.f8ffb66e.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.f662acbd.js";import"./Container.628b6d4b.js";import"./earcut.f20dd8d8.js";import"./Bitmap.4f99b82b.js";const g=o.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends y(h(d)){update(i){this.strategy.update(i).catch(e=>{p(e)||g.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([n("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const $=t;export{$ as default};
