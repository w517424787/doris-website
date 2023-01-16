"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[71355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>S});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,S=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(S,o(o({ref:t},u),{},{components:r})):n.createElement(S,o({ref:t},u))}));function S(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-LAST-INSERT",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT",title:"SHOW-LAST-INSERT",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT.md",tags:[],version:"dev",frontMatter:{title:"SHOW-LAST-INSERT",language:"en"},sidebar:"docs",previous:{title:"SHOW-GRANTS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-GRANTS"},next:{title:"SHOW-LOAD-PROFILE",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE"}},i={},c=[{value:"SHOW-LAST-INSERT",id:"show-last-insert",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-last-insert"},"SHOW-LAST-INSERT"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW LAST INSERT"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This syntax is used to view the result of the latest insert operation in the current session connection"),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW LAST INSERT\n")),(0,a.kt)("p",null,"Example of returned result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"     TransactionId: 64067\n             Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n          Database: default_cluster:db1\n             Table: t1\nTransactionStatus: VISIBLE\n        LoadedRows: 2\n      FilteredRows: 0\n")),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TransactionId: transaction id"),(0,a.kt)("li",{parentName:"ul"},"Label: the label corresponding to the insert task"),(0,a.kt)("li",{parentName:"ul"},"Database: the database corresponding to insert"),(0,a.kt)("li",{parentName:"ul"},"Table: the table corresponding to insert"),(0,a.kt)("li",{parentName:"ul"},"TransactionStatus: transaction status",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PREPARE: preparation stage"),(0,a.kt)("li",{parentName:"ul"},"PRECOMMITTED: Pre-commit stage"),(0,a.kt)("li",{parentName:"ul"},"COMMITTED: The transaction succeeded, but the data was not visible"),(0,a.kt)("li",{parentName:"ul"},"VISIBLE: The transaction succeeded and the data is visible"),(0,a.kt)("li",{parentName:"ul"},"ABORTED: Transaction failed"))),(0,a.kt)("li",{parentName:"ul"},"LoadedRows: Number of imported rows"),(0,a.kt)("li",{parentName:"ul"},"FilteredRows: The number of rows being filtered")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, LASR ,INSERT\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);