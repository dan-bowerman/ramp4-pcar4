import{s as R}from"./main.9f707e1a.js";import{E as s,A as r,e as h}from"./Utils.0fb2603b.js";function C(i){switch(i){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}function N(i,t){const e=r.SIZE_FIELD_STOPS|r.SIZE_MINMAX_VALUE|r.SIZE_SCALE_STOPS|r.SIZE_UNIT_VALUE,a=(i&(h.FIELD_TARGETS_OUTLINE|h.MINMAX_TARGETS_OUTLINE|h.SCALE_TARGETS_OUTLINE|h.UNIT_TARGETS_OUTLINE))>>>4;return t.isOutline||t.isOutlinedFill?e&a:e&~a}const z=0,y=8,D=7,E=8,m=11,T=11,M=12,L=13,A=14,F=15,_=15,I=16,O=17,f=18,x=19,U=20,B=21,b=22;function X(i,t){switch(i){case s.FILL:return S.from(t);case s.LINE:return d.from(t);case s.MARKER:return u.from(t);case s.TEXT:return c.from(t);case s.LABEL:return V.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${i}`)}}function $(i){switch(n.load(i).geometryType){case s.MARKER:return new u(i);case s.FILL:return new S(i);case s.LINE:return new d(i);case s.TEXT:return new c(i);case s.LABEL:return new V(i)}}class n{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(E,m)}set geometryType(t){this.setBits(t,E,m)}get mapAligned(){return!!this.bit(U)}set mapAligned(t){this.setBit(U,t)}get sdf(){return!!this.bit(T)}set sdf(t){this.setBit(T,t)}get pattern(){return!!this.bit(M)}set pattern(t){this.setBit(M,t)}get textureBinding(){return this.bits(z,y)}set textureBinding(t){this.setBits(t,z,y)}get geometryTypeString(){switch(this.geometryType){case s.FILL:return"fill";case s.MARKER:return"marker";case s.LINE:return"line";case s.TEXT:return"text";case s.LABEL:return"label";default:throw new R(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const a=1<<t;e?this._data|=a:this._data&=~a}bit(t){return(this._data&1<<t)>>t}setBits(t,e,a){for(let v=e,o=0;v<a;v++,o++)this.setBit(v,(t&1<<o)!=0)}bits(t,e){let a=0;for(let v=t,o=0;v<e;v++,o++)a|=this.bit(v)<<o;return a}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(D&this.textureBinding)}}n.shared=new n(0);const l=i=>class extends i{get vvSizeMinMaxValue(){return this.bit(I)!==0}set vvSizeMinMaxValue(t){this.setBit(I,t)}get vvSizeScaleStops(){return this.bit(O)!==0}set vvSizeScaleStops(t){this.setBit(O,t)}get vvSizeFieldStops(){return this.bit(f)!==0}set vvSizeFieldStops(t){this.setBit(f,t)}get vvSizeUnitValue(){return this.bit(x)!==0}set vvSizeUnitValue(t){this.setBit(x,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const a=N(t,e)&t;this.vvSizeMinMaxValue=!!(a&r.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(a&r.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(a&r.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(a&r.SIZE_SCALE_STOPS)}},w=i=>class extends i{get vvRotation(){return this.bit(F)!==0}set vvRotation(t){this.setBit(F,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&r.ROTATION)}},p=i=>class extends i{get vvColor(){return this.bit(L)!==0}set vvColor(t){this.setBit(L,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&r.COLOR)}},g=i=>class extends i{get vvOpacity(){return this.bit(A)!==0}set vvOpacity(t){this.setBit(A,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&r.OPACITY)}};class S extends p(g(l(n))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s.FILL,e.dotDensity=t.stride.fill==="dot-density",e.simple=t.stride.fill==="simple",e.outlinedFill=t.isOutlinedFill,e.dotDensity||e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(_)}set dotDensity(t){this.setBit(_,t)}get simple(){return!!this.bit(b)}set simple(t){this.setBit(b,t)}get outlinedFill(){return!!this.bit(B)}set outlinedFill(t){this.setBit(B,t)}}S.shared=new S(0);class u extends p(g(w(l(n)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s.MARKER,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}u.shared=new u(0);class d extends p(g(l(n))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s.LINE,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}d.shared=new d(0);class c extends p(g(w(l(n)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s.TEXT,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}c.shared=new c(0);class V extends l(n){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s.LABEL,e.setVV(t.vvFlags,t),e.mapAligned=C(t.placement),e.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}V.shared=new V(0);export{d as B,$ as F,X as L,c as R,u as U,n as _,V as b,C as e,S as x};
