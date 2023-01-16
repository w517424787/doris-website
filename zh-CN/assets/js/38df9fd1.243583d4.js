"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[26866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>O});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),E=n,O=u["".concat(c,".").concat(E)]||u[E]||m[E]||l;return r?a.createElement(O,o(o({ref:t},p),{},{components:r})):a.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=E;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}E.displayName="MDXCreateElement"},56789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"CREATE-POLICY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",title:"CREATE-POLICY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-POLICY",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"},next:{title:"CREATE-RESOURCE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"}},c={},s=[{value:"CREATE-POLICY",id:"create-policy",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"\u8bed\u6cd5\uff1a",id:"\u8bed\u6cd5",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-policy"},"CREATE-POLICY"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"CREATE POLICY"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"\u521b\u5efa\u7b56\u7565\uff0c\u5305\u542b\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5b89\u5168\u7b56\u7565(ROW POLICY)\uff0cexplain \u53ef\u4ee5\u67e5\u770b\u6539\u5199\u540e\u7684 SQL\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6570\u636e\u8fc1\u79fb\u7b56\u7565(STORAGE POLICY)\uff0c\u7528\u4e8e\u51b7\u70ed\u6570\u636e\u8f6c\u6362\u3002")),(0,n.kt)("h4",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"ROW POLICY")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS {RESTRICTIVE|PERMISSIVE} TO test USING (id in (1, 2));\n")),(0,n.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"filterType\uff1aRESTRICTIVE \u5c06\u4e00\u7ec4\u7b56\u7565\u901a\u8fc7 AND \u8fde\u63a5, PERMISSIVE \u5c06\u4e00\u7ec4\u7b56\u7565\u901a\u8fc7 OR \u8fde\u63a5"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u591a\u4e2a\u7b56\u7565\u9996\u5148\u5408\u5e76 RESTRICTIVE \u7684\u7b56\u7565\uff0c\u518d\u6dfb\u52a0 PERMISSIVE \u7684\u7b56\u7565"),(0,n.kt)("li",{parentName:"ul"},"RESTRICTIVE \u548c PERMISSIVE \u4e4b\u95f4\u901a\u8fc7 AND \u8fde\u63a5\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8\u5bf9 root \u548c admin \u7528\u6237\u521b\u5efa")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"STORAGE POLICY")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE POLICY test_storage_policy_1\nPROPERTIES ("key"="value", ...);\n')),(0,n.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PROPERTIES\u4e2d\u9700\u8981\u6307\u5b9a\u8d44\u6e90\u7684\u7c7b\u578b:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"storage_resource\uff1a\u6307\u5b9a\u7b56\u7565\u4f7f\u7528\u7684storage resource\u540d\u79f0\u3002")))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u7ec4\u884c\u5b89\u5168\u7b56\u7565"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS RESTRICTIVE TO test USING (c1 = 'a');\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_2 ON test.table1 \nAS RESTRICTIVE TO test USING (c2 = 'b');\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c3 = 'c');\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c4 = 'd');\n")),(0,n.kt)("p",{parentName:"li"},"\u5f53\u6211\u4eec\u6267\u884c\u5bf9 table1 \u7684\u67e5\u8be2\u65f6\u88ab\u6539\u5199\u540e\u7684 sql \u4e3a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select * from (select * from table1 where c1 = 'a' and c2 = 'b' or c3 = 'c' or c4 = 'd')\n")))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE, POLICY\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);