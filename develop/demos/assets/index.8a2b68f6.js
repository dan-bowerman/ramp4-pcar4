import{fv as r,j0 as t,eT as i,jj as o}from"./main.36623018.js";import{C as n}from"./common-layer.0036fd44.js";class y extends n{constructor(e,s){super(e,s),this.supportsIdentify=!1,this.layerType=r.OSM,this.dataFormat=t.OSM_TILE,this.supportsFeatures=!1,this.hovertips=!1}async initiate(){this.esriLayer=i(new o(this.makeEsriLayerConfig(this.origRampConfig))),await super.initiate()}makeEsriLayerConfig(e){return super.makeEsriLayerConfig(e)}onLoadActions(){const e=super.onLoadActions();this.layerTree.name=this.name;const s=this.$iApi.geo.symbology.generatePlaceholderSymbology("O","#03fc4e"),a={uid:this.$iApi.geo.shared.generateUUID(),label:"OpenStreetMap",svgcode:s.svgcode,esriStandard:!0,drawPromise:Promise.resolve()};return this.legend.push(a),e}}export{y as default};
