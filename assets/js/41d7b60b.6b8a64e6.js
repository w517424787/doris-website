"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[36486],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||s;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={title:"ST_AsBinary",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/spatial-functions/st_asbinary",id:"version-dev/sql-manual/sql-functions/spatial-functions/st_asbinary",title:"ST_AsBinary",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/spatial-functions/st_asbinary.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_asbinary",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st_asbinary",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/spatial-functions/st_asbinary.md",tags:[],version:"dev",frontMatter:{title:"ST_AsBinary",language:"en"},sidebar:"docs",previous:{title:"ST_LineFromText,ST_LineStringFromText",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st_linefromtext"},next:{title:"ST_GeometryFromWKB,ST_GeomFromWKB",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st_geometryfromwkb"}},l={},c=[{value:"ST_AsBinary",id:"st_asbinary",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"st_asbinary"},"ST_AsBinary"),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR ST_AsBinary(GEOMETRY geo)")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Converting a geometric figure into a standard WKB (Well-known binary) representation"),(0,a.kt)("p",null,"Currently supported geometric figures are: Point, LineString, Polygon."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select ST_AsBinary(st_point(24.7, 56.7));\n+----------------------------------------------+\n| st_asbinary(st_point(24.7, 56.7))            |\n+----------------------------------------------+\n| \\x01010000003333333333b338409a99999999594c40 |\n+----------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select ST_AsBinary(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"));\n+--------------------------------------------------------------------------------------+\n| st_asbinary(st_geometryfromtext('LINESTRING (1 1, 2 2)'))                            |\n+--------------------------------------------------------------------------------------+\n| \\x010200000002000000000000000000f03f000000000000f03f00000000000000400000000000000040 |\n+--------------------------------------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> select ST_AsBinary(ST_Polygon(\"POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))\"));\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| st_asbinary(st_polygon('POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))'))                                                         |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| \\x01030000000100000006000000f3380ce6af865c402d05a4fd0f8c364041ef8d2100865c403049658a398c3640b9fb1c1f2d865c409d9b36e334883640de921cb0ab865c40cf876709328a36402cefaa07cc865c407b319413ed8a3640f3380ce6af865c402d05a4fd0f8c3640 |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.02 sec)\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ST_ASBINARY,ST,ASBINARY"))}f.isMDXComponent=!0}}]);