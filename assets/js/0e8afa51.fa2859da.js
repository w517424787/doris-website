"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[27504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"Compiling with LDB toolchain",language:"en"},a=void 0,l={unversionedId:"install/source-install/compilation-with-ldb-toolchain",id:"install/source-install/compilation-with-ldb-toolchain",title:"Compiling with LDB toolchain",description:"\x3c!--",source:"@site/docs/install/source-install/compilation-with-ldb-toolchain.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-with-ldb-toolchain",permalink:"/docs/install/source-install/compilation-with-ldb-toolchain",draft:!1,tags:[],version:"current",frontMatter:{title:"Compiling with LDB toolchain",language:"en"},sidebar:"docs",previous:{title:"Compilation",permalink:"/docs/install/source-install/compilation"},next:{title:"Compilation With Arm",permalink:"/docs/install/source-install/compilation-arm"}},p={},c=[{value:"Prepare the environment",id:"prepare-the-environment",level:2},{value:"Compiling Doris",id:"compiling-doris",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compiling-with-ldb-toolchain"},"Compiling with LDB toolchain"),(0,r.kt)("p",null,"This document describes how to compile Doris using the LDB toolchain. This method is currently used as a supplement to the Docker compilation method to facilitate developers and users without a Docker environment to compile Doris source code."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can still compile the latest code using the Docker development image: ",(0,r.kt)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird"},"Amos Bird")," for this contribution.")),(0,r.kt)("h2",{id:"prepare-the-environment"},"Prepare the environment"),(0,r.kt)("p",null,"This works for most Linux distributions (CentOS, Ubuntu, etc.)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download ",(0,r.kt)("inlineCode",{parentName:"p"},"ldb_toolchain_gen.sh")),(0,r.kt)("p",{parentName:"li"},"The latest ",(0,r.kt)("inlineCode",{parentName:"p"},"ldb_toolchain_gen.sh")," can be downloaded from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases"},"here"),". This script is used to generate the ldb toolchain."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, you can visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen"},"https://github.com/amosbird/ldb_toolchain_gen")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the following command to generate the ldb toolchain"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")),(0,r.kt)("p",{parentName:"li"},"where ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/")," is the directory where the toolchain is installed."),(0,r.kt)("p",{parentName:"li"},"After successful execution, the following directory structure will be created under ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/ldb_toolchain/"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 include\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 share\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 usr\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install other compiled components"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u131-linux-x64.tar.gz"},"Java8")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz"},"Apache Maven 3.6.3")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz"},"Node v12.13.0"))),(0,r.kt)("p",{parentName:"li"},"Different Linux distributions may have different components included by default.Therefore some additional components may need to be installed.The following takes centos6 as an example, other distributions are similar:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\n# install autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\n# install bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download Doris source code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/doris.git\n")),(0,r.kt)("p",{parentName:"li"},"After downloading, go to the Doris source directory, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh"),", file, and set the PATH environment variable, e.g."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export JAVA_HOME=/path/to/java/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb_toolchain/bin:$PATH\n")))),(0,r.kt)("h2",{id:"compiling-doris"},"Compiling Doris"),(0,r.kt)("p",null,"Enter the Doris source code directory and execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,r.kt)("p",null,"Check whether the compilation machine supports the avx2 instruction set"),(0,r.kt)("p",null,"If it is not supported, use the following command to compile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ USE_AVX2=0 sh build.sh\n")),(0,r.kt)("p",null,"If supported, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"sh build.sh")," directly"),(0,r.kt)("p",null,"This script will compile the third-party libraries first and then the Doris components (FE, BE) later. The compiled output is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"output/")," directory."))}u.isMDXComponent=!0}}]);