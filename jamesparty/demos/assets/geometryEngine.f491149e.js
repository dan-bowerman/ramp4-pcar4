import{G as r}from"./geometryEngineBase.fd888c07.js";import{hydratedAdapter as i}from"./hydrated.ac5c3c8a.js";import"./main.d830b49c.js";function o(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function g(n){return r.extendedSpatialReferenceInfo(n)}function d(n,e){return r.clip(i,o(n),n,e)}function m(n,e){return r.cut(i,o(n),n,e)}function x(n,e){return r.contains(i,o(n),n,e)}function h(n,e){return r.crosses(i,o(n),n,e)}function w(n,e,t){return r.distance(i,o(n),n,e,t)}function A(n,e){return r.equals(i,o(n),n,e)}function E(n,e){return r.intersects(i,o(n),n,e)}function y(n,e){return r.touches(i,o(n),n,e)}function R(n,e){return r.within(i,o(n),n,e)}function I(n,e){return r.disjoint(i,o(n),n,e)}function v(n,e){return r.overlaps(i,o(n),n,e)}function S(n,e,t){return r.relate(i,o(n),n,e,t)}function V(n){return r.isSimple(i,o(n),n)}function z(n){return r.simplify(i,o(n),n)}function D(n,e=!1){return r.convexHull(i,o(n),n,e)}function H(n,e){return r.difference(i,o(n),n,e)}function L(n,e){return r.symmetricDifference(i,o(n),n,e)}function J(n,e){return r.intersect(i,o(n),n,e)}function N(n,e=null){return r.union(i,o(n),n,e)}function O(n,e,t,u,a,s){return r.offset(i,o(n),n,e,t,u,a,s)}function b(n,e,t,u=!1){return r.buffer(i,o(n),n,e,t,u)}function j(n,e,t,u,a,s){return r.geodesicBuffer(i,o(n),n,e,t,u,a,s)}function q(n,e,t=!0){return r.nearestCoordinate(i,o(n),n,e,t)}function B(n,e){return r.nearestVertex(i,o(n),n,e)}function C(n,e,t,u){return r.nearestVertices(i,o(n),n,e,t,u)}function c(n){return"xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent.center:null}function $(n,e,t){var u;if(n==null)throw new Error("Illegal Argument Exception");const a=n.spatialReference;if((t=(u=t)!=null?u:c(n))==null)throw new Error("Illegal Argument Exception");const s=n.constructor.fromJSON(r.rotate(n,e,t));return s.spatialReference=a,s}function k(n,e){var t;if(n==null)throw new Error("Illegal Argument Exception");const u=n.spatialReference;if((e=(t=e)!=null?t:c(n))==null)throw new Error("Illegal Argument Exception");const a=n.constructor.fromJSON(r.flipHorizontal(n,e));return a.spatialReference=u,a}function G(n,e){var t;if(n==null)throw new Error("Illegal Argument Exception");const u=n.spatialReference;if((e=(t=e)!=null?t:c(n))==null)throw new Error("Illegal Argument Exception");const a=n.constructor.fromJSON(r.flipVertical(n,e));return a.spatialReference=u,a}function F(n,e,t,u){return r.generalize(i,o(n),n,e,t,u)}function K(n,e,t){return r.densify(i,o(n),n,e,t)}function M(n,e,t,u=0){return r.geodesicDensify(i,o(n),n,e,t,u)}function P(n,e){return r.planarArea(i,o(n),n,e)}function Q(n,e){return r.planarLength(i,o(n),n,e)}function T(n,e,t){return r.geodesicArea(i,o(n),n,e,t)}function U(n,e,t){return r.geodesicLength(i,o(n),n,e,t)}export{b as buffer,d as clip,x as contains,D as convexHull,h as crosses,m as cut,K as densify,H as difference,I as disjoint,w as distance,A as equals,g as extendedSpatialReferenceInfo,k as flipHorizontal,G as flipVertical,F as generalize,T as geodesicArea,j as geodesicBuffer,M as geodesicDensify,U as geodesicLength,J as intersect,E as intersects,V as isSimple,q as nearestCoordinate,B as nearestVertex,C as nearestVertices,O as offset,v as overlaps,P as planarArea,Q as planarLength,S as relate,$ as rotate,z as simplify,L as symmetricDifference,y as touches,N as union,R as within};
