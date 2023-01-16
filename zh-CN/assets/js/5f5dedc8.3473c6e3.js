"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[28435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),O=a,m=u["".concat(s,".").concat(O)]||u[O]||d[O]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},35240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"DROP-REPOSITORY",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",title:"DROP-REPOSITORY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY.md",tags:[],version:"dev",frontMatter:{title:"DROP-REPOSITORY",language:"zh-CN"},sidebar:"docs",previous:{title:"RESTORE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE"},next:{title:"CANCEL-RESTORE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE"}},s={},c=[{value:"DROP-REPOSITORY",id:"drop-repository",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"drop-repository"},"DROP-REPOSITORY"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"DROP  REPOSITORY"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u4e00\u4e2a\u5df2\u521b\u5efa\u7684\u4ed3\u5e93\u3002\u4ec5 root \u6216 superuser \u7528\u6237\u53ef\u4ee5\u5220\u9664\u4ed3\u5e93\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP REPOSITORY `repo_name`;\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u4ed3\u5e93\uff0c\u4ec5\u4ec5\u662f\u5220\u9664\u8be5\u4ed3\u5e93\u5728 Palo \u4e2d\u7684\u6620\u5c04\uff0c\u4e0d\u4f1a\u5220\u9664\u5b9e\u9645\u7684\u4ed3\u5e93\u6570\u636e\u3002\u5220\u9664\u540e\uff0c\u53ef\u4ee5\u518d\u6b21\u901a\u8fc7\u6307\u5b9a\u76f8\u540c\u7684 broker \u548c LOCATION \u6620\u5c04\u5230\u8be5\u4ed3\u5e93\u3002 ")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u540d\u4e3a bos_repo \u7684\u4ed3\u5e93\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP REPOSITORY `bos_repo`;\n")),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP, REPOSITORY\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);