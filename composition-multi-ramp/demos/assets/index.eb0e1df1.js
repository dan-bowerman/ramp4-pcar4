import{f2 as i,et as c,eu as d,ew as u,eB as p,ez as g,eI as h,eO as m}from"./multi-ramp.54622117.js";var v={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}};class f{enabled=!1}const _={},$={setEnabled(e,s){e.commit("SET_ENABLED",s)}},b={SET_ENABLED(e,s){e.enabled=s}};var t=(e=>(e.enabled="scrollguard/enabled",e))(t||{});function w(){const e=new f;return{namespaced:!0,state:e,getters:{..._},actions:{...$},mutations:{...b,...i.mutations(e)}}}const A=c({name:"MapScrollguardV",mounted(){this.$iApi.$vApp.$el.querySelector(".inner-shell + .esri-view").addEventListener("wheel",this.wheelHandler,{capture:!0})},beforeUnmount(){this.$iApi.$vApp.$el.querySelector(".inner-shell + .esri-view").removeEventListener("wheel",this.wheelHandler,{capture:!0})},data(){return{enabled:this.get(t.enabled)}},methods:{wheelHandler(e){if(!this.enabled)return;const s=this.$el.classList;e.ctrlKey?(s.remove("sg-active"),s.add("sg-scrolling")):(e.stopPropagation(),s.remove("sg-scrolling"),s.add("sg-active"),window.setTimeout(()=>s.remove("sg-active"),2e3))}}}),S={class:"sg",ref:"scrollGuard"},E={class:"sg-label"};function x(e,s,o,a,l,n){return u(),p("div",S,[g("p",E,h(e.$t("scrollguard.instructions")),1)],512)}var y=d(A,[["render",x],["__scopeId","data-v-29010e07"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/scrollguard/map-scrollguard.vue"]]);class C extends m{setEnabled(s){this.$vApp.$store.set(t.enabled,s)}_parseConfig(s){this.$vApp.$store.set(t.enabled,s?.enabled||!1)}get config(){return super.config}}class L extends C{added(){console.log(`[fixture] ${this.id} added`),Object.entries(v).forEach(r=>this.$vApp.$i18n.mergeLocaleMessage(...r)),this.$vApp.$store.registerModule("scrollguard",w()),this._parseConfig(this.config);let s=this.$vApp.$watch(()=>this.config,r=>this._parseConfig(r));const{vNode:o,destroy:a,el:l}=this.mount(y,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(l.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),s(),this.$vApp.$store.unregisterModule("scrollguard"),a()}}}export{L as default};
