import{i2 as a,i3 as l,r as i,i4 as m,M as n,i5 as f,i6 as c,i7 as u,i8 as S,i9 as d,ia as p,ib as h}from"./main.748a25d3.js";import{x,d as N,L as O}from"./rasterProjectionHelper.28a45a18.js";import{f as y}from"./utils.38365012.js";class g{convertVectorFieldData(e){const t=a.fromJSON(e.pixelBlock),s=l(t,e.type);return Promise.resolve(i(s)&&s.toJSON())}async decode(e){const t=await m(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=a.fromJSON(e.pixelBlock),e.extent=e.extent?n.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(i(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=f.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(a.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(i(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=c(a.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=u(a.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((s,o)=>{t.set(o,s?.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(r=>r?new a(r):null),s=S(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo});if(!e.coefs)return s&&s.toJSON();const o=d(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return o&&o.toJSON()}async createStreamlinesMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await p(e.rendererSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=n.fromJSON(e.projectedExtent),s=n.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationStemps&&(o=new h({steps:e.datumTransformationStemps})),x(t.spatialReference,s.spatialReference,o)&&await N();const r=e.rasterTransform?y(e.rasterTransform):null;return O({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{g as default};
