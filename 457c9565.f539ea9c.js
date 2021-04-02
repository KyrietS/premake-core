(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(417)),o={},l={unversionedId:"buildoptions",id:"buildoptions",isDocsHomePage:!1,title:"buildoptions",description:"Passes arguments directly to the compiler command line without translation.",source:"@site/docs/buildoptions.md",slug:"/buildoptions",permalink:"/premake-core/docs/buildoptions",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/buildoptions.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"buildmessage",permalink:"/premake-core/docs/buildmessage"},next:{title:"buildoutputs",permalink:"/premake-core/docs/buildoutputs"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Passes arguments directly to the compiler command line without translation."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'buildoptions { "options" }\n')),Object(a.b)("p",null,"If a project includes multiple calls to ",Object(a.b)("inlineCode",{parentName:"p"},"buildoptions")," the lists are concatenated, in the order in which they appear in the script."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"options")," is a list of compiler flags and options, specific to a particular compiler."),Object(a.b)("h3",{id:"applies-to"},"Applies To"),Object(a.b)("p",null,"Project configurations."),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 4.0 or later."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"pkg-config")," style configuration when building on Linux with GCC. Build options are always compiler specific and should be targeted to a particular toolset."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'configuration { "linux", "gmake" }\n  buildoptions { "`wx-config --cxxflags`", "-ansi", "-pedantic" }\n')))}s.isMDXComponent=!0},417:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);