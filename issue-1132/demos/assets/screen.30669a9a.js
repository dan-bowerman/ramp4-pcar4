import{f4 as O,ev as c,ew as b,ey as a,eD as o,eB as i,eK as p,eC as r,eF as I,fj as N,eM as T,eN as A,eZ as k,eI as F,eJ as z,fK as P,eE as B,eG as C,eY as U,eP as y,eA as v,eH as L,fq as q,fL as G,fM as j,f0 as Y,fA as u,eT as _,ex as g,ez as h,eW as V}from"./main.a76a9de0.js";class W{layerSource=null;url="";fileData=null;typeSelection="";layerInfo={config:null,configOptions:[]};step=n.UPLOAD}var n=(e=>(e[e.UPLOAD=0]="UPLOAD",e[e.FORMAT=1]="FORMAT",e[e.CONFIGURE=2]="CONFIGURE",e))(n||{});const H={},K={goToStep:(e,t)=>{switch(e.state.step){case n.UPLOAD:t===n.UPLOAD?e.commit("SET_URL",""):t===n.FORMAT&&e.commit("SET_STEP",n.FORMAT);break;case n.FORMAT:t===n.UPLOAD?(e.state.fileData&&(e.commit("SET_URL",""),e.commit("SET_FILE_DATA",null)),e.commit("SET_TYPE_SELECTION",""),e.commit("SET_STEP",n.UPLOAD)):t===n.CONFIGURE&&e.commit("SET_STEP",n.CONFIGURE);break;case n.CONFIGURE:t===n.UPLOAD?(e.commit("SET_URL",""),e.commit("SET_TYPE_SELECTION",""),e.commit("SET_FILE_DATA",null),e.commit("SET_LAYER_INFO",{config:null,configOptions:[]}),e.commit("SET_STEP",n.UPLOAD)):t===n.FORMAT&&(e.commit("SET_LAYER_INFO",{config:null,configOptions:[]}),e.commit("SET_STEP",n.FORMAT));break}}},J={};var f=(e=>(e.layerSource="wizard/layerSource",e.url="wizard/url",e.typeSelection="wizard/typeSelection",e.fileData="wizard/fileData",e.layerInfo="wizard/layerInfo",e.step="wizard/step",e.goToStep="wizard/goToStep",e))(f||{});function lt(){const e=new W;return{namespaced:!0,state:e,getters:{...H},actions:{...K,...O.actions(e)},mutations:{...J,...O.mutations(e)}}}const Z=c({name:"WizardFormFooterV",props:{disabled:{type:Boolean,default:!0}}}),Q={class:"flex justify-end mb-20"},X=["disabled"];function x(e,t,d,m,S,w){return a(),o("div",Q,[i("button",{class:"hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",type:"button",onClick:t[0]||(t[0]=l=>e.$emit("cancel"))},p(e.$t("wizard.step.cancel")),1),i("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",type:"button",disabled:e.disabled,onClick:t[1]||(t[1]=l=>e.$emit("submit"))},p(e.$t("wizard.step.continue")),9,X)])}var ee=b(Z,[["render",x],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/form-footer.vue"]]);const te=c({name:"WizardInputV",props:{defaultOption:{type:Boolean,default:!1},formatError:{type:Boolean,default:!1},failureError:{type:Boolean,default:!1},help:{type:[String,Boolean],default:!1},label:{type:[String,Boolean],default:!1},modelValue:{type:[String,Array],default:""},name:{type:[String,Boolean],default:!1},options:{type:Array,default:[]},size:{type:[Number,Boolean],default:!1},multiple:{type:Boolean,default:!1},type:{type:String,default:"text"},url:{type:[String,Boolean],default:!1},validation:{type:Boolean,default:!1},validationMessages:{type:Object}},created(){if(this.defaultOption&&this.modelValue===""&&this.options.length){let e=this.options[0].value;if(this.name==="latField"){const t=new RegExp(/^(y|lat.*)$/i);e=this.options.find(m=>t.test(m.label))?.value||e}else if(this.name==="longField"){const t=new RegExp(/^(x|long.*)$/i);e=this.options.find(m=>t.test(m.label))?.value||e}this.$emit("update:modelValue",e)}},data(){return{valid:!1,urlError:!1,layerEntriesError:!1,selected:[]}},methods:{validUrl(e){let t;try{t=new URL(e)}catch{return this.valid=!1,!1}t.protocol==="http:"||t.protocol==="https:"?this.valid=!0:this.valid=!1},checkMultiSelectError(e){e&&e.length>0?this.layerEntriesError=!1:this.layerEntriesError=!0}}}),ie=e=>(F("data-v-123e95fc"),e=e(),z(),e),le={class:"input-wrapper mb-12"},ae={key:0},re={class:"text-base font-bold"},oe={class:"relative py-8 mb-0.5 h-75","data-type":"file"},se=ie(()=>i("div",{class:"upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center"},[i("svg",{class:"w-30 h-30 m-auto",fill:"#a8a8a8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 58"},[i("path",{d:"M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"}),i("polygon",{points:"27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"})])],-1)),ne={class:"text-gray-400 text-xs mb-1"},de={key:1},ue={class:"text-base font-bold"},pe={class:"mb-0.5","data-type":"url"},fe=["value"],me={key:0,class:"text-red-900 text-xs"},ye={key:2},he={class:"text-base font-bold"},ve={class:"relative mb-0.5","data-type":"select"},ge={key:0},ce=["value"],be=["value"],Se={class:"text-gray-400 text-xs mb-1"},we={key:0,class:"text-red-900 text-xs"},$e={key:1},Ee=["size","value"],Ie=["value"],Te={key:0,class:"text-red-900 text-xs"},Fe={key:1,class:"text-red-900 text-xs"},ze={key:3},Oe={class:"text-base font-bold"},Ae={class:"relative mb-0.5"},Ce=["value"],Ve={key:0,class:"text-red-900 text-xs"};function ke(e,t,d,m,S,w){return a(),o("div",le,[e.type==="file"?(a(),o("div",ae,[i("label",re,p(e.label),1),i("div",oe,[i("input",{class:"absolute w-full opacity-0 inset-0 cursor-pointer",type:"file",name:"file",accept:".geojson,.json,.csv,.zip",onInput:t[0]||(t[0]=l=>{e.$emit("upload",l.target.files[0]),l.target.value=null})},null,32),se]),i("div",ne,p(e.help),1)])):e.type==="url"?(a(),o("div",de,[i("label",ue,p(e.label),1),i("div",pe,[i("input",{class:"text-sm w-full border-solid border-gray-300 mb-5 leading-5 focus:border-green-500",type:"url",name:"url",value:e.modelValue,onChange:t[1]||(t[1]=l=>e.valid?e.urlError=!1:e.urlError=!0),onInput:t[2]||(t[2]=l=>{e.validUrl(l.target.value),e.$emit("link",l.target.value,e.valid),e.urlError=!1})},null,40,fe)]),e.urlError?(a(),o("div",me,p(e.modelValue?e.validationMessages.invalid:e.validationMessages.required),1)):r("v-if",!0)])):e.type==="select"?(a(),o("div",ye,[i("label",he,p(e.label),1),i("div",ve,[e.multiple?(a(),o("div",ge,[I(i("select",{class:"block border-solid border-gray-300 w-full p-3 overflow-y-auto",multiple:"",value:e.modelValue,"onUpdate:modelValue":t[3]||(t[3]=l=>e.selected=l),onChange:t[4]||(t[4]=l=>{e.$emit("select",e.selected),e.checkMultiSelectError(e.selected)})},[(a(!0),o(T,null,A(e.options,l=>(a(),o("option",{class:"p-6",key:l,value:l.value},p(l.label),9,be))),128))],40,ce),[[N,e.selected]]),i("div",Se,p(e.help),1),e.validation&&e.layerEntriesError?(a(),o("div",we,p(e.validationMessages.required),1)):r("v-if",!0)])):(a(),o("div",$e,[i("select",{class:k(["block border-solid border-gray-300 w-full p-3 overflow-y-auto",e.size&&"configure-select"]),size:e.size?e.size:null,value:e.modelValue,onInput:t[5]||(t[5]=l=>e.size?e.$emit("select",l.target.value):e.$emit("update:modelValue",l.target.value))},[(a(!0),o(T,null,A(e.options,l=>(a(),o("option",{class:"p-6",key:l,value:l.value},p(l.label),9,Ie))),128))],42,Ee),e.validation&&e.formatError?(a(),o("div",Te,p(e.validationMessages.invalid),1)):r("v-if",!0),e.validation&&e.failureError?(a(),o("div",Fe,p(e.validationMessages.failure),1)):r("v-if",!0)]))])])):(a(),o("div",ze,[i("label",Oe,p(e.label),1),i("div",Ae,[i("input",{class:"border-solid border-gray-300 p-3 w-full",type:"text",value:e.modelValue,onChange:t[6]||(t[6]=l=>e.$emit("text",l.target.value))},null,40,Ce)]),e.validation&&!e.modelValue?(a(),o("div",Ve,p(e.validationMessages.required),1)):r("v-if",!0)]))])}var Ue=b(te,[["render",ke],["__scopeId","data-v-123e95fc"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/form-input.vue"]]);const Le=c({name:"WizardStepperItemV",props:{title:{type:String,required:!0},summary:{type:String}},data(){return{index:-1}},setup(){return{stepper:P("stepper")}},mounted(){this.index=this.stepper.numSteps++},methods:{done(){return this.stepper.activeIndex>this.index},active(){return this.stepper.activeIndex===this.index}}}),Me=e=>(F("data-v-37be0d4a"),e=e(),z(),e),Re={class:"step relative flex flex-col px-12 overflow-y-hidden"},De={class:"stepper-header flex pb-24"},Ne=Me(()=>i("div",{class:"flex-none stepper-check w-24 h-24 text-gray-400"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},[i("g",{id:"check_circle"},[i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})])])],-1)),Pe={class:"flex flex-col overflow-hidden"},Be={class:"pl-12 flex items-center text-md"},qe={class:"pl-12 text-xs transition-opacity duration-1000 ease-out"},Ge={class:"pl-36"};function je(e,t,d,m,S,w){const l=B("truncate");return a(),o("div",Re,[i("div",De,[r(" step number "),e.done()?(a(),o(T,{key:1},[r(" show checkmark if done "),Ne],2112)):(a(),o("div",{key:0,class:k(["w-24 h-24 bg-gray-400 rounded-full flex justify-center items-center text-white text-xs font-semibold",{"bg-blue-500":e.active}])},p(e.index+1),3)),i("div",Pe,[r(" step title "),i("div",Be,p(e.title),1),r(" step summary "),I((a(),o("div",qe,[U(p(e.summary),1)])),[[C,!e.active()],[l]])])]),y(q,{name:"step",mode:"out-in"},{default:v(()=>[I(i("div",Ge,[r(" step content "),L(e.$slots,"default",{},void 0,!0)],512),[[C,e.active()]])]),_:3})])}var Ye=b(Le,[["render",je],["__scopeId","data-v-37be0d4a"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/stepper-item.vue"]]);const _e=c({name:"WizardStepperV",props:{activeStep:{type:Number,default:0}},data(){return{watchers:[]}},setup(e){const t=G({activeIndex:e.activeStep,numSteps:0});return j("stepper",t),{stepper:t}},created(){this.watchers.push(this.$watch("activeStep",()=>{this.stepper.activeIndex=this.activeStep}))},beforeUnmount(){this.watchers.forEach(e=>e())}}),We={class:"py-12"};function He(e,t,d,m,S,w){return a(),o("div",We,[L(e.$slots,"default")])}var Ke=b(_e,[["render",He],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/stepper.vue"]]);const Je=c({name:"WizardScreenV",props:{panel:Y},components:{"wizard-form-footer":ee,"wizard-input":Ue,"stepper-item":Ye,stepper:Ke},data(){return{layerSource:this.get(f.layerSource),step:this.get(f.step),goToStep:this.call(f.goToStep),formulateFile:{},formatError:!1,failureError:!1,goNext:!1,finishStep:!1,serviceTypeOptions:[{value:u.FEATURE,label:this.$t("wizard.layerType.esriFeature")},{value:u.MAPIMAGE,label:this.$t("wizard.layerType.esriMapImage")},{value:u.TILE,label:this.$t("wizard.layerType.esriTile")},{value:u.IMAGERY,label:this.$t("wizard.layerType.esriImagery")},{value:u.WMS,label:this.$t("wizard.layerType.ogcWms")},{value:u.WFS,label:this.$t("wizard.layerType.ogcWfs")}],fileTypeOptions:[{value:u.GEOJSON,label:this.$t("wizard.fileType.geojson")},{value:u.SHAPEFILE,label:this.$t("wizard.fileType.shapefile")},{value:u.CSV,label:this.$t("wizard.fileType.csv")}]}},computed:{url:{get(){return this.$store.get(f.url)},set(e){this.$store.set(f.url,e)}},fileData:{get(){return this.$store.get(f.fileData)},set(e){this.$store.set(f.fileData,e)}},typeSelection:{get(){return this.$store.get(f.typeSelection)},set(e){this.$store.set(f.typeSelection,e)}},layerInfo:{get(){return this.$store.get(f.layerInfo)},set(e){this.$store.set(f.layerInfo,e)}},IsCorsRequired(){let e=this.$iApi.geo.proxy!=="";switch(this.typeSelection){case u.FEATURE:case u.MAPIMAGE:case u.TILE:case u.IMAGERY:return!e;case u.WFS:return!0;case u.WMS:return!e;case u.GEOJSON:case u.SHAPEFILE:case u.CSV:return!!(this.isFileLayer()&&!this.fileData);default:return!1}}},errorCaptured(e,t,d){return(this.step===n.FORMAT||this.step===n.CONFIGURE)&&(this.formatError=!0,this.goToStep(n.FORMAT)),!1},methods:{async uploadFile(e,t){const d=new FileReader;d.onerror=()=>{this.formulateFile={}},d.onload=m=>{this.fileData=d.result,this.url=e.name,this.onUploadContinue(m)},d.readAsArrayBuffer(e)},onUploadContinue(e){e?.preventDefault(),this.fileData&&setTimeout(()=>{this.formulateFile={}},500),this.typeSelection=this.layerSource.guessFormatFromURL(this.url),this.goToStep(n.FORMAT)},async onSelectContinue(){this.failureError=!1;try{this.layerInfo=this.isFileLayer()?await this.layerSource.fetchFileInfo(this.url,this.typeSelection,this.fileData):await this.layerSource.fetchServiceInfo(this.url,this.typeSelection)}catch{this.failureError=!0;return}const e=this.typeSelection===u.FEATURE&&!(this.layerInfo&&this.layerInfo.fields);if(!this.layerInfo||e){this.formatError=!0,this.layerInfo={config:null,configOptions:[]};return}this.goToStep(n.CONFIGURE),this.layerInfo.configOptions.includes("layerEntries")?this.finishStep=!1:this.finishStep=!0},async onConfigureContinue(e){const t=Object.assign(this.layerInfo.config,e),d=this.$iApi.geo.layer.createLayer(t);await d.initiate(),d.userAdded=!0,this.$iApi.event.emit(_.USER_LAYER_ADDED,d),this.$iApi.geo.map.addLayer(d),this.goNext=!1,this.goToStep(n.UPLOAD)},fieldOptions(){return this.layerInfo.fields.map(e=>({value:e.name,label:e.alias||e.name}))},latLonOptions(e){},sublayerOptions(){return this.layerInfo.layers.map((e,t)=>({label:`${e.indent}${e.name}`,value:this.typeSelection===u.MAPIMAGE?{index:e.id,state:{opacity:1,visibility:!0}}:{id:e.id},id:`${e.indent}${e.name}-${t}`}))},isFileLayer(){return this.fileData||this.url.match(/\.(zip|csv|json|geojson)$/)},setError(e,t,d){this.$formulate.handle({inputErrors:{[t]:[d]},formErrors:[]},e)},updateFile(e){this.formulateFile=e,this.uploadFile(e),this.url=""},updateUrl(e,t){this.url=e.trim(),t?this.goNext=!0:this.goNext=!1},updateTypeSelection(e){this.typeSelection=e,this.formatError=!1},updateLayerName(e){this.layerInfo.config.name=e;const t=this.layerInfo.config.layerEntries;(t?e&&t.length>0:e)?this.finishStep=!0:this.finishStep=!1},updateLayerEntries(e){this.layerInfo.config.layerEntries=e,e.length>0&&this.layerInfo.config.name?this.finishStep=!0:this.finishStep=!1}}}),M=e=>(F("data-v-c9548632"),e=e(),z(),e),Ze=M(()=>i("span",{class:"block text-center mb-10"},"or",-1)),Qe={key:0,class:"inline-flex items-center mb-10"},Xe=M(()=>i("svg",{class:"inline-block fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[i("path",{d:"M0 0h24v24H0z",fill:"none"}),i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)),xe={class:"px-5 text-xs"};function et(e,t,d,m,S,w){const l=g("wizard-input"),$=g("wizard-form-footer"),E=g("stepper-item"),R=g("stepper"),D=g("panel-screen");return a(),h(D,{panel:e.panel},{header:v(()=>[U(p(e.$t("wizard.title")),1)]),content:v(()=>[y(R,{activeStep:e.step},{default:v(()=>[r(" Upload data wizard step "),y(E,{title:e.$t("wizard.upload.title"),summary:e.url},{default:v(()=>[i("form",{name:"upload",onSubmit:t[2]||(t[2]=(...s)=>e.onUploadContinue&&e.onUploadContinue(...s))},[r(" Upload a file "),y(l,{type:"file",name:"file",label:e.$t("wizard.upload.file.label"),help:e.$t("wizard.upload.file.help"),onUpload:e.updateFile},null,8,["label","help","onUpload"]),Ze,r(" Provide layer URL "),y(l,{type:"url",name:"url",modelValue:e.url,"onUpdate:modelValue":t[0]||(t[0]=s=>e.url=s),label:e.$t("wizard.upload.url.label"),onLink:e.updateUrl,validation:!0,"validation-messages":{required:e.$t("wizard.upload.url.error.required"),invalid:e.$t("wizard.upload.url.error.url")}},null,8,["modelValue","label","onLink","validation-messages"]),y($,{onSubmit:e.onUploadContinue,onCancel:t[1]||(t[1]=()=>{e.goNext=!1,e.goToStep(0)}),disabled:!e.goNext},null,8,["onSubmit","disabled"])],32)]),_:1},8,["title","summary"]),r(" Select format wizard step "),y(E,{title:e.$t("wizard.format.title"),summary:e.typeSelection},{default:v(()=>[i("form",{name:"format",onSubmit:t[6]||(t[6]=(...s)=>e.onSelectContinue&&e.onSelectContinue(...s))},[r(" List of file/service types based on layer "),r(" Display CORS required warning if needed for this configuration "),e.IsCorsRequired?(a(),o("div",Qe,[Xe,i("span",xe,p(e.$t("wizard.format.info.cors")),1)])):r("v-if",!0),y(l,{type:"select",name:"type",modelValue:e.typeSelection,"onUpdate:modelValue":t[3]||(t[3]=s=>e.typeSelection=s),onSelect:e.updateTypeSelection,size:e.isFileLayer()?e.fileTypeOptions.length:e.serviceTypeOptions.length,label:e.isFileLayer()?e.$t("wizard.format.type.file"):e.$t("wizard.format.type.service"),options:e.isFileLayer()?e.fileTypeOptions:e.serviceTypeOptions,formatError:e.formatError,failureError:e.failureError,validation:!0,"validation-messages":{required:e.$t("wizard.format.type.error.required"),invalid:e.$t("wizard.format.type.error.invalid"),failure:`${e.$t("wizard.format.type.error.failure")}.${e.IsCorsRequired?" "+e.$t("wizard.format.warn.cors")+".":""}`},onKeydown:t[4]||(t[4]=V(()=>{},["stop"]))},null,8,["modelValue","onSelect","size","label","options","formatError","failureError","validation-messages"]),y($,{onSubmit:e.onSelectContinue,onCancel:t[5]||(t[5]=()=>{e.formatError=!1,e.failureError=!1,e.url?e.goNext=!0:e.goNext=!1,e.goToStep(0)}),disabled:!1},null,8,["onSubmit"])],32)]),_:1},8,["title","summary"]),r(" Configure layer wizard step "),y(E,{title:e.$t("wizard.configure.title")},{default:v(()=>[i("form",{name:"configure",onSubmit:t[15]||(t[15]=(...s)=>e.onConfigureContinue&&e.onConfigureContinue(...s))},[e.layerInfo.configOptions.includes("name")?(a(),h(l,{key:0,type:"text",name:"name",modelValue:e.layerInfo.config.name,"onUpdate:modelValue":t[7]||(t[7]=s=>e.layerInfo.config.name=s),onText:e.updateLayerName,label:e.$t("wizard.configure.name.label"),validation:!0,"validation-messages":{required:e.$t("wizard.configure.name.error.required")}},null,8,["modelValue","onText","label","validation-messages"])):r("v-if",!0),e.layerInfo.configOptions.includes("nameField")?(a(),h(l,{key:1,type:"select",name:"nameField",modelValue:e.layerInfo.config.nameField,"onUpdate:modelValue":t[8]||(t[8]=s=>e.layerInfo.config.nameField=s),label:e.$t("wizard.configure.nameField.label"),defaultOption:!0,options:e.fieldOptions()},null,8,["modelValue","label","options"])):r("v-if",!0),e.layerInfo.configOptions.includes("tooltipField")?(a(),h(l,{key:2,type:"select",name:"tooltipField",modelValue:e.layerInfo.config.tooltipField,"onUpdate:modelValue":t[9]||(t[9]=s=>e.layerInfo.config.tooltipField=s),label:e.$t("wizard.configure.tooltipField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):r("v-if",!0),e.layerInfo.configOptions.includes("latField")?(a(),h(l,{key:3,type:"select",name:"latField",modelValue:e.layerInfo.config.latField,"onUpdate:modelValue":t[10]||(t[10]=s=>e.layerInfo.config.latField=s),defaultOption:!0,label:e.$t("wizard.configure.latField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):r("v-if",!0),e.layerInfo.configOptions.includes("longField")?(a(),h(l,{key:4,type:"select",name:"longField",modelValue:e.layerInfo.config.longField,"onUpdate:modelValue":t[11]||(t[11]=s=>e.layerInfo.config.longField=s),defaultOption:!0,label:e.$t("wizard.configure.longField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):r("v-if",!0),r(" For map image layers "),e.layerInfo.configOptions.includes("layerEntries")?(a(),h(l,{key:5,type:"select",name:"layerEntries",modelValue:e.layerInfo.config.layerEntries,"onUpdate:modelValue":t[12]||(t[12]=s=>e.layerInfo.config.layerEntries=s),onSelect:e.updateLayerEntries,label:e.$t("wizard.configure.layerEntries.label"),help:e.$t("wizard.configure.layerEntries.help"),options:e.sublayerOptions(),multiple:!0,validation:!0,"validation-messages":{required:e.$t("wizard.configure.layerEntries.error.required")},onKeydown:t[13]||(t[13]=V(()=>{},["stop"]))},null,8,["modelValue","onSelect","label","help","options","validation-messages"])):r("v-if",!0),y($,{onSubmit:e.onConfigureContinue,onCancel:t[14]||(t[14]=s=>e.goToStep(1)),disabled:!e.finishStep},null,8,["onSubmit","disabled"])],32)]),_:1},8,["title"])]),_:1},8,["activeStep"])]),_:1},8,["panel"])}var tt=b(Je,[["render",et],["__scopeId","data-v-c9548632"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/screen.vue"]]),at=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{tt as W,at as s,lt as w};
