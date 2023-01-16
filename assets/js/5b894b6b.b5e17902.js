"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[36316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"Get FE log file",language:"en"},l=void 0,o={unversionedId:"administrator-guide/http-actions/fe/get-log-file-action",id:"version-0.15/administrator-guide/http-actions/fe/get-log-file-action",title:"Get FE log file",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/http-actions/fe/get-log-file-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/get-log-file-action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/get-log-file-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Get FE log file",language:"en"},sidebar:"docs",previous:{title:"Get Load State",permalink:"/docs/0.15/administrator-guide/http-actions/fe/get-load-state"},next:{title:"Get Small File Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/get-small-file"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-fe-log-file"},"Get FE log file"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HEAD /api/get_log_file")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/get_log_file")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Users can obtain FE log files through the HTTP interface."),(0,i.kt)("p",null,"The HEAD request is used to obtain the log file list of the specified log type. GET request is used to download the specified log file."),(0,i.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")),(0,i.kt)("p",{parentName:"li"},"  Specify the log type. The following types are supported:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fe.audit.log"),": Audit log of Frontend."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"file")),(0,i.kt)("p",{parentName:"li"},"  Specify file name"))),(0,i.kt)("h2",{id:"request-body"},"Request body"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')),(0,i.kt)("p",{parentName:"li"},"  The returned header lists all current log files of the specified type and the size of each file.\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")),(0,i.kt)("p",{parentName:"li"},"  Download the specified log file in text form\n"))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get the log file list of the corresponding type"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'HEAD /api/get_log_file?type=fe.audit.log\n\nResponse:\n\nHTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')),(0,i.kt)("p",{parentName:"li"},"In the returned header, the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_infos")," field displays the file list and the corresponding file size (in bytes) in json format")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download log file"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"GET /api/get_log_file?type=fe.audit.log&file=fe.audit.log.20190528.1\n\nResponse:\n\n< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=fe.audit.log\n< Content-Type: application/octet-stream;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n")))))}u.isMDXComponent=!0}}]);