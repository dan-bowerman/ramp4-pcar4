import{b as i,s as d}from"./main.a76a9de0.js";import{a as L}from"./lazyLayerLoader.3a6ab3a1.js";import{m as S,h as l,f as N,n as c}from"./layersLoader.61e18b55.js";function y(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}function h(e){return!e.portalItem||e.portalItem instanceof i||(e={...e,portalItem:new i(e.portalItem)}),I(e.portalItem).then(r=>{const t={portalItem:e.portalItem,...r.properties},n=r.constructor;return Promise.resolve(new n(t))})}function I(e){return e.load().then(m).then(g)}function m(e){switch(e.type){case"Map Service":return v(e);case"Feature Service":return w(e);case"Feature Collection":return M(e);case"Scene Service":return T(e);case"Image Service":return P(e);case"Stream Service":return b();case"Vector Tile Service":return j();case"KML":return O();case"WFS":return C();case"WMTS":return K();case"WMS":return F();case"Feed":return $();default:return Promise.reject(new d("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function g(e){return(0,L[e.className])().then(r=>({constructor:r,properties:e.properties}))}function v(e){return x(e).then(r=>r?{className:"TileLayer"}:{className:"MapImageLayer"})}function w(e){return p(e).then(r=>{if(typeof r=="object"){const t={};return r.id!=null&&(t.layerId=r.id),{className:"FeatureLayer",properties:t}}return{className:"GroupLayer"}})}function T(e){return p(e).then(r=>{if(typeof r=="object"){const t={};let n;if(r.id!=null?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const o of Object.keys(a))if(e.typeKeywords.indexOf(o)!==-1)return{className:a[o]}}return c(n).then(a=>{let o="SceneLayer";const s={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return a&&a.layerType&&s[a.layerType]&&(o=s[a.layerType]),{className:o,properties:t}})}return r===!1?c(e.url).then(t=>t?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}):{className:"GroupLayer"}})}async function M(e){if(await e.load(),y(e,"Map Notes"))return{className:"MapNotesLayer"};if(y(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return l(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function P(e){var r,t,n;await e.load();const a=(r=(t=e.typeKeywords)==null?void 0:t.map(f=>f.toLowerCase()))!=null?r:[];if(a.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(a.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const o=await e.fetchData(),s=o?.layerType;return s==="ArcGISTiledImageServiceLayer"?{className:"ImageryTileLayer"}:s==="ArcGISImageServiceLayer"?{className:"ImageryLayer"}:((n=(await c(e.url)).cacheType)==null?void 0:n.toLowerCase())==="map"?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function b(){return{className:"StreamLayer"}}function j(){return{className:"VectorTileLayer"}}function O(){return{className:"KMLLayer"}}function C(){return{className:"WFSLayer"}}function F(){return{className:"WMSLayer"}}function K(){return{className:"WMTSLayer"}}function $(){return{className:"StreamLayer"}}function x(e){return c(e.url).then(r=>r.tileInfo)}function p(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then(()=>e.fetchData()).then(async r=>e.type==="Feature Service"?u(r=await S(r,e.url)):l(r)>0?u(r):c(e.url).then(u))}function u(e){return l(e)===1&&{id:N(e)}}var A=Object.freeze(Object.defineProperty({__proto__:null,fromItem:h,selectLayerClassPath:m},Symbol.toStringTag,{value:"Module"}));export{m as i,A as p,y as t};
