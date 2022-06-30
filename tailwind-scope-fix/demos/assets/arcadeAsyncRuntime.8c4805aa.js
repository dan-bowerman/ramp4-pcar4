import{y as ye,L as we,N as ve,P as Ne,o as Ie,r as be,f as Se,S as Te,p as Oe,u as Re,I as Ae,g as Ce,b as f,O as Ue,a as T,F as A,e as Me,s as Fe}from"./arcadeUtils.4094ada8.js";import{dP as h,dH as D,dU as Z,dy as R,dZ as H,dQ as v,e0 as x,p as xe,eu as I,ev as K,dY as u,es as C,et as B,d$ as V,dI as m,dL as U,dO as L,dA as N,dX as P,em as fe,dz as F,ed as G,dJ as p,dB as oe,eo as De,ep as Le,dM as Pe,aZ as ke,ck as _e,cO as je,dw as Ve,M as Ye,en as Be,ea as Ge,e8 as ze,eq as ae}from"./main.f08ddbe2.js";import{registerFunctions as Ze}from"./geomasync.5e4827dd.js";import"./FeatureSetReader.cafd6e49.js";import"./centroid.c5e21c6a.js";import"./geometryEngineAsync.67573f10.js";function ce(n){return n&&typeof n.then=="function"}const z=100;function g(n){return n instanceof Error?v(n):v(new Error(n))}function he(n){return m(n)}function $(n,e){const r=[];for(let t=0;t<e.arguments.length;t++)r.push(s(n,e.arguments[t]));return D(r)}function S(n,e,r){return h((t,o)=>{if(e.preparsed===!0)return t(r(n,null,e.arguments));$(n,e).then(a=>{try{t(r(n,e,a))}catch(c){o(c)}},o)})}function _(n,e,r){try{if(e.preparsed===!0){const t=r(n,null,e.arguments);return ce(t)?t:m(t)}return $(n,e).then(t=>{try{const o=r(n,e,t);return ce(o)?o:m(o)}catch(o){return g(o)}})}catch(t){return g(t)}}function s(n,e,r){try{if(e.breakpoint&&r!==!0)return e.breakpoint().then(()=>s(n,e,!0));switch(e.type){case"VariableDeclarator":return cn(n,e);case"VariableDeclaration":return de(n,e,0);case"BlockStatement":return tn(n,e);case"FunctionDeclaration":return an(n,e);case"ReturnStatement":return on(n,e);case"IfStatement":return rn(n,e);case"ExpressionStatement":return nn(n,e);case"UpdateExpression":return $e(n,e);case"AssignmentExpression":return en(n,e);case"ForStatement":return Xe(n,e);case"ForInStatement":return Ke(n,e);case"BreakStatement":return m(C);case"EmptyStatement":return m(u);case"ContinueStatement":return m(B);case"TemplateElement":return dn(n,e);case"TemplateLiteral":return gn(n,e);case"Identifier":return ee(n,e);case"MemberExpression":return ln(n,e);case"Literal":return he(e.value);case"CallExpression":return pn(n,e);case"UnaryExpression":return sn(n,e);case"BinaryExpression":return fn(n,e);case"LogicalExpression":return hn(n,e);case"ArrayExpression":return un(n,e);case"ObjectExpression":return He(n,e);case"Property":return qe(n,e);default:return g(f(e,"RUNTIME","UNREOGNISED"))}}catch(t){return g(t)}}function He(n,e){try{const r=[];for(let t=0;t<e.properties.length;t++)r.push(s(n,e.properties[t]));return D(r).then(t=>h(o=>{const a={};for(let l=0;l<t.length;l++){const i=t[l];if(G(i.value))throw new Error("Illegal Argument");if(N(i.key)===!1)throw new Error("Illegal Argument");i.value===u?a[i.key.toString()]=null:a[i.key.toString()]=i.value}const c=new T(a);c.immutable=!1,o(c)}))}catch(r){return g(r)}}function qe(n,e){try{return s(n,e.value).then(r=>h(t=>{e.key.type==="Identifier"?t({key:e.key.name,value:r}):s(n,e.key).then(o=>{t({key:o,value:r})})}))}catch(r){return v(r)}}function le(n,e,r){try{return s(n,e.body).then(t=>{try{return r.lastAction=t,r.lastAction===C||r.lastAction instanceof I?(r.testResult=!1,m(r)):e.update!==null?s(n,e.update).then(()=>m(r)):m(r)}catch(o){return v(o)}})}catch(t){return v(t)}}function We(n,e,r){try{return e.test!==null?s(n,e.test).then(t=>{try{return n.abortSignal.aborted===!0?v(new Error("Cancelled")):(r.testResult=t,r.testResult===!1?m(r):r.testResult!==!0?v(new Error(f(e,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):le(n,e,r))}catch(o){return v(o)}}):le(n,e,r)}catch(t){return v(t)}}function Y(n,e,r,t,o,a){try{We(n,e,r).then(()=>{try{r.testResult===!0?++a>z?(a=0,setTimeout(()=>{Y(n,e,r,t,o,a)},0)):Y(n,e,r,t,o,a):r.lastAction instanceof I?t(r.lastAction):t(u)}catch(c){o(c)}},c=>{o(c)})}catch(c){o(c)}}function Xe(n,e){try{return e.init!==null?s(n,e.init).then(()=>h((r,t)=>{Y(n,e,{testResult:!0,lastAction:u},o=>{r(o)},o=>{t(o)},0)})):h((r,t)=>{Y(n,e,{testResult:!0,lastAction:u},o=>{r(o)},o=>{t(o)},0)})}catch(r){return v(r)}}function q(n,e,r,t,o,a,c,l,i,E){try{if(t<=a)return void l(u);o.value=c==="k"?r[a]:a,s(n,e.body).then(d=>{try{d instanceof I?l(d):d===C?l(u):++E>z?(E=0,setTimeout(()=>{q(n,e,r,t,o,a+1,c,l,i,E)},0)):q(n,e,r,t,o,a+1,c,l,i,E)}catch(y){i(y)}},d=>{i(d)})}catch(d){i(d)}}function W(n,e,r,t,o,a,c,l,i){try{if(r.length()<=o)return void c(u);t.value=a==="k"?r.get(o):o,s(n,e.body).then(E=>{E instanceof I?c(E):E===C?c(u):++i>z?(i=0,setTimeout(()=>{W(n,e,r,t,o+1,a,c,l,i)},0)):W(n,e,r,t,o+1,a,c,l,i)},E=>{l(E)})}catch(E){l(E)}}function X(n,e,r,t,o,a){try{if(a===void 0&&(a="i"),r.length===0)return void t.resolve(u);q(n,e,r,r.length,o,0,a,c=>{t.resolve(c)},c=>{t.reject(c)},0)}catch(c){t.reject(c)}}function Je(n,e,r,t,o,a){try{if(a===void 0&&(a="i"),r.length===0)return void t.resolve(u);W(n,e,r,o,0,a,c=>{t.resolve(c)},c=>{t.reject(c)},0)}catch(c){t.reject(c)}}function Qe(n,e,r,t,o){try{X(n,e,r.keys(),t,o,"k")}catch(a){t.reject(a)}}function J(n,e,r,t,o,a,c,l){try{n.next().then(i=>{try{if(i===null)a(u);else{const E=A.createFromGraphicLikeObject(i.geometry,i.attributes,t);E._underlyingGraphic=i,o.value=E,s(e,r.body).then(d=>{try{d===C?a(u):d instanceof I?a(d):++l>z?(l=0,setTimeout(()=>{J(n,e,r,t,o,a,c,l)},0)):J(n,e,r,t,o,a,c,l)}catch(y){c(y)}},d=>{c(d)})}}catch(E){c(E)}},i=>{c(i)})}catch(i){c(i)}}function Ke(n,e){return h((r,t)=>{s(n,e.right).then(o=>{try{let a=null;a=e.left.type==="VariableDeclaration"?s(n,e.left):m(),a.then(()=>{try{let c="";if(e.left.type==="VariableDeclaration"){const i=e.left.declarations[0].id;i.type==="Identifier"&&(c=i.name)}else e.left.type==="Identifier"&&(c=e.left.name);if(!c)throw new Error(f(e,"RUNTIME","INVALIDVARIABLE"));c=c.toLowerCase();let l=null;if(n.localScope!==null&&n.localScope[c]!==void 0&&(l=n.localScope[c]),l===null&&n.globalScope[c]!==void 0&&(l=n.globalScope[c]),l===null)return void t(new Error(f(e,"RUNTIME","VARIABLENOTDECLARED")));L(o)||N(o)?X(n,e,o,{reject:t,resolve:r},l):P(o)?Je(n,e,o,{reject:t,resolve:r},l):o instanceof T||o instanceof A?Qe(n,e,o,{reject:t,resolve:r},l):fe(o)?J(o.iterator(n.abortSignal),n,e,o,l,i=>{r(i)},i=>{t(i)},0):X(n,e,[],{reject:t,resolve:r},l)}catch(c){t(c)}},t)}catch(a){t(a)}},t)})}function $e(n,e){try{const r=e.argument;if(r.type==="MemberExpression"){const t={t:null};return s(n,r.object).then(o=>{let a=null;return t.t=o,r.computed===!0?a=s(n,r.property):r.property.type==="Identifier"&&(a=m(r.property.name)),a}).then(o=>h(a=>{const c=t.t;let l;if(L(c)){if(!F(o))throw new Error("Invalid Parameter");if(o<0&&(o=c.length+o),o<0||o>=c.length)throw new Error("Assignment outside of array bounds");l=p(c[o]),c[o]=e.operator==="++"?l+1:l-1}else if(c instanceof T){if(N(o)===!1)throw new Error("Dictionary accessor must be a string");if(c.hasField(o)!==!0)throw new Error("Invalid Parameter");l=p(c.field(o)),c.setField(o,e.operator==="++"?l+1:l-1)}else{if(!(c instanceof A))throw P(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(N(o)===!1)throw new Error("Feature accessor must be a string");if(c.hasField(o)!==!0)throw new Error("Invalid Parameter");l=p(c.field(o)),c.setField(o,e.operator==="++"?l+1:l-1)}e.prefix===!1?a(l):a(e.operator==="++"?l+1:l-1)}))}return h((t,o)=>{const a=e.argument.type==="Identifier"?e.argument.name.toLowerCase():"";if(!a)throw new Error("Invalid identifier");let c;return n.localScope!==null&&n.localScope[a]!==void 0?(c=p(n.localScope[a].value),n.localScope[a]={value:e.operator==="++"?c+1:c-1,valueset:!0,node:e},void(e.prefix===!1?t(c):t(e.operator==="++"?c+1:c-1))):n.globalScope[a]!==void 0?(c=p(n.globalScope[a].value),n.globalScope[a]={value:e.operator==="++"?c+1:c-1,valueset:!0,node:e},void(e.prefix===!1?t(c):t(e.operator==="++"?c+1:c-1))):void o(new Error("Variable not recognised"))})}catch(r){return v(r)}}function O(n,e,r,t){switch(e){case"=":return n===u?null:n;case"/=":return p(r)/p(n);case"*=":return p(r)*p(n);case"-=":return p(r)-p(n);case"+=":return N(r)||N(n)?U(r)+U(n):p(r)+p(n);case"%=":return p(r)%p(n);default:throw new Error(f(t,"RUNTIME","OPERATORNOTRECOGNISED"))}}function en(n,e){return h((r,t)=>{const o=e.left;if(o.type==="MemberExpression")s(n,e.right).then(a=>{try{s(n,o.object).then(c=>{try{let l=null;if(o.computed===!0)l=s(n,o.property);else{if(o.property.type!=="Identifier")throw new Error("Expected computed or identifier for assignemnt target");l=m(o.property.name)}l.then(i=>{try{if(L(c)){if(!F(i))throw new Error("Invalid Parameter");if(i<0&&(i=c.length+i),i<0||i>c.length)throw new Error("Assignment outside of array bounds");if(i===c.length){if(e.operator!=="=")throw new Error("Invalid Parameter");c[i]=O(a,e.operator,c[i],e)}else c[i]=O(a,e.operator,c[i],e)}else if(c instanceof T){if(N(i)===!1)throw new Error("Dictionary accessor must be a string");if(c.hasField(i)===!0)c.setField(i,O(a,e.operator,c.field(i),e));else{if(e.operator!=="=")throw new Error("Invalid Parameter");c.setField(i,O(a,e.operator,null,e))}}else{if(!(c instanceof A))throw P(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(N(i)===!1)throw new Error("Feature accessor must be a string");if(c.hasField(i)===!0)c.setField(i,O(a,e.operator,c.field(i),e));else{if(e.operator!=="=")throw new Error("Invalid Parameter");c.setField(i,O(a,e.operator,null,e))}}r(u)}catch(E){t(E)}},t)}catch(l){t(l)}},t)}catch(c){t(c)}},t);else{const a=o.name.toLowerCase();if(n.localScope!==null&&n.localScope[a]!==void 0)return void s(n,e.right).then(c=>{try{n.localScope[a]={value:O(c,e.operator,n.localScope[a].value,e),valueset:!0,node:e.right},r(u)}catch(l){t(l)}},t);n.globalScope[a]!==void 0?s(n,e.right).then(c=>{try{n.globalScope[a]={value:O(c,e.operator,n.globalScope[a].value,e),valueset:!0,node:e.right},r(u)}catch(l){t(l)}},t):t(new Error("Cannot assign undeclared variable"))}})}function nn(n,e){try{return e.expression.type==="AssignmentExpression"?s(n,e.expression):(e.expression.type,s(n,e.expression).then(r=>h(t=>{t(r===u?u:new K(r))})))}catch(r){return v(r)}}function rn(n,e){return h((r,t)=>{e.test.type!=="AssignmentExpression"&&e.test.type!=="UpdateExpression"?s(n,e.test).then(o=>{try{o===!0?s(n,e.consequent).then(r,t):o===!1?e.alternate!==null?s(n,e.alternate).then(r,t):r(u):t(new Error(f(e.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(a){t(a)}},t):t(new Error(f(e.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}function tn(n,e){try{return pe(n,e,0)}catch(r){return g(r)}}function pe(n,e,r){try{return r>=e.body.length?m(u):h((t,o)=>{s(n,e.body[r]).then(a=>{try{a instanceof I||a===C||a===B||r===e.body.length-1?t(a):pe(n,e,r+1).then(t,o)}catch(c){o(c)}},o)})}catch(t){return g(t)}}function on(n,e){return h((r,t)=>{e.argument===null?r(new I(u)):s(n,e.argument).then(o=>{try{r(new I(o))}catch(a){t(a)}},t)})}function an(n,e){try{const r=e.id.name.toLowerCase();return n.globalScope[r]={valueset:!0,node:null,value:new V(e,n)},m(u)}catch(r){return g(r)}}function de(n,e,r){return h((t,o)=>{r>=e.declarations.length?t(u):s(n,e.declarations[r]).then(()=>{r===e.declarations.length-1?t(u):de(n,e,r+1).then(()=>{t(u)},o)},o)})}function cn(n,e){try{let r=null;return r=e.init===null?m(null):s(n,e.init),n.localScope!==null?r.then(t=>h(o=>{if(t===u&&(t=null),e.id.type!=="Identifier")throw new Error("Can only assign a regular variable");const a=e.id.name.toLowerCase();n.localScope[a]={value:t,valueset:!0,node:e.init},o(u)})):r.then(t=>h(o=>{if(e.id.type!=="Identifier")throw new Error("Can only assign a regular variable");const a=e.id.name.toLowerCase();t===u&&(t=null),n.globalScope[a]={value:t,valueset:!0,node:e.init},o(u)}))}catch(r){return g(r)}}let b=0;function ie(n,e,r,t){let o;switch(e=e.toLowerCase()){case"hasz":{const a=n.hasZ;return a!==void 0&&a}case"hasm":{const a=n.hasM;return a!==void 0&&a}case"spatialreference":{let a=n.spatialReference._arcadeCacheId;if(a===void 0){let l=!0;Object.freeze&&Object.isFrozen(n.spatialReference)&&(l=!1),l&&(b++,n.spatialReference._arcadeCacheId=b,a=b)}const c=new T({wkt:n.spatialReference.wkt,wkid:n.spatialReference.wkid});return a!==void 0&&(c._arcadeCacheId="SPREF"+a.toString()),c}}switch(n.type){case"extent":switch(e){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const a=n[e];return a!==void 0?a:null}case"type":return"Extent"}break;case"polygon":switch(e){case"rings":return o=n.cache._arcadeCacheId,o===void 0&&(b++,o=b,n.cache._arcadeCacheId=o),new ae(n.rings,n.spatialReference,n.hasZ===!0,n.hasM===!0,o);case"type":return"Polygon"}break;case"point":switch(e){case"x":case"y":case"z":case"m":return n[e]!==void 0?n[e]:null;case"type":return"Point"}break;case"polyline":switch(e){case"paths":return o=n.cache._arcadeCacheId,o===void 0&&(b++,o=b,n.cache._arcadeCacheId=o),new ae(n.paths,n.spatialReference,n.hasZ===!0,n.hasM===!0,o);case"type":return"Polyline"}break;case"multipoint":switch(e){case"points":return o=n.cache._arcadeCacheId,o===void 0&&(b++,o=b,n.cache._arcadeCacheId=o),new ze(n.points,n.spatialReference,n.hasZ===!0,n.hasM===!0,o,1);case"type":return"Multipoint"}}throw new Error(f(t,"RUNTIME","PROPERTYNOTFOUND"))}function ln(n,e){try{return s(n,e.object).then(r=>{try{return r===null?v(new Error(f(e,"RUNTIME","NOTFOUND"))):e.computed===!1?e.property.type==="Identifier"?r instanceof T||r instanceof A?m(r.field(e.property.name)):r instanceof oe?m(ie(r,e.property.name,n,e)):v(new Error(f(e,"RUNTIME","INVALIDTYPE"))):v(new Error(f(e,"RUNTIME","INVALIDTYPE"))):s(n,e.property).then(t=>h((o,a)=>{if(r instanceof T||r instanceof A)N(t)?o(r.field(t)):a(new Error(f(e,"RUNTIME","INVALIDTYPE")));else if(r instanceof oe)N(t)?o(ie(r,t,n,e)):a(new Error(f(e,"RUNTIME","INVALIDTYPE")));else if(L(r))if(F(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length+t),t>=r.length||t<0)throw new Error(f(e,"RUNTIME","OUTOFBOUNDS"));o(r[t])}else a(new Error(f(e,"RUNTIME","INVALIDTYPE")));else if(P(r))if(F(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length()+t),t>=r.length()||t<0)throw new Error(f(e,"RUNTIME","OUTOFBOUNDS"));o(r.get(t))}else a(new Error(f(e,"RUNTIME","INVALIDTYPE")));else if(N(r))if(F(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length+t),t>=r.length||t<0)throw new Error(f(e,"RUNTIME","OUTOFBOUNDS"));o(r[t])}else a(new Error(f(e,"RUNTIME","INVALIDTYPE")));else a(new Error(f(e,"RUNTIME","INVALIDTYPE")))}))}catch(t){return g(t)}})}catch(r){return g(r)}}function sn(n,e){try{return s(n,e.argument).then(r=>h((t,o)=>{R(r)&&e.operator==="!"?t(!r):e.operator==="-"?t(-1*p(r)):e.operator==="+"?t(1*p(r)):e.operator==="~"?t(~p(r)):o(new Error(f(e,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))}catch(r){return g(r)}}function un(n,e){try{const r=[];for(let t=0;t<e.elements.length;t++)r.push(s(n,e.elements[t]));return D(r).then(t=>h((o,a)=>{for(let c=0;c<t.length;c++){if(G(t[c]))return void a(new Error(f(e,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));t[c]===u&&(t[c]=null)}o(t)}))}catch(r){return g(r)}}function fn(n,e){try{return D([s(n,e.left),s(n,e.right)]).then(r=>h((t,o)=>{const a=r[0],c=r[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":t(Le(p(a),p(c),e.operator));case"==":t(H(a,c));break;case"!=":t(!H(a,c));break;case"<":case">":case"<=":case">=":t(De(a,c,e.operator));break;case"+":N(a)||N(c)?t(U(a)+U(c)):t(p(a)+p(c));break;case"-":t(p(a)-p(c));break;case"*":t(p(a)*p(c));break;case"/":t(p(a)/p(c));break;case"%":t(p(a)%p(c));break;default:o(new Error(f(e,"RUNTIME","OPERATORNOTRECOGNISED")))}}))}catch(r){return g(r)}}function hn(n,e){return h((r,t)=>{e.left.type!=="AssignmentExpression"&&e.left.type!=="UpdateExpression"?e.right.type!=="AssignmentExpression"&&e.right.type!=="UpdateExpression"?s(n,e.left).then(o=>{try{if(!R(o))throw new Error(f(e,"RUNTIME","ONLYBOOLEAN"));switch(e.operator){case"||":o===!0?r(o):s(n,e.right).then(a=>{try{if(!R(a))throw new Error(f(e,"RUNTIME","ONLYORORAND"));r(a)}catch(c){t(c)}},t);break;case"&&":o===!1?r(o):s(n,e.right).then(a=>{try{if(!R(a))throw new Error(f(e,"RUNTIME","ONLYORORAND"));r(a)}catch(c){t(c)}},t);break;default:throw new Error(f(e,"RUNTIME","ONLYORORAND"))}}catch(a){t(a)}},t):t(new Error(f(e.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):t(new Error(f(e.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}function ee(n,e){return h((r,t)=>{const o=e.name.toLowerCase();if(n.localScope===null||n.localScope[o]===void 0)if(n.globalScope[o]===void 0)t(new Error(f(e,"RUNTIME","VARIABLENOTFOUND")));else{const a=n.globalScope[o];a.valueset===!0?r(a.value):a.d!==null?a.d.then(r,t):(a.d=s(n,a.node),a.d.then(c=>{try{a.value=c,a.valueset=!0,r(c)}catch(l){t(l)}},t))}else{const a=n.localScope[o];a.valueset===!0?r(a.value):a.d!==null?a.d.then(r,t):(a.d=s(n,a.node),a.d.then(c=>{try{a.value=c,a.valueset=!0,r(c)}catch(l){t(l)}},t))}})}function pn(n,e){try{if(e.callee.type!=="Identifier")return g(f(e,"RUNTIME","ONLYNODESSUPPORTED"));if(n.localScope!==null&&n.localScope[e.callee.name.toLowerCase()]!==void 0){const r=n.localScope[e.callee.name.toLowerCase()];return r.value instanceof x?r.value.fn(n,e):r.value instanceof V?ue(n,e,r.value.definition):g(f(e,"RUNTIME","NOTAFUNCTION"))}if(n.globalScope[e.callee.name.toLowerCase()]!==void 0){const r=n.globalScope[e.callee.name.toLowerCase()];return r.value instanceof x?r.value.fn(n,e):r.value instanceof V?ue(n,e,r.value.definition):g(f(e,"RUNTIME","NOTAFUNCTION"))}return g(f(e,"RUNTIME","NOTFOUND"))}catch(r){return g(r)}}function dn(n,e){return m(e.value?e.value.cooked:"")}function gn(n,e){return h(r=>{const t=[];Ue(e.expressions,(o,a,c,l)=>s(n,a).then(i=>{t[c]=U(i)})).then(()=>{let o="",a=0;for(const c of e.quasis)o+=c.value?c.value.cooked:"",c.tail===!1&&(o+=t[a]?t[a]:"",a++);r(o)})})}const w={};function se(n){return n===null?"":L(n)||P(n)?"Array":Pe(n)?"Date":N(n)?"String":R(n)?"Boolean":F(n)?"Number":n instanceof Me?"Attachment":n instanceof Fe?"Portal":n instanceof T?"Dictionary":n instanceof A?"Feature":n instanceof ke?"Point":n instanceof _e?"Polygon":n instanceof je?"Polyline":n instanceof Ve?"Multipoint":n instanceof Ye?"Extent":G(n)?"Function":fe(n)?"FeatureSet":Be(n)?"FeatureSetCollection":n===u?"":typeof n=="number"&&isNaN(n)?"Number":"Unrecognised Type"}function ge(n,e,r,t){return h((o,a)=>{s(n,e.arguments[r]).then(c=>{try{if(H(c,t))return void s(n,e.arguments[r+1]).then(o,a);{const l=e.arguments.length-r;return l===1?void s(n,e.arguments[r]).then(o,a):(l===2&&o(null),l===3?void s(n,e.arguments[r+2]).then(o,a):void ge(n,e,r+2,t).then(o,a))}}catch(l){a(l)}},a)})}function Ee(n,e,r,t){return h((o,a)=>{t===!0?s(n,e.arguments[r+1]).then(o,a):e.arguments.length-r===3?s(n,e.arguments[r+2]).then(o,a):s(n,e.arguments[r+2]).then(c=>{try{if(R(c)===!1)return void a(new Error("WHEN needs boolean test conditions"));Ee(n,e,r+2,c).then(o,a)}catch(l){a(l)}})})}function Q(n,e){try{const r=n.length,t=Math.floor(r/2);return r===0?m([]):r===1?m([n[0]]):h((o,a)=>{const c=[Q(n.slice(0,t),e),Q(n.slice(t,r),e)];D(c).then(l=>{try{j(l[0],l[1],e,[]).then(o,a)}catch(i){a(i)}},a)})}catch(r){return g(r)}}function j(n,e,r,t){return h((o,a)=>{const c=t;n.length>0||e.length>0?n.length>0&&e.length>0?r(n[0],e[0]).then(l=>{try{isNaN(l)&&(l=1),l<=0?(c.push(n[0]),n=n.slice(1)):(c.push(e[0]),e=e.slice(1)),j(n,e,r,t).then(o,a)}catch(i){a(i)}},a):n.length>0?(c.push(n[0]),j(n=n.slice(1),e,r,t).then(o,a)):e.length>0&&(c.push(e[0]),e=e.slice(1),j(n,e,r,t).then(o,a)):o(t)})}function M(n,e){const r=n.length,t=Math.floor(r/2);return e||(e=function(o,a){return o<a?-1:o===a?0:1}),r===0?[]:r===1?[n[0]]:En(M(n.slice(0,t),e),M(n.slice(t,r),e),e)}function En(n,e,r){const t=[];for(;n.length>0||e.length>0;)if(n.length>0&&e.length>0){let o=r(n[0],e[0]);isNaN(o)&&(o=1),o<=0?(t.push(n[0]),n=n.slice(1)):(t.push(e[0]),e=e.slice(1))}else n.length>0?(t.push(n[0]),n=n.slice(1)):e.length>0&&(t.push(e[0]),e=e.slice(1));return t}function me(n,e,r){try{const t=n.body;if(r.length!==n.params.length)return g(new Error("Invalid Parameter calls to function."));for(let o=0;o<r.length;o++){const a=n.params[o];a.type==="Identifier"&&(e.localScope[a.name.toLowerCase()]={d:null,value:r[o],valueset:!0,node:null})}return s(e,t).then(o=>h((a,c)=>{o instanceof I?a(o.value):o!==C?o!==B?a(o instanceof K?o.value:o):c(new Error("Cannot Continue from a Function")):c(new Error("Cannot Break from a Function"))}))}catch(t){return v(t)}}function ue(n,e,r){return _(n,e,function(t,o,a){const c={spatialReference:n.spatialReference,services:n.services,console:n.console,lrucache:n.lrucache,interceptor:n.interceptor,localScope:{},abortSignal:n.abortSignal,globalScope:n.globalScope,depthCounter:n.depthCounter+1};if(c.depthCounter>64)throw new Error("Exceeded maximum function depth");return me(r,c,a)})}function ne(n){return function(){const r={abortSignal:n.context.abortSignal,spatialReference:n.context.spatialReference,console:n.context.console,lrucache:n.context.lrucache,interceptor:n.context.interceptor,services:n.context.services,localScope:{},globalScope:n.context.globalScope,depthCounter:n.context.depthCounter+1};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return me(n.definition,r,arguments)}}ye(w,S),we(w,S),ve(w,S),Ne(w,S),Ie(w,S),Ze({functions:w,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:S,standardFunctionAsync:_}),w.typeof=function(n,e){return S(n,e,function(r,t,o){Z(o,1,1);const a=se(o[0]);if(a==="Unrecognised Type")throw new Error("Unrecognised Type");return a})},w.iif=function(n,e){return h((r,t)=>{Z(e.arguments===null?[]:e.arguments,3,3),s(n,e.arguments[0]).then(o=>{try{if(R(o)===!1)return void t(new Error("IF Function must have a boolean test condition"));D([s(n,e.arguments[1]),s(n,e.arguments[2])]).then(a=>{r(o?a[0]:a[1])},t)}catch(a){t(a)}},t)})},w.decode=function(n,e){return h((r,t)=>{e.arguments.length<2?t(new Error("Missing Parameters")):e.arguments.length!==2?(e.arguments.length-1)%2!=0?s(n,e.arguments[0]).then(o=>{try{ge(n,e,1,o).then(r,t)}catch(a){t(a)}},t):t(new Error("Must have a default value result.")):s(n,e.arguments[1]).then(r,t)})},w.when=function(n,e){try{return e.arguments.length<3?g("Missing Parameters"):e.arguments.length%2==0?g("Must have a default value result."):s(n,e.arguments[0]).then(r=>h((t,o)=>{if(R(r)===!1)return void o(new Error("WHEN needs boolean test conditions"));Ee(n,e,0,r).then(t,o)}))}catch(r){return g(r)}},w.sort=function(n,e){return _(n,e,function(r,t,o){Z(o,1,2);let a=o[0];if(P(a)&&(a=a.toArray()),L(a)===!1)return g(Error("Illegal Argument"));if(o.length>1)return G(o[1])===!1?g(Error("Illegal Argument")):Q(a,ne(o[1]));{let c=a;if(c.length===0)return m([]);const l={};for(let d=0;d<c.length;d++){const y=se(c[d]);y!==""&&(l[y]=!0)}if(l.Array===!0||l.Dictionary===!0||l.Feature===!0||l.Point===!0||l.Polygon===!0||l.Polyline===!0||l.Multipoint===!0||l.Extent===!0||l.Function===!0)return m(c.slice(0));let i=0,E="";for(const d in l)i++,E=d;return i>1||E==="String"?c=M(c,function(d,y){if(d==null||d===u)return y==null||y===u?0:1;if(y==null||y===u)return-1;const re=U(d),te=U(y);return re<te?-1:re===te?0:1}):E==="Number"?c=M(c,function(d,y){return d-y}):E==="Boolean"?c=M(c,function(d,y){return d===y?0:y?-1:1}):E==="Date"&&(c=M(c,function(d,y){return y-d})),m(c)}})};const mn={failDefferred:g,resolveDeffered:he,fixSpatialReference:Ge,parseArguments:$,standardFunction:S,standardFunctionAsync:_,evaluateIdentifier:ee,arcadeCustomFunction:ne};for(const n in w)w[n]={value:new x(w[n]),valueset:!0,node:null};const k=function(){};function yn(n,e){const r=new k;n==null&&(n={}),e==null&&(e={});const t=new T({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});t.immutable=!1,r.textformatting={value:t,valueset:!0,node:null};for(const o in e)r[o]={value:new x(e[o]),native:!0,valueset:!0,node:null};for(const o in n)n[o]&&n[o].declaredClass==="esri.Graphic"?r[o]={value:A.createFromGraphic(n[o]),valueset:!0,node:null}:r[o]={value:n[o],valueset:!0,node:null};return r}function wn(n){console.log(n)}k.prototype=w,k.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},k.prototype.pi={value:Math.PI,valueset:!0,node:null};const Rn=mn;function vn(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:S,standardFunctionAsync:_,failDefferred:g,evaluateIdentifier:ee,arcadeCustomFunctionHandler:ne};for(let r=0;r<n.length;r++)n[r].registerFunctions(e);for(const r in e.functions)w[r]={value:new x(e.functions[r]),valueset:!0,node:null},k.prototype[r]=w[r];for(let r=0;r<e.signatures.length;r++)be(e.signatures[r],"async")}function An(n,e){let r=e.spatialReference;r==null&&(r=new xe({wkid:102100}));const t=yn(e.vars,e.customfunctions);return s({spatialReference:r,services:e.services,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:t,console:e.console?e.console:wn,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:1},n.body[0].body).then(o=>h((a,c)=>{o instanceof I&&(o=o.value),o instanceof K&&(o=o.value),o===u&&(o=null),o!==C?o!==B?o instanceof x||o instanceof V?c(new Error("Cannot return FUNCTION")):a(o):c(new Error("Cannot return CONTINUE")):c(new Error("Cannot return BREAK"))}))}function Cn(n,e){return Se(n)}function Un(n,e){return Te(n,e,"full")}function Mn(n,e){return Oe(n,e)}function Fn(n,e){return Re(n,e)}function xn(n){return Ae(n)}vn([Ce]);export{An as executeScript,vn as extend,Cn as extractFieldLiterals,xn as findFunctionCalls,Rn as functionHelper,Fn as referencesFunction,Mn as referencesMember,Un as validateScript};
