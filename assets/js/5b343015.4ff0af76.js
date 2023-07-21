"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Hive",language:"en"},l=void 0,o={unversionedId:"lakehouse/multi-catalog/hive",id:"lakehouse/multi-catalog/hive",title:"Hive",description:"\x3c!--",source:"@site/docs/lakehouse/multi-catalog/hive.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/hive",permalink:"/docs/dev/lakehouse/multi-catalog/hive",draft:!1,tags:[],version:"current",frontMatter:{title:"Hive",language:"en"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/dev/lakehouse/multi-catalog/"},next:{title:"Iceberg",permalink:"/docs/dev/lakehouse/multi-catalog/iceberg"}},s={},p=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Hive On HDFS",id:"hive-on-hdfs",level:3},{value:"Hive On JuiceFS",id:"hive-on-juicefs",level:3},{value:"Hive On S3",id:"hive-on-s3",level:3},{value:"Hive On OSS",id:"hive-on-oss",level:3},{value:"Hive On OBS",id:"hive-on-obs",level:3},{value:"Hive On COS",id:"hive-on-cos",level:3},{value:"Hive With Glue",id:"hive-with-glue",level:3},{value:"Metadata cache settings",id:"metadata-cache-settings",level:2},{value:"Hive Version",id:"hive-version",level:2},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"Integrate with Apache Ranger",id:"integrate-with-apache-ranger",level:2},{value:"Settings",id:"settings",level:3},{value:"Best Practices",id:"best-practices",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hive"},"Hive"),(0,r.kt)("p",null,"By connecting to Hive Metastore, or a metadata service compatible with Hive Metatore, Doris can automatically obtain Hive database table information and perform data queries."),(0,r.kt)("p",null,"In addition to Hive, many other systems also use the Hive Metastore to store metadata. So through Hive Catalog, we can not only access Hive, but also access systems that use Hive Metastore as metadata storage. Such as Iceberg, Hudi, etc."),(0,r.kt)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Need to put core-site.xml, hdfs-site.xml and hive-site.xml in the conf directory of FE and BE. First read the hadoop configuration file in the conf directory, and then read the related to the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")," configuration file."),(0,r.kt)("li",{parentName:"ol"},"hive supports version 1/2/3."),(0,r.kt)("li",{parentName:"ol"},"Support Managed Table and External Table and part of Hive View."),(0,r.kt)("li",{parentName:"ol"},"Can identify hive, iceberg, hudi metadata stored in Hive Metastore.")),(0,r.kt)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.kt)("h3",{id:"hive-on-hdfs"},"Hive On HDFS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.kt)("p",null,"In addition to the two required parameters of ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hive.metastore.uris"),", more parameters can be passed to pass the information required for the connection."),(0,r.kt)("p",null,"If HDFS HA information is provided, the example is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.kt)("p",null,"Provide HDFS HA information and Kerberos authentication information at the same time, examples are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hive.metastore.sasl.enabled' = 'true',\n    'hive.metastore.kerberos.principal' = 'your-hms-principal',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n    'hadoop.security.authentication' = 'kerberos',\n    'hadoop.kerberos.keytab' = '/your-keytab-filepath/your.keytab',   \n    'hadoop.kerberos.principal' = 'your-principal@YOUR.COM',\n    'yarn.resourcemanager.principal' = 'your-rm-principal'\n);\n")),(0,r.kt)("p",null,"Please place the ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file and ",(0,r.kt)("inlineCode",{parentName:"p"},"keytab")," authentication file under all ",(0,r.kt)("inlineCode",{parentName:"p"},"BE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FE")," nodes. The path of the ",(0,r.kt)("inlineCode",{parentName:"p"},"keytab")," authentication file is consistent with the configuration. The ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file is placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc by default /krb5.conf")," path."),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"hive.metastore.kerberos.principal")," needs to be consistent with the property of the same name of the connected hive metastore, which can be obtained from ",(0,r.kt)("inlineCode",{parentName:"p"},"hive-site.xml"),"."),(0,r.kt)("h3",{id:"hive-on-juicefs"},"Hive On JuiceFS"),(0,r.kt)("p",null,"Data is stored in JuiceFS, examples are as follows:"),(0,r.kt)("p",null,"(Need to put ",(0,r.kt)("inlineCode",{parentName:"p"},"juicefs-hadoop-x.x.x.jar")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"fe/lib/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apache_hdfs_broker/lib/"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'root',\n    'fs.jfs.impl' = 'io.juicefs.JuiceFileSystem',\n    'fs.AbstractFileSystem.jfs.impl' = 'io.juicefs.JuiceFS',\n    'juicefs.meta' = 'xxx'\n);\n")),(0,r.kt)("h3",{id:"hive-on-s3"},"Hive On S3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.0.0.1:9083",\n    "s3.endpoint" = "s3.us-east-1.amazonaws.com",\n    "s3.region" = "us-east-1",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n    "use_path_style" = "true"\n);\n')),(0,r.kt)("p",null,"Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"s3.connection.maximum: s3 maximum connection number, default 50"),(0,r.kt)("li",{parentName:"ul"},"s3.connection.request.timeout: s3 request timeout, default 3000ms"),(0,r.kt)("li",{parentName:"ul"},"s3.connection.timeout: s3 connection timeout, default 1000ms")),(0,r.kt)("h3",{id:"hive-on-oss"},"Hive On OSS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.0.0.1:9083",\n    "oss.endpoint" = "oss.oss-cn-beijing.aliyuncs.com",\n    "oss.access_key" = "ak",\n    "oss.secret_key" = "sk"\n);\n')),(0,r.kt)("h3",{id:"hive-on-obs"},"Hive On OBS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.0.0.1:9083",\n    "obs.endpoint" = "obs.cn-north-4.myhuaweicloud.com",\n    "obs.access_key" = "ak",\n    "obs.secret_key" = "sk"\n);\n')),(0,r.kt)("h3",{id:"hive-on-cos"},"Hive On COS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.0.0.1:9083",\n    "cos.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "cos.access_key" = "ak",\n    "cos.secret_key" = "sk"\n);\n')),(0,r.kt)("h3",{id:"hive-with-glue"},"Hive With Glue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n')),(0,r.kt)("h2",{id:"metadata-cache-settings"},"Metadata cache settings"),(0,r.kt)("p",null,"When creating a Catalog, you can use the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"file.meta.cache.ttl-second")," to set the automatic expiration time of the Hive partition file cache, or set this value to 0 to disable the partition file cache. The time unit is: second. Examples are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.0.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.0.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n    'file.meta.cache.ttl-second' = '60'\n);\n")),(0,r.kt)("h2",{id:"hive-version"},"Hive Version"),(0,r.kt)("p",null,"Doris can correctly access the Hive Metastore in different Hive versions. By default, Doris will access the Hive Metastore with a Hive 2.3 compatible interface. You can also specify the hive version when creating the Catalog. If accessing Hive 1.1.0 version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hive.version' = '1.1.0'\n);\n")),(0,r.kt)("h2",{id:"column-type-mapping"},"Column type mapping"),(0,r.kt)("p",null,"For Hive/Iceberge/Hudi"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HMS Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array<type>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array<type>")),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301array\u5d4c\u5957\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"array<array<int>>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map<KeyType, ValueType>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map<KeyType, ValueType>")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301\u5d4c\u5957\uff0cKeyType \u548c ValueType \u9700\u8981\u4e3a\u57fa\u7840\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"struct<col1: Type1, col2: Type2, ...>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"struct<col1: Type1, col2: Type2, ...>")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301\u5d4c\u5957\uff0cType1, Type2, ... \u9700\u8981\u4e3a\u57fa\u7840\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other"),(0,r.kt)("td",{parentName:"tr",align:null},"unsupported"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"integrate-with-apache-ranger"},"Integrate with Apache Ranger"),(0,r.kt)("p",null,"Apache Ranger is a security framework for monitoring, enabling services, and comprehensive data security access management on the Hadoop platform."),(0,r.kt)("p",null,"Currently doris supports ranger library, table, and column permissions, but does not support encryption, row permissions, etc."),(0,r.kt)("h3",{id:"settings"},"Settings"),(0,r.kt)("p",null,"To connect to the Hive Metastore with Ranger permission verification enabled, you need to add configuration & configuration environment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When creating a Catalog, add:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'"access_controller.properties.ranger.service.name" = "hive",\n"access_controller.class" = "org.apache.doris.catalog.authorizer.RangerHiveAccessControllerFactory",\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure all FE environments:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the configuration files ranger-hive-audit.xml, ranger-hive-security.xml, and ranger-policymgr-ssl.xml under the HMS conf directory to the FE conf directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the properties of ranger-hive-security.xml, the reference configuration is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n    #The directory for caching permission data, needs to be writable\n    <property>\n        <name>ranger.plugin.hive.policy.cache.dir</name>\n        <value>/mnt/datadisk0/zhangdong/rangerdata</value>\n    </property>\n    #The time interval for periodically pulling permission data\n    <property>\n        <name>ranger.plugin.hive.policy.pollIntervalMs</name>\n        <value>30000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.client.connection.timeoutMs</name>\n        <value>60000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.client.read.timeoutMs</name>\n        <value>60000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.ssl.config.file</name>\n        <value></value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.url</name>\n        <value>http://172.21.0.32:6080</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.source.impl</name>\n        <value>org.apache.ranger.admin.client.RangerAdminRESTClient</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.service.name</name>\n        <value>hive</value>\n    </property>\n\n    <property>\n        <name>xasecure.hive.update.xapolicies.on.grant.revoke</name>\n        <value>true</value>\n    </property>\n\n</configuration>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In order to obtain the log of Ranger authentication itself, add the configuration file log4j.properties in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<doris_home>/conf")," directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart FE."))))),(0,r.kt)("h3",{id:"best-practices"},"Best Practices"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create user user1 on the ranger side and authorize the query permission of db1.table1.col1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create role role1 on the ranger side and authorize the query permission of db1.table1.col2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user user1 with the same name in doris, user1 will directly have the query authority of db1.table1.col1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create role1 with the same name in doris, and assign role1 to user1, user1 will have the query authority of db1.table1.col1 and col2 at the same time"))))}d.isMDXComponent=!0}}]);