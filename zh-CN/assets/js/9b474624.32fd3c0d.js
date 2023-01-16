"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[13148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Flink doris connector Design",language:"en"},o=void 0,s={unversionedId:"internal/Flink-doris-connector-Design",id:"version-0.15/internal/Flink-doris-connector-Design",title:"Flink doris connector Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/internal/Flink-doris-connector-Design.md",sourceDirName:"internal",slug:"/internal/Flink-doris-connector-Design",permalink:"/zh-CN/docs/0.15/internal/Flink-doris-connector-Design",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Flink doris connector Design",language:"en"}},l={},c=[{value:"1. Instructions",id:"1-instructions",level:2},{value:"2. how to use",id:"2-how-to-use",level:2},{value:"2.1 SQL way",id:"21-sql-way",level:4},{value:"2.2 DataStream way:",id:"22-datastream-way",level:4},{value:"3. Applicable scene",id:"3-applicable-scene",level:2},{value:"3.1. Use Flink to perform joint analysis on data in Doris and other data sources",id:"31-use-flink-to-perform-joint-analysis-on-data-in-doris-and-other-data-sources",level:4},{value:"3.2 Real-time data access",id:"32-real-time-data-access",level:4},{value:"4.Technical realization",id:"4technical-realization",level:2},{value:"4.1 Architecture diagram",id:"41-architecture-diagram",level:3},{value:"4.2 Doris provides more external capabilities",id:"42-doris-provides-more-external-capabilities",level:3},{value:"4.2.1 Doris FE",id:"421-doris-fe",level:4},{value:"4.2.2 Doris BE",id:"422-doris-be",level:4},{value:"4.3 Implement DataStream",id:"43-implement-datastream",level:3},{value:"4.4 Implement Flink SQL on Doris",id:"44-implement-flink-sql-on-doris",level:3},{value:"4.4.1 Implementation details",id:"441-implementation-details",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flink-doris-connector-design"},"Flink doris connector Design"),(0,r.kt)("p",null,"First of all, thanks to the author of the community Spark Doris Connector"),(0,r.kt)("p",null,"From the perspective of Doris, by introducing its data into Flink, Flink can use a series of rich ecological products, which broadens the imagination of the product and also makes it possible to query Doris and other data sources jointly."),(0,r.kt)("p",null,"Starting from our business architecture and business needs, we chose Flink as part of our architecture, the ETL and real-time computing framework for data. The community currently supports Spark doris connector, so we designed and developed Flink doris Connector with reference to Spark doris connector."),(0,r.kt)("p",null,"##Technical Choice"),(0,r.kt)("p",null,"When the model was originally selected, it was the same as the Spark Doris connector, so we started to consider the JDBC method, but, as described in the Spark doris connector article, this method has advantages, but the disadvantages are more obvious. Later, we read and tested the Spark code and decided to implement it on the shoulders of giants (note: copy the code and modify it directly)."),(0,r.kt)("p",null,"The following content is from the Spark Doris Connector blog, directly copied"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Therefore, we developed a new data source Spark-Doris-Connector for Doris. Under this scheme, Doris can publish Doris data and distribute it to Spark. The Spark driver accesses Doris's FE to obtain the Doris table architecture and basic data distribution. After that, according to this data distribution, the data query task is reasonably allocated to the executors. Finally, Spark's execution program accesses different BEs for querying. Greatly improve query efficiency\n")),(0,r.kt)("h2",{id:"1-instructions"},"1. Instructions"),(0,r.kt)("p",null,"Compile and generate doris-flink-1.0.0-SNAPSHOT.jar in the extension/flink-doris-connector/ directory of the Doris code base, add this jar package to the ClausPath of flink, and then you can use Flink-on -Doris function"),(0,r.kt)("h2",{id:"2-how-to-use"},"2. how to use"),(0,r.kt)("p",null,"Compile and generate doris-flink-1.0.0-SNAPSHOT.jar in the extension/flink-doris-connector/ directory of the Doris code library, add this jar package to the ClassPath of flink, and then use the Flink-on-Doris function"),(0,r.kt)("h4",{id:"21-sql-way"},"2.1 SQL way"),(0,r.kt)("p",null,"Support function:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Supports reading data in Doris data warehouse tables through Flink SQL to Flink for calculations"),(0,r.kt)("li",{parentName:"ol"},"Support inserting data into the corresponding table of the data warehouse through Flink SQL. The back-end implementation is to communicate directly with BE through Stream Load to complete the data insertion operation"),(0,r.kt)("li",{parentName:"ol"},"You can use Flink to associate non-Doris external data source tables for association analysis")),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        env.setParallelism(1);\n        final StreamTableEnvironment tEnv = StreamTableEnvironment.create(env);\n        tEnv.executeSql(\n                "CREATE TABLE test_aggregation01 (" +\n                        "user_id STRING," +\n                        "user_city STRING," +\n                        "age INT," +\n                        "last_visit_date STRING" +\n                        ") " +\n                        "WITH (\\n" +\n                        "  \'connector\' = \'doris\',\\n" +\n                        "  \'fenodes\' = \'doris01:8030\',\\n" +\n                        "  \'table.identifier\' = \'demo.test_aggregation\',\\n" +\n                        "  \'username\' = \'root\',\\n" +\n                        "  \'password\' = \'\'\\n" +\n                        ")");\n        tEnv.executeSql(\n                "CREATE TABLE test_aggregation02 (" +\n                        "user_id STRING," +\n                        "user_city STRING," +\n                        "age INT," +\n                        "last_visit_date STRING" +\n                        ") " +\n                        "WITH (\\n" +\n                        "  \'connector\' = \'doris\',\\n" +\n                        "  \'fenodes\' = \'doris01:8030\',\\n" +\n                        "  \'table.identifier\' = \'demo.test_aggregation_01\',\\n" +\n                        "  \'username\' = \'root\',\\n" +\n                        "  \'password\' = \'\'\\n" +\n                        ")");\n\n        tEnv.executeSql("INSERT INTO test_aggregation02 select * from test_aggregation01");\n        tEnv.executeSql("select count(1) from test_aggregation01");\n')),(0,r.kt)("h4",{id:"22-datastream-way"},"2.2 DataStream way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'DorisOptions.Builder options = DorisOptions.builder()\n                .setFenodes("$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT")\n                .setUsername("$YOUR_DORIS_USERNAME")\n                .setPassword("$YOUR_DORIS_PASSWORD")\n                .setTableIdentifier("$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME");\nenv.addSource(new DorisSourceFunction<>(options.build(),new SimpleListDeserializationSchema())).print();\n')),(0,r.kt)("h2",{id:"3-applicable-scene"},"3. Applicable scene"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1616987965864",src:n(18092).Z,width:"1138",height:"666"})),(0,r.kt)("h4",{id:"31-use-flink-to-perform-joint-analysis-on-data-in-doris-and-other-data-sources"},"3.1. Use Flink to perform joint analysis on data in Doris and other data sources"),(0,r.kt)("p",null,"Many business departments place their data on different storage systems, such as some online analysis and report data in Doris, some structured retrieval data in Elasticsearch, and some data used for transaction processing in MySQL, and so on. It is often necessary to analyze the business across multiple storage sources. After connecting Flink and Doris through the Flink Doris connector, companies can directly use Flink to perform joint query calculations on the data in Doris and multiple external data sources."),(0,r.kt)("h4",{id:"32-real-time-data-access"},"3.2 Real-time data access"),(0,r.kt)("p",null,"Before Flink Doris Connector: For business irregular data, it is usually necessary to perform standardized processing on messages, and write null value filtering into new topics, and then start regular loading to write Doris."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1616988281677",src:n(5182).Z,width:"1038",height:"163"})),(0,r.kt)("p",null,"After Flink Doris Connector: flink reads kafka and writes doris directly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1616988514873",src:n(30075).Z,width:"726",height:"123"})),(0,r.kt)("h2",{id:"4technical-realization"},"4.Technical realization"),(0,r.kt)("h3",{id:"41-architecture-diagram"},"4.1 Architecture diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1616997396610",src:n(9241).Z,width:"1196",height:"627"})),(0,r.kt)("h3",{id:"42-doris-provides-more-external-capabilities"},"4.2 Doris provides more external capabilities"),(0,r.kt)("h4",{id:"421-doris-fe"},"4.2.1 Doris FE"),(0,r.kt)("p",null,"The interface for obtaining metadata information of internal tables, single-table query planning and some statistical information has been opened to the outside world."),(0,r.kt)("p",null,"All Rest API interfaces require HttpBasic authentication. The user name and password are the user name and password for logging in to the database. Pay attention to the correct assignment of permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Get table schema meta information\nGET api/{database}/{table}/_schema\n\n// Get the query plan template for a single table\nPOST api/{database}/{table}/_query_plan\n{\n"sql": "select k1, k2 from {database}.{table}"\n}\n\n// Get the table size\nGET api/{database}/{table}/_count\n')),(0,r.kt)("h4",{id:"422-doris-be"},"4.2.2 Doris BE"),(0,r.kt)("p",null,"Through the Thrift protocol, data filtering, scanning and cropping capabilities are directly provided to the outside world."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"service TDorisExternalService {\n     // Initialize the query executor\nTScanOpenResult open_scanner(1: TScanOpenParams params);\n\n// Streaming batch to get data, Apache Arrow data format\n     TScanBatchResult get_next(1: TScanNextBatchParams params);\n\n// end scan\n     TScanCloseResult close_scanner(1: TScanCloseParams params);\n}\n")),(0,r.kt)("p",null,"For definitions of Thrift related structures, please refer to:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/blob/master/gensrc/thrift/DorisExternalService.thrift"},"https://github.com/apache/incubator-doris/blob/master/gensrc/thrift/DorisExternalService.thrift")),(0,r.kt)("h3",{id:"43-implement-datastream"},"4.3 Implement DataStream"),(0,r.kt)("p",null,"Inherit org.apache.flink.streaming.api.functions.source.RichSourceFunction and customize DorisSourceFunction. During initialization, get the execution plan of the related table and get the corresponding partition."),(0,r.kt)("p",null,"Rewrite the run method to read data from the partition in a loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public void run(SourceContext sourceContext){\n       //Cycle through the partitions\n        for(PartitionDefinition partitions : dorisPartitions){\n            scalaValueReader = new ScalaValueReader(partitions, settings);\n            while (scalaValueReader.hasNext()){\n                Object next = scalaValueReader.next();\n                sourceContext.collect(next);\n            }\n        }\n}\n")),(0,r.kt)("h3",{id:"44-implement-flink-sql-on-doris"},"4.4 Implement Flink SQL on Doris"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/zh/dev/table/sourceSinks.html"},"Flink Custom Source&Sink")," and Flink-jdbc-connector to implement the following As a result, Flink SQL can be used to directly manipulate Doris tables, including reading and writing."),(0,r.kt)("h4",{id:"441-implementation-details"},"4.4.1 Implementation details"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Realize DynamicTableSourceFactory and DynamicTableSinkFactory register doris connector"),(0,r.kt)("li",{parentName:"ol"},"Customize DynamicTableSource and DynamicTableSink to generate logical plans"),(0,r.kt)("li",{parentName:"ol"},"After DorisRowDataInputFormat and DorisDynamicOutputFormat obtain the logical plan, start execution")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1616747472136",src:n(93693).Z,width:"1815",height:"1096"})),(0,r.kt)("p",null,"The most important implementation is DorisRowDataInputFormat and DorisDynamicOutputFormat customized based on RichInputFormat and RichOutputFormat."),(0,r.kt)("p",null,"In DorisRowDataInputFormat, the obtained dorisPartitions are divided into multiple shards in createInputSplits for parallel computing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public DorisTableInputSplit[] createInputSplits(int minNumSplits) {\n        List<DorisTableInputSplit> dorisSplits = new ArrayList<>();\n        int splitNum = 0;\n        for (PartitionDefinition partition : dorisPartitions) {\n            dorisSplits.add(new DorisTableInputSplit(splitNum++,partition));\n        }\n        return dorisSplits.toArray(new DorisTableInputSplit[0]);\n}\n\npublic RowData nextRecord(RowData reuse)  {\n        if (!hasNext) {\n            //After reading the data, return null\n            return null;\n        }\n        List next = (List)scalaValueReader.next();\n        GenericRowData genericRowData = new GenericRowData(next.size());\n        for(int i =0;i<next.size();i++){\n            genericRowData.setField(i, next.get(i));\n        }\n        //Determine if there is still data\n        hasNext = scalaValueReader.hasNext();\n        return genericRowData;\n}\n")),(0,r.kt)("p",null,"In DorisRowDataOutputFormat, write data to doris through streamload. Refer to org.apache.doris.plugin.audit.DorisStreamLoader for streamload program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public  void writeRecord(RowData row) throws IOException {\n       //streamload Default delimiter \\t\n        StringJoiner value = new StringJoiner("\\t");\n        GenericRowData rowData = (GenericRowData) row;\n        for(int i = 0; i < row.getArity(); ++i) {\n            value.add(rowData.getField(i).toString());\n        }\n        //streamload write data\n        DorisStreamLoad.LoadResponse loadResponse = dorisStreamLoad.loadBatch(value.toString());\n        System.out.println(loadResponse);\n}\n')))}p.isMDXComponent=!0},9241:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Flink-doris-connector-architecture-2ec71a8383a2d095a6cc5badcbbd9ca9.png"},18092:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Flink-doris-connector-f5eea3787297c108df92ba464d2c77b3.png"},5182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Flink-doris-connector1-c837e36a9e081841708dda9ff9de7438.png"},30075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Flink-doris-connector2-4e04d4d867760cdf6d96902b48198e49.png"},93693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/table_connectors-b35a52403d6a1b49ed8c7e6f4db79206.svg"}}]);