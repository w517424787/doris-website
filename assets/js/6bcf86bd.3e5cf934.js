"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[73166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"Data Partition",language:"en"},r=void 0,l={unversionedId:"data-table/data-partition",id:"data-table/data-partition",title:"Data Partition",description:"\x3c!--",source:"@site/docs/data-table/data-partition.md",sourceDirName:"data-table",slug:"/data-table/data-partition",permalink:"/docs/data-table/data-partition",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Partition",language:"en"},sidebar:"docs",previous:{title:"Data Model",permalink:"/docs/data-table/data-model"},next:{title:"Guidelines for Basic Use",permalink:"/docs/data-table/basic-usage"}},s={},d=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Row &amp; Column",id:"row--column",level:3},{value:"Tablet &amp; Partition",id:"tablet--partition",level:3},{value:"Data division",id:"data-division",level:2},{value:"Column Definition",id:"column-definition",level:3},{value:"Partitioning and Bucket",id:"partitioning-and-bucket",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-partition"},"Data Partition"),(0,i.kt)("p",null,"This document mainly introduces Doris's table construction and data partitioning, as well as problems and solutions that may be encountered in the construction of the table."),(0,i.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,i.kt)("p",null,"In Doris, data is logically described in the form of a table."),(0,i.kt)("h3",{id:"row--column"},"Row & Column"),(0,i.kt)("p",null,"A table includes rows (rows) and columns (columns). Row is a row of data for the user. Column is used to describe different fields in a row of data."),(0,i.kt)("p",null,"Column can be divided into two broad categories: Key and Value. From a business perspective, Key and Value can correspond to dimension columns and metric columns, respectively. From the perspective of the aggregation model, the same row of Key columns will be aggregated into one row. The way the Value column is aggregated is specified by the user when the table is built. For an introduction to more aggregation models, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/data-table/data-model"},"Doris Data Model"),"."),(0,i.kt)("h3",{id:"tablet--partition"},"Tablet & Partition"),(0,i.kt)("p",null,"In Doris's storage engine, user data is horizontally divided into several data slices (also known as data buckets). Each tablet contains several rows of data. The data between the individual tablets does not intersect and is physically stored independently."),(0,i.kt)("p",null,"Multiple tablets are logically attributed to different partitions. A tablet belongs to only one Partition. And a Partition contains several Tablets. Because the tablet is physically stored independently, it can be considered that the Partition is physically independent. Tablet is the smallest physical storage unit for data movement, replication, and so on."),(0,i.kt)("p",null,"Several Partitions form a Table. Partition can be thought of as the smallest logical unit of management. Importing and deleting data can be done for one Partition or only for one Partition."),(0,i.kt)("h2",{id:"data-division"},"Data division"),(0,i.kt)("p",null,"We use a table-building operation to illustrate Doris' data partitioning."),(0,i.kt)("p",null,"Doris's table creation is a synchronous command. The result is returned after the SQL execution is completed. If the command returns successfully, it means that the table creation is successful. For specific table creation syntax, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"),", or you can view more details through ",(0,i.kt)("inlineCode",{parentName:"p"},"HELP CREATE TABLE;")," Much help.See more help with ",(0,i.kt)("inlineCode",{parentName:"p"},"HELP CREATE TABLE;"),"."),(0,i.kt)("p",null,"This section introduces Doris's approach to building tables with an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'-- Range Partition\n\nCREATE TABLE IF NOT EXISTS example_db.example_range_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "User id",\n    `date` DATE NOT NULL COMMENT "Data fill in date time",\n    `timestamp` DATETIME NOT NULL COMMENT "Timestamp of data being poured",\n    `city` VARCHAR(20) COMMENT "The city where the user is located",\n    `age` SMALLINT COMMENT "User age",\n    `sex` TINYINT COMMENT "User gender",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "User last visit time",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "Total user consumption",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "User maximum dwell time",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "User minimum dwell time"\n)\nENGINE=olap\nAGGREGATE KEY(`user_id`, `date`, `timestamp`, `city`, `age`, `sex`)\nPARTITION BY RANGE(`date`)\n(\n    PARTITION `p201701` VALUES LESS THAN ("2017-02-01"),\n    PARTITION `p201702` VALUES LESS THAN ("2017-03-01"),\n    PARTITION `p201703` VALUES LESS THAN ("2017-04-01")\n)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 16\nPROPERTIES\n(\n    "replication_num" = "3",\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2018-01-01 12:00:00"\n);\n\n\n-- List Partition\n\nCREATE TABLE IF NOT EXISTS example_db.example_list_tbl\n(\n    `user_id` LARGEINT NOT NULL COMMENT "User id",\n    `date` DATE NOT NULL COMMENT "Data fill in date time",\n    `timestamp` DATETIME NOT NULL COMMENT "Timestamp of data being poured",\n    `city` VARCHAR(20) COMMENT "The city where the user is located",\n    `age` SMALLINT COMMENT "User Age",\n    `sex` TINYINT COMMENT "User gender",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "User last visit time",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "Total user consumption",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "User maximum dwell time",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "User minimum dwell time"\n)\nENGINE=olap\nAGGREGATE KEY(`user_id`, `date`, `timestamp`, `city`, `age`, `sex`)\nPARTITION BY LIST(`city`)\n(\n    PARTITION `p_cn` VALUES IN ("Beijing", "Shanghai", "Hong Kong"),\n    PARTITION `p_usa` VALUES IN ("New York", "San Francisco"),\n    PARTITION `p_jp` VALUES IN ("Tokyo")\n)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 16\nPROPERTIES\n(\n    "replication_num" = "3",\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2018-01-01 12:00:00"\n);\n\n')),(0,i.kt)("h3",{id:"column-definition"},"Column Definition"),(0,i.kt)("p",null,"Here we only use the AGGREGATE KEY data model as an example. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/data-table/data-model"},"Doris Data Model")," for more data models."),(0,i.kt)("p",null,"The basic type of column can be viewed by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"HELP CREATE TABLE;")," in mysql-client."),(0,i.kt)("p",null,"In the AGGREGATE KEY data model, all columns that do not specify an aggregation mode (SUM, REPLACE, MAX, MIN) are treated as Key columns. The rest is the Value column."),(0,i.kt)("p",null,"When defining columns, you can refer to the following suggestions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Key column must precede all Value columns."),(0,i.kt)("li",{parentName:"ol"},"Try to choose the type of integer. Because integer type calculations and lookups are much more efficient than strings."),(0,i.kt)("li",{parentName:"ol"},"For the selection principle of integer types of different lengths, follow ",(0,i.kt)("strong",{parentName:"li"},"enough to"),"."),(0,i.kt)("li",{parentName:"ol"},"For lengths of type VARCHAR and STRING, follow ",(0,i.kt)("strong",{parentName:"li"},"enough to"),"."),(0,i.kt)("li",{parentName:"ol"},"The total byte length of all columns (including Key and Value) cannot exceed 100KB.")),(0,i.kt)("h3",{id:"partitioning-and-bucket"},"Partitioning and Bucket"),(0,i.kt)("p",null,"Doris supports two levels of data partitioning. The first layer is Partition, which supports Range and List partitioning. The second layer is the Bucket (Tablet), which only supports Hash partitioning."),(0,i.kt)("p",null,"It is also possible to use only one layer of partitioning. When using a layer partition, only Bucket partitioning is supported."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Partition"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Partition column can specify one or more columns. The partition class must be a KEY column. The use of multi-column partitions is described later in the ",(0,i.kt)("strong",{parentName:"li"},"Multi-column partitioning")," summary.\xa0"),(0,i.kt)("li",{parentName:"ul"},"Regardless of the type of partition column, double quotes are required when writing partition values."),(0,i.kt)("li",{parentName:"ul"},"There is no theoretical limit on the number of partitions."),(0,i.kt)("li",{parentName:"ul"},"When you do not use Partition to build a table, the system will automatically generate a Partition with the same name as the table name. This Partition is not visible to the user and cannot be modified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do not add partitions with overlapping ranges")," when creating partitions.")),(0,i.kt)("h4",{parentName:"li",id:"range-partition"},"Range Partition"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Partition columns are usually time columns for easy management of old and new data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Partition supports only the upper bound by ",(0,i.kt)("inlineCode",{parentName:"p"},"VALUES LESS THAN (...)"),", the system will use the upper bound of the previous partition as the lower bound of the partition, and generate a left closed right open interval. Passing, also supports specifying the upper and lower bounds by ",(0,i.kt)("inlineCode",{parentName:"p"},"VALUES [...)"),", and generating a left closed right open interval.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is easier to understand by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"VALUES [...)"),". Here is an example of the change in partition range when adding or deleting partitions using the ",(0,i.kt)("inlineCode",{parentName:"p"},"VALUES LESS THAN (...)")," statement:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As in the ",(0,i.kt)("inlineCode",{parentName:"p"},"example_range_tbl")," example above, when the table is built, the following 3 partitions are automatically generated:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"P201701: [MIN_VALUE, 2017-02-01)\nP201702: [2017-02-01, 2017-03-01)\nP201703: [2017-03-01, 2017-04-01)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'When we add a partition p201705 VALUES LESS THAN ("2017-06-01"), the partition results are as follows:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"P201701: [MIN_VALUE, 2017-02-01)\nP201702: [2017-02-01, 2017-03-01)\nP201703: [2017-03-01, 2017-04-01)\nP201705: [2017-04-01, 2017-06-01)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At this point we delete the partition p201703, the partition results are as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p201701: [MIN_VALUE, 2017-02-01)\np201702: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note that the partition range of p201702 and p201705 has not changed, and there is a hole between the two partitions: [2017-03-01, 2017-04-01). That is, if the imported data range is within this hole, it cannot be imported."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Continue to delete partition p201702, the partition results are as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p201701: [MIN_VALUE, 2017-02-01)\np201705: [2017-04-01, 2017-06-01)\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The void range becomes: [2017-02-01, 2017-04-01)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Now add a partition p201702new VALUES LESS THAN ("2017-03-01"), the partition results are as follows:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p201701: [MIN_VALUE, 2017-02-01)\np201702new: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"You can see that the hole size is reduced to: [2017-03-01, 2017-04-01)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Now delete partition p201701 and add partition p201612 VALUES LESS THAN ("2017-01-01"), the partition result is as follows:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"p201612: [MIN_VALUE, 2017-01-01)\np201702new: [2017-02-01, 2017-03-01)\np201705: [2017-04-01, 2017-06-01)\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"A new void appeared: [2017-01-01, 2017-02-01)")))))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"In summary, the deletion of a partition does not change the scope of an existing partition. There may be holes in deleting partitions. When a partition is added by the `VALUES LESS THAN` statement, the lower bound of the partition immediately follows the upper bound of the previous partition.\n\nIn addition to the single-column partitioning we have seen above, Range partition also supports **multi-column partitioning**, examples are as follows:\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},' PARTITION BY RANGE(`date`, `id`)\n (\n     PARTITION `p201701_1000` VALUES LESS THAN ("2017-02-01", "1000"),\n     PARTITION `p201702_2000` VALUES LESS THAN ("2017-03-01", "2000"),\n     PARTITION `p201703_all` VALUES LESS THAN ("2017-04-01")\n )\n ```\n \n In the above example, we specify `date` (DATE type) and `id` (INT type) as partition columns. The resulting partitions in the above example are as follows:\n \n ```\n *p201701_1000: [(MIN_VALUE, MIN_VALUE), ("2017-02-01", "1000") )\n *p201702_2000: [("2017-02-01", "1000"), ("2017-03-01", "2000") )\n *p201703_all: [("2017-03-01", "2000"), ("2017-04-01", MIN_VALUE))\n ```\n \n Note that the last partition user defaults only the partition value of the `date` column, so the partition value of the `id` column will be filled with `MIN_VALUE` by default. When the user inserts data, the partition column values \u200b\u200bare compared in order, and the corresponding partition is finally obtained. Examples are as follows:\n \n ```\n * Data --\x3e Partition\n * 2017-01-01, 200   --\x3e p201701_1000\n * 2017-01-01, 2000  --\x3e p201701_1000\n * 2017-02-01, 100   --\x3e p201701_1000\n * 2017-02-01, 2000  --\x3e p201702_2000\n * 2017-02-15, 5000  --\x3e p201702_2000\n * 2017-03-01, 2000  --\x3e p201703_all\n * 2017-03-10, 1     --\x3e p201703_all\n * 2017-04-01, 1000  --\x3e Unable to import\n * 2017-05-01, 1000  --\x3e Unable to import\n ```\n\n #### List Partition\n\n * The partition column supports the `BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DATE, DATETIME, CHAR, VARCHAR` data type, and the partition value is an enumeration value. Partitions can be hit only if the data is one of the target partition enumeration values.\n * Partition supports specifying the number of partitions contained in each partition via `VALUES IN (...) ` to specify the enumeration values contained in each partition.\n * The following example illustrates how partitions change when adding or deleting partitions.\n   \n     * As in the `example_list_tbl` example above, when the table is built, the following three partitions are automatically created.\n\n         ```\n         p_cn: ("Beijing", "Shanghai", "Hong Kong")\n         p_usa: ("New York", "San Francisco")\n         p_jp: ("Tokyo")\n         ```\n\n     * When we add a partition p_uk VALUES IN ("London"), the result of the partition is as follows\n     \n         ```\n         p_cn: ("Beijing", "Shanghai", "Hong Kong")\n         p_usa: ("New York", "San Francisco")\n         p_jp: ("Tokyo")\n         p_uk: ("London")\n         ```\n     \n     * When we delete the partition p_jp, the result of the partition is as follows.\n\n         ```\n         p_cn: ("Beijing", "Shanghai", "Hong Kong")\n         p_usa: ("New York", "San Francisco")\n         p_uk: ("London")\n         ```\n\n List partition also supports **multi-column partition**, examples are as follows:\n\n ```text\n PARTITION BY LIST(`id`, `city`)\n (\n     PARTITION `p1_city` VALUES IN (("1", "Beijing"), ("1", "Shanghai")),\n     PARTITION `p2_city` VALUES IN (("2", "Beijing"), ("2", "Shanghai")),\n     PARTITION `p3_city` VALUES IN (("3", "Beijing"), ("3", "Shanghai"))\n )\n ```\n \n In the above example, we specify `id`(INT type) and `city`(VARCHAR type) as partition columns. The above example ends up with the following partitions.\n \n ```\n * p1_city: [("1", "Beijing"), ("1", "Shanghai")]\n * p2_city: [("2", "Beijing"), ("2", "Shanghai")]\n * p3_city: [("3", "Beijing"), ("3", "Shanghai")]\n ```\n \n When the user inserts data, the partition column values will be compared sequentially in order to finally get the corresponding partition. An example is as follows.\n \n ```\n * Data ---\x3e Partition\n * 1, Beijing  ---\x3e p1_city\n * 1, Shanghai ---\x3e p1_city\n * 2, Shanghai ---\x3e p2_city\n * 3, Beijing  ---\x3e p3_city\n * 1, Tianjin  ---\x3e Unable to import\n * 4, Beijing  ---\x3e Unable to import\n ```\n\n2. Bucket\n\n * If a Partition is used, the `DISTRIBUTED ...` statement describes the division rules for the data in each partition. If you do not use Partition, it describes the rules for dividing the data of the entire table.\n * The bucket column can be multiple columns,Aggregate and Unique models must be key columns, and Duplicate models can be key columns and value columns. The bucket column can be the same or different from the Partition column.\n * The choice of bucket column is a trade-off between **query throughput** and **query concurrency**:\n\n     1. If you select multiple bucket columns, the data is more evenly distributed. However, if the query condition does not include the equivalent condition for all bucket columns, a query will scan all buckets. The throughput of such queries will increase, and the latency of a single query will decrease. This method is suitable for large throughput and low concurrent query scenarios.\n     2. If you select only one or a few bucket columns, the point query can query only one bucket. This approach is suitable for high-concurrency point query scenarios.\n     \n * There is no theoretical limit on the number of buckets.\n\n3. Recommendations on the number and amount of data for Partitions and Buckets.\n\n * The total number of tablets in a table is equal to (Partition num * Bucket num).\n * The number of tablets in a table, which is slightly more than the number of disks in the entire cluster, regardless of capacity expansion.\n * The data volume of a single tablet does not theoretically have an upper and lower bound, but is recommended to be in the range of 1G - 10G. If the amount of data for a single tablet is too small, the aggregation of the data is not good and the metadata management pressure is high. If the amount of data is too large, it is not conducive to the migration, completion, and increase the cost of Schema Change or Rollup operation failure retry (the granularity of these operations failure retry is Tablet).\n * When the tablet\'s data volume principle and quantity principle conflict, it is recommended to prioritize the data volume principle.\n * When building a table, the number of Buckets for each partition is uniformly specified. However, when dynamically increasing partitions (`ADD PARTITION`), you can specify the number of Buckets for the new partition separately. This feature can be used to easily reduce or expand data.\n * Once the number of Buckets for a Partition is specified, it cannot be changed. Therefore, when determining the number of Buckets, you need to consider the expansion of the cluster in advance. For example, there are currently only 3 hosts, and each host has 1 disk. If the number of Buckets is only set to 3 or less, then even if you add more machines later, you can\'t increase the concurrency.\n * Give some examples: Suppose there are 10 BEs, one for each BE disk. If the total size of a table is 500MB, you can consider 4-8 shards. 5GB: 8-16. 50GB: 32. 500GB: Recommended partitions, each partition is about 50GB in size, with 16-32 shards per partition. 5TB: Recommended partitions, each with a size of around 50GB and 16-32 shards per partition.\n \n > Note: The amount of data in the table can be viewed by the [show data](/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATA) command. The result is divided by the number of copies, which is the amount of data in the table.\n \n\n#### Compound Partitions vs Single Partitions\n\nCompound Partitions\n\n- The first level is called Partition, which is partition. Users can specify a dimension column as a partition column (currently only columns of integer and time types are supported), and specify the value range of each partition.\n- The second level is called Distribution, which means bucketing. Users can specify one or more dimension columns and the number of buckets to perform HASH distribution on the data.\n\nComposite partitions are recommended for the following scenarios\n\n- There is a time dimension or similar dimension with ordered values, which can be used as a partition column. Partition granularity can be evaluated based on import frequency, partition data volume, etc.\n- Deletion of historical data: If there is a need to delete historical data (for example, only keep the data of the last N days). With composite partitions, this can be achieved by removing historical partitions. Data deletion is also possible by sending a DELETE statement within the specified partition.\n- Solve the problem of data skew: each partition can specify the number of buckets individually. For example, partitioning by day, when the amount of data per day varies greatly, you can reasonably divide the data in different partitions by specifying the number of buckets for the partition. It is recommended to select a column with a large degree of discrimination for the bucketing column.\n\nThe user can also use a single partition without using composite partitions. Then the data is only distributed in HASH.\n\n### PROPERTIES\n\nIn the last PROPERTIES of the table building statement, for the relevant parameters that can be set in PROPERTIES, we can check [CREATE TABLE](/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE) for a detailed introduction.\n\n### ENGINE\n\nIn this example, the type of ENGINE is olap, the default ENGINE type. In Doris, only this ENGINE type is managed and stored by Doris. Other ENGINE types, such as mysql, broker, es, etc., are essentially mappings to tables in other external databases or systems to ensure that Doris can read the data. And Doris itself does not create, manage, and store any tables and data of a non-olap ENGINE type.\n\n### Other\n\n`IF NOT EXISTS` indicates that if the table has not been created, it is created. Note that only the table name is judged here, and it is not determined whether the new table structure is the same as the existing table structure. So if there is a table with the same name but different structure, the command will also return success, but it does not mean that a new table and a new structure have been created.\n\n## common problem\n\n### Build Table Operations FAQ\n\n1. If a syntax error occurs in a long build statement, a syntax error may be incomplete. Here is a list of possible syntax errors for manual error correction:\n\n * The syntax is incorrect. Please read `HELP CREATE TABLE;` carefully to check the relevant syntax structure.\n * Reserved words. When the user-defined name encounters a reserved word, it needs to be enclosed in the backquote ``. It is recommended that all custom names be generated using this symbol.\n * Chinese characters or full-width characters. Non-utf8 encoded Chinese characters, or hidden full-width characters (spaces, punctuation, etc.) can cause syntax errors. It is recommended to check with a text editor with invisible characters.\n\n2. `Failed to create partition [xxx] . Timeout`\n\n Doris builds are created in order of Partition granularity. This error may be reported when a Partition creation fails. Even if you don\'t use Partition, you will report `Failed to create partition` when there is a problem with the built table, because as mentioned earlier, Doris will create an unchangeable default Partition for tables that do not have a Partition specified.\n\n When this error is encountered, it is usually the BE that has encountered problems creating data fragments. You can follow the steps below to troubleshoot:\n\n 1. In fe.log, find the `Failed to create partition` log for the corresponding point in time. In this log, a series of numbers like `{10001-10010}` will appear. The first number of the pair is the Backend ID and the second number is the Tablet ID. As for the pair of numbers above, on the Backend with ID 10001, creating a tablet with ID 10010 failed.\n 2. Go to the be.INFO log corresponding to Backend and find the log related to the tablet id in the corresponding time period. You can find the error message.\n 3. Listed below are some common tablet creation failure errors, including but not limited to:\n     * BE did not receive the relevant task, and the tablet id related log could not be found in be.INFO. Or the BE is created successfully, but the report fails. For the above questions, see [Deployment and Upgrade Documentation] to check the connectivity of FE and BE.\n     * Pre-allocated memory failed. It may be that the length of a line in a row in the table exceeds 100KB.\n     * `Too many open files`. The number of open file handles exceeds the Linux system limit. The handle limit of the Linux system needs to be modified.\n\n You can also extend the timeout by setting `tablet_create_timeout_second=xxx` in fe.conf. The default is 2 seconds.\n\n3. The build table command does not return results for a long time.\n\n Doris\'s table creation command is a synchronous command. The timeout of this command is currently set to be relatively simple, ie (tablet num * replication num) seconds. If you create more data fragments and have fragment creation failed, it may cause an error to be returned after waiting for a long timeout.\n\n Under normal circumstances, the statement will return in a few seconds or ten seconds. If it is more than one minute, it is recommended to cancel this operation directly and go to the FE or BE log to view the related errors.\n\n## More help\n\nFor more detailed instructions on data partitioning, we can refer to the [CREATE TABLE](/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE) command manual, and also You can enter `HELP CREATE TABLE;` under the Mysql client to get more help information.\n')))}u.isMDXComponent=!0}}]);