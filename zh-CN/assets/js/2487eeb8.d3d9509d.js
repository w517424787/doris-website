"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[95255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||O[u]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>O,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW LOAD",language:"zh-CN"},o=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD",title:"SHOW LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW EXPORT",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-EXPORT"},next:{title:"SHOW PARTITIONS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS"}},s={},p=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:p},d="wrapper";function O(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-load"},"SHOW LOAD"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6307\u5b9a\u7684\u5bfc\u5165\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5\n\u8bed\u6cd5\uff1a\n    SHOW LOAD\n    [FROM db_name]\n    [\n        WHERE \n        [LABEL [ = "your_label" | LIKE "label_matcher"]]\n        [STATE = ["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]]\n    ]\n    [ORDER BY ...]\n    [LIMIT limit][OFFSET offset];\n    \n\u8bf4\u660e\uff1a\n    1) \u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4db\n    2) \u5982\u679c\u4f7f\u7528 LABEL LIKE\uff0c\u5219\u4f1a\u5339\u914d\u5bfc\u5165\u4efb\u52a1\u7684 label \u5305\u542b label_matcher \u7684\u5bfc\u5165\u4efb\u52a1\n    3) \u5982\u679c\u4f7f\u7528 LABEL = \uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 label\n    4) \u5982\u679c\u6307\u5b9a\u4e86 STATE\uff0c\u5219\u5339\u914d LOAD \u72b6\u6001\n    5) \u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f\n    6) \u5982\u679c\u6307\u5b9a\u4e86 LIMIT\uff0c\u5219\u663e\u793a limit \u6761\u5339\u914d\u8bb0\u5f55\u3002\u5426\u5219\u5168\u90e8\u663e\u793a\n    7) \u5982\u679c\u6307\u5b9a\u4e86 OFFSET\uff0c\u5219\u4ece\u504f\u79fb\u91cfoffset\u5f00\u59cb\u663e\u793a\u67e5\u8be2\u7ed3\u679c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u504f\u79fb\u91cf\u4e3a0\u3002\n    8) \u5982\u679c\u662f\u4f7f\u7528 broker/mini load\uff0c\u5219 URL \u5217\u4e2d\u7684\u8fde\u63a5\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a\n\n        SHOW LOAD WARNINGS ON \'url\'\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u5c55\u793a\u9ed8\u8ba4 db \u7684\u6240\u6709\u5bfc\u5165\u4efb\u52a1\n    SHOW LOAD;\n\n2. \u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0clabel \u4e2d\u5305\u542b\u5b57\u7b26\u4e32 "2014_01_02"\uff0c\u5c55\u793a\u6700\u8001\u768410\u4e2a\n    SHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n    \n3. \u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u6307\u5b9a label \u4e3a "load_example_db_20140102" \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f\n    SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;\n    \n4. \u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u6307\u5b9a label \u4e3a "load_example_db_20140102" \uff0cstate \u4e3a "loading", \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f\n    SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;\n    \n5. \u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1 \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f,\u5e76\u4ece\u504f\u79fb\u91cf5\u5f00\u59cb\u663e\u793a10\u6761\u67e5\u8be2\u7ed3\u679c\n    SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\n    SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n\n6. \u5c0f\u6279\u91cf\u5bfc\u5165\u662f\u67e5\u770b\u5bfc\u5165\u72b6\u6001\u7684\u547d\u4ee4\n    curl --location-trusted -u {user}:{passwd} http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n    \n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,LOAD\n")))}O.isMDXComponent=!0}}]);