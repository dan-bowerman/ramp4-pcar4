import{ew as h,ex as u,ez as s,eE as c,fy as f,ey as d,eQ as m,eB as $,eC as i,eF as z,eG as I,eN as g,eO as A,eA as w,eP as C,eD as M,eJ as y,eK as O,eR as E,f5 as k,eU as N}from"./main.e0908dae.js";const V=h({name:"DividerNavV"}),F={class:"border-b p-0 self-center w-2/3"};function B(e,t,o,a,r,v){return s(),c("span",F)}var x=u(V,[["render",B],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/buttons/divider-nav.vue"]]);const S=h({name:"ZoomNavV",components:{"divider-nav":x},data(){return{zoomIn:f(400,!0,()=>this.$iApi.geo.map.zoomIn()),zoomOut:f(400,!0,()=>this.$iApi.geo.map.zoomOut())}}}),D=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[i("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),i("path",{d:"M0 0h24v24H0z",fill:"none"})],-1),Z=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[i("path",{d:"M19 13H5v-2h14v2z"}),i("path",{d:"M0 0h24v24H0z",fill:"none"})],-1);function H(e,t,o,a,r,v){const p=d("mapnav-button"),n=d("divider-nav");return s(),c("div",null,[m(p,{onClickFunction:e.zoomIn,tooltip:e.$t("mapnav.zoomIn")},{default:$(()=>[D]),_:1},8,["onClickFunction","tooltip"]),m(n),m(p,{onClickFunction:e.zoomOut,tooltip:e.$t("mapnav.zoomOut")},{default:$(()=>[Z]),_:1},8,["onClickFunction","tooltip"])])}var P=u(S,[["render",H],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/buttons/zoom-nav.vue"]]);const R=h({name:"MapnavV",components:{"divider-nav":x,"zoom-nav-section":P},data(){return{visible:this.get("mapnav/visible")}}}),T=e=>(y("data-v-3550fae6"),e=e(),O(),e),j={class:"mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12"},G={class:"flex flex-col"},L=T(()=>i("span",{class:"py-1"},null,-1)),J={class:"mapnav-section bg-white-75 hover:bg-white"};function K(e,t,o,a,r,v){const p=d("zoom-nav-section"),n=d("divider-nav"),l=z("focus-list");return s(),c("div",j,[I((s(),c("div",G,[m(p,{class:"mapnav-section bg-white-75 hover:bg-white"}),L,i("div",J,[(s(!0),c(g,null,A(e.visible,(_,b)=>(s(),c(g,{key:_.id+"button"},[(s(),w(C(_.id+"-nav-button"))),b!==e.visible.length-1?(s(),w(n,{key:0,class:"mapnav-divider"})):M("v-if",!0)],64))),128))])])),[[l]])])}var Q=u(R,[["render",K],["__scopeId","data-v-3550fae6"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/mapnav.vue"]]);class U extends E{get config(){return super.config}_parseConfig(t){if(!t)return;const o=t.items.map(a=>({id:a}));this.$vApp.$store.set("mapnav/items",o.reduce((a,r)=>(a[r.id]=r,a),{})),this.$vApp.$store.set("mapnav/order",o.map(a=>a.id)),this._validateItems()}_validateItems(){const t=["geolocator","zoom","home","fullscreen"];this.$vApp.$store.get("mapnav/order").forEach(o=>{(this.$iApi.fixture.get(o)||t.includes(o))&&this.$vApp.$store.set(`mapnav/items@${o}.componentId`,`${o}-nav-button`)})}}class q{items={};order=[]}const W={visible(e){return e.order.map(t=>e.items[t]).filter(t=>t.componentId)}},X={removeItem(e,t){e.commit("REMOVE_ITEM",t)}},Y={REMOVE_ITEM(e,t){t in e.items&&delete e.items[t];let o=e.order.indexOf(t);o!==-1&&e.order.splice(o,1)}};function ee(){const e=new q;return{namespaced:!0,state:e,getters:{...W},actions:{...X},mutations:{...Y,...k.mutations(["items","order"])}}}var te={en:{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen"},fr:{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arri\xE8re","mapnav.home":"Accueil","mapnav.fullscreen":"Plein \xC9cran"}};class ae extends U{async added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("mapnav",ee()),Object.entries(te).forEach(n=>this.$vApp.$i18n.mergeLocaleMessage(...n));const{vNode:t,destroy:o,el:a}=this.mount(Q,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]),this._parseConfig(this.config);let v=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),p=this.$iApi.event.on(N.COMPONENT,()=>{this._parseConfig(this.config)});this.removed=()=>{console.log(`[fixture] ${this.id} removed`),v(),this.$iApi.event.off(p);let n={...this.$vApp.$store.get("mapnav/items")};Object.keys(n).forEach(l=>this.$iApi.$vApp.$store.dispatch("mapnav/removeItem",l)),this.$vApp.$store.unregisterModule("mapnav"),o()}}}export{ae as default};
