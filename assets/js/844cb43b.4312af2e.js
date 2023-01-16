"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[24535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"AES",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/aes",id:"version-dev/sql-manual/sql-functions/encrypt-digest-functions/aes",title:"AES",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/encrypt-digest-functions/aes.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/aes",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/aes",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/encrypt-digest-functions/aes.md",tags:[],version:"dev",frontMatter:{title:"AES",language:"en"},sidebar:"docs",previous:{title:"mod",permalink:"/docs/dev/sql-manual/sql-functions/math-functions/mod"},next:{title:"MD5",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5"}},s={},c=[{value:"AES_ENCRYPT",id:"aes_encrypt",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"AES_DECRYPT",id:"aes_decrypt",level:2},{value:"Name",id:"name-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Type",id:"return-type-1",level:4},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords-1",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"aes_encrypt"},"AES_ENCRYPT"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"AES_ENCRYPT"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"Encryption of data using the OpenSSL. This function is consistent with the ",(0,a.kt)("inlineCode",{parentName:"p"},"AES_ENCRYPT")," function in MySQL. Using AES_128_ECB algorithm by default, and the padding mode is PKCS7.\nReference: ",(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt"},"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt")),(0,a.kt)("h3",{id:"compatibility"},"Compatibility"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"aes_decrypt/aes_encrypt/sm4_decrypt/sm4_encrypt When the initial vector is not provided, block_encryption_mode will not take effect, and AES_128_ECB will be used for encryption and decryption in the end, which is inconsistent with the behavior of MySQL."),(0,a.kt)("li",{parentName:"ol"},"Add aes_decrypt_v2/aes_encrypt_v2/sm4_decrypt_v2/sm4_encrypt_v2 functions to support correct behavior. When no initial vector is provided, block_encryption_mode can take effect, aes-192-ecb and aes-256-ecb will be correctly encrypted and decrypted, and other block encryption modes will report an error. If there is no need to be compatible with old data, the v2 function can be used directly.")),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AES_ENCRYPT(str, key_str[, init_vector])")),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str"),": Content to be encrypted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key_str"),": Secret key"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"init_vector"),": Initialization Vector. The default value for the block_encryption_mode system variable is aes ecb mode, which does not require an initialization vector. The alternative permitted block encryption modes CBC, CFB1, CFB8, CFB128, and OFB all require an initialization vector.")),(0,a.kt)("h4",{id:"return-type"},"Return Type"),(0,a.kt)("p",null,"VARCHAR(*)"),(0,a.kt)("h4",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The AES_ENCRYPT function is not used the user secret key directly, but will be further processed. The specific steps are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Determine the number of bytes of the SECRET KEY according to the encryption algorithm used. For example, if you using AES_128_ECB, then the number of bytes of SECRET KEY are ",(0,a.kt)("inlineCode",{parentName:"li"},"128 / 8 = 16"),"(if using AES_256_ECB, then SECRET KEY length are ",(0,a.kt)("inlineCode",{parentName:"li"},"128 / 8 = 32"),");"),(0,a.kt)("li",{parentName:"ol"},"Then XOR the ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," bit and the ",(0,a.kt)("inlineCode",{parentName:"li"},"16*k+i")," bit of the SECRET KEY entered by the user. If the length of the SECRET KEY less than 16 bytes, 0 will be padded;"),(0,a.kt)("li",{parentName:"ol"},"Finally, use the newly generated key for encryption;")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n")),(0,a.kt)("p",null,"The results are consistent with those executed in MySQL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.kt)("p",null,"If you want to change other encryption algorithms, you can:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"set block_encryption_mode=\"AES_256_CBC\";\nselect to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n")),(0,a.kt)("p",null,"Here is the result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"+-----------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '0123456789')) |\n+-----------------------------------------------------+\n| tsmK1HzbpnEdR2//WhO+MA==                            |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"block_encryption_mode"),", see also ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/advanced/variables"},"variables"),"."),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AES_ENCRYPT\n")),(0,a.kt)("h2",{id:"aes_decrypt"},"AES_DECRYPT"),(0,a.kt)("h3",{id:"name-1"},"Name"),(0,a.kt)("p",null,"AES_DECRYPT"),(0,a.kt)("h3",{id:"description-1"},"Description"),(0,a.kt)("p",null,"Decryption of data using the OpenSSL. This function is consistent with the ",(0,a.kt)("inlineCode",{parentName:"p"},"AES_DECRYPT")," function in MySQL. Using AES_128_ECB algorithm by default, and the padding mode is PKCS7."),(0,a.kt)("h4",{id:"syntax-1"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AES_DECRYPT(str,key_str[,init_vector])\n")),(0,a.kt)("h4",{id:"arguments-1"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str"),": Content that encrypted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key_str"),": Secret key"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"init_vector"),": Initialization Vector")),(0,a.kt)("h4",{id:"return-type-1"},"Return Type"),(0,a.kt)("p",null,"VARCHAR(*)"),(0,a.kt)("h3",{id:"example-1"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n")),(0,a.kt)("p",null,"The results are consistent with those executed in MySQL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"+------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.kt)("p",null,"If you want to change other encryption algorithms, you can:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"set block_encryption_mode=\"AES_256_CBC\";\nselect aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n")),(0,a.kt)("p",null,"Here is the result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"+---------------------------------------------------------------------------+\n| aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='), '***', '0123456789') |\n+---------------------------------------------------------------------------+\n| text                                                                      |\n+---------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"block_encryption_mode"),", see also ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/advanced/variables"},"variables"),"."),(0,a.kt)("h3",{id:"keywords-1"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AES_DECRYPT\n")))}u.isMDXComponent=!0}}]);