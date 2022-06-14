import{l as F,s as i,S as h,r as f,K as A,v,h as I}from"./main.a76a9de0.js";function $(e){return e&&e.applyEdits!=null}async function B(e,t,a,n={}){let d,l;const r={edits:a,result:new Promise((s,c)=>{d=s,l=c})};e.emit("apply-edits",r);try{var o;const{results:s,edits:c}=await E(e,t,a,n),p=b=>b.filter(w=>!w.error).map(F),u={edits:c,addedFeatures:p(s.addFeatureResults),updatedFeatures:p(s.updateFeatureResults),deletedFeatures:p(s.deleteFeatureResults),addedAttachments:p(s.addAttachmentResults),updatedAttachments:p(s.updateAttachmentResults),deletedAttachments:p(s.deleteAttachmentResults)};return(o=s.editedFeatureResults)!=null&&o.length&&(u.editedFeatures=s.editedFeatureResults),(u.addedFeatures.length||u.updatedFeatures.length||u.deletedFeatures.length||u.addedAttachments.length||u.updatedAttachments.length||u.deletedAttachments.length)&&e.emit("edits",u),d(u),s}catch(s){throw l(s),s}}async function E(e,t,a,n){if(await e.load(),!$(t))return Promise.reject(new i(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new i(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:d,options:l}=await S(e,a,n);return d.addFeatures.length||d.updateFeatures.length||d.deleteFeatures.length||d.addAttachments.length||d.updateAttachments.length||d.deleteAttachments.length?{edits:d,results:await t.applyEdits(d,l)}:{edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function S(e,t,a){const n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!n&&!d)throw new i(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new i(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&d)throw new i(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&d)throw new i(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const l={...a};if(l.rollbackOnFailureEnabled!=null||e.capabilities.editing.supportsRollbackOnFailure||(l.rollbackOnFailureEnabled=!0),l.rollbackOnFailureEnabled===!1&&l.returnServiceEditsOption==="original-and-current-features")throw new i(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&l.returnServiceEditsInSourceSR)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(l.returnServiceEditsInSourceSR&&l.returnServiceEditsOption!=="original-and-current-features")throw new i(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r={...t};if(r.addFeatures=t&&h.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&h.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&h.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(g),r.updateFeatures=r.updateFeatures.map(g);const o=a&&a.globalIdUsed;return r.addFeatures.forEach(s=>R(s,e,o)),r.updateFeatures.forEach(s=>U(s,e,o)),r.deleteFeatures.forEach(s=>O(s,e,o)),r.addAttachments.forEach(s=>m(s,e)),r.updateAttachments.forEach(s=>m(s,e)),{edits:await k(r),options:l}}function y(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&f(e.geometry)){if(e.geometry.hasZ&&t.capabilities.data.supportsZ===!1)throw new i(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&t.capabilities.data.supportsM===!1)throw new i(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function R(e,t,a){y(e,t,a)}function O(e,t,a){y(e,t,a)}function U(e,t,a){if(y(e,t,a),"geometry"in e&&f(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new i(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function m(e,t){const{feature:a,attachment:n}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&!!n.data.name)&&!n.name)throw new i(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&n.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof n.data=="string"){const d=A(n.data);if(d&&!d.isBase64)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function k(e){const t=e.addFeatures,a=e.updateFeatures,n=t.concat(a).map(o=>o.geometry),d=await v(n),l=t.length,r=a.length;return d.slice(0,l).forEach((o,s)=>e.addFeatures[s].geometry=o),d.slice(l,l+r).forEach((o,s)=>e.updateFeatures[s].geometry=o),e}function g(e){const t=new I;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}export{B as applyEdits};
