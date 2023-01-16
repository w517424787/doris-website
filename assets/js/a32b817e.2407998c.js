"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[21814],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),N=n,k=s["".concat(d,".").concat(N)]||s[N]||m[N]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},22330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"ODBC of Doris",language:"en"},i=void 0,o={unversionedId:"extending-doris/odbc-of-doris",id:"version-0.15/extending-doris/odbc-of-doris",title:"ODBC of Doris",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/extending-doris/odbc-of-doris.md",sourceDirName:"extending-doris",slug:"/extending-doris/odbc-of-doris",permalink:"/docs/0.15/extending-doris/odbc-of-doris",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ODBC of Doris",language:"en"},sidebar:"docs",previous:{title:"Logstash Doris Output Plugin",permalink:"/docs/0.15/extending-doris/logstash"},next:{title:"Plugin Development Manual",permalink:"/docs/0.15/extending-doris/plugin-development-manual"}},d={},p=[{value:"Glossary",id:"glossary",level:2},{value:"Noun in Doris",id:"noun-in-doris",level:3},{value:"How To Use",id:"how-to-use",level:2},{value:"Create ODBC External Table",id:"create-odbc-external-table",level:3},{value:"1. Creating ODBC external table without resource",id:"1-creating-odbc-external-table-without-resource",level:4},{value:"2. Creating ODBC external table by resource (recommended)",id:"2-creating-odbc-external-table-by-resource-recommended",level:4},{value:"Installation and configuration of ODBC driver",id:"installation-and-configuration-of-odbc-driver",level:5},{value:"Query usage",id:"query-usage",level:3},{value:"Data write",id:"data-write",level:3},{value:"Transaction",id:"transaction",level:4},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"MySQL",id:"mysql",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Oracle",id:"oracle",level:3},{value:"SQLServer",id:"sqlserver",level:3},{value:"Q&amp;A",id:"qa",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"odbc-external-table-of-doris"},"ODBC External Table Of Doris"),(0,n.kt)("p",null,"ODBC external table of Doris provides Doris access to external tables through the standard interface for database access (ODBC). The external table eliminates the tedious data import work and enables Doris to have the ability to access all kinds of databases. It solves the data analysis problem of external tables with Doris' OLAP capability."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Support various data sources to access Doris"),(0,n.kt)("li",{parentName:"ol"},"Support Doris query with tables in various data sources to perform more complex analysis operations"),(0,n.kt)("li",{parentName:"ol"},"Use insert into to write the query results executed by Doris to the external data source")),(0,n.kt)("p",null,"This document mainly introduces the implementation principle and usage of this ODBC external table."),(0,n.kt)("h2",{id:"glossary"},"Glossary"),(0,n.kt)("h3",{id:"noun-in-doris"},"Noun in Doris"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,n.kt)("li",{parentName:"ul"},"BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")),(0,n.kt)("h2",{id:"how-to-use"},"How To Use"),(0,n.kt)("h3",{id:"create-odbc-external-table"},"Create ODBC External Table"),(0,n.kt)("h4",{id:"1-creating-odbc-external-table-without-resource"},"1. Creating ODBC external table without resource"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE EXTERNAL TABLE `baseall_oracle` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"table" = "baseall",\n"driver" = "Oracle 19 ODBC driver",\n"type" = "oracle"\n);\n')),(0,n.kt)("h4",{id:"2-creating-odbc-external-table-by-resource-recommended"},"2. Creating ODBC external table by resource (recommended)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n"type" = "odbc_catalog",\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"odbc_type" = "oracle",\n"driver" = "Oracle 19 ODBC driver"\n);\n     \nCREATE EXTERNAL TABLE `baseall_oracle` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n"odbc_catalog_resource" = "oracle_odbc",\n"database" = "test",\n"table" = "baseall"\n);\n')),(0,n.kt)("p",null,"The following parameters are accepted by ODBC external table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"hosts")),(0,n.kt)("td",{parentName:"tr",align:null},"IP address of external database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"driver")),(0,n.kt)("td",{parentName:"tr",align:null},"The driver name of ODBC Driver, which needs to be/conf/odbcinst.ini. The driver names should be consistent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:null},"The type of external database, currently supports Oracle, MySQL and PostgerSQL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:null},"The user name of database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"password")),(0,n.kt)("td",{parentName:"tr",align:null},"password for the user")))),(0,n.kt)("h5",{id:"installation-and-configuration-of-odbc-driver"},"Installation and configuration of ODBC driver"),(0,n.kt)("p",null,"Each database will provide ODBC access driver. Users can install the corresponding ODBC driver lib library according to the official recommendation of each database."),(0,n.kt)("p",null,"After installation of ODBC driver, find the path of the driver lib Library of the corresponding database. The modify be/conf/odbcinst.ini Configuration like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[MySQL Driver]\nDescription     = ODBC for MySQL\nDriver          = /usr/lib64/libmyodbc8w.so\nFileUsage       = 1 \n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[]"),": The corresponding driver name in is the driver name. When creating an external table, the driver name of the external table should be consistent with that in the configuration file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Driver="),": This should be setted in according to the actual be installation path of the driver. It is essentially the path of a dynamic library. Here, we need to ensure that the pre dependencies of the dynamic library are met.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Remember, all BE nodes are required to have the same driver installed, the same installation path and the same be/conf/odbcinst.ini config.")),(0,n.kt)("h3",{id:"query-usage"},"Query usage"),(0,n.kt)("p",null,"After the ODBC external table is create in Doris, it is no different from ordinary Doris tables except that the data model (rollup, pre aggregation, materialized view, etc.) in Doris cannot be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"select * from oracle_table where k1 > 1000 and k3 ='term' or k4 like '%doris'\n")),(0,n.kt)("h3",{id:"data-write"},"Data write"),(0,n.kt)("p",null,"After the ODBC external table is create in Doris, the data can be written directly by the ",(0,n.kt)("inlineCode",{parentName:"p"},"insert into")," statement, the query results of Doris can be written to the ODBC external table, or the data can be imported from one ODBC table to another."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'insert into oracle_table values(1, "doris");\ninsert into oracle_table select * from postgre_table;\n')),(0,n.kt)("h4",{id:"transaction"},"Transaction"),(0,n.kt)("p",null,"The data of Doris is written to the external table by a group of batch. If the import is interrupted, the data written before may need to be rolled back. Therefore, the ODBC external table supports transactions when data is written. Transaction support needs to be supported set by session variable: ",(0,n.kt)("inlineCode",{parentName:"p"},"enable_odbc_transcation"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set enable_odbc_transcation = true; \n")),(0,n.kt)("p",null,"Transactions ensure the atomicity of ODBC external table writing, but it will reduce the performance of data writing ., so we can consider turning on the way as appropriate."),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("p",null,"There are different data types among different databases. Here, the types in each database and the data type matching in Doris are listed."),(0,n.kt)("h3",{id:"mysql"},"MySQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"MySQL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Alternation rules"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Only UTF8 encoding is supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Only UTF8 encoding is supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PostgreSQL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Alternation rules"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Only UTF8 encoding is supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Only UTF8 encoding is supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TIMESTAMP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"oracle"},"Oracle"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Oracle"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Alternation rules"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"not support"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oracle can replace Boolean with number (1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"not support"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oracle can be replaced by NUMBER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"not support"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oracle can be replaced by NUMBER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"not support"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Oracle can be replaced by NUMBER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"sqlserver"},"SQLServer"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"SQLServer"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Alternation rules"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"CHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Only UTF8 encoding is supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"VARCHAR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Only UTF8 encoding is supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE/"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"REAL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"TINYINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"SMALLINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"INT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BIGINT"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FLOAT"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DOUBLE"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME/DATETIME2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DATETIME"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL/NUMERIC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DECIMAL"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h2",{id:"qa"},"Q&A"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Relationship with the original external table of MySQL?")),(0,n.kt)("p",null,"After accessing the ODBC external table, the original way to access the MySQL external table will be gradually abandoned. If you have not used the MySQL external table before, it is recommended that the newly accessed MySQL tables use ODBC external table directly."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Besides MySQL, Oracle, SQLServer, PostgreSQL, can doris support more databases?")),(0,n.kt)("p",null,"Currently, Doris only adapts to MySQL, Oracle, SQLServer, PostgreSQL. The adaptation of other databases is under planning. In principle, any database that supports ODBC access can be accessed through the ODBC external table. If you need to access other databases, you are welcome to modify the code and contribute to Doris."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When is it appropriate to use ODBC external tables?"),(0,n.kt)("p",{parentName:"li"},"Generally, when the amount of external data is small and less than 100W, it can be accessed through ODBC external table. Since external table the cannot play the role of Doris in the storage engine and will bring additional network overhead, it is recommended to determine whether to access through external tables or import data into Doris according to the actual access delay requirements for queries.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Garbled code in Oracle access?"),(0,n.kt)("p",{parentName:"li"},"Add the following parameters to the BE start up script: ",(0,n.kt)("inlineCode",{parentName:"p"},"export NLS_LANG=AMERICAN_AMERICA.AL32UTF8"),"R, Restart all be")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ANSI Driver or Unicode Driver?"),(0,n.kt)("p",{parentName:"li"},"Currently, ODBC supports both ANSI and Unicode driver forms, while Doris only supports Unicode driver. If you force the use of ANSI driver, the query results may be wrong.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Report Errors: ",(0,n.kt)("inlineCode",{parentName:"p"},"driver connect Err: 01000 [unixODBC][Driver Manager]Can't open lib 'Xxx' : file not found (0)")),(0,n.kt)("p",{parentName:"li"},"The driver for the corresponding data is not installed on each BE, or it is not installed in the be/conf/odbcinst.ini configure the correct path, or create the table with the driver namebe/conf/odbcinst.ini different")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Report Errors: ",(0,n.kt)("inlineCode",{parentName:"p"},"Fail to convert odbc value 'PALO ' TO INT on column:'A'")),(0,n.kt)("p",{parentName:"li"},"Type conversion error, type of column ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," mapping of actual column type is different, needs to be modified")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"BE crash occurs when using old MySQL table and ODBC external driver at the same time"))),(0,n.kt)("p",null,"This is the compatibility problem between MySQL database ODBC driver and existing Doris depending on MySQL lib. The recommended solutions are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Method 1: replace the old MySQL External Table by ODBC External Table, recompile BE close options ",(0,n.kt)("strong",{parentName:"p"},"WITH_MySQL"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Method 2: Do not use the latest 8. X MySQL ODBC driver replace with the 5. X MySQL ODBC driver"))),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Push down the filtering condition"),(0,n.kt)("p",{parentName:"li"},"The current ODBC appearance supports push down under filtering conditions. MySQL external table can support push down under all conditions. The functions of other databases are different from Doris, which will cause the push down query to fail. At present, except for the MySQL, other databases do not support push down of function calls. Whether Doris pushes down the required filter conditions can be confirmed by the 'explain' query statement.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Report Errors: ",(0,n.kt)("inlineCode",{parentName:"p"},"driver connect Err: xxx")),(0,n.kt)("p",{parentName:"li"},"Connection to the database fails. The",(0,n.kt)("inlineCode",{parentName:"p"}," Err: part")," represents the error of different database connection failures. This is usually a configuration problem. You should check whether the IP address, port or account password are mismatched."))))}m.isMDXComponent=!0}}]);