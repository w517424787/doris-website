"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[47691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Session Action",language:"en"},a=void 0,s={unversionedId:"administrator-guide/http-actions/fe/session-action",id:"version-0.15/administrator-guide/http-actions/fe/session-action",title:"Session Action",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/http-actions/fe/session-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/session-action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/session-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Session Action",language:"en"},sidebar:"docs",previous:{title:"Row Count Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/row-count-action"},next:{title:"Set Config Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/set-config-action"}},c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"session-action"},"Session Action"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /rest/v1/session\n")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Session Action is used to obtain the current session information."),(0,o.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"request-body"},"Request body"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n        "rows": [{\n            "User": "root",\n            "Command": "Sleep",\n            "State": "",\n            "Cluster": "default_cluster",\n            "Host": "10.81.85.89:31465",\n            "Time": "230",\n            "Id": "0",\n            "Info": "",\n            "Db": "db1"\n        }]\n    },\n    "count": 2\n}\n')),(0,o.kt)("p",null,"The returned result is the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"System Action"),". Is a description of the table."))}d.isMDXComponent=!0}}]);