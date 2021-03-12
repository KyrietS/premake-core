(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{252:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(448)),o={},c={unversionedId:"uuid",id:"uuid",isDocsHomePage:!1,title:"uuid",description:"Sets the Universally Unique Identifier (UUID) for a project.",source:"@site/docs/uuid.md",slug:"/uuid",permalink:"/premake-core/docs/uuid",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/uuid.md",version:"current",sidebar:"mainSidebar",previous:{title:"usingdirs",permalink:"/premake-core/docs/usingdirs"},next:{title:"vectorextensions",permalink:"/premake-core/docs/vectorextensions"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sets the ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/UUID"},"Universally Unique Identifier")," (UUID) for a project."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'uuid ("project_uuid")\n')),Object(i.b)("p",null,"UUIDs are synonymous (for Premake's purposes) with ",Object(i.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Globally_Unique_Identifier"},"Globally Unique Identifiers")," (GUID)."),Object(i.b)("p",null,"Premake automatically assigns a UUID to each project, which is used by the Visual Studio generators to identify the project within a workspace. This UUID is essentially random and will change each time the project file is generated. If you are storing the generated Visual Studio project files in a version control system, this will create a lot of unnecessary deltas. Using the ",Object(i.b)("inlineCode",{parentName:"p"},"uuid")," function, you can assign a fixed UUID to each project which never changes, removing the randomness from the generated projects."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"project_uuid"),' is the UUID for the current project. It should take the form "01234567-ABCD-ABCD-ABCD-0123456789AB" (see the examples below for some real UUID values). You can use the Visual Studio ',Object(i.b)("a",{parentName:"p",href:"http://msdn2.microsoft.com/en-us/library/ms241442(VS.80).aspx"},"guidgen")," tool to create new UUIDs, or ",Object(i.b)("a",{parentName:"p",href:"http://www.famkruithof.net/uuid/uuidgen"},"this website"),", or run Premake once to generate Visual Studio files and copy the assigned UUIDs."),Object(i.b)("h3",{id:"applies-to"},"Applies To"),Object(i.b)("p",null,"Projects."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"The current project UUID, or nil if no UUID has been set."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 4.0 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,"Set the UUID for a current project."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'uuid "BE2461B7-236F-4278-81D3-F0D476F9A4C0"\n')))}s.isMDXComponent=!0},448:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);