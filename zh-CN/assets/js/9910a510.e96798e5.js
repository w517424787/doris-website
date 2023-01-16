"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={title:"DROP ROLE",language:"zh-CN"},c=void 0,l={unversionedId:"sql-reference/sql-statements/Account-Management/DROP-ROLE",id:"version-0.15/sql-reference/sql-statements/Account-Management/DROP-ROLE",title:"DROP ROLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Account-Management/DROP-ROLE.md",sourceDirName:"sql-reference/sql-statements/Account-Management",slug:"/sql-reference/sql-statements/Account-Management/DROP-ROLE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Account-Management/DROP-ROLE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"DROP ROLE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE USER",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Account-Management/CREATE-USER"},next:{title:"DROP USER",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Account-Management/DROP-USER"}},s={},i=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"drop-role"},"DROP ROLE"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u6237\u5220\u9664\u4e00\u4e2a\u89d2\u8272\n\n\u8bed\u6cd5\uff1a\n    DROP ROLE role1;\n    \n\u5220\u9664\u4e00\u4e2a\u89d2\u8272\uff0c\u4e0d\u4f1a\u5f71\u54cd\u4e4b\u524d\u5c5e\u4e8e\u8be5\u89d2\u8272\u7684\u7528\u6237\u7684\u6743\u9650\u3002\u4ec5\u76f8\u5f53\u4e8e\u5c06\u8be5\u89d2\u8272\u4e0e\u7528\u6237\u89e3\u8026\u3002\u7528\u6237\u5df2\u7ecf\u4ece\u8be5\u89d2\u8272\u4e2d\u83b7\u53d6\u5230\u7684\u6743\u9650\uff0c\u4e0d\u4f1a\u6539\u53d8\u3002\n")),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. \u5220\u9664\u4e00\u4e2a\u89d2\u8272\n\n    DROP ROLE role1;\n    \n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"   DROP, ROLE"))}m.isMDXComponent=!0}}]);