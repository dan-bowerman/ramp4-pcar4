import{e as i,d as a,i as o,s as l}from"./main.bf5b0f8f.js";import m from"./FeatureLayerView2D.f6a6ec3d.js";import"./Container.cb2e4c32.js";import"./drapedUtils.c607c580.js";import"./definitions.21e97413.js";import"./LayerView.8a096038.js";import"./schemaUtils.ae3e82b0.js";import"./Utils.36bd6d05.js";import"./Texture.4cb5574f.js";import"./MaterialKey.4b56782e.js";import"./visualVariablesUtils.b08bb171.js";import"./CIMSymbolHelper.f6d4d553.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.6a3c4163.js";import"./quantizationUtils.bc19cee8.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.29bcb227.js";import"./popupUtils.36f715df.js";import"./RefreshableLayerView.90973d33.js";const n=p=>{let e=class extends p{initialize(){const{layer:r,view:s}=this;r.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new l("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:r})))}get availableFields(){return this.layer.fieldsIndex.fields.map(r=>r.name)}};return i([a()],e.prototype,"layer",void 0),i([a({readOnly:!0})],e.prototype,"availableFields",null),e=i([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends n(m){};t=i([o("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const j=t;export{j as default};
