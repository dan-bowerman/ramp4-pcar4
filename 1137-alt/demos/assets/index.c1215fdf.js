import{ew as n,eR as o,ex as s,ez as a,eE as l,eC as r,ey as d,eA as h,eB as _}from"./main.79067ed0.js";const f=n({name:"SnowmanV",props:{fixture:{type:o,required:!0},message:String},data(){return{url:"https://i.ya-webdesign.com/images/evil-snowman-png-1.png"}},mounted(){this.$options.iApi,this.fixture,console.log(this.message),setTimeout(()=>{console.log(`[fixture] ${this.fixture.id} self-terminates`),this.$el.parentNode.removeChild(this.$el),this.fixture.remove()},6e3)}}),$={class:"absolute top-0 right-0"},w=["src"];function x(e,t,i,p,c,m){return a(),l("div",$,[r("img",{style:{width:"250px"},src:e.url,alt:"Snowman",srcset:""},null,8,w)])}var g=s(f,[["render",x],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/snowman/snowman.vue"]]);const b=n({name:"SnowmanAppbarButtonV",methods:{togglePanel(){this.$iApi.fixture.add("snowman")}}}),v=r("span",{class:"block h-24"},"\u26C4",-1);function C(e,t,i,p,c,m){const u=d("appbar-button",!0);return a(),h(u,{onClickFunction:e.togglePanel,tooltip:"\u26C4"},{default:_(()=>[v]),_:1},8,["onClickFunction"])}var k=s(b,[["render",C],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/snowman/appbar-button.vue"]]);class B extends o{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.component("snowman-appbar-button",k);const t=this.extend(g,{propsData:{message:"I'm snowman prop.",fixture:this}});this.$vApp.$el.appendChild(t)}removed(){console.log(`[fixture] ${this.id} removed`)}}export{B as default};
