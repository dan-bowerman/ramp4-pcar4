import{s as y,aj as R,l as H,r as U,f as j,hZ as N,p as k,gJ as J,h_ as q}from"./main.79067ed0.js";import{w as G}from"./quat.a5de1b77.js";import{t as W,n as D}from"./vec3f32.9cc42d31.js";import{a as K,b as Q,d as ee}from"./PointCloudUniqueValueRenderer.3739f3df.js";function Y(){const t=new Float32Array(4);return t[3]=1,t}function te(t){const e=new Float32Array(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function ne(t,e,o,i){const s=new Float32Array(4);return s[0]=t,s[1]=e,s[2]=o,s[3]=i,s}function re(t,e){return new Float32Array(t,e,4)}Object.freeze({__proto__:null,create:Y,clone:te,fromValues:ne,createView:re});const h=!0,v={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function L(t,e,o){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,o+v.identifierOffset,v.identifierLength)),version:e.getUint16(o+v.versionOffset,h),checksum:e.getUint32(o+v.checksumOffset,h)}}const g={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function oe(t,e){return{sizeLo:t.getUint32(e+g.sizeLo,h),sizeHi:t.getUint32(e+g.sizeHi,h),minX:t.getFloat64(e+g.minX,h),minY:t.getFloat64(e+g.minY,h),minZ:t.getFloat64(e+g.minZ,h),maxX:t.getFloat64(e+g.maxX,h),maxY:t.getFloat64(e+g.maxY,h),maxZ:t.getFloat64(e+g.maxZ,h),errorX:t.getFloat64(e+g.errorX,h),errorY:t.getFloat64(e+g.errorY,h),errorZ:t.getFloat64(e+g.errorZ,h),count:t.getUint32(e+g.count,h),reserved:t.getUint32(e+g.reserved,h)}}function ie(t){const e=new DataView(t,0);let o=0;const{identifier:i,version:s}=L(t,e,o);if(o+=v.byteCount,i!=="LEPCC     ")throw new y("lepcc-decode-error","Bad identifier");if(s>1)throw new y("lepcc-decode-error","Unknown version");const n=oe(e,o);if(o+=g.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new y("lepcc-decode-error","Bad size");const a=new Float64Array(3*n.count),u=[],r=[],l=[],c=[];if(o=M(t,o,u),o=M(t,o,r),o=M(t,o,l),o=M(t,o,c),o!==t.byteLength)throw new y("lepcc-decode-error","Bad length");let f=0,d=0;for(let b=0;b<u.length;b++){d+=u[b];let p=0;for(let w=0;w<r[b];w++){p+=l[f];const A=c[f];a[3*f]=Math.min(n.maxX,n.minX+2*n.errorX*p),a[3*f+1]=Math.min(n.maxY,n.minY+2*n.errorY*d),a[3*f+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*A),f++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:a}}function M(t,e,o){const i=[];e=B(t,e,i);const s=[];for(let n=0;n<i.length;n++){s.length=0,e=B(t,e,s);for(let a=0;a<s.length;a++)o.push(s[a]+i[n])}return e}function B(t,e,o){const i=new DataView(t,e),s=i.getUint8(0),n=31&s,a=!!(32&s),u=(192&s)>>6;let r=0;if(u===0)r=i.getUint32(1,h),e+=5;else if(u===1)r=i.getUint16(1,h),e+=3;else{if(u!==2)throw new y("lepcc-decode-error","Bad count type");r=i.getUint8(1),e+=2}if(a)throw new y("lepcc-decode-error","LUT not implemented");const l=Math.ceil(r*n/8),c=new Uint8Array(t,e,l);let f=0,d=0,b=0;const p=-1>>>32-n;for(let w=0;w<r;w++){for(;d<n;)f|=c[b]<<d,d+=8,b+=1;o[w]=f&p,f>>>=n,d-=n,d+n>32&&(f|=c[b-1]>>8-d)}return e+b}const m={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function ae(t,e){return{sizeLo:t.getUint32(e+m.sizeLo,h),sizeHi:t.getUint32(e+m.sizeHi,h),count:t.getUint32(e+m.count,h),colorMapCount:t.getUint16(e+m.colorMapCount,h),lookupMethod:t.getUint8(e+m.lookupMethod),compressionMethod:t.getUint8(e+m.compressionMethod)}}function se(t){const e=new DataView(t,0);let o=0;const{identifier:i,version:s}=L(t,e,o);if(o+=v.byteCount,i!=="ClusterRGB")throw new y("lepcc-decode-error","Bad identifier");if(s>1)throw new y("lepcc-decode-error","Unknown version");const n=ae(e,o);if(o+=m.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new y("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(3*n.colorMapCount+n.count+o!==t.byteLength||n.colorMapCount>256)throw new y("lepcc-decode-error","Bad count");const a=new Uint8Array(t,o,3*n.colorMapCount),u=new Uint8Array(t,o+3*n.colorMapCount,n.count),r=new Uint8Array(3*n.count);for(let l=0;l<n.count;l++){const c=u[l];r[3*l]=a[3*c],r[3*l+1]=a[3*c+1],r[3*l+2]=a[3*c+2]}return r}if(n.lookupMethod===0&&n.compressionMethod===0){if(3*n.count+o!==t.byteLength||n.colorMapCount!==0)throw new y("lepcc-decode-error","Bad count");return new Uint8Array(t,o).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(o+3!==t.byteLength||n.colorMapCount!==1)throw new y("lepcc-decode-error","Bad count");const a=e.getUint8(o),u=e.getUint8(o+1),r=e.getUint8(o+2),l=new Uint8Array(3*n.count);for(let c=0;c<n.count;c++)l[3*c]=a,l[3*c+1]=u,l[3*c+2]=r;return l}throw new y("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const C={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function ce(t,e){return{sizeLo:t.getUint32(e+C.sizeLo,h),sizeHi:t.getUint32(e+C.sizeHi,h),count:t.getUint32(e+C.count,h),scaleFactor:t.getUint16(e+C.scaleFactor,h),bitsPerPoint:t.getUint8(e+C.bitsPerPoint),reserved:t.getUint8(e+C.reserved)}}function ue(t){const e=new DataView(t,0);let o=0;const{identifier:i,version:s}=L(t,e,o);if(o+=v.byteCount,i!=="Intensity ")throw new y("lepcc-decode-error","Bad identifier");if(s>1)throw new y("lepcc-decode-error","Unknown version");const n=ce(e,o);if(o+=C.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new y("lepcc-decode-error","Bad size");const a=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+o!==t.byteLength)throw new y("lepcc-decode-error","Bad size");const u=new Uint8Array(t,o,n.count);for(let r=0;r<n.count;r++)a[r]=u[r]*n.scaleFactor}else if(n.bitsPerPoint===16){if(2*n.count+o!==t.byteLength)throw new y("lepcc-decode-error","Bad size");const u=new Uint16Array(t,o,n.count);for(let r=0;r<n.count;r++)a[r]=u[r]*n.scaleFactor}else{const u=[];if(B(t,o,u)!==t.byteLength)throw new y("lepcc-decode-error","Bad size");for(let r=0;r<n.count;r++)a[r]=u[r]*n.scaleFactor}return a}const S=R.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function le(t,e,o){let i="",s=0;for(;s<o;){const n=t[e+s];if(n<128)i+=String.fromCharCode(n),s++;else if(n>=192&&n<224){if(s+1>=o)throw new y("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&n)<<6|63&t[e+s+1];i+=String.fromCharCode(a),s+=2}else if(n>=224&&n<240){if(s+2>=o)throw new y("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&n)<<12|(63&t[e+s+1])<<6|63&t[e+s+2];i+=String.fromCharCode(a),s+=3}else{if(!(n>=240&&n<248))throw new y("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(s+3>=o)throw new y("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&n)<<18|(63&t[e+s+1])<<12|(63&t[e+s+2])<<6|63&t[e+s+3];if(a>=65536){const u=55296+(a-65536>>10),r=56320+(1023&a);i+=String.fromCharCode(u,r)}else i+=String.fromCharCode(a);s+=4}}}return i}function Z(t,e){const o={byteOffset:0,byteCount:0,fields:Object.create(null)};let i=0;for(let s=0;s<e.length;s++){const n=e[s],a=n.valueType||n.type,u=pe[a];o.fields[n.property]=u(t,i),i+=z[a].BYTES_PER_ELEMENT}return o.byteCount=i,o}function fe(t,e,o){const i=[];let s,n,a=0;for(n=0;n<t;n+=1){if(s=e[n],s>0){if(i.push(le(o,a,s-1)),o[a+s-1]!==0)throw new y("string-array-error","Invalid string array: missing null termination.")}else i.push(null);a+=s}return i}function x(t,e){return new z[e.valueType](t,e.byteOffset,e.count*e.valuesPerElement)}function de(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}function be(t,e,o){const i=e.header!=null?Z(t,e.header):{byteOffset:0,byteCount:0,fields:{count:o}},s={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let n=i.byteCount;for(let a=0;a<e.ordering.length;a++){const u=e.ordering[a],r=H(e[u]);if(r.count=i.fields.count,r.valueType==="String"){if(r.byteOffset=n,r.byteCount=i.fields[u+"ByteCount"],r.encoding!=="UTF-8")throw new y("unsupported-encoding","Unsupported String encoding.",{encoding:r.encoding})}else{if(!_(r.valueType))throw new y("unsupported-value-type","Unsupported binary valueType",{valueType:r.valueType});{const l=O(r.valueType);n+=n%l!=0?l-n%l:0,r.byteOffset=n,r.byteCount=l*r.valuesPerElement*r.count}}n+=r.byteCount,s.entries[u]=r}return s.byteCount=n-s.byteOffset,s}function X(t,e,o){if(e!==t&&S.error(`Invalid ${o} buffer size
 expected: ${t}, actual: ${e})`),e<t)throw new y("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function ye(t,e){const o=Z(t,e&&e.header);let i=o.byteCount;const s={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},n=o.fields,a=n.vertexCount!=null?n.vertexCount:n.count;for(const l of e.ordering){if(!e.vertexAttributes[l])continue;const c={...e.vertexAttributes[l],byteOffset:i,count:a},f=P[l]?P[l]:"_"+l;s.vertexAttributes[f]=c,i+=O(c.valueType)*c.valuesPerElement*a}const u=n.faceCount;if(e.faces&&u){s.faces={};for(const l of e.ordering){if(!e.faces[l])continue;const c={...e.faces[l],byteOffset:i,count:u};s.faces[l]=c,i+=O(c.valueType)*c.valuesPerElement*u}}const r=n.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&r){s.featureAttributes={};for(const l of e.featureAttributeOrder){if(!e.featureAttributes[l])continue;const c={...e.featureAttributes[l],byteOffset:i,count:r};s.featureAttributes[l]=c,i+=(c.valueType==="UInt64"?8:O(c.valueType))*c.valuesPerElement*r}}return X(i,t.byteLength,"geometry"),s.byteCount=i-s.byteOffset,s}const P={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function he(t,e,o){if(t.encoding==="lepcc-rgb")return se(e);if(t.encoding==="lepcc-intensity")return ue(e);if(t.encoding!=null&&t.encoding!=="")throw new y("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(S.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),t.ordering[0]==="ObjectIds"&&t.hasOwnProperty("objectIds")&&(S.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const i=be(e,t,o);X(i.byteOffset+i.byteCount,e.byteLength,"attribute");const s=i.entries.attributeValues||i.entries.objectIds;if(s){if(s.valueType==="String"){const n=i.entries.attributeByteCounts,a=x(e,n),u=de(e,s);return fe(n.count,a,u)}return x(e,s)}throw new y("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const z={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},pe={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function _(t){return z.hasOwnProperty(t)}function O(t){return _(t)?z[t].BYTES_PER_ELEMENT:0}function ge(t,e,o,i){const{rendererJSON:s,isRGBRenderer:n}=t;let a=null,u=null;if(e&&n)a=e;else if(e&&s.type==="pointCloudUniqueValueRenderer"){u=K.fromJSON(s);const r=u.colorUniqueValueInfos;a=new Uint8Array(3*i);const l=$(u.fieldTransformType);for(let c=0;c<i;c++){const f=(l?l(e[c]):e[c])+"";for(let d=0;d<r.length;d++)if(r[d].values.indexOf(f)>=0){a[3*c]=r[d].color.r,a[3*c+1]=r[d].color.g,a[3*c+2]=r[d].color.b;break}}}else if(e&&s.type==="pointCloudStretchRenderer"){u=Q.fromJSON(s);const r=u.stops;a=new Uint8Array(3*i);const l=$(u.fieldTransformType);for(let c=0;c<i;c++){const f=l?l(e[c]):e[c],d=r.length-1;if(f<r[0].value)a[3*c]=r[0].color.r,a[3*c+1]=r[0].color.g,a[3*c+2]=r[0].color.b;else if(f>=r[d].value)a[3*c]=r[d].color.r,a[3*c+1]=r[d].color.g,a[3*c+2]=r[d].color.b;else for(let b=1;b<r.length;b++)if(f<r[b].value){const p=(f-r[b-1].value)/(r[b].value-r[b-1].value);a[3*c]=r[b].color.r*p+r[b-1].color.r*(1-p),a[3*c+1]=r[b].color.g*p+r[b-1].color.g*(1-p),a[3*c+2]=r[b].color.b*p+r[b-1].color.b*(1-p);break}}}else if(e&&s.type==="pointCloudClassBreaksRenderer"){u=ee.fromJSON(s);const r=u.colorClassBreakInfos;a=new Uint8Array(3*i);const l=$(u.fieldTransformType);for(let c=0;c<i;c++){const f=l?l(e[c]):e[c];for(let d=0;d<r.length;d++)if(f>=r[d].minValue&&f<=r[d].maxValue){a[3*c]=r[d].color.r,a[3*c+1]=r[d].color.g,a[3*c+2]=r[d].color.b;break}}}else{a=new Uint8Array(3*i);for(let r=0;r<a.length;r++)a[r]=255}if(o&&u&&u.colorModulation){const r=u.colorModulation.minValue,l=u.colorModulation.maxValue,c=.3;for(let f=0;f<i;f++){const d=o[f],b=d>=l?1:d<=r?c:c+(1-c)*(d-r)/(l-r);a[3*f]=b*a[3*f],a[3*f+1]=b*a[3*f+1],a[3*f+2]=b*a[3*f+2]}}return a}function we(t,e){if(t.encoding==null||t.encoding===""){const o=ye(e,t);if(j(o.vertexAttributes.position))return;const i=x(e,o.vertexAttributes.position),s=o.header.fields,n=[s.offsetX,s.offsetY,s.offsetZ],a=[s.scaleX,s.scaleY,s.scaleZ],u=i.length/3,r=new Float64Array(3*u);for(let l=0;l<u;l++)r[3*l]=i[3*l]*a[0]+n[0],r[3*l+1]=i[3*l+1]*a[1]+n[1],r[3*l+2]=i[3*l+2]*a[2]+n[2];return r}if(t.encoding==="lepcc-xyz")return ie(e).result}function F(t,e,o){return U(t)&&t.attributeInfo.useElevation?me(e,o):U(t)?he(t.attributeInfo.storageInfo,t.buffer,o):null}function me(t,e){const o=new Float64Array(e);for(let i=0;i<e;i++)o[i]=t[3*i+2];return o}function Ce(t,e,o,i,s){const n=t.length/3;let a=0;for(let u=0;u<n;u++){let r=!0;for(let l=0;l<i.length&&r;l++){const{filterJSON:c}=i[l],f=s[l].values[u];switch(c.type){case"pointCloudValueFilter":{const d=c.mode==="exclude";c.values.indexOf(f)!==-1===d&&(r=!1);break}case"pointCloudBitfieldFilter":{const d=V(c.requiredSetBits),b=V(c.requiredClearBits);(f&d)===d&&(f&b)==0||(r=!1);break}case"pointCloudReturnFilter":{const d=15&f,b=f>>>4&15,p=b>1,w=d===1,A=d===b;let T=!1;for(const I of c.includedReturns)if(I==="last"&&A||I==="firstOfMany"&&w&&p||I==="lastOfMany"&&A&&p||I==="single"&&!p){T=!0;break}T||(r=!1);break}}}r&&(o[a]=u,t[3*a]=t[3*u],t[3*a+1]=t[3*u+1],t[3*a+2]=t[3*u+2],e[3*a]=e[3*u],e[3*a+1]=e[3*u+1],e[3*a+2]=e[3*u+2],a++)}return a}function $(t){return t==null||t==="none"?null:t==="low-four-bit"?e=>15&e:t==="high-four-bit"?e=>(240&e)>>4:t==="absolute-value"?e=>Math.abs(e):t==="modulo-ten"?e=>e%10:null}function V(t){let e=0;for(const o of t||[])e|=1<<o;return e}class ve{transform(e){const o=this._transform(e),i=[o.points.buffer,o.rgb.buffer];U(o.pointIdFilterMap)&&i.push(o.pointIdFilterMap.buffer);for(const s of o.attributes)"buffer"in s.values&&N(s.values.buffer)&&s.values.buffer!==o.rgb.buffer&&i.push(s.values.buffer);return Promise.resolve({result:o,transferList:i})}_transform(e){const o=we(e.schema,e.geometryBuffer);let i=o.length/3,s=null;const n=[],a=F(e.primaryAttributeData,o,i);U(e.primaryAttributeData)&&a&&n.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:a});const u=F(e.modulationAttributeData,o,i);U(e.modulationAttributeData)&&u&&n.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:u});let r=ge(e.rendererInfo,a,u,i);if(e.filterInfo&&e.filterInfo.length>0&&U(e.filterAttributesData)){const c=e.filterAttributesData.map(f=>{const d=F(f,o,i),b={attributeInfo:f.attributeInfo,values:d};return n.push(b),b});s=new Uint32Array(i),i=Ce(o,r,s,e.filterInfo,c)}for(const c of e.userAttributesData){const f=F(c,o,i);n.push({attributeInfo:c.attributeInfo,values:f})}3*i<r.length&&(r=new Uint8Array(r.buffer.slice(0,3*i))),this._applyElevationOffsetInPlace(o,i,e.elevationOffset);const l=this._transformCoordinates(o,i,e.obb,k.fromJSON(e.inSR),k.fromJSON(e.outSR));return{obb:e.obb,points:l,rgb:r,attributes:n,pointIdFilterMap:s}}_transformCoordinates(e,o,i,s,n){if(!J(e,s,0,e,n,0,o))throw Error("Can't reproject");const a=W(i.center[0],i.center[1],i.center[2]),u=D(),r=D();G(E,i.quaternion);const l=new Float32Array(3*o);for(let c=0;c<o;c++)u[0]=e[3*c]-a[0],u[1]=e[3*c+1]-a[1],u[2]=e[3*c+2]-a[2],q(r,u,E),i.halfSize[0]=Math.max(i.halfSize[0],Math.abs(r[0])),i.halfSize[1]=Math.max(i.halfSize[1],Math.abs(r[1])),i.halfSize[2]=Math.max(i.halfSize[2],Math.abs(r[2])),l[3*c]=u[0],l[3*c+1]=u[1],l[3*c+2]=u[2];return l}_applyElevationOffsetInPlace(e,o,i){if(i!==0)for(let s=0;s<o;s++)e[3*s+2]+=i}}const E=Y();function Fe(){return new ve}export{Fe as default};
