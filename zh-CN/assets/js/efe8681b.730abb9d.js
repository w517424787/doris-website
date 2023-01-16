"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3308],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=s,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||l;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},65859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const l={title:"sub_replace",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/sub_replace",id:"version-dev/sql-manual/sql-functions/string-functions/sub_replace",title:"sub_replace",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/string-functions/sub_replace.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/sub_replace",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/sub_replace",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/string-functions/sub_replace.md",tags:[],version:"dev",frontMatter:{title:"sub_replace",language:"zh-CN"},sidebar:"docs",previous:{title:"substring",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/substring"},next:{title:"append_trailing_char_if_absent",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent"}},o={},c=[{value:"sub_replace",id:"sub_replace",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"sub_replace"},"sub_replace"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"VARCHAR sub_replace(VARCHAR str, VARCHAR new_str, INT start[, INT len])")),(0,s.kt)("p",null,"\u8fd4\u56de\u7528new_str\u5b57\u7b26\u4e32\u66ff\u6362str\u4e2d\u4ecestart\u5f00\u59cb\u957f\u5ea6\u4e3alen\u7684\u65b0\u5b57\u7b26\u4e32\u3002\n\u5176\u4e2dstart,len\u4e3a\u8d1f\u6574\u6570\uff0c\u8fd4\u56deNULL, \u4e14len\u7684\u9ed8\u8ba4\u503c\u4e3anew_str\u7684\u957f\u5ea6\u3002"),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mysql> select sub_replace(\"this is origin str\",\"NEW-STR\",1);\n+-------------------------------------------------+\n| sub_replace('this is origin str', 'NEW-STR', 1) |\n+-------------------------------------------------+\n| tNEW-STRorigin str                              |\n+-------------------------------------------------+\n\nmysql> select sub_replace(\"doris\",\"***\",1,2);\n+-----------------------------------+\n| sub_replace('doris', '***', 1, 2) |\n+-----------------------------------+\n| d***is                            |\n+-----------------------------------+\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SUB_REPLACE\n")))}d.isMDXComponent=!0}}]);