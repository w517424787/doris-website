"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[30290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,f=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={title:"FQDN",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/cluster-management/fqdn",id:"version-1.2/admin-manual/cluster-management/fqdn",title:"FQDN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/cluster-management/fqdn.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/fqdn",permalink:"/zh-CN/docs/1.2/admin-manual/cluster-management/fqdn",draft:!1,tags:[],version:"1.2",frontMatter:{title:"FQDN",language:"zh-CN"}},p={},m=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u65b0\u96c6\u7fa4\u542f\u7528 FQDN",id:"\u65b0\u96c6\u7fa4\u542f\u7528-fqdn",level:3},{value:"K8s \u90e8\u7f72 Doris",id:"k8s-\u90e8\u7f72-doris",level:3},{value:"\u670d\u52a1\u5668\u53d8\u66f4 IP",id:"\u670d\u52a1\u5668\u53d8\u66f4-ip",level:3},{value:"\u65e7\u96c6\u7fa4\u542f\u7528 FQDN",id:"\u65e7\u96c6\u7fa4\u542f\u7528-fqdn",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:m},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fqdn"},"FQDN"),(0,a.kt)("version",{since:"dev"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u542f\u7528\u57fa\u4e8e FQDN\uff08Fully Qualified Domain Name\uff0c\u5b8c\u5168\u9650\u5b9a\u57df\u540d \uff09\u4f7f\u7528 Apache Doris\u3002FQDN \u662f Internet \u4e0a\u7279\u5b9a\u8ba1\u7b97\u673a\u6216\u4e3b\u673a\u7684\u5b8c\u6574\u57df\u540d\u3002"),(0,a.kt)("p",null,"Doris \u652f\u6301 FQDN \u4e4b\u540e\uff0c\u5404\u8282\u70b9\u4e4b\u95f4\u901a\u4fe1\u5b8c\u5168\u57fa\u4e8e FQDN\u3002\u6dfb\u52a0\u5404\u7c7b\u8282\u70b9\u65f6\u5e94\u76f4\u63a5\u6307\u5b9a FQDN\uff0c\u4f8b\u5982\u6dfb\u52a0 BE \u8282\u70b9\u7684\u547d\u4ee4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BACKEND "be_host:heartbeat_service_port"'),"\uff0c"),(0,a.kt)("p",null,'"be_host" \u6b64\u524d\u662f BE \u8282\u70b9\u7684 IP\uff0c\u542f\u52a8 FQDN \u540e\uff0cbe_host \u5e94\u6307\u5b9a BE \u8282\u70b9\u7684 FQDN\u3002'),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"fe.conf \u6587\u4ef6 \u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"enable_fqdn_mode = true"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u673a\u5668\u90fd\u5fc5\u987b\u914d\u7f6e\u6709\u4e3b\u673a\u540d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u5728\u96c6\u7fa4\u4e2d\u6bcf\u53f0\u673a\u5668\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/hosts")," \u6587\u4ef6\u4e2d\u6307\u5b9a\u96c6\u7fa4\u4e2d\u5176\u4ed6\u673a\u5668\u5bf9\u5e94\u7684 IP \u5730\u5740\u548c FQDN\u3002"),(0,a.kt)("li",{parentName:"ol"},"/etc/hosts \u6587\u4ef6\u4e2d\u4e0d\u80fd\u6709\u91cd\u590d\u7684 IP \u5730\u5740\u3002")),(0,a.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("h3",{id:"\u65b0\u96c6\u7fa4\u542f\u7528-fqdn"},"\u65b0\u96c6\u7fa4\u542f\u7528 FQDN"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u51c6\u5907\u673a\u5668\uff0c\u4f8b\u5982\u60f3\u90e8\u7f72 3FE 3BE \u7684\u96c6\u7fa4\uff0c\u53ef\u4ee5\u51c6\u5907 6 \u53f0\u673a\u5668\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u53f0\u673a\u5668\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"host"),"\u8fd4\u56de\u7ed3\u679c\u90fd\u552f\u4e00\uff0c\u5047\u8bbe\u516d\u53f0\u673a\u5668\u7684\u6267\u884c\u7ed3\u679c\u5206\u522b\u4e3a fe1,fe2,fe3,be1,be2,be3\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 6 \u53f0\u673a\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/hosts")," \u4e2d\u914d\u7f6e 6 \u4e2a FQDN \u5bf9\u5e94\u7684\u771f\u5b9e IP\uff0c\u4f8b\u5982:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"172.22.0.1 fe1\n172.22.0.2 fe2\n172.22.0.3 fe3\n172.22.0.4 be1\n172.22.0.5 be2\n172.22.0.6 be3\n"))),(0,a.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\uff1a\u53ef\u4ee5\u5728 FE1 \u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"ping fe2")," \u7b49\uff0c\u80fd\u89e3\u6790\u51fa\u6b63\u786e\u7684 IP \u5e76\u4e14\u80fd Ping \u901a\uff0c\u4ee3\u8868\u7f51\u7edc\u73af\u5883\u53ef\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a FE \u8282\u70b9\u7684 fe.conf \u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"enable_fqdn_mode = true"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53c2\u8003",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.2/install/standard-deployment"},"\u6807\u51c6\u90e8\u7f72"))),(0,a.kt)("h3",{id:"k8s-\u90e8\u7f72-doris"},"K8s \u90e8\u7f72 Doris"),(0,a.kt)("p",null,"Pod \u610f\u5916\u91cd\u542f\u540e\uff0cK8s \u4e0d\u80fd\u4fdd\u8bc1 Pod \u7684 IP \u4e0d\u53d1\u751f\u53d8\u5316\uff0c\u4f46\u662f\u80fd\u4fdd\u8bc1\u57df\u540d\u4e0d\u53d8\uff0c\u57fa\u4e8e\u8fd9\u4e00\u7279\u6027\uff0cDoris \u5f00\u542f FQDN \u65f6\uff0c\u80fd\u4fdd\u8bc1 Pod \u610f\u5916\u91cd\u542f\u540e\uff0c\u8fd8\u80fd\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\u3002"),(0,a.kt)("p",null,"K8s \u90e8\u7f72 Doris \u7684\u65b9\u6cd5\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2/install/k8s-deploy"},"K8s \u90e8\u7f72doris")),(0,a.kt)("h3",{id:"\u670d\u52a1\u5668\u53d8\u66f4-ip"},"\u670d\u52a1\u5668\u53d8\u66f4 IP"),(0,a.kt)("p",null,"\u6309\u7167'\u65b0\u96c6\u7fa4\u542f\u7528 FQDN'\u90e8\u7f72\u597d\u96c6\u7fa4\u540e\uff0c\u5982\u679c\u60f3\u53d8\u66f4\u673a\u5668\u7684 IP\uff0c\u65e0\u8bba\u662f\u5207\u6362\u7f51\u5361\uff0c\u6216\u8005\u662f\u66f4\u6362\u673a\u5668\uff0c\u53ea\u9700\u8981\u66f4\u6539\u5404\u673a\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u65e7\u96c6\u7fa4\u542f\u7528-fqdn"},"\u65e7\u96c6\u7fa4\u542f\u7528 FQDN"),(0,a.kt)("p",null,"\u524d\u63d0\u6761\u4ef6\uff1a\u5f53\u524d\u7a0b\u5e8f\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"'),"\u8bed\u6cd5\uff0c\n\u5982\u679c\u4e0d\u652f\u6301\uff0c\u9700\u8981\u5347\u7ea7\u5230\u652f\u6301\u8be5\u8bed\u6cd5\u7684\u7248\u672c"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9010\u4e00\u5bf9 Follower\u3001Observer \u8282\u70b9\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c(\u6700\u540e\u64cd\u4f5c Master \u8282\u70b9)\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u505c\u6b62\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u8282\u70b9\u662f\u5426\u505c\u6b62\u3002\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"show frontends"),"\uff0c\u67e5\u770b\u8be5 FE \u8282\u70b9\u7684 Alive \u72b6\u6001\u76f4\u81f3\u53d8\u4e3a false"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u8282\u70b9\u8bbe\u7f6e FQDN: ",(0,a.kt)("inlineCode",{parentName:"li"},'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"')),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u8282\u70b9\u914d\u7f6e\u3002\u4fee\u6539 FE \u6839\u76ee\u5f55\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"conf/fe.conf"),"\u6587\u4ef6\uff0c\u6dfb\u52a0\u914d\u7f6e\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"enable_fqdn_mode = true")),(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u8282\u70b9\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"BE \u8282\u70b9\u542f\u7528 FQDN \u53ea\u9700\u8981\u901a\u8fc7 MySQL \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4e0d\u9700\u8981\u5bf9 BE \u6267\u884c\u91cd\u542f\u64cd\u4f5c\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM MODIFY BACKEND "<backend_ip>:<backend_port>" HOSTNAME "<be_hostname>"')))),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u9879 enable_fqdn_mode \u53ef\u4ee5\u968f\u610f\u66f4\u6539\u4e48\uff1f"),(0,a.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u968f\u610f\u66f4\u6539\uff0c\u66f4\u6539\u8be5\u914d\u7f6e\u8981\u6309\u7167'\u65e7\u96c6\u7fa4\u542f\u7528 FQDN'\u8fdb\u884c\u64cd\u4f5c\u3002"))))}c.isMDXComponent=!0}}]);