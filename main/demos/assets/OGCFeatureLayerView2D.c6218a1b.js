import{e as i,d as a,i as o,s as l}from"./main.d8c8794a.js";import m from"./FeatureLayerView2D.26a47e92.js";import"./Container.3578f784.js";import"./drapedUtils.426d8178.js";import"./definitions.21e97413.js";import"./LayerView.5bce5389.js";import"./schemaUtils.8bbcc2fa.js";import"./Utils.0b0f1447.js";import"./Texture.0d71ef2c.js";import"./MaterialKey.f44df254.js";import"./visualVariablesUtils.9b425bf1.js";import"./CIMSymbolHelper.235610cc.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.1a8869ef.js";import"./quantizationUtils.0ad64387.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.e41a4739.js";import"./popupUtils.08381b3b.js";import"./RefreshableLayerView.027112b1.js";const n=p=>{let e=class extends p{initialize(){const{layer:r,view:s}=this;r.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new l("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:r})))}get availableFields(){return this.layer.fieldsIndex.fields.map(r=>r.name)}};return i([a()],e.prototype,"layer",void 0),i([a({readOnly:!0})],e.prototype,"availableFields",null),e=i([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends n(m){};t=i([o("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const j=t;export{j as default};
