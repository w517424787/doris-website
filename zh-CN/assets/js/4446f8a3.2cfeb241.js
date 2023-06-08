"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[25394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=m(a),c=r,N=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(N,p(p({ref:t},s),{},{components:a})):n.createElement(N,p({ref:t},s))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[k]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406",language:"zh-CN"},p=void 0,i={unversionedId:"admin-manual/maint-monitor/disk-capacity",id:"admin-manual/maint-monitor/disk-capacity",title:"\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/maint-monitor/disk-capacity.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/disk-capacity",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/disk-capacity",draft:!1,tags:[],version:"current",frontMatter:{title:"\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406",language:"zh-CN"},sidebar:"docs",previous:{title:"\u76d1\u63a7\u6307\u6807",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/monitor-metrics/metrics"},next:{title:"\u6570\u636e\u526f\u672c\u7ba1\u7406",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-repair-and-balance"}},o={},m=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"FE \u53c2\u6570",id:"fe-\u53c2\u6570",level:2},{value:"BE \u53c2\u6570",id:"be-\u53c2\u6570",level:2},{value:"\u78c1\u76d8\u7a7a\u95f4\u91ca\u653e",id:"\u78c1\u76d8\u7a7a\u95f4\u91ca\u653e",level:2}],s={toc:m},k="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406"},"\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u548c\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u6709\u5173\u7684\u7cfb\u7edf\u53c2\u6570\u548c\u5904\u7406\u7b56\u7565\u3002"),(0,r.kt)("p",null,"Doris \u7684\u6570\u636e\u78c1\u76d8\u7a7a\u95f4\u5982\u679c\u4e0d\u52a0\u4ee5\u63a7\u5236\uff0c\u4f1a\u56e0\u78c1\u76d8\u5199\u6ee1\u800c\u5bfc\u81f4\u8fdb\u7a0b\u6302\u6389\u3002\u56e0\u6b64\u6211\u4eec\u76d1\u6d4b\u78c1\u76d8\u7684\u4f7f\u7528\u7387\u548c\u5269\u4f59\u7a7a\u95f4\uff0c\u901a\u8fc7\u8bbe\u7f6e\u4e0d\u540c\u7684\u8b66\u6212\u6c34\u4f4d\uff0c\u6765\u63a7\u5236 Doris \u7cfb\u7edf\u4e2d\u7684\u5404\u9879\u64cd\u4f5c\uff0c\u5c3d\u91cf\u907f\u514d\u53d1\u751f\u78c1\u76d8\u88ab\u5199\u6ee1\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data Dir\uff1a\u6570\u636e\u76ee\u5f55\uff0c\u5728 BE \u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"be.conf")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"storage_root_path")," \u4e2d\u6307\u5b9a\u7684\u5404\u4e2a\u6570\u636e\u76ee\u5f55\u3002\u901a\u5e38\u4e00\u4e2a\u6570\u636e\u76ee\u5f55\u5bf9\u5e94\u4e00\u4e2a\u78c1\u76d8\u3001\u56e0\u6b64\u4e0b\u6587\u4e2d ",(0,r.kt)("strong",{parentName:"li"},"\u78c1\u76d8")," \u4e5f\u6307\u4ee3\u4e00\u4e2a\u6570\u636e\u76ee\u5f55\u3002")),(0,r.kt)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,r.kt)("p",null,"BE \u5b9a\u671f\uff08\u6bcf\u9694\u4e00\u5206\u949f\uff09\u4f1a\u5411 FE \u6c47\u62a5\u4e00\u6b21\u78c1\u76d8\u4f7f\u7528\u60c5\u51b5\u3002FE \u8bb0\u5f55\u8fd9\u4e9b\u7edf\u8ba1\u503c\uff0c\u5e76\u6839\u636e\u8fd9\u4e9b\u7edf\u8ba1\u503c\uff0c\u9650\u5236\u4e0d\u540c\u7684\u64cd\u4f5c\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u5728 FE \u4e2d\u5206\u522b\u8bbe\u7f6e\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"\u9ad8\u6c34\u4f4d\uff08High Watermark\uff09")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u5371\u9669\u6c34\u4f4d\uff08Flood Stage\uff09")," \u4e24\u7ea7\u9608\u503c\u3002\u5371\u9669\u6c34\u4f4d\u9ad8\u4e8e\u9ad8\u6c34\u4f4d\u3002\u5f53\u78c1\u76d8\u4f7f\u7528\u7387\u9ad8\u4e8e\u9ad8\u6c34\u4f4d\u65f6\uff0cDoris \u4f1a\u9650\u5236\u67d0\u4e9b\u64cd\u4f5c\u7684\u6267\u884c\uff08\u5982\u526f\u672c\u5747\u8861\u7b49\uff09\u3002\u800c\u5982\u679c\u9ad8\u4e8e\u5371\u9669\u6c34\u4f4d\uff0c\u5219\u4f1a\u7981\u6b62\u67d0\u4e9b\u64cd\u4f5c\u7684\u6267\u884c\uff08\u5982\u5bfc\u5165\uff09\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u5728 BE \u4e0a\u4e5f\u8bbe\u7f6e\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"\u5371\u9669\u6c34\u4f4d\uff08Flood Stage\uff09"),"\u3002\u8003\u8651\u5230 FE \u5e76\u4e0d\u80fd\u5b8c\u5168\u53ca\u65f6\u7684\u68c0\u6d4b\u5230 BE \u4e0a\u7684\u78c1\u76d8\u4f7f\u7528\u60c5\u51b5\uff0c\u4ee5\u53ca\u65e0\u6cd5\u63a7\u5236\u67d0\u4e9b BE \u81ea\u8eab\u8fd0\u884c\u7684\u64cd\u4f5c\uff08\u5982 Compaction\uff09\u3002\u56e0\u6b64 BE \u4e0a\u7684\u5371\u9669\u6c34\u4f4d\u7528\u4e8e BE \u4e3b\u52a8\u62d2\u7edd\u548c\u505c\u6b62\u67d0\u4e9b\u64cd\u4f5c\uff0c\u8fbe\u5230\u81ea\u6211\u4fdd\u62a4\u7684\u76ee\u7684\u3002"),(0,r.kt)("h2",{id:"fe-\u53c2\u6570"},"FE \u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9ad8\u6c34\u4f4d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"storage_high_watermark_usage_percent \u9ed8\u8ba4 85 (85%)\u3002\nstorage_min_left_capacity_bytes \u9ed8\u8ba4 2GB\u3002\n")),(0,r.kt)("p",null,"\u5f53\u78c1\u76d8\u7a7a\u95f4\u4f7f\u7528\u7387",(0,r.kt)("strong",{parentName:"p"},"\u5927\u4e8e")," ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_high_watermark_usage_percent"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6216\u8005")," \u78c1\u76d8\u7a7a\u95f4\u5269\u4f59\u5927\u5c0f",(0,r.kt)("strong",{parentName:"p"},"\u5c0f\u4e8e")," ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_min_left_capacity_bytes")," \u65f6\uff0c\u8be5\u78c1\u76d8\u4e0d\u4f1a\u518d\u88ab\u4f5c\u4e3a\u4ee5\u4e0b\u64cd\u4f5c\u7684\u76ee\u7684\u8def\u5f84\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tablet \u5747\u8861\u64cd\u4f5c\uff08Balance\uff09"),(0,r.kt)("li",{parentName:"ul"},"Colocation \u8868\u6570\u636e\u5206\u7247\u7684\u91cd\u5206\u5e03\uff08Relocation\uff09"),(0,r.kt)("li",{parentName:"ul"},"Decommission")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5371\u9669\u6c34\u4f4d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"storage_flood_stage_usage_percent \u9ed8\u8ba4 95 (95%)\u3002\nstorage_flood_stage_left_capacity_bytes \u9ed8\u8ba4 1GB\u3002\n")),(0,r.kt)("p",null,"\u5f53\u78c1\u76d8\u7a7a\u95f4\u4f7f\u7528\u7387",(0,r.kt)("strong",{parentName:"p"},"\u5927\u4e8e")," ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_flood_stage_usage_percent"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5e76\u4e14")," \u78c1\u76d8\u7a7a\u95f4\u5269\u4f59\u5927\u5c0f",(0,r.kt)("strong",{parentName:"p"},"\u5c0f\u4e8e")," ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_flood_stage_left_capacity_bytes")," \u65f6\uff0c\u8be5\u78c1\u76d8\u4e0d\u4f1a\u518d\u88ab\u4f5c\u4e3a\u4ee5\u4e0b\u64cd\u4f5c\u7684\u76ee\u7684\u8def\u5f84\uff0c\u5e76\u7981\u6b62\u67d0\u4e9b\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tablet \u5747\u8861\u64cd\u4f5c\uff08Balance\uff09"),(0,r.kt)("li",{parentName:"ul"},"Colocation \u8868\u6570\u636e\u5206\u7247\u7684\u91cd\u5206\u5e03\uff08Relocation\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u526f\u672c\u8865\u9f50"),(0,r.kt)("li",{parentName:"ul"},"\u6062\u590d\u64cd\u4f5c\uff08Restore\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5bfc\u5165\uff08Load/Insert\uff09")),(0,r.kt)("h2",{id:"be-\u53c2\u6570"},"BE \u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5371\u9669\u6c34\u4f4d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"storage_flood_stage_usage_percent \u9ed8\u8ba4 90 (90%)\u3002\nstorage_flood_stage_left_capacity_bytes \u9ed8\u8ba4 1GB\u3002\n")),(0,r.kt)("p",null,"\u5f53\u78c1\u76d8\u7a7a\u95f4\u4f7f\u7528\u7387",(0,r.kt)("strong",{parentName:"p"},"\u5927\u4e8e")," ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_flood_stage_usage_percent"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5e76\u4e14")," \u78c1\u76d8\u7a7a\u95f4\u5269\u4f59\u5927\u5c0f",(0,r.kt)("strong",{parentName:"p"},"\u5c0f\u4e8e")," ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_flood_stage_left_capacity_bytes")," \u65f6\uff0c\u8be5\u78c1\u76d8\u4e0a\u7684\u4ee5\u4e0b\u64cd\u4f5c\u4f1a\u88ab\u7981\u6b62\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Base/Cumulative Compaction\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5199\u5165\u3002\u5305\u62ec\u5404\u79cd\u5bfc\u5165\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Clone Task\u3002\u901a\u5e38\u53d1\u751f\u4e8e\u526f\u672c\u4fee\u590d\u6216\u5747\u8861\u65f6\u3002"),(0,r.kt)("li",{parentName:"ul"},"Push Task\u3002\u53d1\u751f\u5728 Hadoop \u5bfc\u5165\u7684 Loading \u9636\u6bb5\uff0c\u4e0b\u8f7d\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"Alter Task\u3002Schema Change \u6216 Rollup \u4efb\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"Download Task\u3002\u6062\u590d\u64cd\u4f5c\u7684 Downloading \u9636\u6bb5\u3002")),(0,r.kt)("h2",{id:"\u78c1\u76d8\u7a7a\u95f4\u91ca\u653e"},"\u78c1\u76d8\u7a7a\u95f4\u91ca\u653e"),(0,r.kt)("p",null,"\u5f53\u78c1\u76d8\u7a7a\u95f4\u9ad8\u4e8e\u9ad8\u6c34\u4f4d\u751a\u81f3\u5371\u9669\u6c34\u4f4d\u540e\uff0c\u5f88\u591a\u64cd\u4f5c\u90fd\u4f1a\u88ab\u7981\u6b62\u3002\u6b64\u65f6\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u51cf\u5c11\u78c1\u76d8\u4f7f\u7528\u7387\uff0c\u6062\u590d\u7cfb\u7edf\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u8868\u6216\u5206\u533a"),(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5220\u9664\u8868\u6216\u5206\u533a\u7684\u65b9\u5f0f\uff0c\u80fd\u591f\u5feb\u901f\u964d\u4f4e\u78c1\u76d8\u7a7a\u95f4\u4f7f\u7528\u7387\uff0c\u6062\u590d\u96c6\u7fa4\u3002",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u53ea\u6709 ",(0,r.kt)("inlineCode",{parentName:"strong"},"DROP")," \u64cd\u4f5c\u53ef\u4ee5\u8fbe\u5230\u5feb\u901f\u964d\u4f4e\u78c1\u76d8\u7a7a\u95f4\u4f7f\u7528\u7387\u7684\u76ee\u7684\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"DELETE")," \u64cd\u4f5c\u4e0d\u53ef\u4ee5\u3002")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"DROP TABLE tbl;\nALTER TABLE tbl DROP PARTITION p1;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6269\u5bb9 BE"),(0,r.kt)("p",{parentName:"li"},"\u6269\u5bb9\u540e\uff0c\u6570\u636e\u5206\u7247\u4f1a\u81ea\u52a8\u5747\u8861\u5230\u78c1\u76d8\u4f7f\u7528\u7387\u8f83\u4f4e\u7684 BE \u8282\u70b9\u4e0a\u3002\u6269\u5bb9\u64cd\u4f5c\u4f1a\u6839\u636e\u6570\u636e\u91cf\u53ca\u8282\u70b9\u6570\u91cf\u4e0d\u540c\uff0c\u5728\u6570\u5c0f\u65f6\u6216\u6570\u5929\u540e\u4f7f\u96c6\u7fa4\u5230\u8fbe\u5747\u8861\u72b6\u6001\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u8868\u6216\u5206\u533a\u7684\u526f\u672c"),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5c06\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u6570\u964d\u4f4e\u3002\u6bd4\u5982\u9ed8\u8ba43\u526f\u672c\u53ef\u4ee5\u964d\u4f4e\u4e3a2\u526f\u672c\u3002\u8be5\u65b9\u6cd5\u867d\u7136\u964d\u4f4e\u4e86\u6570\u636e\u7684\u53ef\u9760\u6027\uff0c\u4f46\u662f\u80fd\u591f\u5feb\u901f\u7684\u964d\u4f4e\u78c1\u76d8\u4f7f\u7528\u7387\uff0c\u4f7f\u96c6\u7fa4\u6062\u590d\u6b63\u5e38\u3002\u8be5\u65b9\u6cd5\u901a\u5e38\u7528\u4e8e\u7d27\u6025\u6062\u590d\u7cfb\u7edf\u3002\u8bf7\u5728\u6062\u590d\u540e\uff0c\u901a\u8fc7\u6269\u5bb9\u6216\u5220\u9664\u6570\u636e\u7b49\u65b9\u5f0f\uff0c\u964d\u4f4e\u78c1\u76d8\u4f7f\u7528\u7387\u540e\uff0c\u5c06\u526f\u672c\u6570\u6062\u590d\u4e3a 3\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u526f\u672c\u64cd\u4f5c\u4e3a\u77ac\u95f4\u751f\u6548\uff0c\u540e\u53f0\u4f1a\u81ea\u52a8\u5f02\u6b65\u7684\u5220\u9664\u591a\u4f59\u7684\u526f\u672c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'ALTER TABLE tbl MODIFY PARTITION p1 SET("replication_num" = "2");\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u591a\u4f59\u6587\u4ef6"),(0,r.kt)("p",{parentName:"li"},"\u5f53 BE \u8fdb\u7a0b\u5df2\u7ecf\u56e0\u4e3a\u78c1\u76d8\u5199\u6ee1\u800c\u6302\u6389\u5e76\u65e0\u6cd5\u542f\u52a8\u65f6\uff08\u6b64\u73b0\u8c61\u53ef\u80fd\u56e0 FE \u6216 BE \u68c0\u6d4b\u4e0d\u53ca\u65f6\u800c\u53d1\u751f\uff09\u3002\u9700\u8981\u901a\u8fc7\u5220\u9664\u6570\u636e\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u4e34\u65f6\u6587\u4ef6\uff0c\u4fdd\u8bc1 BE \u8fdb\u7a0b\u80fd\u591f\u542f\u52a8\u3002\u4ee5\u4e0b\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u53ef\u4ee5\u76f4\u63a5\u5220\u9664\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"log/\uff1a\u65e5\u5fd7\u76ee\u5f55\u4e0b\u7684\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"snapshot/: \u5feb\u7167\u76ee\u5f55\u4e0b\u7684\u5feb\u7167\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"trash/\uff1a\u56de\u6536\u7ad9\u4e2d\u7684\u6587\u4ef6\u3002")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u79cd\u64cd\u4f5c\u4f1a\u5bf9 ",(0,r.kt)("a",{parentName:"strong",href:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-restore-tool"},"\u4ece BE \u56de\u6536\u7ad9\u4e2d\u6062\u590d\u6570\u636e")," \u4ea7\u751f\u5f71\u54cd\u3002")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679cBE\u8fd8\u80fd\u591f\u542f\u52a8\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN CLEAN TRASH ON(BackendHost:BackendHeartBeatPort);"),"\u6765\u4e3b\u52a8\u6e05\u7406\u4e34\u65f6\u6587\u4ef6\uff0c\u4f1a\u6e05\u7406 ",(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709")," trash\u6587\u4ef6\u548c\u8fc7\u671fsnapshot\u6587\u4ef6\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u5c06\u5f71\u54cd\u4ece\u56de\u6536\u7ad9\u6062\u590d\u6570\u636e\u7684\u64cd\u4f5c")," \u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u624b\u52a8\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN CLEAN TRASH"),"\uff0c\u7cfb\u7edf\u4ecd\u5c06\u4f1a\u5728\u51e0\u5206\u949f\u81f3\u51e0\u5341\u5206\u949f\u5185\u81ea\u52a8\u6267\u884c\u6e05\u7406\uff0c\u8fd9\u91cc\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u78c1\u76d8\u5360\u7528\u672a\u8fbe\u5230 ",(0,r.kt)("strong",{parentName:"li"},"\u5371\u9669\u6c34\u4f4d(Flood Stage)")," \u768490%\uff0c\u5219\u4f1a\u6e05\u7406\u8fc7\u671ftrash\u6587\u4ef6\u548c\u8fc7\u671fsnapshot\u6587\u4ef6\uff0c\u6b64\u65f6\u4f1a\u4fdd\u7559\u4e00\u4e9b\u8fd1\u671f\u6587\u4ef6\u800c\u4e0d\u5f71\u54cd\u6062\u590d\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u78c1\u76d8\u5360\u7528\u5df2\u8fbe\u5230 ",(0,r.kt)("strong",{parentName:"li"},"\u5371\u9669\u6c34\u4f4d(Flood Stage)")," \u768490%\uff0c\u5219\u4f1a\u6e05\u7406 ",(0,r.kt)("strong",{parentName:"li"},"\u6240\u6709")," trash\u6587\u4ef6\u548c\u8fc7\u671fsnapshot\u6587\u4ef6\uff0c ",(0,r.kt)("strong",{parentName:"li"},"\u6b64\u65f6\u4f1a\u5f71\u54cd\u4ece\u56de\u6536\u7ad9\u6062\u590d\u6570\u636e\u7684\u64cd\u4f5c")," \u3002 \u81ea\u52a8\u6267\u884c\u7684\u65f6\u95f4\u95f4\u9694\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"max_garbage_sweep_interval"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"min_garbage_sweep_interval"),"\u66f4\u6539\u3002")),(0,r.kt)("p",{parentName:"li"},"\u51fa\u73b0\u7531\u4e8e\u7f3a\u5c11trash\u6587\u4ef6\u800c\u5bfc\u81f4\u6062\u590d\u5931\u8d25\u7684\u60c5\u51b5\u65f6\uff0c\u53ef\u80fd\u8fd4\u56de\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"status": "Fail","msg": "can find tablet path in trash"}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u6570\u636e\u6587\u4ef6\uff08\u5371\u9669\uff01\uff01\uff01\uff09"),(0,r.kt)("p",{parentName:"li"},"\u5f53\u4ee5\u4e0a\u64cd\u4f5c\u90fd\u65e0\u6cd5\u91ca\u653e\u7a7a\u95f4\u65f6\uff0c\u9700\u8981\u901a\u8fc7\u5220\u9664\u6570\u636e\u6587\u4ef6\u6765\u91ca\u653e\u7a7a\u95f4\u3002\u6570\u636e\u6587\u4ef6\u5728\u6307\u5b9a\u6570\u636e\u76ee\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"data/")," \u76ee\u5f55\u4e0b\u3002\u5220\u9664\u6570\u636e\u5206\u7247\uff08Tablet\uff09\u5fc5\u987b\u5148\u786e\u4fdd\u8be5 Tablet \u81f3\u5c11\u6709\u4e00\u4e2a\u526f\u672c\u662f\u6b63\u5e38\u7684\uff0c\u5426\u5219",(0,r.kt)("strong",{parentName:"p"},"\u5220\u9664\u552f\u4e00\u526f\u672c\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931"),"\u3002\u5047\u8bbe\u6211\u4eec\u8981\u5220\u9664 id \u4e3a 12345 \u7684 Tablet\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u627e\u5230 Tablet \u5bf9\u5e94\u7684\u76ee\u5f55\uff0c\u901a\u5e38\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"data/shard_id/tablet_id/")," \u4e0b\u3002\u5982\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data/0/12345/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bb0\u5f55 tablet id \u548c schema hash\u3002\u5176\u4e2d schema hash \u4e3a\u4e0a\u4e00\u6b65\u76ee\u5f55\u7684\u4e0b\u4e00\u7ea7\u76ee\u5f55\u540d\u3002\u5982\u4e0b\u4e3a 352781111\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data/0/12345/352781111"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u6570\u636e\u76ee\u5f55\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf data/0/12345/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664 Tablet \u5143\u6570\u636e\uff08\u5177\u4f53\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-meta-tool"},"Tablet \u5143\u6570\u636e\u7ba1\u7406\u5de5\u5177"),"\uff09"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"./lib/meta_tool --operation=delete_header --root_path=/path/to/root_path --tablet_id=12345 --schema_hash= 352781111")))))))}u.isMDXComponent=!0}}]);