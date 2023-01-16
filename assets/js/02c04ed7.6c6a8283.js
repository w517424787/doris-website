"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[53334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"ADMIN-CHECK-TABLET",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET",id:"version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET",title:"ADMIN-CHECK-TABLET",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET.md",tags:[],version:"dev",frontMatter:{title:"ADMIN-CHECK-TABLET",language:"en"},sidebar:"docs",previous:{title:"KILL",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/KILL"},next:{title:"ADMIN-CLEAN-TRASH",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH"}},s={},c=[{value:"ADMIN-CHECK-TABLET",id:"admin-check-tablet",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin-check-tablet"},"ADMIN-CHECK-TABLET"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ADMIN CHECK TABLET"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to perform the specified check operation on a set of tablets."),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN CHECK TABLET (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...");\n')),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A list of tablet ids must be specified along with the type property in PROPERTIES.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Type only supports:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"consistency: Check the consistency of the replica of the tablet. This command is an asynchronous command. After sending, Doris will start to execute the consistency check job of the corresponding tablet. The final result will be reflected in the InconsistentTabletNum column in the result of ",(0,a.kt)("inlineCode",{parentName:"li"},'SHOW PROC "/cluster_health/tablet_health";'),".")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Perform a replica data consistency check on a specified set of tablets."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'ADMIN CHECK TABLET (10000, 10001) \nPROPERTIES("type" = "consistency");\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN, CHECK, TABLET\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);