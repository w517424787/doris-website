"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[78621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},S=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),S=l,d=p["".concat(i,".").concat(S)]||p[S]||m[S]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=S;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}S.displayName="MDXCreateElement"},18840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={title:"SHOW-SQL-BLOCK-RULE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",id:"sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",title:"SHOW-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-SQL-BLOCK-RULE",language:"en"},sidebar:"docs",previous:{title:"SHOW-SNAPSHOT",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-SNAPSHOT"},next:{title:"SHOW-STATUS",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-STATUS"}},i={},c=[{value:"SQL-BLOCK-RULE",id:"sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"sql-block-rule"},"SQL-BLOCK-RULE"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"SHOW SQL BLOCK RULE"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"View the configured SQL blocking rules. If you do not specify a rule name, you will view all rules."),(0,l.kt)("p",null,"grammar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW SQL_BLOCK_RULE [FOR RULE_NAME];\n")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"View all rules."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW SQL_BLOCK_RULE;\n+------------+----------------------------+---------+- -------------+------------+-------------+--------+- -------+\n| Name | Sql | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+----------------------------+---------+- -------------+------------+-------------+--------+- -------+\n| test_rule | select * from order_analysis | NULL | 0 | 0 | 0 | true | true |\n| test_rule2 | NULL | NULL | 30 | 0 | 10000000000 | false | true |\n+------------+----------------------------+---------+- -------------+------------+-------------+--------+- -------+\n2 rows in set (0.01 sec)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make a rule name query"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW SQL_BLOCK_RULE FOR test_rule2;\n+------------+------+---------+---------------+---- -------+-------------+--------+--------+\n| Name | Sql | SqlHash | PartitionNum | TabletNum | Cardinality | Global | Enable |\n+------------+------+---------+---------------+---- -------+-------------+--------+--------+\n| test_rule2 | NULL | NULL | 30 | 0 | 10000000000 | false | true |\n+------------+------+---------+---------------+---- -------+-------------+--------+--------+\n1 row in set (0.00 sec)\n\n")))),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SHOW, SQL_BLOCK_RULE\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);