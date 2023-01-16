"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[80150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,k=d["".concat(i,".").concat(u)]||d[u]||c[u]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"Mysql to Doris",language:"zh-CN"},o=void 0,s={unversionedId:"ecosystem/mysql-to-doris",id:"ecosystem/mysql-to-doris",title:"Mysql to Doris",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/mysql-to-doris.md",sourceDirName:"ecosystem",slug:"/ecosystem/mysql-to-doris",permalink:"/zh-CN/docs/ecosystem/mysql-to-doris",draft:!1,tags:[],version:"current",frontMatter:{title:"Mysql to Doris",language:"zh-CN"},sidebar:"docs",previous:{title:"Spark Doris Connector",permalink:"/zh-CN/docs/ecosystem/spark-doris-connector"},next:{title:"DataX doriswriter",permalink:"/zh-CN/docs/ecosystem/datax"}},i={},p=[{value:"\u4f7f\u7528\u624b\u518c",id:"\u4f7f\u7528\u624b\u518c",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u5168\u91cf",id:"\u5168\u91cf",level:3},{value:"\u81ea\u5b9a\u4e49",id:"\u81ea\u5b9a\u4e49",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql-to-doris"},"Mysql to Doris"),(0,a.kt)("p",null,"mysql to doris \u4e3b\u8981\u9002\u7528\u4e8e\u81ea\u52a8\u5316\u521b\u5efadoris odbc \u8868\uff0c\u4e3b\u8981\u7528shell\u811a\u672c\u5b9e\u73b0"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u624b\u518c"},"\u4f7f\u7528\u624b\u518c"),(0,a.kt)("p",null,"mysql to doris \u4ee3\u7801",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/extension/mysql_to_doris"},"\u8fd9\u91cc")),(0,a.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 mysql_to_doris\n\u2502   \u251c\u2500\u2500 conf\n\u2502   \u2502   \u251c\u2500\u2500 doris.conf\n\u2502   \u2502   \u251c\u2500\u2500 mysql.conf\n\u2502   \u2502   \u2514\u2500\u2500 tables\n\u2502   \u251c\u2500\u2500 all_tables.sh\n\u2502   \u2502\n\u2514\u2500\u2500 \u2514\u2500\u2500 user_define_tables.sh   \n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"all_tables.sh "),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u811a\u672c\u4e3b\u8981\u662f\u8bfb\u53d6mysql\u6307\u5b9a\u5e93\u4e0b\u7684\u6240\u6709\u8868\uff0c\u81ea\u52a8\u521b\u5efaDoris odbc\u5916\u8868")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"user_define_tables.sh "),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u811a\u672c\u4e3b\u8981\u7528\u4e8e\u7528\u6237\u81ea\u5b9a\u4e49\u6307\u5b9amysql\u5e93\u4e0b\u67d0\u51e0\u5f20\u8868\uff0c\u81ea\u52a8\u521b\u5efaDoris odbc\u5916\u8868")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"conf"),(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"doris.conf"),"\u4e3b\u8981\u662f\u914d\u7f6edoris\u76f8\u5173\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"mysql.conf"),"\u4e3b\u8981\u914d\u7f6emysql\u76f8\u5173\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"tables"),"\u4e3b\u8981\u7528\u4e8e\u914d\u7f6e\u7528\u6237\u81ea\u5b9a\u4e49mysql\u5e93\u7684\u8868"))),(0,a.kt)("h3",{id:"\u5168\u91cf"},"\u5168\u91cf"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u4f7f\u7528mysql to doris",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/extension/mysql_to_doris"},"\u8fd9\u91cc"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u76f8\u5173\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#doris.conf\nmaster_host=\nmaster_port=\ndoris_password=\n\n#mysql.conf\nmysql_host=\nmysql_password=\n")),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"master_host"),(0,a.kt)("td",{parentName:"tr",align:null},"Doris FE master\u8282\u70b9IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"master_port"),(0,a.kt)("td",{parentName:"tr",align:null},"Doris FE query_port\u7aef\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris_password"),(0,a.kt)("td",{parentName:"tr",align:null},"Doris \u5bc6\u7801(\u9ed8\u8ba4root\u7528\u6237)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mysql_host"),(0,a.kt)("td",{parentName:"tr",align:null},"Mysql IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mysql_password"),(0,a.kt)("td",{parentName:"tr",align:null},"Mysql \u5bc6\u7801(\u9ed8\u8ba4root\u7528\u6237)"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"all_tables.sh"),"\u811a\u672c"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh all_tables.sh mysql_db_name doris_db_name\n")),(0,a.kt)("p",null,"\u6267\u884c\u6210\u529f\u540e\u4f1a\u751f\u6210 files\u76ee\u5f55\uff0c\u6539\u76ee\u5f55\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"tables"),"\uff08\u8868\u540d\u79f0\uff09 \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"tables.sql")," \uff08doris odbc\u5efa\u8868\u8bed\u53e5\uff09"),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49"},"\u81ea\u5b9a\u4e49"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"li"},"conf/tables"),"\u6587\u4ef6\uff0c\u6dfb\u52a0\u9700\u8981\u521b\u5efadoris odbc\u7684\u8868"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6emysql\u548cdoris\u76f8\u5173\u4fe1\u606f\uff0c\u53c2\u8003\u5168\u91cf\u521b\u5efa\u7b2c2\u6b65"),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"user_define_tables.sh"),"\u811a\u672c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh user_define_tables.sh mysql_db_name doris_db_name\n")),(0,a.kt)("p",null,"\u6267\u884c\u6210\u529f\u540e\u4f1a\u751f\u6210 user_files\u76ee\u5f55\uff0c\u6539\u76ee\u5f55\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"tables.sql")," \uff08doris odbc\u5efa\u8868\u8bed\u53e5\uff09"))}c.isMDXComponent=!0}}]);