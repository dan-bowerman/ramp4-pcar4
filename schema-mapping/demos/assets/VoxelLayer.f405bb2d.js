import{cL as he,ai as K,iN as T,C as pe,aq as ue,r as b,f$ as H,e as t,d as s,i as p,N as c,cM as ee,h$ as w,ab as ce,bZ as X,S as d,iv as W,cY as ye,cZ as ve,c_ as ge,jp as _e,c$ as me,jD as be,d3 as xe,b7 as we,kf as fe,g0 as Se,bF as Ve,ax as je,gm as Te,jx as Re,jT as Le,d2 as We}from"./main.9f707e1a.js";import{N as Ce}from"./SceneService.bc76b6d6.js";import"./resourceUtils.fc82600b.js";function $e(r){return new Promise(e=>import("./vxlLayer.f4e70b2f.js").then(i=>i.v).then(({default:i})=>{const n=i({locateFile:qe,preinitializedWebGLContext:r,onRuntimeInitialized:()=>e(n)})})).catch(e=>Promise.reject(e))}function qe(r){return he(`esri/libs/vxl/${r}`)}const O=K.getLogger("esri.layers.VoxelWasmPerScene");class Ie{constructor(e){this._halfIntTexturesAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._renderPass=0,this._renderSlot=22,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._view=e,this.initialize()}get canRender(){return!!this._vxl&&this._view.viewingMode==="local"}dbg(e,i){this._dbgFlags.has(e)&&(e===4?O.error(i):O.warn(i))}removeRenderPlugin(){this._pluginIsActive&&this._view._stage&&(this.dbg(1,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}initialize(){this.dbg(1,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this._readyWatchHandle=T(()=>this._view.ready,e=>{e&&this._view.viewingMode==="local"?(this.dbg(1,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this.dbg(1,"view ready status changed, not ready or not a local view!"),this.removeRenderPlugin())},{initial:!0}),this._qualityWatchHandle=T(()=>{var e;return(e=this._view)==null?void 0:e.qualityProfile},e=>{this.dbg(3,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this.toWasmQuality(e))},{initial:!0}),this._timeExtentWatchHandle=T(()=>{var e;return(e=this._view)==null?void 0:e.timeExtent},()=>{if(this._vxl){var e;const i=this._getTimeArgs((e=this._view)==null?void 0:e.timeExtent);this.dbg(3,"sceneView timeExtent changed to useTime="+i.useTime+" st="+i.startTime+" et="+i.endTime),this._vxl.set_scene_time_extent(i.startTime,i.endTime,i.useTime),this._renderPluginContext.requestRender()}},{initial:!0}),this._stationaryWatchHandle=T(()=>{var e;return(e=this._view)==null?void 0:e.stationary},e=>{this._vxl&&e&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()})}initializeRenderContext(e){this.dbg(1,"--initializeRenderContext--");const i=e.renderContext.rctx;i.webglVersion==="webgl2"?(this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this.initializeWasm(i.gl)):this.dbg(4,"WebGL 1 context only!")}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this.dbg(1,"--uninitializeRenderContext--")}restoreFramebuffer(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!this._rctx)return void this.dbg(4,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const i=this._renderTargetToRestore.viewport;this._rctx.setViewport(i.x,i.y,i.width,i.height)}bindPreviousDepthToSlot(e,i){const n=!!this._rctx,o=!!this._renderTargetToRestore;if(!n||!o)return 0;const l=this._renderTargetToRestore.fbo.depthStencilTexture;return l?(i===0?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(l,e,!0),1):(this.dbg(4,"no depth/stencil texture exists!"),0)}setBlendState(e,i,n,o){this._rctx?(this._rctx.setBlendingEnabled(e===1),this._rctx.setBlendFunction(i,n),this._rctx.setBlendEquation(o)):this.dbg(4,"setBlendState callback has no rendering context!")}setFrontFace(e){this._rctx?this._rctx.setFrontFace(e):this.dbg(4,"setFrontFace callback has no rendering context!")}setDepthStencilStateFunction(e,i,n){this._rctx?(this._rctx.setDepthFunction(n),this._rctx.setDepthTestEnabled(e===1),this._rctx.setDepthWriteEnabled(i===1),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(519,0,255),this._rctx.setStencilOpSeparate(1028,7680,7682,7680),this._rctx.setStencilOpSeparate(1029,7680,7683,7680)):this.dbg(4,"setDepthStencilStateFunction callback has no rendering context!")}setRasterizerState(e){if(this._rctx)switch(e){case 1:this._rctx.setFaceCullingEnabled(!1);break;case 3:this._rctx.setCullFace(1029),this._rctx.setFaceCullingEnabled(!0);break;case 2:this._rctx.setCullFace(1028),this._rctx.setFaceCullingEnabled(!0)}else this.dbg(4,"setRasterizerState callback has no rendering context!")}setViewport(e,i,n,o){this._rctx?this._rctx.setViewport(e,i,n,o):this.dbg(4,"setViewport callback has no rendering context!")}_syncRequestsResponses(){this._layers.forEach((e,i)=>{const n=[];e.responses.forEach((h,g)=>{n.push(g),this.dbg(2,"responding for requestID:"+g+" size:"+h.size),this._vxl.respond(i,g,h)});const o=e.responses;for(const h of n)o.delete(h);const l=this._vxl.get_new_requests(i),a=e.abortController.signal;for(const h in l){e.outstandingRequestCount+=1,e.outstandingRequestCount===1&&e.layerView.updatingFlagChanged();const g=l[h],F={responseType:"array-buffer",signal:a};this.dbg(2,"making requestID:"+h+" url:"+g.url),pe(g.url,F).then(y=>{e.outstandingRequestCount-=1,e.outstandingRequestCount===0&&e.layerView.updatingFlagChanged(),this.dbg(2,"have response for requestID:"+h);let S=0;if(y.data.byteLength>0){S=this._vxl._malloc(y.data.byteLength);const C=new Uint8Array(this._vxl.HEAPU8.buffer,S,y.data.byteLength),de=new Uint8Array(y.data);for(let U=0;U<y.data.byteLength;++U)C[U]=de[U]}o.set(+h,{type:g.type,ptr:S,size:y.data.byteLength,success:!0})}).catch(y=>{e.outstandingRequestCount-=1,e.outstandingRequestCount===0&&e.layerView.updatingFlagChanged(),ue(y)||(this.dbg(4,`requestID:${h} failed, error=${y.toString()}`),o.set(+h,{type:g.type,ptr:0,size:0,success:!1}))})}})}updateWasmCamera(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far)}isUpdating(e){return!(this._vxl||!this._vxlPromise)||!!this._layers.has(e)&&this._layers.get(e).outstandingRequestCount>0}setEnabled(e,i){this._layers.forEach((n,o)=>{n.layerView===e&&(this._vxl.set_enabled(o,i),this._renderPluginContext.requestRender())})}setSlices(e,i){const n={mask:2,slices:{planes:i,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,n,!0)}setDynamicSections(e,i){const n={mask:4,dynamicSections:{planes:i,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,n,!0)}setStaticSections(e,i){const n={mask:1,staticSections:i};return this._doMaskedUIUpdate(e,n,!0)}setCurrentVariable(e,i){const n={mask:1024,currentVariable:i};return this._doMaskedUIUpdate(e,n,!0)}setRenderMode(e,i){const n={mask:8192,renderMode:i};return this._doMaskedUIUpdate(e,n,!0)}_doMaskedUIUpdate(e,i,n){if(!this._vxl)return!1;let o=!1;return this._layers.forEach((l,a)=>{if(l.layerView===e){const h={str:JSON.stringify(i),byteCount:0,ptr:0,isReusable:!1};this._AllocateBlock(h)&&(o=this._vxl.handle_masked_ui_update(a,h.ptr,h.byteCount)===1,h.isReusable||this._vxl._free(h.ptr))}}),o&&n&&this._renderPluginContext.requestRender(),o}addVoxelLayer(e){if(!this._vxl){const n={layerView:e,resolveCallback:null,rejectCallback:null},o=new Promise((l,a)=>{n.resolveCallback=l,n.rejectCallback=a});return this._newLayers.push(n),o}const i=this._addVoxelLayer(e);return i<0?Promise.reject(-1):Promise.resolve(i)}removeVoxelLayer(e){if(!this._vxl){const o=this._newLayers.findIndex(a=>e===a.layerView);o>=0&&(this._newLayers[o].resolveCallback(-1),this._newLayers.splice(o,1));const l=this._newLayers.length;return l===0&&(this.dbg(1," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),l}let i=-1;this._layers.forEach((o,l)=>{o.layerView===e&&(i=l,o.abortController.abort(),this._vxl.remove_layer(i))}),i>=0&&this._layers.delete(i);const n=this._layers.size;return n===0&&(this.dbg(1," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),n}_getBlockSize(e){for(const i of this._wasmMemBlockSizes)if(e<i)return i;return-1}_AllocateBlock(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const i=this._getBlockSize(e.byteCount);return i<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(i),e.ptr===0&&(e.ptr=this._vxl._malloc(i),this._wasmMemBlocks.set(i,e.ptr))),e.ptr!==0&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)}_getTimeArgs(e){let i=-Number.MAX_VALUE,n=Number.MAX_VALUE,o=!1;return b(e)&&(e.isAllTime?o=!0:(b(e.start)&&(o=!0,i=e.start.getTime()/1e3),b(e.end)&&(o=!0,n=e.end.getTime()/1e3))),{startTime:i,endTime:n,useTime:o}}_addVoxelLayer(e){var i;const n=e.layer;let o=-1;const l=n.getConfiguration();if(l.length<1)return-1;const a={str:l,byteCount:0,ptr:0,isReusable:!1};if(!this._AllocateBlock(a))return-1;const h=this._getTimeArgs((i=this._view)==null?void 0:i.timeExtent),g=this._view.spatialReference.isWGS84&&n.spatialReference.isWGS84?111319.49079327357:1;if(o=this._vxl.add_layer(n.serviceRoot,a.ptr,a.byteCount,g,g,h.startTime,h.endTime,h.useTime,this.toWasmQuality(this._view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),o>=0){const F=new AbortController;if(this._layers.set(o,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:F}),!this._halfIntTexturesAvailable){const y=[];let S="";for(const C of e.layer.variables)C.renderingFormat.type!=="Int16"&&C.renderingFormat.type!=="UInt16"||(y.push(C.name),C.id===e.layer.style.currentVariableId&&(S=C.name));S!==""&&O.error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${S}' in this browser`),y.length>0&&O.warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${y.toString()}' in this browser`)}return o}return-1}prepareRender(e){if(!this._vxl)return;const i=e.viewForward,n=e.eye;this._vxl.update_camera_pos_and_direction(n[0],n[1],n[2],i[0],i[1],i[2]);const o=this._vxl.cull();this.dbg(2,"missingResourceCount="+o),this._moreToLoad=o>0,this._havePreparedWithAllLayers=this._newLayers.length===0}render(e){if(!this._vxl||e.pass!==this._renderPass||e.slot!==this._renderSlot)return!1;for(const n of this._newLayers){const o=this._addVoxelLayer(n.layerView);o===-1?n.rejectCallback(-1):n.resolveCallback(o)}if(this._newLayers=[],this._layers.size===0)return this.dbg(4,"No voxel layers but RenderPlugin instance is being asked to render!"),!1;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._syncRequestsResponses(),this._lastFrameWasStationary=this._view.stationary,this._vxl.begin_color_frame(!this._view.stationary||this._moreToLoad,e.scenelightingData.lightingMainDirection[0],e.scenelightingData.lightingMainDirection[1],e.scenelightingData.lightingMainDirection[2]);const i=this._renderTargetToRestore.viewport;return i.width===this._viewportWidth&&i.height===this._viewportHeight||(this._viewportWidth=i.width,this._viewportHeight=i.height,this._vxl.set_viewport(i.width,i.height)),i.x===0&&i.y===0||this.dbg(4,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.camera),this._vxl.draw(),this._renderTargetToRestore.fbo=null,e.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),e.rctx.externalVertexArrayObjectUpdate(),e.rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender(),!0}destroy(){this.dbg(1,"--destroy--"),this.removeRenderPlugin(),this._readyWatchHandle=H(this._readyWatchHandle),this._qualityWatchHandle=H(this._qualityWatchHandle),this._timeExtentWatchHandle=H(this._timeExtentWatchHandle),this._stationaryWatchHandle=H(this._stationaryWatchHandle),this._vxl&&(this._layers.forEach(e=>{e.abortController.abort()}),this._wasmMemBlocks.forEach(e=>{e!==0&&this._vxl._free(e)}),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}initializeWasm(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=$e(e).then(i=>{var n;if(this._vxl=i,this._vxlPromise=null,this._newLayers.length<=0)return this.dbg(1," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const o=this._getTimeArgs((n=this._view)==null?void 0:n.timeExtent),l=this._vxl.addFunction(this.restoreFramebuffer.bind(this),"v"),a=this._vxl.addFunction(this.setBlendState.bind(this),"viiii"),h=this._vxl.addFunction(this.setFrontFace.bind(this),"vi"),g=this._vxl.addFunction(this.setRasterizerState.bind(this),"vi"),F=this._vxl.addFunction(this.setDepthStencilStateFunction.bind(this),"viii"),y=this._vxl.addFunction(this.setViewport.bind(this),"viiii"),S=this._vxl.addFunction(this.bindPreviousDepthToSlot.bind(this),"iii");this._vxl.initialize_voxel_wasm(l,a,h,g,F,y,S,o.startTime,o.endTime,o.useTime),this._renderPluginContext&&this._renderPluginContext.requestRender()}).catch(()=>{for(const i of this._newLayers)i.rejectCallback(-2);this.dbg(4," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()})),this._vxlPromise)}pickDepth(e,i,n){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const o=n.viewport[3]-i;if(e<0||e>n.viewport[2]||i<0||i>n.viewport[3])return this.dbg(4,`pickDepth: outOfRange, screenXY=[${e}, ${o}], vp=[${n.viewport.toString()}]`),null;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};const l=n.viewForward,a=n.eye;this._vxl.update_camera_pos_and_direction(a[0],a[1],a[2],l[0],l[1],l[2]),this.updateWasmCamera(n),this._vxl.begin_frame();const h=this._vxl.pick_depth(e,o);return this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),h.success?h.distanceToCamera:null}toWasmQuality(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}}}class f{constructor(){this.view2WASM=new Map}static getInstance(){return f.instance||(f.instance=new f),f.instance}getVoxelWasmPerSceneView(e){return this.view2WASM.has(e)?this.view2WASM.get(e):null}isUpdating(e,i){return!!this.view2WASM.has(e)&&this.view2WASM.get(e).isUpdating(i)}addLayer(e,i){return this.view2WASM.has(e)||this.view2WASM.set(e,new Ie(e)),this.view2WASM.get(e).addVoxelLayer(i)}removeLayer(e,i){this.view2WASM.has(e)&&this.view2WASM.get(e).removeVoxelLayer(i)<1&&this.view2WASM.delete(e)}setLayerEnabled(e,i,n){this.view2WASM.has(e)&&this.view2WASM.get(e).setEnabled(i,n)}setLayerSlices(e,i){let n=!1;return this.view2WASM.forEach((o,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(n=o.setSlices(a,i))})}),n}setLayerDynamicSections(e,i){let n=!1;return this.view2WASM.forEach((o,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(n=o.setDynamicSections(a,i))})}),n}setLayerCurrentVariable(e,i){let n=!1;return this.view2WASM.forEach((o,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(n=o.setCurrentVariable(a,i))})}),n}setLayerRenderMode(e,i){let n=!1;return this.view2WASM.forEach((o,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(n=o.setRenderMode(a,i))})}),n}setLayerStaticSections(e,i){let n=!1;return this.view2WASM.forEach((o,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(n=o.setStaticSections(a,i))})}),n}}let $=class extends c{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};t([s({type:Boolean,json:{default:!0,write:!0}})],$.prototype,"enabled",void 0),t([s({type:String,json:{write:!0}})],$.prototype,"label",void 0),t([s({type:[Number],json:{write:!0}})],$.prototype,"normal",void 0),t([s({type:[Number],json:{write:!0}})],$.prototype,"point",void 0),$=t([p("esri.layers.support.VoxelDynamicSection")],$);const Z=$;let q=class extends c{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};t([s({type:Boolean,json:{write:!0}})],q.prototype,"enabled",void 0),t([s({type:String,json:{write:!0}})],q.prototype,"label",void 0),t([s({type:[Number],json:{write:!0}})],q.prototype,"normal",void 0),t([s({type:[Number],json:{write:!0}})],q.prototype,"point",void 0),q=t([p("esri.layers.support.VoxelSlice")],q);const B=q;let v=class extends c{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}readHref(r,e,i){return ce(r,i)}};t([s({type:Boolean,json:{default:!0,write:!0}})],v.prototype,"enabled",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"href",void 0),t([ee(["service","web-scene"],"href")],v.prototype,"readHref",null),t([s({type:w,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"id",void 0),t([s({type:String,json:{write:!0}})],v.prototype,"label",void 0),t([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"normal",void 0),t([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"point",void 0),t([s({type:[w],json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"sizeInPixel",void 0),t([s({type:[B],json:{write:!0}})],v.prototype,"slices",void 0),t([s({type:w,json:{default:0,write:!0}})],v.prototype,"timeId",void 0),t([s({type:w,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"variableId",void 0),v=t([p("esri.layers.support.VoxelSection")],v);const te=v;let A=class extends c{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};t([s({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],A.prototype,"diffuseFactor",void 0),t([s({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],A.prototype,"specularFactor",void 0),A=t([p("esri.layers.support.VoxelSimpleShading")],A);const ie=A;let I=class extends c{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null}};t([s({type:X,json:{type:[w],write:{enabled:!0,isRequired:!0}}})],I.prototype,"color",void 0),t([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],I.prototype,"value",void 0),t([s({type:Boolean,json:{default:!0,write:!0}})],I.prototype,"enabled",void 0),t([s({type:String,json:{write:!0}})],I.prototype,"label",void 0),I=t([p("esri.layers.support.VoxelIsosurface")],I);const se=I;let z=class extends c{constructor(){super(...arguments),this.alpha=0,this.position=0}};t([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"alpha",void 0),t([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"position",void 0),z=t([p("esri.layers.support.VoxelAlphaStop")],z);const re=z;let N=class extends c{constructor(){super(...arguments),this.color=null,this.position=0}};t([s({type:X,json:{type:[w],write:{enabled:!0,isRequired:!0}}})],N.prototype,"color",void 0),t([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"position",void 0),N=t([p("esri.layers.support.VoxelColorStop")],N);const ne=N;let k=class extends c{constructor(){super(...arguments),this.enabled=!1,this.range=null}};t([s({type:Boolean,json:{default:!1,write:!0}})],k.prototype,"enabled",void 0),t([s({type:[Number],json:{write:!0}})],k.prototype,"range",void 0),k=t([p("esri.layers.support.VoxelRangeFilter")],k);const Pe=k;let R=class extends c{constructor(r){super(r),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new d,this.alphaStops=new d}set colorStops(r){this._set("colorStops",W(r,this._get("colorStops"),d.ofType(ne)))}set alphaStops(r){this._set("alphaStops",W(r,this._get("alphaStops"),d.ofType(re)))}};t([s({type:["linear","nearest"],json:{write:!0}})],R.prototype,"interpolation",void 0),t([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"stretchRange",void 0),t([s({type:d.ofType(ne),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],R.prototype,"colorStops",null),t([s({type:d.ofType(re),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],R.prototype,"alphaStops",null),t([s({type:Pe,json:{write:!0}})],R.prototype,"rangeFilter",void 0),R=t([p("esri.layers.support.VoxelTransferFunctionStyle")],R);const Me=R;let P=class extends c{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null}};t([s({type:X,json:{type:[w],write:{enabled:!0,isRequired:!0}}})],P.prototype,"color",void 0),t([s({type:w,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"value",void 0),t([s({type:Boolean,json:{default:!0,write:!0}})],P.prototype,"enabled",void 0),t([s({type:String,json:{write:!0}})],P.prototype,"label",void 0),P=t([p("esri.layers.support.VoxelUniqueValue")],P);const oe=P;let L=class extends c{constructor(r){super(r),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new d,this.isosurfaces=new d}set uniqueValues(r){this._set("uniqueValues",W(r,this._get("uniqueValues"),d.ofType(oe)))}set isosurfaces(r){this._set("isosurfaces",W(r,this._get("isosurfaces"),d.ofType(se)))}};t([s({type:w,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"variableId",void 0),t([s({type:String,json:{write:!0}})],L.prototype,"label",void 0),t([s({type:Me,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],L.prototype,"transferFunction",void 0),t([s({type:d.ofType(oe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],L.prototype,"uniqueValues",null),t([s({type:d.ofType(se),json:{write:{enabled:!0,overridePolicy(){const r=!this.uniqueValues||this.uniqueValues.length<1,e=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:r&&e}}}}})],L.prototype,"isosurfaces",null),L=t([p("esri.layers.support.VoxelVariableStyle")],L);const ae=L;let V=class extends c{constructor(r){super(r),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new d,this.dynamicSections=new d}set slices(r){this._set("slices",W(r,this._get("slices"),d.ofType(B)))}set dynamicSections(r){this._set("dynamicSections",W(r,this._get("dynamicSections"),d.ofType(Z)))}};t([s({type:w,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"volumeId",void 0),t([s({type:Number,json:{default:1,write:!0}})],V.prototype,"verticalExaggeration",void 0),t([s({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],V.prototype,"exaggerationMode",void 0),t([s({type:Number,json:{default:0,write:!0}})],V.prototype,"verticalOffset",void 0),t([s({type:d.ofType(B),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],V.prototype,"slices",null),t([s({type:d.ofType(Z),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],V.prototype,"dynamicSections",null),V=t([p("esri.layers.support.VoxelVolumeStyle")],V);const le=V;let _=class extends c{constructor(r){super(r),this.currentVariableId=0,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new ie,this.volumeStyles=new d,this.variableStyles=new d}set volumeStyles(r){this._set("volumeStyles",W(r,this._get("volumeStyles"),d.ofType(le)))}set variableStyles(r){this._set("variableStyles",W(r,this._get("variableStyles"),d.ofType(ae)))}};t([s({type:d.ofType(le),json:{write:!0}})],_.prototype,"volumeStyles",null),t([s({type:w,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"currentVariableId",void 0),t([s({type:["volume","surfaces"],json:{write:!0}})],_.prototype,"renderMode",void 0),t([s({type:d.ofType(ae),json:{write:!0}})],_.prototype,"variableStyles",null),t([s({type:Boolean,json:{write:!0}})],_.prototype,"enableSlices",void 0),t([s({type:Boolean,json:{write:!0}})],_.prototype,"enableSections",void 0),t([s({type:Boolean,json:{write:!0}})],_.prototype,"enableDynamicSections",void 0),t([s({type:Boolean,json:{write:!0}})],_.prototype,"enableIsosurfaces",void 0),t([s({type:ie,json:{write:!0}})],_.prototype,"shading",void 0),_=t([p("esri.layers.support.VoxelStyle")],_);const Fe=_;let j=class extends c{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};t([s({type:["discrete","continuous"],json:{write:!0}})],j.prototype,"continuity",void 0),t([s({type:Boolean,json:{write:!0}})],j.prototype,"hasNoData",void 0),t([s({type:Number,json:{write:!0}})],j.prototype,"noData",void 0),t([s({type:Number,json:{write:!0}})],j.prototype,"offset",void 0),t([s({type:Number,json:{write:!0}})],j.prototype,"scale",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"type",void 0),j=t([p("esri.layers.support.VoxelFormat")],j);const Y=j;let x=class extends c{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};t([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),t([s({type:String,json:{write:!0}})],x.prototype,"description",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"name",void 0),t([s({type:Y,json:{write:!0}})],x.prototype,"originalFormat",void 0),t([s({type:Y,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"renderingFormat",void 0),t([s({type:String,json:{write:!0}})],x.prototype,"unit",void 0),t([s({type:Number,json:{write:!0}})],x.prototype,"volumeId",void 0),t([s({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],x.prototype,"type",void 0),x=t([p("esri.layers.support.VoxelVariable")],x);const Ae=x;let J=class extends c{constructor(){super(...arguments),this.values=null}};t([s({type:[Number],json:{write:!0}})],J.prototype,"values",void 0),J=t([p("esri.layers.support.VoxelIrregularSpacing")],J);const ze=J;let D=class extends c{constructor(){super(...arguments),this.scale=1,this.offset=0}};t([s({type:Number,json:{write:!0}})],D.prototype,"scale",void 0),t([s({type:Number,json:{write:!0}})],D.prototype,"offset",void 0),D=t([p("esri.layers.support.VoxelRegularSpacing")],D);const Ne=D;let m=class extends c{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}};t([s({type:ze,json:{write:!0}})],m.prototype,"irregularSpacing",void 0),t([s({type:Boolean,json:{write:!0}})],m.prototype,"isPositiveUp",void 0),t([s({type:Boolean,json:{write:!0}})],m.prototype,"isWrappedDateLine",void 0),t([s({type:String,json:{write:!0}})],m.prototype,"label",void 0),t([s({type:String,json:{write:!0}})],m.prototype,"name",void 0),t([s({type:String,json:{write:!0}})],m.prototype,"quantity",void 0),t([s({type:Ne,json:{write:!0}})],m.prototype,"regularSpacing",void 0),t([s({type:Number,json:{write:!0}})],m.prototype,"size",void 0),t([s({type:String,json:{write:!0}})],m.prototype,"unit",void 0),m=t([p("esri.layers.support.VoxelDimension")],m);const ke=m;let E=class extends c{constructor(){super(...arguments),this.id=0,this.dimensions=null}getZDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let r=2;r<4;++r)if(this.dimensions[r].size>0)return r;return-1}isVolumeValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&this.getZDimension()!==-1}};t([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"id",void 0),t([s({type:[ke],json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"dimensions",void 0),E=t([p("esri.layers.support.VoxelVolume")],E);const De=E;var Q;let M=Q=class extends c{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const r=new Q;return r.apronWidth===this.apronWidth&&r.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};t([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"apronWidth",void 0),t([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"brickSize",void 0),t([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"maxLodLevel",void 0),t([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"nodeSize",void 0),M=Q=t([p("esri.layers.support.VoxelVolumeIndex")],M);const Ee=M,G=K.getLogger(" esri.layers.VoxelLayer");let u=class extends Ce(ye(ve(ge(_e(me(be(xe))))))){constructor(r){super(r),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=new d,this.style=null,this.opacity=1,this.variables=new d,this.volumes=new d,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this._dbgFlags=new Set,this._handles=new we,this.version={major:Number.NaN,minor:Number.NaN,versionString:""}}set url(r){this._set("url",fe(r,G))}destroy(){this._handles=Se(this._handles)}dbg(r,e){this._dbgFlags.has(r)&&(r===3?G.error(e):G.warn(e))}load(r){const e=b(r)?r.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},r).catch(Ve).then(()=>this._fetchService(e)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(i),Promise.resolve(this)}getConfiguration(){this._handles.add([T(()=>this._getRenderMode(),e=>this._pushRenderModeToWasm(e)),T(()=>this._getCurrentVariableId(),e=>this._pushCurrentVariableIdToWasm(e)),T(()=>this._getDynamicSections(),e=>this._pushDynamicSectionsToWasm(e)),T(()=>this._getSlices(),e=>this._pushSlicesToWasm(e)),T(()=>this._getSections(),e=>this._pushSectionsToWasm(e))]);const r={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:this.style};return r.index&&this.index.isValid()?JSON.stringify(r):""}readVersion(r,e){return super.parseVersionString(r)}_getSections(){const r=[];for(const e of this.sections)r.push(new te({enabled:e.enabled,href:e.href,id:e.id,label:e.label,normal:e.normal,point:e.point,sizeInPixel:e.sizeInPixel,slices:e.slices,timeId:e.timeId,variableId:e.variableId}));return r}_pushSectionsToWasm(r){this.dbg(2,"VoxelLayer._pushSectionsToWasm() called"),f.getInstance().setLayerStaticSections(this,r)||this.dbg(3,"VoxelLayer._pushSectionsToWasm() failed!")}_isPlaneValid(r,e,i){if(!r.point||!Array.isArray(r.point)||r.point.length!==3||!r.normal||!Array.isArray(r.normal)||r.normal.length!==3)return!1;for(let l=0;l<3;++l){const a=r.point[l];if(a<0||a>=i[e[l]].size)return!1}const n=je(r.normal[0],r.normal[1],r.normal[2]);Te(n,n);const o=1e-6;return!(Math.abs(n[0])+Math.abs(n[1])+Math.abs(n[2])<o)&&(r.normal[0]=n[0],r.normal[1]=n[1],r.normal[2]=n[2],!0)}getVariableStyle(r){let e=-1;if(e=b(r)?r:this._getCurrentVariableId(),!(this!=null&&this.style.variableStyles)||e===-1)return null;const i=this.style.variableStyles.findIndex(n=>n.variableId===e);return i<0?null:this.style.variableStyles.getItemAt(i)}getVariable(r){let e=-1;if(e=b(r)?r:this._getCurrentVariableId(),!this.variables||e===-1)return null;const i=this.variables.findIndex(n=>n.id===e);return i<0?null:this.variables.getItemAt(i)}_getVolume(r){const e=this.getVariable(r);return b(e)?this.volumes.find(({id:i})=>i===e.volumeId):null}_getVolumeStyle(r){const e=this.getVariable(r);return b(e)?this.style.volumeStyles.find(({volumeId:i})=>i===e.volumeId):null}_getSlices(){const r=[],e=this._getVolume(null);if(!b(e)||!e.isVolumeValid())return r;const i=this._getVolumeStyle(null);if(!b(i))return r;for(const n of i.slices)this._isPlaneValid(n,[0,1,e.getZDimension()],e.dimensions)?r.push(new B({enabled:n.enabled,label:n.label,point:n.point,normal:n.normal})):r.push(new B({enabled:!1,label:"invalid",point:n.point,normal:n.normal}));return r}_pushSlicesToWasm(r){this.dbg(2,"VoxelLayer._pushSlicesToWasm() called!"),f.getInstance().setLayerSlices(this,r)||this.dbg(3,"VoxelLayer._pushSlicesToWasm() failed!")}_getDynamicSections(){const r=[],e=this._getVolume(null);if(!b(e)||!e.isVolumeValid())return r;const i=this._getVolumeStyle(null);if(!b(i))return r;for(const n of i.dynamicSections)this._isPlaneValid(n,[0,1,e.getZDimension()],e.dimensions)?r.push(new Z({enabled:n.enabled,label:n.label,point:n.point,normal:n.normal})):r.push(new Z({enabled:!1,label:"invalid",point:n.point,normal:n.normal}));return r}_pushDynamicSectionsToWasm(r){this.dbg(2,"VoxelLayer._pushDynamicSectionsToWasm() called!"),f.getInstance().setLayerDynamicSections(this,r)||this.dbg(3,"VoxelLayer._updateDynamicSections() failed!")}_getCurrentVariableId(){return this.style?this.style.currentVariableId:-1}_pushCurrentVariableIdToWasm(r){this.dbg(2,"VoxelLayer._pushCurrentVariableIdToWasm() called!"),f.getInstance().setLayerCurrentVariable(this,r)||this.dbg(3,"VoxelLayer._pushCurrentVariableIdToWasm() failed!")}_getRenderMode(){return this.style?this.style.renderMode:"volume"}_pushRenderModeToWasm(r){this.dbg(2,"VoxelLayer._pushRenderModeToWasm() called!"),f.getInstance().setLayerRenderMode(this,r)||this.dbg(3,"VoxelLayer.setLayerRenderMode() failed!")}};t([s(Re)],u.prototype,"popupEnabled",void 0),t([s({type:["Voxel"]})],u.prototype,"operationalLayerType",void 0),t([s(Le)],u.prototype,"legendEnabled",void 0),t([s({json:{write:!0}})],u.prototype,"title",void 0),t([s(We)],u.prototype,"url",null),t([s({type:d.ofType(te),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],u.prototype,"sections",void 0),t([s({type:Fe,json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],u.prototype,"style",void 0),t([s({type:["show","hide"]})],u.prototype,"listMode",void 0),t([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),t([s({type:d.ofType(Ae)})],u.prototype,"variables",void 0),t([s({type:d.ofType(De)})],u.prototype,"volumes",void 0),t([s({type:Ee})],u.prototype,"index",void 0),t([s({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],u.prototype,"minScale",void 0),t([s({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],u.prototype,"maxScale",void 0),t([s({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),t([s({readOnly:!0,json:{name:"serviceVersion"}})],u.prototype,"version",void 0),t([ee("service","version")],u.prototype,"readVersion",null),u=t([p("esri.layers.VoxelLayer")],u);const Oe=u;export{Oe as default};
