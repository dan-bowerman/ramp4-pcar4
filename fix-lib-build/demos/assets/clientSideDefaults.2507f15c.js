import{w as o,x as u,z as n,l as i,a}from"./main.368f1782.js";import{t as l}from"./QueryEngineCapabilities.83e56447.js";function y(t){return{renderer:{type:"simple",symbol:t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?o:t==="esriGeometryPolyline"?u:n}}}function m(t,e){if(a("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let r=`this.${e} = null;`;for(const s in t)r+=`this${s.includes(".")?`["${s}"]`:`.${s}`} = ${JSON.stringify(t[s])};`;const p=new Function(r);return()=>new p}catch{return()=>({[e]:null,...t})}}function h(t={}){return[{name:"New Feature",description:"",prototype:{attributes:i(t)}}]}function f(t,e){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0},query:l,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}export{f as a,h as i,m as n,y as u};
