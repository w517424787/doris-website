"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),O=a,d=u["".concat(c,".").concat(O)]||u[O]||m[O]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},22645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"ALTER-WORKLOAD -GROUP",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",title:"ALTER-WORKLOAD -GROUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-WORKLOAD -GROUP",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-RESOURCE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE"},next:{title:"CANCEL-ALTER-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE"}},c={},s=[{value:"ALTER-WORKLOAD -GROUP",id:"alter-workload--group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"alter-workload--group"},"ALTER-WORKLOAD -GROUP"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ALTER WORKLOAD GROUP "),(0,a.kt)("version",{since:"dev"}),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u8d44\u6e90\u7ec4\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER WORKLOAD GROUP  "rg_name"\nPROPERTIES (\n    property_list\n);\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539 memory_limit \u5c5e\u6027\u65f6\u4e0d\u53ef\u4f7f\u6240\u6709 memory_limit \u503c\u7684\u603b\u548c\u8d85\u8fc7100%\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4fee\u6539\u90e8\u5206\u5c5e\u6027\uff0c\u4f8b\u5982\u53ea\u4fee\u6539cpu_share\u7684\u8bdd\uff0cproperties\u91cc\u53ea\u586bcpu_share\u5373\u53ef\u3002")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u540d\u4e3a g1 \u7684\u8d44\u6e90\u7ec4\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'alter workload group g1\nproperties (\n    "cpu_share"="30",\n    "memory_limit"="30%"\n);\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER, WORKLOAD , GROUP\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);