"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[2942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=u(n),g=l,k=d["".concat(p,".").concat(g)]||d[g]||s[g]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=g;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const i={title:"Doris\u5b58\u50a8\u6587\u4ef6\u683c\u5f0f\u4f18\u5316",language:"zh-CN"},o=void 0,r={unversionedId:"design/doris_storage_optimization",id:"design/doris_storage_optimization",title:"Doris\u5b58\u50a8\u6587\u4ef6\u683c\u5f0f\u4f18\u5316",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/design/doris_storage_optimization.md",sourceDirName:"design",slug:"/design/doris_storage_optimization",permalink:"/zh-CN/community/design/doris_storage_optimization",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris\u5b58\u50a8\u6587\u4ef6\u683c\u5f0f\u4f18\u5316",language:"zh-CN"},sidebar:"community",previous:{title:"\u5b89\u5168",permalink:"/zh-CN/community/security"},next:{title:"GROUPING SETS \u8bbe\u8ba1\u6587\u6863",permalink:"/zh-CN/community/design/grouping_sets_design"}},p={},u=[{value:"\u6587\u4ef6\u683c\u5f0f",id:"\u6587\u4ef6\u683c\u5f0f",level:2},{value:"DataPage",id:"datapage",level:3},{value:"Bloom Filter Pages",id:"bloom-filter-pages",level:3},{value:"Ordinal Index Page",id:"ordinal-index-page",level:3},{value:"Short Key Index page",id:"short-key-index-page",level:3},{value:"Column\u7684\u5176\u4ed6\u7d22\u5f15",id:"column\u7684\u5176\u4ed6\u7d22\u5f15",level:3},{value:"\u5143\u6570\u636e\u5b9a\u4e49",id:"\u5143\u6570\u636e\u5b9a\u4e49",level:3},{value:"\u8bfb\u5199\u903b\u8f91",id:"\u8bfb\u5199\u903b\u8f91",level:2},{value:"\u5199\u5165",id:"\u5199\u5165",level:3},{value:"\u8bfb\u53d6",id:"\u8bfb\u53d6",level:3},{value:"\u7f16\u7801",id:"\u7f16\u7801",level:2},{value:"\u538b\u7f29",id:"\u538b\u7f29",level:2},{value:"TODO",id:"todo",level:2}],m={toc:u},d="wrapper";function s(e){let{components:t,...i}=e;return(0,l.kt)(d,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"doris\u5b58\u50a8\u6587\u4ef6\u683c\u5f0f\u4f18\u5316"},"Doris\u5b58\u50a8\u6587\u4ef6\u683c\u5f0f\u4f18\u5316"),(0,l.kt)("h2",{id:"\u6587\u4ef6\u683c\u5f0f"},"\u6587\u4ef6\u683c\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(15309).Z,width:"640",height:"825"})),(0,l.kt)("center",null,"\u56fe1. doris segment\u6587\u4ef6\u683c\u5f0f"),(0,l.kt)("p",null,"\u6587\u4ef6\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5f00\u59cb\u662f8\u4e2a\u5b57\u8282\u7684magic code\uff0c\u7528\u4e8e\u8bc6\u522b\u6587\u4ef6\u683c\u5f0f\u548c\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"Data Region\uff1a\u7528\u4e8e\u5b58\u50a8\u5404\u4e2a\u5217\u7684\u6570\u636e\u4fe1\u606f\uff0c\u8fd9\u91cc\u7684\u6570\u636e\u662f\u6309\u9700\u5206page\u52a0\u8f7d\u7684"),(0,l.kt)("li",{parentName:"ul"},"Index Region: doris\u4e2d\u5c06\u5404\u4e2a\u5217\u7684index\u6570\u636e\u7edf\u4e00\u5b58\u50a8\u5728Index Region\uff0c\u8fd9\u91cc\u7684\u6570\u636e\u4f1a\u6309\u7167\u5217\u7c92\u5ea6\u8fdb\u884c\u52a0\u8f7d\uff0c\u6240\u4ee5\u8ddf\u5217\u7684\u6570\u636e\u4fe1\u606f\u5206\u5f00\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"Footer\u4fe1\u606f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FileFooterPB:\u5b9a\u4e49\u6587\u4ef6\u7684\u5143\u6570\u636e\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"4\u4e2a\u5b57\u8282\u7684footer pb\u5185\u5bb9\u7684checksum"),(0,l.kt)("li",{parentName:"ul"},"4\u4e2a\u5b57\u8282\u7684FileFooterPB\u6d88\u606f\u957f\u5ea6\uff0c\u7528\u4e8e\u8bfb\u53d6FileFooterPB"),(0,l.kt)("li",{parentName:"ul"},"8\u4e2a\u5b57\u8282\u7684MAGIC CODE\uff0c\u4e4b\u6240\u4ee5\u5728\u672b\u4f4d\u5b58\u50a8\uff0c\u662f\u65b9\u4fbf\u4e0d\u540c\u7684\u573a\u666f\u8fdb\u884c\u6587\u4ef6\u7c7b\u578b\u7684\u8bc6\u522b")))),(0,l.kt)("p",null,"\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u6309\u7167page\u7684\u65b9\u5f0f\u8fdb\u884c\u7ec4\u7ec7\uff0cpage\u662f\u7f16\u7801\u548c\u538b\u7f29\u7684\u57fa\u672c\u5355\u4f4d\u3002\u73b0\u5728\u7684page\u7c7b\u578b\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd:"),(0,l.kt)("h3",{id:"datapage"},"DataPage"),(0,l.kt)("p",null,"DataPage\u5206\u4e3a\u4e24\u79cd\uff1anullable\u548cnon-nullable\u7684data page\u3002"),(0,l.kt)("p",null,"nullable\u7684data page\u5185\u5bb9\u5305\u62ec\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n                 +----------------+\n                 |  value count   |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 | bitmap length  |\n                 |----------------|\n                 |  null bitmap   |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")),(0,l.kt)("p",null,"non-nullable data page\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"                 |----------------|\n                 |   value count  |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")),(0,l.kt)("p",null,"\u5176\u4e2d\u5404\u4e2a\u5b57\u6bb5\u542b\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"value count",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8868\u793apage\u4e2d\u7684\u884c\u6570"))),(0,l.kt)("li",{parentName:"ul"},"first row id",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"page\u4e2d\u7b2c\u4e00\u884c\u7684\u884c\u53f7"))),(0,l.kt)("li",{parentName:"ul"},"bitmap length",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8868\u793a\u63a5\u4e0b\u6765bitmap\u7684\u5b57\u8282\u6570"))),(0,l.kt)("li",{parentName:"ul"},"null bitmap",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8868\u793anull\u4fe1\u606f\u7684bitmap"))),(0,l.kt)("li",{parentName:"ul"},"data",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7ecf\u8fc7encoding\u548ccompress\u4e4b\u540e\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u6570\u636e\u7684\u5934\u90e8\u4fe1\u606f\u4e2d\u5199\u5165\uff1ais_compressed"),(0,l.kt)("li",{parentName:"ul"},"\u5404\u79cd\u4e0d\u540c\u7f16\u7801\u7684data\u9700\u8981\u5728\u5934\u90e8\u4fe1\u606f\u5199\u5165\u4e00\u4e9b\u5b57\u6bb5\u4fe1\u606f\uff0c\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u89e3\u6790",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TODO\uff1a\u6dfb\u52a0\u5404\u79cdencoding\u7684header\u4fe1\u606f"))))),(0,l.kt)("li",{parentName:"ul"},"checksum",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8page\u7c92\u5ea6\u7684\u6821\u9a8c\u548c\uff0c\u5305\u62ecpage\u7684header\u548c\u4e4b\u540e\u7684\u5b9e\u9645\u6570\u636e")))),(0,l.kt)("h3",{id:"bloom-filter-pages"},"Bloom Filter Pages"),(0,l.kt)("p",null,"\u9488\u5bf9\u6bcf\u4e2abloom filter\u5217,\u4f1a\u5728page\u7684\u7c92\u5ea6\u76f8\u5e94\u7684\u751f\u6210\u4e00\u4e2abloom filter\u7684page\uff0c\u4fdd\u5b58\u5728bloom filter pages\u533a\u57df"),(0,l.kt)("h3",{id:"ordinal-index-page"},"Ordinal Index Page"),(0,l.kt)("p",null,"\u9488\u5bf9\u6bcf\u4e2a\u5217\uff0c\u90fd\u4f1a\u6309\u7167page\u7c92\u5ea6\uff0c\u5efa\u7acb\u884c\u53f7\u7684\u7a00\u758f\u7d22\u5f15\u3002\u5185\u5bb9\u4e3a\u8fd9\u4e2apage\u7684\u8d77\u59cb\u884c\u7684\u884c\u53f7\u5230\u8fd9\u4e2ablock\u7684\u6307\u9488\uff08\u5305\u62ecoffset\u548clength\uff09"),(0,l.kt)("h3",{id:"short-key-index-page"},"Short Key Index page"),(0,l.kt)("p",null,"\u6211\u4eec\u4f1a\u6bcf\u9694N\u884c\uff08\u53ef\u914d\u7f6e\uff09\u751f\u6210\u4e00\u4e2ashort key\u7684\u7a00\u758f\u7d22\u5f15\uff0c\u7d22\u5f15\u7684\u5185\u5bb9\u4e3a\uff1ashort key->\u884c\u53f7(ordinal)"),(0,l.kt)("h3",{id:"column\u7684\u5176\u4ed6\u7d22\u5f15"},"Column\u7684\u5176\u4ed6\u7d22\u5f15"),(0,l.kt)("p",null,"\u8be5\u683c\u5f0f\u8bbe\u8ba1\u652f\u6301\u540e\u7eed\u6269\u5c55\u5176\u4ed6\u7684\u7d22\u5f15\u4fe1\u606f\uff0c\u6bd4\u5982bitmap\u7d22\u5f15\uff0cspatial\u7d22\u5f15\u7b49\u7b49\uff0c\u53ea\u9700\u8981\u5c06\u9700\u8981\u7684\u6570\u636e\u5199\u5230\u73b0\u6709\u7684\u5217\u6570\u636e\u540e\u9762\uff0c\u5e76\u4e14\u6dfb\u52a0\u5bf9\u5e94\u7684\u5143\u6570\u636e\u5b57\u6bb5\u5230FileFooterPB\u4e2d"),(0,l.kt)("h3",{id:"\u5143\u6570\u636e\u5b9a\u4e49"},"\u5143\u6570\u636e\u5b9a\u4e49"),(0,l.kt)("p",null,"SegmentFooterPB\u7684\u5b9a\u4e49\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"message ColumnPB {\n    required int32 unique_id = 1;   // \u8fd9\u91cc\u4f7f\u7528column id, \u4e0d\u4f7f\u7528column name\u662f\u56e0\u4e3a\u8ba1\u5212\u652f\u6301\u4fee\u6539\u5217\u540d\n    optional string name = 2;   // \u5217\u7684\u540d\u5b57,  \u5f53name\u4e3a__DORIS_DELETE_SIGN__, \u8868\u793a\u8be5\u5217\u4e3a\u9690\u85cf\u7684\u5220\u9664\u5217\n    required string type = 3;   // \u5217\u7c7b\u578b\n    optional bool is_key = 4;   // \u662f\u5426\u662f\u4e3b\u952e\u5217\n    optional string aggregation = 5;    // \u805a\u5408\u65b9\u5f0f\n    optional bool is_nullable = 6;      // \u662f\u5426\u6709null\n    optional bytes default_value = 7;   // \u9ed8\u8ba4\u503c\n    optional int32 precision = 8;       // \u7cbe\u5ea6\n    optional int32 frac = 9;\n    optional int32 length = 10;         // \u957f\u5ea6\n    optional int32 index_length = 11;   // \u7d22\u5f15\u957f\u5ea6\n    optional bool is_bf_column = 12;    // \u662f\u5426\u6709bf\u8bcd\u5178\n    optional bool has_bitmap_index = 15 [default=false];  // \u662f\u5426\u6709bitmap\u7d22\u5f15\n}\n\n// page\u504f\u79fb\nmessage PagePointerPB {\n    required uint64 offset; // page\u5728\u6587\u4ef6\u4e2d\u7684\u504f\u79fb\n    required uint32 length; // page\u7684\u5927\u5c0f\n}\n\nmessage MetadataPairPB {\n  optional string key = 1;\n  optional bytes value = 2;\n}\n\nmessage ColumnMetaPB {\n    optional ColumnMessage encoding; // \u7f16\u7801\u65b9\u5f0f\n\n    optional PagePointerPB dict_page // \u8bcd\u5178page\n    repeated PagePointerPB bloom_filter_pages; // bloom filter\u8bcd\u5178\u4fe1\u606f\n    optional PagePointerPB ordinal_index_page; // \u884c\u53f7\u7d22\u5f15\u6570\u636e\n    optional PagePointerPB page_zone_map_page; // page\u7ea7\u522b\u7edf\u8ba1\u4fe1\u606f\u7d22\u5f15\u6570\u636e\n\n    optional PagePointerPB bitmap_index_page; // bitmap\u7d22\u5f15\u6570\u636e\n\n    optional uint64 data_footprint; // \u5217\u4e2d\u7d22\u5f15\u7684\u5927\u5c0f\n    optional uint64 index_footprint; // \u5217\u4e2d\u6570\u636e\u7684\u5927\u5c0f\n    optional uint64 raw_data_footprint; // \u539f\u59cb\u5217\u6570\u636e\u5927\u5c0f\n\n    optional CompressKind compress_kind; // \u5217\u7684\u538b\u7f29\u65b9\u5f0f\n\n    optional ZoneMapPB column_zone_map; //\u6587\u4ef6\u7ea7\u522b\u7684\u8fc7\u6ee4\u6761\u4ef6\n    repeated MetadataPairPB column_meta_datas;\n}\n\nmessage SegmentFooterPB {\n    optional uint32 version = 2 [default = 1]; // \u7528\u4e8e\u7248\u672c\u517c\u5bb9\u548c\u5347\u7ea7\u4f7f\u7528\n    repeated ColumnPB schema = 5; // \u5217Schema\n  optional uint64 num_values = 4; // \u6587\u4ef6\u4e2d\u4fdd\u5b58\u7684\u884c\u6570\n  optional uint64 index_footprint = 7; // \u7d22\u5f15\u5927\u5c0f\n  optional uint64 data_footprint = 8; // \u6570\u636e\u5927\u5c0f\n    optional uint64 raw_data_footprint = 8; // \u539f\u59cb\u6570\u636e\u5927\u5c0f\n\n  optional CompressKind compress_kind = 9 [default = COMPRESS_LZO]; // \u538b\u7f29\u65b9\u5f0f\n  repeated ColumnMetaPB column_metas = 10; // \u5217\u5143\u6570\u636e\n    optional PagePointerPB key_index_page; // short key\u7d22\u5f15page\n}\n\n")),(0,l.kt)("h2",{id:"\u8bfb\u5199\u903b\u8f91"},"\u8bfb\u5199\u903b\u8f91"),(0,l.kt)("h3",{id:"\u5199\u5165"},"\u5199\u5165"),(0,l.kt)("p",null,"\u5927\u4f53\u7684\u5199\u5165\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5199\u5165magic"),(0,l.kt)("li",{parentName:"ol"},"\u6839\u636eschema\u4fe1\u606f\uff0c\u751f\u6210\u5bf9\u5e94\u7684ColumnWriter\uff0c\u6bcf\u4e2aColumnWriter\u6309\u7167\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u83b7\u53d6\u5bf9\u5e94\u7684encoding\u4fe1\u606f\uff08\u53ef\u914d\u7f6e\uff09\uff0c\u6839\u636eencoding\uff0c\u751f\u6210\u5bf9\u5e94\u7684encoder"),(0,l.kt)("li",{parentName:"ol"},"\u8c03\u7528encoder->add(value)\u8fdb\u884c\u6570\u636e\u5199\u5165\uff0c\u6bcf\u9694K\u884c\uff0c\u751f\u6210\u4e00\u4e2ashort key index entry\uff0c\u5e76\u4e14\uff0c\u5982\u679c\u5f53\u524d\u7684page\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\uff08\u5927\u5c0f\u8d85\u8fc71M\u6216\u8005\u884c\u6570\u4e3aK\uff09\uff0c\u5c31\u751f\u6210\u4e00\u4e2a\u65b0\u7684page\uff0c\u7f13\u5b58\u5728\u5185\u5b58\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u65ad\u7684\u5faa\u73af\u6b65\u9aa43\uff0c\u76f4\u5230\u6570\u636e\u5199\u5165\u5b8c\u6210\u3002\u5c06\u5404\u4e2a\u5217\u7684\u6570\u636e\u4f9d\u5e8f\u5237\u5165\u6587\u4ef6\u4e2d"),(0,l.kt)("li",{parentName:"ol"},"\u751f\u6210FileFooterPB\u4fe1\u606f\uff0c\u5199\u5165\u6587\u4ef6\u4e2d\u3002")),(0,l.kt)("p",null,"\u76f8\u5173\u7684\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"short key\u7684\u7d22\u5f15\u5982\u4f55\u751f\u6210\uff1f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u73b0\u5728\u8fd8\u662f\u6309\u7167\u6bcf\u9694\u591a\u5c11\u884c\u751f\u6210\u4e00\u4e2ashort key\u7684\u7a00\u758f\u7d22\u5f15\uff0c\u4fdd\u6301\u6bcf\u96941024\u884c\u751f\u6210\u4e00\u4e2ashort\u7684\u7a00\u758f\u7d22\u5f15,\u5177\u4f53\u7684\u5185\u5bb9\u662f\uff1ashort key -> ordinal"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ordinal\u7d22\u5f15\u91cc\u9762\u5e94\u8be5\u5b58\u4ec0\u4e48\uff1f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8page\u7684\u7b2c\u4e00\u4e2aordinal\u5230page pointer\u7684\u6620\u5c04\u4fe1\u606f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u540cencoding\u7c7b\u578b\u7684page\u91cc\u5b58\u4ec0\u4e48\uff1f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bcd\u5178\u538b\u7f29"),(0,l.kt)("li",{parentName:"ul"},"plain"),(0,l.kt)("li",{parentName:"ul"},"rle"),(0,l.kt)("li",{parentName:"ul"},"bshuf")))),(0,l.kt)("h3",{id:"\u8bfb\u53d6"},"\u8bfb\u53d6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bfb\u53d6\u6587\u4ef6\u7684magic\uff0c\u5224\u65ad\u6587\u4ef6\u7c7b\u578b\u548c\u7248\u672c"),(0,l.kt)("li",{parentName:"ol"},"\u8bfb\u53d6FileFooterPB\uff0c\u8fdb\u884cchecksum\u6821\u9a8c"),(0,l.kt)("li",{parentName:"ol"},"\u6309\u7167\u9700\u8981\u7684\u5217\uff0c\u8bfb\u53d6short key\u7d22\u5f15\u548c\u5bf9\u5e94\u5217\u7684\u6570\u636eordinal\u7d22\u5f15\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528start key\u548cend key\uff0c\u901a\u8fc7short key\u7d22\u5f15\u5b9a\u4f4d\u5230\u8981\u8bfb\u53d6\u7684\u884c\u53f7\uff0c\u7136\u540e\u901a\u8fc7ordinal\u7d22\u5f15\u786e\u5b9a\u9700\u8981\u8bfb\u53d6\u7684row ranges, \u540c\u65f6\u9700\u8981\u901a\u8fc7\u7edf\u8ba1\u4fe1\u606f\u3001bitmap\u7d22\u5f15\u7b49\u8fc7\u6ee4\u9700\u8981\u8bfb\u53d6\u7684row ranges"),(0,l.kt)("li",{parentName:"ol"},"\u7136\u540e\u6309\u7167row ranges\u901a\u8fc7ordinal\u7d22\u5f15\u8bfb\u53d6\u884c\u7684\u6570\u636e")),(0,l.kt)("p",null,"\u76f8\u5173\u7684\u95ee\u9898\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u5b9e\u73b0\u5728page\u5185\u90e8\u5feb\u901f\u7684\u5b9a\u4f4d\u5230\u67d0\u4e00\u884c\uff1f"),(0,l.kt)("p",{parentName:"li"},"page\u5185\u90e8\u662f\u7684\u6570\u636e\u662f\u7ecf\u8fc7encoding\u7684\uff0c\u65e0\u6cd5\u5feb\u901f\u8fdb\u884c\u884c\u7ea7\u6570\u636e\u7684\u5b9a\u4f4d\u3002\u4e0d\u540c\u7684encoding\u65b9\u5f0f\uff0c\u5728\u5185\u90e8\u8fdb\u884c\u5feb\u901f\u7684\u884c\u53f7\u5b9a\u4f4d\u7684\u65b9\u6848\u4e0d\u4e00\u6837\uff0c\u9700\u8981\u5177\u4f53\u5206\u6790\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662frle\u7f16\u7801\u7684\uff0c\u9700\u8981\u901a\u8fc7\u89e3\u6790rle\u7684header\u8fdb\u884cskip\uff0c\u76f4\u5230\u5230\u8fbe\u5305\u542b\u8be5\u884c\u7684\u90a3\u4e2arle\u5757\u4e4b\u540e\uff0c\u518d\u8fdb\u884c\u53cd\u89e3\u3002"),(0,l.kt)("li",{parentName:"ul"},"binary plain encoding\uff1a\u4f1a\u5728page\u7684\u4e2d\u5b58\u50a8offset\u4fe1\u606f\uff0c\u5e76\u4e14\u4f1a\u5728page header\u4e2d\u6307\u5b9aoffset\u4fe1\u606f\u7684offset\uff0c\u8bfb\u53d6\u7684\u65f6\u5019\u4f1a\u5148\u89e3\u6790offset\u4fe1\u606f\u5230\u6570\u7ec4\u4e2d\uff0c\u8fd9\u6837\u5b50\u5c31\u53ef\u4ee5\u901a\u8fc7\u5404\u4e2a\u884c\u7684offset\u6570\u636e\u4fe1\u606f\u5feb\u901f\u7684\u5b9a\u4f4dblock\u67d0\u4e00\u884c\u7684\u6570\u636e"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u5b9e\u73b0\u5757\u7684\u9ad8\u6548\u8bfb\u53d6\uff1f\u53ef\u4ee5\u8003\u8651\u5c06\u76f8\u90bb\u7684\u5757\u5728\u8bfb\u53d6\u7684\u65f6\u5019\u8fdb\u884cmerge\uff0c\u4e00\u6b21\u6027\u8bfb\u53d6\uff1f\n\u8fd9\u4e2a\u9700\u8981\u5728\u8bfb\u53d6\u7684\u65f6\u5019\uff0c\u5224\u65adblock\u662f\u5426\u8fde\u7eed\uff0c\u5982\u679c\u8fde\u7eed\uff0c\u5c31\u4e00\u6b21\u6027\u7684\u8bfb\u53d6"))),(0,l.kt)("h2",{id:"\u7f16\u7801"},"\u7f16\u7801"),(0,l.kt)("p",null,"\u73b0\u6709\u7684doris\u5b58\u50a8\u4e2d\uff0c\u9488\u5bf9string\u7c7b\u578b\u7684\u7f16\u7801\uff0c\u91c7\u7528plain encoding\u7684\u65b9\u5f0f\uff0c\u6548\u7387\u6bd4\u8f83\u4f4e\u3002\u7ecf\u8fc7\u5bf9\u6bd4\uff0c\u53d1\u73b0\u5728\u767e\u5ea6\u7edf\u8ba1\u7684\u573a\u666f\u4e0b\uff0c\u6570\u636e\u4f1a\u56e0\u4e3astring\u7c7b\u578b\u7684\u7f16\u7801\u81a8\u80c0\u8d85\u8fc7\u4e00\u500d\u3002\u6240\u4ee5\uff0c\u8ba1\u5212\u5f15\u5165\u57fa\u4e8e\u8bcd\u5178\u7684\u7f16\u7801\u538b\u7f29\u3002"),(0,l.kt)("h2",{id:"\u538b\u7f29"},"\u538b\u7f29"),(0,l.kt)("p",null,"\u5b9e\u73b0\u53ef\u6269\u5c55\u7684\u538b\u7f29\u6846\u67b6\uff0c\u652f\u6301\u591a\u79cd\u538b\u7f29\u7b97\u6cd5\uff0c\u65b9\u4fbf\u540e\u7eed\u6dfb\u52a0\u65b0\u7684\u538b\u7f29\u7b97\u6cd5\uff0c\u8ba1\u5212\u5f15\u5165zstd\u538b\u7f29\u3002"),(0,l.kt)("h2",{id:"todo"},"TODO"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5b9e\u73b0\u5d4c\u5957\u7c7b\u578b\uff1f\u5982\u4f55\u5728\u5d4c\u5957\u7c7b\u578b\u4e2d\u8fdb\u884c\u884c\u53f7\u5b9a\u4f4d\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u4f18\u5316\u73b0\u5728\u7684ScanRange\u62c6\u5206\u5bfc\u81f4\u7684\u4e0b\u6e38bitmap\u3001column statistic\u7edf\u8ba1\u7b49\u8fdb\u884c\u591a\u6b21\uff1f")))}s.isMDXComponent=!0},15309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/segment_v2-35f14e9d11067d490a85debb8ea7d2a8.png"}}]);