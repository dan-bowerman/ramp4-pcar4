import{e as i,d as a,i as o,s as l}from"./main.7dbc90fb.js";import m from"./FeatureLayerView2D.a321b49c.js";import"./Container.734b43bf.js";import"./drapedUtils.6582f277.js";import"./definitions.21e97413.js";import"./LayerView.fddb0cea.js";import"./schemaUtils.8627649f.js";import"./Utils.60a4d83b.js";import"./Texture.b479c6db.js";import"./MaterialKey.f58cf799.js";import"./visualVariablesUtils.37fbde30.js";import"./CIMSymbolHelper.786e5dde.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.7013d9e5.js";import"./quantizationUtils.07b38d8e.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.e78e8029.js";import"./popupUtils.95f26a9a.js";import"./RefreshableLayerView.7b5711ed.js";const n=p=>{let e=class extends p{initialize(){const{layer:r,view:s}=this;r.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new l("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:r})))}get availableFields(){return this.layer.fieldsIndex.fields.map(r=>r.name)}};return i([a()],e.prototype,"layer",void 0),i([a({readOnly:!0})],e.prototype,"availableFields",null),e=i([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends n(m){};t=i([o("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const j=t;export{j as default};
