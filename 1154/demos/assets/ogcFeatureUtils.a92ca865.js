import{aj as V,f as y,s as g,C as T,ht as z,cA as H,p as j,hY as U,ce as Y,r as k,ct as X,cc as ee,dr as G,fS as te,hZ as ne}from"./main.ca84d437.js";import{O as ie,T as ae,L as se}from"./geojson.1ebd0a52.js";import{u as re}from"./clientSideDefaults.af2fcf42.js";const N=V.getLogger("esri.layers.graphics.sources.ogcfeature"),P="http://www.opengis.net/def/crs/",ge=`${P}OGC/1.3/CRS84`;async function ye(e,t,n={},i=5){const{links:o}=e,l=m(o,"items","application/geo+json")||m(o,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(l))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{data:d}=await T(l.href,{signal:n.signal,query:{limit:i,...n.customParameters,token:n.apiKey},headers:{accept:"application/geo+json"}});await ie(d);const s=ae(d,{geometryType:t.geometryType}),f=t.fields||s.fields||[],$=t.hasZ!=null?t.hasZ:s.hasZ,F=s.geometryType,p=t.objectIdField||s.objectIdFieldName||"OBJECTID";let r=t.timeInfo;const w=f.find(a=>a.name===p);if(w)w.type="esriFieldTypeOID",w.editable=!1,w.nullable=!1;else{if(!s.objectIdFieldType)throw new g("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");f.unshift({name:p,alias:p,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(p!==s.objectIdFieldName){const a=f.find(c=>c.name===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}f===s.fields&&s.unknownFields.length>0&&N.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of f){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new g("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(z.jsonValues.indexOf(a.type)===-1)throw new g("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(r){const a=new H(f);if(r.startTimeField){const c=a.get(r.startTimeField);c?(r.startTimeField=c.name,c.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const c=a.get(r.endTimeField);c?(r.endTimeField=c.name,c.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const c=a.get(r.trackIdField);c?r.trackIdField=c.name:(r.trackIdField=null,N.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(N.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}return{drawingInfo:F?re(F):null,geometryType:F,fields:f,hasZ:!!$,objectIdField:p,timeInfo:r}}async function we(e,t={}){const{links:n}=e,i=m(n,"data","application/json")||m(n,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(y(i))throw new g("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:l,signal:d}=t,{data:s}=await T(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:o}});return s}async function he(e,t={}){const{links:n}=e,i=m(n,"conformance","application/json")||m(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(y(i))throw new g("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:l,signal:d}=t,{data:s}=await T(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:o}});return s}async function be(e,t={}){const{apiKey:n,customParameters:i,signal:o}=t,{data:l}=await T(e,{signal:o,headers:{accept:"application/json"},query:{...i,token:n}});return l}async function Fe(e,t={}){const n="application/vnd.oai.openapi+json;version=3.0",i=m(e.links,"service-desc",n);if(y(i))return N.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:l,signal:d}=t,{data:s}=await T(i.href,{signal:d,headers:{accept:n},query:{...l,token:o}});return s}function Ie(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=t?.groups;if(!n)return null;const{authority:i,code:o}=n;switch(i.toLowerCase()){case"ogc":switch(o.toLowerCase()){case"crs27":return j.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return j.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(o,10);return Number.isNaN(l)?null:l}default:return null}}async function Te(e,t,n){const i=await oe(e,t,n);return U(i)}async function oe(e,t,n){const{capabilities:{query:{maxRecordCount:i}},collection:o,layerDefinition:l,queryParameters:{apiKey:d,customParameters:s},spatialReference:f,supportedCrs:$}=e,{links:F}=o,p=m(F,"items","application/geo+json")||m(F,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(p))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:r,num:w,start:a,timeExtent:c,where:W}=t;if(t.objectIds)throw new g("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const Z=j.fromJSON(f),I=Y(t.outSpatialReference,Z),x=I.isWGS84?null:R(I,$),K=ue(r,$),L=ce(c),A=de(W),J=w??(a!=null&&a!==void 0?10:i),{data:h}=await T(p.href,{...n,query:{...s,...K,crs:x,datetime:L,query:A,limit:J,startindex:a,token:d},headers:{accept:"application/geo+json"}});let S=!1;h.links&&(S=!!h.links.find(v=>v.rel==="next")),!S&&Number.isInteger(h.numberMatched)&&Number.isInteger(h.numberReturned)&&(S=h.numberReturned<h.numberMatched);const{fields:E,globalIdField:_,hasM:B,hasZ:M,objectIdField:O}=l,q=l.geometryType,C=se(h,{geometryType:q,hasZ:M,objectIdField:O});if(!x&&I.isWebMercator){for(const b of C)if(k(b.geometry)){const v=X(b.geometry,q,M,!1);v.spatialReference=j.WGS84,b.geometry=ee(G(v,I))}}for(const b of C)b.objectId=b.attributes[O];const Q=x||!x&&I.isWebMercator?I.toJSON():te,u=new ne;return u.exceededTransferLimit=S,u.features=C,u.fields=E,u.geometryType=q,u.globalIdFieldName=_,u.hasM=B,u.hasZ=M,u.objectIdFieldName=O,u.spatialReference=Q,u}function le(e){return k(e)&&e.type==="extent"}function R(e,t){var n,i,o;const{isWebMercator:l,wkid:d}=e;if(!d)return null;const s=l?(n=(i=(o=t[3857])!=null?o:t[102100])!=null?i:t[102113])!=null?n:t[900913]:t[e.wkid];return s?`${P}${s}`:null}function D(e){if(y(e))return"";const{xmin:t,ymin:n,xmax:i,ymax:o}=e;return`${t},${n},${i},${o}`}function ce(e){if(y(e))return null;const{start:t,end:n}=e;return`${k(t)?t.toISOString():".."}/${k(n)?n.toISOString():".."}`}function de(e){return y(e)||!e||e==="1=1"?null:e}function ue(e,t){if(!le(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:D(e)};const i=R(n,t);return k(i)?{bbox:D(e),"bbox-crs":i}:n.isWebMercator?{bbox:D(G(e,j.WGS84))}:null}function m(e,t,n){return e.find(i=>i.rel===t&&i.type===n)||e.find(i=>i.rel===t&&!i.type)}export{ge as F,ye as I,Te as N,Fe as S,we as T,P as j,he as k,oe as q,Ie as v,be as x};
