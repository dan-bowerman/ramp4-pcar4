import{C as I,i$ as k,p as w,l as p,R as G,hL as x,$ as O,cO as E,iQ as v,iP as $,fZ as P,g2 as S,j0 as m,g3 as d}from"./main.a76a9de0.js";const F={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function L(r){const n=r.folders||[],t=n.slice(),e=new Map,s=new Map,i=new Map,f=new Map,c=new Map,l={esriGeometryPoint:s,esriGeometryPolyline:i,esriGeometryPolygon:f};(r.featureCollection&&r.featureCollection.layers||[]).forEach(o=>{const y=p(o);y.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,y);const g=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?h(s,g,o.featureSet.features):a==="esriGeometryPolyline"?h(i,g,o.featureSet.features):a==="esriGeometryPolygon"&&h(f,g,o.featureSet.features)}),r.groundOverlays&&r.groundOverlays.forEach(o=>{c.set(o.id,o)}),n.forEach(o=>{o.networkLinkIds.forEach(y=>{const a=j(y,o.id,r.networkLinks);a&&t.push(a)})}),t.forEach(o=>{if(o.featureInfos){o.points=p(e.get("esriGeometryPoint")),o.polylines=p(e.get("esriGeometryPolyline")),o.polygons=p(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=l[y.type].get(y.id);a&&o[F[y.type]].featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&o.mapImages.push(a);break}}o.fullExtent=b([o])}});const u=b(t);return{folders:n,sublayers:t,extent:u}}function D(r,n,t,e){const s=G&&G.findCredential(r);r=x(r,{token:s&&s.token});const i=O.kmlServiceUrl;return I(i,{query:{url:r,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(n)},responseType:"json",signal:e})}function J(r,n,t=null,e=[]){const s=[],i={},f=n.sublayers,c=n.folders.map(l=>l.id);return f.forEach(l=>{const u=new r;if(t?u.read(l,t):u.read(l),e.length&&c.indexOf(u.id)>-1&&(u.visible=e.indexOf(u.id)!==-1),i[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const o=i[l.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(u)}else s.unshift(u)}),s}function h(r,n,t){t.forEach(e=>{r.set(e.attributes[n],e)})}function M(r,n){let t;return n.some(e=>e.id===r&&(t=e,!0)),t}function j(r,n,t){const e=M(r,t);return e&&(e.parentFolderId=n,e.networkLink=e),e}async function N(r){const n=E.fromJSON(r.featureSet).features,t=r.layerDefinition,e=v(t.drawingInfo.renderer),s=$.fromJSON(r.popupInfo),i=[];for(const f of n){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=s,f.visible=!0,i.push(f)}return i}function b(r){const n=P(S),t=P(S);for(const e of r){if(e.polygons&&e.polygons.featureSet&&e.polygons.featureSet.features)for(const s of e.polygons.featureSet.features)m(n,s.geometry),d(t,n);if(e.polylines&&e.polylines.featureSet&&e.polylines.featureSet.features)for(const s of e.polylines.featureSet.features)m(n,s.geometry),d(t,n);if(e.points&&e.points.featureSet&&e.points.featureSet.features)for(const s of e.points.featureSet.features)m(n,s.geometry),d(t,n);if(e.mapImages)for(const s of e.mapImages)m(n,s.extent),d(t,n)}return k(t,S)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:w.WGS84}}export{J as S,N as b,L as d,D as g,b as j};
