import{F as u,a as f,M as v}from"./arcadeUtils.74b4ab08.js";import{dT as i,dK as d,dI as m,el as c,dQ as l,dR as p,dS as h,dC as T,dV as b}from"./main.748a25d3.js";import"./FeatureSetReader.22753a64.js";import"./centroid.63fac104.js";function y(e){return e&&e.domain?e.domain.type==="coded-value"||e.domain.type==="codedValue"?f.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:v[e.field.type],codedValues:e.domain.codedValues.map(r=>({name:r.name,code:r.code}))}):f.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:v[e.field.type],min:e.domain.min,max:e.domain.max}):null}function F(e){e.mode==="async"&&(e.functions.domain=function(r,o){return e.standardFunctionAsync(r,o,function(a,s,n){if(i(n,2,3),n[0]instanceof u)return y(n[0].fullDomain(d(n[1]),n[2]===void 0?void 0:m(n[2])));if(c(n[0]))return n[0]._ensureLoaded().then(()=>y(l(d(n[1]),n[0],null,n[2]===void 0?void 0:m(n[2]))));throw new Error("Invalid Parameter")})},e.functions.subtypes=function(r,o){return e.standardFunctionAsync(r,o,function(a,s,n){if(i(n,1,1),n[0]instanceof u){const t=n[0].subtypes();return t?f.convertObjectToArcadeDictionary(t):null}if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const t=n[0].subtypes();return t?f.convertObjectToArcadeDictionary(t):null});throw new Error("Invalid Parameter")})},e.functions.domainname=function(r,o){return e.standardFunctionAsync(r,o,function(a,s,n){if(i(n,2,4),n[0]instanceof u)return n[0].domainValueLookup(d(n[1]),n[2],n[3]===void 0?void 0:m(n[3]));if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const t=l(d(n[1]),n[0],null,n[3]===void 0?void 0:m(n[3]));return p(t,n[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(r,o){return e.standardFunctionAsync(r,o,function(a,s,n){if(i(n,2,4),n[0]instanceof u)return n[0].domainCodeLookup(d(n[1]),n[2],n[3]===void 0?void 0:m(n[3]));if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const t=l(d(n[1]),n[0],null,n[3]===void 0?void 0:m(n[3]));return h(t,n[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(r,o){return e.standardFunctionAsync(r,o,function(a,s,n){if(i(n,1,2),!c(n[0]))return T(n[0],n[1]);{const t=b(n[1],"");if(t==="")return n[0].castToText();if(t.toLowerCase()==="schema")return n[0].convertToText("schema",a.abortSignal);if(t.toLowerCase()==="featureset")return n[0].convertToText("featureset",a.abortSignal)}})},e.functions.gdbversion=function(r,o){return e.standardFunctionAsync(r,o,function(a,s,n){if(i(n,1,1),n[0]instanceof u)return n[0].gdbVersion();if(c(n[0]))return n[0].load().then(t=>t.gdbVersion);throw new Error("Invalid Parameter")})},e.functions.schema=function(r,o){return e.standardFunctionAsync(r,o,function(a,s,n){if(i(n,1,1),c(n[0]))return n[0].load().then(()=>f.convertObjectToArcadeDictionary(n[0].schema()));if(n[0]instanceof u){const t=n[0].schema();return t?f.convertObjectToArcadeDictionary(t):null}throw new Error("Invalid Parameter")})}}export{F as registerFunctions};
