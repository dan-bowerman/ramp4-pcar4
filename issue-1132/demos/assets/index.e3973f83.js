import{ev as p,eT as o,ew as d,ey as h,eD as u,eB as c,eK as l,eQ as m}from"./main.a76a9de0.js";var f={en:{"panguard.instructions":"Use two fingers to scroll the map"},fr:{"panguard.instructions":"Utiliser deux doigts pour faire d\xE9filer la carte"}};const _=p({name:"MapPanguardV",data(){return{timeoutID:-1,esriHandlers:[],rampHanders:[]}},mounted(){this.setup(),this.rampHanders.push(this.$iApi.event.on(o.MAP_CREATED,()=>{this.setup()})),this.rampHanders.push(this.$iApi.event.on(o.MAP_DESTROYED,()=>{this.esriHandlers.forEach(e=>e.remove())})),this.rampHanders.push(this.$iApi.event.on(o.MAP_REFRESH_START,()=>{this.esriHandlers.forEach(e=>e.remove())})),this.rampHanders.push(this.$iApi.event.on(o.MAP_REFRESH_END,()=>{this.setup()}))},beforeUnmount(){this.rampHanders.forEach(e=>this.$iApi.event.off(e)),this.esriHandlers.forEach(e=>e.remove())},methods:{setup(){const e=new Map;this.$iApi.geo.map.viewPromise.then(()=>{this.esriHandlers.push(this.$iApi.geo.map.esriView.on("pointer-down",s=>{s.pointerType==="touch"&&e.set(s.pointerId,{x:s.x,y:s.y})})),this.esriHandlers.push(this.$iApi.geo.map.esriView.on(["pointer-up","pointer-leave"],s=>{s.pointerType==="touch"&&e.delete(s.pointerId)})),this.esriHandlers.push(this.$iApi.geo.map.esriView.on("pointer-move",s=>{const{pointerId:r,pointerType:a,x:n,y:t}=s,i=e.get(r);!i||a!=="touch"||e.size!==1||Math.sqrt(Math.pow(n-i.x,2)+Math.pow(t-i.y,2))<20||(this.$el.classList.add("active"),this.timeoutID!==-1&&clearTimeout(this.timeoutID),this.timeoutID=window.setTimeout(()=>{this.$el.classList.remove("active")},2e3),window.scrollBy(i.x-n,i.y-t))}))})}}}),v={class:"pan-guard",ref:"panGuard"},g={class:"label"};function $(e,s,r,a,n,t){return h(),u("div",v,[c("p",g,l(e.$t("panguard.instructions")),1)],512)}var A=d(_,[["render",$],["__scopeId","data-v-21659f52"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/panguard/map-panguard.vue"]]);class x extends m{added(){console.log(`[fixture] ${this.id} added`),Object.entries(f).forEach(t=>this.$vApp.$i18n.mergeLocaleMessage(...t));const{vNode:s,destroy:r,el:a}=this.mount(A,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),r()}}}export{x as default};
