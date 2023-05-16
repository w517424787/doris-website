"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"FQDN",language:"en"},l=void 0,i={unversionedId:"admin-manual/cluster-management/fqdn",id:"admin-manual/cluster-management/fqdn",title:"FQDN",description:"\x3c!--",source:"@site/docs/admin-manual/cluster-management/fqdn.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/fqdn",permalink:"/docs/dev/admin-manual/cluster-management/fqdn",draft:!1,tags:[],version:"current",frontMatter:{title:"FQDN",language:"en"},sidebar:"docs",previous:{title:"load balancing",permalink:"/docs/dev/admin-manual/cluster-management/load-balancing"},next:{title:"Data Backup",permalink:"/docs/dev/admin-manual/data-admin/backup"}},s={},c=[{value:"Preconditions",id:"preconditions",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Enable FQDN for new cluster",id:"enable-fqdn-for-new-cluster",level:3},{value:"Deployment of Doris for K8S",id:"deployment-of-doris-for-k8s",level:3},{value:"Server change IP",id:"server-change-ip",level:3},{value:"Enable FQDN for old cluster",id:"enable-fqdn-for-old-cluster",level:3},{value:"Common problem",id:"common-problem",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fqdn"},"FQDN"),(0,a.kt)("version",{since:"dev"}),(0,a.kt)("p",null,"This article introduces how to enable the use of Apache Doris based on FQDN (Fully Qualified Domain Name). FQDN is the complete domain name of a specific computer or host on the Internet."),(0,a.kt)("p",null,'After Doris supports FQDN, communication between nodes is entirely based on FQDN. When adding various types of nodes, the FQDN should be directly specified. For example, the command to add a BE node is\' ALT SYSTEM ADD BACK END "be_host: eartbeat_service_port",'),(0,a.kt)("p",null,"'be",(0,a.kt)("em",{parentName:"p"},"host' was previously the IP address of the BE node. After starting the FQDN, be")," The host should specify the FQDN of the BE node."),(0,a.kt)("h2",{id:"preconditions"},"Preconditions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"fe.conf file set ",(0,a.kt)("inlineCode",{parentName:"li"},"enable_fqdn_mode = true"),"."),(0,a.kt)("li",{parentName:"ol"},"All machines in the cluster must be configured with a host name."),(0,a.kt)("li",{parentName:"ol"},"The IP address and FQDN corresponding to other machines in the cluster must be specified in the '/etc/hosts' file for each machine in the cluster."),(0,a.kt)("li",{parentName:"ol"},"/The etc/hosts file cannot have duplicate IP addresses.")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("h3",{id:"enable-fqdn-for-new-cluster"},"Enable FQDN for new cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prepare machines, for example, if you want to deploy a cluster of 3FE 3BE, you can prepare 6 machines."),(0,a.kt)("li",{parentName:"ol"},"Each machine returns unique results when executing 'host'. Assuming that the execution results of six machines are fe1, fe2, fe3, be1, be2, and be3, respectively."),(0,a.kt)("li",{parentName:"ol"},"Configure the real IPs corresponding to 6 FQDNs in the '/etc/hosts' of 6 machines, for example:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"172.22.0.1 fe1\n172.22.0.2 fe2\n172.22.0.3 fe3\n172.22.0.4 be1\n172.22.0.5 be2\n172.22.0.6 be3\n"))),(0,a.kt)("li",{parentName:"ol"},"Verification: It can 'ping fe2' on FE1, and can resolve the correct IP address and ping it, indicating that the network environment is available."),(0,a.kt)("li",{parentName:"ol"},"fe.conf settings for each FE node ",(0,a.kt)("inlineCode",{parentName:"li"}," enable_ fqdn_ mode = true"),"."),(0,a.kt)("li",{parentName:"ol"},"Refer to",(0,a.kt)("a",{parentName:"li",href:"/docs/dev/install/standard-deployment"},"Standard deployment"))),(0,a.kt)("h3",{id:"deployment-of-doris-for-k8s"},"Deployment of Doris for K8S"),(0,a.kt)("p",null,"After an unexpected restart of the Pod, K8s cannot guarantee that the Pod's IP will not change, but it can ensure that the domain name remains unchanged. Based on this feature, when Doris enables FQDN, it can ensure that the Pod can still provide services normally after an unexpected restart."),(0,a.kt)("p",null,"Please refer to the method for deploying Doris in K8s",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/install/k8s-deploy"},"Kubernetes Deployment")),(0,a.kt)("h3",{id:"server-change-ip"},"Server change IP"),(0,a.kt)("p",null,"After deploying the cluster according to 'Enable FQDN for new cluster', if you want to change the IP of the machine, whether it is switching network cards or replacing the machine, you only need to change the '/etc/hosts' of each machine."),(0,a.kt)("h3",{id:"enable-fqdn-for-old-cluster"},"Enable FQDN for old cluster"),(0,a.kt)("p",null,"Precondition: The current program supports the syntax 'Alter SYSTEM MODIFY FRONTEND'<fe_ip>:<edit_log_port>'HOSTNAME'<fe_hostname>',\nIf not, upgrade to a version that supports the syntax"),(0,a.kt)("p",null,"Next, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Perform the following operations on the Follower and Observer nodes one by one (and finally on the Master node):"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Stop the node."),(0,a.kt)("li",{parentName:"ol"},"Check if the node has stopped. Execute 'show frontends' through the MySQL client to view the Alive status of the FE node until it becomes false"),(0,a.kt)("li",{parentName:"ol"},"set FQDN for node: ",(0,a.kt)("inlineCode",{parentName:"li"},'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"')),(0,a.kt)("li",{parentName:"ol"},"Modify node configuration. Modify the 'conf/fe. conf' file in the FE root directory and add the configuration: 'enable'",(0,a.kt)("em",{parentName:"li"}," fqdn")," mode = true`"),(0,a.kt)("li",{parentName:"ol"},"Start the node."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enabling FQDN for BE nodes only requires executing the following commands through MySQL, and there is no need to restart BE."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'ALTER SYSTEM MODIFY BACKEND "<backend_ip>:<backend_port>" HOSTNAME "<be_hostname>"')))),(0,a.kt)("h2",{id:"common-problem"},"Common problem"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configuration item enable",(0,a.kt)("em",{parentName:"p"}," fqdn")," Can the mode be changed freely?"),(0,a.kt)("p",{parentName:"li"},"Cannot be changed arbitrarily. To change this configuration, follow the 'Enable FQDN for old cluster' procedure."))))}m.isMDXComponent=!0}}]);