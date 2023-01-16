"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[96093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"ADMIN CANCEL REPAIR",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-CANCEL-REPAIR",id:"version-0.15/sql-reference/sql-statements/Administration/ADMIN-CANCEL-REPAIR",title:"ADMIN CANCEL REPAIR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Administration/ADMIN-CANCEL-REPAIR.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-CANCEL-REPAIR",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ADMIN CANCEL REPAIR",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW ROLES",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Account-Management/SHOW-ROLES"},next:{title:"ADMIN CLEAN TRASH",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-CLEAN-TRASH"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"admin-cancel-repair"},"ADMIN CANCEL REPAIR"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u53d6\u6d88\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\n\n\u8bed\u6cd5\uff1a\n\n    ADMIN CANCEL REPAIR TABLE table_name[ PARTITION (p1,...)];\n\n\u8bf4\u660e\uff1a\n\n    1. \u8be5\u8bed\u53e5\u4ec5\u8868\u793a\u7cfb\u7edf\u4e0d\u518d\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\u3002\u7cfb\u7edf\u4ecd\u4f1a\u4ee5\u9ed8\u8ba4\u8c03\u5ea6\u65b9\u5f0f\u4fee\u590d\u526f\u672c\u3002\n    \n")),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. \u53d6\u6d88\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\n\n    ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1);\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ADMIN,CANCEL,REPAIR\n")))}d.isMDXComponent=!0}}]);