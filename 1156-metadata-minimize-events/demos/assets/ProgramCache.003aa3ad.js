import{t as o}from"./ShaderCompiler.7c102acb.js";class c{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach(r=>r.programs.forEach(a=>a.dispose())),this._programCacheByTemplate=null}getProgram(r,a){return this._programCacheByTemplate.has(r)||this.addProgramTemplate(r,e=>o(this._rctx,r,e)),this.getProgramTemplateInstance(r,a)}addProgramTemplate(r,a){this._programCacheByTemplate.set(r,{constructor:a,programs:new Map})}getProgramTemplateInstance(r,a){const e=this._programCacheByTemplate.get(r);if(e){const t=a?JSON.stringify(a):"default";if(!e.programs.has(t)){const s=e.constructor(a);e.programs.set(t,s)}return e.programs.get(t)}return null}}export{c as t};
