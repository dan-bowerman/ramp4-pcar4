import{ew as p,eU as o,ex as d,ez as h,eE as u,eC as l,eL as c,eR as m}from"./main.f21fb970.js";var f={en:{"panguard.instructions":"Use two fingers to scroll the map"},fr:{"panguard.instructions":"Utiliser deux doigts pour faire d\xE9filer la carte"}};const g=p({name:"MapPanguardV",data(){return{timeoutID:-1,esriHandlers:[],rampHanders:[]}},mounted(){this.setup(),this.rampHanders.push(this.$iApi.event.on(o.MAP_CREATED,()=>{this.setup()})),this.rampHanders.push(this.$iApi.event.on(o.MAP_DESTROYED,()=>{this.esriHandlers.forEach(e=>e.remove())})),this.rampHanders.push(this.$iApi.event.on(o.MAP_REFRESH_START,()=>{this.esriHandlers.forEach(e=>e.remove())})),this.rampHanders.push(this.$iApi.event.on(o.MAP_REFRESH_END,()=>{this.setup()}))},beforeUnmount(){this.rampHanders.forEach(e=>this.$iApi.event.off(e)),this.esriHandlers.forEach(e=>e.remove())},methods:{setup(){const e=new Map;this.$iApi.geo.map.viewPromise.then(()=>{this.esriHandlers.push(this.$iApi.geo.map.esriView.on("pointer-down",t=>{t.pointerType==="touch"&&e.set(t.pointerId,{x:t.x,y:t.y})})),this.esriHandlers.push(this.$iApi.geo.map.esriView.on(["pointer-up","pointer-leave"],t=>{t.pointerType==="touch"&&e.delete(t.pointerId)})),this.esriHandlers.push(this.$iApi.geo.map.esriView.on("pointer-move",t=>{const{pointerId:a,pointerType:r,x:n,y:i}=t,s=e.get(a);!s||r!=="touch"||e.size!==1||Math.sqrt(Math.pow(n-s.x,2)+Math.pow(i-s.y,2))<20||(this.$el.classList.add("active"),this.timeoutID!==-1&&clearTimeout(this.timeoutID),this.timeoutID=window.setTimeout(()=>{this.$el.classList.remove("active")},2e3),window.scrollBy(s.x-n,s.y-i))}))})}}}),v={class:"pan-guard",ref:"panGuard"},_={class:"label"};function $(e,t,a,r,n,i){return h(),u("div",v,[l("p",_,c(e.$t("panguard.instructions")),1)],512)}var x=d(g,[["render",$],["__scopeId","data-v-21659f52"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/panguard/map-panguard.vue"]]);class y extends m{added(){console.log(`[fixture] ${this.id} added`),Object.entries(f).forEach(i=>this.$vApp.$i18n.mergeLocaleMessage(...i));const{vNode:t,destroy:a,el:r}=this.mount(x,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),a()}}}export{y as default};
