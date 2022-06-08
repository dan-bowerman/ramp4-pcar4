import{fW as te,s as S,f as N,c3 as ye,c4 as q,r as G,cb as be,fX as se,fN as ge,fY as Te,fZ as xe,f_ as Re,cz as Qe,f$ as ie,g0 as ae,l as $,g1 as Ae,g2 as ve,g3 as ze,cJ as Y,v as re,u as ne,g4 as oe,g5 as Ve,bg as Ee,bU as le,bh as Ce,bj as $e,ba as De}from"./main.c8cfc77c.js";import{WhereClause as Pe}from"./WhereClause.ba641359.js";import{g as k,M as Me,f as W}from"./projectionSupport.10f156a3.js";import{t as Ne}from"./QueryEngineCapabilities.83e56447.js";import{s as ue}from"./quantizationUtils.640d33bc.js";import{T as Oe,s as je,m as ce,c as he,V as qe,g as Ge,h as ke,y as Be,D as Ze,z as Le,f as Ue,d as He}from"./utils.abc67ffa.js";import{z as O,n as Je,J as X,O as de,t as Ye,P as D,U as P,v as fe,I as me,a as pe}from"./spatialQuerySupport.aabbc99f.js";class We{constructor(e,t){this._cache=new te(e),this._invalidCache=new te(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(this._invalidCache.get(s)!==void 0)return null;try{const a=Pe.create(e,t);return this._cache.put(s,a),a}catch{return this._invalidCache.put(s,null),null}}}const K=new We(50,500),z="feature-store:unsupported-query",_e=" as ",Xe=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function Ke(y,e){if(!e)return!0;const t=K.get(e,y);if(!t)throw new S(z,"invalid SQL expression",{where:e});if(!t.isStandardized)throw new S(z,"where clause is not standard",{where:e});return v(y,t.fieldNames,"where clause contains missing fields"),!0}function et(y,e,t){if(!e)return!0;const s=K.get(e,y);if(!s)throw new S(z,"invalid SQL expression",{having:e});if(!s.isAggregate)throw new S(z,"having does not contain a valid aggregate function",{having:e});const i=s.fieldNames;if(v(y,i,"having contains missing fields"),!s.getExpressions().every(a=>{const{aggregateType:r,field:o}=a,n=y.has(o)&&y.get(o).name;return t.some(l=>{const{onStatisticField:u,statisticType:c}=l;return(y.has(u)&&y.get(u).name)===n&&c.toLowerCase().trim()===r})}))throw new S(z,"expressions in having should also exist in outStatistics",{having:e});return!0}function M(y,e){return y?K.get(y,e):null}function v(y,e,t,s=!0){const i=[];for(const a of e)if(a!=="*"&&!y.has(a))if(s){const r=we(a);try{const o=M(r,y);if(!o)throw new S(z,"invalid SQL expression",{where:r});if(!o.isStandardized)throw new S(z,"expression is not standard",{clause:o});v(y,o.fieldNames,"expression contains missing fields")}catch(o){const n=o&&o.details;if(n&&(n.clause||n.where))throw o;n&&n.missingFields?i.push(...n.missingFields):i.push(a)}}else i.push(a);if(i.length)throw new S(z,t,{missingFields:i})}function we(y){return y.split(_e)[0]}function tt(y){return y.split(_e)[1]}function st(y,e){const t=e.get(y);return!!t&&!Xe.has(t.type)}class L{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&i.indexOf("*")===-1){this.outFields=i;let a=0;for(const r of i){const o=we(r),n=this.fieldsIndex.get(o),l=n?null:M(o,s),u=n?n.name:tt(r)||"FIELD_EXP_"+a++;this._fieldDataCache.set(r,{alias:u,clause:l})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=this._fieldDataCache.get(i).clause:s||(a=M(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const s=t.normalizationType,i=t.normalizationTotal;let a=this.getFieldValue(e,t.field,t.fieldInfo);if(s&&Number.isFinite(a)){const r=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);a=Oe(a,s,r,i)}return a}getExpressionValue(e,t,s){const i={attributes:this.featureAdapter.getAttributes(e)},a=s.createExecContext(i,t.viewInfo);return s.executeFunction(t.compiledFunc,a)}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:M(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:M(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:a,clause:r}=this._fieldDataCache.get(i);s[a]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,a)}return s}_processAttributesForDistinctValues(e){if(N(e)||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const r of t){const{alias:o}=this._fieldDataCache.get(r);s.push(e[o])}else for(const r in e)s.push(e[r]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let a=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++a),a>1?null:e}}class F{constructor(e,t,s){this.items=e,this.queryGeometry=t,this.definitionExpression=s.definitionExpression,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.fieldsIndex=s.fieldsIndex,this.timeInfo=s.timeInfo,this.featureAdapter=s.featureAdapter,this.aggregateAdapter=s.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(e){const t=new L(e,this.featureAdapter,this.fieldsIndex);if(!e.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:s,having:i}=e;if(!s?.length)return 1;const a=new Map,r=new Map,o=new Set,n=e.outStatistics;for(const l of n){const{statisticType:u}=l,c=u!=="exceedslimit"?l.onStatisticField:void 0;if(!r.has(c)){const m=[];for(const h of s){const _=this._getAttributeValues(t,h,a);m.push(_)}r.set(c,this._calculateUniqueValues(m,t.returnDistinctValues))}const f=r.get(c);for(const m in f){const{data:h,items:_}=f[m],d=h.join(",");i&&!t.validateItems(_,i)||o.add(d)}}return o.size}createQueryResponse(e){let t;return e.outStatistics?t=e.outStatistics.some(s=>s.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(e):this._createStatisticsQueryResponse(e):t=this._createFeatureQueryResponse(e),e.returnQueryGeometry&&(ye(e.outSR)&&!q(this.queryGeometry.spatialReference,e.outSR)?t.queryGeometry=O({spatialReference:e.outSR,...k(this.queryGeometry,this.queryGeometry.spatialReference,e.outSR)}):t.queryGeometry=O({spatialReference:e.outSR,...this.queryGeometry})),t}createSnappingResponse(e,t){const s=this.featureAdapter,i=at(this.hasZ,this.hasM),{x:a,y:r}=e.point,o=typeof e.distance=="number"?e.distance:e.distance.x,n=typeof e.distance=="number"?e.distance:e.distance.y,l={candidates:[]},u=this.geometryType==="esriGeometryPolygon",c=this.getPointCreator(e.point,this.spatialReference,t);for(const f of this.items){const m=s.getGeometry(f);if(N(m))continue;const{coords:h,lengths:_}=m;if(1&e.types){let d=0;for(let p=0;p<_.length;p++){const I=_[p];for(let w=0;w<I;w++,d+=i){const b=h[d],x=h[d+1];if(w!==I-1){const g=h[d+i],T=h[d+i+1],{x:B,y:Q}=it(a,r,b,x,g,T),V=(a-B)/o,C=(r-Q)/n,E=V*V+C*C;E<=1&&l.candidates.push({type:"edge",objectId:s.getObjectId(f),distance:Math.sqrt(E),target:c(B,Q),start:c(b,x),end:c(g,T)})}}}}if(2&e.types){const d=u?h.length-i:h.length;for(let p=0;p<d;p+=i){const I=h[p],w=h[p+1],b=(a-I)/o,x=(r-w)/n,g=b*b+x*x;g<=1&&l.candidates.push({type:"vertex",objectId:s.getObjectId(f),distance:Math.sqrt(g),target:c(I,w)})}}}return l.candidates.sort((f,m)=>f.distance-m.distance),l}getPointCreator(e,t,s){const i=G(s)&&!q(t,s)?a=>k(a,t,s):a=>a;return e.z!=null&&e.m!=null?(a,r)=>i({x:a,y:r,z:e.z,m:e.m}):e.z!=null?(a,r)=>i({x:a,y:r,z:e.z}):e.m!=null?(a,r)=>i({x:a,y:r,m:e.m}):(a,r)=>i({x:a,y:r})}executeAttributesQuery(e){const t=M(e.where,this.fieldsIndex);if(!t)return Promise.resolve(this);if(t.isStandardized){let s=0;const i=[];for(const r of this.items)t.testFeature(r,this.featureAdapter)&&(i[s++]=r);const a=new F(i,this.queryGeometry,this);return a.definitionExpression=e.where,Promise.resolve(a)}return Promise.reject(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(e){if(!e.aggregateIds||!e.aggregateIds.length||N(this.aggregateAdapter))return Promise.resolve(this);const t=new Set;for(const i of e.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(a=>t.add(a));const s=this.featureAdapter.getObjectId;return Promise.resolve(new F(this.items.filter(i=>t.has(s(i))),this.queryGeometry,this))}executeObjectIdsQuery(e){if(!e.objectIds||!e.objectIds.length)return Promise.resolve(this);const t=new Set(e.objectIds),s=this.featureAdapter.getObjectId;return Promise.resolve(new F(this.items.filter(i=>t.has(s(i))),this.queryGeometry,this))}executeTimeQuery(e){const t=Je(this.timeInfo,e.timeExtent,this.featureAdapter);if(!G(t))return Promise.resolve(this);const s=this.items.filter(t);return Promise.resolve(new F(s,this.queryGeometry,this))}filterLatest(){const{trackIdField:e,startTimeField:t,endTimeField:s}=this.timeInfo,i=s||t,a=new Map,r=this.featureAdapter.getAttribute;for(const n of this.items){const l=r(n,e),u=r(n,i),c=a.get(l);(!c||u>r(c,i))&&a.set(l,n)}const o=Array.from(a.values());return Promise.resolve(new F(o,this.queryGeometry,this))}async project(e){if(!e||q(this.spatialReference,e))return this;const t=this.featureAdapter,s=(await Me(this.items.map(i=>X(this.geometryType,this.hasZ,this.hasM,t.getGeometry(i))),this.spatialReference,e)).map((i,a)=>t.cloneWithGeometry(this.items[a],be(i,this.hasZ,this.hasM)));return new F(s,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:e,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}async createSummaryStatisticsResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,minValue:n,maxValue:l,scale:u}=t,c=this.fieldsIndex.isDateField(s),f=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,scale:u}),m=je({normalizationType:r,normalizationField:a,minValue:n,maxValue:l}),h=this.fieldsIndex.get(s),_={value:.5,fieldType:h?.type},d=se(h)?ce({values:f,supportsNullCount:m,percentileParams:_}):he({values:f,minValue:n,maxValue:l,useSampleStdDev:!r,supportsNullCount:m,percentileParams:_});return qe(d,c)}async createUniqueValuesResponse(e,t){const{field:s,valueExpression:i,domain:a,returnAllCodedValues:r,scale:o}=t,n=await this._getDataValues(e,{field:s,valueExpression:i,scale:o}),l=Ge(n);return ke(l,a,r)}async createClassBreaksResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:f,scale:m}=t,h=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,scale:m}),_=Be(h,{field:s,normalizationField:a,normalizationType:r,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:f});return Ze(_,n)}async createHistogramResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:f,scale:m}=t,h=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:o,scale:m});return Le(h,{field:s,normalizationField:a,normalizationType:r,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:f})}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const a=i.split(" "),r=a[0],o=this.fieldsIndex.get(r),n=a[1]&&a[1].toLowerCase()==="desc",l=Ue(o?.type,n);e.sort((u,c)=>{const f=s(u,r,o),m=s(c,r,o);return l(f,m)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:o}=this,{outFields:n,outSR:l,quantizationParameters:u,resultRecordCount:c,resultOffset:f,returnZ:m,returnM:h}=e,_=c!=null&&t.length>(f||0)+c,d=n&&(n.includes("*")?[...this.fieldsIndex.fields]:n.map(p=>this.fieldsIndex.get(p)));return{exceededTransferLimit:_,features:this._createFeatures(e,t),fields:d,geometryType:s,hasM:i&&h,hasZ:a&&m,objectIdFieldName:r,spatialReference:O(l||o),transform:u&&ue(u)||null}}_createFeatures(e,t){const s=new L(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:o,returnGeometry:n,returnCentroid:l,maxAllowableOffset:u,resultOffset:c,resultRecordCount:f,returnZ:m=!1,returnM:h=!1}=e,_=a&&m,d=i&&h;let p=[],I=0;const w=[...t];if(this._sortFeatures(w,r,(x,g,T)=>s.getFieldValue(x,g,T)),n||l){const x=ue(o);if(n&&!l)for(const g of w)p[I++]={attributes:s.getAttributes(g),geometry:X(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),u,x,_,d)};else if(!n&&l)for(const g of w)p[I++]={attributes:s.getAttributes(g),centroid:de(this,this.featureAdapter.getCentroid(g,this),x)};else for(const g of w)p[I++]={attributes:s.getAttributes(g),centroid:de(this,this.featureAdapter.getCentroid(g,this),x),geometry:X(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),u,x,_,d)}}else for(const x of w){const g=s.getAttributes(x);g&&(p[I++]={attributes:g})}const b=c||0;if(f!=null){const x=b+f;p=p.slice(b,Math.min(p.length,x))}return p}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics)if(r.statisticType==="exceedslimit"){s=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,i=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const r=this.hasZ?this.hasM?4:3:this.hasM?3:2,o=this.featureAdapter;t=this.items.reduce((n,l)=>{const u=o.getGeometry(l);return n+(G(u)&&u.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}_createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,o=new Map,n=new L(e,this.featureAdapter,this.fieldsIndex),l=e.outStatistics,{groupByFieldsForStatistics:u,having:c,orderByFields:f}=e,m=u&&u.length,h=!!m,_=h&&u[0],d=h&&!this.fieldsIndex.get(_);for(const I of l){const{outStatisticFieldName:w,statisticType:b}=I,x=I,g=b!=="exceedslimit"?I.onStatisticField:void 0,T=b==="percentile_disc"||b==="percentile_cont",B=h&&m===1&&(g===_||d)&&b==="count";if(h){if(!r.has(g)){const V=[];for(const C of u){const E=this._getAttributeValues(n,C,i);V.push(E)}r.set(g,this._calculateUniqueValues(V,n.returnDistinctValues))}const Q=r.get(g);for(const V in Q){const{count:C,data:E,items:Ie,itemPositions:Fe}=Q[V],ee=E.join(",");if(!c||n.validateItems(Ie,c)){const H=o.get(ee)||{attributes:{}};let J=null;if(B)J=C;else{const Z=this._getAttributeValues(n,g,i),j=Fe.map(Se=>Z[Se]);J=T&&"statisticParameters"in x?this._getPercentileValue(x,j):this._getStatisticValue(x,j,null,n.returnDistinctValues)}H.attributes[w]=J,u.forEach((Z,j)=>H.attributes[this.fieldsIndex.get(Z)?Z:`EXPR_${j+1}`]=E[j]),o.set(ee,H)}}}else{const Q=this._getAttributeValues(n,g,i);t.attributes[w]=T&&"statisticParameters"in x?this._getPercentileValue(x,Q):this._getStatisticValue(x,Q,a,n.returnDistinctValues)}s.push({name:w,alias:w,type:"esriFieldTypeDouble"})}const p=h?Array.from(o.values()):[t];return this._sortFeatures(p,f,(I,w)=>I.attributes[w]),{fields:s,features:p}}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let o=null;return o=s!=null&&s.has(a)?s.get(a):se(this.fieldsIndex.get(a))?ce({values:t,returnDistinct:i}):he({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,o),o[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:o}=i,n=this.fieldsIndex.get(s),l={value:r,orderBy:o,fieldType:n?.type,isDiscrete:a==="percentile_disc"};return He(t,l)}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,i));return s.set(t,a),a}_getAttributeNormalizedValues(e,t){return this.items.map(s=>e.getNormalizedValue(s,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal}))}async _getAttributeExpressionValues(e,t,s){const{arcadeUtils:i}=await ge(),a=i.createFunction(t),r=s&&i.getViewInfo(s);return this.items.map(o=>e.getExpressionValue(o,{compiledFunc:a,viewInfo:r},i))}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const o=i[r],n=[];for(const u of e)n.push(u[r]);const l=n.join(",");t?s[l]==null&&(s[l]={count:1,data:n,items:[o],itemPositions:[r]}):s[l]==null?s[l]={count:1,data:n,items:[o],itemPositions:[r]}:(s[l].count++,s[l].items.push(o),s[l].itemPositions.push(r))}return s}async _getDataValues(e,t){const s=new L(e,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:a,normalizationField:r,normalizationType:o,normalizationTotal:n,scale:l}=t,u=i?{viewingMode:"map",scale:l,spatialReference:e.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(s,i,u):this._getAttributeNormalizedValues(s,{field:a,normalizationField:r,normalizationType:o,normalizationTotal:n})}}function it(y,e,t,s,i,a){const r=i-t,o=a-s,n=r*r+o*o,l=(y-t)*r+(e-s)*o,u=Math.min(1,Math.max(0,l/n));return{x:t+r*u,y:s+o*u}}function at(y,e){return y?e?4:3:e?3:2}function rt(y){return y.every(e=>e.statisticType!=="exceedslimit")}const A="feature-store:unsupported-query",U=new Set,nt=new Te(2e6);let ot=0;class yt{constructor(e){this.capabilities={query:Ne},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new Re(ot+++"$$",nt)),this.fieldsIndex=new Qe(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=ie(this._frameTask),this.clearCache(),ae(this._geometryQueryCache),this._changeHandle=ie(this._changeHandle),ae(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:O(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=Ye(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e={},t){let s,i=$(e);try{i=await this._schedule(()=>D(i,this.definitionExpression,this.spatialReference),t),i=await this._reschedule(()=>this._checkQuerySupport(i),t),s=await this._reschedule(()=>this._executeGeometryQuery(i,t),t),s=await this._reschedule(()=>s.executeAggregateIdsQuery(i),t),s=await this._reschedule(()=>s.executeObjectIdsQuery(i),t),s=await this._reschedule(()=>s.executeTimeQuery(i),t),s=await this._reschedule(()=>s.executeAttributesQuery(i),t)}catch(a){if(a!==P)throw a;s=new F([],null,this)}return s.createQueryResponse(i)}async executeQueryForCount(e={},t){let s=$(e);s.returnGeometry=!1,s.returnCentroid=!1,s.outSR=null;try{s=await this._schedule(()=>D(s,this.definitionExpression,this.spatialReference),t),s=await this._reschedule(()=>this._checkQuerySupport(s),t);let i=await this._reschedule(()=>this._executeGeometryQuery(s,t),t);return i=await this._reschedule(()=>i.executeAggregateIdsQuery(s),t),i=await this._reschedule(()=>i.executeObjectIdsQuery(s),t),i=await this._reschedule(()=>i.executeTimeQuery(s),t),i=await this._reschedule(()=>i.executeAttributesQuery(s),t),i.createQueryResponseForCount(s)}catch(i){if(i!==P)throw i;return 0}}async executeQueryForExtent(e={},t){let s,i=$(e);const a=i.outSR;try{i=await this._schedule(()=>D(i,this.definitionExpression,this.spatialReference),t),i=await this._reschedule(()=>this._checkQuerySupport(i),t),i.returnGeometry=!0,i.returnCentroid=!1,i.outSR=null,s=await this._reschedule(()=>this._executeGeometryQuery(i,t),t),s=await this._reschedule(()=>s.executeAggregateIdsQuery(i),t),s=await this._reschedule(()=>s.executeObjectIdsQuery(i),t),s=await this._reschedule(()=>s.executeTimeQuery(i),t),s=await this._reschedule(()=>s.executeAttributesQuery(i),t);const r=s.size;if(!r)return{count:r,extent:null};Ae(R,ve),this.featureStore.forEachBounds(s.items,l=>ze(R,l),lt);const o={xmin:R[0],ymin:R[1],xmax:R[3],ymax:R[4],spatialReference:O(this.spatialReference)};this.hasZ&&isFinite(R[2])&&isFinite(R[5])&&(o.zmin=R[2],o.zmax=R[5]);const n=k(o,s.spatialReference,a);if(n.spatialReference=O(a||this.spatialReference),n.xmax-n.xmin==0){const l=Y(n.spatialReference);n.xmin-=l,n.xmax+=l}if(n.ymax-n.ymin==0){const l=Y(n.spatialReference);n.ymin-=l,n.ymax+=l}if(this.hasZ&&n.zmin!=null&&n.zmax!=null&&n.zmax-n.zmin==0){const l=Y(n.spatialReference);n.zmin-=l,n.zmax+=l}return{count:r,extent:n}}catch(r){if(r===P)return{count:0,extent:null};throw r}}async executeQueryForIds(e={},t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e={},t){let s,i=$(e);i.returnGeometry=!1,i.returnCentroid=!1,i.outSR=null;try{i=await this._schedule(()=>D(i,this.definitionExpression,this.spatialReference),t),i=await this._reschedule(()=>this._checkQuerySupport(i),t),s=await this._reschedule(()=>this._executeGeometryQuery(i,t),t),s=await this._reschedule(()=>s.executeAggregateIdsQuery(i),t),s=await this._reschedule(()=>s.executeObjectIdsQuery(i),t),s=await this._reschedule(()=>s.executeTimeQuery(i),t),s=await this._reschedule(()=>s.executeAttributesQuery(i),t);const a=s.items,r=new Set;return await this._reschedule(()=>{for(const o of a)r.add(s.featureAdapter.getObjectId(o))},t),r}catch(a){if(a===P)return new Set;throw a}}async executeQueryForSnapping(e,t){const{point:s,distance:i,types:a}=e;if(a===0)return{candidates:[]};const r=await this._reschedule(()=>this._checkQuerySupport(e.query),t),o=!q(s.spatialReference,this.spatialReference);o&&await W(s.spatialReference,this.spatialReference);const n=typeof i=="number"?i:i.x,l=typeof i=="number"?i:i.y,u={xmin:s.x-n,xmax:s.x+n,ymin:s.y-l,ymax:s.y+l,spatialReference:s.spatialReference},c=o?k(u,this.spatialReference):u;if(!c)return{candidates:[]};const f=(await re(ne(s),null,{signal:t}))[0],m=(await re(ne(c),null,{signal:t}))[0];if(N(f)||N(m))return{candidates:[]};let h=new F(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),null,this);h=await this._reschedule(()=>h.executeObjectIdsQuery(r),t),h=await this._reschedule(()=>h.executeTimeQuery(r),t),h=await this._reschedule(()=>h.executeAttributesQuery(r),t);const _=f.toJSON(),d=o?k(_,this.spatialReference):_,p=o?Math.max(c.xmax-c.xmin,c.ymax-c.ymin)/2:i;return h.createSnappingResponse({...e,point:d,distance:p},s.spatialReference)}async executeQueryForLatestObservations(e={},t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new S(A,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});let s,i=$(e);try{i=await this._schedule(()=>D(i,this.definitionExpression,this.spatialReference),t),i=await this._reschedule(()=>this._checkQuerySupport(i),t),s=await this._reschedule(()=>this._executeGeometryQuery(i,t),t),s=await this._reschedule(()=>s.executeAggregateIdsQuery(i),t),s=await this._reschedule(()=>s.executeObjectIdsQuery(i),t),s=await this._reschedule(()=>s.executeTimeQuery(i),t),s=await this._reschedule(()=>s.executeAttributesQuery(i),t),s=await this._reschedule(()=>s.filterLatest(),t)}catch(a){if(a!==P)throw a;s=new F([],null,this)}return s.createQueryResponse(i)}async executeQueryForSummaryStatistics(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createSummaryStatisticsResponse(e,t)}async executeQueryForUniqueValues(e={},t,s){const{field:i,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,valueExpression:a},s)).createUniqueValuesResponse(e,t)}async executeQueryForClassBreaks(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createClassBreaksResponse(e,t)}async executeQueryForHistogram(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createHistogramResponse(e,t)}async _schedule(e,t){return G(this._frameTask)?this._frameTask.schedule(e,t):e(oe)}async _reschedule(e,t){return G(this._frameTask)?this._frameTask.reschedule(e,t):e(oe)}_getAll(){if(!this._allItems){const e=[];this.featureStore.forEach(t=>e.push(t)),this._allItems=new F(e,null,this)}return this._allItems}async _executeGeometryQuery(e,t){const{geometry:s,outSR:i,spatialRel:a,returnGeometry:r,returnCentroid:o}=e,n=r||o,l=ye(i)&&!q(this.spatialReference,i),u=this._geometryQueryCache?l&&n?JSON.stringify({geometry:s,spatialRelationship:a,outSpatialReference:i}):JSON.stringify({geometry:s,spatialRelationship:a}):null;if(u){const d=this._geometryQueryCache.get(u);if(!Ve(d))return d}const c=async d=>{if(l&&n){const p=await d.project(i);return u&&this._geometryQueryCache.put(u,p,p.size||1),p}return u&&this._geometryQueryCache.put(u,d,d.size||1),d};if(!s)return c(this._getAll());const f=this.featureAdapter;if(a==="esriSpatialRelDisjoint"){const d=this._searchFeatures(this._getQueryBBoxes(s));if(!d.length)return c(this._getAll());let p,I;const w=new Set;for(const x of d)w.add(f.getObjectId(x));await this._reschedule(()=>{let x=0;p=new Array(w.size),this.featureStore.forEach(g=>p[x++]=g),I=w},t);const b=await this._reschedule(async()=>{const x=await fe(a,s,this.geometryType,this.hasZ,this.hasM),g=T=>!I.has(f.getObjectId(T))||x(f.getGeometry(T));return new F(await this._runSpatialFilter(p,g,t),s,this)},t);return c(b)}const m=this._searchFeatures(this._getQueryBBoxes(s));if(!m.length){const d=new F([],s,this);return u&&this._geometryQueryCache.put(u,d,d.size||1),d}if(this._canExecuteSoloPass(s,e))return c(new F(m,s,this));const h=await fe(a,s,this.geometryType,this.hasZ,this.hasM),_=await this._runSpatialFilter(m,d=>h(f.getGeometry(d)),t);return c(new F(_,s,this))}async _runSpatialFilter(e,t,s){if(!t)return e;if(N(this._frameTask))return e.filter(o=>t(o));let i=0;const a=new Array,r=async o=>{for(;i<e.length;){const n=e[i++];t(n)&&(a.push(n),o.madeProgress()),o.done&&await this._reschedule(l=>r(l),s)}};return this._reschedule(o=>r(o),s).then(()=>a)}_canExecuteSoloPass(e,t){const{geometryType:s}=this,{spatialRel:i}=t;return me(e)&&(i==="esriSpatialRelEnvelopeIntersects"||s==="esriGeometryPoint"&&(i==="esriSpatialRelIntersects"||i==="esriSpatialRelContains"||i==="esriSpatialRelWithin"))}_getQueryBBoxes(e){if(me(e)){if(Ee(e))return[le(e.xmin,e.ymin,e.xmax,e.ymax)];if(Ce(e))return e.rings.map(t=>le(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[$e(De(),e)]}_searchFeatures(e){for(const i of e)this.featureStore.forEachInBounds(i,a=>{U.add(a)});const t=new Array(U.size);let s=0;return U.forEach(i=>t[s++]=i),U.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new S(A,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsParamsSupport(t),pe(e,this.geometryType,this.spatialReference),W(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:s}=await ge();t=s.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new S(A,"params should have at least a field or valueExpression",{params:e});v(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new S(A,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),pe(e,this.geometryType,this.spatialReference),W(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:a}=e,r=a?a.map(o=>o.outStatisticFieldName&&o.outStatisticFieldName.toLowerCase()):[];if(s&&s.length>0){const o=" asc",n=" desc",l=s.map(u=>{const c=u.toLowerCase();return c.indexOf(o)>-1?c.split(o)[0]:c.indexOf(n)>-1?c.split(n)[0]:u}).filter(u=>r.indexOf(u)===-1);v(this.fieldsIndex,l,"orderByFields contains missing fields")}if(t&&t.length>0)v(this.fieldsIndex,t,"outFields contains missing fields");else if(i)throw new S(A,"outFields should be specified for returnDistinctValues",{query:e});Ke(this.fieldsIndex,e.where)}async _checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,a=s&&s.length,r=t&&t.length;if(i){if(!a||!r)throw new S(A,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});et(this.fieldsIndex,i,t)}if(r){if(!rt(t))return;const o=t.map(n=>n.onStatisticField);v(this.fieldsIndex,o,"onStatisticFields contains missing fields"),a&&v(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const n of t){const{onStatisticField:l,statisticType:u}=n;if((u==="percentile_disc"||u==="percentile_cont")&&"statisticParameters"in n){const{statisticParameters:c}=n;if(!c)throw new S(A,"statisticParamters should be set for percentile type",{definition:n,query:e})}else if(u!=="count"&&l&&st(l,this.fieldsIndex))throw new S(A,"outStatistics contains non-numeric fields",{definition:n,query:e})}}}async _getQueryEngineResultForStats(e={},t,s){let i;e=$(e);try{e=await this._schedule(()=>D(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),s),i=await this._reschedule(()=>this._executeGeometryQuery(e,s),s),i=await this._reschedule(()=>i.executeAggregateIdsQuery(e),s),i=await this._reschedule(()=>i.executeObjectIdsQuery(e),s),i=await this._reschedule(()=>i.executeTimeQuery(e),s),i=await this._reschedule(()=>i.executeAttributesQuery(e),s)}catch(a){if(a!==P)throw a;i=new F([],null,this)}return i}}const lt=xe(),R=xe();export{yt as L};
