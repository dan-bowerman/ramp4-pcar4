import{f5 as f,eR as u,ew as g,eU as m,f6 as y,f9 as A,fz as $,fA as v,fB as M,fC as I,ex as k,ez as x,eE as L,eC as P,fb as _}from"./main.368f1782.js";class S{arrowIcon="";poleIcon=""}const N={},b={},E={};var a=(e=>(e.arrowIcon="northarrow/arrowIcon",e.poleIcon="northarrow/poleIcon",e))(a||{});function z(){const e=new S;return{namespaced:!0,state:e,getters:{...N},actions:{...E,...f.actions(e)},mutations:{...b,...f.mutations(e)}}}class C extends u{_parseConfig(t){!t||(this.$vApp.$store.set(a.arrowIcon,t.arrowIcon),this.$vApp.$store.set(a.poleIcon,t.poleIcon))}get config(){return super.config}}const R="path",T=12,W="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",B="#ff0000ff",G=5,H=6;var O={style:R,size:T,path:W,colour:B,xOffset:G,yOffset:H};const Y=g({name:"NortharrowV",data(){return{arrowIcon:this.get(a.arrowIcon),poleIcon:this.get(a.poleIcon),angle:0,arrowLeft:0,displayArrow:!1,arrow:`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`,poleMarkerAdded:!1,handlers:[]}},mounted(){this.arrowIcon.value&&(this.arrow=`<img width='25' src='${this.arrowIcon.value}'>`),this.$iApi.geo.map.esriView?.ready&&this.updateNortharrow(this.$iApi.geo.map.getExtent()),this.handlers.push(this.$iApi.event.on(m.MAP_EXTENTCHANGE,y(300,this.updateNortharrow)))},beforeUnmount(){this.handlers.forEach(e=>this.$iApi.event.off(e))},methods:{async updateNortharrow(e){const t=document.querySelector(".inner-shell"),r=this.$el.querySelector(".northarrow").getBoundingClientRect().width,o=document.querySelector(".appbar")?.clientWidth||0,i=e.sr;if(i.isWebMercator())this.displayArrow=!0,this.angle=0,this.arrowLeft=o+(t.clientWidth-o-r)/2;else{const l=new A("pole",{x:-96,y:90}),n=await this.$iApi.geo.proj.projectGeometry(i,l),h=this.$iApi.geo.map.mapPointToScreenPoint(n);if(h.screenY<0){this.displayArrow=!0;const s={screenX:t.clientWidth/2,screenY:t.clientHeight};this.angle=Math.atan((h.screenX-s.screenX)/(s.screenY-h.screenY))*180/Math.PI,this.arrowLeft=t.clientWidth/2+t.clientHeight*Math.tan(this.angle*Math.PI/180)-r/2,this.arrowLeft=Math.max(o-r/2,Math.min(this.$iApi.geo.map.getPixelWidth()-r/2,this.arrowLeft))}else if(this.displayArrow=!1,!this.poleMarkerAdded){this.poleMarkerAdded=!0;let s;this.poleIcon?s={style:$.ICON,icon:this.poleIcon,height:16.5,width:16.5}:s=O;const c=this.$iApi.geo.layer.createLayer({id:p,layerType:v.GRAPHIC,cosmetic:!0});await c.initiate();const d=new M(n,"northpole"),w=new I(s);d.style=w,c.addGraphic(d),this.$iApi.geo.map.addLayer(c)}}},getArrowStyle(){return{"transform-origin":"top center",transform:`rotate(${this.angle}deg)`,left:`${this.arrowLeft}px`,visibility:this.displayArrow?"visible":"hidden"}}}}),q=["innerHTML"];function V(e,t,r,o,i,l){return x(),L("div",{class:"absolute transition-all duration-300 ease-out",style:_(e.getArrowStyle())},[P("span",{class:"northarrow",innerHTML:e.arrow},null,8,q)],4)}var X=k(Y,[["render",V],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/northarrow/northarrow.vue"]]);const p="RampPoleMarker";class F extends C{async added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("northarrow",z()),this._parseConfig(this.config);let t=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n));const{vNode:r,destroy:o,el:i}=this.mount(X,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(i.childNodes[0]),this.removed=()=>{console.log(`[fixture] ${this.id} removed`),t(),this.$vApp.$store.unregisterModule("northarrow"),this.$iApi.geo.layer.getLayer(p)&&this.$iApi.geo.map.removeLayer(p),o()}}}export{p as POLE_MARKER_LAYER_ID,F as default};
