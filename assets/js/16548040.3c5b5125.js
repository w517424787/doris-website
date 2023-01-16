"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87210],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>p});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},s=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,p=d["".concat(l,".").concat(u)]||d[u]||y[u]||n;return t?r.createElement(p,m(m({ref:a},s),{},{components:t})):r.createElement(p,m({ref:a},s))}));function p(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,m=new Array(n);m[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[d]="string"==typeof e?e:i,m[1]=o;for(var c=2;c<n;c++)m[c]=t[c];return r.createElement.apply(null,m)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69594:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const n={title:"Memory Limit Exceeded Analysis",language:"en"},m=void 0,o={unversionedId:"admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis",id:"version-dev/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis",title:"Memory Limit Exceeded Analysis",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis.md",sourceDirName:"admin-manual/maint-monitor/memory-management",slug:"/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis",permalink:"/docs/dev/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/admin-manual/maint-monitor/memory-management/memory-limit-exceeded-analysis.md",tags:[],version:"dev",frontMatter:{title:"Memory Limit Exceeded Analysis",language:"en"},sidebar:"docs",previous:{title:"Memory Tracker",permalink:"/docs/dev/admin-manual/maint-monitor/memory-management/memory-tracker"},next:{title:"BE OOM Analysis",permalink:"/docs/dev/admin-manual/maint-monitor/memory-management/be-oom-analysis"}},l={},c=[{value:"The process memory exceeds the limit OR the remaining available memory of the system is insufficient",id:"the-process-memory-exceeds-the-limit-or-the-remaining-available-memory-of-the-system-is-insufficient",level:2},{value:"Error message analysis",id:"error-message-analysis",level:3},{value:"Log Analysis",id:"log-analysis",level:3},{value:"System remaining available memory calculation",id:"system-remaining-available-memory-calculation",level:3},{value:"Query or import a single execution memory limit",id:"query-or-import-a-single-execution-memory-limit",level:2},{value:"Error message analysis",id:"error-message-analysis-1",level:3},{value:"Log Analysis",id:"log-analysis-1",level:3}],s={toc:c},d="wrapper";function y(e){let{components:a,...t}=e;return(0,i.kt)(d,(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"memory-limit-exceeded-analysis"},"Memory Limit Exceeded Analysis"),(0,i.kt)("version",{since:"1.2.0"},(0,i.kt)("p",null,"When the query or import error ",(0,i.kt)("inlineCode",{parentName:"p"},"Memory limit exceeded")," is reported, the possible reasons are: the process memory exceeds the limit, the remaining available memory of the system is insufficient, and the memory limit for a single query execution is exceeded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Memory limit exceeded:<consuming tracker:<xxx>, xxx. backend 172.1.1.1 process memory used xxx GB, limit xxx GB. If query tracker exceeded, `set exec_mem_limit=8G ` to change limit, details mem usage see be. INFO.\n")),(0,i.kt)("h2",{id:"the-process-memory-exceeds-the-limit-or-the-remaining-available-memory-of-the-system-is-insufficient"},"The process memory exceeds the limit OR the remaining available memory of the system is insufficient"),(0,i.kt)("p",null,"When the following error is returned, it means that the process memory exceeds the limit, or the remaining available memory of the system is insufficient. The specific reason depends on the memory statistics."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Memory limit exceeded:<consuming tracker:<Query#Id=3c88608cf35c461d-95fe88969aa6fc30>, process memory used 2.68 GB exceed limit 2.47 GB or sys mem available 50.95 GB less than low water mark 3.20 GB, failed alloc size 2.00 MB>, executing msg:<execute:<ExecNode:VAGGREGATION_NODE (id=7)>>. backend 172.1.1.1 process memory used 2.68 GB, limit 2.47 GB. If query tracker exceeded, `set exec_mem_limit =8G` to change limit, details mem usage see be.INFO\n")),(0,i.kt)("h3",{id:"error-message-analysis"},"Error message analysis"),(0,i.kt)("p",null,"The error message is divided into three parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Memory limit exceeded:<consuming tracker:<Query#Id=3c88608cf35c461d-95fe88969aa6fc30>"),": It is found that the memory limit is exceeded during the memory application process of query ",(0,i.kt)("inlineCode",{parentName:"li"},"3c88608cf35c461d-95fe88969aa6fc30"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"process memory used 2.68 GB exceed limit 2.47 GB or sys mem available 50.95 GB less than low water mark 3.20 GB, failed alloc size 2.00 MB"),": The reason for exceeding the limit is that the 2.68GB of memory used by the BE process exceeds the limit of 2.47GB limit, the value of limit comes from mem_limit * system MemTotal in be.conf, which is equal to 80% of the total memory of the operating system by default. The remaining available memory of the current operating system is 50.95 GB, which is still higher than the minimum water level of 3.2GB. This time, we are trying to apply for 2MB of memory."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"executing msg:<execute:<ExecNode:VAGGREGATION_NODE (id=7)>>, backend 172.24.47.117 process memory used 2.68 GB, limit 2.47 GB"),": The location of this memory application is ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecNode:VAGGREGATION_NODE (id= 7)>"),", the current IP of the BE node is 172.1.1.1, and print the memory statistics of the BE node again.")),(0,i.kt)("h3",{id:"log-analysis"},"Log Analysis"),(0,i.kt)("p",null,"At the same time, you can find the following log in log/be.INFO to confirm whether the memory usage of the current process meets expectations. The log is also divided into three parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Process Memory Summary"),": process memory statistics."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Alloc Stacktrace"),": The stack that triggers the memory overrun detection, which is not necessarily the location of the large memory application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Memory Tracker Summary"),": Process memory tracker statistics, refer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/dev/admin-manual/maint-monitor/memory-management/memory-tracker"},"Memory Tracker")," to analyze the location of memory usage.\nNotice:"),(0,i.kt)("li",{parentName:"ol"},"The printing interval of the process memory overrun log is 1s. After the process memory exceeds the limit, the memory applications in most locations of BE will sense it, and try to make a predetermined callback method, and print the process memory overrun log, so if the log is If the value of Try Alloc is small, you don\u2019t need to pay attention to ",(0,i.kt)("inlineCode",{parentName:"li"},"Alloc Stacktrace"),", just analyze ",(0,i.kt)("inlineCode",{parentName:"li"},"Memory Tracker Summary")," directly."),(0,i.kt)("li",{parentName:"ol"},"When the process memory exceeds the limit, BE will trigger memory GC.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"W1127 17:23:16.372572 19896 mem_tracker_limiter.cpp:214] System Mem Exceed Limit Check Faild, Try Alloc: 1062688\nProcess Memory Summary:\n    process memory used 2.68 GB limit 2.47 GB, sys mem available 50.95 GB min reserve 3.20 GB, tc/jemalloc allocator cache 51.97 MB\nAlloc Stacktrace:\n    @          0x50028e8  doris::MemTrackerLimiter::try_consume()\n    @          0x50027c1  doris::ThreadMemTrackerMgr::flush_untracked_mem<>()\n    @          0x595f234  malloc\n    @          0xb888c18  operator new()\n    @          0x8f316a2  google::LogMessage::Init()\n    @          0x5813fef  doris::FragmentExecState::coordinator_callback()\n    @          0x58383dc  doris::PlanFragmentExecutor::send_report()\n    @          0x5837ea8  doris::PlanFragmentExecutor::update_status()\n    @          0x58355b0  doris::PlanFragmentExecutor::open()\n    @          0x5815244  doris::FragmentExecState::execute()\n    @          0x5817965  doris::FragmentMgr::_exec_actual()\n    @          0x581fffb  std::_Function_handler<>::_M_invoke()\n    @          0x5a6f2c1  doris::ThreadPool::dispatch_thread()\n    @          0x5a6843f  doris::Thread::supervise_thread()\n    @     0x7feb54f931ca  start_thread\n    @     0x7feb5576add3  __GI___clone\n    @              (nil)  (unknown)\n\nMemory Tracker Summary:\n    Type=consistency, Used=0(0 B), Peak=0(0 B)\n    Type=batch_load, Used=0(0 B), Peak=0(0 B)\n    Type=clone, Used=0(0 B), Peak=0(0 B)\n    Type=schema_change, Used=0(0 B), Peak=0(0 B)\n    Type=compaction, Used=0(0 B), Peak=0(0 B)\n    Type=load, Used=0(0 B), Peak=0(0 B)\n    Type=query, Used=206.67 MB(216708729 B), Peak=565.26 MB(592723181 B)\n    Type=global, Used=930.42 MB(975614571 B), Peak=1017.42 MB(1066840223 B)\n    Type=tc/jemalloc_cache, Used=51.97 MB(54494616 B), Peak=-1.00 B(-1 B)\n    Type=process, Used=1.16 GB(1246817916 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=474.20 MB(497233597 B), Peak=649.18 MB(680718208 B)\n    MemTracker Label=BufferAllocator, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=LoadChannelMgr, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=StorageEngine, Parent Label=Orphan, Used=320.56 MB(336132488 B), Peak=322.56 MB(338229824 B)\n    MemTracker Label=SegCompaction, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=SegmentMeta, Parent Label=Orphan, Used=948.64 KB(971404 B), Peak=943.64 KB(966285 B)\n    MemTracker Label=TabletManager, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache, Type=global, Limit=-1.00 B(-1 B), Used=455.22 MB(477329882 B), Peak=454.18 MB(476244180 B)\n    MemTrackerLimiter Label=IndexPageCache, Type=global, Limit=-1.00 B(-1 B), Used=1.00 MB(1051092 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SegmentCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DiskIO, Type=global, Limit=2.47 GB(2655423201 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=ChunkAllocator, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=LastestSuccessChannelCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DeleteBitmap AggCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n")),(0,i.kt)("h3",{id:"system-remaining-available-memory-calculation"},"System remaining available memory calculation"),(0,i.kt)("p",null,"When the available memory of the system in the error message is less than the low water mark, it is also treated as a process memory limit. The value of the available memory of the system comes from ",(0,i.kt)("inlineCode",{parentName:"p"},"MemAvailable")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"/proc/meminfo"),". When ",(0,i.kt)("inlineCode",{parentName:"p"},"MemAvailable")," is insufficient, continue to use the memory The application may return std::bad_alloc or cause OOM of the BE process. Because both refreshing process memory statistics and BE memory GC have a certain lag, a small part of the memory buffer is reserved as a low water mark to avoid OOM as much as possible."),(0,i.kt)("p",null,"Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"MemAvailable")," is the total amount of memory that the operating system can provide to the user process without triggering swap as much as possible given by the operating system considering the current free memory, buffer, cache, memory fragmentation and other factors. A simple calculation Formula: MemAvailable = MemFree - LowWaterMark + (PageCache - min(PageCache / 2, LowWaterMark)), which is the same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"available")," value seen by cmd ",(0,i.kt)("inlineCode",{parentName:"p"},"free"),", for details, please refer to:\n",(0,i.kt)("a",{parentName:"p",href:"https://serverfault.com/questions/940196/why-is-memaavailable-a-lot-less-than-memfreebufferscached"},"https://serverfault.com/questions/940196/why-is-memaavailable-a-lot-less-than-memfreebufferscached"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=34e431b0ae398fc54ea69ff85ec700722c9da773"},"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=34e431b0ae398fc54ea69ff85ec700722c9da773")),(0,i.kt)("p",null,"The low water mark defaults to a maximum of 1.6G, calculated based on ",(0,i.kt)("inlineCode",{parentName:"p"},"MemTotal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vm/min_free_kbytes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confg::mem_limit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config::max_sys_mem_available_low_water_mark_bytes"),", and avoid wasting too much memory. Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"MemTotal")," is the total memory of the system, and the value also comes from ",(0,i.kt)("inlineCode",{parentName:"p"},"/proc/meminfo"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"vm/min_free_kbytes")," is the buffer reserved by the operating system for the memory GC process, and the value is usually between 0.4% and 5%. ",(0,i.kt)("inlineCode",{parentName:"p"},"vm/min_free_kbytes")," may be 5% on some cloud servers, which will lead to visually that the available memory of the system is less than the real value; increasing ",(0,i.kt)("inlineCode",{parentName:"p"},"config::max_sys_mem_available_low_water_mark_bytes")," will reserve more for Full GC on machines with more than 16G memory If there are more memory buffers, otherwise, the memory will be fully used as much as possible."),(0,i.kt)("h2",{id:"query-or-import-a-single-execution-memory-limit"},"Query or import a single execution memory limit"),(0,i.kt)("p",null,"When the following error is returned, it means that the memory limit of a single execution has been exceeded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Memory limit exceeded:<consuming tracker:<Query#Id=f78208b15e064527-a84c5c0b04c04fcf>, failed alloc size 1.03 MB, exceeded tracker:<Query#Id=f78208b15e064527-a84c5c0b04c04fcf>, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB>, executing msg:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>. backend 172.24.47.117 process memory used 1.13 GB, limit ex 98.92 GB cery tracker If , `set exec_mem_limit=8G` to change limit, details mem usage see log/be.INFO.\n")),(0,i.kt)("h3",{id:"error-message-analysis-1"},"Error message analysis"),(0,i.kt)("p",null,"The error message is divided into three parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Memory limit exceeded:<consuming tracker:<Query#Id=f78208b15e064527-a84c5c0b04c04fcf>"),": It is found that the memory limit is exceeded during the memory application process of query ",(0,i.kt)("inlineCode",{parentName:"li"},"f78208b15e064527-a84c5c0b04c04fcf"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"failed alloc size 1.03 MB, exceeded tracker:<Query#Id=f78208b15e064527-a84c5c0b04c04fcf>, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB"),": The memory requested this time is 1.03 MB The current consumption of ",(0,i.kt)("inlineCode",{parentName:"li"},"f78208b15e064527-a84c5c0b04c04fcf")," memory tracker is 99.28MB plus 1.03MB, which exceeds the limit of 100MB. The value of limit comes from ",(0,i.kt)("inlineCode",{parentName:"li"},"exec_mem_limit")," in session veriables, and the default is 4G."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"executing msg:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>. backend 172.24.47.117 process memory used 1.13 GB, limit 98.92 GB. If query tracker exceeds, "),"set exec_mem_limit=8G",(0,i.kt)("inlineCode",{parentName:"li"}," to change limit, details mem usage see be.INFO."),": The location of this memory application is ",(0,i.kt)("inlineCode",{parentName:"li"},"VHASH_JOIN_NODE (id=4)"),", and it prompts that ",(0,i.kt)("inlineCode",{parentName:"li"},"set exec_mem_limit")," can be used to increase the memory limit of a single query.")),(0,i.kt)("h3",{id:"log-analysis-1"},"Log Analysis"),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"set global enable_profile=true"),", you can print a log in log/be.INFO when a single query memory exceeds the limit, to confirm whether the current query memory usage meets expectations.\nAt the same time, you can find the following logs in log/be.INFO to confirm whether the current query memory usage meets expectations. The logs are also divided into three parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Process Memory Summary"),": process memory statistics."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Alloc Stacktrace"),": The stack that triggers the memory overrun detection, which is not necessarily the location of the large memory application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Memory Tracker Summary"),": The memory tracker statistics of the current query, you can see the memory and peak value currently used by each operator. For details, please refer to ","[Memory Tracker]","(../admin-manual/memory-management/memory -tracker.md).\nNote: A query will only print the log once after the memory exceeds the limit. At this time, multiple threads of the query will sense it and try to wait for the memory to be released, or cancel the current query. If the value of Try Alloc in the log is small, there is no need to pay attention",(0,i.kt)("inlineCode",{parentName:"li"}," Alloc Stacktrace"),", just analyze ",(0,i.kt)("inlineCode",{parentName:"li"},"Memory Tracker Summary")," directly.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"W1128 01:34:11.016165 357796 mem_tracker_limiter.cpp:191] Memory limit exceeded:<consuming tracker:<Query#Id=78208b15e064527-a84c5c0b04c04fcf>, failed alloc size 4.00 MB, exceeded tracker:<Query#Id=78208b15e064527-a84c5c0b04c04fcf>, limit 100.00 MB, peak used 98.59 MB,\ncurrent used 96.88 MB>, executing msg:<execute:<ExecNode:VHASH_JOIN_NODE (id=2)>>. backend 172.24.47.117 process memory used 1.13 GB, limit 98.92 GB. If query tracker exceed, `set exec_mem_limit=8G` to change limit, details mem usage see be.INFO.\nProcess Memory Summary:    \n    process memory used 1.13 GB limit 98.92 GB, sys mem available 45.15 GB min reserve 3.20 GB, tc/jemalloc allocator cache 27.62 MB\nAlloc Stacktrace:    \n    @          0x66cf73a  doris::vectorized::HashJoinNode::_materialize_build_side()\n    @          0x69cb1ee  doris::vectorized::VJoinNodeBase::open()\n    @          0x66ce27a  doris::vectorized::HashJoinNode::open()\n    @          0x5835dad  doris::PlanFragmentExecutor::open_vectorized_internal()\n    @          0x58351d2  doris::PlanFragmentExecutor::open()\n    @          0x5815244  doris::FragmentExecState::execute()\n    @          0x5817965  doris::FragmentMgr::_exec_actual()\n    @          0x581fffb  std::_Function_handler<>::_M_invoke()\n    @          0x5a6f2c1  doris::ThreadPool::dispatch_thread()\n    @          0x5a6843f  doris::Thread::supervise_thread()\n    @     0x7f6faa94a1ca  start_thread\n    @     0x7f6fab121dd3  __GI___clone\n    @              (nil)  (unknown)\n\nMemory Tracker Summary:\n    MemTrackerLimiter Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Type=query, Limit=100.00 MB(104857600 B), Used=64.75 MB(67891182 B), Peak=104.70 MB(109786406 B)\n    MemTracker Label=Scanner#QueryId=78208b15e064527-a84c5c0b04c04fcf, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=RuntimeFilterMgr, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=2.09 KB(2144 B), Peak=0(0 B)\n    MemTracker Label=BufferedBlockMgr2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=ExecNode:VHASH_JOIN_NODE (id=2), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=-61.44 MB(-64426656 B), Peak=290.33 KB(297296 B)\n    MemTracker Label=ExecNode:VEXCHANGE_NODE (id=9), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=6.12 KB(6264 B), Peak=5.84 KB(5976 B)\n    MemTracker Label=VDataStreamRecvr:78208b15e064527-a84c5c0b04c04fd2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=6.12 KB(6264 B), Peak=5.84 KB(5976 B)\n    MemTracker Label=ExecNode:VEXCHANGE_NODE (id=10), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=-41.20 MB(-43198024 B), Peak=1.46 MB(1535656 B)\n    MemTracker Label=VDataStreamRecvr:78208b15e064527-a84c5c0b04c04fd2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=-41.20 MB(-43198024 B), Peak=1.46 MB(1535656 B)\n    MemTracker Label=VDataStreamSender:78208b15e064527-a84c5c0b04c04fd2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=2.34 KB(2400 B), Peak=0(0 B)\n    MemTracker Label=Scanner#QueryId=78208b15e064527-a84c5c0b04c04fcf, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=58.12 MB(60942224 B), Peak=57.41 MB(60202848 B)\n    MemTracker Label=RuntimeFilterMgr, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=BufferedBlockMgr2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=ExecNode:VNewOlapScanNode(customer) (id=1), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=9.55 MB(10013424 B), Peak=10.20 MB(10697136 B)\n    MemTracker Label=VDataStreamSender:78208b15e064527-a84c5c0b04c04fd1, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=59.80 MB(62701880 B), Peak=59.16 MB(62033048 B)\n    MemTracker Label=Scanner#QueryId=78208b15e064527-a84c5c0b04c04fcf, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=RuntimeFilterMgr, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=13.62 KB(13952 B), Peak=0(0 B)\n    MemTracker Label=BufferedBlockMgr2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=ExecNode:VNewOlapScanNode(lineorder) (id=0), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=6.03 MB(6318064 B), Peak=4.02 MB(4217664 B)\n    MemTracker Label=VDataStreamSender:78208b15e064527-a84c5c0b04c04fd0, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=2.34 KB(2400 B), Peak=0(0 B)\n"))))}y.isMDXComponent=!0}}]);