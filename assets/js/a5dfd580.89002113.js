"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[78766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"like",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/like/like",id:"version-dev/sql-manual/sql-functions/string-functions/like/like",title:"like",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/string-functions/like/like.md",sourceDirName:"sql-manual/sql-functions/string-functions/like",slug:"/sql-manual/sql-functions/string-functions/like/",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/like/",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/string-functions/like/like.md",tags:[],version:"dev",frontMatter:{title:"like",language:"en"},sidebar:"docs",previous:{title:"multi_match_any",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/search/multi_match_any"},next:{title:"not like",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/like/not_like"}},o={},c=[{value:"like",id:"like",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"like"},"like"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BOOLEAN like(VARCHAR str, VARCHAR pattern)")),(0,i.kt)("p",null,"Perform fuzzy matching on the string str, return true if it matches, and false if it doesn't match."),(0,i.kt)("p",null,"like match/fuzzy match, will be used in combination with % and _."),(0,i.kt)("p",null,"the percent sign ('%') represents zero, one, or more characters."),(0,i.kt)("p",null,"the underscore ('_') represents a single character."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"'a'   // Precise matching, the same effect as `=`\n'%a'  // data ending with a\n'a%'  // data starting with a\n'%a%' // data containing a\n'_a_' // three digits and the middle letter is a\n'_a'  // two digits and the ending letter is a\n'a_'  // two digits and the initial letter is a\n'a__b'  // four digits, starting letter is a and ending letter is b\n")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// Return the data containing a in the k1 string\nmysql> select k1 from test where k1 like '%a%';\n+-------+\n| k1    |\n+-------+\n| a     |\n| bab   |\n+-------+\n\n// Return the data equal to a in the k1 string\nmysql> select k1 from test where k1 like 'a';\n+-------+\n| k1    |\n+-------+\n| a     |\n+-------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LIKE\n")))}p.isMDXComponent=!0}}]);