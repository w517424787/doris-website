"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[54481],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>O});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,O=p["".concat(c,".").concat(d)]||p[d]||N[d]||i;return t?r.createElement(O,a(a({ref:n},u),{},{components:t})):r.createElement(O,a({ref:n},u))}));function O(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>N,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-ROW_NUMBER",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-ROW-NUMBER",id:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-ROW-NUMBER",title:"WINDOW-FUNCTION-ROW_NUMBER",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-ROW-NUMBER.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-ROW-NUMBER",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-ROW-NUMBER",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW-FUNCTION-ROW_NUMBER",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-LAST_VALUE",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE"},next:{title:"WINDOW-FUNCTION-WINDOW-FUNNEL",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL"}},c={},s=[{value:"WINDOW FUNCTION ROW_NUMBER",id:"window-function-row_number",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function N(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-row_number"},"WINDOW FUNCTION ROW_NUMBER"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"\u4e3a\u6bcf\u4e2a Partition \u7684\u6bcf\u4e00\u884c\u8fd4\u56de\u4e00\u4e2a\u4ece1\u5f00\u59cb\u8fde\u7eed\u9012\u589e\u7684\u6574\u6570\u3002\u4e0e RANK() \u548c DENSE_RANK() \u4e0d\u540c\u7684\u662f\uff0cROW_NUMBER() \u8fd4\u56de\u7684\u503c\u4e0d\u4f1a\u91cd\u590d\u4e5f\u4e0d\u4f1a\u51fa\u73b0\u7a7a\u7f3a\uff0c\u662f\u8fde\u7eed\u9012\u589e\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ROW_NUMBER() OVER(partition_by_clause order_by_clause)\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select x, y, row_number() over(partition by x order by y) as rank from int_t;\n\n| x | y    | rank     |\n|---|------|----------|\n| 1 | 1    | 1        |\n| 1 | 2    | 2        |\n| 1 | 2    | 3        |\n| 2 | 1    | 1        |\n| 2 | 2    | 2        |\n| 2 | 3    | 3        |\n| 3 | 1    | 1        |\n| 3 | 1    | 2        |\n| 3 | 2    | 3        |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,ROW_NUMBER\n")))}N.isMDXComponent=!0}}]);