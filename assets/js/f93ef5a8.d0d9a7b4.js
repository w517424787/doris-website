"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[94389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"ST_Angle_Sphere",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/spatial-functions/st_angle_sphere",id:"version-dev/sql-manual/sql-functions/spatial-functions/st_angle_sphere",title:"ST_Angle_Sphere",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/spatial-functions/st_angle_sphere.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_angle_sphere",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st_angle_sphere",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/spatial-functions/st_angle_sphere.md",tags:[],version:"dev",frontMatter:{title:"ST_Angle_Sphere",language:"en"},sidebar:"docs",previous:{title:"ST_Azimuth",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st_azimuth"},next:{title:"ST_Area",permalink:"/docs/dev/sql-manual/sql-functions/spatial-functions/st_area"}},i={},p=[{value:"ST_Angle_Sphere",id:"st_angle_sphere",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"st_angle_sphere"},"ST_Angle_Sphere"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DOUBLE ST_Angle_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE y_lat)")),(0,a.kt)("p",null,"Calculates the central angle between two points on the Earth's surface. The incoming parameters are the longitude of point X, the latitude of point X, the longitude of point Y and the latitude of point Y."),(0,a.kt)("p",null,"x_lng and y_lng are Longitude values, must be in the range ","[-180, 180]",".\nx_lat and y_lat are Latitude values, must be in the range ","[-90, 90]","."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select ST_Angle_Sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+---------------------------------------------------------------------------+\n| st_angle_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+---------------------------------------------------------------------------+\n|                                                        0.0659823452409903 |\n+---------------------------------------------------------------------------+\n1 row in set (0.06 sec)\n\nmysql> select ST_Angle_Sphere(0, 0, 45, 0);\n+----------------------------------------+\n| st_angle_sphere(0.0, 0.0, 45.0, 0.0) |\n+----------------------------------------+\n|                                     45 |\n+----------------------------------------+\n1 row in set (0.06 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ST_ANGLE_SPHERE,ST,ANGLE,SPHERE"))}d.isMDXComponent=!0}}]);