"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[2588],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(o),u=n,d=m["".concat(c,".").concat(u)]||m[u]||f[u]||a;return o?r.createElement(d,i(i({ref:t},p),{},{components:o})):r.createElement(d,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},74506:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={title:"How to fix the pain of modifying Kotlin nested data classes",image:"https://i2.wp.com/ivanmorgillo.com/wp-content/uploads/2020/10/pexels-photo-712786.jpeg",category:"articles",tags:["core","articles"],link:"https://ivanmorgillo.com/2020/10/28/how-to-fix-the-pain-of-modifying-kotlin-nested-data-classes/"},i=void 0,l={permalink:"/community/blog/2020/10/28/modifying-kotlin-nested-data-classes",editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/blog/2020-10-28-modifying-kotlin-nested-data-classes.md",source:"@site/content/blog/2020-10-28-modifying-kotlin-nested-data-classes.md",title:"How to fix the pain of modifying Kotlin nested data classes",description:"Lenses are not part of the Kotlin Standard Library yet, so we will need to use an Open Source library called Arrow-kt. Arrow-kt is a huge community effort to bring some of the missing functional programming features to Kotlin.",date:"2020-10-28T00:00:00.000Z",formattedDate:"October 28, 2020",tags:[{label:"core",permalink:"/community/blog/tags/core"},{label:"articles",permalink:"/community/blog/tags/articles"}],readingTime:.195,hasTruncateMarker:!1,authors:[],frontMatter:{title:"How to fix the pain of modifying Kotlin nested data classes",image:"https://i2.wp.com/ivanmorgillo.com/wp-content/uploads/2020/10/pexels-photo-712786.jpeg",category:"articles",tags:["core","articles"],link:"https://ivanmorgillo.com/2020/10/28/how-to-fix-the-pain-of-modifying-kotlin-nested-data-classes/"},prevItem:{title:"Arrow Promoted to Adopt by Technology Radar",permalink:"/community/blog/2020/10/28/arrow-promoted-to-adopt"},nextItem:{title:"Technology Radar Promotes Arrow to 'Adopt'",permalink:"/community/blog/2020/10/28/technology-radar-promotes-arrow"}},c={authorsImageUrls:[]},s=[],p={toc:s},m="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Lenses are not part of the Kotlin Standard Library yet, so we will need to use an Open Source library called Arrow-kt. Arrow-kt is a huge community effort to bring some of the missing functional programming features to Kotlin."))}f.isMDXComponent=!0}}]);