import{b as d,E as g,t as G,S as M}from"./main.bf5b0f8f.js";import{a as L}from"./lazyLayerLoader.146fd545.js";import{t as m,i as v}from"./portalLayers.8a8641a1.js";import"./layersLoader.14750f2e.js";import"./jsonContext.1fcf5ac2.js";function A(e,r){return I(e,r,"notes","Map Notes")}function w(e,r){return I(e,r,"route","Route Layer")}async function I(e,r,a,t){if(!e.layerType||e.layerType!=="ArcGISFeatureLayer"||e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===a)return!0;if(e.itemId){const i=new d({id:e.itemId,portal:r});return await i.load(),i.type==="Feature Collection"&&m(i,t)}return!1}async function b(e,r,a){if(!r)return;const t=[];for(const y of r){const n=U(y,a);y.layerType==="GroupLayer"?t.push(E(n,y,a)):t.push(n)}const i=await g(t);for(const y of i)!y.value||a.filter&&!a.filter(y.value)||e.add(y.value)}const F={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"UnsupportedLayer"},W={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},C={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},V={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},B={ArcGISFeatureLayer:"FeatureLayer"},O={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function U(e,r){return h(await D(e,r),e,r)}async function h(e,r,a){const t=new e;return t.read(r,a.context),t.type==="group"&&T(r)&&await N(t,r,a.context),await G(t,a.context),t}async function D(e,r){const a=r.context,t=R(a);let i=e.layerType||e.type;!i&&r&&r.defaultLayerType&&(i=r.defaultLayerType);const y=t[i];let n=y?L[y]:L.UnknownLayer;const o=a&&a.portal;if(f(e)){if(e.itemId){const l=new d({id:e.itemId,portal:o});await l.load();const c=(await v(l)).className||"UnknownLayer";n=L[c]}}else i==="ArcGISFeatureLayer"?await A(e,o)?n=L.MapNotesLayer:await w(e,o)?n=L.RouteLayer:T(e)&&(n=L.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?n=L.WMTSLayer:i==="WFS"&&e.wfsInfo.version!=="2.0.0"&&(n=L.UnsupportedLayer);return n()}function T(e){if(e.layerType!=="ArcGISFeatureLayer"||f(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function f(e){return e.type==="Feature Collection"}function R(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=C;break;case"ground":r=W;break;default:r=F}else switch(e.layerContainerType){case"basemap":r=O;break;case"tables":r=B;break;default:r=V}return r}async function E(e,r,a){const t=new M,i=b(t,Array.isArray(r.layers)?r.layers:[],a),y=await e;if(await i,y.type==="group")return y.layers.addMany(t),y}async function N(e,r,a){const t=L.FeatureLayer,i=await t(),y=r.featureCollection,n=y.showLegend,o=y.layers.map((l,c)=>{var s,p;const u=new i;u.read(l,a);const S={...a,ignoreDefaults:!0};return u.read({id:`${e.id}-sublayer-${c}`,visibility:(s=(p=r.visibleLayers)==null?void 0:p.includes(c))==null||s},S),n!=null&&u.read({showLegend:n},S),u});e.layers.addMany(o)}export{b as populateOperationalLayers};
