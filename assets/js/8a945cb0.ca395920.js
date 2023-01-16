"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12681],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(c,l(l({ref:e},d),{},{components:n})):r.createElement(c,l({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77449:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Flink Doris Connector",language:"en"},l=void 0,o={unversionedId:"extending-doris/flink-doris-connector",id:"version-0.15/extending-doris/flink-doris-connector",title:"Flink Doris Connector",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/extending-doris/flink-doris-connector.md",sourceDirName:"extending-doris",slug:"/extending-doris/flink-doris-connector",permalink:"/docs/0.15/extending-doris/flink-doris-connector",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Flink Doris Connector",language:"en"},sidebar:"docs",previous:{title:"Spark Doris Connector",permalink:"/docs/0.15/extending-doris/spark-doris-connector"},next:{title:"DataX doriswriter",permalink:"/docs/0.15/extending-doris/datax"}},s={},p=[{value:"Version Compatibility",id:"version-compatibility",level:2},{value:"Build and Install",id:"build-and-install",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"SQL",id:"sql",level:3},{value:"DataStreamSource",id:"datastreamsource",level:3},{value:"DataStreamSink",id:"datastreamsink",level:3},{value:"DataSetSink",id:"datasetsink",level:3},{value:"General",id:"general",level:3},{value:"Doris &amp; Flink Column Type Mapping",id:"doris--flink-column-type-mapping",level:2}],d={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flink-doris-connector"},"Flink Doris Connector"),(0,a.kt)("p",null,"Flink Doris Connector can support read and write data stored in Doris through Flink."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can map the ",(0,a.kt)("inlineCode",{parentName:"li"},"Doris")," table to",(0,a.kt)("inlineCode",{parentName:"li"}," DataStream")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Table"),".")),(0,a.kt)("h2",{id:"version-compatibility"},"Version Compatibility"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connector"),(0,a.kt)("th",{parentName:"tr",align:null},"Flink"),(0,a.kt)("th",{parentName:"tr",align:null},"Doris"),(0,a.kt)("th",{parentName:"tr",align:null},"Java"),(0,a.kt)("th",{parentName:"tr",align:null},"Scala"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1.11.2"),(0,a.kt)("td",{parentName:"tr",align:null},"0.13+"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"2.12")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1.13.x"),(0,a.kt)("td",{parentName:"tr",align:null},"0.13.+"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"2.12")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Flink 1.13.x version adaptation issues")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"     <properties>\n         <scala.version>2.12</scala.version>\n         <flink.version>1.11.2</flink.version>\n         <libthrift.version>0.9.3</libthrift.version>\n         <arrow.version>0.15.1</arrow.version>\n         <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n         <doris.home>${basedir}/../../</doris.home>\n         <doris.thirdparty>${basedir}/../../thirdparty</doris.thirdparty>\n     </properties>\n")),(0,a.kt)("p",null,"Just change the ",(0,a.kt)("inlineCode",{parentName:"p"},"flink.version")," here to be the same as your Flink cluster version, and edit again"),(0,a.kt)("h2",{id:"build-and-install"},"Build and Install"),(0,a.kt)("p",null,"Execute following command in dir ",(0,a.kt)("inlineCode",{parentName:"p"},"extension/flink-doris-connector/"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you have not compiled the doris source code as a whole, you need to compile the Doris source code first, otherwise the thrift command will not be found, and you need to execute ",(0,a.kt)("inlineCode",{parentName:"li"},"sh build.sh")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"incubator-doris")," directory."),(0,a.kt)("li",{parentName:"ol"},"It is recommended to compile under the docker compile environment ",(0,a.kt)("inlineCode",{parentName:"li"},"apache/incubator-doris:build-env-1.2")," of doris, because the JDK version below 1.3 is 11, there will be compilation problems.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sh build.sh\n")),(0,a.kt)("p",null,"After successful compilation, the file ",(0,a.kt)("inlineCode",{parentName:"p"},"doris-flink-1.0.0-SNAPSHOT.jar")," will be generated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"output/")," directory. Copy this file to ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassPath")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink-Doris-Connector"),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," running in ",(0,a.kt)("inlineCode",{parentName:"p"},"Local")," mode, put this file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"jars/")," folder. ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," running in ",(0,a.kt)("inlineCode",{parentName:"p"},"Yarn")," cluster mode, put this file in the pre-deployment package."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remarks:")," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Doris FE should be configured to enable http v2 in the configuration"),(0,a.kt)("li",{parentName:"ol"},"Scala version currently only supports 2.12.x version")),(0,a.kt)("p",null,"conf/fe.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"enable_http_server_v2 = true\n")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"The purpose of this step is to register the Doris data source on Flink.\nThis step is operated on Flink.\nThere are two ways to use sql and java. The following are examples to illustrate"),(0,a.kt)("h3",{id:"sql"},"SQL"),(0,a.kt)("p",null,"The purpose of this step is to register the Doris data source on Flink.\nThis step is operated on Flink"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE flink_doris_source (\n    name STRING,\n    age INT,\n    price DECIMAL(5,2),\n    sale DOUBLE\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = '$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT',\n      'table.identifier' = '$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME',\n      'username' = '$YOUR_DORIS_USERNAME',\n      'password' = '$YOUR_DORIS_PASSWORD'\n);\n\nCREATE TABLE flink_doris_sink (\n    name STRING,\n    age INT,\n    price DECIMAL(5,2),\n    sale DOUBLE\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = '$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT',\n      'table.identifier' = '$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME',\n      'username' = '$YOUR_DORIS_USERNAME',\n      'password' = '$YOUR_DORIS_PASSWORD'\n);\n\nINSERT INTO flink_doris_sink select name,age,price,sale from flink_doris_source\n")),(0,a.kt)("h3",{id:"datastreamsource"},"DataStreamSource"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},' Properties properties = new Properties();\n properties.put("fenodes","FE_IP:8030");\n properties.put("username","root");\n properties.put("password","");\n properties.put("table.identifier","db.table");\n env.addSource(new DorisSourceFunction(new DorisStreamOptions(properties),new SimpleListDeserializationSchema())).print();\n')),(0,a.kt)("h3",{id:"datastreamsink"},"DataStreamSink"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// -------- sink with raw json string stream --------\nProperties pro = new Properties();\npro.setProperty("format", "json");\npro.setProperty("strip_outer_array", "true");\nenv.fromElements( "{\\"longitude\\": \\"116.405419\\", \\"city\\": \\"\u5317\u4eac\\", \\"latitude\\": \\"39.916927\\"}")\n     .addSink(\n        DorisSink.sink(\n            DorisReadOptions.builder().build(),\n            DorisExecutionOptions.builder()\n                    .setBatchSize(3)\n                    .setBatchIntervalMs(0l)\n                    .setMaxRetries(3)\n                    .setStreamLoadProp(pro).build(),\n            DorisOptions.builder()\n                    .setFenodes("FE_IP:8030")\n                    .setTableIdentifier("db.table")\n                    .setUsername("root")\n                    .setPassword("").build()\n        ));\n\nOR\nenv.fromElements("{\\"longitude\\": \\"116.405419\\", \\"city\\": \\"\u5317\u4eac\\", \\"latitude\\": \\"39.916927\\"}")\n    .addSink(\n        DorisSink.sink(\n            DorisOptions.builder()\n                    .setFenodes("FE_IP:8030")\n                    .setTableIdentifier("db.table")\n                    .setUsername("root")\n                    .setPassword("").build()\n        ));\n\n\n// -------- sink with RowData stream --------\nDataStream<RowData> source = env.fromElements("")\n    .map(new MapFunction<String, RowData>() {\n        @Override\n        public RowData map(String value) throws Exception {\n            GenericRowData genericRowData = new GenericRowData(3);\n            genericRowData.setField(0, StringData.fromString("\u5317\u4eac"));\n            genericRowData.setField(1, 116.405419);\n            genericRowData.setField(2, 39.916927);\n            return genericRowData;\n        }\n    });\n\nString[] fields = {"city", "longitude", "latitude"};\nLogicalType[] types = {new VarCharType(), new DoubleType(), new DoubleType()};\n\nsource.addSink(\n    DorisSink.sink(\n        fields,\n        types,\n        DorisReadOptions.builder().build(),\n        DorisExecutionOptions.builder()\n            .setBatchSize(3)\n            .setBatchIntervalMs(0L)\n            .setMaxRetries(3)\n            .build(),\n        DorisOptions.builder()\n            .setFenodes("FE_IP:8030")\n            .setTableIdentifier("db.table")\n            .setUsername("root")\n            .setPassword("").build()\n    ));\n')),(0,a.kt)("h3",{id:"datasetsink"},"DataSetSink"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'MapOperator<String, RowData> data = env.fromElements("")\n    .map(new MapFunction<String, RowData>() {\n        @Override\n        public RowData map(String value) throws Exception {\n            GenericRowData genericRowData = new GenericRowData(3);\n            genericRowData.setField(0, StringData.fromString("\u5317\u4eac"));\n            genericRowData.setField(1, 116.405419);\n            genericRowData.setField(2, 39.916927);\n            return genericRowData;\n        }\n    });\n\nDorisOptions dorisOptions = DorisOptions.builder()\n    .setFenodes("FE_IP:8030")\n    .setTableIdentifier("db.table")\n    .setUsername("root")\n    .setPassword("").build();\nDorisReadOptions readOptions = DorisReadOptions.defaults();\nDorisExecutionOptions executionOptions = DorisExecutionOptions.defaults();\n\nLogicalType[] types = {new VarCharType(), new DoubleType(), new DoubleType()};\nString[] fiels = {"city", "longitude", "latitude"};\n\nDorisDynamicOutputFormat outputFormat =\n    new DorisDynamicOutputFormat(dorisOptions, readOptions, executionOptions, types, fiels);\n\noutputFormat.open(0, 1);\ndata.output(outputFormat);\noutputFormat.close();\n')),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,a.kt)("td",{parentName:"tr",align:null},"--"),(0,a.kt)("td",{parentName:"tr",align:null},"Doris FE http address, support multiple addresses, separated by commas")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"table.identifier"),(0,a.kt)("td",{parentName:"tr",align:null},"--"),(0,a.kt)("td",{parentName:"tr",align:null},"Doris table identifier, eg, db1.tbl1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"--"),(0,a.kt)("td",{parentName:"tr",align:null},"Doris username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"--"),(0,a.kt)("td",{parentName:"tr",align:null},"Doris password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of retries to send requests to Doris")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,a.kt)("td",{parentName:"tr",align:null},"30000"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection timeout for sending requests to Doris")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,a.kt)("td",{parentName:"tr",align:null},"30000"),(0,a.kt)("td",{parentName:"tr",align:null},"Read timeout for sending request to Doris")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,a.kt)("td",{parentName:"tr",align:null},"3600"),(0,a.kt)("td",{parentName:"tr",align:null},"Query the timeout time of doris, the default is 1 hour, -1 means no timeout limit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of Doris Tablets corresponding to an Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the flink side, but at the same time will cause greater pressure on Doris.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,a.kt)("td",{parentName:"tr",align:null},"1024"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of rows to read data from BE at one time. Increasing this value can reduce the number of connections between Flink and Doris. Thereby reducing the extra time overhead caused by network delay.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"2147483648"),(0,a.kt)("td",{parentName:"tr",align:null},"Memory limit for a single query. The default is 2GB, in bytes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to support asynchronous conversion of Arrow format to RowBatch required for flink-doris-connector iteration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,a.kt)("td",{parentName:"tr",align:null},"64"),(0,a.kt)("td",{parentName:"tr",align:null},"Asynchronous conversion of the internal processing queue in Arrow format takes effect when doris.deserialize.arrow.async is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.read.field"),(0,a.kt)("td",{parentName:"tr",align:null},"--"),(0,a.kt)("td",{parentName:"tr",align:null},"List of column names in the Doris table, separated by commas")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,a.kt)("td",{parentName:"tr",align:null},"--"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter expression of the query, which is transparently transmitted to Doris. Doris uses this expression to complete source-side data filtering.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.batch.size"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum number of lines in a single write BE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of retries after writing BE failed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.batch.interval"),(0,a.kt)("td",{parentName:"tr",align:null},"1s"),(0,a.kt)("td",{parentName:"tr",align:null},"The flush interval, after which the asynchronous thread will write the data in the cache to BE. The default value is 1 second, and the time units are ms, s, min, h, and d. Set to 0 to turn off periodic writing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,a.kt)("td",{parentName:"tr",align:null},"--"),(0,a.kt)("td",{parentName:"tr",align:null},"The stream load parameters.eg:sink.properties.column_separator' = ','. Setting 'sink.properties.escape_delimiters' = 'true' if you want to use a control char as a separator, so that such as '","\\","x01' will translate to binary 0x01",(0,a.kt)("br",null)," Support JSON format import, you need to enable both 'sink.properties.format' ='json' and 'sink.properties.strip_outer_array' ='true'")))),(0,a.kt)("h2",{id:"doris--flink-column-type-mapping"},"Doris & Flink Column Type Mapping"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Doris Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Flink Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,a.kt)("td",{parentName:"tr",align:null},"NULL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,a.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,a.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,a.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"INT"),(0,a.kt)("td",{parentName:"tr",align:null},"INT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,a.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,a.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,a.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DATE"),(0,a.kt)("td",{parentName:"tr",align:null},"STRING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,a.kt)("td",{parentName:"tr",align:null},"STRING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,a.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,a.kt)("td",{parentName:"tr",align:null},"STRING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LARGEINT"),(0,a.kt)("td",{parentName:"tr",align:null},"STRING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,a.kt)("td",{parentName:"tr",align:null},"STRING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DECIMALV2"),(0,a.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TIME"),(0,a.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HLL"),(0,a.kt)("td",{parentName:"tr",align:null},"Unsupported datatype")))))}m.isMDXComponent=!0}}]);