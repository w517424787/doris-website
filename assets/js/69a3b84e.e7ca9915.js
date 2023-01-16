"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[25698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"ADMIN SHOW DATA SKEW",language:"en"},i=void 0,s={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-SHOW-DATA-SKEW",id:"version-0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-DATA-SKEW",title:"ADMIN SHOW DATA SKEW",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-DATA-SKEW.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-SHOW-DATA-SKEW",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-DATA-SKEW",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ADMIN SHOW DATA SKEW",language:"en"},sidebar:"docs",previous:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-SHOW-REPLICA-STATUS"},next:{title:"ALTER CLUSTER",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ALTER-CLUSTER"}},l={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-show-data-skew"},"ADMIN SHOW DATA SKEW"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This statement is used to view the data skew of a table or a partition.\n\ngrammar:\n\n    ADMIN SHOW DATA SKEW FROM [db_name.]tbl_name [PARTITION (p1)];\n\nDescription:\n\n    1. Only one partition must be specified. For non-partitioned tables, the partition name is the same as the table name.\n    2. The result will show the data volume of each bucket under the specified partition, and the proportion of the data volume of each bucket in the total data volume.\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. View the data skew of the table\n\n    ADMIN SHOW DATA SKEW FROM db1.test PARTITION(p1);\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN, SHOW, DATA, SKEW\n")))}m.isMDXComponent=!0}}]);