"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[21195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={title:"get_json_int",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/get_json_int",id:"version-dev/sql-manual/sql-functions/json-functions/get_json_int",title:"get_json_int",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/json-functions/get_json_int.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/get_json_int",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/get_json_int",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/json-functions/get_json_int.md",tags:[],version:"dev",frontMatter:{title:"get_json_int",language:"en"},sidebar:"docs",previous:{title:"get_json_double",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/get_json_double"},next:{title:"get_json_string",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/get_json_string"}},l={},c=[{value:"get_json_int",id:"get_json_int",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get_json_int"},"get_json_int"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INT get_json_int(VARCHAR json_str, VARCHAR json_path)")),(0,r.kt)("p",null,'Parse and retrieve the integer content of the specified path in the JSON string.\nWhere json_path must start with the $symbol and use. as the path splitter. If the path contains..., double quotation marks can be used to surround it.\nUse [] to denote array subscripts, starting at 0.\nThe content of path cannot contain ",',"[and]",".\nIf the json_string format is incorrect, or the json_path format is incorrect, or matches cannot be found, NULL is returned."),(0,r.kt)("p",null,"In addition, it is recommended to use the jsonb type and jsonb_extract_XXX function performs the same function."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Get the value of key as "k1"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1":1, "k2":"2"}\', "$.k1");\n+--------------------------------------------+\n| get_json_int(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Get the second element of the array whose key is "my. key"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------+\n| get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------+\n|                                                                2 |\n+------------------------------------------------------------------+\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Get the first element in an array whose secondary path is k1. key - > K2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\');\n+--------------------------------------------------------------+\n| get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\') |\n+--------------------------------------------------------------+\n|                                                            1 |\n+--------------------------------------------------------------+\n')),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"GET_JSON_INT,GET,JSON,INT"))}d.isMDXComponent=!0}}]);