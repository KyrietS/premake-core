(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(448)),l={},c={unversionedId:"clr",id:"clr",isDocsHomePage:!1,title:"clr",description:"Enables Microsoft's Common Language Runtime for a project or configuration.",source:"@site/docs/clr.md",slug:"/clr",permalink:"/premake-core/docs/clr",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/clr.md",version:"current",sidebar:"mainSidebar",previous:{title:"cleanextensions",permalink:"/premake-core/docs/cleanextensions"},next:{title:"compileas",permalink:"/premake-core/docs/compileas"}},i=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Enables Microsoft's Common Language Runtime for a project or configuration."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'clr "value"\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/k8d11d4s.aspx"},"/clr (Common Language Runtime Compilation)")," in the Visual Studio documentation for more information."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"value")," is one of the following:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Off"),Object(o.b)("td",{parentName:"tr",align:null},"No CLR support")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"On"),Object(o.b)("td",{parentName:"tr",align:null},"Enable CLR support")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Pure"),Object(o.b)("td",{parentName:"tr",align:null},'Enable pure mode MSIL. Equivalent to "On" for .NET projects.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Safe"),Object(o.b)("td",{parentName:"tr",align:null},'Enable verifiable MSIL. Equivalent to "On" for .NET projects.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Unsafe"),Object(o.b)("td",{parentName:"tr",align:null},'Enable unsafe operations. Equivalent to "On" for Managed C++ projects.')))),Object(o.b)("p",null,'CLR settings that do not make sense for the current configuration, such setting CLR support for a C# project to "Off", will be ignored.'),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Project configurations."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Set up a managed C++ project."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n  kind "ConsoleApp"\n  language "C++"\n  clr "On"\n')),Object(o.b)("p",null,"Enable unsafe code in a C# project."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n  kind "ConsoleApp"\n  language "C#"\n  clr "Unsafe"\n')))}b.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);