import{ew as o,eU as t,ex as h,ez as l,eE as n,e_ as d,eJ as p,eK as c,eC as s,eR as v}from"./main.ec877ec7.js";const u=o({name:"CrosshairsV",data(){return{visible:!1,handlers:[]}},mounted(){this.handlers.push(this.$iApi.event.on(t.MAP_EXTENTCHANGE,()=>{this.$iApi.geo.map.keysActive&&(this.visible=!0)})),this.handlers.push(this.$iApi.event.on(t.MAP_FOCUS,()=>{this.$iApi.geo.map.mouseFocus||(this.visible=!0)})),this.handlers.push(this.$iApi.event.on(t.MAP_MOUSEDOWN,()=>{this.visible=!1})),this.handlers.push(this.$iApi.event.on(t.MAP_BLUR,()=>{this.visible=!1}))},beforeUnmount(){this.handlers.forEach(e=>this.$iApi.event.off(e))}}),_=e=>(p("data-v-127554b4"),e=e(),c(),e),f=_(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},[s("g",{fill:"#545353",stroke:"#fff",id:"crosshairs"},[s("ellipse",{ry:".254",rx:".262",id:"path3808",cx:"12",cy:"12","stroke-width":".076"}),s("path",{d:"M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",id:"rect4632-6","stroke-width":".09"}),s("path",{d:"M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",id:"rect4632-6-0","stroke-width":".09"}),s("path",{d:"M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",id:"rect4632-6-4","stroke-width":".09"}),s("path",{d:"M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",id:"rect4632-6-9","stroke-width":".09"})])],-1)),m=[f];function $(e,i,r,a,x,A){return l(),n("div",{class:d(["crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230",{"opacity-0":!e.visible}])},m,2)}var w=h(u,[["render",$],["__scopeId","data-v-127554b4"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/crosshairs/crosshairs.vue"]]);class g extends v{added(){console.log(`[fixture] ${this.id} added`);const{destroy:i,el:r}=this.mount(w,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),i()}}}export{g as default};
