"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[18834],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,u=d["".concat(p,".").concat(c)]||d[c]||k[c]||i;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"DataX doriswriter",language:"zh-CN"},o=void 0,l={unversionedId:"ecosystem/datax",id:"ecosystem/datax",title:"DataX doriswriter",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/datax.md",sourceDirName:"ecosystem",slug:"/ecosystem/datax",permalink:"/zh-CN/docs/ecosystem/datax",draft:!1,tags:[],version:"current",frontMatter:{title:"DataX doriswriter",language:"zh-CN"},sidebar:"docs",previous:{title:"Mysql to Doris",permalink:"/zh-CN/docs/ecosystem/mysql-to-doris"},next:{title:"Logstash Doris Output Plugin",permalink:"/zh-CN/docs/ecosystem/logstash"}},p={},s=[{value:"\u5173\u4e8e DataX",id:"\u5173\u4e8e-datax",level:2},{value:"\u4f7f\u7528\u624b\u518c",id:"\u4f7f\u7528\u624b\u518c",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"Doris \u4ee3\u7801\u5e93\u7f16\u8bd1",id:"doris-\u4ee3\u7801\u5e93\u7f16\u8bd1",level:4},{value:"Datax \u4ee3\u7801\u5e93\u7f16\u8bd1",id:"datax-\u4ee3\u7801\u5e93\u7f16\u8bd1",level:4},{value:"Datax DorisWriter \u53c2\u6570\u4ecb\u7ecd\uff1a",id:"datax-doriswriter-\u53c2\u6570\u4ecb\u7ecd",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"1.Stream\u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3Doris",id:"1stream\u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3doris",level:4},{value:"2.Mysql\u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3Doris",id:"2mysql\u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3doris",level:4}],m={toc:s},d="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datax-doriswriter"},"DataX doriswriter"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/DataX"},"DataX")," doriswriter \u63d2\u4ef6\uff0c\u7528\u4e8e\u901a\u8fc7 DataX \u540c\u6b65\u5176\u4ed6\u6570\u636e\u6e90\u7684\u6570\u636e\u5230 Doris \u4e2d\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u662f\u5229\u7528Doris\u7684Stream Load \u529f\u80fd\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u7684\u3002\u9700\u8981\u914d\u5408 DataX \u670d\u52a1\u4e00\u8d77\u4f7f\u7528\u3002"),(0,n.kt)("h2",{id:"\u5173\u4e8e-datax"},"\u5173\u4e8e DataX"),(0,n.kt)("p",null,"DataX \u662f\u963f\u91cc\u4e91 DataWorks\u6570\u636e\u96c6\u6210 \u7684\u5f00\u6e90\u7248\u672c\uff0c\u5728\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5185\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u79bb\u7ebf\u6570\u636e\u540c\u6b65\u5de5\u5177/\u5e73\u53f0\u3002DataX \u5b9e\u73b0\u4e86\u5305\u62ec MySQL\u3001Oracle\u3001SqlServer\u3001Postgre\u3001HDFS\u3001Hive\u3001ADS\u3001HBase\u3001TableStore(OTS)\u3001MaxCompute(ODPS)\u3001Hologres\u3001DRDS \u7b49\u5404\u79cd\u5f02\u6784\u6570\u636e\u6e90\u4e4b\u95f4\u9ad8\u6548\u7684\u6570\u636e\u540c\u6b65\u529f\u80fd\u3002"),(0,n.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/alibaba/DataX/")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u624b\u518c"},"\u4f7f\u7528\u624b\u518c"),(0,n.kt)("p",null,"DataX doriswriter \u63d2\u4ef6\u4ee3\u7801 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/extension/DataX"},"\u8fd9\u91cc"),"\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u76ee\u5f55\u5305\u542b\u63d2\u4ef6\u4ee3\u7801\u4ee5\u53ca DataX \u9879\u76ee\u7684\u5f00\u53d1\u73af\u5883\u3002"),(0,n.kt)("p",null,"doriswriter \u63d2\u4ef6\u4f9d\u8d56\u7684 DataX \u4ee3\u7801\u4e2d\u7684\u4e00\u4e9b\u6a21\u5757\u3002\u800c\u8fd9\u4e9b\u6a21\u5757\u5e76\u6ca1\u6709\u5728 Maven \u5b98\u65b9\u4ed3\u5e93\u4e2d\u3002\u6240\u4ee5\u6211\u4eec\u5728\u5f00\u53d1 doriswriter \u63d2\u4ef6\u65f6\uff0c\u9700\u8981\u4e0b\u8f7d\u5b8c\u6574\u7684 DataX \u4ee3\u7801\u5e93\uff0c\u624d\u80fd\u8fdb\u884c\u63d2\u4ef6\u7684\u7f16\u8bd1\u548c\u5f00\u53d1\u3002"),(0,n.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u76ee\u5f55\u662f doriswriter \u63d2\u4ef6\u7684\u4ee3\u7801\u76ee\u5f55\u3002\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u4ee3\u7801\uff0c\u90fd\u6258\u7ba1\u5728 Apache Doris \u7684\u4ee3\u7801\u5e93\u4e2d\u3002"),(0,n.kt)("p",{parentName:"li"},"doriswriter \u63d2\u4ef6\u5e2e\u52a9\u6587\u6863\u5728\u8fd9\u91cc\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/doc"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"init-env.sh")),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u811a\u672c\u4e3b\u8981\u7528\u4e8e\u6784\u5efa DataX \u5f00\u53d1\u73af\u5883\uff0c\u4ed6\u4e3b\u8981\u8fdb\u884c\u4e86\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06 DataX \u4ee3\u7801\u5e93 clone \u5230\u672c\u5730\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")," \u76ee\u5f55\u8f6f\u94fe\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter")," \u76ee\u5f55\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"p"},"<module>doriswriter</module>")," \u6a21\u5757\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/core/pom.xml")," \u6587\u4ef6\u4e2d\u7684 httpclient \u7248\u672c\u4ece 4.5 \u6539\u4e3a 4.5.13."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"httpclient v4.5 \u5728\u5904\u7406 307 \u8f6c\u53d1\u65f6\u6709bug\u3002")))),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u811a\u672c\u6267\u884c\u540e\uff0c\u5f00\u53d1\u8005\u5c31\u53ef\u4ee5\u8fdb\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/")," \u76ee\u5f55\u5f00\u59cb\u5f00\u53d1\u6216\u7f16\u8bd1\u4e86\u3002\u56e0\u4e3a\u505a\u4e86\u8f6f\u94fe\uff0c\u6240\u4ee5\u4efb\u4f55\u5bf9 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter")," \u76ee\u5f55\u4e2d\u6587\u4ef6\u7684\u4fee\u6539\uff0c\u90fd\u4f1a\u53cd\u6620\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"doriswriter/")," \u76ee\u5f55\u4e2d\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u63d0\u4ea4\u4ee3\u7801\u3002"))),(0,n.kt)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,n.kt)("h4",{id:"doris-\u4ee3\u7801\u5e93\u7f16\u8bd1"},"Doris \u4ee3\u7801\u5e93\u7f16\u8bd1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"init-env.sh"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6309\u9700\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/doriswriter")," \u4e2d\u7684\u4ee3\u7801\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8bd1 doriswriter\uff1a"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u72ec\u7f16\u8bd1 doriswriter \u63d2\u4ef6:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"mvn clean install -pl plugin-rdbms-util,doriswriter -DskipTests"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u6574\u4e2a DataX \u9879\u76ee:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"mvn package assembly:assembly -Dmaven.test.skip=true")),(0,n.kt)("p",{parentName:"li"},"\u4ea7\u51fa\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"target/datax/datax/"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"hdfsreader, hdfswriter and oscarwriter \u8fd9\u4e09\u4e2a\u63d2\u4ef6\u9700\u8981\u989d\u5916\u7684jar\u5305\u3002\u5982\u679c\u4f60\u5e76\u4e0d\u9700\u8981\u8fd9\u4e9b\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataX/pom.xml")," \u4e2d\u5220\u9664\u8fd9\u4e9b\u63d2\u4ef6\u7684\u6a21\u5757\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u9519\u8bef"),(0,n.kt)("p",{parentName:"li"},"\u5982\u9047\u5230\u5982\u4e0b\u7f16\u8bd1\u9519\u8bef\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Could not find artifact com.alibaba.datax:datax-all:pom:0.0.1-SNAPSHOT ...\n")),(0,n.kt)("p",{parentName:"li"},"\u53ef\u5c1d\u8bd5\u4ee5\u4e0b\u65b9\u5f0f\u89e3\u51b3\uff1a"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d ",(0,n.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/alibaba-datax-maven-m2-20210928.tar.gz"},"alibaba-datax-maven-m2-20210928.tar.gz")),(0,n.kt)("li",{parentName:"ol"},"\u89e3\u538b\u540e\uff0c\u5c06\u5f97\u5230\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"alibaba/datax/")," \u76ee\u5f55\uff0c\u62f7\u8d1d\u5230\u6240\u4f7f\u7528\u7684 maven \u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},".m2/repository/com/alibaba/")," \u4e0b\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u518d\u6b21\u5c1d\u8bd5\u7f16\u8bd1\u3002"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6309\u9700\u63d0\u4ea4\u4fee\u6539\u3002"))),(0,n.kt)("h4",{id:"datax-\u4ee3\u7801\u5e93\u7f16\u8bd1"},"Datax \u4ee3\u7801\u5e93\u7f16\u8bd1"),(0,n.kt)("p",null,"\u4ecedatax \u4ee3\u7801\u5e93\u62c9\u53d6\u4ee3\u7801\uff0c\u6267\u884c\u7f16\u8bd1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/alibaba/DataX.git\ncd datax\nmvn package assembly:assembly -Dmaven.test.skip=true\n")),(0,n.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\u53ef\u4ee5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"datax/target/Datax")," \u4e0b\u770b\u5230datax.tar.gz \u5305"),(0,n.kt)("h3",{id:"datax-doriswriter-\u53c2\u6570\u4ecb\u7ecd"},"Datax DorisWriter \u53c2\u6570\u4ecb\u7ecd\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"jdbcUrl")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aDoris \u7684 JDBC \u8fde\u63a5\u4e32\uff0c\u7528\u6237\u6267\u884c preSql \u6216 postSQL\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"loadUrl")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'\u63cf\u8ff0\uff1a\u4f5c\u4e3a Stream Load \u7684\u8fde\u63a5\u76ee\u6807\u3002\u683c\u5f0f\u4e3a "ip:port"\u3002\u5176\u4e2d IP \u662f FE \u8282\u70b9 IP\uff0cport \u662f FE \u8282\u70b9\u7684 http_port\u3002\u53ef\u4ee5\u586b\u5199\u591a\u4e2a\uff0c\u591a\u4e2a\u4e4b\u95f4\u4f7f\u7528\u82f1\u6587\u72b6\u6001\u7684\u5206\u53f7\u9694\u5f00:',(0,n.kt)("inlineCode",{parentName:"li"},";"),"\uff0cdoriswriter \u5c06\u4ee5\u8f6e\u8be2\u7684\u65b9\u5f0f\u8bbf\u95ee\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"username")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8bbf\u95eeDoris\u6570\u636e\u5e93\u7684\u7528\u6237\u540d"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"password")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8bbf\u95eeDoris\u6570\u636e\u5e93\u7684\u5bc6\u7801"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u7a7a"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"connection.selectedDatabase")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u5199\u5165\u7684Doris\u6570\u636e\u5e93\u540d\u79f0\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"connection.table")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u5199\u5165\u7684Doris\u8868\u540d\u79f0\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"flushInterval")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5199\u5165\u6279\u6b21\u7684\u65f6\u95f4\u95f4\u9694\u3002\u5982\u679c\u8fd9\u4e2a\u65f6\u95f4\u95f4\u9694\u8bbe\u7f6e\u7684\u592a\u5c0f\u4f1a\u9020\u6210 Doris \u5199\u963b\u585e\u95ee\u9898\uff0c\u9519\u8bef\u4ee3\u7801 -235\uff0c\u540c\u65f6\u5982\u679c\u4f60\u8fd9\u4e2a\u65f6\u95f4\u8bbe\u7f6e\u592a\u5c0f\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"maxBatchRows")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"batchSize")," \u53c2\u6570\u8bbe\u7f6e\u7684\u6709\u5f88\u5927\uff0c\u90a3\u4e48\u5f88\u53ef\u80fd\u8fbe\u4e0d\u5230\u4f60\u8fd9\u8bbe\u7f6e\u7684\u6570\u636e\u91cf\u5927\u5c0f\uff0c\u4e5f\u4f1a\u6267\u884c\u5bfc\u5165\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a30000\uff08ms\uff09"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"column")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'\u63cf\u8ff0\uff1a\u76ee\u7684\u8868\u9700\u8981\u5199\u5165\u6570\u636e\u7684\u5b57\u6bb5\uff0c\u8fd9\u4e9b\u5b57\u6bb5\u5c06\u4f5c\u4e3a\u751f\u6210\u7684 Json \u6570\u636e\u7684\u5b57\u6bb5\u540d\u3002\u5b57\u6bb5\u4e4b\u95f4\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\u3002\u4f8b\u5982: "column": ','["id","name","age"]',"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u5426"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"preSql")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5199\u5165\u6570\u636e\u5230\u76ee\u7684\u8868\u524d\uff0c\u4f1a\u5148\u6267\u884c\u8fd9\u91cc\u7684\u6807\u51c6\u8bed\u53e5\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"postSql")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5199\u5165\u6570\u636e\u5230\u76ee\u7684\u8868\u540e\uff0c\u4f1a\u6267\u884c\u8fd9\u91cc\u7684\u6807\u51c6\u8bed\u53e5\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"maxBatchRows")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u6279\u6b21\u5bfc\u5165\u6570\u636e\u7684\u6700\u5927\u884c\u6570\u3002\u548c ",(0,n.kt)("strong",{parentName:"li"},"batchSize")," \u5171\u540c\u63a7\u5236\u6bcf\u6279\u6b21\u7684\u5bfc\u5165\u8bb0\u5f55\u884c\u6570\u3002\u6bcf\u6279\u6b21\u6570\u636e\u8fbe\u5230\u4e24\u4e2a\u9608\u503c\u4e4b\u4e00\uff0c\u5373\u5f00\u59cb\u5bfc\u5165\u8fd9\u4e00\u6279\u6b21\u7684\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a500000"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"batchSize")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u6279\u6b21\u5bfc\u5165\u6570\u636e\u7684\u6700\u5927\u6570\u636e\u91cf\u3002\u548c ",(0,n.kt)("strong",{parentName:"li"},"maxBatchRows")," \u5171\u540c\u63a7\u5236\u6bcf\u6279\u6b21\u7684\u5bfc\u5165\u6570\u91cf\u3002\u6bcf\u6279\u6b21\u6570\u636e\u8fbe\u5230\u4e24\u4e2a\u9608\u503c\u4e4b\u4e00\uff0c\u5373\u5f00\u59cb\u5bfc\u5165\u8fd9\u4e00\u6279\u6b21\u7684\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a104857600"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"maxRetries")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u6279\u6b21\u5bfc\u5165\u6570\u636e\u5931\u8d25\u540e\u7684\u91cd\u8bd5\u6b21\u6570\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a3")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"labelPrefix")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u6279\u6b21\u5bfc\u5165\u4efb\u52a1\u7684 label \u524d\u7f00\u3002\u6700\u7ec8\u7684 label \u5c06\u6709 ",(0,n.kt)("inlineCode",{parentName:"li"},"labelPrefix + UUID")," \u7ec4\u6210\u5168\u5c40\u552f\u4e00\u7684 label\uff0c\u786e\u4fdd\u6570\u636e\u4e0d\u4f1a\u91cd\u590d\u5bfc\u5165"),(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"datax_doris_writer_")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"loadProps")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u63cf\u8ff0\uff1aStreamLoad \u7684\u8bf7\u6c42\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167StreamLoad\u4ecb\u7ecd\u9875\u9762\u3002",(0,n.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/import-way/stream-load-manual"},"Stream load - Apache Doris")),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u5305\u62ec\u5bfc\u5165\u7684\u6570\u636e\u683c\u5f0f\uff1aformat\u7b49\uff0c\u5bfc\u5165\u6570\u636e\u683c\u5f0f\u9ed8\u8ba4\u6211\u4eec\u4f7f\u7528csv\uff0c\u652f\u6301JSON\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u7167\u4e0b\u9762\u7c7b\u578b\u8f6c\u6362\u90e8\u5206\uff0c\u4e5f\u53ef\u4ee5\u53c2\u7167\u4e0a\u9762Stream load \u5b98\u65b9\u4fe1\u606f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5fc5\u9009\uff1a\u5426")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))))),(0,n.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,n.kt)("h4",{id:"1stream\u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3doris"},"1.Stream\u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3Doris"),(0,n.kt)("p",null,"\u8be5\u793a\u4f8b\u63d2\u4ef6\u7684\u4f7f\u7528\u8bf4\u660e\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/blob/master/extension/DataX/doriswriter/doc/doriswriter.md"},"\u8fd9\u91cc")),(0,n.kt)("h4",{id:"2mysql\u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3doris"},"2.Mysql\u8bfb\u53d6\u6570\u636e\u540e\u5bfc\u5165\u81f3Doris"),(0,n.kt)("p",null,"1.Mysql\u8868\u7ed3\u6784"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `t_test`(\n `id`bigint(30) NOT NULL,\n `order_code` varchar(30) DEFAULT NULL COMMENT '',\n `line_code` varchar(30) DEFAULT NULL COMMENT '',\n `remark` varchar(30) DEFAULT NULL COMMENT '',\n `unit_no` varchar(30) DEFAULT NULL COMMENT '',\n `unit_name` varchar(30) DEFAULT NULL COMMENT '',\n `price` decimal(12,2) DEFAULT NULL COMMENT '',\n PRIMARY KEY(`id`) USING BTREE\n)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='';\n")),(0,n.kt)("p",null,"2.Doris\u8868\u7ed3\u6784"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `ods_t_test` (\n `id`bigint(30) NOT NULL,\n `order_code` varchar(30) DEFAULT NULL COMMENT '',\n `line_code` varchar(30) DEFAULT NULL COMMENT '',\n `remark` varchar(30) DEFAULT NULL COMMENT '',\n `unit_no` varchar(30) DEFAULT NULL COMMENT '',\n `unit_name` varchar(30) DEFAULT NULL COMMENT '',\n `price` decimal(12,2) DEFAULT NULL COMMENT ''\n\uff09ENGINE=OLAP\nUNIQUE KEY(id`, `order_code`)\nDISTRIBUTED BY HASH(`order_code`) BUCKETS 1\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 3\",\n\"in_memory\" = \"false\",\n\"storage_format\" = \"V2\"\n);\n")),(0,n.kt)("p",null,"3.\u521b\u5efadatax\u811a\u672c "),(0,n.kt)("p",null,"my_import.json"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "job": {\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "connection": [\n                            {\n                                "jdbcUrl": ["jdbc:mysql://localhost:3306/demo"],\n                                "table": ["employees_1"]\n                            }\n                        ],\n                        "username": "root",\n                        "password": "xxxxx",\n                        "where": ""\n                    }\n                },\n                "writer": {\n                    "name": "doriswriter",\n                    "parameter": {\n                        "loadUrl": ["127.0.0.1:8030"],\n                        "loadProps": {\n                        },\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "username": "root",\n                        "password": "xxxxxx",\n                        "postSql": ["select count(1) from all_employees_info"],\n                        "preSql": [],\n                        "flushInterval":30000,\n                        "connection": [\n                          {\n                            "jdbcUrl": "jdbc:mysql://127.0.0.1:9030/demo",\n                            "selectedDatabase": "demo",\n                            "table": ["all_employees_info"]\n                          }\n                        ],\n                        "loadProps": {\n                            "format": "json",\n                            "strip_outer_array":"true",\n                            "line_delimiter": "\\\\x02"\n                        }\n                    }\n                }\n            }\n        ],\n        "setting": {\n            "speed": {\n                "channel": "1"\n            }\n        }\n    }\n}\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"loadProps": {\n  "format": "json",\n  "strip_outer_array":"true",\n  "line_delimiter": "\\\\x02"\n}\n')),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e86 JSON \u683c\u5f0f\u5bfc\u5165\u6570\u636e"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"line_delimiter")," \u9ed8\u8ba4\u662f\u6362\u884c\u7b26\uff0c\u53ef\u80fd\u4f1a\u548c\u6570\u636e\u4e2d\u7684\u503c\u51b2\u7a81\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u7279\u6b8a\u5b57\u7b26\u6216\u8005\u4e0d\u53ef\u89c1\u5b57\u7b26\uff0c\u907f\u514d\u5bfc\u5165\u9519\u8bef"),(0,n.kt)("li",{parentName:"ol"},"strip_outer_array \uff1a\u5728\u4e00\u6279\u5bfc\u5165\u6570\u636e\u4e2d\u8868\u793a\u591a\u884c\u6570\u636e\uff0cDoris \u5728\u89e3\u6790\u65f6\u4f1a\u5c06\u6570\u7ec4\u5c55\u5f00\uff0c\u7136\u540e\u4f9d\u6b21\u89e3\u6790\u5176\u4e2d\u7684\u6bcf\u4e00\u4e2a Object \u4f5c\u4e3a\u4e00\u884c\u6570\u636e"),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u591a Stream load \u53c2\u6570\u8bf7\u53c2\u7167 ","[Stream load\u6587\u6863]","(",(0,n.kt)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"Stream load - Apache Doris"),")"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f CSV \u683c\u5f0f\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"loadProps": {\n   "format": "csv",\n   "column_separator": "\\\\x01",\n   "line_delimiter": "\\\\x02"\n}\n')),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"CSV \u683c\u5f0f\u8981\u7279\u522b\u6ce8\u610f\u884c\u5217\u5206\u9694\u7b26\uff0c\u907f\u514d\u548c\u6570\u636e\u4e2d\u7684\u7279\u6b8a\u5b57\u7b26\u51b2\u7a81\uff0c\u8fd9\u91cc\u5efa\u8bae\u4f7f\u7528\u9690\u85cf\u5b57\u7b26\uff0c\u9ed8\u8ba4\u5217\u5206\u9694\u7b26\u662f\uff1a\\t\uff0c\u884c\u5206\u9694\u7b26\uff1a\\n"))),(0,n.kt)("p",null,"4.\u6267\u884cdatax\u4efb\u52a1\uff0c\u5177\u4f53\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/DataX/blob/master/userGuid.md"},"datax\u5b98\u7f51")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python bin/datax.py my_import.json\n")),(0,n.kt)("p",null,"\u6267\u884c\u4e4b\u540e\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4e0b\u9762\u7684\u4fe1\u606f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'2022-11-16 14:28:54.012 [job-0] INFO  JobContainer - jobContainer starts to do prepare ...\n2022-11-16 14:28:54.012 [job-0] INFO  JobContainer - DataX Reader.Job [mysqlreader] do prepare work .\n2022-11-16 14:28:54.013 [job-0] INFO  JobContainer - DataX Writer.Job [doriswriter] do prepare work .\n2022-11-16 14:28:54.020 [job-0] INFO  JobContainer - jobContainer starts to do split ...\n2022-11-16 14:28:54.020 [job-0] INFO  JobContainer - Job set Channel-Number to 1 channels.\n2022-11-16 14:28:54.023 [job-0] INFO  JobContainer - DataX Reader.Job [mysqlreader] splits to [1] tasks.\n2022-11-16 14:28:54.023 [job-0] INFO  JobContainer - DataX Writer.Job [doriswriter] splits to [1] tasks.\n2022-11-16 14:28:54.033 [job-0] INFO  JobContainer - jobContainer starts to do schedule ...\n2022-11-16 14:28:54.036 [job-0] INFO  JobContainer - Scheduler starts [1] taskGroups.\n2022-11-16 14:28:54.037 [job-0] INFO  JobContainer - Running by standalone Mode.\n2022-11-16 14:28:54.041 [taskGroup-0] INFO  TaskGroupContainer - taskGroupId=[0] start [1] channels for [1] tasks.\n2022-11-16 14:28:54.043 [taskGroup-0] INFO  Channel - Channel set byte_speed_limit to -1, No bps activated.\n2022-11-16 14:28:54.043 [taskGroup-0] INFO  Channel - Channel set record_speed_limit to -1, No tps activated.\n2022-11-16 14:28:54.049 [taskGroup-0] INFO  TaskGroupContainer - taskGroup[0] taskId[0] attemptCount[1] is started\n2022-11-16 14:28:54.052 [0-0-0-reader] INFO  CommonRdbmsReader$Task - Begin to read record by Sql: [select taskid,projectid,taskflowid,templateid,template_name,status_task from dwd_universal_tb_task \n] jdbcUrl:[jdbc:mysql://localhost:3306/demo?yearIsDateType=false&zeroDateTimeBehavior=convertToNull&tinyInt1isBit=false&rewriteBatchedStatements=true].\nWed Nov 16 14:28:54 GMT+08:00 2022 WARN: Establishing SSL connection without server\'s identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn\'t set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to \'false\'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.\n2022-11-16 14:28:54.071 [0-0-0-reader] INFO  CommonRdbmsReader$Task - Finished read record by Sql: [select taskid,projectid,taskflowid,templateid,template_name,status_task from dwd_universal_tb_task \n] jdbcUrl:[jdbc:mysql://localhost:3306/demo?yearIsDateType=false&zeroDateTimeBehavior=convertToNull&tinyInt1isBit=false&rewriteBatchedStatements=true].\n2022-11-16 14:28:54.104 [Thread-1] INFO  DorisStreamLoadObserver - Start to join batch data: rows[2] bytes[438] label[datax_doris_writer_c4e08cb9-c157-4689-932f-db34acc45b6f].\n2022-11-16 14:28:54.104 [Thread-1] INFO  DorisStreamLoadObserver - Executing stream load to: \'http://127.0.0.1:8030/api/demo/dwd_universal_tb_task/_stream_load\', size: \'441\'\n2022-11-16 14:28:54.224 [Thread-1] INFO  DorisStreamLoadObserver - StreamLoad response :{"Status":"Success","BeginTxnTimeMs":0,"Message":"OK","NumberUnselectedRows":0,"CommitAndPublishTimeMs":17,"Label":"datax_doris_writer_c4e08cb9-c157-4689-932f-db34acc45b6f","LoadBytes":441,"StreamLoadPutTimeMs":1,"NumberTotalRows":2,"WriteDataTimeMs":11,"TxnId":217056,"LoadTimeMs":31,"TwoPhaseCommit":"false","ReadDataTimeMs":0,"NumberLoadedRows":2,"NumberFilteredRows":0}\n2022-11-16 14:28:54.225 [Thread-1] INFO  DorisWriterManager - Async stream load finished: label[datax_doris_writer_c4e08cb9-c157-4689-932f-db34acc45b6f].\n2022-11-16 14:28:54.249 [taskGroup-0] INFO  TaskGroupContainer - taskGroup[0] taskId[0] is successed, used[201]ms\n2022-11-16 14:28:54.250 [taskGroup-0] INFO  TaskGroupContainer - taskGroup[0] completed it\'s tasks.\n2022-11-16 14:29:04.048 [job-0] INFO  StandAloneJobContainerCommunicator - Total 2 records, 214 bytes | Speed 21B/s, 0 records/s | Error 0 records, 0 bytes |  All Task WaitWriterTime 0.000s |  All Task WaitReaderTime 0.000s | Percentage 100.00%\n2022-11-16 14:29:04.049 [job-0] INFO  AbstractScheduler - Scheduler accomplished all tasks.\n2022-11-16 14:29:04.049 [job-0] INFO  JobContainer - DataX Writer.Job [doriswriter] do post work.\nWed Nov 16 14:29:04 GMT+08:00 2022 WARN: Establishing SSL connection without server\'s identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn\'t set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to \'false\'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.\n2022-11-16 14:29:04.187 [job-0] INFO  DorisWriter$Job - Start to execute preSqls:[select count(1) from dwd_universal_tb_task]. context info:jdbc:mysql://172.16.0.13:9030/demo.\n2022-11-16 14:29:04.204 [job-0] INFO  JobContainer - DataX Reader.Job [mysqlreader] do post work.\n2022-11-16 14:29:04.204 [job-0] INFO  JobContainer - DataX jobId [0] completed successfully.\n2022-11-16 14:29:04.204 [job-0] INFO  HookInvoker - No hook invoked, because base dir not exists or is a file: /data/datax/hook\n2022-11-16 14:29:04.205 [job-0] INFO  JobContainer - \n         [total cpu info] => \n                averageCpu                     | maxDeltaCpu                    | minDeltaCpu                    \n                -1.00%                         | -1.00%                         | -1.00%\n                        \n\n         [total gc info] => \n                 NAME                 | totalGCCount       | maxDeltaGCCount    | minDeltaGCCount    | totalGCTime        | maxDeltaGCTime     | minDeltaGCTime     \n                 PS MarkSweep         | 1                  | 1                  | 1                  | 0.017s             | 0.017s             | 0.017s             \n                 PS Scavenge          | 1                  | 1                  | 1                  | 0.007s             | 0.007s             | 0.007s             \n\n2022-11-16 14:29:04.205 [job-0] INFO  JobContainer - PerfTrace not enable!\n2022-11-16 14:29:04.206 [job-0] INFO  StandAloneJobContainerCommunicator - Total 2 records, 214 bytes | Speed 21B/s, 0 records/s | Error 0 records, 0 bytes |  All Task WaitWriterTime 0.000s |  All Task WaitReaderTime 0.000s | Percentage 100.00%\n2022-11-16 14:29:04.206 [job-0] INFO  JobContainer - \n\u4efb\u52a1\u542f\u52a8\u65f6\u523b                    : 2022-11-16 14:28:53\n\u4efb\u52a1\u7ed3\u675f\u65f6\u523b                    : 2022-11-16 14:29:04\n\u4efb\u52a1\u603b\u8ba1\u8017\u65f6                    :                 10s\n\u4efb\u52a1\u5e73\u5747\u6d41\u91cf                    :               21B/s\n\u8bb0\u5f55\u5199\u5165\u901f\u5ea6                    :              0rec/s\n\u8bfb\u51fa\u8bb0\u5f55\u603b\u6570                    :                   2\n\u8bfb\u5199\u5931\u8d25\u603b\u6570                    :                   0\n\n')))}k.isMDXComponent=!0}}]);