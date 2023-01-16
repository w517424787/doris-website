"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[85823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),E=a,d=u["".concat(i,".").concat(E)]||u[E]||m[E]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=E;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}E.displayName="MDXCreateElement"},53886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-CREATE-MATERIALIZED-VIEW",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",id:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",title:"SHOW-CREATE-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CREATE-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CREATE-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE"},next:{title:"SHOW-DATA",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATA"}},i={},s=[{value:"SHOW-CREATE-MATERIALIZED-VIEW",id:"show-create-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-create-materialized-view"},"SHOW-CREATE-MATERIALIZED-VIEW"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW CREATE MATERIALIZED VIEW"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u8be2\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u8bed\u53e5\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE MATERIALIZED VIEW mv_name ON table_name\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"mv_name:\n\u7269\u5316\u89c6\u56fe\u7684\u540d\u79f0\u3002\u5fc5\u586b\u9879\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"table_name:\n\u7269\u5316\u89c6\u56fe\u6240\u5c5e\u7684\u8868\u540d\u3002\u5fc5\u586b\u9879\u3002"))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u8bed\u53e5\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view id_col1 as select id,col1 from table3;\n")),(0,a.kt)("p",null,"\u67e5\u8be2\u540e\u8fd4\u56de"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show create materialized view id_col1 on table3;\n+-----------+----------+----------------------------------------------------------------+\n| TableName | ViewName | CreateStmt                                                     |\n+-----------+----------+----------------------------------------------------------------+\n| table3    | id_col1  | create materialized view id_col1 as select id,col1 from table3 |\n+-----------+----------+----------------------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, MATERIALIZED, VIEW\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);