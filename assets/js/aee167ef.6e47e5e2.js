"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[24323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var s=2;s<l;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const l={title:"Colocate Join",language:"en"},i=void 0,r={unversionedId:"sql-reference/sql-statements/Data-Definition/Colocate-Join",id:"version-0.15/sql-reference/sql-statements/Data-Definition/Colocate-Join",title:"Colocate Join",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Definition/Colocate-Join.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/Colocate-Join",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/Colocate-Join",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Colocate Join",language:"en"},sidebar:"docs",previous:{title:"CREATE VIEW",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-VIEW"},next:{title:"DROP DATABASE",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/DROP-DATABASE"}},c={},s=[{value:"Description",id:"description",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colocate-join"},"Colocate Join"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Colocate/Local Join means that when multiple nodes are Join, there is no data movement and network transmission, and each node is only Join locally.\nThe premise of Join locally is to import data from the same Join Key into a fixed node according to the same rules."),(0,a.kt)("p",null,"1 How To Use:"),(0,a.kt)("p",null,"Simply add the property colocate_with when building a table. The value of colocate_with can be set to any one of the same set of colocate tables.\nHowever, you need to ensure that tables in the colocate_with attribute are created first."),(0,a.kt)("p",null,"If you need to Colocate Join table t1 and t2, you can build tables according to the following statements:"),(0,a.kt)("p",null,"CREATE TABLE ",(0,a.kt)("inlineCode",{parentName:"p"},"t1")," (\n",(0,a.kt)("inlineCode",{parentName:"p"},"id"),' int(11) COMMENT "",\n\'value ',(0,a.kt)("inlineCode",{parentName:"p"},' varchar (8) COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY('),"id",(0,a.kt)("inlineCode",{parentName:"p"},")\nDISTRIBUTED BY HASH("),'id`) BUCKETS 10\nPROPERTIES (\n"colocate_with" = "t1"\n);'),(0,a.kt)("p",null,"CREATE TABLE ",(0,a.kt)("inlineCode",{parentName:"p"},"t2")," (\n",(0,a.kt)("inlineCode",{parentName:"p"},"id"),' int(11) COMMENT "",\n\'value ',(0,a.kt)("inlineCode",{parentName:"p"},' varchar (8) COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY('),"id",(0,a.kt)("inlineCode",{parentName:"p"},")\nDISTRIBUTED BY HASH("),'id`) BUCKETS 10\nPROPERTIES (\n"colocate_with" = "t1"\n);'),(0,a.kt)("p",null,"2 Colocate Join \u76ee\u524d\u7684\u9650\u5236:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Colcoate Table must be an OLAP-type table"),(0,a.kt)("li",{parentName:"ol"},"The BUCKET number of tables with the same colocate_with attribute must be the same"),(0,a.kt)("li",{parentName:"ol"},"The number of copies of tables with the same colocate_with attribute must be the same"),(0,a.kt)("li",{parentName:"ol"},"Data types of DISTRIBUTED Columns for tables with the same colocate_with attribute must be the same")),(0,a.kt)("p",null,"3 Colocate Join's applicable scenario:"),(0,a.kt)("p",null,"Colocate Join is well suited for scenarios where tables are bucketed according to the same field and high frequency according to the same field Join."),(0,a.kt)("p",null,"4 FAQ:"),(0,a.kt)("p",null,"Q: \u652f\u6301\u591a\u5f20\u8868\u8fdb\u884cColocate Join \u5417?"),(0,a.kt)("p",null,"A: 25903;. 25345"),(0,a.kt)("p",null,"Q: Do you support Colocate table and normal table Join?"),(0,a.kt)("p",null,"A: 25903;. 25345"),(0,a.kt)("p",null,"Q: Does the Colocate table support Join with non-bucket Key?"),(0,a.kt)("p",null,"A: Support: Join that does not meet Colocate Join criteria will use Shuffle Join or Broadcast Join"),(0,a.kt)("p",null,"Q: How do you determine that Join is executed according to Colocate Join?"),(0,a.kt)("p",null,"A: The child node of Hash Join in the result of explain is Colocate Join if it is OlapScanNode directly without Exchange Node."),(0,a.kt)("p",null,"Q: How to modify the colocate_with attribute?"),(0,a.kt)("p",null,'A: ALTER TABLE example_db.my_table set ("colocate_with"="target_table");'),(0,a.kt)("p",null,"Q: 229144; colcoate join?"),(0,a.kt)("p",null,"A: set disable_colocate_join = true; \u5c31\u53ef\u4ee5\u7981\u7528Colocate Join, \u67e5\u8be2\u65f6\u5c31\u4f1a\u4f7f\u7528Shuffle Join \u548cBroadcast Join"),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"COLOCATE, JOIN, CREATE TABLE"))}d.isMDXComponent=!0}}]);