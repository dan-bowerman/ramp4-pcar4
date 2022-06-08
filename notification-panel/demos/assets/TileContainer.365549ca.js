import{c8 as c,cH as d,bL as u,a as f}from"./main.c52d903d.js";import{a as p}from"./Container.cbf01ce0.js";import{I as o}from"./Utils.8ae49c7c.js";import{a as g,b as m,m as y}from"./WGLContainer.7e482e7f.js";class P extends p{constructor(e,t,s,i,n,a=i,l=n){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new c(e),this.x=t,this.y=s,this.width=i,this.height=n,this.rangeX=a,this.rangeY=l}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const s=t/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),l=this.width/this.rangeX*s,h=this.height/this.rangeY*s;d(i,l,0,0,0,h,0,n,a,1),u(this.transforms.dvs,e.displayViewMat3,i)}}const w=(r,e)=>r.key.level-e.key.level!=0?r.key.level-e.key.level:r.key.row-e.key.row!=0?r.key.row-e.key.row:r.key.col-e.key.col;class v extends g{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(w),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),s}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[m],drawPhase:o.DEBUG|o.MAP|o.HIGHLIGHT,target:()=>this.getStencilTarget()})),f("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[y],drawPhase:o.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const s=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,s)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}export{v as o,P as r};
