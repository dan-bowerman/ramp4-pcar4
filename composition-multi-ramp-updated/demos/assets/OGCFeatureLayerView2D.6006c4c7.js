import{e as i,d as a,i as o,s as l}from"./multi-ramp.341296fa.js";import m from"./FeatureLayerView2D.cc069dc6.js";import"./Container.1fb687c6.js";import"./drapedUtils.9e2281c5.js";import"./definitions.21e97413.js";import"./LayerView.703e68f2.js";import"./schemaUtils.bde9a6df.js";import"./Utils.e4d1e739.js";import"./Texture.702ff444.js";import"./MaterialKey.5e5f63c3.js";import"./visualVariablesUtils.e625d0b7.js";import"./CIMSymbolHelper.5f74c8b9.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.6505f688.js";import"./quantizationUtils.687b3101.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.5029dc45.js";import"./popupUtils.4947cb65.js";import"./RefreshableLayerView.1306e06a.js";const n=p=>{let e=class extends p{initialize(){const{layer:r,view:s}=this;r.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new l("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:r})))}get availableFields(){return this.layer.fieldsIndex.fields.map(r=>r.name)}};return i([a()],e.prototype,"layer",void 0),i([a({readOnly:!0})],e.prototype,"availableFields",null),e=i([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends n(m){};t=i([o("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const j=t;export{j as default};
