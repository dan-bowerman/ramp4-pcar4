import{r as a,iO as c,iD as h}from"./main.c8cfc77c.js";async function I(e,i=e.popupTemplate){if(!a(i))return[];const s=await i.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:o}=i,{objectIdField:l,typeIdField:u,globalIdField:n,relationships:t}=e;if(s.includes("*"))return["*"];const f=o?await c(e):[],d=h(e.fieldsIndex,[...s,...f]);return u&&d.push(u),d&&l&&e.fieldsIndex.has(l)&&d.indexOf(l)===-1&&d.push(l),d&&n&&e.fieldsIndex.has(n)&&d.indexOf(n)===-1&&d.push(n),t&&t.forEach(r=>{const{keyField:p}=r;d&&p&&e.fieldsIndex.has(p)&&d.indexOf(p)===-1&&d.push(p)}),d}function m(e,i){return e.popupTemplate?e.popupTemplate:a(i)&&i.defaultPopupTemplateEnabled&&a(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{m as d,I as t};
