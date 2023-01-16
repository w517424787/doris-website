"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,v=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - Visual Studio Code (VSCode)",language:"zh-CN"},o=void 0,i={unversionedId:"developer-guide/fe-vscode-dev",id:"developer-guide/fe-vscode-dev",title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - Visual Studio Code (VSCode)",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/fe-vscode-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/fe-vscode-dev",permalink:"/zh-CN/community/developer-guide/fe-vscode-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - Visual Studio Code (VSCode)",language:"zh-CN"},sidebar:"community",previous:{title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - IntelliJ IDEA",permalink:"/zh-CN/community/developer-guide/fe-idea-dev"},next:{title:"Doris BE\u5f00\u53d1\u8c03\u8bd5\u73af\u5883 -- vscode",permalink:"/zh-CN/community/developer-guide/be-vscode-dev"}},p={},u=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u4e0b\u8f7d\u4ee3\u7801\u7f16\u8bd1",id:"\u4e0b\u8f7d\u4ee3\u7801\u7f16\u8bd1",level:2},{value:"\u914d\u7f6e VSCode",id:"\u914d\u7f6e-vscode",level:2},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2}],d={toc:u},c="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-vscode-\u642d\u5efa-fe-\u5f00\u53d1\u73af\u5883"},"\u4f7f\u7528 VSCode \u642d\u5efa FE \u5f00\u53d1\u73af\u5883"),(0,r.kt)("p",null,"\u6709\u4e9b\u5f00\u53d1\u8005\u662f\u5728 \u5f00\u53d1\u673a/WSL/docker \u4e0a\u642d\u5efa FE \u5f00\u53d1\u73af\u5883\uff0c\u4f46\u662f\u8fd9\u6837\u7684\u5f00\u53d1\u73af\u5883\u4e0d\u80fd\u652f\u6301\u672c\u5730\u5f00\u53d1\uff0c\u6709\u4e9b\u4e60\u60ef\u4e8e\u4f7f\u7528 VSCode \u7684\u5f00\u53d1\u8005\u53ef\u4ee5\u914d\u7f6e\u8fdc\u7a0b\u5f00\u53d1\u8c03\u8bd5"),(0,r.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK11+ (Java \u63d2\u4ef6\u9700\u8981 JDK11+) (\u7b14\u8005\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"home")," \u76ee\u5f55\u4e0b\u5efa\u7acb\u4e86\u4e00\u4e2a lib \u76ee\u5f55\uff0c\u5206\u522b\u5b89\u88c5\u4e86 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adoptium/temurin11-binaries/releases/"},"JDK11")," \u548c JDK8 \uff0c\u5206\u522b\u7528\u4e8e\u63d2\u4ef6\u548c\u7f16\u8bd1)"),(0,r.kt)("li",{parentName:"ul"},"VSCode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Extension Pack for Java \u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"Remote \u63d2\u4ef6")))),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u4ee3\u7801\u7f16\u8bd1"},"\u4e0b\u8f7d\u4ee3\u7801\u7f16\u8bd1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris.git"},"https://github.com/apache/doris.git")," \u4e0b\u8f7d\u6e90\u7801\u5230\u672c\u5730")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 VSCode \u6253\u5f00\u4ee3\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"/fe")," \u76ee\u5f55"))),(0,r.kt)("h2",{id:"\u914d\u7f6e-vscode"},"\u914d\u7f6e VSCode"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".vscode")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," \u6587\u4ef6, \u5206\u522b\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"java.configuration.runtimes"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"java.jdt.ls.java.home"')," -- \u5fc5\u987b\u53e6\u5916\u914d\u7f6e\uff0c\u6307\u5411 JDK11+ \u7684\u76ee\u5f55\uff0c\u7528\u4e8e\u914d\u7f6e vscode-java \u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"maven.executable.path"')," -- \u6307\u5411 maven \u7684\u76ee\u5f55\uff0c\u7528\u4e8e\u914d\u7f6e maven-language-server \u63d2\u4ef6")),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "java.configuration.runtimes": [\n        {\n            "name": "JavaSE-1.8",\n            "path": "/!!!path!!!/jdk-1.8.0_191"\n        },\n        {\n            "name": "JavaSE-11",\n            "path": "/!!!path!!!/jdk-11.0.14.1+1",\n            "default": true\n        },\n    ],\n    "java.jdt.ls.java.home": "/!!!path!!!/jdk-11.0.14.1+1",\n    "maven.executable.path": "/!!!path!!!/maven/bin/mvn"\n}\n')),(0,r.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,r.kt)("p",null,"\u5176\u4ed6\u6587\u7ae0\u5df2\u7ecf\u4ecb\u7ecd\u7684\u6bd4\u8f83\u6e05\u695a\u4e86\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/install/source-install/compilation-with-ldb-toolchain"},"\u4f7f\u7528 LDB toolchain \u7f16\u8bd1")),(0,r.kt)("li",{parentName:"ul"},"......")),(0,r.kt)("p",null,"\u4e3a\u4e86\u8fdb\u884c\u8c03\u8bd5\uff0c\u9700\u8981\u5728 fe \u542f\u52a8\u65f6\uff0c\u52a0\u4e0a\u8c03\u8bd5\u7684\u53c2\u6570\uff0c\u6bd4\u5982 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005\n")),(0,r.kt)("p",null,"\u5177\u4f53\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"doris/output/fe/bin/start_fe.sh")," \u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"$JAVA $final_java_opt")," \u540e\u9762\u52a0\u4e0a\u4e0a\u9762\u7684\u53c2\u6570\u3002"))}s.isMDXComponent=!0}}]);