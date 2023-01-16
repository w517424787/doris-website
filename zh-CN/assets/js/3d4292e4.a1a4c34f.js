"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[47057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>N});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(r),k=n,N=u["".concat(o,".").concat(k)]||u[k]||c[k]||i;return r?a.createElement(N,l(l({ref:t},m),{},{components:r})):a.createElement(N,l({ref:t},m))}));function N(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:n,l[1]=d;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Doris Hudi external table",language:"zh-CN"},l=void 0,d={unversionedId:"ecosystem/external-table/hudi-external-table",id:"ecosystem/external-table/hudi-external-table",title:"Doris Hudi external table",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/external-table/hudi-external-table.md",sourceDirName:"ecosystem/external-table",slug:"/ecosystem/external-table/hudi-external-table",permalink:"/zh-CN/docs/ecosystem/external-table/hudi-external-table",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris Hudi external table",language:"zh-CN"}},o={},p=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"Doris \u76f8\u5173",id:"doris-\u76f8\u5173",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"Doris \u4e2d\u521b\u5efa Hudi \u7684\u5916\u8868",id:"doris-\u4e2d\u521b\u5efa-hudi-\u7684\u5916\u8868",level:3},{value:"\u53c2\u6570\u8bf4\u660e\uff1a",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u5c55\u793a\u8868\u7ed3\u6784",id:"\u5c55\u793a\u8868\u7ed3\u6784",level:3},{value:"\u7c7b\u578b\u5339\u914d",id:"\u7c7b\u578b\u5339\u914d",level:2},{value:"\u67e5\u8be2\u7528\u6cd5",id:"\u67e5\u8be2\u7528\u6cd5",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hudi-external-table-of-doris"},"Hudi External Table of Doris"),(0,n.kt)("p",null,"Hudi External Table of Doris \u63d0\u4f9b\u4e86 Doris \u76f4\u63a5\u8bbf\u95ee Hudi \u5916\u90e8\u8868\u7684\u80fd\u529b\uff0c\u5916\u90e8\u8868\u7701\u53bb\u4e86\u7e41\u7410\u7684\u6570\u636e\u5bfc\u5165\u5de5\u4f5c\uff0c\u5e76\u501f\u52a9 Doris \u672c\u8eab\u7684 OLAP \u7684\u80fd\u529b\u6765\u89e3\u51b3 Hudi \u8868\u7684\u6570\u636e\u5206\u6790\u95ee\u9898\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301 Hudi \u6570\u636e\u6e90\u63a5\u5165Doris"),(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301 Doris \u4e0e Hive\u6570\u636e\u6e90Hudi\u4e2d\u7684\u8868\u8054\u5408\u67e5\u8be2\uff0c\u8fdb\u884c\u66f4\u52a0\u590d\u6742\u7684\u5206\u6790\u64cd\u4f5c")),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u8be5\u529f\u80fd\u7684\u4f7f\u7528\u65b9\u5f0f\u548c\u6ce8\u610f\u4e8b\u9879\u7b49\u3002"),(0,n.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,n.kt)("h3",{id:"doris-\u76f8\u5173"},"Doris \u76f8\u5173"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FE\uff1aFrontend\uff0cDoris \u7684\u524d\u7aef\u8282\u70b9,\u8d1f\u8d23\u5143\u6570\u636e\u7ba1\u7406\u548c\u8bf7\u6c42\u63a5\u5165"),(0,n.kt)("li",{parentName:"ul"},"BE\uff1aBackend\uff0cDoris \u7684\u540e\u7aef\u8282\u70b9,\u8d1f\u8d23\u67e5\u8be2\u6267\u884c\u548c\u6570\u636e\u5b58\u50a8")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("h3",{id:"doris-\u4e2d\u521b\u5efa-hudi-\u7684\u5916\u8868"},"Doris \u4e2d\u521b\u5efa Hudi \u7684\u5916\u8868"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u5728 Doris \u4e2d\u521b\u5efa Hudi \u5916\u8868\u3002\u5efa\u5916\u8868\u65f6\u65e0\u9700\u58f0\u660e\u8868\u7684\u5217\u5b9a\u4e49\uff0cDoris \u53ef\u4ee5\u5728\u67e5\u8be2\u65f6\u4eceHiveMetaStore\u4e2d\u83b7\u53d6\u5217\u4fe1\u606f\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684\u5916\u8868\uff0c\u7528\u4e8e\u6302\u8f7d Hudi \u8868\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5177\u4f53\u76f8\u5173\u8bed\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")," \u67e5\u770b\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'-- \u8bed\u6cd5\nCREATE [EXTERNAL] TABLE table_name\n[(column_definition1[, column_definition2, ...])]\nENGINE = HUDI\n[COMMENT "comment"]\nPROPERTIES (\n"hudi.database" = "hudi_db_in_hive_metastore",\n"hudi.table" = "hudi_table_in_hive_metastore",\n"hudi.hive.metastore.uris" = "thrift://127.0.0.1:9083"\n);\n')))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'-- \u4f8b\u5b50\uff1a\u6302\u8f7d HiveMetaStore \u4e2d hudi_db_in_hive_metastore \u4e0b\u7684 hudi_table_in_hive_metastore\uff0c\u6302\u8f7d\u65f6\u4e0d\u6307\u5b9aschema\u3002\nCREATE TABLE `t_hudi` \nENGINE = HUDI\nPROPERTIES (\n"hudi.database" = "hudi_db_in_hive_metastore",\n"hudi.table" = "hudi_table_in_hive_metastore",\n"hudi.hive.metastore.uris" = "thrift://127.0.0.1:9083"\n);\n\n-- \u4f8b\u5b50\uff1a\u6302\u8f7d\u65f6\u6307\u5b9aschema\nCREATE TABLE `t_hudi` (\n    `id` int NOT NULL COMMENT "id number",\n    `name` varchar(10) NOT NULL COMMENT "user name"\n) ENGINE = HUDI\nPROPERTIES (\n"hudi.database" = "hudi_db_in_hive_metastore",\n"hudi.table" = "hudi_table_in_hive_metastore",\n"hudi.hive.metastore.uris" = "thrift://127.0.0.1:9083"\n);\n```\n')),(0,n.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5916\u8868\u5217",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u6307\u5b9a\u5217\u540d\uff0c\u8fd9\u65f6\u67e5\u8be2\u65f6\u4f1a\u4eceHiveMetaStore\u4e2d\u83b7\u53d6\u5217\u4fe1\u606f\uff0c\u63a8\u8350\u8fd9\u79cd\u5efa\u8868\u65b9\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5217\u540d\u65f6\u6307\u5b9a\u7684\u5217\u540d\u8981\u5728 Hudi \u8868\u4e2d\u5b58\u5728"))),(0,n.kt)("li",{parentName:"ul"},"ENGINE \u9700\u8981\u6307\u5b9a\u4e3a HUDI"),(0,n.kt)("li",{parentName:"ul"},"PROPERTIES \u5c5e\u6027\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hudi.hive.metastore.uris"),"\uff1aHive Metastore \u670d\u52a1\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hudi.database"),"\uff1a\u6302\u8f7d Hudi \u5bf9\u5e94\u7684\u6570\u636e\u5e93\u540d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hudi.table"),"\uff1a\u6302\u8f7d Hudi \u5bf9\u5e94\u7684\u8868\u540d")))),(0,n.kt)("h3",{id:"\u5c55\u793a\u8868\u7ed3\u6784"},"\u5c55\u793a\u8868\u7ed3\u6784"),(0,n.kt)("p",null,"\u5c55\u793a\u8868\u7ed3\u6784\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE"},"SHOW CREATE TABLE")," \u67e5\u770b\u3002"),(0,n.kt)("h2",{id:"\u7c7b\u578b\u5339\u914d"},"\u7c7b\u578b\u5339\u914d"),(0,n.kt)("p",null,"\u652f\u6301\u7684 Hudi \u5217\u7c7b\u578b\u4e0e Doris \u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\u8868\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Hudi"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INTEGER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"LONG"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TIMESTAMP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Timestamp \u8f6c\u6210 Datetime \u4f1a\u635f\u5931\u7cbe\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,n.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UUID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528 VARCHAR \u6765\u4ee3\u66ff")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TIME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FIXED"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BINARY"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"STRUCT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"LIST"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"MAP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f53\u524d\u9ed8\u8ba4\u652f\u6301\u7684 Hudi \u7248\u672c\u4e3a 0.10.0\uff0c\u672a\u5728\u5176\u4ed6\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\u3002\u540e\u7eed\u540e\u652f\u6301\u66f4\u591a\u7248\u672c\u3002")),(0,n.kt)("h3",{id:"\u67e5\u8be2\u7528\u6cd5"},"\u67e5\u8be2\u7528\u6cd5"),(0,n.kt)("p",null,"\u5b8c\u6210\u5728 Doris \u4e2d\u5efa\u7acb Hudi \u5916\u8868\u540e\uff0c\u9664\u4e86\u65e0\u6cd5\u4f7f\u7528 Doris \u4e2d\u7684\u6570\u636e\u6a21\u578b(rollup\u3001\u9884\u805a\u5408\u3001\u7269\u5316\u89c6\u56fe\u7b49)\u5916\uff0c\u4e0e\u666e\u901a\u7684 Doris OLAP \u8868\u5e76\u65e0\u533a\u522b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_hudi where k1 > 1000 and k3 ='term' or k4 like '%doris';\n")))}c.isMDXComponent=!0}}]);