"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[4165],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"What could possibly go wrong? - A safer programming with Arrow",image:"https://img.youtube.com/vi/C9SmleSSeGk/maxresdefault.jpg",category:"videos",tags:["core","videos"],link:"https://youtu.be/C9SmleSSeGk"},i=void 0,s={permalink:"/community/blog/2020/02/26/safer-programming-with-arrow",editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/blog/2020-02-26-safer-programming-with-arrow.md",source:"@site/content/blog/2020-02-26-safer-programming-with-arrow.md",title:"What could possibly go wrong? - A safer programming with Arrow",description:"Your Kotlin app grabs data from an API, transforms it and saves the processed data in a database. However, there are so many things that could go wrong at runtime treat your impure functions as computations with context, pass them around just like other values, and make the necessary unsafe invocation from a single point of your app, your main function.",date:"2020-02-26T00:00:00.000Z",formattedDate:"February 26, 2020",tags:[{label:"core",permalink:"/community/blog/tags/core"},{label:"videos",permalink:"/community/blog/tags/videos"}],readingTime:.785,hasTruncateMarker:!1,authors:[],frontMatter:{title:"What could possibly go wrong? - A safer programming with Arrow",image:"https://img.youtube.com/vi/C9SmleSSeGk/maxresdefault.jpg",category:"videos",tags:["core","videos"],link:"https://youtu.be/C9SmleSSeGk"},prevItem:{title:"FP with Kotlin/Arrow: Monad Comprehensions & Parallel Processing",permalink:"/community/blog/2020/02/26/fp-with-kotlin-arrow"},nextItem:{title:"Kotlin Functional Programming: Cleaner Composition with Monad Comprehensions in Arrow Fx",permalink:"/community/blog/2020/01/29/cleaner-composition-with-monad-comprehensions-arrow-fx"}},c={authorsImageUrls:[]},l=[],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Your Kotlin app grabs data from an API, transforms it and saves the processed data in a database. However, there are so many things that could go wrong at runtime: the API might be inaccessible, the data is not what you expected or the data can't be persisted in the database. You can start adding try catch blocks to your function in your objects, but there is a better way to do it: treat your impure functions as computations with context, pass them around just like other values, and make the necessary unsafe invocation from a single point of your app, your main function."),(0,n.kt)("p",null,"This talk will walk you through the core functional concepts of Arrow, you will learn how Some, Either and even IO are functor, applicative and monad. You can use the code example from this talk as a starting point for your Arrow-learning, to write safer, simpler and more elegant functional code in Kotlin."))}p.isMDXComponent=!0}}]);