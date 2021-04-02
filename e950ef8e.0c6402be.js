(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{386:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),i=(t(0),t(417)),l={},o={unversionedId:"string.plural",id:"string.plural",isDocsHomePage:!1,title:"string.plural",description:"Returns a plural version of the provided string.",source:"@site/docs/string.plural.md",slug:"/string.plural",permalink:"/premake-core/docs/string.plural",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/string.plural.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"string.lines",permalink:"/premake-core/docs/string.lines"},next:{title:"string.sha1",permalink:"/premake-core/docs/string.sha1"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns a plural version of the provided string."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'pl = string.plural("str")\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"str")," is the string to be made plural."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"A plural version of the provided string."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'-- returns "projects"\npl = string.plural("project")\n\n-- returns "stories"\npl = string.plural("story")\n')))}u.isMDXComponent=!0},417:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=n,m=s["".concat(l,".").concat(b)]||s[b]||d[b]||i;return t?a.a.createElement(m,o(o({ref:r},p),{},{components:t})):a.a.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);