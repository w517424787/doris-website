"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"UPDATE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE",title:"UPDATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE",draft:!1,tags:[],version:"current",frontMatter:{title:"UPDATE",language:"zh-CN"},sidebar:"docs",previous:{title:"INSERT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},next:{title:"SELECT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT"}},p={},s=[{value:"UPDATE",id:"update",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update"},"UPDATE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"UPDATE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u662f\u4e3a\u8fdb\u884c\u5bf9\u6570\u636e\u8fdb\u884c\u66f4\u65b0\u7684\u64cd\u4f5c\uff0c\uff08 update \u8bed\u53e5\u76ee\u524d\u4ec5\u652f\u6301  Unique Key \u6a21\u578b\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE table_name\n    SET assignment_list\n    WHERE expression\n\nvalue:\n    {expr | DEFAULT}\n\nassignment:\n    col_name = value\n\nassignment_list:\n    assignment [, assignment] ...\n")),(0,r.kt)("p",null," Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"table_name: \u5f85\u66f4\u65b0\u6570\u636e\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f 'db_name.table_name' \u5f62\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"assignment_list: \u5f85\u66f4\u65b0\u7684\u76ee\u6807\u5217\uff0c\u5f62\u5982 'col_name = value, col_name = value' \u683c\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"where expression: \u671f\u671b\u66f4\u65b0\u7684\u6761\u4ef6\uff0c\u4e00\u4e2a\u8fd4\u56de true \u6216\u8005 false \u7684\u8868\u8fbe\u5f0f\u5373\u53ef"),(0,r.kt)("p",{parentName:"li"},"Note"))),(0,r.kt)("p",null,"\u5f53\u524d UPDATE \u8bed\u53e5\u4ec5\u652f\u6301\u5728 Unique \u6a21\u578b\u4e0a\u7684\u884c\u66f4\u65b0\uff0c\u5b58\u5728\u5e76\u53d1\u66f4\u65b0\u5bfc\u81f4\u7684\u6570\u636e\u51b2\u7a81\u53ef\u80fd\u3002\n\u76ee\u524d Doris \u5e76\u4e0d\u5904\u7406\u8fd9\u7c7b\u95ee\u9898\uff0c\u9700\u8981\u7528\u6237\u4ece\u4e1a\u52a1\u4fa7\u89c4\u907f\u8fd9\u7c7b\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test")," \u8868\u662f\u4e00\u4e2a unique \u6a21\u578b\u7684\u8868\uff0c\u5305\u542b: k1, k2, v1, v2  \u56db\u4e2a\u5217\u3002\u5176\u4e2d k1, k2 \u662f key\uff0cv1, v2 \u662fvalue\uff0c\u805a\u5408\u65b9\u5f0f\u662f Replace\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06 'test' \u8868\u4e2d\u6ee1\u8db3\u6761\u4ef6 k1 =1 , k2 =2 \u7684 v1 \u5217\u66f4\u65b0\u4e3a 1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE test SET v1 = 1 WHERE k1=1 and k2=2;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5c06 'test' \u8868\u4e2d k1=1 \u7684\u5217\u7684 v1 \u5217\u81ea\u589e1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE test SET v1 = v1+1 WHERE k1=1;\n")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"UPDATE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);