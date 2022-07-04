import{jp as M,jq as j,jr as S,d4 as x,hr as c,p as g,M as T,bb as B,C as h,s as n,e as a,d as r,i as w,o as U,c_ as k,d0 as R,r as v,f as m}from"./main.ec877ec7.js";const d={id:"0/0/0",level:0,row:0,col:0,extent:null};let p=class extends M(j(S(x))){constructor(){super(...arguments),this.tileInfo=c.create({spatialReference:g.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new T(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,g.WebMercator),this.spatialReference=g.WebMercator}getTileBounds(e,t,s,i){const l=i||B();return d.level=e,d.row=t,d.col=s,d.extent=l,this.tileInfo.updateTileInfo(d),d.extent=null,l}fetchTile(e,t,s,i={}){const{signal:l}=i,u=this.getTileUrl(e,t,s),y={responseType:"image",signal:l,query:{...this.refreshParameters}};return h(u,y).then(f=>f.data)}getTileUrl(){throw new n("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};a([r({type:c})],p.prototype,"tileInfo",void 0),a([r({type:["show","hide"]})],p.prototype,"listMode",void 0),a([r({readOnly:!0,value:"base-tile"})],p.prototype,"type",void 0),a([r({nonNullable:!0})],p.prototype,"fullExtent",void 0),a([r()],p.prototype,"spatialReference",void 0),p=a([w("esri.layers.BaseTileLayer")],p);const P=p,b=new U({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),_="https://dev.virtualearth.net";let o=class extends M(k(R(P))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new c({size:[256,256],dpi:96,origin:{x:-20037508342787e-6,y:20037508342787e-6,spatialReference:g.WebMercator},spatialReference:g.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763795777e-6},{level:2,resolution:39135.7584820001,scale:147914381897889e-6},{level:3,resolution:19567.8792409999,scale:73957190948944e-6},{level:4,resolution:9783.93962049996,scale:36978595474472e-6},{level:5,resolution:4891.96981024998,scale:18489297737236e-6},{level:6,resolution:2445.98490512499,scale:9244648868618e-6},{level:7,resolution:1222.99245256249,scale:4622324434309e-6},{level:8,resolution:611.49622628138,scale:2311162217155e-6},{level:9,resolution:305.748113140558,scale:1155581108577e-6},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return v(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return b.toJSON(this.style)}get bingLogo(){return v(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Promise.reject(new n("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,s){if(!this.loaded||m(this.bingMetadata))return null;const i=this.bingMetadata.resourceSets[0].resources[0],l=i.imageUrlSubdomains[t%i.imageUrlSubdomains.length],u=this._getQuadKey(e,t,s);return i.imageUrl.replace("{subdomain}",l).replace("{quadkey}",u)}async fetchAttributionData(){return this.load().then(()=>m(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map(t=>({zoomMin:t.zoomMin,zoomMax:t.zoomMax,score:1,bbox:[t.bbox[0],t.bbox[1],t.bbox[2],t.bbox[3]]}))}))})}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return h(`${_}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(t=>{const s=t.data;if(s.statusCode!==200)throw new n("bingmapslayer:getmetadata",s.statusDescription);if(this.bingMetadata=s,this.bingMetadata.resourceSets.length===0)throw new n("bingmapslayer:getmetadata","no bing resourcesets");if(this.bingMetadata.resourceSets[0].resources.length===0)throw new n("bingmapslayer:getmetadata","no bing resources")}).catch(t=>{throw new n("bingmapslayer:getmetadata",t.message)})}_getPortalBingKey(){return h(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new n("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new n("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(e,t,s){let i="";for(let l=e;l>0;l--){let u=0;const y=1<<l-1;(s&y)!=0&&(u+=1),(t&y)!=0&&(u+=2),i+=u.toString()}return i}};a([r({json:{read:!1,write:!1},value:null})],o.prototype,"bingMetadata",null),a([r({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],o.prototype,"type",void 0),a([r({type:c})],o.prototype,"tileInfo",void 0),a([r({type:String,readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"copyright",null),a([r({type:String,json:{write:!1,read:!1}})],o.prototype,"key",void 0),a([r({type:b.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:b.read}}})],o.prototype,"style",void 0),a([r({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],o.prototype,"operationalLayerType",null),a([r({type:String,json:{write:!1,read:!1}})],o.prototype,"culture",void 0),a([r({type:String,json:{write:!1,read:!1}})],o.prototype,"region",void 0),a([r({type:String,json:{write:!0,read:!0}})],o.prototype,"portalUrl",void 0),a([r({type:Boolean,json:{write:!1,read:!1}})],o.prototype,"hasAttributionData",void 0),a([r({type:String,readOnly:!0})],o.prototype,"bingLogo",null),o=a([w("esri.layers.BingMapsLayer")],o);const L=o;export{L as default};
