"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[33494],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>_});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",j={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=i(n),b=o,_=p["".concat(c,".").concat(b)]||p[b]||j[b]||a;return n?r.createElement(_,s(s({ref:e},u),{},{components:n})):r.createElement(_,s({ref:e},u))}));function _(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=b;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},43970:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>j,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={title:"jsonb_extract",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/jsonb_extract",id:"version-dev/sql-manual/sql-functions/json-functions/jsonb_extract",title:"jsonb_extract",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/json-functions/jsonb_extract.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/jsonb_extract",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/jsonb_extract",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/json-functions/jsonb_extract.md",tags:[],version:"dev",frontMatter:{title:"jsonb_extract",language:"zh-CN"},sidebar:"docs",previous:{title:"jsonb_parse",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/jsonb_parse"},next:{title:"jsonb_exists_path",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/jsonb_exists_path"}},c={},i=[{value:"jsonb_extract",id:"jsonb_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},p="wrapper";function j(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"jsonb_extract"},"jsonb_extract"),(0,o.kt)("version",{since:"1.2.0"},(0,o.kt)("p",null,"jsonb_extract")),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"JSONB jsonb_extract(JSONB j, VARCHAR json_path)\nBOOLEAN jsonb_extract_isnull(JSONB j, VARCHAR json_path)\nBOOLEAN jsonb_extract_bool(JSONB j, VARCHAR json_path)\nINT jsonb_extract_int(JSONB j, VARCHAR json_path)\nBIGINT jsonb_extract_bigint(JSONB j, VARCHAR json_path)\nDOUBLE jsonb_extract_double(JSONB j, VARCHAR json_path)\nSTRING jsonb_extract_string(JSONB j, VARCHAR json_path)\n")),(0,o.kt)("p",null,"jsonb_extract\u662f\u4e00\u7cfb\u5217\u51fd\u6570\uff0c\u4eceJSONB\u7c7b\u578b\u7684\u6570\u636e\u4e2d\u63d0\u53d6json_path\u6307\u5b9a\u7684\u5b57\u6bb5\uff0c\u6839\u636e\u8981\u63d0\u53d6\u7684\u5b57\u6bb5\u7c7b\u578b\u4e0d\u540c\u63d0\u4f9b\u4e0d\u540c\u7684\u7cfb\u5217\u51fd\u6570\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"jsonb_extract\u8fd4\u56deJSONB\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"jsonb_extract_isnull\u8fd4\u56de\u662f\u5426\u4e3ajson null\u7684BOOLEAN\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"jsonb_extract_bool\u8fd4\u56deBOOLEAN\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"jsonb_extract_int\u8fd4\u56deINT\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"jsonb_extract_bigint\u8fd4\u56deBIGINT\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"jsonb_extract_double\u8fd4\u56deDOUBLE\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"jsonb_extract_STRING\u8fd4\u56deSTRING\u7c7b\u578b")),(0,o.kt)("p",null,"\u7279\u6b8a\u60c5\u51b5\u5904\u7406\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679cjson_path\u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSON\u4e2d\u4e0d\u5b58\u5728\uff0c\u8fd4\u56deNULL"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679cjson_path\u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSON\u4e2d\u7684\u5b9e\u9645\u7c7b\u578b\u548cjsonb_extract_t\u6307\u5b9a\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u5982\u679c\u80fd\u65e0\u635f\u8f6c\u6362\u6210\u6307\u5b9a\u7c7b\u578b\u8fd4\u56de\u6307\u5b9a\u7c7b\u578bt\uff0c\u5982\u679c\u4e0d\u80fd\u5219\u8fd4\u56deNULL")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/JSONB"},"jsonb tutorial")," \u4e2d\u7684\u793a\u4f8b"),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"JSONB, JSON, jsonb_extract, jsonb_extract_isnull, jsonb_extract_bool, jsonb_extract_int, jsonb_extract_bigint, jsonb_extract_double, jsonb_extract_string"))}j.isMDXComponent=!0}}]);