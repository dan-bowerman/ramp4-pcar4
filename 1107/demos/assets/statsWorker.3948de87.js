import{fN as T,p as y}from"./main.dd0259bc.js";import{T as x,s as w,m as V,c as F,V as I,g as E,h as P,y as h,D,z as g}from"./utils.cb0bc365.js";let d=null;async function v(e,a){if(!a)return[];const r=e.field,i=e.valueExpression,n=e.normalizationType,l=e.normalizationField,s=e.normalizationTotal,t=[],o=e.viewInfoParams;let u=null,c=null;if(i){if(!d){const{arcadeUtils:m}=await T();d=m}u=d.createFunction(i),c=o&&d.getViewInfo({viewingMode:o.viewingMode,scale:o.scale,spatialReference:new y(o.spatialReference)})}return a.forEach(m=>{const p=m.attributes;let f;if(i){const z=d.createExecContext(m,c);f=d.executeFunction(u,z)}else p&&(f=p[r]);if(n&&isFinite(f)){const z=p&&parseFloat(p[l]);f=x(f,n,z,s)}t.push(f)}),t}async function b(e){const{attribute:a,features:r}=e,{normalizationType:i,normalizationField:n,minValue:l,maxValue:s,fieldType:t}=a,o=await v({field:a.field,valueExpression:a.valueExpression,normalizationType:i,normalizationField:n,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams},r),u=w({normalizationType:i,normalizationField:n,minValue:l,maxValue:s}),c={value:.5,fieldType:t},m=t==="esriFieldTypeString"?V({values:o,supportsNullCount:u,percentileParams:c}):F({values:o,minValue:l,maxValue:s,useSampleStdDev:!i,supportsNullCount:u,percentileParams:c});return I(m,t==="esriFieldTypeDate")}async function S(e){const{attribute:a,features:r}=e,i=await v({field:a.field,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams},r),n=E(i);return P(n,a.domain,a.returnAllCodedValues)}async function $(e){const{attribute:a,features:r}=e,{field:i,normalizationType:n,normalizationField:l,normalizationTotal:s,classificationMethod:t}=a,o=await v({field:i,valueExpression:a.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:s,viewInfoParams:a.viewInfoParams},r),u=h(o,{field:i,normalizationType:n,normalizationField:l,normalizationTotal:s,classificationMethod:t,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return D(u,t)}async function B(e){const{attribute:a,features:r}=e,{field:i,normalizationType:n,normalizationField:l,normalizationTotal:s,classificationMethod:t}=a,o=await v({field:i,valueExpression:a.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:s,viewInfoParams:a.viewInfoParams},r);return g(o,{field:i,normalizationType:n,normalizationField:l,normalizationTotal:s,classificationMethod:t,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}export{$ as classBreaks,B as histogram,b as summaryStatistics,S as uniqueValues};
