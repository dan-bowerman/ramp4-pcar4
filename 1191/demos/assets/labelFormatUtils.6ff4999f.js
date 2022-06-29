import{aj as f,lp as m,_ as y,lq as g,lr as v,ls as b,hv as x,lt as _,s as h,lu as F}from"./main.56314a08.js";const w=f.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},V={getAttribute:(a,r)=>a.field(r)};async function $(a,r,e){if(!a||!a.symbol)return d;const l=a.where,n=m(a),o=l?await y(()=>import("./WhereClause.d92836ff.js"),["assets/WhereClause.d92836ff.js","assets/main.56314a08.js","assets/main.6f812d7a.css"]):null;let i;if(n.type==="arcade"){const t=await g(n.expression,e,r);i={type:"arcade",evaluate(u){try{const s=t.evaluate({$feature:"attributes"in u?t.repurposeFeature(u):t.repurposeAdapter(u)});if(s!=null)return s.toString()}catch{w.error(new h("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:u,expression:n}))}return null},needsHydrationToEvaluate:()=>F(n.expression)==null}}else i={type:"simple",evaluate:t=>n.expression.replace(/{[^}]*}/g,u=>{const s=u.slice(1,-1),c=r.get(s);if(!c)return u;let p=null;return"attributes"in t?t&&t.attributes&&(p=t.attributes[c.name]):p=t.field(c.name),p==null?"":E(p,c)})};if(l){let t;try{t=o.WhereClause.create(l,r)}catch{return d}const u=i.evaluate;i.evaluate=s=>{const c="attributes"in s?void 0:V;return t.testFeature(s,c)?u(s):null}}return i}function E(a,r){if(a==null)return"";const e=r.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const n=a;for(const o of e.codedValues)if(o.code===n)return o.name}else if(e.type==="range"){const n=+a,o="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(o<=n&&n<=i)return e.name}}let l=a;return r.type==="date"||r.type==="esriFieldTypeDate"?l=v(l,b("short-date")):x(r)&&(l=_(+l)),l||""}export{$ as createLabelFunction,E as formatField};
