"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[40625],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},24472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"How We Increased Database Query Concurrency by 20 Times",summary:"In the upcoming Apache Doris 2.0, we have optimized it for high-concurrency point queries. Long story short, it can achieve over 30,000 QPS for a single node.",date:"2023-04-14",author:"Apache Doris",tags:["Tech Insights"]},i=void 0,s={permalink:"/blog/High_concurrency",source:"@site/blog/High_concurrency.md",title:"How We Increased Database Query Concurrency by 20 Times",description:"\x3c!--",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"Tech Insights",permalink:"/blog/tags/tech-insights"}],truncated:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"How We Increased Database Query Concurrency by 20 Times",summary:"In the upcoming Apache Doris 2.0, we have optimized it for high-concurrency point queries. Long story short, it can achieve over 30,000 QPS for a single node.",date:"2023-04-14",author:"Apache Doris",tags:["Tech Insights"]},prevItem:{title:"Step-by-step Guide to Building a High-Performing Risk Data Mart",permalink:"/blog/HYXJ"},nextItem:{title:"Apache Doris announced the official release of version 1.2.3",permalink:"/blog/release-1.2.3"}},l={authorsImageUrls:[void 0]},c=[{value:"Five Ways to Accelerate High-Concurrency Queries",id:"five-ways-to-accelerate-high-concurrency-queries",level:2},{value:"Partioning and Bucketing",id:"partioning-and-bucketing",level:3},{value:"Index",id:"index",level:3},{value:"Materialized View",id:"materialized-view",level:3},{value:"Runtime Filter",id:"runtime-filter",level:3},{value:"TOP-N Optimization",id:"top-n-optimization",level:3},{value:"How We Bring Concurrency to the Next Level",id:"how-we-bring-concurrency-to-the-next-level",level:2},{value:"Row Storage Format",id:"row-storage-format",level:3},{value:"Short-Circuit",id:"short-circuit",level:3},{value:"Prepared Statement",id:"prepared-statement",level:3},{value:"Row Storage Cache",id:"row-storage-cache",level:3},{value:"Benchmark Performance",id:"benchmark-performance",level:2},{value:"Best Practice",id:"best-practice",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A unified analytic database is the holy grail for data engineers, but what does it look like specifically? It should evolve with the needs of data users."),(0,r.kt)("p",null,"Vertically, companies now have an ever enlarging pool of data and expect a higher level of concurrency in data processing. Horizontally, they require a wider range of data analytics services. Besides traditional OLAP scenarios such as statistical reporting and ad-hoc queries, they are also leveraging data analysis in recommender systems, risk control, customer tagging and profiling, and IoT."),(0,r.kt)("p",null,"Among all these data services, point queries are the most frequent operations conducted by data users. Point query means to retrieve one or several rows from the database based on the Key. A point query only returns a small piece of data, such as the details of a shopping order, a transaction, a consumer profile, a product description, logistics status, and so on. Sounds easy, right? But the tricky part is, ",(0,r.kt)("strong",{parentName:"p"},"a database often needs to handle tens of thousands of point queries at a time and respond to all of them in milliseconds"),"."),(0,r.kt)("p",null,"Most current OLAP databases are built with a columnar storage engine to process huge data volumes. They take pride in their high throughput, but often underperform in high-concurrency scenarios. As a complement, many data engineers invite Key-Value stores like Apache HBase for point queries, and Redis as a cache layer to ease the burden. The downside is redundant storage and high maintenance costs."),(0,r.kt)("p",null,"Since Apache Doris was born, we have been striving to make it a unified database for data queries of all sizes, including ad-hoc queries and point queries. Till now, we have already taken down the monster of high-throughput OLAP scenarios. In the upcoming Apache Doris 2.0, we have optimized it for high-concurrency point queries. Long story short, it can achieve over 30,000 QPS for a single node. "),(0,r.kt)("h2",{id:"five-ways-to-accelerate-high-concurrency-queries"},"Five Ways to Accelerate High-Concurrency Queries"),(0,r.kt)("p",null,"High-concurrency queries are thorny because you need to handle high loads with limited system resources. That means you have to reduce the CPU, memory and I/O overheads of a single SQL as much as possible. The key is to minimize the scanning of underlying data and follow-up computing. "),(0,r.kt)("p",null,"Apache Doris uses five methods to achieve higher QPS."),(0,r.kt)("h3",{id:"partioning-and-bucketing"},"Partioning and Bucketing"),(0,r.kt)("p",null,"Apache Doris shards data into a two-tiered structure: Partition and Bucket. You can use time information as the Partition Key. As for bucketing, you distribute the data into various nodes after data hashing. A wise bucketing plan can largely increase concurrency and throughput in data reading. "),(0,r.kt)("p",null,"This is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"select * from user_table where id = 5122 and create_date = '2022-01-01'\n")),(0,r.kt)("p",null,"In this case, the user has set 10 buckets. ",(0,r.kt)("inlineCode",{parentName:"p"},"create_date")," is the Partition Key and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is the Bucket Key. After dividing the data into partitions and buckets, the system only needs to scan one bucket in one partition before it can locate the needed data. This is a huge time saver."),(0,r.kt)("h3",{id:"index"},"Index"),(0,r.kt)("p",null,"Apache Doris uses various data indexes to speed up data reading and filtering, including smart indexes and secondary indexes. Smart indexes are auto-generated by Doris upon data ingestion, which requires no action from the user's side. "),(0,r.kt)("p",null,"There are two types of smart indexes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sorted Index"),": Apache Doris stores data in an orderly way. It creates a sorted index for every 1024 rows of data. The Key in the index is the value of the sorted column in the first row of the current 1024 rows. If the query involves the sorted column, the system will locate the first row of the relevant 1024 row group and start scanning there."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ZoneMap Index"),": These are indexes on the Segment and Page level. The maximum and minimum values of each column within a Page will be recorded, so are those within a Segment. Hence, in equivalence queries and range queries, the system can narrow down the filter range with the help of the MinMax indexes.")),(0,r.kt)("p",null,"Secondary indexes are created by users. These include Bloom Filter indexes, Bitmap indexes, ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index/"},"Inverted indexes"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/ngram-bloomfilter-index/"},"NGram Bloom Filter indexes"),". (If you are interested, I will go into details about them in future articles.)"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"select * from user_table where id > 10 and id < 1024\n")),(0,r.kt)("p",null,"Suppose that the user has designated ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," as the Key during table creation, the data will be sorted by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," on Memtable and the disks. So any queries involving ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," as a filter condition will be executed much faster with the aid of sorted indexes. Specifically, the data in storage will be put into multiple ranges based on ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", and the system will implement binary search to locate the exact range according to the sorted indexes. But that could still be a large range since the sorted indexes are sparse. You can further narrow it down based on ZoneMap indexes, Bloom Filter indexes, and Bitmap indexes. "),(0,r.kt)("p",null,"This is another way to reduce data scanning and improve overall concurrency of the system."),(0,r.kt)("h3",{id:"materialized-view"},"Materialized View"),(0,r.kt)("p",null,"The idea of materialized view is to trade space for time: You execute pre-computation with pre-defined SQL statements, and perpetuate the results in a table that is visible to users but occupies some storage space. In this way, Apache Doris can respond much faster to queries for aggregated data and breakdown data and those involve the matching of sorted indexes once it hits a materialized view. This is a good way to lessen computation, improve query performance, and reduce resource consumption."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"// For an aggregation query, the system reads the pre-aggregated columns in the materialized view.\n\ncreate materialized view store_amt as select store_id, sum(sale_amt) from sales_records group by store_id;\nSELECT store_id, sum(sale_amt) FROM sales_records GROUP BY store_id;\n\n// For a query where k3 matches the sorted column in the materialized view, the system directly performs the query on the materialized view. \n\nCREATE MATERIALIZED VIEW mv_1 as SELECT k3, k2, k1 FROM tableA ORDER BY k3;\nselect k1, k2, k3 from table A where k3=3;\n")),(0,r.kt)("h3",{id:"runtime-filter"},"Runtime Filter"),(0,r.kt)("p",null,"Apart from filtering data by indexes, Apache Doris has a dynamic filtering mechanism: Runtime Filter. "),(0,r.kt)("p",null,"In multi-table Join queries, the left table is usually called ProbeTable while the right one is called BuildTable, with the former much bigger than the latter. In query execution, firstly, the system reads the right table and creates a HashTable (Build) in the memory. Then, it starts reading the left table row by row, during which it also compares data between the left table and the HashTable and returns the matched data (Probe). "),(0,r.kt)("p",null,"So what's new about that in Apache Doris? During the creation of HashTable, Apache Doris generates a filter for the columns. It can be a Min/Max filter or an IN filter. Then it pushes down the filter to the left table, which can use the filter to screen out data and thus reduces the amount of data that the Probe node has to transfer and compare. "),(0,r.kt)("p",null,"This is how the Runtime Filter works. In most Join queries, the Runtime Filter can be automatically pushed down to the most underlying scan nodes or to the distributed Shuffle Join. In other words, Runtime Filter is able to reduce data reading and shorten response time for most Join queries."),(0,r.kt)("h3",{id:"top-n-optimization"},"TOP-N Optimization"),(0,r.kt)("p",null,"TOP-N query is a frequent scenario in data analysis. For example, users want to fetch the most recent 100 orders, or the 5 highest/lowest priced products. The performance of such queries determines the quality of real-time analysis. For them, Apache Doris implements TOP-N optimization. Here is how it goes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Apache Doris reads the sorted fields and query fields from the Scanner layer, reserves only the TOP-N pieces of data by means of Heapsort, updates the real-time TOP-N results as it continues reading, and dynamically pushes them down to the Scanner. "),(0,r.kt)("li",{parentName:"ol"},"Combing the received TOP-N range and the indexes, the Scanner can skip a large proportion of irrelevant files and data chunks and only read a small number of rows."),(0,r.kt)("li",{parentName:"ol"},"Queries on flat tables usually mean the need to scan massive data, but TOP-N queries only retrieve a small amount of data. The strategy here is to divide the data reading process into two stages. In stage one, the system sorts the data based on a few columns (sorted column, or condition column) and locates the TOP-N rows. In stage two, it fetches the TOP-N rows of data after data sorting, and then it retrieves the target data according to the row numbers. ")),(0,r.kt)("p",null,"To sum up, Apache Doris prunes the data that needs to be read and sorted, and thus substantially reduces consumption of I/O, CPU, and memory resources."),(0,r.kt)("p",null,"In addition to the foregoing five methods, Apache Doris also improves concurrency by SQL Cache, Partition Cache, and a variety of Join optimization techniques."),(0,r.kt)("h2",{id:"how-we-bring-concurrency-to-the-next-level"},"How We Bring Concurrency to the Next Level"),(0,r.kt)("p",null,"By adopting the above methods, Apache Doris was able to achieve thousands of QPS per node. However, in scenarios requiring tens of thousands of QPS, it was still bottlenecked by several issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With Doris' columnar storage engine, it was inconvenient to read rows. In flat table models, columnar storage could result in much larger I/O usage."),(0,r.kt)("li",{parentName:"ul"},"The execution engine and query optimizer of OLAP databases were sometimes too complicated for simple queries (point queries, etc.). Such queries needed to be processed with a shorter pipeline, which should be considered in query planning."),(0,r.kt)("li",{parentName:"ul"},"FE modules of Doris, implementing Java, were responsible for interfacing with SQL requests and parsing query plans. These processes could produce high CPU overheads in high-concurrency scenarios.")),(0,r.kt)("p",null,"We optimized Apache Doris to solve these problems. (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15491"},"Pull Request on Github"),")"),(0,r.kt)("h3",{id:"row-storage-format"},"Row Storage Format"),(0,r.kt)("p",null,"As we know, row storage is much more efficient when the user only queries for a single row of data. So we introduced row storage format in Apache Doris 2.0. Users can enable row storage by specifying the following property in the table creation statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},'"store_row_column" = "true"\n')),(0,r.kt)("p",null,"We chose JSONB as the encoding format for row storage for three reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexible schema change"),": If a user has added or deleted a field, or modified the type of a field, these changes must be updated in row storage in real time. So we choose to adopt the JSONB format and encode columns into JSONB fields. This makes changes in fields very easy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"High performance"),":  Accessing rows in row-oriented storage is much faster than doing that in columnar storage, and it requires much less disk access in high-concurrency scenarios. Also, in some cases, you can map the column ID to the corresponding JSONB value so you can quickly access a certain column."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Less storage space"),": JSONB is a compacted binary format. It consumes less space on the disk and is more cost-effective.")),(0,r.kt)("p",null,"In the storage engine, row storage will be stored as a hidden column (DORIS_ROW_STORE_COL). During Memtable Flush, the columns will be encoded into JSONB and cached into this hidden column. In data reading, the system uses the Column ID to locate the column, finds the target row based on the row number, and then deserializes the relevant columns."),(0,r.kt)("h3",{id:"short-circuit"},"Short-Circuit"),(0,r.kt)("p",null,"Normally, an SQL statement is executed in three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SQL Parser parses the statement to generate an abstract syntax tree (AST)."),(0,r.kt)("li",{parentName:"ol"},"The Query Optimizer produces an executable plan."),(0,r.kt)("li",{parentName:"ol"},"Execute the plan and return the results.")),(0,r.kt)("p",null,"For complex queries on massive data, it is better to follow the plan created by the Query Optimizer. However, for high-concurrency point queries requiring low latency, that plan is not only unnecessary but also brings extra overheads. That's why we implement a short-circuit plan for point queries. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(32441).Z,width:"1606",height:"778"})),(0,r.kt)("p",null,"Once the FE receives a point query request, a short-circuit plan will be produced. It is a lightweight plan that involves no equivalent transformation, logic optimization or physical optimization. Instead, it conducts some basic analysis on the AST, creates a fixed plan accordingly, and finds ways to reduce overhead of the optimizer."),(0,r.kt)("p",null,"For a simple point query involving primary keys, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"select * from tbl where pk1 = 123 and pk2 = 456"),", since it only involves one single Tablet, it is better to use a lightweight RPC interface for interaction with the Storage Engine. This avoids the creation of a complicated Fragment Plan and eliminates the performance overhead brought by the scheduling under the MPP query framework."),(0,r.kt)("p",null,"Details of the RPC interface are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"message PTabletKeyLookupRequest {\n    required int64 tablet_id = 1;\n    repeated KeyTuple key_tuples = 2;\n    optional Descriptor desc_tbl = 4;\n    optional ExprList  output_expr = 5;\n}\n\nmessage PTabletKeyLookupResponse {\n    required PStatus status = 1;\n    optional bytes row_batch = 5;\n    optional bool empty_batch = 6;\n}\nrpc tablet_fetch_data(PTabletKeyLookupRequest) returns (PTabletKeyLookupResponse);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tablet_id")," is calculated based on the primary key column, while ",(0,r.kt)("inlineCode",{parentName:"p"},"key_tuples")," is the string format of the primary key. In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"key_tuples")," is similar to ","['123', '456']",". As BE receives the request, ",(0,r.kt)("inlineCode",{parentName:"p"},"key_tuples")," will be encoded into primary key storage format. Then, it will locate the corresponding row number of the Key in the Segment File with the help of the primary key index, and check if that row exists in ",(0,r.kt)("inlineCode",{parentName:"p"},"delete bitmap"),". If it does, the row number will be returned; if not, the system returns NotFound. The returned row number will be used for point query on ",(0,r.kt)("inlineCode",{parentName:"p"},"__DORIS_ROW_STORE_COL__"),". That means we only need to locate one row in that column, fetch the original value of the JSONB format, and deserialize it."),(0,r.kt)("h3",{id:"prepared-statement"},"Prepared Statement"),(0,r.kt)("p",null,"In high-concurrency queries, part of the CPU overhead comes from SQL analysis and parsing in FE. To reduce such overhead, in FE, we provide prepared statements that are fully compatible with MySQL protocol. With prepared statements, we can achieve a four-time performance increase for primary key point queries."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(93894).Z,width:"1280",height:"775"})),(0,r.kt)("p",null,"The idea of prepared statements is to cache precomputed SQL and expressions in HashMap in memory, so they can be directly used in queries when applicable."),(0,r.kt)("p",null,"Prepared statements adopt MySQL binary protocol for transmission. The protocol is implemented in the mysql_row_buffer.","[h|cpp]"," file, and uses MySQL binary encoding. Under this protocol, the client (for example, JDBC Client) sends a pre-compiled statement to FE via ",(0,r.kt)("inlineCode",{parentName:"p"},"PREPARE")," MySQL Command. Next, FE will parse and analyze the statement and cache it in the HashMap as shown in the figure above. Next, the client, using ",(0,r.kt)("inlineCode",{parentName:"p"},"EXECUTE")," MySQL Command, will replace the placeholder, encode it into binary format, and send it to FE. Then, FE will perform deserialization to obtain the value of the placeholder, and generate query conditions."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(48336).Z,width:"1134",height:"904"})),(0,r.kt)("p",null,"Apart from caching prepared statements in FE, we also cache reusable structures in BE. These structures include pre-allocated computation blocks, query descriptors, and output expressions. Serializing and deserializing these structures often cause a CPU hotspot, so it makes more sense to cache them. The prepared statement for each query comes with a UUID named CacheID. So when BE executes the point query, it will find the corresponding class based on the CacheID, and then reuse the structure in computation."),(0,r.kt)("p",null,"The following example demonstrates how to use a prepared statement in JDBC:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set a JDBC URL and enable prepared statement at the server end.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"url = jdbc:mysql://127.0.0.1:9030/ycsb?useServerPrepStmts=true\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use a prepared statement.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},'// Use `?` as placeholder, reuse readStatement.\nPreparedStatement readStatement = conn.prepareStatement("select * from tbl_point_query where key = ?");\n...\nreadStatement.setInt(1234);\nResultSet resultSet = readStatement.executeQuery();\n...\nreadStatement.setInt(1235);\nresultSet = readStatement.executeQuery();\n...\n')),(0,r.kt)("h3",{id:"row-storage-cache"},"Row Storage Cache"),(0,r.kt)("p",null,"Apache Doris has a Page Cache feature, where each page caches the data of one column. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(31017).Z,width:"568",height:"540"})),(0,r.kt)("p",null,"As mentioned above, we have introduced row storage in Doris. The problem with this is, one row of data consists of multiple columns, so in the case of big queries, the cached data might be erased. Thus, we also introduced row cache to increase row cache hit rate."),(0,r.kt)("p",null,"Row cache reuses the LRU Cache mechanism in Apache Doris. When the caching starts, the system will initialize a threshold value. If that threshold is hit, the old cached rows will be phased out. For a primary key query statement, the performance gap between cache hit and cache miss can be huge (we are talking about dozens of times less disk I/O and memory access here). So the introduction of row cache can remarkably enhance point query performance."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(19769).Z,width:"468",height:"500"})),(0,r.kt)("p",null,"To enable row cache, you can specify the following configuration in BE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},"disable_storage_row_cache=false // This specifies whether to enable row cache; it is set to false by default.\nrow_cache_mem_limit=20% // This specifies the percentage of row cache in the memory; it is set to 20% by default.\n")),(0,r.kt)("h2",{id:"benchmark-performance"},"Benchmark Performance"),(0,r.kt)("p",null,"We tested Apache Doris with YCSB (Yahoo! Cloud Serving Benchmark) to see how all these optimizations work."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configurations and data size:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Machines: a single 16 Core 64G cloud server with 4\xd71T hard drives"),(0,r.kt)("li",{parentName:"ul"},"Cluster size: 1 Frontend + 2 Backends"),(0,r.kt)("li",{parentName:"ul"},"Data volume: 100 million rows of data, with each row taking 1KB to store; preheated"),(0,r.kt)("li",{parentName:"ul"},"Table schema and query statement:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},'// Table creation statement:\n\nCREATE TABLE `usertable` (\n  `YCSB_KEY` varchar(255) NULL,\n  `FIELD0` text NULL,\n  `FIELD1` text NULL,\n  `FIELD2` text NULL,\n  `FIELD3` text NULL,\n  `FIELD4` text NULL,\n  `FIELD5` text NULL,\n  `FIELD6` text NULL,\n  `FIELD7` text NULL,\n  `FIELD8` text NULL,\n  `FIELD9` text NULL\n) ENGINE=OLAP\nUNIQUE KEY(`YCSB_KEY`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`YCSB_KEY`) BUCKETS 16\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"persistent" = "false",\n"storage_format" = "V2",\n"enable_unique_key_merge_on_write" = "true",\n"light_schema_change" = "true",\n"store_row_column" = "true",\n"disable_auto_compaction" = "false"\n);\n\n// Query statement:\n\nSELECT * from usertable WHERE YCSB_KEY = ?\n')),(0,r.kt)("p",null,"We run the test with the optimizations (row storage, short-circuit, and prepared statement) enabled, and then did it again with all of them disabled. Here are the results:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(48242).Z,width:"1280",height:"653"})),(0,r.kt)("p",null,"With optimizations enabled, ",(0,r.kt)("strong",{parentName:"p"},"the average query latency decreased by a whopping 96%, the 99th percentile latency was only 1/28 of that without optimizations, and it has achieved a query concurrency of over 30,000 QPS.")," This is a huge leap in performance and an over 20-time increase in concurrency."),(0,r.kt)("h2",{id:"best-practice"},"Best Practice"),(0,r.kt)("p",null,"It should be noted that these optimizations for point queries are implemented in the Unique Key model of Apache Doris, and you should enable Merge-on-Write and Light Schema Change for this model."),(0,r.kt)("p",null,"This is a table creation statement example for point queries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-undefined"},'CREATE TABLE `usertable` (\n  `USER_KEY` BIGINT NULL,\n  `FIELD0` text NULL,\n  `FIELD1` text NULL,\n  `FIELD2` text NULL,\n  `FIELD3` text NULL\n) ENGINE=OLAP\nUNIQUE KEY(`USER_KEY`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`USER_KEY`) BUCKETS 16\nPROPERTIES (\n"enable_unique_key_merge_on_write" = "true",\n"light_schema_change" = "true",\n"store_row_column" = "true",\n); \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("inlineCode",{parentName:"li"},"light_schema_change")," to support JSONB row storage for encoding ColumnID"),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("inlineCode",{parentName:"li"},"store_row_column")," to store row storage format")),(0,r.kt)("p",null,"For a primary key-based point query like the one below, after table creation, you can use row storage and short-circuit execution to improve performance to a great extent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"select * from usertable where USER_KEY = xxx;\n")),(0,r.kt)("p",null,"To further unleash performance, you can apply prepared statement. If you have enough memory space, you can also enable row cache in the BE configuration."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In high-concurrency scenarios, Apache Doris realizes over 30,000 QPS per node after optimizations including row storage, short-circuit, prepared statement, and row cache. Also, Apache Doris is easily scaled out since it is built on MPP architecture, on top of which you can scale it up by upgrading the hardware and machine configuration. This is how Apache Doris manages to achieve both high throughput and high concurrency. It allows you to deal with various data analytic workloads on one single platform and experience quick data analytics for various scenarios. Thanks to the great efforts of the Apache Doris community and a group of excellent SelectDB engineers, Apache Doris 2.0 is about to be released soon."))}u.isMDXComponent=!0},32441:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/high-concurrency_1-90fb6261659bb3cce5ad8076fa9dc65d.png"},93894:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/high-concurrency_2-24db356001a7e9c6276202b59ce09d03.png"},48336:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/high-concurrency_3-78f37932ab22095589cd35e1829eba6b.png"},31017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/high-concurrency_4-3a2f6a6b077605a579c5b00560e0cffb.png"},19769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/high-concurrency_5-91a7b2adc421fb31c47d89f638adecf6.png"},48242:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/high-concurrency_6-6c3bbd4d2c6e6a54db40297c2154a9da.png"}}]);