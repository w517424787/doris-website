"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[37741],{3905:(r,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>_});var n=e(67294);function t(r,a,e){return a in r?Object.defineProperty(r,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[a]=e,r}function s(r,a){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),e.push.apply(e,n)}return e}function y(r){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){t(r,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(e,a))}))}return r}function o(r,a){if(null==r)return{};var e,n,t=function(r,a){if(null==r)return{};var e,n,t={},s=Object.keys(r);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||(t[e]=r[e]);return t}(r,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(t[e]=r[e])}return t}var c=n.createContext({}),l=function(r){var a=n.useContext(c),e=a;return r&&(e="function"==typeof r?r(a):y(y({},a),r)),e},i=function(r){var a=l(r.components);return n.createElement(c.Provider,{value:a},r.children)},p="mdxType",m={inlineCode:"code",wrapper:function(r){var a=r.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(r,a){var e=r.components,t=r.mdxType,s=r.originalType,c=r.parentName,i=o(r,["components","mdxType","originalType","parentName"]),p=l(e),u=t,_=p["".concat(c,".").concat(u)]||p[u]||m[u]||s;return e?n.createElement(_,y(y({ref:a},i),{},{components:e})):n.createElement(_,y({ref:a},i))}));function _(r,a){var e=arguments,t=a&&a.mdxType;if("string"==typeof r||t){var s=e.length,y=new Array(s);y[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=r,o[p]="string"==typeof r?r:t,y[1]=o;for(var l=2;l<s;l++)y[l]=e[l];return n.createElement.apply(null,y)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},57369:(r,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>y,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=e(87462),t=(e(67294),e(3905));const s={title:"array_map",language:"en"},y=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_map",id:"version-dev/sql-manual/sql-functions/array-functions/array_map",title:"array_map",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/array-functions/array_map.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_map",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_map",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/array-functions/array_map.md",tags:[],version:"dev",frontMatter:{title:"array_map",language:"en"},sidebar:"docs",previous:{title:"array_min",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_min"},next:{title:"array_filter",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_filter"}},c={},l=[{value:"array_map",id:"array_map",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:l},p="wrapper";function m(r){let{components:a,...e}=r;return(0,t.kt)(p,(0,n.Z)({},i,e,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"array_map"},"array_map"),(0,t.kt)("version",{since:"1.2.2"},(0,t.kt)("p",null,"array_map(lambda,array,....)")),(0,t.kt)("h3",{id:"description"},"description"),(0,t.kt)("h4",{id:"syntax"},"Syntax"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_map(lambda, ARRAY<T> array1, ARRAY<T> array2)")),(0,t.kt)("p",null,"Use a lambda expression as the input parameter to calculate the corresponding expression for the internal data of other input ARRAY parameters.\nThe number of parameters entered in the lambda expression is 1 or more, which must be consistent with the number of input array columns.\nThe scalar functions can be executed in lambda, and aggregate functions are not supported."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"array_map(x->x, array1);\narray_map(x->(x+2), array1);\narray_map(x->(abs(x)-2), array1);\n\narray_map((x,y)->(x = y), array1, array2);\narray_map((x,y)->(power(x,2)+y), array1, array2);\narray_map((x,y,z)->(abs(x)+y*z), array1, array2, array3);\n")),(0,t.kt)("h3",{id:"example"},"example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\nmysql [test]>select *, array_map(x->x,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n|    3 | [1]             | [-100]                  | [1, 2, 3]                              |\n|    4 | NULL            | NULL                    | [1, 2, 3]                              |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *, array_map(x->x+2,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+--------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) + 2, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+--------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [3, 4, 5]                                  |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [3, 4, 5]                                  |\n|    3 | [1]             | [-100]                  | [3, 4, 5]                                  |\n|    4 | NULL            | NULL                    | [3, 4, 5]                                  |\n+------+-----------------+-------------------------+--------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_map(x->x,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n| [1]             | [-100]                  | [1, 2, 3]                              |\n| NULL            | NULL                    | [1, 2, 3]                              |\n+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.01 sec)\n\nmysql [test]>select c_array1, c_array2, array_map(x->power(x,2),[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> power(x(0), 2.0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 4, 9]                                          |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 4, 9]                                          |\n| [1]             | [-100]                  | [1, 4, 9]                                          |\n| NULL            | NULL                    | [1, 4, 9]                                          |\n+-----------------+-------------------------+----------------------------------------------------+\n\nmysql [test]>select c_array1, c_array2, array_map((x,y)->x+y,c_array1,c_array2) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> x(0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 22, -37, 84, -95]                                   |\n| [6, 7, 8]       | [10, 12, 13]            | [16, 19, 21]                                             |\n| [1]             | [-100]                  | [-99]                                                    |\n| NULL            | NULL                    | NULL                                                     |\n+-----------------+-------------------------+----------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_map((x,y)->power(x,2)+y,c_array1, c_array2) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> power(x(0), 2.0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 24, -31, 96, -75]                                               |\n| [6, 7, 8]       | [10, 12, 13]            | [46, 61, 77]                                                         |\n| [1]             | [-100]                  | [-99]                                                                |\n| NULL            | NULL                    | NULL                                                                 |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n4 rows in set (0.03 sec)\n\nmysql [test]>select *,array_map(x->x=3,c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) = 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 0]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *,array_map(x->x>3,c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) > 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 0, 1, 1]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *,array_map((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                |\n|    3 | [1]             | [-100]                  | [1]                                                      |\n|    4 | NULL            | NULL                    | NULL                                                     |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select array_map(x->cast(x as string), c_array1) from test_array_map_function;\n+-----------------+-------------------------------------------------------+\n| c_array1        | array_map([x] -> CAST(x(0) AS CHARACTER), `c_array1`) |\n+-----------------+-------------------------------------------------------+\n| [1, 2, 3, 4, 5] | ['1', '2', '3', '4', '5']                             |\n| [6, 7, 8]       | ['6', '7', '8']                                       |\n| []              | []                                                    |\n| NULL            | NULL                                                  |\n+-----------------+-------------------------------------------------------+\n4 rows in set (0.01 sec)\n")),(0,t.kt)("h3",{id:"keywords"},"keywords"),(0,t.kt)("p",null,"ARRAY,MAP,ARRAY_MAP"))}m.isMDXComponent=!0}}]);