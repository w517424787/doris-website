"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"bitxor",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/bitwise-functions/bitxor",id:"version-dev/sql-manual/sql-functions/bitwise-functions/bitxor",title:"bitxor",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/bitwise-functions/bitxor.md",sourceDirName:"sql-manual/sql-functions/bitwise-functions",slug:"/sql-manual/sql-functions/bitwise-functions/bitxor",permalink:"/docs/dev/sql-manual/sql-functions/bitwise-functions/bitxor",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/bitwise-functions/bitxor.md",tags:[],version:"dev",frontMatter:{title:"bitxor",language:"en"},sidebar:"docs",previous:{title:"bitor",permalink:"/docs/dev/sql-manual/sql-functions/bitwise-functions/bitor"},next:{title:"bitnot",permalink:"/docs/dev/sql-manual/sql-functions/bitwise-functions/bitnot"}},a={},c=[{value:"bitxor",id:"bitxor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bitxor"},"bitxor"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITXOR(Integer-type lhs, Integer-type rhs)")),(0,o.kt)("p",null,"Returns the result of the XOR operation of two integers."),(0,o.kt)("p",null,"Integer range: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select bitxor(3,5) ans;\n+------+\n| ans  |\n+------+\n|    7 |\n+------+\n\nmysql> select bitxor(1,7) ans;\n+------+\n| ans  |\n+------+\n|    6 |\n+------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BITXOR\n")))}d.isMDXComponent=!0}}]);