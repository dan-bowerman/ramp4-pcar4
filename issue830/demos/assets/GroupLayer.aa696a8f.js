import{jo as y,jp as d,c_ as v,c$ as b,jO as p,jP as c,d0 as u,jQ as f,r as _,jF as m,jR as w,e as l,d as a,cl as L,i as O,d4 as g}from"./main.d81f1731.js";let s=class extends y(d(v(b(p(c(u(g))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,o,r){const t=[];if(!i)return t;i.forEach(n=>{const h=f(n,r.webmap?r.webmap.getLayerJSONFromResourceInfo(n):null,r);_(h)&&h.layerType&&t.push(h)}),e.layers=t}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return m(this,i=>{i(this.layers)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!w(this).initialized)return;const o=this.layers;let r=o.find(t=>t.visible);switch(i){case"exclusive":o.length&&!r&&(r=o.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":o.forEach(t=>{t.visible=e})}}_visibleWatcher(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_visibilityWatcher(i,e,o,r){const t=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(t):this._isAnyLayerVisible()||(t.visible=!0);break;case"inherited":t.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};l([a()],s.prototype,"fullExtent",void 0),l([a({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),l([L("layers")],s.prototype,"_writeLayers",null),l([a({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),l([a({json:{origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),l([a()],s.prototype,"spatialReference",void 0),l([a({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),l([a({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],s.prototype,"visibilityMode",null),s=l([O("esri.layers.GroupLayer")],s);const M=s;export{M as default};
