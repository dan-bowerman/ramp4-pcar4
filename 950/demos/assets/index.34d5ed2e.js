import{ew as _,ex as g,ey as u,ez as s,eA as b,eB as I,eC as m,eD as v,eE as l,eF as A,eG as y,eH as B,eI as S,eJ as C,eK as E,eL as N,eM as V,eN as h,eO as x,eP as D,eQ as w,eR as L,eS as F,eT as T,eU as H}from"./main.5d3fa3f4.js";const O=_({name:"DefaultAppbarButtonV",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1}},computed:{panelButton(){return this.$iApi.panel.get(this.panelId)?.button}},methods:{onClickFunction(){this.minimize?this.$iApi.panel.toggleMinimize(this.panelId):this.$iApi.panel.toggle(this.panelId)}}}),P=["innerHTML"];function R(t,e,r,a,i,n){const o=u("appbar-button");return t.panelButton?(s(),b(o,{key:0,onClickFunction:t.onClickFunction,tooltip:t.$t(t.panelButton.tooltip),id:t.panelId},{default:I(()=>[m("div",{class:"fill-current w-24 h-24 ml-8 sm:ml-20",innerHTML:t.panelButton.icon},null,8,P)]),_:1},8,["onClickFunction","tooltip","id"])):v("v-if",!0)}var j=g(O,[["render",R],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/default-button.vue"]]);const q=_({name:"AppbarDividerV"}),G={class:"border-b p-0 self-center w-2/3"};function J(t,e,r,a,i,n){return s(),l("span",G)}var K=g(q,[["render",J],["__scopeId","data-v-655a8815"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/divider.vue"]]);const Q=_({name:"MoreAppbarButtonV",props:{position:{type:String,default:"bottom-right"},tooltip:{type:[String,Boolean],default:!1},tooltipPlacement:{type:String,default:"bottom"}},data(){return{open:!1}},mounted(){window.addEventListener("click",t=>{t.target instanceof HTMLElement&&!this.$el.contains(t.target)&&(this.open=!1)},{capture:!0})}}),U=t=>(C("data-v-18020f26"),t=t(),E(),t),W={class:"relative inset-x-0 w-full h-48 text-center"},X=["content"],Y=U(()=>m("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[m("path",{d:"M0 0h24v24H0z",fill:"none"}),m("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)),Z=[Y],tt=["position"];function et(t,e,r,a,i,n){const o=A("focus-item"),p=A("tippy");return s(),l("div",W,[y((s(),l("button",{class:"text-gray-400 w-full h-full focus:outline-none hover:text-white",onClick:e[0]||(e[0]=f=>t.open=!t.open),content:t.$t("appbar.more")},Z,8,X)),[[o],[p,{placement:"right"}]]),y(m("div",{onBlur:e[1]||(e[1]=f=>t.open=!1),position:t.position,id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute py-8 w-64 bg-white rounded text-center z-10"},[S(t.$slots,"default",{},void 0,!0)],40,tt),[[B,t.open]])])}var ot=g(Q,[["render",et],["__scopeId","data-v-18020f26"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/more-button.vue"]]);const nt=_({name:"NotificationsAppbarButtonV",data(){return{number:this.get("notification/notificationNumber")}},methods:{onClick(){this.$iApi.panel.toggle("notifications")}}}),rt=t=>(C("data-v-2ccdb150"),t=t(),E(),t),at=rt(()=>m("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[m("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),it={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"};function st(t,e,r,a,i,n){const o=u("appbar-button",!0);return s(),b(o,{onClickFunction:t.onClick,tooltip:t.$t("notifications.title"),class:"notification-button",id:""},{default:I(()=>[v(" https://fonts.google.com/icons?selected=Material%20Icons%3Anotifications "),at,t.number&&t.number>0?(s(),l("span",it,N(t.number),1)):v("v-if",!0)]),_:1},8,["onClickFunction","tooltip"])}var pt=g(nt,[["render",st],["__scopeId","data-v-2ccdb150"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/components/notification-center/appbar-button.vue"]]);const lt=_({name:"AppbarV",components:{"default-button":j,divider:K,"more-button":ot,"notifications-appbar-button":pt,"about-ramp-dropdown":V},data(){return{items:this.get("appbar/visible"),temporaryItems:this.get("appbar/temporary"),overflow:!1}},updated(){this.$nextTick(()=>{const t=this.$refs.el;let e=[...t.childNodes],r=e[e.length-2].clientTop,a=document.getElementById("dropdown");for(let o=e.length-3;o>=0;o--){let p=e[o].clientTop+e[o].clientHeight;if(r&&a&&(p>=r||this.overflow&&p+48>=r))console.log(`[${o}]`,e[o].getBoundingClientRect()),e[o].classList.remove("hover:text-white","text-gray-400"),e[o].classList.add("text-black","hover:bg-gray-100"),t.removeChild(e[o]),a.appendChild(e[o]),this.overflow||(this.overflow=!0);else break}let i=document.getElementById("more"),n=t.clientTop+t.clientHeight;if(this.overflow&&r&&i&&a&&n!==0&&(n<=r-48||a.childElementCount==1)){for(;n<=r-48||a.childElementCount==1;){let o=a.firstElementChild;o&&(o.classList.remove("text-black","hover:bg-gray-100"),o.classList.add("text-gray-400","hover:text-white"),a.removeChild(o),t.insertBefore(o,i))}a.childElementCount==0&&(this.overflow=!1)}})},methods:{addComponentIdSuffix(t){return t.includes("-appbar-button")?t:`${t}-appbar-button`}}}),ct={class:"absolute top-0 left-0 bottom-28 flex flex-col items-stretch w-40 pointer-events-auto appbar bg-black-75 z-50 sm:w-64 sm:z-0 sm:bottom-38",ref:"el"};function dt(t,e,r,a,i,n){const o=u("default-button"),p=u("divider"),f=u("more-button"),c=u("notifications-appbar-button"),z=u("about-ramp-dropdown"),M=A("focus-list");return y((s(),l("div",ct,[(s(!0),l(h,null,x(t.items,($,ht)=>(s(),l(h,null,[(s(!0),l(h,null,x($,(d,k)=>(s(),l(h,null,[typeof d=="string"?(s(),b(o,{key:`${d}-${k}`,panelId:d,class:"appbar-item h-48"},null,8,["panelId"])):(s(),b(D(t.addComponentIdSuffix(d.componentId)),{key:`${d}-${k}`,options:d.options,id:d.id,class:"appbar-item h-48"},null,8,["options","id"]))],64))),256)),w(p,{class:"appbar-item"})],64))),256)),(s(!0),l(h,null,x(t.temporaryItems,$=>(s(),b(o,{panelId:$,minimize:!0,key:`${$}-temp`,class:"appbar-item h-48"},null,8,["panelId"]))),128)),y(w(f,{id:"more"},null,512),[[B,t.overflow]]),w(c,{class:"appbar-item bottom-48 h-48 sm:display-none"}),v(" TODO: disabled this button for now, revist this when we need it in the future "),v(' <nav-button id="nav"></nav-button> '),w(z,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})])),[[M]])}var ut=g(lt,[["render",dt],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/appbar/appbar.vue"]]);class mt extends L{get config(){return super.config}_parseConfig(e){if(!e)return;let r;Array.isArray(e.items[0])?r=e.items:r=[e.items];let a=[];r.forEach(i=>{a.push(i.map(n=>typeof n=="string"?n:new F(n)))}),this.$vApp.$store.set("appbar/items",a.flat().reduce((i,n)=>(i[n.id||n]=n,i),{})),this.$vApp.$store.set("appbar/order",a.map(i=>i.map(n=>n.id||n))),this._validateItems()}_validateItems(){this.$vApp.$store.get("appbar/order").flat().forEach(e=>{typeof this.$vApp.$store.get(`appbar/items@${e}`)!="string"&&[e].some(r=>{this.$iApi.fixture.get(r)&&this.$vApp.$store.set(`appbar/items@${e}.componentId`,r)})})}}var ft={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class vt extends mt{initialized(){console.log(`[fixture] ${this.id} initialized`)}async added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("appbar",T()),Object.entries(ft).forEach(p=>this.$vApp.$i18n.mergeLocaleMessage(...p));const{vNode:e,destroy:r,el:a}=this.mount(ut,{app:this.$element}),i=this.$vApp.$el.getElementsByClassName("inner-shell")[0];i.insertBefore(a.childNodes[0],i.querySelector(".panel-stack")),this._parseConfig(this.config);let n=this.$vApp.$watch(()=>this.config,p=>this._parseConfig(p)),o=[];o.push(this.$iApi.event.on(H.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),n(),o.forEach(c=>this.$iApi.event.off(c));let p={...this.$vApp.$store.get("appbar/items")},f=[...this.$vApp.$store.get("appbar/temporary")];Object.keys(p).forEach(c=>this.$iApi.$vApp.$store.dispatch("appbar/removeButton",c)),f.forEach(c=>this.$iApi.$vApp.$store.dispatch("appbar/removeButton",c)),this.$vApp.$store.unregisterModule("appbar"),r()}}}export{vt as default};
