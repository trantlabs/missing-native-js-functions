"use strict";(self.webpackChunkmissing_native_js_functions=self.webpackChunkmissing_native_js_functions||[]).push([[971],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),s=["components"],l={id:"index",title:"missing-native-js-functions",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"index",id:"index",title:"missing-native-js-functions",description:"npm version",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"missing-native-js-functions",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",next:{title:"Table of Contents",permalink:"/modules"}},c={},u=[{value:"Why use mnjsf?",id:"why-use-mnjsf",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"License",id:"license",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com/package/missing-native-js-functions"},(0,a.kt)("img",{parentName:"a",src:"https://flat.badgen.net/npm/v/missing-native-js-functions?style=flat-square&label=stable",alt:"npm version"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com/package/missing-native-js-functions"},(0,a.kt)("img",{parentName:"a",src:"https://flat.badgen.net/npm/dm/missing-native-js-functions?style=flat-square&label=stable",alt:"npm downloads"}))),(0,a.kt)("h1",{align:"center"},"Missing Native",(0,a.kt)("img",{width:"24",src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"}),"Functions"),(0,a.kt)("p",{align:"center"},"A zero-dependecy JavaScript utility library delivering ",(0,a.kt)("b",null,"missing")," native functions \ud83d\udcbc"),(0,a.kt)("h2",{id:"why-use-mnjsf"},"Why use mnjsf?"),(0,a.kt)("p",null,"mnjsf delivers functions missing from JavaScript"),(0,a.kt)("p",null,"\u276f \ud83d\udcbc ",(0,a.kt)("strong",{parentName:"p"},"Zero-Dependency")," Built without a dependency hell",(0,a.kt)("br",null),"\n\u276f \ud83d\udcd0 ",(0,a.kt)("strong",{parentName:"p"},"Lightweight")," 2.5KB",(0,a.kt)("br",null),"\n\u276f \ud83c\udf10 ",(0,a.kt)("strong",{parentName:"p"},"NodeJS/Browser Support")," use mnjsf in a browser or a Node.js application ",(0,a.kt)("br",null),"\n\u276f \u2728 ",(0,a.kt)("strong",{parentName:"p"},"Direct Call")," of utility functions on variables (",(0,a.kt)("inlineCode",{parentName:"p"},"[].last()"),") ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"This library extends the properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Global"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Math"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"String")),(0,a.kt)("h2",{id:"documentation"},(0,a.kt)("a",{parentName:"h2",href:"http://mnjsf.trantlabs.com/"},"Documentation")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'npm i missing-native-js-functions\n# or "yarn add missing-native-js-functions"\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"ES5 import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'require("missing-native-js-functions");\n')),(0,a.kt)("p",null,"ES6 import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import "missing-native-js-functions";\n')),(0,a.kt)("p",null,"use in Browser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/missing-native-js-functions/dist/mnjsf.min.js"><\/script>\n')),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Made with \ud83d\udc9a Published under MIT License."))}d.isMDXComponent=!0}}]);