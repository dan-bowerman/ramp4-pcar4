import{e as I,i as L}from"./main.7dbc90fb.js";import{n as M}from"./BitmapTileContainer.c5a1c9de.js";const b=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new M(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var i;this.container.removeChild(this._bitmapView),(i=this._bitmapView)==null||i.removeAllChildren()}};return t=I([L("esri.views.2d.layers.BitmapTileLayerView2D")],t),t};function C(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function T(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function y(e,t,i,o){if(i.level===o.level)return t;const n=e.tileInfo.size,l=e.getTileResolution(i.level),a=e.getTileResolution(o.level);let r=e.getLODInfoAt(o.level);const m=r.getXForColumn(o.col),d=r.getYForRow(o.row);r=e.getLODInfoAt(i.level);const u=r.getXForColumn(i.col),w=r.getYForRow(i.row),s=C(t)/n[0],h=T(t)/n[1],g=Math.round(s*((m-u)/l)),f=Math.round(h*(-(d-w)/l)),v=Math.round(s*n[0]*(a/l)),p=Math.round(h*n[1]*(a/l)),c=V(n);return c.getContext("2d").drawImage(t,g,f,v,p,0,0,n[0],n[1]),c}function V(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{y as n,V as o,b as r};
