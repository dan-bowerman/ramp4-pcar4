import{eR as u,ft as a,fu as g,fv as p,ew as h,ex as c,ey as y,ez as m,eA as v,eB as f,eC as i,eV as b,fw as L}from"./main.54285943.js";import $ from"./screen.507a330b.js";class x extends u{get config(){return super.config}_parseConfig(e){let l=this.getLayerFixtureConfigs(),d=e?.headerControls?.slice()??["wizard","layerReorder","groupToggle","visibilityToggle"];if(this.$vApp.$store.set(a.headerControls,d),!e||!e.root.children)return;let r=[],t=[];for(e.root.children.forEach(n=>t.push(n));t.length>0;){const n=t.pop();if(n.layerLegendConfigs=l,n.children!==void 0||n.exclusiveVisibility!==void 0){let s=new g(n,n.parent);r.push(s)}else if(n.layerId!==void 0){n.entryIndex!==void 0&&(n.layerParentId=n.layerId,n.layerId=`${n.layerId}-${n.entryIndex}`);const s=new p(n,n.parent);r.push(s)}}this.$vApp.$store.set(a.children,r),this.$iApi.geo.layer.allLayers().forEach(n=>{this.updateLegend(n)})}generateLegend(e,l){const d=e.supportsSublayers?new g({layer:e,name:e.name},l):new p({layer:e,name:e.name,layerId:e.id},l);this.$vApp.$store.set(a.addItem,d),e.userAdded&&this.$iApi.updateAlert(this.$vApp.$t("legend.alert.layerAdded",{name:e.name}))}updateLegend(e){const l=d=>{this.$vApp.$store.get(a.getChildById,d.id)?.loadLayer(d)};e.isLayerLoaded().then(()=>{l(e),e.supportsSublayers&&e.sublayers.forEach(d=>{l(d)})})}}const A=h({name:"LegendNavButtonV",methods:{togglePanel(){this.$iApi.panel.toggle("legend")}}}),w=i("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[i("path",{d:"M0 0h24v24H0z",fill:"none"}),i("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1);function C(o,e,l,d,r,t){const n=y("mapnav-button");return m(),v(n,{onClickFunction:o.togglePanel,tooltip:o.$t("legend.title")},{default:f(()=>[w]),_:1},8,["onClickFunction","tooltip"])}var _=c(A,[["render",C],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/nav-button.vue"]]),E={en:{"legend.title":"Legend","legend.header.addlayer":"Add Layer","legend.header.reorderlayers":"Reorder Layers","legend.header.groups":"Toggle Groups","legend.header.groups.expand":"Expand All","legend.header.groups.collapse":"Collapse All","legend.header.visible":"Toggle Visibility","legend.header.visible.show":"Show All","legend.header.visible.hide":"Hide All","legend.group.expand":"Expand Group","legend.group.collapse":"Collapse Group","legend.visibility.show":"Show layer","legend.visibility.hide":"Hide layer","legend.symbology.expand":"Expand legend","legend.symbology.hide":"Hide legend","legend.symbology.loading":"Loading...","legend.entry.data":"Show more data","legend.entry.options":"More options","legend.entry.controls.metadata":"Metadata","legend.entry.controls.settings":"Settings","legend.entry.controls.datatable":"Datatable","legend.entry.controls.symbology":"Legend","legend.entry.controls.boundaryzoom":"Zoom to Layer Boundary","legend.entry.controls.remove":"Remove","legend.entry.controls.reload":"Reload","legend.alert.symbologyExpanded":"Layer legend expanded","legend.alert.symbologyCollapsed":"Layer legend collapsed","legend.alert.groupExpanded":"Legend group expanded","legend.alert.groupCollapsed":"Legend group collapsed","legend.alert.layerAdded":"{name} layer added to legend","legend.alert.layerRemoved":"{name} layer removed from legend"},fr:{"legend.title":"L\xE9gende","legend.header.addlayer":"Ajouter une couche","legend.header.reorderlayers":"[fr] Reorder Layers","legend.header.groups":"Basculer les Groupes","legend.header.groups.expand":"\xC9largir les groupes","legend.header.groups.collapse":"R\xE9duire les groupes","legend.header.visible":"Basculer la Visibilit\xE9","legend.header.visible.show":"Montrer tout","legend.header.visible.hide":"Cacher tout","legend.group.expand":"D\xE9velopper un groupe","legend.group.collapse":"R\xE9duire un groupe","legend.visibility.show":"Afficher la couche","legend.visibility.hide":"Masquer la couche","legend.symbology.expand":"D\xE9velopper la l\xE9gende","legend.symbology.hide":"Masquer la l\xE9gende","legend.symbology.loading":"Chargement en cours...","legend.entry.data":"Afficher plus de donn\xE9es","legend.entry.options":"Plus d'options","legend.entry.controls.metadata":"M\xE9tadonn\xE9es","legend.entry.controls.settings":"Param\xE8tres","legend.entry.controls.datatable":"Tableau de donn\xE9es","legend.entry.controls.symbology":"L\xE9gende","legend.entry.controls.boundaryzoom":"Zoomer \xE0 la limite","legend.entry.controls.remove":"Retirer","legend.entry.controls.reload":"Recharger","legend.alert.symbologyExpanded":"[fr] L\xE9gende de la couche \xE9largi","legend.alert.symbologyCollapsed":"[fr] L\xE9gende de la couche de fondre","legend.alert.groupExpanded":"[fr] L\xE9gende groupe \xE9largi","legend.alert.groupCollapsed":"[fr] L\xE9gende de fondre en groupe","legend.alert.layerAdded":"{name} couche ajout\xE9e \xE0 la l\xE9gende","legend.alert.layerRemoved":"Couche {name} retir\xE9 de la l\xE9gende"}};class I extends x{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.component("legend-nav-button",_),this.$iApi.panel.register({legend:{screens:{"legend-screen":b($)},style:{width:"350px"},alertName:"legend.title",button:{tooltip:"legend.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'}}},{i18n:{messages:E}}),this.$vApp.$store.registerModule("legend",L()),super.config?.isPinned!==!1&&this.$iApi.panel.pin("legend"),this._parseConfig(JSON.parse(JSON.stringify(this.config)));let e=this.$vApp.$watch(()=>this.config,l=>this._parseConfig(JSON.parse(JSON.stringify(l))));this.removed=()=>{console.log(`[fixture] ${this.id} removed`),e(),this.$iApi.fixture.get("appbar")&&this.$iApi.$vApp.$store.dispatch("appbar/removeButton","legend"),this.$iApi.fixture.get("mapnav")&&this.$iApi.$vApp.$store.dispatch("mapnav/removeItem","legend"),this.$iApi.panel.remove("legend"),this.$vApp.$store.unregisterModule("legend")}}}export{I as default};
