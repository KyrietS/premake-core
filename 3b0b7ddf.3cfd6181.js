(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(372)),o={},c={unversionedId:"io.writefile",id:"io.writefile",isDocsHomePage:!1,title:"io.writefile",description:"write content to the file at filename, which may or may not exist.",source:"@site/docs/io.writefile.md",slug:"/io.writefile",permalink:"/premake-core/docs/io.writefile",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/io.writefile.md",version:"current",sidebar:"mainSidebar",previous:{title:"io.utf8",permalink:"/premake-core/docs/io.utf8"},next:{title:"json.decode",permalink:"/premake-core/docs/json.decode"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Availability",id:"availability",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"write ",Object(a.b)("inlineCode",{parentName:"p"},"content")," to the file at ",Object(a.b)("inlineCode",{parentName:"p"},"filename"),", which may or may not exist."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},"io.writefile(filename, content)\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"filename")," - string name of a file which need not exist."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"content")," - string containing data to put in ",Object(a.b)("inlineCode",{parentName:"li"},"filename"),".")),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 5.0.0 alpha 12 or later."))}u.isMDXComponent=!0},372:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return s}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),b=n,s=f["".concat(o,".").concat(b)]||f[b]||m[b]||a;return r?i.a.createElement(s,c(c({ref:t},p),{},{components:r})):i.a.createElement(s,c({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);