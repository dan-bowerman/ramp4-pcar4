import{f5 as c,fD as g,eV as u,fE as $,h as A,eW as l,fF as M,eR as b,ew as x,eU as h,ex as E,eF as _,ez as m,eE as d,eC as n,eD as w,e_ as y,eG as B,fb as f,eJ as I,eK as S}from"./main.0395d05a.js";class V{mapConfig=void 0;basemaps={};startMinimized=!0;expandFactor=1.5}const z={},C={updateIntialBasemap:(t,e)=>{t.commit("SET_INITIAL_BASEMAP",e)}},P={SET_INITIAL_BASEMAP:(t,e)=>{t.mapConfig.initialBasemapId=e}};var o=(t=>(t.mapConfig="overviewmap/mapConfig",t.basemaps="overviewmap/basemaps",t.startMinimized="overviewmap/startMinimized",t.expandFactor="overviewmap/expandFactor",t.updateIntialBasemap="overviewmap/updateIntialBasemap!",t))(o||{});function T(){const t=new V;return{namespaced:!0,state:t,getters:{...z},actions:{...C,...c.actions(t)},mutations:{...P,...c.mutations(t)}}}class R extends g{constructor(e){super(e)}createMapView(e){if(!e)throw new Error("Attempted to create overview map view without a basemap");const i=typeof e=="string"?this.findBasemap(e):e;this.applyBasemap(i),this._rampExtentSet=this.$iApi.geo.map.getExtentSet().clone(),this._rampSR=this._rampExtentSet.sr.clone();const a=this.$iApi.$vApp.$store.get(o.expandFactor);this.esriView=u(new $({map:this.esriMap,container:this._targetDiv,constraints:{rotationEnabled:!1},spatialReference:this._rampSR.toESRI(),extent:this.$iApi.geo.map.getExtent().toESRI().expand(a),navigation:{browserTouchPanEnabled:!1}})),this.esriView.ui.components=[];const r={symbol:{type:"simple-fill",color:[0,0,0,.25],outline:null},visible:!0};this.esriView.graphics.add(new A(r)),this.handlers.push({type:"mouse-wheel",handler:this.esriView.on("mouse-wheel",s=>{s.stopPropagation()})}),this.handlers.push({type:"double-click",handler:this.esriView.on("double-click",s=>{s.stopPropagation()})}),this.handlers.push({type:"key-down",handler:this.esriView.on("key-down",s=>{s.stopPropagation()})}),this.handlers.push({type:"key-up",handler:this.esriView.on("key-up",s=>{s.stopPropagation()})}),this.handlers.push({type:"drag",handler:this.esriView.on("drag",s=>{s.stopPropagation(),this.mapDrag(s)})}),this.esriView.container.addEventListener("touchmove",s=>{s.preventDefault()}),this._viewPromise.resolveMe(),this.created=!0}destroyMapView(){this.esriView?.container.removeEventListener("touchmove",e=>{e.preventDefault()}),this.esriView?.graphics.removeAll(),super.destroyMapView()}findBasemap(e){const i=this._basemapStore.find(a=>a.id===e);if(i)return i;{const a=this.$iApi.$vApp.$store.get(l.getMapConfig);if(a){let r=a.basemaps.find(s=>s.id===e);if(r)return new M(r)}}throw new Error(`Invalid basemap id requested: ${e}`)}setBasemap(e){if(!this.esriView||!this.esriMap)return this.noMapErr(),!1;const i=this.findBasemap(e),r=(this.getCurrentBasemapId()?this.findBasemap(this.getCurrentBasemapId()):void 0)?.tileSchemaId!==i.tileSchemaId;return r?(this.destroyMapView(),this.createMapView(i)):this.applyBasemap(i),r}startExtent=null;async mapDrag(e){if(e.action==="start")await this.cursorHitTest(e)&&(this.startExtent=u(this.esriView.graphics.getItemAt(0).geometry));else if(this.startExtent){const i=this.esriView.toMap(e.origin),a=this.esriView.toMap({x:e.x,y:e.y}),r=this.startExtent.clone().offset(a.x-i.x,a.y-i.y,0);this.esriView.graphics.getItemAt(0).geometry=r,e.action==="end"&&(this.$iApi.geo.map.zoomMapTo(this.$iApi.geo.geom.geomEsriToRamp(r),void 0,!1),this.startExtent=null)}}updateOverview(e){const i=this.$iApi.$vApp.$store.get(o.expandFactor);this.zoomMapTo(e.expand(i),void 0,!1),this.esriView.graphics.getItemAt(0).geometry=this.$iApi.geo.map.esriView.extent}async cursorHitTest(e){return(await this.esriView.hitTest(e)).results.length>0}}class O extends b{_parseConfig(e){this.$vApp.$store.set(o.basemaps,e?.basemaps||{}),this.$vApp.$store.set(o.mapConfig,{basemaps:e?Object.values(e.basemaps):[]}),this.$vApp.$store.set(o.startMinimized,e?.startMinimized||!0),this.$vApp.$store.set(o.expandFactor,e?.expandFactor??1.5)}get config(){return super.config}}const F=x({name:"OverviewmapV",data(){return{mapConfig:this.get(o.mapConfig),basemaps:this.get(o.basemaps),startMinimized:this.get(o.startMinimized),overviewMap:new R(this.$iApi),minimized:!0,hoverOnExtent:!1,handlers:[]}},mounted(){this.$iApi.geo.map.viewPromise.then(()=>{this._adaptBasemap(),this.overviewMap.createMap(this.mapConfig,this.$el.querySelector(".overviewmap")),this.minimized=this.startMinimized,this.handlers.push(this.$iApi.event.on(h.MAP_EXTENTCHANGE,t=>{this.overviewMap.updateOverview(t)})),this.handlers.push(this.$iApi.event.on(h.MAP_CREATED,()=>{this._adaptBasemap()})),this.handlers.push(this.$iApi.event.on(h.MAP_REFRESH_END,()=>{this._adaptBasemap()})),this.handlers.push(this.$iApi.event.on(h.MAP_BASEMAPCHANGE,t=>{if(!t.schemaChanged&&this.overviewMap.created){const e=this.$iApi.$vApp.$store.get(l.getActiveBasemapConfig);e&&this.basemaps[e.tileSchemaId]===void 0&&this.overviewMap.setBasemap(t.basemapId)}}))})},beforeUnmount(){this.handlers.forEach(t=>this.$iApi.event.off(t)),this.overviewMap.destroyMap(),this.overviewMap=void 0,delete this.overviewMap},methods:{async cursorHitTest(t){this.hoverOnExtent=!this.minimized&&await this.overviewMap.cursorHitTest(t)},mapStyle(){return{height:`${this.minimized?48:200}px`,width:`${this.minimized?48:200}px`}},toggleStyle(){return{top:`${this.minimized?-6:-3}px`,right:`${this.minimized?-6:-3}px`,transform:`rotate(${this.minimized?225:45}deg)`}},_adaptBasemap(){const t=this.$iApi.$vApp.$store.get(l.getActiveBasemapConfig);if(!t){console.error("Overview Map could not obtain the basemap config used by the main map");return}try{const e=t?.tileSchemaId;if(!e)throw new Error("Overview Map could not obtain the tile schema of the main map");const i=this.basemaps[e];if(!i)throw new Error("Overview Map could not find a suitable basemap that matches the tile schema of the main map");this.overviewMap.created||this.$iApi.$vApp.$store.set(o.updateIntialBasemap,i.id),this.overviewMap.created&&this.overviewMap.viewPromise.then(()=>this.overviewMap.setBasemap(i.id))}catch{this.overviewMap.created||this.$iApi.$vApp.$store.set(o.updateIntialBasemap,t.id),this.overviewMap.viewPromise.then(()=>this.overviewMap.setBasemap(t.id))}}}}),k=t=>(I("data-v-b770d8e4"),t=t(),S(),t),L={class:"relative"},N={class:"relative h-full w-full overflow-hidden"},H={class:"absolute h-30 w-30 top-0 right-0"},D=["content"],G=k(()=>n("g",{id:"apple-keyboard-control"},[n("path",{d:"M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "})],-1)),j=[G];function q(t,e,i,a,r,s){const p=_("tippy");return m(),d("div",L,[n("div",{style:f(t.mapStyle()),class:"pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"},[w(" map "),n("div",N,[n("div",{class:y(["overviewmap absolute top-0 right-0 h-192 w-192",{"cursor-move":t.hoverOnExtent}]),onMousemove:e[0]||(e[0]=(...v)=>t.cursorHitTest&&t.cursorHitTest(...v))},null,34)]),w(" toggle "),n("div",H,[B((m(),d("button",{tabindex:"0",class:"cursor-pointer absolute h-full w-full",onClick:e[1]||(e[1]=v=>t.minimized=!t.minimized),content:t.$t(t.minimized?"overviewmap.expand":"overviewmap.minimize")},[(m(),d("svg",{class:"absolute fill-current text-gray-500 transition-all duration-300 ease-out",style:f(t.toggleStyle()),xmlns:"http://www.w3.org/2000/svg",fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},j,4))],8,D)),[[p,{placement:"left",hideOnClick:!1}]])])],4)])}var U=E(F,[["render",q],["__scopeId","data-v-b770d8e4"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/overviewmap/overviewmap.vue"]]),J={en:{"overviewmap.expand":"Expand Overview","overviewmap.minimize":"Minimize Overview"},fr:{"overviewmap.expand":"D\xE9velopper l\u2019aper\xE7u","overviewmap.minimize":"R\xE9duire l\u2019aper\xE7u"}};class W extends O{added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("overviewmap",T()),Object.entries(J).forEach(p=>this.$vApp.$i18n.mergeLocaleMessage(...p)),this._parseConfig(this.config);let e=this.$vApp.$watch(()=>this.config,p=>this._parseConfig(p));const{vNode:i,destroy:a,el:r}=this.mount(U,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),e(),this.$vApp.$store.unregisterModule("overviewmap"),a()}}}export{W as default};
