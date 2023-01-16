"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23329],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={title:"rpad",language:"zh-CN"},l=void 0,a={unversionedId:"sql-reference/sql-functions/string-functions/rpad",id:"version-0.15/sql-reference/sql-functions/string-functions/rpad",title:"rpad",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/string-functions/rpad.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/rpad",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/rpad",draft:!1,tags:[],version:"0.15",frontMatter:{title:"rpad",language:"zh-CN"},sidebar:"docs",previous:{title:"right",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/right"},next:{title:"split_part",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/split_part"}},s={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rpad"},"rpad"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR rpad(VARCHAR str, INT len, VARCHAR pad)")),(0,i.kt)("p",null,"\u8fd4\u56de str \u4e2d\u957f\u5ea6\u4e3a len\uff08\u4ece\u9996\u5b57\u6bcd\u5f00\u59cb\u7b97\u8d77\uff09\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c len \u5927\u4e8e str \u7684\u957f\u5ea6\uff0c\u5219\u5728 str \u7684\u540e\u9762\u4e0d\u65ad\u8865\u5145 pad \u5b57\u7b26\uff0c\u76f4\u5230\u8be5\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u8fbe\u5230 len \u4e3a\u6b62\u3002\u5982\u679c len \u5c0f\u4e8e str \u7684\u957f\u5ea6\uff0c\u8be5\u51fd\u6570\u76f8\u5f53\u4e8e\u622a\u65ad str \u5b57\u7b26\u4e32\uff0c\u53ea\u8fd4\u56de\u957f\u5ea6\u4e3a len \u7684\u5b57\u7b26\u4e32\u3002len \u6307\u7684\u662f\u5b57\u7b26\u957f\u5ea6\u800c\u4e0d\u662f\u5b57\u8282\u957f\u5ea6\u3002"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT rpad(\"hi\", 5, \"xy\");\n+---------------------+\n| rpad('hi', 5, 'xy') |\n+---------------------+\n| hixyx               |\n+---------------------+\n\nmysql> SELECT rpad(\"hi\", 1, \"xy\");\n+---------------------+\n| rpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"RPAD"))}d.isMDXComponent=!0}}]);