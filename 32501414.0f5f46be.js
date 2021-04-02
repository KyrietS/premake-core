(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{145:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(7),i=(t(0),t(417)),o={},l={unversionedId:"ignoredefaultlibraries",id:"ignoredefaultlibraries",isDocsHomePage:!1,title:"ignoredefaultlibraries",description:"Specifies the default libraries to be ignored for a project.",source:"@site/docs/ignoredefaultlibraries.md",slug:"/ignoredefaultlibraries",permalink:"/premake-core/docs/ignoredefaultlibraries",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/ignoredefaultlibraries.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"icon",permalink:"/premake-core/docs/icon"},next:{title:"imageoptions",permalink:"/premake-core/docs/imageoptions"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:c};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Specifies the default libraries to be ignored for a project."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'ignoredefaultlibraries { "libraries" }\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"'libraries' is a list of library names. If a valid extension isn't present, ",Object(i.b)("inlineCode",{parentName:"p"},".lib")," will be automatically appended, similar to ",Object(i.b)("a",{parentName:"p",href:"/premake-core/docs/links"},"links"),". Currently, the valid extensions are ",Object(i.b)("inlineCode",{parentName:"p"},".lib")," and ",Object(i.b)("inlineCode",{parentName:"p"},".obj"),"."),Object(i.b)("h3",{id:"applies-to"},"Applies To"),Object(i.b)("p",null,"Projects."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,"Specify ",Object(i.b)("inlineCode",{parentName:"p"},"MSVCRT.lib")," as a default library to ignore."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n  ignoredefaultlibraries { "MSVCRT" }\n')),Object(i.b)("h2",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/premake-core/docs/links"},"links"))))}s.isMDXComponent=!0},417:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},b=function(e){var r=s(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return t?a.a.createElement(f,l(l({ref:r},p),{},{components:t})):a.a.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);