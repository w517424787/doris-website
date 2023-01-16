"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[59416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"SHOW GRANTS",language:"en"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Account-Management/SHOW-GRANTS",id:"version-0.15/sql-reference/sql-statements/Account-Management/SHOW-GRANTS",title:"SHOW GRANTS",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Account-Management/SHOW-GRANTS.md",sourceDirName:"sql-reference/sql-statements/Account-Management",slug:"/sql-reference/sql-statements/Account-Management/SHOW-GRANTS",permalink:"/docs/0.15/sql-reference/sql-statements/Account-Management/SHOW-GRANTS",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW GRANTS",language:"en"},sidebar:"docs",previous:{title:"SET PROPERTY",permalink:"/docs/0.15/sql-reference/sql-statements/Account-Management/SET-PROPERTY"},next:{title:"SHOW ROLES",permalink:"/docs/0.15/sql-reference/sql-statements/Account-Management/SHOW-ROLES"}},s={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"show-grants"},"SHOW GRANTS"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This statement is used to view user rights."),(0,o.kt)("p",null,"Grammar:\nSHOW ","[ALL]"," GRANTS ","[FOR user_identity]",";"),(0,o.kt)("p",null,"Explain:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"SHOW ALL GRANTS can view the privileges of all users."),(0,o.kt)("li",{parentName:"ol"},"If you specify user_identity, view the permissions of the specified user. And the user_identity must be created for the CREATE USER command."),(0,o.kt)("li",{parentName:"ol"},"If you do not specify user_identity, view the permissions of the current user.")),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"View all user rights information")),(0,o.kt)("p",null,"SHOW ALL GRANTS;"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"View the permissions of the specified user")),(0,o.kt)("p",null,"SHOW GRANTS FOR jack@'%';"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"View the permissions of the current user")),(0,o.kt)("p",null,"SHOW GRANTS;"),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"SHOW, GRANTS"))}m.isMDXComponent=!0}}]);