import{eR as d,fd as s,eV as o,fe as n}from"./main.7e770098.js";import g from"./screen.65ca8f74.js";import"./linkify-html.module.38598c19.js";class h{constructor(e){this.baseLayer=e,this._showFilter=e.table.showFilter!==void 0?e.table.showFilter:!0,this._filterByExtent=e.table.filterByExtent||!1,this._columnFilters={},this._open=!0,this._columnState=null,this._filtered=!0}getColumnFilter(e){return this._columnFilters[e]}setColumnFilter(e,r){let t=r;if(r&&typeof r=="string"){const l=/[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g;t=r.replace(l,"\\$&")}this._columnFilters[e]=t,this._columnFilters[e]!==""?this._filtered=!0:this._checkFilters()}clearFilters(){this._columnFilters={},this._filtered=!1}_checkFilters(){this._filtered=Object.values(this._columnFilters).some(e=>e!=="")}get filtered(){return this._filtered}get colFilter(){return this._showFilter}set colFilter(e){this._showFilter=e}get filterByExtent(){return this._filterByExtent}set filterByExtent(e){this._filterByExtent=e}get open(){return this._open}set open(e){this._open=e}}class c extends d{toggleGrid(e,r){let t=this.$vApp.$store.get(`${s.grids}@${e}`);t===void 0&&(t={uid:e,state:new h({table:{showFilter:!0,filterByExtent:!1}})},this.$vApp.$store.set("grid/addGrid!",t));const l=this.$vApp.$store.get(s.currentUid);this.$vApp.$store.set(s.currentUid,e||null);const i=this.$iApi.panel.get("grid");if(r===!1){i.close();return}i.isOpen?l!==e||r===!0?i.show({screen:"grid-screen",props:{key:e}}):i.close():this.$iApi.panel.open("grid")}}var f={en:{"grid.title":"Features","grid.alertName":"Grid","grid.clearAll":"Clear search and filters","grid.layer.loading":"The layer is loading...","grid.label.columns":"Hide columns","grid.label.filters.show":"Show filters","grid.label.filters.hide":"Hide filters","grid.label.filters.apply":"Apply filters to map","grid.header.sort.0":"Sort ascending","grid.header.sort.1":"Sort descending","grid.header.sort.2":"Sort default","grid.header.reorder.left":"Move left","grid.header.reorder.right":"Move right","grid.filters.label.global":"Search table","grid.filters.column.label.text":"Search {0}...","grid.filters.clear":"Clear filters","grid.filters.number.max":"Max","grid.filters.number.min":"Min","grid.filters.label.info":"{range} of {total} entries shown","grid.filters.label.filtered":"(filtered from {max} total entries)","grid.cells.zoom":"Zoom to feature","grid.cells.details":"Details","grid.button.title":"Grid"},fr:{"grid.title":"\xC9l\xE9ments","grid.alertName":"Grille","grid.clearAll":"Effacer la recherche et les filtres","grid.layer.loading":"La couche est en cours de t\xE9l\xE9chargement...","grid.label.columns":"Masquer les colonnes","grid.label.filters.show":"Afficher les filtres","grid.label.filters.hide":"Masquer les filtres","grid.label.filters.apply":"Appliquer les filtres \xE0 la carte","grid.header.sort.0":"Tri ascendant","grid.header.sort.1":"Tri descendant","grid.header.sort.2":"Tri par d\xE9faut","grid.header.reorder.left":"D\xE9placer vers la gauche","grid.header.reorder.right":"D\xE9placer vers la droite","grid.filters.label.global":"Tableau de recherche","grid.filters.column.label.text":"Rechercher {0}...","grid.filters.clear":"Supprimer les filtres","grid.filters.number.max":"Max","grid.filters.number.min":"Min","grid.filters.label.info":"{range} de {total} saisies affich\xE9es","grid.filters.label.filtered":"(filtr\xE9 \xE0 partir d\u2019un total de {max} saisies)","grid.cells.zoom":"Zoom \xE0 l'\xE9l\xE9ment","grid.cells.details":"D\xE9tails","grid.button.title":"Grille"}};class b extends c{async added(){this.$iApi.panel.register({grid:{screens:{"grid-screen":o(g)},style:{width:"450px"},controls:{expand:!0},button:{tooltip:"grid.button.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /> <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" /></svg>'},expanded:!0,alertName:"grid.alertName"}},{i18n:{messages:f}}),this.$vApp.$store.registerModule("grid",n())}removed(){this.$iApi.fixture.get("appbar")&&this.$iApi.$vApp.$store.dispatch("appbar/removeButton","grid"),this.$iApi.panel.remove("grid"),this.$vApp.$store.unregisterModule("grid")}}export{b as default};
