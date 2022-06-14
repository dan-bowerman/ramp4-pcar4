import{ev as s,ew as o,ex as p,ey as i,ez as n,eA as r,eB as a,eQ as l,eU as m}from"./main.a76a9de0.js";import c from"./screen.9e516f67.js";const d=s({name:"BasemapNavButtonV",methods:{togglePanel(){this.$iApi.panel.toggle("basemap")}}}),v=a("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"})],-1);function h(e,f,g,$,w,x){const t=p("mapnav-button");return i(),n(t,{onClickFunction:e.togglePanel,tooltip:e.$t("basemap.title")},{default:r(()=>[v]),_:1},8,["onClickFunction","tooltip"])}var b=o(d,[["render",h],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/basemap/nav-button.vue"]]),u={en:{"basemap.select":"Select basemap","basemap.title":"Basemap"},fr:{"basemap.select":"S\xE9lectionner la carte de base","basemap.title":"Carte de base"}};class V extends l{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.component("basemap-nav-button",b),this.$iApi.panel.register({id:"basemap",config:{screens:{"basemap-component":m(c)},button:{tooltip:"basemap.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"basemap.title"}},{i18n:{messages:u}})}removed(){console.log(`[fixture] ${this.id} removed`),this.$iApi.fixture.get("appbar")&&this.$iApi.$vApp.$store.dispatch("appbar/removeButton","basemap"),this.$iApi.fixture.get("mapnav")&&this.$iApi.$vApp.$store.dispatch("mapnav/removeItem","basemap"),this.$iApi.panel.remove("basemap")}}export{V as default};
