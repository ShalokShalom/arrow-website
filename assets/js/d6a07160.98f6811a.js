"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[4425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={authors:"vergauwen_simon",description:"This is my first post on Docusaurus 2. And this is more text for the description. I just want this to be broken.",image:"/img/sample-image.jpg",tags:["arrow","kotlin"]},a="My first Kotlin Blogpost",l={permalink:"/community/blog/2022/02/13/first-kotlin-blog-post",editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/blog/2022-02-13-first-kotlin-blog-post.md",source:"@site/content/blog/2022-02-13-first-kotlin-blog-post.md",title:"My first Kotlin Blogpost",description:"This is my first post on Docusaurus 2. And this is more text for the description. I just want this to be broken.",date:"2022-02-13T00:00:00.000Z",formattedDate:"February 13, 2022",tags:[{label:"arrow",permalink:"/community/blog/tags/arrow"},{label:"kotlin",permalink:"/community/blog/tags/kotlin"}],readingTime:1.555,hasTruncateMarker:!1,authors:[{name:"Simon Vergauwen",title:"Arrow maintainer & Principal Engineer @ Xebia Functional",url:"https://github.com/nomisRev",imageURL:"https://github.com/nomisRev.png",key:"vergauwen_simon"}],frontMatter:{authors:"vergauwen_simon",description:"This is my first post on Docusaurus 2. And this is more text for the description. I just want this to be broken.",image:"/img/sample-image.jpg",tags:["arrow","kotlin"]},prevItem:{title:"Domain Model Validation In Kotlin: Part 1",permalink:"/community/blog/2022/02/22/domain-model-validation-in-kotlin-part-1"},nextItem:{title:"Announcing Arrow Analysis - a Kotlin compiler plug-in",permalink:"/community/blog/2022/02/02/announcing-arrow-analysis"}},s={authorsImageUrls:[void 0]},p=[{value:"Verifying the output of System.out",id:"verifying-the-output-of-systemout",level:2},{value:"Verifying the output using custom logic",id:"verifying-the-output-using-custom-logic",level:2},{value:"Verifying the snippet using assertions",id:"verifying-the-snippet-using-assertions",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document includes some code snippets and some other stuff.\nThere are three different kinds of ",(0,i.kt)("em",{parentName:"p"},"tested")," snippets we can write,\nand two ways you can get them to generate both the example ",(0,i.kt)("strong",{parentName:"p"},"and")," the test."),(0,i.kt)("h2",{id:"verifying-the-output-of-systemout"},"Verifying the output of System.out"),(0,i.kt)("p",null,"We can quite simply verify the output of a snippet by writing a snippet like this,\nand writing an accompanying text block with the output below.\nHere we tell knit to generate both the example and the test by adding the ",(0,i.kt)("strong",{parentName:"p"},"link")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--- TEST --\x3e")," directive.\nWhen the link matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"knit.dir")," specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"knit.properties")," it will generate both the example and the test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun example() {\n    println("Hello World!")\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can get the full code ",(0,i.kt)("a",{target:"_blank",href:n(1938).Z},"here"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello World!\n")),(0,i.kt)("p",null,"We can do the same for another snippet, but this time we specify knit to generate an example using the ",(0,i.kt)("inlineCode",{parentName:"p"},"KNIT")," directive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun example() {\n    println("Hello World 2!")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello World 2!\n")),(0,i.kt)("h2",{id:"verifying-the-output-using-custom-logic"},"Verifying the output using custom logic"),(0,i.kt)("p",null,"We can also verify the output using custom logic, by specifying it inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST")," directive.\nThis can be useful for asserting output that is very long, or non-deterministic. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'suspend fun example() {\n  (1..100).parMap(Dispatchers.Default) { println("${Thread.currentThread().name} ~> $it") }\n}\n')),(0,i.kt)("h2",{id:"verifying-the-snippet-using-assertions"},"Verifying the snippet using assertions"),(0,i.kt)("p",null,"And we can have a final example where we use assertions, instead of verifying the output.\nWe in this case add an import for ",(0,i.kt)("inlineCode",{parentName:"p"},"shouldBe"),", and specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST assert")," param."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun example() {\n    "Hello World 3!" shouldBe "Hello World 3!"\n}\n')))}m.isMDXComponent=!0},1938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/example-basic-01-7e48d86a4d43c9c54e316ef405c2009d.kt"}}]);