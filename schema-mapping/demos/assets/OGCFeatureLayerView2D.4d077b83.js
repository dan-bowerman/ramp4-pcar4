import{e as i,d as a,i as o,s as l}from"./main.e3a581a7.js";import m from"./FeatureLayerView2D.6d33e2f7.js";import"./Container.ab2d2c8e.js";import"./drapedUtils.ef7cd75f.js";import"./definitions.21e97413.js";import"./LayerView.7f08cb0a.js";import"./schemaUtils.29867da8.js";import"./Utils.7a075ce5.js";import"./Texture.ea783bfe.js";import"./MaterialKey.aa7ba002.js";import"./visualVariablesUtils.3543203a.js";import"./CIMSymbolHelper.29bd0fb0.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.5b5fca36.js";import"./quantizationUtils.bb85b0ef.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.44a49e70.js";import"./popupUtils.e3531efe.js";import"./RefreshableLayerView.ab48fbe2.js";const n=p=>{let e=class extends p{initialize(){const{layer:r,view:s}=this;r.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new l("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:r})))}get availableFields(){return this.layer.fieldsIndex.fields.map(r=>r.name)}};return i([a()],e.prototype,"layer",void 0),i([a({readOnly:!0})],e.prototype,"availableFields",null),e=i([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends n(m){};t=i([o("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const j=t;export{j as default};
