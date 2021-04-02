(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{310:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(417)),o={},p={unversionedId:"path.join",id:"path.join",isDocsHomePage:!1,title:"path.join",description:"Joins two path portions together into a single path.",source:"@site/docs/path.join.md",slug:"/path.join",permalink:"/premake-core/docs/path.join",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.join.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"path.isresourcefile",permalink:"/premake-core/docs/path.isresourcefile"},next:{title:"path.normalize",permalink:"/premake-core/docs/path.normalize"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Joins two path portions together into a single path."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'path.join("leading", "trailing", ...)\n')),Object(i.b)("p",null,"If trailing is an absolute path, then the leading portion is ignored, and the absolute path is returned instead (see below for examples)."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"leading")," is the beginning portion of the path; ",Object(i.b)("inlineCode",{parentName:"p"},"trailing")," is a portion to be merged. Multiple arguments may be specified, which will be joined in the order provided."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"A merged path."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 4.0 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'-- returns "MyWorkspace/MyProject"\np = path.join("MyWorkspace", "MyProject")\n\n-- returns "/usr/bin", because the trailing path is absolute\np = path.join("MyWorkspace", "/usr/bin")\n\n-- tokens are assumed to be absolute; this returns "$(ProjectDir)"\np = path.join("MyWorkspace", "$(ProjectDir)")\n')))}s.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,p(p({ref:t},l),{},{components:r})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);