import{c_ as p,c$ as l,d3 as d,l3 as u,s as a,e as r,d as i,i as y}from"./main.92c7f41d.js";let s=class extends p(l(d)){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{u(()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unsupported layer type";t&&(n+=" "+t),o(new a("layer:unsupported-layer-type",n,{layerType:t}))})}))}read(e,o){const t={resourceInfo:e};e.id!=null&&(t.id=e.id),e.title!=null&&(t.title=e.title),super.read(t,o)}write(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};r([i({readOnly:!0})],s.prototype,"resourceInfo",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({json:{read:!1},readOnly:!0,value:"unsupported"})],s.prototype,"type",void 0),s=r([y("esri.layers.UnsupportedLayer")],s);const h=s;export{h as default};
