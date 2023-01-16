"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[40117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Query Detail Action",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/http-actions/fe/query-detail-action",id:"version-dev/admin-manual/http-actions/fe/query-detail-action",title:"Query Detail Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/http-actions/fe/query-detail-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-detail-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/query-detail-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/http-actions/fe/query-detail-action.md",tags:[],version:"dev",frontMatter:{title:"Query Detail Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Profile Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/profile-action"},next:{title:"Query Schema Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/query-schema-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-detail-action"},"Query Detail Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/query_detail")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u65f6\u95f4\u70b9\u4e4b\u540e\u7684\u6240\u6709\u67e5\u8be2\u7684\u4fe1\u606f"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"event_time")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u65f6\u95f4\u70b9\uff08Unix \u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u6beb\u79d2\uff09\uff0c\u83b7\u53d6\u8be5\u65f6\u95f4\u70b9\u4e4b\u540e\u7684\u67e5\u8be2\u4fe1\u606f\u3002\n"))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "query_details": [{\n            "eventTime": 1596462699216,\n            "queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n            "startTime": 1596462698969,\n            "endTime": 1596462699216,\n            "latency": 247,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select * from tbl1"\n        }, {\n            "eventTime": 1596463013929,\n            "queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n            "startTime": 1596463013913,\n            "endTime": 1596463013929,\n            "latency": 16,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select k1 from tbl1"\n        }]\n    },\n    "count": 0\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a\u65f6\u95f4\u70b9\u4e4b\u540e\u7684\u67e5\u8be2\u8be6\u60c5\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/query_detail?event_time=1596462079958\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "query_details": [{\n            "eventTime": 1596462699216,\n            "queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n            "startTime": 1596462698969,\n            "endTime": 1596462699216,\n            "latency": 247,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select * from tbl1"\n        }, {\n            "eventTime": 1596463013929,\n            "queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n            "startTime": 1596463013913,\n            "endTime": 1596463013929,\n            "latency": 16,\n            "state": "FINISHED",\n            "database": "db1",\n            "sql": "select k1 from tbl1"\n        }]\n    },\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);