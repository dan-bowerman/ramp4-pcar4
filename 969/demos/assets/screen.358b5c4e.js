import{ew as B,eW as _,ex as $,eF as c,ez as t,eE as s,eG as p,eC as a,eN as l,eO as m,eD as n,eL as f,eX as g,eY as I,eJ as T,eK as U,ey as w,eA as A,eB as y,eZ as k,e_ as L,eQ as M}from"./main.69b94f24.js";const N=B({name:"BasemapItemV",props:{basemap:{type:Object,required:!0},tileSchema:{type:Object,required:!0}},data(){return{selectedBasemap:this.get(_.getActiveBasemapConfig)}},methods:{selectBasemap(e){e.id!==this.selectedBasemap.id&&this.$iApi.geo.map.setBasemap(e.id)}}}),S=e=>(T("data-v-4e82dc30"),e=e(),U(),e),D={class:"mb-10"},E=["aria-label"],O=["alt","src"],j=["alt","src"],K=["alt"],q={class:"absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center"},F={class:"pl-5"},G={class:"ml-auto pr-5"},H=["content"],J=S(()=>a("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)),Q=[J],W={key:0,class:"rv-basemap-check absolute top-0 right-0"},X=S(()=>a("svg",{class:"fill-current w-25 h-25 relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)),Y=[X];function Z(e,i,C,V,x,z){const d=c("truncate"),u=c("tippy"),h=c("focus-item");return t(),s("div",D,[p((t(),s("button",{class:"basemap-item-button bg-gray-300","aria-label":e.$t("basemap.select"),onClick:i[2]||(i[2]=o=>e.selectBasemap(e.basemap))},[a("div",null,[a("div",null,[(t(!0),s(l,null,m(e.basemap.layers,o=>(t(),s("div",{class:"flex h-180 hover:opacity-50 basemap-item-image",key:o.id},[n(" Use basemap thumbnail url "),e.basemap.thumbnailUrl?(t(),s("img",{key:0,class:"w-full",alt:e.basemap.altText,src:e.basemap.thumbnailUrl},null,8,O)):e.tileSchema.thumbnailTileUrls&&o.layerType==="esri-tile"?(t(),s(l,{key:1},[n(" Else if, Use tileSchema tile urls "),(t(!0),s(l,null,m(e.tileSchema.thumbnailTileUrls,(r,b)=>(t(),s("img",{class:"w-full",alt:e.basemap.altText,src:o.url+r,key:b},null,8,j))),128))],2112)):(t(),s(l,{key:2},[n(" Else, Use placeholder image "),a("img",{class:"w-full bg-white",alt:e.basemap.altText,src:"https://openclipart.org/image/800px/275366"},null,8,K)],2112))]))),128))])]),a("div",q,[p((t(),s("div",F,[a("span",null,f(e.basemap.name),1)])),[[d]]),a("div",G,[p((t(),s("a",{onClick:i[0]||(i[0]=g(()=>{},["stop"])),onKeydown:i[1]||(i[1]=I(g(()=>{},["prevent"]),["enter","space"])),content:e.basemap.description},Q,40,H)),[[u,{placement:"bottom",trigger:"click focus"}]])])]),e.basemap.id===e.selectedBasemap.id?(t(),s("div",W,Y)):n("v-if",!0)],8,E)),[[h]])])}var P=$(N,[["render",Z],["__scopeId","data-v-4e82dc30"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/basemap/item.vue"]]);const R=B({name:"BasemapScreenV",props:{panel:{type:Object}},components:{"basemap-item":P},data(){return{tileSchemas:[],basemaps:[],selectedBasemap:this.get(_.getActiveBasemapConfig)}},mounted(){const e=this.$iApi.$vApp.$store.get(_.getMapConfig);this.tileSchemas=e.tileSchemas,this.basemaps=e.basemaps},methods:{filterBasemaps(e){return this.basemaps.filter(i=>i.tileSchemaId===e)}}}),ee={class:"h-600 overflow-y-auto"},te={class:"font-bold text-xl"},se={key:0,class:"border-t border-b border-gray-600"};function ae(e,i,C,V,x,z){const d=w("basemap-item"),u=w("panel-screen"),h=c("truncate"),o=c("focus-list");return t(),A(u,{panel:e.panel},{header:y(()=>[k(f(e.$t("basemap.title")),1)]),content:y(()=>[a("div",ee,[(t(!0),s(l,null,m(e.tileSchemas,(r,b)=>(t(),s("div",{class:"mx-5",key:r.id},[n(" use mt-5 if it's the first basemap title schema, use mt-36 otherwise "),a("div",{class:L((b===0?"mt-5":"mt-36")+" flex mb-5")},[p((t(),s("h3",te,[k(f(r.name),1)])),[[h]])],2),e.basemaps.length>0?p((t(),s("ul",se,[(t(!0),s(l,null,m(e.filterBasemaps(r.id),v=>(t(),s("li",{key:v.id},[M(d,{basemap:v,tileSchema:r,class:"block relative overflow-hidden"},null,8,["basemap","tileSchema"])]))),128))])),[[o]]):n("v-if",!0)]))),128))])]),_:1},8,["panel"])}var oe=$(R,[["render",ae],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/basemap/screen.vue"]]);export{oe as default};
