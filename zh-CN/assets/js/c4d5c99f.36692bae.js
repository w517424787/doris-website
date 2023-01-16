"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[2849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,s=u["".concat(p,".").concat(c)]||u[c]||_[c]||i;return n?o.createElement(s,a(a({ref:t},d),{},{components:n})):o.createElement(s,a({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[u]="string"==typeof e?e:r,a[1]=m;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>_,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"FE \u76d1\u63a7\u9879",language:"zh-CN"},a=void 0,m={unversionedId:"administrator-guide/operation/monitor-metrics/fe-metrics",id:"version-0.15/administrator-guide/operation/monitor-metrics/fe-metrics",title:"FE \u76d1\u63a7\u9879",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/operation/monitor-metrics/fe-metrics.md",sourceDirName:"administrator-guide/operation/monitor-metrics",slug:"/administrator-guide/operation/monitor-metrics/fe-metrics",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/monitor-metrics/fe-metrics",draft:!1,tags:[],version:"0.15",frontMatter:{title:"FE \u76d1\u63a7\u9879",language:"zh-CN"},sidebar:"docs",previous:{title:"BE \u76d1\u63a7\u9879",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/monitor-metrics/be-metrics"},next:{title:"BE \u914d\u7f6e\u9879",permalink:"/zh-CN/docs/0.15/administrator-guide/config/be_config"}},p={},l=[{value:"\u67e5\u770b\u76d1\u63a7\u9879",id:"\u67e5\u770b\u76d1\u63a7\u9879",level:2},{value:"\u76d1\u63a7\u9879\u5217\u8868",id:"\u76d1\u63a7\u9879\u5217\u8868",level:2},{value:"<code>doris_fe_snmp{name=&quot;tcp_in_errs&quot;}</code>",id:"doris_fe_snmpnametcp_in_errs",level:3},{value:"<code>doris_fe_snmp{name=&quot;tcp_retrans_segs&quot;}</code>",id:"doris_fe_snmpnametcp_retrans_segs",level:3},{value:"<code>doris_fe_snmp{name=&quot;tcp_in_segs&quot;}</code>",id:"doris_fe_snmpnametcp_in_segs",level:3},{value:"<code>doris_fe_snmp{name=&quot;tcp_out_segs&quot;}</code>",id:"doris_fe_snmpnametcp_out_segs",level:3},{value:"<code>doris_fe_meminfo{name=&quot;memory_total&quot;}</code>",id:"doris_fe_meminfonamememory_total",level:3},{value:"<code>doris_fe_meminfo{name=&quot;memory_free&quot;}</code>",id:"doris_fe_meminfonamememory_free",level:3},{value:"<code>doris_fe_meminfo{name=&quot;memory_available&quot;}</code>",id:"doris_fe_meminfonamememory_available",level:3},{value:"<code>doris_fe_meminfo{name=&quot;buffers&quot;}</code>",id:"doris_fe_meminfonamebuffers",level:3},{value:"<code>doris_fe_meminfo{name=&quot;cached&quot;}</code>",id:"doris_fe_meminfonamecached",level:3},{value:"<code>jvm_thread{type=&quot;count&quot;}</code>",id:"jvm_threadtypecount",level:3},{value:"<code>jvm_thread{type=&quot;peak_count&quot;}</code>",id:"jvm_threadtypepeak_count",level:3},{value:"<code>jvm_thread{type=&quot;new_count&quot;}</code>",id:"jvm_threadtypenew_count",level:3},{value:"<code>jvm_thread{type=&quot;runnable_count&quot;}</code>",id:"jvm_threadtyperunnable_count",level:3},{value:"<code>jvm_thread{type=&quot;blocked_count&quot;}</code>",id:"jvm_threadtypeblocked_count",level:3},{value:"<code>jvm_thread{type=&quot;waiting_count&quot;}</code>",id:"jvm_threadtypewaiting_count",level:3},{value:"<code>jvm_thread{type=&quot;timed_waiting_count&quot;}</code>",id:"jvm_threadtypetimed_waiting_count",level:3},{value:"<code>jvm_thread{type=&quot;terminated_count&quot;}</code>",id:"jvm_threadtypeterminated_count",level:3}],d={toc:l},u="wrapper";function _(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fe-\u76d1\u63a7\u9879"},"FE \u76d1\u63a7\u9879"),(0,r.kt)("p",null,"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd FE \u7684\u76f8\u5173\u76d1\u63a7\u9879\u3002"),(0,r.kt)("h2",{id:"\u67e5\u770b\u76d1\u63a7\u9879"},"\u67e5\u770b\u76d1\u63a7\u9879"),(0,r.kt)("p",null,"FE \u7684\u76d1\u63a7\u9879\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbf\u95ee\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://fe_host:fe_http_port/metrics")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u663e\u793a\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u683c\u5f0f\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 Json \u683c\u5f0f\u7684\u76d1\u63a7\u9879\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://fe_host:fe_http_port/metrics?type=json")),(0,r.kt)("h2",{id:"\u76d1\u63a7\u9879\u5217\u8868"},"\u76d1\u63a7\u9879\u5217\u8868"),(0,r.kt)("h3",{id:"doris_fe_snmpnametcp_in_errs"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_snmp{name="tcp_in_errs"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/net/snmp")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tcp: InErrs")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5f53\u524d\u63a5\u6536\u5230\u7684\u9519\u8bef\u7684 TCP \u5305\u7684\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u7ed3\u5408\u91c7\u6837\u5468\u671f\u53ef\u4ee5\u8ba1\u7b97\u53d1\u751f\u7387\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"doris_fe_snmpnametcp_retrans_segs"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_snmp{name="tcp_retrans_segs"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/net/snmp")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tcp: RetransSegs")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5f53\u524d\u91cd\u4f20\u7684 TCP \u5305\u7684\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u7ed3\u5408\u91c7\u6837\u5468\u671f\u53ef\u4ee5\u8ba1\u7b97\u53d1\u751f\u7387\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"doris_fe_snmpnametcp_in_segs"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_snmp{name="tcp_in_segs"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/net/snmp")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tcp: InSegs")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5f53\u524d\u63a5\u6536\u5230\u7684\u6240\u6709 TCP \u5305\u7684\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"(NEW_tcp_in_errs - OLD_tcp_in_errs) / (NEW_tcp_in_segs - OLD_tcp_in_segs)")," \u53ef\u4ee5\u8ba1\u7b97\u63a5\u6536\u5230\u7684 TCP \u9519\u8bef\u5305\u7387\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"doris_fe_snmpnametcp_out_segs"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_snmp{name="tcp_out_segs"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/net/snmp")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tcp: OutSegs")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5f53\u524d\u53d1\u9001\u7684\u6240\u6709\u5e26 RST \u6807\u8bb0\u7684 TCP \u5305\u7684\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"(NEW_tcp_tcp_retrans_segs - OLD_tcp_retrans_segs) / (NEW_tcp_out_segs - OLD_tcp_out_segs)")," \u53ef\u4ee5\u8ba1\u7b97 TCP \u91cd\u4f20\u7387\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u7f51\u7edc\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"doris_fe_meminfonamememory_total"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_meminfo{name="memory_total"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/meminfo")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MemTotal")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u6240\u6709\u53ef\u7528\u7684\u5185\u5b58\u5927\u5c0f\uff0c\u603b\u7684\u7269\u7406\u5185\u5b58\u51cf\u53bb\u9884\u7559\u7a7a\u95f4\u548c\u5185\u6838\u5927\u5c0f\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u5185\u5b58\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"doris_fe_meminfonamememory_free"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_meminfo{name="memory_free"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/meminfo")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MemFree")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u7cfb\u7edf\u5c1a\u672a\u4f7f\u7528\u7684\u5185\u5b58\u3002\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u5185\u5b58\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"doris_fe_meminfonamememory_available"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_meminfo{name="memory_available"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/meminfo")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MemAvailable")," \u5b57\u6bb5\u503c\u3002\u771f\u6b63\u7684\u7cfb\u7edf\u53ef\u7528\u5185\u5b58\uff0c\u7cfb\u7edf\u4e2d\u6709\u4e9b\u5185\u5b58\u867d\u7136\u5df2\u88ab\u4f7f\u7528\u4f46\u662f\u53ef\u4ee5\u56de\u6536\u7684\uff0c\u6240\u4ee5\u8fd9\u90e8\u5206\u53ef\u56de\u6536\u7684\u5185\u5b58\u52a0\u4e0aMemFree\u624d\u662f\u7cfb\u7edf\u53ef\u7528\u7684\u5185\u5b58"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u5185\u5b58\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"doris_fe_meminfonamebuffers"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_meminfo{name="buffers"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/meminfo")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffers")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u7528\u6765\u7ed9\u5757\u8bbe\u5907\u505a\u7f13\u5b58\u7684\u5185\u5b58(\u6587\u4ef6\u7cfb\u7edf\u7684metadata\u3001pages)\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u5185\u5b58\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"doris_fe_meminfonamecached"},(0,r.kt)("inlineCode",{parentName:"h3"},'doris_fe_meminfo{name="cached"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/meminfo")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cached")," \u5b57\u6bb5\u503c\u3002\u8868\u793a\u5206\u914d\u7ed9\u6587\u4ef6\u7f13\u51b2\u533a\u7684\u5185\u5b58\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5\u5185\u5b58\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"jvm_threadtypecount"},(0,r.kt)("inlineCode",{parentName:"h3"},'jvm_thread{type="count"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u8868\u793aFE\u8282\u70b9\u5f53\u524dJVM\u603b\u7684\u7ebf\u7a0b\u6570\u91cf\uff0c\u5305\u542bdaemon\u7ebf\u7a0b\u548c\u975edaemon\u7ebf\u7a0b\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5FE\u8282\u70b9\u7684JVM\u7ebf\u7a0b\u8fd0\u884c\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"jvm_threadtypepeak_count"},(0,r.kt)("inlineCode",{parentName:"h3"},'jvm_thread{type="peak_count"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u8868\u793aFE\u8282\u70b9\u4eceJVM\u542f\u52a8\u4ee5\u6765\u7684\u6700\u5927\u5cf0\u503c\u7ebf\u7a0b\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5FE\u8282\u70b9\u7684JVM\u7ebf\u7a0b\u8fd0\u884c\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"jvm_threadtypenew_count"},(0,r.kt)("inlineCode",{parentName:"h3"},'jvm_thread{type="new_count"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u8868\u793aFE\u8282\u70b9JVM\u4e2d\u5904\u4e8eNEW\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5FE\u8282\u70b9\u7684JVM\u7ebf\u7a0b\u8fd0\u884c\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"jvm_threadtyperunnable_count"},(0,r.kt)("inlineCode",{parentName:"h3"},'jvm_thread{type="runnable_count"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u8868\u793aFE\u8282\u70b9JVM\u4e2d\u5904\u4e8eRUNNABLE\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5FE\u8282\u70b9\u7684JVM\u7ebf\u7a0b\u8fd0\u884c\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"jvm_threadtypeblocked_count"},(0,r.kt)("inlineCode",{parentName:"h3"},'jvm_thread{type="blocked_count"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u8868\u793aFE\u8282\u70b9JVM\u4e2d\u5904\u4e8eBLOCKED\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5FE\u8282\u70b9\u7684JVM\u7ebf\u7a0b\u8fd0\u884c\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"jvm_threadtypewaiting_count"},(0,r.kt)("inlineCode",{parentName:"h3"},'jvm_thread{type="waiting_count"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u8868\u793aFE\u8282\u70b9JVM\u4e2d\u5904\u4e8eWAITING\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5FE\u8282\u70b9\u7684JVM\u7ebf\u7a0b\u8fd0\u884c\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"jvm_threadtypetimed_waiting_count"},(0,r.kt)("inlineCode",{parentName:"h3"},'jvm_thread{type="timed_waiting_count"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u8868\u793aFE\u8282\u70b9JVM\u4e2d\u5904\u4e8eTIMED_WAITING\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5FE\u8282\u70b9\u7684JVM\u7ebf\u7a0b\u8fd0\u884c\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"jvm_threadtypeterminated_count"},(0,r.kt)("inlineCode",{parentName:"h3"},'jvm_thread{type="terminated_count"}')),(0,r.kt)("p",null,"\u8be5\u76d1\u63a7\u9879\u8868\u793aFE\u8282\u70b9JVM\u4e2d\u5904\u4e8eTERMINATED\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\u91cf\u3002"),(0,r.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6392\u67e5FE\u8282\u70b9\u7684JVM\u7ebf\u7a0b\u8fd0\u884c\u95ee\u9898\u3002"))}_.isMDXComponent=!0}}]);