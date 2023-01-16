"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[6143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Row Count Action",language:"en"},i=void 0,l={unversionedId:"administrator-guide/http-actions/fe/row-count-action",id:"version-0.15/administrator-guide/http-actions/fe/row-count-action",title:"Row Count Action",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/http-actions/fe/row-count-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/row-count-action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/row-count-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Row Count Action",language:"en"},sidebar:"docs",previous:{title:"Query Profile Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/query-profile-action"},next:{title:"Session Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/session-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"row-count-action"},"Row Count Action"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/rowcount")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Used to manually update the row count statistics of the specified table. While updating the statistics of the number of rows, the table and the number of rows corresponding to the rollup will also be returned in JSON format"),(0,o.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"db")),(0,o.kt)("p",{parentName:"li"},"  Specify database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"table")),(0,o.kt)("p",{parentName:"li"},"  Specify table"))),(0,o.kt)("h2",{id:"request-body"},"Request body"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl1": 10000\n    },\n    "count": 0\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update and get the number of rows in the specified Table"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'GET /api/rowcount?db=example_db&table=tbl1\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl1": 10000\n    },\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);