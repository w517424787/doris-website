"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[41355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||y[f]||l;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const l={title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/spatial-functions/st_polygon",id:"sql-manual/sql-functions/spatial-functions/st_polygon",title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/spatial-functions/st_polygon.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_polygon",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st_polygon",draft:!1,tags:[],version:"current",frontMatter:{title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_Point",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st_point"},next:{title:"ST_X",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st_x"}},i={},c=[{value:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",id:"st_polygonst_polyfromtextst_polygonfromtext",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"st_polygonst_polyfromtextst_polygonfromtext"},"ST_Polygon,ST_PolyFromText,ST_PolygonFromText"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GEOMETRY ST_Polygon(VARCHAR wkt)")),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2aWKT\uff08Well Known Text\uff09\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u591a\u8fb9\u5f62\u5185\u5b58\u5f62\u5f0f"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"));\n+------------------------------------------------------------------+\n| st_astext(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))')) |\n+------------------------------------------------------------------+\n| POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))                          |\n+------------------------------------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT,ST,POLYGON,POLYFROMTEXT,POLYGONFROMTEXT"))}y.isMDXComponent=!0}}]);