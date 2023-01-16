"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,b=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"CREATE SYNC JOB",language:"en"},o=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB",title:"CREATE SYNC JOB",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/CREATE-SYNC-JOB",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CREATE SYNC JOB",language:"en"},sidebar:"docs",previous:{title:"CANCEL LOAD",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/CANCEL-LOAD"},next:{title:"DELETE",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/DELETE"}},p={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-sync-job"},"CREATE SYNC JOB"),(0,r.kt)("h2",{id:"description"},"description"),(0,r.kt)("p",null,"The sync job feature supports to submit a resident SyncJob, and CDC (change data capture) the user's update operation in MySQL database by reading the binlog log from the specified remote address."),(0,r.kt)("p",null,"At present, data synchronization only supports docking with the canal, getting the parsed binlog from the canal server and loading it into Doris."),(0,r.kt)("p",null,"You can view the SyncJob's status by command 'SHOW SYNC JOB'."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE SYNC [db.]job_name\n (\n    channel_desc, \n    channel_desc\n    ...\n )\nbinlog_desc\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"job_name")),(0,r.kt)("p",{parentName:"li"},"job_Name is the unique identifier of the SyncJob in the current database. With a specified job name, only one SyncJob can be running at the same time.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"channel_desc")),(0,r.kt)("p",{parentName:"li"},"The data channel under the job is used to describe the mapping relationship between the MySQL source table and the Doris target table."),(0,r.kt)("p",{parentName:"li"},"Syntax:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"FROM mysql_db.src_tbl INTO des_tbl\n[partitions]\n[columns_mapping]\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mysql_db.src_tbl")),(0,r.kt)("p",{parentName:"li"},"Specify the database and source table on the MySQL side.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"des_tbl")),(0,r.kt)("p",{parentName:"li"},"Specify the target table on the Doris side. Only the unique table is supported, and the batch delete feature of the table needs to be enabled.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partitions")),(0,r.kt)("p",{parentName:"li"},"Specify which partitions to be load into in target table. If it is not specified, it will be automatically loaded into the corresponding partition."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"PARTITION(p1, p2, p3)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"column_mapping")),(0,r.kt)("p",{parentName:"li"},"Specify the mapping relationship between the columns of the MySQL source table and the Doris target table. If not specified, Fe will default that the columns of the source table and the target table correspond one by one in order."),(0,r.kt)("p",{parentName:"li"},"Columns are not supported in the 'col_name = expr' form."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Suppose the columns of target table are (K1, K2, V1),\n\nChange the order of columns K1 and K2\nCOLUMNS(k2, k1, v1)\n\nIgnore the fourth column of the source data\nCOLUMNS(k2, k1, v1, dummy_column)\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"binlog_desc")),(0,r.kt)("p",{parentName:"li"},"It is used to describe remote data sources. Currently, only canal is supported."),(0,r.kt)("p",{parentName:"li"},"Syntax:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'FROM BINLOG\n(\n    "key1" = "value1", \n    "key2" = "value2"\n)\n')),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The attribute related to the canal is prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"canal.")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"canal.server.ip: the address of the canal server"),(0,r.kt)("li",{parentName:"ol"},"canal.server.port: the port of canal server"),(0,r.kt)("li",{parentName:"ol"},"canal.destination: Identifier of instance"),(0,r.kt)("li",{parentName:"ol"},"canal.batchSize: the maximum batch size. The default is 8192"),(0,r.kt)("li",{parentName:"ol"},"canal.username: the username of instance"),(0,r.kt)("li",{parentName:"ol"},"canal.password: password of instance"),(0,r.kt)("li",{parentName:"ol"},"canal.debug: optional. When set to true, the details of each batch and each row will be printed.")))))),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"create a sync job named ",(0,r.kt)("inlineCode",{parentName:"p"},"job1")," for target table ",(0,r.kt)("inlineCode",{parentName:"p"},"test_tbl")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"test_db"),",  connects to the local canal server, and corresponds to the MySQL source table ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql_db1.tbl1")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'CREATE SYNC `test_db`.`job1`\n(\n    FROM `mysql_db1`.`tbl1` INTO `test_tbl `\n)\nFROM BINLOG \n(\n    "type" = "canal",\n    "canal.server.ip" = "127.0.0.1\x10",\n    "canal.server.port" = "11111",\n    "canal.destination" = "example",\n    "canal.username" = "",\n    "canal.password" = ""\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"create a sync job named ",(0,r.kt)("inlineCode",{parentName:"p"},"job1")," for multiple target tables in ",(0,r.kt)("inlineCode",{parentName:"p"},"test_db"),", correspond to multiple MySQL source tables one by one, and explicitly specify column mapping."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'CREATE SYNC `test_db`.`job1` \n(\n    FROM `mysql_db`.`t1` INTO `test1` COLUMNS(k1, k2, v1) PARTITIONS (p1, p2),\n    FROM `mysql_db`.`t2` INTO `test2` COLUMNS(k3, k4, v2) PARTITION p1\n) \nFROM BINLOG \n(\n    "type" = "canal", \n    "canal.server.ip" = "xx.xxx.xxx.xx", \n    "canal.server.port" = "12111", \n    "canal.destination" = "example",  \n    "canal.username" = "username", \n    "canal.password" = "password"\n);\n')))),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE,SYNC,JOB,BINLOG\n")))}d.isMDXComponent=!0}}]);