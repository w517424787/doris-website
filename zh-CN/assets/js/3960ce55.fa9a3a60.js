"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[98006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),y=o,d=u["".concat(s,".").concat(y)]||u[y]||f[y]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},88019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"`ST_Polygon`,`ST_PolyFromText`,`ST_PolygonFromText`",language:"zh-CN"},i=void 0,a={unversionedId:"sql-reference/sql-functions/spatial-functions/st_polygon",id:"version-0.15/sql-reference/sql-functions/spatial-functions/st_polygon",title:"`ST_Polygon`,`ST_PolyFromText`,`ST_PolygonFromText`",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/spatial-functions/st_polygon.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_polygon",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/spatial-functions/st_polygon",draft:!1,tags:[],version:"0.15",frontMatter:{title:"`ST_Polygon`,`ST_PolyFromText`,`ST_PolygonFromText`",language:"zh-CN"},sidebar:"docs",previous:{title:"`ST_Point`",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/spatial-functions/st_point"},next:{title:"`ST_X`",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/spatial-functions/st_x"}},s={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"st_polygonst_polyfromtextst_polygonfromtext"},(0,o.kt)("inlineCode",{parentName:"h1"},"ST_Polygon"),",",(0,o.kt)("inlineCode",{parentName:"h1"},"ST_PolyFromText"),",",(0,o.kt)("inlineCode",{parentName:"h1"},"ST_PolygonFromText")),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GEOMETRY ST_Polygon(VARCHAR wkt)")),(0,o.kt)("p",null,"\u5c06\u4e00\u4e2aWKT\uff08Well Known Text\uff09\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u591a\u8fb9\u5f62\u5185\u5b58\u5f62\u5f0f"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"));\n+------------------------------------------------------------------+\n| st_astext(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))')) |\n+------------------------------------------------------------------+\n| POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))                          |\n+------------------------------------------------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT,ST,POLYGON,POLYFROMTEXT,POLYGONFROMTEXT"))}f.isMDXComponent=!0}}]);