import"./main.36623018.js";import{F as o}from"./file-layer.db067f5b.js";import"./attrib-layer.8ea6227c.js";import"./common-layer.0036fd44.js";class l extends o{async initiate(){if(!this.origRampConfig.latField||!this.origRampConfig.longField)throw new Error("csv file config missing lat or long field names");let i;if(this.origRampConfig.rawData)i=this.origRampConfig.rawData;else if(this.origRampConfig.url)i="error remote file csv loader not yet implemented";else throw new Error("Csv file config contains no raw data or url");this.sourceGeoJson=await this.$iApi.geo.layer.files.csvToGeoJson(i,{latfield:this.origRampConfig.latField,lonfield:this.origRampConfig.longField}),await super.initiate()}}export{l as default};
