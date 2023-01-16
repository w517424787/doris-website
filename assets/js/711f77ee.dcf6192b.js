"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[d]="string"==typeof e?e:s,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={title:"MD5SUM",language:"en"},c=void 0,a={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/md5sum",id:"version-dev/sql-manual/sql-functions/encrypt-digest-functions/md5sum",title:"MD5SUM",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/encrypt-digest-functions/md5sum.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/md5sum",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5sum",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/encrypt-digest-functions/md5sum.md",tags:[],version:"dev",frontMatter:{title:"MD5SUM",language:"en"},sidebar:"docs",previous:{title:"MD5",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5"},next:{title:"SM4",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm4"}},i={},l=[{value:"MD5SUM",id:"md5sum",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"md5sum"},"MD5SUM"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("p",null,"Calculates an MD5 128-bit checksum for the strings"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"MD5SUM(str[,str])")),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MySQL > select md5(\"abcd\");\n+----------------------------------+\n| md5('abcd')                      |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n1 row in set (0.011 sec)\n\nMySQL > select md5sum(\"ab\",\"cd\");\n+----------------------------------+\n| md5sum('ab', 'cd')               |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n1 row in set (0.008 sec)\n\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MD5SUM\n")))}p.isMDXComponent=!0}}]);