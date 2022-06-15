import{i0 as i,i1 as l,r as a,i2 as m,M as n,i3 as f,i4 as c,i5 as u,i6 as S,i7 as d,i8 as p,i9 as h}from"./multi-ramp.341296fa.js";import{x,d as N,L as O}from"./rasterProjectionHelper.ed3b1268.js";import{f as y}from"./utils.f79ccc1d.js";class g{convertVectorFieldData(e){const t=i.fromJSON(e.pixelBlock),s=l(t,e.type);return Promise.resolve(a(s)&&s.toJSON())}async decode(e){const t=await m(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.fromJSON(e.pixelBlock),e.extent=e.extent?n.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(a(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=f.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(a(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=c(i.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=u(i.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach((s,o)=>{t.set(o,s?.toJSON())}),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(r=>r?new i(r):null),s=S(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo});if(!e.coefs)return s&&s.toJSON();const o=d(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return o&&o.toJSON()}async createStreamlinesMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await p(e.rendererSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=n.fromJSON(e.projectedExtent),s=n.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationStemps&&(o=new h({steps:e.datumTransformationStemps})),x(t.spatialReference,s.spatialReference,o)&&await N();const r=e.rasterTransform?y(e.rasterTransform):null;return O({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{g as default};
