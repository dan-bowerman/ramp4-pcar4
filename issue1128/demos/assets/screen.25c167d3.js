import{f4 as O,ev as c,ew as b,ey as a,eD as d,eB as i,eK as u,eC as r,eF as I,fj as N,eM as T,eN as V,eZ as k,eI as F,eJ as z,fK as D,eE as P,eG as U,eY as C,eP as y,eA as h,eH as L,fq as B,fL as j,fM as q,f0 as G,fA as m,eT as Y,ex as g,ez as v,eW as A}from"./main.d79ca98c.js";class _{layerSource=null;url="";fileData=null;typeSelection="";layerInfo={config:null,configOptions:[]};step=s.UPLOAD}var s=(e=>(e[e.UPLOAD=0]="UPLOAD",e[e.FORMAT=1]="FORMAT",e[e.CONFIGURE=2]="CONFIGURE",e))(s||{});const K={},W={goToStep:(e,t)=>{switch(e.state.step){case s.UPLOAD:t===s.UPLOAD?e.commit("SET_URL",""):t===s.FORMAT&&e.commit("SET_STEP",s.FORMAT);break;case s.FORMAT:t===s.UPLOAD?(e.state.fileData&&(e.commit("SET_URL",""),e.commit("SET_FILE_DATA",null)),e.commit("SET_TYPE_SELECTION",""),e.commit("SET_STEP",s.UPLOAD)):t===s.CONFIGURE&&e.commit("SET_STEP",s.CONFIGURE);break;case s.CONFIGURE:t===s.UPLOAD?(e.commit("SET_URL",""),e.commit("SET_TYPE_SELECTION",""),e.commit("SET_FILE_DATA",null),e.commit("SET_LAYER_INFO",{config:null,configOptions:[]}),e.commit("SET_STEP",s.UPLOAD)):t===s.FORMAT&&(e.commit("SET_LAYER_INFO",{config:null,configOptions:[]}),e.commit("SET_STEP",s.FORMAT));break}}},Z={};var p=(e=>(e.layerSource="wizard/layerSource",e.url="wizard/url",e.typeSelection="wizard/typeSelection",e.fileData="wizard/fileData",e.layerInfo="wizard/layerInfo",e.step="wizard/step",e.goToStep="wizard/goToStep",e))(p||{});function xe(){const e=new _;return{namespaced:!0,state:e,getters:{...K},actions:{...W,...O.actions(e)},mutations:{...Z,...O.mutations(e)}}}const H=c({name:"WizardFormFooterV",props:{disabled:{type:Boolean,default:!0}}}),J={class:"flex justify-end mb-20"},Q=["disabled"];function X(e,t,n,f,S,w){return a(),d("div",J,[i("button",{class:"hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",type:"button",onClick:t[0]||(t[0]=l=>e.$emit("cancel"))},u(e.$t("wizard.step.cancel")),1),i("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",type:"button",disabled:e.disabled,onClick:t[1]||(t[1]=l=>e.$emit("submit"))},u(e.$t("wizard.step.continue")),9,Q)])}var x=b(H,[["render",X],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/form-footer.vue"]]);const ee=c({name:"WizardInputV",props:{defaultOption:{type:Boolean,default:!1},formatError:{type:Boolean,default:!1},help:{type:[String,Boolean],default:!1},label:{type:[String,Boolean],default:!1},modelValue:{type:[String,Array],default:""},name:{type:[String,Boolean],default:!1},options:{type:Array,default:[]},size:{type:[Number,Boolean],default:!1},multiple:{type:Boolean,default:!1},type:{type:String,default:"text"},url:{type:[String,Boolean],default:!1},validation:{type:Boolean,default:!1},validationMessages:{type:Object}},created(){if(this.defaultOption&&this.modelValue===""&&this.options.length){let e=this.options[0].value;if(this.name==="latField"){const t=new RegExp(/^(y|lat.*)$/i);e=this.options.find(f=>t.test(f.label))?.value||e}else if(this.name==="longField"){const t=new RegExp(/^(x|long.*)$/i);e=this.options.find(f=>t.test(f.label))?.value||e}this.$emit("update:modelValue",e)}},data(){return{valid:!1,urlError:!1,layerEntriesError:!1,selected:[]}},methods:{validUrl(e){let t;try{t=new URL(e)}catch{return this.valid=!1,!1}t.protocol==="http:"||t.protocol==="https:"?this.valid=!0:this.valid=!1},checkMultiSelectError(e){e&&e.length>0?this.layerEntriesError=!1:this.layerEntriesError=!0}}}),te=e=>(F("data-v-123e95fc"),e=e(),z(),e),le={class:"input-wrapper mb-12"},ie={key:0},ae={class:"text-base font-bold"},oe={class:"relative py-8 mb-0.5 h-75","data-type":"file"},se=te(()=>i("div",{class:"upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center"},[i("svg",{class:"w-30 h-30 m-auto",fill:"#a8a8a8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 58"},[i("path",{d:"M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"}),i("polygon",{points:"27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"})])],-1)),re={class:"text-gray-400 text-xs mb-1"},ne={key:1},de={class:"text-base font-bold"},ue={class:"mb-0.5","data-type":"url"},pe=["value"],fe={key:0,class:"text-red-900 text-xs"},me={key:2},ye={class:"text-base font-bold"},ve={class:"relative mb-0.5","data-type":"select"},he={key:0},ge=["value"],ce=["value"],be={class:"text-gray-400 text-xs mb-1"},Se={key:0,class:"text-red-900 text-xs"},we={key:1},$e=["size","value"],Ee=["value"],Ie={key:0,class:"text-red-900 text-xs"},Te={key:3},Fe={class:"text-base font-bold"},ze={class:"relative mb-0.5"},Oe=["value"],Ve={key:0,class:"text-red-900 text-xs"};function Ue(e,t,n,f,S,w){return a(),d("div",le,[e.type==="file"?(a(),d("div",ie,[i("label",ae,u(e.label),1),i("div",oe,[i("input",{class:"absolute w-full opacity-0 inset-0 cursor-pointer",type:"file",name:"file",accept:".geojson,.json,.csv,.zip",onInput:t[0]||(t[0]=l=>{e.$emit("upload",l.target.files[0]),l.target.value=null})},null,32),se]),i("div",re,u(e.help),1)])):e.type==="url"?(a(),d("div",ne,[i("label",de,u(e.label),1),i("div",ue,[i("input",{class:"text-sm w-full border-solid border-gray-300 mb-5 leading-5 focus:border-green-500",type:"url",name:"url",value:e.modelValue,onChange:t[1]||(t[1]=l=>e.valid?e.urlError=!1:e.urlError=!0),onInput:t[2]||(t[2]=l=>{e.validUrl(l.target.value),e.$emit("link",l.target.value,e.valid),e.urlError=!1})},null,40,pe)]),e.urlError?(a(),d("div",fe,u(e.modelValue?e.validationMessages.invalid:e.validationMessages.required),1)):r("v-if",!0)])):e.type==="select"?(a(),d("div",me,[i("label",ye,u(e.label),1),i("div",ve,[e.multiple?(a(),d("div",he,[I(i("select",{class:"block border-solid border-gray-300 w-full p-3 overflow-y-auto",multiple:"",value:e.modelValue,"onUpdate:modelValue":t[3]||(t[3]=l=>e.selected=l),onChange:t[4]||(t[4]=l=>{e.$emit("select",e.selected),e.checkMultiSelectError(e.selected)})},[(a(!0),d(T,null,V(e.options,l=>(a(),d("option",{class:"p-6",key:l,value:l.value},u(l.label),9,ce))),128))],40,ge),[[N,e.selected]]),i("div",be,u(e.help),1),e.validation&&e.layerEntriesError?(a(),d("div",Se,u(e.validationMessages.required),1)):r("v-if",!0)])):(a(),d("div",we,[i("select",{class:k(["block border-solid border-gray-300 w-full p-3 overflow-y-auto",e.size&&"configure-select"]),size:e.size?e.size:null,value:e.modelValue,onInput:t[5]||(t[5]=l=>e.size?e.$emit("select",l.target.value):e.$emit("update:modelValue",l.target.value))},[(a(!0),d(T,null,V(e.options,l=>(a(),d("option",{class:"p-6",key:l,value:l.value},u(l.label),9,Ee))),128))],42,$e),e.validation&&e.formatError?(a(),d("div",Ie,u(e.validationMessages.invalid),1)):r("v-if",!0)]))])])):(a(),d("div",Te,[i("label",Fe,u(e.label),1),i("div",ze,[i("input",{class:"border-solid border-gray-300 p-3 w-full",type:"text",value:e.modelValue,onChange:t[6]||(t[6]=l=>e.$emit("text",l.target.value))},null,40,Oe)]),e.validation&&!e.modelValue?(a(),d("div",Ve,u(e.validationMessages.required),1)):r("v-if",!0)]))])}var Ae=b(ee,[["render",Ue],["__scopeId","data-v-123e95fc"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/form-input.vue"]]);const ke=c({name:"WizardStepperItemV",props:{title:{type:String,required:!0},summary:{type:String}},data(){return{index:-1}},setup(){return{stepper:D("stepper")}},mounted(){this.index=this.stepper.numSteps++},methods:{done(){return this.stepper.activeIndex>this.index},active(){return this.stepper.activeIndex===this.index}}}),Ce=e=>(F("data-v-37be0d4a"),e=e(),z(),e),Le={class:"step relative flex flex-col px-12 overflow-y-hidden"},Me={class:"stepper-header flex pb-24"},Re=Ce(()=>i("div",{class:"flex-none stepper-check w-24 h-24 text-gray-400"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},[i("g",{id:"check_circle"},[i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})])])],-1)),Ne={class:"flex flex-col overflow-hidden"},De={class:"pl-12 flex items-center text-md"},Pe={class:"pl-12 text-xs transition-opacity duration-1000 ease-out"},Be={class:"pl-36"};function je(e,t,n,f,S,w){const l=P("truncate");return a(),d("div",Le,[i("div",Me,[r(" step number "),e.done()?(a(),d(T,{key:1},[r(" show checkmark if done "),Re],2112)):(a(),d("div",{key:0,class:k(["w-24 h-24 bg-gray-400 rounded-full flex justify-center items-center text-white text-xs font-semibold",{"bg-blue-500":e.active}])},u(e.index+1),3)),i("div",Ne,[r(" step title "),i("div",De,u(e.title),1),r(" step summary "),I((a(),d("div",Pe,[C(u(e.summary),1)])),[[U,!e.active()],[l]])])]),y(B,{name:"step",mode:"out-in"},{default:h(()=>[I(i("div",Be,[r(" step content "),L(e.$slots,"default",{},void 0,!0)],512),[[U,e.active()]])]),_:3})])}var qe=b(ke,[["render",je],["__scopeId","data-v-37be0d4a"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/stepper-item.vue"]]);const Ge=c({name:"WizardStepperV",props:{activeStep:{type:Number,default:0}},data(){return{watchers:[]}},setup(e){const t=j({activeIndex:e.activeStep,numSteps:0});return q("stepper",t),{stepper:t}},created(){this.watchers.push(this.$watch("activeStep",()=>{this.stepper.activeIndex=this.activeStep}))},beforeUnmount(){this.watchers.forEach(e=>e())}}),Ye={class:"py-12"};function _e(e,t,n,f,S,w){return a(),d("div",Ye,[L(e.$slots,"default")])}var Ke=b(Ge,[["render",_e],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/stepper.vue"]]);const We=c({name:"WizardScreenV",props:{panel:G},components:{"wizard-form-footer":x,"wizard-input":Ae,"stepper-item":qe,stepper:Ke},data(){return{layerSource:this.get(p.layerSource),step:this.get(p.step),goToStep:this.call(p.goToStep),formulateFile:{},formatError:!1,goNext:!1,finishStep:!1,serviceTypeOptions:[{value:m.FEATURE,label:this.$t("wizard.layerType.esriFeature")},{value:m.MAPIMAGE,label:this.$t("wizard.layerType.esriMapImage")},{value:m.TILE,label:this.$t("wizard.layerType.esriTile")},{value:m.IMAGERY,label:this.$t("wizard.layerType.esriImagery")},{value:m.WMS,label:this.$t("wizard.layerType.ogcWms")},{value:m.WFS,label:this.$t("wizard.layerType.ogcWfs")}],fileTypeOptions:[{value:m.GEOJSON,label:this.$t("wizard.fileType.geojson")},{value:m.SHAPEFILE,label:this.$t("wizard.fileType.shapefile")},{value:m.CSV,label:this.$t("wizard.fileType.csv")}]}},computed:{url:{get(){return this.$store.get(p.url)},set(e){this.$store.set(p.url,e)}},fileData:{get(){return this.$store.get(p.fileData)},set(e){this.$store.set(p.fileData,e)}},typeSelection:{get(){return this.$store.get(p.typeSelection)},set(e){this.$store.set(p.typeSelection,e)}},layerInfo:{get(){return this.$store.get(p.layerInfo)},set(e){this.$store.set(p.layerInfo,e)}}},errorCaptured(e,t,n){return(this.step===s.FORMAT||this.step===s.CONFIGURE)&&(this.formatError=!0,this.goToStep(s.FORMAT)),!1},methods:{async uploadFile(e,t){const n=new FileReader;n.onerror=()=>{this.formulateFile={}},n.onload=f=>{this.fileData=n.result,this.url=e.name,this.onUploadContinue(f)},n.readAsArrayBuffer(e)},onUploadContinue(e){e?.preventDefault(),this.fileData&&setTimeout(()=>{this.formulateFile={}},500),this.typeSelection=this.layerSource.guessFormatFromURL(this.url),this.goToStep(s.FORMAT)},async onSelectContinue(){this.layerInfo=this.isFileLayer()?await this.layerSource.fetchFileInfo(this.url,this.typeSelection,this.fileData):await this.layerSource.fetchServiceInfo(this.url,this.typeSelection);const e=this.typeSelection===m.FEATURE&&!(this.layerInfo&&this.layerInfo.fields);if(!this.layerInfo||e){this.formatError=!0,this.layerInfo={config:null,configOptions:[]};return}this.goToStep(s.CONFIGURE),this.layerInfo.configOptions.includes("layerEntries")?this.finishStep=!1:this.finishStep=!0},async onConfigureContinue(e){const t=Object.assign(this.layerInfo.config,e),n=this.$iApi.geo.layer.createLayer(t);await n.initiate(),n.userAdded=!0,this.$iApi.event.emit(Y.USER_LAYER_ADDED,n),this.$iApi.geo.map.addLayer(n),this.goNext=!1,this.goToStep(s.UPLOAD)},fieldOptions(){return this.layerInfo.fields.map(e=>({value:e.name,label:e.alias||e.name}))},latLonOptions(e){},sublayerOptions(){return this.layerInfo.layers.map((e,t)=>({label:`${e.indent}${e.name}`,value:this.typeSelection===m.MAPIMAGE?{index:e.id,state:{opacity:1,visibility:!0}}:{id:e.id},id:`${e.indent}${e.name}-${t}`}))},isFileLayer(){return this.fileData||this.url.match(/\.(zip|csv|json|geojson)$/)},setError(e,t,n){this.$formulate.handle({inputErrors:{[t]:[n]},formErrors:[]},e)},updateFile(e){this.formulateFile=e,this.uploadFile(e)},updateUrl(e,t){this.url=e.trim(),t?this.goNext=!0:this.goNext=!1},updateTypeSelection(e){this.typeSelection=e,this.formatError=!1},updateLayerName(e){this.layerInfo.config.name=e;const t=this.layerInfo.config.layerEntries;(t?e&&t.length>0:e)?this.finishStep=!0:this.finishStep=!1},updateLayerEntries(e){this.layerInfo.config.layerEntries=e,e.length>0&&this.layerInfo.config.name?this.finishStep=!0:this.finishStep=!1}}}),Ze=e=>(F("data-v-c9548632"),e=e(),z(),e),He=Ze(()=>i("span",{class:"block text-center mb-10"},"or",-1));function Je(e,t,n,f,S,w){const l=g("wizard-input"),$=g("wizard-form-footer"),E=g("stepper-item"),M=g("stepper"),R=g("panel-screen");return a(),v(R,{panel:e.panel},{header:h(()=>[C(u(e.$t("wizard.title")),1)]),content:h(()=>[y(M,{activeStep:e.step},{default:h(()=>[r(" Upload data wizard step "),y(E,{title:e.$t("wizard.upload.title"),summary:e.url},{default:h(()=>[i("form",{name:"upload",onSubmit:t[2]||(t[2]=(...o)=>e.onUploadContinue&&e.onUploadContinue(...o))},[r(" Upload a file "),y(l,{type:"file",name:"file",label:e.$t("wizard.upload.file.label"),help:e.$t("wizard.upload.file.help"),onUpload:e.updateFile},null,8,["label","help","onUpload"]),He,r(" Provide layer URL "),y(l,{type:"url",name:"url",modelValue:e.url,"onUpdate:modelValue":t[0]||(t[0]=o=>e.url=o),label:e.$t("wizard.upload.url.label"),onLink:e.updateUrl,validation:!0,"validation-messages":{required:e.$t("wizard.upload.url.error.required"),invalid:e.$t("wizard.upload.url.error.url")}},null,8,["modelValue","label","onLink","validation-messages"]),y($,{onSubmit:e.onUploadContinue,onCancel:t[1]||(t[1]=()=>{e.goNext=!1,e.goToStep(0)}),disabled:!e.goNext},null,8,["onSubmit","disabled"])],32)]),_:1},8,["title","summary"]),r(" Select format wizard step "),y(E,{title:e.$t("wizard.format.title"),summary:e.typeSelection},{default:h(()=>[i("form",{name:"format",onSubmit:t[6]||(t[6]=(...o)=>e.onSelectContinue&&e.onSelectContinue(...o))},[r(" List of file/service types based on layer "),y(l,{type:"select",name:"type",modelValue:e.typeSelection,"onUpdate:modelValue":t[3]||(t[3]=o=>e.typeSelection=o),onSelect:e.updateTypeSelection,size:e.isFileLayer()?e.fileTypeOptions.length:e.serviceTypeOptions.length,label:e.isFileLayer()?e.$t("wizard.format.type.file"):e.$t("wizard.format.type.service"),options:e.isFileLayer()?e.fileTypeOptions:e.serviceTypeOptions,formatError:e.formatError,validation:!0,"validation-messages":{required:e.$t("wizard.format.type.error.required"),invalid:e.$t("wizard.format.type.error.invalid")},onKeydown:t[4]||(t[4]=A(()=>{},["stop"]))},null,8,["modelValue","onSelect","size","label","options","formatError","validation-messages"]),y($,{onSubmit:e.onSelectContinue,onCancel:t[5]||(t[5]=()=>{e.formatError=!1,e.url?e.goNext=!0:e.goNext=!1,e.goToStep(0)}),disabled:!1},null,8,["onSubmit"])],32)]),_:1},8,["title","summary"]),r(" Configure layer wizard step "),y(E,{title:e.$t("wizard.configure.title")},{default:h(()=>[i("form",{name:"configure",onSubmit:t[15]||(t[15]=(...o)=>e.onConfigureContinue&&e.onConfigureContinue(...o))},[e.layerInfo.configOptions.includes("name")?(a(),v(l,{key:0,type:"text",name:"name",modelValue:e.layerInfo.config.name,"onUpdate:modelValue":t[7]||(t[7]=o=>e.layerInfo.config.name=o),onText:e.updateLayerName,label:e.$t("wizard.configure.name.label"),validation:!0,"validation-messages":{required:e.$t("wizard.configure.name.error.required")}},null,8,["modelValue","onText","label","validation-messages"])):r("v-if",!0),e.layerInfo.configOptions.includes("nameField")?(a(),v(l,{key:1,type:"select",name:"nameField",modelValue:e.layerInfo.config.nameField,"onUpdate:modelValue":t[8]||(t[8]=o=>e.layerInfo.config.nameField=o),label:e.$t("wizard.configure.nameField.label"),defaultOption:!0,options:e.fieldOptions()},null,8,["modelValue","label","options"])):r("v-if",!0),e.layerInfo.configOptions.includes("tooltipField")?(a(),v(l,{key:2,type:"select",name:"tooltipField",modelValue:e.layerInfo.config.tooltipField,"onUpdate:modelValue":t[9]||(t[9]=o=>e.layerInfo.config.tooltipField=o),label:e.$t("wizard.configure.tooltipField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):r("v-if",!0),e.layerInfo.configOptions.includes("latField")?(a(),v(l,{key:3,type:"select",name:"latField",modelValue:e.layerInfo.config.latField,"onUpdate:modelValue":t[10]||(t[10]=o=>e.layerInfo.config.latField=o),defaultOption:!0,label:e.$t("wizard.configure.latField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):r("v-if",!0),e.layerInfo.configOptions.includes("longField")?(a(),v(l,{key:4,type:"select",name:"longField",modelValue:e.layerInfo.config.longField,"onUpdate:modelValue":t[11]||(t[11]=o=>e.layerInfo.config.longField=o),defaultOption:!0,label:e.$t("wizard.configure.longField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):r("v-if",!0),r(" For map image layers "),e.layerInfo.configOptions.includes("layerEntries")?(a(),v(l,{key:5,type:"select",name:"layerEntries",modelValue:e.layerInfo.config.layerEntries,"onUpdate:modelValue":t[12]||(t[12]=o=>e.layerInfo.config.layerEntries=o),onSelect:e.updateLayerEntries,label:e.$t("wizard.configure.layerEntries.label"),help:e.$t("wizard.configure.layerEntries.help"),options:e.sublayerOptions(),multiple:!0,validation:!0,"validation-messages":{required:e.$t("wizard.configure.layerEntries.error.required")},onKeydown:t[13]||(t[13]=A(()=>{},["stop"]))},null,8,["modelValue","onSelect","label","help","options","validation-messages"])):r("v-if",!0),y($,{onSubmit:e.onConfigureContinue,onCancel:t[14]||(t[14]=o=>e.goToStep(1)),disabled:!e.finishStep},null,8,["onSubmit","disabled"])],32)]),_:1},8,["title"])]),_:1},8,["activeStep"])]),_:1},8,["panel"])}var Qe=b(We,[["render",Je],["__scopeId","data-v-c9548632"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/screen.vue"]]),et=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}));export{Qe as W,et as s,xe as w};
