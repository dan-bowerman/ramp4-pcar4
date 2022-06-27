import{_ as L,r as f,dl as T,f as m,s as P,dm as g,dn as C,O as F,C as N}from"./main.18c7b5d3.js";import{a as J}from"./lazyLayerLoader.5ef873ff.js";async function R(e){var l;const s=(l=e.properties)==null?void 0:l.customParameters,a=await _(e.url,s),r={...e.properties,url:e.url};if(!a.sublayerIds)return a.layerOrTableId!=null&&(r.layerId=a.layerOrTableId,r.sourceJSON=a.sourceJSON),new a.Constructor(r);const t=new(await L(()=>import("./GroupLayer.f2a18b98.js"),["assets/GroupLayer.f2a18b98.js","assets/main.18c7b5d3.js","assets/main.6f812d7a.css"])).default({title:a.parsedUrl.title});return V(t,a,r),t}function w(e,l){return e?e.find(s=>s.id===l):null}function V(e,l,s){function a(r,t){const o={...s,layerId:r,sublayerTitleMode:"service-name"};return f(t)&&(o.sourceJSON=t),new l.Constructor(o)}l.sublayerIds.forEach(r=>{const t=a(r,w(l.sublayerInfos,r));e.add(t)}),l.tableIds.forEach(r=>{const t=a(r,w(l.tableInfos,r));e.tables.add(t)})}async function _(e,l){let s=T(e);if(m(s)&&(s=await U(e,l)),m(s))throw new P("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:a,sublayer:r}=s;let t;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":t=r!=null?"FeatureLayer":j(e,l).then(n=>n?"TileLayer":"MapImageLayer");break;case"ImageServer":t=c(e,l).then(n=>{const d=n.tileInfo&&n.tileInfo.format;return n.tileInfo?!d||d.toUpperCase()!=="LERC"||n.cacheType&&n.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":t=c(s.url.path,l).then(n=>{if(n){if(n?.layerType==="Voxel")return"VoxelLayer";if(n!=null&&n.layers&&Array.isArray(n.layers)&&n.layers.length>0){var d;const S={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},b=(d=n.layers[0])==null?void 0:d.layerType;if(S[b]!=null)return S[b]}}return"SceneLayer"});break;default:t=o[a]}const i={FeatureLayer:!0,SceneLayer:!0},y=a==="FeatureServer",u={parsedUrl:s,Constructor:null,layerOrTableId:y?r:null,sublayerIds:null,tableIds:null},v=await t;if(i[v]&&r==null){const n=await x(e,a,l);if(y&&(u.sublayerInfos=n.layerInfos,u.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1)u.sublayerIds=n.layerIds,u.tableIds=n.tableIds;else if(y){var p,I;u.layerOrTableId=(p=n.layerIds[0])!=null?p:n.tableIds[0],u.sourceJSON=(I=n.layerInfos[0])!=null?I:n.tableInfos[0]}}return u.Constructor=await M(v),u}async function U(e,l){var s;const a=await c(e,l);let r=null,t=null;const o=a.type;if(o==="Feature Layer"||o==="Table"?(r="FeatureServer",t=a.id):o==="indexedVector"?r="VectorTileServer":a.hasOwnProperty("mapName")?r="MapServer":a.hasOwnProperty("bandCount")&&a.hasOwnProperty("pixelSizeX")?r="ImageServer":a.hasOwnProperty("maxRecordCount")&&a.hasOwnProperty("allowGeometryUpdates")?r="FeatureServer":a.hasOwnProperty("streamUrls")?r="StreamServer":h(a)?(r="SceneServer",t=a.id):a.hasOwnProperty("layers")&&h((s=a.layers)==null?void 0:s[0])&&(r="SceneServer"),!r)return null;const i=t!=null?g(e):null;return{title:f(i)&&a.name||C(e),serverType:r,sublayer:t,url:{path:f(i)?i.serviceUrl:F(e).path}}}function h(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function x(e,l,s){var a,r;let t,o=!1;if(l==="FeatureServer"){const u=await E(e,s);o=!!u.layersJSON,t=u.layersJSON||u.serviceJSON}else t=await c(e,s);const i=(a=t)==null?void 0:a.layers,y=(r=t)==null?void 0:r.tables;return{layerIds:i?.map(u=>u.id).reverse()||[],tableIds:y?.map(u=>u.id).reverse()||[],layerInfos:o?i:[],tableInfos:o?y:[]}}function O(e){return!e.type||e.type==="Feature Layer"}async function E(e,l){var s,a;let r=await c(e,l);r=r||{},r.layers=((s=r.layers)==null?void 0:s.filter(O))||[];const t={serviceJSON:r};if(r.currentVersion<10.5)return t;const o=await c(e+"/layers",l);return t.layersJSON={layers:(o==null||(a=o.layers)==null?void 0:a.filter(O))||[],tables:o?.tables||[]},t}async function M(e){return(0,J[e])()}async function j(e,l){return(await c(e,l)).tileInfo}async function c(e,l){return(await N(e,{responseType:"json",query:{f:"json",...l}})).data}export{R as fromUrl};
