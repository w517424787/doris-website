"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[78147],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(a),c=r,b=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Meta Info Action",language:"en"},i=void 0,s={unversionedId:"admin-manual/http-actions/fe/meta-info-action",id:"admin-manual/http-actions/fe/meta-info-action",title:"Meta Info Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe/meta-info-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/meta-info-action",permalink:"/docs/admin-manual/http-actions/fe/meta-info-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Meta Info Action",language:"en"},sidebar:"docs",previous:{title:"Meta Action",permalink:"/docs/admin-manual/http-actions/fe/meta-action"},next:{title:"Meta Replay State Action",permalink:"/docs/admin-manual/http-actions/fe/meta-replay-state-action"}},p={},o=[{value:"List Database",id:"list-database",level:2},{value:"Request",id:"request",level:3},{value:"Description",id:"description",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"List Table",id:"list-table",level:2},{value:"Request",id:"request-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Schema Info",id:"schema-info",level:2},{value:"Request",id:"request-2",level:3},{value:"Description",id:"description-2",level:3},{value:"Path parameters",id:"path-parameters-2",level:3},{value:"Query parameters",id:"query-parameters-2",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3}],u={toc:o},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meta-action"},"Meta Action"),(0,r.kt)("p",null,"Meta Info Action is used to obtain metadata information in the cluster. Such as database list, table structure, etc."),(0,r.kt)("h2",{id:"list-database"},"List Database"),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases\n")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Get a list of all database names, arranged in alphabetical order."),(0,r.kt)("h3",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"limit")),(0,r.kt)("p",{parentName:"li"},"  Limit the number of result rows returned\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"offset")),(0,r.kt)("p",{parentName:"li"},"  Pagination information, need to be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),"\n"))),(0,r.kt)("h3",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": [\n       "db1", "db2", "db3", ...  \n    ],\n    "count": 3\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data field returns a list of database names.")),(0,r.kt)("h2",{id:"list-table"},"List Table"),(0,r.kt)("h3",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables\n")),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Get a list of tables in the specified database, arranged in alphabetical order."),(0,r.kt)("h3",{id:"path-parameters-1"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.kt)("p",{parentName:"li"},"  Specify database"))),(0,r.kt)("h3",{id:"query-parameters-1"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"limit")),(0,r.kt)("p",{parentName:"li"},"  Limit the number of result rows returned\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"offset")),(0,r.kt)("p",{parentName:"li"},"  Pagination information, need to be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")))),(0,r.kt)("h3",{id:"request-body-1"},"Request body"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": [\n       "tbl1", "tbl2", "tbl3", ...  \n    ],\n    "count": 0\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data field returns a list of table names.")),(0,r.kt)("h2",{id:"schema-info"},"Schema Info"),(0,r.kt)("h3",{id:"request-2"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables/<tbl_name>/schema\n")),(0,r.kt)("h3",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Get the table structure information of the specified table in the specified database."),(0,r.kt)("h3",{id:"path-parameters-2"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.kt)("p",{parentName:"li"},"  Specify the database name\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<tbl_name>")),(0,r.kt)("p",{parentName:"li"},"  Specify table name"))),(0,r.kt)("h3",{id:"query-parameters-2"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"with_mv")),(0,r.kt)("p",{parentName:"li"},"  Optional. If not specified, the table structure of the base table is returned by default. If specified, all rollup index will also be returned."))),(0,r.kt)("h3",{id:"request-body-2"},"Request body"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"response-2"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl1": {\n            "schema": [{\n                    "Field": "k1",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                },\n                {\n                    "Field": "k2",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                }\n            ],\n            "is_base": true\n        }\n    },\n    "count": 0\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema?with_mv?=1\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl1": {\n            "schema": [{\n                    "Field": "k1",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                },\n                {\n                    "Field": "k2",\n                    "Type": "INT",\n                    "Null": "Yes",\n                    "Extra": "",\n                    "Default": null,\n                    "Key": "true"\n                }\n            ],\n            "is_base": true\n        },\n        "rollup1": {\n            "schema": [{\n                "Field": "k1",\n                "Type": "INT",\n                "Null": "Yes",\n                "Extra": "",\n                "Default": null,\n                "Key": "true"\n            }],\n            "is_base": false\n        }\n    },\n    "count": 0\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data field returns the table structure information of the base table or rollup table.")))}m.isMDXComponent=!0}}]);