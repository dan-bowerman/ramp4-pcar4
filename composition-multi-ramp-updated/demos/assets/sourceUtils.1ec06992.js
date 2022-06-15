import{hs as m,fV as p,ht as g,hu as y,hv as w,c1 as f}from"./multi-ramp.341296fa.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(t){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new b(e)}class v{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function F(e){return new v(e)}const u=new Set;function G(e,t,i,h=!1,a){u.clear();for(const s in i){const n=e.get(s);if(!n)continue;const l=i[s],r=q(n,l);if(r!==l&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:n,originalValue:l,sanitizedValue:r}}),u.add(n.name),n&&(h||n.editable)){const c=y(n,r);if(c)return d(w(c,n,r));t[n.name]=r}}for(const s of e.requiredFields)if(!u.has(s.name))return d(`missing required field "${s.name}"`);return null}function q(e,t){let i=t;return typeof t=="string"&&m(e)?i=parseFloat(t):t!=null&&p(e)&&typeof t!="string"&&(i=String(t)),g(i)}let o;function P(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(!o)throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function V(){return o||(o=await import("./geometryEngineJSON.1787cb60.js"),o)}async function S(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await V()}export{F as c,G as d,P as h,d as u,S as y};
