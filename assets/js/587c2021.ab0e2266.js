"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[52137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>A});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,A=p["".concat(o,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(A,s(s({ref:t},d),{},{components:n})):r.createElement(A,s({ref:t},d))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"LINK DATABASE",language:"en"},s=void 0,i={unversionedId:"sql-reference/sql-statements/Administration/LINK-DATABASE",id:"version-0.15/sql-reference/sql-statements/Administration/LINK-DATABASE",title:"LINK DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Administration/LINK-DATABASE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/LINK-DATABASE",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/LINK-DATABASE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"LINK DATABASE",language:"en"},sidebar:"docs",previous:{title:"INSTALL PLUGIN",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/INSTALL-PLUGIN"},next:{title:"MIGRATE DATABASE",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/MIGRATE-DATABASE"}},o={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"link-database"},"LINK DATABASE"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement allows users to link a database of one logical cluster to another logical cluster. A database is only allowed to be linked once at the same time and the linked database is deleted."),(0,a.kt)("p",null,"It does not delete data, and the linked database cannot be deleted. Administrator privileges are required."),(0,a.kt)("p",null,"grammar"),(0,a.kt)("p",null,"LINK DATABASE src u cluster name.src db name of the cluster name.des db name"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Link test_db in test_cluster A to test_cluster B and name it link_test_db")),(0,a.kt)("p",null,"LINK DATABASE test_clusterA.test_db test_clusterB.link_test_db;"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Delete linked database link_test_db")),(0,a.kt)("p",null,"DROP DATABASE link_test_db;"),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"LINK,DATABASE"))}u.isMDXComponent=!0}}]);