"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[51298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),E=r,d=m["".concat(s,".").concat(E)]||m[E]||u[E]||i;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},85632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"CREATE-ENCRYPT-KEY",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",title:"CREATE-ENCRYPT-KEY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-ENCRYPT-KEY",language:"en"},sidebar:"docs",previous:{title:"CREATE-DATABASE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE"},next:{title:"CREATE-FILE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"}},s={},c=[{value:"CREATE-ENCRYPT-KEY",id:"create-encrypt-key",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-encrypt-key"},"CREATE-ENCRYPT-KEY"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE ENCRYPTKEY"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement creates a custom key. Executing this command requires the user to have ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN")," privileges."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY key_name AS "key_string"\n')),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"key_name"),": The name of the key to be created, may contain the name of the database. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"db1.my_key"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"key_string"),": The string to create the key with."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"key_name")," contains the database name, then the custom key will be created in the corresponding database, otherwise this function will create the database in the current session. The name of the new key cannot be the same as the existing key in the corresponding database, otherwise the creation will fail."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a custom key"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use a custom key"),(0,r.kt)("p",{parentName:"li"},"To use a custom key, you need to add the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"KEY"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"key")," before the key, separated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"key_name")," space."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6 |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+------------------------------------------------- -------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+------------------------------------------------- -------------------+\n| Doris is Great |\n+------------------------------------------------- -------------------+\n1 row in set (0.01 sec)\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, ENCRYPTKEY\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);