"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[4432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},S=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),S=r,m=p["".concat(d,".").concat(S)]||p[S]||c[S]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=S;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}S.displayName="MDXCreateElement"},71851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"S3 Load",language:"zh-CN"},o=void 0,i={unversionedId:"administrator-guide/load-data/s3-load-manual",id:"version-0.15/administrator-guide/load-data/s3-load-manual",title:"S3 Load",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/load-data/s3-load-manual.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/s3-load-manual",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/s3-load-manual",draft:!1,tags:[],version:"0.15",frontMatter:{title:"S3 Load",language:"zh-CN"},sidebar:"docs",previous:{title:"Stream load",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/stream-load-manual"},next:{title:"Delete",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/delete-manual"}},d={},s=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5f00\u59cb\u5bfc\u5165",id:"\u5f00\u59cb\u5bfc\u5165",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-load"},"S3 Load"),(0,r.kt)("p",null,"\u4ece0.14 \u7248\u672c\u5f00\u59cb\uff0cDoris \u652f\u6301\u901a\u8fc7S3\u534f\u8bae\u76f4\u63a5\u4ece\u652f\u6301S3\u534f\u8bae\u7684\u5728\u7ebf\u5b58\u50a8\u7cfb\u7edf\u5bfc\u5165\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5bfc\u5165 AWS S3 \u4e2d\u5b58\u50a8\u7684\u6570\u636e\u3002\u4e5f\u652f\u6301\u5bfc\u5165\u5176\u4ed6\u652f\u6301S3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u5bfc\u5165\uff0c\u5982\u679c\u767e\u5ea6\u4e91\u7684BOS\uff0c\u963f\u91cc\u4e91\u7684OSS\u548c\u817e\u8baf\u4e91\u7684COS\u7b49\u3001"),(0,r.kt)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6e90\u6570\u636e\u5728 \u652f\u6301S3\u534f\u8bae\u7684\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u5982 S3,BOS \u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5728 \u51e0\u5341\u5230\u767eGB \u7ea7\u522b\u3002")),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51c6\u672cAK \u548c SK\n\u9996\u5148\u9700\u8981\u627e\u5230\u6216\u8005\u91cd\u65b0\u751f\u6210 AWS ",(0,r.kt)("inlineCode",{parentName:"li"},"Access keys"),"\uff0c\u53ef\u4ee5\u5728AWS console \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"My Security Credentials")," \u627e\u5230\u751f\u6210\u65b9\u5f0f\uff0c \u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,r.kt)("a",{target:"_blank",href:n(96328).Z},"AK_SK"),"\n\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Create New Access Key")," \u6ce8\u610f\u4fdd\u5b58\u751f\u6210 AK\u548cSK."),(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907 REGION \u548c ENDPOINT\nREGION \u53ef\u4ee5\u5728\u521b\u5efa\u6876\u7684\u65f6\u5019\u9009\u62e9\u4e5f\u53ef\u4ee5\u5728\u6876\u5217\u8868\u4e2d\u67e5\u770b\u5230\u3002ENDPOINT \u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u9875\u9762\u901a\u8fc7REGION\u67e5\u5230 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region"},"AWS \u6587\u6863"))),(0,r.kt)("p",null,"\u5176\u4ed6\u4e91\u5b58\u50a8\u7cfb\u7edf\u53ef\u4ee5\u76f8\u5e94\u7684\u6587\u6863\u627e\u5230\u4e0eS3\u517c\u5bb9\u7684\u76f8\u5173\u4fe1\u606f"),(0,r.kt)("h2",{id:"\u5f00\u59cb\u5bfc\u5165"},"\u5f00\u59cb\u5bfc\u5165"),(0,r.kt)("p",null,"\u5bfc\u5165\u65b9\u5f0f\u548cBroker Load \u57fa\u672c\u76f8\u540c\uff0c\u53ea\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH BROKER broker_name ()")," \u8bed\u53e5\u66ff\u6362\u6210\u5982\u4e0b\u90e8\u5206"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')),(0,r.kt)("p",null,"\u5b8c\u6574\u793a\u4f8b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,"S3 SDK \u9ed8\u8ba4\u4f7f\u7528 virtual-hosted style \u65b9\u5f0f\u3002\u4f46\u67d0\u4e9b\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u53ef\u80fd\u6ca1\u5f00\u542f\u6216\u6ca1\u652f\u6301 virtual-hosted style \u65b9\u5f0f\u7684\u8bbf\u95ee\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"use_path_style")," \u53c2\u6570\u6765\u5f3a\u5236\u4f7f\u7528 path style \u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION",\n        "use_path_style" = "true"\n  )\n')))}c.isMDXComponent=!0},96328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/aws_ak_sk-7a2cc3d09728977381b53e321838ccb1.png"}}]);