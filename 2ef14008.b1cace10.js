(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(448)),o={},c={unversionedId:"os.isfile",id:"os.isfile",isDocsHomePage:!1,title:"os.isfile",description:"Checks for the existence of file.",source:"@site/docs/os.isfile.md",slug:"/os.isfile",permalink:"/premake-core/docs/os.isfile",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.isfile.md",version:"current",sidebar:"mainSidebar",previous:{title:"os.isdir",permalink:"/premake-core/docs/os.isdir"},next:{title:"os.ishost",permalink:"/premake-core/docs/os.ishost"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Checks for the existence of file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'os.isfile("path")\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"path")," is the file system path to check."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"True")," if a matching file is found; ",Object(i.b)("strong",{parentName:"p"},"false")," is there is no such file system path, or if the path points to a directory instead of a file."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 4.0 or later."),Object(i.b)("h3",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/os.isdir"},"os.isdir")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/os.stat"},"os.stat"))))}p.isMDXComponent=!0},448:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||i;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);