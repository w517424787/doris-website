"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[36769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,k=u["".concat(s,".").concat(h)]||u[h]||d[h]||l;return r?a.createElement(k,n(n({ref:t},c),{},{components:r})):a.createElement(k,n({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,n=new Array(l);n[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,n[1]=o;for(var p=2;p<l;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},39793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const l={title:"\u6700\u4f73\u5b9e\u8df5: Apache Doris \u5728\u5c0f\u7c73\u6570\u636e\u573a\u666f\u7684\u5e94\u7528\u5b9e\u8df5\u4e0e\u4f18\u5316",summary:"\u5c0f\u7c73\u96c6\u56e2\u4e8e 2019 \u5e74\u9996\u6b21\u5f15\u5165\u4e86 Apache Doris \uff0c\u76ee\u524d Apache Doris \u5df2\u7ecf\u5728\u5c0f\u7c73\u5185\u90e8\u6570\u5341\u4e2a\u4e1a\u52a1\u4e2d\u5f97\u5230\u5e7f\u6cdb\u5e94\u7528\uff0c\u5e76\u4e14\u5728\u5c0f\u7c73\u5185\u90e8\u5df2\u7ecf\u5f62\u6210\u4e00\u5957\u4ee5 Apache Doris \u4e3a\u6838\u5fc3\u7684\u6570\u636e\u751f\u6001\u3002\u672c\u7bc7\u6587\u7ae0\u8f6c\u5f55\u81ea Doris \u793e\u533a\u7ebf\u4e0a Meetup \u4e3b\u9898\u6f14\u8bb2\uff0c\u65e8\u5728\u5206\u4eab Apache Doris \u5728\u5c0f\u7c73\u6570\u636e\u573a\u666f\u7684\u843d\u5730\u5b9e\u8df5\u4e0e\u4f18\u5316\u5b9e\u8df5",date:"2022-12-08",author:"\u9b4f\u795a",tags:["\u6700\u4f73\u5b9e\u8df5"]},n=void 0,o={permalink:"/zh-CN/blog/xiaomi_vector",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/xiaomi_vector.md",title:"\u6700\u4f73\u5b9e\u8df5: Apache Doris \u5728\u5c0f\u7c73\u6570\u636e\u573a\u666f\u7684\u5e94\u7528\u5b9e\u8df5\u4e0e\u4f18\u5316",description:"\x3c!--",date:"2022-12-08T00:00:00.000Z",formattedDate:"2022\u5e7412\u67088\u65e5",tags:[{label:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u6700\u4f73\u5b9e\u8df5"}],truncated:!1,authors:[{name:"\u9b4f\u795a"}],frontMatter:{title:"\u6700\u4f73\u5b9e\u8df5: Apache Doris \u5728\u5c0f\u7c73\u6570\u636e\u573a\u666f\u7684\u5e94\u7528\u5b9e\u8df5\u4e0e\u4f18\u5316",summary:"\u5c0f\u7c73\u96c6\u56e2\u4e8e 2019 \u5e74\u9996\u6b21\u5f15\u5165\u4e86 Apache Doris \uff0c\u76ee\u524d Apache Doris \u5df2\u7ecf\u5728\u5c0f\u7c73\u5185\u90e8\u6570\u5341\u4e2a\u4e1a\u52a1\u4e2d\u5f97\u5230\u5e7f\u6cdb\u5e94\u7528\uff0c\u5e76\u4e14\u5728\u5c0f\u7c73\u5185\u90e8\u5df2\u7ecf\u5f62\u6210\u4e00\u5957\u4ee5 Apache Doris \u4e3a\u6838\u5fc3\u7684\u6570\u636e\u751f\u6001\u3002\u672c\u7bc7\u6587\u7ae0\u8f6c\u5f55\u81ea Doris \u793e\u533a\u7ebf\u4e0a Meetup \u4e3b\u9898\u6f14\u8bb2\uff0c\u65e8\u5728\u5206\u4eab Apache Doris \u5728\u5c0f\u7c73\u6570\u636e\u573a\u666f\u7684\u843d\u5730\u5b9e\u8df5\u4e0e\u4f18\u5316\u5b9e\u8df5",date:"2022-12-08",author:"\u9b4f\u795a",tags:["\u6700\u4f73\u5b9e\u8df5"]},prevItem:{title:"Doris on Es\u5728\u5feb\u624b\u5546\u4e1a\u5316\u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/BestPractice_Kwai"},nextItem:{title:"[Doris \u53d1\u7248\u901a\u544a] Apache Doris 1.2.0 Release",permalink:"/zh-CN/blog/release-1.2.0"}},s={authorsImageUrls:[void 0]},p=[{value:"\u5386\u53f2\u67b6\u6784",id:"\u5386\u53f2\u67b6\u6784",level:2},{value:"\u7b2c\u4e00\u4e2a\u95ee\u9898\uff1a\u7ec4\u4ef6\u5206\u6563",id:"\u7b2c\u4e00\u4e2a\u95ee\u9898\u7ec4\u4ef6\u5206\u6563",level:3},{value:"\u7b2c\u4e8c\u4e2a\u95ee\u9898\uff1a\u8d44\u6e90\u5360\u7528\u9ad8",id:"\u7b2c\u4e8c\u4e2a\u95ee\u9898\u8d44\u6e90\u5360\u7528\u9ad8",level:3},{value:"\u91cd\u65b0\u9009\u578b",id:"\u91cd\u65b0\u9009\u578b",level:2},{value:"\u57fa\u4e8e Apache Doris \u7684\u65b0\u7248\u67b6\u6784",id:"\u57fa\u4e8e-apache-doris-\u7684\u65b0\u7248\u67b6\u6784",level:2},{value:"\u65b0\u65e7\u67b6\u6784\u6027\u80fd\u5bf9\u6bd4",id:"\u65b0\u65e7\u67b6\u6784\u6027\u80fd\u5bf9\u6bd4",level:2},{value:"\u6570\u636e\u5bfc\u5165",id:"\u6570\u636e\u5bfc\u5165",level:2},{value:"\u6570\u636e\u67e5\u8be2",id:"\u6570\u636e\u67e5\u8be2",level:2},{value:"A/B\u6d4b\u8bd5",id:"ab\u6d4b\u8bd5",level:2},{value:"\u4e0a\u7ebf\u524d\u9a8c\u8bc1",id:"\u4e0a\u7ebf\u524d\u9a8c\u8bc1",level:3},{value:"\u5355 SQL \u4e32\u884c\u67e5\u8be2\u6d4b\u8bd5",id:"\u5355-sql-\u4e32\u884c\u67e5\u8be2\u6d4b\u8bd5",level:4},{value:"\u8c03\u4f18\u6d4b\u8bd5\u7ed3\u679c",id:"\u8c03\u4f18\u6d4b\u8bd5\u7ed3\u679c",level:3},{value:"\u6d4b\u8bd5 1",id:"\u6d4b\u8bd5-1",level:4},{value:"\u6d4b\u8bd5 2",id:"\u6d4b\u8bd5-2",level:4},{value:"\u6d4b\u8bd5 3",id:"\u6d4b\u8bd5-3",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5bfc\u8bfb\uff1a\u5c0f\u7c73\u96c6\u56e2\u4e8e 2019 \u5e74\u9996\u6b21\u5f15\u5165\u4e86 Apache Doris \uff0c\u76ee\u524d Apache Doris \u5df2\u7ecf\u5728\u5c0f\u7c73\u5185\u90e8\u6570\u5341\u4e2a\u4e1a\u52a1\u4e2d\u5f97\u5230\u5e7f\u6cdb\u5e94\u7528\uff0c\u5e76\u4e14\u5728\u5c0f\u7c73\u5185\u90e8\u5df2\u7ecf\u5f62\u6210\u4e00\u5957\u4ee5 Apache Doris \u4e3a\u6838\u5fc3\u7684\u6570\u636e\u751f\u6001\u3002\u672c\u7bc7\u6587\u7ae0\u8f6c\u5f55\u81ea Doris \u793e\u533a\u7ebf\u4e0a Meetup \u4e3b\u9898\u6f14\u8bb2\uff0c\u65e8\u5728\u5206\u4eab Apache Doris \u5728\u5c0f\u7c73\u6570\u636e\u573a\u666f\u7684\u843d\u5730\u5b9e\u8df5\u4e0e\u4f18\u5316\u5b9e\u8df5\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005\uff5c\u9b4f\u795a \u5c0f\u7c73 OLAP \u5f15\u64ce\u7814\u53d1\u5de5\u7a0b\u5e08 ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kv",src:r(57621).Z,width:"900",height:"383"})),(0,i.kt)("h1",{id:"\u5173\u4e8e\u5c0f\u7c73"},"\u5173\u4e8e\u5c0f\u7c73"),(0,i.kt)("p",null,"\u5c0f\u7c73\u516c\u53f8\uff08\u201c\u5c0f\u7c73\u201d\u6216\u201c\u96c6\u56e2\u201d\uff1bHKG\uff1a1810\uff09\uff0c\u4e00\u5bb6\u6d88\u8d39\u7535\u5b50\u548c\u667a\u80fd\u5236\u9020\u516c\u53f8\uff0c\u5176\u667a\u80fd\u624b\u673a\u548c\u667a\u80fd\u786c\u4ef6\u901a\u8fc7\u7269\u8054\u7f51 (IoT) \u5e73\u53f0\u8fde\u63a5\u3002 2021\u5e74\uff0c\u5c0f\u7c73\u603b\u6536\u5165\u8fbe\u5230\u4eba\u6c11\u5e013283\u4ebf\u5143\uff084722.3131.62\u4ebf\u7f8e\u5143\uff09\uff0c\u540c\u6bd4\u589e\u957f33.5%\uff1b\u8c03\u6574\u540e\u51c0\u5229\u6da6\u4e3a\u4eba\u6c11\u5e01 220 \u4ebf\u5143\uff08316,451.08 \u4e07\u7f8e\u5143\uff09\uff0c\u540c\u6bd4\u589e\u957f 69.5%\u3002"),(0,i.kt)("p",null,"\u56e0\u5206\u6790\u4e1a\u52a1\u7684\u589e\u957f\uff0c\u5c0f\u7c73\u96c6\u56e2\u4e8e 2019 \u5e74\u9996\u6b21\u5f15\u5165\u4e86 Apache Doris \u3002\u7ecf\u8fc7\u4e09\u5e74\u65f6\u95f4\u7684\u53d1\u5c55\uff0c\u76ee\u524d Apache Doris \u5df2\u7ecf\u5728\u5e7f\u544a\u6295\u653e\u3001\u65b0\u96f6\u552e\u3001\u589e\u957f\u5206\u6790\u3001\u6570\u636e\u770b\u677f\u3001\u7528\u6237\u753b\u50cf\u3001\u5929\u661f\u6570\u79d1\u3001\u5c0f\u7c73\u6709\u54c1\u3001\u7b49\u5c0f\u7c73\u5185\u90e8\u6570\u5341\u4e2a\u4e1a\u52a1\u548c\u54c1\u724c\u4e2d\u5f97\u5230\u5e7f\u6cdb\u5e94\u7528\uff0c\u5e76\u4e14\u5728\u5c0f\u7c73\u5185\u90e8\u5df2\u7ecf\u56f4\u7ed5 Apache Doris \u4e3a\u6838\u5fc3\u5efa\u8bbe\u4e86\u6570\u636e\u751f\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1",src:r(38471).Z,width:"1080",height:"600"})),(0,i.kt)("p",null,"\u5f53\u524d Apache Doris \u5728\u5c0f\u7c73\u5185\u90e8\u5df2\u7ecf\u5177\u6709\u6570\u5341\u4e2a\u96c6\u7fa4\u3001\u603b\u4f53\u8fbe\u5230\u6570\u767e\u53f0 BE \u8282\u70b9\u7684\u89c4\u6a21\uff0c\u5176\u4e2d\u5355\u96c6\u7fa4\u6700\u5927\u89c4\u6a21\u8fbe\u5230\u8fd1\u767e\u53f0\u8282\u70b9\uff0c\u62e5\u6709\u6570\u5341\u4e2a\u5b9e\u65f6\u6570\u636e\u540c\u6b65\u4efb\u52a1\uff0c\u6bcf\u65e5\u5355\u8868\u6700\u5927\u589e\u91cf 120 \u4ebf\u3001\u652f\u6301 PB \u7ea7\u522b\u5b58\u50a8\uff0c\u5355\u96c6\u7fa4\u6bcf\u5929\u53ef\u4ee5\u652f\u6301 2W \u6b21\u4ee5\u4e0a\u7684\u591a\u7ef4\u5206\u6790\u67e5\u8be2\u3002"),(0,i.kt)("h1",{id:"\u67b6\u6784\u6f14\u8fdb"},"\u67b6\u6784\u6f14\u8fdb"),(0,i.kt)("p",null,"\u5c0f\u7c73\u5f15\u5165 Apache Doris \u7684\u521d\u8877\u662f\u4e3a\u4e86\u89e3\u51b3\u5185\u90e8\u7684\u7528\u6237\u884c\u4e3a\u5206\u6790\u4e2d\u6240\u9047\u5230\u7684\u95ee\u9898\u3002\u968f\u7740\u5c0f\u7c73\u4e92\u8054\u7f51\u4e1a\u52a1\u7684\u53d1\u5c55\uff0c\u5229\u7528\u7528\u6237\u884c\u4e3a\u6570\u636e\u8fdb\u884c\u589e\u957f\u5206\u6790\u7684\u9700\u6c42\u8d8a\u6765\u8d8a\u5f3a\u70c8\u3002\u5982\u679c\u6bcf\u4e2a\u4e1a\u52a1\u4ea7\u54c1\u7ebf\u90fd\u81ea\u5df1\u642d\u5efa\u4e00\u5957\u589e\u957f\u5206\u6790\u7cfb\u7edf\uff0c\u4e0d\u4ec5\u6210\u672c\u9ad8\u6602\uff0c\u6548\u7387\u4e5f\u4e0d\u9ad8\u3002\u56e0\u6b64\u5982\u679c\u80fd\u6709\u4e00\u6b3e\u4ea7\u54c1\u80fd\u591f\u5e2e\u52a9\u4ed6\u4eec\u4e0d\u7528\u5173\u5fc3\u5e95\u5c42\u7684\u590d\u6742\u6280\u672f\u7ec6\u8282\uff0c\u8ba9\u76f8\u5173\u4e1a\u52a1\u4eba\u5458\u80fd\u591f\u4e13\u6ce8\u4e8e\u81ea\u5df1\u7684\u6280\u672f\u5de5\u4f5c\uff0c\u53ef\u4ee5\u6781\u5927\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u3002\u6240\u4ee5\uff0c\u5c0f\u7c73\u5927\u6570\u636e\u548c\u4e91\u5e73\u53f0\u8054\u5408\u5f00\u53d1\u4e86\u589e\u957f\u5206\u6790\u7cfb\u7edf Growing Analytics\uff08\u4e0b\u6587\u4e2d\u7b80\u79f0 GA)\uff0c\u65e8\u5728\u63d0\u4f9b\u4e00\u4e2a\u7075\u6d3b\u7684\u591a\u7ef4\u5b9e\u65f6\u67e5\u8be2\u548c\u5206\u6790\u5e73\u53f0\uff0c\u53ef\u4ee5\u7edf\u4e00\u7ba1\u7406\u6570\u636e\u63a5\u5165\u548c\u67e5\u8be2\u65b9\u6848\uff0c\u5e2e\u52a9\u4e1a\u52a1\u7ebf\u505a\u597d\u7cbe\u7ec6\u5316\u8fd0\u8425\u3002"),(0,i.kt)("h2",{id:"\u5386\u53f2\u67b6\u6784"},"\u5386\u53f2\u67b6\u6784"),(0,i.kt)("p",null,"\u589e\u957f\u5206\u6790\u5e73\u53f0\u7acb\u9879\u4e8e 2018 \u5e74\u5e74\u4e2d\uff0c\u5f53\u65f6\u57fa\u4e8e\u5f00\u53d1\u65f6\u95f4\u548c\u6210\u672c\uff0c\u6280\u672f\u6808\u7b49\u56e0\u7d20\u7684\u8003\u8651\uff0c\u5c0f\u7c73\u590d\u7528\u4e86\u73b0\u6709\u5404\u79cd\u5927\u6570\u636e\u57fa\u7840\u7ec4\u4ef6\uff08HDFS, Kudu, SparkSQL \u7b49\uff09\uff0c\u642d\u5efa\u4e86\u4e00\u5957\u57fa\u4e8e Lamda \u67b6\u6784\u7684\u589e\u957f\u5206\u6790\u67e5\u8be2\u7cfb\u7edf\u3002GA \u7cfb\u7edf\u521d\u4ee3\u7248\u672c\u7684\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5305\u542b\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\uff1a\u6570\u636e\u6e90\u662f\u524d\u7aef\u7684\u57cb\u70b9\u6570\u636e\u4ee5\u53ca\u7528\u6237\u884c\u4e3a\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u63a5\u5165\u5c42\uff1a\u5bf9\u57cb\u70b9\u6570\u636e\u8fdb\u884c\u7edf\u4e00\u7684\u6e05\u6d17\u540e\u5199\u5165\u5c0f\u7c73\u5185\u90e8\u81ea\u7814\u7684\u6d88\u606f\u961f\u5217\u4e2d\uff0c\u5e76\u901a\u8fc7 Spark Streaming \u5c06\u6570\u636e\u5bfc\u5165Kudu \u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5c42\uff1a\u5728\u5b58\u50a8\u5c42\u4e2d\u8fdb\u884c\u51b7\u70ed\u6570\u636e\u5206\u79bb\u3002\u70ed\u6570\u636e\u5b58\u653e\u5728 Kudu \u4e2d\uff0c\u51b7\u6570\u636e\u5219\u4f1a\u5b58\u653e\u5728 HDFS \u4e0a\u3002\u540c\u65f6\u5728\u5b58\u50a8\u5c42\u4e2d\u8fdb\u884c\u5206\u533a\uff0c\u5f53\u5206\u533a\u5355\u4f4d\u4e3a\u5929\u65f6\uff0c\u6bcf\u665a\u4f1a\u5c06\u4e00\u90e8\u5206\u6570\u636e\u8f6c\u51b7\u5e76\u5b58\u50a8\u5230 HDFS \u4e0a\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5c42/\u67e5\u8be2\u5c42\uff1a\u5728\u67e5\u8be2\u5c42\u4e2d\uff0c\u4f7f\u7528 SparkSQL \u5bf9 Kudu \u4e0e HDFS \u4e0a\u6570\u636e\u8fdb\u884c\u8054\u90a6\u67e5\u8be2\uff0c\u6700\u7ec8\u628a\u67e5\u8be2\u7ed3\u679c\u663e\u793a\u5728\u524d\u7aef\u9875\u9762\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2",src:r(83733).Z,width:"1080",height:"603"})),(0,i.kt)("p",null,"\u5728\u5f53\u65f6\u7684\u5386\u53f2\u80cc\u666f\u4e0b\uff0c\u521d\u4ee3\u7248\u672c\u7684\u589e\u957f\u5206\u6790\u5e73\u53f0\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\u4e86\u4e00\u7cfb\u5217\u7528\u6237\u8fd0\u8425\u8fc7\u7a0b\u4e2d\u7684\u95ee\u9898\uff0c\u4f46\u540c\u65f6\u5728\u5386\u53f2\u67b6\u6784\u4e2d\u4e5f\u5b58\u5728\u4e86\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,i.kt)("h3",{id:"\u7b2c\u4e00\u4e2a\u95ee\u9898\u7ec4\u4ef6\u5206\u6563"},"\u7b2c\u4e00\u4e2a\u95ee\u9898\uff1a\u7ec4\u4ef6\u5206\u6563"),(0,i.kt)("p",null,"\u7531\u4e8e\u5386\u53f2\u67b6\u6784\u662f\u57fa\u4e8e SparkSQL + Kudu + HDFS \u7684\u7ec4\u5408\uff0c\u4f9d\u8d56\u7684\u7ec4\u4ef6\u8fc7\u591a\u5bfc\u81f4\u8fd0\u7ef4\u6210\u672c\u8f83\u9ad8\u3002\u539f\u672c\u7684\u8bbe\u8ba1\u662f\u5404\u4e2a\u7ec4\u4ef6\u90fd\u4f7f\u7528\u516c\u5171\u96c6\u7fa4\u7684\u8d44\u6e90\uff0c\u4f46\u662f\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u6267\u884c\u67e5\u8be2\u4f5c\u4e1a\u7684\u8fc7\u7a0b\u4e2d\uff0c\u67e5\u8be2\u6027\u80fd\u5bb9\u6613\u53d7\u5230\u516c\u5171\u96c6\u7fa4\u5176\u4ed6\u4f5c\u4e1a\u7684\u5f71\u54cd\uff0c\u5bb9\u6613\u53d1\u751f\u67e5\u8be2\u6296\u52a8\uff0c\u5c24\u5176\u5728\u8bfb\u53d6 HDFS \u516c\u5171\u96c6\u7fa4\u7684\u6570\u636e\u65f6\uff0c\u6709\u65f6\u8f83\u4e3a\u7f13\u6162\u3002"),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u4e2a\u95ee\u9898\u8d44\u6e90\u5360\u7528\u9ad8"},"\u7b2c\u4e8c\u4e2a\u95ee\u9898\uff1a\u8d44\u6e90\u5360\u7528\u9ad8"),(0,i.kt)("p",null,"\u901a\u8fc7 SparkSQL \u8fdb\u884c\u67e5\u8be2\u65f6\uff0c\u5ef6\u8fdf\u76f8\u5bf9\u8f83\u9ad8\u3002SparkSQL \u662f\u57fa\u4e8e\u6279\u5904\u7406\u7cfb\u7edf\u8bbe\u8ba1\u7684\u67e5\u8be2\u5f15\u64ce\uff0c\u5728\u6bcf\u4e2a Stage \u4e4b\u95f4\u4ea4\u6362\u6570\u636e Shuffle \u7684\u8fc7\u7a0b\u4e2d\u4f9d\u7136\u9700\u8981\u8fdb\u884c\u843d\u76d8\uff0c\u5b8c\u6210 SQL \u67e5\u8be2\u7684\u65f6\u5ef6\u8f83\u9ad8\u3002\u4e3a\u4e86\u4fdd\u8bc1 SQL \u67e5\u8be2\u4e0d\u53d7\u8d44\u6e90\u7684\u5f71\u54cd\uff0c\u6211\u4eec\u901a\u8fc7\u6dfb\u52a0\u673a\u5668\u6765\u4fdd\u8bc1\u67e5\u8be2\u6027\u80fd\uff0c\u4f46\u662f\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\u53d1\u73b0\uff0c\u6027\u80fd\u63d0\u5347\u7684\u7a7a\u95f4\u6709\u9650\uff0c\u8fd9\u5957\u89e3\u51b3\u65b9\u6848\u5e76\u4e0d\u80fd\u5145\u5206\u5730\u5229\u7528\u673a\u5668\u8d44\u6e90\u6765\u8fbe\u5230\u9ad8\u6548\u67e5\u8be2\u7684\u76ee\u7684\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u8d44\u6e90\u6d6a\u8d39\u3002"),(0,i.kt)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u4e24\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u7684\u76ee\u6807\u662f\u5bfb\u6c42\u4e00\u6b3e\u8ba1\u7b97\u3001\u5b58\u50a8\u4e00\u4f53\u7684 MPP \u6570\u636e\u5e93\u6765\u66ff\u4ee3\u6211\u4eec\u76ee\u524d\u7684\u5b58\u50a8\u8ba1\u7b97\u5c42\u7684\u7ec4\u4ef6\uff0c\u5728\u901a\u8fc7\u6280\u672f\u9009\u578b\u540e\uff0c\u6700\u7ec8\u6211\u4eec\u51b3\u5b9a\u4f7f\u7528 Apache Doris \u66ff\u6362\u8001\u4e00\u4ee3\u5386\u53f2\u67b6\u6784\u3002"),(0,i.kt)("h2",{id:"\u91cd\u65b0\u9009\u578b"},"\u91cd\u65b0\u9009\u578b"),(0,i.kt)("p",null,"MPP\u67b6\u6784\u7684\u67e5\u8be2\u5f15\u64ce\uff0c\u5982Impala,Presto\u7b49\u80fd\u591f\u9ad8\u6548\u5730\u652f\u6301SQL\u67e5\u8be2\uff0c\u4f46\u662f\u4ecd\u7136\u9700\u8981\u4f9d\u8d56Kudu, HDFS, Hive Metastore\u7b49\u7ec4\u4ef6, \u8fd0\u7ef4\u6210\u672c\u4f9d\u7136\u6bd4\u8f83\u9ad8\u3002\u540c\u65f6\uff0c\u7531\u4e8e\u8ba1\u7b97\u5b58\u50a8\u5206\u79bb\uff0c\u67e5\u8be2\u5f15\u64ce\u4e0d\u80fd\u5f88\u597d\u5730\u53ca\u65f6\u611f\u77e5\u5b58\u50a8\u5c42\u7684\u6570\u636e\u53d8\u5316\uff0c\u5c31\u65e0\u6cd5\u505a\u66f4\u7ec6\u81f4\u7684\u67e5\u8be2\u4f18\u5316\u3002\u5982\u60f3\u5728SQL\u5c42\u505a\u7f13\u5b58\u5c31\u65e0\u6cd5\u4fdd\u8bc1\u67e5\u8be2\u7684\u7ed3\u679c\u662f\u6700\u65b0\u7684\u3002"),(0,i.kt)("p",null,"Doris\u662fApache\u57fa\u91d1\u4f1a\u9876\u7ea7\u9879\u76ee\uff0c\u4e3b\u8981\u5b9a\u4f4d\u662f\u9ad8\u6027\u80fd\u7684\u3001\u652f\u6301\u5b9e\u65f6\u7684\u5206\u6790\u578b\u6570\u636e\u5e93\uff0c \u4e3b\u8981\u7528\u4e8e\u89e3\u51b3\u62a5\u8868\u548c\u591a\u7ef4\u5206\u6790\u3002\u5b83\u4e3b\u8981\u96c6\u6210\u4e86 Google Mesa \u548c Cloudera Impala \u6280\u672f\u3002\u6211\u4eec\u5bf9Doris\u8fdb\u884c\u4e86\u5185\u90e8\u7684\u6027\u80fd\u6d4b\u8bd5\u5e76\u591a\u6b21\u548c\u793e\u533a\u6c9f\u901a\u4ea4\u6d41\uff0c\u786e\u5b9a\u4e86\u7528Doris\u66ff\u6362\u539f\u6765\u7684\u8ba1\u7b97\u5b58\u50a8\u7ec4\u4ef6\u7684\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u65b0\u7684\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,i.kt)("h2",{id:"\u57fa\u4e8e-apache-doris-\u7684\u65b0\u7248\u67b6\u6784"},"\u57fa\u4e8e Apache Doris \u7684\u65b0\u7248\u67b6\u6784"),(0,i.kt)("p",null,"\u65b0\u7248\u67b6\u6784\u4ece\u6570\u636e\u6e90\u83b7\u53d6\u57cb\u70b9\u6570\u636e\u540e\uff0c\u6570\u636e\u63a5\u5165\u540e\u5199\u5165 Apache Doris \u540e\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2\u7ed3\u679c\u5e76\u5728\u524d\u7aef\u8fdb\u884c\u663e\u793a\u3002\u771f\u6b63\u5b9e\u73b0\u4e86\u901a\u8fc7Doris\u7edf\u4e00\u4e86\u8ba1\u7b97\u3001\u5b58\u50a8\uff0c\u548c\u8d44\u6e90\u7ba1\u7406yarn\u76f8\u5173\u5de5\u5177\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3",src:r(45505).Z,width:"1080",height:"598"})),(0,i.kt)("p",null,"\u6211\u4eec\u9009\u62e9 Doris \u539f\u56e0\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Doris \u5177\u6709\u4f18\u79c0\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u80fd\u591f\u6ee1\u8db3\u4e1a\u52a1\u9700\u6c42\u3002"),(0,i.kt)("li",{parentName:"ul"},"Doris \u652f\u6301\u6807\u51c6 SQL \uff0c\u7528\u6237\u4f7f\u7528\u4e0e\u5b66\u4e60\u6210\u672c\u8f83\u4f4e\u3002"),(0,i.kt)("li",{parentName:"ul"},"Doris \u4e0d\u4f9d\u8d56\u4e8e\u5176\u4ed6\u7684\u5916\u90e8\u7cfb\u7edf\uff0c\u8fd0\u7ef4\u7b80\u5355\u3002"),(0,i.kt)("li",{parentName:"ul"},"Doris \u793e\u533a\u62e5\u6709\u5f88\u9ad8\u6d3b\u8dc3\u5ea6\uff0c\u7248\u672c\u8fed\u4ee3\u5feb\u3002\u5f00\u53d1\u8005\u89c4\u6a21\u5927\uff0c\u6709\u5229\u4e8e\u540e\u7eed\u7cfb\u7edf\u7684\u7ef4\u62a4\u5347\u7ea7\u3002")),(0,i.kt)("h2",{id:"\u65b0\u65e7\u67b6\u6784\u6027\u80fd\u5bf9\u6bd4"},"\u65b0\u65e7\u67b6\u6784\u6027\u80fd\u5bf9\u6bd4"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"4",src:r(45918).Z,width:"1061",height:"546"})),(0,i.kt)("p",null,"\u6211\u4eec\u9009\u53d6\u4e86\u65e5\u5747\u6570\u636e\u91cf\u5927\u7ea6 10 \u4ebf\u7684\u4e1a\u52a1\uff0c\u5206\u522b\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u5bf9Doris\u8fdb\u884c\u4e86\u6027\u80fd\u6d4b\u8bd5\uff0c\u5176\u4e2d\u5305\u542b 6 \u4e2a\u4e8b\u4ef6\u5206\u6790\u573a\u666f\uff0c3 \u4e2a\u7559\u5b58\u5206\u6790\u573a\u666f\u4ee5\u53ca 3 \u4e2a\u6f0f\u6597\u5206\u6790\u573a\u666f\u3002\u7ecf\u8fc7\u4e0e\u3010SparkSQL+Kudu+HDFS\u3011\u7684\u65e7\u65b9\u6848\u5bf9\u6bd4\u540e\uff0c\u6211\u4eec\u53d1\u73b0\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u4e8b\u4ef6\u5206\u6790\u7684\u573a\u666f\u4e0b\uff0c\u5e73\u5747\u67e5\u8be2\u6240\u8017\u65f6\u95f4\u964d\u4f4e\u4e86 85%\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u7559\u5b58\u5206\u6790\u548c\u6f0f\u6597\u5206\u6790\u573a\u666f\u4e0b\uff0c\u5e73\u5747\u67e5\u8be2\u6240\u8017\u65f6\u95f4\u964d\u4f4e\u4e86 50%\u3002")),(0,i.kt)("h1",{id:"\u5e94\u7528\u5b9e\u8df5"},"\u5e94\u7528\u5b9e\u8df5"),(0,i.kt)("p",null,"\u4e0b\u9762\u5c06\u4ecb\u7ecd\u6211\u4eec\u5728Apache Doris\u5e94\u7528\u4e2d\u6570\u636e\u5bfc\u5165\u3001\u6570\u636e\u67e5\u8be2\u3001A/B\u6d4b\u8bd5\u7684\u7ecf\u9a8c\u3002"),(0,i.kt)("h2",{id:"\u6570\u636e\u5bfc\u5165"},"\u6570\u636e\u5bfc\u5165"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"5",src:r(82674).Z,width:"1080",height:"607"})),(0,i.kt)("p",null,"\u5c0f\u7c73\u5185\u90e8\u4e3b\u8981\u901a\u8fc7 Stream Load \u4e0e Broker Load \u4ee5\u53ca\u5c11\u91cf Insert \u65b9\u5f0f\u6765\u5bfc\u5165\u6570\u636e\u5230Doris\u3002\u6570\u636e\u4e00\u822c\u4f1a\u5148\u5199\u5165\u5230\u6d88\u606f\u961f\u5217\u4e2d\uff0c\u5206\u4e3a\u5b9e\u65f6\u6570\u636e\u548c\u79bb\u7ebf\u6570\u636e\u4e24\u4e2a\u90e8\u5206\u3002\n\u5b9e\u65f6\u6570\u636e\u5982\u4f55\u5199\u5165\u5230Apache Doris \u4e2d\uff1a\u4e00\u90e8\u5206\u5b9e\u65f6\u6570\u636e\u901a\u8fc7 Flink\u6570\u636e\u5904\u7406 \u540e\uff0c \u5e76\u901a\u8fc7 Doris \u793e\u533a\u63d0\u4f9b\u7684 Flink Doris Connector \u7ec4\u4ef6\u5199\u5165\u5230 Doris \u4e2d\u3002\u53e6\u4e00\u90e8\u5206\u6570\u636e\u901a\u8fc7 Spark Streaming \u7ec4\u4ef6\u5199\u5165\u3002\u8fd9\u4e24\u79cd\u5199\u5165\u65b9\u5f0f\u7684\u5e95\u5c42\u90fd\u4f9d\u8d56\u7684\u662f\u793e\u533a\u63d0\u4f9b\u7684 Stream Load\u3002\n\u79bb\u7ebf\u6570\u636e\u5982\u4f55\u5199\u5165\u5230Apache Doris \u4e2d\uff1a\u79bb\u7ebf\u6570\u636e\u90e8\u5206\u5199\u5165 Hive \u540e\uff0c\u901a\u8fc7\u5c0f\u7c73\u7684\u6570\u636e\u5de5\u573a\u5c06\u6570\u636e\u5bfc\u5165\u5230 Doris \u4e2d\u3002\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u5728\u6570\u636e\u5de5\u573a\u63d0\u4ea4 Broker Load \u4efb\u52a1\u5e76\u5c06\u6570\u636e\u76f4\u63a5\u5bfc\u5165 Doris \u4e2d\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 Spark SQL \u5c06\u6570\u636e\u5bfc\u5165 \u3002Spark SQL \u65b9\u5f0f\u5219\u662f\u4f9d\u8d56\u4e86 Doris \u793e\u533a\u63d0\u4f9b\u7684 Spark Doris Connector \u7ec4\u4ef6\uff0c\u5176\u5e95\u5c42\u4e3a Doris \u7684 Stream Load \u7684\u5c01\u88c5\u3002"),(0,i.kt)("h2",{id:"\u6570\u636e\u67e5\u8be2"},"\u6570\u636e\u67e5\u8be2"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"6",src:r(33403).Z,width:"1080",height:"596"})),(0,i.kt)("p",null,"\u7528\u6237\u901a\u8fc7\u6570\u636e\u5de5\u573a\u5c06\u6570\u636e\u5bfc\u5165\u81f3 Doris \u540e\u5373\u53ef\u8fdb\u884c\u67e5\u8be2\u3002\u5728\u5c0f\u7c73\u5185\u90e8\uff0c\u53ef\u4ee5\u901a\u8fc7\u81ea\u7814\u7684\u6570\u9cb8\u5e73\u53f0\u8fdb\u884c\u67e5\u8be2\u7684\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u6570\u9cb8\u5e73\u53f0\u5bf9 Doris \u8fdb\u884c\u53ef\u89c6\u5316\u7684\u67e5\u8be2\uff0c\u5e76\u5c55\u5f00\u7528\u6237\u884c\u4e3a\u5206\u6790\u548c\u7528\u6237\u753b\u50cf\u5206\u6790\u3002\u5176\u4e2d\uff0c\u4e3a\u5e2e\u52a9\u4e1a\u52a1\u8fdb\u884c\u4e8b\u4ef6\u5206\u6790\u3001\u7559\u5b58\u5206\u6790\u3001\u6f0f\u6597\u5206\u6790\u3001\u8def\u5f84\u5206\u6790\u7b49\u884c\u4e3a\u5206\u6790\uff0c\u6211\u4eec\u4e3a Doris \u6dfb\u52a0\u4e86\u76f8\u5e94\u7684 UDF \uff08User Defined Function\uff09\u548c UDAF (User Defined Aggregate Function)\u3002\n\u5728\u5373\u5c06\u53d1\u5e03\u7684 1.2 \u7248\u672c\u4e2d\uff0cDoris\u6dfb\u52a0\u4e86\u5916\u8868\u5143\u6570\u636e\u540c\u6b65\u7684\u529f\u80fd\uff0c\u652f\u6301 Hive/Hudi/Iceberg \u5916\u8868\u5e76\u589e\u52a0\u4e86 Multi Catalog\u3002\u67e5\u8be2\u5916\u90e8\u8868\u63d0\u5347\u4e86\u6027\u80fd\uff0c\u63a5\u5165\u5916\u8868\u5927\u5e45\u589e\u52a0\u4e86\u6613\u7528\u6027\u3002\u5728\u672a\u6765\uff0c\u6211\u4eec\u8003\u8651\u76f4\u63a5\u901a\u8fc7 Doris \u67e5\u8be2 Hive \u4e0e Iceberg \u6570\u636e\uff0c\u6784\u5efa\u6e56\u4ed3\u4e00\u4f53\u7684\u67b6\u6784\u3002"),(0,i.kt)("h2",{id:"ab\u6d4b\u8bd5"},"A/B\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u5c0f\u7c73\u7684 A/B \u5b9e\u9a8c\u5e73\u53f0\u5bf9 Apache Doris \u67e5\u8be2\u6027\u80fd\u7684\u63d0\u5347\u6709\u7740\u8feb\u5207\u7684\u9700\u6c42\uff0c\u56e0\u6b64\u6211\u4eec\u9009\u62e9\u4f18\u5148\u5728\u5c0f\u7c73\u7684 A/B \u5b9e\u9a8c\u5e73\u53f0\u4e0a\u7ebf Apache Doris \u5411\u91cf\u5316\u7248\u672c\uff0c\u4e5f\u5c31\u662f 1.1.2 \u7248\u672c\u3002"),(0,i.kt)("p",null,"\u5c0f\u7c73\u7684 A/B \u5b9e\u9a8c\u5e73\u53f0\u662f\u4e00\u6b3e\u901a\u8fc7 A/B \u6d4b\u8bd5\u7684\u65b9\u5f0f\uff0c\u501f\u52a9\u5b9e\u9a8c\u5206\u7ec4\u3001\u6d41\u91cf\u62c6\u5206\u4e0e\u79d1\u5b66\u8bc4\u4f30\u7b49\u624b\u6bb5\u6765\u8f85\u52a9\u5b8c\u6210\u79d1\u5b66\u7684\u4e1a\u52a1\u51b3\u7b56\uff0c\u6700\u7ec8\u5b9e\u73b0\u4e1a\u52a1\u589e\u957f\u7684\u4e00\u6b3e\u8fd0\u8425\u5de5\u5177\u4ea7\u54c1\u3002\u5728\u5b9e\u9645\u4e1a\u52a1\u4e2d\uff0c\u4e3a\u4e86\u9a8c\u8bc1\u4e00\u4e2a\u65b0\u7b56\u7565\u7684\u6548\u679c\uff0c\u901a\u5e38\u9700\u8981\u51c6\u5907\u539f\u7b56\u7565 A \u548c\u65b0\u7b56\u7565 B \u4e24\u79cd\u65b9\u6848\u3002\u968f\u540e\u5728\u603b\u4f53\u7528\u6237\u4e2d\u53d6\u51fa\u4e00\u5c0f\u90e8\u5206\uff0c\u5c06\u8fd9\u90e8\u5206\u7528\u6237\u5b8c\u5168\u968f\u673a\u5730\u5206\u5728\u4e24\u4e2a\u7ec4\u4e2d\uff0c\u4f7f\u4e24\u7ec4\u7528\u6237\u5728\u7edf\u8ba1\u89d2\u5ea6\u65e0\u5dee\u522b\u3002\u5c06\u539f\u7b56\u7565 A \u548c\u65b0\u7b56\u7565 B \u5206\u522b\u5c55\u793a\u7ed9\u4e0d\u540c\u7684\u7528\u6237\u7ec4\uff0c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u7ed3\u5408\u7edf\u8ba1\u65b9\u6cd5\u5206\u6790\u6570\u636e\uff0c\u5f97\u5230\u4e24\u79cd\u7b56\u7565\u751f\u6548\u540e\u6307\u6807\u7684\u53d8\u5316\u7ed3\u679c\uff0c\u5e76\u4ee5\u6b64\u6765\u5224\u65ad\u65b0\u7b56\u7565 B \u662f\u5426\u7b26\u5408\u9884\u671f\u3002"),(0,i.kt)("p",null,"\u5c0f\u7c73\u7684 A/B \u5b9e\u9a8c\u5e73\u53f0\u6709\u51e0\u7c7b\u5178\u578b\u7684\u67e5\u8be2\u5e94\u7528\uff1a\u7528\u6237\u53bb\u91cd\u3001\u6307\u6807\u6c42\u548c\u3001\u5b9e\u9a8c\u534f\u65b9\u5dee\u8ba1\u7b97\u7b49\uff0c\u67e5\u8be2\u7c7b\u578b\u4f1a\u6d89\u53ca\u8f83\u591a\u7684 Count(distinct)\u3001Bitmap\u8ba1\u7b97\u3001Like\u8bed\u53e5\u7b49\u3002"),(0,i.kt)("h3",{id:"\u4e0a\u7ebf\u524d\u9a8c\u8bc1"},"\u4e0a\u7ebf\u524d\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u6211\u4eec\u57fa\u4e8e Apache Doris 1.1.2 \u7248\u672c\u642d\u5efa\u4e86\u4e00\u4e2a\u548c\u5c0f\u7c73\u7ebf\u4e0a Apache Doris 0.13 \u7248\u672c\u5728\u673a\u5668\u914d\u7f6e\u548c\u673a\u5668\u89c4\u6a21\u4e0a\u5b8c\u5168\u76f8\u540c\u7684\u6d4b\u8bd5\u96c6\u7fa4\uff0c\u7528\u4e8e\u5411\u91cf\u5316\u7248\u672c\u4e0a\u7ebf\u524d\u7684\u9a8c\u8bc1\u3002\u9a8c\u8bc1\u6d4b\u8bd5\u5206\u4e3a\u4e24\u4e2a\u65b9\u9762\uff1a\u5355 SQL \u4e32\u884c\u67e5\u8be2\u6d4b\u8bd5\u548c\u6279\u91cf SQL \u5e76\u53d1\u67e5\u8be2\u6d4b\u8bd5\u3002\u5728\u8fd9\u4e24\u79cd\u6d4b\u8bd5\u4e2d\uff0c\u6211\u4eec\u5728\u4fdd\u8bc1\u4e24\u4e2a\u96c6\u7fa4\u6570\u636e\u5b8c\u5168\u76f8\u540c\u7684\u6761\u4ef6\u4e0b\uff0c\u5206\u522b\u5728 Doris 1.1.2 \u6d4b\u8bd5\u96c6\u7fa4\u548c\u5c0f\u7c73\u7ebf\u4e0a Doris 0.13 \u96c6\u7fa4\u6267\u884c\u76f8\u540c\u7684\u67e5\u8be2 SQL \u6765\u505a\u6027\u80fd\u5bf9\u6bd4\u3002\u6211\u4eec\u7684\u76ee\u6807\u662f\uff0cDoris 1.1.2 \u7248\u672c\u5728\u5c0f\u7c73\u7ebf\u4e0a Doris 0.13 \u7248\u672c\u7684\u57fa\u7840\u4e0a\u6709 1 \u500d\u7684\u67e5\u8be2\u6027\u80fd\u63d0\u5347\u3002\n\u4e24\u4e2a\u96c6\u7fa4\u914d\u7f6e\u5b8c\u5168\u76f8\u540c\uff0c\u5177\u4f53\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u89c4\u6a21\uff1a3 FE + 89 BE"),(0,i.kt)("li",{parentName:"ul"},"BE\u8282\u70b9CPU:  Intel(R) Xeon(R) Silver 4216 CPU @ 2.10GHz 16\u6838 32\u7ebf\u7a0b \xd7 2"),(0,i.kt)("li",{parentName:"ul"},"BE\u8282\u70b9\u5185\u5b58\uff1a256GB"),(0,i.kt)("li",{parentName:"ul"},"BE\u8282\u70b9\u78c1\u76d8\uff1a7.3TB \xd7 12 HDD")),(0,i.kt)("h4",{id:"\u5355-sql-\u4e32\u884c\u67e5\u8be2\u6d4b\u8bd5"},"\u5355 SQL \u4e32\u884c\u67e5\u8be2\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u5728\u8be5\u6d4b\u8bd5\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9009\u53d6\u4e86\u5c0f\u7c73A/B \u5b9e\u9a8c\u573a\u666f\u4e2d 7 \u4e2a\u5178\u578b\u7684\u67e5\u8be2 Case\uff0c\u9488\u5bf9\u6bcf\u4e00\u4e2a\u67e5\u8be2 Case\uff0c\u6211\u4eec\u5c06\u626b\u63cf\u7684\u6570\u636e\u65f6\u95f4\u8303\u56f4\u5206\u522b\u9650\u5236\u4e3a 1 \u5929\u30017 \u5929\u548c 20 \u5929\u8fdb\u884c\u67e5\u8be2\u6d4b\u8bd5\uff0c\u5176\u4e2d\u5355\u65e5\u5206\u533a\u6570\u636e\u91cf\u7ea7\u5927\u7ea6\u4e3a 31 \u4ebf\uff08\u6570\u636e\u91cf\u5927\u7ea6 2 TB\uff09\uff0c\u6d4b\u8bd5\u7ed3\u679c\u5982\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"7",src:r(35298).Z,width:"750",height:"450"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"8",src:r(6234).Z,width:"749",height:"450"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"9",src:r(67266).Z,width:"750",height:"450"})),(0,i.kt)("p",null,"\u6839\u636e\u4ee5\u4e0a\u5c0f\u7c73 A/B \u5b9e\u9a8c\u573a\u666f\u4e0b\u7684\u5355 SQL \u4e32\u884c\u67e5\u8be2\u6d4b\u8bd5\u7ed3\u679c\u6240\u793a\uff0cDoris 1.1.2 \u7248\u672c\u76f8\u6bd4\u5c0f\u7c73\u7ebf\u4e0a Doris 0.13 \u7248\u672c\u81f3\u5c11\u6709 3~5 \u500d\u7684\u6027\u80fd\u63d0\u5347\uff0c\u6548\u679c\u663e\u8457\u3002"),(0,i.kt)("h3",{id:"\u8c03\u4f18\u6d4b\u8bd5\u7ed3\u679c"},"\u8c03\u4f18\u6d4b\u8bd5\u7ed3\u679c"),(0,i.kt)("p",null,"\u6211\u4eec\u57fa\u4e8e\u5c0f\u7c73\u7684 A/B\u5b9e\u9a8c\u573a\u666f\u5bf9 Apache Doris 1.1.2 \u7248\u672c\u8fdb\u884c\u4e86\u4e00\u7cfb\u5217\u8c03\u4f18\uff0c\u5e76\u5c06\u8c03\u4f18\u540e\u7684 Doris 1.1.2 \u7248\u672c\u4e0e\u5c0f\u7c73\u7ebf\u4e0a Doris 0.13 \u7248\u672c\u5206\u522b\u8fdb\u884c\u4e86\u5e76\u53d1\u67e5\u8be2\u6d4b\u8bd5\u3002\u6d4b\u8bd5\u60c5\u51b5\u5982\u4e0b\uff1a"),(0,i.kt)("h4",{id:"\u6d4b\u8bd5-1"},"\u6d4b\u8bd5 1"),(0,i.kt)("p",null,"\u6211\u4eec\u9009\u62e9\u4e86 A/B \u5b9e\u9a8c\u573a\u666f\u4e2d\u4e00\u6279\u5178\u578b\u7684\u7528\u6237\u53bb\u91cd\u3001\u6307\u6807\u6c42\u548c\u4ee5\u53ca\u534f\u65b9\u5dee\u8ba1\u7b97\u7684\u67e5\u8be2 Case\uff08SQL \u603b\u6570\u91cf\u4e3a 3245\uff09\u5bf9\u4e24\u4e2a\u7248\u672c\u8fdb\u884c\u5e76\u53d1\u67e5\u8be2\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u8868\u7684\u5355\u65e5\u5206\u533a\u6570\u636e\u5927\u7ea6\u4e3a 31 \u4ebf\uff08\u6570\u636e\u91cf\u5927\u7ea6 2 TB\uff09\uff0c\u67e5\u8be2\u7684\u6570\u636e\u8303\u56f4\u4f1a\u8986\u76d6\u6700\u8fd1\u4e00\u5468\u7684\u5206\u533a\u3002\u6d4b\u8bd5\u7ed3\u679c\u5982\u56fe\u6240\u793a\uff0cDoris 1.1.2 \u7248\u672c\u76f8\u6bd4 Doris0.13\u7248\u672c\uff0c\u603b\u4f53\u7684\u5e73\u5747\u5ef6\u8fdf\u964d\u4f4e\u4e86\u5927\u7ea6 48%\uff0cP95 \u5ef6\u8fdf\u964d\u4f4e\u4e86\u5927\u7ea6 49%\u3002\u5728\u8be5\u6d4b\u8bd5\u4e2d\uff0cDoris 1.1.2 \u7248\u672c\u76f8\u6bd4 Doris0.13 \u7248\u672c\u7684\u67e5\u8be2\u6027\u80fd\u63d0\u5347\u4e86\u63a5\u8fd1 1 \u500d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"10",src:r(89516).Z,width:"1080",height:"338"})),(0,i.kt)("h4",{id:"\u6d4b\u8bd5-2"},"\u6d4b\u8bd5 2"),(0,i.kt)("p",null,"\u6211\u4eec\u9009\u62e9\u4e86 A/B\u5b9e\u9a8c\u573a\u666f\u4e0b\u7684 7 \u4efd A/B \u5b9e\u9a8c\u62a5\u544a\u5bf9\u4e24\u4e2a\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6bcf\u4efd A/B \u5b9e\u9a8c\u62a5\u544a\u5bf9\u5e94\u5c0f\u7c73 A/B\u5b9e\u9a8c\u5e73\u53f0\u9875\u9762\u7684\u4e24\u4e2a\u6a21\u5757\uff0c\u6bcf\u4e2a\u6a21\u5757\u5bf9\u5e94\u6570\u767e\u6216\u6570\u5343\u6761\u67e5\u8be2 SQL\u3002\u6bcf\u4e00\u4efd\u5b9e\u9a8c\u62a5\u544a\u90fd\u4ee5\u76f8\u540c\u7684\u5e76\u53d1\u5411\u4e24\u4e2a\u7248\u672c\u6240\u5728\u7684\u96c6\u7fa4\u63d0\u4ea4\u67e5\u8be2\u4efb\u52a1\u3002\u6d4b\u8bd5\u7ed3\u679c\u5982\u56fe\u6240\u793a\uff0cDoris 1.1.2 \u7248\u672c\u76f8\u6bd4 Doris 0.13 \u7248\u672c\uff0c\u603b\u4f53\u7684\u5e73\u5747\u5ef6\u8fdf\u964d\u4f4e\u4e86\u5927\u7ea6 52%\u3002\u5728\u8be5\u6d4b\u8bd5\u4e2d\uff0cDoris 1.1.2 \u7248\u672c\u76f8\u6bd4 Doris 0.13 \u7248\u672c\u7684\u67e5\u8be2\u6027\u80fd\u63d0\u5347\u4e86\u8d85\u8fc7 1 \u500d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"11",src:r(70883).Z,width:"750",height:"450"})),(0,i.kt)("h4",{id:"\u6d4b\u8bd5-3"},"\u6d4b\u8bd5 3"),(0,i.kt)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1\u8c03\u4f18\u540e\u7684 Apache Doris 1.1.2 \u7248\u672c\u5728\u5c0f\u7c73 A/B \u5b9e\u9a8c\u573a\u666f\u4e4b\u5916\u7684\u6027\u80fd\u8868\u73b0\uff0c\u6211\u4eec\u9009\u53d6\u4e86\u5c0f\u7c73\u7528\u6237\u884c\u4e3a\u5206\u6790\u573a\u666f\u8fdb\u884c\u4e86 Doris 1.1.2 \u7248\u672c\u548c Doris 0.13 \u7248\u672c\u7684\u5e76\u53d1\u67e5\u8be2\u6027\u80fd\u6d4b\u8bd5\u3002\u6211\u4eec\u9009\u53d6\u4e86 2022\u5e7410\u670824\u65e5\u300125\u65e5\u300126\u65e5\u548c 27\u65e5\u8fd9 4 \u5929\u7684\u5c0f\u7c73\u7ebf\u4e0a\u771f\u5b9e\u7684\u884c\u4e3a\u5206\u6790\u67e5\u8be2 Case \u8fdb\u884c\u5bf9\u6bd4\u67e5\u8be2\uff0c\u6d4b\u8bd5\u7ed3\u679c\u5982\u56fe\u6240\u793a\uff0cDoris 1.1.2 \u7248\u672c\u76f8\u6bd4 Doris 0.13 \u7248\u672c\uff0c\u603b\u4f53\u7684\u5e73\u5747\u5ef6\u8fdf\u964d\u4f4e\u4e86\u5927\u7ea67 7%\uff0cP95 \u5ef6\u8fdf\u964d\u4f4e\u4e86\u5927\u7ea6 83%\u3002\u5728\u8be5\u6d4b\u8bd5\u4e2d\uff0cDoris 1.1.2 \u7248\u672c\u76f8\u6bd4 Doris 0.13 \u7248\u672c\u7684\u67e5\u8be2\u6027\u80fd\u6709 4~6 \u500d\u7684\u63d0\u5347\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"12",src:r(3931).Z,width:"1080",height:"338"})),(0,i.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u81ea\u4ece Apache Doris \u4ece 2019 \u5e74\u4e0a\u7ebf\u7b2c\u4e00\u4e2a\u4e1a\u52a1\u81f3\u4eca\uff0c\u76ee\u524d Apache Doris \u5df2\u7ecf\u5728\u5c0f\u7c73\u5185\u90e8\u670d\u52a1\u4e86\u6570\u5341\u4e2a\u4e1a\u52a1\u53ca\u5b50\u54c1\u724c\u3001\u96c6\u7fa4\u6570\u91cf\u8fbe\u5230\u6570\u5341\u4e2a\u3001\u8282\u70b9\u89c4\u6a21\u8fbe\u5230\u6570\u767e\u53f0\u3002\u6bcf\u5929\u5b8c\u6210\u6570\u4e07\u6b21\u7528\u6237\u5728\u7ebf\u5206\u6790\u67e5\u8be2\uff0c\u627f\u62c5\u4e86\u5305\u62ec\u589e\u957f\u5206\u6790\u548c\u62a5\u8868\u67e5\u8be2\u7b49\u7edd\u5927\u591a\u6570\u5728\u7ebf\u5206\u6790\u7684\u9700\u6c42\u3002"),(0,i.kt)("p",null,"\u7ecf\u8fc7\u4e00\u4e2a\u591a\u6708\u7684\u6027\u80fd\u8c03\u4f18\u548c\u6d4b\u8bd5\uff0cApache Doris 1.1.2 \u7248\u672c\u5728\u67e5\u8be2\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u65b9\u9762\u5df2\u7ecf\u8fbe\u5230\u4e86\u5c0f\u7c73 A/B\u5b9e\u9a8c\u5e73\u53f0\u7684\u4e0a\u7ebf\u8981\u6c42\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u7684\u67e5\u8be2\u6027\u80fd\u751a\u81f3\u8d85\u8fc7\u4e86\u6211\u4eec\u7684\u9884\u671f\uff0c\u5e0c\u671b\u672c\u6b21\u5206\u4eab\u53ef\u4ee5\u7ed9\u6709\u9700\u8981\u7684\u670b\u53cb\u4e00\u4e9b\u53ef\u501f\u9274\u7684\u7ecf\u9a8c\u53c2\u8003\u3002"),(0,i.kt)("p",null,"\u4e0e\u6b64\u540c\u65f6\uff0c\u5728\u4ee5\u4e0a\u5c0f\u7c73\u7684\u5b9e\u8df5\u4e2d\uff0c\u5df2\u6709\u90e8\u5206\u529f\u80fd\u5728 Apache Doris 1.0 \u6216 1.1 \u7248\u672c\u4e2d\u53d1\u5e03\uff0c\u90e8\u5206 PR \u5df2\u7ecf\u5408\u5165\u793e\u533a Master\uff0c\u5c06\u5728\u4e0d\u4e45\u540e\u53d1\u5e03\u7684 1.2 \u65b0\u7248\u672c\u4e2d\u4e0e\u5927\u5bb6\u89c1\u9762\u3002\u968f\u7740\u793e\u533a\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u6709\u8d8a\u6765\u8d8a\u591a\u5c0f\u4f19\u4f34\u53c2\u4e0e\u5230\u793e\u533a\u5efa\u8bbe\u4e2d\uff0c\u793e\u533a\u6d3b\u8dc3\u5ea6\u6709\u4e86\u6781\u5927\u7684\u63d0\u5347\u3002Apache Doris \u5df2\u7ecf\u53d8\u5f97\u8d8a\u6765\u8d8a\u6210\u719f\uff0c\u5e76\u5f00\u59cb\u4ece\u5355\u4e00\u8ba1\u7b97\u5b58\u50a8\u4e00\u4f53\u7684\u5206\u6790\u578b MPP \u6570\u636e\u5e93\u8d70\u5411\u6e56\u4ed3\u4e00\u4f53\u7684\u9053\u8def\uff0c\u76f8\u4fe1\u5728\u672a\u6765\uff0c\u8fd8\u4f1a\u6709\u66f4\u591a\u7684\u6570\u636e\u5206\u6790\u573a\u666f\u88ab\u63a2\u7d22\u548c\u5b9e\u73b0\u3002"),(0,i.kt)("h1",{id:"\u8054\u7cfb\u6211\u4eec"},"\u8054\u7cfb\u6211\u4eec"),(0,i.kt)("p",null,"\u5b98\u7f51\uff1a",(0,i.kt)("a",{parentName:"p",href:"http://doris.apache.org"},"http://doris.apache.org")),(0,i.kt)("p",null,"Github\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris")),(0,i.kt)("p",null,"dev\u90ae\u4ef6\u7ec4\uff1a",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")))}d.isMDXComponent=!0},38471:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/1-1ba7f77a03c987c9397cedee505fe819.png"},89516:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/10-c9499045fecce0f0eae927ba3e0ac883.png"},70883:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/11-164d7e9bca3b81ccb6bae88a0048be41.png"},3931:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/12-125f05fc3d7544d5f15edf2ab41184e8.png"},83733:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2-f6f2fe0acf61bc2e3aefb9f853931c27.png"},45505:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3-266579e567d5c09c8931d7044813c707.png"},45918:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/4-c98f04af8754b651217aa474e7178d39.png"},82674:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/5-adfeb633824992e5692635b13cfdfb78.png"},33403:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/6-5ec3ef0ad093ee68dd7297622a064096.png"},35298:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/7-8f6f2d02c9688f713ef48c8221c25158.png"},6234:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/8-0ee361fa5acabc282382a20b61f5baaa.png"},67266:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/9-f28d9b3dc18ad2f8314faaf514c5dc69.png"},57621:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/kv-b27d71e34981d9850785329cea2cb610.png"}}]);