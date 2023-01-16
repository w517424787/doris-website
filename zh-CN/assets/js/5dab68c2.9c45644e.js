"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[22773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"`ST_Point`",language:"zh-CN"},l=void 0,a={unversionedId:"sql-reference/sql-functions/spatial-functions/st_point",id:"version-0.15/sql-reference/sql-functions/spatial-functions/st_point",title:"`ST_Point`",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/spatial-functions/st_point.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_point",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/spatial-functions/st_point",draft:!1,tags:[],version:"0.15",frontMatter:{title:"`ST_Point`",language:"zh-CN"},sidebar:"docs",previous:{title:"`ST_LineFromText`,`ST_LineStringFromText`",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/spatial-functions/st_linefromtext"},next:{title:"`ST_Polygon`,`ST_PolyFromText`,`ST_PolygonFromText`",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/spatial-functions/st_polygon"}},s={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"st_point"},(0,o.kt)("inlineCode",{parentName:"h1"},"ST_Point")),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POINT ST_Point(DOUBLE x, DOUBLE y)")),(0,o.kt)("p",null,"\u901a\u8fc7\u7ed9\u5b9a\u7684X\u5750\u6807\u503c\uff0cY\u5750\u6807\u503c\u8fd4\u56de\u5bf9\u5e94\u7684Point\u3002\n\u5f53\u524d\u8fd9\u4e2a\u503c\u53ea\u662f\u5728\u7403\u9762\u96c6\u5408\u4e0a\u6709\u610f\u4e49\uff0cX/Y\u5bf9\u5e94\u7684\u662f\u7ecf\u5ea6/\u7eac\u5ea6(longitude/latitude);ps:\u76f4\u63a5select ST_Point()\u4f1a\u5361\u4e3b\uff0c\u614e\u91cd\uff01\uff01\uff01"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"ST_POINT,ST,POINT"))}f.isMDXComponent=!0}}]);