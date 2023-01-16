"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[38748],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={title:"Guidelines for Basic Use",language:"en"},r=void 0,l={unversionedId:"getting-started/basic-usage",id:"version-0.15/getting-started/basic-usage",title:"Guidelines for Basic Use",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/getting-started/basic-usage.md",sourceDirName:"getting-started",slug:"/getting-started/basic-usage",permalink:"/docs/0.15/getting-started/basic-usage",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Guidelines for Basic Use",language:"en"},sidebar:"docs",previous:{title:"Cluster upgrade",permalink:"/docs/0.15/installing/upgrade"},next:{title:"Advanced Use Guide",permalink:"/docs/0.15/getting-started/advance-usage"}},s={},p=[{value:"1 Create Users",id:"1-create-users",level:2},{value:"1.1 Root User Logon and Password Modification",id:"11-root-user-logon-and-password-modification",level:3},{value:"1.3 Creating New Users",id:"13-creating-new-users",level:3},{value:"2 Data Table Creation and Data Import",id:"2-data-table-creation-and-data-import",level:2},{value:"2.1 Create a database",id:"21-create-a-database",level:3},{value:"2.2 Account Authorization",id:"22-account-authorization",level:3},{value:"2.3 Formulation",id:"23-formulation",level:3},{value:"Single partition",id:"single-partition",level:4},{value:"Composite partition",id:"composite-partition",level:4},{value:"2.4 Import data",id:"24-import-data",level:3},{value:"Flow-in",id:"flow-in",level:4},{value:"Broker Load",id:"broker-load",level:4},{value:"3 Data query",id:"3-data-query",level:2},{value:"3.1 Simple Query",id:"31-simple-query",level:3},{value:"3.3 Join Query",id:"33-join-query",level:3},{value:"3.4 Subquery",id:"34-subquery",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"guidelines-for-basic-use"},"Guidelines for Basic Use"),(0,o.kt)("p",null,"Doris uses MySQL protocol to communicate. Users can connect to Doris cluster through MySQL client or MySQL JDBC. When selecting the MySQL client version, it is recommended to use the version after 5.1, because user names of more than 16 characters cannot be supported before 5.1. This paper takes MySQL client as an example to show users the basic usage of Doris through a complete process."),(0,o.kt)("h2",{id:"1-create-users"},"1 Create Users"),(0,o.kt)("h3",{id:"11-root-user-logon-and-password-modification"},"1.1 Root User Logon and Password Modification"),(0,o.kt)("p",null,"Doris has built-in root and admin users, and the password is empty by default. After starting the Doris program, you can connect to the Doris cluster through root or admin users.\nUse the following command to log in to Doris:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql -h FE_HOST -P9030 -uroot\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"}," fe_host")," is the IP address of any FE node. ",(0,o.kt)("inlineCode",{parentName:"p"},"9030")," is the query_port configuration in fe.conf.")),(0,o.kt)("p",null,"After login, you can modify the root password by following commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SET PASSWORD FOR 'root' = PASSWORD('your_password');\n")),(0,o.kt)("h3",{id:"13-creating-new-users"},"1.3 Creating New Users"),(0,o.kt)("p",null,"Create an ordinary user with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE USER 'test' IDENTIFIED BY 'test_passwd';\n")),(0,o.kt)("p",null,"Follow-up login can be done through the following connection commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql -h FE_HOST -P9030 -utest -ptest_passwd\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, the newly created common user does not have any permissions. Permission grants can be referred to later permission grants.")),(0,o.kt)("h2",{id:"2-data-table-creation-and-data-import"},"2 Data Table Creation and Data Import"),(0,o.kt)("h3",{id:"21-create-a-database"},"2.1 Create a database"),(0,o.kt)("p",null,"Initially, a database can be created through root or admin users:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE example_db;")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All commands can use ",(0,o.kt)("inlineCode",{parentName:"p"},"HELP")," command to see detailed grammar help. For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"HELP CREATE DATABASE;'"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'If you don\'t know the full name of the command, you can use "help command a field" for fuzzy query. If you type ',(0,o.kt)("inlineCode",{parentName:"p"},"HELP CREATE"),", you can match commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE', "),"CREATE TABLE', `CREATE USER', etc.")),(0,o.kt)("p",null,"After the database is created, you can view the database information through `SHOW DATABASES'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| example_db         |\n| information_schema |\n+--------------------+\n2 rows in set (0.00 sec)\n")),(0,o.kt)("p",null,"Information_schema exists to be compatible with MySQL protocol. In practice, information may not be very accurate. Therefore, information about specific databases is suggested to be obtained by directly querying the corresponding databases."),(0,o.kt)("h3",{id:"22-account-authorization"},"2.2 Account Authorization"),(0,o.kt)("p",null,"After the example_db is created, the read and write permissions of example_db can be authorized to ordinary accounts, such as test, through the root/admin account. After authorization, the example_db database can be operated by logging in with the test account."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GRANT ALL ON example_db TO test;")),(0,o.kt)("h3",{id:"23-formulation"},"2.3 Formulation"),(0,o.kt)("p",null,"Create a table using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," command. More detailed parameters can be seen:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"HELP CREATE TABLE;")),(0,o.kt)("p",null,"First switch the database:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"USE example_db;")),(0,o.kt)("p",null,"Doris supports single partition and composite partition."),(0,o.kt)("p",null,"In the composite partition:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The first level is called Partition, or partition. Users can specify a dimension column as a partition column (currently only integer and time type columns are supported), and specify the range of values for each partition.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The second stage is called Distribution, or bucket division. Users can specify one or more dimension columns and the number of buckets for HASH distribution of data."))),(0,o.kt)("p",null,"Composite partitioning is recommended for the following scenarios"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are time dimensions or similar dimensions with ordered values, which can be used as partition columns. The partition granularity can be evaluated according to the frequency of importation and the amount of partition data."),(0,o.kt)("li",{parentName:"ul"},"Historic data deletion requirements: If there is a need to delete historical data (for example, only the last N days of data are retained). Using composite partitions, you can achieve this by deleting historical partitions. Data can also be deleted by sending a DELETE statement within a specified partition."),(0,o.kt)("li",{parentName:"ul"},"Solve the data skew problem: Each partition can specify the number of buckets separately. If dividing by day, when the amount of data varies greatly every day, we can divide the data of different partitions reasonably by the number of buckets in the specified partition. Bucket columns recommend choosing columns with high degree of differentiation.")),(0,o.kt)("p",null,"Users can also use no composite partitions, even single partitions. Then the data are only distributed by HASH."),(0,o.kt)("p",null,"Taking the aggregation model as an example, the following two partitions are illustrated separately."),(0,o.kt)("h4",{id:"single-partition"},"Single partition"),(0,o.kt)("p",null,"Create a logical table with the name table1. The number of barrels is 10."),(0,o.kt)("p",null,"The schema of this table is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Siteid: Type is INT (4 bytes), default value is 10"),(0,o.kt)("li",{parentName:"ul"},"citycode: The type is SMALLINT (2 bytes)"),(0,o.kt)("li",{parentName:"ul"},"username: The type is VARCHAR, the maximum length is 32, and the default value is an empty string."),(0,o.kt)("li",{parentName:"ul"},"pv: Type is BIGINT (8 bytes), default value is 0; this is an index column, Doris will aggregate the index column internally, the aggregation method of this column is SUM.")),(0,o.kt)("p",null,"The TABLE statement is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE TABLE table1\n(\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, citycode, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n")),(0,o.kt)("h4",{id:"composite-partition"},"Composite partition"),(0,o.kt)("p",null,"Create a logical table named table2."),(0,o.kt)("p",null,"The schema of this table is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"event_day: Type DATE, no default"),(0,o.kt)("li",{parentName:"ul"},"Siteid: Type is INT (4 bytes), default value is 10"),(0,o.kt)("li",{parentName:"ul"},"citycode: The type is SMALLINT (2 bytes)"),(0,o.kt)("li",{parentName:"ul"},"username: The type is VARCHAR, the maximum length is 32, and the default value is an empty string."),(0,o.kt)("li",{parentName:"ul"},"pv: Type is BIGINT (8 bytes), default value is 0; this is an index column, Doris will aggregate the index column internally, the aggregation method of this column is SUM.")),(0,o.kt)("p",null,"We use the event_day column as the partition column to create three partitions: p201706, p201707, and p201708."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"p201706: Range [Minimum, 2017-07-01)"),(0,o.kt)("li",{parentName:"ul"},"p201707: Scope [2017-07-01, 2017-08-01)"),(0,o.kt)("li",{parentName:"ul"},"p201708: Scope [2017-08-01, 2017-09-01)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the interval is left closed and right open.")),(0,o.kt)("p",null,"Each partition uses siteid to hash buckets, with a bucket count of 10"),(0,o.kt)("p",null,"The TABLE statement is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE TABLE table2\n(\n    event_day DATE,\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, siteid, citycode, username)\nPARTITION BY RANGE(event_day)\n(\n    PARTITION p201706 VALUES LESS THAN ('2017-07-01'),\n    PARTITION p201707 VALUES LESS THAN ('2017-08-01'),\n    PARTITION p201708 VALUES LESS THAN ('2017-09-01')\n)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n")),(0,o.kt)("p",null,"After the table is built, you can view the information of the table in example_db:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL> SHOW TABLES;\n+----------------------+\n| Tables_in_example_db |\n+----------------------+\n| table1               |\n| table2               |\n+----------------------+\n2 rows in set (0.01 sec)\n\nMySQL> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | Yes  | true  | 10      |       |\n| citycode | smallint(6) | Yes  | true  | N/A     |       |\n| username | varchar(32) | Yes  | true  |         |       |\n| pv       | bigint(20)  | Yes  | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n4 rows in set (0.00 sec)\n\nMySQL> DESC table2;\n+-----------+-------------+------+-------+---------+-------+\n| Field     | Type        | Null | Key   | Default | Extra |\n+-----------+-------------+------+-------+---------+-------+\n| event_day | date        | Yes  | true  | N/A     |       |\n| siteid    | int(11)     | Yes  | true  | 10      |       |\n| citycode  | smallint(6) | Yes  | true  | N/A     |       |\n| username  | varchar(32) | Yes  | true  |         |       |\n| pv        | bigint(20)  | Yes  | false | 0       | SUM   |\n+-----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notes:"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"By setting replication_num, the above tables are all single-copy tables. Doris recommends that users adopt the default three-copy settings to ensure high availability."),(0,o.kt)("li",{parentName:"ol"},"Composite partition tables can be added or deleted dynamically. See the Partition section in ",(0,o.kt)("inlineCode",{parentName:"li"},"HELP ALTER TABLE"),"."),(0,o.kt)("li",{parentName:"ol"},"Data import can import the specified Partition. See `HELP LOAD'."),(0,o.kt)("li",{parentName:"ol"},"Schema of table can be dynamically modified."),(0,o.kt)("li",{parentName:"ol"},"Rollup can be added to Table to improve query performance. This section can be referred to the description of Rollup in Advanced Usage Guide."),(0,o.kt)("li",{parentName:"ol"},"The default value of Null property for column is true, which may result in poor scan performance."))),(0,o.kt)("h3",{id:"24-import-data"},"2.4 Import data"),(0,o.kt)("p",null,"Doris supports a variety of data import methods. Specifically, you can refer to the data import document. Here we use streaming import and Broker import as examples."),(0,o.kt)("h4",{id:"flow-in"},"Flow-in"),(0,o.kt)("p",null,"Streaming import transfers data to Doris via HTTP protocol. It can import local data directly without relying on other systems or components. Detailed grammar help can be found in `HELP STREAM LOAD;'"),(0,o.kt)("p",null,'Example 1: With "table1_20170707" as Label, import table1 tables using the local file table1_data.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u test:test_passwd -H "label:table1_20170707" -H "column_separator:," -T table1_data http://FE_HOST:8030/api/example_db/table1/_stream_load\n')),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"FE_HOST is the IP of any FE node and 8030 is http_port in fe.conf."),(0,o.kt)("li",{parentName:"ol"},"You can use the IP of any BE and the webserver_port in be.conf to connect the target left and right for import. For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"BE_HOST:8040")))),(0,o.kt)("p",null,"The local file ",(0,o.kt)("inlineCode",{parentName:"p"},"table1_data")," takes ",(0,o.kt)("inlineCode",{parentName:"p"},",")," as the separation between data, and the specific contents are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1,1,Jim,2\n2,1,grace,2\n3,2,tom,2\n4,3,bush,3\n5,3,helen,3\n")),(0,o.kt)("p",null,'Example 2: With "table2_20170707" as Label, import table2 tables using the local file table2_data.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u test:test -H "label:table2_20170707" -H "column_separator:|" -T table2_data http://127.0.0.1:8030/api/example_db/table2/_stream_load\n')),(0,o.kt)("p",null,"The local file ",(0,o.kt)("inlineCode",{parentName:"p"},"table2_data'is separated by "),"|'. The details are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2017-07-03|1|1|jim|2\n2017-07-05|2|1|grace|2\n2017-07-12|3|2|tom|2\n2017-07-15|4|3|bush|3\n2017-07-12|5|3|helen|3\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notes:"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"The recommended file size for streaming import is limited to 10GB. Excessive file size will result in higher cost of retry failure."),(0,o.kt)("li",{parentName:"ol"},"Each batch of imported data needs to take a Label. Label is best a string related to a batch of data for easy reading and management. Doris based on Label guarantees that the same batch of data can be imported only once in a database. Label for failed tasks can be reused."),(0,o.kt)("li",{parentName:"ol"},"Streaming imports are synchronous commands. The successful return of the command indicates that the data has been imported, and the failure of the return indicates that the batch of data has not been imported."))),(0,o.kt)("h4",{id:"broker-load"},"Broker Load"),(0,o.kt)("p",null,"Broker imports import data from external storage through deployed Broker processes. For more help, see ",(0,o.kt)("inlineCode",{parentName:"p"},"HELP BROKER LOAD;")),(0,o.kt)("p",null,'Example: Import files on HDFS into table1 table with "table1_20170708" as Label'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'LOAD LABEL table1_20170708\n(\n    DATA INFILE("hdfs://your.namenode.host:port/dir/table1_data")\n    INTO TABLE table1\n)\nWITH BROKER hdfs \n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n)\nPROPERTIES\n(\n    "timeout"="3600",\n    "max_filter_ratio"="0.1"\n);\n')),(0,o.kt)("p",null,"Broker imports are asynchronous commands. Successful execution of the above commands only indicates successful submission of tasks. Successful imports need to be checked through `SHOW LOAD;' Such as:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'SHOW LOAD WHERE LABLE = "table1_20170708";')),(0,o.kt)("p",null,"In the return result, FINISHED in the ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," field indicates that the import was successful."),(0,o.kt)("p",null,"For more instructions on ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW LOAD"),", see",(0,o.kt)("inlineCode",{parentName:"p"},"HELP SHOW LOAD;")),(0,o.kt)("p",null,"Asynchronous import tasks can be cancelled before the end:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'CANCEL LOAD WHERE LABEL = "table1_20170708";')),(0,o.kt)("h2",{id:"3-data-query"},"3 Data query"),(0,o.kt)("h3",{id:"31-simple-query"},"3.1 Simple Query"),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL> SELECT * FROM table1 LIMIT 3;\n+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      2 |        1 | 'grace'  |    2 |\n|      5 |        3 | 'helen'  |    3 |\n|      3 |        2 | 'tom'    |    2 |\n+--------+----------+----------+------+\n3 rows in set (0.01 sec)\n\nMySQL> SELECT * FROM table1 ORDER BY citycode;\n+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      2 |        1 | 'grace'  |    2 |\n|      1 |        1 | 'jim'    |    2 |\n|      3 |        2 | 'tom'    |    2 |\n|      4 |        3 | 'bush'   |    3 |\n|      5 |        3 | 'helen'  |    3 |\n+--------+----------+----------+------+\n5 rows in set (0.01 sec)\n")),(0,o.kt)("h3",{id:"33-join-query"},"3.3 Join Query"),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL> SELECT SUM(table1.pv) FROM table1 JOIN table2 WHERE table1.siteid = table2.siteid;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 12 |\n+--------------------+\n1 row in set (0.20 sec)\n")),(0,o.kt)("h3",{id:"34-subquery"},"3.4 Subquery"),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MySQL> SELECT SUM(pv) FROM table2 WHERE siteid IN (SELECT siteid FROM table1 WHERE siteid > 2);\n+-----------+\n| sum(`pv`) |\n+-----------+\n|         8 |\n+-----------+\n1 row in set (0.13 sec)\n")))}c.isMDXComponent=!0}}]);