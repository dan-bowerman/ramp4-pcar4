import{e as s,d as r,i as l,hb as a}from"./main.d8c8794a.js";let t=class extends a{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const i=this.createTile(e);return i.once("isReady",()=>this.notifyChange("updating")),this.tiles.set(e.id,i),i}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach(i=>{e=e&&i.isReady}),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};s([r()],t.prototype,"layer",void 0),s([r()],t.prototype,"layerView",void 0),s([r()],t.prototype,"tileInfoView",void 0),s([r()],t.prototype,"updating",null),t=s([l("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],t);const d=t;export{d as o};
