"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Config Action",language:"zh-CN"},i=void 0,c={unversionedId:"administrator-guide/http-actions/fe/config-action",id:"version-0.15/administrator-guide/http-actions/fe/config-action",title:"Config Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/http-actions/fe/config-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/config-action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/config-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Config Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Check Storage Type Action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/check-storage-type-action"},next:{title:"Connection Action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe/connection-action"}},s={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"config-action"},"Config Action"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /rest/v1/config/fe/\n")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Config Action \u7528\u4e8e\u83b7\u53d6\u5f53\u524d FE \u7684\u914d\u7f6e\u4fe1\u606f"),(0,o.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"request-body"},"Request body"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["Name", "Value"],\n        "rows": [{\n            "Value": "DAY",\n            "Name": "sys_log_roll_interval"\n        }, {\n            "Value": "23",\n            "Name": "consistency_check_start_time"\n        }, {\n            "Value": "4096",\n            "Name": "max_mysql_service_task_threads_num"\n        }, {\n            "Value": "1000",\n            "Name": "max_unfinished_load_job"\n        }, {\n            "Value": "100",\n            "Name": "max_routine_load_job_num"\n        }, {\n            "Value": "SYNC",\n            "Name": "master_sync_policy"\n        }]\n    },\n    "count": 0\n}\n')),(0,o.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u540c ",(0,o.kt)("inlineCode",{parentName:"p"},"System Action"),"\u3002\u662f\u4e00\u4e2a\u8868\u683c\u7684\u63cf\u8ff0\u3002"))}d.isMDXComponent=!0}}]);