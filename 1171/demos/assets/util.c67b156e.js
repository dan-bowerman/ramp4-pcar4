import{o as i}from"./main.8eac6be0.js";const l=new i({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function m(o){return l.toJSON(o)}function s(o){const{bandCount:t,attributeTable:n,colormap:r,pixelType:e}=o.rasterInfo;return t===1&&(n!=null||r!=null||e==="u8"||e==="s8")}export{m as e,s as r};
