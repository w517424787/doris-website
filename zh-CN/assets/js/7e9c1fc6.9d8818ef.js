"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[53043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"timestampadd",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/timestampadd",id:"version-dev/sql-manual/sql-functions/date-time-functions/timestampadd",title:"timestampadd",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/date-time-functions/timestampadd.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/timestampadd",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/timestampadd",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/date-time-functions/timestampadd.md",tags:[],version:"dev",frontMatter:{title:"timestampadd",language:"zh-CN"},sidebar:"docs",previous:{title:"timediff",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/timediff"},next:{title:"timestampdiff",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/timestampdiff"}},s={},d=[{value:"timestampadd",id:"timestampadd",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"timestampadd"},"timestampadd"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DATETIME TIMESTAMPADD(unit, interval, DATETIME datetime_expr)")),(0,a.kt)("p",null,"\u5c06\u6574\u6570\u8868\u8fbe\u5f0f\u95f4\u9694\u6dfb\u52a0\u5230\u65e5\u671f\u6216\u65e5\u671f\u65f6\u95f4\u8868\u8fbe\u5f0fdatetime_expr\u4e2d\u3002"),(0,a.kt)("p",null,"interval\u7684\u5355\u4f4d\u7531unit\u53c2\u6570\u7ed9\u51fa\uff0c\u5b83\u5e94\u8be5\u662f\u4e0b\u5217\u503c\u4e4b\u4e00: "),(0,a.kt)("p",null,"SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, or YEAR\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nmysql> SELECT TIMESTAMPADD(MINUTE,1,'2019-01-02');\n+------------------------------------------------+\n| timestampadd(MINUTE, 1, '2019-01-02 00:00:00') |\n+------------------------------------------------+\n| 2019-01-02 00:01:00                            |\n+------------------------------------------------+\n\nmysql> SELECT TIMESTAMPADD(WEEK,1,'2019-01-02');\n+----------------------------------------------+\n| timestampadd(WEEK, 1, '2019-01-02 00:00:00') |\n+----------------------------------------------+\n| 2019-01-09 00:00:00                          |\n+----------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TIMESTAMPADD\n")))}p.isMDXComponent=!0}}]);