"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[93865],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,v=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return t?i.createElement(v,l(l({ref:n},c),{},{components:t})):i.createElement(v,l({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const r={title:"width_bucket",language:"en"},l=void 0,u={unversionedId:"sql-manual/sql-functions/width-bucket",id:"version-dev/sql-manual/sql-functions/width-bucket",title:"width_bucket",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/width-bucket.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/width-bucket",permalink:"/docs/dev/sql-manual/sql-functions/width-bucket",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/width-bucket.md",tags:[],version:"dev",frontMatter:{title:"width_bucket",language:"en"},sidebar:"docs",previous:{title:"DIGITAL-MASKING",permalink:"/docs/dev/sql-manual/sql-functions/digital-masking"},next:{title:"SET-PROPERTY",permalink:"/docs/dev/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY"}},o={},s=[{value:"width_bucket",id:"width_bucket",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"width_bucket"},"width_bucket"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Constructs equi-width histograms, in which the histogram range is divided into intervals of identical size, and returns the bucket number into which the value of an expression falls, after it has been evaluated. The function returns an integer value or null (if any input is null)."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INT width_bucket(Expr expr, T min_value, T max_value, INT num_buckets)")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," -\nThe expression for which the histogram is created. This expression must evaluate to a numeric value or to a value that can be implicitly converted to a numeric value."),(0,a.kt)("p",null,"The value must be within the range of ",(0,a.kt)("inlineCode",{parentName:"p"},"-(2^53 - 1)")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"2^53 - 1")," (inclusive)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min_value")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_value")," -\nThe low and high end points of the acceptable range for the expression. The end points must also evaluate to numeric values and not be equal."),(0,a.kt)("p",null,"The low and high end points must be within the range of ",(0,a.kt)("inlineCode",{parentName:"p"},"-(2^53 - 1)")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"2^53 - 1")," (inclusive). In addition, the difference between these points must be less than ",(0,a.kt)("inlineCode",{parentName:"p"},"2^53")," (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"abs(max_value - min_value) < 2^53)"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"num_buckets")," -\nThe desired number of buckets; must be a positive integer value. A value from the expression is assigned to each bucket, and the function then returns the corresponding bucket number."),(0,a.kt)("h4",{id:"returned-value"},"Returned value"),(0,a.kt)("p",null,"It returns the bucket number into which the value of an expression falls."),(0,a.kt)("p",null,"When an expression falls outside the range, the function returns:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0")," if the expression is less than ",(0,a.kt)("inlineCode",{parentName:"p"},"min_value"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"num_buckets + 1")," if the expression is greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"max_value"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," if any input is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'DROP TABLE IF EXISTS width_bucket_test;\n\nCREATE TABLE IF NOT EXISTS width_bucket_test (\n              `k1` int NULL COMMENT "",\n              `v1` date NULL COMMENT "",\n              `v2` double NULL COMMENT "",\n              `v3` bigint NULL COMMENT ""\n            ) ENGINE=OLAP\n            DUPLICATE KEY(`k1`)\n            DISTRIBUTED BY HASH(`k1`) BUCKETS 1\n            PROPERTIES (\n            "replication_allocation" = "tag.location.default: 1",\n            "storage_format" = "V2"\n            );\n\nINSERT INTO width_bucket_test VALUES (1, "2022-11-18", 290000.00, 290000),\n                                      (2, "2023-11-18", 320000.00, 320000),\n                                      (3, "2024-11-18", 399999.99, 399999), \n                                      (4, "2025-11-18", 400000.00, 400000), \n                                      (5, "2026-11-18", 470000.00, 470000), \n                                      (6, "2027-11-18", 510000.00, 510000), \n                                      (7, "2028-11-18", 610000.00, 610000), \n                                      (8, null, null, null);\n\nSELECT * FROM width_bucket_test ORDER BY k1;                                      \n\n+------+------------+-----------+--------+\n| k1   | v1         | v2        | v3     |\n+------+------------+-----------+--------+\n|    1 | 2022-11-18 |    290000 | 290000 |\n|    2 | 2023-11-18 |    320000 | 320000 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |\n|    4 | 2025-11-18 |    400000 | 400000 |\n|    5 | 2026-11-18 |    470000 | 470000 |\n|    6 | 2027-11-18 |    510000 | 510000 |\n|    7 | 2028-11-18 |    610000 | 610000 |\n|    8 | NULL       |      NULL |   NULL |\n+------+------------+-----------+--------+\n\nSELECT k1, v1, v2, v3, width_bucket(v1, date(\'2023-11-18\'), date(\'2027-11-18\'), 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    0 |\n|    2 | 2023-11-18 |    320000 | 320000 |    1 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    4 |\n|    6 | 2027-11-18 |    510000 | 510000 |    5 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\nSELECT k1, v1, v2, v3, width_bucket(v2, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\nSELECT k1, v1, v2, v3, width_bucket(v3, 200000, 600000, 4) AS w FROM width_bucket_test ORDER BY k1;\n\n+------+------------+-----------+--------+------+\n| k1   | v1         | v2        | v3     | w    |\n+------+------------+-----------+--------+------+\n|    1 | 2022-11-18 |    290000 | 290000 |    1 |\n|    2 | 2023-11-18 |    320000 | 320000 |    2 |\n|    3 | 2024-11-18 | 399999.99 | 399999 |    2 |\n|    4 | 2025-11-18 |    400000 | 400000 |    3 |\n|    5 | 2026-11-18 |    470000 | 470000 |    3 |\n|    6 | 2027-11-18 |    510000 | 510000 |    4 |\n|    7 | 2028-11-18 |    610000 | 610000 |    5 |\n|    8 | NULL       |      NULL |   NULL | NULL |\n+------+------------+-----------+--------+------+\n\n')),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"WIDTH_BUCKET"))}p.isMDXComponent=!0}}]);