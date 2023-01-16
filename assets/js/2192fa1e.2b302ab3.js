"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[9817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Cluster upgrade",language:"en"},i=void 0,l={unversionedId:"admin-manual/cluster-management/upgrade",id:"admin-manual/cluster-management/upgrade",title:"Cluster upgrade",description:"\x3c!--",source:"@site/docs/admin-manual/cluster-management/upgrade.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/upgrade",permalink:"/docs/admin-manual/cluster-management/upgrade",draft:!1,tags:[],version:"current",frontMatter:{title:"Cluster upgrade",language:"en"},sidebar:"docs",previous:{title:"USE",permalink:"/docs/sql-manual/sql-reference/Utility-Statements/USE"},next:{title:"Elastic scaling",permalink:"/docs/admin-manual/cluster-management/elastic-expansion"}},s={},p=[{value:"Preparen",id:"preparen",level:2},{value:"Test the correctness of BE upgrade",id:"test-the-correctness-of-be-upgrade",level:2},{value:"Testing FE Metadata Compatibility",id:"testing-fe-metadata-compatibility",level:2},{value:"Upgrade preparation",id:"upgrade-preparation",level:2},{value:"rolling upgrade",id:"rolling-upgrade",level:2},{value:"About version rollback",id:"about-version-rollback",level:2},{value:"Documentation",id:"documentation",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cluster-upgrade"},"Cluster upgrade"),(0,r.kt)("p",null,"Doris can upgrade smoothly by rolling upgrades. The following steps are recommended for security upgrade."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The name of the BE binary that appears in this doc is ",(0,r.kt)("inlineCode",{parentName:"strong"},"doris_be"),", which was ",(0,r.kt)("inlineCode",{parentName:"strong"},"palo_be")," in previous versions.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Doris does not support upgrading across two-digit version numbers, for example: you cannot upgrade directly from 0.13 to 0.15, only through 0.13.x -> 0.14.x -> 0.15.x, and the three-digit version number can be upgraded across versions, such as from 0.13 .15 can be directly upgraded to 0.14.13.1, it is not necessary to upgrade 0.14.7 or 0.14.12.1"),(0,r.kt)("li",{parentName:"ol"},"The following approaches are based on highly available deployments. That is, data 3 replicas, FE high availability."))),(0,r.kt)("h2",{id:"preparen"},"Preparen"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Turn off the replica repair and balance operation."),(0,r.kt)("p",{parentName:"li"}," There will be node restarts during the upgrade process, so unnecessary cluster balancing and replica repair logic may be triggered. You can close it first with the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'# Turn off the replica ealance logic. After it is closed, the balancing operation of the ordinary table replica will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_balance" = "true");\n\n# Turn off the replica balance logic of the colocation table. After it is closed, the replica redistribution operation of the colocation table will no longer be triggered.\n$ mysql-client> admin set frontend config("disable_colocate_balance" = "true");\n\n# Turn off the replica scheduling logic. After shutting down, all generated replica repair and balancing tasks will no longer be scheduled.\n$ mysql-client> admin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,r.kt)("p",{parentName:"li"}," After the cluster is upgraded, just use the above command to set the corresponding configuration to the original value.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"important! ! Metadata needs to be backed up before upgrading(The entire directory needs to be backed up)! !")),(0,r.kt)("p",{parentName:"li"},"Let's assume that the path of ",(0,r.kt)("inlineCode",{parentName:"p"},"meta_dir")," specified in fe.conf is ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/doris-meta"),". In a normal Doris cluster, the directory structure of metadata should be as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"/path/to/doris-meta/\n            |-- bdb/\n            |   |-- 00000000.jdb\n            |   |-- je.config.csv\n            |   |-- je.info.0\n            |   |-- je.info.0.lck\n            |   |-- je.lck\n            |   `-- je.stat.csv\n            `-- image/\n                |-- ROLE\n                |-- VERSION\n                `-- image.xxxx\n")),(0,r.kt)("p",{parentName:"li"},"The metadata directory to be backed up is  ",(0,r.kt)("inlineCode",{parentName:"p"},"doris-meta/")))),(0,r.kt)("h2",{id:"test-the-correctness-of-be-upgrade"},"Test the correctness of BE upgrade"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Arbitrarily select a BE node and deploy the latest doris_be binary file."),(0,r.kt)("li",{parentName:"ol"},"Restart the BE node and check the BE log be.INFO to see if the boot was successful."),(0,r.kt)("li",{parentName:"ol"},"If the startup fails, you can check the reason first. If the error is not recoverable, you can delete the BE directly through DROP BACKEND, clean up the data, and restart the BE using the previous version of doris_be. Then re-ADD BACKEND. (",(0,r.kt)("strong",{parentName:"li"},"This method will result in the loss of a copy of the data, please make sure that three copies are complete, and perform this operation!!!"))),(0,r.kt)("h2",{id:"testing-fe-metadata-compatibility"},"Testing FE Metadata Compatibility"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Important! Exceptional metadata compatibility is likely to cause data cannot be restored!!")),(0,r.kt)("li",{parentName:"ol"},"Deploy a test FE process (It is recommended to use your own local development machine, or BE node. If it is on the Follower or Observer node, you need to stop the started process, but it is not recommended to test on the Follower or Observer node) using the new version alone."),(0,r.kt)("li",{parentName:"ol"},"Modify the FE configuration file fe.conf for testing and set all ports to ",(0,r.kt)("strong",{parentName:"li"},"different from online"),"."),(0,r.kt)("li",{parentName:"ol"},"Add configuration in fe.conf: cluster_id=123456"),(0,r.kt)("li",{parentName:"ol"},"Add configuration in fe.conf: metadata_failure_recovery=true"),(0,r.kt)("li",{parentName:"ol"},"Copy the metadata directory doris-meta of the online environment master Fe to the test environment\n6.The cluster_ID where copy to the doris-meta/image/VERSION file in the test environment is modified to 123456 (that is, the same as in Step 3)"),(0,r.kt)("li",{parentName:"ol"},"In the test environment,running sh sh bin/start_fe.sh,start FE."),(0,r.kt)("li",{parentName:"ol"},"Observe whether the start-up is successful through FE log fe.log."),(0,r.kt)("li",{parentName:"ol"},"If the startup is successful, run sh bin/stop_fe.sh to stop the FE process of the test environment."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"The purpose of the above 2-6 steps is to prevent the FE of the test environment from being misconnected to the online environment after it starts."))),(0,r.kt)("h2",{id:"upgrade-preparation"},"Upgrade preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"After data validation, the new version of BE and FE binary files are distributed to their respective directories."),(0,r.kt)("li",{parentName:"ol"},"Usually small version upgrade, BE only needs to upgrade doris_be; FE only needs to upgrade doris-fe.jar(which was palo-fe.jar in previous versions). If it is a large version upgrade, you may need to upgrade other files (including but not limited to bin / , lib / etc.) If you are not sure whether you need to replace other files, it is recommended to replace all of them.")),(0,r.kt)("h2",{id:"rolling-upgrade"},"rolling upgrade"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Confirm that the new version of the file is deployed. Restart FE and BE instances one by one."),(0,r.kt)("li",{parentName:"ol"},"It is suggested that BE be restarted one by one and FE be restarted one by one. Because Doris usually guarantees backward compatibility between FE and BE, that is, the old version of FE can access the new version of BE. However, the old version of BE may not be supported to access the new version of FE."),(0,r.kt)("li",{parentName:"ol"},"It is recommended to restart the next instance after confirming the previous instance started successfully. Refer to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/install/install-deploy"},"Installation Deployment Document")," for the identification of successful instance startup.")),(0,r.kt)("h2",{id:"about-version-rollback"},"About version rollback"),(0,r.kt)("p",null,"Because the database is a stateful service, Doris cannot support version rollback (version downgrade) in most cases. In some cases, the rollback of the 3-bit or 4-bit version can be supported, but the rollback of the 2-bit version will not be supported."),(0,r.kt)("p",null,"Therefore, it is recommended to upgrade some nodes and observe the business operation (gray upgrade) to reduce the upgrade risk."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Illegal rollback operation may cause data loss and damage.")," "),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/community/design/metadata-design"},"Doris metadata design document")," "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/admin-manual/maint-monitor/metadata-operation"},"Metadata Operations and Maintenance")," "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/admin-manual/maint-monitor/tablet-repair-and-balance"},"Data replica management")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/install/install-deploy"},"Installation Deployment Document"))))}u.isMDXComponent=!0}}]);