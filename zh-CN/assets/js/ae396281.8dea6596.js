"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48465],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,y=p["".concat(a,".").concat(d)]||p[d]||f[d]||c;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,s=new Array(c);s[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<c;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const c={title:"concat_ws",language:"zh-CN"},s=void 0,i={unversionedId:"sql-reference/sql-functions/string-functions/concat_ws",id:"version-0.15/sql-reference/sql-functions/string-functions/concat_ws",title:"concat_ws",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/string-functions/concat_ws.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/concat_ws",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/concat_ws",draft:!1,tags:[],version:"0.15",frontMatter:{title:"concat_ws",language:"zh-CN"},sidebar:"docs",previous:{title:"concat",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/concat"},next:{title:"ends_with",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/ends_with"}},a={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:l},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concat_ws"},"concat_ws"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR concat_ws(VARCHAR sep, VARCHAR str,...)")),(0,o.kt)("p",null,"\u4f7f\u7528\u7b2c\u4e00\u4e2a\u53c2\u6570 sep \u4f5c\u4e3a\u8fde\u63a5\u7b26\uff0c\u5c06\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4ee5\u53ca\u540e\u7eed\u6240\u6709\u53c2\u6570\u62fc\u63a5\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32.\n\u5982\u679c\u5206\u9694\u7b26\u662f NULL\uff0c\u8fd4\u56de NULL\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"concat_ws"),"\u51fd\u6570\u4e0d\u4f1a\u8df3\u8fc7\u7a7a\u5b57\u7b26\u4e32\uff0c\u4f1a\u8df3\u8fc7 NULL \u503c"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql> select concat_ws("or", "d", "is");\n+----------------------------+\n| concat_ws(\'or\', \'d\', \'is\') |\n+----------------------------+\n| doris                      |\n+----------------------------+\n\nmysql> select concat_ws(NULL, "d", "is");\n+----------------------------+\n| concat_ws(NULL, \'d\', \'is\') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nmysql> select concat_ws("or", "d", NULL,"is");\n+---------------------------------+\n| concat_ws("or", "d", NULL,"is") |\n+---------------------------------+\n| doris                           |\n+---------------------------------+\n')),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"CONCAT_WS,CONCAT,WS"))}f.isMDXComponent=!0}}]);