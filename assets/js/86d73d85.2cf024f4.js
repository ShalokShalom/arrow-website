"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[2367],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:4},o="Why suspend over IO",s={unversionedId:"learn/design/suspend-io",id:"learn/design/suspend-io",title:"Why suspend over IO",description:"Other functional ecosystems, Scala and Haskell among others,",source:"@site/content/docs/learn/design/suspend-io.md",sourceDirName:"learn/design",slug:"/learn/design/suspend-io",permalink:"/learn/design/suspend-io",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/design/suspend-io.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"learnSidebar",previous:{title:"Receivers vs. flatMap",permalink:"/learn/design/receivers-flatmap"},next:{title:"Integrations",permalink:"/learn/integrations"}},p={},l=[{value:"Ergonomics",id:"ergonomics",level:2},{value:"Safety / Purity / Referential transparency",id:"safety--purity--referential-transparency",level:2},{value:"Effect mixing",id:"effect-mixing",level:2},{value:"Domain errors",id:"domain-errors",level:3},{value:"Dependency injection",id:"dependency-injection",level:3},{value:"Performance",id:"performance",level:2}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"why-suspend-over-io"},"Why suspend over IO"),(0,r.kt)("p",null,"Other functional ecosystems, Scala and Haskell among others,\nuse a ",(0,r.kt)("a",{parentName:"p",href:"../../quickstart/from-fp/#computation-blocks"},"monadic model for side effects"),". The key component of this model\nis a wrapper called ",(0,r.kt)("inlineCode",{parentName:"p"},"IO"),". Arrow has adopted a different model,\nbased on ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," and top-level extension functions over\n",(0,r.kt)("inlineCode",{parentName:"p"},"suspend () -> A"),". This section explains the rationale behind this choice."),(0,r.kt)("p",null,"The reason for using ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," is because you care about writing side-effecting code in a safe and referential transparent manner.\nAdditionally, ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," offers powerful concurrent operators and cancellation in addition of offering a referential transparent runtime.\nThese properties are what makes using ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," powerful, and ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," offers the exact same properties but natively in the language with support from the compiler. "),(0,r.kt)("admonition",{title:"Arrow and Kotlin",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"One of the main goals of Arrow is to provide APIs which feel idiomatic to\nKotlin developers. This section should be read on that light; what is a good\nchoice in Kotlin may not have the right trade-offs in other ecosystems.")),(0,r.kt)("h2",{id:"ergonomics"},"Ergonomics"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IO")," requires a wrapper in the return type: ",(0,r.kt)("inlineCode",{parentName:"p"},"fun number(): IO<Int>"),", and thus we always have to work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," type to access the value we care about within.\nA typical pattern for this using ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap"),", so let's say we want to calculate 3 numbers and return them as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triple"),".\nTo make the example concrete we use names inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://typelevel.org/cats-effect/docs/getting-started"},"Cats Effect"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun number(): IO<Int> = IO.pure(1)\n\nfun triple(): IO<Triple<Int, Int, Int>> =\n  number().flatMap { a ->\n    number().flatMap { b ->\n      number().map { c ->\n        Triple(a, b, c)\n      }\n    }\n  }\n")),(0,r.kt)("p",null,"So simply to call a function 3 times, and combine the result into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Triple")," we had to use ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," twice and ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),".\nWhat that means under the hood we'll discuss in the performance section but in terms of ergonomics this is not ideal.\nEspecially not if we can compare it to the following ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," code.\nWe can see that we can forget about ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", and construct the ",(0,r.kt)("inlineCode",{parentName:"p"},"Triple")," and call ",(0,r.kt)("inlineCode",{parentName:"p"},"number()")," three times directly in the constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun number(): Int = 1\n\nsuspend fun triple(): Triple<Int, Int, Int> = \n  Triple(number(), number(), number())\n")),(0,r.kt)("admonition",{title:"Conclusion",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ergonomics of ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," are clearly better here, and this is a very important point in Kotlin since the language aims for high ergonomics and developer friendly constructs.")),(0,r.kt)("h2",{id:"safety--purity--referential-transparency"},"Safety / Purity / Referential transparency"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What guarantees does ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," bring, and does ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," offer the same guarantees?")),(0,r.kt)("p",null,"At a conceptual level, ",(0,r.kt)("inlineCode",{parentName:"p"},"IO<A>")," always results in a successful value, or\nfinishes with an exception. This can be clearly seen in Cats Effect,\nwhere ",(0,r.kt)("a",{parentName:"p",href:"https://typelevel.org/cats-effect/api/3.x/cats/effect/IO.html#unsafeRunAsync(cb:Either%5BThrowable,A%5D=%3EUnit)(implicitruntime:cats.effect.unsafe.IORuntime):Unit"},(0,r.kt)("inlineCode",{parentName:"a"},"unsafeRunAsync")),"\nresults in ",(0,r.kt)("inlineCode",{parentName:"p"},"Either<Throwable, A>"),".\nThis is done so that any exceptions that occur within the ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," API can be safely returned to the user, and it can be recovered from at any point in the code.\nImportant here is that a ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable")," that occurs in an async thread is safely captured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," as well and can be recovered from at any point."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," always results in ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/"},(0,r.kt)("inlineCode",{parentName:"a"},"Result<A>")),"\nwhich is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"Either<Throwable, A>"),", and it can be used to offer the same safety guarantees as ",(0,r.kt)("inlineCode",{parentName:"p"},"IO"),".\nSo the ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," API can also always return any exception safely to the user, and it can be recovered from at any point in the code.\nIn contrast to ",(0,r.kt)("inlineCode",{parentName:"p"},"IO"),", we can only find ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/start-coroutine.html"},(0,r.kt)("inlineCode",{parentName:"a"},"startCoroutine")),"\nin the standard library, and has the same behavior as ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafeRunAsync"),".\nInstead of ",(0,r.kt)("inlineCode",{parentName:"p"},"f: (Either<Throwable, A>) -> Unit")," you provide ",(0,r.kt)("inlineCode",{parentName:"p"},"f: (Result<A>) -> Unit")," to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend () -> A")," program."),(0,r.kt)("admonition",{title:"Conclusion",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"suspend () -> A")," offers us the exact same guarantees as ",(0,r.kt)("inlineCode",{parentName:"p"},"IO<A>"),".")),(0,r.kt)("h2",{id:"effect-mixing"},"Effect mixing"),(0,r.kt)("p",null,"In this section we compare the ability to mix two effects, one of them being\nthe ability to perform side-effectful operations. In particular, we compare\n",(0,r.kt)("em",{parentName:"p"},"monad transformers")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend"),"."),(0,r.kt)("h3",{id:"domain-errors"},"Domain errors"),(0,r.kt)("p",null,"When writing functional code style we often want to express our domain errors as clearly as possible, a popular pattern is to return ",(0,r.kt)("inlineCode",{parentName:"p"},"Either<DomainError, SuccessValue>"),".\nLet's assume following domain, and compare two snippets: one using ",(0,r.kt)("inlineCode",{parentName:"p"},"IO<Either<E, A>>"),", and another ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend () -> Either<E, A>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import arrow.core.Either\nimport arrow.core.Either.Left\nimport arrow.core.Either.Right\n\n/* inline */ class Id(val id: Long)\nobject PersistenceError\n\ndata class User(val email: String, val name: String)\ndata class ProcessedUser(val id: Id, val email: String, val name: String)\n\nsuspend fun fetchUser(): Either<PersistenceError, User> =\n  Right(User("simon@arrow-kt.io", "Simon"))\n\nsuspend fun User.process(): Either<PersistenceError, ProcessedUser> =\n  if (email.contains(Regex("^(.+)@(.+)$"))) Right(ProcessedUser(Id(1), email, name))\n  else Left(PersistenceError)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Using IO<Either<E, A>>"',title:'"Using',"IO<Either<E,":!0,'A>>"':!0},"import arrow.fx.*\n\nfun ioProgram(): IO<Either<PersistenceError, ProcessedUser>> =\n IO.fx {\n   val res = !IO.effect { fetchUser() }\n\n   !res.fold({ error ->\n     IO.just(Either.Left(error))\n   }, { user ->\n     IO.effect { user.process() }\n   })\n }\n\n// Or unwrapped in `suspend`\nsuspend suspendedIOProgram(): Either<PersistenceError, ProcessedUser> =\n ioProgram().suspended()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Using suspend () -> Either<E, A>"',title:'"Using',suspend:!0,"()":!0,"->":!0,"Either<E,":!0,'A>"':!0},"import arrow.core.raise.either\n\nsuspend fun suspendProgram(): Either<PersistenceError, ProcessedUser> =\n  either {\n    val user = fetchUser().bind()\n    val processed = user.process().bind()\n    processed\n  }\n")),(0,r.kt)("p",null,"The above two examples demonstrate how much simpler ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," is over its ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," counterpart and how the ",(0,r.kt)("inlineCode",{parentName:"p"},"either")," computation block allows us to bind values of ",(0,r.kt)("inlineCode",{parentName:"p"},"Either")," to extract their right side all while inside ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend"),". Arrow allows intermixing effects in suspension. What otherwise would have required the ",(0,r.kt)("inlineCode",{parentName:"p"},"EitherT")," transformer over ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," now it can just be expressed by wrapping in ",(0,r.kt)("inlineCode",{parentName:"p"},"either")," instead"),(0,r.kt)("h3",{id:"dependency-injection"},"Dependency injection"),(0,r.kt)("p",null,"We can use extension functions to do functional dependency injection with similar semantics as ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Kleisli"),".\nThey allow us to elegantly define syntax for a certain type."),(0,r.kt)("p",null,"Let's reuse our previous domain of",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ProcessedUser"),", but let's introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"Repo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Persistence")," layers to mimic what could be a small app with a couple layers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface Repo {\n  suspend fun fetchUsers(): List<User>\n}\n\ninterface Persistence {\n  suspend fun User.process(): Either<PersistenceError, ProcessedUser>\n\n  suspend fun List<User>.process(): Either<PersistenceError, List<ProcessedUser>> =\n    either { map { it.process().bind() } }\n}\n")),(0,r.kt)("p",null,"Given the above defined layers we can easily compose them by creating a product which implements the dependencies by delegation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class DataModule(\n  persistence: Persistence,\n  repo: Repo\n) : Persistence by persistence, Repo by repo\n")),(0,r.kt)("p",null,"We can also define top-level functions based on constraints on the receiver.\nHere we define ",(0,r.kt)("inlineCode",{parentName:"p"},"getProcessedUsers")," which can only be called where ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," is both ",(0,r.kt)("inlineCode",{parentName:"p"},"Repo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Persistence"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Generic top-level function based on syntax enabled by [Persistence] & [Repo] constraint\n */\nsuspend fun <R> R.getProcessedUsers(): Either<PersistenceError, List<ProcessedUser>>\n        where R : Repo,\n              R : Persistence = fetchUsers().process()\n")),(0,r.kt)("admonition",{title:"Context receivers",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"../receivers-flatmap/"},"Context receivers")," offer a nicer approach to composition of layers.")),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("admonition",{title:"In short",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," is extremely fast in comparison to ",(0,r.kt)("inlineCode",{parentName:"p"},"IO<A>"),", since ",(0,r.kt)("inlineCode",{parentName:"p"},"IO<A>")," is built at runtime and ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," is built by the compiler.")),(0,r.kt)("p",null,"Working with an actual data type such as ",(0,r.kt)("inlineCode",{parentName:"p"},"IO<A>")," implies that each composition of our program has some allocation cost.\nThis happens because ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," requires different data classes to move computation from the stack to the heap in order to compose them and preserve properties such as lazy evaluation semantics. In contrast, when using ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend"),", the Kotlin compiler is aware of function composition on each suspension point and can desugar and specializes the program into more efficient target code. The code generated by the Kotlin compiler is better in terms of allocations and throughput when compared to other implementations of ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," in the JVM."),(0,r.kt)("p",null,"Let's take our previous example from ergonomics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import arrow.fx.IO\n\nfun number(): IO<Int> = IO.pure(1)\n\nfun triple(): IO<Triple<Int, Int, Int>> =\n  number().flatMap { a ->\n    number().flatMap { b ->\n      number().map { c ->\n        Triple(a, b, c)\n      }\n    }\n  }\n")),(0,r.kt)("p",null,"If we translate this piece of code to the ",(0,r.kt)("inlineCode",{parentName:"p"},"data class")," used, for example, in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typelevel/cats-effect/blob/series/3.x/core/shared/src/main/scala/cats/effect/IO.scala"},"Cats Effect"),",\nwe need no less than 6 ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun number(): IO<Int> = IO.Just(1)\n\nfun triple(): IO<Triple<Int, Int, Int>> =\n  IO.FlatMap(IO.Pure(1)) { a ->\n    IO.FlatMap(IO.Pure(1)) { b ->\n      IO.Map(IO.Pure(1)) { c -> Triple(a, b, c) }\n    }\n  }\n")),(0,r.kt)("p",null,"This is necessary so when ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafeRun")," is invoked the ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," program can find the branch representing the kind of operation of ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," that needs to be interpreted. In the example above ",(0,r.kt)("inlineCode",{parentName:"p"},"IO.FlatMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IO.Map")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IO.Pure")),(0,r.kt)("p",null,"In contrast, ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," can simply be wired by the Kotlin compiler eliminating the need for additional ",(0,r.kt)("inlineCode",{parentName:"p"},"sealed class")," declarations and allocations keeping computations in the stack instead of maintaining value level in memory representations of our program.\nThe Kotlin compiler rewrites the suspend program to a super fast runtime which uses a switch table and mutable state machine to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," program.\nFurthermore, the Kotlin compiler applies other optimizations focused on the speed of ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend")," and memory usage of suspension, making it suitable for hot spots and places where otherwise allocations-based data types are not an option."))}m.isMDXComponent=!0}}]);