import{f5 as Q,ew as ee,ex as te,eF as he,ez as B,eE as N,eC as I,eG as P,eD as H,eL as ne,e_ as pe,eQ as ue,eB as j,eH as fe,fq as ge,eJ as de,eK as me,fc as ke,ey as V,eA as F,eZ as xe,eO as be,eN as we}from"./main.e0908dae.js";class _e{folderName=""}const ye={},$e={},ze={};var ie=(r=>(r.folderName="help/folderName",r))(ie||{});function tt(){const r=new _e;return{namespaced:!0,state:r,getters:{...ye},actions:{...ze,...Q.actions(r)},mutations:{...$e,...Q.mutations(r)}}}const Se=ee({name:"HelpSectionV",props:{helpSection:{type:Object,required:!0}},data(){return{expanded:!1}},methods:{toggleExpanded(){this.expanded=!this.expanded}}}),Te=r=>(de("data-v-e4bebee0"),r=r(),me(),r),Re=["content"],ve={class:"text-lg text-left flex-grow"},Ie=Te(()=>I("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[I("path",{d:"M0 0h24v24H0V0z",fill:"none"}),I("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)),Ae=[Ie],Ce=["innerHTML"];function Ee(r,e,n,t,i,s){const l=he("tippy");return B(),N("div",null,[I("div",null,[P((B(),N("button",{class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:e[0]||(e[0]=a=>r.toggleExpanded()),content:r.$t(r.expanded?"help.section.collapse":"help.section.expand")},[H(" name "),I("span",ve,ne(r.helpSection.header),1),H(" dropdown icon "),I("div",{class:pe(["icon",{"transform -rotate-180":r.expanded}])},Ae,2)],8,Re)),[[l,{placement:"top-end",hideOnClick:!1}]]),ue(ge,{name:"help-item",mode:"out-in"},{default:j(()=>[P(I("div",{innerHTML:r.helpSection.info,class:"section-body px-20 pt-5 overflow-hidden"},null,8,Ce),[[fe,r.expanded]])]),_:1})])])}var Le=te(Se,[["render",Ee],["__scopeId","data-v-e4bebee0"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/help/section.vue"]]);function se(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let C=se();function Be(r){C=r}const De=/[&<>"']/,qe=/[&<>"']/g,Ze=/[<>"']|&(?!#?\w+;)/,Oe=/[<>"']|&(?!#?\w+;)/g,Ne={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},G=r=>Ne[r];function x(r,e){if(e){if(De.test(r))return r.replace(qe,G)}else if(Ze.test(r))return r.replace(Oe,G);return r}const je=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function re(r){return r.replace(je,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Ue=/(^|[^\[])\^/g;function d(r,e){r=typeof r=="string"?r:r.source,e=e||"";const n={replace:(t,i)=>(i=i.source||i,i=i.replace(Ue,"$1"),r=r.replace(t,i),n),getRegex:()=>new RegExp(r,e)};return n}const Me=/[^\w:]/g,Qe=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function W(r,e,n){if(r){let t;try{t=decodeURIComponent(re(n)).replace(Me,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!Qe.test(n)&&(n=Fe(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const q={},Pe=/^[^:]+:\/*[^/]*$/,He=/^([^:]+:)[\s\S]*$/,Ve=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Fe(r,e){q[" "+r]||(Pe.test(r)?q[" "+r]=r+"/":q[" "+r]=Z(r,"/",!0)),r=q[" "+r];const n=r.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:r.replace(He,"$1")+e:e.charAt(0)==="/"?n?e:r.replace(Ve,"$1")+e:r+e}const O={exec:function(){}};function y(r){let e=1,n,t;for(;e<arguments.length;e++){n=arguments[e];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}function X(r,e){const n=r.replace(/\|/g,(s,l,a)=>{let o=!1,u=l;for(;--u>=0&&a[u]==="\\";)o=!o;return o?"|":" |"}),t=n.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function Z(r,e,n){const t=r.length;if(t===0)return"";let i=0;for(;i<t;){const s=r.charAt(t-i-1);if(s===e&&!n)i++;else if(s!==e&&n)i++;else break}return r.slice(0,t-i)}function Ge(r,e){if(r.indexOf(e[1])===-1)return-1;const n=r.length;let t=0,i=0;for(;i<n;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])t++;else if(r[i]===e[1]&&(t--,t<0))return i;return-1}function le(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function J(r,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=r),e>>=1,r+=r;return n+r}function K(r,e,n,t){const i=e.href,s=e.title?x(e.title):null,l=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){t.state.inLink=!0;const a={type:"link",raw:n,href:i,title:s,text:l,tokens:t.inlineTokens(l,[])};return t.state.inLink=!1,a}else return{type:"image",raw:n,href:i,title:s,text:x(l)}}function We(r,e){const n=r.match(/^(\s+)(?:```)/);if(n===null)return e;const t=n[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[l]=s;return l.length>=t.length?i.slice(t.length):i}).join(`
`)}class U{constructor(e){this.options=e||C}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Z(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],i=We(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim():n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){const s=Z(t,"#");(this.options.pedantic||!s||/ $/.test(s))&&(t=s.trim())}const i={type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const t=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(t,[]),text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t,i,s,l,a,o,u,g,w,m,p,A,_=n[1].trim();const S=_.length>1,k={type:"list",raw:"",ordered:S,start:S?+_.slice(0,-1):"",loose:!1,items:[]};_=S?`\\d{1,9}\\${_.slice(-1)}`:`\\${_}`,this.options.pedantic&&(_=S?_:"[*+-]");const b=new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(A=!1,!(!(n=b.exec(e))||this.rules.block.hr.test(e)));){if(t=n[0],e=e.substring(t.length),g=n[2].split(`
`,1)[0],w=e.split(`
`,1)[0],this.options.pedantic?(l=2,p=g.trimLeft()):(l=n[2].search(/[^ ]/),l=l>4?1:l,p=g.slice(l),l+=n[1].length),o=!1,!g&&/^ *$/.test(w)&&(t+=w+`
`,e=e.substring(w.length+1),A=!0),!A){const T=new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(m=e.split(`
`,1)[0],g=m,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!T.test(g));){if(g.search(/[^ ]/)>=l||!g.trim())p+=`
`+g.slice(l);else if(!o)p+=`
`+g;else break;!o&&!g.trim()&&(o=!0),t+=m+`
`,e=e.substring(m.length+1)}}k.loose||(u?k.loose=!0:/\n *\n *$/.test(t)&&(u=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(p),i&&(s=i[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),k.items.push({type:"list_item",raw:t,task:!!i,checked:s,loose:!1,text:p}),k.raw+=t}k.items[k.items.length-1].raw=t.trimRight(),k.items[k.items.length-1].text=p.trimRight(),k.raw=k.raw.trimRight();const E=k.items.length;for(a=0;a<E;a++){this.lexer.state.top=!1,k.items[a].tokens=this.lexer.blockTokens(k.items[a].text,[]);const T=k.items[a].tokens.filter(v=>v.type==="space"),R=T.every(v=>{const D=v.raw.split("");let L=0;for(const ce of D)if(ce===`
`&&(L+=1),L>1)return!0;return!1});!k.loose&&T.length&&R&&(k.loose=!0,k.items[a].loose=!0)}return k}}html(e){const n=this.rules.block.html.exec(e);if(n){const t={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(t.type="paragraph",t.text=this.options.sanitizer?this.options.sanitizer(n[0]):x(n[0]),t.tokens=[],this.lexer.inline(t.text,t.tokens)),t}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const t=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:t,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const t={type:"table",header:X(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){t.raw=n[0];let i=t.align.length,s,l,a,o;for(s=0;s<i;s++)/^ *-+: *$/.test(t.align[s])?t.align[s]="right":/^ *:-+: *$/.test(t.align[s])?t.align[s]="center":/^ *:-+ *$/.test(t.align[s])?t.align[s]="left":t.align[s]=null;for(i=t.rows.length,s=0;s<i;s++)t.rows[s]=X(t.rows[s],t.header.length).map(u=>({text:u}));for(i=t.header.length,l=0;l<i;l++)t.header[l].tokens=[],this.lexer.inlineTokens(t.header[l].text,t.header[l].tokens);for(i=t.rows.length,l=0;l<i;l++)for(o=t.rows[l],a=0;a<o.length;a++)o[a].tokens=[],this.lexer.inlineTokens(o[a].text,o[a].tokens);return t}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n){const t={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}text(e){const n=this.rules.block.text.exec(e);if(n){const t={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:x(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):x(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const l=Z(t.slice(0,-1),"\\");if((t.length-l.length)%2===0)return}else{const l=Ge(n[2],"()");if(l>-1){const o=(n[0].indexOf("!")===0?5:4)+n[1].length+l;n[2]=n[2].substring(0,l),n[0]=n[0].substring(0,o).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);l&&(i=l[1],s=l[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),K(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let i=(t[2]||t[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return K(t,i,t[0],this.lexer)}}emStrong(e,n,t=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(t===""||this.rules.inline.punctuation.exec(t))){const l=i[0].length-1;let a,o,u=l,g=0;const w=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(w.lastIndex=0,n=n.slice(-1*e.length+l);(i=w.exec(n))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(o=a.length,i[3]||i[4]){u+=o;continue}else if((i[5]||i[6])&&l%3&&!((l+o)%3)){g+=o;continue}if(u-=o,u>0)continue;if(o=Math.min(o,o+u+g),Math.min(l,o)%2){const p=e.slice(1,l+i.index+o);return{type:"em",raw:e.slice(0,l+i.index+o+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}const m=e.slice(2,l+i.index+o-1);return{type:"strong",raw:e.slice(0,l+i.index+o+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," ");const i=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return i&&s&&(t=t.substring(1,t.length-1)),t=x(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(e,n){const t=this.rules.inline.autolink.exec(e);if(t){let i,s;return t[2]==="@"?(i=x(this.options.mangle?n(t[1]):t[1]),s="mailto:"+i):(i=x(t[1]),s=i),{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=x(this.options.mangle?n(t[0]):t[0]),s="mailto:"+i;else{let l;do l=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(l!==t[0]);i=x(t[0]),t[1]==="www."?s="http://"+i:s=i}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){const t=this.rules.inline.text.exec(e);if(t){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):x(t[0]):t[0]:i=x(this.options.smartypants?n(t[0]):t[0]),{type:"text",raw:t[0],text:i}}}}const h={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:O,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};h._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;h._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;h.def=d(h.def).replace("label",h._label).replace("title",h._title).getRegex();h.bullet=/(?:[*+-]|\d{1,9}[.)])/;h.listItemStart=d(/^( *)(bull) */).replace("bull",h.bullet).getRegex();h.list=d(h.list).replace(/bull/g,h.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+h.def.source+")").getRegex();h._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";h._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;h.html=d(h.html,"i").replace("comment",h._comment).replace("tag",h._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();h.paragraph=d(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.blockquote=d(h.blockquote).replace("paragraph",h.paragraph).getRegex();h.normal=y({},h);h.gfm=y({},h.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});h.gfm.table=d(h.gfm.table).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.gfm.paragraph=d(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",h.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.pedantic=y({},h.normal,{html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",h._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:O,paragraph:d(h.normal._paragraph).replace("hr",h.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const c={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:O,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:O,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};c._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";c.punctuation=d(c.punctuation).replace(/punctuation/g,c._punctuation).getRegex();c.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;c.escapedEmSt=/\\\*|\\_/g;c._comment=d(h._comment).replace("(?:-->|$)","-->").getRegex();c.emStrong.lDelim=d(c.emStrong.lDelim).replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimAst=d(c.emStrong.rDelimAst,"g").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimUnd=d(c.emStrong.rDelimUnd,"g").replace(/punct/g,c._punctuation).getRegex();c._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;c._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;c._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;c.autolink=d(c.autolink).replace("scheme",c._scheme).replace("email",c._email).getRegex();c._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;c.tag=d(c.tag).replace("comment",c._comment).replace("attribute",c._attribute).getRegex();c._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;c._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;c._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;c.link=d(c.link).replace("label",c._label).replace("href",c._href).replace("title",c._title).getRegex();c.reflink=d(c.reflink).replace("label",c._label).replace("ref",h._label).getRegex();c.nolink=d(c.nolink).replace("ref",h._label).getRegex();c.reflinkSearch=d(c.reflinkSearch,"g").replace("reflink",c.reflink).replace("nolink",c.nolink).getRegex();c.normal=y({},c);c.pedantic=y({},c.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",c._label).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",c._label).getRegex()});c.gfm=y({},c.normal,{escape:d(c.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});c.gfm.url=d(c.gfm.url,"i").replace("email",c.gfm._extended_email).getRegex();c.breaks=y({},c.gfm,{br:d(c.br).replace("{2,}","*").getRegex(),text:d(c.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Xe(r){return r.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Y(r){let e="",n,t;const i=r.length;for(n=0;n<i;n++)t=r.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}class ${constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||C,this.options.tokenizer=this.options.tokenizer||new U,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:h.normal,inline:c.normal};this.options.pedantic?(n.block=h.pedantic,n.inline=c.pedantic):this.options.gfm&&(n.block=h.gfm,this.options.breaks?n.inline=c.breaks:n.inline=c.gfm),this.tokenizer.rules=n}static get rules(){return{block:h,inline:c}}static lex(e,n){return new $(n).lex(e)}static lexInline(e,n){return new $(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,o,u)=>o+"    ".repeat(u.length));let t,i,s,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(t=a.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const o=e.slice(1);let u;this.options.extensions.startBlock.forEach(function(g){u=g.call({lexer:this},o),typeof u=="number"&&u>=0&&(a=Math.min(a,u))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s))){i=n[n.length-1],l&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t),l=s.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n){this.inlineQueue.push({src:e,tokens:n})}inlineTokens(e,n=[]){let t,i,s,l=e,a,o,u;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)g.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,a.index)+"["+J("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,a.index)+"["+J("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(l))!=null;)l=l.slice(0,a.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(u=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(t=g.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,l,u)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e,Y)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e,Y))){e=e.substring(t.raw.length),n.push(t);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const w=e.slice(1);let m;this.options.extensions.startInline.forEach(function(p){m=p.call({lexer:this},w),typeof m=="number"&&m>=0&&(g=Math.min(g,m))}),g<1/0&&g>=0&&(s=e.substring(0,g+1))}if(t=this.tokenizer.inlineText(s,Xe)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(u=t.raw.slice(-1)),o=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class M{constructor(e){this.options=e||C}code(e,n,t){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(t=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+x(i,!0)+'">'+(t?e:x(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:x(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,t,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(t);return`<h${n} id="${s}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,t){const i=n?"ol":"ul",s=n&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){if(e=W(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i='<a href="'+x(e)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+t+"</a>",i}image(e,n,t){if(e=W(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i=`<img src="${e}" alt="${t}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class ae{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}}class oe{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let t=e,i=0;if(this.seen.hasOwnProperty(t)){i=this.seen[e];do i++,t=e+"-"+i;while(this.seen.hasOwnProperty(t))}return n||(this.seen[e]=i,this.seen[t]=0),t}slug(e,n={}){const t=this.serialize(e);return this.getNextSafeSlug(t,n.dryrun)}}class z{constructor(e){this.options=e||C,this.options.renderer=this.options.renderer||new M,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ae,this.slugger=new oe}static parse(e,n){return new z(n).parse(e)}static parseInline(e,n){return new z(n).parseInline(e)}parse(e,n=!0){let t="",i,s,l,a,o,u,g,w,m,p,A,_,S,k,b,E,T,R,v;const D=e.length;for(i=0;i<D;i++){if(p=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(v=this.options.extensions.renderers[p.type].call({parser:this},p),v!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){t+=v||"";continue}switch(p.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{t+=this.renderer.heading(this.parseInline(p.tokens),p.depth,re(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{t+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(w="",g="",a=p.header.length,s=0;s<a;s++)g+=this.renderer.tablecell(this.parseInline(p.header[s].tokens),{header:!0,align:p.align[s]});for(w+=this.renderer.tablerow(g),m="",a=p.rows.length,s=0;s<a;s++){for(u=p.rows[s],g="",o=u.length,l=0;l<o;l++)g+=this.renderer.tablecell(this.parseInline(u[l].tokens),{header:!1,align:p.align[l]});m+=this.renderer.tablerow(g)}t+=this.renderer.table(w,m);continue}case"blockquote":{m=this.parse(p.tokens),t+=this.renderer.blockquote(m);continue}case"list":{for(A=p.ordered,_=p.start,S=p.loose,a=p.items.length,m="",s=0;s<a;s++)b=p.items[s],E=b.checked,T=b.task,k="",b.task&&(R=this.renderer.checkbox(E),S?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=R+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=R+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:R}):k+=R),k+=this.parse(b.tokens,S),m+=this.renderer.listitem(k,T,E);t+=this.renderer.list(m,A,_);continue}case"html":{t+=this.renderer.html(p.text);continue}case"paragraph":{t+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(m=p.tokens?this.parseInline(p.tokens):p.text;i+1<D&&e[i+1].type==="text";)p=e[++i],m+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);t+=n?this.renderer.paragraph(m):m;continue}default:{const L='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(L);return}else throw new Error(L)}}}return t}parseInline(e,n){n=n||this.renderer;let t="",i,s,l;const a=e.length;for(i=0;i<a;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(l=this.options.extensions.renderers[s.type].call({parser:this},s),l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){t+=l||"";continue}switch(s.type){case"escape":{t+=n.text(s.text);break}case"html":{t+=n.html(s.text);break}case"link":{t+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{t+=n.image(s.href,s.title,s.text);break}case"strong":{t+=n.strong(this.parseInline(s.tokens,n));break}case"em":{t+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{t+=n.codespan(s.text);break}case"br":{t+=n.br();break}case"del":{t+=n.del(this.parseInline(s.tokens,n));break}case"text":{t+=n.text(s.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(o);return}else throw new Error(o)}}}return t}}function f(r,e,n){if(typeof r>"u"||r===null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=y({},f.defaults,e||{}),le(e),n){const t=e.highlight;let i;try{i=$.lex(r,e)}catch(a){return n(a)}const s=function(a){let o;if(!a)try{e.walkTokens&&f.walkTokens(i,e.walkTokens),o=z.parse(i,e)}catch(u){a=u}return e.highlight=t,a?n(a):n(null,o)};if(!t||t.length<3||(delete e.highlight,!i.length))return s();let l=0;f.walkTokens(i,function(a){a.type==="code"&&(l++,setTimeout(()=>{t(a.text,a.lang,function(o,u){if(o)return s(o);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),l--,l===0&&s()})},0))}),l===0&&s();return}try{const t=$.lex(r,e);return e.walkTokens&&f.walkTokens(t,e.walkTokens),z.parse(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+x(t.message+"",!0)+"</pre>";throw t}}f.options=f.setOptions=function(r){return y(f.defaults,r),Be(f.defaults),f};f.getDefaults=se;f.defaults=C;f.use=function(...r){const e=y({},...r),n=f.defaults.extensions||{renderers:{},childTokens:{}};let t;r.forEach(i=>{if(i.extensions&&(t=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const l=n.renderers?n.renderers[s.name]:null;l?n.renderers[s.name]=function(...a){let o=s.renderer.apply(this,a);return o===!1&&(o=l.apply(this,a)),o}:n.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[s.level]?n[s.level].unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}s.childTokens&&(n.childTokens[s.name]=s.childTokens)})),i.renderer){const s=f.defaults.renderer||new M;for(const l in i.renderer){const a=s[l];s[l]=(...o)=>{let u=i.renderer[l].apply(s,o);return u===!1&&(u=a.apply(s,o)),u}}e.renderer=s}if(i.tokenizer){const s=f.defaults.tokenizer||new U;for(const l in i.tokenizer){const a=s[l];s[l]=(...o)=>{let u=i.tokenizer[l].apply(s,o);return u===!1&&(u=a.apply(s,o)),u}}e.tokenizer=s}if(i.walkTokens){const s=f.defaults.walkTokens;e.walkTokens=function(l){i.walkTokens.call(this,l),s&&s.call(this,l)}}t&&(e.extensions=n),f.setOptions(e)})};f.walkTokens=function(r,e){for(const n of r)switch(e.call(f,n),n.type){case"table":{for(const t of n.header)f.walkTokens(t.tokens,e);for(const t of n.rows)for(const i of t)f.walkTokens(i.tokens,e);break}case"list":{f.walkTokens(n.items,e);break}default:f.defaults.extensions&&f.defaults.extensions.childTokens&&f.defaults.extensions.childTokens[n.type]?f.defaults.extensions.childTokens[n.type].forEach(function(t){f.walkTokens(n[t],e)}):n.tokens&&f.walkTokens(n.tokens,e)}};f.parseInline=function(r,e){if(typeof r>"u"||r===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");e=y({},f.defaults,e||{}),le(e);try{const n=$.lexInline(r,e);return e.walkTokens&&f.walkTokens(n,e.walkTokens),z.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+x(n.message+"",!0)+"</pre>";throw n}};f.Parser=z;f.parser=z.parse;f.Renderer=M;f.TextRenderer=ae;f.Lexer=$;f.lexer=$.lex;f.Tokenizer=U;f.Slugger=oe;f.parse=f;z.parse;$.lex;const Je=ee({name:"HelpScreenV",components:{"help-section":Le},props:{panel:{type:Object,required:!0}},data(){return{folderName:this.get(ie.folderName),helpSections:[],watchers:[]}},created(){this.watchers.push(this.$watch("$i18n.locale",(r,e)=>{if(r===e)return;const n="../help",t=this.folderName||"default",i=new f.Renderer;i.image=(s,l)=>(s.indexOf("http")===-1&&(s=`${n}/${t}/images/`+s),`<img src="${s}" alt="${l}">`),ke.get(`${n}/${t}/${r}.md`).then(s=>{const l=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;let a=s.data.replace(new RegExp(String.fromCharCode(13),"g"),"");this.helpSections=[];let o;for(;o=l.exec(a);)this.helpSections.push({header:o[1],info:f(o[0].split(`
`).splice(2).join(`
`),{renderer:i})})})},{immediate:!0}))},beforeUnmount(){this.watchers.forEach(r=>r())}});function Ke(r,e,n,t,i,s){const l=V("help-section"),a=V("panel-screen");return B(),F(a,{panel:r.panel},{header:j(()=>[xe(ne(r.$t("help.title")),1)]),content:j(()=>[(B(!0),N(we,null,be(r.helpSections,(o,u)=>(B(),F(l,{helpSection:o,key:u},null,8,["helpSection"]))),128))]),_:1},8,["panel"])}var Ye=te(Je,[["render",Ke],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/help/screen.vue"]]),nt=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"}));export{ie as H,Ye as a,tt as h,nt as s};
