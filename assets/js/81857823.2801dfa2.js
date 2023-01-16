"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(r),p=a,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"SQL Error",language:"en"},i=void 0,l={unversionedId:"faq/sql-faq",id:"faq/sql-faq",title:"SQL Error",description:"\x3c!--",source:"@site/docs/faq/sql-faq.md",sourceDirName:"faq",slug:"/faq/sql-faq",permalink:"/docs/faq/sql-faq",draft:!1,tags:[],version:"current",frontMatter:{title:"SQL Error",language:"en"},sidebar:"docs",previous:{title:"Data Operation Error",permalink:"/docs/faq/data-faq"},next:{title:"Star-Schema-Benchmark",permalink:"/docs/benchmark/ssb"}},s={},c=[{value:"Q1. Query error: Failed to get scan range, no queryable replica found in tablet: xxxx",id:"q1-query-error-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx",level:3},{value:"Q2. Show backends/frontends The information viewed is incomplete",id:"q2-show-backendsfrontends-the-information-viewed-is-incomplete",level:3},{value:"Q3. invalid cluster id: xxxx",id:"q3-invalid-cluster-id-xxxx",level:3},{value:"Q4. Unique Key model query results are inconsistent",id:"q4-unique-key-model-query-results-are-inconsistent",level:3},{value:"Q5. The problem of querying bitmap/hll type data returns NULL",id:"q5-the-problem-of-querying-bitmaphll-type-data-returns-null",level:3},{value:"Q6. Error when accessing object storage: curl 77: Problem with the SSL CA cert",id:"q6-error-when-accessing-object-storage-curl-77-problem-with-the-ssl-ca-cert",level:3}],u={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql-error"},"SQL Error"),(0,a.kt)("h3",{id:"q1-query-error-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"},"Q1. Query error: Failed to get scan range, no queryable replica found in tablet: xxxx"),(0,a.kt)("p",null,"This happens because the corresponding tablet does not find a copy that can be queried, usually because the BE is down, the copy is missing, etc. You can first pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"show tablet tablet_id")," statement and then execute the following ",(0,a.kt)("inlineCode",{parentName:"p"},"show proc")," statement to view the replica information corresponding to this tablet and check whether the replica is complete. At the same time, you can also query the progress of replica scheduling and repair in the cluster through ",(0,a.kt)("inlineCode",{parentName:"p"},'show proc "/cluster_balance"')," information."),(0,a.kt)("p",null,"For commands related to data copy management, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/admin-manual/maint-monitor/tablet-repair-and-balance"},"Data Copy Management"),"."),(0,a.kt)("h3",{id:"q2-show-backendsfrontends-the-information-viewed-is-incomplete"},"Q2. Show backends/frontends The information viewed is incomplete"),(0,a.kt)("p",null,"After executing certain statements such as ",(0,a.kt)("inlineCode",{parentName:"p"},"show backends/frontends"),", some columns may be found to be incomplete in the results. For example, the disk capacity information cannot be seen in the show backends result."),(0,a.kt)("p",null,"Usually this problem occurs when the cluster has multiple FEs. If users connect to non-Master FE nodes to execute these statements, they will see incomplete information. This is because some information exists only on the Master FE node. For example, BE's disk usage information, etc. Therefore, complete information can only be obtained after a direct connection to the Master FE."),(0,a.kt)("p",null,"Of course, users can also execute ",(0,a.kt)("inlineCode",{parentName:"p"},"set forward_to_master=true;")," before executing these statements. After the session variable is set to true, some information viewing statements executed subsequently will be automatically forwarded to the Master FE to obtain the results. In this way, no matter which FE the user is connected to, the complete result can be obtained."),(0,a.kt)("h3",{id:"q3-invalid-cluster-id-xxxx"},"Q3. invalid cluster id: xxxx"),(0,a.kt)("p",null,"This error may appear in the results of the show backends or show frontends commands. Usually appears in the error message column of an FE or BE node. The meaning of this error is that after the Master FE sends the heartbeat information to the node, the node finds that the cluster id carried in the heartbeat information is different from the cluster id stored locally, so it refuses to respond to the heartbeat."),(0,a.kt)("p",null,"The Master FE node of Doris will actively send heartbeats to each FE or BE node, and will carry a cluster_id in the heartbeat information. cluster_id is the unique cluster ID generated by the Master FE when a cluster is initialized. When the FE or BE receives the heartbeat information for the first time, the cluster_id will be saved locally in the form of a file. The file of FE is in the image/ directory of the metadata directory, and the BE has a cluster_id file in all data directories. After that, each time the node receives the heartbeat, it will compare the content of the local cluster_id with the content in the heartbeat. If it is inconsistent, it will refuse to respond to the heartbeat."),(0,a.kt)("p",null,"This mechanism is a node authentication mechanism to prevent receiving false heartbeat messages sent by nodes outside the cluster."),(0,a.kt)("p",null,"If needed to recover from this error. The first thing to do is to make sure that all the nodes are in the correct cluster. After that, for the FE node, you can try to modify the cluster_id value in the image/VERSION file in the metadata directory and restart the FE. For the BE node, you can delete all the cluster_id files in the data directory and restart the BE."),(0,a.kt)("h3",{id:"q4-unique-key-model-query-results-are-inconsistent"},"Q4. Unique Key model query results are inconsistent"),(0,a.kt)("p",null,"In some cases, when a user uses the same SQL to query a table with a Unique Key model, the results of multiple queries may be inconsistent. And the query results always change between 2-3 kinds."),(0,a.kt)("p",null,"This may be because, in the same batch of imported data, there are data with the same key but different values, which will lead to inconsistent results between different replicas due to the uncertainty of the sequence of data overwriting."),(0,a.kt)("p",null,"For example, the table is defined as k1, v1. A batch of imported data is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'1, "abc"\n1, "def"\n')),(0,a.kt)("p",null,"Then maybe the result of copy 1 is ",(0,a.kt)("inlineCode",{parentName:"p"},'1, "abc"'),", and the result of copy 2 is ",(0,a.kt)("inlineCode",{parentName:"p"},'1, "def"'),". As a result, the query results are inconsistent."),(0,a.kt)("p",null,"To ensure that the data sequence between different replicas is unique, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/data-operate/update-delete/sequence-column-manual"},"Sequence Column")," function."),(0,a.kt)("h3",{id:"q5-the-problem-of-querying-bitmaphll-type-data-returns-null"},"Q5. The problem of querying bitmap/hll type data returns NULL"),(0,a.kt)("p",null,"In version 1.1.x, when vectorization is enabled, and the bitmp type field in the query data table returns a NULL result,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First you have to ",(0,a.kt)("inlineCode",{parentName:"li"},"set return_object_data_as_binary=true;")),(0,a.kt)("li",{parentName:"ol"},"Turn off vectorization ",(0,a.kt)("inlineCode",{parentName:"li"},"set enable_vectorized_engine=false;")),(0,a.kt)("li",{parentName:"ol"},"Turn off SQL cache ",(0,a.kt)("inlineCode",{parentName:"li"},"set [global] enable_sql_cache = false;"))),(0,a.kt)("p",null,"This is because the bitmap / hll type is in the vectorized execution engine: the input is all NULL, and the output result is also NULL instead of 0"),(0,a.kt)("h3",{id:"q6-error-when-accessing-object-storage-curl-77-problem-with-the-ssl-ca-cert"},"Q6. Error when accessing object storage: curl 77: Problem with the SSL CA cert"),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl 77: Problem with the SSL CA cert")," error appears in the be.INFO log. You can try to solve it in the following ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the certificate at ",(0,a.kt)("a",{parentName:"li",href:"https://curl.se/docs/caextract.html"},"https://curl.se/docs/caextract.html"),": cacert.pem"),(0,a.kt)("li",{parentName:"ol"},"Copy the certificate to the specified location: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo cp /tmp/cacert.pem /etc/ssl/certs/ca-certificates.crt")),(0,a.kt)("li",{parentName:"ol"},"Restart the BE node.")))}d.isMDXComponent=!0}}]);