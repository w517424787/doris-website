"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[67473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"DROP-ENCRYPT-KEY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY",title:"DROP-ENCRYPT-KEY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY.md",tags:[],version:"dev",frontMatter:{title:"DROP-ENCRYPT-KEY",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-FILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE"},next:{title:"DROP-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE"}},c={},p=[{value:"DROP-ENCRYPTKEY",id:"drop-encryptkey",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"drop-encryptkey"},"DROP-ENCRYPTKEY"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"DROP ENCRYPTKEY"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ENCRYPTKEY key_name\n")),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key_name"),": \u8981\u5220\u9664\u5bc6\u94a5\u7684\u540d\u5b57, \u53ef\u4ee5\u5305\u542b\u6570\u636e\u5e93\u7684\u540d\u5b57\u3002\u6bd4\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"db1.my_key"),"\u3002")),(0,a.kt)("p",null,"\u5220\u9664\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bc6\u94a5\u3002\u5bc6\u94a5\u7684\u540d\u5b57\u5b8c\u5168\u4e00\u81f4\u624d\u80fd\u591f\u88ab\u5220\u9664\u3002"),(0,a.kt)("p",null,"\u6267\u884c\u6b64\u547d\u4ee4\u9700\u8981\u7528\u6237\u62e5\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN")," \u6743\u9650\u3002"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5220\u9664\u6389\u4e00\u4e2a\u5bc6\u94a5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ENCRYPTKEY my_key;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP, ENCRYPT, KEY\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);