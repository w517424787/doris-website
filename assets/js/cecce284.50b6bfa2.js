"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[79159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"IN",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Operators/in",id:"version-dev/sql-manual/sql-reference/Operators/in",title:"IN",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Operators/in.md",sourceDirName:"sql-manual/sql-reference/Operators",slug:"/sql-manual/sql-reference/Operators/in",permalink:"/docs/dev/sql-manual/sql-reference/Operators/in",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Operators/in.md",tags:[],version:"dev",frontMatter:{title:"IN",language:"en"},sidebar:"docs",previous:{title:"JSONB",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/JSONB"},next:{title:"HELP",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/HELP"}},s={},c=[{value:"IN",id:"in",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"in"},"IN"),(0,l.kt)("version",{since:"1.2.0"},(0,l.kt)("p",null,"IN")),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"expr IN (value, ...)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"expr IN (subquery)")),(0,l.kt)("p",null,"If expr is equal to any value in the IN list, return true; otherwise, return false."),(0,l.kt)("p",null,"Subquery can only return one column, and the column types returned by subquery must be compatible with expr types."),(0,l.kt)("p",null,"If subquery returns a bitmap data type column, expr must be an integer."),(0,l.kt)("h4",{id:"notice"},"notice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Currently, bitmap columns are only returned to in subqueries supported in the vectorized engine.")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select id from cost where id in (1, 2);\n+------+\n| id   |\n+------+\n|    2 |\n|    1 |\n+------+\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select id from tbl1 where id in (select id from tbl2);\n+------+\n| id   |\n+------+\n|    1 |\n|    4 |\n|    5 |\n+------+\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select id from tbl1 where id in (select bitmap_col from tbl3);\n+------+\n| id   |\n+------+\n|    1 |\n|    3 |\n+------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"IN\n")))}d.isMDXComponent=!0}}]);