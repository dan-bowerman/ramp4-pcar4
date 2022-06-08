import{et as u,eu as m,ev as i,ew as r,ex as a,ey as s,ez as n,f6 as k,f7 as z,eA as o,eO as y,eX as b,eI as w,eJ as h,eP as P,eT as v,f8 as G}from"./main.d8c8794a.js";const C=u({name:"GazeboAppbarButtonV",props:{options:{type:Object}},methods:{onClick(){this.$iApi.panel.toggle({id:"p2",screen:"p-2-screen-2"})}}});function x(e,t,d,g,f,_){const p=i("appbar-button",!0);return r(),a(p,{onClickFunction:e.onClick,tooltip:"Gazebo"},{default:s(()=>[n("span",{style:k({fontWeight:"bold",color:e.options.colour})},"G",4)]),_:1},8,["onClickFunction"])}var A=m(C,[["render",x],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/appbar-button.vue"]]);const V=u({name:"GazeboP1Screen1V",data(){return{route:z("panel/items@p1.route"),pinned:z("panel/pinned"),url:"https://i2.wp.com/freepngimages.com/wp-content/uploads/2017/08/wooden-garden-gazebo.png?w=860"}},computed:{checkScreenSize(){return this.$iApi.screenSize!=="xs"}},methods:{pinPanel(){const e=this.$store.get("panel/items@p1");this.pinned=this.pinned===null||(this.pinned&&this.pinned.id)!=="p1"?e:null}}}),O=b(" Gazebo/Panel 1/Screen A "),T={class:"flex"},B=n("a",{href:"#"},"Option 1",-1),F=n("a",{href:"#"},"Option 2",-1),j=n("a",{href:"#"},"Option 3",-1),N={class:"flex flex-col items-center"},E=["src"];function I(e,t,d,g,f,_){const p=i("panel-options-menu"),l=i("pin"),c=i("panel-screen");return r(),a(c,{panel:e.panel},{header:s(()=>[O]),controls:s(()=>[n("div",T,[o(" this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes "),y(p,null,{default:s(()=>[B,F,j]),_:1}),e.checkScreenSize?(r(),a(l,{key:0,active:e.pinned&&e.pinned.id==="p1",onClick:e.pinPanel},null,8,["active","onClick"])):o("v-if",!0)])]),content:s(()=>[n("div",N,[o(" setting panel route directly in the store will not work \u274C  "),n("button",{onClick:t[0]||(t[0]=$=>e.route={screen:"p-1-screen-2"}),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 2 "),n("img",{width:"350px",src:e.url,alt:"Gazebo1",srcset:""},null,8,E)])]),_:1},8,["panel"])}var D=m(V,[["render",I],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/p1-screen-1.vue"]]);const H=u({name:"GazeboP1Scree2V",data(){return{url:"https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/02/garden-shed-transparent-image-2.png?w=693"}},computed:{checkScreenSize(){return this.$iApi.screenSize!=="xs"}},methods:{pinPanel(){const e=w("panel/items@p1");this.$iApi.$vApp.$store.set("panel/pinned",this.pinned()!=="p1"?e:null)},goToScreen(e){this.$iApi.$vApp.$store.set("panel/items@p1.route",{screen:e})},pinned(){const e=w("panel/pinned");return e?e.id:null}}}),q=b(" Gazebo/Panel 1/Screen B "),J={class:"flex flex-col items-center"},L=["src"];function M(e,t,d,g,f,_){const p=i("pin"),l=i("panel-screen");return r(),a(l,{panel:e.panel},{header:s(()=>[q]),controls:s(()=>[o(" this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes "),e.checkScreenSize?(r(),a(p,{key:0,active:e.pinned()==="p1",onClick:e.pinPanel},null,8,["active","onClick"])):o("v-if",!0)]),content:s(()=>[n("div",J,[o(" setting panel route directly in the store will not work \u274C  "),n("button",{onClick:t[0]||(t[0]=c=>e.goToScreen("p-1-screen-1")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 1 "),n("img",{width:"350px",src:e.url,alt:"Gazebo2",srcset:""},null,8,L)])]),_:1},8,["panel"])}var R=m(H,[["render",M],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/p1-screen-2.vue"]]);const W=u({name:"GazeboP2Screen1V",props:{panel:{type:Object,required:!0},greeting:{type:String}},computed:{isPinned(){return this.panel.isPinned},checkScreenSize(){return this.$iApi.screenSize!=="xs"}}}),X=b(" Gazebo/Panel 2/Screen A "),K={class:"flex flex-row justify-center items-center mt-16"},Q={class:"mt-16"};function U(e,t,d,g,f,_){const p=i("pin"),l=i("panel-screen");return r(),a(l,{panel:e.panel},{header:s(()=>[X]),controls:s(()=>[o(" <pin> is a global button component that any fixture/panel/screen can reuse "),o(" \u2714 this is the correct way to pin a panel and bind the button active state whether this panel is pinned or not \u{1F447} "),e.checkScreenSize?(r(),a(p,{key:0,onClick:t[0]||(t[0]=c=>e.panel.pin(!e.isPinned)),active:e.isPinned},null,8,["active"])):o("v-if",!0),o(" \u2714 this will also work \u{1F447} "),o(' <pin @click="panel.pin(!panel.isPinned)" :active="panel.isPinned"></pin> ')]),content:s(()=>[b(h(e.$t("gz.hello"))+" ",1),n("div",K,[o(" \u2714 this is the correct way to switch between screens in the same panel \u{1F447} "),n("button",{onClick:t[1]||(t[1]=c=>e.panel.show({screen:"p-2-screen-2",props:{greeting:"Howdy?"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"}," Go back to B "),n("button",{onClick:t[2]||(t[2]=c=>e.panel.show("p-2-screen-3")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," Go to C ")]),n("p",Q,h(e.greeting),1)]),_:1},8,["panel"])}var Y=m(W,[["render",U],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/p2-screen-1.vue"]]),Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));u({name:"GazeboP2Screen2V",props:{panel:{type:Object,required:!0},greeting:{type:String}},computed:{isPinned(){return this.panel.isPinned},checkScreenSize(){return this.$iApi.screenSize!=="xs"}},methods:{enhancedCatActivities(){this.panel.show("p-2-screen-3"),this.$iApi.event.emit("gazebo/beholdMyText","I am a cat")}}});const ee=u({name:"GazeboP2Screen3V",props:{panel:{type:Object,required:!0}},i18n:{messages:{en:{lang_native:"En",who:"[me cat]"},fr:{lang_native:"Fr",who:"[moi chat]"}}},computed:{checkScreenSize(){return this.$iApi.screenSize!=="xs"}}}),ne=b(" Gazebo/Panel 2/Screen C "),te={class:"flex flex-col items-center mt-16"},oe=n("img",{class:"my-16",src:"https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",alt:"",srcset:""},null,-1),se=n("p",null,"Locale merging:",-1),ie=n("dt",null,"global locale:",-1),re={class:"ml-32 font-bold"},ae=n("dt",null,"fixture locale:",-1),pe={class:"ml-32 font-bold"},le=n("dt",null,"common panels locale:",-1),ce={class:"ml-32 font-bold"};function de(e,t,d,g,f,_){const p=i("pin"),l=i("close"),c=i("panel-screen");return r(),a(c,{panel:e.panel},{header:s(()=>[ne]),controls:s(()=>[o(" <pin> is a global button component that any fixture/panel/screen can reuse "),o(" \u2714 this is the correct way to pin a panel and bind the button active state whether this panel is pinned or not \u{1F447} "),e.checkScreenSize?(r(),a(p,{key:0,onClick:t[0]||(t[0]=$=>e.panel.pin()),active:e.panel.isPinned},null,8,["active"])):o("v-if",!0),o(" \u2714 this will also work \u{1F447} "),o(' <pin @click="panel.pin()" :active="panel.isPinned"></pin> '),e.checkScreenSize?(r(),a(l,{key:1,onClick:t[1]||(t[1]=$=>e.panel.close())})):o("v-if",!0)]),content:s(()=>[n("div",te,[o(" \u2714 this is the correct way to switch between screens in the same panel \u{1F447} "),n("button",{onClick:t[2]||(t[2]=$=>e.panel.show({screen:"p-2-screen-1",props:{greeting:"Greeting from Screen C"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"}," Switch to Screen A "),oe,se,n("dl",null,[ie,n("dd",re,h(e.$t("lang_native")),1),ae,n("dd",pe,h(e.$t("gz.hello")),1),le,n("dd",ce,h(e.$t("who")),1)])])]),_:1},8,["panel"])}var ue=m(ee,[["render",de],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/p2-screen-3.vue"]]),S={en:{"gz.hello":`\\"I'm a simple panel. but from a locale file\\"`,"gz.hello2":`\\"I'm a simple panel.\\"`,"gz.alert1":"Gazebo","gz.alert2":"Gazebo two"},fr:{"gz.hello":'[fr] \\"Bonjour. Je suis un panel.\\"',"gz.hello2":'[fr] \\"Bonjour. Je suis un panel.\\"',"gz.alert1":"[fr] Gazebo","gz.alert2":"[fr] Gazebo deux"}};const he="gazebo/beholdMyText";class be extends P{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.event.registerEventName(he),this.$iApi.component("gazebo-appbar-button",A),this.$iApi.panel.register({id:"p1",config:{screens:{"p-1-screen-1":v(D),"p-1-screen-2":v(R)},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert1"}},{i18n:{messages:S}}),this.$iApi.panel.register({id:"p2",config:{screens:{"p-2-screen-1":()=>new Promise(t=>setTimeout(()=>G(()=>Promise.resolve().then(function(){return Z}),void 0).then(d=>{t(d)}),2e3)),"p-2-screen-2":"gazebo/p2-screen-2.vue","p-2-screen-3":()=>new Promise(t=>t(v(ue)))},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert2"}},{i18n:{messages:S}})}}export{be as default};
