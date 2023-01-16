"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[53455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,p=d["".concat(s,".").concat(m)]||d[m]||f[m]||a;return n?r.createElement(p,o(o({ref:t},u),{},{components:n})):r.createElement(p,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"timediff",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/timediff",id:"version-dev/sql-manual/sql-functions/date-time-functions/timediff",title:"timediff",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/date-time-functions/timediff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/timediff",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/timediff",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/date-time-functions/timediff.md",tags:[],version:"dev",frontMatter:{title:"timediff",language:"zh-CN"},sidebar:"docs",previous:{title:"time_round",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/time_round"},next:{title:"timestampadd",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/timestampadd"}},s={},c=[{value:"timediff",id:"timediff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"timediff"},"timediff"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TIME TIMEDIFF(DATETIME expr1, DATETIME expr2)")),(0,i.kt)("p",null,"TIMEDIFF\u8fd4\u56de\u4e24\u4e2aDATETIME\u4e4b\u95f4\u7684\u5dee\u503c"),(0,i.kt)("p",null,"TIMEDIFF\u51fd\u6570\u8fd4\u56de\u8868\u793a\u4e3a\u65f6\u95f4\u503c\u7684expr1 - expr2\u7684\u7ed3\u679c\uff0c\u8fd4\u56de\u503c\u4e3aTIME\u7c7b\u578b"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT TIMEDIFF(now(),utc_timestamp());\n+----------------------------------+\n| timediff(now(), utc_timestamp()) |\n+----------------------------------+\n| 08:00:00                         |\n+----------------------------------+\n\nmysql> SELECT TIMEDIFF('2019-07-11 16:59:30','2019-07-11 16:59:21');\n+--------------------------------------------------------+\n| timediff('2019-07-11 16:59:30', '2019-07-11 16:59:21') |\n+--------------------------------------------------------+\n| 00:00:09                                               |\n+--------------------------------------------------------+\n\nmysql> SELECT TIMEDIFF('2019-01-01 00:00:00', NULL);\n+---------------------------------------+\n| timediff('2019-01-01 00:00:00', NULL) |\n+---------------------------------------+\n| NULL                                  |\n+---------------------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TIMEDIFF\n")))}f.isMDXComponent=!0}}]);