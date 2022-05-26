import{hZ as a,h_ as l,r as i,h$ as m,M as n,i0 as f,i1 as c,i2 as u,i3 as S,i4 as d,i5 as h,i6 as p}from"./main.4a115682.js";import{x,d as N,L as O}from"./rasterProjectionHelper.6f83d8c1.js";import{f as y}from"./utils.8df55560.js";class g{convertVectorFieldData(e){const t=a.fromJSON(e.pixelBlock),s=l(t,e.type);return Promise.resolve(i(s)&&s.toJSON())}async decode(e){const t=await m(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=a.fromJSON(e.pixelBlock),e.extent=e.extent?n.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(i(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=f.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(a.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(i(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=c(a.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=u(a.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((s,o)=>{t.set(o,s?.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(r=>r?new a(r):null),s=S(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo});if(!e.coefs)return s&&s.toJSON();const o=d(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return o&&o.toJSON()}async createStreamlinesMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await h(e.rendererSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=n.fromJSON(e.projectedExtent),s=n.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationStemps&&(o=new p({steps:e.datumTransformationStemps})),x(t.spatialReference,s.spatialReference,o)&&await N();const r=e.rasterTransform?y(e.rasterTransform):null;return O({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{g as default};
