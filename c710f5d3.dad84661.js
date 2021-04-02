(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{336:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(417)),c={},p={unversionedId:"group",id:"group",isDocsHomePage:!1,title:"group",description:'Starts a "workspace group", a virtual folder to contain one or more projects.',source:"@site/docs/group.md",slug:"/group",permalink:"/premake-core/docs/group",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/group.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"gccprefix",permalink:"/premake-core/docs/gccprefix"},next:{title:"headerdir",permalink:"/premake-core/docs/headerdir"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Starts a "workspace group", a virtual folder to contain one or more projects.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'group("name")\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"name")," is the name of the virtual folder, as it should appear in the IDE. Nested groups may be created by separating the names with forward slashes."),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Workspaces."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"5.0 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n\n-- put the projects "Tests1" and "Tests2" in a virtual folder named "Tests"\n\ngroup "Tests"\n\n    project "Tests1"\n      -- Tests1 stuff goes here\n\n   project "Tests2"\n      -- Tests2 stuff goes here\n\n-- Any project defined after the call to group() will go into that group. The\n-- project can be defined in a different script though.\n\ngroup "Tests"\n\n    include "tests/tests1"\n    include "tests/tests2"\n\n-- Groups can be nested with forward slashes, like a file path.\n\ngroup "Tests/Unit"\n\n-- To "close" a group and put projects back at the root level use\n-- an empty string for the name.\n\ngroup ""\n\n   project "TestHarness"\n')),Object(o.b)("p",null,"The group value is latched the first time a project is declared but it can be overriden later:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local prj = project "Tests1"\nprj.group = "NotActuallyATest"\n')),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'project("Tests1").group = "NotActuallyATest"\n')))}l.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,p(p({ref:t},i),{},{components:r})):a.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);