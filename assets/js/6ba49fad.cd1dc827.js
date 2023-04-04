"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[7491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"With Ktor",sidebar_position:1},i="SuspendApp with Ktor",s={unversionedId:"ecosystem/suspendapp/ktor",id:"ecosystem/suspendapp/ktor",title:"With Ktor",description:"There are some cases where it is convenient to gracefully shutdown a Ktor server. Basically, it is about giving some",source:"@site/content/docs/ecosystem/suspendapp/ktor.md",sourceDirName:"ecosystem/suspendapp",slug:"/ecosystem/suspendapp/ktor",permalink:"/ecosystem/suspendapp/ktor",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/ecosystem/suspendapp/ktor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"With Ktor",sidebar_position:1},sidebar:"ecosystemSidebar",previous:{title:"SuspendApp",permalink:"/ecosystem/suspendapp/"},next:{title:"With Kafka",permalink:"/ecosystem/suspendapp/kafka"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"suspendapp-with-ktor"},"SuspendApp with Ktor"),(0,o.kt)("p",null,"There are some cases where it is convenient to gracefully shutdown a Ktor server. Basically, it is about giving some\ntime to the server to finish some pending processing before turning it off."),(0,o.kt)("p",null,"Kubernetes is a good example of this need. When we're working with Kubernetes we often need to\nsupport ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-terminating-with-grace"},"Graceful Shutdown"),".\nKubernetes sends ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGTERM")," to our ",(0,o.kt)("em",{parentName:"p"},"Pod")," to signal it needs to gracefully shutdown.\nHowever, there is an issue which doesn't allow us to immediately shutdown when we receive ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGTERM")," from Kubernetes.\nOur pod can still receive traffic ",(0,o.kt)("strong",{parentName:"p"},"after")," ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGTERM"),", so we need to apply additional back-pressure to delay graceful\nshutdown."),(0,o.kt)("admonition",{title:"Additional reading",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More information on this can be found in this blog by ",(0,o.kt)("a",{parentName:"p",href:"https://philpearl.github.io/post/k8s_ingress/"},"Phil Pearl"),",\nand on ",(0,o.kt)("a",{parentName:"p",href:"https://learnk8s.io/graceful-shutdown"},"learnk8s.io"),".")),(0,o.kt)("p",null,"The module ",(0,o.kt)("inlineCode",{parentName:"p"},"suspendapp-ktor")," provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," constructor that lifts the Ktor ",(0,o.kt)("inlineCode",{parentName:"p"},"ApplicationEngine")," in to a Resource,\nrepresenting the ",(0,o.kt)("em",{parentName:"p"},"Engine")," running an ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"(i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"Netty"),") while supporting ",(0,o.kt)("a",{parentName:"p",href:"https://ktor.io/docs/auto-reload.html"},"auto-reload"),".\nThe example below introduces graceful shutdown for Kubernetes;\nwe additionally use ",(0,o.kt)("inlineCode",{parentName:"p"},"awaitCancellation")," to ",(0,o.kt)("em",{parentName:"p"},"await")," ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGTERM"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGINT")," or other shutdown hooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun main() = SuspendApp {\n  resourceScope {\n    server(Netty) {\n      routing {\n        get("/ping") {\n          call.respond("pong")\n        }\n      }\n    }\n    awaitCancellation()\n  }\n}\n')),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," function of our ",(0,o.kt)("inlineCode",{parentName:"p"},"ApplicationEngine")," is called, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"wait")," period before the beginning of the stop\nprocess (defaulted to ",(0,o.kt)("inlineCode",{parentName:"p"},"30.seconds"),"), this gives Kubernetes enough time to do all its network management before we shut down.\nTwo more parameters are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"grace")," which sets the number of seconds during which already inflight requests are allowed to continue before the shutdown process begins,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," which sets the number of seconds after which the server will be forceably shutdown.")),(0,o.kt)("admonition",{title:"Development mode",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the case that Ktor server is set in\n",(0,o.kt)("a",{parentName:"p",href:"https://ktor.io/docs/development-mode.html"},"development mode"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"wait")," period is ignored. ")))}d.isMDXComponent=!0}}]);