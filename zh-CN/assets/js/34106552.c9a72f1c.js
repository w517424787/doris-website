"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(i,".").concat(d)]||u[d]||f[d]||l;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={title:"PERCENTILE_APPROX",language:"zh-CN"},a=void 0,c={unversionedId:"sql-reference/sql-functions/aggregate-functions/percentile_approx",id:"version-0.15/sql-reference/sql-functions/aggregate-functions/percentile_approx",title:"PERCENTILE_APPROX",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/aggregate-functions/percentile_approx.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/percentile_approx",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/aggregate-functions/percentile_approx",draft:!1,tags:[],version:"0.15",frontMatter:{title:"PERCENTILE_APPROX",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/aggregate-functions/percentile"},next:{title:"STDDEV,STDDEV_POP",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/aggregate-functions/stddev"}},i={},p=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"percentile_approx"},"PERCENTILE_APPROX"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PERCENTILE_APPROX(expr, DOUBLE p[, DOUBLE compression])")),(0,o.kt)("p",null,"\u8fd4\u56de\u7b2cp\u4e2a\u767e\u5206\u4f4d\u70b9\u7684\u8fd1\u4f3c\u503c\uff0cp\u7684\u503c\u4ecb\u4e8e0\u52301\u4e4b\u95f4"),(0,o.kt)("p",null,"compression\u53c2\u6570\u662f\u53ef\u9009\u9879\uff0c\u53ef\u8bbe\u7f6e\u8303\u56f4\u662f","[2048, 10000]","\uff0c\u503c\u8d8a\u5927\uff0c\u7cbe\u5ea6\u8d8a\u9ad8\uff0c\u5185\u5b58\u6d88\u8017\u8d8a\u5927\uff0c\u8ba1\u7b97\u8017\u65f6\u8d8a\u957f\u3002\ncompression\u53c2\u6570\u672a\u6307\u5b9a\u6216\u8bbe\u7f6e\u7684\u503c\u5728","[2048, 10000]","\u8303\u56f4\u5916\uff0c\u4ee510000\u7684\u9ed8\u8ba4\u503c\u8fd0\u884c"),(0,o.kt)("p",null,"\u8be5\u51fd\u6570\u4f7f\u7528\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u56e0\u6b64\u5bf9\u4e8e\u9ad8\u57fa\u6570\u7684\u5217\u53ef\u4ee5\u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\uff0c\u53ef\u7528\u4e8e\u8ba1\u7b97tp99\u7b49\u7edf\u8ba1\u503c"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL > select `table`, percentile_approx(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select `table`, percentile_approx(cost_time,0.99, 4096) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99, 4096.0) |\n+----------+--------------------------------------+\n| test     |                                54.21 |\n+----------+--------------------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"PERCENTILE_APPROX,PERCENTILE,APPROX"))}f.isMDXComponent=!0}}]);