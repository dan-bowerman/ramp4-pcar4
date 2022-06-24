import{eR as t,ew as r,ex as a,ey as i,ez as c,eA as n,eB as l,eC as o,eV as h}from"./main.0395d05a.js";import{g as p,G as g}from"./screen.ee3d03f5.js";class f extends t{}const v=r({name:"GeosearchNavButtonV",methods:{togglePanel(){this.$iApi.panel.toggle("geosearch")}}}),u=o("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[o("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),o("path",{d:"M0 0h24v24H0z",fill:"none"})],-1);function m(e,x,w,A,_,b){const s=i("mapnav-button");return c(),n(s,{onClickFunction:e.togglePanel,tooltip:e.$t("geosearch.title")},{default:l(()=>[u]),_:1},8,["onClickFunction","tooltip"])}var d=a(v,[["render",m],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/geosearch/nav-button.vue"]]),$={en:{"geosearch.title":"Geolocation Search","geosearch.noResults":"No results to show for ","geosearch.searchText":"Search for a location...","geosearch.visible":"Visible on map","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Clear filters"},fr:{"geosearch.title":"Recherche g\xE9olocalis\xE9e","geosearch.noResults":"Aucun r\xE9sultat \xE0 afficher pour ","geosearch.searchText":"[fr] Recherche d\u2019un emplacement...","geosearch.visible":"Visible sur la carte","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Effacer les filtres"}};class z extends f{async added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("geosearch",p(this.config)),this.$iApi.component("geosearch-nav-button",d),this.$iApi.panel.register({id:"geosearch",config:{screens:{"geosearch-component":h(g)},button:{tooltip:"geosearch.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"geosearch.title"}},{i18n:{messages:$}})}removed(){console.log(`[fixture] ${this.id} removed`),this.$iApi.fixture.get("appbar")&&this.$iApi.$vApp.$store.dispatch("appbar/removeButton","geosearch"),this.$iApi.fixture.get("mapnav")&&this.$iApi.$vApp.$store.dispatch("mapnav/removeItem","geosearch"),this.$vApp.$store.unregisterModule("geosearch"),this.$iApi.panel.remove("geosearch")}}export{z as default};
