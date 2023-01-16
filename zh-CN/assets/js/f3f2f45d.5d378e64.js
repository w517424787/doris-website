"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"APPROX_COUNT_DISTINCT",language:"zh-CN"},i=void 0,c={unversionedId:"sql-manual/sql-functions/aggregate-functions/approx_count_distinct",id:"version-dev/sql-manual/sql-functions/aggregate-functions/approx_count_distinct",title:"APPROX_COUNT_DISTINCT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/aggregate-functions/approx_count_distinct.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/approx_count_distinct",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/approx_count_distinct",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/approx_count_distinct.md",tags:[],version:"dev",frontMatter:{title:"APPROX_COUNT_DISTINCT",language:"zh-CN"},sidebar:"docs",previous:{title:"VAR_SAMP,VARIANCE_SAMP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/var_samp"},next:{title:"VARIANCE,VAR_POP,VARIANCE_POP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/variance"}},l={},s=[{value:"APPROX_COUNT_DISTINCT",id:"approx_count_distinct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"approx_count_distinct"},"APPROX_COUNT_DISTINCT"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT(expr)")),(0,o.kt)("p",null,"\u8fd4\u56de\u7c7b\u4f3c\u4e8e COUNT(DISTINCT col) \u7ed3\u679c\u7684\u8fd1\u4f3c\u503c\u805a\u5408\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u5b83\u6bd4 COUNT \u548c DISTINCT \u7ec4\u5408\u7684\u901f\u5ea6\u66f4\u5feb\uff0c\u5e76\u4f7f\u7528\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u56e0\u6b64\u5bf9\u4e8e\u9ad8\u57fa\u6570\u7684\u5217\u53ef\u4ee5\u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL > select approx_count_distinct(query_id) from log_statis group by datetime;\n+-----------------+\n| approx_count_distinct(`query_id`) |\n+-----------------+\n| 17721           |\n+-----------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"APPROX_COUNT_DISTINCT"))}d.isMDXComponent=!0}}]);