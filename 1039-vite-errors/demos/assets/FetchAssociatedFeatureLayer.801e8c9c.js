import{f as n,r as h,C as u,R as f,bG as l,jt as y,b as g,B as S}from"./main.eb3bf376.js";const v={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,tileMaxRecordCount:0}};class P{constructor(r,t,s,e){this.parsedUrl=r,this.portalItem=t,this.apiKey=s,this.signal=e,this.rootDocument=null;const o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}async fetch(){var r;if(!this.urlParts)return null;const t=(r=this.portalItem)!=null?r:await this.portalItemFromServiceItemId();if(n(t))return this.loadFromUrl();const s=await this.findAndLoadRelatedPortalItem(t);return n(s)?null:this.loadFeatureLayerFromPortalItem(s)}async fetchPortalItem(){var r;if(!this.urlParts)return null;const t=(r=this.portalItem)!=null?r:await this.portalItemFromServiceItemId();return n(t)?null:this.findAndLoadRelatedPortalItem(t)}async fetchRootDocument(){if(h(this.rootDocument))return this.rootDocument;if(n(this.urlParts))return this.rootDocument={},{};const r={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const s=await u(t,r);this.rootDocument=s.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var r;const t=(r=f)==null?void 0:r.findServerInfo(this.parsedUrl.path);if(t!=null&&t.owningSystemUrl)return t.owningSystemUrl;const s=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await u(s,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){l(e)}return null}async findAndLoadRelatedPortalItem(r){try{return(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find(t=>t.type==="Feature Service")||null}catch(t){return l(t),null}}async loadFeatureLayerFromPortalItem(r){await r.load({signal:this.signal});const t=await this.findMatchingAssociatedSublayerUrl(r.url);return new y({url:t,portalItem:r}).load({signal:this.signal})}async loadFromUrl(){const r=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new y({url:r}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(r){const t=r.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),s={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},e=this.urlParts.layerId,o=this.fetchRootDocument(),m=u(t,s),[c,d]=await Promise.all([m,o]),p=d&&d.layers,a=c.data&&c.data.layers;if(!Array.isArray(a))throw new Error("expected layers array");if(Array.isArray(p)){for(let i=0;i<Math.min(p.length,a.length);i++)if(p[i].id===e)return`${t}/${a[i].id}`}else if(e<a.length)return`${t}/${a[e].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const r=(await this.fetchRootDocument()).serviceItemId;if(!r)return null;const t=new g({id:r,apiKey:this.apiKey}),s=await this.fetchServiceOwningPortalUrl();h(s)&&(t.portal=new S({url:s}));try{return t.load({signal:this.signal})}catch(e){return l(e),null}}}export{P as l,v as s};
