import{fZ as d,bb as c,hz as p,f,p as y,d7 as m,cw as g,ct as P,hA as C,hB as b,hC as G}from"./main.e0908dae.js";class A{constructor(t,e,s){this.uid=t,this.geometry=e,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}class v{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}d();c();function M(i,t){return t}function h(i,t,e,s){switch(e){case 0:return a(i,t+s,0);case 1:return i.originPosition==="lowerLeft"?a(i,t+s,1):x(i,t+s,1)}}function u(i,t,e,s){return e===2?a(i,t,2):h(i,t,e,s)}function T(i,t,e,s){return e===2?a(i,t,3):h(i,t,e,s)}function R(i,t,e,s){return e===3?a(i,t,3):u(i,t,e,s)}function a({translate:i,scale:t},e,s){return i[s]+e*t[s]}function x({translate:i,scale:t},e,s){return i[s]-e*t[s]}class k{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=M,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new v}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=p(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(!f(e))for(const s of t.features)e(s.geometry)}createSpatialReference(){return new y}addField(t,e){t.fields.push(m.fromJSON(e));const s=t.fields.map(r=>r.name);this.AttributesConstructor=function(){for(const r of s)this[r]=null}}addFeature(t,e){const s=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(s>0)for(const r in e.attributes){const o=e.attributes[r];typeof o=="string"&&o.length>s&&(e.attributes[r]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:s,queryGeometryType:r}=e,o=g(s.clone(),s,!1,!1,this.transform),l=P(o,r,!1,!1);let n=null;switch(r){case"esriGeometryPoint":n="point";break;case"esriGeometryPolygon":n="polygon";break;case"esriGeometryPolyline":n="polyline";break;case"esriGeometryMultipoint":n="multipoint"}l.type=n,t.queryGeometryType=r,t.queryGeometry=l}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,s,r)=>this.addCoordinatePoint(e,s,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,s,r)=>this.addCoordinatePolygon(e,s,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,s,r)=>this.addCoordinatePolyline(e,s,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,s,r)=>this.addCoordinateMultipoint(e,s,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;case"mesh":case"extent":break;default:C(t.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new A(b(),null,new this.AttributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce((e,s)=>e+s,0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0}addLength(t,e,s){this.lengths.length===0&&(this.toAddInCurrentPath=e),this.lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,s){switch(e=this.applyTransform(this.transform,e,s,0),s){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}transformPathLikeValue(t,e){let s=0;return e<=1&&(s=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,s)}addCoordinatePolyline(t,e,s){this.dehydratedAddPointsCoordinate(t.paths,e,s)}addCoordinatePolygon(t,e,s){this.dehydratedAddPointsCoordinate(t.rings,e,s)}addCoordinateMultipoint(t,e,s){s===0&&t.points.push([]);const r=this.transformPathLikeValue(e,s);t.points[t.points.length-1].push(r)}createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,s){s===0&&this.toAddInCurrentPath--==0&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const r=this.transformPathLikeValue(e,s),o=t[t.length-1];s===0&&o.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=r}deriveApplyTransform(t){const{hasZ:e,hasM:s}=t;return e&&s?R:e?u:s?T:h}}class Z{_parseFeatureQuery(t){const e=G(t.buffer,new k(t.options)),s={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map(r=>r.toJSON()):void 0};return Promise.resolve(s)}}function F(){return new Z}export{F as default};
