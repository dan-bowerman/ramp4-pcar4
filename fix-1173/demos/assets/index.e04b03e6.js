import{f5 as l,ew as c,ex as d,ez as p,eE as u,eC as g,eL as h,eR as m}from"./main.f21fb970.js";var v={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}};class f{enabled=!1}const _={},$={setEnabled(e,t){e.commit("SET_ENABLED",t)}},b={SET_ENABLED(e,t){e.enabled=t}};var s=(e=>(e.enabled="scrollguard/enabled",e))(s||{});function w(){const e=new f;return{namespaced:!0,state:e,getters:{..._},actions:{...$},mutations:{...b,...l.mutations(e)}}}const x=c({name:"MapScrollguardV",mounted(){this.$iApi.$vApp.$el.querySelector(".inner-shell + .esri-view").addEventListener("wheel",this.wheelHandler,{capture:!0})},beforeUnmount(){this.$iApi.$vApp.$el.querySelector(".inner-shell + .esri-view").removeEventListener("wheel",this.wheelHandler,{capture:!0})},data(){return{enabled:this.get(s.enabled)}},methods:{wheelHandler(e){if(!this.enabled)return;const t=this.$el.classList;e.ctrlKey?(t.remove("sg-active"),t.add("sg-scrolling")):(e.stopPropagation(),t.remove("sg-scrolling"),t.add("sg-active"),window.setTimeout(()=>t.remove("sg-active"),2e3))}}}),A={class:"sg",ref:"scrollGuard"},E={class:"sg-label"};function S(e,t,n,a,o,i){return p(),u("div",A,[g("p",E,h(e.$t("scrollguard.instructions")),1)],512)}var y=d(x,[["render",S],["__scopeId","data-v-29010e07"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/scrollguard/map-scrollguard.vue"]]);class C extends m{setEnabled(t){this.$vApp.$store.set(s.enabled,t)}_parseConfig(t){this.$vApp.$store.set(s.enabled,t?.enabled||!1)}get config(){return super.config}}class z extends C{added(){console.log(`[fixture] ${this.id} added`),Object.entries(v).forEach(r=>this.$vApp.$i18n.mergeLocaleMessage(...r)),this.$vApp.$store.registerModule("scrollguard",w()),this._parseConfig(this.config);let t=this.$vApp.$watch(()=>this.config,r=>this._parseConfig(r));const{vNode:n,destroy:a,el:o}=this.mount(y,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(o.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),t(),this.$vApp.$store.unregisterModule("scrollguard"),a()}}}export{z as default};
