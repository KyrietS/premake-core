(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(417)),l={},i={unversionedId:"toolset",id:"toolset",isDocsHomePage:!1,title:"toolset",description:"Selects the compiler, linker, etc. which are used to build a project or configuration.",source:"@site/docs/toolset.md",slug:"/toolset",permalink:"/premake-core/docs/toolset",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/toolset.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617049134,sidebar:"docs",previous:{title:"targetsuffix",permalink:"/premake-core/docs/targetsuffix"},next:{title:"undefines",permalink:"/premake-core/docs/undefines"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Selects the compiler, linker, etc. which are used to build a project or configuration."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'toolset ("identifier")\n')),Object(o.b)("p",null,"If no toolset is specified for a configuration, the system or IDE default will be used."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"identifier")," is a string identifier for the toolset. Premake includes the following toolsets by default."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Toolset identifier")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"clang")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"http://clang.llvm.org"},"Clang"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"dotnet")),Object(o.b)("td",{parentName:"tr",align:null},"The system's default C# compiler")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"gcc")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://gcc.gnu.org"},"GNU Compiler Collection"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"msc")),Object(o.b)("td",{parentName:"tr",align:null},"Microsoft C/C++ compiler")))),Object(o.b)("p",null,"If a specific toolset version is desired, it may be specified as part of the identifer, separated by a dash. See the examples below."),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Project configurations."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 and later. Versions are currently only implemented for Visual Studio 2010+."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Specify version 110 of the Windows platform toolset."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'toolset "msc-v110" -- or...\ntoolset "v100"    -- for those more familiar with Visual Studio\'s way\n')),Object(o.b)("p",null,"Use ",Object(o.b)("a",{parentName:"p",href:"http://llvm.org/builds/"},"Clang/C2")," with Visual Studio"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'toolset "msc-llvm-vs2014"\n')),Object(o.b)("p",null,"Use the toolset for Windows XP"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'toolset "v140_xp"\n')))}b.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);