"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[9280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},83507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:7},o="3rd-party libraries (Laws)",s={unversionedId:"ecosystem/analysis/laws",id:"ecosystem/analysis/laws",title:"3rd-party libraries (Laws)",description:"Is a library you use not compiled with Arrow Analysis? I could tell you to open an issue in their repository and convince their authors, but this is not always possible. For those cases Arrow Analysis provides a way to declare pre- and postconditions separately from the implementation, using @Law annotations. In fact, this is the way we package the analysis information related to Kotlin's stdlib.",source:"@site/content/docs/ecosystem/analysis/laws.md",sourceDirName:"ecosystem/analysis",slug:"/ecosystem/analysis/laws",permalink:"/ecosystem/analysis/laws",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/ecosystem/analysis/laws.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"ecosystemSidebar",previous:{title:"Fields and wrappers",permalink:"/ecosystem/analysis/wrappers"},next:{title:"Java support",permalink:"/ecosystem/analysis/java"}},l={},p=[{value:"Attaching laws",id:"attaching-laws",level:2},{value:"Organizing laws",id:"organizing-laws",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3rd-party-libraries-laws"},"3rd-party libraries (Laws)"),(0,r.kt)("p",null,"Is a library you use not compiled with Arrow Analysis? I could tell you to open an issue in their repository and convince their authors, but this is not always possible. For those cases Arrow Analysis provides a way to declare pre- and postconditions separately from the implementation, using ",(0,r.kt)("inlineCode",{parentName:"p"},"@Law")," annotations. In fact, this is the way we package the analysis information related to Kotlin's ",(0,r.kt)("inlineCode",{parentName:"p"},"stdlib"),"."),(0,r.kt)("p",null,"It might be the case that another 4rd-party provides the Arrow Analysis information for the 3rd-party library. In that case, just include ",(0,r.kt)("strong",{parentName:"p"},"both")," in your project. Oftentimes the Arrow Analysis information can be included as a ",(0,r.kt)("inlineCode",{parentName:"p"},"compileOnly")," dependency, since it's not used at run-time. You do ",(0,r.kt)("strong",{parentName:"p"},"not")," have to ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," anything extra, just use the 3rd-party library as usual. "),(0,r.kt)("h2",{id:"attaching-laws"},"Attaching laws"),(0,r.kt)("p",null,"To attach information about a 3rd-party function you declare a function somewhere else (it doesn't matter where), and annotate it with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Law"),". Its body must follow a very restrictive form: it should only contain ",(0,r.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"post"),", and a ",(0,r.kt)("strong",{parentName:"p"},"single")," call to the 3rd-party function with the arguments in the ",(0,r.kt)("strong",{parentName:"p"},"same order")," they appeared in the original definition."),(0,r.kt)("p",null,"For example, this is the way to declare that an empty list has size 0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import arrow.analysis.Law\n\n@Law inline fun <T> emptyListLaw(): List<T> =\n  emptyList<T>().post({ it.size == 0 }) { "empty list has size 0" }\n')),(0,r.kt)("p",null,"As a practical tip, we find useful to mark the function as ",(0,r.kt)("inlineCode",{parentName:"p"},"inline"),". That way you avoid the case in which you call the law instead of the function you want to decorate in the body, since inline functions cannot be recursive."),(0,r.kt)("h3",{id:"organizing-laws"},"Organizing laws"),(0,r.kt)("p",null,"If you want to define pre and post-conditions for an entire library, it's often useful to organize those by package or type. To help with this task, you can define several laws inside an ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," marked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Laws")," annotation (notice the final ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),".)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import arrow.analysis.Law\nimport arrow.analysis.Laws\n\n@Laws object ListLaws {\n  @Law inline fun <T> emptyListLaw(): List<T> =\n    emptyList<T>().post({ it.size == 0 }) { "empty list has size 0" }\n  @Law inline fun <T> getLaw(index: Int): T {\n    pre(index >= 0 && index < this.size) { "index within bounds" }\n    return get(index)\n  }\n  // ... and many more!\n}\n')),(0,r.kt)("p",null,"Note that each function must still be marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Law"),"."))}d.isMDXComponent=!0}}]);