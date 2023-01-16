"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[97920],{88824:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(67294),s=n(52263);const a=["zero","one","two","few","many","other"];function o(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}},85129:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var r=n(67294),s=n(52263),a=n(68912),o=n(35742),l=n(39960),c=n(95999),u=n(60373),i=n(902),h=n(88824),m=n(16550),d=n(28084);const p={},g=()=>(0,d.OD)("docusaurus-plugin-content-docs")??p;function f(e){void 0===e&&(e={});const t=g(),{pathname:n}=(0,m.TH)();return function(e,t,n){void 0===n&&(n={});const r=Object.entries(e).sort(((e,t)=>t[1].path.localeCompare(e[1].path))).find((e=>{let[,n]=e;return!!(0,m.LX)(t,{path:n.path,exact:!1,strict:!1})})),s=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!s&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return s}(t,n,e)}var y=n(10412);const I=function(){const e=(0,m.k6)(),t=(0,m.TH)(),{siteConfig:{baseUrl:n}}=(0,s.Z)();return{searchValue:y.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var b=n(31336),x=n.n(b),E=n(20895);function v(e){return w(e).concat(w(e.filter((e=>{const t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function w(e,t){return e.map((e=>({tokens:e.map((e=>e.value)),term:e.map((e=>({value:e.value,presence:x().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?x().Query.wildcard.TRAILING:x().Query.wildcard.NONE})))})))}function k(e,t,n){return function(r,s){const a=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return x()[t[0]].tokenizer(e).map((e=>e.toString()));let n=/[^-\s]+/g;return t.includes("zh")&&(n=/\w+|\p{Unified_Ideograph}+/gu),e.toLowerCase().match(n)||[]}(r,E.dK);if(0===a.length)return void s([]);const o=function(e,t){const n=function(e,t){const n=[];return function e(r,s){if(0===r.length)return void n.push(s);const a=r[0];if(/\p{Unified_Ideograph}/u.test(a)){const n=function(e,t){const n=[];return function e(r,s){let a=0,o=!1;for(const l of t)if(r.substr(0,l.length)===l){const t={missed:s.missed,term:s.term.concat({value:l})};r.length>l.length?e(r.substr(l.length),t):n.push(t),o=!0}else for(let t=l.length-1;t>a;t-=1){const c=l.substr(0,t);if(r.substr(0,t)===c){a=t;const l={missed:s.missed,term:s.term.concat({value:c,trailing:!0})};r.length>t?e(r.substr(t),l):n.push(l),o=!0;break}}o||(r.length>0?e(r.substr(1),{missed:s.missed+1,term:s.term}):s.term.length>0&&n.push(s))}(e,{missed:0,term:[]}),n.sort(((e,t)=>{const n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((e=>e.term))}(a,t);for(const t of n){const n=s.concat(...t);e(r.slice(1),n)}}else{const t=s.concat({value:a});e(r.slice(1),t)}}(e,[]),n}(e,t);if(0===n.length)return[{tokens:e,term:e.map((e=>({value:e,presence:x().Query.presence.REQUIRED,wildcard:x().Query.wildcard.LEADING|x().Query.wildcard.TRAILING})))}];for(const o of n)o[o.length-1].maybeTyping=!0;const r=[];for(const o of E.dK)if("en"===o)E._k||r.unshift(x().stopWordFilter);else{const e=x()[o];e.stopWordFilter&&r.unshift(e.stopWordFilter)}let s;if(r.length>0){const e=e=>r.reduce(((e,t)=>e.filter((e=>t(e.value)))),e);s=[];const t=[];for(const r of n){const n=e(r);s.push(n),n.length<r.length&&n.length>0&&t.push(n)}n.push(...t)}else s=n.slice();const a=[];for(const o of s)if(o.length>2)for(let e=o.length-1;e>=0;e-=1)a.push(o.slice(0,e).concat(o.slice(e+1)));return v(n).concat(v(a))}(a,t),l=[];e:for(const{term:t,tokens:c}of o)for(const{documents:r,index:s,type:a}of e)if(l.push(...s.query((e=>{for(const n of t)e.term(n.value,{wildcard:n.wildcard,presence:n.presence})})).slice(0,n).filter((e=>!l.some((t=>t.document.i.toString()===e.ref)))).slice(0,n-l.length).map((t=>{const n=r.find((e=>e.i.toString()===t.ref));return{document:n,type:a,page:0!==a&&e[0].documents.find((e=>e.i===n.p)),metadata:t.matchData.metadata,tokens:c,score:t.score}}))),l.length>=n)break e;!function(e){e.forEach(((e,t)=>{e.index=t})),e.sort(((t,n)=>{let r=t.type>0&&t.page?e.findIndex((e=>e.document===t.page)):t.index,s=n.type>0&&n.page?e.findIndex((e=>e.document===n.page)):n.index;return-1===r&&(r=t.index),-1===s&&(s=n.index),r===s?0===t.type?-1:0===n.type?1:t.index-n.index:r-s}))}(l),function(e){e.forEach(((t,n)=>{n>0&&t.page&&e.some((e=>e.document===t.page))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(l),s(l)}}function R(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function S(e,t,n){const r=[];for(const s of t){const n=e.toLowerCase().indexOf(s);if(n>=0){n>0&&r.push(S(e.substr(0,n),t)),r.push(`<mark>${R(e.substr(n,s.length))}</mark>`);const a=n+s.length;a<e.length&&r.push(S(e.substr(a),t));break}}return 0===r.length?n?`<mark>${R(e)}</mark>`:R(e):r.join("")}const L=/\w+|\p{Unified_Ideograph}/u;function _(e){const t=[];let n=0,r=e;for(;r.length>0;){const s=r.match(L);if(!s){t.push(r);break}s.index>0&&t.push(r.substring(0,s.index)),t.push(s[0]),n+=s.index+s[0].length,r=e.substring(n)}return t}function F(e,t,n,r){void 0===r&&(r=E.Hk);const{chunkIndex:s,chunks:a}=function(e,t,n){const r=[];let s=0,a=0,o=-1;for(;s<t.length;){const[l,c]=t[s];if(s+=1,!(l<a)){if(l>a){const t=_(e.substring(a,l)).map((e=>({html:R(e),textLength:e.length})));for(const e of t)r.push(e)}-1===o&&(o=r.length),a=l+c,r.push({html:S(e.substring(l,a),n,!0),textLength:c})}}if(a<e.length){const t=_(e.substring(a)).map((e=>({html:R(e),textLength:e.length})));for(const e of t)r.push(e)}return{chunkIndex:o,chunks:r}}(e,t,n),o=a.slice(0,s),l=a[s],c=[l.html],u=a.slice(s+1);let i=l.textLength,h=0,m=0,d=!1,p=!1;for(;i<r;)if((h<=m||0===u.length)&&o.length>0){const e=o.pop();i+e.textLength<=r?(c.unshift(e.html),h+=e.textLength,i+=e.textLength):(d=!0,o.length=0)}else{if(!(u.length>0))break;{const e=u.shift();i+e.textLength<=r?(c.push(e.html),m+=e.textLength,i+=e.textLength):(p=!0,u.length=0)}}return(d||o.length>0)&&c.unshift("\u2026"),(p||u.length>0)&&c.push("\u2026"),c.join("")}function T(e,t){const n=[];for(const r of Object.values(e))r[t]&&n.push(...r[t].position);return n.sort(((e,t)=>e[0]-t[0]||t[1]-e[1]))}var P=n(86010);const $={loadingRing:"loadingRing_RJI3","loading-ring":"loading-ring_FB5o"};function C(e){let{className:t}=e;return r.createElement("div",{className:(0,P.Z)($.loadingRing,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}const U={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function N(){const{siteConfig:{baseUrl:e}}=(0,s.Z)(),t=f();let n=e;try{const{preferredVersion:e}=(0,u.J)(t?.pluginId??E.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(S){if(E.l9&&!(S instanceof i.i6))throw S}const{selectMessage:a}=(0,h.c)(),{searchValue:l,updateSearchPath:m}=I(),[d,p]=(0,r.useState)(l),[g,y]=(0,r.useState)(),[b,v]=(0,r.useState)(),w=(0,r.useMemo)((()=>d?(0,c.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:d}):(0,c.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[d]);(0,r.useEffect)((()=>{m(d),g&&(d?g(d,(e=>{v(e)})):v(void 0))}),[d,g]);const R=(0,r.useCallback)((e=>{p(e.target.value)}),[]);return(0,r.useEffect)((()=>{l&&l!==d&&p(l)}),[l]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await async function(e){{const t=await(await fetch(`${e}${E.J}`)).json(),n=t.map(((e,t)=>{let{documents:n,index:r}=e;return{type:t,documents:n,index:x().Index.load(r)}})),r=t.reduce(((e,t)=>{for(const n of t.index.invertedIndex)/\p{Unified_Ideograph}/u.test(n[0][0])&&e.add(n[0]);return e}),new Set);return{wrappedIndexes:n,zhDictionary:Array.from(r)}}}(n);y((()=>k(e,t,100)))}()}),[n]),r.createElement(r.Fragment,null,r.createElement(o.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,w)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,w),r.createElement("input",{type:"search",name:"q",className:U.searchQueryInput,"aria-label":"Search",onChange:R,value:d,autoComplete:"off",autoFocus:!0}),!g&&d&&r.createElement("div",null,r.createElement(C,null)),b&&(b.length>0?r.createElement("p",null,a(b.length,(0,c.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:b.length}))):r.createElement("p",null,(0,c.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,b&&b.map((e=>r.createElement(Q,{key:e.document.i,searchResult:e}))))))}function Q(e){let{searchResult:{document:t,type:n,page:s,tokens:a,metadata:o}}=e;const c=0===n,u=2===n,i=(c?t.b:s.b).slice(),h=u?t.s:t.t;return c||i.push(s.t),r.createElement("article",{className:U.searchResultItem},r.createElement("h2",null,r.createElement(l.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?S(h,a):F(h,T(o,"t"),a,100)}})),i.length>0&&r.createElement("p",{className:U.searchResultItemPath},function(e){return e.join(" \u203a ")}(i)),u&&r.createElement("p",{className:U.searchResultItemSummary,dangerouslySetInnerHTML:{__html:F(t.t,T(o,"t"),a,100)}}))}const j=function(){return r.createElement(a.Z,null,r.createElement(N,null))}}}]);