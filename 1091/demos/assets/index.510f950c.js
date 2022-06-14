import{ev as _,ew as $,ex as u,ey as s,ez as v,eA as B,eB as m,eC as b,eD as l,eE as x,eF as y,eG as k,eH as S,eI as C,eJ as E,eK as N,eL as V,eM as f,eN as A,eO as D,eP as w,eQ as L,eR as F,eS as T,eT as H}from"./main.748a25d3.js";const O=_({name:"DefaultAppbarButtonV",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1}},computed:{panelButton(){return this.$iApi.panel.get(this.panelId)?.button}},methods:{onClickFunction(){this.minimize?this.$iApi.panel.toggleMinimize(this.panelId):this.$iApi.panel.toggle(this.panelId)}}}),P=["innerHTML"];function R(e,t,r,i,a,n){const o=u("appbar-button");return e.panelButton?(s(),v(o,{key:0,onClickFunction:e.onClickFunction,tooltip:e.$t(e.panelButton.tooltip),id:e.panelId},{default:B(()=>[m("div",{class:"fill-current w-24 h-24 ml-8 sm:ml-20",innerHTML:e.panelButton.icon},null,8,P)]),_:1},8,["onClickFunction","tooltip","id"])):b("v-if",!0)}var j=$(O,[["render",R],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/default-button.vue"]]);const q=_({name:"AppbarDividerV"}),G={class:"border-b p-0 self-center w-2/3"};function J(e,t,r,i,a,n){return s(),l("span",G)}var K=$(q,[["render",J],["__scopeId","data-v-655a8815"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/divider.vue"]]);const Q=_({name:"MoreAppbarButtonV",props:{position:{type:String,default:"bottom-right"},tooltip:{type:[String,Boolean],default:!1},tooltipPlacement:{type:String,default:"bottom"}},data(){return{open:!1}},mounted(){window.addEventListener("click",e=>{e.target instanceof HTMLElement&&!this.$el.contains(e.target)&&(this.open=!1)},{capture:!0})}}),U=e=>(C("data-v-18020f26"),e=e(),E(),e),W={class:"relative inset-x-0 w-full h-48 text-center"},X=["content"],Y=U(()=>m("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[m("path",{d:"M0 0h24v24H0z",fill:"none"}),m("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)),Z=[Y],ee=["position"];function te(e,t,r,i,a,n){const o=x("focus-item"),p=x("tippy");return s(),l("div",W,[y((s(),l("button",{class:"text-gray-400 w-full h-full focus:outline-none hover:text-white",onClick:t[0]||(t[0]=h=>e.open=!e.open),content:e.$t("appbar.more")},Z,8,X)),[[o],[p,{placement:"right"}]]),y(m("div",{onBlur:t[1]||(t[1]=h=>e.open=!1),position:e.position,id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute py-8 w-64 bg-white rounded text-center z-10"},[S(e.$slots,"default",{},void 0,!0)],40,ee),[[k,e.open]])])}var oe=$(Q,[["render",te],["__scopeId","data-v-18020f26"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/more-button.vue"]]);const ne=_({name:"NotificationsAppbarButtonV",data(){return{number:this.get("notification/notificationNumber")}},methods:{onClick(){this.$iApi.panel.toggle("notifications")}}}),re=e=>(C("data-v-2ccdb150"),e=e(),E(),e),ie=re(()=>m("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[m("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),ae={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"};function se(e,t,r,i,a,n){const o=u("appbar-button",!0);return s(),v(o,{onClickFunction:e.onClick,tooltip:e.$t("notifications.title"),class:"notification-button",id:""},{default:B(()=>[b(" https://fonts.google.com/icons?selected=Material%20Icons%3Anotifications "),ie,e.number&&e.number>0?(s(),l("span",ae,N(e.number),1)):b("v-if",!0)]),_:1},8,["onClickFunction","tooltip"])}var pe=$(ne,[["render",se],["__scopeId","data-v-2ccdb150"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/components/notification-center/appbar-button.vue"]]);const le=_({name:"AppbarV",components:{"default-button":j,divider:K,"more-button":oe,"notifications-appbar-button":pe,"about-ramp-dropdown":V},data(){return{items:this.get("appbar/visible"),temporaryItems:this.get("appbar/temporary"),overflow:!1}},updated(){this.$nextTick(()=>{const e=this.$refs.el;let t=[...e.childNodes],r=t[t.length-2].clientTop,i=document.getElementById("dropdown");for(let o=t.length-3;o>=0;o--){let p=t[o].clientTop+t[o].clientHeight;if(r&&i&&(p>=r||this.overflow&&p+48>=r))console.log(`[${o}]`,t[o].getBoundingClientRect()),t[o].classList.remove("hover:text-white","text-gray-400"),t[o].classList.add("text-black","hover:bg-gray-100"),e.removeChild(t[o]),i.appendChild(t[o]),this.overflow||(this.overflow=!0);else break}let a=document.getElementById("more"),n=e.clientTop+e.clientHeight;if(this.overflow&&r&&a&&i&&n!==0&&(n<=r-48||i.childElementCount==1)){for(;n<=r-48||i.childElementCount==1;){let o=i.firstElementChild;o&&(o.classList.remove("text-black","hover:bg-gray-100"),o.classList.add("text-gray-400","hover:text-white"),i.removeChild(o),e.insertBefore(o,a))}i.childElementCount==0&&(this.overflow=!1)}})},methods:{addComponentIdSuffix(e){return e.includes("-appbar-button")?e:`${e}-appbar-button`}}}),ce={class:"absolute top-0 left-0 bottom-28 flex flex-col items-stretch w-40 pointer-events-auto appbar bg-black-75 z-50 sm:w-64 sm:z-0 sm:bottom-38",ref:"el"};function de(e,t,r,i,a,n){const o=u("default-button"),p=u("divider"),h=u("more-button"),c=u("notifications-appbar-button"),M=u("about-ramp-dropdown"),z=x("focus-list");return y((s(),l("div",ce,[(s(!0),l(f,null,A(e.items,(g,fe)=>(s(),l(f,null,[(s(!0),l(f,null,A(g,(d,I)=>(s(),l(f,null,[typeof d=="string"?(s(),v(o,{key:`${d}-${I}`,panelId:d,class:"appbar-item h-48"},null,8,["panelId"])):(s(),v(D(e.addComponentIdSuffix(d.componentId)),{key:`${d}-${I}`,options:d.options,id:d.id,class:"appbar-item h-48"},null,8,["options","id"]))],64))),256)),w(p,{class:"appbar-item"})],64))),256)),(s(!0),l(f,null,A(e.temporaryItems,g=>(s(),v(o,{panelId:g,minimize:!0,key:`${g}-temp`,class:"appbar-item h-48"},null,8,["panelId"]))),128)),y(w(h,{id:"more"},null,512),[[k,e.overflow]]),w(c,{class:"appbar-item bottom-48 h-48 sm:display-none"}),b(" TODO: disabled this button for now, revist this when we need it in the future "),b(' <nav-button id="nav"></nav-button> '),w(M,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})])),[[z]])}var ue=$(le,[["render",de],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/appbar.vue"]]);class me extends L{get config(){return super.config}_parseConfig(t){if(!t)return;let r;Array.isArray(t.items[0])?r=t.items:r=[t.items];let i=[];r.forEach(a=>{i.push(a.map(n=>typeof n=="string"?n:new F(n)))}),this.$vApp.$store.set("appbar/items",i.flat().reduce((a,n)=>(a[n.id||n]=n,a),{})),this.$vApp.$store.set("appbar/order",i.map(a=>a.map(n=>n.id||n))),this._validateItems()}_validateItems(){this.$vApp.$store.get("appbar/order").flat().forEach(t=>{typeof this.$vApp.$store.get(`appbar/items@${t}`)!="string"&&[t].some(r=>{this.$iApi.fixture.get(r)&&this.$vApp.$store.set(`appbar/items@${t}.componentId`,r)})})}}var he={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class be extends me{initialized(){console.log(`[fixture] ${this.id} initialized`)}async added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("appbar",T()),Object.entries(he).forEach(p=>this.$vApp.$i18n.mergeLocaleMessage(...p));const{vNode:t,destroy:r,el:i}=this.mount(ue,{app:this.$element}),a=this.$vApp.$el.getElementsByClassName("inner-shell")[0];a.insertBefore(i.childNodes[0],a.querySelector(".panel-stack")),this._parseConfig(this.config);let n=this.$vApp.$watch(()=>this.config,p=>this._parseConfig(p)),o=[];o.push(this.$iApi.event.on(H.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),n(),o.forEach(c=>this.$iApi.event.off(c));let p={...this.$vApp.$store.get("appbar/items")},h=[...this.$vApp.$store.get("appbar/temporary")];Object.keys(p).forEach(c=>this.$iApi.$vApp.$store.dispatch("appbar/removeButton",c)),h.forEach(c=>this.$iApi.$vApp.$store.dispatch("appbar/removeButton",c)),this.$vApp.$store.unregisterModule("appbar"),r()}}}export{be as default};
