"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"CANCEL-BACKUP",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP",title:"CANCEL-BACKUP",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP.md",tags:[],version:"dev",frontMatter:{title:"CANCEL-BACKUP",language:"en"},sidebar:"docs",previous:{title:"BACKUP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP"},next:{title:"CREATE-REPOSITORY",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"}},c={},s=[{value:"CANCEL-BACKUP",id:"cancel-backup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cancel-backup"},"CANCEL-BACKUP"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"CANCEL BACKUP"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to cancel an ongoing BACKUP task."),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL BACKUP FROM db_name;\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cancel the BACKUP task under example_db.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL BACKUP FROM example_db;\n")),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," CANCEL, BACKUP\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);