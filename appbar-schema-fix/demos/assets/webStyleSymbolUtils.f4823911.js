import{a7 as g,a8 as N,a9 as S,O as b,aa as w,ab as O,s as U,B as $,ac as p,ad as x,ae as v,af as f,ag as h,ah as B}from"./main.855c0a69.js";import{c as E,a as d}from"./devEnvironmentUtils.444b8fd1.js";function W(e,a,t,l){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?M(e,a,l):O(e,a,l).then(o=>F(o,e.name,a,t,l)):Promise.reject(new U("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function F(e,a,t,l,o){const u=e.data,y={portal:t&&t.portal||$.getDefault(),url:b(e.baseUrl),origin:"portal-item"},r=u.items.find(s=>s.name===a);if(!r){const s=`The symbol name '${a}' could not be found`;return Promise.reject(new U("symbolstyleutils:symbol-name-not-found",s,{symbolName:a}))}let m=p(x(r,l),y),i=r.thumbnail&&r.thumbnail.href;const c=r.thumbnail&&r.thumbnail.imageData;E()&&(m=d(m),i=d(i));const j={portal:t.portal,url:b(w(m)),origin:"portal-item"};return g(m,o).then(s=>{const D=l==="cimRef"?N(s.data):s.data,n=S(D,j);if(n&&v(n)){if(i){const P=p(i,y);n.thumbnail=new f({url:P})}else c&&(n.thumbnail=new f({url:`data:image/png;base64,${c}`}));e.styleUrl?n.styleOrigin=new h({portal:t.portal,styleUrl:e.styleUrl,name:a}):e.styleName&&(n.styleOrigin=new h({portal:t.portal,styleName:e.styleName,name:a}))}return n})}function M(e,a,t){const l=B.replace(/\{SymbolName\}/gi,e.name);return g(l,t).then(o=>{const u=N(o.data);return S(u,{portal:a.portal,url:b(w(l)),origin:"portal-item"})})}export{F as fetchSymbolFromStyle,W as resolveWebStyleSymbol};
