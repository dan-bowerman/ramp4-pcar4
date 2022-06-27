import{f5 as h,ew as g,ex as x,ey as m,eF as $,eG as w,ez as n,eA as S,eB as r,eE as p,eO as C,e_ as d,eC as o,eL as a,eN as k,f6 as E,eZ as y,eQ as L}from"./main.18c7b5d3.js";class O{componentSelectedState={title:!0,map:!0,mapElements:!0,legend:!0,footnote:!0,timestamp:!0};fileName=""}const z={},B={toggleSelected:(e,t)=>{e.commit("TOGGLE_SELECTED",t)}},T={TOGGLE_SELECTED:(e,t)=>{if(e.componentSelectedState[t.name]!==void 0){let l=e.componentSelectedState[t.name];e.componentSelectedState[t.name]=t.selected!==void 0?t.selected:!l}}};var u=(e=>(e.componentSelectedState="export/componentSelectedState",e.fileName="export/fileName",e.toggleSelected="export/toggleSelected!",e))(u||{});function J(){const e=new O;return{namespaced:!0,state:e,getters:{...z},actions:{...B,...h.actions(e)},mutations:{...T,...h.mutations(e)}}}const V=g({name:"ExportSettingsButtonV",props:{componentSelectedState:{type:Object,required:!0}},methods:{toggleComponent(e){!e.selectable||(this.$iApi.$vApp.$store.set(u.toggleSelected,{name:e.name}),this.$emit("onComponentToggle"))}}}),N=o("div",{class:"flex items-center text-gray-400 w-full h-full hover:text-black p-8"},[o("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[o("g",null,[o("path",{d:"M0,0h24v24H0V0z",fill:"none"}),o("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})])])],-1),j=["onClick","aria-label"],D={class:"md-icon-small inline"},G=o("g",null,[o("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1),M=[G];function A(e,t,l,_,v,b){const i=m("dropdown-menu"),c=$("focus-item");return w((n(),S(i,{position:"left-end",tooltip:e.$t("export.menu"),"tooltip-placement":"top"},{header:r(()=>[N]),default:r(f=>[(n(!0),p(k,null,C(e.componentSelectedState,s=>(n(),p("a",{key:s.name,onClick:Z=>e.toggleComponent(s),href:"#",class:d(`text-left text-sm sm:text-base ${s.selectable?"cursor-pointer":"cursor-default"}`),"aria-label":s.name},[o("div",D,[(n(),p("svg",{height:"20",width:"20",viewBox:"0 0 24 24",class:d(`inline mx-8 ${s.selected?"":"invisible"}`)},M,2)),o("span",{class:d(`inline ${s.selectable?"":"text-gray-300"}
                    `)},a(e.$t(`export.menu.component.${s.name}`)),3)])],10,j))),128))]),_:1},8,["tooltip"])),[[c]])}var q=x(V,[["render",A],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/export/settings-button.vue"]]);const F=g({name:"ExportScreenV",props:{panel:{type:Object,required:!0}},components:{"export-settings":q},computed:{selectedComponents(){let e={};return this.fixture&&Object.keys(this.componentSelectedState).forEach(t=>{e[t]={name:t,selected:this.componentSelectedState[t]??!1,selectable:(this.fixture?.config)[t]?.selectable??!0}}),e}},data(){return{fixture:null,resizeObserver:null,componentSelectedState:this.get(u.componentSelectedState),make:E(300,function(){if(!this.fixture)return;const e=this.$el.querySelector(".export-canvas");this.fixture.make(e,this.$el.clientWidth-16)})}},mounted(){this.fixture=this.$iApi.fixture.get("export"),this.resizeObserver=new ResizeObserver(()=>{this.make()}),this.resizeObserver.observe(this.$el)},beforeUnmount(){this.resizeObserver.disconnect()}}),H=o("div",{class:"overflow-hidden border border-gray-200"},[o("canvas",{class:"export-canvas"})],-1),P={class:"flex"},Q=["aria-label"],R=["aria-label"];function U(e,t,l,_,v,b){const i=m("export-settings"),c=m("panel-screen");return n(),S(c,{panel:e.panel,footer:!0},{header:r(()=>[y(a(e.$t("export.title")),1)]),content:r(()=>[H]),footer:r(()=>[o("div",P,[o("button",{onClick:t[0]||(t[0]=f=>e.fixture?.export()),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 mr-16","aria-label":e.$t("export.download")},a(e.$t("export.download")),9,Q),o("button",{onClick:t[1]||(t[1]=f=>e.make()),class:"py-8 px-16","aria-label":e.$t("export.refresh")},a(e.$t("export.refresh")),9,R),L(i,{componentSelectedState:e.selectedComponents,onComponentToggle:e.make(),class:"ml-auto flex px-8"},null,8,["componentSelectedState","onComponentToggle"])])]),_:1},8,["panel"])}var W=x(F,[["render",U],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/export/screen.vue"]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{u as E,W as a,K as s,J as x};
