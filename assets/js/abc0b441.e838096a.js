"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[52299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(a),m=l,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const o={title:"Guidelines for Basic Use",language:"en"},i=void 0,r={unversionedId:"data-table/basic-usage",id:"data-table/basic-usage",title:"Guidelines for Basic Use",description:"\x3c!--",source:"@site/docs/data-table/basic-usage.md",sourceDirName:"data-table",slug:"/data-table/basic-usage",permalink:"/docs/data-table/basic-usage",draft:!1,tags:[],version:"current",frontMatter:{title:"Guidelines for Basic Use",language:"en"},sidebar:"docs",previous:{title:"Data Partition",permalink:"/docs/data-table/data-partition"},next:{title:"Rollup and query",permalink:"/docs/data-table/hit-the-rollup"}},s={},u=[{value:"Create Users",id:"create-users",level:2},{value:"Root User Logon and Password Modification",id:"root-user-logon-and-password-modification",level:3},{value:"Creating New Users",id:"creating-new-users",level:3},{value:"Data Table Creation and Data Import",id:"data-table-creation-and-data-import",level:2},{value:"Create a database",id:"create-a-database",level:3},{value:"Account Authorization",id:"account-authorization",level:3},{value:"Formulation",id:"formulation",level:3},{value:"Single partition",id:"single-partition",level:4},{value:"Composite partition",id:"composite-partition",level:4},{value:"Import data",id:"import-data",level:3},{value:"Flow-in",id:"flow-in",level:4},{value:"Broker Load",id:"broker-load",level:4},{value:"Data query",id:"data-query",level:2},{value:"Simple Query",id:"simple-query",level:3},{value:"Join Query",id:"join-query",level:3},{value:"Subquery",id:"subquery",level:3},{value:"Table Structure Change",id:"table-structure-change",level:2},{value:"Rollup",id:"rollup",level:2},{value:"Materialized Views",id:"materialized-views",level:2},{value:"Data table queries",id:"data-table-queries",level:2},{value:"Memory limit",id:"memory-limit",level:3},{value:"Query Timeout",id:"query-timeout",level:3},{value:"Broadcast/Shuffle Join",id:"broadcastshuffle-join",level:3},{value:"Query Retry and High Availability",id:"query-retry-and-high-availability",level:3},{value:"Data update and deletion",id:"data-update-and-deletion",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"use-guide"},"Use Guide"),(0,l.kt)("p",null,"Doris uses MySQL protocol to communicate. Users can connect to Doris cluster through MySQL client or MySQL JDBC. When selecting the MySQL client version, it is recommended to use the version after 5.1, because user names of more than 16 characters cannot be supported before 5.1. This paper takes MySQL client as an example to show users the basic usage of Doris through a complete process."),(0,l.kt)("h2",{id:"create-users"},"Create Users"),(0,l.kt)("h3",{id:"root-user-logon-and-password-modification"},"Root User Logon and Password Modification"),(0,l.kt)("p",null,"Doris has built-in root and admin users, and the password is empty by default. "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Remarks:"),(0,l.kt)("p",{parentName:"blockquote"},"The default root and admin users provided by Doris are admin users"),(0,l.kt)("p",{parentName:"blockquote"},"The >root user has all the privileges of the cluster by default. Users who have both Grant_priv and Node_priv can grant this permission to other users and have node change permissions, including operations such as adding, deleting, and going offline of FE, BE, and BROKER nodes."),(0,l.kt)("p",{parentName:"blockquote"},"admin user has ADMIN_PRIV and GRANT_PRIV privileges"),(0,l.kt)("p",{parentName:"blockquote"},"For specific instructions on permissions, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/admin-manual/privilege-ldap/user-privilege"},"Permission Management"))),(0,l.kt)("p",null,"After starting the Doris program, you can connect to the Doris cluster through root or admin users.\nUse the following command to log in to Doris:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"[root@doris ~]# mysql  -h FE_HOST -P9030 -uroot\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 41\nServer version: 5.1.0 Doris version 1.0.0-preview2-b48ee2734\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> \n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"}," FE_HOST")," is the IP address of any FE node. ",(0,l.kt)("inlineCode",{parentName:"p"},"9030")," is the query_port configuration in fe.conf.")),(0,l.kt)("p",null,"After login, you can modify the root password by following commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SET PASSWORD FOR 'root' = PASSWORD('your_password');\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"your_password")," is a new password for the ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," user, which can be set at will. It is recommended to set a strong password to increase security, and use the new password to log in the next time you log in.")),(0,l.kt)("h3",{id:"creating-new-users"},"Creating New Users"),(0,l.kt)("p",null,"We can create a regular user ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'test' IDENTIFIED BY 'test_passwd';\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,l.kt)("p",null,"Follow-up login can be done through the following connection commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"[root@doris ~]# mysql -h FE_HOST -P9030 -utest -ptest_passwd\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"By default, the newly created common user does not have any permissions. Permission grants can be referred to later permission grants.")),(0,l.kt)("h2",{id:"data-table-creation-and-data-import"},"Data Table Creation and Data Import"),(0,l.kt)("h3",{id:"create-a-database"},"Create a database"),(0,l.kt)("p",null,"Initially, a database can be created through root or admin users:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE example_db;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"All commands can use ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP")," command to see detailed grammar help. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP CREATE DATABASE;'"),".You can also refer to the official website ",(0,l.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE"},"SHOW CREATE DATABASE")," command manual."),(0,l.kt)("p",{parentName:"blockquote"},'If you don\'t know the full name of the command, you can use "help command a field" for fuzzy query. If you type ',(0,l.kt)("inlineCode",{parentName:"p"},"HELP CREATE"),", you can match commands like ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE', "),"CREATE TABLE', `CREATE USER', etc.")),(0,l.kt)("p",null,"After the database is created, you can view the database information through ",(0,l.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES"},"SHOW DATABASES"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| example_db         |\n| information_schema |\n+--------------------+\n2 rows in set (0.00 sec)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information_schema exists to be compatible with MySQL protocol. In practice, information may not be very accurate. Therefore, information about specific databases is suggested to be obtained by directly querying the corresponding databases.")),(0,l.kt)("h3",{id:"account-authorization"},"Account Authorization"),(0,l.kt)("p",null,"After the example_db is created, the read and write permissions of example_db can be authorized to ordinary accounts, such as test, through the root/admin account. After authorization, the example_db database can be operated by logging in with the test account."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> GRANT ALL ON example_db TO test;\nQuery OK, 0 rows affected (0.01 sec)\n")),(0,l.kt)("h3",{id:"formulation"},"Formulation"),(0,l.kt)("p",null,"Create a table using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE")," command. More detailed parameters can be seen:",(0,l.kt)("inlineCode",{parentName:"p"},"HELP CREATE TABLE;")),(0,l.kt)("p",null,"First, we need to switch databases using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Utility-Statements/USE"},"USE")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> USE example_db;\nDatabase changed\n")),(0,l.kt)("p",null,"Doris supports ",(0,l.kt)("a",{parentName:"p",href:"/docs/data-table/data-partition"},"composite partition and single partition"),"  two table building methods. The following takes the aggregation model as an example to demonstrate how to create two partitioned data tables."),(0,l.kt)("h4",{id:"single-partition"},"Single partition"),(0,l.kt)("p",null,"Create a logical table with the name table1. The number of barrels is 10."),(0,l.kt)("p",null,"The schema of this table is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Siteid: Type is INT (4 bytes), default value is 10"),(0,l.kt)("li",{parentName:"ul"},"citycode: The type is SMALLINT (2 bytes)"),(0,l.kt)("li",{parentName:"ul"},"username: The type is VARCHAR, the maximum length is 32, and the default value is an empty string."),(0,l.kt)("li",{parentName:"ul"},"pv: Type is BIGINT (8 bytes), default value is 0; this is an index column, Doris will aggregate the index column internally, the aggregation method of this column is SUM.")),(0,l.kt)("p",null,"The TABLE statement is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table1\n(\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, citycode, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n")),(0,l.kt)("h4",{id:"composite-partition"},"Composite partition"),(0,l.kt)("p",null,"Create a logical table named table2."),(0,l.kt)("p",null,"The schema of this table is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"event_day: Type DATE, no default"),(0,l.kt)("li",{parentName:"ul"},"Siteid: Type is INT (4 bytes), default value is 10"),(0,l.kt)("li",{parentName:"ul"},"citycode: The type is SMALLINT (2 bytes)"),(0,l.kt)("li",{parentName:"ul"},"username: The type is VARCHAR, the maximum length is 32, and the default value is an empty string."),(0,l.kt)("li",{parentName:"ul"},"pv: Type is BIGINT (8 bytes), default value is 0; this is an index column, Doris will aggregate the index column internally, the aggregation method of this column is SUM.")),(0,l.kt)("p",null,"We use the event_day column as the partition column to create three partitions: p201706, p201707, and p201708."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"p201706: Range [Minimum, 2017-07-01)"),(0,l.kt)("li",{parentName:"ul"},"p201707: Scope [2017-07-01, 2017-08-01)"),(0,l.kt)("li",{parentName:"ul"},"p201708: Scope [2017-08-01, 2017-09-01)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note that the interval is left closed and right open.")),(0,l.kt)("p",null,"Each partition uses siteid to hash buckets, with a bucket count of 10"),(0,l.kt)("p",null,"The TABLE statement is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table2\n(\n    event_day DATE,\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, siteid, citycode, username)\nPARTITION BY RANGE(event_day)\n(\n    PARTITION p201706 VALUES LESS THAN ('2017-07-01'),\n    PARTITION p201707 VALUES LESS THAN ('2017-08-01'),\n    PARTITION p201708 VALUES LESS THAN ('2017-09-01')\n)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n")),(0,l.kt)("p",null,"After the table is built, you can view the information of the table in example_db:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL> SHOW TABLES;\n+----------------------+\n| Tables_in_example_db |\n+----------------------+\n| table1               |\n| table2               |\n+----------------------+\n2 rows in set (0.01 sec)\n\nMySQL> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | Yes  | true  | 10      |       |\n| citycode | smallint(6) | Yes  | true  | N/A     |       |\n| username | varchar(32) | Yes  | true  |         |       |\n| pv       | bigint(20)  | Yes  | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n4 rows in set (0.00 sec)\n\nMySQL> DESC table2;\n+-----------+-------------+------+-------+---------+-------+\n| Field     | Type        | Null | Key   | Default | Extra |\n+-----------+-------------+------+-------+---------+-------+\n| event_day | date        | Yes  | true  | N/A     |       |\n| siteid    | int(11)     | Yes  | true  | 10      |       |\n| citycode  | smallint(6) | Yes  | true  | N/A     |       |\n| username  | varchar(32) | Yes  | true  |         |       |\n| pv        | bigint(20)  | Yes  | false | 0       | SUM   |\n+-----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes:"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"By setting replication_num, the above tables are all single-copy tables. Doris recommends that users adopt the default three-copy settings to ensure high availability."),(0,l.kt)("li",{parentName:"ol"},"Composite partition tables can be added or deleted dynamically. See the Partition section in ",(0,l.kt)("inlineCode",{parentName:"li"},"HELP ALTER TABLE"),"."),(0,l.kt)("li",{parentName:"ol"},"Data import can import the specified Partition. See ",(0,l.kt)("inlineCode",{parentName:"li"},"HELP LOAD;"),"."),(0,l.kt)("li",{parentName:"ol"},"Schema of table can be dynamically modified, See ",(0,l.kt)("inlineCode",{parentName:"li"},"HELP ALTER TABLE;"),"."),(0,l.kt)("li",{parentName:"ol"},"Rollup can be added to Table to improve query performance. This section can be referred to the description of Rollup in Advanced Usage Guide."),(0,l.kt)("li",{parentName:"ol"},"The default value of Null property for column is true, which may result in poor scan performance."))),(0,l.kt)("h3",{id:"import-data"},"Import data"),(0,l.kt)("p",null,"Doris supports a variety of data import methods. Specifically, you can refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/data-operate/import/load-manual"},"data import")," document. Here we use streaming import and Broker import as examples."),(0,l.kt)("h4",{id:"flow-in"},"Flow-in"),(0,l.kt)("p",null,"Streaming import transfers data to Doris via HTTP protocol. It can import local data directly without relying on other systems or components. Detailed grammar help can be found in `HELP STREAM LOAD;'"),(0,l.kt)("p",null,'Example 1: With "table1_20170707" as Label, import table1 tables using the local file table1_data.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u test:test_passwd -H "label:table1_20170707" -H "column_separator:," -T table1_data http://FE_HOST:8030/api/example_db/table1/_stream_load\n')),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"FE_HOST is the IP of any FE node and 8030 is http_port in fe.conf."),(0,l.kt)("li",{parentName:"ol"},"You can use the IP of any BE and the webserver_port in be.conf to connect the target left and right for import. For example: ",(0,l.kt)("inlineCode",{parentName:"li"},"BE_HOST:8040")))),(0,l.kt)("p",null,"The local file ",(0,l.kt)("inlineCode",{parentName:"p"},"table1_data")," takes ",(0,l.kt)("inlineCode",{parentName:"p"},",")," as the separation between data, and the specific contents are as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"1,1,Jim,2\n2,1,grace,2\n3,2,tom,2\n4,3,bush,3\n5,3,helen,3\n")),(0,l.kt)("p",null,'Example 2: With "table2_20170707" as Label, import table2 tables using the local file table2_data.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u test:test -H "label:table2_20170707" -H "column_separator:|" -T table2_data http://127.0.0.1:8030/api/example_db/table2/_stream_load\n')),(0,l.kt)("p",null,"The local file ",(0,l.kt)("inlineCode",{parentName:"p"},"table2_data'is separated by "),"|'. The details are as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2017-07-03|1|1|jim|2\n2017-07-05|2|1|grace|2\n2017-07-12|3|2|tom|2\n2017-07-15|4|3|bush|3\n2017-07-12|5|3|helen|3\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Notes:"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"The recommended file size for streaming import is limited to 10GB. Excessive file size will result in higher cost of retry failure."),(0,l.kt)("li",{parentName:"ol"},"Each batch of imported data needs to take a Label. Label is best a string related to a batch of data for easy reading and management. Doris based on Label guarantees that the same batch of data can be imported only once in a database. Label for failed tasks can be reused."),(0,l.kt)("li",{parentName:"ol"},"Streaming imports are synchronous commands. The successful return of the command indicates that the data has been imported, and the failure of the return indicates that the batch of data has not been imported."))),(0,l.kt)("h4",{id:"broker-load"},"Broker Load"),(0,l.kt)("p",null,"Broker imports import data from external storage through deployed Broker processes. For more help, see ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP BROKER LOAD;")),(0,l.kt)("p",null,'Example: Import files on HDFS into table1 table with "table1_20170708" as Label'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL table1_20170708\n(\n    DATA INFILE("hdfs://your.namenode.host:port/dir/table1_data")\n    INTO TABLE table1\n)\nWITH BROKER hdfs \n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n)\nPROPERTIES\n(\n    "timeout"="3600",\n    "max_filter_ratio"="0.1"\n);\n')),(0,l.kt)("p",null,"Broker imports are asynchronous commands. Successful execution of the above commands only indicates successful submission of tasks. Successful imports need to be checked through `SHOW LOAD;' Such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WHERE LABEL = "table1_20170708";\n')),(0,l.kt)("p",null,"In the return result, ",(0,l.kt)("inlineCode",{parentName:"p"},"FINISHED")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"State")," field indicates that the import was successful."),(0,l.kt)("p",null,"For more instructions on ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW LOAD"),", see",(0,l.kt)("inlineCode",{parentName:"p"},"HELP SHOW LOAD;")),(0,l.kt)("p",null,"Asynchronous import tasks can be cancelled before the end:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD WHERE LABEL = "table1_20170708";\n')),(0,l.kt)("h2",{id:"data-query"},"Data query"),(0,l.kt)("h3",{id:"simple-query"},"Simple Query"),(0,l.kt)("p",null,"Query example::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL> SELECT * FROM table1 LIMIT 3;\n+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      2 |        1 | 'grace'  |    2 |\n|      5 |        3 | 'helen'  |    3 |\n|      3 |        2 | 'tom'    |    2 |\n+--------+----------+----------+------+\n3 rows in set (0.01 sec)\n\nMySQL> SELECT * FROM table1 ORDER BY citycode;\n+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      2 |        1 | 'grace'  |    2 |\n|      1 |        1 | 'jim'    |    2 |\n|      3 |        2 | 'tom'    |    2 |\n|      4 |        3 | 'bush'   |    3 |\n|      5 |        3 | 'helen'  |    3 |\n+--------+----------+----------+------+\n5 rows in set (0.01 sec)\n")),(0,l.kt)("h3",{id:"join-query"},"Join Query"),(0,l.kt)("p",null,"Query example::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL> SELECT SUM(table1.pv) FROM table1 JOIN table2 WHERE table1.siteid = table2.siteid;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 12 |\n+--------------------+\n1 row in set (0.20 sec)\n")),(0,l.kt)("h3",{id:"subquery"},"Subquery"),(0,l.kt)("p",null,"Query example::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL> SELECT SUM(pv) FROM table2 WHERE siteid IN (SELECT siteid FROM table1 WHERE siteid > 2);\n+-----------+\n| sum(`pv`) |\n+-----------+\n|         8 |\n+-----------+\n1 row in set (0.13 sec)\n")),(0,l.kt)("h2",{id:"table-structure-change"},"Table Structure Change"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"ALTER TABLE COLUMN")," command to modify the table Schema, including the following changes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Adding columns"),(0,l.kt)("li",{parentName:"ul"},"Deleting columns"),(0,l.kt)("li",{parentName:"ul"},"Modify column types"),(0,l.kt)("li",{parentName:"ul"},"Changing the order of columns")),(0,l.kt)("p",null,"The following table structure changes are illustrated by using the following example."),(0,l.kt)("p",null,"The Schema for the original table1 is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")),(0,l.kt)("p",null,"We add a new column uv, type BIGINT, aggregation type SUM, default value 0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 ADD COLUMN uv BIGINT SUM DEFAULT '0' after pv;\n")),(0,l.kt)("p",null,"After successful submission, you can check the progress of the job with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE COLUMN;\n")),(0,l.kt)("p",null,"When the job status is ",(0,l.kt)("inlineCode",{parentName:"p"},"FINISHED"),", the job is complete. The new Schema has taken effect."),(0,l.kt)("p",null,"After ALTER TABLE is completed, you can view the latest Schema via ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC TABLE"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")),(0,l.kt)("p",null,"You can cancel the currently executing job with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE COLUMN FROM table1;\n")),(0,l.kt)("p",null,"For more help, see ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE"),"."),(0,l.kt)("h2",{id:"rollup"},"Rollup"),(0,l.kt)("p",null,"Rollup can be understood as a materialized index structure for a Table. ",(0,l.kt)("strong",{parentName:"p"},"Materialized")," because its data is physically stored independently, and ",(0,l.kt)("strong",{parentName:"p"},"Indexed")," in the sense that Rollup can reorder columns to increase the hit rate of prefix indexes, and can reduce key columns to increase the aggregation of data."),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP"},"ALTER TABLE ROLLUP")," to perform various changes to Rollup."),(0,l.kt)("p",null,"The following examples are given"),(0,l.kt)("p",null,"The Schema of the original table1 is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")),(0,l.kt)("p",null,"For table1 detailed data is siteid, citycode, username three constitute a set of key, so that the pv field aggregation; if the business side often have to see the total number of city pv needs, you can create a rollup of only citycode, pv."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table1 ADD ROLLUP rollup_city(citycode, pv);\n")),(0,l.kt)("p",null,"After successful submission, you can check the progress of the job with the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ALTER TABLE ROLLUP;\n")),(0,l.kt)("p",null,"When the job status is ",(0,l.kt)("inlineCode",{parentName:"p"},"FINISHED"),", the job is completed."),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC table1 ALL")," to view the rollup information of the table after the rollup is created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> desc table1 all;\n+-------------+----------+-------------+------+-------+--------+-------+\n| IndexName   | Field    | Type        | Null | Key   | Default | Extra |\n+-------------+----------+-------------+------+-------+---------+-------+\n| table1      | siteid   | int(11)     | No   | true  | 10      |       |\n|             | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | username | varchar(32) | No   | true  |         |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n|             | uv       | bigint(20)  | No   | false | 0       | SUM   |\n|             |          |             |      |       |         |       |\n| rollup_city | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n+-------------+----------+-------------+------+-------+---------+-------+\n8 rows in set (0.01 sec)\n")),(0,l.kt)("p",null,"You can cancel the currently executing job with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP FROM table1;\n")),(0,l.kt)("p",null,"After Rollup is created, the query does not need to specify Rollup for the query. You can still specify the original table for the query. The program will automatically determine if Rollup should be used, and whether Rollup is hit or not can be checked with the ",(0,l.kt)("inlineCode",{parentName:"p"},"EXPLAIN your_sql;")," command."),(0,l.kt)("p",null,"For more help, see ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE"),"."),(0,l.kt)("h2",{id:"materialized-views"},"Materialized Views"),(0,l.kt)("p",null,"Materialized views are a space-for-time data analysis acceleration technique, and Doris supports building materialized views on top of base tables. For example, a partial column-based aggregated view can be built on top of a table with a granular data model, allowing for fast querying of both granular and aggregated data."),(0,l.kt)("p",null,"At the same time, Doris can automatically ensure data consistency between materialized views and base tables, and automatically match the appropriate materialized view at query time, greatly reducing the cost of data maintenance for users and providing a consistent and transparent query acceleration experience for users."),(0,l.kt)("p",null,"For more information about materialized views, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced/materialized-view"},"Materialized Views")),(0,l.kt)("h2",{id:"data-table-queries"},"Data table queries"),(0,l.kt)("h3",{id:"memory-limit"},"Memory limit"),(0,l.kt)("p",null,"To prevent a user from having a single query that may consume too much memory because it consumes too much memory. The query is memory-controlled, and by default a query task can use no more than 2GB of memory on a single BE node."),(0,l.kt)("p",null,"If a user finds a ",(0,l.kt)("inlineCode",{parentName:"p"},"Memory limit exceeded")," error while using it, the memory limit is usually exceeded."),(0,l.kt)("p",null,"When you encounter a memory limit exceeded, you should try to solve it by optimizing your sql statements."),(0,l.kt)("p",null,"If you find exactly that 2GB of memory cannot be met, you can set the memory parameters manually."),(0,l.kt)("p",null,"Show query memory limit:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 2147483648 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')),(0,l.kt)("p",null,"The unit of ",(0,l.kt)("inlineCode",{parentName:"p"},"exec_mem_limit")," is byte, and the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"exec_mem_limit")," can be changed by ",(0,l.kt)("inlineCode",{parentName:"p"},"SET")," command. For example, change it to 8GB."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> SET exec_mem_limit = 8589934592;\nQuery OK, 0 rows affected (0.00 sec)\nmysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 8589934592 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"The above change is session level and is only valid for the current connection session. Disconnecting and reconnecting will change it back to the default value."),(0,l.kt)("li",{parentName:"ul"},"If you need to change the global variable, you can set it like this: ",(0,l.kt)("inlineCode",{parentName:"li"},"SET GLOBAL exec_mem_limit = 8589934592;"),". After setting, disconnect and log back in, the parameter will take effect permanently."))),(0,l.kt)("h3",{id:"query-timeout"},"Query Timeout"),(0,l.kt)("p",null,"The current default query timeout is set to a maximum of 300 seconds. If a query does not complete within 300 seconds, the query will be cancelled by the Doris system. You can use this parameter to customize the timeout for your application to achieve a blocking method similar to wait(timeout)."),(0,l.kt)("p",null,"View the current timeout settings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW VARIABLES LIKE "%query_timeout%";\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| QUERY_TIMEOUT | 300   |\n+---------------+-------+\n1 row in set (0.00 sec)\n')),(0,l.kt)("p",null,"Modify the timeout to 1 minute:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql>  SET query_timeout = 60;\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"The current timeout check interval is 5 seconds, so a timeout of less than 5 seconds is not too accurate."),(0,l.kt)("li",{parentName:"ul"},"The above changes are also session level. You can change the global validity by ",(0,l.kt)("inlineCode",{parentName:"li"},"SET GLOBAL"),"."))),(0,l.kt)("h3",{id:"broadcastshuffle-join"},"Broadcast/Shuffle Join"),(0,l.kt)("p",null,"The default way to implement Join is to filter the small table conditionally, broadcast it to each node of the large table to form a memory Hash table, and then stream the data of the large table for Hash Join, but if the filtered data of the small table cannot be put into memory, the Join will not be completed, and the usual error should be the first to cause memory overrun."),(0,l.kt)("p",null,"In this case, it is recommended to explicitly specify Shuffle Join, also known as Partitioned Join, where both the small and large tables are Hashed according to the key of the join and then perform a distributed join, with the memory consumption being spread across all compute nodes in the cluster."),(0,l.kt)("p",null,"Doris will automatically attempt a Broadcast Join and switch to a Shuffle Join if the small table is estimated to be too large; note that if a Broadcast Join is explicitly specified at this point, it will also switch to a Shuffle Join."),(0,l.kt)("p",null,"Use Broadcast Join (default):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select sum(table1.pv) from table1 join table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")),(0,l.kt)("p",null,"Use Broadcast Join (explicitly specified):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select sum(table1.pv) from table1 join [broadcast] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")),(0,l.kt)("p",null,"Use Shuffle Join:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select sum(table1.pv) from table1 join [shuffle] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.15 sec)\n")),(0,l.kt)("h3",{id:"query-retry-and-high-availability"},"Query Retry and High Availability"),(0,l.kt)("p",null,"When deploying multiple FE nodes, you can deploy a load balancing layer on top of multiple FEs to achieve high availability of Doris."),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"../../admin-manual/cluster-management/load-balancing"},"Load Balancing")),(0,l.kt)("h2",{id:"data-update-and-deletion"},"Data update and deletion"),(0,l.kt)("p",null,"Doris supports deleting imported data in two ways. One way is to delete data by specifying a WHERE condition with a DELETE FROM statement. This method is more general and suitable for less frequent scheduled deletion tasks."),(0,l.kt)("p",null,"The other deletion method is for the Unique primary key unique model only, where the primary key rows to be deleted are imported by importing the data, and the final physical deletion of the data is performed internally by Doris using the delete tag bit. This deletion method is suitable for deleting data in a real-time manner."),(0,l.kt)("p",null,"For specific instructions on delete and update operations, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/data-operate/update-delete/update"},"Data Update")," documentation."))}c.isMDXComponent=!0}}]);