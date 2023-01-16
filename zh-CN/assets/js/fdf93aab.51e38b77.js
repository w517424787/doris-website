"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"ADMIN DIAGNOSE TABLET",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET",id:"version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET",title:"ADMIN DIAGNOSE TABLET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET.md",tags:[],version:"dev",frontMatter:{title:"ADMIN DIAGNOSE TABLET",language:"zh-CN"},sidebar:"docs",previous:{title:"OUTFILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"},next:{title:"ADMIN-SHOW-CONFIG",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG"}},s={},c=[{value:"ADMIN DIAGNOSE TABLET",id:"admin-diagnose-tablet",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"admin-diagnose-tablet"},"ADMIN DIAGNOSE TABLET"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bca\u65ad\u6307\u5b9a tablet\u3002\u7ed3\u679c\u4e2d\u5c06\u663e\u793a\u8fd9\u4e2a tablet \u7684\u4fe1\u606f\u548c\u4e00\u4e9b\u6f5c\u5728\u7684\u95ee\u9898\u3002\n\n\u8bed\u6cd5\uff1a\n\n    ADMIN DIAGNOSE TABLET tblet_id\n\n\u8bf4\u660e\uff1a\n\n    \u7ed3\u679c\u4e2d\u7684\u5404\u884c\u4fe1\u606f\u5982\u4e0b\uff1a\n    1. TabletExist:                         Tablet\u662f\u5426\u5b58\u5728\n    2. TabletId:                            Tablet ID\n    3. Database:                            Tablet \u6240\u5c5e DB \u548c\u5176 ID\n    4. Table:                               Tablet \u6240\u5c5e Table \u548c\u5176 ID\n    5. Partition:                           Tablet \u6240\u5c5e Partition \u548c\u5176 ID\n    6. MaterializedIndex:                   Tablet \u6240\u5c5e\u7269\u5316\u89c6\u56fe\u548c\u5176 ID\n    7. Replicas(ReplicaId -> BackendId):    Tablet \u5404\u526f\u672c\u548c\u5176\u6240\u5728 BE\u3002\n    8. ReplicasNum:                         \u526f\u672c\u6570\u91cf\u662f\u5426\u6b63\u786e\u3002\n    9. ReplicaBackendStatus:                \u526f\u672c\u6240\u5728 BE \u8282\u70b9\u662f\u5426\u6b63\u5e38\u3002\n    10.ReplicaVersionStatus:                \u526f\u672c\u7684\u7248\u672c\u53f7\u662f\u5426\u6b63\u5e38\u3002\n    11.ReplicaStatus:                       \u526f\u672c\u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\n    12.ReplicaCompactionStatus:             \u526f\u672c Compaction \u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. \u67e5\u770b Tablet 10001 \u7684\u8bca\u65ad\u7ed3\u679c\n\n    ADMIN DIAGNOSE TABLET 10001;\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ADMIN,DIAGNOSE,TABLET\n")))}u.isMDXComponent=!0}}]);