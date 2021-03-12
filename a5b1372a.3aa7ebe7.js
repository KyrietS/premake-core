(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{318:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(7),a=(r(0),r(448)),o={},l={unversionedId:"os.writefile_ifnotequal",id:"os.writefile_ifnotequal",isDocsHomePage:!1,title:"os.writefile_ifnotequal",description:"Writes a string to a file, if the string differs from the current version of the file.",source:"@site/docs/os.writefile_ifnotequal.md",slug:"/os.writefile_ifnotequal",permalink:"/premake-core/docs/os.writefile_ifnotequal",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.writefile_ifnotequal.md",version:"current",sidebar:"mainSidebar",previous:{title:"os.uuid",permalink:"/premake-core/docs/os.uuid"},next:{title:"package.loadlib",permalink:"/premake-core/docs/package.loadlib"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Writes a string to a file, if the string differs from the current version of the file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'ok, err = os.writefile_ifnotequal("text", "filename")\n')),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"text")," is the string to be written to the file."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"filename")," is the file system path to the target file."),Object(a.b)("h3",{id:"return-value"},"Return Value"),Object(a.b)("p",null,"True if successful, otherwise nil and an error message."),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 5.0 or later."))}s.isMDXComponent=!0},448:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,d=f["".concat(o,".").concat(b)]||f[b]||p[b]||a;return r?i.a.createElement(d,l(l({ref:t},u),{},{components:r})):i.a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);