import{fE as r}from"./main.5d410746.js";import{F as e}from"./file-layer.8683783f.js";import"./attrib-layer.1c571728.js";import"./common-layer.6fec0e96.js";class l extends e{async initiate(){const i=new r(this.config.url),{startindex:t,limit:a}=i.queryMap;this.sourceGeoJson=await this.$iApi.geo.layer.ogc.loadWfsData(this.config.url,-1,parseInt(t)||0,parseInt(a)||1e3,void 0,this.config.xyInAttribs),await super.initiate()}}export{l as default};
