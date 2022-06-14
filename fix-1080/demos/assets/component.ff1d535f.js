import{ev as b,li as R,fo as P,ew as L,eE as y,ey as n,eD as s,eC as o,eF as r,eB as l,eW as f,eX as j,eZ as c,fh as M,eM as S,eN as B,fa as F,eI as T,eJ as x,fv as q,lj as u,eT as V,ex as A,eP as E,eA as O,eY as v,eK as g,lk as N,ez as H,fx as U,fb as K,ll as C,lm as D,f7 as W,ln as Y,eO as X,lo as J}from"./main.32ef8a5a.js";const Q=b({name:"CheckboxV",props:{value:{type:Object,required:!0},legendItem:{type:Object,required:!0},checked:{type:Boolean},isRadio:{type:Boolean},disabled:{type:Boolean}},data(){return{initialChecked:this.legendItem.visibility}},mounted(){this.legendItem.checkVisibilityRules(),this.initialChecked=this.legendItem.visibility===this.checked},methods:{_noSymbolsVisible(){return!this.legendItem.legend?.some(e=>e.visibility)},toggleVisibility(){this.value instanceof R?this.legendItem.toggleVisibility():(this._noSymbolsVisible()?(this.legendItem.setChildSymbologyVisibility(void 0,!1),this.legendItem.setChildSymbologyVisibility(this.value.uid,!0),this.legendItem.visibility||this.legendItem.toggleVisibility(!0)):this.legendItem.setChildSymbologyVisibility(this.value.uid,!this.value.lastVisbility),this._noSymbolsVisible()&&this.legendItem.toggleVisibility(!1)),this.legendItem.layer?.supportsFeatures&&this.legendItem.layer?.setSqlFilter(P.SYMBOL,this.legendItem.legend.filter(e=>e.lastVisbility===!0).map(e=>e.definitionClause).join(" OR ")),this.initialChecked=!0}}}),ee=["type","checked","disabled","content"];function te(e,t,d,p,h,_){const m=y("tippy");return n(),s("div",{class:"relative",onMouseover:t[2]||(t[2]=f(()=>{},["stop"]))},[o(" TODO: see if getting this to use v-model works; children wouldnt update properly on initial try "),r(l("input",{type:e.isRadio?"radio":"checkbox",checked:e.checked&&e.initialChecked,onClick:t[0]||(t[0]=f(i=>e.toggleVisibility(e.value),["stop"])),onKeyup:t[1]||(t[1]=j(f(i=>e.toggleVisibility(e.value),["stop"]),["enter"])),class:c([[e.isRadio?"form-radio":"form-checkbox rounded-none",e.disabled?"text-gray-400 ":"text-black cursor-pointer"],"mx-5 h-15 w-15 border-gray-500 hover:border-black"]),tabindex:"-1",disabled:e.disabled,content:e.$t(e.checked?"legend.visibility.hide":"legend.visibility.show")},null,42,ee),[[m,{placement:"top-end",hideOnClick:!1}]])],32)}var G=L(Q,[["render",te],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/checkbox.vue"]]);const le=b({name:"LegendSymbologyStackV",props:{visible:{type:Boolean,required:!0},legendItem:{type:Object,required:!0},layer:{type:Object,required:!0}},data(){return{stack:[]}},mounted(){this.legendItem.loadPromise.then(()=>{this.legendItem.layerUID!==void 0&&Promise.all(M(this.layer).legend.map(e=>e.drawPromise)).then(e=>{this.stack=M(this.layer).legend})})}}),ne=e=>(T("data-v-8c81fb38"),e=e(),x(),e),se={key:0},oe={key:0,class:"relative left-3"},ie=["innerHTML"],ae={class:"symbologyIcon w-32 h-32"},re=["innerHTML"],de=ne(()=>l("div",{class:"h-32 w-32 inline-flex justify-center items-center"},[l("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},[l("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})])],-1));function ce(e,t,d,p,h,_){return e.visible?(n(),s(S,{key:1},[o(" If the symbology stack is already open, display an X in the place of the stack. "),de],2112)):(n(),s("div",se,[o(" Multiple icons to display "),e.stack.length>1?(n(),s("div",oe,[o(" the :class line calculates margin-left for each of the 3 symbols, and gives a margin-top to symbols that arent the first "),(n(!0),s(S,null,B(e.stack.slice(0,3).reverse(),(m,i)=>(n(),s("div",{class:c(["absolute",[i==0?"symbol-0":i==1?"left-3 symbol-1":"left-6 symbol-2"]]),style:F({"z-index":3-i}),key:i},[l("span",{class:"symbologyIcon w-28 h-28",innerHTML:e.stack[i].svgcode},null,8,ie)],6))),128))])):e.stack.length>0?(n(),s(S,{key:1},[o(" Only one icon to display. "),l("div",ae,[l("span",{innerHTML:e.stack[0].svgcode},null,8,re)])],2112)):o("v-if",!0)]))}var ge=L(le,[["render",ce],["__scopeId","data-v-8c81fb38"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/symbology-stack.vue"]]);const me=b({name:"LegendOptionsV",props:{legendItem:q},methods:{toggleSymbology(){this.legendItem.controlAvailable(u.Symbology)&&this.legendItem.toggleSymbologyExpand()},toggleGrid(){this.legendItem.controlAvailable(u.Datatable)&&this.getFixtureExists("grid")&&this.$iApi.event.emit(V.GRID_TOGGLE,this.legendItem.layerUID)},toggleSettings(){this.legendItem.controlAvailable(u.Settings)&&this.getFixtureExists("settings")&&this.$iApi.event.emit(V.SETTINGS_TOGGLE,this.legendItem.layerUID)},toggleMetadata(){if(this.legendItem.controlAvailable(u.Metadata)&&this.getFixtureExists("metadata")){const e=this.legendItem?.layer?.config.metadata||this.legendItem?.layer?.parentLayer?.config?.metadata||{},t=e?.name||this.legendItem?.layer?.name||"";e.url?this.$iApi.event.emit(V.METADATA_OPEN,{type:"html",layerName:t,url:e.url}):console.warn("Layer does not have a metadata url defined")}},zoomToLayerBoundary(){this.legendItem.controlAvailable(u.BoundaryZoom)&&this.legendItem?.layer?.zoomToLayerBoundary()},removeLayer(){this.legendItem.controlAvailable(u.Remove)&&this.$iApi.geo.map.removeLayer(this.legendItem.layerUID)},reloadLayer(){this.legendItem.controlAvailable(u.Reload)&&M(this.legendItem.layer).reload()},getFixtureExists(e){try{return!!this.$iApi.fixture.get(e)}catch{return!1}}}}),I=e=>(T("data-v-b07d2324"),e=e(),x(),e),pe=I(()=>l("div",{class:"flex p-8"},[l("svg",{class:"inline-block fill-current w-18 h-18 mx-8",viewBox:"0 0 23 21"},[l("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})])],-1)),ye=I(()=>l("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[l("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})],-1)),he=I(()=>l("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[l("g",{id:"tune"},[l("path",{d:"M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z "})])],-1)),ue=I(()=>l("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[l("path",{d:"M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z "})],-1)),ve=I(()=>l("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[l("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1)),fe=I(()=>l("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 24 24"},[l("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),l("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)),be=I(()=>l("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 23 21"},[l("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})],-1)),Le=I(()=>l("svg",{class:"inline-block fill-current w-18 h-18 mr-10",viewBox:"0 0 24 24"},[l("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1));function Ie(e,t,d,p,h,_){const m=A("dropdown-menu");return n(),s("div",{onClick:t[7]||(t[7]=f(()=>{},["stop"])),onMouseover:t[8]||(t[8]=f(()=>{},["stop"])),class:"options display-none cursor-auto"},[E(m,{class:"flex-shrink-0",position:"bottom-start",tooltip:e.$t("legend.entry.options"),"tooltip-placement":"left"},{header:O(()=>[pe]),default:O(()=>[l("a",{href:"#",class:c(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.controlAvailable("metadata")||!e.getFixtureExists("metadata")}]),onClick:t[0]||(t[0]=(...i)=>e.toggleMetadata&&e.toggleMetadata(...i))},[ye,v(" "+g(e.$t("legend.entry.controls.metadata")),1)],2),l("a",{href:"#",class:c(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.controlAvailable("settings")||!e.getFixtureExists("settings")}]),onClick:t[1]||(t[1]=(...i)=>e.toggleSettings&&e.toggleSettings(...i))},[he,v(" "+g(e.$t("legend.entry.controls.settings")),1)],2),l("a",{href:"#",class:c(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.controlAvailable("datatable")||!e.getFixtureExists("grid")}]),onClick:t[2]||(t[2]=(...i)=>e.toggleGrid&&e.toggleGrid(...i))},[ue,v(" "+g(e.$t("legend.entry.controls.datatable")),1)],2),l("a",{href:"#",class:c(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.controlAvailable("symbology")}]),onClick:t[3]||(t[3]=(...i)=>e.toggleSymbology&&e.toggleSymbology(...i))},[ve,v(" "+g(e.$t("legend.entry.controls.symbology")),1)],2),l("a",{href:"#",class:c(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.controlAvailable("boundaryZoom")}]),onClick:t[4]||(t[4]=(...i)=>e.zoomToLayerBoundary&&e.zoomToLayerBoundary(...i))},[fe,v(" "+g(e.$t("legend.entry.controls.boundaryzoom")),1)],2),l("a",{href:"#",class:c(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.controlAvailable("remove")}]),onClick:t[5]||(t[5]=(...i)=>e.removeLayer&&e.removeLayer(...i))},[be,v(" "+g(e.$t("legend.entry.controls.remove")),1)],2),l("a",{href:"#",class:c(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.controlAvailable("reload")}]),onClick:t[6]||(t[6]=(...i)=>e.reloadLayer&&e.reloadLayer(...i))},[Le,v(" "+g(e.$t("legend.entry.controls.reload")),1)],2)]),_:1},8,["tooltip"])],32)}var _e=L(me,[["render",Ie],["__scopeId","data-v-b07d2324"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/legend-options.vue"]]);const $e=b({name:"LegendEntryV",props:{legendItem:{type:Object,required:!0}},components:{checkbox:G,"symbology-stack":ge,options:_e},data(){return{symbologyStack:[],handlers:[]}},computed:{layerType(){return M(this.legendItem.layer)?.layerType},isAnimationEnabled(){return this.$iApi.animate}},mounted(){if(this.symbologyStack=[],!this.legendItem.layer){console.warn("Attempted to mount legend entry component with undefined layer");return}this.handlers.push(this.$iApi.event.on(V.LAYER_STATECHANGE,e=>{e.state===N.ERROR&&e.layer.uid===this.legendItem.layer.uid&&this.legendItem.setErrorType()})),Promise.all(M(this.legendItem.legend).map(e=>e.drawPromise)).then(()=>{this.symbologyStack=M(this.legendItem.legend)})},beforeUnmount(){this.handlers.forEach(e=>this.$iApi.event.off(e))},methods:{toggleSymbology(){if(this.legendItem.controlAvailable(u.Symbology)){const e=this.legendItem.toggleSymbologyExpand();this.$iApi.updateAlert(this.$t(`legend.alert.symbology${e?"Expanded":"Collapsed"}`))}},toggleGrid(){this.legendItem.controlAvailable(u.Datatable)&&this.getDatagridExists()&&this.$iApi.event.emit(V.GRID_TOGGLE,this.legendItem.layerUID)},getLegendGraphic(e){const t=document.createElement("span");t.innerHTML=e.svgcode;const d=t.firstElementChild;return d?.classList.add("max-w-full"),d?.classList.add("h-full"),d?.setAttribute("height",e.imgHeight),d?.setAttribute("width",e.imgWidth),t.outerHTML},getDatagridExists(){try{return!!this.$iApi.fixture.get("grid")}catch{return!1}}}}),ke={class:"relative"},we=["content","aria-label"],Ce={class:"relative w-32 h-32"},Me=["disabled","content"],Se={class:"flex-1 ml-15 pointer-events-none"},Ae={key:0,class:"default-focus-style"},Ve={key:0},Ee={key:0,class:"items-center grid-cols-1"},Te=["innerHTML"],xe={key:1,class:"flex-1 p-5 bg-black-75 text-white"},ze={class:"flex items-center"},He={class:"symbologyIcon"},Be=["innerHTML"],Oe={class:"flex-1 ml-15"},Ze={key:1},De={class:"flex p-5 ml-48"},Ge={key:0,class:"relative animate-spin spinner h-20 w-20 mr-10 pt-2"},Re={class:"flex-1 text-gray-500"};function Pe(e,t,d,p,h,_){const m=A("symbology-stack"),i=A("options"),k=A("checkbox"),z=y("tippy"),$=y("truncate"),w=y("focus-item");return n(),s("div",{class:"legend-item",key:e.legendItem.visibility},[l("div",ke,[r((n(),s("div",{class:c(`
                    default-focus-style
                    p-5
                    flex
                    items-center
                    hover:bg-gray-200
                    ${e.legendItem.controlAvailable("datatable")&&e.getDatagridExists()?"cursor-pointer":"cursor-default"}
                    h-44
                `),onClick:t[2]||(t[2]=(...a)=>e.toggleGrid&&e.toggleGrid(...a)),onMouseover:t[3]||(t[3]=f(a=>a.currentTarget._tippy?.show(),["stop"])),onMouseout:t[4]||(t[4]=f(a=>a.currentTarget._tippy?.hide(),["self"])),content:e.legendItem.controlAvailable("datatable")&&e.getDatagridExists()?e.$t("legend.entry.data"):"","truncate-trigger":"","aria-label":e.legendItem.name},[o(" symbology stack toggle"),l("div",Ce,[r((n(),s("button",{onClick:t[0]||(t[0]=f((...a)=>e.toggleSymbology&&e.toggleSymbology(...a),["stop"])),tabindex:"-1",class:c({"cursor-default":!e.legendItem.controlAvailable("symbology")}),disabled:!e.legendItem.controlAvailable("symbology"),content:e.legendItem.symbologyExpanded?e.$t("legend.symbology.hide"):e.$t("legend.symbology.expand"),onMouseover:t[1]||(t[1]=f(()=>{},["stop"]))},[E(m,{class:c([{"pointer-events-none":!e.legendItem.controlAvailable("symbology")},"w-32 h-32"]),visible:e.legendItem.symbologyExpanded,layer:e.legendItem.layer,legendItem:e.legendItem},null,8,["class","visible","layer","legendItem"])],42,Me)),[[z,{placement:"top-start"}]])]),o(" name "),r((n(),s("div",Se,[l("span",null,g(e.legendItem.name),1)])),[[$,{externalTrigger:!0}]]),o(" options dropdown menu "),E(i,{legendItem:e.legendItem},null,8,["legendItem"]),o(" visibility "),E(k,{checked:e.legendItem.visibility,value:e.legendItem,isRadio:e.legendItem.parent&&e.legendItem.parent.type==="VisibilitySet",legendItem:e.legendItem,disabled:!e.legendItem.controlAvailable("visibility")},null,8,["checked","value","isRadio","legendItem","disabled"])],42,we)),[[w,"show-truncate"],[z,{placement:"top-start",trigger:"manual focus",aria:"describedby"}]])]),o(" Symbology Stack Section "),e.legendItem.symbologyExpanded?r((n(),s("div",Ae,[e.symbologyStack.length>0?(n(),s("div",Ve,[o(" display each symbol "),(n(!0),s(S,null,B(e.symbologyStack,a=>(n(),s("div",{class:"m-5",key:a.uid},[o(" for WMS layers "),e.layerType==="ogc-wms"?(n(),s("div",Ee,[a.imgHeight?(n(),s("div",{key:0,class:"symbologyIcon w-full p-5",innerHTML:e.getLegendGraphic(a)},null,8,Te)):o("v-if",!0),a.label?r((n(),s("div",xe,[v(g(a.label),1)])),[[$]]):o("v-if",!0)])):(n(),s(S,{key:1},[o(" for non-WMS layers "),l("div",ze,[l("div",He,[l("span",{innerHTML:a.svgcode},null,8,Be)]),r((n(),s("div",Oe,[v(g(a.label),1)])),[[$]]),e.symbologyStack.length>1&&e.legendItem.toggleSymbology?(n(),H(k,{key:0,value:a,legendItem:e.legendItem,checked:a.visibility,disabled:!e.legendItem.controlAvailable("visibility")},null,8,["value","legendItem","checked","disabled"])):o("v-if",!0)])],2112))]))),128))])):(n(),s("div",Ze,[o(" display loading text "),r((n(),s("div",De,[e.isAnimationEnabled?(n(),s("div",Ge)):o("v-if",!0),r((n(),s("div",Re,[l("span",null,g(e.$t("legend.symbology.loading")),1)])),[[$]])])),[[$]])]))])),[[w]]):o("v-if",!0)])}var je=L($e,[["render",Pe],["__scopeId","data-v-fa875ddc"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/entry.vue"]]);const Fe=b({name:"LegendGroupV",props:{legendItem:{type:Object,required:!0}},components:{LegendComponent:U(()=>K(()=>Promise.resolve().then(function(){return It}),void 0)),checkbox:G},data(){return{LegendTypes:C}},methods:{toggleExpand(){this.legendItem.toggleExpanded(),this.$iApi.updateAlert(this.$t(`legend.alert.group${this.legendItem.expanded?"Expanded":"Collapsed"}`))}}}),qe=e=>(T("data-v-46ea709f"),e=e(),x(),e),Ne={class:"relative"},Ue=["content"],Ke=qe(()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[l("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)),We=[Ke],Ye={class:"flex-1 pointer-events-none"},Xe={key:0,class:"legend-group pl-5"};function Je(e,t,d,p,h,_){const m=A("checkbox"),i=A("legend-component"),k=y("truncate"),z=y("focus-item"),$=y("tippy");return n(),s("div",{class:"legend-group-container",key:e.legendItem.visibility},[l("div",Ne,[r((n(),s("div",{class:"legend-group-header flex items-center px-5 py-10 cursor-pointer default-focus-style hover:bg-gray-200",onClick:t[0]||(t[0]=w=>e.toggleExpand()),content:e.$t(e.legendItem.expanded?"legend.group.collapse":"legend.group.expand"),"truncate-trigger":""},[o(" dropdown icon "),l("div",{class:c(["expand-toggle mr-10 pointer-events-none",{"rotate-180":e.legendItem.expanded}])},We,2),o(" name "),r((n(),s("div",Ye,[l("span",null,g(e.legendItem.name),1)])),[[k]]),o(" visibility "),E(m,{checked:e.legendItem.visibility,value:e.legendItem,isRadio:e.legendItem.parent&&e.legendItem.parent.type===e.LegendTypes.Set,legendItem:e.legendItem,disabled:!e.legendItem.controlAvailable("visibility")},null,8,["checked","value","isRadio","legendItem","disabled"])],8,Ue)),[[z,"show-truncate"],[$,{placement:"top-start",aria:"describedby"}]])]),o(" Display children of the group "),e.legendItem.expanded?(n(),s("div",Xe,[(n(!0),s(S,null,B(e.legendItem.children,w=>(n(),H(i,{legendItem:w,key:w.uid},null,8,["legendItem"]))),128))])):o("v-if",!0)])}var Z=L(Fe,[["render",Je],["__scopeId","data-v-46ea709f"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/group.vue"]]);const Qe=b({name:"LegendPlaceholderV",props:{legendItem:{type:Object,required:!0}}}),et=e=>(T("data-v-eff000da"),e=e(),x(),e),tt={class:"legend-item"},lt={class:"legend-item-header","truncate-trigger":""},nt=D('<div class="flex pr-10" data-v-eff000da><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px" data-v-eff000da><path d="M0 0h24v24H0V0z" fill="none" data-v-eff000da></path><path d="M0 0h24v24H0V0z" fill="none" data-v-eff000da></path><circle cx="15.5" cy="9.5" r="1.5" data-v-eff000da></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-eff000da></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-eff000da></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-eff000da></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-eff000da></path></svg></div>',1),st=et(()=>l("div",{class:"flex-1 progress-line"},null,-1));function ot(e,t,d,p,h,_){const m=y("truncate"),i=y("focus-item");return n(),s("div",tt,[r((n(),s("div",lt,[o(" smiley face. very important that we migrate this "),nt,o(" name "),r((n(),s("div",null,[l("span",null,g(e.legendItem.name),1)])),[[m,{externalTrigger:!0}]])])),[[i,"show-truncate"]]),st])}var it=L(Qe,[["render",ot],["__scopeId","data-v-eff000da"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/placeholder.vue"]]);const at=b({name:"LegendErrorV",props:{legendItem:{type:Object,required:!0}},data(){return{layerConfigs:this.get(W.layerConfigs)}},methods:{reloadLayer(){if(this.legendItem.controlAvailable(u.Reload)){if(this.legendItem.layer!==void 0)this.legendItem.layer.reload();else{const e=this.layerConfigs.find(t=>t.id===this.legendItem.id);e!==void 0&&this.recreateLayer(e)}this.legendItem.reload(),this.legendItem.loadPromise.catch(()=>{console.error("Failed to reload layer - ",this.legendItem.name)})}},async recreateLayer(e){try{await new Promise(async(t,d)=>{const p=this.$iApi.geo.layer.createLayer(e),[h]=await Y(p.initiate());h?d(h):this.$iApi.geo.map.addLayer(p),t(p)})}catch{return}}}}),rt=e=>(T("data-v-9a1940b0"),e=e(),x(),e),dt={class:"legend-item"},ct={class:"legend-item-header bg-red-200","truncate-trigger":""},gt=D('<div class="flex pr-10" data-v-9a1940b0><!-- sad face for layer error --><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px" data-v-9a1940b0><path d="M0 0h24v24H0V0z" fill="none" data-v-9a1940b0></path><path d="M0 0h24v24H0V0z" fill="none" data-v-9a1940b0></path><circle cx="15.5" cy="9.5" r="1.5" data-v-9a1940b0></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-9a1940b0></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-9a1940b0></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-9a1940b0></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-9a1940b0></path></svg></div>',1),mt={class:"flex-1 pointer-events-none"},pt={class:"relative"},yt=rt(()=>l("div",{class:"flex p-8"},[l("svg",{class:"inline-block fill-current w-18 h-18",viewBox:"0 0 24 24"},[l("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})])],-1)),ht=[yt];function ut(e,t,d,p,h,_){const m=y("truncate"),i=y("focus-item");return n(),s("div",dt,[r((n(),s("div",ct,[gt,o(" name "),r((n(),s("div",mt,[l("span",null,g(e.legendItem.name),1)])),[[m,{externalTrigger:!0}]]),o(" reload "),l("div",pt,[l("button",{class:c(["text-gray-500 hover:text-black dropdown-button",{disabled:!e.legendItem.controlAvailable("reload")}]),onClick:t[0]||(t[0]=(...k)=>e.reloadLayer&&e.reloadLayer(...k))},ht,2)]),o(" error "),o(' <div class="w-2 opacity-50 bg-red-600"></div> ')])),[[i,"show-truncate"]])])}var vt=L(at,[["render",ut],["__scopeId","data-v-9a1940b0"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/error.vue"]]);const ft=b({name:"LegendComponentV",props:{legendItem:{type:Object,required:!0},props:{type:Object}},computed:{templates(){return{[C.Set]:Z,[C.Group]:Z,[C.Entry]:je,[C.Placeholder]:it,[C.Error]:vt}}},mounted(){this.legendItem.loadPromise.then(()=>{this.$forceUpdate()}).catch(()=>{this.$forceUpdate()})}});function bt(e,t,d,p,h,_){return n(),H(J,null,[(n(),H(X(e.templates[e.legendItem.type]),{class:"select-none",legendItem:e.legendItem,props:e.props},null,8,["legendItem","props"]))],1024)}var Lt=L(ft,[["render",bt],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/components/component.vue"]]),It=Object.freeze(Object.defineProperty({__proto__:null,default:Lt},Symbol.toStringTag,{value:"Module"}));export{Lt as default};
