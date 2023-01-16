"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>E});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,E=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(E,c(c({ref:t},u),{},{components:n})):r.createElement(E,c({ref:t},u))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"CREATE-ROLE",language:"zh-CN"},c=void 0,o={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",id:"version-dev/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",title:"CREATE-ROLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE.md",tags:[],version:"dev",frontMatter:{title:"CREATE-ROLE",language:"zh-CN"},sidebar:"docs",previous:{title:"LDAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/LDAP"},next:{title:"DROP-ROLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE"}},s={},i=[{value:"CREATE ROLE",id:"create-role",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:i},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-role"},"CREATE ROLE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CREATE ROLE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u6237\u521b\u5efa\u4e00\u4e2a\u89d2\u8272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," CREATE ROLE rol_name;\n")),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u65e0\u6743\u9650\u7684\u89d2\u8272\uff0c\u53ef\u4ee5\u540e\u7eed\u901a\u8fc7 GRANT \u547d\u4ee4\u8d4b\u4e88\u8be5\u89d2\u8272\u6743\u9650\u3002"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u89d2\u8272"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE role1;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE, ROLE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);