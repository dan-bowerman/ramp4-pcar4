import{bb as w,c9 as R,e as d,d as l,i as _,aQ as z,q as W,bc as b,M as S,hr as P,hW as E}from"./main.b43b33c5.js";import{g as H}from"./Bitmap.c7aa2b96.js";const N=Math.PI/180;function $(e){return e*N}function q(e,i){const h=$(i.rotation),t=Math.abs(Math.cos(h)),o=Math.abs(Math.sin(h)),[a,s]=i.size;return e[0]=Math.round(s*o+a*t),e[1]=Math.round(s*t+a*o),e}function T(e,i,h,t){const[o,a]=i,[s,r]=t,m=.5*h;return e[0]=o-m*s,e[1]=a-m*r,e[2]=o+m*s,e[3]=a+m*r,e}const u=w(),g=[0,0],v=new R(0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let p=class extends z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=W(async(i,h)=>{if(!i.stationary||this.destroyed)return null;const t=i.state,o=b(t.spatialReference),a=this.hidpi?i.pixelRatio:1,s=this.imageNormalizationSupported&&t.worldScreenWidth&&t.worldScreenWidth<t.size[0];s?(g[0]=t.worldScreenWidth,g[1]=t.size[1]):this.imageRotationSupported?(g[0]=t.size[0],g[1]=t.size[1]):q(g,t);const r=Math.floor(g[0]*a)>this.imageMaxWidth||Math.floor(g[1]*a)>this.imageMaxHeight,m=o&&(t.extent.xmin<o.valid[0]||t.extent.xmax>o.valid[1]),f=!this.imageNormalizationSupported&&m,y=!r&&!f,M=this.imageRotationSupported?t.rotation:0;if(y){const n=s?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,g,n,t.resolution,M,a,h)}else{let n=Math.min(this.imageMaxWidth,this.imageMaxHeight);f&&(n=Math.min(t.worldScreenWidth,n)),this._imagePromise=this._tiledExport(t,n,M,a,h)}return this._imagePromise.then(async n=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=n??[];for(const c of this.container.children)n.includes(c)||c.fadeOut().then(()=>{c.remove()});for(const c of n)this.container.addChild(c),c.fadeIn()}}).catch(n=>{throw this._imagePromise=null,n})},5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}updateExports(e){for(const i of this.container.children){if(!i.visible||!i.stage)return;e(i),i.invalidateTexture(),i.requestRender()}}async _export(e,i,h,t,o,a){const s=await this.fetchSource(e,Math.floor(i*o),Math.floor(h*o),{rotation:t,pixelRatio:o,signal:a}),r=new H(s,"additive");return r.x=e.xmin,r.y=e.ymax,r.resolution=e.width/i,r.rotation=t,r.pixelRatio=o,r}async _singleExport(e,i,h,t,o,a,s){T(u,h,t,i);const r=new S(u[0],u[1],u[2],u[3],e.spatialReference);return[await this._export(r,i[0],i[1],o,a,s)]}_tiledExport(e,i,h,t,o){const a=P.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),s=new E(a),r=s.getTileCoverage(e);if(!r)return null;const m=[];return r.forEach((f,y,M,n)=>{v.set(f,y,M,n),s.getTileBounds(u,v);const c=new S(u[0],u[1],u[2],u[3],e.spatialReference);m.push(this._export(c,i,i,h,t,o))}),Promise.all(m)}};d([l()],p.prototype,"_imagePromise",void 0),d([l()],p.prototype,"bitmaps",void 0),d([l()],p.prototype,"container",void 0),d([l()],p.prototype,"fetchSource",void 0),d([l()],p.prototype,"hidpi",void 0),d([l()],p.prototype,"imageMaxWidth",void 0),d([l()],p.prototype,"imageMaxHeight",void 0),d([l()],p.prototype,"imageRotationSupported",void 0),d([l()],p.prototype,"imageNormalizationSupported",void 0),d([l()],p.prototype,"requestUpdate",void 0),d([l()],p.prototype,"updating",null),p=d([_("esri.views.2d.layers.support.ExportStrategy")],p);const U=p;export{U as S};
