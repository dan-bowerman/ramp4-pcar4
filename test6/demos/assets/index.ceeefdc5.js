import{eQ as i,et as c,eE as d,eu as u,ew as p,ex as g,eA as h,eJ as m,eR as v}from"./main.7dbc90fb.js";var _={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}};class ${enabled=!1}const f={},b={setEnabled(e,s){e.commit("SET_ENABLED",s)}},A={SET_ENABLED(e,s){e.enabled=s}};var t=(e=>(e.enabled="scrollguard/enabled",e))(t||{});function w(){const e=new $;return{namespaced:!0,state:e,getters:{...f},actions:{...b},mutations:{...A,...i.mutations(e)}}}const E=c({name:"MapScrollguardV",mounted(){this.$iApi.$vApp.$el.querySelector(".inner-shell + .esri-view").addEventListener("wheel",this.wheelHandler,{capture:!0})},beforeUnmount(){this.$iApi.$vApp.$el.querySelector(".inner-shell + .esri-view").removeEventListener("wheel",this.wheelHandler,{capture:!0})},data(){return{enabled:d(t.enabled)}},methods:{wheelHandler(e){if(!this.enabled)return;const s=this.$el.classList;e.ctrlKey?(s.remove("sg-active"),s.add("sg-scrolling")):(e.stopPropagation(),s.remove("sg-scrolling"),s.add("sg-active"),window.setTimeout(()=>s.remove("sg-active"),2e3))}}}),S={class:"sg",ref:"scrollGuard"},x={class:"sg-label"};function y(e,s,o,a,l,n){return p(),g("div",S,[h("p",x,m(e.$t("scrollguard.instructions")),1)],512)}var C=u(E,[["render",y],["__scopeId","data-v-29010e07"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/scrollguard/map-scrollguard.vue"]]);class L extends v{setEnabled(s){this.$vApp.$store.set(t.enabled,s)}_parseConfig(s){this.$vApp.$store.set(t.enabled,s?.enabled||!1)}get config(){return super.config}}class N extends L{added(){console.log(`[fixture] ${this.id} added`),Object.entries(_).forEach(r=>this.$vApp.$i18n.mergeLocaleMessage(...r)),this.$vApp.$store.registerModule("scrollguard",w()),this._parseConfig(this.config);let s=this.$vApp.$watch(()=>this.config,r=>this._parseConfig(r));const{vNode:o,destroy:a,el:l}=this.mount(C,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(l.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),s(),this.$vApp.$store.unregisterModule("scrollguard"),a()}}}export{N as default};
