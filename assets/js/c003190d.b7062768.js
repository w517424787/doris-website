"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW PARTITION",language:"en"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITION-ID",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITION-ID",title:"SHOW PARTITION",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITION-ID.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITION-ID",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITION-ID",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW PARTITION",language:"en"}},s={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-partition-id"},"SHOW PARTITION ID"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to display database name, table name, partition name according to partition id (for administrators only)\nGrammar:\nSHOW PARTITION ","[partition_id]"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Display database name, table name, partition name according to partition id\nSHOW PARTITION 10002;")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"SHOW,PARTITION"))}d.isMDXComponent=!0}}]);