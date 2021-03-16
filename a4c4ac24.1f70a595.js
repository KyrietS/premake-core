(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{263:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(372)),o={},l={unversionedId:"table.isempty",id:"table.isempty",isDocsHomePage:!1,title:"table.isempty",description:"Returns true if the table is empty, and contains no indexed or keyed values.",source:"@site/docs/table.isempty.md",slug:"/table.isempty",permalink:"/premake-core/docs/table.isempty",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table.isempty.md",version:"current",sidebar:"mainSidebar",previous:{title:"table.insertflat",permalink:"/premake-core/docs/table.insertflat"},next:{title:"table.join",permalink:"/premake-core/docs/table.join"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns true if the table is empty, and contains no indexed or keyed values."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},"table.isempty(tbl)\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tbl")," is the table to be tested."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"True if the table is empty."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."))}p.isMDXComponent=!0},372:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return r?a.a.createElement(d,l(l({ref:t},u),{},{components:r})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);