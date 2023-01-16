"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={title:"[Release Note] Apache Doris(Incubating) 1.0.0 Release",summary:"[Release Note] Apache Doris(Incubating) 1.0.0 Release",date:"2022-04-18",author:"Apache Doris",tags:["Release Notes"]},r=void 0,l={permalink:"/blog/release-note-1.0.0",source:"@site/blog/release-note-1.0.0.md",title:"[Release Note] Apache Doris(Incubating) 1.0.0 Release",description:"\x3c!--",date:"2022-04-18T00:00:00.000Z",formattedDate:"April 18, 2022",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],truncated:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"[Release Note] Apache Doris(Incubating) 1.0.0 Release",summary:"[Release Note] Apache Doris(Incubating) 1.0.0 Release",date:"2022-04-18",author:"Apache Doris",tags:["Release Notes"]},prevItem:{title:"Announcing Open Source Realtime Analytical database Apache Doris as a Top-Level Project",permalink:"/blog/Annoucing"},nextItem:{title:"[Release Note] Apache Doris(Incubating) 0.15.0 Release",permalink:"/blog/release-note-0.15.0"}},s={authorsImageUrls:[void 0]},u=[{value:"Important update",id:"important-update",level:2},{value:"Vectorized Execution Engine Experimental",id:"vectorized-execution-engine-experimental",level:3},{value:"Lateral View Grammar Experimental",id:"lateral-view-grammar-experimental",level:3},{value:"Hive External Table Experimental",id:"hive-external-table-experimental",level:3},{value:"Support Z-Order data sorting format",id:"support-z-order-data-sorting-format",level:3},{value:"Support for Apache SeaTunnel (Incubating) plugin",id:"support-for-apache-seatunnel-incubating-plugin",level:3},{value:"New Function",id:"new-function",level:3},{value:"Important Optimization",id:"important-optimization",level:3},{value:"Features Optimization",id:"features-optimization",level:3},{value:"Usability Improvements",id:"usability-improvements",level:3},{value:"Important Bug Fixes",id:"important-bug-fixes",level:3},{value:"Other",id:"other",level:3},{value:"Changelog",id:"changelog",level:2},{value:"Thanks",id:"thanks",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"apache-dorisincubating-100-release"},"Apache Doris(Incubating) 1.0.0 Release"),(0,i.kt)("p",null,"Dear community friends, after several months, we are happy to announce that Apache Doris (incubating) has officially released the 1.0 Release version on April 18, 2022! ",(0,i.kt)("strong",{parentName:"p"},"This is the first 1-bit version of Apache Doris since it was incubated by the Apache Foundation, and it is also the version with the largest refactoring of the core code of Apache Doris so far**"),"! ",(0,i.kt)("strong",{parentName:"p"},"With "),"114 Contributors",(0,i.kt)("strong",{parentName:"p"}," committing "),"over 660 optimizations and fixes** for Apache Doris, thank you to everyone who makes Apache Doris even better!"),(0,i.kt)("p",null,'In version 1.0, we introduced important functions such as vectorized execution engine, Hive external table, Lateral View syntax and Table Function table function, Z-Order data index, Apache SeaTunnel plug-in, etc., and added support for synchronous update and deletion of data in Flink CDC. Support, optimize many problems in the process of data import and query, and comprehensively enhance the query performance, ease of use, stability and other special effects of Apache Doris. Welcome to download and use! Click "',(0,i.kt)("strong",{parentName:"p"},"Read the original text"),'" at the end of the article to go directly to the download address.'),(0,i.kt)("p",null,"Every day that has not been published, there are countless contributors behind it, who dare not stop for half a minute. Here we would like to especially thank the small partners from SIG (Special Interest Group) such as ",(0,i.kt)("strong",{parentName:"p"},"vectorized execution engine, query optimizer, and visual operation and maintenance platform"),". Since the establishment of the Apache Doris Community SIG group in August 2021, data from more than ten companies including Baidu, Meituan, Xiaomi, JD, Shuhai, ByteDance, Tencent, NetEase, Alibaba, PingCAP, Nebula Graph, etc. Ten contributors",(0,i.kt)("strong",{parentName:"p"}," joined the SIG as the first members, and for the first time completed the development of such major functions as the vectorized execution engine, query optimizer, and Doris Manager visual monitoring operation and maintenance platform in the form of open source collaboration of special groups. "),"During more than half a year, conducting technical research and sharing dozens of times, holding nearly 100 remote meetings, accumulatively submitting hundreds of Commits, involving more than 100,000 lines of code**, it is precisely because of their contributions , only the 1.0 version came out, let us once again express our most sincere thanks for their hard work!"),(0,i.kt)("p",null,"At the same time, the number of Apache Doris contributors has exceeded 300, the number of monthly active contributors has exceeded 60, and the average weekly number of Commits submitted in recent weeks has also exceeded 80. The scale and activity of developers gathered by the community There has been a huge improvement. We are very much looking forward to having more small partners participate in the community contribution, and work with us to build Apache Doris into the world's top analytical database. We also hope that all small partners can reap valuable growth with us. If you would like to participate in the community, please contact us via the developer email ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org"),"."),(0,i.kt)("p",null,"We welcome you to contact us with any questions during the use process through GitHub Discussion or Dev mail group, and we look forward to your participation in community discussions and construction."),(0,i.kt)("h2",{id:"important-update"},"Important update"),(0,i.kt)("h3",{id:"vectorized-execution-engine-experimental"},"Vectorized Execution Engine ","[Experimental]"),(0,i.kt)("p",null,"In the past, the SQL execution engine of Apache Doris was designed based on the row-based memory format and the traditional volcano model. There was unnecessary overhead in performing SQL operator and function operations, which led to the limited efficiency of the Apache Doris execution engine, which did not Adapt to the architecture of modern CPUs. The goal of the vectorized execution engine is to replace the current row-based SQL execution engine of Apache Doris, fully release the computing power of modern CPUs, break through the performance limitations on the SQL execution engine, and exert extreme performance."),(0,i.kt)("p",null,"Based on the characteristics of modern CPUs and the execution characteristics of the volcano model, the vectorized execution engine redesigned the SQL execution engine in the columnar storage system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reorganized the data structure of memory, replaced Tuple with Column, improved Cache affinity, branch prediction and prefetch memory friendliness during calculation"),(0,i.kt)("li",{parentName:"ul"},"Type judgment is performed in batches. In this batch, the type determined during type judgment is used, and the virtual function cost of type judgment of each line is allocated to the batch level."),(0,i.kt)("li",{parentName:"ul"},"Through batch-level type judgment, virtual function calls are eliminated, allowing the compiler to have the opportunity for function inlining and SIMD optimization")),(0,i.kt)("p",null,"This greatly improves the efficiency of the CPU when executing SQL and improves the performance of SQL queries."),(0,i.kt)("p",null,"In Apache Doris version 1.0, enabling the vectorized execution engine with set batch_size = 4096 and set enable_vectorized_engine = true can significantly improve query performance in most cases. Under the SSB and OnTime standard test datasets, the overall performance of the two scenarios of multi-table association and wide-column query is improved by 3 times and 2.6 times respectively."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(42399).Z,width:"1080",height:"697"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(36650).Z,width:"1080",height:"819"})),(0,i.kt)("h3",{id:"lateral-view-grammar-experimental"},"Lateral View Grammar ","[Experimental]"),(0,i.kt)("p",null,"Through Lateral View syntax, we can use Table Function table functions such as explode_bitmap, explode_split, explode_jaon_array, etc., to expand bitmap, String or Json Array from one column into multiple rows, so that the expanded data can be further processed (such as Filter, Join, etc.) ."),(0,i.kt)("h3",{id:"hive-external-table-experimental"},"Hive External Table ","[Experimental]"),(0,i.kt)("p",null,"Hive External Table provides users with the ability to directly access Hive tables through Doris. External tables save the tedious data import work, and can use Doris's own OLAP capabilities to solve data analysis problems of Hive tables. The current version supports connecting Hive data sources to Doris, and supports federated queries through data in Doris and Hive data sources for more complex analysis operations."),(0,i.kt)("h3",{id:"support-z-order-data-sorting-format"},"Support Z-Order data sorting format"),(0,i.kt)("p",null,"Apache Doris data is sorted and stored according to the prefix column, so when the prefix query condition is included, fast data search can be performed on the sorted data, but if the query condition is not a prefix column, the data sorting feature cannot be used for fast data search. The above problems can be solved by Z-Order Indexing. In version 1.0, we have added the Z-Order data sorting format, which can play a good filtering effect in the scenario of kanban multi-column query and accelerate the filtering performance of non-prefix column conditions. ."),(0,i.kt)("h3",{id:"support-for-apache-seatunnel-incubating-plugin"},"Support for Apache SeaTunnel (Incubating) plugin"),(0,i.kt)("p",null,"Apache SeaTunnel is a high-performance distributed data integration framework built on Apache Spark and Apache Flink. In the 1.0 version of Apache Doris, we have added the SaeTunnel plugin, users can use Apache SeaTunnel for synchronization and ETL between multiple data sources."),(0,i.kt)("h3",{id:"new-function"},"New Function"),(0,i.kt)("p",null,"More bitmap functions are supported, see the function manual for details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bitmap_max"),(0,i.kt)("li",{parentName:"ul"},"bitmap_and_not"),(0,i.kt)("li",{parentName:"ul"},"bitmap_and_not_count"),(0,i.kt)("li",{parentName:"ul"},"bitmap_has_all"),(0,i.kt)("li",{parentName:"ul"},"bitmap_and_count"),(0,i.kt)("li",{parentName:"ul"},"bitmap_or_count"),(0,i.kt)("li",{parentName:"ul"},"bitmap_xor_count"),(0,i.kt)("li",{parentName:"ul"},"bitmap_subset_limit"),(0,i.kt)("li",{parentName:"ul"},"sub_bitmap")),(0,i.kt)("p",null,"Support national secret algorithm SM3/SM4;"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": The functions marked ","[Experimental]"," above are experimental functions. We will continue to optimize and iterate on the above functions in subsequent versions, and further improve them in subsequent versions. If you have any questions or comments during use, please feel free to contact us")),(0,i.kt)("h3",{id:"important-optimization"},"Important Optimization"),(0,i.kt)("h3",{id:"features-optimization"},"Features Optimization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reduced the number of segment files generated when importing in large batches to reduce Compaction pressure."),(0,i.kt)("li",{parentName:"ul"},"Transfer data through BRPC's attachment function to reduce serialization and deserialization overhead during query."),(0,i.kt)("li",{parentName:"ul"},"Support to directly return binary data of HLL/BITMAP type for external analysis of business."),(0,i.kt)("li",{parentName:"ul"},"Optimize and reduce the probability of OVERCROWDED and NOT_CONNECTED errors in BRPC, and enhance system stability."),(0,i.kt)("li",{parentName:"ul"},"Enhance the fault tolerance of import."),(0,i.kt)("li",{parentName:"ul"},"Support to update and delete data synchronously through Flink CDC."),(0,i.kt)("li",{parentName:"ul"},"Support adaptive Runtime Filter."),(0,i.kt)("li",{parentName:"ul"},"Significantly reduce the memory footprint of insert into operations")),(0,i.kt)("h3",{id:"usability-improvements"},"Usability Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Routine Load supports displaying the current offset delay number and other status."),(0,i.kt)("li",{parentName:"ul"},"Added statistics on peak memory usage of queries in FE audit log."),(0,i.kt)("li",{parentName:"ul"},"Added missing version information to Compaction URL results to facilitate troubleshooting."),(0,i.kt)("li",{parentName:"ul"},"Support marking BE as non-queryable or non-importable to quickly screen problem nodes.")),(0,i.kt)("h3",{id:"important-bug-fixes"},"Important Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed several query errors."),(0,i.kt)("li",{parentName:"ul"},"Fixed some scheduling logic issues in Broker Load."),(0,i.kt)("li",{parentName:"ul"},"Fix the problem that the metadata cannot be loaded due to the STREAM keyword."),(0,i.kt)("li",{parentName:"ul"},"Fixed Decommission not executing correctly."),(0,i.kt)("li",{parentName:"ul"},"Fix the problem that -102 error may occur when operating Schema Change operation in some cases."),(0,i.kt)("li",{parentName:"ul"},"Fix the problem that using String type may cause BE to crash in some cases.")),(0,i.kt)("h3",{id:"other"},"Other"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added Minidump function; easy to locate when problems occur")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("p",null,"For detailed Release Note, please check the link:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/8549"},"https://github.com/apache/incubator-doris/issues/8549")),(0,i.kt)("h2",{id:"thanks"},"Thanks"),(0,i.kt)("p",null,"The release of Apache Doris(incubating) 1.0 Release version is inseparable from the support of all community users. I would like to express my gratitude to all community contributors who participated in version design, development, testing and discussion. They are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@924060929\n@adonis0147\n@Aiden-Dong\n@aihai\n@airborne12\n@Alibaba-HZY\n@amosbird\n@arthuryangcs\n@awakeljw\n@bingzxy\n@BiteTheDDDDt\n@blackstar-baba\n@caiconghui\n@CalvinKirs\n@cambyzju\n@caoliang-web\n@ccoffline\n@chaplinthink\n@chovy-3012\n@ChPi\n@DarvenDuan\n@dataalive\n@dataroaring\n@dh-cloud\n@dohongdayi\n@dongweizhao\n@drgnchan\n@e0c9\n@EmmyMiao87\n@englefly\n@eyesmoons\n@freemandealer\n@Gabriel39\n@gaodayue\n@GoGoWen\n@Gongruixiao\n@gwdgithubnom\n@HappenLee\n@Henry2SS\n@hf200012\n@htyoung\n@jacktengg\n@jackwener\n@JNSimba\n@Keysluomo\n@kezhenxu94\n@killxdcj\n@lihuigang\n@littleeleventhwolf\n@liutang123\n@liuzhuang2017\n@lonre\n@lovingfeel\n@luozenglin\n@luzhijing\n@MeiontheTop\n@mh-boy\n@morningman\n@mrhhsg\n@Myasuka\n@nimuyuhan\n@obobj\n@pengxiangyu\n@qidaye\n@qzsee\n@renzhimin7\n@Royce33\n@SleepyBear96\n@smallhibiscus\n@sodamnsure\n@spaces-X\n@sparklezzz\n@stalary\n@steadyBoy\n@tarepanda1024\n@THUMarkLau\n@tianhui5\n@tinkerrrr\n@ucasfl\n@Userwhite\n@vinson0526\n@wangbo\n@wangshuo128\n@wangyf0555\n@weajun\n@weizuo93\n@whutpencil\n@WindyGao\n@wunan1210\n@xiaokang\n@xiaokangguo\n@xiedeyantu\n@xinghuayu007\n@xingtanzjr\n@xinyiZzz\n@xtr1993\n@xu20160924\n@xuliuzhe\n@xuzifu666\n@xy720\n@yangzhg\n@yiguolei\n@yinzhijian\n@yjant\n@zbtzbtzbt\n@zenoyang\n@zh0122\n@zhangstar333\n@zhannngchen\n@zhengshengjun\n@zhengshiJ\n@ZhikaiZuo\n@ztgoto\n@zuochunwei\n")))}d.isMDXComponent=!0},42399:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.0.0-1-e7888e124fefa8bd38215dd9d4be4794.png"},36650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1.0.0-2-d9e8be01f5ff99dd6e15fc33af4518fc.png"}}]);