import{f as o}from"./fabric.851b4ed4.js";import{eP as n}from"./main.d8c8794a.js";class m extends n{get config(){return this.$iApi.fixture.get("export").config?.map}async make(t){const a=await this.$iApi.geo.map.takeScreenshot({quality:1,format:"png"}),e=new Image;e.src=a.dataUrl;const i=await new Promise(r=>e.onload=()=>r(e));return new o.fabric.Image(i,t)}}export{m as default};
