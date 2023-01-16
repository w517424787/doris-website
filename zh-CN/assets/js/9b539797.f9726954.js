"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[45035],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(t),g=a,m=p["".concat(u,".").concat(g)]||p[g]||f[g]||o;return t?r.createElement(m,l(l({ref:n},i),{},{components:t})):r.createElement(m,l({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},90684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"GROUP_CONCAT",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-functions/aggregate-functions/group_concat",id:"sql-manual/sql-functions/aggregate-functions/group_concat",title:"GROUP_CONCAT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/group_concat.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group_concat",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group_concat",draft:!1,tags:[],version:"current",frontMatter:{title:"GROUP_CONCAT",language:"zh-CN"},sidebar:"docs",previous:{title:"COUNT",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/count"},next:{title:"HLL_UNION_AGG",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/hll_union_agg"}},u={},s=[{value:"group_concat",id:"group_concat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"group_concat"},"group_concat"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR GROUP_CONCAT([DISTINCT] VARCHAR str[, VARCHAR sep])")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u662f\u7c7b\u4f3c\u4e8e sum() \u7684\u805a\u5408\u51fd\u6570\uff0cgroup_concat \u5c06\u7ed3\u679c\u96c6\u4e2d\u7684\u591a\u884c\u7ed3\u679c\u8fde\u63a5\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570 sep \u4e3a\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u8fde\u63a5\u7b26\u53f7\uff0c\u8be5\u53c2\u6570\u53ef\u4ee5\u7701\u7565\u3002\u8be5\u51fd\u6570\u901a\u5e38\u9700\u8981\u548c group by \u8bed\u53e5\u4e00\u8d77\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select value from test;\n+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n| c     |\n+-------+\n\nmysql> select GROUP_CONCAT(value) from test;\n+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c, c               |\n+-----------------------+\n\nmysql> select GROUP_CONCAT(DISTINCT value) from test;\n+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n\nmysql> select GROUP_CONCAT(value, \" \") from test;\n+----------------------------+\n| GROUP_CONCAT(`value`, ' ') |\n+----------------------------+\n| a b c c                    |\n+----------------------------+\n\nmysql> select GROUP_CONCAT(value, NULL) from test;\n+----------------------------+\n| GROUP_CONCAT(`value`, NULL)|\n+----------------------------+\n| NULL                       |\n+----------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"GROUP_CONCAT,GROUP,CONCAT"))}f.isMDXComponent=!0}}]);