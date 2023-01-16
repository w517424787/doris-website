"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[94414],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=l(n),f=i,b=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(b,a(a({ref:e},c),{},{components:n})):r.createElement(b,a({ref:e},c))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[m]="string"==typeof t?t:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69440:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"bitmap_to_string",language:"en"},a=void 0,s={unversionedId:"sql-reference/sql-functions/bitmap-functions/bitmap_to_string",id:"version-0.15/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",title:"bitmap_to_string",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/bitmap-functions/bitmap_to_string.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",permalink:"/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",draft:!1,tags:[],version:"0.15",frontMatter:{title:"bitmap_to_string",language:"en"},sidebar:"docs",previous:{title:"bitmap_not",permalink:"/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_not"},next:{title:"bitmap_union",permalink:"/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_union"}},p={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:l},m="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(m,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitmap_to_string"},"bitmap_to_string"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR BITMAP_TO_STRING(BITMAP input)")),(0,i.kt)("p",null,"Convert a input BITMAP to a string. The string is a separated string, contains all set bits in Bitmap.\nIf input is null, return null."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select bitmap_to_string(null);\n+------------------------+\n| bitmap_to_string(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nmysql> select bitmap_to_string(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_string(to_bitmap(1)) |\n+--------------------------------+\n|  1                             |\n+--------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n|  1,2                                                    |\n+---------------------------------------------------------+\n\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_TO_STRING,BITMAP\n")))}u.isMDXComponent=!0}}]);