"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[96609],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,d=m["".concat(l,".").concat(y)]||m[y]||p[y]||i;return r?t.createElement(d,u(u({ref:n},c),{},{components:r})):t.createElement(d,u({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=y;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:a,u[1]=o;for(var s=2;s<i;s++)u[s]=r[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},44673:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const i={title:"array_enumerate_uniq",language:"en"},u=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array_enumerate_uniq",id:"version-dev/sql-manual/sql-functions/array-functions/array_enumerate_uniq",title:"array_enumerate_uniq",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/array-functions/array_enumerate_uniq.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_enumerate_uniq",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_enumerate_uniq",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/array-functions/array_enumerate_uniq.md",tags:[],version:"dev",frontMatter:{title:"array_enumerate_uniq",language:"en"},sidebar:"docs",previous:{title:"array_enumerate",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_enumerate"},next:{title:"array_popback",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_popback"}},l={},s=[{value:"array_enumerate_uniq",id:"array_enumerate_uniq",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},m="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(m,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_enumerate_uniq"},"array_enumerate_uniq"),(0,a.kt)("version",{since:"1.2.3"},(0,a.kt)("p",null,"array_enumerate_uniq")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_enumerate_uniq(ARRAY<T> arr)")),(0,a.kt)("p",null,"Returns an array the same size as the source array, indicating for each element what its position is among elements with the same value. For example, array_enumerate_uniq(","[1, 2, 1, 4]",") = ","[1, 1, 2, 1]",".\nThe array_enumerate_uniq function can take multiple arrays of the same size as arguments. In this case, uniqueness is considered for tuples of elements in the same positions in all the arrays. For example, array_enumerate_uniq(","[1, 2, 1, 1, 2]",", ","[2, 1, 2, 2, 1]",") = ","[1, 1, 2, 3, 2]","."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> select k2, array_enumerate_uniq([1, 2, 3, 1, 2, 3]);\n+-----------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 2, 3, 1, 2, 3))       |\n+-----------------------------------------------------+\n| [1, 1, 1, 2, 2, 2]                                  |\n+-----------------------------------------------------+\nmysql> select array_enumerate_uniq([1, 1, 1, 1, 1], [2, 1, 2, 1, 2], [3, 1, 3, 1, 3]);\n+----------------------------------------------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 1, 1, 1, 1), ARRAY(2, 1, 2, 1, 2), ARRAY(3, 1, 3, 1, 3)) |\n+----------------------------------------------------------------------------------------+\n| [1, 1, 2, 1, 3]                                                                        |\n+----------------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,ENUMERATE_UNIQ,ARRAY_ENUMERATE_UNIQ"))}p.isMDXComponent=!0}}]);