"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>A});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,A=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(A,a(a({ref:t},p),{},{components:n})):r.createElement(A,a({ref:t},p))}));function A(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={title:"LINK DATABASE",language:"zh-CN"},a=void 0,i={unversionedId:"sql-reference/sql-statements/Administration/LINK-DATABASE",id:"version-0.15/sql-reference/sql-statements/Administration/LINK-DATABASE",title:"LINK DATABASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Administration/LINK-DATABASE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/LINK-DATABASE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/LINK-DATABASE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"LINK DATABASE",language:"zh-CN"},sidebar:"docs",previous:{title:"INSTALL PLUGIN",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/INSTALL-PLUGIN"},next:{title:"MIGRATE DATABASE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/MIGRATE-DATABASE"}},l={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"link-database"},"LINK DATABASE"),(0,s.kt)("h2",{id:"description"},"description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\uff08\u5df2\u5e9f\u5f03\uff01\uff01\uff01\uff09\n\u8be5\u8bed\u53e5\u7528\u6237\u94fe\u63a5\u4e00\u4e2a\u903b\u8f91\u96c6\u7fa4\u7684\u6570\u636e\u5e93\u5230\u53e6\u5916\u4e00\u4e2a\u903b\u8f91\u96c6\u7fa4, \u4e00\u4e2a\u6570\u636e\u5e93\u53ea\u5141\u8bb8\u540c\u65f6\u88ab\u94fe\u63a5\u4e00\u6b21\uff0c\u5220\u9664\u94fe\u63a5\u7684\u6570\u636e\u5e93\n\n\u5e76\u4e0d\u4f1a\u5220\u9664\u6570\u636e\uff0c\u5e76\u4e14\u88ab\u94fe\u63a5\u7684\u6570\u636e\u5e93\u4e0d\u80fd\u88ab\u5220\u9664, \u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\n\n\u8bed\u6cd5\n\nLINK DATABASE src_cluster_name.src_db_name des_cluster_name.des_db_name \n")),(0,s.kt)("h2",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. \u94fe\u63a5test_clusterA\u4e2d\u7684test_db\u5230test_clusterB,\u5e76\u547d\u540d\u4e3alink_test_db\n\n   LINK DATABASE test_clusterA.test_db test_clusterB.link_test_db;\n\n2. \u5220\u9664\u94fe\u63a5\u7684\u6570\u636e\u5e93link_test_db\n\n   DROP DATABASE link_test_db;\n")),(0,s.kt)("h2",{id:"keyword"},"keyword"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"LINK,DATABASE\n")))}u.isMDXComponent=!0}}]);