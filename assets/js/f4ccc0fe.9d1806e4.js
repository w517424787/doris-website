"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[58632],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(i,".").concat(d)]||p[d]||y[d]||o;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60200:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={title:"array_reverse_sort",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_reverse_sort",id:"version-dev/sql-manual/sql-functions/array-functions/array_reverse_sort",title:"array_reverse_sort",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/array-functions/array_reverse_sort.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_reverse_sort",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_reverse_sort",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/array-functions/array_reverse_sort.md",tags:[],version:"dev",frontMatter:{title:"array_reverse_sort",language:"en"},sidebar:"docs",previous:{title:"array_sort",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_sort"},next:{title:"array_sortby",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_sortby"}},i={},c=[{value:"array_reverse_sort",id:"array_reverse_sort",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_reverse_sort"},"array_reverse_sort"),(0,a.kt)("version",{since:"1.2.3"},(0,a.kt)("p",null,"array_reverse_sort")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_reverse_sort(ARRAY<T> arr)")),(0,a.kt)("p",null,"Return the array which has been sorted in descending order. Return NULL for NULL input.\nIf the element of array is NULL, it will be placed in the last of the sorted array."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\nmysql> select k1, k2, array_reverse_sort(k2) from array_test;\n+------+-----------------------------+-----------------------------+\n| k1   | k2                          | array_reverse_sort(`k2`)    |\n+------+-----------------------------+-----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | [5, 4, 3, 2, 1]             |\n|  2   | [6, 7, 8]                   | [8, 7, 6]                   |\n|  3   | []                          | []                          |\n|  4   | NULL                        | NULL                        |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [5, 4, 4, 3, 3, 2, 2, 1, 1] |\n|  6   | [1, 2, 3, NULL]             | [3, 2, 1, NULL]             |\n|  7   | [1, 2, 3, NULL, NULL]       | [3, 2, 1, NULL, NULL]       |\n|  8   | [1, 1, 2, NULL, NULL]       | [2, 1, 1, NULL, NULL]       |\n|  9   | [1, NULL, 1, 2, NULL, NULL] | [2, 1, 1, NULL, NULL, NULL] |\n+------+-----------------------------+-----------------------------+\n\nmysql> select k1, k2, array_reverse_sort(k2) from array_test01;\n+------+------------------------------------------+------------------------------------------+\n| k1   | k2                                       | array_reverse_sort(`k2`)                 |\n+------+------------------------------------------+------------------------------------------+\n|  1   | ['a', 'b', 'c', 'd', 'e']                | ['e', 'd', 'c', 'b', 'a']                |\n|  2   | ['f', 'g', 'h']                          | ['h', 'g', 'f']                          |\n|  3   | ['']                                     | ['']                                     |\n|  3   | [NULL]                                   | [NULL]                                   |\n|  5   | ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'] | ['e', 'd', 'c', 'c', 'b', 'b', 'a', 'a'] |\n|  6   | NULL                                     | NULL                                     |\n|  7   | ['a', 'b', NULL]                         | ['b', 'a', NULL]                         |\n|  8   | ['a', 'b', NULL, NULL]                   | ['b', 'a', NULL, NULL]                  |\n+------+------------------------------------------+------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY, SORT, REVERSE, ARRAY_SORT, ARRAY_REVERSE_SORT"))}y.isMDXComponent=!0}}]);