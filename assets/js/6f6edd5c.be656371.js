"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[19458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Bootstrap Action",language:"en"},i=void 0,p={unversionedId:"admin-manual/http-actions/fe/bootstrap-action",id:"admin-manual/http-actions/fe/bootstrap-action",title:"Bootstrap Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe/bootstrap-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/bootstrap-action",permalink:"/docs/admin-manual/http-actions/fe/bootstrap-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Bootstrap Action",language:"en"},sidebar:"docs",previous:{title:"Backends Action",permalink:"/docs/admin-manual/http-actions/fe/backends-action"},next:{title:"Cancel Load Action",permalink:"/docs/admin-manual/http-actions/fe/cancel-load-action"}},l={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bootstrap-action"},"Bootstrap Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/bootstrap")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"It is used to judge whether the FE has started. When no parameters are provided, only whether the startup is successful is returned. If ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id")," are provided, more detailed information is returned."),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"none"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,r.kt)("p",{parentName:"li"},"  The cluster id. It can be viewed in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"palo-meta/image/VERSION"),".\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"token")),(0,r.kt)("p",{parentName:"li"},"  Cluster token. It can be viewed in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"palo-meta/image/VERSION"),"."))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"none"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No parameters provided"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')),(0,r.kt)("p",{parentName:"li"},"  A code of 0 means that the FE node has started successfully. Error codes other than 0 indicate other errors.\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryPort")," is the MySQL protocol port of the FE node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpcPort")," is the thrift RPC port of the FE node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxReplayedJournal")," represents the maximum metadata journal id currently played back by the FE node.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"No parameters"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/bootstrap\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_id")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);