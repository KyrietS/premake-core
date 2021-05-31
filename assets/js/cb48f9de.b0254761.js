(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[554],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1074:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={},p={unversionedId:"dotnetframework",id:"dotnetframework",isDocsHomePage:!1,title:"dotnetframework",description:"Selects a .NET framework version.",source:"@site/docs/dotnetframework.md",sourceDirName:".",slug:"/dotnetframework",permalink:"/premake-core/docs/dotnetframework",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/dotnetframework.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{},sidebar:"docs",previous:{title:"dofileopt",permalink:"/premake-core/docs/dofileopt"},next:{title:"dpiawareness",permalink:"/premake-core/docs/dpiawareness"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Selects a .NET framework version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'dotnetframework ("version")\n')),(0,o.kt)("p",null,"This value currently is only applied to Visual Studio 2005 or later, and GNU makefiles using Mono. If no .NET framework version is specified the toolset default is used."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"version")," is one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1.0"),(0,o.kt)("li",{parentName:"ul"},"1.1"),(0,o.kt)("li",{parentName:"ul"},"2.0"),(0,o.kt)("li",{parentName:"ul"},"3.0"),(0,o.kt)("li",{parentName:"ul"},"3.5"),(0,o.kt)("li",{parentName:"ul"},"4.0"),(0,o.kt)("li",{parentName:"ul"},"4.5"),(0,o.kt)("li",{parentName:"ul"},"4.6")),(0,o.kt)("h3",{id:"applies-to"},"Applies To"),(0,o.kt)("p",null,"Project configurations."),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Premake 5.0 or later."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Use the .NET framework 3.0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'dotnetframework "3.0"\n')),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/clr"},"clr")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/framework"},"framework"))))}s.isMDXComponent=!0}}]);