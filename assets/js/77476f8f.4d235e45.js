"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[92790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"SHOW FULL COLUMNS",language:"en"},a=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/SHOW-FULL-COLUMNS",id:"version-0.15/sql-reference/sql-statements/Administration/SHOW-FULL-COLUMNS",title:"SHOW FULL COLUMNS",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Administration/SHOW-FULL-COLUMNS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW-FULL-COLUMNS",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/SHOW-FULL-COLUMNS",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW FULL COLUMNS",language:"en"},sidebar:"docs",previous:{title:"SHOW FRONTENDS",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/SHOW-FRONTENDS"},next:{title:"SHOW INDEX",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/SHOW-INDEX"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"show-full-columns"},"SHOW FULL COLUMNS"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"This statement is used to view some information about columns of a table.\n\nSyntax:\n    SHOW FULL COLUMNS FROM tbl;\n    \n")),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. View the column information of specified table\n\n    SHOW FULL COLUMNS FROM tbl;\n    \n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SHOW,FULL,COLUMNS\n")))}m.isMDXComponent=!0}}]);