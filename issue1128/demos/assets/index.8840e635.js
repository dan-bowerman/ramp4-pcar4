import{eQ as p,fI as f,fc as d,fA as r,fJ as u,eU as y}from"./main.d79ca98c.js";import{W as g,w as m}from"./screen.25c167d3.js";class w extends p{openWizard(){this.$iApi.panel.get("wizard").isOpen||this.$iApi.panel.open({id:"wizard",screen:"wizard-screen"})}}class z extends f{layerCount=0;constructor(e){super(e)}async fetchFileInfo(e,i,t){switch(t||(t=(await d.get(e,{responseType:"arraybuffer"})).data),i){case r.GEOJSON:return this.getGeojsonInfo(e,t);case r.SHAPEFILE:return this.getShapfileInfo(e,t);case r.CSV:return this.getCsvInfo(e,t);default:console.error(`Unsupported file type passed to fetchFileInfo - '${i}'`)}}async getGeojsonInfo(e,i){return i instanceof ArrayBuffer&&(i=JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(i)))),{config:{id:`geojson#${++this.layerCount}`,layerType:r.GEOJSON,url:e,name:e.substr(e.lastIndexOf("/")+1),state:{opacity:1,visibility:!0},rawData:i},fields:[{name:"OBJECTID",type:"oid"}].concat(this.$iApi.geo.layer.files.extractGeoJsonFields(i)),configOptions:["name","nameField","tooltipField"]}}async getCsvInfo(e,i){const t=new TextDecoder("utf-8").decode(new Uint8Array(i));return{config:{id:`csv#${++this.layerCount}`,layerType:r.CSV,url:e,name:e.substr(e.lastIndexOf("/")+1),state:{opacity:1,visibility:!0},rawData:t},fields:[{name:"OBJECTID",type:"oid"}].concat(this.$iApi.geo.layer.files.extractCsvFields(t)),configOptions:["name","nameField","tooltipField","latField","longField"]}}async getShapfileInfo(e,i){const t=await this.$iApi.geo.layer.files.shapefileToGeoJson(i);return this.getGeojsonInfo(e,t)}async fetchServiceInfo(e,i){switch(i){case r.FEATURE:return this.getFeatureInfo(e);case r.MAPIMAGE:return this.getMapImageInfo(e);case r.TILE:return this.getTileInfo(e);case r.IMAGERY:return this.getImageryInfo(e);case r.WFS:return this.getWfsInfo(e);case r.WMS:return this.getWmsInfo(e)}}async getFeatureInfo(e){const i=await d.get(e,{params:{f:"json"}});return{config:{id:`${r.FEATURE}#${++this.layerCount}`,url:e,layerType:r.FEATURE,name:i.data.name,nameField:i.data.displayField,tooltipField:i.data.displayField,state:{opacity:1,visibility:!0}},fields:i.data.fields,configOptions:["name","nameField","tooltipField"]}}async getMapImageInfo(e){const i=await d.get(e,{params:{f:"json"}});return{config:{id:`${r.MAPIMAGE}#${++this.layerCount}`,url:e,layerType:r.MAPIMAGE,name:i.data.mapName,layerEntries:[],state:{opacity:1,visibility:!0}},layers:o(i.data.layers),configOptions:["name","layerEntries"]};function o(s){return s.map(a=>{const l=n(a,s);return a.level=l,a.indent=Array.from(Array(l)).fill("-").join(""),a.index=a.id,a});function n(a,l){return a.parentLayerId===-1?0:n(l[a.parentLayerId],l)+1}}}async getTileInfo(e){const i=await d.get(e,{params:{f:"json"}});return{config:{id:`${r.TILE}#${++this.layerCount}`,url:e,layerType:r.TILE,name:i.data.mapName,state:{opacity:1,visibility:!0}},configOptions:["name"]}}async getImageryInfo(e){const i=await d.get(e,{params:{f:"json"}});return{config:{id:`${r.IMAGERY}#${++this.layerCount}`,url:e,layerType:r.IMAGERY,name:i.data.name,state:{opacity:1,visibility:!0}},configOptions:["name"]}}async getWfsInfo(e){const i=new u(e),{startindex:t,limit:o}=i.queryMap,s=await this.$iApi.geo.layer.ogc.loadWfsData(e,-1,parseInt(t)||0,parseInt(o)||1e3);return this.getGeojsonInfo(e.match(/\/([^/]+)\/items/)?.[1]||"Layer",s)}async getWmsInfo(e){const i=await this.$iApi.geo.layer.ogc.parseCapabilities(e);return{config:{id:`${r.WMS}#${++this.layerCount}`,url:e,layerType:r.WMS,name:e,featureInfoMimeType:i.queryTypes[0],state:{opacity:1,visibility:!0}},layers:o(i.layers),configOptions:["name","layerEntries"]};function o(s,n=0){return[].concat.apply([],s.map(a=>(a.level=n,a.indent=Array.from(Array(n)).fill("-").join(""),a.id=a.name,a.layers.length>0?a.id?[].concat(a,o(a.layers,n+1)):[].concat([],o(a.layers,n)):a.id?a:[])))}}guessFormatFromURL(e){switch(e.match(/\.(zip|csv|geojson|json)$/)?.[1]){case"zip":return r.SHAPEFILE;case"csv":return r.CSV;case"geojson":case"json":return r.GEOJSON}return e.match(/\/ImageServer\/?$/gi)?r.IMAGERY:e.match(/\/collections\//gi)?r.WFS:e.match(/arcgis\/rest\/services\//gi)?e.match(/\/\d+\/?$/g)?r.FEATURE:r.MAPIMAGE:e.match(/service=|version=|\/wms/gi)?r.WMS:""}}var h={en:{"wizard.title":"Import Layer","wizard.upload.title":"Upload data","wizard.upload.or":"or","wizard.upload.file.label":"Upload a file","wizard.upload.file.help":"Drop or select a file to upload","wizard.upload.file.error.failed":"File upload failed","wizard.upload.url.label":"URL to file or service","wizard.upload.url.error.required":"URL is required","wizard.upload.url.error.url":"Please enter a valid URL","wizard.format.title":"Select format","wizard.format.type.service":"Service type","wizard.format.type.file":"File format","wizard.format.type.error.required":"Service or file type is required","wizard.format.type.error.invalid":"Invalid file or service type","wizard.fileType.csv":"CSV","wizard.fileType.shapefile":"zipped Shapefile","wizard.fileType.geojson":"GeoJSON","wizard.layerType.esriFeature":"ESRI Feature Layer","wizard.layerType.esriMapImage":"ESRI Map Image Layer","wizard.layerType.esriImagery":"ESRI Image Layer","wizard.layerType.esriTile":"ESRI Tile Layer","wizard.layerType.ogcWms":"OGC Web Map Service","wizard.layerType.ogcWfs":"OGC Web Feature Service","wizard.configure.title":"Configure layer","wizard.configure.name.error.required":"Name is required","wizard.configure.name.label":"Layer Name","wizard.configure.nameField.label":"Primary Field","wizard.configure.tooltipField.label":"Tooltip Field","wizard.configure.latField.label":"Latitude Field","wizard.configure.longField.label":"Longitude Field","wizard.configure.layerEntries.error.required":"LayerEntries is required","wizard.configure.layerEntries.label":"Layers","wizard.configure.layerEntries.help":"Hold Ctrl to select multiple layers","wizard.step.cancel":"Cancel","wizard.step.continue":"Continue"},fr:{"wizard.title":"Importer un fichier","wizard.upload.title":"Charger des donn\xE9es","wizard.upload.or":"ou","wizard.upload.file.label":"T\xE9l\xE9charger un fichier","wizard.upload.file.help":"D\xE9poser ou s\xE9lectionner un fichier \xE0 t\xE9l\xE9charger","wizard.upload.file.error.failed":"Le t\xE9l\xE9chargement du fichier a \xE9chou\xE9","wizard.upload.url.label":"URL vers fichier ou service","wizard.upload.url.error.required":"L\u2019URL est requise","wizard.upload.url.error.url":"Veuillez saisir une adresse URL valide","wizard.format.title":"Choisir un format","wizard.format.type.service":"Type de service","wizard.format.type.file":"Format du fichier","wizard.format.type.error.required":"Le service ou le type de fichier est requis","wizard.format.type.error.invalid":"Type de fichier ou de service non valide","wizard.fileType.csv":"CSV","wizard.fileType.shapefile":"Shapefile zipp\xE9","wizard.fileType.geojson":"GeoJSON","wizard.layerType.esriFeature":"Couche d'\xE9l\xE9ments d'ESRI","wizard.layerType.esriMapImage":"Couche d\u2019image de la carte ESRI","wizard.layerType.esriImagery":"Couche d'images d'ESRI","wizard.layerType.esriTile":"Couche de tuiles d'ESRI","wizard.layerType.ogcWms":"Couche WMS de l'OGC","wizard.layerType.ogcWfs":"Service d'entit\xE9s Web OGC","wizard.configure.title":"Configurer la couche","wizard.configure.name.error.required":"Le champ Nom est obligatoire","wizard.configure.name.label":"Nom de la couche","wizard.configure.nameField.label":"Champ cl\xE9","wizard.configure.tooltipField.label":"Champ infobulle","wizard.configure.latField.label":"Champ latitude","wizard.configure.longField.label":"Champ longitude","wizard.configure.layerEntries.error.required":"Le champ LayerEntries est obligatoire","wizard.configure.layerEntries.label":"Couches","wizard.configure.layerEntries.help":"Maintenez la touche CTRL enfonc\xE9e pour s\xE9lectionner plusieurs couches","wizard.step.cancel":"Annuler","wizard.step.continue":"Continuer"}};class v extends w{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.panel.register({wizard:{screens:{"wizard-screen":y(g)},style:{width:"350px"},alertName:"wizard.title"}},{i18n:{messages:h}});let e=new z(this.$iApi);this.$vApp.$store.registerModule("wizard",m()),this.$vApp.$store.set("wizard/layerSource",e),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),this.$iApi.panel.remove("wizard"),this.$vApp.$store.unregisterModule("wizard"),e=void 0}}}export{v as default};
