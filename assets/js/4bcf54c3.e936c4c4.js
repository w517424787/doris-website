"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[2121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,O=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(O,i(i({ref:t},p),{},{components:n})):r.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"ADMIN SHOW TABLET STORAGE FORMAT",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT",title:"ADMIN SHOW TABLET STORAGE FORMAT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN SHOW TABLET STORAGE FORMAT",language:"en"}},s={},c=[{value:"ADMIN SHOW TABLET STORAGE FORMAT",id:"admin-show-tablet-storage-format",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin-show-tablet-storage-format"},"ADMIN SHOW TABLET STORAGE FORMAT"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This statement is used to display tablet storage foramt information (for administrators only)\nGrammar:\n    ADMIN SHOW TABLET STORAGE FORMAT [VERBOSE]\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL [(none)]> admin show tablet storage format;\n+-----------+---------+---------+\n| BackendId | V1Count | V2Count |\n+-----------+---------+---------+\n| 10002     | 0       | 2867    |\n+-----------+---------+---------+\n1 row in set (0.003 sec)\nMySQL [test_query_qa]> admin show tablet storage format verbose;\n+-----------+----------+---------------+\n| BackendId | TabletId | StorageFormat |\n+-----------+----------+---------------+\n| 10002     | 39227    | V2            |\n| 10002     | 39221    | V2            |\n| 10002     | 39215    | V2            |\n| 10002     | 39199    | V2            |\n+-----------+----------+---------------+\n4 rows in set (0.034 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN, SHOW, TABLET, STORAGE, FORMAT, ADMIN SHOW\n")))}u.isMDXComponent=!0}}]);