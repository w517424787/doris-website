"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[4351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"DECIMALV3",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Types/DECIMALV3",id:"version-dev/sql-manual/sql-reference/Data-Types/DECIMALV3",title:"DECIMALV3",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Types/DECIMALV3.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DECIMALV3",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DECIMALV3",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Types/DECIMALV3.md",tags:[],version:"dev",frontMatter:{title:"DECIMALV3",language:"en"},sidebar:"docs",previous:{title:"DECIMAL",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DECIMAL"},next:{title:"DATE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATE"}},o={},c=[{value:"DECIMALV3",id:"decimalv3",level:2},{value:"Description",id:"description",level:3},{value:"Precision Deduction",id:"precision-deduction",level:3},{value:"Arithmetic Expressions",id:"arithmetic-expressions",level:4},{value:"Aggregation functions",id:"aggregation-functions",level:4},{value:"Default rules",id:"default-rules",level:4},{value:"Adjust the result precision",id:"adjust-the-result-precision",level:4},{value:"Why DECIMALV3 is required",id:"why-decimalv3-is-required",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"decimalv3"},"DECIMALV3"),(0,i.kt)("version",{since:"1.2.1"},(0,i.kt)("p",null,"DECIMALV3")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"DECIMALV3 (M ","[,D]",")"),(0,i.kt)("p",null,"High-precision fixed-point number, M represents the total number of significant digits, and D represents the scale."),(0,i.kt)("p",null,"The range of M is ","[1, 38]",", and the range of D is ","[0, precision]","."),(0,i.kt)("p",null,"The default value is DECIMALV3(9, 0)."),(0,i.kt)("h3",{id:"precision-deduction"},"Precision Deduction"),(0,i.kt)("p",null,"DECIMALV3 has a very complex set of type inference rules. For different expressions, different rules will be applied for precision inference."),(0,i.kt)("h4",{id:"arithmetic-expressions"},"Arithmetic Expressions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plus / Minus: DECIMALV3(a, b) + DECIMALV3(x, y) -> DECIMALV3(max(a - b, x - y) + max(b, y) + 1, max(b, y))."),(0,i.kt)("li",{parentName:"ul"},"Multiply: DECIMALV3(a, b) + DECIMALV3(x, y) -> DECIMALV3(a + x, b + y)."),(0,i.kt)("li",{parentName:"ul"},"Divide: DECIMALV3(a, b) + DECIMALV3(x, y) -> DECIMALV3(a + y, b).")),(0,i.kt)("h4",{id:"aggregation-functions"},"Aggregation functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SUM / MULTI_DISTINCT_SUM: SUM(DECIMALV3(a, b)) -> DECIMALV3(38, b)."),(0,i.kt)("li",{parentName:"ul"},"AVG: AVG(DECIMALV3(a, b)) -> DECIMALV3(38, max(b, 4)).")),(0,i.kt)("h4",{id:"default-rules"},"Default rules"),(0,i.kt)("p",null,"Except for the expressions mentioned above, other expressions use default rules for precision deduction. That is, for the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"expr(DECIMALV3(a, b))"),", the result type is also DECIMALV3(a, b)."),(0,i.kt)("h4",{id:"adjust-the-result-precision"},"Adjust the result precision"),(0,i.kt)("p",null,"Different users have different accuracy requirements for DECIMALV3. The above rules are the default behavior of Doris. If users ",(0,i.kt)("strong",{parentName:"p"},"have different accuracy requirements, they can adjust the accuracy in the following ways"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the expected result precision is greater than the default precision, you can adjust the result precision by adjusting the parameter's precision. For example, if the user expects to calculate ",(0,i.kt)("inlineCode",{parentName:"li"},"AVG(col)")," and get DECIMALV3(x, y) as the result, where the type of ",(0,i.kt)("inlineCode",{parentName:"li"},"col")," is DECIMALV3 (a, b), the expression can be rewritten to ",(0,i.kt)("inlineCode",{parentName:"li"},"AVG(CAST(col as DECIMALV3 (x, y))"),"."),(0,i.kt)("li",{parentName:"ul"},"If the expected result precision is less than the default precision, the desired precision can be obtained by approximating the output result. For example, if the user expects to calculate ",(0,i.kt)("inlineCode",{parentName:"li"},"AVG(col)")," and get DECIMALV3(x, y) as the result, where the type of ",(0,i.kt)("inlineCode",{parentName:"li"},"col")," is DECIMALV3(a, b), the expression can be rewritten as ",(0,i.kt)("inlineCode",{parentName:"li"},"ROUND(AVG(col), y)"),".")),(0,i.kt)("h3",{id:"why-decimalv3-is-required"},"Why DECIMALV3 is required"),(0,i.kt)("p",null,"DECIMALV3 in Doris is a real high-precision fixed-point number. Compared with the old version of Decimal, DecimalV3 has the following core advantages:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It can represent a wider range. The value ranges of both precision and scale in DECIMALV3 have been significantly expanded."),(0,i.kt)("li",{parentName:"ol"},"Higher performance. The old version of DECIMAL requires 16 bytes in memory and 12 bytes in storage, while DECIMALV3 has made adaptive adjustments as shown below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+----------------------+------------------------------+\n|     precision        | Space occupied (memory/disk) |\n+----------------------+------------------------------+\n| 0 < precision <= 8   |            4 bytes           |\n+----------------------+------------------------------+\n| 8 < precision <= 18  |            8 bytes           |\n+----------------------+------------------------------+\n| 18 < precision <= 38 |           16 bytes           |\n+----------------------+------------------------------+\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"More complete precision deduction. For different expressions, different precision inference rules are applied to deduce the precision of the results.")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"DECIMALV3"))}d.isMDXComponent=!0}}]);