import{et as k,eT as b,eu as $,eC as p,ew as s,eB as t,eD as c,ez as a,eK as o,eL as m,eA as n,eI as v,eU as g,eV as U,eG as z,eH as A,ev as w,ex as x,ey as y,eW as B,eX as L,eN as M}from"./multi-ramp.341296fa.js";const N=k({name:"BasemapItemV",props:{basemap:{type:Object,required:!0},tileSchema:{type:Object,required:!0}},data(){return{selectedBasemap:this.get(b.getActiveBasemapConfig)}},methods:{selectBasemap(e){e.id!==this.selectedBasemap.id&&this.$iApi.geo.map.setBasemap(e.id)}}}),S=e=>(z("data-v-4e82dc30"),e=e(),A(),e),D={class:"mb-10"},j=["aria-label"],E=["alt","src"],K=["alt","src"],O=["alt"],q={class:"absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center"},H={class:"pl-5"},F={class:"ml-auto pr-5"},G=["content"],W=S(()=>a("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)),X=[W],J={key:0,class:"rv-basemap-check absolute top-0 right-0"},P=S(()=>a("svg",{class:"fill-current w-25 h-25 relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)),Q=[P];function R(e,i,C,V,I,T){const d=p("truncate"),u=p("tippy"),h=p("focus-item");return s(),t("div",D,[c((s(),t("button",{class:"basemap-item-button bg-gray-300","aria-label":e.$t("basemap.select"),onClick:i[2]||(i[2]=l=>e.selectBasemap(e.basemap))},[a("div",null,[a("div",null,[(s(!0),t(o,null,m(e.basemap.layers,l=>(s(),t("div",{class:"flex h-180 hover:opacity-50 basemap-item-image",key:l.id},[n(" Use basemap thumbnail url "),e.basemap.thumbnailUrl?(s(),t("img",{key:0,class:"w-full",alt:e.basemap.altText,src:e.basemap.thumbnailUrl},null,8,E)):e.tileSchema.thumbnailTileUrls&&l.layerType==="esri-tile"?(s(),t(o,{key:1},[n(" Else if, Use tileSchema tile urls "),(s(!0),t(o,null,m(e.tileSchema.thumbnailTileUrls,(r,_)=>(s(),t("img",{class:"w-full",alt:e.basemap.altText,src:l.url+r,key:_},null,8,K))),128))],2112)):(s(),t(o,{key:2},[n(" Else, Use placeholder image "),a("img",{class:"w-full bg-white",alt:e.basemap.altText,src:"https://openclipart.org/image/800px/275366"},null,8,O)],2112))]))),128))])]),a("div",q,[c((s(),t("div",H,[a("span",null,v(e.basemap.name),1)])),[[d]]),a("div",F,[c((s(),t("a",{onClick:i[0]||(i[0]=g(()=>{},["stop"])),onKeydown:i[1]||(i[1]=U(g(()=>{},["prevent"]),["enter","space"])),content:e.basemap.description},X,40,G)),[[u,{placement:"bottom",trigger:"click focus"}]])])]),e.basemap.id===e.selectedBasemap.id?(s(),t("div",J,Q)):n("v-if",!0)],8,j)),[[h]])])}var Y=$(N,[["render",R],["__scopeId","data-v-4e82dc30"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/basemap/item.vue"]]);const Z=k({name:"BasemapScreenV",props:{panel:{type:Object}},components:{"basemap-item":Y},data(){return{tileSchemas:[],basemaps:[],selectedBasemap:this.get(b.getActiveBasemapConfig)}},mounted(){const e=this.$iApi.$vApp.$store.get(b.getMapConfig);this.tileSchemas=e.tileSchemas,this.basemaps=e.basemaps},methods:{filterBasemaps(e){return this.basemaps.filter(i=>i.tileSchemaId===e)}}}),ee={class:"h-600 overflow-y-auto"},se={class:"font-bold text-xl"},te={key:0,class:"border-t border-b border-gray-600"};function ae(e,i,C,V,I,T){const d=w("basemap-item"),u=w("panel-screen"),h=p("truncate"),l=p("focus-list");return s(),x(u,{panel:e.panel},{header:y(()=>[B(v(e.$t("basemap.title")),1)]),content:y(()=>[a("div",ee,[(s(!0),t(o,null,m(e.tileSchemas,(r,_)=>(s(),t("div",{class:"mx-5",key:r.id},[n(" use mt-5 if it's the first basemap title schema, use mt-36 otherwise "),a("div",{class:L((_===0?"mt-5":"mt-36")+" flex mb-5")},[c((s(),t("h3",se,[B(v(r.name),1)])),[[h]])],2),e.basemaps.length>0?c((s(),t("ul",te,[(s(!0),t(o,null,m(e.filterBasemaps(r.id),f=>(s(),t("li",{key:f.id},[M(d,{basemap:f,tileSchema:r,class:"block relative overflow-hidden"},null,8,["basemap","tileSchema"])]))),128))])),[[l]]):n("v-if",!0)]))),128))])]),_:1},8,["panel"])}var le=$(Z,[["render",ae],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/basemap/screen.vue"]]);export{le as default};
