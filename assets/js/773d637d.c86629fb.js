(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[899],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9750:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={title:"Removing Values"},l={unversionedId:"Removing-Values",id:"Removing-Values",isDocsHomePage:!1,title:"Removing Values",description:"The remove...() set of functions remove one or more values from a list of configuration values. Every configuration list in the Premake API has a corresponding remove function: flags() has removeflags(), defines() has removedefines(), and so on.",source:"@site/docs/Removing-Values.md",sourceDirName:".",slug:"/Removing-Values",permalink:"/premake-core/docs/Removing-Values",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Removing-Values.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{title:"Removing Values"}},u=[{value:"Applies To",id:"applies-to",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The remove...() set of functions remove one or more values from a list of configuration values. Every configuration list in the Premake API has a corresponding remove function: ",(0,a.kt)("a",{parentName:"p",href:"flags"},"flags()")," has removeflags(), ",(0,a.kt)("a",{parentName:"p",href:"defines"},"defines()")," has removedefines(), and so on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'remove... { "values_to_remove" }\n')),(0,a.kt)("h2",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"Project configurations."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"One or more values to remove. If multiple values are specified, use the Lua table syntax."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Remove the NoExceptions flag from a previous configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'removeflags "NoExceptions"\n')),(0,a.kt)("p",null,"You can use wildcards in removes. This example will remove both WIN32 and WIN64 from the defines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'defines { "WIN32", "WIN64", "LINUX", "MACOSX" }\nremovedefines "WIN*"\n')))}p.isMDXComponent=!0}}]);