"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[91785],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,u=c["".concat(i,".").concat(d)]||c[d]||k[d]||o;return t?r.createElement(u,l(l({ref:n},m),{},{components:t})):r.createElement(u,l({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"OUTFILE",language:"zh-CN"},l=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",id:"sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",title:"OUTFILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE",draft:!1,tags:[],version:"current",frontMatter:{title:"OUTFILE",language:"zh-CN"},sidebar:"docs",previous:{title:"EXPORT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},next:{title:"ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"}},i={},s=[{value:"OUTFILE",id:"outfile",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},c="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"outfile"},"OUTFILE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"OURFILE"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," \u547d\u4ee4\u5c06\u67e5\u8be2\u7ed3\u679c\u7684\u5bfc\u51fa\u4e3a\u6587\u4ef6\u3002\u76ee\u524d\u652f\u6301\u901a\u8fc7 Broker \u8fdb\u7a0b, \u901a\u8fc7 S3 \u534f\u8bae, \u6216\u76f4\u63a5\u901a\u8fc7 HDFS \u534f\u8bae\uff0c\u5bfc\u51fa\u5230\u8fdc\u7aef\u5b58\u50a8\uff0c\u5982 HDFS\uff0cS3\uff0cBOS\uff0cCOS\uff08\u817e\u8baf\u4e91\uff09\u4e0a\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'query_stmt\nINTO OUTFILE "file_path"\n[format_as]\n[properties]\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"file_path"),(0,a.kt)("p",{parentName:"li"},"\u200b    file",(0,a.kt)("em",{parentName:"p"},"path \u6307\u5411\u6587\u4ef6\u5b58\u50a8\u7684\u8def\u5f84\u4ee5\u53ca\u6587\u4ef6\u524d\u7f00\u3002\u5982 `hdfs://path/to/my_file"),"`\u3002"),(0,a.kt)("p",{parentName:"li"},"\u200b    \u6700\u7ec8\u7684\u6587\u4ef6\u540d\u5c06\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"my_file_"),"\uff0c\u6587\u4ef6\u5e8f\u53f7\u4ee5\u53ca\u6587\u4ef6\u683c\u5f0f\u540e\u7f00\u7ec4\u6210\u3002\u5176\u4e2d\u6587\u4ef6\u5e8f\u53f7\u75310\u5f00\u59cb\uff0c\u6570\u91cf\u4e3a\u6587\u4ef6\u88ab\u5206\u5272\u7684\u6570\u91cf\u3002\u5982\uff1a\n\u200b        my_file_abcdefg_0.csv\n\u200b        my_file_abcdefg_1.csv\n\u200b        my_file_abcdegf_2.csv")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"format_as\n\u200b    FORMAT AS CSV\n\u200b    \u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f. \u652f\u6301csv\u3001parquet\u3001csv_with_names\u3001csv_with_names_and_types. \u9ed8\u8ba4\u4e3a CSV\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"properties"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'\u200b    \u6307\u5b9a\u76f8\u5173\u5c5e\u6027\u3002\u76ee\u524d\u652f\u6301\u901a\u8fc7 Broker \u8fdb\u7a0b, \u6216\u901a\u8fc7 S3 \u534f\u8bae\u8fdb\u884c\u5bfc\u51fa\u3002\n\n    \u8bed\u6cd5\uff1a\n    [PROPERTIES ("key"="value", ...)]\n    \u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a\n    column_separator: \u5217\u5206\u9694\u7b26\n    line_delimiter: \u884c\u5206\u9694\u7b26\n    max_file_size: \u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\uff0c\u5982\u679c\u7ed3\u679c\u8d85\u8fc7\u8fd9\u4e2a\u503c\uff0c\u5c06\u5207\u5272\u6210\u591a\u4e2a\u6587\u4ef6\u3002\n    \n    Broker \u76f8\u5173\u5c5e\u6027\u9700\u52a0\u524d\u7f00 `broker.`:\n    broker.name: broker\u540d\u79f0\n    broker.hadoop.security.authentication: \u6307\u5b9a\u8ba4\u8bc1\u65b9\u5f0f\u4e3a kerberos\n    broker.kerberos_principal: \u6307\u5b9a kerberos \u7684 principal\n    broker.kerberos_keytab: \u6307\u5b9a kerberos \u7684 keytab \u6587\u4ef6\u8def\u5f84\u3002\u8be5\u6587\u4ef6\u5fc5\u987b\u4e3a Broker \u8fdb\u7a0b\u6240\u5728\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u5e76\u4e14\u53ef\u4ee5\u88ab Broker \u8fdb\u7a0b\u8bbf\u95ee\n    \n    HDFS \u76f8\u5173\u5c5e\u6027:\n    fs.defaultFS: namenode \u5730\u5740\u548c\u7aef\u53e3\n    hadoop.username: hdfs \u7528\u6237\u540d\n    dfs.nameservices: name service\u540d\u79f0\uff0c\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n    dfs.ha.namenodes.[nameservice ID]: namenode\u7684id\u5217\u8868,\u4e0ehdfs-site.xml\u4fdd\u6301\u4e00\u81f4\n    dfs.namenode.rpc-address.[nameservice ID].[name node ID]: Name node\u7684rpc\u5730\u5740\uff0c\u6570\u91cf\u4e0enamenode\u6570\u91cf\u76f8\u540c\uff0c\u4e0ehdfs-site.xml\u4fdd\n')),(0,a.kt)("p",{parentName:"li"},"\u6301\u4e00\u81f4\ndfs.client.failover.proxy.provider.","[nameservice ID]",': HDFS\u5ba2\u6237\u7aef\u8fde\u63a5\u6d3b\u8dc3namenode\u7684java\u7c7b\uff0c\u901a\u5e38\u662f"org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"    \u5bf9\u4e8e\u5f00\u542fkerberos\u8ba4\u8bc1\u7684Hadoop \u96c6\u7fa4\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8bbe\u7f6e\u5982\u4e0b PROPERTIES \u5c5e\u6027:\n    dfs.namenode.kerberos.principal: HDFS namenode \u670d\u52a1\u7684 principal \u540d\u79f0\n    hadoop.security.authentication: \u8ba4\u8bc1\u65b9\u5f0f\u8bbe\u7f6e\u4e3a kerberos\n    hadoop.kerberos.principal: \u8bbe\u7f6e Doris \u8fde\u63a5 HDFS \u65f6\u4f7f\u7528\u7684 Kerberos \u4e3b\u4f53\n    hadoop.kerberos.keytab: \u8bbe\u7f6e keytab \u672c\u5730\u6587\u4ef6\u8def\u5f84\n    S3 \u534f\u8bae\u5219\u76f4\u63a5\u6267\u884c S3 \u534f\u8bae\u914d\u7f6e\u5373\u53ef:\n    AWS_ENDPOINT\n    AWS_ACCESS_KEY\n    AWS_SECRET_KEY\n    AWS_REGION\n")))),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 broker \u65b9\u5f0f\u5bfc\u51fa\uff0c\u5c06\u7b80\u5355\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a CSV\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"my_broker")," \u5e76\u8bbe\u7f6e kerberos \u8ba4\u8bc1\u4fe1\u606f\u3002\u6307\u5b9a\u5217\u5206\u9694\u7b26\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},","),"\uff0c\u884c\u5206\u9694\u7b26\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n"),"\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n')),(0,a.kt)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 100MB\uff0c\u5219\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"result_0.csv"),"\u3002\n\u5982\u679c\u5927\u4e8e 100MB\uff0c\u5219\u53ef\u80fd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u7b80\u5355\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs://path/to/result.parquet"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a PARQUET\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"my_broker")," \u5e76\u8bbe\u7f6e kerberos \u8ba4\u8bc1\u4fe1\u606f\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "schema"="required,int32,c1;required,byte_array,c2;required,byte_array,c2"\n);\n')),(0,a.kt)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230parquet\u6587\u4ef6\u9700\u8981\u660e\u786e\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06 CTE \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),"\u3002\u9ed8\u8ba4\u5bfc\u51fa\u683c\u5f0f\u4e3a CSV\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"my_broker")," \u5e76\u8bbe\u7f6e hdfs \u9ad8\u53ef\u7528\u4fe1\u606f\u3002\u4f7f\u7528\u9ed8\u8ba4\u7684\u884c\u5217\u5206\u9694\u7b26\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs://path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,a.kt)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 1GB\uff0c\u5219\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"result_0.csv"),"\u3002\n\u5982\u679c\u5927\u4e8e 1GB\uff0c\u5219\u53ef\u80fd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06 UNION \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"bos://bucket/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a PARQUET\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"my_broker")," \u5e76\u8bbe\u7f6e hdfs \u9ad8\u53ef\u7528\u4fe1\u606f\u3002PARQUET \u683c\u5f0f\u65e0\u9700\u6307\u5b9a\u5217\u5206\u5272\u7b26\u3002\n\u5bfc\u51fa\u5b8c\u6210\u540e\uff0c\u751f\u6210\u4e00\u4e2a\u6807\u8bc6\u6587\u4ef6\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy",\n    "schema"="required,int32,k1;required,byte_array,k2"\n);\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06 select \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"cos://${bucket_name}/path/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a csv\u3002\n\u5bfc\u51fa\u5b8c\u6210\u540e\uff0c\u751f\u6210\u4e00\u4e2a\u6807\u8bc6\u6587\u4ef6\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "hdfs_broker",\n    "broker.fs.s3a.access.key" = "xxx",\n    "broker.fs.s3a.secret.key" = "xxxx",\n    "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n')),(0,a.kt)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 1GB\uff0c\u5219\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"my_file_0.csv"),"\u3002\n\u5982\u679c\u5927\u4e8e 1GB\uff0c\u5219\u53ef\u80fd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"my_file_0.csv, result_1.csv, ..."),"\u3002\n\u5728cos\u4e0a\u9a8c\u8bc1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"1. \u4e0d\u5b58\u5728\u7684path\u4f1a\u81ea\u52a8\u521b\u5efa\n2. access.key/secret.key/endpoint\u9700\u8981\u548ccos\u7684\u540c\u5b66\u786e\u8ba4\u3002\u5c24\u5176\u662fendpoint\u7684\u503c\uff0c\u4e0d\u9700\u8981\u586b\u5199bucket_name\u3002\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 s3 \u534f\u8bae\u5bfc\u51fa\u5230 bos\uff0c\u5e76\u4e14\u5e76\u53d1\u5bfc\u51fa\u5f00\u542f\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'set enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n')),(0,a.kt)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u7684\u6587\u4ef6\u524d\u7f00\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"my_file_{fragment_instance_id}_"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 s3 \u534f\u8bae\u5bfc\u51fa\u5230 bos\uff0c\u5e76\u4e14\u5e76\u53d1\u5bfc\u51fa session \u53d8\u91cf\u5f00\u542f\u3002\n\u6ce8\u610f\uff1a\u4f46\u7531\u4e8e\u67e5\u8be2\u8bed\u53e5\u5e26\u4e86\u4e00\u4e2a\u9876\u5c42\u7684\u6392\u5e8f\u8282\u70b9\uff0c\u6240\u4ee5\u8fd9\u4e2a\u67e5\u8be2\u5373\u4f7f\u5f00\u542f\u5e76\u53d1\u5bfc\u51fa\u7684 session \u53d8\u91cf\uff0c\u4e5f\u662f\u65e0\u6cd5\u5e76\u53d1\u5bfc\u51fa\u7684\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'set enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 hdfs \u65b9\u5f0f\u5bfc\u51fa\uff0c\u5c06\u7b80\u5355\u67e5\u8be2\u7ed3\u679c\u5bfc\u51fa\u5230\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),"\u3002\u6307\u5b9a\u5bfc\u51fa\u683c\u5f0f\u4e3a CSV\uff0c\u7528\u6237\u540d\u4e3awork\u3002\u6307\u5b9a\u5217\u5206\u9694\u7b26\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},","),"\uff0c\u884c\u5206\u9694\u7b26\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n"),"\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://ip:port",\n    "hadoop.username" = "work"\n);\n')),(0,a.kt)("p",{parentName:"li"},"\u5982\u679cHadoop \u96c6\u7fa4\u5f00\u542f\u9ad8\u53ef\u7528\u5e76\u4e14\u542f\u7528 Kerberos \u8ba4\u8bc1\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0bSQL\u8bed\u53e5\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM tbl\nINTO OUTFILE \"hdfs://path/to/result_\"\nFORMAT AS CSV\nPROPERTIES\n(\n'fs.defaultFS'='hdfs://hacluster/',\n'dfs.nameservices'='hacluster',\n'dfs.ha.namenodes.hacluster'='n1,n2',\n'dfs.namenode.rpc-address.hacluster.n1'='192.168.0.1:8020',\n'dfs.namenode.rpc-address.hacluster.n2'='192.168.0.2:8020',\n'dfs.client.failover.proxy.provider.hacluster'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n'dfs.namenode.kerberos.principal'='hadoop/_HOST@REALM.COM'\n'hadoop.security.authentication'='kerberos',\n'hadoop.kerberos.principal'='doris_test@REALM.COM',\n'hadoop.kerberos.keytab'='/path/to/doris_test.keytab'\n);\n")),(0,a.kt)("p",{parentName:"li"},"\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u5982\u5982\u679c\u4e0d\u5927\u4e8e 100MB\uff0c\u5219\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"result_0.csv"),"\u3002\n\u5982\u679c\u5927\u4e8e 100MB\uff0c\u5219\u53ef\u80fd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),"\u3002"))),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT, INTO, OUTFILE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u6570\u636e\u91cf\u548c\u5bfc\u51fa\u6548\u7387"),(0,a.kt)("p",{parentName:"li"},"\u8be5\u529f\u80fd\u672c\u8d28\u4e0a\u662f\u6267\u884c\u4e00\u4e2a SQL \u67e5\u8be2\u547d\u4ee4\u3002\u6700\u7ec8\u7684\u7ed3\u679c\u662f\u5355\u7ebf\u7a0b\u8f93\u51fa\u7684\u3002\u6240\u4ee5\u6574\u4e2a\u5bfc\u51fa\u7684\u8017\u65f6\u5305\u62ec\u67e5\u8be2\u672c\u8eab\u7684\u8017\u65f6\uff0c\u548c\u6700\u7ec8\u7ed3\u679c\u96c6\u5199\u51fa\u7684\u8017\u65f6\u3002\u5982\u679c\u67e5\u8be2\u8f83\u5927\uff0c\u9700\u8981\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"query_timeout")," \u9002\u5f53\u7684\u5ef6\u957f\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u6587\u4ef6\u7684\u7ba1\u7406"),(0,a.kt)("p",{parentName:"li"},"Doris \u4e0d\u4f1a\u7ba1\u7406\u5bfc\u51fa\u7684\u6587\u4ef6\u3002\u5305\u62ec\u5bfc\u51fa\u6210\u529f\u7684\uff0c\u6216\u8005\u5bfc\u51fa\u5931\u8d25\u540e\u6b8b\u7559\u7684\u6587\u4ef6\uff0c\u90fd\u9700\u8981\u7528\u6237\u81ea\u884c\u5904\u7406\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6"),(0,a.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6\u7684\u529f\u80fd\u4e0d\u9002\u7528\u4e8e\u516c\u6709\u4e91\u7528\u6237\uff0c\u4ec5\u9002\u7528\u4e8e\u79c1\u6709\u5316\u90e8\u7f72\u7684\u7528\u6237\u3002\u5e76\u4e14\u9ed8\u8ba4\u7528\u6237\u5bf9\u96c6\u7fa4\u8282\u70b9\u6709\u5b8c\u5168\u7684\u63a7\u5236\u6743\u9650\u3002Doris \u5bf9\u4e8e\u7528\u6237\u586b\u5199\u7684\u5bfc\u51fa\u8def\u5f84\u4e0d\u4f1a\u505a\u5408\u6cd5\u6027\u68c0\u67e5\u3002\u5982\u679c Doris \u7684\u8fdb\u7a0b\u7528\u6237\u5bf9\u8be5\u8def\u5f84\u65e0\u5199\u6743\u9650\uff0c\u6216\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u62a5\u9519\u3002\u540c\u65f6\u5904\u4e8e\u5b89\u5168\u6027\u8003\u8651\uff0c\u5982\u679c\u8be5\u8def\u5f84\u5df2\u5b58\u5728\u540c\u540d\u7684\u6587\u4ef6\uff0c\u5219\u4e5f\u4f1a\u5bfc\u51fa\u5931\u8d25\u3002"),(0,a.kt)("p",{parentName:"li"},"Doris \u4e0d\u4f1a\u7ba1\u7406\u5bfc\u51fa\u5230\u672c\u5730\u7684\u6587\u4ef6\uff0c\u4e5f\u4e0d\u4f1a\u68c0\u67e5\u78c1\u76d8\u7a7a\u95f4\u7b49\u3002\u8fd9\u4e9b\u6587\u4ef6\u9700\u8981\u7528\u6237\u81ea\u884c\u7ba1\u7406\uff0c\u5982\u6e05\u7406\u7b49\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7ed3\u679c\u5b8c\u6574\u6027\u4fdd\u8bc1"),(0,a.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u662f\u4e00\u4e2a\u540c\u6b65\u547d\u4ee4\uff0c\u56e0\u6b64\u6709\u53ef\u80fd\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u4efb\u52a1\u8fde\u63a5\u65ad\u5f00\u4e86\uff0c\u4ece\u800c\u65e0\u6cd5\u6d3b\u7740\u5bfc\u51fa\u7684\u6570\u636e\u662f\u5426\u6b63\u5e38\u7ed3\u675f\uff0c\u6216\u662f\u5426\u5b8c\u6574\u3002\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"success_file_name")," \u53c2\u6570\u8981\u6c42\u4efb\u52a1\u6210\u529f\u540e\uff0c\u5728\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a\u6210\u529f\u6587\u4ef6\u6807\u8bc6\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u6587\u4ef6\uff0c\u6765\u5224\u65ad\u5bfc\u51fa\u662f\u5426\u6b63\u5e38\u7ed3\u675f\u3002"))))}k.isMDXComponent=!0}}]);