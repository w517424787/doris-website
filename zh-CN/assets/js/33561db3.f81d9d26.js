"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[88548],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(n),b=a,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||l;return n?r.createElement(d,o(o({ref:e},p),{},{components:n})):r.createElement(d,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},55429:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"GET TABLETS ON A PARTICULAR BE",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/http-actions/get-tablets",id:"admin-manual/http-actions/get-tablets",title:"GET TABLETS ON A PARTICULAR BE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/get-tablets.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/get-tablets",permalink:"/zh-CN/docs/admin-manual/http-actions/get-tablets",draft:!1,tags:[],version:"current",frontMatter:{title:"GET TABLETS ON A PARTICULAR BE",language:"zh-CN"},sidebar:"docs",previous:{title:"GET LABEL STATE",permalink:"/zh-CN/docs/admin-manual/http-actions/get-load-state"},next:{title:"PROFILE",permalink:"/zh-CN/docs/admin-manual/http-actions/profile-action"}},c={},s=[],p={toc:s},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-tablets-on-a-particular-be"},"GET TABLETS ON A PARTICULAR BE"),(0,a.kt)("p",null,"\u83b7\u53d6\u7279\u5b9aBE\u8282\u70b9\u4e0a\u6307\u5b9a\u6570\u91cf\u7684tablet\u7684tablet id\u548cschema hash\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/tablets_page?limit=XXXXX\n")),(0,a.kt)("p",null,'\u8fd4\u56de\u503c\u5c31\u662f\u6307\u5b9aBE\u8282\u70b9\u4e0a\u7279\u5b9a\u6570\u91cftablet\u7684tablet id\u548cschema hash\uff0c\u4ee5\u6e32\u67d3\u7684Web\u9875\u9762\u5f62\u5f0f\u8fd4\u56de\u3002\u8fd4\u56de\u7684tablet\u6570\u91cf\u7531\u53c2\u6570limit\u786e\u5b9a\uff0c\u82e5limit\u4e0d\u5b58\u5728\uff0c\u5219\u4e0d\u8fd4\u56detablet\uff1b\u82e5limit\u7684\u503c\u4e3a"all"\uff0c\u5219\u8fd4\u56de\u6307\u5b9aBE\u8282\u70b9\u4e0a\u6240\u6709\u7684tablet\uff1b\u82e5limit\u7684\u503c\u4e3a\u9664\u201call\u201d\u4e4b\u5916\u7684\u5176\u4ed6\u975e\u6570\u503c\u7c7b\u578b\uff0c\u5219\u4e0d\u8fd4\u56detablet\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/tablets_json?limit=XXXXX\n")),(0,a.kt)("p",null,'\u8fd4\u56de\u503c\u5c31\u662f\u6307\u5b9aBE\u8282\u70b9\u4e0a\u7279\u5b9a\u6570\u91cftablet\u7684tablet id\u548cschema hash\uff0c\u4ee5Json\u5bf9\u8c61\u5f62\u5f0f\u8fd4\u56de\u3002\u8fd4\u56de\u7684tablet\u6570\u91cf\u7531\u53c2\u6570limit\u786e\u5b9a\uff0c\u82e5limit\u4e0d\u5b58\u5728\uff0c\u5219\u4e0d\u8fd4\u56detablet\uff1b\u82e5limit\u7684\u503c\u4e3a"all"\uff0c\u5219\u8fd4\u56de\u6307\u5b9aBE\u8282\u70b9\u4e0a\u6240\u6709\u7684tablet\uff1b\u82e5limit\u7684\u503c\u4e3a\u9664\u201call\u201d\u4e4b\u5916\u7684\u5176\u4ed6\u975e\u6570\u503c\u7c7b\u578b\uff0c\u5219\u4e0d\u8fd4\u56detablet\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "10.38.157.107",\n        tablets: [\n            {\n                tablet_id: 11119,\n                schema_hash: 714349777\n            },\n\n                ...\n\n            {\n                tablet_id: 11063,\n                schema_hash: 714349777\n            }\n        ]\n    },\n    count: 30\n}\n')))}m.isMDXComponent=!0}}]);