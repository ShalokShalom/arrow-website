"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[4872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),i=r(16550),s=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=v({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var f=r(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(h,(0,n.Z)({key:String(t)},e))}},2676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),l=r(85162);const i={title:"Quickstart",sidebar_custom_props:{icon:"icon-quickstart.svg",overview:!0}},s="<decorated-text icon={frontMatter.sidebar_custom_props.icon}>Quickstart</decorated-text>",u={unversionedId:"learn/quickstart/index",id:"learn/quickstart/index",title:"Quickstart",description:"Arrow is composed of different libraries; simply select the ones",source:"@site/content/docs/learn/quickstart/index.md",sourceDirName:"learn/quickstart",slug:"/learn/quickstart/",permalink:"/learn/quickstart/",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/quickstart/index.md",tags:[],version:"current",frontMatter:{title:"Quickstart",sidebar_custom_props:{icon:"icon-quickstart.svg",overview:!0}},sidebar:"learnSidebar",previous:{title:"Overview",permalink:"/learn/overview"},next:{title:"From other FP languages",permalink:"/learn/quickstart/from-fp"}},c={},p=[{value:"Enable the Maven Central repository",id:"enable-the-maven-central-repository",level:3},{value:"Include the dependencies",id:"include-the-dependencies",level:3},{value:"One by one",id:"one-by-one",level:4},{value:"Using version catalogs",id:"using-version-catalogs",level:4},{value:"Using a Bill-of-Materials (BOM)",id:"using-a-bill-of-materials-bom",level:4},{value:"Additional setup for plug-ins",id:"additional-setup-for-plug-ins",level:3},{value:"Alphas (development builds)",id:"alphas-development-builds",level:3}],d={toc:p},m="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},(0,a.kt)("decorated-text",{icon:i.sidebar_custom_props.icon},"Quickstart")),(0,a.kt)("p",null,"Arrow is composed of different libraries; simply select the ones\nyou need in your project."),(0,a.kt)("admonition",{title:"Multiplatform-ready",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All Arrow libraries are Multiplatform-ready, so you can use them in all of your\n",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/multiplatform.html"},"KMP")," projects. Be aware that\nsome instructions here may need to be slightly changed in that situation.")),(0,a.kt)("h3",{id:"enable-the-maven-central-repository"},"Enable the Maven Central repository"),(0,a.kt)("p",null,"Arrow is published in ",(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/"},"Maven Central"),", so you need to\nenable it as a source of dependencies in your build."),(0,a.kt)(o.Z,{groupId:"build",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradleKotlin",label:"Gradle (Kotlin)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n  mavenCentral()\n}\n"))),(0,a.kt)(l.Z,{value:"gradleGroovy",label:"Gradle (Groovy)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  mavenCentral()\n}\n"))),(0,a.kt)(l.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Maven includes the Maven Central repository by default.")))),(0,a.kt)("h3",{id:"include-the-dependencies"},"Include the dependencies"),(0,a.kt)("p",null,"You're now ready to include Arrow in your project. You have three possibilities\nthat correspond to three different ways of handling versioning in your build."),(0,a.kt)("h4",{id:"one-by-one"},"One by one"),(0,a.kt)("p",null,"Simply include the desired library in your ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," block or as a\n",(0,a.kt)("inlineCode",{parentName:"p"},"<dependency>")," if you're using Maven."),(0,a.kt)(o.Z,{groupId:"build",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradleKotlin",label:"Gradle (Kotlin)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n  implementation("io.arrow-kt:arrow-core:1.2.0")\n  implementation("io.arrow-kt:arrow-fx-coroutines:1.2.0")\n}\n'))),(0,a.kt)(l.Z,{value:"gradleGroovy",label:"Gradle (Groovy)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  implementation 'io.arrow-kt:arrow-core:1.2.0'\n  implementation 'io.arrow-kt:arrow-fx-coroutines:1.2.0'\n}\n"))),(0,a.kt)(l.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>io.arrow-kt</groupId>\n  <artifactId>arrow-core</artifactId>\n  <version>1.2.0</version>\n</dependency>\n<dependency>\n  <groupId>io.arrow-kt</groupId>\n  <artifactId>arrow-fx-coroutines</artifactId>\n  <version>1.2.0</version>\n</dependency>\n")))),(0,a.kt)("h4",{id:"using-version-catalogs"},"Using version catalogs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html"},"Version catalogs"),"\nprovide centralized management of versions. This is especially interesting when\nyour Gradle build has several subprojects."),(0,a.kt)(o.Z,{groupId:"build",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradleToml",label:"libs.version.toml (Common)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'[versions]\narrow = "1.2.0"\n# other versions\n\n[libraries]\narrow-core = { module = "io.arrow-kt:arrow-core", version.ref = "arrow" }\narrow-fx-coroutines = { module = "io.arrow-kt:arrow-fx-coroutines", version.ref = "arrow" }\n# other dependencies\n'))),(0,a.kt)(l.Z,{value:"gradleKotlin",label:"Gradle (Kotlin)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"dependencies {\n  implementation(libs.arrow.core)\n  implementation(libs.arrow.fx.coroutines)\n}\n"))),(0,a.kt)(l.Z,{value:"gradleGroovy",label:"Gradle (Groovy)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  implementation(libs.arrow.core)\n  implementation(libs.arrow.fx.coroutines)\n}\n"))),(0,a.kt)(l.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Version catalogs are only available in Gradle.")))),(0,a.kt)("h4",{id:"using-a-bill-of-materials-bom"},"Using a Bill-of-Materials (BOM)"),(0,a.kt)("p",null,"Another way to keep a single version for all Arrow dependencies in your build is\nto include ",(0,a.kt)("inlineCode",{parentName:"p"},"arrow-stack"),", which declares versions for the rest of the components."),(0,a.kt)(o.Z,{groupId:"build",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradleKotlin",label:"Gradle (Kotlin)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n  implementation(platform("io.arrow-kt:arrow-stack:1.2.0"))\n  // no versions on libraries\n  implementation("io.arrow-kt:arrow-core")\n  implementation("io.arrow-kt:arrow-fx-coroutines")\n}\n'))),(0,a.kt)(l.Z,{value:"gradleGroovy",label:"Gradle (Groovy)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  implementation platform('io.arrow-kt:arrow-stack:1.2.0')\n  // no versions on libraries\n  implementation 'io.arrow-kt:arrow-core'\n  implementation 'io.arrow-kt:arrow-fx-coroutines'\n}\n"))),(0,a.kt)(l.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.arrow-kt</groupId>\n    <artifactId>arrow-stack</artifactId>\n    <version>1.2.0</version>\n    <type>pom</type>\n    <scope>import</scope>\n</dependency>\n\x3c!-- no versions on libraries --\x3e\n<dependency>\n  <groupId>io.arrow-kt</groupId>\n  <artifactId>arrow-core</artifactId>\n</dependency>\n<dependency>\n  <groupId>io.arrow-kt</groupId>\n  <artifactId>arrow-fx-coroutines</artifactId>\n</dependency>\n")))),(0,a.kt)("h3",{id:"additional-setup-for-plug-ins"},"Additional setup for plug-ins"),(0,a.kt)("p",null,"If you're using the Optics component of Arrow, we provide a Kotlin compiler\nplug-in that can derive most of the boilerplate required to use it. This\nplug-in is built with ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ksp-overview.html"},"KSP"),",\nwhich requires an additional configuration step."),(0,a.kt)(o.Z,{groupId:"build",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradleKotlin",label:"Gradle (Kotlin)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  id("com.google.devtools.ksp") version "1.8.10-1.0.9"\n}\n\ndependencies {\n  implementation("io.arrow-kt:arrow-optics:1.2.0")\n  ksp("io.arrow-kt:arrow-optics-ksp-plugin:1.2.0")\n}\n'))),(0,a.kt)(l.Z,{value:"gradleGroovy",label:"Gradle (Groovy)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"plugins {\n  id 'com.google.devtools.ksp' version '1.8.10-1.0.9'\n}\n\ndependencies {\n  implementation 'io.arrow-kt:arrow-optics:1.2.0'\n  ksp 'io.arrow-kt:arrow-optics-ksp-plugin:1.2.0'\n}\n"))),(0,a.kt)(l.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"There's no official support for KSP in Maven.\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Dyescape/kotlin-maven-symbol-processing"},"This project"),"\nprovides unofficial support for that scenario.")))),(0,a.kt)("h3",{id:"alphas-development-builds"},"Alphas (development builds)"),(0,a.kt)("p",null,"For those wanting to live on the edge, we provide alphas of our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/arrow-kt/arrow"},"development\nbranch"),". Those are tagged with the upcoming\nversion, followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"-alpha.")," and the sequence number of the compilation.\nCheck ",(0,a.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/io.arrow-kt/arrow-core/1.1.5/versions"},"Maven Central"),"\nfor the most recent list of available versions."))}v.isMDXComponent=!0}}]);