"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[78829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},O="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),O=p(n),d=a,m=O["".concat(c,".").concat(d)]||O[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[O]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW EXPORT",language:"zh-CN"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-EXPORT",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-EXPORT",title:"SHOW EXPORT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-EXPORT.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-EXPORT",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-EXPORT",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW EXPORT",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW DYNAMIC PARTITION TABLES",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-DYNAMIC-PARTITION-TABLES"},next:{title:"SHOW LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD"}},c={},p=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],s={toc:p},O="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(O,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-export"},"SHOW EXPORT"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6307\u5b9a\u7684\u5bfc\u51fa\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5\n\u8bed\u6cd5\uff1a\n    SHOW EXPORT\n    [FROM db_name]\n    [\n        WHERE\n        [ID = your_job_id]\n        [STATE = ["PENDING"|"EXPORTING"|"FINISHED"|"CANCELLED"]]\n        [LABEL = your_label]\n    ]\n    [ORDER BY ...]\n    [LIMIT limit];\n    \n\u8bf4\u660e\uff1a\n    1) \u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4db\n    2) \u5982\u679c\u6307\u5b9a\u4e86 STATE\uff0c\u5219\u5339\u914d EXPORT \u72b6\u6001\n    3) \u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f\n    4) \u5982\u679c\u6307\u5b9a\u4e86 LIMIT\uff0c\u5219\u663e\u793a limit \u6761\u5339\u914d\u8bb0\u5f55\u3002\u5426\u5219\u5168\u90e8\u663e\u793a\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u5c55\u793a\u9ed8\u8ba4 db \u7684\u6240\u6709\u5bfc\u51fa\u4efb\u52a1\n    SHOW EXPORT;\n    \n2. \u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u51fa\u4efb\u52a1\uff0c\u6309 StartTime \u964d\u5e8f\u6392\u5e8f\n    SHOW EXPORT FROM example_db ORDER BY StartTime DESC;\n\n3. \u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u51fa\u4efb\u52a1\uff0cstate \u4e3a "exporting", \u5e76\u6309 StartTime \u964d\u5e8f\u6392\u5e8f\n    SHOW EXPORT FROM example_db WHERE STATE = "exporting" ORDER BY StartTime DESC;\n\n4. \u5c55\u793a\u6307\u5b9adb\uff0c\u6307\u5b9ajob_id\u7684\u5bfc\u51fa\u4efb\u52a1\n    SHOW EXPORT FROM example_db WHERE ID = job_id;\n\n5. \u5c55\u793a\u6307\u5b9adb\uff0c\u6307\u5b9alabel\u7684\u5bfc\u51fa\u4efb\u52a1\n    SHOW EXPORT FROM example_db WHERE LABEL = "mylabel";\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,EXPORT\n")))}u.isMDXComponent=!0}}]);