"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[95015],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=h(a),c=r,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const i={title:"Apache Doris announced the official release of version 1.2.3",summary:"Dear community, we are excited to announce the release of Apache Doris 1.2.3 on March 30, 2023. We have made over 200 enhancements and bug fixes in this new version. Upgrade now and enjoy higher stability and ease of use!",date:"2023-03-20",author:"Apache Doris",tags:["Release Notes"]},o=void 0,p={permalink:"/blog/release-1.2.3",source:"@site/blog/release-1.2.3.md",title:"Apache Doris announced the official release of version 1.2.3",description:"\x3c!--",date:"2023-03-20T00:00:00.000Z",formattedDate:"March 20, 2023",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],truncated:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.3",summary:"Dear community, we are excited to announce the release of Apache Doris 1.2.3 on March 30, 2023. We have made over 200 enhancements and bug fixes in this new version. Upgrade now and enjoy higher stability and ease of use!",date:"2023-03-20",author:"Apache Doris",tags:["Release Notes"]},prevItem:{title:"How We Increased Database Query Concurrency by 20 Times",permalink:"/blog/High_concurrency"},nextItem:{title:"Building the Next-Generation Data Lakehouse: 10X Performance",permalink:"/blog/Data Lakehouse"}},l={authorsImageUrls:[void 0]},h=[{value:"Improvement",id:"improvement",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Big Thanks",id:"big-thanks",level:2}],s={toc:h},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"improvement"},"Improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDBC Catalog",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support connecting to Doris clusters through JDBC Catalog.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#doris"},"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc#doris")))),(0,r.kt)("li",{parentName:"ul"},"Support to synchronize only the specified database through the ",(0,r.kt)("inlineCode",{parentName:"li"},"only_specified_database")," attribute."),(0,r.kt)("li",{parentName:"ul"},"Support synchronizing table names in the form of lowercase through ",(0,r.kt)("inlineCode",{parentName:"li"},"lower_case_table_names"),"  to solve the problem of case sensitivity of table names.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc"},"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/jdbc")))),(0,r.kt)("li",{parentName:"ul"},"Optimize the read performance of JDBC Catalog."))),(0,r.kt)("li",{parentName:"ul"},"Elasticsearch Catalog",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support Array type mapping."),(0,r.kt)("li",{parentName:"ul"},"Support whether to push down the ",(0,r.kt)("inlineCode",{parentName:"li"},"like")," expression through the ",(0,r.kt)("inlineCode",{parentName:"li"},"like_push_down")," attribute to control the CPU overhead of the ES cluster.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/es"},"https://doris.apache.org/zh-CN/docs/dev/lakehouse/multi-catalog/es")))))),(0,r.kt)("li",{parentName:"ul"},"Hive Catalog",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support Hive table default partition ",(0,r.kt)("inlineCode",{parentName:"li"},"__HIVE_DEFAULT_PARTITION__"),"."),(0,r.kt)("li",{parentName:"ul"},"Hive Metastore metadata automatic synchronization supports notification event in compressed format."))),(0,r.kt)("li",{parentName:"ul"},"Dynamic partition supports specifying the ",(0,r.kt)("inlineCode",{parentName:"li"},"storage_medium")," parameter to control the storage medium of the newly added partition.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/dev/advanced/partition/dynamic-partition"},"https://doris.apache.org/zh-CN/docs/dev/advanced/partition/dynamic-partition")))),(0,r.kt)("li",{parentName:"ul"},"Optimize BE's threading model to avoid stability problems caused by frequent thread creation and destroy.")),(0,r.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed issues with Merge-On-Write Unique Key tables."),(0,r.kt)("li",{parentName:"ul"},"Fixed compaction related issues."),(0,r.kt)("li",{parentName:"ul"},"Fixed some delete statement issues causing data errors."),(0,r.kt)("li",{parentName:"ul"},"Fixed several query execution errors."),(0,r.kt)("li",{parentName:"ul"},"Fixed the problem of using JDBC catalog to cause BE crash on some operating system."),(0,r.kt)("li",{parentName:"ul"},"Fixed Multi-Catalog issues."),(0,r.kt)("li",{parentName:"ul"},"Fixed memory statistics and optimization issues."),(0,r.kt)("li",{parentName:"ul"},"Fixed decimalV3 and date/datetimev2 related issues."),(0,r.kt)("li",{parentName:"ul"},"Fixed load transaction stability issues."),(0,r.kt)("li",{parentName:"ul"},"Fixed light-weight schema change issues."),(0,r.kt)("li",{parentName:"ul"},"Fixed the issue of using ",(0,r.kt)("inlineCode",{parentName:"li"},"datetime")," type for batch partition creation."),(0,r.kt)("li",{parentName:"ul"},"Fixed the problem that a large number of failed broker loads would cause the FE memory usage to be too high."),(0,r.kt)("li",{parentName:"ul"},"Fixed the problem that stream load cannot be canceled after dropping the table."),(0,r.kt)("li",{parentName:"ul"},"Fixed querying ",(0,r.kt)("inlineCode",{parentName:"li"},"information_schema")," timeout in some cases."),(0,r.kt)("li",{parentName:"ul"},"Fixed the problem of BE crash caused by concurrent data export using ",(0,r.kt)("inlineCode",{parentName:"li"},"select outfile"),"."),(0,r.kt)("li",{parentName:"ul"},"Fixed transactional insert operation memory leak."),(0,r.kt)("li",{parentName:"ul"},"Fixed several query/load profile issues, and supports direct download of profiles through FE web ui."),(0,r.kt)("li",{parentName:"ul"},"Fixed the problem that the BE tablet GC thread caused the IO util to be too high."),(0,r.kt)("li",{parentName:"ul"},"Fixed the problem that the commit offset is inaccurate in Kafka routine load.")),(0,r.kt)("h2",{id:"big-thanks"},"Big Thanks"),(0,r.kt)("p",null,"Thanks all who contribute to this release:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zy-kkk"},"@zy-kkk"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zhannngchen"},"@zhannngchen"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZhangYu0123"},"@ZhangYu0123"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zhangstar333"},"@zhangstar333"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zclllyybb"},"@zclllyybb"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yuxuan-luo"},"@yuxuan-luo"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yixiutt"},"@yixiutt"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yiguolei"},"@yiguolei"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yangzhg"},"@yangzhg"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xinyiZzz"},"@xinyiZzz"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XieJiann"},"@XieJiann"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xiaokang"},"@xiaokang"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WuWQ98"},"@WuWQ98"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WinkerDu"},"@WinkerDu"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wangbo"},"@wangbo"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TangSiyang2001"},"@TangSiyang2001"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SWJTU-ZhangLei"},"@SWJTU-ZhangLei"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starocean999"},"@starocean999"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stalary"},"@stalary"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sohardforaname"},"@sohardforaname"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SaintBacchus"},"@SaintBacchus"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/qzsee"},"@qzsee"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/qidaye"},"@qidaye"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/platoneko"},"@platoneko"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nextdreamblue"},"@nextdreamblue"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mrhhsg"},"@mrhhsg"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/morrySnow"},"@morrySnow"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/morningman"},"@morningman"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maochongxin"},"@maochongxin"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/luwei16"},"@luwei16"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/luozenglin"},"@luozenglin"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/liaoxin01"},"@liaoxin01"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kikyou1997"},"@Kikyou1997"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Jibing-Li"},"@Jibing-Li"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jacktengg"},"@jacktengg"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/htyoung"},"@htyoung"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/HappenLee"},"@HappenLee"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Gabriel39"},"@Gabriel39"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/freemandealer"},"@freemandealer"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/englefly"},"@englefly"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eldenmoon"},"@eldenmoon"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dutyu"},"@dutyu"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Doris-Extras"},"@Doris-Extras"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chenlinzhong"},"@chenlinzhong"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catpineapple"},"@catpineapple"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Cai-Yao"},"@Cai-Yao"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/caiconghui"},"@caiconghui"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ByteYue"},"@ByteYue"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BiteTheDDDDt"},"@BiteTheDDDDt"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Bingandbing"},"@Bingandbing"),"\n@BePPPower\n@adonis0147"))}u.isMDXComponent=!0}}]);