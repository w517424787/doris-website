"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[39363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"months_add",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/months_add",id:"version-dev/sql-manual/sql-functions/date-time-functions/months_add",title:"months_add",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/date-time-functions/months_add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/months_add",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/months_add",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/date-time-functions/months_add.md",tags:[],version:"dev",frontMatter:{title:"months_add",language:"zh-CN"},sidebar:"docs",previous:{title:"weeks_sub",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/weeks_sub"},next:{title:"months_diff",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/months_diff"}},i={},d=[{value:"months_add",id:"months_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"months_add"},"months_add"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DATETIME MONTHS_ADD(DATETIME date, INT months)")),(0,o.kt)("p",null,"\u4ece\u65e5\u671f\u52a0\u4e0a\u6307\u5b9a\u6708\u4efd"),(0,o.kt)("p",null,"\u53c2\u6570 date \u53ef\u4ee5\u662f DATETIME \u6216\u8005 DATE \u7c7b\u578b\uff0c\u8fd4\u56de\u7c7b\u578b\u4e0e\u53c2\u6570 date \u7684\u7c7b\u578b\u4e00\u81f4\u3002"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select months_add(\"2020-01-31 02:02:02\", 1);\n+--------------------------------------+\n| months_add('2020-01-31 02:02:02', 1) |\n+--------------------------------------+\n| 2020-02-29 02:02:02                  |\n+--------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MONTHS_ADD\n")))}p.isMDXComponent=!0}}]);