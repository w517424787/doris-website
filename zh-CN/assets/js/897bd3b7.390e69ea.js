"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const l={title:"Describe",language:"en"},o=void 0,a={unversionedId:"sql-reference/sql-statements/Utility/util_stmt",id:"version-0.15/sql-reference/sql-statements/Utility/util_stmt",title:"Describe",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Utility/util_stmt.md",sourceDirName:"sql-reference/sql-statements/Utility",slug:"/sql-reference/sql-statements/Utility/util_stmt",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Utility/util_stmt",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Describe",language:"en"},sidebar:"docs",previous:{title:"VARCHAR",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Types/VARCHAR"}},s={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"describe"},"Describe"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This statement is used to display schema information for the specified table\nGrammar:\nDESC ","[FISH][dbu name.]","table name ","[ALL]",";"),(0,i.kt)("p",null,"Explain:\nIf ALL is specified, the schema of all indexes of the table is displayed"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"DESCRIBE,DESC"))}f.isMDXComponent=!0}}]);