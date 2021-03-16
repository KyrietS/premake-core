(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{276:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),i=(r(0),r(372)),l={},c={unversionedId:"path.islinkable",id:"path.islinkable",isDocsHomePage:!1,title:"path.islinkable",description:"Returns true if the specified path represents a file that can be linked against, based on its file extension.",source:"@site/docs/path.islinkable.md",slug:"/path.islinkable",permalink:"/premake-core/docs/path.islinkable",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.islinkable.md",version:"current",sidebar:"mainSidebar",previous:{title:"path.isframework",permalink:"/premake-core/docs/path.isframework"},next:{title:"path.isobjectfile",permalink:"/premake-core/docs/path.isobjectfile"}},o=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:o};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns true if the specified path represents a file that can be linked against, based on its file extension."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'path.islinkable("path")\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"path")," is the file system path to be tested."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"True if the path matches a well-known linkable file extension, which currently includes ",Object(i.b)("inlineCode",{parentName:"p"},".o"),", ",Object(i.b)("inlineCode",{parentName:"p"},".obj"),", ",Object(i.b)("inlineCode",{parentName:"p"},".a"),", ",Object(i.b)("inlineCode",{parentName:"p"},".lib"),", and ",Object(i.b)("inlineCode",{parentName:"p"},".so"),"."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."),Object(i.b)("h3",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/path.getextension"},"path.getextension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/path.hasextension"},"path.hasextension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/path.iscfile"},"path.iscfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/path.iscppfile"},"path.iscppfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/path.iscppheader"},"path.iscppheader")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/path.isframework"},"path.isframework")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/path.isobjectfile"},"path.isobjectfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/path.isresourcefile"},"path.isresourcefile"))))}s.isMDXComponent=!0},372:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,f=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return r?n.a.createElement(f,c(c({ref:t},p),{},{components:r})):n.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);