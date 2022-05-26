import{eu as w,et as y,f8 as l,fo as r,eS as f,eF as C,ev as z,ew as v,ex as g,eI as i,ey as n,ez as d,eP as m,eH as p,eA as t,eJ as h,eC as b,eD as $}from"./main.7dbc90fb.js";const A=y({name:"LegendHeaderV",data(){return{show:l(r.showAll),hide:l(r.hideAll),expand:l(r.expandGroups),collapse:l(r.collapseGroups)}},methods:{openWizard(){this.$iApi.event.emit(f.WIZARD_OPEN)},getWizardExists(){try{return!!this.$iApi.fixture.get("wizard")}catch{return!1}},openLayerReorder(){this.$iApi.event.emit(f.REORDER_OPEN)},getLayerReorderExists(){try{return!!this.$iApi.fixture.get("layer-reorder")}catch{return!1}},isControlAvailable(e){return this.$store.get(r.headerControls).includes(e)}}}),a=e=>(b("data-v-4ea30ea6"),e=e(),$(),e),_={class:"relative legend-header flex"},k=["content"],x=a(()=>t("svg",{class:"fill-current w-18 h-18 mx-8",viewBox:"0 0 23 21"},[t("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})],-1)),E=[x],R=["content"],L=a(()=>t("svg",{class:"fill-current w-18 h-18 mx-8 mt-4 flip",viewBox:"0 0 23 21"},[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"})],-1)),S=[L],B=a(()=>t("span",{class:"flex-1"},null,-1)),H=a(()=>t("div",{class:"p-8"},[t("svg",{class:"fill-current w-18 h-18 mx-8",viewBox:"0 0 23 21"},[t("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})])],-1)),M=a(()=>t("div",{class:"flex p-8"},[t("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 23 21"},[t("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})])],-1));function D(e,s,I,V,W,N){const c=C("dropdown-menu"),u=z("tippy");return v(),g("div",_,[i(" open import wizard "),n((v(),g("button",{onClick:s[0]||(s[0]=(...o)=>e.openWizard&&e.openWizard(...o)),class:"relative mr-auto text-gray-500 hover:text-black mb-3",content:e.$t("legend.header.addlayer")},E,8,k)),[[d,e.getWizardExists()&&e.isControlAvailable("wizard")],[u,{placement:"right"}]]),i(" open layer reorder "),n((v(),g("button",{onClick:s[1]||(s[1]=(...o)=>e.openLayerReorder&&e.openLayerReorder(...o)),class:"relative mr-auto text-gray-500 hover:text-black p-8 mb-3",content:e.$t("legend.header.reorderlayers")},S,8,R)),[[d,e.getLayerReorderExists()&&e.isControlAvailable("layerReorder")],[u,{placement:"right"}]]),B,i(" groups toggle "),n(m(c,{class:"relative",position:"left-start",tooltip:e.$t("legend.header.groups"),"tooltip-placement":"left"},{header:p(()=>[H]),default:p(()=>[t("a",{href:"#",class:"flex leading-snug items-center w-116 py-8",onClick:s[2]||(s[2]=(...o)=>e.expand&&e.expand(...o))},h(e.$t("legend.header.groups.expand")),1),t("a",{href:"#",class:"flex leading-snug items-center w-116 py-8",onClick:s[3]||(s[3]=(...o)=>e.collapse&&e.collapse(...o))},h(e.$t("legend.header.groups.collapse")),1)]),_:1},8,["tooltip"]),[[d,e.isControlAvailable("groupToggle")]]),i(" visibility toggle "),n(m(c,{class:"relative",position:"left-start",tooltip:e.$t("legend.header.visible"),"tooltip-placement":"left"},{header:p(()=>[M]),default:p(()=>[t("a",{href:"#",class:"flex leading-snug items-center w-100 py-8",onClick:s[4]||(s[4]=(...o)=>e.show&&e.show(...o))},h(e.$t("legend.header.visible.show")),1),t("a",{href:"#",class:"flex leading-snug items-center w-100 py-8",onClick:s[5]||(s[5]=(...o)=>e.hide&&e.hide(...o))},h(e.$t("legend.header.visible.hide")),1)]),_:1},8,["tooltip"]),[[d,e.isControlAvailable("visibilityToggle")]])])}var O=w(A,[["render",D],["__scopeId","data-v-4ea30ea6"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/header.vue"]]);export{O as default};
