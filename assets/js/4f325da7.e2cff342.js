(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7899],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4511:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={},l={unversionedId:"debugextendedprotocol",id:"debugextendedprotocol",isDocsHomePage:!1,title:"debugextendedprotocol",description:"Specifies to use the 'extended-remote' protocol, which instructs GDB to maintain a persistent connection to gdbserver.",source:"@site/docs/debugextendedprotocol.md",sourceDirName:".",slug:"/debugextendedprotocol",permalink:"/premake-core/docs/debugextendedprotocol",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/debugextendedprotocol.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{},sidebar:"docs",previous:{title:"debugenvs",permalink:"/premake-core/docs/debugenvs"},next:{title:"debugformat",permalink:"/premake-core/docs/debugformat"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specifies to use the 'extended-remote' protocol, which instructs GDB to maintain a persistent connection to gdbserver."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"debugextendedprotocol (enabled)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," is a boolean value that specifies whether to use the 'extended remote' protocol."),(0,a.kt)("h3",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"Project configurations."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 5.0 or later."))}d.isMDXComponent=!0}}]);