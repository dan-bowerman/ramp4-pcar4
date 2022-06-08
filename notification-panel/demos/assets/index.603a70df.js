import{eQ as p,ft as o,fu as s,fv as g,eU as y,fw as h}from"./main.c52d903d.js";import u from"./screen.5b0bc19f.js";class c extends p{get config(){return super.config}_parseConfig(e){let d=this.getLayerFixtureConfigs(),r=e?.headerControls?.slice()??["wizard","layerReorder","groupToggle","visibilityToggle"];if(this.$vApp.$store.set(o.headerControls,r),!e||!e.root.children)return;let n=[],t=[];for(e.root.children.forEach(l=>t.push(l));t.length>0;){const l=t.pop();if(l.layerLegendConfigs=d,l.children!==void 0||l.exclusiveVisibility!==void 0){let a=new s(l,l.parent);n.push(a)}else if(l.layerId!==void 0){l.entryIndex!==void 0&&(l.layerParentId=l.layerId,l.layerId=`${l.layerId}-${l.entryIndex}`);const a=new g(l,l.parent);n.push(a)}}this.$vApp.$store.set(o.children,n),this.$iApi.geo.layer.allLayers().forEach(l=>{this.updateLegend(l)})}generateLegend(e,d){const r=e.supportsSublayers?new s({layer:e,name:e.name},d):new g({layer:e,name:e.name,layerId:e.id},d);this.$vApp.$store.set(o.addItem,r),e.userAdded&&this.$iApi.updateAlert(this.$vApp.$t("legend.alert.layerAdded",{name:e.name}))}updateLegend(e){const d=r=>{this.$vApp.$store.get(o.getChildById,r.id)?.loadLayer(r)};e.isLayerLoaded().then(()=>{d(e),e.supportsSublayers&&e.sublayers.forEach(r=>{d(r)})})}}var m={en:{"legend.title":"Legend","legend.header.addlayer":"Add Layer","legend.header.reorderlayers":"Reorder Layers","legend.header.groups":"Toggle Groups","legend.header.groups.expand":"Expand All","legend.header.groups.collapse":"Collapse All","legend.header.visible":"Toggle Visibility","legend.header.visible.show":"Show All","legend.header.visible.hide":"Hide All","legend.group.expand":"Expand Group","legend.group.collapse":"Collapse Group","legend.visibility.show":"Show layer","legend.visibility.hide":"Hide layer","legend.symbology.expand":"Expand legend","legend.symbology.hide":"Hide legend","legend.symbology.loading":"Loading...","legend.entry.data":"Show more data","legend.entry.options":"More options","legend.entry.controls.metadata":"Metadata","legend.entry.controls.settings":"Settings","legend.entry.controls.datatable":"Datatable","legend.entry.controls.symbology":"Legend","legend.entry.controls.boundaryzoom":"Zoom to Layer Boundary","legend.entry.controls.remove":"Remove","legend.entry.controls.reload":"Reload","legend.alert.symbologyExpanded":"Layer legend expanded","legend.alert.symbologyCollapsed":"Layer legend collapsed","legend.alert.groupExpanded":"Legend group expanded","legend.alert.groupCollapsed":"Legend group collapsed","legend.alert.layerAdded":"{name} layer added to legend","legend.alert.layerRemoved":"{name} layer removed from legend"},fr:{"legend.title":"L\xE9gende","legend.header.addlayer":"Ajouter une couche","legend.header.reorderlayers":"[fr] Reorder Layers","legend.header.groups":"Basculer les Groupes","legend.header.groups.expand":"\xC9largir les groupes","legend.header.groups.collapse":"R\xE9duire les groupes","legend.header.visible":"Basculer la Visibilit\xE9","legend.header.visible.show":"Montrer tout","legend.header.visible.hide":"Cacher tout","legend.group.expand":"D\xE9velopper un groupe","legend.group.collapse":"R\xE9duire un groupe","legend.visibility.show":"Afficher la couche","legend.visibility.hide":"Masquer la couche","legend.symbology.expand":"D\xE9velopper la l\xE9gende","legend.symbology.hide":"Masquer la l\xE9gende","legend.symbology.loading":"Chargement en cours...","legend.entry.data":"Afficher plus de donn\xE9es","legend.entry.options":"Plus d'options","legend.entry.controls.metadata":"M\xE9tadonn\xE9es","legend.entry.controls.settings":"Param\xE8tres","legend.entry.controls.datatable":"Tableau de donn\xE9es","legend.entry.controls.symbology":"L\xE9gende","legend.entry.controls.boundaryzoom":"Zoomer \xE0 la limite","legend.entry.controls.remove":"Retirer","legend.entry.controls.reload":"Recharger","legend.alert.symbologyExpanded":"[fr] L\xE9gende de la couche \xE9largi","legend.alert.symbologyCollapsed":"[fr] L\xE9gende de la couche de fondre","legend.alert.groupExpanded":"[fr] L\xE9gende groupe \xE9largi","legend.alert.groupCollapsed":"[fr] L\xE9gende de fondre en groupe","legend.alert.layerAdded":"{name} couche ajout\xE9e \xE0 la l\xE9gende","legend.alert.layerRemoved":"Couche {name} retir\xE9 de la l\xE9gende"}};class b extends c{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.panel.register({legend:{screens:{"legend-screen":y(u)},style:{width:"350px"},alertName:"legend.title",button:{tooltip:"legend.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'}}},{i18n:{messages:m}}),this.$vApp.$store.registerModule("legend",h()),this._parseConfig(JSON.parse(JSON.stringify(this.config)));let e=this.$vApp.$watch(()=>this.config,d=>this._parseConfig(JSON.parse(JSON.stringify(d))));this.removed=()=>{console.log(`[fixture] ${this.id} removed`),e(),this.$iApi.panel.remove("legend"),this.$vApp.$store.unregisterModule("legend")}}}export{b as default};
