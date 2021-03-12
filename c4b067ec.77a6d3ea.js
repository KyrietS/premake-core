(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{354:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return o})),t.d(r,"default",(function(){return u}));var n=t(3),i=t(7),a=(t(0),t(448)),c={},l={unversionedId:"usingdirs",id:"usingdirs",isDocsHomePage:!1,title:"usingdirs",description:"Specifies the file search paths for using statements.",source:"@site/docs/usingdirs.md",slug:"/usingdirs",permalink:"/premake-core/docs/usingdirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/usingdirs.md",version:"current",sidebar:"mainSidebar",previous:{title:"undefines",permalink:"/premake-core/docs/undefines"},next:{title:"uuid",permalink:"/premake-core/docs/uuid"}},o=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:o};function u(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Specifies the file search paths for ",Object(a.b)("inlineCode",{parentName:"p"},"using")," statements."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'usingsdirs { "paths" }\n')),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"paths")," specifies a list of file search directories. Paths should be specified relative to the currently running script file."),Object(a.b)("h3",{id:"applies-to"},"Applies To"),Object(a.b)("p",null,"Project configurations."),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 5.0 or later."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("p",null,"Define two using file search paths."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'usingdirs { "../lib1", "../lib2" }\n')),Object(a.b)("p",null,"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'usingdirs { "../libs/**" }\n')),Object(a.b)("h3",{id:"see-also"},"See Also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/premake-core/docs/includedirs"},"includedirs"))))}u.isMDXComponent=!0},448:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return t?i.a.createElement(m,l(l({ref:r},s),{},{components:t})):i.a.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);