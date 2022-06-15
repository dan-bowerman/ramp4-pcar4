import{r as W,aZ as L}from"./main.eb3bf376.js";import{j as P,R as Z,A as q}from"./rasterProjectionHelper.228c02f3.js";class F{constructor(n=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=n,this._interval=Math.min(n,e)}decreaseRefCount(n,e){const t=n+"/"+e,l=this._cachedBlocks;if(l.has(t)){const r=l.get(t);return r.refCount--,r.refCount<=0&&(l.delete(t),r.controller&&r.controller.abort()),r.refCount}return 0}getBlock(n,e){const t=n+"/"+e,l=this._cachedBlocks;if(l.has(t)){const r=l.get(t);return r.ts=Date.now(),r.refCount++,l.delete(t),l.set(t,r),r.block}return null}putBlock(n,e,t,l=null){const r=this._cachedBlocks,c=n+"/"+e;if(r.has(c)){const u=r.get(c);u.ts=Date.now(),u.refCount++}else r.set(c,{block:t,ts:Date.now(),refCount:1,controller:l});this.trim(),this.updateTimer()}deleteBlock(n,e){const t=this._cachedBlocks,l=n+"/"+e;t.has(l)&&t.delete(l)}updateMaxSize(n){this._size=n,this.trim()}empty(){this._cachedBlocks.clear(),this.clearTimer()}getCurrentSize(){return this._cachedBlocks.size}updateTimer(){if(this._timer!=null)return;const n=this._cachedBlocks;this._timer=setInterval(()=>{const e=Array.from(n),t=Date.now();for(let l=0;l<e.length&&e[l][1].ts<=t-this._duration;l++)n.delete(e[l][0]);n.size===0&&this.clearTimer()},this._interval)}trim(){const n=this._cachedBlocks;if(this._size===-1||this._size>=n.size)return;const e=Array.from(n);for(let t=0;t<e.length-this._size;t++)n.delete(e[t][0])}clearTimer(){this._timer!=null&&(clearInterval(this._timer),this._timer=null)}}const s=new Map,h=new F;function N(o,n){return n==null?o:`${o}?sliceId=${n}`}function O(o,n){const e={extent:null,rasterInfo:n,cache:new Map};if(s.has(o)){const t=s.get(o);return t.push(e),t.length-1}return s.set(o,[e]),0}function Q(o,n){if(s.has(o)){const e=s.get(o);e[n]=null,e.some(t=>t!=null)||s.delete(o)}}function U(o,n,e){if(!s.has(o))return n==null?h.decreaseRefCount(o,e):0;const t=s.get(o);if(t[n]==null)return h.decreaseRefCount(o,e);const l=t[n].cache;if(l.has(e)){const r=l.get(e);if(r.refCount--,r.refCount===0){l.delete(e);for(let c=0;c<t.length;c++)t[c]&&t[c].cache.has(e)&&t[c].cache.delete(e);r.controller&&r.controller.abort()}return r.refCount}return 0}function V(o,n,e){if(!s.has(o))return n==null?h.getBlock(o,e):null;const t=s.get(o);if(t[n]==null){for(let r=0;r<t.length;r++)if(t[r]&&t[r].cache.has(e)){const c=t[r].cache.get(e);return c.refCount++,c.block}return h.getBlock(o,e)}const l=t[n].cache;if(l.has(e)){const r=l.get(e);return r.refCount++,r.block}for(let r=0;r<t.length;r++)if(r!==n&&t[r]&&t[r]&&t[r].cache.has(e)){const c=t[r].cache.get(e);return c.refCount++,l.set(e,c),c.block}return null}function X(o,n,e,t,l=null){if(!s.has(o))return void(n==null&&h.putBlock(o,e,t,l));const r=s.get(o);if(r[n]==null)return void h.putBlock(o,e,t,l);const c={refCount:1,block:t,isResolved:!1,isRejected:!1,controller:l};t.then(()=>c.isResolved=!0).catch(()=>c.isRejected=!0),r[n].cache.set(e,c)}function Y(o,n,e){if(!s.has(o))return void(n==null&&h.deleteBlock(o,e));const t=s.get(o);t[n]!=null?t[n].cache.delete(e):h.deleteBlock(o,e)}function G(o,n){if(!s.has(o))return null;const e=s.get(o);return e[n]==null?null:e[n]}function ee(o,n,e,t,l,r,c=null){const u=G(o,n),f=u.extent,{cache:y,rasterInfo:_}=u;if(f&&f.xmin===e.xmin&&f.xmax===e.xmax&&f.ymin===e.ymin&&f.ymax===e.ymax)return;const M=e.clone().normalize(),{spatialReference:R,transform:v}=_,b=new Set;for(let d=0;d<M.length;d++){const a=M[d];if(a.xmax-a.xmin<=t||a.ymax-a.ymin<=t)continue;let i=P(a,R,c);W(v)&&(i=v.inverseTransform(i));const I=new L({x:t,y:t,spatialReference:a.spatialReference});if(l==null&&!(l=Z(I,R,a,c)))return;const{pyramidLevel:p,pyramidResolution:x,excessiveReading:j}=q(l,_,r||"closest");if(j)return;const{storageInfo:m}=_,{origin:w}=m,g={x:Math.max(0,Math.floor((i.xmin-w.x)/x.x)),y:Math.max(0,Math.floor((w.y-i.ymax)/x.y))},T=Math.ceil((i.xmax-i.xmin)/x.x-.1),D=Math.ceil((i.ymax-i.ymin)/x.y-.1),z=p>0?m.pyramidBlockWidth:m.blockWidth,$=p>0?m.pyramidBlockHeight:m.blockHeight,k=1,A=Math.max(0,Math.floor(g.x/z)-k),H=Math.max(0,Math.floor(g.y/$)-k),S=Math.floor((g.x+T-1)/z)+k,E=Math.floor((g.y+D-1)/$)+k;for(let B=H;B<=E;B++)for(let C=A;C<=S;C++)b.add(`${p}/${B}/${C}`)}y.forEach((d,a)=>{if(!b.has(a)){const i=y.get(a);(i==null||i.isResolved||i.isRejected)&&y.delete(a)}}),u.extent={xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax}}export{Y as d,ee as g,U as h,N as i,V as m,O as s,Q as u,X as x};
