"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={title:"regexp_extract_all",language:"en"},o=void 0,c={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp_extract_all",id:"version-dev/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all",title:"regexp_extract_all",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/string-functions/regexp/regexp_extract_all.md",tags:[],version:"dev",frontMatter:{title:"regexp_extract_all",language:"en"},sidebar:"docs",previous:{title:"regexp_extract",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp_extract"},next:{title:"regexp_replace",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp_replace"}},s={},i=[{value:"regexp_extract_all",id:"regexp_extract_all",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"regexp_extract_all"},"regexp_extract_all"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR regexp_extract_all (VARCHAR str, VARCHAR pattern)")),(0,a.kt)("p",null,"Regularly matches a string str and extracts the first sub-pattern matching part of pattern. The pattern needs to exactly match a part of str in order to return an array of strings for the part of the pattern that needs to be matched. If there is no match or the pattern has no sub-pattern, the empty string is returned."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)');\n+--------------------------------------------------------------+\n| regexp_extract_all('AbCdE', '([[:lower:]]+)C([[:lower:]]+)') |\n+--------------------------------------------------------------+\n| ['b']                                                        |\n+--------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)');\n+-----------------------------------------------------------------+\n| regexp_extract_all('AbCdEfCg', '([[:lower:]]+)C([[:lower:]]+)') |\n+-----------------------------------------------------------------+\n| ['b','f']                                                       |\n+-----------------------------------------------------------------+\n\nmysql> SELECT regexp_extract_all('abc=111, def=222, ghi=333','(\"[^\"]+\"|\\\\w+)=(\"[^\"]+\"|\\\\w+)');\n+--------------------------------------------------------------------------------+\n| regexp_extract_all('abc=111, def=222, ghi=333', '(\"[^\"]+\"|\\w+)=(\"[^\"]+\"|\\w+)') |\n+--------------------------------------------------------------------------------+\n| ['abc','def','ghi']                                                            |\n+--------------------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REGEXP_EXTRACT_ALL,REGEXP,EXTRACT,ALL\n")))}d.isMDXComponent=!0}}]);