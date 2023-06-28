"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[8609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||l;return n?a.createElement(d,o(o({ref:t},i),{},{components:n})):a.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"AGG_STATE",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Types/AGG_STATE",id:"sql-manual/sql-reference/Data-Types/AGG_STATE",title:"AGG_STATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Types/AGG_STATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/AGG_STATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/AGG_STATE",draft:!1,tags:[],version:"current",frontMatter:{title:"AGG_STATE",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/JSON"},next:{title:"CREATE-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG"}},c={},u=[{value:"AGG_STATE",id:"agg_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"agg_state"},"AGG_STATE"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AGG_STATE\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u9700\u8981\u540c\u65f6\u58f0\u660e\u805a\u5408\u51fd\u6570\u7684\u7b7e\u540d\u3002\n\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u5b9e\u9645\u5b58\u50a8\u7684\u6570\u636e\u5927\u5c0f\u4e0e\u51fd\u6570\u5b9e\u73b0\u6709\u5173\u3002\n")),(0,r.kt)("p",null,"  AGG_STATE\u53ea\u80fd\u914d\u5408",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/state"},"state"),"\n/",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/merge"},"merge"),"/",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/union"},"union"),"\u51fd\u6570\u7ec4\u5408\u5668\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"  \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u805a\u5408\u51fd\u6570\u7684\u7b7e\u540d\u4e5f\u662f\u7c7b\u578b\u7684\u4e00\u90e8\u5206\uff0c\u4e0d\u540c\u7b7e\u540d\u7684agg_state\u65e0\u6cd5\u6df7\u5408\u4f7f\u7528\u3002\u6bd4\u5982\u5982\u679c\u5efa\u8868\u58f0\u660e\u7684\u7b7e\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"max_by(int,int)"),",\u90a3\u5c31\u65e0\u6cd5\u63d2\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"max_by(bigint,int)"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"group_concat(varchar)"),"\u3002\n\u6b64\u5904nullable\u5c5e\u6027\u4e5f\u662f\u7b7e\u540d\u7684\u4e00\u90e8\u5206\uff0c\u5982\u679c\u80fd\u786e\u5b9a\u4e0d\u4f1a\u8f93\u5165null\u503c\uff0c\u53ef\u4ee5\u5c06\u53c2\u6570\u58f0\u660e\u4e3anot null\uff0c\u8fd9\u6837\u53ef\u4ee5\u83b7\u5f97\u66f4\u5c0f\u7684\u5b58\u50a8\u5927\u5c0f\u548c\u51cf\u5c11\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u5f00\u9500\u3002"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'create table a_table(\n    k1 int null,\n    k2 agg_state max_by(int not null,int),\n    k3 agg_state group_concat(string)\n)\naggregate key (k1)\ndistributed BY hash(k1) buckets 3\nproperties("replication_num" = "1");\n')),(0,r.kt)("p",null,"  \u8fd9\u91cc\u7684k2\u548ck3\u5206\u522b\u4ee5max_by\u548cgroup_concat\u4e3a\u805a\u5408\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into a_table values(1,max_by_state(3,1),group_concat_state('a'));\ninsert into a_table values(1,max_by_state(2,2),group_concat_state('bb'));\ninsert into a_table values(2,max_by_state(1,3),group_concat_state('ccc'));\n")),(0,r.kt)("p",null,"  \u5bf9\u4e8eagg_state\u5217\uff0c\u63d2\u5165\u8bed\u53e5\u5fc5\u987b\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/state"},"state"),"\u51fd\u6570\u6765\u751f\u6210\u5bf9\u5e94\u7684agg_state\u6570\u636e\uff0c\u8fd9\u91cc\u7684\u51fd\u6570\u548c\u5165\u53c2\u7c7b\u578b\u90fd\u5fc5\u987b\u8ddfagg_state\u5b8c\u5168\u5bf9\u5e94\u3002"),(0,r.kt)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql [test]>select k1,max_by_merge(k2),group_concat_merge(k3) from a_table group by k1 order by k1;\n+------+--------------------+--------------------------+\n| k1   | max_by_merge(`k2`) | group_concat_merge(`k3`) |\n+------+--------------------+--------------------------+\n|    1 |                  2 | bb,a                     |\n|    2 |                  1 | ccc                      |\n+------+--------------------+--------------------------+\n")),(0,r.kt)("p",null,"  \u5982\u679c\u9700\u8981\u83b7\u53d6\u5b9e\u9645\u7ed3\u679c\uff0c\u5219\u8981\u7528\u5bf9\u5e94\u7684",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/merge"},"merge"),"\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql [test]>select max_by_merge(u2),group_concat_merge(u3) from (\n  select k1,max_by_union(k2) as u2,group_concat_union(k3) u3 from a_table group by k1 order by k1\n  ) t;\n+--------------------+--------------------------+\n| max_by_merge(`u2`) | group_concat_merge(`u3`) |\n+--------------------+--------------------------+\n|                  1 | ccc,bb,a                 |\n+--------------------+--------------------------+\n")),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5728\u8fc7\u7a0b\u4e2d\u53ea\u805a\u5408agg_state\u800c\u4e0d\u83b7\u53d6\u5b9e\u9645\u7ed3\u679c\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/union"},"union"),"\u51fd\u6570\u3002"),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AGG_STATE\n")))}m.isMDXComponent=!0}}]);