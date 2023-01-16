"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[67409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"HLL_UNION_AGG",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/hll_union_agg",id:"sql-manual/sql-functions/aggregate-functions/hll_union_agg",title:"HLL_UNION_AGG",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/hll_union_agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/hll_union_agg",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/hll_union_agg",draft:!1,tags:[],version:"current",frontMatter:{title:"HLL_UNION_AGG",language:"en"},sidebar:"docs",previous:{title:"GROUP_CONCAT",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/group_concat"},next:{title:"MAX",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/max"}},u={},s=[{value:"HLL_UNION_AGG",id:"hll_union_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hll_union_agg"},"HLL_UNION_AGG"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HLL_UNION_AGG(hll)")),(0,a.kt)("p",null,"HLL is an engineering implementation based on HyperLog algorithm, which is used to save the intermediate results of HyperLog calculation process."),(0,a.kt)("p",null,"It can only be used as the value column type of the table and reduce the amount of data through aggregation to achieve the purpose of speeding up the query."),(0,a.kt)("p",null,"Based on this, we get an estimate with an error of about 1%. The HLL column is generated by other columns or data imported into the data."),(0,a.kt)("p",null,"When importing, hll_hash function is used to specify which column in data is used to generate HLL column. It is often used to replace count distinct, and to calculate UV quickly in business by combining rollup."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MySQL > select HLL_UNION_AGG(uv_set) from test_uv;;\n+-------------------------+\nTHE COURT OF JUSTICE OF THE EUROPEAN COMMUNITIES,\n+-------------------------+\n| 17721                   |\n+-------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"HLL_UNION_AGG,HLL,UNION,AGG"))}g.isMDXComponent=!0}}]);