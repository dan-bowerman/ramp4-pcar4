import{f as n}from"./fabric.3d526017.js";import{eQ as f,f9 as s}from"./main.dd0259bc.js";class x extends f{get config(){return this.$iApi.fixture.get("export").config?.title}make(t){const e=this.config,i={text:"RAMP-Map / PCAR-Carte",fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:30,top:0,left:0,originX:"center",originY:"top"};e&&(i.text=e.value);const o=s(i,t||{}),r=new n.fabric.Text(o.text,o);return Promise.resolve(r)}}export{x as default};
