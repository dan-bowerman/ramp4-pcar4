import{C as I,j0 as k,p as w,l as p,R as G,hM as x,a0 as E,cP as O,iR as v,iQ as M,f_ as P,g3 as S,j1 as m,g4 as d}from"./main.9520efef.js";const j={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function $(r){const n=r.folders||[],t=n.slice(),e=new Map,s=new Map,i=new Map,f=new Map,c=new Map,l={esriGeometryPoint:s,esriGeometryPolyline:i,esriGeometryPolygon:f};(r.featureCollection&&r.featureCollection.layers||[]).forEach(o=>{const y=p(o);y.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,y);const g=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?h(s,g,o.featureSet.features):a==="esriGeometryPolyline"?h(i,g,o.featureSet.features):a==="esriGeometryPolygon"&&h(f,g,o.featureSet.features)}),r.groundOverlays&&r.groundOverlays.forEach(o=>{c.set(o.id,o)}),n.forEach(o=>{o.networkLinkIds.forEach(y=>{const a=C(y,o.id,r.networkLinks);a&&t.push(a)})}),t.forEach(o=>{if(o.featureInfos){o.points=p(e.get("esriGeometryPoint")),o.polylines=p(e.get("esriGeometryPolyline")),o.polygons=p(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=l[y.type].get(y.id);a&&o[j[y.type]].featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&o.mapImages.push(a);break}}o.fullExtent=b([o])}});const u=b(t);return{folders:n,sublayers:t,extent:u}}function D(r,n,t,e){const s=G&&G.findCredential(r);r=x(r,{token:s&&s.token});const i=E.kmlServiceUrl;return I(i,{query:{url:r,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(n)},responseType:"json",signal:e})}function J(r,n,t=null,e=[]){const s=[],i={},f=n.sublayers,c=n.folders.map(l=>l.id);return f.forEach(l=>{const u=new r;if(t?u.read(l,t):u.read(l),e.length&&c.indexOf(u.id)>-1&&(u.visible=e.indexOf(u.id)!==-1),i[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const o=i[l.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(u)}else s.unshift(u)}),s}function h(r,n,t){t.forEach(e=>{r.set(e.attributes[n],e)})}function F(r,n){let t;return n.some(e=>e.id===r&&(t=e,!0)),t}function C(r,n,t){const e=F(r,t);return e&&(e.parentFolderId=n,e.networkLink=e),e}async function L(r){const n=O.fromJSON(r.featureSet).features,t=r.layerDefinition,e=v(t.drawingInfo.renderer),s=M.fromJSON(r.popupInfo),i=[];for(const f of n){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=s,f.visible=!0,i.push(f)}return i}function b(r){const n=P(S),t=P(S);for(const e of r){if(e.polygons&&e.polygons.featureSet&&e.polygons.featureSet.features)for(const s of e.polygons.featureSet.features)m(n,s.geometry),d(t,n);if(e.polylines&&e.polylines.featureSet&&e.polylines.featureSet.features)for(const s of e.polylines.featureSet.features)m(n,s.geometry),d(t,n);if(e.points&&e.points.featureSet&&e.points.featureSet.features)for(const s of e.points.featureSet.features)m(n,s.geometry),d(t,n);if(e.mapImages)for(const s of e.mapImages)m(n,s.extent),d(t,n)}return k(t,S)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:w.WGS84}}export{J as S,L as b,$ as d,D as g,b as j};
