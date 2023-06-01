"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[29053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||c[d]||n;return r?o.createElement(g,l(l({ref:t},m),{},{components:r})):o.createElement(g,l({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=r(87462),a=(r(67294),r(3905));const n={title:"WORKLOAD GROUP",language:"en"},l=void 0,i={unversionedId:"admin-manual/workload-group",id:"admin-manual/workload-group",title:"WORKLOAD GROUP",description:"\x3c!--",source:"@site/docs/admin-manual/workload-group.md",sourceDirName:"admin-manual",slug:"/admin-manual/workload-group",permalink:"/docs/dev/admin-manual/workload-group",draft:!1,tags:[],version:"current",frontMatter:{title:"WORKLOAD GROUP",language:"en"},sidebar:"docs",previous:{title:"rowsets",permalink:"/docs/dev/admin-manual/system-table/rowsets"},next:{title:"Multi-tenancy",permalink:"/docs/dev/admin-manual/multi-tenant"}},s={},u=[{value:"Workload group properties",id:"workload-group-properties",level:2},{value:"Workload group usage",id:"workload-group-usage",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workload-group"},"WORKLOAD GROUP"),(0,a.kt)("version",{since:"dev"}),(0,a.kt)("p",null,"Workload groups can limit the use of compute and memory resources on a single be node for tasks within the group, thus achieving resource isolation."),(0,a.kt)("h2",{id:"workload-group-properties"},"Workload group properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cpu_share: Required, used to set how much cpu time the workload group can acquire, which can achieve soft isolation of cpu resources. cpu_share is a relative value indicating the weight of cpu resources available to the running workload group. For example, if a user creates 3 workload groups rg-a, rg-b and rg-c with cpu_share of 10, 30 and 40 respectively, and at a certain moment rg-a and rg-b are running tasks while rg-c has no tasks, then rg-a can get 25% (10 / (10 + 30)) of the cpu resources while workload group rg-b can get 75% of the cpu resources. If the system has only one workload group running, it gets all the cpu resources regardless of the value of its cpu_share.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"memory_limit: Required, set the percentage of be memory that can be used by the workload group. The absolute value of the workload group memory limit is: physical_memory ",(0,a.kt)("em",{parentName:"p"}," mem_limit ")," memory_limit, where mem_limit is a be configuration item. The total memory_limit of all workload groups in the system must not exceed 100%. Workload groups are guaranteed to use the memory_limit for the tasks in the group in most cases. When the workload group memory usage exceeds this limit, tasks in the group with larger memory usage may be canceled to release the excess memory, refer to enable_memory_overcommit.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"enable_memory_overcommit: Optional, enable soft memory isolation for the workload group, default is false. if set to false, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is softly isolated, if the system has free memory resources, the workload group can continue to use system memory after exceeding the memory_limit limit, and when the total system memory is tight, it will cancel several tasks in the group with the largest memory occupation, releasing part of the excess memory to relieve the system memory pressure. It is recommended that when this configuration is enabled for a workload group, the total memory_limit of all workload groups should be less than 100%, and the remaining portion should be used for workload group memory overcommit."))),(0,a.kt)("h2",{id:"workload-group-usage"},"Workload group usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable the experimental_enable_workload_group configuration, set in fe.conf to")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"experimental_enable_workload_group=true\n")),(0,a.kt)("p",null,"The system will automatically create a default workload group named ",(0,a.kt)("inlineCode",{parentName:"p"},"normal")," after this configuration is enabled. 2."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"To create a workload group:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'create workload group if not exists g1\nproperties (\n    "cpu_share"="10".\n    "memory_limit"="30%".\n    "enable_memory_overcommit"="true"\n).\n')),(0,a.kt)("p",null,"For details on creating a workload group, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},"CREATE-WORKLOAD-GROUP"),", and to delete a workload group, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP"},"DROP-WORKLOAD-GROUP"),"; to modify a workload group, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"},"ALTER-WORKLOAD-GROUP"),"; to view the workload group, refer to: ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/table-functions/workload-group"},"WORKLOAD_GROUPS()")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS"},"SHOW-WORKLOAD-GROUPS"),"."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"turn on the pipeline execution engine, the workload group cpu isolation is based on the implementation of the pipeline execution engine, so you need to turn on the session variable:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set experimental_enable_pipeline_engine = true.\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Queries bind to workload groups. Currently, queries are mainly bound to workload groups by specifying session variables. If the user does not specify a workload group, the query will be submitted to the ",(0,a.kt)("inlineCode",{parentName:"li"},"normal")," workload group by default.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set workload_group = g1.\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Execute the query, which will be associated with the g1 workload group.")))}c.isMDXComponent=!0}}]);