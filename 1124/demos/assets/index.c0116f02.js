import{ev as l,ew as u,ey as s,eD as c,fy as _,ex as d,eP as m,eA as f,eB as a,eE as z,eF as x,eM as $,eN as M,ez as g,eO as A,eC as C,eI as O,eJ as E,eQ as N,f4 as k,eT as V}from"./main.805a311c.js";const y=l({name:"DividerNavV"}),F={class:"border-b p-0 self-center w-2/3"};function B(e,t,n,o,r,v){return s(),c("span",F)}var w=u(y,[["render",B],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/buttons/divider-nav.vue"]]);const S=l({name:"ZoomNavV",components:{"divider-nav":w},data(){return{zoomIn:_(400,!0,()=>this.$iApi.geo.map.zoomIn()),zoomOut:_(400,!0,()=>this.$iApi.geo.map.zoomOut())}}}),D=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[a("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),a("path",{d:"M0 0h24v24H0z",fill:"none"})],-1),Z=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[a("path",{d:"M19 13H5v-2h14v2z"}),a("path",{d:"M0 0h24v24H0z",fill:"none"})],-1);function H(e,t,n,o,r,v){const p=d("mapnav-button"),i=d("divider-nav");return s(),c("div",null,[m(p,{onClickFunction:e.zoomIn,tooltip:e.$t("mapnav.zoomIn")},{default:f(()=>[D]),_:1},8,["onClickFunction","tooltip"]),m(i),m(p,{onClickFunction:e.zoomOut,tooltip:e.$t("mapnav.zoomOut")},{default:f(()=>[Z]),_:1},8,["onClickFunction","tooltip"])])}var P=u(S,[["render",H],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/buttons/zoom-nav.vue"]]);const T=l({name:"MapnavV",components:{"divider-nav":w,"zoom-nav-section":P},data(){return{visible:this.get("mapnav/visible")}}}),L=e=>(O("data-v-3550fae6"),e=e(),E(),e),R={class:"mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12"},j={class:"flex flex-col"},G=L(()=>a("span",{class:"py-1"},null,-1)),J={class:"mapnav-section bg-white-75 hover:bg-white"};function Q(e,t,n,o,r,v){const p=d("zoom-nav-section"),i=d("divider-nav"),b=z("focus-list");return s(),c("div",R,[x((s(),c("div",j,[m(p,{class:"mapnav-section bg-white-75 hover:bg-white"}),G,a("div",J,[(s(!0),c($,null,M(e.visible,(h,I)=>(s(),c($,{key:h.id+"button"},[(s(),g(A(h.id+"-nav-button"))),I!==e.visible.length-1?(s(),g(i,{key:0,class:"mapnav-divider"})):C("v-if",!0)],64))),128))])])),[[b]])])}var q=u(T,[["render",Q],["__scopeId","data-v-3550fae6"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/mapnav.vue"]]);class K extends N{get config(){return super.config}_parseConfig(t){if(!t)return;const n=t.items.map(o=>({id:o}));this.$vApp.$store.set("mapnav/items",n.reduce((o,r)=>(o[r.id]=r,o),{})),this.$vApp.$store.set("mapnav/order",n.map(o=>o.id)),this._validateItems()}_validateItems(){this.$vApp.$store.get("mapnav/order").forEach(t=>{[`${t}-nav-button`,t].some(n=>{this.$vApp.$store.set(`mapnav/items@${t}.componentId`,n)})})}}class U{items={};order=[]}const W={visible(e){return e.order.map(t=>e.items[t]).filter(t=>t.componentId)}},X={removeItem(e,t){const n=e.state.items[t];n&&e.commit("REMOVE_ITEM",n)}},Y={REMOVE_ITEM(e,t){delete e.items[t];let n=e.order.indexOf(t);n!==-1&&e.order.splice(n,1)}};function ee(){const e=new U;return{namespaced:!0,state:e,getters:{...W},actions:{...X},mutations:{...Y,...k.mutations(["items","order"])}}}var te={en:{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen"},fr:{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arri\xE8re","mapnav.home":"Accueil","mapnav.fullscreen":"Plein \xC9cran"}};class oe extends K{async added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("mapnav",ee()),Object.entries(te).forEach(i=>this.$vApp.$i18n.mergeLocaleMessage(...i));const{vNode:t,destroy:n,el:o}=this.mount(q,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(o.childNodes[0]),this._parseConfig(this.config);let v=this.$vApp.$watch(()=>this.config,i=>this._parseConfig(i)),p=this.$iApi.event.on(V.COMPONENT,this._validateItems.bind(this));this.removed=()=>{console.log(`[fixture] ${this.id} removed`),v(),this.$vApp.$store.unregisterModule("mapnav"),this.$iApi.event.off(p),n()}}}export{oe as default};
