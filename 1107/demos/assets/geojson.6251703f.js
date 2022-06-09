import{fQ as I,bp as N,s as P,hu as C}from"./main.dd0259bc.js";const J={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(n){return J[n]}function*G(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const t of n.features)t&&(yield t)}}function*$(n){if(!n)return null;switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const t of n.coordinates)yield*t;break;case"MultiPolygon":for(const t of n.coordinates)for(const e of t)yield*e}}function*x(n,t={}){const{geometryType:e,objectIdField:o}=t;for(const a of n){var r;const{geometry:u,properties:i,id:l}=a;if(u&&b(u.type)!==e)continue;const s=i||{};let d=(r=s[o])!=null?r:null;o&&l!=null&&!s[o]&&(s[o]=d=l),yield new I(u?R(new N,u,t):null,s,null,d)}}function A(n){for(const t of n)if(t.length>2)return!0;return!1}function D(n){return!M(n)}function E(n){return M(n)}function M(n){let t=0;for(let e=0;e<n.length;e++){const o=n[e],r=n[(e+1)%n.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function k(n){const t=n[0],e=n[n.length-1];return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]||n.push(t),n}function R(n,t,e){switch(t.type){case"LineString":return Z(n,t,e);case"MultiLineString":return v(n,t,e);case"MultiPoint":return B(n,t,e);case"MultiPolygon":return H(n,t,e);case"Point":return Q(n,t,e);case"Polygon":return q(n,t,e)}}function Z(n,t,e){return h(n,t.coordinates,e),n}function v(n,t,e){for(const o of t.coordinates)h(n,o,e);return n}function B(n,t,e){return h(n,t.coordinates,e),n}function H(n,t,e){for(const o of t.coordinates){T(n,o[0],e);for(let r=1;r<o.length;r++)L(n,o[r],e)}return n}function Q(n,t,e){return S(n,t.coordinates,e),n}function q(n,t,e){const o=t.coordinates;T(n,o[0],e);for(let r=1;r<o.length;r++)L(n,o[r],e);return n}function T(n,t,e){const o=k(t);D(o)?O(n,o,e):h(n,o,e)}function L(n,t,e){const o=k(t);E(o)?O(n,o,e):h(n,o,e)}function h(n,t,e){for(const o of t)S(n,o,e);n.lengths.push(t.length)}function O(n,t,e){for(let o=t.length-1;o>=0;o--)S(n,t[o],e);n.lengths.push(t.length)}function S(n,t,e){const[o,r,a]=t;n.coords.push(o,r),e.hasZ&&n.coords.push(a||0)}function z(n){switch(typeof n){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function U(n){if(!n)throw new P("geojson-layer:empty","GeoJSON data is empty");if(n.type!=="Feature"&&n.type!=="FeatureCollection")throw new P("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:t}=n;if(!t)return;const e=typeof t=="string"?t:t.type==="name"?t.properties.name:t.type==="EPSG"?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!e||!o.test(e))throw new P("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function V(n,t={}){const e=[],o=new Set,r=new Set;let a,u=!1,i=null,l=!1,{geometryType:s=null}=t,d=!1;for(const g of G(n)){const{geometry:w,properties:f,id:y}=g;if((!w||(s||(s=b(w.type)),b(w.type)===s))&&(u||(u=A($(w))),l||(l=y!=null,l&&(a=typeof y,i=Object.keys(f).filter(p=>f[p]===y))),l&&y!=null&&(i.length>1?i=i.filter(p=>f[p]===y):i.length===1&&(i=f[i[0]]===y?i:[])),!d&&f)){let p=!0;for(const c in f){if(o.has(c))continue;const F=f[c];if(F==null){p=!1,r.add(c);continue}const j=z(F);j!=="unknown"?(r.delete(c),o.add(c),e.push({name:c,alias:c,type:j})):r.add(c)}d=p}}const m=i&&i.length===1&&i[0]||null;if(m){for(const g of e)if(g.name===m&&C(g)){g.type="esriFieldTypeOID";break}}return{fields:e,geometryType:s,hasZ:u,objectIdFieldName:m,objectIdFieldType:a,unknownFields:Array.from(r)}}function W(n,t){return Array.from(x(G(n),t))}export{W as L,U as O,V as T,b as i};
