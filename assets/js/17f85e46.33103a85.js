"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[66362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"HLL",language:"en"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Definition/HLL",id:"version-0.15/sql-reference/sql-statements/Data-Definition/HLL",title:"HLL",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Definition/HLL.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/HLL",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/HLL",draft:!1,tags:[],version:"0.15",frontMatter:{title:"HLL",language:"en"},sidebar:"docs",previous:{title:"DROP VIEW",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/DROP-VIEW"},next:{title:"RECOVER",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/RECOVER"}},s={},u=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hll"},"HLL"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"HLL is an engineering implementation based on the HyperLogLog algorithm. It is used to store the intermediate results of the HyperLog calculation process. It can only be used as the value column type of the table.\nBy aggregating to reduce the amount of data continuously, in order to achieve the purpose of speeding up the query, based on which an estimated result, the error is about 1%.\nThe HLL column is generated by other columns or data in the imported data. When imported, the hll_hash function is used to specify which column in the data is used to generate the HLL column.\nIt is often used to replace count distinct, and to quickly calculate UV in business by combining rollup."),(0,a.kt)("p",null,"The correlation function:"),(0,a.kt)("p",null,"TOTAL UNION\nThis function is an aggregation function, which is used to calculate the cardinality estimation of all data satisfying the conditions. This function can also be used to analyze functions. It only supports the default window and does not support the window clause."),(0,a.kt)("p",null,"Coach L.u RAW AGG\nThis function is an aggregation function that aggregates HLL type fields and returns HLL type."),(0,a.kt)("p",null,"HLL_CARDINALITY(hll)\nThis function is used to estimate the cardinality of a single HLL sequence"),(0,a.kt)("p",null,"HLL_HASH(column_name)\nGenerate HLL column types for insert or import, see the instructions for the use of imports"),(0,a.kt)("p",null,"EMPTY_HLL()\nGenerate empty HLL column types for insert or import, see the instructions for the use of imports"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First create a table with HLL columns\ncreate table test(\ndt date,\nid int,\nname char(10),\nProvince of char (10),\nThe char (1),\nthe European Union,\nEuropean Union\ndistributed by hash(id) buckets 32;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import data. See help curl for the way you import it."),(0,a.kt)("p",{parentName:"li"},"A. Generate HLL columns using columns in tables"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -uname:password -T data -H "label:load_1" -H "columns:dt, id, name, province, os, set1=hll_hash(id), set2=hll_hash(name)"\n    http://host/api/test_db/test/_stream_load\n')),(0,a.kt)("p",{parentName:"li"},"B. Generate HLL columns using a column in the data"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -uname:password -T data -H "label:load_1" -H "columns:dt, id, name, province, sex, cuid, os, set1=hll_hash(cuid), set2=hll_hash(os)"\n    http://host/api/test_db/test/_stream_load\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"There are three common ways of aggregating data: (without aggregating the base table directly, the speed may be similar to that of using APPROX_COUNT_DISTINCT directly)"))),(0,a.kt)("p",null,"A. Create a rollup that allows HLL columns to generate aggregation.\nalter table test add rollup test_rollup(dt, set1);"),(0,a.kt)("p",null,"B. Create another table dedicated to computing uv, and insert data)"),(0,a.kt)("p",null,"create table test_uv(\ndt date,\nuv_set hll hll_union)\ndistributed by hash(dt) buckets 32;"),(0,a.kt)("p",null,"insert into test_uv select dt, set1 from test;"),(0,a.kt)("p",null,"C. Create another table dedicated to computing uv, then insert and generate HLL columns from other non-hll columns of test through hll_hash"),(0,a.kt)("p",null,"create table test_uv(\ndt date,\nid_set hll hll_union)\ndistributed by hash(dt) buckets 32;"),(0,a.kt)("p",null,"insert into test_uv select dt, hll_hash(id) from test;"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Query, HLL column is not allowed to query its original value directly, it can be queried by matching functions.")),(0,a.kt)("p",null,"a. 27714; 24635; uv\nselect HLL_UNION_AGG(uv_set) from test_uv;"),(0,a.kt)("p",null,"B. Seek every day's UV\nselect dt, HLL_CARDINALITY(uv_set) from test_uv;"),(0,a.kt)("p",null,"C. Find the aggregate value of Set1 in the test table\nselect dt, HLL_CARDINALITY(uv) from (select dt, HLL_RAW_AGG(set1) as uv from test group by dt) tmp;\nselect dt, HLL_UNION_AGG(set1) as uv from test group by dt;"),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"HLL"))}d.isMDXComponent=!0}}]);