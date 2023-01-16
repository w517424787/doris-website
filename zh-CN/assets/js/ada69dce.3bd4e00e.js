"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[67277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,N=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(N,l(l({ref:t},c),{},{components:n})):a.createElement(N,l({ref:t},c))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u4f7f\u7528 Insert \u65b9\u5f0f\u540c\u6b65\u6570\u636e",language:"zh-CN"},l=void 0,o={unversionedId:"data-operate/import/import-scenes/jdbc-load",id:"version-dev/data-operate/import/import-scenes/jdbc-load",title:"\u4f7f\u7528 Insert \u65b9\u5f0f\u540c\u6b65\u6570\u636e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/data-operate/import/import-scenes/jdbc-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/jdbc-load",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/jdbc-load",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/data-operate/import/import-scenes/jdbc-load.md",tags:[],version:"dev",frontMatter:{title:"\u4f7f\u7528 Insert \u65b9\u5f0f\u540c\u6b65\u6570\u636e",language:"zh-CN"},sidebar:"docs",previous:{title:"\u901a\u8fc7\u5916\u90e8\u8868\u540c\u6b65\u6570\u636e",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/external-table-load"},next:{title:"\u6570\u636e\u5bfc\u5165\u4e8b\u52a1\u53ca\u539f\u5b50\u6027",permalink:"/zh-CN/docs/dev/data-operate/import/import-scenes/load-atomicity"}},p={},s=[{value:"\u5355\u6b21\u5199\u5165",id:"\u5355\u6b21\u5199\u5165",level:2},{value:"JDBC \u793a\u4f8b",id:"jdbc-\u793a\u4f8b",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-insert-\u65b9\u5f0f\u540c\u6b65\u6570\u636e"},"\u4f7f\u7528 Insert \u65b9\u5f0f\u540c\u6b65\u6570\u636e"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 MySQL \u534f\u8bae\uff0c\u4f7f\u7528 INSERT \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u3002"),(0,r.kt)("p",null,"INSERT \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u548c MySQL \u7b49\u6570\u636e\u5e93\u4e2d INSERT \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u7c7b\u4f3c\u3002 INSERT \u8bed\u53e5\u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"* INSERT INTO table SELECT ...\n* INSERT INTO table VALUES(...)\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ec5\u4ecb\u7ecd\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u3002\u5173\u4e8e INSERT \u547d\u4ee4\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"INSERT")," \u547d\u4ee4\u6587\u6863\u3002"),(0,r.kt)("h2",{id:"\u5355\u6b21\u5199\u5165"},"\u5355\u6b21\u5199\u5165"),(0,r.kt)("p",null,"\u5355\u6b21\u5199\u5165\u662f\u6307\u7528\u6237\u76f4\u63a5\u6267\u884c\u4e00\u4e2a INSERT \u547d\u4ee4\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO example_tbl (col1, col2, col3) VALUES (1000, "test", 3.25);\n')),(0,r.kt)("p",null,"\u5bf9\u4e8e Doris \u6765\u8bf4\uff0c\u4e00\u4e2a INSERT \u547d\u4ee4\u5c31\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u5bfc\u5165\u4e8b\u52a1\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u4e0d\u8bba\u662f\u5bfc\u5165\u4e00\u6761\u6570\u636e\uff0c\u8fd8\u662f\u591a\u6761\u6570\u636e\uff0c\u6211\u4eec\u90fd\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u3002\u9ad8\u9891\u6b21\u7684 INSERT \u64cd\u4f5c\u4f1a\u5bfc\u81f4\u5728\u5b58\u50a8\u5c42\u4ea7\u751f\u5927\u91cf\u7684\u5c0f\u6587\u4ef6\uff0c\u4f1a\u4e25\u91cd\u5f71\u54cd\u7cfb\u7edf\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u8be5\u65b9\u5f0f\u4ec5\u7528\u4e8e\u7ebf\u4e0b\u7b80\u5355\u6d4b\u8bd5\u6216\u4f4e\u9891\u5c11\u91cf\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u8fdb\u884c\u6279\u91cf\u7684\u63d2\u5165\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO example_tbl VALUES\n(1000, "baidu1", 3.25)\n(2000, "baidu2", 4.25)\n(3000, "baidu3", 5.25);\n')),(0,r.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4e00\u6279\u6b21\u63d2\u5165\u6761\u6570\u5728\u5c3d\u91cf\u5927\uff0c\u6bd4\u5982\u51e0\u5343\u751a\u81f3\u4e00\u4e07\u6761\u4e00\u6b21\u3002\u6216\u8005\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u7a0b\u5e8f\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528 PreparedStatement \u6765\u8fdb\u884c\u6279\u91cf\u63d2\u5165\u3002"),(0,r.kt)("h2",{id:"jdbc-\u793a\u4f8b"},"JDBC \u793a\u4f8b"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7ed9\u51fa\u4e00\u4e2a\u7b80\u5355\u7684 JDBC \u6279\u91cf INSERT \u4ee3\u7801\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package demo.doris;\n\nimport java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.PreparedStatement;\nimport java.sql.SQLException;\n\npublic class DorisJDBCDemo {\n\n    private static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";\n    private static final String DB_URL_PATTERN = "jdbc:mysql://%s:%d/%s?rewriteBatchedStatements=true";\n    private static final String HOST = "127.0.0.1"; // Leader Node host\n    private static final int PORT = 9030;   // query_port of Leader Node\n    private static final String DB = "demo";\n    private static final String TBL = "test_1";\n    private static final String USER = "admin";\n    private static final String PASSWD = "my_pass";\n\n    private static final int INSERT_BATCH_SIZE = 10000;\n\n    public static void main(String[] args) {\n        insert();\n    }\n\n    private static void insert() {\n        // \u6ce8\u610f\u672b\u5c3e\u4e0d\u8981\u52a0 \u5206\u53f7 ";"\n        String query = "insert into " + TBL + " values(?, ?)";\n        // \u8bbe\u7f6e Label \u4ee5\u505a\u5230\u5e42\u7b49\u3002\n        // String query = "insert into " + TBL + " WITH LABEL my_label values(?, ?)";\n\n        Connection conn = null;\n        PreparedStatement stmt = null;\n        String dbUrl = String.format(DB_URL_PATTERN, HOST, PORT, DB);\n        try {\n            Class.forName(JDBC_DRIVER);\n            conn = DriverManager.getConnection(dbUrl, USER, PASSWD);\n            stmt = conn.prepareStatement(query);\n\n            for (int i =0; i < INSERT_BATCH_SIZE; i++) {\n                stmt.setInt(1, i);\n                stmt.setInt(2, i * 100);\n                stmt.addBatch();\n            }\n\n            int[] res = stmt.executeBatch();\n            System.out.println(res);\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            try {\n                if (stmt != null) {\n                    stmt.close();\n                }\n            } catch (SQLException se2) {\n                se2.printStackTrace();\n            }\n            try {\n                if (conn != null) conn.close();\n            } catch (SQLException se) {\n                se.printStackTrace();\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"JDBC \u8fde\u63a5\u4e32\u9700\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"rewriteBatchedStatements=true")," \u53c2\u6570\uff0c\u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PreparedStatement")," \u65b9\u5f0f\u3002"),(0,r.kt)("p",{parentName:"li"},"\u76ee\u524d Doris \u6682\u4e0d\u652f\u6301\u670d\u52a1\u5668\u7aef\u7684 PrepareStatemnt\uff0c\u6240\u4ee5 JDBC Driver \u4f1a\u5728\u5ba2\u6237\u7aef\u8fdb\u884c\u6279\u91cf Prepare\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"rewriteBatchedStatements=true")," \u4f1a\u786e\u4fdd Driver \u6267\u884c\u6279\u5904\u7406\u3002\u5e76\u6700\u7ec8\u5f62\u6210\u5982\u4e0b\u5f62\u5f0f\u7684 INSERT \u8bed\u53e5\u53d1\u5f80 Doris\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO example_tbl VALUES\n(1000, "baidu1", 3.25)\n(2000, "baidu2", 4.25)\n(3000, "baidu3", 5.25);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6279\u6b21\u5927\u5c0f"),(0,r.kt)("p",{parentName:"li"},"\u56e0\u4e3a\u662f\u5728\u5ba2\u6237\u7aef\u8fdb\u884c\u6279\u91cf\u5904\u7406\uff0c\u6240\u4ee5\u4e00\u6279\u6b21\u8fc7\u5927\u7684\u8bdd\uff0c\u4f1a\u5360\u7528\u5ba2\u6237\u7aef\u7684\u5185\u5b58\u8d44\u6e90\uff0c\u9700\u5173\u6ce8\u3002"),(0,r.kt)("p",{parentName:"li"},"Doris \u540e\u7eed\u4f1a\u652f\u6301\u670d\u52a1\u7aef\u7684 PrepareStatemnt\uff0c\u656c\u8bf7\u671f\u5f85\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u539f\u5b50\u6027"),(0,r.kt)("p",{parentName:"li"},"\u548c\u5176\u4ed6\u5230\u5bfc\u5165\u65b9\u5f0f\u4e00\u6837\uff0cINSERT \u64cd\u4f5c\u672c\u8eab\u4e5f\u652f\u6301\u539f\u5b50\u6027\u3002\u6bcf\u4e00\u4e2a INSERT \u64cd\u4f5c\u90fd\u662f\u4e00\u4e2a\u5bfc\u5165\u4e8b\u52a1\uff0c\u80fd\u591f\u4fdd\u8bc1\u4e00\u4e2a INSERT \u4e2d\u7684\u6240\u6709\u6570\u636e\u539f\u5b50\u6027\u7684\u5199\u5165\u3002"),(0,r.kt)("p",{parentName:"li"},"\u524d\u9762\u63d0\u5230\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u4f7f\u7528 INSERT \u5bfc\u5165\u6570\u636e\u65f6\uff0c\u91c7\u7528 \u201d\u6279\u201c \u7684\u65b9\u5f0f\u8fdb\u884c\u5bfc\u5165\uff0c\u800c\u4e0d\u662f\u5355\u6761\u63d2\u5165\u3002"),(0,r.kt)("p",{parentName:"li"},"\u540c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u6bcf\u6b21 INSERT \u64cd\u4f5c\u8bbe\u7f6e\u4e00\u4e2a Label\u3002\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-scenes/load-atomicity"},"Label \u673a\u5236")," \u53ef\u4ee5\u4fdd\u8bc1\u64cd\u4f5c\u7684\u5e42\u7b49\u6027\u548c\u539f\u5b50\u6027\uff0c\u6700\u7ec8\u505a\u5230\u6570\u636e\u7684\u4e0d\u4e22\u4e0d\u91cd\u3002\u5173\u4e8e INSERT \u4e2d Label \u7684\u5177\u4f53\u7528\u6cd5\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"INSERT")," \u6587\u6863\u3002"))))}d.isMDXComponent=!0}}]);