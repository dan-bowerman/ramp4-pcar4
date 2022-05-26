import{e as _,i as F,cu as S,r as U,c7 as f}from"./main.5d410746.js";import{r as E}from"./heatmapUtils.5f453c38.js";import{o as v}from"./definitions.21e97413.js";import{p as O}from"./BaseProcessor.f5b19548.js";import{l as o}from"./tileUtils.0ffc2a36.js";class n{constructor(t,i){this.offset=t,this.extent=i}}function g(s){const t=s.key,i=new Map,r=256,e=v,a=s.tileInfoView.tileInfo.isWrappable;return i.set(o(t,-1,-1,a).id,new n([-e,-e],[e-r,e-r,e,e])),i.set(o(t,0,-1,a).id,new n([0,-e],[0,e-r,e,e])),i.set(o(t,1,-1,a).id,new n([e,-e],[0,e-r,r,e])),i.set(o(t,-1,0,a).id,new n([-e,0],[e-r,0,e,e])),i.set(o(t,1,0,a).id,new n([e,0],[0,0,r,e])),i.set(o(t,-1,1,a).id,new n([-e,e],[e-r,0,e,r])),i.set(o(t,0,1,a).id,new n([0,e],[0,0,e,r])),i.set(o(t,1,1,a).id,new n([e,e],[0,0,r,r])),i}let c=class extends O{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(s,t){const i=t.schema.processors[0];i.type==="heatmap"&&S(this._schema,i)&&(s.mesh=!0,this._schema=i)}onTileUpdate(s){for(const t of s.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(s){const t={clear:!0};return this._tileKeyToFeatureSets.delete(s.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:s.id,data:t})}async onTileMessage(s,t,i){this._tileKeyToFeatureSets.has(s.key.id)||this._tileKeyToFeatureSets.set(s.key.id,new Map);const r=this._tileKeyToFeatureSets.get(s.key.id);if(U(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&r.set(t.addOrUpdate.instance,t),t.end){const e=[],a=g(s);this._tileKeyToFeatureSets.forEach((m,d)=>{if(d===s.key.id)m.forEach(l=>f(l.addOrUpdate,h=>e.push(h)));else if(a.has(d)){const l=a.get(d),[h,T]=l.offset;m.forEach(w=>f(w.addOrUpdate,k=>{const K=k.transform(h,T,1,1);e.push(K)}))}});const p=E(e,this._schema.mesh,512,512),u={tileKey:s.key.id,intensityInfo:p},y=[p.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",u,{...i,transferList:y})}}onTileError(s,t,i){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:s.id,error:t},i)}};c=_([F("esri.views.2d.layers.features.processors.HeatmapProcessor")],c);const b=c;export{b as default};
