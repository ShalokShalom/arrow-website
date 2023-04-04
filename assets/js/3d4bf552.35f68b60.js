"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[5600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:4},a="Concurrency primitives",c={unversionedId:"learn/coroutines/concurrency-primitives",id:"learn/coroutines/concurrency-primitives",title:"Concurrency primitives",description:"These types are not usually found in application code, but provide essential",source:"@site/content/docs/learn/coroutines/concurrency-primitives.md",sourceDirName:"learn/coroutines",slug:"/learn/coroutines/concurrency-primitives",permalink:"/learn/coroutines/concurrency-primitives",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/coroutines/concurrency-primitives.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"learnSidebar",previous:{title:"Transactional memory (STM)",permalink:"/learn/coroutines/stm"},next:{title:"Resilience",permalink:"/learn/resilience/"}},l={},p=[{value:"Atomic",id:"atomic",level:2},{value:"CountDownLatch",id:"countdownlatch",level:2},{value:"CyclicBarrier",id:"cyclicbarrier",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concurrency-primitives"},"Concurrency primitives"),(0,o.kt)("p",null,"These types are not usually found in application code, but provide essential\nfoundation blocks for larger patterns. They are also helpful during testing\nto simulate synchronization between different systems."),(0,o.kt)("admonition",{title:"Multiplatform-ready",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Arrow Fx library is Multiplatform-ready, so you can use it in all of your\n",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/multiplatform.html"},"KMP")," projects. In most cases,\nthe API provided by Arrow Fx follows the one for similar concepts in the JVM.")),(0,o.kt)("admonition",{title:"Structured concurrency",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"One key topic to understand concurrency in Kotlin is ",(0,o.kt)("em",{parentName:"p"},"Structured Concurrency"),".\nThe ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/coroutines-guide.html"},"official coroutines guide"),"\ngoes into quite some length to explain how coroutines should behave, especially\nin the events of exceptions and cancellations. Most of this complexity is hidden\naway when you use Arrow Fx ",(0,o.kt)("a",{parentName:"p",href:"../parallel"},"high-level operations"),".")),(0,o.kt)("h2",{id:"atomic"},"Atomic"),(0,o.kt)("p",null,"The separate ",(0,o.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-atomic/arrow.atomic/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"arrow-atomic")," library"),"\nprovides Multiplatform-ready atomic references.\nIn particular, their ",(0,o.kt)("inlineCode",{parentName:"p"},"getAndSet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getAndUpdate"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"compareAndSet")," operations\nare guaranteed to happen atomically; there's no possibility of two computations\nperforming these operations and getting an inconsistent state at the end."),(0,o.kt)("admonition",{title:"Atomic primitive types",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"You should not use generic ",(0,o.kt)("inlineCode",{parentName:"p"},"Atomic")," references with primitive types like\n",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),", as they break in unexpected ways in Kotlin Native. Instead, use\nthe provided ",(0,o.kt)("inlineCode",{parentName:"p"},"AtomicInt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AtomicBoolean"),", and so forth.")),(0,o.kt)("h2",{id:"countdownlatch"},"CountDownLatch"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-fx-coroutines/arrow.fx.coroutines/-count-down-latch/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"CountDownLatch")),"\nallows for awaiting a given number of countdown signals."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This type models the behavior of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CountDownLatch.html"},(0,o.kt)("inlineCode",{parentName:"a"},"java.util.concurrent.CountDownLatch")),".")),(0,o.kt)("h2",{id:"cyclicbarrier"},"CyclicBarrier"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-fx-coroutines/arrow.fx.coroutines/-cyclic-barrier/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"CyclicBarrier")),"\nis a synchronization mechanism that allows a set of coroutines to wait for each\nother to reach a certain point before continuing execution. It is called ",(0,o.kt)("em",{parentName:"p"},"cyclic"),"\nbecause it can be reused after all coroutines have reached the barrier and been released."),(0,o.kt)("p",null,"To use a ",(0,o.kt)("inlineCode",{parentName:"p"},"CyclicBarrier"),", each coroutine must call the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," method on the\nbarrier object, which will cause the coroutine to suspend until the required\nnumber of coroutines have reached the barrier.\nOnce all coroutines have reached the barrier, they resume execution."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This type models the behavior of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CyclicBarrier.html"},(0,o.kt)("inlineCode",{parentName:"a"},"java.util.concurrent.CyclicBarrier")),".")))}m.isMDXComponent=!0}}]);