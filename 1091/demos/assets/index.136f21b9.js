import{ev as h,ew as u,ey as a,eD as c,fy as f,ex as l,eP as v,eA as $,eB as i,eE as z,eF as x,eM as g,eN as A,ez as w,eO as M,eC as C,eI as O,eJ as E,eQ as k,f4 as y,eT as N}from"./main.748a25d3.js";const V=h({name:"DividerNavV"}),F={class:"border-b p-0 self-center w-2/3"};function B(e,t,o,n,r,m){return a(),c("span",F)}var b=u(V,[["render",B],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/buttons/divider-nav.vue"]]);const S=h({name:"ZoomNavV",components:{"divider-nav":b},data(){return{zoomIn:f(400,!0,()=>this.$iApi.geo.map.zoomIn()),zoomOut:f(400,!0,()=>this.$iApi.geo.map.zoomOut())}}}),D=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[i("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),i("path",{d:"M0 0h24v24H0z",fill:"none"})],-1),Z=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[i("path",{d:"M19 13H5v-2h14v2z"}),i("path",{d:"M0 0h24v24H0z",fill:"none"})],-1);function H(e,t,o,n,r,m){const p=l("mapnav-button"),s=l("divider-nav");return a(),c("div",null,[v(p,{onClickFunction:e.zoomIn,tooltip:e.$t("mapnav.zoomIn")},{default:$(()=>[D]),_:1},8,["onClickFunction","tooltip"]),v(s),v(p,{onClickFunction:e.zoomOut,tooltip:e.$t("mapnav.zoomOut")},{default:$(()=>[Z]),_:1},8,["onClickFunction","tooltip"])])}var P=u(S,[["render",H],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/buttons/zoom-nav.vue"]]);const T=h({name:"MapnavV",components:{"divider-nav":b,"zoom-nav-section":P},data(){return{visible:this.get("mapnav/visible")}}}),j=e=>(O("data-v-3550fae6"),e=e(),E(),e),L={class:"mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12"},R={class:"flex flex-col"},G=j(()=>i("span",{class:"py-1"},null,-1)),J={class:"mapnav-section bg-white-75 hover:bg-white"};function Q(e,t,o,n,r,m){const p=l("zoom-nav-section"),s=l("divider-nav"),d=z("focus-list");return a(),c("div",L,[x((a(),c("div",R,[v(p,{class:"mapnav-section bg-white-75 hover:bg-white"}),G,i("div",J,[(a(!0),c(g,null,A(e.visible,(_,I)=>(a(),c(g,{key:_.id+"button"},[(a(),w(M(_.id+"-nav-button"))),I!==e.visible.length-1?(a(),w(s,{key:0,class:"mapnav-divider"})):C("v-if",!0)],64))),128))])])),[[d]])])}var q=u(T,[["render",Q],["__scopeId","data-v-3550fae6"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/mapnav/mapnav.vue"]]);class K extends k{get config(){return super.config}_parseConfig(t){if(!t)return;const o=t.items.map(n=>({id:n}));this.$vApp.$store.set("mapnav/items",o.reduce((n,r)=>(n[r.id]=r,n),{})),this.$vApp.$store.set("mapnav/order",o.map(n=>n.id)),this._validateItems()}_validateItems(){const t=["geolocator","zoom","home","fullscreen"];this.$vApp.$store.get("mapnav/order").forEach(o=>{(this.$iApi.fixture.get(o)||t.includes(o))&&this.$vApp.$store.set(`mapnav/items@${o}.componentId`,`${o}-nav-button`)})}}class U{items={};order=[]}const W={visible(e){return e.order.map(t=>e.items[t]).filter(t=>t.componentId)}},X={removeItem(e,t){e.commit("REMOVE_ITEM",t)}},Y={REMOVE_ITEM(e,t){t in e.items&&delete e.items[t];let o=e.order.indexOf(t);o!==-1&&e.order.splice(o,1)}};function ee(){const e=new U;return{namespaced:!0,state:e,getters:{...W},actions:{...X},mutations:{...Y,...y.mutations(["items","order"])}}}var te={en:{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen"},fr:{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arri\xE8re","mapnav.home":"Accueil","mapnav.fullscreen":"Plein \xC9cran"}};class ne extends K{async added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("mapnav",ee()),Object.entries(te).forEach(s=>this.$vApp.$i18n.mergeLocaleMessage(...s));const{vNode:t,destroy:o,el:n}=this.mount(q,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(n.childNodes[0]),this._parseConfig(this.config);let m=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s)),p=this.$iApi.event.on(N.COMPONENT,()=>{this._parseConfig(this.config)});this.removed=()=>{console.log(`[fixture] ${this.id} removed`),m(),this.$iApi.event.off(p);let s={...this.$vApp.$store.get("mapnav/items")};Object.keys(s).forEach(d=>this.$iApi.$vApp.$store.dispatch("mapnav/removeItem",d)),this.$vApp.$store.unregisterModule("mapnav"),o()}}}export{ne as default};
