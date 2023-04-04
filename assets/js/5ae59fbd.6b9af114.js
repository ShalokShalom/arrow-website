"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[5743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"from-fp",title:"From other FP languages",sidebar_position:1},i="From other FP languages",l={unversionedId:"learn/quickstart/from-fp",id:"learn/quickstart/from-fp",title:"From other FP languages",description:"Arrow is heavily influenced by functional programming. If you're used to working",source:"@site/content/docs/learn/quickstart/from-fp.md",sourceDirName:"learn/quickstart",slug:"/learn/quickstart/from-fp",permalink:"/learn/quickstart/from-fp",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/quickstart/from-fp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"from-fp",title:"From other FP languages",sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Quickstart",permalink:"/learn/quickstart/"},next:{title:"Migration to Arrow 1.2.0",permalink:"/learn/quickstart/migration"}},s={},p=[{value:"Computation blocks",id:"computation-blocks",level:2},{value:"<code>suspend</code> instead of <code>IO</code>",id:"suspend-instead-of-io",level:2},{value:"Higher-kinded abstractions",id:"higher-kinded-abstractions",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"from-other-fp-languages"},"From other FP languages"),(0,r.kt)("p",null,"Arrow is heavily influenced by functional programming. If you're used to working\nwith those concepts, the journey to Arrow should be a pleasant one. In this\nsection, we review the most important differences with other ecosystems."),(0,r.kt)("admonition",{title:"scala",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-lang.org/api/current/scala/index.html"},"Scala Standard Library")," contains\nmany of the types provided by Arrow like ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-lang.org/api/current/scala/util/Either.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Either")),".\nThere's also a vibrant community which brings even more functional features,\nlike the ",(0,r.kt)("a",{parentName:"p",href:"https://typelevel.org/"},"Typelevel ecosystem"),". ")),(0,r.kt)("admonition",{title:"haskell",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.haskell.org/"},"Haskell")," is often considered the prime example of a\npure functional programming language. Most of the utilities in Arrow are\nfound in ",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base"},"their ",(0,r.kt)("inlineCode",{parentName:"a"},"base")," library"),".")),(0,r.kt)("h2",{id:"computation-blocks"},"Computation blocks"),(0,r.kt)("p",null,"Both Scala and Haskell have special support for types which define a\n",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," or bind operation, namely\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/tour/for-comprehensions.html"},(0,r.kt)("inlineCode",{parentName:"a"},"for")," comprehensions"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Haskell/do_notation"},(0,r.kt)("inlineCode",{parentName:"a"},"do")," notation"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"Either")," is one such type, so you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"do")," to perform validation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def mkPerson(name: String, age: Int): Either[Problem, Person] = for {\n  name_ <- validName(name)\n  age_  <- validAge(age)\n} yield Person(name_, age_)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"mkPerson :: String -> Int -> Either Problem Person\nmkPerson name age = do\n  name_ <- validName name\n  age_  <- validAge age\n  pure (Person name_ age_)\n")),(0,r.kt)("p",null,"In Haskell you can get closer to this style using ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative")," operators.\nThe code still looks different than its pure counterpart, since you need\nto sprinkle ",(0,r.kt)("inlineCode",{parentName:"p"},"(<$>)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"(<*>)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"mkPerson name age = Person <$> validName name <*> validAge age\n")),(0,r.kt)("p",null,"Kotlin doesn't provide such a generic construct. However, Arrow provides a similar\nsyntax for ",(0,r.kt)("a",{parentName:"p",href:"../../typed-errors/working-with-typed-errors/"},"error types"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must explicitly request to work with an error type, using ",(0,r.kt)("inlineCode",{parentName:"li"},"either"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"result"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"nullable"),", instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"for"),". Those functions live in\nthe ",(0,r.kt)("a",{parentName:"li",href:"https://apidocs.arrow-kt.io/arrow-core/arrow.core.raise/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"arrow.core.raise"))," package."),(0,r.kt)("li",{parentName:"ul"},"Every usage of ",(0,r.kt)("inlineCode",{parentName:"li"},"<-")," translates into a call to ",(0,r.kt)("inlineCode",{parentName:"li"},".bind()"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun mkUser(name: String, age: Int): Either<Problem, Person> = either {\n  val name_ = validName(name).bind()\n  val age_  = validAge(age).bind()\n  Person(name_, age_)\n}\n")),(0,r.kt)("p",null,"Furthermore, the result of ",(0,r.kt)("inlineCode",{parentName:"p"},".bind()")," is just of regular type, so you can\ncompletely inline the calls if desired. This style is very similar to\nHaskell's use of ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative")," operators, except that operators appear\nat the level of arguments, instead of at the level of functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun mkUser(name: String, age: Int): Either<Problem, Person> = either {\n  Person(validName(name).bind(), validAge(age).bind())\n}\n")),(0,r.kt)("admonition",{title:"No zip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It's common to use functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," to combine values inside a\nwrapper, instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," comprehension. In Haskell this often takes\nthe form of ",(0,r.kt)("inlineCode",{parentName:"p"},"(<$>)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"(<*>)"),". In Arrow we prefer to use blocks,\nexcept when ",(0,r.kt)("a",{parentName:"p",href:"../../coroutines/parallel/"},"dealing with concurrency"),".")),(0,r.kt)("admonition",{title:"No traverse",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to apply an effectful operation to every element of a collection,\nyou need to use a function different from ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", usually called ",(0,r.kt)("inlineCode",{parentName:"p"},"traverse"),".\nThis split does not exist in Arrow: you can use the same functions you know\nand love from the collections API inside one of these blocks.")),(0,r.kt)("h2",{id:"suspend-instead-of-io"},(0,r.kt)("inlineCode",{parentName:"h2"},"suspend")," instead of ",(0,r.kt)("inlineCode",{parentName:"h2"},"IO")),(0,r.kt)("p",null,"The utilities provided by Arrow for working with side effects are based on\n",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/coroutines-guide.html"},"coroutines"),", that is,\nfunctions marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"suspend"),". In contrast,\nHaskell introduces a special ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," wrapper\ntype to mark side-effects, as done by\npopular Scala libraries like\n",(0,r.kt)("a",{parentName:"p",href:"https://typelevel.org/cats-effect/"},"Cats Effect"),". "),(0,r.kt)("admonition",{title:"Read more",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Our ",(0,r.kt)("a",{parentName:"p",href:"../../design/"},(0,r.kt)("em",{parentName:"a"},"Design"))," section includes a ",(0,r.kt)("a",{parentName:"p",href:"../../design/receivers-flatmap/"},"post"),"\ncomparing the different approaches for effect handling.")),(0,r.kt)("h2",{id:"higher-kinded-abstractions"},"Higher-kinded abstractions"),(0,r.kt)("p",null,"Both Scala and Haskell allow abstractions that operate at the level of\ntype constructors. For example, a function like ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," which always has\nthe form ",(0,r.kt)("inlineCode",{parentName:"p"},"F<A>.flatMap(next: (A) -> F<B>): F<B>")," is part of an interface /\ntype class called ",(0,r.kt)("inlineCode",{parentName:"p"},"Monad"),". Kotlin doesn't provide this feature, but Arrow\nstill follows the naming convention for consistency. The following list\nrelates the names to abstractions in ",(0,r.kt)("a",{parentName:"p",href:"https://typelevel.org/cats/"},"Cats"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base"},"Haskell's ",(0,r.kt)("inlineCode",{parentName:"a"},"base")),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map")," comes from ",(0,r.kt)("a",{parentName:"li",href:"https://typelevel.org/cats/typeclasses/functor.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Functor")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contramap")," comes from ",(0,r.kt)("a",{parentName:"li",href:"https://typelevel.org/cats/typeclasses/contravariant.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Contravariant"))," functors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fold")," comes from ",(0,r.kt)("a",{parentName:"li",href:"https://typelevel.org/cats/typeclasses/foldable.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Foldable")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zip")," comes from ",(0,r.kt)("a",{parentName:"li",href:"https://typelevel.org/cats/typeclasses/applicative.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Applicative")),",\nalthough it's called ",(0,r.kt)("inlineCode",{parentName:"li"},"product")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"(&&)")," in other languages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"traverse")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"sequence")," come from ",(0,r.kt)("a",{parentName:"li",href:"https://typelevel.org/cats/typeclasses/traverse.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Traversable")),",\nbut those functions are being ",(0,r.kt)("strong",{parentName:"li"},"deprecated"),", because the same behavior can\nbe achieved with regular list functions and computation blocks.")),(0,r.kt)("admonition",{title:"Semigroup and Monoid",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Arrow Core contains ",(0,r.kt)("inlineCode",{parentName:"p"},"Semigroup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Monoid")," as interfaces. They are, however,\nmarked as deprecated, and due for removal in Arrow 2.0. Functions that required\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Semigroup")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Monoid")," argument have been replaced by variants which take\nthe combination function, and the corresponding empty element. This design\nfits better with other parts of the Kotlin ecosystem, like the ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/fold.html"},(0,r.kt)("inlineCode",{parentName:"a"},"fold")),"\nfunction in ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlin.collections"),".")))}d.isMDXComponent=!0}}]);