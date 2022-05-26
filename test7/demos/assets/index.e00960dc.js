import{eR as u,fo as a,fp as i,fq as p,et as c,eu as h,eF as y,ew as m,eG as f,eH as b,eI as v,eA as g,eT as L,fr as x}from"./main.5d410746.js";import A from"./screen.32bb25dd.js";class $ extends u{get config(){return super.config}_parseConfig(e){let l=this.getLayerFixtureConfigs(),r=e?.headerControls?.slice()??["wizard","layerReorder","groupToggle","visibilityToggle"];if(this.$vApp.$store.set(a.headerControls,r),!e||!e.root.children)return;let d=[],t=[];for(e.root.children.forEach(n=>t.push(n));t.length>0;){const n=t.pop();if(n.layerLegendConfigs=l,n.children!==void 0||n.exclusiveVisibility!==void 0){let s=new i(n,n.parent);d.push(s)}else if(n.layerId!==void 0){n.entryIndex!==void 0&&(n.layerParentId=n.layerId,n.layerId=`${n.layerId}-${n.entryIndex}`);const s=new p(n,n.parent);d.push(s)}}this.$vApp.$store.set(a.children,d),this.$iApi.geo.layer.allLayers().forEach(n=>{this.updateLegend(n)})}generateLegend(e,l){const r=e.supportsSublayers?new i({layer:e,name:e.name},l):new p({layer:e,name:e.name,layerId:e.id},l);this.$vApp.$store.set(a.addItem,r),e.userAdded&&this.$iApi.updateAlert(this.$vApp.$t("legend.alert.layerAdded",{name:e.name}))}updateLegend(e){const l=r=>{this.$vApp.$store.get(a.getChildById,r.id)?.loadLayer(r)};e.isLayerLoaded().then(()=>{l(e),e.supportsSublayers&&e.sublayers.forEach(r=>{l(r)})})}}const w=c({name:"LegendAppbarButtonV",methods:{onClick(){this.$iApi.panel.toggle("legend-panel")}}}),C=g("svg",{class:"fill-current w-24 h-24 ml-8 sm:ml-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[g("path",{d:"M0 0h24v24H0z",fill:"none"}),g("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1);function _(o,e,l,r,d,t){const n=y("appbar-button",!0);return m(),f(n,{onClickFunction:o.onClick,tooltip:o.$t("legend.title")},{default:b(()=>[v(" https://material.io/resources/icons/?icon=layers&style=baseline "),C]),_:1},8,["onClickFunction","tooltip"])}var E=h(w,[["render",_],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/legend/appbar-button.vue"]]),I={en:{"legend.title":"Legend","legend.header.addlayer":"Add Layer","legend.header.reorderlayers":"Reorder Layers","legend.header.groups":"Toggle Groups","legend.header.groups.expand":"Expand All","legend.header.groups.collapse":"Collapse All","legend.header.visible":"Toggle Visibility","legend.header.visible.show":"Show All","legend.header.visible.hide":"Hide All","legend.group.expand":"Expand Group","legend.group.collapse":"Collapse Group","legend.visibility.show":"Show layer","legend.visibility.hide":"Hide layer","legend.symbology.expand":"Expand legend","legend.symbology.hide":"Hide legend","legend.symbology.loading":"Loading...","legend.entry.data":"Show more data","legend.entry.options":"More options","legend.entry.controls.metadata":"Metadata","legend.entry.controls.settings":"Settings","legend.entry.controls.datatable":"Datatable","legend.entry.controls.symbology":"Legend","legend.entry.controls.boundaryzoom":"Zoom to Layer Boundary","legend.entry.controls.remove":"Remove","legend.entry.controls.reload":"Reload","legend.alert.symbologyExpanded":"Layer legend expanded","legend.alert.symbologyCollapsed":"Layer legend collapsed","legend.alert.groupExpanded":"Legend group expanded","legend.alert.groupCollapsed":"Legend group collapsed","legend.alert.layerAdded":"{name} layer added to legend","legend.alert.layerRemoved":"{name} layer removed from legend"},fr:{"legend.title":"L\xE9gende","legend.header.addlayer":"Ajouter une couche","legend.header.reorderlayers":"[fr] Reorder Layers","legend.header.groups":"Basculer les Groupes","legend.header.groups.expand":"\xC9largir les groupes","legend.header.groups.collapse":"R\xE9duire les groupes","legend.header.visible":"Basculer la Visibilit\xE9","legend.header.visible.show":"Montrer tout","legend.header.visible.hide":"Cacher tout","legend.group.expand":"D\xE9velopper un groupe","legend.group.collapse":"R\xE9duire un groupe","legend.visibility.show":"Afficher la couche","legend.visibility.hide":"Masquer la couche","legend.symbology.expand":"D\xE9velopper la l\xE9gende","legend.symbology.hide":"Masquer la l\xE9gende","legend.symbology.loading":"Chargement en cours...","legend.entry.data":"Afficher plus de donn\xE9es","legend.entry.options":"Plus d'options","legend.entry.controls.metadata":"M\xE9tadonn\xE9es","legend.entry.controls.settings":"Param\xE8tres","legend.entry.controls.datatable":"Tableau de donn\xE9es","legend.entry.controls.symbology":"L\xE9gende","legend.entry.controls.boundaryzoom":"Zoomer \xE0 la limite","legend.entry.controls.remove":"Retirer","legend.entry.controls.reload":"Recharger","legend.alert.symbologyExpanded":"[fr] L\xE9gende de la couche \xE9largi","legend.alert.symbologyCollapsed":"[fr] L\xE9gende de la couche de fondre","legend.alert.groupExpanded":"[fr] L\xE9gende groupe \xE9largi","legend.alert.groupCollapsed":"[fr] L\xE9gende de fondre en groupe","legend.alert.layerAdded":"{name} couche ajout\xE9e \xE0 la l\xE9gende","legend.alert.layerRemoved":"Couche {name} retir\xE9 de la l\xE9gende"}};class M extends ${added(){console.log(`[fixture] ${this.id} added`),this.$iApi.panel.register({"legend-panel":{screens:{"legend-screen":L(A)},style:{width:"350px"},alertName:"legend.title"}},{i18n:{messages:I}}),this.$iApi.component("legend-appbar-button",E),this.$vApp.$store.registerModule("legend",x()),this._parseConfig(JSON.parse(JSON.stringify(this.config)));let e=this.$vApp.$watch(()=>this.config,l=>this._parseConfig(JSON.parse(JSON.stringify(l))));this.removed=()=>{console.log(`[fixture] ${this.id} removed`),e(),this.$iApi.panel.remove("legend-panel"),this.$vApp.$store.unregisterModule("legend")}}}export{M as default};
