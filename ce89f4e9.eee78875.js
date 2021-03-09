(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{90:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(7),o=(t(0),t(96)),i={},c={unversionedId:"os.chdir",id:"os.chdir",isDocsHomePage:!1,title:"os.chdir",description:"Changes the current working directory.",source:"@site/docs/os.chdir.md",slug:"/os.chdir",permalink:"/premake-core/docs/os.chdir",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.chdir.md",version:"current",sidebar:"mainSidebar",previous:{title:"basedir",permalink:"/premake-core/docs/basedir"},next:{title:"os.mkdir",permalink:"/premake-core/docs/os.mkdir"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:l};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Changes the current working directory."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'ok, err = os.chdir("path")\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"path")," is the file system path to the new working directory."),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"True")," if successful, otherwise ",Object(o.b)("strong",{parentName:"p"},"nil")," and an error message."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.0 or later."),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"os.getcwd.md"},"os.getcwd")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/os.mkdir"},"os.mkdir"))))}s.isMDXComponent=!0},96:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:r},u),{},{components:t})):a.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);