import{C as h,s as d,t as b,B as I}from"./main.d8c8794a.js";import{a as i}from"./lazyLayerLoader.238bf545.js";import{o as g}from"./jsonContext.0d7e4dce.js";async function y(e){const{data:l}=await h(e,{responseType:"json",query:{f:"json"}});return l}async function w(e,l){const t=e.instance.portalItem;return t&&t.id?(await t.load(l),T(e),L(e,l)):Promise.resolve()}function T(e){const l=e.instance.portalItem;if(e.supportedTypes.indexOf(l.type)===-1)throw new d("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:l.type,expectedType:e.supportedTypes.join(", ")})}async function L(e,l){const t=e.instance,n=t.portalItem,{url:r,title:a}=n,o=g(n);if(t.type==="group")return t.read({title:a},o),S(t,e);r&&t.read({url:r},o);const c=await f(e,l);return c&&t.read(c,o),t.resourceReferences={portalItem:n,paths:o.readResourcePaths},t.read({title:a},o),b(t,o)}function S(e,l){let t;const n=e.portalItem.type;switch(n){case"Feature Service":case"Feature Collection":t=i.FeatureLayer;break;case"Stream Service":t=i.StreamLayer;break;case"Scene Service":t=i.SceneLayer;break;default:throw new d("portal:unsupported-item-type-as-group",`The item type '${n}' is not supported as a 'IGroupLayer'`)}let r;return t().then(a=>(r=a,f(l))).then(async a=>n==="Feature Service"?(a=await m(a,e.portalItem.url),u(e,r,a)):s(a)>0?u(e,r,a):F(e,r))}function F(e,l){return e.portalItem.url?y(e.portalItem.url).then(t=>{var n,r;function a(o){return{id:o.id,name:o.name}}t&&u(e,l,{layers:(n=t.layers)==null?void 0:n.map(a),tables:(r=t.tables)==null?void 0:r.map(a)})}):Promise.resolve()}function u(e,l,t){let n=t.layers||[];const r=t.tables||[];e.portalItem.type==="Feature Collection"&&(n.forEach(a=>{var o;(a==null||(o=a.layerDefinition)==null?void 0:o.type)==="Table"&&r.push(a)}),n=n.filter(a=>{var o;return(a==null||(o=a.layerDefinition)==null?void 0:o.type)!=="Table"})),n.reverse().forEach(a=>{const o=p(e,l,t,a);e.add(o)}),r.reverse().forEach(a=>{const o=p(e,l,t,a);e.tables.add(o)})}function p(e,l,t,n){const r=new l({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if(e.portalItem.type==="Feature Collection"){const a={origin:"portal-item",portal:e.portalItem.portal||I.getDefault()};r.read(n,a);const o=t.showLegend;o!=null&&r.read({showLegend:o},a)}return r}function f(e,l){if(e.supportsData===!1)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",l).catch(()=>null).then(async n=>{if(j(t)){let r,a=!0;return n&&s(n)>0&&(t.layerId==null&&(t.layerId=v(n)),r=$(n,t.layerId),r&&(s(n)===1&&(a=!1),n.showLegend!=null&&(r.showLegend=n.showLegend))),a&&t.sublayerTitleMode!=="service-name"&&(t.sublayerTitleMode="item-title-and-service-name"),r}return n})}async function m(e,l){var t,n;if(((t=e)==null?void 0:t.layers)==null||((n=e)==null?void 0:n.tables)==null){const r=await y(l);(e=e||{}).layers=e.layers||r?.layers,e.tables=e.tables||r?.tables}return e}function v(e){const l=e.layers;if(l&&l.length)return l[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function $(e,l){const t=e.layers;if(t){for(let r=0;r<t.length;r++)if(t[r].id===l)return t[r]}const n=e.tables;if(n){for(let r=0;r<n.length;r++)if(n[r].id===l)return n[r]}return null}function s(e){var l,t,n,r;return((l=e==null||(t=e.layers)==null?void 0:t.length)!=null?l:0)+((n=e==null||(r=e.tables)==null?void 0:r.length)!=null?n:0)}function j(e){return e.type!=="stream"&&"layerId"in e}var C=Object.freeze(Object.defineProperty({__proto__:null,getFirstLayerOrTableId:v,getNumLayersAndTables:s,load:w,preprocessFSItemData:m},Symbol.toStringTag,{value:"Module"}));export{v as f,s as h,C as l,m,y as n};
