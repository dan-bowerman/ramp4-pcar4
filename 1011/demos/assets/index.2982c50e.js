import{f as o}from"./fabric.49f3673c.js";import{eR as n}from"./main.e0908dae.js";class m extends n{get config(){return this.$iApi.fixture.get("export").config?.map}async make(t){const a=await this.$iApi.geo.map.takeScreenshot({quality:1,format:"png"}),e=new Image;e.src=a.dataUrl;const i=await new Promise(r=>e.onload=()=>r(e));return new o.fabric.Image(i,t)}}export{m as default};
