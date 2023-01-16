"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[88804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,s=c["".concat(o,".").concat(u)]||c[u]||k[u]||l;return a?n.createElement(s,p(p({ref:t},m),{},{components:a})):n.createElement(s,p({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u901a\u7528\u7f16\u8bd1",language:"zh-CN"},p=void 0,i={unversionedId:"install/source-install/compilation-general",id:"version-dev/install/source-install/compilation-general",title:"\u901a\u7528\u7f16\u8bd1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/install/source-install/compilation-general.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-general",permalink:"/zh-CN/docs/dev/install/source-install/compilation-general",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/install/source-install/compilation-general.md",tags:[],version:"dev",frontMatter:{title:"\u901a\u7528\u7f16\u8bd1",language:"zh-CN"},sidebar:"docs",previous:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/dev/install/k8s-deploy"},next:{title:"\u4f7f\u7528 LDB toolchain \u7f16\u8bd1",permalink:"/zh-CN/docs/dev/install/source-install/compilation-with-ldb-toolchain"}},o={},d=[{value:"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\uff08\u63a8\u8350\uff09",id:"\u4f7f\u7528-docker-\u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u63a8\u8350",level:2},{value:"\u4f7f\u7528\u73b0\u6210\u7684\u955c\u50cf",id:"\u4f7f\u7528\u73b0\u6210\u7684\u955c\u50cf",level:3},{value:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf",id:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf",level:3},{value:"\u76f4\u63a5\u7f16\u8bd1\uff08Ubuntu\uff09",id:"\u76f4\u63a5\u7f16\u8bd1ubuntu",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u7279\u522b\u58f0\u660e",id:"\u7279\u522b\u58f0\u660e",level:2}],m={toc:d},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u6e90\u7801\u7f16\u8bd1 Doris\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-docker-\u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u63a8\u8350"},"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\uff08\u63a8\u8350\uff09"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u73b0\u6210\u7684\u955c\u50cf"},"\u4f7f\u7528\u73b0\u6210\u7684\u955c\u50cf"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d Docker \u955c\u50cf"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$ docker pull apache/doris:build-env-ldb-toolchain-latest")),(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u955c\u50cf\u4e0b\u8f7d\u5b8c\u6210\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ docker images\nREPOSITORY              TAG                               IMAGE ID            CREATED             SIZE\napache/doris  build-env-ldb-toolchain-latest    49f68cecbc1a        4 days ago          3.76GB\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u9488\u5bf9\u4e0d\u540c\u7684 Doris \u7248\u672c\uff0c\u9700\u8981\u4e0b\u8f7d\u5bf9\u5e94\u7684\u955c\u50cf\u7248\u672c\u3002\u4ece Apache Doris 0.15 \u7248\u672c\u8d77\uff0c\u540e\u7eed\u955c\u50cf\u7248\u672c\u53f7\u5c06\u4e0e Doris \u7248\u672c\u53f7\u7edf\u4e00\u3002\u6bd4\u5982\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"apache/doris:build-env-for-0.15.0 "),"  \u6765\u7f16\u8bd1 0.15.0 \u7248\u672c\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce82\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest")," \u7528\u4e8e\u7f16\u8bd1\u6700\u65b0\u4e3b\u5e72\u7248\u672c\u4ee3\u7801\uff0c\u4f1a\u968f\u4e3b\u5e72\u7248\u672c\u4e0d\u65ad\u66f4\u65b0\u3002\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/README.md")," \u4e2d\u7684\u66f4\u65b0\u65f6\u95f4\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u955c\u50cf\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"commit id"),(0,r.kt)("th",{parentName:"tr",align:null},"doris \u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env"),(0,r.kt)("td",{parentName:"tr",align:null},"before ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81"},"ff0dd0d")),(0,r.kt)("td",{parentName:"tr",align:null},"0.8.x, 0.9.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81"},"ff0dd0d")),(0,r.kt)("td",{parentName:"tr",align:null},"0.10.x, 0.11.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/4ef5a8c8560351d7fff7ff8fd51c4c7a75e006a8"},"4ef5a8c")),(0,r.kt)("td",{parentName:"tr",align:null},"0.12.x - 0.14.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-1.3.1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")),(0,r.kt)("td",{parentName:"tr",align:null},"0.14.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-0.15.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/a81f4da4e461a54782a96433b746d07be89e6b54"},"a81f4da")," or later"),(0,r.kt)("td",{parentName:"tr",align:null},"0.15.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/incubator-doris:build-env-latest"),(0,r.kt)("td",{parentName:"tr",align:null},"before ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/doris/commit/0efef1b332300887ee0473f9df9bdd9d7297d824"},"0efef1b")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.0.0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.1.0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.x, 1.2.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-1.2-no-avx2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.x, 1.2.x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-latest"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"trunk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-no-avx2-latest"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"trunk")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u540d\u79f0\u4e2d\u5e26\u6709 no-avx2 \u5b57\u6837\u7684\u955c\u50cf\u4e2d\u7684\u7b2c\u4e09\u65b9\u5e93\uff0c\u53ef\u4ee5\u8fd0\u884c\u5728\u4e0d\u652f\u6301 avx2 \u6307\u4ee4\u7684 CPU \u4e0a\u3002\u53ef\u4ee5\u914d\u5408 USE_AVX2=0 \u9009\u9879\uff0c\u7f16\u8bd1 Doris\u3002"))),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:2},(0,r.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u955c\u50cf ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/thirdparty/CHANGELOG.md"},"ChangeLog"),"\u3002"))),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:3},(0,r.kt)("li",{parentName:"ol"},"doris 0.14.0 \u7248\u672c\u4ecd\u7136\u4f7f\u7528apache/incubator-doris:build-env-1.2 \u7f16\u8bd1\uff0c0.14.x \u7248\u672c\u7684\u4ee3\u7801\u5c06\u4f7f\u7528apache/incubator-doris:build-env-1.3.1\u3002"))),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ece build-env-1.3.1 \u7684docker\u955c\u50cf\u8d77\uff0c\u540c\u65f6\u5305\u542b\u4e86 OpenJDK 8 \u548c OpenJDK 11\uff0c\u8bf7\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"java -version")," \u786e\u8ba4\u9ed8\u8ba4 JDK \u7248\u672c\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5207\u6362\u7248\u672c\uff08\u5efa\u8bae\u9ed8\u8ba4\u4f7f\u7528 JDK8\uff09"),(0,r.kt)("p",{parentName:"li"},"\u5207\u6362\u5230 JDK 8\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"alternatives --set java java-1.8.0-openjdk.x86_64\nalternatives --set javac java-1.8.0-openjdk.x86_64\nexport JAVA_HOME=/usr/lib/jvm/java-1.8.0\n")),(0,r.kt)("p",{parentName:"li"},"\u5207\u6362\u5230 JDK 11\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"alternatives --set java java-11-openjdk.x86_64\nalternatives --set javac java-11-openjdk.x86_64\nexport JAVA_HOME=/usr/lib/jvm/java-11\n"))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u884c\u955c\u50cf"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$ docker run -it apache/doris:build-env-ldb-toolchain-latest")),(0,r.kt)("p",{parentName:"li"},"\u5efa\u8bae\u4ee5\u6302\u8f7d\u672c\u5730 Doris \u6e90\u7801\u76ee\u5f55\u7684\u65b9\u5f0f\u8fd0\u884c\u955c\u50cf\uff0c\u8fd9\u6837\u7f16\u8bd1\u7684\u4ea7\u51fa\u4e8c\u8fdb\u5236\u6587\u4ef6\u4f1a\u5b58\u50a8\u5728\u5bbf\u4e3b\u673a\u4e2d\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u955c\u50cf\u9000\u51fa\u800c\u6d88\u5931\u3002"),(0,r.kt)("p",{parentName:"li"},"\u540c\u65f6\uff0c\u5efa\u8bae\u540c\u65f6\u5c06\u955c\u50cf\u4e2d maven \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".m2")," \u76ee\u5f55\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a\u76ee\u5f55\uff0c\u4ee5\u9632\u6b62\u6bcf\u6b21\u542f\u52a8\u955c\u50cf\u7f16\u8bd1\u65f6\uff0c\u91cd\u590d\u4e0b\u8f7d maven \u7684\u4f9d\u8d56\u5e93\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ docker run -it -v /your/local/.m2:/root/.m2 -v /your/local/doris-DORIS-x.x.x-release/:/root/doris-DORIS-x.x.x-release/ apache/doris:build-env-ldb-toolchain-latest\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u6e90\u7801"),(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8\u955c\u50cf\u540e\uff0c\u4f60\u5e94\u8be5\u5df2\u7ecf\u5904\u4e8e\u5bb9\u5668\u5185\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d Doris \u6e90\u7801\uff08\u5df2\u6302\u8f7d\u672c\u5730\u6e90\u7801\u76ee\u5f55\u5219\u4e0d\u7528\uff09\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ git clone https://github.com/apache/doris.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1 Doris"),(0,r.kt)("p",{parentName:"li"},"\u5148\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7f16\u8bd1\u673a\u5668\u662f\u5426\u652f\u6301avx2\u6307\u4ee4\u96c6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,r.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ USE_AVX2=0  sh build.sh\n")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u652f\u6301\uff0c\u53ef\u4e0d\u52a0 USE_AVX2=0 \uff0c\u76f4\u63a5\u8fdb\u884c\u7f16\u8bd1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ sh build.sh\n")),(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e2d\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")),(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"build-env-for-0.15.0")," \u6216\u4e4b\u540e\u7684\u7248\u672c\uff0c\u7b2c\u4e00\u6b21\u7f16\u8bd1\u7684\u65f6\u5019\u8981\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"sh build.sh --clean --be --fe")),(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u56e0\u4e3a build-env-for-0.15.0 \u7248\u672c\u955c\u50cf\u5347\u7ea7\u4e86 thrift(0.9 -> 0.13)\uff0c\u9700\u8981\u901a\u8fc7 --clean \u547d\u4ee4\u5f3a\u5236\u4f7f\u7528\u65b0\u7248\u672c\u7684 thrift \u751f\u6210\u4ee3\u7801\u6587\u4ef6\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u4e0d\u517c\u5bb9\u7684\u4ee3\u7801\u3002")),(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e2d\u3002"))),(0,r.kt)("h3",{id:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf"},"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a Doris \u5f00\u53d1\u73af\u5883\u955c\u50cf\uff0c\u5177\u4f53\u53ef\u53c2\u9605 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/README.md")," \u6587\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u76f4\u63a5\u7f16\u8bd1ubuntu"},"\u76f4\u63a5\u7f16\u8bd1\uff08Ubuntu\uff09"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u81ea\u5df1\u7684 linux \u73af\u5883\u4e2d\u76f4\u63a5\u5c1d\u8bd5\u7f16\u8bd1 Doris\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u4f9d\u8d56\n\u4e0d\u540c\u7684\u7248\u672c\u4f9d\u8d56\u4e5f\u4e0d\u76f8\u540c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")," \u4e4b\u524d\u7248\u672c\u4f9d\u8d56\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GCC 7.3+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.11+     Bison 3.0+")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528Ubuntu 16.04 \u53ca\u4ee5\u4e0a\u7cfb\u7edf \u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt-get install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python autopoint pkg-config")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u662fCentOS \u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo yum groupinstall 'Development Tools' && sudo yum install maven cmake byacc flex automake libtool bison binutils-devel zip unzip ncurses-devel curl git wget python2 glibc-static libstdc++-static java-1.8.0-openjdk"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f"},"ad67dd3")," \u4e4b\u540e\u7248\u672c\u4f9d\u8d56\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GCC 10+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.19.2+ Bison 3.0+")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528Ubuntu 16.04 \u53ca\u4ee5\u4e0a\u7cfb\u7edf \u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1 Doris"),(0,r.kt)("p",{parentName:"li"}," \u4e0e\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u4e00\u6837\uff0c\u7f16\u8bd1\u4e4b\u524d\u5148\u68c0\u67e5\u662f\u5426\u652f\u6301avx2\u6307\u4ee4"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,r.kt)("p",{parentName:"li"}," \u652f\u6301\u5219\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ sh build.sh\n")),(0,r.kt)("p",{parentName:"li"},"\u5982\u4e0d\u652f\u6301\u9700\u8981\u52a0 USE_AVX2=0 "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ USE_AVX2=0 sh build.sh\n")),(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e2d\u3002"))),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Could not transfer artifact net.sourceforge.czt.dev:cup-maven-plugin:pom:1.6-cdh from/to xxx")),(0,r.kt)("p",{parentName:"li"},"\u5982\u9047\u5230\u4e0a\u8ff0\u9519\u8bef\uff0c\u8bf7\u53c2\u7167 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/4769/files"},"PR #4769")," \u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"fe/pom.xml")," \u4e2d cloudera \u76f8\u5173\u7684\u4ed3\u5e93\u914d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4e0b\u8f7d\u8fde\u63a5\u9519\u8bef\u3001\u5931\u6548\u7b49\u95ee\u9898"),(0,r.kt)("p",{parentName:"li"},"Doris \u6240\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5e93\u7684\u4e0b\u8f7d\u8fde\u63a5\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"thirdparty/vars.sh")," \u6587\u4ef6\u5185\u3002\u968f\u7740\u65f6\u95f4\u63a8\u79fb\uff0c\u4e00\u4e9b\u4e0b\u8f7d\u8fde\u63a5\u53ef\u80fd\u4f1a\u5931\u6548\u3002\u5982\u679c\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u3002\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u4e24\u79cd\u65b9\u5f0f\u89e3\u51b3\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u624b\u52a8\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"thirdparty/vars.sh")," \u6587\u4ef6"),(0,r.kt)("p",{parentName:"li"},"\u624b\u52a8\u4fee\u6539\u6709\u95ee\u9898\u7684\u4e0b\u8f7d\u8fde\u63a5\u548c\u5bf9\u5e94\u7684 MD5 \u503c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u4e0b\u8f7d\u4ed3\u5e93\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export REPOSITORY_URL=https://doris-thirdparty-repo.bj.bcebos.com/thirdparty\nsh build-thirdparty.sh\n")),(0,r.kt)("p",{parentName:"li"},"REPOSITORY_URL \u4e2d\u5305\u542b\u6240\u6709\u7b2c\u4e09\u65b9\u5e93\u6e90\u7801\u5305\u548c\u4ed6\u4eec\u7684\u5386\u53f2\u7248\u672c\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fatal error: Killed signal terminated program ...")),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 Docker \u955c\u50cf\u7f16\u8bd1\u65f6\u5982\u9047\u5230\u4e0a\u8ff0\u62a5\u9519\uff0c\u53ef\u80fd\u662f\u5206\u914d\u7ed9\u955c\u50cf\u7684\u5185\u5b58\u4e0d\u8db3\uff08Docker \u9ed8\u8ba4\u5206\u914d\u7684\u5185\u5b58\u5927\u5c0f\u4e3a 2GB\uff0c\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5185\u5b58\u5360\u7528\u7684\u5cf0\u503c\u5927\u4e8e 2GB\uff09\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5c1d\u8bd5\u9002\u5f53\u8c03\u5927\u955c\u50cf\u7684\u5206\u914d\u5185\u5b58\uff0c\u63a8\u8350 4GB ~ 8GB\u3002"))),(0,r.kt)("h2",{id:"\u7279\u522b\u58f0\u660e"},"\u7279\u522b\u58f0\u660e"),(0,r.kt)("p",null,"\u81ea 0.13 \u7248\u672c\u5f00\u59cb\uff0c\u9ed8\u8ba4\u7684\u7f16\u8bd1\u4ea7\u51fa\u4e2d\u5c06\u53d6\u6d88\u5bf9 ","[1]"," \u548c ","[2]"," \u4e24\u4e2a\u7b2c\u4e09\u65b9\u5e93\u7684\u4f9d\u8d56\u3002\u8fd9\u4e24\u4e2a\u7b2c\u4e09\u65b9\u5e93\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU General Public License V3")," \u534f\u8bae\u3002\u8be5\u534f\u8bae\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License 2.0")," \u534f\u8bae\u4e0d\u517c\u5bb9\uff0c\u56e0\u6b64\u9ed8\u8ba4\u4e0d\u51fa\u73b0\u5728 Apache \u53d1\u5e03\u7248\u672c\u4e2d\u3002"),(0,r.kt)("p",null,"\u79fb\u9664\u4f9d\u8d56\u5e93 ","[1]"," \u4f1a\u5bfc\u81f4\u65e0\u6cd5\u8bbf\u95ee MySQL \u5916\u90e8\u8868\u3002\u8bbf\u95ee MySQL \u5916\u90e8\u8868\u7684\u529f\u80fd\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4e2d\u901a\u8fc7 UnixODBC \u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u79fb\u9664\u4f9d\u8d56\u5e93 ","[2]"," \u4f1a\u5bfc\u81f4\u5728\u65e0\u6cd5\u8bfb\u53d6\u90e8\u5206\u65e9\u671f\u7248\u672c\uff080.8\u7248\u672c\u4e4b\u524d\uff09\u5199\u5165\u7684\u90e8\u5206\u6570\u636e\u3002\u56e0\u4e3a\u65e9\u671f\u7248\u672c\u4e2d\u7684\u6570\u636e\u662f\u4f7f\u7528 LZO \u7b97\u6cd5\u538b\u7f29\u7684\uff0c\u5728\u4e4b\u540e\u7684\u7248\u672c\u4e2d\uff0c\u5df2\u7ecf\u66f4\u6539\u4e3a LZ4 \u538b\u7f29\u7b97\u6cd5\u3002\u540e\u7eed\u6211\u4eec\u4f1a\u63d0\u4f9b\u5de5\u5177\u7528\u4e8e\u68c0\u6d4b\u548c\u8f6c\u6362\u8fd9\u90e8\u5206\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6709\u9700\u6c42\uff0c\u7528\u6237\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u8fd9\u4e24\u4e2a\u4f9d\u8d56\u5e93\u3002\u5982\u9700\u4f7f\u7528\uff0c\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u6dfb\u52a0\u5982\u4e0b\u9009\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"WITH_MYSQL=1 WITH_LZO=1 sh build.sh\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5f53\u7528\u6237\u4f9d\u8d56\u8fd9\u4e24\u4e2a\u7b2c\u4e09\u65b9\u5e93\u65f6\uff0c\u5219\u9ed8\u8ba4\u4e0d\u5728 Apache License 2.0 \u534f\u8bae\u6846\u67b6\u4e0b\u4f7f\u7528 Doris\u3002\u8bf7\u6ce8\u610f GPL \u76f8\u5173\u534f\u8bae\u7ea6\u675f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[1]"," mysql-5.7.18"),(0,r.kt)("li",{parentName:"ul"},"[2]"," lzo-2.10")))}k.isMDXComponent=!0}}]);