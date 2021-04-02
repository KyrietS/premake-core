(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{394:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(417)),l={},o={unversionedId:"libdirs",id:"libdirs",isDocsHomePage:!1,title:"libdirs",description:"Specifies the library search paths for the linker.",source:"@site/docs/libdirs.md",slug:"/libdirs",permalink:"/premake-core/docs/libdirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/libdirs.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"largeaddressaware",permalink:"/premake-core/docs/largeaddressaware"},next:{title:"linkbuildoutputs",permalink:"/premake-core/docs/linkbuildoutputs"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Specifies the library search paths for the linker."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'libdirs { "paths" }\n')),Object(i.b)("p",null,"Library search directories are not well supported by the .NET tools. Visual Studio will change relative paths to absolute, making it difficult to share the generated project. MonoDevelop does not support search directories at all, using only the GAC. In general, it is better to include the full (relative) path to the assembly in ",Object(i.b)("a",{parentName:"p",href:"/premake-core/docs/links"},"links")," instead. C/C++ projects do not have this limitation."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"paths")," specifies a list of library search directories. Paths should be specified relative to the currently running script file."),Object(i.b)("h3",{id:"applies-to"},"Applies To"),Object(i.b)("p",null,"Project configurations."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 4.0 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,"Define two library file search paths."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'libdirs { "../lua/libs", "../zlib" }\n')),Object(i.b)("p",null,"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'libdirs { "../libs/**" }\n')))}p.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);