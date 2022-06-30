import{ex as m,ew as w,ft as r,eU as u,ey as y,eF as C,ez as h,eE as v,eD as l,eG as i,eH as n,eQ as f,eB as d,eC as t,eL as p,eJ as z,eK as b}from"./main.f08ddbe2.js";const $=w({name:"LegendHeaderV",data(){return{show:this.call(r.showAll),hide:this.call(r.hideAll),expand:this.call(r.expandGroups),collapse:this.call(r.collapseGroups)}},methods:{openWizard(){this.$iApi.event.emit(u.WIZARD_OPEN)},getWizardExists(){try{return!!this.$iApi.fixture.get("wizard")}catch{return!1}},openLayerReorder(){this.$iApi.event.emit(u.REORDER_OPEN)},getLayerReorderExists(){try{return!!this.$iApi.fixture.get("layer-reorder")}catch{return!1}},isControlAvailable(e){return this.$store.get(r.headerControls).includes(e)}}}),a=e=>(z("data-v-4ea30ea6"),e=e(),b(),e),_={class:"relative legend-header flex"},A=["content"],k=a(()=>t("svg",{class:"fill-current w-18 h-18 mx-8",viewBox:"0 0 23 21"},[t("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})],-1)),E=[k],x=["content"],R=a(()=>t("svg",{class:"fill-current w-18 h-18 mx-8 mt-4 flip",viewBox:"0 0 23 21"},[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"})],-1)),L=[R],B=a(()=>t("span",{class:"flex-1"},null,-1)),H=a(()=>t("div",{class:"p-8"},[t("svg",{class:"fill-current w-18 h-18 mx-8",viewBox:"0 0 23 21"},[t("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})])],-1)),M=a(()=>t("div",{class:"flex p-8"},[t("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 23 21"},[t("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})])],-1));function S(e,s,D,V,W,I){const c=y("dropdown-menu"),g=C("tippy");return h(),v("div",_,[l(" open import wizard "),i((h(),v("button",{onClick:s[0]||(s[0]=(...o)=>e.openWizard&&e.openWizard(...o)),class:"relative mr-auto text-gray-500 hover:text-black mb-3",content:e.$t("legend.header.addlayer")},E,8,A)),[[n,e.getWizardExists()&&e.isControlAvailable("wizard")],[g,{placement:"right"}]]),l(" open layer reorder "),i((h(),v("button",{onClick:s[1]||(s[1]=(...o)=>e.openLayerReorder&&e.openLayerReorder(...o)),class:"relative mr-auto text-gray-500 hover:text-black p-8 mb-3",content:e.$t("legend.header.reorderlayers")},L,8,x)),[[n,e.getLayerReorderExists()&&e.isControlAvailable("layerReorder")],[g,{placement:"right"}]]),B,l(" groups toggle "),i(f(c,{class:"relative",position:"left-start",tooltip:e.$t("legend.header.groups"),"tooltip-placement":"left"},{header:d(()=>[H]),default:d(()=>[t("a",{href:"#",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:s[2]||(s[2]=(...o)=>e.expand&&e.expand(...o))},p(e.$t("legend.header.groups.expand")),1),t("a",{href:"#",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:s[3]||(s[3]=(...o)=>e.collapse&&e.collapse(...o))},p(e.$t("legend.header.groups.collapse")),1)]),_:1},8,["tooltip"]),[[n,e.isControlAvailable("groupToggle")]]),l(" visibility toggle "),i(f(c,{class:"relative",position:"left-start",tooltip:e.$t("legend.header.visible"),"tooltip-placement":"left"},{header:d(()=>[M]),default:d(()=>[t("a",{href:"#",class:"flex leading-snug items-center w-100 overflow-hidden whitespace-nowrap",onClick:s[4]||(s[4]=(...o)=>e.show&&e.show(...o))},p(e.$t("legend.header.visible.show")),1),t("a",{href:"#",class:"flex leading-snug items-center w-100 overflow-hidden whitespace-nowrap",onClick:s[5]||(s[5]=(...o)=>e.hide&&e.hide(...o))},p(e.$t("legend.header.visible.hide")),1)]),_:1},8,["tooltip"]),[[n,e.isControlAvailable("visibilityToggle")]])])}var G=m($,[["render",S],["__scopeId","data-v-4ea30ea6"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/header.vue"]]);export{G as default};
