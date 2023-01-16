"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[58105],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var a=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,l=function(e,n){if(null==e)return{};var r,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,l=e.mdxType,t=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(r),d=l,f=y["".concat(i,".").concat(d)]||y[d]||p[d]||t;return r?a.createElement(f,s(s({ref:n},u),{},{components:r})):a.createElement(f,s({ref:n},u))}));function f(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var t=r.length,s=new Array(t);s[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[y]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<t;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81921:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=r(87462),l=(r(67294),r(3905));const t={title:"array_slice",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_slice",id:"version-dev/sql-manual/sql-functions/array-functions/array_slice",title:"array_slice",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/array-functions/array_slice.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_slice",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_slice",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/array-functions/array_slice.md",tags:[],version:"dev",frontMatter:{title:"array_slice",language:"en"},sidebar:"docs",previous:{title:"array_remove",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_remove"},next:{title:"array_sort",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_sort"}},i={},c=[{value:"array_slice",id:"array_slice",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:n,...r}=e;return(0,l.kt)(y,(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"array_slice"},"array_slice"),(0,l.kt)("version",{since:"1.2.0"},(0,l.kt)("p",null,"array_slice")),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_slice(ARRAY<T> arr, BIGINT off, BIGINT len)")),(0,l.kt)("p",null,"Returns a slice of the array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"A positive off indicates an indent on the left\nA negative off indicates an indent on the right.\nAn empty array is returned when the off is not within the actual range of the array.\nA negative len will be treated as 0.\n")),(0,l.kt)("h3",{id:"notice"},"notice"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k2, k2[2:2] from array_type_table_nullable;\n+-----------------+-------------------------+\n| k2              | array_slice(`k2`, 2, 2) |\n+-----------------+-------------------------+\n| [1, 2, 3]       | [2, 3]                  |\n| [1, NULL, 3]    | [NULL, 3]               |\n| [2, 3]          | [3]                     |\n| NULL            | NULL                    |\n+-----------------+-------------------------+\n\nmysql> select k2, array_slice(k2, 2, 2) from array_type_table_nullable;\n+-----------------+-------------------------+\n| k2              | array_slice(`k2`, 2, 2) |\n+-----------------+-------------------------+\n| [1, 2, 3]       | [2, 3]                  |\n| [1, NULL, 3]    | [NULL, 3]               |\n| [2, 3]          | [3]                     |\n| NULL            | NULL                    |\n+-----------------+-------------------------+\n\nmysql> select k2, k2[2:2] from array_type_table_nullable_varchar;\n+----------------------------+-------------------------+\n| k2                         | array_slice(`k2`, 2, 2) |\n+----------------------------+-------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']        |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']        |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n+----------------------------+-------------------------+\n\nmysql> select k2, array_slice(k2, 2, 2) from array_type_table_nullable_varchar;\n+----------------------------+-------------------------+\n| k2                         | array_slice(`k2`, 2, 2) |\n+----------------------------+-------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']        |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']        |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n+----------------------------+-------------------------+\n")),(0,l.kt)("p",null,"Negative off:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select k2, k2[-2:1] from array_type_table_nullable;\n+-----------+--------------------------+\n| k2        | array_slice(`k2`, -2, 1) |\n+-----------+--------------------------+\n| [1, 2, 3] | [2]                      |\n| [1, 2, 3] | [2]                      |\n| [2, 3]    | [2]                      |\n| [2, 3]    | [2]                      |\n+-----------+--------------------------+\n\nmysql> select k2, array_slice(k2, -2, 1) from array_type_table_nullable;\n+-----------+--------------------------+\n| k2        | array_slice(`k2`, -2, 1) |\n+-----------+--------------------------+\n| [1, 2, 3] | [2]                      |\n| [1, 2, 3] | [2]                      |\n| [2, 3]    | [2]                      |\n| [2, 3]    | [2]                      |\n+-----------+--------------------------+\n\nmysql> select k2, k2[-2:2] from array_type_table_nullable_varchar;\n+----------------------------+--------------------------+\n| k2                         | array_slice(`k2`, -2, 2) |\n+----------------------------+--------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']         |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n+----------------------------+--------------------------+\n\nmysql> select k2, array_slice(k2, -2, 2) from array_type_table_nullable_varchar;\n+----------------------------+--------------------------+\n| k2                         | array_slice(`k2`, -2, 2) |\n+----------------------------+--------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']         |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n+----------------------------+--------------------------+\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select k2, array_slice(k2, 0) from array_type_table;\n+-----------+-------------------------+\n| k2        | array_slice(`k2`, 0) |\n+-----------+-------------------------+\n| [1, 2, 3] | []                      |\n+-----------+-------------------------+\n\nmysql> select k2, array_slice(k2, -5) from array_type_table;\n+-----------+----------------------+\n| k2        | array_slice(`k2`, -5) |\n+-----------+----------------------+\n| [1, 2, 3] | []                   |\n+-----------+----------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"ARRAY,SLICE,ARRAY_SLICE"))}p.isMDXComponent=!0}}]);