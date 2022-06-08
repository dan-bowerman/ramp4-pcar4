import{j5 as o,j6 as E,j7 as x,j8 as C,j9 as k}from"./main.c52d903d.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */var h;(function(t){t.green="checkCircle",t.yellow="exclamationMarkTriangle",t.red="exclamationMarkTriangle",t.blue="lightbulb"})(h||(h={}));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const _="calcite-theme-auto",I="calcite-theme-dark",S="calcite-theme-light",q={autoTheme:_,darkTheme:I,lightTheme:S,rtl:"calcite--rtl"};function y(t){const i="dir",n=`[${i}]`,e=L(t,n);return e?e.getAttribute(i):"ltr"}function O(t){return t.getRootNode()}function $(t){return t.host||null}function L(t,i){function n(e){return e?e.closest(i)||n($(O(e))):null}return n(t)}function T(t,i,n){const e=`[slot="${i}"]`;return n?.all?N(t,e,n):R(t,e,n)}function N(t,i,n){let e=Array.from(t.querySelectorAll(i));e=n&&n.direct===!1?e:e.filter(c=>c.parentElement===t);const a=n?.selector;return a?e.map(c=>Array.from(c.querySelectorAll(a))).reduce((c,s)=>[...c,...s],[]).filter(c=>!!c):e}function R(t,i,n){let e=t.querySelector(i);e=n&&n.direct===!1||e?.parentElement===t?e:null;const a=n?.selector;return a?e.querySelector(a):e}function w(t,i,n){if(typeof i=="string"&&i!=="")return i;if(i==="")return t[n]}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */function A(t,i,n){const e=j(t);return new e(i,n)}function j(t){return t==="intersection"?IntersectionObserver:t==="mutation"?MutationObserver:ResizeObserver}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const B={icon:"icon",flipRtl:"flip-rtl"},p={},g={},v={s:16,m:24,l:32};async function M({icon:t,scale:i}){const n=v[i],e=P(t),a=e.charAt(e.length-1)==="F",s=`${a?e.substring(0,e.length-1):e}${n}${a?"F":""}`;if(p[s])return p[s];g[s]||(g[s]=fetch(C(`./assets/calcite-icon/${s}.json`)).then(u=>u.json()).catch(()=>(console.error(`"${s}" is not a valid calcite-ui-icon name`),"")));const l=await g[s];return p[s]=l,l}function P(t){const i=!isNaN(Number(t.charAt(0))),n=t.split("-");return n.length===1?i?`i${t}`:t:n.map((e,a)=>a===0?i?`i${e.toUpperCase()}`:e:e.charAt(0).toUpperCase()+e.slice(1)).join("")}const F="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";let b=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;(t=this.intersectionObserver)===null||t===void 0||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:n,scale:e,textLabel:a}=this,c=y(t),s=v[e],l=!!a,u=[].concat(n||"");return o(E,{"aria-hidden":(!l).toString(),"aria-label":l?a:null,role:l?"img":null},o("svg",{class:{[B.flipRtl]:c==="rtl"&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${s} ${s}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},u.map(r=>typeof r=="string"?o("path",{d:r}):o("path",{d:r.d,opacity:"opacity"in r?r.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:i,visible:n}=this;!t||!n||(this.pathData=await M({icon:t,scale:i}))}waitUntilVisible(t){if(this.intersectionObserver=A("intersection",i=>{i.forEach(n=>{n.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return F}};b=x(b,[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function D(){["calcite-icon"].forEach(i=>{switch(i){case"calcite-icon":customElements.get(i)||customElements.define(i,b);break}})}D();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const H={close:"Close"},m={title:"title",message:"message",link:"link",actionsEnd:"actions-end"},d={actionsEnd:"actions-end",close:"notice-close",container:"container",content:"notice-content",icon:"notice-icon"},U="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) ::slotted(calcite-link){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) ::slotted(calcite-link){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) ::slotted(calcite-link){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;margin-left:auto;margin-right:auto;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{display:none;text-align:left;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;opacity:0;pointer-events:none;background-color:var(--calcite-ui-foreground-1);max-height:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{display:-ms-flexbox;display:flex;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;border-width:2px;pointer-events:auto}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){display:inline;margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-right:var(--calcite-notice-spacing-token-small)}.calcite--rtl slot[name=message]::slotted(*),.calcite--rtl *::slotted([slot=message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.notice-close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;border-style:none;outline:2px solid transparent;outline-offset:2px;cursor:pointer;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}.calcite--rtl{text-align:right;border-left:none;border-right:0px solid}.calcite--rtl .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}.calcite--rtl .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.calcite--rtl .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}";let f=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNoticeClose=k(this,"calciteNoticeClose",7),this.calciteNoticeOpen=k(this,"calciteNoticeOpen",7),this.active=!1,this.color="blue",this.dismissible=!1,this.intlClose=H.close,this.scale="m",this.width="auto",this.close=()=>{this.active=!1,this.calciteNoticeClose.emit()}}updateRequestedIcon(){this.requestedIcon=w(h,this.icon,this.color)}componentWillLoad(){this.requestedIcon=w(h,this.icon,this.color)}componentDidLoad(){this.noticeLinkEl=this.el.querySelector("calcite-link")}render(){const{el:t}=this,i=y(t),n=o("button",{"aria-label":this.intlClose,class:d.close,onClick:this.close,ref:a=>this.closeButton=a},o("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":"s"})),e=T(t,m.actionsEnd);return o("div",{class:{[d.container]:!0,[q.rtl]:i==="rtl"}},this.requestedIcon?o("div",{class:d.icon},o("calcite-icon",{icon:this.requestedIcon,scale:this.scale==="l"?"m":"s"})):null,o("div",{class:d.content},o("slot",{name:m.title}),o("slot",{name:m.message}),o("slot",{name:m.link})),e?o("div",{class:d.actionsEnd},o("slot",{name:m.actionsEnd})):null,this.dismissible?n:null)}async setFocus(){!this.closeButton&&!this.noticeLinkEl||(this.noticeLinkEl?this.noticeLinkEl.setFocus():this.closeButton&&this.closeButton.focus())}get el(){return this}static get watchers(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}static get style(){return U}};f=x(f,[1,"calcite-notice",{active:[1540],color:[513],dismissible:[516],icon:[520],intlClose:[1,"intl-close"],scale:[513],width:[513],setFocus:[64]}]);function z(){["calcite-notice","calcite-icon"].forEach(i=>{switch(i){case"calcite-notice":customElements.get(i)||customElements.define(i,f);break;case"calcite-icon":customElements.get(i)||D();break}})}z();const W=f,Y=z;export{W as CalciteNotice,Y as defineCustomElement};
