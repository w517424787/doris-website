"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),k=o,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={title:"get_json_string",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/get_json_string",id:"version-dev/sql-manual/sql-functions/json-functions/get_json_string",title:"get_json_string",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/json-functions/get_json_string.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/get_json_string",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/get_json_string",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/json-functions/get_json_string.md",tags:[],version:"dev",frontMatter:{title:"get_json_string",language:"en"},sidebar:"docs",previous:{title:"get_json_int",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/get_json_int"},next:{title:"json_array",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json_array"}},l={},c=[{value:"get_json_string",id:"get_json_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get_json_string"},"get_json_string"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR get_json_string (VARCHAR json str, VARCHAR json path)")),(0,o.kt)("p",null,'Parse and retrieve the string content of the specified path in the JSON string.\nWhere json_path must start with the $symbol and use. as the path splitter. If the path contains..., double quotation marks can be used to surround it.\nUse [] to denote array subscripts, starting at 0.\nThe content of path cannot contain ",',"[and]",".\nIf the json_string format is incorrect, or the json_path format is incorrect, or matches cannot be found, NULL is returned."),(0,o.kt)("p",null,"In addition, it is recommended to use the jsonb type and jsonb_extract_XXX function performs the same function."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Get the value of key as "k1"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_string(\'{"k1":"v1", "k2":"v2"}\', "$.k1");\n+---------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "k2":"v2"}\', \'$.k1\') |\n+---------------------------------------------------+\n| v1                                                |\n+---------------------------------------------------+\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Get the second element of the array whose key is "my. key"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------------------+\n| e2                                                                           |\n+------------------------------------------------------------------------------+\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Get the first element in an array whose secondary path is k1. key - > K2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\');\n+-----------------------------------------------------------------------+\n| get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------+\n| v1                                                                    |\n+-----------------------------------------------------------------------+\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Get all the values in the array where the key is "k1"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_string(\'[{"k1":"v1"}, {"k2":"v2"}, {"k1":"v3"}, {"k1":"v4"}]\', \'$.k1\');\n+---------------------------------------------------------------------------------+\n| get_json_string(\'[{"k1":"v1"}, {"k2":"v2"}, {"k1":"v3"}, {"k1":"v4"}]\', \'$.k1\') |\n+---------------------------------------------------------------------------------+\n| ["v1","v3","v4"]                                                                |\n+---------------------------------------------------------------------------------+\n')),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"GET_JSON_STRING,GET,JSON,STRING"))}d.isMDXComponent=!0}}]);