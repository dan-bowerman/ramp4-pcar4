import{r as e}from"./main.e0908dae.js";class h{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(this.size===0)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return this.size===0?null:this._buffer[this._start]}find(t){if(this.size===0)return null;for(const s of this._buffer)if(e(s)&&t(s))return s;return null}clear(t){let s=this.dequeue();for(;e(s);)t&&t(s),s=this.dequeue()}}export{h as s};
