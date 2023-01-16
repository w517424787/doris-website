"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[30546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(O,o(o({ref:t},s),{},{components:n})):r.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW-ROUTINE-LOAD-TASK",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK",id:"sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK",title:"SHOW-ROUTINE-LOAD-TASK",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-ROUTINE-LOAD-TASK",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-ROLLUP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROLLUP"},next:{title:"SHOW-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD"}},c={},p=[{value:"SHOW-ROUTINE-LOAD-TASK",id:"show-routine-load-task",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-routine-load-task"},"SHOW-ROUTINE-LOAD-TASK"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW ROUTINE LOAD TASK"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u67e5\u770b\u4e00\u4e2a\u6307\u5b9a\u7684 Routine Load \u4f5c\u4e1a\u7684\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u5b50\u4efb\u52a1\u60c5\u51b5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW ROUTINE LOAD TASK\nWHERE JobName = "job_name";\n')),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'              TaskId: d67ce537f1be4b86-abf47530b79ab8e6\n               TxnId: 4\n           TxnStatus: UNKNOWN\n               JobId: 10280\n          CreateTime: 2020-12-12 20:29:48\n    ExecuteStartTime: 2020-12-12 20:29:48\n             Timeout: 20\n                BeId: 10002\nDataSourceProperties: {"0":19}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TaskId"),"\uff1a\u5b50\u4efb\u52a1\u7684\u552f\u4e00 ID\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TxnId"),"\uff1a\u5b50\u4efb\u52a1\u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1 ID\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TxnStatus"),"\uff1a\u5b50\u4efb\u52a1\u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1\u72b6\u6001\u3002\u901a\u5e38\u4e3a UNKNOWN\u3002\u5e76\u65e0\u5b9e\u9645\u610f\u601d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JobId"),"\uff1a\u5b50\u4efb\u52a1\u5bf9\u5e94\u7684\u4f5c\u4e1a ID\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CreateTime"),"\uff1a\u5b50\u4efb\u52a1\u7684\u521b\u5efa\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExecuteStartTime"),"\uff1a\u5b50\u4efb\u52a1\u88ab\u8c03\u5ea6\u6267\u884c\u7684\u65f6\u95f4\uff0c\u901a\u5e38\u665a\u4e8e\u521b\u5efa\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Timeout"),"\uff1a\u5b50\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u901a\u5e38\u662f\u4f5c\u4e1a\u8bbe\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"MaxIntervalS")," \u7684\u4e24\u500d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BeId"),"\uff1a\u6267\u884c\u8fd9\u4e2a\u5b50\u4efb\u52a1\u7684 BE \u8282\u70b9 ID\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DataSourceProperties"),"\uff1a\u5b50\u4efb\u52a1\u51c6\u5907\u6d88\u8d39\u7684 Kafka Partition \u7684\u8d77\u59cb offset\u3002\u662f\u4e00\u4e2a Json \u683c\u5f0f\u5b57\u7b26\u4e32\u3002Key \u4e3a Partition Id\u3002Value \u4e3a\u6d88\u8d39\u7684\u8d77\u59cb offset\u3002")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u540d\u4e3a test1 \u7684\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u7684\u5b50\u4efb\u52a1\u4fe1\u606f\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW ROUTINE LOAD TASK WHERE JobName = "test1";\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, ROUTINE, LOAD, TASK\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u547d\u4ee4\uff0c\u53ef\u4ee5\u67e5\u770b\u4e00\u4e2a Routine Load \u4f5c\u4e1a\u5f53\u524d\u6709\u591a\u5c11\u5b50\u4efb\u52a1\u5728\u8fd0\u884c\uff0c\u5177\u4f53\u8fd0\u884c\u5728\u54ea\u4e2a BE \u8282\u70b9\u4e0a\u3002"))}m.isMDXComponent=!0}}]);