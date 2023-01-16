"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[84901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={title:"regexp",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp",id:"sql-manual/sql-functions/string-functions/regexp/regexp",title:"regexp",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/regexp/regexp.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/regexp/",draft:!1,tags:[],version:"current",frontMatter:{title:"regexp",language:"zh-CN"},sidebar:"docs",previous:{title:"not like",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/like/not_like"},next:{title:"regexp_extract",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/regexp/regexp_extract"}},s={},c=[{value:"regexp",id:"regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"regexp"},"regexp"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BOOLEAN regexp(VARCHAR str, VARCHAR pattern)")),(0,l.kt)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d\uff0c\u5339\u914d\u4e0a\u7684\u5219\u8fd4\u56de true\uff0c\u6ca1\u5339\u914d\u4e0a\u5219\u8fd4\u56de false\u3002pattern \u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4ee5 'billie' \u4e3a\u5f00\u5934\u7684\u6240\u6709\u6570\u636e\nmysql > select k1 from test where k1 regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| billie eillish     |\n+--------------------+\n\n// \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4ee5 'ok' \u4e3a\u7ed3\u5c3e\u7684\u6240\u6709\u6570\u636e\uff1a\nmysql > select k1 from test where k1 regexp 'ok$';\n+----------+\n| k1       |\n+----------+\n| It's ok  |\n+----------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"REGEXP\n")))}f.isMDXComponent=!0}}]);