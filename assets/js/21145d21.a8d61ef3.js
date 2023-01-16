"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const l={title:"log",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/log",id:"version-dev/sql-manual/sql-functions/math-functions/log",title:"log",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/math-functions/log.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/log",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/log",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/math-functions/log.md",tags:[],version:"dev",frontMatter:{title:"log",language:"en"},sidebar:"docs",previous:{title:"exp",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/exp"},next:{title:"log2",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/log2"}},s={},c=[{value:"log",id:"log",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"log"},"log"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DOUBLE log(DOUBLE b, DOUBLE x)"),"\nReturns the logarithm of ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," based on base ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select log(5,1);\n+---------------+\n| log(5.0, 1.0) |\n+---------------+\n|             0 |\n+---------------+\nmysql> select log(3,20);\n+--------------------+\n| log(3.0, 20.0)     |\n+--------------------+\n| 2.7268330278608417 |\n+--------------------+\nmysql> select log(2,65536);\n+-------------------+\n| log(2.0, 65536.0) |\n+-------------------+\n|                16 |\n+-------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LOG\n")))}d.isMDXComponent=!0}}]);