import{e as i,d as a,i as o,s as l}from"./main.36623018.js";import m from"./FeatureLayerView2D.5f66e247.js";import"./Container.3d4cb799.js";import"./drapedUtils.61dbf8e4.js";import"./definitions.21e97413.js";import"./LayerView.190c5f10.js";import"./schemaUtils.c51d5a6f.js";import"./Utils.8897d3ef.js";import"./Texture.f40b34a4.js";import"./MaterialKey.435db4f4.js";import"./visualVariablesUtils.cd9827aa.js";import"./CIMSymbolHelper.5655a978.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.d404d08f.js";import"./quantizationUtils.7a38ffe5.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.791c18a4.js";import"./popupUtils.6f7c66d9.js";import"./RefreshableLayerView.1cdc542f.js";const n=p=>{let e=class extends p{initialize(){const{layer:r,view:s}=this;r.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new l("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:r})))}get availableFields(){return this.layer.fieldsIndex.fields.map(r=>r.name)}};return i([a()],e.prototype,"layer",void 0),i([a({readOnly:!0})],e.prototype,"availableFields",null),e=i([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends n(m){};t=i([o("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const j=t;export{j as default};
