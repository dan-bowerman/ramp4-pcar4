import{eP as r,eT as a}from"./main.4c7c23d9.js";import o from"./screen.07532410.js";import"./vue.esm-bundler.228680e8.js";var l={en:{"layer-reorder.title":"Reorder Layers","layer-reorder.nolayers":"No Layers","layer-reorder.loading":"Loading","layer-reorder.expand":"Expand Sublayers","layer-reorder.expanded":"{name} sublayers expanded","layer-reorder.collapse":"Collapse Sublayers","layer-reorder.collapsed":"{name} sublayers collapsed","layer-reorder.move.up":"Move up","layer-reorder.move.down":"Move down","layer-reorder.layermoved":"{name} moved to index {index}"},fr:{"layer-reorder.title":"[fr] Reorder Layers","layer-reorder.nolayers":"[fr] No Layers","layer-reorder.loading":"[fr] Loading","layer-reorder.expand":"[fr] Expand Sublayers","layer-reorder.expanded":"[fr] {name} sublayers expanded","layer-reorder.collapse":"[fr] Collapse Sublayers","layer-reorder.collapsed":"[fr] {name} sublayers collapsed","layer-reorder.move.up":"[fr] Move up","layer-reorder.move.down":"[fr] Move down","layer-reorder.layermoved":"[fr] {name} moved to index {index}"}};class d extends r{openLayerReorder(){this.$iApi.panel.get("layer-reorder").isOpen||this.$iApi.panel.open("layer-reorder")}}class p extends d{added(){console.log(`[fixture] ${this.id} added`),this.$iApi.panel.register({"layer-reorder":{screens:{"layer-reorder-screen":a(o)},style:{width:"350px"},button:{tooltip:"layer-reorder.title",icon:'<svg class="flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" /></svg>'},alertName:"layer-reorder.title"}},{i18n:{messages:l}})}removed(){console.log(`[fixture] ${this.id} removed`),this.$iApi.panel.remove("layer-reorder")}}export{p as default};
