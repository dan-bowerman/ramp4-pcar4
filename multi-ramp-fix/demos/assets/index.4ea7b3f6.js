import{ev as s,ew as o,ex as n,ey as p,ez as l,eA as i,eB as a,eQ as r,eU as c}from"./main.938cf89d.js";import m from"./screen.58826acf.js";const d=s({name:"BasemapNavButtonV",methods:{togglePanel(){this.$iApi.panel.toggle("basemap")}}}),v=a("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"})],-1);function u(e,f,g,w,_,x){const t=n("mapnav-button");return p(),l(t,{onClickFunction:e.togglePanel,tooltip:e.$t("basemap.title")},{default:i(()=>[v]),_:1},8,["onClickFunction","tooltip"])}var b=o(d,[["render",u],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/basemap/nav-button.vue"]]),h={en:{"basemap.select":"Select basemap","basemap.title":"Basemap"},fr:{"basemap.select":"S\xE9lectionner la carte de base","basemap.title":"Carte de base"}};class $ extends r{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.component("basemap-nav-button",b),this.$iApi.panel.register({id:"basemap",config:{screens:{"basemap-component":c(m)},button:{tooltip:"basemap.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"basemap.title"}},{i18n:{messages:h}})}removed(){console.log(`[fixture] ${this.id} removed`),this.$iApi.panel.remove("basemap")}}export{$ as default};
