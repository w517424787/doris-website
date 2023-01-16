"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[21523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"week",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-functions/date-time-functions/week",id:"version-0.15/sql-reference/sql-functions/date-time-functions/week",title:"week",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/date-time-functions/week.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/week",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/week",draft:!1,tags:[],version:"0.15",frontMatter:{title:"week",language:"zh-CN"},sidebar:"docs",previous:{title:"utc_timestamp",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/utc_timestamp"},next:{title:"weekofyear",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/weekofyear"}},c={},s=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"week"},"week"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INT YEARWEEK(DATE date)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"INT YEARWEEK(DATE date, INT mode)")),(0,o.kt)("p",null,"\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u7684\u661f\u671f\u6570\u3002mode\u7684\u503c\u9ed8\u8ba4\u4e3a0\u3002\n\u53c2\u6570mode\u7684\u4f5c\u7528\u53c2\u89c1\u4e0b\u9762\u7684\u8868\u683c\uff1a\n|Mode |\u661f\u671f\u7684\u7b2c\u4e00\u5929 |\u661f\u671f\u6570\u7684\u8303\u56f4 |\u7b2c\u4e00\u4e2a\u661f\u671f\u7684\u5b9a\u4e49                            |\n|:---|:-------------|:-----------|:--------------------------------------------|\n|0   |\u661f\u671f\u65e5        |0-53        |\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u65e5\u6240\u5728\u7684\u661f\u671f             |\n|1   |\u661f\u671f\u4e00        |0-53        |\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f|\n|2   |\u661f\u671f\u65e5        |1-53        |\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u65e5\u6240\u5728\u7684\u661f\u671f             |\n|3   |\u661f\u671f\u4e00        |1-53        |\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f|\n|4   |\u661f\u671f\u65e5        |0-53        |\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f|\n|5   |\u661f\u671f\u4e00        |0-53        |\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u4e00\u6240\u5728\u7684\u661f\u671f             |\n|6   |\u661f\u671f\u65e5        |1-53        |\u8fd9\u4e00\u5e74\u7684\u65e5\u671f\u6240\u5360\u7684\u5929\u6570\u5927\u4e8e\u7b49\u4e8e4\u5929\u7684\u7b2c\u4e00\u4e2a\u661f\u671f|\n|7   |\u661f\u671f\u4e00        |1-53        |\u8fd9\u4e00\u5e74\u4e2d\u7684\u7b2c\u4e00\u4e2a\u661f\u671f\u4e00\u6240\u5728\u7684\u661f\u671f             |"),(0,o.kt)("p",null,"\u53c2\u6570\u4e3aDate\u6216\u8005Datetime\u7c7b\u578b"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select yearweek('2021-1-1');\n+----------------------+\n| yearweek('2021-1-1') |\n+----------------------+\n|               202052 |\n+----------------------+\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select yearweek('2020-7-1');\n+----------------------+\n| yearweek('2020-7-1') |\n+----------------------+\n|               202026 |\n+----------------------+\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select yearweek('2024-12-30',1);\n+------------------------------------+\n| yearweek('2024-12-30 00:00:00', 1) |\n+------------------------------------+\n|                             202501 |\n+------------------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WEEK\n")))}d.isMDXComponent=!0}}]);