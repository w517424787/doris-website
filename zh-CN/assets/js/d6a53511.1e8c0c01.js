"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[19059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"UNINSTALL PLUGIN",language:"zh-CN"},a=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/UNINSTALL-PLUGIN",id:"version-0.15/sql-reference/sql-statements/Administration/UNINSTALL-PLUGIN",title:"UNINSTALL PLUGIN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Administration/UNINSTALL-PLUGIN.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/UNINSTALL-PLUGIN",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/UNINSTALL-PLUGIN",draft:!1,tags:[],version:"0.15",frontMatter:{title:"UNINSTALL PLUGIN",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW TRASH",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Administration/SHOW-TRASH"},next:{title:"ALTER DATABASE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/ALTER-DATABASE"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uninstall-plugin"},"UNINSTALL PLUGIN"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u5378\u8f7d\u4e00\u4e2a\u63d2\u4ef6\u3002\n\n\u8bed\u6cd5\n\n    UNINSTALL PLUGIN plugin_name;\n    \n    plugin_name \u53ef\u4ee5\u901a\u8fc7 `SHOW PLUGINS;` \u547d\u4ee4\u67e5\u770b\u3002\n    \n    \u53ea\u80fd\u5378\u8f7d\u975e builtin \u7684\u63d2\u4ef6\u3002\n")),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. \u5378\u8f7d\u4e00\u4e2a\u63d2\u4ef6\uff1a\n\n    UNINSTALL PLUGIN auditdemo;\n    \n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"UNINSTALL,PLUGIN\n")))}d.isMDXComponent=!0}}]);