import{c$ as i,d0 as l,d4 as y,l4 as p,s as d,e as o,d as t,i as u}from"./main.b43b33c5.js";let e=class extends i(l(y)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,n)=>{p(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";s&&(a+=" "+s),n(new d("layer:unknown-layer-type",a,{layerType:s}))})}))}read(r,n){super.read({resourceInfo:r},n)}write(){return null}};o([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),o([t({type:["show","hide"]})],e.prototype,"listMode",void 0),o([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=o([u("esri.layers.UnknownLayer")],e);const w=e;export{w as default};
