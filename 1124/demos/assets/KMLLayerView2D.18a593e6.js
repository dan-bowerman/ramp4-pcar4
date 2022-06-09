import{b7 as A,iS as w,S as q,C as R,M as x,c5 as E,dq as W,r as u,f as F,id as z,dr as k,p as C,eg as G,Z as M,cP as K,a4 as N,e as h,d as p,i as J}from"./main.805a311c.js";import{b as _,g as O,d as Q}from"./kmlUtils.cae957f5.js";import{g as j}from"./Bitmap.8a3f77f5.js";import{t as B}from"./BitmapContainer.9264a0d1.js";import{l as H,u as Z}from"./LayerView.37ece7ff.js";import{i as V}from"./GraphicContainer.4abe2e03.js";import{i as b}from"./BaseGraphicContainer.06a4c763.js";import"./Container.eb1c7130.js";import"./Texture.290803f2.js";import"./WGLContainer.6c3e5e31.js";import"./definitions.21e97413.js";import"./VertexArrayObject.9514db4b.js";import"./Utils.93118947.js";import"./ShaderCompiler.673bea33.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./MaterialKey.ff387eeb.js";import"./earcut.f20dd8d8.js";import"./CIMSymbolHelper.0d627f70.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./projectionSupport.3e481074.js";import"./json.2d0d6862.js";import"./FeatureContainer.d26fa0e6.js";import"./TileContainer.09c6218d.js";import"./visualVariablesUtils.2ab06c69.js";import"./visualVariablesUtils.63355a10.js";import"./Matcher.69522fce.js";import"./tileUtils.a3dcd63f.js";import"./TileClipper.8a35662b.js";import"./cimSymbolUtils.8bf8d400.js";import"./quantizationUtils.b9bb2a18.js";import"./devEnvironmentUtils.444b8fd1.js";import"./schemaUtils.2a46585d.js";import"./MD5.f9440c6b.js";import"./util.4133cb51.js";import"./ComputedAttributeStorage.b9fc1bbc.js";import"./FeatureSetReader.7d002d29.js";import"./centroid.56a1d454.js";import"./vec3f32.9cc42d31.js";class D{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let o=class extends H(Z){constructor(){super(...arguments),this._handles=new A,this._bitmapIndex=new Map,this._mapImageContainer=new B,this._kmlVisualData=new D,this.allVisiblePoints=new w,this.allVisiblePolylines=new w,this.allVisiblePolygons=new w,this.allVisibleMapImages=new q}async hitTest(i,t){var a,e,r;return(await Promise.all([(a=this._pointsView)==null?void 0:a.hitTest(i),(e=this._polylinesView)==null?void 0:e.hitTest(i),(r=this._polygonsView)==null?void 0:r.hitTest(i)])).flat().filter(s=>!!s&&(s.layer=this.layer,s.sourceLayer=this.layer,!0))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._handles.add([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))})]),this.container.addChild(this._mapImageContainer),this._polygonsView=new b({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new V(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new b({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new V(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new b({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new V(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",i=>{for(const[t,a]of this._kmlVisualData.allSublayers)a.visibility=0;for(const t of i){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()}),this._fetchingPromise=this._fetchService().then(()=>{this._fetchingPromise=null,this.notifyChange("updating")})}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._fetchingPromise!=null||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&R(i.href,{responseType:"image"}).then(({data:t})=>{let a=x.fromJSON(i.extent);E(a,this.view.spatialReference)&&(a=W(a,this.view.spatialReference));const e=new j(t,"standard");e.x=a.xmin,e.y=a.ymax,e.resolution=a.width/t.naturalWidth,e.rotation=i.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(i,e)})}async _getViewDependentUrl(i,t){const{viewFormat:a,viewBoundScale:e,httpQuery:r}=i;if(u(a)){if(F(t))throw new Error("Loading this network link requires a view state.");let s;if(await z(),u(e)&&e!==1){const n=new x(t.extent);n.expand(e),s=n}else s=t.extent;s=k(s,C.WGS84);const m=k(s,C.WebMercator),d=s.xmin,l=s.xmax,$=s.ymin,L=s.ymax,U=t.size[0]*t.pixelRatio,T=t.size[1]*t.pixelRatio,v=Math.max(m.width,m.height),f={"[bboxWest]":d.toString(),"[bboxEast]":l.toString(),"[bboxSouth]":$.toString(),"[bboxNorth]":L.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":v.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":v.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":U.toString(),"[vertPixels]":T.toString(),"[terrainEnabled]":"0","[clientVersion]":G,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},S=n=>{for(const I in n)for(const P in f)n[I]=n[I].replace(P,f[P])},y=M(a);S(y);let c={};u(r)&&(c=M(r),S(c));const g=K(i.href);return g.query={...g.query,...y,...c},`${g.path}?${N(y)}`}return i.href}async _fetchService(){const i=new D;await this._loadVisualData(this.layer.url,i),this._kmlVisualData=i,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!t.visibility&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t){return this._fetchParsedKML(i).then(async a=>{for(const e of a.sublayers){t.allSublayers.set(e.id,e);const r=e.points?await _(e.points):[],s=e.polylines?await _(e.polylines):[],m=e.polygons?await _(e.polygons):[],d=e.mapImages||[];if(t.allPoints.push(...r.map(l=>({item:l,sublayerId:e.id}))),t.allPolylines.push(...s.map(l=>({item:l,sublayerId:e.id}))),t.allPolygons.push(...m.map(l=>({item:l,sublayerId:e.id}))),t.allMapImages.push(...d.map(l=>({item:l,sublayerId:e.id}))),e.networkLink){const l=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(l,t)}}})}_fetchParsedKML(i){return O(i,this.view.spatialReference,this.layer.refreshInterval).then(t=>Q(t.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};h([p()],o.prototype,"_pointsView",void 0),h([p()],o.prototype,"_polylinesView",void 0),h([p()],o.prototype,"_polygonsView",void 0),h([p()],o.prototype,"_fetchingPromise",void 0),h([p()],o.prototype,"updating",void 0),o=h([J("esri.views.2d.layers.KMLLayerView2D")],o);const Ei=o;export{Ei as default};
