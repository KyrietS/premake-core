(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{215:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(448)),i={},c={unversionedId:"os.rmdir",id:"os.rmdir",isDocsHomePage:!1,title:"os.rmdir",description:"Removes an existing directory as well as any files or subdirectories it contains.",source:"@site/docs/os.rmdir.md",slug:"/os.rmdir",permalink:"/premake-core/docs/os.rmdir",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.rmdir.md",version:"current",sidebar:"mainSidebar",previous:{title:"os.remove",permalink:"/premake-core/docs/os.remove"},next:{title:"os.stat",permalink:"/premake-core/docs/os.stat"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Removes an existing directory as well as any files or subdirectories it contains."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'os.rmdir("path")\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"path")," is the file system path to be removed."),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"True if successful, otherwise nil and an error message."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.0 or later."),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/os.chdir"},"os.chdir")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/os.getcwd"},"os.getcwd")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/os.mkdir"},"os.mkdir"))))}u.isMDXComponent=!0},448:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return t?a.a.createElement(d,c(c({ref:r},s),{},{components:t})):a.a.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);