"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[56705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"BACKUP",language:"zh-CN"},o=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Definition/BACKUP",id:"version-0.15/sql-reference/sql-statements/Data-Definition/BACKUP",title:"BACKUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Definition/BACKUP.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/BACKUP",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/BACKUP",draft:!1,tags:[],version:"0.15",frontMatter:{title:"BACKUP",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER VIEW",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/ALTER-VIEW"},next:{title:"CANCEL ALTER",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/CANCEL-ALTER"}},p={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup"},"BACKUP"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u5907\u4efd\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u6570\u636e\u3002\u8be5\u547d\u4ee4\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u9700\u901a\u8fc7 SHOW BACKUP \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002\u4ec5\u652f\u6301\u5907\u4efd OLAP \u7c7b\u578b\u7684\u8868\u3002\n\u8bed\u6cd5\uff1a\n    BACKUP SNAPSHOT [db_name].{snapshot_name}\n    TO `repository_name`\n    ON (\n        `table_name` [PARTITION (`p1`, ...)],\n        ...\n    )\n    PROPERTIES ("key"="value", ...);\n        \n\u8bf4\u660e\uff1a\n    1. \u540c\u4e00\u6570\u636e\u5e93\u4e0b\u53ea\u80fd\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684 BACKUP \u6216 RESTORE \u4efb\u52a1\u3002\n    2. ON \u5b50\u53e5\u4e2d\u6807\u8bc6\u9700\u8981\u5907\u4efd\u7684\u8868\u548c\u5206\u533a\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u5206\u533a\uff0c\u5219\u9ed8\u8ba4\u5907\u4efd\u8be5\u8868\u7684\u6240\u6709\u5206\u533a\u3002\n    3. PROPERTIES \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a\n            "type" = "full"\uff1a\u8868\u793a\u8fd9\u662f\u4e00\u6b21\u5168\u91cf\u66f4\u65b0\uff08\u9ed8\u8ba4\uff09\u3002\n            "timeout" = "3600"\uff1a\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u4e00\u5929\u3002\u5355\u4f4d\u79d2\u3002\n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u5168\u91cf\u5907\u4efd example_db \u4e0b\u7684\u8868 example_tbl \u5230\u4ed3\u5e93 example_repo \u4e2d\uff1a\n    BACKUP SNAPSHOT example_db.snapshot_label1\n    TO example_repo\n    ON (example_tbl)\n    PROPERTIES ("type" = "full");\n    \n2. \u5168\u91cf\u5907\u4efd example_db \u4e0b\uff0c\u8868 example_tbl \u7684 p1, p2 \u5206\u533a\uff0c\u4ee5\u53ca\u8868 example_tbl2 \u5230\u4ed3\u5e93 example_repo \u4e2d\uff1a\n    BACKUP SNAPSHOT example_db.snapshot_label2\n    TO example_repo\n    ON \n    (\n        example_tbl PARTITION (p1,p2),\n        example_tbl2\n    );\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BACKUP\n")))}m.isMDXComponent=!0}}]);