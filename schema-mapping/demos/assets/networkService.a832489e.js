import{cS as O,e as t,d as i,cT as I,i as $,N as x,l as z,o as Q,h as B,M as W,cN as R,cP as G,p as Y,cO as E,aZ as q,A as X,r as F,s as H,cU as P,C as D,cV as C,a3 as ee,cQ as te}from"./main.e3a581a7.js";import{a as re}from"./GPMessage.f2571ba8.js";const se=e=>{if(!Array.isArray(e))return!1;const[r]=e;return typeof r=="number"||typeof r=="string"};class ie{constructor(r={}){this._options=r}toQueryParams(r){if(!r)return null;const s=r.toJSON(),n={};return Object.keys(s).forEach(o=>{const a=this._options[o];if(a){const p=typeof a!="boolean"&&a.name?a.name:o,u=typeof a!="boolean"&&a.getter?a.getter(s):s[o];u!=null&&(n[p]=se(u)?u.join(","):typeof u=="object"?JSON.stringify(u):u)}else n[o]=s[o]},this),n}}function ge(e){return new ie(e)}const oe=O()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});O()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"});O()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"});O()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"});O()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"});const ne=O()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"});O()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"});O()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"});const ae=O()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"});var J;let v=J=class extends x{constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new J(z({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};t([i({type:[Object],json:{write:!0}})],v.prototype,"attributeParameterValues",void 0),t([i({type:String,json:{write:!0}})],v.prototype,"description",void 0),t([i({type:String,json:{write:!0}})],v.prototype,"distanceAttributeName",void 0),t([i({type:String,json:{write:!0}})],v.prototype,"id",void 0),t([i({type:String,json:{write:!0}})],v.prototype,"impedanceAttributeName",void 0),t([i({type:String,json:{write:!0}})],v.prototype,"name",void 0),t([i({type:[String],json:{write:!0}})],v.prototype,"restrictionAttributeNames",void 0),t([i({type:Number,json:{write:!0}})],v.prototype,"simplificationTolerance",void 0),t([I(oe)],v.prototype,"simplificationToleranceUnits",void 0),t([i({type:String,json:{write:!0}})],v.prototype,"timeAttributeName",void 0),t([I(ae)],v.prototype,"type",void 0),t([i({type:Boolean,json:{write:!0}})],v.prototype,"useHierarchy",void 0),t([I(ne)],v.prototype,"uturnAtJunctions",void 0),v=J=t([$("esri.rest.support.TravelMode")],v);const le=v;let w=class extends x{constructor(e){super(e),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};t([i()],w.prototype,"currentVersion",void 0),t([i()],w.prototype,"defaultTravelMode",void 0),t([i()],w.prototype,"directionsLanguage",void 0),t([i()],w.prototype,"directionsSupportedLanguages",void 0),t([i()],w.prototype,"directionsTimeAttribute",void 0),t([i()],w.prototype,"hasZ",void 0),t([i()],w.prototype,"impedance",void 0),t([i()],w.prototype,"networkDataset",void 0),t([i({type:[le]})],w.prototype,"supportedTravelModes",void 0),w=t([$("esri.rest.support.NetworkServiceDescription")],w);const pe=w,V=new Q({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let k=class extends re{constructor(e){super(e),this.type=null}};t([i({type:String,json:{read:V.read,write:V.write}})],k.prototype,"type",void 0),k=t([$("esri.rest.support.NAMessage")],k);const ue=k;let j=class extends B{};t([i()],j.prototype,"events",void 0),t([i()],j.prototype,"strings",void 0),j=t([$("esri.rest.support.DirectionsFeature")],j);const _=j;let g=class extends G{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,r){var s;if(!e)return[];const n=(s=r.summary.envelope.spatialReference)!=null?s:r.spatialReference,o=n&&Y.fromJSON(n);return e.map(a=>{var p,u;const y=this._decompressGeometry(a.compressedGeometry),A=new E({...y,spatialReference:o}),l=(p=(u=a.events)==null?void 0:u.map(b=>{const{arriveTimeUTC:T,ETA:d,point:{x:c,y:h,z:f},strings:N}=b;return new _({geometry:new q({x:c,y:h,z:f,hasZ:f!==void 0,spatialReference:o}),attributes:{ETA:d,arriveTimeUTC:T},strings:N})}))!=null?p:[];return new _({attributes:a.attributes,events:l,geometry:A,strings:a.strings})})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:s})=>X(s)),r=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,r)}get strings(){return this.features.map(({strings:e})=>e)}_decompressGeometry(e){let r=0,s=0,n=0,o=0;const a=[];let p,u,y,A,l,b,T,d,c=0,h=0,f=0;if(l=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),l||(l=[]),parseInt(l[c],32)===0){c=2;const N=parseInt(l[c],32);c++,b=parseInt(l[c],32),c++,1&N&&(h=l.indexOf("|")+1,T=parseInt(l[h],32),h++),2&N&&(f=l.indexOf("|",h)+1,d=parseInt(l[f],32),f++)}else b=parseInt(l[c],32),c++;for(;c<l.length&&l[c]!=="|";){p=parseInt(l[c],32)+r,c++,r=p,u=parseInt(l[c],32)+s,c++,s=u;const N=[p/b,u/b];h&&(A=parseInt(l[h],32)+n,h++,n=A,N.push(A/T)),f&&(y=parseInt(l[f],32)+o,f++,o=y,N.push(y/d)),a.push(N)}return{paths:[a],hasZ:h>0,hasM:f>0}}_mergePolylinesToSinglePath(e,r){if(e.length===0)return new E({spatialReference:r});const s=[];for(const p of e)for(const u of p.paths)s.push(...u);const n=[];s.forEach((p,u)=>{u!==0&&p[0]===s[u-1][0]&&p[1]===s[u-1][1]||n.push(p)});const{hasM:o,hasZ:a}=e[0];return new E({hasM:o,hasZ:a,paths:[n],spatialReference:r})}};t([i({type:W,json:{read:{source:"summary.envelope"}}})],g.prototype,"extent",void 0),t([i()],g.prototype,"features",void 0),t([R("features")],g.prototype,"readFeatures",null),t([i()],g.prototype,"geometryType",void 0),t([i({readOnly:!0})],g.prototype,"mergedGeometry",null),t([i()],g.prototype,"routeId",void 0),t([i()],g.prototype,"routeName",void 0),t([i({value:null,readOnly:!0})],g.prototype,"strings",null),t([i({json:{read:{source:"summary.totalDriveTime"}}})],g.prototype,"totalDriveTime",void 0),t([i({json:{read:{source:"summary.totalLength"}}})],g.prototype,"totalLength",void 0),t([i({json:{read:{source:"summary.totalTime"}}})],g.prototype,"totalTime",void 0),g=t([$("esri.rest.support.DirectionsFeatureSet")],g);const ce=g;let S=class extends x{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};t([i({type:ce,json:{write:!0}})],S.prototype,"directions",void 0),t([i({type:B,json:{write:!0}})],S.prototype,"route",void 0),t([i({type:String,json:{write:!0}})],S.prototype,"routeName",void 0),t([i({type:[B],json:{write:!0}})],S.prototype,"stops",void 0),S=t([$("esri.rest.support.RouteResult")],S);const de=S;function L(e){return e&&G.fromJSON(e).features.map(r=>r)}let M=class extends x{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,r){return L(r.barriers||r.pointBarriers)}readPolylineBarriers(e){return L(e)}readPolygonBarriers(e){return L(e)}};t([i({aliasOf:"pointBarriers"})],M.prototype,"barriers",void 0),t([i({type:[ue]})],M.prototype,"messages",void 0),t([i({type:[B]})],M.prototype,"pointBarriers",void 0),t([R("pointBarriers",["barriers","pointBarriers"])],M.prototype,"readPointBarriers",null),t([i({type:[B]})],M.prototype,"polylineBarriers",void 0),t([R("polylineBarriers")],M.prototype,"readPolylineBarriers",null),t([i({type:[B]})],M.prototype,"polygonBarriers",void 0),t([R("polygonBarriers")],M.prototype,"readPolygonBarriers",null),t([i({type:[de]})],M.prototype,"routeResults",void 0),M=t([$("esri.rest.support.RouteResultsContainer")],M);const me=M;function Te(e,r,s,n){n[s]=[r.length,r.length+e.length],e.forEach(o=>{r.push(o.geometry)})}function Ne(e,r){for(let s=0;s<r.length;s++){const n=e[r[s]];if(n&&n.length)for(const o of n)o.z=void 0}console.log(`The remote Network Analysis service is powered by a network dataset which is not Z-aware.
Z-coordinates of the input geometry are ignored.`)}function Ae(e){const r=[],s=[],{directions:n=[],routes:{features:o=[],spatialReference:a=null}={},stops:{features:p=[],spatialReference:u=null}={},barriers:y,polygonBarriers:A,polylineBarriers:l,messages:b}=e.data,T="esri.tasks.RouteTask.NULL_ROUTE_NAME";let d,c,h=!0;const f=o&&a||p&&u||y&&y.spatialReference||A&&A.spatialReference||l&&l.spatialReference;n.forEach(m=>{r.push(d=m.routeName),s[d]={directions:m}}),o.forEach(m=>{r.indexOf(d=m.attributes.Name)===-1&&(r.push(d),s[d]={}),F(m.geometry)&&(m.geometry.spatialReference=f),s[d].route=m}),p.forEach(m=>{c=m.attributes,r.indexOf(d=c.RouteName||T)===-1&&(r.push(d),s[d]={}),d!==T&&(h=!1),F(m.geometry)&&(m.geometry.spatialReference=f),s[d].stops==null&&(s[d].stops=[]),s[d].stops.push(m)}),p.length>0&&h===!0&&(s[r[0]].stops=s[T].stops,delete s[T],r.splice(r.indexOf(T),1));const N=r.map(m=>(s[m].routeName=m===T?null:m,s[m]));return me.fromJSON({routeResults:N,pointBarriers:y,polygonBarriers:A,polylineBarriers:l,messages:b})}function we(e,r){for(let s=0;s<r.length;s++){const n=e[r[s]];if(n&&n.length){for(const o of n)if(F(o)&&o.hasZ)return!0}}return!1}async function Me(e,r,s){if(!e)throw new H("network-service:missing-url","Url to Network service is missing");const n=P({f:"json",token:r},s),{data:o}=await D(e,n);o.supportedTravelModes||(o.supportedTravelModes=[]);for(let y=0;y<o.supportedTravelModes.length;y++)o.supportedTravelModes[y].id||(o.supportedTravelModes[y].id=o.supportedTravelModes[y].itemId);const a=o.currentVersion>=10.4?he(e,r,s):ye(e,s),{defaultTravelMode:p,supportedTravelModes:u}=await a;return o.defaultTravelMode=p,o.supportedTravelModes=u,pe.fromJSON(o)}async function ye(e,r){var s,n;const o=P({f:"json"},r),{data:a}=await D(e.replace(/\/rest\/.*$/i,"/info"),o);if(!a||!a.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:p}=a,u=C(p)+"/sharing/rest/portals/self",{data:y}=await D(u,o),A=ee("helperServices.routingUtilities.url",y);if(!A)return{supportedTravelModes:[],defaultTravelMode:null};const l=te(p),b=/\/solve$/i.test(l.path)?"Route":/\/solveclosestfacility$/i.test(l.path)?"ClosestFacility":"ServiceAreas",T=P({f:"json",serviceName:b},r),d=C(A)+"/GetTravelModes/execute",c=await D(d,T),h=[];let f=null;if(c!=null&&(s=c.data)!=null&&(n=s.results)!=null&&n.length){const m=c.data.results;for(const U of m){var N;if(U.paramName==="supportedTravelModes"){if((N=U.value)!=null&&N.features){for(const{attributes:Z}of U.value.features)if(Z){const K=JSON.parse(Z.TravelMode);h.push(K)}}}else U.paramName==="defaultTravelMode"&&(f=U.value)}}return{supportedTravelModes:h,defaultTravelMode:f}}async function he(e,r,s){try{const n=P({f:"json",token:r},s),o=C(e)+"/retrieveTravelModes",{data:{supportedTravelModes:a,defaultTravelMode:p}}=await D(o,n);return{supportedTravelModes:a,defaultTravelMode:p}}catch(n){throw new H("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:n})}}export{ue as a,Me as b,ce as c,we as d,Ae as f,ge as o,Ne as p,Te as u};
