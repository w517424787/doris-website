"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[52468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),c=i,m=d["".concat(p,".").concat(c)]||d[c]||k[c]||l;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},28306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const l={title:"GROUPING SETS DESIGN",language:"en"},r=void 0,o={unversionedId:"design/grouping_sets_design",id:"design/grouping_sets_design",title:"GROUPING SETS DESIGN",description:"\x3c!--",source:"@site/community/design/grouping_sets_design.md",sourceDirName:"design",slug:"/design/grouping_sets_design",permalink:"/community/design/grouping_sets_design",draft:!1,tags:[],version:"current",frontMatter:{title:"GROUPING SETS DESIGN",language:"en"},sidebar:"community",previous:{title:"Doris Storage File Format Optimization",permalink:"/community/design/doris_storage_optimization"},next:{title:"Metadata Design Document",permalink:"/community/design/metadata-design"}},p={},s=[{value:"1. GROUPING SETS Background",id:"1-grouping-sets-background",level:2},{value:"1.1 GROUPING SETS Syntax",id:"11-grouping-sets-syntax",level:3},{value:"1.2 ROLLUP Syntax",id:"12-rollup-syntax",level:3},{value:"1.3 CUBE Syntax",id:"13-cube-syntax",level:3},{value:"1.4 GROUPING and GROUPING_ID Function",id:"14-grouping-and-grouping_id-function",level:3},{value:"1.5 Composition and nesting of GROUPING SETS",id:"15-composition-and-nesting-of-grouping-sets",level:3},{value:"2. Object",id:"2-object",level:2},{value:"2.1 GROUPING SETS Syntax",id:"21-grouping-sets-syntax",level:3},{value:"2.2 ROLLUP Syntax",id:"22-rollup-syntax",level:3},{value:"2.3 CUBE Syntax",id:"23-cube-syntax",level:3},{value:"3. Implementation",id:"3-implementation",level:2},{value:"3.1 Overall Design Approaches",id:"31-overall-design-approaches",level:3},{value:"3.2 Example",id:"32-example",level:3},{value:"3.3 FE",id:"33-fe",level:3},{value:"3.3.1 Tasks",id:"331-tasks",level:4},{value:"3.3.2 Tuple",id:"332-tuple",level:4},{value:"3.3.3 Expression and Function Substitution",id:"333-expression-and-function-substitution",level:4},{value:"3.4 BE",id:"34-be",level:3},{value:"3.4.1 Tasks",id:"341-tasks",level:4}],u={toc:s},d="wrapper";function k(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grouping-sets-design"},"GROUPING SETS DESIGN"),(0,i.kt)("h2",{id:"1-grouping-sets-background"},"1. GROUPING SETS Background"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING")," ",(0,i.kt)("inlineCode",{parentName:"p"},"SETS")," extensions to SQL make querying and reporting easier and faster. ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP"),", and grouping sets produce a single result set that is equivalent to a ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ALL")," of differently grouped rows. ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP")," calculates aggregations such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MIN"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"AVG")," at increasing levels of aggregation, from the most detailed up to a grand total. ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE")," is an extension similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP"),", enabling a single statement to calculate all possible combinations of aggregations. The ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING")," ",(0,i.kt)("inlineCode",{parentName:"p"},"SETS")," extension lets you specify just the groupings needed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP")," ",(0,i.kt)("inlineCode",{parentName:"p"},"BY")," clause. This allows efficient analysis across multiple dimensions without performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE")," operation. Computing a ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE")," creates a heavy processing load, so replacing cubes with grouping sets can significantly increase performance.\nTo enhance performance, ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING SETS")," can be parallelized: multiple processes can simultaneously execute all of these statements. These capabilities make aggregate calculations more efficient, thereby enhancing database performance, and scalability."),(0,i.kt)("p",null,"The three ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING")," functions help you identify the group each row belongs to and enable sorting subtotal rows and filtering results."),(0,i.kt)("h3",{id:"11-grouping-sets-syntax"},"1.1 GROUPING SETS Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING SETS")," syntax lets you define multiple groupings in the same query. ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," computes all the groupings specified and combines them with ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL"),". For example, consider the following statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT k1, k2, SUM( k3 ) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k1), (k2), ( ) );\n")),(0,i.kt)("p",null,"This statement is equivalent to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT k1, k2, SUM( k3 ) FROM t GROUP BY k1, k2\nUNION\nSELECT k1, null, SUM( k3 ) FROM t GROUP BY k1\nUNION\nSELECT null, k2, SUM( k3 ) FROM t GROUP BY k2\nUNION\nSELECT null, null, SUM( k3 ) FROM t\n")),(0,i.kt)("p",null,"This is an example of real query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\nmysql> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n")),(0,i.kt)("h3",{id:"12-rollup-syntax"},"1.2 ROLLUP Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP")," enables a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement to calculate multiple levels of subtotals across a specified group of dimensions. It also calculates a grand total. ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP")," is a simple extension to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP")," ",(0,i.kt)("inlineCode",{parentName:"p"},"BY")," clause, so its syntax is extremely easy to use. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP")," extension is highly efficient, adding minimal overhead to a query."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP")," appears in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP")," ",(0,i.kt)("inlineCode",{parentName:"p"},"BY")," clause in a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement. Its form is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\n")),(0,i.kt)("p",null,"This statement is equivalent to GROUPING SETS as followed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n")),(0,i.kt)("h3",{id:"13-cube-syntax"},"1.3 CUBE Syntax"),(0,i.kt)("p",null,"Like ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP"),"   ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE")," generates all the subtotals that could be calculated for a data cube with the specified dimensions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT a, b,c, SUM( d ) FROM tab1 GROUP BY CUBE(a,b,c)\n")),(0,i.kt)("p",null,"e.g.  CUBE ( a, b, c )  is equivalent to GROUPING SETS as followed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n")),(0,i.kt)("h3",{id:"14-grouping-and-grouping_id-function"},"1.4 GROUPING and GROUPING_ID Function"),(0,i.kt)("p",null,"Indicates whether a specified column expression in a ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," list is aggregated or not. ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING "),"returns 1 for aggregated or 0 for not aggregated in the result set. ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING")," can be used only in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," list, ",(0,i.kt)("inlineCode",{parentName:"p"},"HAVING"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clauses when ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," is specified."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING_ID")," describes which of a list of expressions are grouped in a row produced by a ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," query. The ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING_ID")," function simply returns the decimal equivalent of the binary value formed as a result of the concatenation of the values returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING")," functions."),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING_ID")," argument must be an element of the ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," list. ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING_ID ()")," returns an ",(0,i.kt)("strong",{parentName:"p"},"integer")," bitmap whose lowest N bits may be lit. A lit ",(0,i.kt)("strong",{parentName:"p"},"bit")," indicates the corresponding argument is not a grouping column for the given output row. The lowest-order ",(0,i.kt)("strong",{parentName:"p"},"bit")," corresponds to argument N, and the N-1th lowest-order ",(0,i.kt)("strong",{parentName:"p"},"bit")," corresponds to argument 1. If the column is a grouping column the bit is 0 else is 1."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select * from t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n")),(0,i.kt)("p",null,"grouping sets result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT k1, k2, GROUPING(k1), GROUPING(k2), SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+----------------+----------------+-----------+\n| k1   | k2   | grouping(`k1`) | grouping(`k2`) | sum(`k3`) |\n+------+------+----------------+----------------+-----------+\n| a    | A    |              0 |              0 |         3 |\n| a    | B    |              0 |              0 |         4 |\n| a    | NULL |              0 |              1 |         7 |\n| b    | A    |              0 |              0 |         5 |\n| b    | B    |              0 |              0 |         6 |\n| b    | NULL |              0 |              1 |        11 |\n| NULL | A    |              1 |              0 |         8 |\n| NULL | B    |              1 |              0 |        10 |\n| NULL | NULL |              1 |              1 |        18 |\n+------+------+----------------+----------------+-----------+\n9 rows in set (0.02 sec)\n\nmysql> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-------------------------+-----------+\n| k1   | k2   | grouping_id(`k1`, `k2`) | sum(`k3`) |\n+------+------+-------------------------+-----------+\n| a    | A    |                       0 |         3 |\n| a    | B    |                       0 |         4 |\n| a    | NULL |                       1 |         7 |\n| b    | A    |                       0 |         5 |\n| b    | B    |                       0 |         6 |\n| b    | NULL |                       1 |        11 |\n| NULL | A    |                       2 |         8 |\n| NULL | B    |                       2 |        10 |\n| NULL | NULL |                       3 |        18 |\n+------+------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\nmysql> SELECT k1, k2, grouping(k1), grouping(k2), GROUPING_ID(k1,k2), SUM(k4) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) ) order by k1, k2;\n+------+------+----------------+----------------+-------------------------+-----------+\n| k1   | k2   | grouping(`k1`) | grouping(`k2`) | grouping_id(`k1`, `k2`) | sum(`k4`) |\n+------+------+----------------+----------------+-------------------------+-----------+\n| a    | A    |              0 |              0 |                       0 |         3 |\n| a    | B    |              0 |              0 |                       0 |         4 |\n| a    | NULL |              0 |              1 |                       1 |         7 |\n| b    | A    |              0 |              0 |                       0 |         5 |\n| b    | B    |              0 |              0 |                       0 |         6 |\n| b    | NULL |              0 |              1 |                       1 |        11 |\n| NULL | A    |              1 |              0 |                       2 |         8 |\n| NULL | B    |              1 |              0 |                       2 |        10 |\n| NULL | NULL |              1 |              1 |                       3 |        18 |\n+------+------+----------------+----------------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\n")),(0,i.kt)("h3",{id:"15-composition-and-nesting-of-grouping-sets"},"1.5 Composition and nesting of GROUPING SETS"),(0,i.kt)("p",null,"First of all, a GROUP BY clause is essentially a special case of GROUPING SETS, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   GROUP BY a\nis equivalent to:\n   GROUP BY GROUPING SETS((a))\nalso,\n   GROUP BY a,b,c\nis equivalent to:\n   GROUP BY GROUPING SETS((a,b,c))\n")),(0,i.kt)("p",null,"Similarly, CUBE and ROLLUP can be expanded into GROUPING SETS, so the various combinations and nesting of GROUP BY, CUBE, ROLLUP, GROUPING SETS are essentially the combination and nesting of GROUPING SETS."),(0,i.kt)("p",null,"For GROUPING SETS nesting, it is semantically equivalent to writing the statements inside the nest directly outside. (ref:",(0,i.kt)("a",{parentName:"p",href:"https://www.brytlyt.com/documentation/data-manipulation-dml/grouping-sets-rollup-cube/"},"https://www.brytlyt.com/documentation/data-manipulation-dml/grouping-sets-rollup-cube/"),") mentions: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The CUBE and ROLLUP constructs can be used either directly in the GROUP BY clause, or nested inside a GROUPING SETS clause. If one GROUPING SETS clause is nested inside another, the effect is the same as if all the elements of the inner clause had been written directly in the outer clause.\n")),(0,i.kt)("p",null,"For a combined list of multiple GROUPING SETS, many databases consider it a cross product relationship."),(0,i.kt)("p",null,"for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GROUP BY a, CUBE (b, c), GROUPING SETS ((d), (e))\n\nis equivalent to:\n\nGROUP BY GROUPING SETS (\n(a, b, c, d), (a, b, c, e),\n(a, b, d),    (a, b, e),\n(a, c, d),    (a, c, e),\n(a, d),       (a, e)\n)\n")),(0,i.kt)("p",null,"For the combination and nesting of GROUPING SETS, each database support is not the same. For example snowflake does not support any combination and nesting.\n\uff08",(0,i.kt)("a",{parentName:"p",href:"https://docs.snowflake.net/manuals/sql-reference/constructs/group-by.html"},"https://docs.snowflake.net/manuals/sql-reference/constructs/group-by.html"),"\uff09"),(0,i.kt)("p",null,"Oracle supports both composition and nesting.\n\uff08",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/B19306_01/server.102/b14223/aggreg.htm#i1006842"},"https://docs.oracle.com/cd/B19306_01/server.102/b14223/aggreg.htm#i1006842"),"\uff09"),(0,i.kt)("p",null,"Presto supports composition, but not nesting.\n\uff08",(0,i.kt)("a",{parentName:"p",href:"https://prestodb.github.io/docs/current/sql/select.html"},"https://prestodb.github.io/docs/current/sql/select.html"),"\uff09"),(0,i.kt)("h2",{id:"2-object"},"2. Object"),(0,i.kt)("p",null,"Support ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING SETS"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CUBE ")," syntax, implements 1.1, 1.2, 1.3 1.4, 1.5, not support the combination\nand nesting of GROUPING SETS in current version."),(0,i.kt)("h3",{id:"21-grouping-sets-syntax"},"2.1 GROUPING SETS Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY GROUPING SETS ( groupSet [ , groupSet [ , ... ] ] )\n[ ... ]\n\ngroupSet ::= { ( expr  [ , expr [ , ... ] ] )}\n\n<expr>\nExpression, column name.\n")),(0,i.kt)("h3",{id:"22-rollup-syntax"},"2.2 ROLLUP Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY ROLLUP ( expr  [ , expr [ , ... ] ] )\n[ ... ]\n\n<expr>\nExpression, column name.\n")),(0,i.kt)("h3",{id:"23-cube-syntax"},"2.3 CUBE Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY CUBE ( expr  [ , expr [ , ... ] ] )\n[ ... ]\n\n<expr>\nExpression, column name.\n")),(0,i.kt)("h2",{id:"3-implementation"},"3. Implementation"),(0,i.kt)("h3",{id:"31-overall-design-approaches"},"3.1 Overall Design Approaches"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING SET"),"  is equivalent to the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION")," of  ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," . So we can expand input rows, and run an GROUP BY on these rows."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT a, b FROM src GROUP BY a, b GROUPING SETS ((a, b), (a), (b), ());\n")),(0,i.kt)("p",null,"Data in table src:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1, 2\n3, 4\n")),(0,i.kt)("p",null,"Base on  GROUPING SETS , we can expend the input to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1, 2       (GROUPING_ID: a, b -> 00 -> 0)\n1, null    (GROUPING_ID: a, null -> 01 -> 1)\nnull, 2    (GROUPING_ID: null, b -> 10 -> 2)\nnull, null (GROUPING_ID: null, null -> 11 -> 3)\n\n3, 4       (GROUPING_ID: a, b -> 00 -> 0)\n3, null    (GROUPING_ID: a, null -> 01 -> 1)\nnull, 4    (GROUPING_ID: null, b -> 10 -> 2)\nnull, null (GROUPING_ID: null, null -> 11 -> 3)\n")),(0,i.kt)("p",null,"And then use those row as input, then GROUP BY  a, b, GROUPING_ID"),(0,i.kt)("h3",{id:"32-example"},"3.2 Example"),(0,i.kt)("p",null,"Table t:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select * from t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n")),(0,i.kt)("p",null,"for the query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n")),(0,i.kt)("p",null,"First, expand the input, every row expand into 4 rows ( the size of GROUPING SETS), and insert GROUPING_ID column"),(0,i.kt)("p",null,"e.g.  a, A, 1 expanded to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+------+------+------+-------------------------+\n| k1   | k2   | k3   | GROUPING_ID(`k1`, `k2`) |\n+------+------+------+-------------------------+\n| a    | A    |    1 |                       0 |\n| a    | NULL |    1 |                       1 |\n| NULL | A    |    1 |                       2 |\n| NULL | NULL |    1 |                       3 |\n+------+------+------+-------------------------+\n")),(0,i.kt)("p",null,"Finally, all rows expended as follows (32 rows):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+------+------+------+-------------------------+\n| k1   | k2   | k3   | GROUPING_ID(`k1`, `k2`) |\n+------+------+------+-------------------------+\n| a    | A    |    1 |                       0 |\n| a    | A    |    2 |                       0 |\n| a    | B    |    1 |                       0 |\n| a    | B    |    3 |                       0 |\n| b    | A    |    1 |                       0 |\n| b    | A    |    4 |                       0 |\n| b    | B    |    1 |                       0 |\n| b    | B    |    5 |                       0 |\n| a    | NULL |    1 |                       1 |\n| a    | NULL |    1 |                       1 |\n| a    | NULL |    2 |                       1 |\n| a    | NULL |    3 |                       1 |\n| b    | NULL |    1 |                       1 |\n| b    | NULL |    1 |                       1 |\n| b    | NULL |    4 |                       1 |\n| b    | NULL |    5 |                       1 |\n| NULL | A    |    1 |                       2 |\n| NULL | A    |    1 |                       2 |\n| NULL | A    |    2 |                       2 |\n| NULL | A    |    4 |                       2 |\n| NULL | B    |    1 |                       2 |\n| NULL | B    |    1 |                       2 |\n| NULL | B    |    3 |                       2 |\n| NULL | B    |    5 |                       2 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    2 |                       3 |\n| NULL | NULL |    3 |                       3 |\n| NULL | NULL |    4 |                       3 |\n| NULL | NULL |    5 |                       3 |\n+------+------+------+-------------------------+\n32 rows in set.\n")),(0,i.kt)("p",null,"now GROUP BY k1, k2, GROUPING_ID(k1,k2):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+------+------+-------------------------+-----------+\n| k1   | k2   | grouping_id(`k1`, `k2`) | sum(`k3`) |\n+------+------+-------------------------+-----------+\n| a    | A    |                       0 |         3 |\n| a    | B    |                       0 |         4 |\n| a    | NULL |                       1 |         7 |\n| b    | A    |                       0 |         5 |\n| b    | B    |                       0 |         6 |\n| b    | NULL |                       1 |        11 |\n| NULL | A    |                       2 |         8 |\n| NULL | B    |                       2 |        10 |\n| NULL | NULL |                       3 |        18 |\n+------+------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n")),(0,i.kt)("p",null,"The result is equivalent to the UNION ALL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select k1, k2, sum(k3) from t group by k1, k2\nUNION ALL\nselect NULL, k2, sum(k3) from t group by k2\nUNION ALL\nselect k1, NULL, sum(k3) from t group by k1\nUNION ALL\nselect NULL, NULL, sum(k3) from t;\n\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| b    | A    |         5 |\n| a    | A    |         3 |\n| a    | B    |         4 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n")),(0,i.kt)("h3",{id:"33-fe"},"3.3 FE"),(0,i.kt)("h4",{id:"331-tasks"},"3.3.1 Tasks"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add GroupByClause, replace groupingExprs."),(0,i.kt)("li",{parentName:"ol"},"Add Grouping Sets, Cube and RollUp syntax."),(0,i.kt)("li",{parentName:"ol"},"Add GroupByClause in SelectStmt."),(0,i.kt)("li",{parentName:"ol"},"Add GroupingFunctionCallExpr, implements grouping grouping_id function call"),(0,i.kt)("li",{parentName:"ol"},"Add VirtualSlot, generate the map of virtual slots and real slots"),(0,i.kt)("li",{parentName:"ol"},"add virtual column GROUPING_ID and other virtual columns generated by grouping and grouping_id, insert into groupingExprs,"),(0,i.kt)("li",{parentName:"ol"},"Add a PlanNode, name as RepeatNode. For GroupingSets aggregation insert RepeatNode to the plan.")),(0,i.kt)("h4",{id:"332-tuple"},"3.3.2 Tuple"),(0,i.kt)("p",null,"In order to add GROUPING_ID to groupingExprs in GroupByClause, need to create virtual SlotRef, also, need tot create a tuple for this slot, named GROUPING","_","_","ID Tuple."),(0,i.kt)("p",null,"For the plannode RepeatNode, its input are all the tuples of its children and its output tuple are the repeat data and GROUPING_ID."),(0,i.kt)("h4",{id:"333-expression-and-function-substitution"},"3.3.3 Expression and Function Substitution"),(0,i.kt)("p",null,"expr -> if(bitand(pos, grouping_id)=0, expr, null) for expr in extension grouping clause\ngrouping_id() -> grouping_id(grouping_id) for grouping_id function"),(0,i.kt)("h3",{id:"34-be"},"3.4 BE"),(0,i.kt)("h4",{id:"341-tasks"},"3.4.1 Tasks"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add RepeatNode executor, expend the input data and append GROUPING_ID to every row"),(0,i.kt)("li",{parentName:"ol"},"Implements grouping_id() and grouping() function.")))}k.isMDXComponent=!0}}]);