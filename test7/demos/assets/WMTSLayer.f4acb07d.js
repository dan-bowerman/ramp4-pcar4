import{lm as z,e as a,d as u,M as R,hl as J,i as A,J as q,cK as C,S as k,ln as D,lo as ce,s as W,aW as pe,r as de,jD as he,jF as me,jE as ye,cX as fe,cY as ge,cZ as ve,d1 as xe,b5 as Q,bD as Z,a0 as we,lp as Me,lq as Se,C as ee,l as te,O as re,a2 as Ie,ci as Te}from"./main.5d410746.js";import{o as ie}from"./xmlUtils.9790bce4.js";class Le{constructor(t,r=0,i=t.lods.length-1){this.tileInfo=t,this.minLOD=r,this.maxLOD=i}getAvailability(t,r,i){const s=this.tileInfo.lodAt(t);return!s||t<this.minLOD||t>this.maxLOD?"unavailable":s.cols&&s.rows?i>=s.cols[0]&&i<=s.cols[1]&&r>=s.rows[0]&&r<=s.rows[1]?"available":"unavailable":"available"}async fetchAvailability(t,r,i,s){return await z(s),this.getAvailability(t,r,i)}async fetchAvailabilityUpsample(t,r,i,s,o){await z(o),s.level=t,s.row=r,s.col=i;const l=this.tileInfo;for(l.updateTileInfo(s);;){const n=this.getAvailability(s.level,s.row,s.col);if(n!=="unavailable")return n;if(!l.upsampleTile(s))return"unavailable"}}}var K;let _=K=class extends q{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new K;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};a([u({type:R,json:{read:{source:"fullExtent"}}})],_.prototype,"fullExtent",void 0),a([u({type:String,json:{read:{source:"id"}}})],_.prototype,"id",void 0),a([u({type:J,json:{read:{source:"tileInfo"}}})],_.prototype,"tileInfo",void 0),_=K=a([A("esri.layer.support.TileMatrixSet")],_);const Ee=_;var B;let b=B=class extends q{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new B;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};a([u({json:{read:{source:"id"}}})],b.prototype,"id",void 0),a([u({json:{read:{source:"title"}}})],b.prototype,"title",void 0),a([u({json:{read:{source:"abstract"}}})],b.prototype,"description",void 0),a([u({json:{read:{source:"legendUrl"}}})],b.prototype,"legendUrl",void 0),a([u({json:{read:{source:"isDefault"}}})],b.prototype,"isDefault",void 0),a([u({json:{read:{source:"keywords"}}})],b.prototype,"keywords",void 0),b=B=a([A("esri.layer.support.WMTSStyle")],b);const be=b;var H;let w=H=class extends q{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?R.fromJSON(e):null}readFullExtents(e,t){var r;return(r=t.fullExtents)!=null&&r.length?t.fullExtents.map(i=>R.fromJSON(i)):t.tileMatrixSets.map(i=>R.fromJSON(i.fullExtent)).filter(i=>i)}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&t.indexOf(e)===-1)&&(e.indexOf("image/")===-1&&(e="image/"+e),t&&t.indexOf(e)===-1)?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new H;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};a([u()],w.prototype,"description",null),a([u()],w.prototype,"fullExtent",void 0),a([C("fullExtent",["fullExtent"])],w.prototype,"readFullExtent",null),a([u({readOnly:!0})],w.prototype,"fullExtents",void 0),a([C("fullExtents",["fullExtents","tileMatrixSets"])],w.prototype,"readFullExtents",null),a([u()],w.prototype,"imageFormat",null),a([u({json:{read:{source:"formats"}}})],w.prototype,"imageFormats",void 0),a([u()],w.prototype,"id",void 0),a([u()],w.prototype,"layer",void 0),a([u()],w.prototype,"styleId",null),a([u({type:k.ofType(be),json:{read:{source:"styles"}}})],w.prototype,"styles",void 0),a([u({value:null,json:{write:{ignoreOrigin:!0}}})],w.prototype,"title",null),a([u()],w.prototype,"tileMatrixSetId",void 0),a([u({readOnly:!0})],w.prototype,"tileMatrixSet",null),a([u({type:k.ofType(Ee),json:{read:{source:"tileMatrixSets"}}})],w.prototype,"tileMatrixSets",void 0),w=H=a([A("esri.layers.support.WMTSSublayer")],w);const $=w,ae=90.71428571428571,Pe=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function Oe(e,t){var r,i;e=e.replace(/ows:/gi,"");const s=new DOMParser().parseFromString(e,"text/xml").documentElement,o=new Map,l=new Map,n=g("Contents",s);if(!n)throw new W("wmtslayer:wmts-capabilities-xml-is-not-valid");const c=g("OperationsMetadata",s),p=c?.querySelector("[name='GetTile']"),m=p?.getElementsByTagName("Get"),y=m&&Array.prototype.slice.call(m),d=(r=(t==null||(i=t.url)==null?void 0:i.indexOf("https"))>-1)!=null&&r;let v,S,T=t.serviceMode,M=t&&t.url;if(y&&y.length&&y.some(I=>{const E=g("Constraint",I);return!E||V("AllowedValues","Value",T,E)?(M=I.attributes[0].nodeValue,!0):(!E||V("AllowedValues","Value","RESTful",E)||V("AllowedValues","Value","REST",E)?S=I.attributes[0].nodeValue:E&&!V("AllowedValues","Value","KVP",E)||(v=I.attributes[0].nodeValue),!1)}),!M)if(S)M=S,T="RESTful";else if(v)M=v,T="KVP";else{const I=g("ServiceMetadataURL",s);M=I&&I.getAttribute("xlink:href")}const x=M.indexOf("1.0.0/");x===-1&&T==="RESTful"?M+="/":x>-1&&(M=M.substring(0,x)),T==="KVP"&&(M+=x>-1?"":"?"),d&&(M=M.replace(/^http:/i,"https:"));const L=f("ServiceIdentification>ServiceTypeVersion",s),P=f("ServiceIdentification>AccessConstraints",s),j=O("Layer",n),U=O("TileMatrixSet",n),N=j.map(I=>{const E=f("Identifier",I);return o.set(E,I),Fe(E,I,U,d,L)});return{copyright:P,dimensionMap:l,layerMap:o,layers:N,serviceMode:T,tileUrl:M}}function Ce(e){return e.layers.forEach(t=>{t.tileMatrixSets.forEach(r=>{const i=r.tileInfo;i.dpi!==96&&(i.lods.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=ue(i.spatialReference.wkid,s.scale*ae/96,r.id)}),i.dpi=96)})}),e}function G(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(G(i)&&i.nodeName===e)return i}return null}function O(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];G(s)&&s.nodeName===e&&r.push(s)}return r}function F(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];G(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent)}function f(e,t){return e.split(">").forEach(r=>{t&&(t=g(r,t))}),t&&t.textContent}function V(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(o=>{if(o.nodeName.indexOf(e)>-1){const l=g(t,o),n=l&&l.textContent;if(n===r||r.split(":")&&r.split(":")[1]===n)return s=o,!0}return!1}),s}function Fe(e,t,r,i,s){const o=f("Abstract",t),l=F("Format",t);return{id:e,fullExtent:$e(t),fullExtents:Ae(t),description:o,formats:l,styles:je(t,i),title:f("Title",t),tileMatrixSets:Ue(s,t,r)}}function oe(e,t){var r;const i=[],s=(r=e.layerMap)==null?void 0:r.get(t);if(!s)return;const o=O("ResourceURL",s),l=O("Dimension",s);let n,c,p,m;return l.length&&(n=f("Identifier",l[0]),c=F("Default",l[0])||F("Value",l[0])),l.length>1&&(p=f("Identifier",l[1]),m=F("Default",l[1])||F("Value",l[1])),e.dimensionMap.set(t,{dimensions:c,dimensions2:m}),o.forEach(y=>{let d=y.getAttribute("template");if(y.getAttribute("resourceType")==="tile"){if(n&&c.length)if(d.indexOf("{"+n+"}")>-1)d=d.replace("{"+n+"}","{dimensionValue}");else{const v=d.toLowerCase().indexOf("{"+n.toLowerCase()+"}");v>-1&&(d=d.substring(0,v)+"{dimensionValue}"+d.substring(v+n.length+2))}if(p&&m.length)if(d.indexOf("{"+p+"}")>-1)d=d.replace("{"+p+"}","{dimensionValue2}");else{const v=d.toLowerCase().indexOf("{"+p.toLowerCase()+"}");v>-1&&(d=d.substring(0,v)+"{dimensionValue2}"+d.substring(v+p.length+2))}i.push({template:d,format:y.getAttribute("format"),resourceType:"tile"})}}),i}function Re(e,t,r,i,s,o,l,n){var c,p;const m=_e(e,t,i);if(!(m?.length>0))return"";const{dimensionMap:y}=e,d=(c=y.get(t).dimensions)==null?void 0:c[0],v=(p=y.get(t).dimensions2)==null?void 0:p[0];return m[l%m.length].template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,o).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+n).replace(/\{dimensionValue\}/gi,d).replace(/\{dimensionValue2\}/gi,v)}function _e(e,t,r){const i=oe(e,t),s=i.filter(o=>o.format===r);return s.length?s:i}function Ve(e,t,r,i){const{dimensionMap:s}=e,o=oe(e,t);let l="";if(o&&o.length>0){const n=s.get(t).dimensions&&s.get(t).dimensions[0],c=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=o[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,n),l=l.replace(/\{dimensionValue2\}/gi,c)}return l}function $e(e){const t=g("WGS84BoundingBox",e),r=t?f("LowerCorner",t).split(" "):["-180","-90"],i=t?f("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function Ae(e){const t=[];return ie(e,{BoundingBox:r=>{const i=r.getAttribute("crs").toLowerCase(),s=X(i),o=i.includes("epsg")&&Y(s.wkid);let l,n,c,p;ie(r,{LowerCorner:m=>{[l,n]=m.textContent.split(" ").map(y=>Number.parseFloat(y)),o&&([l,n]=[n,l])},UpperCorner:m=>{[c,p]=m.textContent.split(" ").map(y=>Number.parseFloat(y)),o&&([c,p]=[p,c])}}),t.push({xmin:l,ymin:n,xmax:c,ymax:p,spatialReference:s})}}),t}function je(e,t){return O("Style",e).map(r=>{const i=g("LegendURL",r),s=g("Keywords",r),o=s&&F("Keyword",s);let l=i&&i.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:f("Abstract",r),id:f("Identifier",r),isDefault:r.getAttribute("isDefault")==="true",keywords:o,legendUrl:l,title:f("Title",r)}})}function Ue(e,t,r){return O("TileMatrixSetLink",t).map(i=>Ne(e,i,r))}function Ne(e,t,r){const i=g("TileMatrixSet",t).textContent,s=F("TileMatrix",t),o=r.find(x=>{const L=g("Identifier",x),P=L&&L.textContent;return!!(P===i||i.split(":")&&i.split(":")[1]===P)}),l=g("TileMatrixSetLimits",t),n=l&&O("TileMatrixLimits",l),c=new Map;if(n!=null&&n.length)for(const x of n){const L=g("TileMatrix",x).textContent,P=+g("MinTileRow",x).textContent,j=+g("MaxTileRow",x).textContent,U=+g("MinTileCol",x).textContent,N=+g("MaxTileCol",x).textContent;c.set(L,{minCol:U,maxCol:N,minRow:P,maxRow:j})}const p=f("SupportedCRS",o).toLowerCase(),m=De(o,p),y=m.spatialReference,d=g("TileMatrix",o),v=[parseInt(f("TileWidth",d),10),parseInt(f("TileHeight",d),10)],S=[];s.length?s.forEach((x,L)=>{const P=V("TileMatrix","Identifier",x,o);S.push(se(P,p,L,i,c))}):O("TileMatrix",o).forEach((x,L)=>{S.push(se(x,p,L,i,c))});const T=ke(e,o,m,v,S[0]).toJSON(),M=new J({dpi:96,spatialReference:y,size:v,origin:m,lods:S}).toJSON();return{id:i,fullExtent:T,tileInfo:M}}function X(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);t!==900913&&t!==3857||(t=102100);const r=Ke(e);return de(r)&&(t=r),{wkid:t}}function De(e,t){return ne(g("TileMatrix",e),t)}function ne(e,t){const r=X(t),[i,s]=f("TopLeftCorner",e).split(" ").map(l=>parseFloat(l)),o=t.includes("epsg")&&Y(r.wkid);return new pe(o?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}function ke(e,t,r,i,s){const o=g("BoundingBox",t);let l,n,c,p,m,y;if(o&&(l=f("LowerCorner",o).split(" "),n=f("UpperCorner",o).split(" ")),l&&l.length>1&&n&&n.length>1)c=parseFloat(l[0]),m=parseFloat(l[1]),p=parseFloat(n[0]),y=parseFloat(n[1]);else{const d=g("TileMatrix",t),v=parseInt(f("MatrixWidth",d),10),S=parseInt(f("MatrixHeight",d),10);c=r.x,y=r.y,p=c+v*i[0]*s.resolution,m=y-S*i[1]*s.resolution}return We(e,r.spatialReference)?new R(m,c,y,p,r.spatialReference):new R(c,m,p,y,r.spatialReference)}function We(e,t){return e==="1.0.0"&&Y(t.wkid)}function Y(e){return Pe.some(([t,r])=>e>=t&&e<=r)}function Ke(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}function se(e,t,r,i,s){var o;const l=X(t),n=f("Identifier",e);let c=parseFloat(f("ScaleDenominator",e));const p=ue(l.wkid,c,i);c*=96/ae;const m=+f("MatrixWidth",e),y=+f("MatrixHeight",e),{maxCol:d=m-1,maxRow:v=y-1,minCol:S=0,minRow:T=0}=(o=s.get(n))!=null?o:{},{x:M,y:x}=ne(e,t);return{cols:[S,d],level:r,levelValue:n,origin:[M,x],scale:c,resolution:p,rows:[T,v]}}function ue(e,t,r){let i;return i=D.hasOwnProperty(""+e)?D.values[D[e]]:r==="default028mm"?6370997*Math.PI/180:ce(e).metersPerDegree,7*t/25e3/i}const le={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Be=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let h=class extends he(me(ye(fe(ge(ve(xe)))))){constructor(...e){super(...e),this._sublayersHandles=new Q,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",(t,r)=>{r&&(r.layer=null),t&&(t.layer=this)},!0),this.watch("sublayers",(t,r)=>{r&&(r.forEach(i=>{i.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),t&&(t.forEach(i=>{i.layer=this}),this._sublayersHandles||(this._sublayersHandles=new Q),this._sublayersHandles.add([t.on("after-add",({item:i})=>{i.layer=this}),t.on("after-remove",({item:i})=>{i.layer=null})]))},!0)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){if(this.serviceMode==="KVP"||this.serviceMode==="RESTful")return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(Z).then(()=>this._fetchService(e)).catch(t=>{throw Z(t),new W("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new $);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,o=i?.layerIdentifier;let l=null;const n=i?.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(l=n[0]):l=n);const c=s?.format,p=s?.style;return new $({id:o,imageFormat:c,styleId:p,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const o=we("tileMatrixSet.tileInfo",s);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return He(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map(e=>e.tileInfo.spatialReference).toArray()}get tilemapCache(){var e,t;const r=(e=this.activeLayer)==null||(t=e.tileMatrixSet)==null?void 0:t.tileInfo;return new Le(r)}get title(){var e,t;return(e=(t=this.activeLayer)==null?void 0:t.title)!=null?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&e.substr(-1)==="/"?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new Me({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new Se({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return ee(i,{responseType:"image"}).then(s=>s.data)}findSublayerById(e){return this.sublayers.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let o=this.resourceInfo?"":Re({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return o||(o=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),o=this._appendCustomLayerParameters(o),o}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=Ve({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if(this.serviceMode==="KVP")return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if(this.serviceMode==="RESTful"){let s="";return le[r.toLowerCase()]&&(s=le[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)this.resourceInfo.serviceMode==="KVP"&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const r=this.serviceMode==="KVP"?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),this.serviceMode=r}catch(i){throw new W("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=Ce(t.data):t.data=Oe(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await ee(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(t=>t.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...te(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=re(e),i={...r.query,...t},s=Ie(i);return s===""?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],e==="KVP"?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:e==="RESTful"&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=re(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?te(e):{},i.forEach(s=>{e.hasOwnProperty(s)||Be.has(s)||(e[s]=r[s])}))}return e}};function He(e,t){return e.map(r=>{const i=new $;return i.read(r,t),i})}a([u()],h.prototype,"dimensionMap",void 0),a([u()],h.prototype,"layerMap",void 0),a([u({type:$,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],h.prototype,"activeLayer",null),a([C("service","activeLayer",["layers"])],h.prototype,"readActiveLayerFromService",null),a([C(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],h.prototype,"readActiveLayerFromItemOrWebDoc",null),a([Te(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:J},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],h.prototype,"writeActiveLayer",null),a([u({type:String,value:"",json:{write:!0}})],h.prototype,"copyright",void 0),a([u({type:["show","hide"]})],h.prototype,"listMode",void 0),a([u({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],h.prototype,"customParameters",void 0),a([C(["portal-item","web-document"],"customParameters")],h.prototype,"readCustomParameters",null),a([u({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],h.prototype,"customLayerParameters",void 0),a([u({type:R,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],h.prototype,"fullExtent",void 0),a([u({readOnly:!0})],h.prototype,"fullExtents",null),a([u({type:["WebTiledLayer"]})],h.prototype,"operationalLayerType",void 0),a([u()],h.prototype,"resourceInfo",void 0),a([u()],h.prototype,"serviceMode",void 0),a([C(["portal-item","web-document"],"serviceMode",["templateUrl"])],h.prototype,"readServiceMode",null),a([u({type:k.ofType($)})],h.prototype,"sublayers",void 0),a([C("service","sublayers",["layers"])],h.prototype,"readSublayersFromService",null),a([u({readOnly:!0})],h.prototype,"supportedSpatialReferences",null),a([u({readOnly:!0})],h.prototype,"tilemapCache",null),a([u({json:{read:{source:"title"}}})],h.prototype,"title",null),a([u({json:{read:!1},readOnly:!0,value:"wmts"})],h.prototype,"type",void 0),a([u({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],h.prototype,"url",null),a([u()],h.prototype,"version",void 0),h=a([A("esri.layers.WMTSLayer")],h);const Ge=h;export{Ge as default};
