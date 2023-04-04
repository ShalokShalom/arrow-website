"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[8639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Summary",description:"Summary",sidebar_position:11,sidebar_custom_props:{icon:"icon-tutorial.svg"}},i="<decorated-text icon={frontMatter.sidebar_custom_props.icon} title={frontMatter.title} />",o={unversionedId:"learn/summary",id:"learn/summary",title:"Summary",description:"Summary",source:"@site/content/docs/learn/summary.md",sourceDirName:"learn",slug:"/learn/summary",permalink:"/learn/summary",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/summary.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Summary",description:"Summary",sidebar_position:11,sidebar_custom_props:{icon:"icon-tutorial.svg"}},sidebar:"learnSidebar",previous:{title:"Integrations",permalink:"/learn/integrations"}},p={},s=[{value:"Handle any potential outcomes",id:"handle-any-potential-outcomes",level:4},{value:"Obtain the result as a wrapper type",id:"obtain-the-result-as-a-wrapper-type",level:4},{value:"Embed any potential errors in the block",id:"embed-any-potential-errors-in-the-block",level:4},{value:"DSL syntax",id:"dsl-syntax",level:4},{value:"Wrapper types",id:"wrapper-types",level:4},{value:"Independently in parallel",id:"independently-in-parallel",level:4},{value:"Race (only the fastest is returned)",id:"race-only-the-fastest-is-returned",level:4}],u={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decorated-text-iconfrontmattersidebar_custom_propsicon-titlefrontmattertitle-"},(0,r.kt)("decorated-text",{icon:l.sidebar_custom_props.icon,title:l.title})),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("span",{style:{fontSize:"115%"}},"Typed errors")," (",(0,r.kt)("a",{href:"../typed-errors"},"guide"),")"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Run a computation with potential errors"),(0,r.kt)("p",null,"For any given value of ",(0,r.kt)("inlineCode",{parentName:"p"},"val program: Raise<E>.() -> A"),", the following functions are available:"),(0,r.kt)("h4",{id:"handle-any-potential-outcomes"},"Handle any potential outcomes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recover(program, error)")," to recover from any error."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fold(program, error, success)")," to handle error and success case, and re-throw any exceptions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fold(program, exception, error, success)")," to handle exception, error and success case.")),(0,r.kt)("h4",{id:"obtain-the-result-as-a-wrapper-type"},"Obtain the result as a wrapper type"),(0,r.kt)("p",null,"These functions create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Raise")," scope where all the operators in this section become available."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"either(program)")," to obtain ",(0,r.kt)("inlineCode",{parentName:"li"},"Either<E, A>"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result(program)")," to obtain ",(0,r.kt)("inlineCode",{parentName:"li"},"Result<A>"),", the error type is fixed to ",(0,r.kt)("inlineCode",{parentName:"li"},"Throwable"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nullable(program)")," to obtain ",(0,r.kt)("inlineCode",{parentName:"li"},"A?"),", the error type is fixed to ",(0,r.kt)("inlineCode",{parentName:"li"},"Null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"option(program)")," to obtain ",(0,r.kt)("inlineCode",{parentName:"li"},"Option<A>"),", the error type is fixed to ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),".")),(0,r.kt)("h4",{id:"embed-any-potential-errors-in-the-block"},"Embed any potential errors in the block"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the call has ",(0,r.kt)("inlineCode",{parentName:"li"},"Raise<E>")," as receiver, ",(0,r.kt)("em",{parentName:"li"},"nothing")," is needed."),(0,r.kt)("li",{parentName:"ul"},"If the call returns a wrapper type (",(0,r.kt)("inlineCode",{parentName:"li"},"Result"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Either"),", ...), call ",(0,r.kt)("inlineCode",{parentName:"li"},".bind()"),"."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Indicate that an error occurred"),(0,r.kt)("h4",{id:"dsl-syntax"},"DSL syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raise")," to ",(0,r.kt)("em",{parentName:"li"},"raise")," a typed error of ",(0,r.kt)("inlineCode",{parentName:"li"},"E")," meaning that the computation has failed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ensure")," to ",(0,r.kt)("em",{parentName:"li"},"raise")," a typed error of ",(0,r.kt)("inlineCode",{parentName:"li"},"E")," when predicate is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ensureNotNull")," to ",(0,r.kt)("em",{parentName:"li"},"raise")," a typed error of ",(0,r.kt)("inlineCode",{parentName:"li"},"E")," when value is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,r.kt)("h4",{id:"wrapper-types"},"Wrapper types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Either.Left")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".left()")," to wrap a value as error in ",(0,r.kt)("inlineCode",{parentName:"li"},"Either")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Ior.Left")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".leftIor()")," to wrap a value as error in ",(0,r.kt)("inlineCode",{parentName:"li"},"Ior")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Handle potential errors (",(0,r.kt)("a",{href:"../typed-errors/#recovering-from-typed-errors-and-exceptions"},"guide"),")"),(0,r.kt)("p",null,"These functions allow raising errors of the same type that the surrounding block."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recover(program, error)")," to recover from any error."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"catch(program, exception)")," to perform some action when the block throws an exception."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Accumulate errors (",(0,r.kt)("a",{href:"../typed-errors/#validation-accumulating-errors"},"guide"),")"),(0,r.kt)("p",null,"These functions use ",(0,r.kt)("inlineCode",{parentName:"p"},"NonEmptyList<E>")," as the surrounding error type, or take ",(0,r.kt)("inlineCode",{parentName:"p"},"(E, E) -> E")," as the error accumulator."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zipOrAccumulate")," to operate over independent blocks, with potentially different types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapOrAccumulate")," to operate over a collection of items.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("span",{style:{fontSize:"115%"}},"Coroutines / ",(0,r.kt)("code",null,"suspend"),"ed actions")," (guide)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Run several of them"),(0,r.kt)("h4",{id:"independently-in-parallel"},"Independently in parallel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parMap")," to operate over a collection of items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parZip")," to combine the result of independent actions, with potentially different return types.")),(0,r.kt)("h4",{id:"race-only-the-fastest-is-returned"},"Race (only the fastest is returned)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raceN")," to race 2 or 3 computations."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Protect from potential problems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Schedule.retry")," to repeat an action until successful."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Schedule.repeat")," to repeat an action, correctly handling problems."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resourceScope")," for correct acquisition and release of resources.")),(0,r.kt)("p",null,"For more resilience options check the ",(0,r.kt)("a",{parentName:"p",href:"../resilience/"},"corresponding section in the docs"),"."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("span",{style:{fontSize:"115%"}},"Immutable data")," (",(0,r.kt)("a",{href:"../immutable-data"},"guide"),")"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Generate optics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User-defined data"),": mark the class with the ",(0,r.kt)("inlineCode",{parentName:"li"},"@optics")," annotation and apply the KSP plug-in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Collections"),": traversals that work on every element of a collections are available in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Every")," object."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Obtain data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get")," obtains the single focused element. ",(0,r.kt)("span",{style:{fontSize:"80%"}},"(Available for ",(0,r.kt)("inlineCode",{parentName:"li"},"Lens"),".)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getOrNull")," obtains an optional focused element as nullable. ",(0,r.kt)("span",{style:{fontSize:"80%"}},"(Available for ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Prism"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Lens"),".)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getAll")," obtains all focused elements as ",(0,r.kt)("inlineCode",{parentName:"li"},"List"),". ",(0,r.kt)("span",{style:{fontSize:"80%"}},"(Available for every optic.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"foldMap")," combines all the focused elements in a single element. ",(0,r.kt)("span",{style:{fontSize:"80%"}},"(Available for every optic.)"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Traversal")," type offers an API closely matching that of ",(0,r.kt)("inlineCode",{parentName:"p"},"Iterable"),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Copy value with modified data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modify")," applies an operation to every focused element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set")," changes the value of every focused element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"copy")," provides a DSL to perform several modifications over the same value."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Generate a new value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reverseGet")," constructs a value by means of a ",(0,r.kt)("inlineCode",{parentName:"li"},"Prism"),".")))))}d.isMDXComponent=!0}}]);