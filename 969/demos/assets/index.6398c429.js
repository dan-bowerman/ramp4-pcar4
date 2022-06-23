import{eR as D,e$ as f,f0 as T,ew as b,f1 as R,eU as I,ex as A,ey as x,eF as w,ez as i,eA as L,eB as v,eZ as y,eL as r,eD as d,eC as n,eE as a,eO as C,eG as g,eN as $,f2 as E,eP as N,eV as k,f3 as O}from"./main.b4534675.js";import{l as F}from"./linkify-html.module.38598c19.js";class M extends D{get config(){return super.config}openDetails(t){this.$vApp.$store.set(f.setPayload,t),this.$iApi.panel.get("details-layers").isOpen||this.$iApi.panel.open({id:"details-layers"})}openFeature(t){const s=this.$iApi.panel.get("details-layers");s.isOpen&&this.$iApi.panel.close(s);let l=this.$iApi.panel.get("details-items"),o={result:{items:[{data:t.data,format:t.format,loaded:!0,loading:Promise.resolve()}],uid:t.uid,loading:Promise.resolve(),loaded:!0}};l.isOpen?l.show({screen:"item-screen",props:o}):this.$iApi.panel.open({id:"details-items",screen:"item-screen",props:o})}_parseConfig(t){t&&t.templates&&this.$vApp.$store.set(f.defaultTemplates,t.templates);let s=this.getLayerFixtureConfigs(),l=[];Object.keys(s).forEach(u=>{l.push({id:u,template:s[u].template})});const o=l.map(u=>new T(u));this.$vApp.$store.set(f.templates,o.reduce((u,h)=>(u[h.id]=h,u),{})),this._validateItems()}_validateItems(){Object.values(this.$vApp.$store.get(f.templates)).forEach(t=>{t.template in this.$vApp.$options.components&&this.$vApp.$store.set(`${f.templates}@${t.id}.componentId`,t.template)})}}const z=b({name:"DetailsLayersScreenV",props:{panel:R},data(){return{layerResults:[],lastLayerUid:"",activeGreedy:0,payload:this.get(f.payload),getLayerByUid:this.get("layer/getLayerByUid"),layers:this.get("layer/layers"),mobileMode:this.get("panel/mobileView"),remainingWidth:this.get("panel/getRemainingWidth"),watchers:[]}},computed:{totalResultCount(){return this.layerResults.map(e=>e.items.length).reduce((e,t)=>e+t,0)}},created(){this.watchers.push(this.$watch("payload",e=>{this.loadPayloadItems(e)},{deep:!1,immediate:!0}))},mounted(){this.$iApi.event.on(I.DETAILS_CLOSED,()=>this.activeGreedy=0,"details_item_closed")},beforeUnmount(){this.watchers.forEach(e=>e()),this.$iApi.event.off("details_item_closed")},methods:{loadPayloadItems(e){if(e===void 0)return;const t=this.$iApi.panel.get("details-items"),s=t.width||350;this.activeGreedy=this.mobileMode||this.remainingWidth<s&&!t.isOpen||e.length===0?0:e[0].requestTime,this.layerResults=e,this.calculateGrandTotal(e),this.autoOpen(e)},autoOpen(e){const t=this.$iApi.panel.get("details-items");if(this.lastLayerUid&&t.isOpen){const s=this.layerResults.findIndex(l=>l.uid===this.lastLayerUid);if(s!==-1){const l=this.layerResults[s];l.loading.then(()=>{l.requestTime===this.activeGreedy&&(l.items.length>0?(this.activeGreedy=0,this.openResult(s)):this.autoOpenAny(e))})}else this.closeResult(),this.autoOpenAny(e)}else this.autoOpenAny(e)},autoOpenAny(e){const t=e.map(l=>l.loading.then(()=>l.items.length>0?Promise.resolve(l):Promise.reject())),s=e.length===0?0:e[0].requestTime;Promise.any(t).then(l=>{if(l.requestTime!==this.activeGreedy)return;const o=this.layerResults.findIndex(u=>u.uid===l.uid);this.activeGreedy=0,o!==-1&&this.openResult(o)}).catch(()=>{s===this.activeGreedy&&(this.lastLayerUid="",this.activeGreedy=0,this.closeResult())})},calculateGrandTotal(e){Promise.all(e.map(t=>t.loading)).then(()=>{this.$iApi.updateAlert(this.$iApi.$vApp.$t("details.layers.found",{numResults:this.totalResultCount,numLayers:e.length}))})},closeResult(){const e=this.$iApi.panel.get("details-items");e.isOpen&&e.close()},openResult(e){if(this.payload[e].items.length>0){this.activeGreedy=0;let t=this.$iApi.panel.get("details-items"),s={result:this.payload[e]};this.lastLayerUid=this.payload[e].uid,t.isOpen?t.show({screen:"item-screen",props:s}):this.$iApi.panel.open({id:"details-items",screen:"item-screen",props:s})}},layerName(e){const t=this.payload[e];let s=this.getLayerByUid(t.uid);return s?s.name:""}}}),H={class:"p-5"},S=["onClick","disabled"],V=n("div",{class:"flex-auto"},null,-1),B={key:0,class:"px-5"},j={key:1,class:"animate-spin spinner h-20 w-20 px-5"};function G(e,t,s,l,o,u){const h=x("panel-screen"),m=w("truncate");return i(),L(h,{panel:e.panel},{header:v(()=>[y(r(e.$t("details.layers.title")),1)]),content:v(()=>[d(" Grond total "),n("div",H,r(e.$t("details.layers.found",{numResults:e.totalResultCount,numLayers:e.payload.length})),1),d(" Clicker for each layer "),(i(!0),a($,null,C(e.layerResults,(p,c)=>(i(),a("button",{class:"w-full px-20 py-10 text-md flex hover:bg-gray-200 cursor-pointer disabled:cursor-default",key:p.uid,onClick:_=>p.loaded&&e.openResult(c),disabled:!(p.loaded&&p.items.length>0)},[g((i(),a("div",null,[y(r(e.layerName(c)||e.$t("details.layers.loading")),1)])),[[m]]),V,d(" Display the count if item exists, else display the loading spinner "),p.loaded?(i(),a("div",B,r(p.items.length),1)):(i(),a("div",j))],8,S))),128))]),_:1},8,["panel"])}var U=A(z,[["render",G],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/details/layers-screen.vue"]]);const q=b({name:"DetailsResultScreenV",props:{panel:{type:Object,required:!0},result:{type:Object,required:!0},previousItemIndex:{type:Number,default:-1}},data(){return{icon:[],layerExists:!1,handlers:[]}},computed:{nameField(){return this.$iApi.geo.layer.getLayer(this.result.uid)?.nameField},layerName(){return this.$iApi.geo.layer.getLayer(this.result.uid)?.name??""}},mounted(){this.layerExists=this.$iApi.geo.layer.getLayer(this.result.uid)!==void 0,this.$iApi.updateAlert(this.$iApi.$vApp.$t("details.item.alert.show.list",{layerName:this.layerName})),this.handlers.push(this.$iApi.event.on(I.LAYER_REMOVE,e=>{this.result.uid===e.uid&&this.panel.close()}))},beforeUnmount(){this.handlers.forEach(e=>this.$iApi.event.off(e))},methods:{openResult(e){this.panel.show({screen:"item-screen",props:{result:this.result,itemIndex:e}})},itemIcon(e,t){const s=this.$iApi.geo.layer.getLayer(this.result.uid);if(s===void 0){console.warn(`could not find layer for uid ${this.result.uid} during icon lookup`);return}const l=s.oidField;return s.getIcon(e[l]).then(o=>{this.icon[t]!==o&&(this.icon[t]=o)}),this.icon[t]}}}),P={key:0},W={key:0},Z={class:"flex font-bold p-8 w-full"},Y=["onClick","disabled"],K=["innerHTML"],J={key:1,class:"flex-initial py-5 px-10"},Q={key:2,class:"animate-spin spinner h-20 w-20 px-5"},X={key:1},ee={class:"p-5"};function te(e,t,s,l,o,u){const h=x("panel-screen"),m=w("truncate"),p=w("focus-item");return i(),L(h,{panel:e.panel},{header:v(()=>[y(r(e.$t("details.items.title")),1)]),content:v(()=>[e.layerExists?(i(),a("div",P,[e.result.items.length>0?(i(),a("div",W,[g((i(),a("span",Z,[y(r(e.layerName),1)])),[[m]]),(i(!0),a($,null,C(e.result.items,(c,_)=>g((i(),a("button",{class:"w-full flex px-16 py-10 text-md hover:bg-gray-200 cursor-pointer",key:_,onClick:qe=>c.loaded&&e.openResult(_),disabled:!c.loaded},[d(" ifs on each span as wrapper breaks aligment. smart person might improve things "),c.loaded?(i(),a("span",{key:0,innerHTML:e.itemIcon(c.data,_),class:"flex-none symbologyIcon"},null,8,K)):d("v-if",!0),c.loaded?g((i(),a("span",J,[y(r(e.nameField?c.data[e.nameField]:e.$t("details.result.default.name",[_+1])),1)])),[[m]]):d("v-if",!0),c.loaded?d("v-if",!0):(i(),a("span",Q))],8,Y)),[[p],[m]])),128))])):(i(),a("div",X,r(e.$t("details.layers.results.empty")),1))])):(i(),a($,{key:1},[d(" layer does not exist anymore, show no data text "),n("div",ee,r(e.$t("details.item.no.data")),1)],2112))]),_:1},8,["panel"])}var se=A(q,[["render",te],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/details/result-screen.vue"]]);const ie=b({name:"ESRIDefaultV",props:{fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},methods:{itemData(){const e={};Object.assign(e,this.identifyData.data),e.Symbol!==void 0&&delete e.Symbol;let t={};return this.fields.forEach(s=>{t[s.name]=s.alias||s.name}),Object.keys(e).map(s=>{e[s]={value:typeof e[s]=="number"?this.$iApi.$vApp.$n(e[s],"number"):e[s],alias:t[s]||s}}),e},makeHtmlLink(e){if(!e)return e;const t="underline text-blue-600 break-all",s=document.createElement("div");return s.innerHTML=e.trim(),s.firstElementChild?.tagName=="A"?(s.firstElementChild.className=t,s.innerHTML):F(e,{className:t,target:"_blank",validate:{url:o=>/^https?:\/\//.test(o)}})}}}),ae={class:"inline font-bold"},le=n("span",{class:"flex-auto"},null,-1),ne=["innerHTML"];function re(e,t,s,l,o,u){return i(),a("div",null,[(i(!0),a($,null,C(e.itemData(),(h,m,p)=>(i(),a("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:p},[n("span",ae,r(h.alias),1),le,n("span",{class:"inline",innerHTML:e.makeHtmlLink(h.value)},null,8,ne)]))),128))])}var oe=A(ie,[["render",re],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/details/templates/esri-default.vue"]]);const de=b({name:"HTMLDefaultV",props:{identifyData:{type:Object,required:!0}}}),pe=["innerHTML"],ue={key:1};function he(e,t,s,l,o,u){return e.identifyData?(i(),a("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:e.identifyData.data},null,8,pe)):(i(),a("div",ue,r(e.$t("details.layers.results.empty")),1))}var me=A(de,[["render",he],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/details/templates/html-default.vue"]]);const ce=b({name:"DetailsItemScreenV",props:{panel:{type:Object,required:!0},result:{type:Object,required:!0},itemIndex:{type:Number,default:0}},components:{"esri-default":oe,"html-default":me},data(){return{defaultTemplates:this.get(f.defaultTemplates),templateBindings:this.get(f.templates),identifyTypes:E.UNKNOWN,icon:"",currentIdx:0,layerExists:!1,handlers:[]}},mounted(){this.initDetails(),this.handlers.push(this.$iApi.event.on(I.LAYER_REMOVE,e=>{this.result.uid===e.uid&&this.panel.close()}))},beforeUnmount(){this.handlers.forEach(e=>this.$iApi.event.off(e))},beforeUpdate(){this.initDetails()},computed:{identifyItem(){return this.result.items[this.currentIdx]},itemName(){const t=this.$iApi.geo.layer.getLayer(this.result.uid)?.nameField;return t&&this.identifyItem.loaded?this.identifyItem.data[t]:this.$t("details.items.title")},layerType(){return this.$iApi.geo.layer.getLayer(this.result.uid)?.layerType||""},supportsFeatures(){return this.$iApi.geo.layer.getLayer(this.result.uid)?.supportsFeatures??!1},fieldsList(){return this.supportsFeatures?this.$iApi.geo.layer.getLayer(this.result.uid)?.fields||[]:[]},detailsTemplate(){const e=this.$iApi.geo.layer.getLayer(this.result.uid);return e&&this.templateBindings[e.id]&&this.templateBindings[e.id].template?this.templateBindings[e.id].template:this.defaultTemplates&&this.defaultTemplates[this.identifyItem.format]?this.defaultTemplates[this.identifyItem.format]:this.supportsFeatures?"esri-default":"html-default"}},methods:{close(){this.panel.close(),this.$iApi.event.emit(I.DETAILS_CLOSED)},initDetails(){this.currentIdx=this.itemIndex??0,this.layerExists=!0,this.itemChanged()},itemChanged(){if(this.identifyItem.loaded)this.$iApi.geo.layer.getLayer(this.result.uid)||(this.layerExists=!1),this.fetchIcon(),this.$iApi.updateAlert(`${this.$iApi.$vApp.$t("details.item.alert.show.item",{itemName:this.itemName})} ${this.result.items.length>1?this.$iApi.$vApp.$t("details.item.count",[this.currentIdx+1,this.result.items.length]):""}`);else{const e=this.currentIdx;this.identifyItem.loading.then(()=>{e===this.currentIdx&&this.itemChanged()})}},seeList(){this.panel.show({screen:"results-screen",props:{result:this.result,previousItemIndex:this.currentIdx}})},advanceItemIndex(e){this.currentIdx+=e,this.itemChanged()},fetchIcon(){if(this.icon="",!(this.identifyItem&&this.identifyItem.loaded))return;const e=this.$iApi.geo.layer.getLayer(this.result.uid);if(e===void 0){console.warn(`could not find layer for uid ${this.result.uid} during icon lookup`);return}if(e.supportsFeatures){const t=e.oidField;let s=this.currentIdx;e.getIcon(this.identifyItem.data[t]).then(l=>{this.currentIdx===s&&(this.icon=l)})}},zoomToFeature(){const e=this.$iApi.geo.layer.getLayer(this.result.uid);if(e===void 0){console.warn(`Could not find layer for uid ${this.result.uid} during zoom geometry lookup`);return}if(!this.identifyItem.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.");return}const t=this.identifyItem.data[e.oidField],s={getGeom:!0};e.getGraphic(t,s).then(l=>{l.geometry.invalid()?console.error(`Could not find graphic for objectid ${t}`):this.$iApi.geo.map.zoomMapTo(l.geometry,5e4)}),this.$iApi.updateAlert(this.$iApi.$vApp.$t("details.item.alert.zoom"))}}}),fe={key:0},ye={key:0,class:"flex justify-between py-8 px-8 mb-8 bg-gray-100"},ge=["aria-label"],$e={class:"flex bg-gray-200 py-8 items-center"},ve=["content","aria-label","disabled"],_e=n("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[n("g",null,[n("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1),be=[_e],Ae={class:"px-8"},Ie=["content","aria-label","disabled"],we=n("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[n("g",null,[n("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1),Le=[we],ke={key:1},xe={key:0},Ce={key:0,class:"flex py-8"},De=["innerHTML"],Te={key:1,class:"m-auto"},Re=n("div",{class:"animate-spin spinner h-20 w-20"},null,-1),Ee=[Re],Ne={class:"flex-grow my-auto text-lg px-8"},Oe=["content","aria-label"],Fe=n("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},[n("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),n("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1),Me=[Fe],ze={class:"flex justify-center py-10 items-center"},He=n("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1),Se={class:"p-5"},Ve={class:"flex justify-center py-10 items-center"},Be=n("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1);function je(e,t,s,l,o,u){const h=x("panel-screen"),m=w("tippy");return i(),L(h,{panel:e.panel},{header:v(()=>[y(r(e.$t("details.items.title")),1)]),content:v(()=>[e.result.loaded?(i(),a("div",fe,[d(" paginator and list button for multiple features "),e.result.items.length>1&&e.layerExists?(i(),a("div",ye,[n("button",{class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":e.$t("details.item.see.list"),onClick:t[0]||(t[0]=(...p)=>e.seeList&&e.seeList(...p))},r(e.$t("details.item.see.list")),9,ge),n("div",$e,[g((i(),a("button",{content:e.$t("details.item.previous.item"),onClick:t[1]||(t[1]=p=>e.advanceItemIndex(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":e.$t("details.item.previous.item"),disabled:e.currentIdx===0},be,8,ve)),[[m,{placement:"top"}]]),n("span",Ae,r(e.$t("details.item.count",[e.currentIdx+1,e.result.items.length])),1),g((i(),a("button",{content:e.$t("details.item.next.item"),onClick:t[2]||(t[2]=p=>e.advanceItemIndex(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":e.$t("details.item.next.item"),disabled:e.currentIdx===e.result.items.length-1},Le,8,Ie)),[[m,{placement:"top"}]])])])):d("v-if",!0),d(" actual details section "),e.layerExists?(i(),a("div",ke,[e.identifyItem.loaded?(i(),a("div",xe,[d(" fancy header for esri features "),e.supportsFeatures?(i(),a("div",Ce,[e.icon?(i(),a("span",{key:0,class:"flex-none m-auto symbologyIcon",innerHTML:e.icon},null,8,De)):(i(),a("div",Te,Ee)),n("span",Ne,r(e.itemName),1),g((i(),a("button",{content:e.$t("details.item.zoom"),"aria-label":e.$t("details.item.zoom"),onClick:t[3]||(t[3]=p=>e.zoomToFeature()),class:"text-gray-600 m-8"},Me,8,Oe)),[[m,{placement:"bottom"}]])])):d("v-if",!0),(i(),L(N(e.detailsTemplate),{identifyData:e.identifyItem,fields:e.fieldsList},null,8,["identifyData","fields"]))])):(i(),a($,{key:1},[d(" identified item is loading "),n("div",ze,[He,y(" "+r(e.$t("details.item.loading")),1)])],2112))])):(i(),a($,{key:2},[d(" layer does not exist anymore, show no data text "),n("div",Se,r(e.$t("details.item.no.data")),1)],2112))])):(i(),a($,{key:1},[d(" result is loading "),n("div",Ve,[Be,y(" "+r(e.$t("details.item.loading")),1)])],2112))]),_:1},8,["panel"])}var Ge=A(ce,[["render",je],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/details/item-screen.vue"]]),Ue={en:{"details.layers.title":"Identified Layers","details.layers.found":"Found {numResults} results in {numLayers} layers","details.layers.loading":"The layer is loading...","details.layers.results.empty":"No results found for the selected layer.","details.result.default.name":"Identify Item {0}","details.items.title":"Details","details.item.see.list":"See List","details.item.zoom":"Zoom to feature","details.item.previous.item":"Previous item","details.item.next.item":"Next item","details.item.count":"{0} of {1}","details.item.loading":"Loading results...","details.item.no.data":"No data to show because the layer has been removed","details.item.alert.zoom":"Zoomed into feature","details.item.alert.show.item":"Showing result {itemName}","details.item.alert.show.list":"Showing all results for {layerName}"},fr:{"details.layers.title":"[fr] Couches Identifi\xE9s","details.layers.found":"{numResults} r\xE9sultats trouv\xE9s dans {numLayers} couches","details.layers.loading":"La couche est en cours de chargement...","details.layers.results.empty":"Aucun r\xE9sultat trouv\xE9 pour la couche s\xE9lectionn\xE9e.","details.result.default.name":"[fr] D\xE9terminer le point {0}","details.items.title":"D\xE9tails","details.item.see.list":"[fr] Voir la liste","details.item.zoom":"Zoom \xE0 l'\xE9l\xE9ment","details.item.previous.item":"[fr] Point pr\xE9c\xE9dent","details.item.next.item":"[fr] Prochain article","details.item.count":"[fr] {0} de {1}","details.item.loading":"[fr] Chargement des r\xE9sultats...","details.item.no.data":"[fr] Aucune donn\xE9e \xE0 afficher car le calque a \xE9t\xE9 supprim\xE9","details.item.alert.zoom":"[fr] Zoom\xE9 sur l'\xE9l\xE9ment","details.item.alert.show.item":"[fr] Affichage des r\xE9sultats {itemName}","details.item.alert.show.list":"[fr] Afficher tous les r\xE9sultats pour {layerName}"}};class Ze extends M{async added(){this.$iApi.panel.register({"details-layers":{screens:{"layers-screen":k(U)},style:{width:"350px"},button:{tooltip:"details.layers.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'},alertName:"details.layers.title"},"details-items":{screens:{"results-screen":k(se),"item-screen":k(Ge)},style:{width:"350px"},button:{tooltip:"details.items.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'},alertName:"details.items.title"}},{i18n:{messages:Ue}}),this.$vApp.$store.registerModule("details",O()),this._parseConfig(this.config);let t=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s));this.removed=()=>{console.log(`[fixture] ${this.id} removed`),t(),this.$iApi.panel.remove("details-items"),this.$iApi.panel.remove("details-layers"),this.$iApi.fixture.get("appbar")&&(this.$iApi.$vApp.$store.dispatch("appbar/removeButton","details-layers"),this.$iApi.$vApp.$store.dispatch("appbar/removeButton","details-items")),this.$vApp.$store.unregisterModule("details")}}}export{Ze as default};
