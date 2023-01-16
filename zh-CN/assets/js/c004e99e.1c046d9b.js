"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[90335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"Cancel Label",language:"en"},o=void 0,c={unversionedId:"sql-reference/sql-statements/Data-Manipulation/CANCEL-LABEL",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/CANCEL-LABEL",title:"Cancel Label",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/CANCEL-LABEL.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/CANCEL-LABEL",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/CANCEL-LABEL",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Cancel Label",language:"en"},sidebar:"docs",previous:{title:"CANCEL DELETE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/CANCEL-DELETE"},next:{title:"CANCEL LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/CANCEL-LOAD"}},s={},i=[{value:"keyword",id:"keyword",level:2}],p={toc:i},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cancel-label"},"Cancel Label"),(0,a.kt)("p",null,"Description\nNAME:\ncancel_label: cancel a transaction with label"),(0,a.kt)("p",null,"SYNOPSIS\ncurl -u user:passwd -XPOST http://host:port/api/{db}/{label}/_cancel"),(0,a.kt)("p",null,"DESCRIPTION\nThis command is used to cancel a transaction corresponding to a specified Label, which can be successfully cancelled during the Prepare phase."),(0,a.kt)("p",null,"RETURN VALUES\nWhen the execution is complete, the relevant content of this import will be returned in Json format. Currently includes the following fields\nStatus: Successful cancel\nSuccess: \u6210\u529fcancel\u4e8b\u52a1\n20854; 2018282: 22833; 361333;\nMessage: Specific Failure Information"),(0,a.kt)("p",null,"ERRORS"),(0,a.kt)("p",null,"'35;'35; example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"cancel testDb, testLabel20316;- 19994;\ncurl -u root -XPOST http://host:port/api/testDb/testLabel/_cancel")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"Cancel, Label"))}f.isMDXComponent=!0}}]);