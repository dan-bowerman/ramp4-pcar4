import{hu as m,fX as p,hv as g,hw as y,hx as w,c4 as f,_ as I}from"./main.2465de1c.js";class _{constructor(){this.code=null,this.description=null}}class v{constructor(t){this.error=new _,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new v(e)}class b{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function V(e){return new b(e)}const a=new Set;function j(e,t,n,h=!1,u){a.clear();for(const r in n){const i=e.get(r);if(!i)continue;const l=n[r],s=q(i,l);if(s!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:l,sanitizedValue:s}}),a.add(i.name),i&&(h||i.editable)){const c=y(i,s);if(c)return d(w(c,i,s));t[i.name]=s}}for(const r of e.requiredFields)if(!a.has(r.name))return d(`missing required field "${r.name}"`);return null}function q(e,t){let n=t;return typeof t=="string"&&m(e)?n=parseFloat(t):t!=null&&p(e)&&typeof t!="string"&&(n=String(t)),g(n)}let o;function x(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(!o)throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function P(){return o||(o=await I(()=>import("./geometryEngineJSON.1787cb60.js"),["assets/geometryEngineJSON.1787cb60.js","assets/geometryEngineBase.fd888c07.js","assets/geometryEngineJSON.d8a905b4.js","assets/json.2d0d6862.js"]),o)}async function F(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await P()}export{V as c,j as d,x as h,d as u,F as y};
