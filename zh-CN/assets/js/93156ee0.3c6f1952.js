"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[13031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u8d21\u732e UDF ",language:"zh-CN"},o=void 0,l={unversionedId:"ecosystem/udf/contribute-udf",id:"version-dev/ecosystem/udf/contribute-udf",title:"\u8d21\u732e UDF ",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/ecosystem/udf/contribute-udf.md",sourceDirName:"ecosystem/udf",slug:"/ecosystem/udf/contribute-udf",permalink:"/zh-CN/docs/dev/ecosystem/udf/contribute-udf",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/ecosystem/udf/contribute-udf.md",tags:[],version:"dev",frontMatter:{title:"\u8d21\u732e UDF ",language:"zh-CN"},sidebar:"docs",previous:{title:"Hive Bitmap UDF",permalink:"/zh-CN/docs/dev/ecosystem/hive-bitmap-udf"},next:{title:"\u8fdc\u7a0bUDF",permalink:"/zh-CN/docs/dev/ecosystem/udf/remote-user-defined-function"}},p={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u6e90\u4ee3\u7801",id:"\u6e90\u4ee3\u7801",level:3},{value:"\u4f7f\u7528\u624b\u518c",id:"\u4f7f\u7528\u624b\u518c",level:3},{value:"\u8d21\u732e UDF \u5230\u793e\u533a",id:"\u8d21\u732e-udf-\u5230\u793e\u533a",level:2}],u={toc:d},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8d21\u732e-udf"},"\u8d21\u732e UDF"),(0,a.kt)("p",null,"\u8be5\u624b\u518c\u4e3b\u8981\u8bb2\u8ff0\u4e86\u5916\u90e8\u7528\u6237\u5982\u4f55\u5c06\u81ea\u5df1\u7f16\u5199\u7684 UDF \u51fd\u6570\u8d21\u732e\u7ed9 Doris \u793e\u533a\u3002"),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"UDF \u51fd\u6570\u5177\u6709\u901a\u7528\u6027"),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684\u901a\u7528\u6027\u4e3b\u8981\u6307\u7684\u662f\uff1aUDF \u51fd\u6570\u5728\u67d0\u4e9b\u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002\u4e5f\u5c31\u662f\u8bf4 UDF \u51fd\u6570\u5177\u6709\u590d\u7528\u4ef7\u503c\uff0c\u53ef\u88ab\u793e\u533a\u5185\u5176\u4ed6\u7528\u6237\u76f4\u63a5\u4f7f\u7528\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u81ea\u5df1\u5199\u7684 UDF \u51fd\u6570\u662f\u5426\u5177\u6709\u901a\u7528\u6027\uff0c\u53ef\u4ee5\u53d1\u90ae\u4ef6\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev@doris.apache.org")," \u6216\u76f4\u63a5\u521b\u5efa ISSUE \u53d1\u8d77\u8ba8\u8bba\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"UDF \u5df2\u7ecf\u5b8c\u6210\u6d4b\u8bd5\uff0c\u5e76\u6b63\u5e38\u8fd0\u884c\u5728\u7528\u6237\u7684\u751f\u4ea7\u73af\u5883\u4e2d"))),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"UDF \u7684 source code"),(0,a.kt)("li",{parentName:"ol"},"UDF \u7684\u4f7f\u7528\u624b\u518c")),(0,a.kt)("h3",{id:"\u6e90\u4ee3\u7801"},"\u6e90\u4ee3\u7801"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"contrib/udf/src/")," \u4e0b\u521b\u5efa\u4e00\u4e2a\u5b58\u653e UDF \u51fd\u6570\u7684\u6587\u4ef6\u5939\uff0c\u5e76\u5c06\u6e90\u7801\u548c CMAKE \u6587\u4ef6\u5b58\u653e\u5728\u6b64\u5904\u3002\u5f85\u8d21\u732e\u7684\u6e90\u4ee3\u7801\u5e94\u8be5\u5305\u542b: ",(0,a.kt)("inlineCode",{parentName:"p"},".h")," , ",(0,a.kt)("inlineCode",{parentName:"p"},".cpp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeFile.txt"),"\u3002\u8fd9\u91cc\u4ee5 udf_samples \u4e3a\u4f8b\uff0c\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"contrib/udf/src/")," \u8def\u5f84\u4e0b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6\u5939\uff0c\u5e76\u5b58\u653e\u6e90\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   \u251c\u2500\u2500contrib\n   \u2502  \u2514\u2500\u2500 udf\n   \u2502    \u251c\u2500\u2500 CMakeLists.txt\n   \u2502    \u2514\u2500\u2500 src\n   \u2502       \u2514\u2500\u2500 udf_samples\n   \u2502           \u251c\u2500\u2500 CMakeLists.txt\n   \u2502           \u251c\u2500\u2500 uda_sample.cpp\n   \u2502           \u251c\u2500\u2500 uda_sample.h\n   \u2502           \u251c\u2500\u2500 udf_sample.cpp\n   \u2502           \u2514\u2500\u2500 udf_sample.h\n\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"CMakeLists.txt"),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," \u653e\u5728\u6b64\u5904\u540e\uff0c\u9700\u8981\u8fdb\u884c\u5c11\u91cf\u66f4\u6539\u3002\u53bb\u6389 ",(0,a.kt)("inlineCode",{parentName:"p"},"include udf")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"udf lib")," \u5373\u53ef\u3002\u53bb\u6389\u7684\u539f\u56e0\u662f\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"contrib/udf")," \u5c42\u7ea7\u7684 CMake \u6587\u4ef6\u4e2d\uff0c\u5df2\u7ecf\u58f0\u660e\u4e86\u3002"))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u624b\u518c"},"\u4f7f\u7528\u624b\u518c"),(0,a.kt)("p",null,"\u4f7f\u7528\u624b\u518c\u9700\u8981\u5305\u542b\uff1aUDF \u51fd\u6570\u542b\u4e49\u8bf4\u660e\uff0c\u9002\u7528\u7684\u573a\u666f\uff0c\u51fd\u6570\u7684\u8bed\u6cd5\uff0c\u5982\u4f55\u7f16\u8bd1 UDF \uff0c\u5982\u4f55\u5728 Doris \u96c6\u7fa4\u4e2d\u4f7f\u7528 UDF\uff0c \u4ee5\u53ca\u4f7f\u7528\u793a\u4f8b\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u624b\u518c\u9700\u5305\u542b\u4e2d\u82f1\u6587\u4e24\u4e2a\u7248\u672c\uff0c\u5e76\u5206\u522b\u5b58\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/zh-CN/extending-doris/udf/contrib")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/en/extending-doris/udf/contrib")," \u4e0b\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 zh-CN\n\u2502\xa0\xa0     \u2514\u2500\u2500extending-doris\n\u2502          \u2514\u2500\u2500udf\n\u2502            \u2514\u2500\u2500contrib\n\u2502              \u251c\u2500\u2500 udf-simple-manual.md\n\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u2514\u2500\u2500 en\n\u2502\xa0\xa0     \u2514\u2500\u2500extending-doris\n\u2502          \u2514\u2500\u2500udf\n\u2502            \u2514\u2500\u2500contrib\n\u2502              \u251c\u2500\u2500 udf-simple-manual.md\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u4e24\u4e2a\u4f7f\u7528\u624b\u518c\u7684\u6587\u4ef6\uff0c\u52a0\u5165\u4e2d\u6587\u548c\u82f1\u6587\u7684 sidebar \u4e2d\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'vi docs/.vuepress/sidebar/zh-CN.js\n{\n    title: "\u7528\u6237\u8d21\u732e\u7684 UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'vi docs/.vuepress/sidebar/en.js\n{\n    title: "Users contribute UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n\n')))),(0,a.kt)("h2",{id:"\u8d21\u732e-udf-\u5230\u793e\u533a"},"\u8d21\u732e UDF \u5230\u793e\u533a"),(0,a.kt)("p",null,"\u5f53\u4f60\u7b26\u5408\u524d\u63d0\u6761\u4ef6\u5e76\u51c6\u5907\u597d\u4ee3\u7801\uff0c\u6587\u6863\u540e\u5c31\u53ef\u4ee5\u5c06 UDF \u8d21\u732e\u5230 Doris \u793e\u533a\u4e86\u3002\u5728  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris"},"Github")," \u4e0a\u9762\u63d0\u4ea4 Pull Request (PR) \u5373\u53ef\u3002\u5177\u4f53\u63d0\u4ea4\u65b9\u5f0f\u89c1\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/about-pull-requests/"},"Pull Request (PR)"),"\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u5f53 PR \u8bc4\u5ba1\u901a\u8fc7\u5e76 Merge \u540e\u3002\u606d\u559c\u4f60\uff0c\u4f60\u7684 UDF \u5df2\u7ecf\u8d21\u732e\u7ed9 Doris \u793e\u533a\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN"},"Doris \u5b98\u7f51")," \u7684\u751f\u6001\u6269\u5c55\u90e8\u5206\u67e5\u770b\u5230\u5566~\u3002"))}s.isMDXComponent=!0}}]);