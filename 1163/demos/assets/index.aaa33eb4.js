import{eR as I,f8 as x}from"./main.13425aba.js";import{f as l}from"./fabric.b69a4c27.js";const M=30,N=20,T=16,G=12,L=8,u=32,d=32,k=350,w=20,m="Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";class A extends I{get config(){return this.$iApi.fixture.get("export").config?.legend}async make(o){const i=this.$vApp.$store.get(x.layers).filter(s=>s.isValidState&&s.visibility&&!s.isCosmetic);if(i.length===0)return new l.fabric.Group([],{originX:"left"});const t=Math.min(i.length,Math.floor(o.width/(k+w))||1),e=(o.width-(t-1)*w)/t;let n=0;const c=(await Promise.all(this._makeSegments(i,e))).map(({title:s,items:f},b)=>{b>0&&(n+=M),s.top=n,n+=s.height+N;const p=f.map(({title:h,items:S},C)=>{const y=[];return h&&!(f.length===1&&h.text===s.text)&&(C>0&&(n+=T),h.top=n,n+=h.height+G,y.push(h)),S.forEach(g=>{g.top=n,n+=g.height+L}),[...y,...S].filter(g=>g)});return new l.fabric.Group([s,...p.flat()])}).flat(),a=this._makeColumns(c,e,t);return Promise.resolve(a)}_makeColumns(o,i,t){let e=0,n=0,r=0;const c=o[o.length-1].aCoords.bl.y/t;return o.forEach((a,s)=>{const f=s!==o.length-1?o[s+1].top-a.top:a.height,b=r>c*(e+1),p=n!==0&&f>c,h=t-e>o.length-s;(b||p||h)&&e<t&&(++e,n=0),a.left=e*(i+w),a.top=n,n+=f,r+=f}),new l.fabric.Group(o,{originX:"left"})}_makeSegments(o,i){return o.map(async t=>{const e=new l.fabric.Textbox(t.name,{fontSize:24,fontFamily:m,width:i}),n=this._getLayerTreeIds(t);let r=[];return r=t.supportsSublayers?await Promise.all(this._makeSegmentChunks(n,t,i)):await Promise.all(this._makeSegmentChunks([-1],t,i)),{title:e,items:r}})}_makeSegmentChunks(o,i,t){const e=i;return o.map(async n=>{const r=n===-1?e:e.getSublayer(n);if(!r)return{title:new l.fabric.Textbox("ERROR",{fontSize:20,fontFamily:m,width:t}),items:[]};await Promise.all(r.legend.map(f=>f.drawPromise));const c=r.legend,a=new l.fabric.Textbox(r.name,{fontSize:20,fontFamily:m,width:t}),s=await Promise.all(this._makeChunkItems(c,t));return{title:a,items:s}})}_makeChunkItems(o,i){return o.map(async t=>{const e=(await F(l.fabric.loadSVGFromString)(t.svgcode))[0];if(t.esriStandard){e.originY="center",e.top=u/2;const n=new l.fabric.Textbox(t.label,{fontSize:12,fontFamily:m,originY:"center",left:d+20,top:u/2,width:i-d-20});return new l.fabric.Group([e,n],{height:u})}else{const n=new l.fabric.Textbox(t.label,{fontSize:12,fontFamily:m,originY:"center",left:0,top:u/2,width:i}),r=Number(t.imgWidth),c=Number(t.imgHeight),a=Math.min(1,i/r);return e&&(e.originY="center",e.top=c*a/2+u,e.scaleToHeight(c*a),e.scaleToWidth(r*a)),new l.fabric.Group([n,e].filter(Boolean),{height:c*a+u})}})}_getLayerTreeIds(o){const i=[],t=[...o.sublayers];for(;t.length>0;){const e=t.shift();!e||(e.visibility&&i.push(e.layerIdx),t.push(...e.sublayers))}return i}}const F=_=>o=>new Promise(i=>{_(o,t=>{i(t)})});export{A as default};
