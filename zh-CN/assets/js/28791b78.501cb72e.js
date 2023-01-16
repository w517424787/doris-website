"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[19009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"ALTER-VIEW",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-VIEW",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-VIEW",title:"ALTER-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-ROLLUP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP"},next:{title:"CANCEL-ALTER-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE"}},c={},s=[{value:"ALTER-VIEW",id:"alter-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"alter-view"},"ALTER-VIEW"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ALTER VIEW"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2aview\u7684\u5b9a\u4e49"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER VIEW\n[db_name.]view_name\n(column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89c6\u56fe\u90fd\u662f\u903b\u8f91\u4e0a\u7684\uff0c\u5176\u4e2d\u7684\u6570\u636e\u4e0d\u4f1a\u5b58\u50a8\u5728\u7269\u7406\u4ecb\u8d28\u4e0a\uff0c\u5728\u67e5\u8be2\u65f6\u89c6\u56fe\u5c06\u4f5c\u4e3a\u8bed\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\uff0c\u56e0\u6b64\uff0c\u4fee\u6539\u89c6\u56fe\u7684\u5b9a\u4e49\u7b49\u4ef7\u4e8e\u4fee\u6539query_stmt\u3002"),(0,a.kt)("li",{parentName:"ul"},"query_stmt \u4e3a\u4efb\u610f\u652f\u6301\u7684 SQL ")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"1\u3001\u4fee\u6539example_db\u4e0a\u7684\u89c6\u56feexample_view"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER VIEW example_db.example_view\n(\n    c1 COMMENT "column 1",\n    c2 COMMENT "column 2",\n    c3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) FROM example_table \nGROUP BY k1, k2\n')),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, VIEW\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);