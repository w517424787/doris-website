"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=a(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||f[d]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var a=2;a<l;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const l={title:"lower",language:"en"},i=void 0,c={unversionedId:"sql-reference/sql-functions/string-functions/lower",id:"version-0.15/sql-reference/sql-functions/string-functions/lower",title:"lower",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/string-functions/lower.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/lower",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/lower",draft:!1,tags:[],version:"0.15",frontMatter:{title:"lower",language:"en"},sidebar:"docs",previous:{title:"locate",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/locate"},next:{title:"lpad",permalink:"/docs/0.15/sql-reference/sql-functions/string-functions/lpad"}},s={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:a},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lower"},"lower"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INT lower (VARCHAR str)")),(0,o.kt)("p",null,"Convert all strings in parameters to lowercase"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT lower(\"AbC123\");\n+-----------------+\n| lower('AbC123') |\n+-----------------+\n| abc123          |\n+-----------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"LOWER"))}f.isMDXComponent=!0}}]);