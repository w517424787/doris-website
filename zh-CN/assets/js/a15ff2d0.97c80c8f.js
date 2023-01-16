"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[77546],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>d});var s=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,s,o=function(e,n){if(null==e)return{};var r,s,o={},t=Object.keys(e);for(s=0;s<t.length;s++)r=t[s],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)r=t[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=s.createContext({}),c=function(e){var n=s.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},m=function(e){var n=c(e.components);return s.createElement(i.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),p=o,d=u["".concat(i,".").concat(p)]||u[p]||y[p]||t;return r?s.createElement(d,a(a({ref:n},m),{},{components:r})):s.createElement(d,a({ref:n},m))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,a=new Array(t);a[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<t;c++)a[c]=r[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}p.displayName="MDXCreateElement"},56620:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>y,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(87462),o=(r(67294),r(3905));const t={title:"FE\u8d1f\u8f7d\u5747\u8861",language:"zh-CN"},a=void 0,l={unversionedId:"best-practices/fe-load-balance",id:"version-0.15/best-practices/fe-load-balance",title:"FE\u8d1f\u8f7d\u5747\u8861",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/best-practices/fe-load-balance.md",sourceDirName:"best-practices",slug:"/best-practices/fe-load-balance",permalink:"/zh-CN/docs/0.15/best-practices/fe-load-balance",draft:!1,tags:[],version:"0.15",frontMatter:{title:"FE\u8d1f\u8f7d\u5747\u8861",language:"zh-CN"},sidebar:"docs",previous:{title:"Star-Schema-Benchmark \u6d4b\u8bd5",permalink:"/zh-CN/docs/0.15/best-practices/star-schema-benchmark"},next:{title:"Systemd",permalink:"/zh-CN/docs/0.15/best-practices/systemd"}},i={},c=[{value:"1. \u4ee3\u7801\u65b9\u5f0f",id:"1-\u4ee3\u7801\u65b9\u5f0f",level:2},{value:"2. JDBC Connector",id:"2-jdbc-connector",level:2},{value:"3. ProxySQL \u65b9\u5f0f",id:"3-proxysql-\u65b9\u5f0f",level:2},{value:"3.1 \u5b89\u88c5ProxySQL \uff08yum\u65b9\u5f0f\uff09",id:"31-\u5b89\u88c5proxysql-yum\u65b9\u5f0f",level:3},{value:"3.2 <strong>ProxySQL \u914d\u7f6e</strong>",id:"32-proxysql-\u914d\u7f6e",level:3},{value:"3.2.1 \u67e5\u770b\u53ca\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"321-\u67e5\u770b\u53ca\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:4},{value:"3.2.2 \u8fde\u63a5 ProxySQL \u7ba1\u7406\u7aef\u53e3\u6d4b\u8bd5",id:"322-\u8fde\u63a5-proxysql-\u7ba1\u7406\u7aef\u53e3\u6d4b\u8bd5",level:4},{value:"3.2.3 ProxySQL \u914d\u7f6e\u540e\u7aef Doris FE",id:"323-proxysql-\u914d\u7f6e\u540e\u7aef-doris-fe",level:4},{value:"3.2.4 \u76d1\u63a7Doris FE\u8282\u70b9\u914d\u7f6e",id:"324-\u76d1\u63a7doris-fe\u8282\u70b9\u914d\u7f6e",level:4},{value:"3.2.5 \u914d\u7f6eDoris\u7528\u6237",id:"325-\u914d\u7f6edoris\u7528\u6237",level:4},{value:"3.2.6 \u901a\u8fc7 ProxySQL \u8fde\u63a5 Doris \u8fdb\u884c\u6d4b\u8bd5",id:"326-\u901a\u8fc7-proxysql-\u8fde\u63a5-doris-\u8fdb\u884c\u6d4b\u8bd5",level:4}],m={toc:c},u="wrapper";function y(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,s.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fe\u8d1f\u8f7d\u5747\u8861"},"FE\u8d1f\u8f7d\u5747\u8861"),(0,o.kt)("p",null,"\u5f53\u90e8\u7f72\u591a\u4e2a FE \u8282\u70b9\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u591a\u4e2a FE \u4e4b\u4e0a\u90e8\u7f72\u8d1f\u8f7d\u5747\u8861\u5c42\u6765\u5b9e\u73b0 Doris \u7684\u9ad8\u53ef\u7528\u3002"),(0,o.kt)("h2",{id:"1-\u4ee3\u7801\u65b9\u5f0f"},"1. \u4ee3\u7801\u65b9\u5f0f"),(0,o.kt)("p",null,"\u81ea\u5df1\u5728\u5e94\u7528\u5c42\u4ee3\u7801\u8fdb\u884c\u91cd\u8bd5\u548c\u8d1f\u8f7d\u5747\u8861\u3002\u6bd4\u5982\u53d1\u73b0\u4e00\u4e2a\u8fde\u63a5\u6302\u6389\uff0c\u5c31\u81ea\u52a8\u5728\u5176\u4ed6\u8fde\u63a5\u4e0a\u8fdb\u884c\u91cd\u8bd5\u3002\u5e94\u7528\u5c42\u4ee3\u7801\u91cd\u8bd5\u9700\u8981\u5e94\u7528\u81ea\u5df1\u914d\u7f6e\u591a\u4e2a doris \u524d\u7aef\u8282\u70b9\u5730\u5740\u3002"),(0,o.kt)("h2",{id:"2-jdbc-connector"},"2. JDBC Connector"),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528 mysql jdbc connector \u6765\u8fde\u63a5 Doris\uff0c\u53ef\u4ee5\u4f7f\u7528 jdbc \u7684\u81ea\u52a8\u91cd\u8bd5\u673a\u5236:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jdbc:mysql:loadbalance://[host:port],[host:port].../[database][?propertyName1][=propertyValue1][&propertyName2][=propertyValue\n")),(0,o.kt)("p",null,"\u8be6\u7ec6\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/connector-j/5.1/en/connector-j-usagenotes-j2ee-concepts-managing-load-balanced-connections.html"},"Mysql\u5b98\u7f51\u6587\u6863")),(0,o.kt)("h2",{id:"3-proxysql-\u65b9\u5f0f"},"3. ProxySQL \u65b9\u5f0f"),(0,o.kt)("p",null,"ProxySQL\u662f\u7075\u6d3b\u5f3a\u5927\u7684MySQL\u4ee3\u7406\u5c42, \u662f\u4e00\u4e2a\u80fd\u5b9e\u5b9e\u5728\u5728\u7528\u5728\u751f\u4ea7\u73af\u5883\u7684MySQL\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\uff0c\u652f\u6301 Query \u8def\u7531\u529f\u80fd\uff0c\u652f\u6301\u52a8\u6001\u6307\u5b9a\u67d0\u4e2a SQL \u8fdb\u884c cache\uff0c\u652f\u6301\u52a8\u6001\u52a0\u8f7d\u914d\u7f6e\u3001\u6545\u969c\u5207\u6362\u548c\u4e00\u4e9b SQL\u7684\u8fc7\u6ee4\u529f\u80fd\u3002"),(0,o.kt)("p",null,"Doris \u7684 FE \u8fdb\u7a0b\u8d1f\u8d23\u63a5\u6536\u7528\u6237\u8fde\u63a5\u548c\u67e5\u8be2\u8bf7\u6c42\uff0c\u5176\u672c\u8eab\u662f\u53ef\u4ee5\u6a2a\u5411\u6269\u5c55\u4e14\u9ad8\u53ef\u7528\u7684\uff0c\u4f46\u662f\u9700\u8981\u7528\u6237\u5728\u591a\u4e2a FE \u4e0a\u67b6\u8bbe\u4e00\u5c42 proxy\uff0c\u6765\u5b9e\u73b0\u81ea\u52a8\u7684\u8fde\u63a5\u8d1f\u8f7d\u5747\u8861\u3002"),(0,o.kt)("h3",{id:"31-\u5b89\u88c5proxysql-yum\u65b9\u5f0f"},"3.1 \u5b89\u88c5ProxySQL \uff08yum\u65b9\u5f0f\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u914d\u7f6eyum\u6e90\n# vim /etc/yum.repos.d/proxysql.repo\n[proxysql_repo]\nname= ProxySQL YUM repository\nbaseurl=http://repo.proxysql.com/ProxySQL/proxysql-1.4.x/centos/\\$releasever\ngpgcheck=1\ngpgkey=http://repo.proxysql.com/ProxySQL/repo_pub_key\n \n\u6267\u884c\u5b89\u88c5\n# yum clean all\n# yum makecache\n# yum -y install proxysql\n\u67e5\u770b\u7248\u672c  \n# proxysql --version\nProxySQL version 1.4.13-15-g69d4207, codename Truls\n\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8\n# systemctl enable proxysql\n# systemctl start proxysql      \n# systemctl status proxysql\n\u542f\u52a8\u540e\u4f1a\u76d1\u542c\u4e24\u4e2a\u7aef\u53e3\uff0c \u9ed8\u8ba4\u4e3a6032\u548c6033\u30026032\u7aef\u53e3\u662fProxySQL\u7684\u7ba1\u7406\u7aef\u53e3\uff0c6033\u662fProxySQL\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684\u7aef\u53e3 (\u5373\u8fde\u63a5\u5230\u8f6c\u53d1\u540e\u7aef\u7684\u771f\u6b63\u6570\u636e\u5e93\u7684\u8f6c\u53d1\u7aef\u53e3)\u3002\n# netstat -tunlp\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name  \ntcp        0      0 0.0.0.0:6032            0.0.0.0:*               LISTEN      23940/proxysql    \ntcp        0      0 0.0.0.0:6033            0.0.0.0:*               LISTEN\n")),(0,o.kt)("h3",{id:"32-proxysql-\u914d\u7f6e"},"3.2 ",(0,o.kt)("strong",{parentName:"h3"},"ProxySQL \u914d\u7f6e")),(0,o.kt)("p",null,"ProxySQL \u6709\u914d\u7f6e\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/proxysql.cnf")," \u548c\u914d\u7f6e\u6570\u636e\u5e93\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/proxysql/proxysql.db"),"\u3002",(0,o.kt)("strong",{parentName:"p"},"\u8fd9\u91cc\u9700\u8981\u7279\u522b\u6ce8\u610f"),"\uff1a\u5982\u679c\u5b58\u5728\u5982\u679c\u5b58\u5728",(0,o.kt)("inlineCode",{parentName:"p"},'"proxysql.db"'),"\u6587\u4ef6(\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/proxysql"),"\u76ee\u5f55\u4e0b)\uff0c\u5219 ProxySQL  \u670d\u52a1\u53ea\u6709\u5728\u7b2c\u4e00\u6b21\u542f\u52a8\u65f6\u624d\u4f1a\u53bb\u8bfb\u53d6",(0,o.kt)("inlineCode",{parentName:"p"},"proxysql.cnf\u6587\u4ef6"),"\u5e76\u89e3\u6790\uff1b\u540e\u9762\u542f\u52a8\u4f1a\u5c31\u4e0d\u4f1a\u8bfb\u53d6",(0,o.kt)("inlineCode",{parentName:"p"},"proxysql.cnf"),"\u6587\u4ef6\u4e86\uff01\u5982\u679c\u60f3\u8981\u8ba9proxysql.cnf \u6587\u4ef6\u91cc\u7684\u914d\u7f6e\u5728\u91cd\u542f proxysql \u670d\u52a1\u540e\u751f\u6548(\u5373\u60f3\u8981\u8ba9 proxysql \u91cd\u542f\u65f6\u8bfb\u53d6\u5e76\u89e3\u6790 proxysql.cnf\u914d\u7f6e\u6587\u4ef6)\uff0c\u5219\u9700\u8981\u5148\u5220\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/proxysql/proxysql.db "),"\u6570\u636e\u5e93\u6587\u4ef6\uff0c\u7136\u540e\u518d\u91cd\u542f proxysql \u670d\u52a1\u3002\u8fd9\u6837\u5c31\u76f8\u5f53\u4e8e\u521d\u59cb\u5316\u542f\u52a8 proxysql \u670d\u52a1\u4e86\uff0c\u4f1a\u518d\u6b21\u751f\u4ea7\u4e00\u4e2a\u7eaf\u51c0\u7684 proxysql.db \u6570\u636e\u5e93\u6587\u4ef6(\u5982\u679c\u4e4b\u524d\u914d\u7f6e\u4e86 proxysql \u76f8\u5173\u8def\u7531\u89c4\u5219\u7b49\uff0c\u5219\u5c31\u4f1a\u88ab\u62b9\u6389)"),(0,o.kt)("h4",{id:"321-\u67e5\u770b\u53ca\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"3.2.1 \u67e5\u770b\u53ca\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u662f\u662f\u51e0\u4e2a\u53c2\u6570\uff0c\u5728\u4e0b\u9762\u5df2\u7ecf\u6ce8\u91ca\u51fa\u6765\u4e86\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u8fdb\u884c\u4fee\u6539"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'# egrep -v "^#|^$" /etc/proxysql.cnf\ndatadir="/var/lib/proxysql"         #\u6570\u636e\u76ee\u5f55\nadmin_variables=\n{\n        admin_credentials="admin:admin"  #\u8fde\u63a5\u7ba1\u7406\u7aef\u7684\u7528\u6237\u540d\u4e0e\u5bc6\u7801\n        mysql_ifaces="0.0.0.0:6032"    #\u7ba1\u7406\u7aef\u53e3\uff0c\u7528\u6765\u8fde\u63a5proxysql\u7684\u7ba1\u7406\u6570\u636e\u5e93\n}\nmysql_variables=\n{\n        threads=4                #\u6307\u5b9a\u8f6c\u53d1\u7aef\u53e3\u5f00\u542f\u7684\u7ebf\u7a0b\u6570\u91cf\n        max_connections=2048\n        default_query_delay=0\n        default_query_timeout=36000000\n        have_compress=true\n        poll_timeout=2000\n        interfaces="0.0.0.0:6033"    #\u6307\u5b9a\u8f6c\u53d1\u7aef\u53e3\uff0c\u7528\u4e8e\u8fde\u63a5\u540e\u7aefmysql\u6570\u636e\u5e93\u7684\uff0c\u76f8\u5f53\u4e8e\u4ee3\u7406\u4f5c\u7528\n        default_schema="information_schema"\n        stacksize=1048576\n        server_version="5.5.30"        #\u6307\u5b9a\u540e\u7aefmysql\u7684\u7248\u672c\n        connect_timeout_server=3000\n        monitor_username="monitor"\n        monitor_password="monitor"\n        monitor_history=600000\n        monitor_connect_interval=60000\n        monitor_ping_interval=10000\n        monitor_read_only_interval=1500\n        monitor_read_only_timeout=500\n        ping_interval_server_msec=120000\n        ping_timeout_server=500\n        commands_stats=true\n        sessions_sort=true\n        connect_retries_on_failure=10\n}\nmysql_servers =\n(\n)\nmysql_users:\n(\n)\nmysql_query_rules:\n(\n)\nscheduler=\n(\n)\nmysql_replication_hostgroups=\n(\n)\n')),(0,o.kt)("h4",{id:"322-\u8fde\u63a5-proxysql-\u7ba1\u7406\u7aef\u53e3\u6d4b\u8bd5"},"3.2.2 \u8fde\u63a5 ProxySQL \u7ba1\u7406\u7aef\u53e3\u6d4b\u8bd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"\n# mysql -uadmin -padmin -P6032 -hdoris01\n\u67e5\u770bmain\u5e93\uff08\u9ed8\u8ba4\u767b\u9646\u540e\u5373\u5728\u6b64\u5e93\uff09\u7684global_variables\u8868\u4fe1\u606f\nMySQL [(none)]> show databases;\n+-----+---------------+-------------------------------------+\n| seq | name          | file                                |\n+-----+---------------+-------------------------------------+\n| 0   | main          |                                     |\n| 2   | disk          | /var/lib/proxysql/proxysql.db       |\n| 3   | stats         |                                     |\n| 4   | monitor       |                                     |\n| 5   | stats_history | /var/lib/proxysql/proxysql_stats.db |\n+-----+---------------+-------------------------------------+\n5 rows in set (0.000 sec)\nMySQL [(none)]> use main;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n \nDatabase changed\nMySQL [main]> show tables;\n+--------------------------------------------+\n| tables                                     |\n+--------------------------------------------+\n| global_variables                           |\n| mysql_collations                           |\n| mysql_group_replication_hostgroups         |\n| mysql_query_rules                          |\n| mysql_query_rules_fast_routing             |\n| mysql_replication_hostgroups               |\n| mysql_servers                              |\n| mysql_users                                |\n| proxysql_servers                           |\n| runtime_checksums_values                   |\n| runtime_global_variables                   |\n| runtime_mysql_group_replication_hostgroups |\n| runtime_mysql_query_rules                  |\n| runtime_mysql_query_rules_fast_routing     |\n| runtime_mysql_replication_hostgroups       |\n| runtime_mysql_servers                      |\n| runtime_mysql_users                        |\n| runtime_proxysql_servers                   |\n| runtime_scheduler                          |\n| scheduler                                  |\n+--------------------------------------------+\n20 rows in set (0.000 sec)\n\n")),(0,o.kt)("h4",{id:"323-proxysql-\u914d\u7f6e\u540e\u7aef-doris-fe"},"3.2.3 ProxySQL \u914d\u7f6e\u540e\u7aef Doris FE"),(0,o.kt)("p",null,"\u4f7f\u7528 insert \u8bed\u53e5\u6dfb\u52a0\u4e3b\u673a\u5230 mysql_servers \u8868\u4e2d\uff0c\u5176\u4e2d\uff1ahostgroup_id \u4e3a10\u8868\u793a\u5199\u7ec4\uff0c\u4e3a20\u8868\u793a\u8bfb\u7ec4\uff0c\u6211\u4eec\u8fd9\u91cc\u4e0d\u9700\u8981\u8bfb\u5199\u5206\u79bb\uff0c\u65e0\u6240\u8c13\u968f\u4fbf\u8bbe\u7f6e\u54ea\u4e00\u4e2a\u90fd\u53ef\u4ee5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"[root@mysql-proxy ~]# mysql -uadmin -padmin -P6032 -h127.0.0.1\n............\nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.211',9030);\nQuery OK, 1 row affected (0.000 sec)\n  \nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.212',9030);\nQuery OK, 1 row affected (0.000 sec)\n  \nMySQL [(none)]> insert into mysql_servers(hostgroup_id,hostname,port) values(10,'192.168.9.213',9030);\nQuery OK, 1 row affected (0.000 sec)\n \n\u5982\u679c\u5728\u63d2\u5165\u8fc7\u7a0b\u4e2d\uff0c\u51fa\u73b0\u62a5\u9519\uff1a\nERROR 1045 (#2800): UNIQUE constraint failed: mysql_servers.hostgroup_id, mysql_servers.hostname, mysql_servers.port\n \n\u8bf4\u660e\u53ef\u80fd\u4e4b\u524d\u5c31\u5df2\u7ecf\u5b9a\u4e49\u4e86\u5176\u4ed6\u914d\u7f6e\uff0c\u53ef\u4ee5\u6e05\u7a7a\u8fd9\u5f20\u8868 \u6216\u8005 \u5220\u9664\u5bf9\u5e94host\u7684\u914d\u7f6e\nMySQL [(none)]> select * from mysql_servers;\nMySQL [(none)]> delete from mysql_servers;\nQuery OK, 6 rows affected (0.000 sec)\n\n\u67e5\u770b\u8fd93\u4e2a\u8282\u70b9\u662f\u5426\u63d2\u5165\u6210\u529f\uff0c\u4ee5\u53ca\u5b83\u4eec\u7684\u72b6\u6001\u3002\nMySQL [(none)]> select * from mysql_servers\\G;\n*************************** 1. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.211\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n*************************** 2. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.212\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n*************************** 3. row ***************************\n       hostgroup_id: 10\n           hostname: 192.168.9.213\n               port: 9030\n             status: ONLINE\n             weight: 1\n        compression: 0\n    max_connections: 1000\nmax_replication_lag: 0\n            use_ssl: 0\n     max_latency_ms: 0\n            comment:\n6 rows in set (0.000 sec)\n  \nERROR: No query specified\n  \n\u5982\u4e0a\u4fee\u6539\u540e\uff0c\u52a0\u8f7d\u5230RUNTIME\uff0c\u5e76\u4fdd\u5b58\u5230disk\uff0c\u4e0b\u9762\u4e24\u6b65\u975e\u5e38\u91cd\u8981\uff0c\u4e0d\u7136\u9000\u51fa\u4ee5\u540e\u4f60\u7684\u914d\u7f6e\u4fe1\u606f\u5c31\u6ca1\u4e86\uff0c\u5fc5\u987b\u4fdd\u5b58\nMySQL [(none)]> load mysql servers to runtime;\nQuery OK, 0 rows affected (0.006 sec)\n  \nMySQL [(none)]> save mysql servers to disk;\nQuery OK, 0 rows affected (0.348 sec)\n")),(0,o.kt)("h4",{id:"324-\u76d1\u63a7doris-fe\u8282\u70b9\u914d\u7f6e"},"3.2.4 \u76d1\u63a7Doris FE\u8282\u70b9\u914d\u7f6e"),(0,o.kt)("p",null,"\u6dfb doris fe \u8282\u70b9\u4e4b\u540e\uff0c\u8fd8\u9700\u8981\u76d1\u63a7\u8fd9\u4e9b\u540e\u7aef\u8282\u70b9\u3002\u5bf9\u4e8e\u540e\u7aef\u591a\u4e2aFE\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861\u73af\u5883\u6765\u8bf4\uff0c\u8fd9\u662f\u5fc5\u987b\u7684\uff0c\u56e0\u4e3a ProxySQL \u9700\u8981\u901a\u8fc7\u6bcf\u4e2a\u8282\u70b9\u7684 read_only \u503c\u6765\u81ea\u52a8\u8c03\u6574"),(0,o.kt)("p",null,"\u5b83\u4eec\u662f\u5c5e\u4e8e\u8bfb\u7ec4\u8fd8\u662f\u5199\u7ec4\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u5728\u540e\u7aefmaster\u4e3b\u6570\u636e\u8282\u70b9\u4e0a\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u76d1\u63a7\u7684\u7528\u6237\u540d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"\u5728doris fe master\u4e3b\u6570\u636e\u5e93\u8282\u70b9\u884c\u6267\u884c\uff1a\n# mysql -P9030 -uroot -p \nmysql> create user monitor@'192.168.9.%' identified by 'P@ssword1!';\nQuery OK, 0 rows affected (0.03 sec)\nmysql> grant ADMIN_PRIV on *.* to monitor@'192.168.9.%';\nQuery OK, 0 rows affected (0.02 sec)\n \n\u7136\u540e\u56de\u5230mysql-proxy\u4ee3\u7406\u5c42\u8282\u70b9\u4e0a\u914d\u7f6e\u76d1\u63a7\n# mysql -uadmin -padmin -P6032 -h127.0.0.1\nMySQL [(none)]> set mysql-monitor_username='monitor';\nQuery OK, 1 row affected (0.000 sec)\n \nMySQL [(none)]> set mysql-monitor_password='P@ssword1!';\nQuery OK, 1 row affected (0.000 sec)\n \n\u4fee\u6539\u540e\uff0c\u52a0\u8f7d\u5230RUNTIME\uff0c\u5e76\u4fdd\u5b58\u5230disk\nMySQL [(none)]> load mysql variables to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n \nMySQL [(none)]> save mysql variables to disk;\nQuery OK, 94 rows affected (0.079 sec)\n \n\u9a8c\u8bc1\u76d1\u63a7\u7ed3\u679c\uff1aProxySQL\u76d1\u63a7\u6a21\u5757\u7684\u6307\u6807\u90fd\u4fdd\u5b58\u5728monitor\u5e93\u7684log\u8868\u4e2d\u3002\n\u4ee5\u4e0b\u662f\u8fde\u63a5\u662f\u5426\u6b63\u5e38\u7684\u76d1\u63a7(\u5bf9connect\u6307\u6807\u7684\u76d1\u63a7)\uff1a\n\u6ce8\u610f\uff1a\u53ef\u80fd\u4f1a\u6709\u5f88\u591aconnect_error\uff0c\u8fd9\u662f\u56e0\u4e3a\u6ca1\u6709\u914d\u7f6e\u76d1\u63a7\u4fe1\u606f\u65f6\u7684\u9519\u8bef\uff0c\u914d\u7f6e\u540e\u5982\u679cconnect_error\u7684\u7ed3\u679c\u4e3aNULL\u5219\u8868\u793a\u6b63\u5e38\u3002\nMySQL [(none)]> select * from mysql_server_connect_log;\n+---------------+------+------------------+-------------------------+---------------+\n| hostname      | port | time_start_us    | connect_success_time_us | connect_error |\n+---------------+------+------------------+-------------------------+---------------+\n| 192.168.9.211 | 9030 | 1548665195883957 | 762                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665195894099 | 399                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665195904266 | 483                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665255883715 | 824                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665255893942 | 656                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665495884125 | 615                     | NULL          |\n| 192.168.9.212 | 9030  | 1548665495894254 | 441                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665495904479 | 638                     | NULL          |\n| 192.168.9.211 | 9030 | 1548665512917846 | 487                     | NULL          |\n| 192.168.9.212 | 9030 | 1548665512928071 | 994                     | NULL          |\n| 192.168.9.213 | 9030 | 1548665512938268 | 613                     | NULL          |\n+---------------+------+------------------+-------------------------+---------------+\n20 rows in set (0.000 sec)\n\u4ee5\u4e0b\u662f\u5bf9\u5fc3\u8df3\u4fe1\u606f\u7684\u76d1\u63a7(\u5bf9ping\u6307\u6807\u7684\u76d1\u63a7)\nMySQL [(none)]> select * from mysql_server_ping_log;\n+---------------+------+------------------+----------------------+------------+\n| hostname      | port | time_start_us    | ping_success_time_us | ping_error |\n+---------------+------+------------------+----------------------+------------+\n| 192.168.9.211 | 9030 | 1548665195883407 | 98                   | NULL       |\n| 192.168.9.212 | 9030 | 1548665195885128 | 119                  | NULL       |\n...........\n| 192.168.9.213 | 9030 | 1548665415889362 | 106                  | NULL       |\n| 192.168.9.213 | 9030 | 1548665562898295 | 97                   | NULL       |\n+---------------+------+------------------+----------------------+------------+\n110 rows in set (0.001 sec)\n \nread_only\u65e5\u5fd7\u6b64\u65f6\u4e5f\u4e3a\u7a7a(\u6b63\u5e38\u6765\u8bf4\uff0c\u65b0\u73af\u5883\u914d\u7f6e\u65f6\uff0c\u8fd9\u4e2a\u53ea\u8bfb\u65e5\u5fd7\u662f\u4e3a\u7a7a\u7684)\nMySQL [(none)]> select * from mysql_server_read_only_log;\nEmpty set (0.000 sec)\n\n3\u4e2a\u8282\u70b9\u90fd\u5728hostgroup_id=10\u7684\u7ec4\u4e2d\u3002\n\u73b0\u5728\uff0c\u5c06\u521a\u624dmysql_replication_hostgroups\u8868\u7684\u4fee\u6539\u52a0\u8f7d\u5230RUNTIME\u751f\u6548\u3002\nMySQL [(none)]> load mysql servers to runtime;\nQuery OK, 0 rows affected (0.003 sec)\n \nMySQL [(none)]> save mysql servers to disk;\nQuery OK, 0 rows affected (0.361 sec)\n\n\u73b0\u5728\u770b\u7ed3\u679c\nMySQL [(none)]> select hostgroup_id,hostname,port,status,weight from mysql_servers;\n+--------------+---------------+------+--------+--------+\n| hostgroup_id | hostname      | port | status | weight |\n+--------------+---------------+------+--------+--------+\n| 10           | 192.168.9.211 | 9030 | ONLINE | 1      |\n| 20           | 192.168.9.212 | 9030 | ONLINE | 1      |\n| 20           | 192.168.9.213 | 9030 | ONLINE | 1      |\n+--------------+---------------+------+--------+--------+\n3 rows in set (0.000 sec)\n")),(0,o.kt)("h4",{id:"325-\u914d\u7f6edoris\u7528\u6237"},"3.2.5 \u914d\u7f6eDoris\u7528\u6237"),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u6240\u6709\u914d\u7f6e\u90fd\u662f\u5173\u4e8e\u540e\u7aef Doris FE \u8282\u70b9\u7684\uff0c\u73b0\u5728\u53ef\u4ee5\u914d\u7f6e\u5173\u4e8e SQL \u8bed\u53e5\u7684\uff0c\u5305\u62ec\uff1a\u53d1\u9001 SQL \u8bed\u53e5\u7684\u7528\u6237\u3001SQL \u8bed\u53e5\u7684\u8def\u7531\u89c4\u5219\u3001SQL \u67e5\u8be2\u7684\u7f13\u5b58\u3001SQL \u8bed\u53e5\u7684\u91cd\u5199\u7b49\u7b49\u3002"),(0,o.kt)("p",null,"\u672c\u5c0f\u8282\u662f SQL \u8bf7\u6c42\u6240\u4f7f\u7528\u7684\u7528\u6237\u914d\u7f6e\uff0c\u4f8b\u5982 root \u7528\u6237\u3002\u8fd9\u8981\u6c42\u6211\u4eec\u9700\u8981\u5148\u5728\u540e\u7aef Doris FE \u8282\u70b9\u6dfb\u52a0\u597d\u76f8\u5173\u7528\u6237\u3002\u8fd9\u91cc\u4ee5 root \u548c doris \u4e24\u4e2a\u7528\u6237\u540d\u4e3a\u4f8b."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"\u9996\u5148\uff0c\u5728Doris FE master\u4e3b\u6570\u636e\u5e93\u8282\u70b9\u4e0a\u6267\u884c\uff1a\n# mysql -P9030 -uroot -p\n.........\nmysql> create user doris@'%' identified by 'P@ssword1!';\nQuery OK, 0 rows affected, 1 warning (0.04 sec)\n \nmysql> grant ADMIN_PRIV on *.* to doris@'%';\nQuery OK, 0 rows affected, 1 warning (0.03 sec)\n \n \n\u7136\u540e\u56de\u5230mysql-proxy\u4ee3\u7406\u5c42\u8282\u70b9\uff0c\u914d\u7f6emysql_users\u8868\uff0c\u5c06\u521a\u624d\u7684\u4e24\u4e2a\u7528\u6237\u6dfb\u52a0\u5230\u8be5\u8868\u4e2d\u3002\nadmin> insert into mysql_users(username,password,default_hostgroup) values('root','',10);\nQuery OK, 1 row affected (0.001 sec)\n  \nadmin> insert into mysql_users(username,password,default_hostgroup) values('doris','P@ssword1!',10);\nQuery OK, 1 row affected (0.000 sec)\n\n\u52a0\u8f7d\u7528\u6237\u5230\u8fd0\u884c\u73af\u5883\u4e2d\uff0c\u5e76\u5c06\u7528\u6237\u4fe1\u606f\u4fdd\u5b58\u5230\u78c1\u76d8\nadmin> load mysql users to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n  \nadmin> save mysql users to disk;\nQuery OK, 0 rows affected (0.108 sec)\n  \nmysql_users\u8868\u6709\u4e0d\u5c11\u5b57\u6bb5\uff0c\u6700\u4e3b\u8981\u7684\u4e09\u4e2a\u5b57\u6bb5\u4e3ausername\u3001password\u548cdefault_hostgroup\uff1a\n-  username\uff1a\u524d\u7aef\u8fde\u63a5ProxySQL\uff0c\u4ee5\u53caProxySQL\u5c06SQL\u8bed\u53e5\u8def\u7531\u7ed9MySQL\u6240\u4f7f\u7528\u7684\u7528\u6237\u540d\u3002\n-  password\uff1a\u7528\u6237\u540d\u5bf9\u5e94\u7684\u5bc6\u7801\u3002\u53ef\u4ee5\u662f\u660e\u6587\u5bc6\u7801\uff0c\u4e5f\u53ef\u4ee5\u662fhash\u5bc6\u7801\u3002\u5982\u679c\u60f3\u4f7f\u7528hash\u5bc6\u7801\uff0c\u53ef\u4ee5\u5148\u5728\u67d0\u4e2aMySQL\u8282\u70b9\u4e0a\u6267\u884c\n   select password(PASSWORD)\uff0c\u7136\u540e\u5c06\u52a0\u5bc6\u7ed3\u679c\u590d\u5236\u5230\u8be5\u5b57\u6bb5\u3002\n-  default_hostgroup\uff1a\u8be5\u7528\u6237\u540d\u9ed8\u8ba4\u7684\u8def\u7531\u76ee\u6807\u3002\u4f8b\u5982\uff0c\u6307\u5b9aroot\u7528\u6237\u7684\u8be5\u5b57\u6bb5\u503c\u4e3a10\u65f6\uff0c\u5219\u4f7f\u7528root\u7528\u6237\u53d1\u9001\u7684SQL\u8bed\u53e5\u9ed8\u8ba4\n   \u60c5\u51b5\u4e0b\u5c06\u8def\u7531\u5230hostgroup_id=10\u7ec4\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u3002\n \nadmin> select * from mysql_users\\G\n*************************** 1. row ***************************\n              username: root\n              password: \n                active: 1\n               use_ssl: 0\n     default_hostgroup: 10\n        default_schema: NULL\n         schema_locked: 0\ntransaction_persistent: 1\n          fast_forward: 0\n               backend: 1\n              frontend: 1\n       max_connections: 10000\n*************************** 2. row ***************************\n              username: doris\n              password: P@ssword1!\n                active: 1\n               use_ssl: 0\n     default_hostgroup: 10\n        default_schema: NULL\n         schema_locked: 0\ntransaction_persistent: 1\n          fast_forward: 0\n               backend: 1\n              frontend: 1\n       max_connections: 10000\n2 rows in set (0.000 sec)\n  \n\u867d\u7136\u8fd9\u91cc\u6ca1\u6709\u8be6\u7ec6\u4ecb\u7ecdmysql_users\u8868\uff0c\u4f46\u53ea\u6709active=1\u7684\u7528\u6237\u624d\u662f\u6709\u6548\u7684\u7528\u6237\u3002\n\nMySQL [(none)]> load mysql users to runtime;\nQuery OK, 0 rows affected (0.001 sec)\n \nMySQL [(none)]> save mysql users to disk;\nQuery OK, 0 rows affected (0.123 sec)\n\n\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7sql\u5ba2\u6237\u7aef\uff0c\u4f7f\u7528doris\u7684\u7528\u6237\u540d\u5bc6\u7801\u53bb\u8fde\u63a5\u4e86ProxySQL\u4e86\n")),(0,o.kt)("h4",{id:"326-\u901a\u8fc7-proxysql-\u8fde\u63a5-doris-\u8fdb\u884c\u6d4b\u8bd5"},"3.2.6 \u901a\u8fc7 ProxySQL \u8fde\u63a5 Doris \u8fdb\u884c\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u4e0b\u9762\uff0c\u5206\u522b\u4f7f\u7528 root \u7528\u6237\u548c doris \u7528\u6237\u6d4b\u8bd5\u4e0b\u5b83\u4eec\u662f\u5426\u80fd\u8def\u7531\u5230\u9ed8\u8ba4\u7684 hostgroup_id=10 (\u5b83\u662f\u4e00\u4e2a\u5199\u7ec4)\u8bfb\u6570\u636e\u3002\u4e0b\u9762\u662f\u901a\u8fc7\u8f6c\u53d1\u7aef\u53e3 6033 \u8fde\u63a5\u7684\uff0c\u8fde\u63a5\u7684\u662f\u8f6c\u53d1\u5230\u540e\u7aef\u771f\u6b63\u7684\u6570\u636e\u5e93!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"#mysql -uroot -p -P6033 -hdoris01 -e \"show databases;\"\nEnter password: \nERROR 9001 (HY000) at line 1: Max connect timeout reached while reaching hostgroup 10 after 10000ms\n\u8fd9\u4e2a\u65f6\u5019\u53d1\u73b0\u51fa\u9519\uff0c\u5e76\u6ca1\u6709\u8f6c\u53d1\u5230\u540e\u7aef\u771f\u6b63\u7684doris fe\u4e0a\n\u901a\u8fc7\u65e5\u5fd7\u770b\u5230\u6709set autocommit=0 \u8fd9\u6837\u5f00\u542f\u4e8b\u52a1\n\u68c0\u67e5\u914d\u7f6e\u53d1\u73b0\uff1a\nmysql-forward_autocommit=false\nmysql-autocommit_false_is_transaction=false\n\u6211\u4eec\u8fd9\u91cc\u4e0d\u9700\u8981\u8bfb\u5199\u5206\u79bb\uff0c\u53ea\u9700\u8981\u5c06\u8fd9\u4e24\u4e2a\u53c2\u6570\u901a\u8fc7\u4e0b\u9762\u8bed\u53e5\u76f4\u63a5\u641e\u6210true\u5c31\u53ef\u4ee5\u4e86\nmysql> UPDATE global_variables SET variable_value='true' WHERE variable_name='mysql-forward_autocommit';\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> UPDATE global_variables SET variable_value='true' WHERE variable_name='mysql-autocommit_false_is_transaction';\nQuery OK, 1 row affected (0.01 sec)\n\nmysql>  LOAD MYSQL VARIABLES TO RUNTIME;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SAVE MYSQL VARIABLES TO DISK;\nQuery OK, 98 rows affected (0.12 sec)\n\n\u7136\u540e\u6211\u4eec\u5728\u91cd\u65b0\u8bd5\u4e00\u4e0b\uff0c\u663e\u793a\u6210\u529f\n[root@doris01 ~]# mysql -udoris -pP@ssword1! -P6033 -h192.168.9.211  -e \"show databases;\"\nWarning: Using a password on the command line interface can be insecure.\n+--------------------+\n| Database           |\n+--------------------+\n| doris_audit_db     |\n| information_schema |\n| retail             |\n+--------------------+\n")),(0,o.kt)("p",null,"OK\uff0c\u5230\u6b64\u5c31\u7ed3\u675f\u4e86\uff0c\u4f60\u5c31\u53ef\u4ee5\u7528 Mysql \u5ba2\u6237\u7aef\uff0cJDBC \u7b49\u4efb\u4f55\u8fde\u63a5 mysql \u7684\u65b9\u5f0f\u8fde\u63a5 ProxySQL \u53bb\u64cd\u4f5c\u4f60\u7684 doris \u4e86"))}y.isMDXComponent=!0}}]);