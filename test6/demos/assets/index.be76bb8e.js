import{eQ as f,eR as g,et as m,eE as w,eS as y,e$ as A,f2 as $,fu as v,fv as M,fw as I,fx as k,eu as x,ew as L,ex as P,eA as S,f4 as _}from"./main.7dbc90fb.js";class N{arrowIcon="";poleIcon=""}const E={},b={},z={};var i=(e=>(e.arrowIcon="northarrow/arrowIcon",e.poleIcon="northarrow/poleIcon",e))(i||{});function C(){const e=new N;return{namespaced:!0,state:e,getters:{...E},actions:{...z,...f.actions(e)},mutations:{...b,...f.mutations(e)}}}class R extends g{_parseConfig(t){!t||(this.$vApp.$store.set(i.arrowIcon,t.arrowIcon),this.$vApp.$store.set(i.poleIcon,t.poleIcon))}get config(){return super.config}}const T="path",W=12,G="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",H="#ff0000ff",B=5,O=6;var Y={style:T,size:W,path:G,colour:H,xOffset:B,yOffset:O};const q=m({name:"NortharrowV",data(){return{arrowIcon:w(i.arrowIcon),poleIcon:w(i.poleIcon),angle:0,arrowLeft:0,displayArrow:!1,arrow:`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`,poleMarkerAdded:!1,handlers:[]}},mounted(){this.arrowIcon.value&&(this.arrow=`<img width='25' src='${this.arrowIcon.value}'>`),this.$iApi.geo.map.esriView?.ready&&this.updateNortharrow(this.$iApi.geo.map.getExtent()),this.handlers.push(this.$iApi.event.on(y.MAP_EXTENTCHANGE,A(300,this.updateNortharrow)))},beforeUnmount(){this.handlers.forEach(e=>this.$iApi.event.off(e))},methods:{async updateNortharrow(e){const t=document.querySelector(".inner-shell"),r=this.$el.querySelector(".northarrow").getBoundingClientRect().width,o=document.querySelector(".appbar")?.clientWidth||0,a=e.sr;if(a.isWebMercator())this.displayArrow=!0,this.angle=0,this.arrowLeft=o+(t.clientWidth-o-r)/2;else{const l=new $("pole",{x:-96,y:90}),n=await this.$iApi.geo.proj.projectGeometry(a,l),h=this.$iApi.geo.map.mapPointToScreenPoint(n);if(h.screenY<0){this.displayArrow=!0;const s={screenX:t.clientWidth/2,screenY:t.clientHeight};this.angle=Math.atan((h.screenX-s.screenX)/(s.screenY-h.screenY))*180/Math.PI,this.arrowLeft=t.clientWidth/2+t.clientHeight*Math.tan(this.angle*Math.PI/180)-r/2,this.arrowLeft=Math.max(o-r/2,Math.min(this.$iApi.geo.map.getPixelWidth()-r/2,this.arrowLeft))}else if(this.displayArrow=!1,!this.poleMarkerAdded){this.poleMarkerAdded=!0;let s;this.poleIcon?s={style:v.ICON,icon:this.poleIcon,height:16.5,width:16.5}:s=Y;const c=await this.$iApi.geo.layer.createLayer({id:p,layerType:M.GRAPHIC,cosmetic:!0});await c.initiate();const d=new I(n,"northpole"),u=new k(s);d.style=u,c.addGraphic(d),this.$iApi.geo.map.addLayer(c)}}},getArrowStyle(){return{"transform-origin":"top center",transform:`rotate(${this.angle}deg)`,left:`${this.arrowLeft}px`,visibility:this.displayArrow?"visible":"hidden"}}}}),V=["innerHTML"];function X(e,t,r,o,a,l){return L(),P("div",{class:"absolute transition-all duration-300 ease-out",style:_(e.getArrowStyle())},[S("span",{class:"northarrow",innerHTML:e.arrow},null,8,V)],4)}var j=x(q,[["render",X],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/northarrow/northarrow.vue"]]);const p="RampPoleMarker";class D extends R{async added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("northarrow",C()),this._parseConfig(this.config);let t=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n));const{vNode:r,destroy:o,el:a}=this.mount(j,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),t(),this.$vApp.$store.unregisterModule("northarrow"),this.$iApi.geo.layer.getLayer(p)&&this.$iApi.geo.map.removeLayer(p),o()}}}export{p as POLE_MARKER_LAYER_ID,D as default};
