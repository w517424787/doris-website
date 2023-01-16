"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[74832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Remote User Defined Function Service",language:"en"},o=void 0,l={unversionedId:"ecosystem/udf/remote-user-defined-function",id:"version-dev/ecosystem/udf/remote-user-defined-function",title:"Remote User Defined Function Service",description:"\x3c!--",source:"@site/versioned_docs/version-dev/ecosystem/udf/remote-user-defined-function.md",sourceDirName:"ecosystem/udf",slug:"/ecosystem/udf/remote-user-defined-function",permalink:"/docs/dev/ecosystem/udf/remote-user-defined-function",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/ecosystem/udf/remote-user-defined-function.md",tags:[],version:"dev",frontMatter:{title:"Remote User Defined Function Service",language:"en"},sidebar:"docs",previous:{title:"Contribute UDF",permalink:"/docs/dev/ecosystem/udf/contribute-udf"},next:{title:"Native User Defined Function",permalink:"/docs/dev/ecosystem/udf/native-user-defined-function"}},s={},c=[{value:"Write UDF functions",id:"write-udf-functions",level:2},{value:"Copy the proto file",id:"copy-the-proto-file",level:3},{value:"Generated interface",id:"generated-interface",level:3},{value:"Implementing an interface",id:"implementing-an-interface",level:3},{value:"Create UDF",id:"create-udf",level:2},{value:"Use UDF",id:"use-udf",level:2},{value:"Delete UDF",id:"delete-udf",level:2},{value:"Example",id:"example",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-defined-function-rpc"},"User Defined Function Rpc"),(0,a.kt)("p",null,"Remote UDF Service The Remote UDF Service can be accessed through RPC to implement the execution of user-defined functions. Compared with Native UDF implementations, Remote UDF Service has the following advantages and limitations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The advantage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cross-language: UDF services can be written in all languages supported by Protobuf."),(0,a.kt)("li",{parentName:"ul"},"Security: UDF execution failure or crash only affects the UDF Service and does not cause the Doris process to crash."),(0,a.kt)("li",{parentName:"ul"},"Flexibility: Any other Service or library class can be invoked within a UDF Service to meet a wider variety of business requirements."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restrictions on use"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Performance: Compared to Native UDFs, UDF services incur extra network overhead and thus have much lower performance than Native UDFs. At the same time, the implementation of the UDF Service also affects the execution efficiency of the function. Users need to deal with problems such as high concurrency and thread safety by themselves."),(0,a.kt)("li",{parentName:"ul"},"Single line mode and batch mode: Doris's original query execution framework based on row memory would execute one UDF RPC call for each row of data, so the execution efficiency was very poor. However, under the new vectorization execution framework, one UDF RPC call would be executed for each batch of data (2048 rows by default), so the performance was significantly improved. In actual tests, the performance of Remote UDF based on vectorization and batch processing is similar to that of Native UDF based on rowmemory, which can be used for reference.")))),(0,a.kt)("h2",{id:"write-udf-functions"},"Write UDF functions"),(0,a.kt)("p",null,"This section describes how to develop a Remote RPC Service. Samples for the Java version are provided under ",(0,a.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/udf-demo/")," for your reference."),(0,a.kt)("h3",{id:"copy-the-proto-file"},"Copy the proto file"),(0,a.kt)("p",null,"Copy gensrc/proto/function_service.proto and gensrc/proto/types.proto to Rpc service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"function_service.proto",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PFunctionCallRequest",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"function_name\uff1aThe function name, corresponding to the symbol specified when the function was created"),(0,a.kt)("li",{parentName:"ul"},"args\uff1aThe parameters passed by the method"),(0,a.kt)("li",{parentName:"ul"},"context\uff1aQuerying context Information"))),(0,a.kt)("li",{parentName:"ul"},"PFunctionCallResponse",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"result\uff1aReturn result"),(0,a.kt)("li",{parentName:"ul"},"status\uff1aReturn Status, 0 indicates normal"))),(0,a.kt)("li",{parentName:"ul"},"PCheckFunctionRequest",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"function\uff1aFunction related information"),(0,a.kt)("li",{parentName:"ul"},"match_type\uff1aMatching type"))),(0,a.kt)("li",{parentName:"ul"},"PCheckFunctionResponse",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"status\uff1aReturn status, 0 indicates normal")))))),(0,a.kt)("h3",{id:"generated-interface"},"Generated interface"),(0,a.kt)("p",null,"Use protoc generate code, and specific parameters are viewed using protoc -h"),(0,a.kt)("h3",{id:"implementing-an-interface"},"Implementing an interface"),(0,a.kt)("p",null,"The following three methods need to be implemented"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fnCall\uff1aUsed to write computational logic"),(0,a.kt)("li",{parentName:"ul"},"checkFn\uff1aUsed to verify function names, parameters, and return values when creating UDFs"),(0,a.kt)("li",{parentName:"ul"},"handShake\uff1aUsed for interface probe")),(0,a.kt)("h2",{id:"create-udf"},"Create UDF"),(0,a.kt)("p",null,"Currently UDTF are not supported"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION \nname ([,...])\n[RETURNS] rettype\nPROPERTIES (["key"="value"][,...])  \n')),(0,a.kt)("p",null,"Instructions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"symbol"),"Represents the name of the method passed by the RPC call, which must be set\u3002"),(0,a.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"object_file"),"Represents the RPC service address. Currently, a single address and a cluster address in BRPC-compatible format are supported. Refer to the cluster connection mode",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-brpc/blob/master/docs/cn/client.md#%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4"},"Format specification"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"PROPERTIES\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"type"),"Indicates the UDF call type, which is Native by default. Rpc is transmitted when Rpc UDF is used\u3002"),(0,a.kt)("li",{parentName:"ol"},"name: A function belongs to a DB and name is of the form",(0,a.kt)("inlineCode",{parentName:"li"},"dbName"),".",(0,a.kt)("inlineCode",{parentName:"li"},"funcName"),". When ",(0,a.kt)("inlineCode",{parentName:"li"},"dbName")," is not explicitly specified, the db of the current session is used",(0,a.kt)("inlineCode",{parentName:"li"},"dbName"),"\u3002")),(0,a.kt)("p",null,"Sample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION rpc_add(INT, INT) RETURNS INT PROPERTIES (\n  "SYMBOL"="add_int",\n  "OBJECT_FILE"="127.0.0.1:9090",\n  "TYPE"="RPC"\n);\n')),(0,a.kt)("h2",{id:"use-udf"},"Use UDF"),(0,a.kt)("p",null,"Users must have the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," permission of the corresponding database to use UDF/UDAF."),(0,a.kt)("p",null,"The use of UDF is consistent with ordinary function methods. The only difference is that the scope of built-in functions is global, and the scope of UDF is internal to DB. When the link session is inside the data, directly using the UDF name will find the corresponding UDF inside the current DB. Otherwise, the user needs to display the specified UDF database name, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"dbName"),".",(0,a.kt)("inlineCode",{parentName:"p"},"funcName"),"."),(0,a.kt)("h2",{id:"delete-udf"},"Delete UDF"),(0,a.kt)("p",null,"When you no longer need UDF functions, you can delete a UDF function by the following command, you can refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP FUNCTION"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Examples of rpc server implementations and cpp/java/python languages are provided in the ",(0,a.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/")," directory. See the ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," in each directory for details on how to use it."))}p.isMDXComponent=!0}}]);