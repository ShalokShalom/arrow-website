"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[7712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:6},r="Fields and wrappers",s={unversionedId:"ecosystem/analysis/wrappers",id:"ecosystem/analysis/wrappers",title:"Fields and wrappers",description:"Arrow Analysis supports the addition of invariants to types, but what happens when you already have a type and want to add information relative to it? And when may that situation arise? There are two different features to keep more information: fields and wrapper types.",source:"@site/content/docs/ecosystem/analysis/wrappers.md",sourceDirName:"ecosystem/analysis",slug:"/ecosystem/analysis/wrappers",permalink:"/ecosystem/analysis/wrappers",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/ecosystem/analysis/wrappers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"ecosystemSidebar",previous:{title:"Types and invariants",permalink:"/ecosystem/analysis/types"},next:{title:"3rd-party libraries (Laws)",permalink:"/ecosystem/analysis/laws"}},l={},p=[{value:"Fields",id:"fields",level:2},{value:"Definition of fields",id:"definition-of-fields",level:3},{value:"Inline classes",id:"inline-classes",level:2},{value:"Collections",id:"collections",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fields-and-wrappers"},"Fields and wrappers"),(0,a.kt)("p",null,"Arrow Analysis supports the addition of invariants to types, but what happens when you ",(0,a.kt)("em",{parentName:"p"},"already")," have a type and want to add information relative to it? And when may that situation arise? There are two different features to keep more information: fields and wrapper types."),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("p",null,"The declaration of pre and post-conditions may not only talk about the value of the arguments, but also reference their properties, fields, and even some of their functions. This is used, for example, in the contract of the indexing operation of a list, in which we refer to its ",(0,a.kt)("inlineCode",{parentName:"p"},"size"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import arrow.analysis.pre\n\nclass List<T> {\n  val size: Int\n    get() = TODO() // complicated computation\n  \n  fun get(index: Int): T {\n    pre(index >= 0 && index < this.size) { "index within bounds" }\n    // complicated code to get the value\n  }\n}\n')),(0,a.kt)("p",null,"We use the word ",(0,a.kt)("strong",{parentName:"p"},"field")," to collectively refer to those elements of an argument we are allowed to refer to in a pre- or post-condition, or an invariant of a mutable variable or type. There are two sources for fields:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Properties and fields, like ",(0,a.kt)("inlineCode",{parentName:"li"},"size")," above."),(0,a.kt)("li",{parentName:"ol"},"Instance or extension methods with ",(0,a.kt)("em",{parentName:"li"},"no")," arguments, this allows you to use ",(0,a.kt)("inlineCode",{parentName:"li"},"isNotEmpty()")," as a field.")),(0,a.kt)("p",null,"Given the rules above, the following is accepted by Arrow Analysis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import arrow.analysis.pre\n\nfun <T> List<T>.first(): T {\n  pre(this.isNotEmpty()) { "list should not be empty" }\n  return this.get(0)\n}\n')),(0,a.kt)("h3",{id:"definition-of-fields"},"Definition of fields"),(0,a.kt)("p",null,"Actually, if you think about it, the fact that the previous code snippet is accepted is not obvious at all! There must be an additional reasoning step for Arrow Analysis to understand that is the list is not empty, then calling ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," as index is allowed, since the precondition for ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," only mentions ",(0,a.kt)("inlineCode",{parentName:"p"},"size"),"."),(0,a.kt)("p",null,"It is very common, though, to have this kind of relationship between properties. Furthermore, many style guidelines suggest to use simpler Boolean predicates like ",(0,a.kt)("inlineCode",{parentName:"p"},"isNotEmpty()")," instead of the longer ",(0,a.kt)("inlineCode",{parentName:"p"},"size > 0"),". To establish this broken link, Arrow Analysis follows this rule:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If a field declares ",(0,a.kt)("strong",{parentName:"p"},"no")," pre-conditions, and a ",(0,a.kt)("strong",{parentName:"p"},"single")," post-condition of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"{ it == SOMETHING }"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"SOMETHING")," is taken as the ",(0,a.kt)("strong",{parentName:"p"},"definition")," of that field.")),(0,a.kt)("p",null,"The tool then deems each usage of the derived field as being equivalent to its definition. In our case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," class would declare the post-condition in ",(0,a.kt)("inlineCode",{parentName:"p"},"isNotEmpty"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import arrow.analysis.post\n\nclass List<T> {\n  fun isNotEmpty(): Boolean {\n    // complicated code\n    return something.post({ this.size > 0 }) { "non-emptiness is size > 0" }\n  }\n}\n')),(0,a.kt)("p",null,"We remark that this definition only applies at the level of Arrow Analysis. The ",(0,a.kt)("em",{parentName:"p"},"implementation")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"isNotEmpty")," is free to use a more performant algorithm. It's during the reasoning stage within the analysis that we make use of the equivalence with ",(0,a.kt)("inlineCode",{parentName:"p"},"size > 0"),"."),(0,a.kt)("h2",{id:"inline-classes"},"Inline classes"),(0,a.kt)("p",null,"Sometimes there's a particular invariant we repeat over and over in our code. For example, a list not being empty or a number being positive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun average(xs: List<Int>): Int {\n  pre(xs.isNotEmpty()) { "list not empty" }\n  TODO()\n}\n\nfun increment(x: Int): Int {\n  pre(x > 0) { "non-negative" }\n  return (x + 1).post({ it > 0 }) { "positive" }\n}\n')),(0,a.kt)("p",null,"In those cases it might be worth defining a new type where the invariant is encoded once and for all. Here we show those types corresponding to non-empty lists and positive numbers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@JvmInline\nvalue class NonEmptyList<A>(val value: List<A>) {\n  init { require(value.isNotEmpty()) { "not empty" } }\n}\n\n@JvmInline\nvalue class Positive(val value: Int) {\n  init { require(value > 0) { "positive" } }\n}\n')),(0,a.kt)("p",null,"That way your pre- and post-conditions are encoded in the types themselves. Alas, in many cases you need to access the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," or apply the constructor manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun average(xs: NonEmptyList<Int>): Int = TODO()\n\nfun increment(x: Positive): Positive {\n  return Positive(x.value + 1)\n}\n")),(0,a.kt)("p",null,"The good news is that the performance won't suffer. The ",(0,a.kt)("inlineCode",{parentName:"p"},"@JvmInline value")," at the beginning of the ",(0,a.kt)("inlineCode",{parentName:"p"},"NonEmptyList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Positive")," classes declare those as ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/inline-classes.html"},"inline classes"),'. The Kotlin compiler substituted ("inlines") any usage of inline classes by their underlying value, avoiding any additional heap allocations.'),(0,a.kt)("h2",{id:"collections"},"Collections"),(0,a.kt)("p",null,"Declaring wrappers to encode invariants become increasingly important when working with collection types (lists, sets, maps). Imagine we want to define a function which increments a list of positive values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// previous version of increment\nfun increment(x: Int): Int {\n  pre(x > 0) { "non-negative" }\n  return (x + 1).post({ it > 0 }) { "positive" }\n}\n\nfun List<Int>.example() = map { increment(it) }\n')),(0,a.kt)("p",null,"This will not work, as the analysis cannot guarantee that the value passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"increment")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," is indeed positive. Alas, there is no way to define a pre-condition which talks about ",(0,a.kt)("em",{parentName:"p"},"all the elements")," in the list (technically, that would involve quantifiers, and this is not supported by the logic in Arrow Analysis.) The solution is to use the corresponding wrapper type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun List<Positive>.example() = map { increment(it.value) }\n")),(0,a.kt)("p",null,"Note that in this case we didn't have to change our definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"increment")," to take ",(0,a.kt)("inlineCode",{parentName:"p"},"Positive")," values. Instead, by unwrapping with ",(0,a.kt)("inlineCode",{parentName:"p"},"it.value")," the condition ",(0,a.kt)("inlineCode",{parentName:"p"},"it.value > 0")," becomes available to the analysis, making the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"increment")," correct."),(0,a.kt)("p",null,"One important pattern in this case is the replacement of ",(0,a.kt)("inlineCode",{parentName:"p"},"filter"),"s with operations that introduce the wrapper types. For example, the following is not accepted by Arrow Analysis, because it is unaware of the predicate in ",(0,a.kt)("inlineCode",{parentName:"p"},"filter"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun moreExample(xs: List<Int>) = xs.filter { it > 0 }.example()\n")),(0,a.kt)("p",null,"This case can be worked around by replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"mapNotNull"),". Instead of simply removing the undesired elements, we also wrap the good ones in ",(0,a.kt)("inlineCode",{parentName:"p"},"Positive"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun moreExample(xs: List<Int>) = xs.mapNotNull {\n  if (it > 0) Positive(it) else null\n}.example()\n")),(0,a.kt)("p",null,'In the future we aim to introduce support for attaching invariants to types "on the spot". Other analyzers, like ',(0,a.kt)("a",{parentName:"p",href:"https://ucsd-progsys.github.io/liquidhaskell-blog/"},"LiquidHaskell"),", support this features by means of ",(0,a.kt)("a",{parentName:"p",href:"http://ucsd-progsys.github.io/liquidhaskell-tutorial/Tutorial_03_Basic.html"},(0,a.kt)("em",{parentName:"a"},"refinement types")),"."))}u.isMDXComponent=!0}}]);