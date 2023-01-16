"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>E});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=l,E=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(E,i(i({ref:t},c),{},{components:n})):a.createElement(E,i({ref:t},c))}));function E(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={title:"ALTER-TABLE-REPLACE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE",title:"ALTER-TABLE-REPLACE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-REPLACE.md",tags:[],version:"dev",frontMatter:{title:"ALTER-TABLE-REPLACE",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"},next:{title:"ALTER-TABLE-PROPERTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY"}},p={},s=[{value:"ALTER-TABLE-REPLACE",id:"alter-table-replace",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"\u539f\u7406",id:"\u539f\u7406",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"alter-table-replace"},"ALTER-TABLE-REPLACE"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"ALTER TABLE REPLACE"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u5bf9\u4e24\u4e2a\u8868\u8fdb\u884c\u539f\u5b50\u7684\u66ff\u6362\u64cd\u4f5c\u3002 \u8be5\u64cd\u4f5c\u4ec5\u9002\u7528\u4e8e OLAP \u8868\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]tbl1 REPLACE WITH TABLE tbl2\n[PROPERTIES('swap' = 'true')];\n")),(0,l.kt)("p",null,"\u5c06\u8868 tbl1 \u66ff\u6362\u4e3a\u8868 tbl2\u3002"),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"swap")," \u53c2\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219\u66ff\u6362\u540e\uff0c\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl1")," \u8868\u4e2d\u7684\u6570\u636e\u4e3a\u539f ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl2")," \u8868\u4e2d\u7684\u6570\u636e\u3002\u800c\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl2")," \u8868\u4e2d\u7684\u6570\u636e\u4e3a\u539f ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl1")," \u8868\u4e2d\u7684\u6570\u636e\u3002\u5373\u4e24\u5f20\u8868\u6570\u636e\u53d1\u751f\u4e86\u4e92\u6362\u3002"),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"swap")," \u53c2\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5219\u66ff\u6362\u540e\uff0c\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl1")," \u8868\u4e2d\u7684\u6570\u636e\u4e3a\u539f ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl2")," \u8868\u4e2d\u7684\u6570\u636e\u3002\u800c\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tbl2")," \u8868\u88ab\u5220\u9664\u3002"),(0,l.kt)("h4",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"\u66ff\u6362\u8868\u529f\u80fd\uff0c\u5b9e\u9645\u4e0a\u662f\u5c06\u4ee5\u4e0b\u64cd\u4f5c\u96c6\u5408\u53d8\u6210\u4e00\u4e2a\u539f\u5b50\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u8981\u5c06\u8868 A \u66ff\u6362\u4e3a\u8868 B\uff0c\u4e14 ",(0,l.kt)("inlineCode",{parentName:"p"},"swap")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u8868 B \u91cd\u540d\u4e3a\u8868 A\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u8868 A \u91cd\u540d\u4e3a\u8868 B\u3002")),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"swap")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5219\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664\u8868 A\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u8868 B \u91cd\u540d\u4e3a\u8868 A\u3002")),(0,l.kt)("h4",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"swap")," \u53c2\u6570\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"\u3002\u5373\u66ff\u6362\u8868\u64cd\u4f5c\u76f8\u5f53\u4e8e\u5c06\u4e24\u5f20\u8868\u6570\u636e\u8fdb\u884c\u4ea4\u6362\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"swap")," \u53c2\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5219\u88ab\u66ff\u6362\u7684\u8868\uff08\u8868A\uff09\u5c06\u88ab\u5220\u9664\uff0c\u4e14\u65e0\u6cd5\u6062\u590d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u66ff\u6362\u64cd\u4f5c\u4ec5\u80fd\u53d1\u751f\u5728\u4e24\u5f20 OLAP \u8868\u4e4b\u95f4\uff0c\u4e14\u4e0d\u4f1a\u68c0\u67e5\u4e24\u5f20\u8868\u7684\u8868\u7ed3\u6784\u662f\u5426\u4e00\u81f4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u66ff\u6362\u64cd\u4f5c\u4e0d\u4f1a\u6539\u53d8\u539f\u6709\u7684\u6743\u9650\u8bbe\u7f6e\u3002\u56e0\u4e3a\u6743\u9650\u68c0\u67e5\u4ee5\u8868\u540d\u79f0\u4e3a\u51c6\u3002")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"tbl1")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"tbl2")," \u8fdb\u884c\u4ea4\u6362\uff0c\u4e0d\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"tbl1")," \u8868")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE tbl1 REPLACE WITH TABLE tbl2\n    [PROPERTIES('swap' = 'true')];\n")),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, REPLACE, ALTER TABLE\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u539f\u5b50\u7684\u8986\u76d6\u5199\u64cd\u4f5c"),(0,l.kt)("p",{parentName:"li"},"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u5e0c\u671b\u80fd\u591f\u91cd\u5199\u67d0\u5f20\u8868\u7684\u6570\u636e\uff0c\u4f46\u5982\u679c\u91c7\u7528\u5148\u5220\u9664\u518d\u5bfc\u5165\u7684\u65b9\u5f0f\u8fdb\u884c\uff0c\u5728\u4e2d\u95f4\u4f1a\u6709\u4e00\u6bb5\u65f6\u95f4\u65e0\u6cd5\u67e5\u770b\u6570\u636e\u3002\u8fd9\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u5148\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE LIKE")," \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u76f8\u540c\u7ed3\u6784\u7684\u65b0\u8868\uff0c\u5c06\u65b0\u7684\u6570\u636e\u5bfc\u5165\u5230\u65b0\u8868\u540e\uff0c\u901a\u8fc7\u66ff\u6362\u64cd\u4f5c\uff0c\u539f\u5b50\u7684\u66ff\u6362\u65e7\u8868\uff0c\u4ee5\u8fbe\u5230\u76ee\u7684\u3002\u5206\u533a\u7ea7\u522b\u7684\u539f\u5b50\u8986\u76d6\u5199\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/advanced/partition/table-temp-partition"},"\u4e34\u65f6\u5206\u533a\u6587\u6863"),"\u3002"))))}d.isMDXComponent=!0}}]);