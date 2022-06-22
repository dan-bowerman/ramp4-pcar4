import{ew as u,ex as m,ey as i,ez as r,eA as a,eB as s,eC as n,fb as w,eD as o,eQ as S,eZ as b,eL as h,eR as k,eV as v,_ as y}from"./main.69b94f24.js";const P=u({name:"GazeboAppbarButtonV",props:{options:{type:Object}},methods:{onClick(){this.$iApi.panel.toggle({id:"p2",screen:"p-2-screen-2"})}}});function G(e,t,d,g,_,f){const p=i("appbar-button",!0);return r(),a(p,{onClickFunction:e.onClick,tooltip:"Gazebo"},{default:s(()=>[n("span",{style:w({fontWeight:"bold",color:e.options.colour})},"G",4)]),_:1},8,["onClickFunction"])}var C=m(P,[["render",G],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/appbar-button.vue"]]);const x=u({name:"GazeboP1Screen1V",data(){return{route:this.sync("panel/items@p1.route"),pinned:this.sync("panel/pinned"),url:"https://i2.wp.com/freepngimages.com/wp-content/uploads/2017/08/wooden-garden-gazebo.png?w=860"}},computed:{checkScreenSize(){return this.$iApi.screenSize!=="xs"}},methods:{pinPanel(){const e=this.$store.get("panel/items@p1");this.pinned=this.pinned===null||(this.pinned&&this.pinned.id)!=="p1"?e:null}}}),A=b(" Gazebo/Panel 1/Screen A "),V={class:"flex"},B=n("a",{href:"#"},"Option 1",-1),F=n("a",{href:"#"},"Option 2",-1),O=n("a",{href:"#"},"Option 3",-1),T={class:"flex flex-col items-center"},j=["src"];function N(e,t,d,g,_,f){const p=i("panel-options-menu"),l=i("pin"),c=i("panel-screen");return r(),a(c,{panel:e.panel},{header:s(()=>[A]),controls:s(()=>[n("div",V,[o(" this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes "),S(p,null,{default:s(()=>[B,F,O]),_:1}),e.checkScreenSize?(r(),a(l,{key:0,active:e.pinned&&e.pinned.id==="p1",onClick:e.pinPanel},null,8,["active","onClick"])):o("v-if",!0)])]),content:s(()=>[n("div",T,[o(" setting panel route directly in the store will not work \u274C  "),n("button",{onClick:t[0]||(t[0]=$=>e.route={screen:"p-1-screen-2"}),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 2 "),n("img",{width:"350px",src:e.url,alt:"Gazebo1",srcset:""},null,8,j)])]),_:1},8,["panel"])}var E=m(x,[["render",N],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/p1-screen-1.vue"]]);const D=u({name:"GazeboP1Scree2V",data(){return{url:"https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/02/garden-shed-transparent-image-2.png?w=693"}},computed:{checkScreenSize(){return this.$iApi.screenSize!=="xs"}},methods:{pinPanel(){const e=this.get("panel/items@p1");this.$iApi.$vApp.$store.set("panel/pinned",this.pinned()!=="p1"?e:null)},goToScreen(e){this.$iApi.$vApp.$store.set("panel/items@p1.route",{screen:e})},pinned(){const e=this.get("panel/pinned");return e?e.id:null}}}),I=b(" Gazebo/Panel 1/Screen B "),H={class:"flex flex-col items-center"},L=["src"];function q(e,t,d,g,_,f){const p=i("pin"),l=i("panel-screen");return r(),a(l,{panel:e.panel},{header:s(()=>[I]),controls:s(()=>[o(" this is fine, but the name of the panel is hardcoded there, so you wouldn't need to update it if it ever changes "),e.checkScreenSize?(r(),a(p,{key:0,active:e.pinned()==="p1",onClick:e.pinPanel},null,8,["active","onClick"])):o("v-if",!0)]),content:s(()=>[n("div",H,[o(" setting panel route directly in the store will not work \u274C  "),n("button",{onClick:t[0]||(t[0]=c=>e.goToScreen("p-1-screen-1")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 1 "),n("img",{width:"350px",src:e.url,alt:"Gazebo2",srcset:""},null,8,L)])]),_:1},8,["panel"])}var M=m(D,[["render",q],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/p1-screen-2.vue"]]);const R=u({name:"GazeboP2Screen1V",props:{panel:{type:Object,required:!0},greeting:{type:String}},computed:{isPinned(){return this.panel.isPinned},checkScreenSize(){return this.$iApi.screenSize!=="xs"}}}),J=b(" Gazebo/Panel 2/Screen A "),W={class:"flex flex-row justify-center items-center mt-16"},Q={class:"mt-16"};function X(e,t,d,g,_,f){const p=i("pin"),l=i("panel-screen");return r(),a(l,{panel:e.panel},{header:s(()=>[J]),controls:s(()=>[o(" <pin> is a global button component that any fixture/panel/screen can reuse "),o(" \u2714 this is the correct way to pin a panel and bind the button active state whether this panel is pinned or not \u{1F447} "),e.checkScreenSize?(r(),a(p,{key:0,onClick:t[0]||(t[0]=c=>e.panel.pin(!e.isPinned)),active:e.isPinned},null,8,["active"])):o("v-if",!0),o(" \u2714 this will also work \u{1F447} "),o(' <pin @click="panel.pin(!panel.isPinned)" :active="panel.isPinned"></pin> ')]),content:s(()=>[b(h(e.$t("gz.hello"))+" ",1),n("div",W,[o(" \u2714 this is the correct way to switch between screens in the same panel \u{1F447} "),n("button",{onClick:t[1]||(t[1]=c=>e.panel.show({screen:"p-2-screen-2",props:{greeting:"Howdy?"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"}," Go back to B "),n("button",{onClick:t[2]||(t[2]=c=>e.panel.show("p-2-screen-3")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," Go to C ")]),n("p",Q,h(e.greeting),1)]),_:1},8,["panel"])}var Z=m(R,[["render",X],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/p2-screen-1.vue"]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));u({name:"GazeboP2Screen2V",props:{panel:{type:Object,required:!0},greeting:{type:String}},computed:{isPinned(){return this.panel.isPinned},checkScreenSize(){return this.$iApi.screenSize!=="xs"}},methods:{enhancedCatActivities(){this.panel.show("p-2-screen-3"),this.$iApi.event.emit("gazebo/beholdMyText","I am a cat")}}});const U=u({name:"GazeboP2Screen3V",props:{panel:{type:Object,required:!0}},i18n:{messages:{en:{lang_native:"En",who:"[me cat]"},fr:{lang_native:"Fr",who:"[moi chat]"}}},computed:{checkScreenSize(){return this.$iApi.screenSize!=="xs"}}}),Y=b(" Gazebo/Panel 2/Screen C "),ee={class:"flex flex-col items-center mt-16"},ne=n("img",{class:"my-16",src:"https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",alt:"",srcset:""},null,-1),te=n("p",null,"Locale merging:",-1),oe=n("dt",null,"global locale:",-1),se={class:"ml-32 font-bold"},ie=n("dt",null,"fixture locale:",-1),re={class:"ml-32 font-bold"},ae=n("dt",null,"common panels locale:",-1),pe={class:"ml-32 font-bold"};function le(e,t,d,g,_,f){const p=i("pin"),l=i("close"),c=i("panel-screen");return r(),a(c,{panel:e.panel},{header:s(()=>[Y]),controls:s(()=>[o(" <pin> is a global button component that any fixture/panel/screen can reuse "),o(" \u2714 this is the correct way to pin a panel and bind the button active state whether this panel is pinned or not \u{1F447} "),e.checkScreenSize?(r(),a(p,{key:0,onClick:t[0]||(t[0]=$=>e.panel.pin()),active:e.panel.isPinned},null,8,["active"])):o("v-if",!0),o(" \u2714 this will also work \u{1F447} "),o(' <pin @click="panel.pin()" :active="panel.isPinned"></pin> '),e.checkScreenSize?(r(),a(l,{key:1,onClick:t[1]||(t[1]=$=>e.panel.close())})):o("v-if",!0)]),content:s(()=>[n("div",ee,[o(" \u2714 this is the correct way to switch between screens in the same panel \u{1F447} "),n("button",{onClick:t[2]||(t[2]=$=>e.panel.show({screen:"p-2-screen-1",props:{greeting:"Greeting from Screen C"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"}," Switch to Screen A "),ne,te,n("dl",null,[oe,n("dd",se,h(e.$t("lang_native")),1),ie,n("dd",re,h(e.$t("gz.hello")),1),ae,n("dd",pe,h(e.$t("who")),1)])])]),_:1},8,["panel"])}var ce=m(U,[["render",le],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/gazebo/p2-screen-3.vue"]]),z={en:{"gz.hello":`\\"I'm a simple panel. but from a locale file\\"`,"gz.hello2":`\\"I'm a simple panel.\\"`,"gz.alert1":"Gazebo","gz.alert2":"Gazebo two"},fr:{"gz.hello":'[fr] \\"Bonjour. Je suis un panel.\\"',"gz.hello2":'[fr] \\"Bonjour. Je suis un panel.\\"',"gz.alert1":"[fr] Gazebo","gz.alert2":"[fr] Gazebo deux"}};const de="gazebo/beholdMyText";class he extends k{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.event.registerEventName(de),this.$iApi.component("gazebo-appbar-button",C),this.$iApi.panel.register({id:"p1",config:{screens:{"p-1-screen-1":v(E),"p-1-screen-2":v(M)},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert1"}},{i18n:{messages:z}}),this.$iApi.panel.register({id:"p2",config:{screens:{"p-2-screen-1":()=>new Promise(t=>setTimeout(()=>y(()=>Promise.resolve().then(function(){return K}),void 0).then(d=>{t(d)}),2e3)),"p-2-screen-2":"gazebo/p2-screen-2.vue","p-2-screen-3":()=>new Promise(t=>t(v(ce)))},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert2"}},{i18n:{messages:z}})}}export{he as default};
