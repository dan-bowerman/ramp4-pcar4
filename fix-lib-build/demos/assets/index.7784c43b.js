import{eR as n,ew as o,eU as l,ex as a,ey as r,ez as h,eA as c,eB as d,eC as s,eV as m}from"./main.368f1782.js";import{H as u,h as v,a as f}from"./screen.a7750872.js";class $ extends n{toggleHelp(e){const t=this.$iApi.panel.get("help");e===void 0?this.$iApi.panel.toggle(t):e&&!t.isOpen?this.$iApi.panel.open(t):!e&&t.isOpen&&this.$iApi.panel.close(t)}get config(){return super.config}_parseConfig(e){if(!!e&&(this.$vApp.$store.set(u.folderName,e.folderName),e.panelWidth)){const t=this.$iApi.panel.get("help");this.$iApi.panel.setStyle(t,{width:`${e.panelWidth}px`},!0)}}}const g=o({name:"HelpNavButtonV",methods:{onClick(){this.$iApi.event.emit(l.HELP_TOGGLE)}}}),x=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1);function A(i,e,t,H,C,k){const p=r("mapnav-button");return h(),c(p,{onClickFunction:i.onClick,tooltip:i.$t("help.title")},{default:d(()=>[x]),_:1},8,["onClickFunction","tooltip"])}var _=a(g,[["render",A],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/help/nav-button.vue"]]),w={en:{"help.title":"Help","help.section.expand":"Expand section","help.section.collapse":"Collapse section"},fr:{"help.title":"Aide","help.section.expand":"D\xE9velopper une section","help.section.collapse":"R\xE9duire une section"}};class b extends ${added(){console.log(`[fixture] ${this.id} added`),this.$iApi.component("help-nav-button",_),this.$vApp.$store.registerModule("help",v()),this.$iApi.panel.register({help:{screens:{"help-screen":m(f)},style:{"flex-grow":"1","max-width":"750px"},alertName:"help.title"}},{i18n:{messages:w}}),this._parseConfig(this.config);let e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t));this.removed=()=>{console.log(`[fixture] ${this.id} removed`),e(),this.$iApi.fixture.get("mapnav")&&this.$iApi.$vApp.$store.dispatch("mapnav/removeItem","help"),this.$vApp.$store.unregisterModule("help"),this.$iApi.panel.remove("help")}}}export{b as default};
