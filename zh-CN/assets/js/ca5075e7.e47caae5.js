"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[89099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={title:"DATEV2",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Data-Types/DATEV2",id:"version-dev/sql-manual/sql-reference/Data-Types/DATEV2",title:"DATEV2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Types/DATEV2.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATEV2",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DATEV2",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Types/DATEV2.md",tags:[],version:"dev",frontMatter:{title:"DATEV2",language:"zh-CN"},sidebar:"docs",previous:{title:"DATETIME",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DATETIME"},next:{title:"DATETIMEV2",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DATETIMEV2"}},s={},i=[{value:"DATEV2",id:"datev2",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"datev2"},"DATEV2"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"DATEV2")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATEV2\u7c7b\u578b\n    \u65e5\u671f\u7c7b\u578b\uff0c\u76ee\u524d\u7684\u53d6\u503c\u8303\u56f4\u662f['0000-01-01', '9999-12-31'], \u9ed8\u8ba4\u7684\u6253\u5370\u5f62\u5f0f\u662f'yyyy-MM-dd'\n")),(0,a.kt)("h3",{id:"note"},"note"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATEV2\u7c7b\u578b\u76f8\u6bd4DATE\u7c7b\u578b\u66f4\u52a0\u9ad8\u6548\uff0c\u5728\u8ba1\u7b97\u65f6\uff0cDATEV2\u76f8\u6bd4DATE\u53ef\u4ee5\u8282\u7701\u4e00\u534a\u7684\u5185\u5b58\u4f7f\u7528\u91cf\u3002\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT CAST('2003-12-31 01:02:03' as DATEV2);\n    -> '2003-12-31'\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DATEV2\n")))}d.isMDXComponent=!0}}]);