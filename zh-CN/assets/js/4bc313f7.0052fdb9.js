"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[83943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"DIGITAL-MASKING",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/digital-masking",id:"sql-manual/sql-functions/digital-masking",title:"DIGITAL-MASKING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/digital-masking.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/digital-masking",permalink:"/zh-CN/docs/sql-manual/sql-functions/digital-masking",draft:!1,tags:[],version:"current",frontMatter:{title:"DIGITAL-MASKING",language:"zh-CN"},sidebar:"docs",previous:{title:"CAST",permalink:"/zh-CN/docs/sql-manual/sql-functions/cast"},next:{title:"CREATE-USER",permalink:"/zh-CN/docs/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER"}},s={},c=[{value:"DIGITAL_MASKING",id:"digital_masking",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"digital_masking"},"DIGITAL_MASKING"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"digital_masking(digital_number)\n")),(0,a.kt)("p",null,"\u522b\u540d\u51fd\u6570\uff0c\u539f\u59cb\u51fd\u6570\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"concat(left(id,3),'****',right(id,4))"),"\u3002"),(0,a.kt)("p",null,"\u5c06\u8f93\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"digital_number")," \u8fdb\u884c\u8131\u654f\u5904\u7406\uff0c\u8fd4\u56de\u906e\u76d6\u8131\u654f\u540e\u7684\u7ed3\u679c\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"digital_number")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"BIGINT")," \u6570\u636e\u7c7b\u578b\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u624b\u673a\u53f7\u7801\u8fdb\u884c\u8131\u654f\u5904\u7406"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select digital_masking(13812345678);\n+------------------------------+\n| digital_masking(13812345678) |\n+------------------------------+\n| 138****5678                  |\n+------------------------------+\n")))),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"DIGITAL_MASKING"))}d.isMDXComponent=!0}}]);