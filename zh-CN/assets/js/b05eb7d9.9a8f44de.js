"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"SHOW FRONTENDS",language:"zh-CN"},a=void 0,s={unversionedId:"sql-reference/sql-statements/Administration/SHOW-FRONTENDS",id:"version-0.15/sql-reference/sql-statements/Administration/SHOW-FRONTENDS",title:"SHOW FRONTENDS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Administration/SHOW-FRONTENDS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW-FRONTENDS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/SHOW-FRONTENDS",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW FRONTENDS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW FILE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/SHOW-FILE"},next:{title:"SHOW FULL COLUMNS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/SHOW-FULL-COLUMNS"}},l={},c=[{value:"description",id:"description",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"show-frontends"},"SHOW FRONTENDS"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b FE \u8282\u70b9\n\u8bed\u6cd5\uff1a\n    SHOW FRONTENDS;\n\n\u8bf4\u660e\uff1a\n    1. name \u8868\u793a\u8be5 FE \u8282\u70b9\u5728 bdbje \u4e2d\u7684\u540d\u79f0\u3002\n    2. Join \u4e3a true \u8868\u793a\u8be5\u8282\u70b9\u66fe\u7ecf\u52a0\u5165\u8fc7\u96c6\u7fa4\u3002\u4f46\u4e0d\u4ee3\u8868\u5f53\u524d\u8fd8\u5728\u96c6\u7fa4\u5185\uff08\u53ef\u80fd\u5df2\u5931\u8054\uff09\n    3. Alive \u8868\u793a\u8282\u70b9\u662f\u5426\u5b58\u6d3b\u3002\n    4. ReplayedJournalId \u8868\u793a\u8be5\u8282\u70b9\u5f53\u524d\u5df2\u7ecf\u56de\u653e\u7684\u6700\u5927\u5143\u6570\u636e\u65e5\u5fd7id\u3002\n    5. LastHeartbeat \u662f\u6700\u8fd1\u4e00\u6b21\u5fc3\u8df3\u3002\n    6. IsHelper \u8868\u793a\u8be5\u8282\u70b9\u662f\u5426\u662f bdbje \u4e2d\u7684 helper \u8282\u70b9\u3002\n    7. ErrMsg \u7528\u4e8e\u663e\u793a\u5fc3\u8df3\u5931\u8d25\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u3002\n    \n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SHOW, FRONTENDS\n")))}u.isMDXComponent=!0}}]);