"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[49636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=m(n),s=l,c=k["".concat(p,".").concat(s)]||k[s]||d[s]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={title:"\u6570\u636e\u5bfc\u51fa",language:"zh-CN"},i=void 0,o={unversionedId:"data-operate/export/export-manual",id:"data-operate/export/export-manual",title:"\u6570\u636e\u5bfc\u51fa",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/export/export-manual.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-manual",permalink:"/zh-CN/docs/dev/data-operate/export/export-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u5bfc\u51fa",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/dev/data-operate/import/import-way/load-json-format"},next:{title:"\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\u96c6",permalink:"/zh-CN/docs/dev/data-operate/export/outfile"}},p={},m=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u67e5\u8be2\u8ba1\u5212\u62c6\u5206",id:"\u67e5\u8be2\u8ba1\u5212\u62c6\u5206",level:3},{value:"\u67e5\u8be2\u8ba1\u5212\u6267\u884c",id:"\u67e5\u8be2\u8ba1\u5212\u6267\u884c",level:3},{value:"Broker \u53c2\u6570",id:"broker-\u53c2\u6570",level:3},{value:"\u5f00\u59cb\u5bfc\u51fa",id:"\u5f00\u59cb\u5bfc\u51fa",level:2},{value:"\u5bfc\u51fa\u5230HDFS",id:"\u5bfc\u51fa\u5230hdfs",level:3},{value:"\u5bfc\u51fa\u5230\u5bf9\u8c61\u5b58\u50a8",id:"\u5bfc\u51fa\u5230\u5bf9\u8c61\u5b58\u50a8",level:3},{value:"\u67e5\u770b\u5bfc\u51fa\u72b6\u6001",id:"\u67e5\u770b\u5bfc\u51fa\u72b6\u6001",level:3},{value:"\u53d6\u6d88\u5bfc\u51fa\u4efb\u52a1",id:"\u53d6\u6d88\u5bfc\u51fa\u4efb\u52a1",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206",id:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206",level:3},{value:"exec_mem_limit",id:"exec_mem_limit",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"FE",id:"fe",level:3},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],u={toc:m},k="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u5bfc\u51fa"},"\u6570\u636e\u5bfc\u51fa"),(0,l.kt)("p",null,"\u6570\u636e\u5bfc\u51fa\uff08Export\uff09\u662f Doris \u63d0\u4f9b\u7684\u4e00\u79cd\u5c06\u6570\u636e\u5bfc\u51fa\u7684\u529f\u80fd\u3002\u8be5\u529f\u80fd\u53ef\u4ee5\u5c06\u7528\u6237\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u7684\u6570\u636e\uff0c\u4ee5\u6587\u672c\u7684\u683c\u5f0f\uff0c\u901a\u8fc7 Broker \u8fdb\u7a0b\u5bfc\u51fa\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\uff0c\u5982 HDFS / \u5bf9\u8c61\u5b58\u50a8\uff08\u652f\u6301S3\u534f\u8bae\uff09 \u7b49\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Export \u7684\u57fa\u672c\u539f\u7406\u3001\u4f7f\u7528\u65b9\u5f0f\u3001\u6700\u4f73\u5b9e\u8df5\u4ee5\u53ca\u6ce8\u610f\u4e8b\u9879\u3002"),(0,l.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a Export \u4f5c\u4e1a\u540e\u3002Doris \u4f1a\u7edf\u8ba1\u8fd9\u4e2a\u4f5c\u4e1a\u6d89\u53ca\u7684\u6240\u6709 Tablet\u3002\u7136\u540e\u5bf9\u8fd9\u4e9b Tablet \u8fdb\u884c\u5206\u7ec4\uff0c\u6bcf\u7ec4\u751f\u6210\u4e00\u4e2a\u7279\u6b8a\u7684\u67e5\u8be2\u8ba1\u5212\u3002\u8be5\u67e5\u8be2\u8ba1\u5212\u4f1a\u8bfb\u53d6\u6240\u5305\u542b\u7684 Tablet \u4e0a\u7684\u6570\u636e\uff0c\u7136\u540e\u901a\u8fc7 Broker \u5c06\u6570\u636e\u5199\u5230\u8fdc\u7aef\u5b58\u50a8\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7S3\u534f\u8bae\u76f4\u63a5\u5bfc\u51fa\u5230\u652f\u6301S3\u534f\u8bae\u7684\u8fdc\u7aef\u5b58\u50a8\u4e0a\u3002"),(0,l.kt)("p",null,"\u603b\u4f53\u7684\u8c03\u5ea6\u65b9\u5f0f\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+--------+\n| Client |\n+---+----+\n    |  1. Submit Job\n    |\n+---v--------------------+\n| FE                     |\n|                        |\n| +-------------------+  |\n| | ExportPendingTask |  |\n| +-------------------+  |\n|                        | 2. Generate Tasks\n| +--------------------+ |\n| | ExportExportingTask | |\n| +--------------------+ |\n|                        |\n| +-----------+          |     +----+   +------+   +---------+\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   | Remote  |\n| +-----------+          |     +----+   +------+   | Storage |\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   +---------+\n+------------------------+         3. Execute Tasks\n\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a Export \u4f5c\u4e1a\u5230 FE\u3002"),(0,l.kt)("li",{parentName:"ol"},"FE \u7684 Export \u8c03\u5ea6\u5668\u4f1a\u901a\u8fc7\u4e24\u9636\u6bb5\u6765\u6267\u884c\u4e00\u4e2a Export \u4f5c\u4e1a\uff1a"),(0,l.kt)("li",{parentName:"ol"},"PENDING\uff1aFE \u751f\u6210 ExportPendingTask\uff0c\u5411 BE \u53d1\u9001 snapshot \u547d\u4ee4\uff0c\u5bf9\u6240\u6709\u6d89\u53ca\u5230\u7684 Tablet \u505a\u4e00\u4e2a\u5feb\u7167\u3002\u5e76\u751f\u6210\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212\u3002"),(0,l.kt)("li",{parentName:"ol"},"EXPORTING\uff1aFE \u751f\u6210 ExportExportingTask\uff0c\u5f00\u59cb\u6267\u884c\u67e5\u8be2\u8ba1\u5212\u3002")),(0,l.kt)("h3",{id:"\u67e5\u8be2\u8ba1\u5212\u62c6\u5206"},"\u67e5\u8be2\u8ba1\u5212\u62c6\u5206"),(0,l.kt)("p",null,"Export \u4f5c\u4e1a\u4f1a\u751f\u6210\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u8d1f\u8d23\u626b\u63cf\u4e00\u90e8\u5206 Tablet\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u626b\u63cf\u7684 Tablet \u4e2a\u6570\u7531 FE \u914d\u7f6e\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"export_tablet_num_per_task")," \u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a 5\u3002\u5373\u5047\u8bbe\u4e00\u5171 100 \u4e2a Tablet\uff0c\u5219\u4f1a\u751f\u6210 20 \u4e2a\u67e5\u8be2\u8ba1\u5212\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u5728\u63d0\u4ea4\u4f5c\u4e1a\u65f6\uff0c\u901a\u8fc7\u4f5c\u4e1a\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"tablet_num_per_task")," \u6307\u5b9a\u8fd9\u4e2a\u6570\u503c\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u4f5c\u4e1a\u7684\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212\u987a\u5e8f\u6267\u884c\u3002"),(0,l.kt)("h3",{id:"\u67e5\u8be2\u8ba1\u5212\u6267\u884c"},"\u67e5\u8be2\u8ba1\u5212\u6267\u884c"),(0,l.kt)("p",null,"\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u626b\u63cf\u591a\u4e2a\u5206\u7247\uff0c\u5c06\u8bfb\u53d6\u7684\u6570\u636e\u4ee5\u884c\u7684\u5f62\u5f0f\u7ec4\u7ec7\uff0c\u6bcf 1024 \u884c\u4e3a\u4e00\u4e2a batch\uff0c\u8c03\u7528 Broker \u5199\u5165\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\u3002"),(0,l.kt)("p",null,"\u67e5\u8be2\u8ba1\u5212\u9047\u5230\u9519\u8bef\u4f1a\u6574\u4f53\u81ea\u52a8\u91cd\u8bd5 3 \u6b21\u3002\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u91cd\u8bd5 3 \u6b21\u4f9d\u7136\u5931\u8d25\uff0c\u5219\u6574\u4e2a\u4f5c\u4e1a\u5931\u8d25\u3002"),(0,l.kt)("p",null,"Doris \u4f1a\u9996\u5148\u5728\u6307\u5b9a\u7684\u8fdc\u7aef\u5b58\u50a8\u7684\u8def\u5f84\u4e2d\uff0c\u5efa\u7acb\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"__doris_export_tmp_12345")," \u7684\u4e34\u65f6\u76ee\u5f55\uff08\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"12345")," \u4e3a\u4f5c\u4e1a id\uff09\u3002\u5bfc\u51fa\u7684\u6570\u636e\u9996\u5148\u4f1a\u5199\u5165\u8fd9\u4e2a\u4e34\u65f6\u76ee\u5f55\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4f1a\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u793a\u4f8b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"export-data-c69fcf2b6db5420f-a96b94c1ff8bccef-1561453713822")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"c69fcf2b6db5420f-a96b94c1ff8bccef")," \u4e3a\u67e5\u8be2\u8ba1\u5212\u7684 query id\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"1561453713822")," \u4e3a\u6587\u4ef6\u751f\u6210\u7684\u65f6\u95f4\u6233\u3002"),(0,l.kt)("p",null,"\u5f53\u6240\u6709\u6570\u636e\u90fd\u5bfc\u51fa\u540e\uff0cDoris \u4f1a\u5c06\u8fd9\u4e9b\u6587\u4ef6 rename \u5230\u7528\u6237\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\u3002"),(0,l.kt)("h3",{id:"broker-\u53c2\u6570"},"Broker \u53c2\u6570"),(0,l.kt)("p",null,"Export \u9700\u8981\u501f\u52a9 Broker \u8fdb\u7a0b\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\uff0c\u4e0d\u540c\u7684 Broker \u9700\u8981\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/advanced/broker"},"Broker\u6587\u6863")),(0,l.kt)("h2",{id:"\u5f00\u59cb\u5bfc\u51fa"},"\u5f00\u59cb\u5bfc\u51fa"),(0,l.kt)("p",null,"Export \u7684\u8be6\u7ec6\u7528\u6cd5\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT")," \u3002"),(0,l.kt)("h3",{id:"\u5bfc\u51fa\u5230hdfs"},"\u5bfc\u51fa\u5230HDFS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n[WHERE [expr]]\nTO "hdfs://host/path/to/export/" \nPROPERTIES\n(\n    "label" = "mylabel",\n    "column_separator"=",",\n    "columns" = "col1,col2",\n    "exec_mem_limit"="2147483648",\n    "timeout" = "3600"\n)\nWITH BROKER "hdfs"\n(\n    "username" = "user",\n    "password" = "passwd"\n);\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label"),"\uff1a\u672c\u6b21\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u540e\u7eed\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u6807\u8bc6\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"column_separator"),"\uff1a\u5217\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"\\t"),"\u3002\u652f\u6301\u4e0d\u53ef\u89c1\u5b57\u7b26\uff0c\u6bd4\u5982 '\\x07'\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"columns"),"\uff1a\u8981\u5bfc\u51fa\u7684\u5217\uff0c\u4f7f\u7528\u82f1\u6587\u72b6\u6001\u9017\u53f7\u9694\u5f00\uff0c\u5982\u679c\u4e0d\u586b\u8fd9\u4e2a\u53c2\u6570\u9ed8\u8ba4\u662f\u5bfc\u51fa\u8868\u7684\u6240\u6709\u5217\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"line_delimiter"),"\uff1a\u884c\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"\\n"),"\u3002\u652f\u6301\u4e0d\u53ef\u89c1\u5b57\u7b26\uff0c\u6bd4\u5982 '\\x07'\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exec_mem_limit"),"\uff1a \u8868\u793a Export \u4f5c\u4e1a\u4e2d\uff0c\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u5728\u5355\u4e2a BE \u4e0a\u7684\u5185\u5b58\u4f7f\u7528\u9650\u5236\u3002\u9ed8\u8ba4 2GB\u3002\u5355\u4f4d\u5b57\u8282\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),"\uff1a\u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4 2\u5c0f\u65f6\u3002\u5355\u4f4d\u79d2\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tablet_num_per_task"),"\uff1a\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u5206\u914d\u7684\u6700\u5927\u5206\u7247\u6570\u3002\u9ed8\u8ba4\u4e3a 5\u3002")),(0,l.kt)("h3",{id:"\u5bfc\u51fa\u5230\u5bf9\u8c61\u5b58\u50a8"},"\u5bfc\u51fa\u5230\u5bf9\u8c61\u5b58\u50a8"),(0,l.kt)("p",null,"\u901a\u8fc7s3 \u534f\u8bae\u76f4\u63a5\u5c06\u6570\u636e\u5bfc\u51fa\u5230\u6307\u5b9a\u7684\u5b58\u50a8."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'\nEXPORT TABLE test TO "s3://bucket/path/to/export/dir/" WITH S3  (\n        "AWS_ENDPOINT" = "http://host",\n        "AWS_ACCESS_KEY" = "AK",\n        "AWS_SECRET_KEY"="SK",\n        "AWS_REGION" = "region"\n    );\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_KEY"),"\uff1a\u662f\u60a8\u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u7684ACCESS_KEY/SECRET_KEY"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_ENDPOINT"),"\uff1aEndpoint\u8868\u793a\u5bf9\u8c61\u5b58\u50a8\u5bf9\u5916\u670d\u52a1\u7684\u8bbf\u95ee\u57df\u540d."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_REGION"),"\uff1a\u8868\u793a\u5bf9\u8c61\u5b58\u50a8\u6570\u636e\u4e2d\u5fc3\u6240\u5728\u7684\u5730\u57df.")),(0,l.kt)("h3",{id:"\u67e5\u770b\u5bfc\u51fa\u72b6\u6001"},"\u67e5\u770b\u5bfc\u51fa\u72b6\u6001"),(0,l.kt)("p",null,"\u63d0\u4ea4\u4f5c\u4e1a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7  ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT")," \u547d\u4ee4\u67e5\u8be2\u5bfc\u51fa\u4f5c\u4e1a\u72b6\u6001\u3002\u7ed3\u679c\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show EXPORT\\G;\n*************************** 1. row ***************************\n     JobId: 14008\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":["*"],"exec mem limit":2147483648,"column separator":",","line delimiter":"\\n","tablet num":1,"broker":"hdfs","coord num":1,"db":"default_cluster:db1","tbl":"tbl3"}\n      Path: hdfs://host/path/to/export/\nCreateTime: 2019-06-25 17:08:24\n StartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\n   Timeout: 3600\n  ErrorMsg: NULL\n1 row in set (0.01 sec)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JobId\uff1a\u4f5c\u4e1a\u7684\u552f\u4e00 ID"),(0,l.kt)("li",{parentName:"ul"},"State\uff1a\u4f5c\u4e1a\u72b6\u6001\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PENDING\uff1a\u4f5c\u4e1a\u5f85\u8c03\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"EXPORTING\uff1a\u6570\u636e\u5bfc\u51fa\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"FINISHED\uff1a\u4f5c\u4e1a\u6210\u529f"),(0,l.kt)("li",{parentName:"ul"},"CANCELLED\uff1a\u4f5c\u4e1a\u5931\u8d25"))),(0,l.kt)("li",{parentName:"ul"},"Progress\uff1a\u4f5c\u4e1a\u8fdb\u5ea6\u3002\u8be5\u8fdb\u5ea6\u4ee5\u67e5\u8be2\u8ba1\u5212\u4e3a\u5355\u4f4d\u3002\u5047\u8bbe\u4e00\u5171 10 \u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5f53\u524d\u5df2\u5b8c\u6210 3 \u4e2a\uff0c\u5219\u8fdb\u5ea6\u4e3a 30%\u3002"),(0,l.kt)("li",{parentName:"ul"},"TaskInfo\uff1a\u4ee5 Json \u683c\u5f0f\u5c55\u793a\u7684\u4f5c\u4e1a\u4fe1\u606f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"db\uff1a\u6570\u636e\u5e93\u540d"),(0,l.kt)("li",{parentName:"ul"},"tbl\uff1a\u8868\u540d"),(0,l.kt)("li",{parentName:"ul"},"partitions\uff1a\u6307\u5b9a\u5bfc\u51fa\u7684\u5206\u533a\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u8868\u793a\u6240\u6709\u5206\u533a\u3002"),(0,l.kt)("li",{parentName:"ul"},"exec mem limit\uff1a\u67e5\u8be2\u8ba1\u5212\u5185\u5b58\u4f7f\u7528\u9650\u5236\u3002\u5355\u4f4d\u5b57\u8282\u3002"),(0,l.kt)("li",{parentName:"ul"},"column separator\uff1a\u5bfc\u51fa\u6587\u4ef6\u7684\u5217\u5206\u9694\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"line delimiter\uff1a\u5bfc\u51fa\u6587\u4ef6\u7684\u884c\u5206\u9694\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"tablet num\uff1a\u6d89\u53ca\u7684\u603b Tablet \u6570\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"broker\uff1a\u4f7f\u7528\u7684 broker \u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},"coord num\uff1a\u67e5\u8be2\u8ba1\u5212\u7684\u4e2a\u6570\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Path\uff1a\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u5bfc\u51fa\u8def\u5f84\u3002"),(0,l.kt)("li",{parentName:"ul"},"CreateTime/StartTime/FinishTime\uff1a\u4f5c\u4e1a\u7684\u521b\u5efa\u65f6\u95f4\u3001\u5f00\u59cb\u8c03\u5ea6\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"Timeout\uff1a\u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\u662f\u79d2\u3002\u8be5\u65f6\u95f4\u4ece CreateTime \u5f00\u59cb\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},"ErrorMsg\uff1a\u5982\u679c\u4f5c\u4e1a\u51fa\u73b0\u9519\u8bef\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u9519\u8bef\u539f\u56e0\u3002")),(0,l.kt)("h3",{id:"\u53d6\u6d88\u5bfc\u51fa\u4efb\u52a1"},"\u53d6\u6d88\u5bfc\u51fa\u4efb\u52a1"),(0,l.kt)("version",{since:"1.2.2"}),(0,l.kt)("p",null,"\u63d0\u4ea4\u4f5c\u4e1a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7  ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"},"CANCEL EXPORT")," \u547d\u4ee4\u53d6\u6d88\u5bfc\u51fa\u4f5c\u4e1a\u3002\u53d6\u6d88\u547d\u4ee4\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n')),(0,l.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("h3",{id:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206"},"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206"),(0,l.kt)("p",null,"\u4e00\u4e2a Export \u4f5c\u4e1a\u6709\u591a\u5c11\u67e5\u8be2\u8ba1\u5212\u9700\u8981\u6267\u884c\uff0c\u53d6\u51b3\u4e8e\u603b\u5171\u6709\u591a\u5c11 Tablet\uff0c\u4ee5\u53ca\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u6700\u591a\u53ef\u4ee5\u5206\u914d\u591a\u5c11\u4e2a Tablet\u3002\u56e0\u4e3a\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212\u662f\u4e32\u884c\u6267\u884c\u7684\uff0c\u6240\u4ee5\u5982\u679c\u8ba9\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u5904\u7406\u66f4\u591a\u7684\u5206\u7247\uff0c\u5219\u53ef\u4ee5\u51cf\u5c11\u4f5c\u4e1a\u7684\u6267\u884c\u65f6\u95f4\u3002\u4f46\u5982\u679c\u67e5\u8be2\u8ba1\u5212\u51fa\u9519\uff08\u6bd4\u5982\u8c03\u7528 Broker \u7684 RPC \u5931\u8d25\uff0c\u8fdc\u7aef\u5b58\u50a8\u51fa\u73b0\u6296\u52a8\u7b49\uff09\uff0c\u8fc7\u591a\u7684 Tablet \u4f1a\u5bfc\u81f4\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u7684\u91cd\u8bd5\u6210\u672c\u53d8\u9ad8\u3002\u6240\u4ee5\u9700\u8981\u5408\u7406\u5b89\u6392\u67e5\u8be2\u8ba1\u5212\u7684\u4e2a\u6570\u4ee5\u53ca\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u6240\u9700\u8981\u626b\u63cf\u7684\u5206\u7247\u6570\uff0c\u5728\u6267\u884c\u65f6\u95f4\u548c\u6267\u884c\u6210\u529f\u7387\u4e4b\u95f4\u505a\u51fa\u5e73\u8861\u3002\u4e00\u822c\u5efa\u8bae\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u626b\u63cf\u7684\u6570\u636e\u91cf\u5728 3-5 GB\u5185\uff08\u4e00\u4e2a\u8868\u7684 Tablet \u7684\u5927\u5c0f\u4ee5\u53ca\u4e2a\u6570\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW TABLETS FROM tbl_name;")," \u8bed\u53e5\u67e5\u770b\u3002\uff09\u3002"),(0,l.kt)("h3",{id:"exec_mem_limit"},"exec","_","mem","_","limit"),(0,l.kt)("p",null,"\u901a\u5e38\u4e00\u4e2a Export \u4f5c\u4e1a\u7684\u67e5\u8be2\u8ba1\u5212\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u626b\u63cf"),"-",(0,l.kt)("inlineCode",{parentName:"p"},"\u5bfc\u51fa")," \u4e24\u90e8\u5206\uff0c\u4e0d\u6d89\u53ca\u9700\u8981\u592a\u591a\u5185\u5b58\u7684\u8ba1\u7b97\u903b\u8f91\u3002\u6240\u4ee5\u901a\u5e38 2GB \u7684\u9ed8\u8ba4\u5185\u5b58\u9650\u5236\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002\u4f46\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5728\u540c\u4e00\u4e2a BE \u4e0a\u9700\u8981\u626b\u63cf\u7684 Tablet \u8fc7\u591a\uff0c\u6216\u8005 Tablet \u7684\u6570\u636e\u7248\u672c\u8fc7\u591a\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u4e0d\u8db3\u3002\u6b64\u65f6\u9700\u8981\u901a\u8fc7\u8fd9\u4e2a\u53c2\u6570\u8bbe\u7f6e\u66f4\u5927\u7684\u5185\u5b58\uff0c\u6bd4\u5982 4GB\u30018GB \u7b49\u3002"),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4e00\u6b21\u6027\u5bfc\u51fa\u5927\u91cf\u6570\u636e\u3002\u4e00\u4e2a Export \u4f5c\u4e1a\u5efa\u8bae\u7684\u5bfc\u51fa\u6570\u636e\u91cf\u6700\u5927\u5728\u51e0\u5341 GB\u3002\u8fc7\u5927\u7684\u5bfc\u51fa\u4f1a\u5bfc\u81f4\u66f4\u591a\u7684\u5783\u573e\u6587\u4ef6\u548c\u66f4\u9ad8\u7684\u91cd\u8bd5\u6210\u672c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8868\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5efa\u8bae\u6309\u7167\u5206\u533a\u5bfc\u51fa\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Export \u4f5c\u4e1a\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c FE \u53d1\u751f\u91cd\u542f\u6216\u5207\u4e3b\uff0c\u5219 Export \u4f5c\u4e1a\u4f1a\u5931\u8d25\uff0c\u9700\u8981\u7528\u6237\u91cd\u65b0\u63d0\u4ea4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c Export \u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25\uff0c\u5728\u8fdc\u7aef\u5b58\u50a8\u4e2d\u4ea7\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"__doris_export_tmp_xxx")," \u4e34\u65f6\u76ee\u5f55\uff0c\u4ee5\u53ca\u5df2\u7ecf\u751f\u6210\u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5220\u9664\uff0c\u9700\u8981\u7528\u6237\u624b\u52a8\u5220\u9664\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c Export \u4f5c\u4e1a\u8fd0\u884c\u6210\u529f\uff0c\u5728\u8fdc\u7aef\u5b58\u50a8\u4e2d\u4ea7\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"__doris_export_tmp_xxx")," \u76ee\u5f55\uff0c\u6839\u636e\u8fdc\u7aef\u5b58\u50a8\u7684\u6587\u4ef6\u7cfb\u7edf\u8bed\u4e49\uff0c\u53ef\u80fd\u4f1a\u4fdd\u7559\uff0c\u4e5f\u53ef\u80fd\u4f1a\u88ab\u6e05\u9664\u3002\u6bd4\u5982\u5bf9\u8c61\u5b58\u50a8\uff08\u652f\u6301S3\u534f\u8bae\uff09\u4e2d\uff0c\u901a\u8fc7 rename \u64cd\u4f5c\u5c06\u4e00\u4e2a\u76ee\u5f55\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u6587\u4ef6\u79fb\u8d70\u540e\uff0c\u8be5\u76ee\u5f55\u4e5f\u4f1a\u88ab\u5220\u9664\u3002\u5982\u679c\u8be5\u76ee\u5f55\u6ca1\u6709\u88ab\u6e05\u9664\uff0c\u7528\u6237\u53ef\u4ee5\u624b\u52a8\u6e05\u9664\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 Export \u8fd0\u884c\u5b8c\u6210\u540e\uff08\u6210\u529f\u6216\u5931\u8d25\uff09\uff0cFE \u53d1\u751f\u91cd\u542f\u6216\u5207\u4e3b\uff0c\u5219  ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT")," \u5c55\u793a\u7684\u4f5c\u4e1a\u7684\u90e8\u5206\u4fe1\u606f\u4f1a\u4e22\u5931\uff0c\u65e0\u6cd5\u67e5\u770b\u3002"),(0,l.kt)("li",{parentName:"ul"},"Export \u4f5c\u4e1a\u53ea\u4f1a\u5bfc\u51fa Base \u8868\u7684\u6570\u636e\uff0c\u4e0d\u4f1a\u5bfc\u51fa Rollup Index \u7684\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"Export \u4f5c\u4e1a\u4f1a\u626b\u63cf\u6570\u636e\uff0c\u5360\u7528 IO \u8d44\u6e90\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u7684\u67e5\u8be2\u5ef6\u8fdf\u3002")),(0,l.kt)("h2",{id:"\u76f8\u5173\u914d\u7f6e"},"\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("h3",{id:"fe"},"FE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export_checker_interval_second"),"\uff1aExport \u4f5c\u4e1a\u8c03\u5ea6\u5668\u7684\u8c03\u5ea6\u95f4\u9694\uff0c\u9ed8\u8ba4\u4e3a 5 \u79d2\u3002\u8bbe\u7f6e\u8be5\u53c2\u6570\u9700\u91cd\u542f FE\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export_running_job_num_limit"),"\uff1a\u6b63\u5728\u8fd0\u884c\u7684 Export \u4f5c\u4e1a\u6570\u91cf\u9650\u5236\u3002\u5982\u679c\u8d85\u8fc7\uff0c\u5219\u4f5c\u4e1a\u5c06\u7b49\u5f85\u5e76\u5904\u4e8e PENDING \u72b6\u6001\u3002\u9ed8\u8ba4\u4e3a 5\uff0c\u53ef\u4ee5\u8fd0\u884c\u65f6\u8c03\u6574\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export_task_default_timeout_second"),"\uff1aExport \u4f5c\u4e1a\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u4e3a 2 \u5c0f\u65f6\u3002\u53ef\u4ee5\u8fd0\u884c\u65f6\u8c03\u6574\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export_tablet_num_per_task"),"\uff1a\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u8d1f\u8d23\u7684\u6700\u5927\u5206\u7247\u6570\u3002\u9ed8\u8ba4\u4e3a 5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label"),"\uff1a\u7528\u6237\u624b\u52a8\u6307\u5b9a\u7684 EXPORT \u4efb\u52a1 label \uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a label \u3002")),(0,l.kt)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,l.kt)("p",null,"\u5173\u4e8e Export \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},"Export")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP EXPORT")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);