import{r as f,f as d,a as L,hQ as k,ca as T,bS as z,aI as K,aF as X,aG as H,bT as N,ce as w,aw as O,V as D,e as G,i as Z,ar as W,bb as j}from"./main.e026b28b.js";import{s as M}from"./CircularArray.668f464c.js";import{i as I,E as Q,I as B}from"./Utils.60f375af.js";import{i as R,f as J,o as tt}from"./FeatureContainer.af7e09aa.js";import{o as U,f as et}from"./VertexArrayObject.a0e0a0d3.js";import"./Texture.79ec8b62.js";import{s as st}from"./schemaUtils.0dc0cede.js";import{o as rt}from"./BaseTileRenderer.3e37f4e5.js";import{m as it}from"./visualVariablesUtils.090cb251.js";import{j as m}from"./WGLContainer.14115598.js";import"./definitions.21e97413.js";import"./TileContainer.732bb64f.js";import"./Container.6931e413.js";import"./MaterialKey.12c3f36d.js";import"./visualVariablesUtils.8db4d556.js";import"./CIMSymbolHelper.342abb9c.js";import"./BidiEngine.aae60613.js";import"./GeometryUtils.d4e26b77.js";import"./cimSymbolUtils.5ead9da6.js";import"./quantizationUtils.27c87a96.js";import"./devEnvironmentUtils.444b8fd1.js";import"./MD5.f9440c6b.js";import"./util.42198e27.js";import"./ShaderCompiler.657cd457.js";import"./config.2a39d8a4.js";import"./GeometryUtils.ea8c8742.js";import"./earcut.f20dd8d8.js";const p=6,V=4294967296;class E{constructor(t){this._head=t,this._cursor=t}static from(t){const e=v.from(new Float32Array(t));return new E(e)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,e){return this._cursor.setBoundsComputedAnchorX(t,e)}setBoundsComputedAnchorY(t,e){return this._cursor.setBoundsComputedAnchorY(t,e)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(t){if(f(t._head))return this._cursor.link(t._head)}getCursor(){return this.copy()}copy(){var t;const e=new E((t=this._head)==null?void 0:t.copy());if(!e._head)return e;let s=e._head,r=e._head._link;for(;r;)s._link=r.copy(),s=r,r=s._link;return e}peekId(){var t;return(t=this._cursor.peekId())!=null?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&f(s)&&(s._link=e._link),!0;s=e,e=e._link}return!1}}class v{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new v(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*p+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*p+1]}setBoundsComputedAnchorX(t,e){this._buffer[this._offset+10+t*p+0]=e}setBoundsComputedAnchorY(t,e){this._buffer[this._offset+10+t*p+1]=e}boundsX(t){return this._buffer[this._offset+10+t*p+2]}boundsY(t){return this._buffer[this._offset+10+t*p+3]}boundsWidth(t){return this._buffer[this._offset+10+t*p+4]}boundsHeight(t){return this._buffer[this._offset+10+t*p+5]}link(t){let e=this;for(;e._link;)e=e._link;e._link=t}getCursor(){return this.copy()}copy(){const t=new v(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*p+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(this._offset===-1?this._offset=0:this._offset+=10+this.boundsCount*p,this.id===V););return this.id!==V&&this._offset<this._buffer.length}delete(t){const e=this._offset,s=this.lookup(t);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=e,s}lookup(t){const e=this._offset;if(d(this._offsets.instance)){this._offsets.instance=new Map;const s=this.copy();s._offset=-1;let r=0;for(;s.next();)s.id!==r&&(this._offsets.instance.set(s.id,s._offset),r=s.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==V||(this._offset=e,!1))}_computeCount(){const t=this._offset;let e=0;for(this._offset=-1;this.next();)e++;return this._offset=t,e}}class c{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let s=1;s<t.length;s++)e.next=new c([t[s]]),e=e.next}*values(){let t=this;for(;t;)yield t.data,t=t.next}forEach(t){let e=this;for(;e;)t(e.data),e=e.next}find(t){var e;return t(this.data)?this:(e=this.next)==null?void 0:e.find(t)}max(t,e=this){const s=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,s):s}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class Y{constructor(t){this._head=null,d(t)||(this._head=new c(t))}get head(){return this._head}maxAvailableSpace(){if(d(this._head))return 0;const t=this._head.max(e=>e.end-e.start);return t.data.end-t.data.start}firstFit(t){if(d(this._head))return null;let e=null,s=this._head;for(;s;){const r=s.data.end-s.data.start;if(r===t)return e?e.next=s.next:this._head=s.next,s.data.start;if(r>t){const i=s.data.start;return s.data.start+=t,i}e=s,s=s.next}return null}free(t,e){const s=t+e;if(d(this._head)){const h=new c({start:t,end:s});return void(this._head=h)}if(s<=this._head.data.start){if(s===this._head.data.start)return void(this._head.data.start-=e);const h=new c({start:t,end:s});return h.next=this._head,void(this._head=h)}let r=this._head,i=r.next;for(;i;){if(i.data.start>=s){if(r.data.end===t){if(r.data.end+=e,r.data.end===i.data.start){const o=i.data.end-i.data.start;return r.data.end+=o,void(r.next=i.next)}return}if(i.data.start===s)return void(i.data.start-=e);const h=new c({start:t,end:s});return h.next=r.next,void(r.next=h)}r=i,i=i.next}if(t===r.data.end)return void(r.data.end+=e);const a=new c({start:t,end:s});r.next=a}}class g{constructor(t,e,s,r,i){this.target=t,this.geometryType=e,this.materialKey=s,this.indexFrom=r,this.indexCount=i}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}draw(t,e,s){this.target.draw(t,e,s,this.indexFrom,this.indexCount)}}class A{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(t,e,s,r){const i=new A(t,e);if(f(r))for(const a of r)s.seekIndex(a),i.addRecord(s);else for(;s.next();)i.addRecord(s);return i}addRecord(t){const e=this._target,s=this.geometryType,r=t.materialKey,i=t.indexFrom,a=t.indexCount;if(d(this._head)){const u=new g(e,s,r,i,a);return void(this._head=new c(u))}let h=null,o=this._head;for(;o;){if(i<o.data.indexFrom)return this._insert(r,i,a,h,o);h=o,o=o.next}this._insert(r,i,a,h,null)}forEach(t){f(this._head)&&this._head.forEach(t)}*infos(){if(f(this._head))for(const t of this._head.values())yield t}_insert(t,e,s,r,i){if(d(r)&&d(i)){const a=new g(this._target,this.geometryType,t,e,s);this._head=new c(a)}return d(r)&&f(i)?this._insertAtHead(t,e,s,i):f(r)&&d(i)?this._insertAtEnd(t,e,s,r):f(r)&&f(i)?this._insertAtMiddle(t,e,s,r,i):void 0}_insertAtHead(t,e,s,r){const i=e+s;if(t===r.data.materialKey&&i===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=s;else{const a=new g(this._target,this.geometryType,t,e,s);this._head=new c(a),this._head.next=r}}_insertAtEnd(t,e,s,r){if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s;else{const i=new g(this._target,this.geometryType,t,e,s),a=new c(i);r.next=a}}_insertAtMiddle(t,e,s,r,i){const a=e+s;if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s,r.data.materialKey===i.data.materialKey&&r.data.indexEnd===i.data.indexFrom&&(r.data.indexCount+=i.data.indexCount,r.next=i.next);else if(t===i.data.materialKey&&a===i.data.indexFrom)i.data.indexFrom=e,i.data.indexCount+=s;else{const h=new g(this._target,this.geometryType,t,e,s),o=new c(h);r.next=o,o.next=i}}}const P=L("esri-2d-log-allocations");class C{constructor(t){this._array=t}get array(){return this._array}get length(){return this._array.length}static create(t){const e=x.acquire(t);return new C(e)}expand(t){const e=x.acquire(t);e.set(this._array),x.release(this._array),this._array=e}destroy(){x.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=x.acquire(this._array.byteLength);return t.set(this._array),new C(t)}}class b{constructor(){this._data=new ArrayBuffer(b.BYTE_LENGTH),this._freeList=new Y({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t);return d(e)?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}class nt{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}get _bytesTotal(){return this._pages.length*b.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,P&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>b.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const e of this._pages){const s=e.allocate(t);if(f(s))return s}return k(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,P&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t)}_addPage(){const t=new b;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}const x=new nt,at=1.25,F=32767,ht=F<<16|F;class ${constructor(t,e,s){const r=C.create(e*s*Uint32Array.BYTES_PER_ELEMENT);this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this.gpu=null,this._cpu=r,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}destroy(){T(this.gpu,t=>t.dispose()),T(this._cpu,t=>t.destroy()),T(this._cpu2,t=>t.destroy())}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new Y({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(t){if(!(this.maxAvailableSpace()>=t)&&t*this.strideInt>this._cpu.length-this.fillPointer){f(this.gpu)&&(this.gpu=null);const e=this._cpu.length/this.strideInt,s=Math.round((e+t)*at),r=s*this.strideInt;this._cpu.expand(r*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(e,s-e)}}set(t,e){this._cpu.array[t]!==e&&(this._cpu.array[t]=e,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getBuffer(){if(!this._cpu2){const t=this._cpu.slice();this._cpu2=t}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,e,s,r){const i=s*this.strideInt,a=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,h=new Uint32Array(t,a,i),o=k(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,u=i,y=o/this.strideInt-e;if(r!==0)for(let _=0;_<h.length;_++)h[_]+=r;return this._cpu.array.set(h,o),this.dirty.start=Math.min(this.dirty.start,o),this.dirty.end=Math.max(this.dirty.end,o+u),this.fillPointer=Math.max(this.fillPointer,o+u),y}free(t,e,s){const r=t*this.strideInt,i=(t+e)*this.strideInt;if(s===!0)for(let a=t;a!==t+e;a++)this._cpu.array[a*this.strideInt]=ht;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,i),this.freeList.free(t,e)}upload(t){if(this.dirty.end){if(d(this.gpu))return this.gpu=this._createBuffer(t),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){return this.bufferType==="index"?U.createIndex(t,35048,this._cpu.array):U.createVertex(t,35048,this._cpu.array)}}class ot{constructor(t,e){this._indicesInvalid=!1,this.geometryType=t}destroy(){this._vao&&(this._vao.dispose(),this._vao=null),this._indexBuffer&&this._indexBuffer.destroy(),this._vertexBuffer&&this._vertexBuffer.destroy()}insert(t,e,s){if(!t.records.byteLength)return;const r=t.stride;if(this._vertexBuffer&&this._indexBuffer){const i=t.indices.byteLength/4,a=t.vertices.byteLength/r;this._indexBuffer.ensure(i),this._vertexBuffer.ensure(a);const{vertices:h,indices:o}=t,u=R.from(t.records),y=this._vertexBuffer.insert(h,0,h.byteLength/r,0),_=this._indexBuffer.insert(o,0,o.byteLength/4,y);if(u.forEach(l=>{l.indexFrom+=_,l.vertexFrom+=y}),k(this._records,"Expected records to be defined").link(u),e)this._indicesInvalid=!0;else if(this._displayList){const l=u.getCursor();for(;l.next();)this._displayList.addRecord(l)}}else{const i=t.indices.byteLength/4,a=t.vertices.byteLength/r,h=r/Uint32Array.BYTES_PER_ELEMENT;this._records=R.from(t.records),this._indexBuffer=new $("index",i,1),this._vertexBuffer=new $("vertex",a,h),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/r,0),e&&(this._indicesInvalid=!0)}}remove(t){if(!d(this._records))for(const e of t){const s=this._records.getCursor();if(!s.lookup(e))continue;const r=s.indexFrom,i=s.vertexFrom;let a=s.indexCount,h=s.vertexCount;for(;s.next()&&s.id===e;)a+=s.indexCount,h+=s.vertexCount;this._indexBuffer.free(r,a),this._vertexBuffer.free(i,h,!0),this._records.delete(e)}}draw(t,e,s,r,i){if(!this._vertexBuffer||!this._indexBuffer||d(this._records))return;if((d(this._vertexBuffer.gpu)||d(this._indexBuffer.gpu))&&(this._vao&&(this._vao.dispose(),this._vao=null),this._vertexBuffer.gpu=null,this._indexBuffer.gpu=null),this._vertexBuffer.upload(t),this._indexBuffer.upload(t),!this._vao){const o=this._vertexBuffer.gpu,u=this._indexBuffer.gpu;if(!u||!o)return;this._vao=new et(t,s,e,{geometry:o},u)}const a=this._vao,h=r*Uint32Array.BYTES_PER_ELEMENT;t.bindVAO(a),t.drawElements(4,i,5125,h)}forEachCommand(t){if(!d(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=A.from(this,this.geometryType,this._records.getCursor(),e)}this._displayList.forEach(t)}}_sortIndices(t){if(!this._indicesInvalid)return;this._indicesInvalid=!1;let e=0;const s=t.getCursor(),r=this._indexBuffer.getBuffer(),i=[],a=[],h=[];for(;s.next();)a.push(s.index),h.push(s.sortKey),i.push(s.id);a.sort((u,y)=>{const _=h[y],l=h[u];return l===_?i[y]-i[u]:_-l});const o=t.getCursor();for(const u of a){if(!o.seekIndex(u))throw new Error("Expected to find index");const{indexFrom:y,indexCount:_}=o;o.indexFrom=e;for(let l=0;l<_;l++)this._indexBuffer.set(e++,r.array[y+l])}this._cursorIndexOrder=a,this._displayList=null}}const dt=50,ut=4,ft=8,q=100;let lt=0;class ct extends J{constructor(t,e,s,r,i){super(t,e,s),this.instanceId=lt++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new M(q),this._bufferPatches=new M(q),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=z(),this._store=r,this._requestLabelUpdate=i}destroy(){super.destroy(),this._renderState.current.geometry.forEach(t=>t.destroy())}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(t){return this._renderState.current.geometry.get(t)}setTransform(t,e){super.setTransform(t,e);const s=this.transforms.labelMat2d,r=t.getScreenTransform(s,e),i=O();K(i,[this.x,this.y],r),X(s),H(s,s,i),N(s,t.viewMat2d,s)}patch(t,e){if(this.patchCount++,t.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=t.clear,t.clear&&this._patches.size>=dt&&this._dropPatches();const s=t,r=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin;e&&r?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!e,this._patches.enqueue(s)),this.requestRender()}commit(t){if(this._lastCommitTime!==t.time){this._lastCommitTime=t.time;for(let e=0;e<ut;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,this._renderState.swapFrames===0)return this._renderState.swapFrames=ft,void this.requestRender();this._renderState.swapFrames--==1?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,f(this._renderState.next)&&(this._renderState.current.geometry.forEach(t=>t.destroy()),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let t=this._patches.maxSize;for(;this._patches.size&&t--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const t=this._bufferPatches.peek();if(!f(t)||!t.clear||this._renderState.next===null)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();f(e)&&this._patchBuffer(e)}}_updateMesh(){const t=this._patches.peek();if(f(t)&&t.clear&&this._renderState.next!==null)return;const e=this._patches.dequeue();if(f(e)){if(e.clear===!0)return this.isReady?(this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})):void 0;this.requestRender(),this._patch(e),e.end&&(this.ready(),this._swapRenderStates())}}_patch(t){I(e=>{this._remove(e,t.remove),this._insert(e,t,!1)})}_patchBuffer(t){I(e=>{this._insert(e,t,!0)})}_insert(t,e,s){try{var r;const i=w(this._renderState.next,this._renderState.current),a=(r=e.addOrUpdate)==null?void 0:r.data[t],h=i.geometry;if(d(a))return;h.has(t)||h.set(t,new ot(t,this.stage)),h.get(t).insert(a,e.sort,s),t===Q.LABEL&&this._insertLabelMetrics(e.type,a.metrics,e.clear)}catch{}}_insertLabelMetrics(t,e,s){const r=w(this._renderState.next,this._renderState.current);if(d(e))return;const i=E.from(e);if(d(r.metrics))r.metrics=i;else{if(t==="update"){const a=i.getCursor();for(;a.next();)r.metrics.delete(a.id)}r.metrics.link(i)}}_remove(t,e){const s=w(this._renderState.next,this._renderState.current).geometry.get(t);e&&e.length&&s&&(s.remove(e),this._removeLabelMetrics(e))}_removeLabelMetrics(t){const{metrics:e}=w(this._renderState.next,this._renderState.current);if(!d(e)&&t.length)for(const s of t)for(;e.delete(s););}_dropPatches(){const t=new Array;let e=!1;for(;this._patches.size;){const s=this._patches.dequeue();if(d(s))break;if(s.clear){if(e)break;e=!0}t.push(s)}this._patches.clear(),t.forEach(s=>this._patches.enqueue(s))}}const _t=L("featurelayer-order-by-server-enabled");class pt extends tt{constructor(t,e,s,r){super(t),this._pointToCallbacks=new Map,this._layer=s,this._layerView=e,this._onUpdate=r}renderChildren(t){this.attributeView.update(),this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),super.renderChildren(t)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(t){const e=D();return this._pointToCallbacks.set(t,e),this.requestRender(),e.promise}onTileData(t,e){const s=_t&&"orderBy"in this._layer&&this._layer.orderBy,r=s?.length&&!s[0].valueExpression&&s[0].field,i=s&&this._layerView.orderByFields===r;t.patch(e,i),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){this.contains(t)||this.addChild(t)}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._layerView.featureEffectView.transitionStep(t,e),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(t){const{minScale:e,maxScale:s}=this._layer,r=t.state.scale;r<=(e||1/0)&&r>=s&&super.doRender(t)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some(s=>s.labelingInfo&&s.labelingInfo.length&&s.labelsVisible);const t=this._layer.featureReduction,e=t&&t.type==="cluster"&&t.labelsVisible&&t.labelingInfo&&t.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!e}prepareRenderPasses(t){const e=t.registerRenderPass({name:"label",brushes:[m.label],target:()=>this.hasLabels?this.children:null,drawPhase:B.LABEL|B.LABEL_ALPHA}),s=t.registerRenderPass({name:"geometry",brushes:[m.fill,m.line,m.marker,m.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:t.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:t.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:t.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),r=t.registerRenderPass({name:"highlight",brushes:[m.fill,m.line,m.marker,m.text],target:()=>this.children,drawPhase:B.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:t.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(t),s,r,e]}}let S=class extends rt{install(n){const t=()=>this.notifyChange("updating"),e=new pt(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=e,n.addChild(e)}uninstall(n){n.removeChild(this.featuresView),this.featuresView.destroy()}fetchResource(n,t){const{url:e}=n,s=this.featuresView.stage;try{return s.resourceManager.fetchResource(e,{signal:t.signal})}catch(r){return W(r)?Promise.resolve({width:0,height:0}):Promise.reject(r)}}isUpdating(){var n;const t=super.isUpdating(),e=!this.featuresView||this.featuresView.isUpdating(),s=(n=this.featuresView)==null?void 0:n.hasEmptyAttributeView(),r=t||e||t&&s;return L("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${r}
  -> updatingTiles ${t}
  -> hasFeaturesView ${!!this.featuresView}
  -> updatingFeaturesView ${e}`),r}hitTest(n){return this.featuresView.hitTest(n)}supportsRenderer(n){return n!=null&&["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(n.type)!==-1}onConfigUpdate(n){let t=null;if("visualVariables"in n){const e=(st(n).visualVariables||[]).map(s=>{const r=s.clone();return"normalizationField"in s&&(r.normalizationField=null),s.valueExpression&&s.valueExpression!=="$view.scale"&&(r.valueExpression=null,r.field="nop"),r});t=it(e)}this.featuresView.setRendererInfo(n,t,this.layerView.featureEffect)}onTileData(n){const t=this.tiles.get(n.tileKey);t&&n.data&&this.featuresView.onTileData(t,n.data),this.layerView.view.labelManager.requestUpdate()}onTileError(n){const t=this.tiles.get(n.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach(n=>n.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach(n=>n.unlock())}async getMaterialItems(n){return this.featuresView.getMaterialItems(n)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(n){const t=this.tileInfoView.getTileBounds(j(),n),e=()=>this.layerView.view.labelManager.requestUpdate();return new ct(n,t[0],t[3],this.featuresView.attributeView,e)}disposeTile(n){this.featuresView.removeChild(n),n.destroy(),this.layerView.view.labelManager.requestUpdate()}};S=G([Z("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],S);const Xt=S;export{Xt as default};
