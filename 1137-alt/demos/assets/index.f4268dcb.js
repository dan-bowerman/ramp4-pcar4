import{f as t}from"./fabric.287b8704.js";import{eR as s}from"./main.79067ed0.js";class c extends s{get config(){return this.$iApi.fixture.get("export").config?.mapElements}make(r){const i=this.$iApi.geo.map.caption.scaleHelper(),o=[];for(let e=0;e<2;e++){let n=new t.fabric.Text(this.$iApi.$vApp.$t("export.scaleBar.approx",[`${this.$iApi.$vApp.$n(i[e].distance,"number")}${i[e].units}`]),{fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:16,top:e*50,left:0,originX:"left",originY:"top"}),a=new t.fabric.Line([0,e===0?30:40,i[e].pixels,e===0?30:40],{stroke:"black",strokeWidth:3});o.push(new t.fabric.Group([a,n]))}return Promise.resolve(new t.fabric.Group(o,r))}}export{c as default};
