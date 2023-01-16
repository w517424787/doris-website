"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=c,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:c,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),c=(t(67294),t(3905));const a={title:"concat",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/concat",id:"sql-manual/sql-functions/string-functions/concat",title:"concat",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/concat.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/concat",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/concat",draft:!1,tags:[],version:"current",frontMatter:{title:"concat",language:"zh-CN"},sidebar:"docs",previous:{title:"reverse",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/reverse"},next:{title:"concat_ws",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/concat_ws"}},i={},s=[{value:"concat",id:"concat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,c.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"concat"},"concat"),(0,c.kt)("h3",{id:"description"},"description"),(0,c.kt)("h4",{id:"syntax"},"Syntax"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"VARCHAR concat(VARCHAR,...)")),(0,c.kt)("p",null,"\u5c06\u591a\u4e2a\u5b57\u7b26\u4e32\u8fde\u63a5\u8d77\u6765, \u5982\u679c\u53c2\u6570\u4e2d\u4efb\u610f\u4e00\u4e2a\u503c\u662f NULL\uff0c\u90a3\u4e48\u8fd4\u56de\u7684\u7ed3\u679c\u5c31\u662f NULL"),(0,c.kt)("h3",{id:"example"},"example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"mysql> select concat(\"a\", \"b\");\n+------------------+\n| concat('a', 'b') |\n+------------------+\n| ab               |\n+------------------+\n\nmysql> select concat(\"a\", \"b\", \"c\");\n+-----------------------+\n| concat('a', 'b', 'c') |\n+-----------------------+\n| abc                   |\n+-----------------------+\n\nmysql> select concat(\"a\", null, \"c\");\n+------------------------+\n| concat('a', NULL, 'c') |\n+------------------------+\n| NULL                   |\n+------------------------+\n")),(0,c.kt)("h3",{id:"keywords"},"keywords"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"CONCAT\n")))}f.isMDXComponent=!0}}]);