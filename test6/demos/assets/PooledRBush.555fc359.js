import{gb as w,gc as v,gd as j,ge as H,gf as P}from"./main.7dbc90fb.js";class N{constructor(t=9,n){this.compareMinX=F,this.compareMinY=R,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&(typeof n=="function"?this.toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),x.prune(),Y.prune(),u.prune(),B.prune()}all(t){this._all(this.data,t)}search(t,n){let e=this.data;const i=this.toBBox;if(X(t,e))for(x.clear();e;){for(let h=0,a=e.children.length;h<a;h++){const r=e.children[h],o=e.leaf?i(r):r;X(t,o)&&(e.leaf?n(r):E(t,o)?this._all(r,n):x.push(r))}e=x.pop()}}collides(t){let n=this.data;const e=this.toBBox;if(!X(t,n))return!1;for(x.clear();n;){for(let i=0,h=n.children.length;i<h;i++){const a=n.children[i],r=n.leaf?e(a):a;if(X(t,r)){if(n.leaf||E(t,r))return!0;x.push(a)}}n=x.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const e=this.data;this.data=n,n=e}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new _([]),this}remove(t){if(!t)return this;let n,e=this.data,i=null,h=0,a=!1;const r=this.toBBox(t);for(u.clear(),B.clear();e||u.length>0;){var o;if(e||(e=v(u.pop()),i=u.data[u.length-1],h=(o=B.pop())!=null?o:0,a=!0),e.leaf&&(n=j(e.children,t,e.children.length,e.indexHint),n!==-1))return e.children.splice(n,1),u.push(e),this._condense(u),this;a||e.leaf||!E(e,r)?i?(h++,e=i.children[h],a=!1):e=null:(u.push(e),B.push(h),h=0,i=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){let e=t;for(Y.clear();e;){var i;if(e.leaf===!0)for(const h of e.children)n(h);else Y.pushArray(e.children);e=(i=Y.pop())!=null?i:null}}_build(t,n,e,i){const h=e-n+1;let a=this._maxEntries;if(h<=a){const l=new _(t.slice(n,e+1));return f(l,this.toBBox),l}i||(i=Math.ceil(Math.log(h)/Math.log(a)),a=Math.ceil(h/a**(i-1)));const r=new S([]);r.height=i;const o=Math.ceil(h/a),c=o*Math.ceil(Math.sqrt(a));y(t,n,e,c,this.compareMinX);for(let l=n;l<=e;l+=c){const m=Math.min(l+c-1,e);y(t,l,m,o,this.compareMinY);for(let d=l;d<=m;d+=o){const D=Math.min(d+o-1,m);r.children.push(this._build(t,d,D,i-1))}}return f(r,this.toBBox),r}_chooseSubtree(t,n,e,i){for(;i.push(n),n.leaf!==!0&&i.length-1!==e;){let h,a=1/0,r=1/0;for(let o=0,c=n.children.length;o<c;o++){const l=n.children[o],m=b(l),d=$(t,l)-m;d<r?(r=d,a=m<a?m:a,h=l):d===r&&m<a&&(a=m,h=l)}n=h||n.children[0]}return n}_insert(t,n,e){const i=this.toBBox,h=e?t:i(t);u.clear();const a=this._chooseSubtree(h,this.data,n,u);for(a.children.push(t),g(a,h);n>=0&&u.data[n].children.length>this._maxEntries;)this._split(u,n),n--;this._adjustParentBBoxes(h,u,n)}_split(t,n){const e=t.data[n],i=e.children.length,h=this._minEntries;this._chooseSplitAxis(e,h,i);const a=this._chooseSplitIndex(e,h,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=e.children.splice(a,e.children.length-a),o=e.leaf?new _(r):new S(r);o.height=e.height,f(e,this.toBBox),f(o,this.toBBox),n?t.data[n-1].children.push(o):this._splitRoot(e,o)}_splitRoot(t,n){this.data=new S([t,n]),this.data.height=t.height+1,f(this.data,this.toBBox)}_chooseSplitIndex(t,n,e){let i,h,a;i=h=1/0;for(let r=n;r<=e-n;r++){const o=p(t,0,r,this.toBBox),c=p(t,r,e,this.toBBox),l=q(o,c),m=b(o)+b(c);l<i?(i=l,a=r,h=m<h?m:h):l===i&&m<h&&(h=m,a=r)}return a}_chooseSplitAxis(t,n,e){const i=t.leaf?this.compareMinX:F,h=t.leaf?this.compareMinY:R;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,h)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const h=this.toBBox,a=p(t,0,n,h),r=p(t,e-n,e,h);let o=M(a)+M(r);for(let c=n;c<e-n;c++){const l=t.children[c];g(a,t.leaf?h(l):l),o+=M(a)}for(let c=e-n-1;c>=n;c--){const l=t.children[c];g(r,t.leaf?h(l):l),o+=M(r)}return o}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)g(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(e.children.length===0)if(n>0){const i=t.data[n-1],h=i.children;h.splice(j(h,e,h.length,i.indexHint),1)}else this.clear();else f(e,this.toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function f(s,t){p(s,0,s.children.length,t,s)}function p(s,t,n,e,i){i||(i=new _([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let h,a=t;a<n;a++)h=s.children[a],g(i,s.leaf?e(h):h);return i}function g(s,t){s.minX=Math.min(s.minX,t.minX),s.minY=Math.min(s.minY,t.minY),s.maxX=Math.max(s.maxX,t.maxX),s.maxY=Math.max(s.maxY,t.maxY)}function F(s,t){return s.minX-t.minX}function R(s,t){return s.minY-t.minY}function b(s){return(s.maxX-s.minX)*(s.maxY-s.minY)}function M(s){return s.maxX-s.minX+(s.maxY-s.minY)}function $(s,t){return(Math.max(t.maxX,s.maxX)-Math.min(t.minX,s.minX))*(Math.max(t.maxY,s.maxY)-Math.min(t.minY,s.minY))}function q(s,t){const n=Math.max(s.minX,t.minX),e=Math.max(s.minY,t.minY),i=Math.min(s.maxX,t.maxX),h=Math.min(s.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,h-e)}function E(s,t){return s.minX<=t.minX&&s.minY<=t.minY&&t.maxX<=s.maxX&&t.maxY<=s.maxY}function X(s,t){return t.minX<=s.maxX&&t.minY<=s.maxY&&t.maxX>=s.minX&&t.maxY>=s.minY}function y(s,t,n,e,i){const h=[t,n];for(;h.length;){const a=v(h.pop()),r=v(h.pop());if(a-r<=e)continue;const o=r+Math.ceil((a-r)/e/2)*e;H(s,o,r,a,i),h.push(r,o,o,a)}}const x=new w,Y=new w,u=new w,B=new w({deallocator:void 0});class I{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class A extends I{constructor(){super(...arguments),this.height=1,this.indexHint=new P}}class _ extends A{constructor(t){super(),this.children=t,this.leaf=!0}}class S extends A{constructor(t){super(),this.children=t,this.leaf=!1}}export{N as h};
