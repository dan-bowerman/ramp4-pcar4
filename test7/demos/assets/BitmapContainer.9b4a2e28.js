import{a as s,j as t}from"./WGLContainer.df00a1ef.js";import{I as a}from"./Utils.618923ab.js";class p extends s{get requiresDedicatedFBO(){return this.children.some(e=>e.blendFunction==="additive")}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap",brushes:[t.bitmap],target:()=>this.children,drawPhase:a.MAP});return[...super.prepareRenderPasses(e),r]}}export{p as t};
