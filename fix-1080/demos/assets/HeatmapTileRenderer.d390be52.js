import{e as a,i as l}from"./main.32ef8a5a.js";import{o as m,e as h}from"./heatmapUtils.d2918fce.js";import{n as p}from"./BitmapTileContainer.df40296c.js";import{o as d}from"./BaseTileRenderer.6df88e38.js";import"./Bitmap.281f8f9e.js";import"./Container.a7994563.js";import"./Texture.074ab60c.js";import"./TileContainer.d4091f5a.js";import"./Utils.6e3b6498.js";import"./WGLContainer.ca0a3493.js";import"./definitions.21e97413.js";import"./VertexArrayObject.041a7dc2.js";import"./ShaderCompiler.e717922c.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.f9aa3e19.js";import"./earcut.f20dd8d8.js";class c{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){m(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new p(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minPixelIntensity:i,maxPixelIntensity:n}=t;this._intensityInfo.minPixelIntensity=i,this._intensityInfo.maxPixelIntensity=n,this._gradient=h(t.toJSON()),this.tiles.forEach(s=>{const e=s.bitmap.source;e&&(e.minPixelIntensity=i,e.maxPixelIntensity=n,e.gradient=this._gradient,s.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const n=t.intensityInfo,{minPixelIntensity:s,maxPixelIntensity:e}=this._intensityInfo,r=i.bitmap.source||new c;r.intensities=n&&n.matrix||null,r.minPixelIntensity=s,r.maxPixelIntensity=e,r.gradient=this._gradient,i.bitmap.source=r,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=a([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const q=o;export{q as default};
