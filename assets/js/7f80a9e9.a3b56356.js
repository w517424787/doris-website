"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={title:"ends_with",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/ends_with",id:"version-dev/sql-manual/sql-functions/string-functions/ends_with",title:"ends_with",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/string-functions/ends_with.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/ends_with",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/ends_with",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/string-functions/ends_with.md",tags:[],version:"dev",frontMatter:{title:"ends_with",language:"en"},sidebar:"docs",previous:{title:"append_trailing_char_if_absent",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent"},next:{title:"starts_with",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/starts_with"}},a={},c=[{value:"ends_with",id:"ends_with",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ends_with"},"ends_with"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BOOLEAN ENDS_WITH(VARCHAR str, VARCHAR suffix)")),(0,i.kt)("p",null,"It returns true if the string ends with the specified suffix, otherwise it returns false.\nIf any parameter is NULL, it returns NULL."),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select ends_with(\"Hello doris\", \"doris\");\n+-----------------------------------+\n| ends_with('Hello doris', 'doris') |\n+-----------------------------------+\n|                                 1 | \n+-----------------------------------+\n\nmysql> select ends_with(\"Hello doris\", \"Hello\");\n+-----------------------------------+\n| ends_with('Hello doris', 'Hello') |\n+-----------------------------------+\n|                                 0 | \n+-----------------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ENDS_WITH\n")))}p.isMDXComponent=!0}}]);