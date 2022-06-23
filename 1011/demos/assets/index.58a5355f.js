import{f4 as g,eR as S,eV as H}from"./main.e0908dae.js";import{E as $,x as L,a as y}from"./screen.226ea2c6.js";import{f as A}from"./fabric.49f3673c.js";var T={exports:{}};(function(F,i){(function(p,c){c()})(g,function(){function p(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function c(e,t,r){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,r)},o.onerror=function(){console.error("could not download file")},o.send()}function w(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function h(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof g=="object"&&g.global===g?g:void 0,v=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(e,t,r){var o=a.URL||a.webkitURL,n=document.createElement("a");t=t||e.name||"download",n.download=t,n.rel="noopener",typeof e=="string"?(n.href=e,n.origin===location.origin?h(n):w(n.href)?c(e,t,r):h(n,n.target="_blank")):(n.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(n.href)},4e4),setTimeout(function(){h(n)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(p(e,r),t);else if(w(e))c(e,t,r);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){h(o)})}}:function(e,t,r,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return c(e,t,r);var n=e.type==="application/octet-stream",l=/constructor/i.test(a.HTMLElement)||a.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||n&&l||v)&&typeof FileReader<"u"){var f=new FileReader;f.onloadend=function(){var x=f.result;x=d?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=x:location=x,o=null},f.readAsDataURL(e)}else{var b=a.URL||a.webkitURL,m=b.createObjectURL(e);o?o.location=m:location.href=m,o=null,setTimeout(function(){b.revokeObjectURL(m)},4e4)}});a.saveAs=u.saveAs=u,F.exports=u})})(T);var M=T.exports;A.fabric.Object.prototype.objectCaching=!1;const E=1200,s={TOP:40,RIGHT:40,BOTTOM:40,LEFT:40};class R extends S{fcFabric;fcFabricDownload;options={runningHeight:0,scale:1};get config(){return super.config}_parseConfig(i){!i||(this.$vApp.$store.set($.componentSelectedState,{title:i.title?.selected??!0,map:i.map?.selected??!0,mapElements:i.mapElements?.selected??!0,legend:i.legend?.selected??!0,footnote:i.footnote?.selected??!0,timestamp:i.timestamp?.selected??!0}),this.$vApp.$store.set($.fileName,i.fileName||""))}getSubFixture(i){return this.$iApi.fixture.get(i)}async make(i,p){this.fcFabric=new A.fabric.StaticCanvas(i,{backgroundColor:"#fff"}),this.fcFabricDownload=new A.fabric.StaticCanvas(null,{backgroundColor:"#fff"}),this.options.runningHeight=0;let c=this.$iApi.$vApp.$store.get($.componentSelectedState);const w=this.getSubFixture("export-title"),h=this.getSubFixture("export-map"),a=this.getSubFixture("export-scalebar"),v=this.getSubFixture("export-northarrow"),u=this.getSubFixture("export-legend");let e,t,r,o,n,l=[];c.title&&(e=await w.make({top:this.options.runningHeight,left:0,originX:"left"}),this.options.runningHeight+=e.height+40,l.push(e)),c.map&&(t=await h.make({top:this.options.runningHeight}),e&&(e.left=t.width/2,e.originX="center"),this.options.runningHeight+=t.height+40,l.push(t)),this.options.scale=p/((t?.width??E)+s.LEFT+s.RIGHT),c.mapElements&&(r=await a.make({top:this.options.runningHeight,left:0}),this.options.runningHeight+=r.height+40,l.push(r),o=await v.make({top:r.top,left:p/this.options.scale}),o.top+=o.height/2-20,o.left+=-o.width*2,l.push(o)),c.legend&&(n=await u.make({width:u.config?.columnWidth??t?.width??E}),n.top=this.options.runningHeight,this.options.runningHeight+=n.height,l.push(n));const d=new A.fabric.Group(l,{top:s.TOP*this.options.scale,left:s.LEFT*this.options.scale}),f=await new Promise(b=>{d.clone(m=>{b(m)})});f.top=s.TOP,f.left=s.LEFT,this.fcFabricDownload.add(f),d.scale(this.options.scale),this.fcFabric.add(d),this.fcFabric.setDimensions({width:p,height:(this.options.runningHeight+s.TOP+s.BOTTOM)*this.options.scale}),this.fcFabric.renderAll(),this.fcFabricDownload.setDimensions({width:(t?.width??E)+s.LEFT+s.RIGHT,height:this.options.runningHeight+s.TOP+s.BOTTOM}),this.fcFabricDownload.renderAll()}export(){if(!this.fcFabric)return;const i=new Date,p=this.config?.fileName||`map-carte - ${i.getFullYear()}-${i.getMonth()}-${i.getDay()}, ${i.getHours()}_${i.getMinutes()}`;M.saveAs(this.fcFabricDownload.toDataURL({format:"png",quality:1}),`${p}.png`)}}var O={en:{"export.title":"Export","export.alertName":"Export","export.download":"Download image","export.refresh":"Refresh","export.scaleBar.approx":"{0} approx.","export.menu":"Settings Menu","export.menu.component.title":"Title","export.menu.component.map":"Map","export.menu.component.mapElements":"North arrow and scalebar","export.menu.component.legend":"Legend","export.menu.component.footnote":"Footnote","export.menu.component.timestamp":"Timestamp"},fr:{"export.title":"[fr] Export","export.alertName":"[fr] Export","export.download":"[fr] Download image","export.refresh":"[fr] Refresh","export.scaleBar.approx":"[fr] {0} approx.","export.menu":"[fr] Settings Menu","export.menu.component.title":"Titre","export.menu.component.map":"Carte","export.menu.component.mapElements":"Fl\xE8che du nord et \xE9chelle graphique","export.menu.component.legend":"L\xE9gende","export.menu.component.footnote":"R\xE9f\xE9rence","export.menu.component.timestamp":"[fr] Timestamp"}};class j extends R{initialized(){this.$iApi.fixture.add("export-title"),this.$iApi.fixture.add("export-map"),this.$iApi.fixture.add("export-legend"),this.$iApi.fixture.add("export-northarrow"),this.$iApi.fixture.add("export-scalebar")}added(){console.log(`[fixture] ${this.id} added`),this.$vApp.$store.registerModule("export",L()),this.$iApi.panel.register({id:"export",config:{screens:{"export-screen":H(y)},style:{"flex-grow":"1","max-width":"800px"},button:{tooltip:"export.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'},alertName:"export.alertName"}},{i18n:{messages:O}}),this._parseConfig(this.config);let i=this.$vApp.$watch(()=>this.config,p=>this._parseConfig(p));this.removed=()=>{console.log(`[fixture] ${this.id} removed`),i(),this.$iApi.fixture.get("export-title")?.remove(),this.$iApi.fixture.get("export-map")?.remove(),this.$iApi.fixture.get("export-legend")?.remove(),this.$iApi.fixture.get("export-northarrow")?.remove(),this.$iApi.fixture.get("export-scalebar")?.remove(),this.$iApi.fixture.get("appbar")&&this.$iApi.$vApp.$store.dispatch("appbar/removeButton","export"),this.$iApi.panel.remove("export"),this.$vApp.$store.unregisterModule("export")}}}export{j as default};
