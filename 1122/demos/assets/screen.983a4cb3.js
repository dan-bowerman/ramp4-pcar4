import{fc as B,f4 as P,ev as v,f5 as j,ew as _,ey as c,eD as u,eB as l,eE as T,eK as d,eM as V,eN as w,eF as R,eT as F,eY as x,eH as Q,f8 as H,ex as g,ez as z,eA as N,eP as y,eZ as Y,eC as b}from"./main.c8cfc77c.js";const X={A:10,B:12,C:11,E:13,G:24,H:24,J:24,K:35,L:35,M:35,N:35,P:35,R:46,S:47,T:48,V:59,X:[62,61],Y:60},$={en:{},fr:{}};class Z{list={};constructor(e,s){B.get(s).then(o=>{o.data.definitions.forEach(r=>$[e][r.code]=r.description),Object.keys($[e]).forEach(r=>{this.list[r]=$[e][r]})})}fsaToProvinces(e){const s={};let o=X[e.substring(0,1).toUpperCase()];return typeof o=="number"&&(o=[o]),o.forEach(r=>{s[r]=this.list[r]}),s}}function J(t,e){return new Z(t,e)}const L={en:{FSA:"Forward Sortation Area",NTS:"National Topographic System",COORD:"Latitude/Longitude",SCALE:"Scale"},fr:{FSA:"R\xE9gion De Tri D'Acheminement",NTS:"Syst\xE8me National De R\xE9f\xE9rence Cartographique",COORD:"Latitude/Longitude",SCALE:"\xC9chelle"}};class W{allTypes={};validTypes={};filterComplete=!1;constructor(e,s){B.get(s).then(o=>{o.data.definitions.forEach(r=>{L[e][r.code]=r.term.split(`${r.code}-`)[1]}),Object.keys(L[e]).forEach(r=>{this.allTypes[r]=L[e][r],this.validTypes[r]=L[e][r]})})}filterValidTypes(e){if(this.filterComplete)return this.validTypes;if(e=typeof e=="string"?[e]:e,e&&e.length>0)for(const s of e)delete this.validTypes[s];return this.filterComplete=!0,this.validTypes}}function K(t,e){return new W(t,e)}function q(t,e){const s=/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/,o=/^\d{2,3}[A-P]/,r=/^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/;if(s.test(e)){const n=e.slice(0,-1);return new ee(t,n)}else{if(r.test(e))return new te(t,e);if(o.test(e))return new se(t,e.substring(0,6).toUpperCase());{const n=new S(t,e);return n.onComplete=n.search().then(a=>(n.results=a,n)),n}}}class S{config;query;results=[];onComplete;latLongResult;featureResults=void 0;constructor(e,s){this.query=s,this.config=e}search(){return this.jsonRequest(this.getUrl()).then(e=>this.normalizeNameItems(e.items))}getUrl(e,s,o,r){let n="";return e?n=this.config.geoLocateUrl+"?q="+this.query:o&&r?n=`${this.config.geoNameUrl}?lat=${o}&lon=${r}&num=${this.config.maxResults}`:n=`${this.config.geoNameUrl}?q=${this.query}&num=${this.config.maxResults}`,n}normalizeNameItems(e){return e.filter(s=>this.config.types.validTypes[s.concise.code]).map(s=>({name:s.name,location:s.location,province:this.config.provinces.list[s.province.code],type:this.config.types.allTypes[s.concise.code],LatLon:{lat:s.latitude,lon:s.longitude},bbox:s.bbox}))}jsonRequest(e){return new Promise((s,o)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="json",r.onload=()=>{if(r.status===200){const n=typeof r.response=="string"?JSON.parse(r.response):r.response;s(n)}else o("Could not load results from remote service.")},r.send()})}locateByQuery(){return this.jsonRequest(this.getUrl(!0,void 0))}nameByLatLon(e,s,o){return this.jsonRequest(this.getUrl(!1,o,e,s)).then(r=>this.normalizeNameItems(r.items))}}class ee extends S{constructor(e,s){super(e,s);let o;o=s.split(/[\s|,|;|]/).filter(i=>!isNaN(i)&&i!=="").map(i=>parseFloat(i));const n=.015,a=[o[1]-n,o[0]-n,o[1]+n,o[0]+n];this.latLongResult={name:`${o[0]},${o[1]}`,location:{latitude:o[0],longitude:o[1]},type:"Latitude/Longitude",position:[o[1],o[0]],bbox:a},this.onComplete=new Promise((i,m)=>{this.nameByLatLon(o[0],o[1]).then(f=>{f?(this.results=f,i(this)):m("Given lat lon coordinates cannot be found")})})}}class te extends S{constructor(e,s){s=s.substring(0,3).toUpperCase(),super(e,s),this.onComplete=new Promise((o,r)=>{this.formatLocationResult().then(n=>{n?(this.featureResults=n,this.nameByLatLon(n.LatLon.lat,n.LatLon.lon,Object.keys(n._provinces).map(a=>parseInt(a))).then(a=>{this.results=a,o(this)})):r("FSA code given cannot be found.")})})}formatLocationResult(){return this.locateByQuery().then(e=>{if(e.length===1&&this.query){const s=this.config.provinces.fsaToProvinces(this.query);return{fsa:this.query,code:"FSA",desc:this.config.types.allTypes.FSA,province:Object.keys(s).map(o=>s[o]).join(","),_provinces:s,LatLon:{lat:e[0].geometry.coordinates[1],lon:e[0].geometry.coordinates[0]}}}})}}class se extends S{unitName;unit;mapSheets=[];constructor(e,s){super(e,s),s=isNaN(parseInt(s[2]))?"0"+s:s,this.unitName=s,this.onComplete=new Promise((o,r)=>{this.locateByQuery().then(n=>{if(n.length>0&&this.query){const a=this.locateToResult(n);this.unit=a[0],this.mapSheets=a,this.featureResults=this.unit,this.nameByLatLon(this.unit.LatLon.lat,this.unit.LatLon.lon).then(i=>{this.results=i,o(this)})}else r("Given NTS code not found")})})}locateToResult(e){return e.map(o=>{const r=o.title.split(" ");return{nts:r.shift()||"",location:r.join(" "),code:"NTS",desc:this.config.types.allTypes.NTS,LatLon:{lat:o.geometry.coordinates[1],lon:o.geometry.coordinates[0]},bbox:o.bbox}})}equals(e){return this.unitName===e.unitName}}const A="https://geogratis.gc.ca/services/geolocation/@{language}/locate",k="https://geogratis.gc.ca/services/geoname/@{language}/geonames.json",C="https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json",O="https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json",oe={10:"NL",11:"PE",12:"NS",13:"NB",24:"QC",35:"ON",46:"MB",47:"SK",48:"AB",59:"BC",60:"YU",61:"NT",62:"NU",72:"UF",73:"IW"};class re{config;constructor(e,s){let o,r,n,a;s?(o=s.geoLocation?s.geoLocation:A,r=s.geoNames?s.geoNames:k,n=s.geoProvince?s.geoProvince:C,a=s.geoTypes?s.geoTypes:O):(o=A,r=k,n=C,a=O),o=o.replace("@{language}",e),r=r.replace("@{language}",e),n=n.replace("@{language}",e),a=a.replace("@{language}",e);const i=s?.settings?s.settings.categories:[],m=s?.settings?s.settings.sortOrder:[],f=s?.settings?s.settings.maxResults:100,E=s?.settings?s?.settings.officialOnly:!1;this.config={language:e,geoNameUrl:r,geoLocateUrl:o,types:K(e,a),provinces:J(e,n),categories:i,sortOrder:m,maxResults:f,officialOnly:E},this.config.types.filterValidTypes(s?.excludeTypes),this._provinceList=[],this._typeList=[],this._excludedTypes=s?.excludeTypes||[]}get provinceList(){return this._provinceList}get typeList(){return this._typeList}set provinceList(e){this._provinceList=e}set typeList(e){this._typeList=e}findProvinceObj(e){return this.fetchProvinces().find(s=>s.name===e)}query(e){return q(this.config,e.toUpperCase()).onComplete.then(s=>{let o=[];s.featureResults?s.featureResults.fsa?o=[{name:s.featureResults.fsa,bbox:[s.featureResults.LatLon.lon+.02,s.featureResults.LatLon.lat-.02,s.featureResults.LatLon.lon-.02,s.featureResults.LatLon.lat+.02],type:s.featureResults.desc,position:[s.featureResults.LatLon.lon,s.featureResults.LatLon.lat],location:{latitude:s.featureResults.LatLon.lat,longitude:s.featureResults.LatLon.lon,province:this.findProvinceObj(s.featureResults.province)}}]:s.featureResults.nts&&(o=[{name:s.featureResults.nts,bbox:s.featureResults.bbox,type:s.featureResults.desc,position:[s.featureResults.LatLon.lon,s.featureResults.LatLon.lat],location:{city:s.featureResults.location,latitude:s.featureResults.LatLon.lat,longitude:s.featureResults.LatLon.lon}}]):s.latLongResult!==void 0&&(o=[s.latLongResult]);const r=s.results.map(n=>({name:n.name,bbox:n.bbox,type:n.type,position:[n.LatLon.lon,n.LatLon.lat],location:{city:n.location,latitude:n.LatLon.lat,longitude:n.LatLon.lon,province:this.findProvinceObj(n.province)}}));return o.concat(r)})}fetchProvinces(){const e=[],s={code:-1,abbr:"...",name:"..."};e.push(s);const o=this.config.provinces.list;for(const r in o)e.push({code:r,abbr:oe[r],name:o[r]});return this.provinceList=e,this.provinceList}fetchTypes(){const e=[],s={code:-1,name:"..."};e.push(s);const o=this.config.types.allTypes;for(const r in o)this._excludedTypes.includes(r)||e.push({code:r,name:o[r]});return this.typeList=e,this.typeList}}class ne{queryParams;GSservice;searchVal;lastSearchVal;searchResults;savedResults;resultsVisible;loadingResults;constructor(e){const s="en";this.GSservice=new re(s,e);const o={type:"",province:"",extent:""};this.queryParams=o,this.resultsVisible=!1,this.searchVal="",this.lastSearchVal="",this.searchResults=[],this.savedResults=[],this.loadingResults=!1}}const ae={getProvinces:t=>{const e=t.GSservice.fetchProvinces();return e.sort((s,o)=>s.name>o.name?1:-1),e},getTypes:t=>{const e=t.GSservice.fetchTypes();return e.sort((s,o)=>s.name>o.name?1:-1),e}},ie={SET_PROVINCE:(t,e)=>{t.queryParams.province=e},SET_TYPE:(t,e)=>{t.queryParams.type=e},SET_EXTENT:(t,e)=>{t.queryParams.extent=e}},le={runQuery:function(t){if(t.commit("SET_LOADING_RESULTS",!0),!t.state.searchVal)t.commit("SET_SEARCH_RESULTS",[]),t.commit("SET_SAVED_RESULTS",[]),t.commit("SET_LOADING_RESULTS",!1);else if(t.state.searchVal&&t.state.searchVal!==t.state.lastSearchVal)t.state.GSservice.query(`${t.state.searchVal}*`).then(e=>{t.commit("SET_LAST_SEARCH_VAL",t.state.searchVal),t.commit("SET_SAVED_RESULTS",e);const s=U(t.state.resultsVisible,t.state.queryParams,t.state.savedResults);t.commit("SET_SEARCH_RESULTS",s||[]),t.commit("SET_LOADING_RESULTS",!1)});else{const e=U(t.state.resultsVisible,t.state.queryParams,t.state.savedResults);t.commit("SET_SEARCH_RESULTS",e||[]),t.commit("SET_LOADING_RESULTS",!1)}},setProvince:function(t,e){t.commit("SET_PROVINCE",typeof e>"u"?"":e),t.dispatch("runQuery")},setType:function(t,e){t.commit("SET_TYPE",typeof e>"u"?"":e),t.dispatch("runQuery")},setSearchTerm:function(t,e){t.commit("SET_LAST_SEARCH_VAL",t.state.searchVal),t.commit("SET_SEARCH_VAL",e),t.dispatch("runQuery")},setMapExtent:function(t,e){if(e.visible!==void 0&&t.commit("SET_RESULTS_VISIBLE",e.visible),e.extent.sr.wkid!==4326)throw new Error("an extent that was not projected to wkid 4326 was passed to the geosearch store");t.commit("SET_EXTENT",e.extent),t.dispatch("runQuery")}};function U(t,e,s){return t&&e.extent&&(s=s.filter(o=>o.bbox[0]<=e.extent.xmax&&o.bbox[1]<=e.extent.ymax&&o.bbox[2]>=e.extent.xmin&&o.bbox[3]>=e.extent.ymin)),e.province&&e.province!=="..."&&(s=s.filter(o=>o.location.province.name&&o.location.province.name===e.province)),e.type&&e.type!=="..."&&(s=s.filter(o=>o.type===e.type)),s}var h=(t=>(t.getProvinces="geosearch/getProvinces",t.getTypes="geosearch/getTypes",t.queryParams="geosearch/queryParams",t.searchVal="geosearch/searchVal",t.searchResults="geosearch/searchResults",t.resultsVisible="geosearch/resultsVisible",t.loadingResults="geosearch/loadingResults",t.runQuery="geosearch/runQuery",t.setProvince="geosearch/setProvince",t.setType="geosearch/setType",t.setSearchTerm="geosearch/setSearchTerm",t.setMapExtent="geosearch/setMapExtent",t))(h||{});function st(t){const e=new ne(t);return{namespaced:!0,state:e,getters:{...ae},actions:{...le,...P.actions(e)},mutations:{...ie,...P.mutations(e)}}}const ce=v({data(){return{searchVal:this.get(h.searchVal),setSearchTerm:this.call(h.setSearchTerm),onSearchTermChange:j(500,t=>{this.setSearchTerm(t)})}}}),ue={class:"rv-geosearch-bar flex h-40 pb-4"},he=["placeholder","value"];function pe(t,e,s,o,r,n){return c(),u("div",ue,[l("input",{type:"search",class:"flex-grow border-b text-base px-12 py-8 outline-none focus:shadow-outline border-gray-600 mx-8 h-26 min-w-0",placeholder:t.$t("geosearch.searchText"),value:t.searchVal,onInput:e[0]||(e[0]=a=>t.onSearchTermChange(a.target.value))},null,40,he)])}var de=_(ce,[["render",pe],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/geosearch/search-bar.vue"]]);const fe=v({name:"GeosearchTopFiltersV",data(){return{provinces:this.get(h.getProvinces),types:this.get(h.getTypes),queryParams:this.get(h.queryParams),setProvince:this.call(h.setProvince),setType:this.call(h.setType)}},methods:{clearFilters(){this.setProvince(void 0),this.setType(void 0)}}}),me={class:"rv-geosearch-top-filters flex w-full mx-8"},ge={class:"inline-block w-2/5 h-40"},ve=["value"],_e={value:"",disabled:"",hidden:""},ye={class:"inline-block w-2/5 h-40 mx-16"},be=["value"],Le={value:"",disabled:"",hidden:""},Te=["disabled","content"],Re=l("div",{class:"rv-geosearch-icon"},[l("svg",{class:"fill-current w-18 h-18 mr-16",viewBox:"0 0 23 21"},[l("path",{d:"M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "})])],-1),Se=[Re];function Ee(t,e,s,o,r,n){const a=T("tippy");return c(),u("div",me,[l("div",ge,[l("select",{class:"form-select border-b border-b-gray-600 w-full h-auto py-0 cursor-pointer",value:t.queryParams.province,onChange:e[0]||(e[0]=i=>t.setProvince(i.target.value))},[l("option",_e,d(t.$t("geosearch.filters.province")),1),(c(!0),u(V,null,w(t.provinces,i=>(c(),u("option",{key:i.code},d(i.name),1))),128))],40,ve)]),l("div",ye,[l("select",{class:"form-select border-b border-b-gray-600 w-full h-auto py-0 cursor-pointer",value:t.queryParams.type,onChange:e[1]||(e[1]=i=>t.setType(i.target.value))},[l("option",Le,d(t.$t("geosearch.filters.type")),1),(c(!0),u(V,null,w(t.types,i=>(c(),u("option",{key:i.code},d(i.name),1))),128))],40,be)]),R((c(),u("button",{class:"inline-block flex text-gray-400 w-1/8 hover:text-black float-right disabled:cursor-default disabled:text-gray-400",disabled:!t.queryParams.type&&!t.queryParams.province,onClick:e[2]||(e[2]=(...i)=>t.clearFilters&&t.clearFilters(...i)),content:t.$t("geosearch.filters.clear")},Se,8,Te)),[[a,{placement:"bottom"}]])])}var $e=_(fe,[["render",Ee],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/geosearch/top-filters.vue"]]);const Ve=v({name:"GeosearchBottomFiltersV",data(){return{resultsVisible:this.get(h.resultsVisible),setMapExtent:this.call(h.setMapExtent),onMapExtentChange:j(300,t=>{this.latLongExtent(t).then(e=>{this.setMapExtent({extent:e,visible:this.resultsVisible})})})}},mounted(){this.$iApi.event.on(F.MAP_EXTENTCHANGE,this.onMapExtentChange,"geosearch_map_extent")},beforeUnmount(){this.$iApi.event.off("geosearch_map_extent")},methods:{async latLongExtent(t){return t.sr.wkid===4326?t:await this.$iApi.geo.proj.projectGeometry(4326,t)},updateMapExtent(t){this.latLongExtent(this.$iApi.geo.map.getExtent()).then(e=>{this.setMapExtent({extent:e,visible:t})})}}}),we={class:"rv-geosearch-bottom-filters"},xe={class:"bg-white"},Pe={class:"ml-8 cursor-pointer"},Ne=["checked"];function Ae(t,e,s,o,r,n){return c(),u("div",we,[l("div",xe,[l("label",Pe,[l("input",{type:"checkbox",class:"form-checkbox border-2 mx-8 border-gray-600 cursor-pointer",checked:t.resultsVisible,onChange:e[0]||(e[0]=a=>t.updateMapExtent(a.target.checked))},null,40,Ne),x(d(t.$t("geosearch.visible")),1)])])])}var ke=_(Ve,[["render",Ae],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/geosearch/bottom-filters.vue"]]);const Ce=v({name:"GeosearchLoadingBarV"}),Oe={class:"w-full h-6 relative overflow-hidden rounded-full indeterminate"},Ue={class:"h-full progressbar bg-blue-800 rounded-full top-0","aria-valuemin":"0","aria-valuemax":"100"},Be={class:"flex items-center h-full"};function je(t,e,s,o,r,n){return c(),u("div",Oe,[l("div",Ue,[l("span",Be,[Q(t.$slots,"default",{},void 0,!0)])])])}var Me=_(Ce,[["render",je],["__scopeId","data-v-31c7f983"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/geosearch/loading-bar.vue"]]);const Ge=v({name:"GeosearchScreenV",props:{panel:{type:Object}},components:{"geosearch-bar":de,"geosearch-top-filters":$e,"geosearch-bottom-filters":ke,"loading-bar":Me},data(){return{searchVal:this.get(h.searchVal),searchResults:this.get(h.searchResults),loadingResults:this.get(h.loadingResults)}},methods:{zoomIn(t){let e=new H("zoomies",t.position);this.$iApi.geo.map.zoomMapTo(e,5e4)},highlightSearchTerm(t,e){const s=t.replace(new RegExp(`${this.searchVal.value}`,"gi"),o=>'<span class="font-bold text-blue-600">'+o+"</span>");return e?s+",":s}}}),De={class:"flex flex-col h-full"},Ie={class:"px-5 mb-10 truncate"},Fe={key:0,class:"relative h-48"},Qe={class:"font-bold text-blue-600"},He={key:0,class:"rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-hidden overflow-y-auto"},ze=["onClick"],Ye={class:"rv-result-description px-8"},Xe={class:"flex-1 text-left truncate font-bold"},Ze=["innerHTML"],Je={key:0,class:"text-gray-600 text-sm"},We={key:0,class:"flex-1 text-left truncate text-sm"};function Ke(t,e,s,o,r,n){const a=g("geosearch-bar"),i=g("geosearch-top-filters"),m=g("loading-bar"),f=g("geosearch-bottom-filters"),E=g("panel-screen"),M=T("truncate"),G=T("focus-item"),D=T("focus-list");return c(),z(E,{panel:t.panel},{header:N(()=>[x(d(t.$t("geosearch.title")),1)]),content:N(()=>[l("div",De,[y(a),y(i),y(m,{class:Y(["flex-none",{invisible:!t.loadingResults}])},null,8,["class"]),l("div",Ie,[t.searchVal&&t.searchResults.length===0&&!t.loadingResults?(c(),u("span",Fe,[x(d(t.$t("geosearch.noResults")),1),l("span",Qe,'"'+d(t.searchVal)+'"',1)])):b("v-if",!0)]),t.searchResults.length>0?R((c(),u("ul",He,[(c(!0),u(V,null,w(t.searchResults,(p,I)=>(c(),u("li",{class:"relative h-56",key:I},[R((c(),u("button",{class:"absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",onClick:et=>t.zoomIn(p),style:{"border-bottom":"1px solid lightgray"}},[R((c(),u("div",Ye,[l("div",Xe,[l("span",{innerHTML:t.highlightSearchTerm(p.name,p.location.province)},null,8,Ze),p.location.province?(c(),u("span",Je,d(p.location.city?" "+p.location.city+", "+p.location.province.abbr:" "+p.location.province.abbr),1)):b("v-if",!0)]),p.type?(c(),u("div",We,d(p.type),1)):b("v-if",!0)])),[[M]])],8,ze)),[[G,"show-truncate"]])]))),128))])),[[D]]):b("v-if",!0),y(f,{class:"mt-auto"})])]),_:1},8,["panel"])}var qe=_(Ge,[["render",Ke],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/geosearch/screen.vue"]]),ot=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));export{qe as G,st as g,ot as s};
