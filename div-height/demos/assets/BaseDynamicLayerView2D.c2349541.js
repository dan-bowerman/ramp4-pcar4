import{ai as o,aq as p,e as r,d as a,i as n}from"./main.01d97856.js";import{t as m}from"./BitmapContainer.dd8163a0.js";import{l as h,u as d}from"./LayerView.98b45e41.js";import{S as c}from"./ExportStrategy.a7529041.js";import{i as y}from"./RefreshableLayerView.8d4f8505.js";import"./WGLContainer.267ecd04.js";import"./definitions.21e97413.js";import"./VertexArrayObject.f96b84cd.js";import"./Texture.c104a5bc.js";import"./Utils.38d6ea28.js";import"./ShaderCompiler.30544dd4.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.22063618.js";import"./Container.5840746a.js";import"./earcut.f20dd8d8.js";import"./Bitmap.37934678.js";const g=o.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends y(h(d)){update(i){this.strategy.update(i).catch(e=>{p(e)||g.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this.strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImage(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([n("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const $=t;export{$ as default};
