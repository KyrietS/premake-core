(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{268:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(417)),o={},l={unversionedId:"externalrule",id:"externalrule",isDocsHomePage:!1,title:"externalrule",description:"Provides a way to reference rules that were created manually, outside of Premake.",source:"@site/docs/externalrule.md",slug:"/externalrule",permalink:"/premake-core/docs/externalrule",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/externalrule.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"externalproject",permalink:"/premake-core/docs/externalproject"},next:{title:"fatalwarnings",permalink:"/premake-core/docs/fatalwarnings"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provides a way to reference rules that were created manually, outside of Premake."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'externalrule ("name")\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"externalrule()")," function behaves just like ",Object(i.b)("a",{parentName:"p",href:"/premake-core/docs/rule"},"rule()"),", except that it does not output any rule file(s) at project generation time. You may use it to reference a hand-written or pre-existing rule file."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"name")," is name of the rule. As with ",Object(i.b)("a",{parentName:"p",href:"/premake-core/docs/rule"},"rule()"),", it is used as the default file name, and may be overridden with ",Object(i.b)("a",{parentName:"p",href:"/premake-core/docs/filename"},"filename")," and ",Object(i.b)("a",{parentName:"p",href:"/premake-core/docs/location"},"location"),"."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later; currently Visual Studio only."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'externalrule "luac"\n  location "../rules"  -- optional; if the file lives somewhere other than the script folder\n  filename "lua-to-c"  -- optional; if the file has a name different than the rule\n  fileextension ".lua" -- required; which files should be associated with the rule?\n\n  propertydefinition {\n    name = "StripDebugInfo",\n    kind = "boolean",\n  }\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fileextension()")," is required; this tells Premake which files in the project should be associated with the rule. ",Object(i.b)("inlineCode",{parentName:"p"},"location()")," is optional, and only needs to be specified if the rule files lives somewhere other than the folder containing the script. Likewise, ",Object(i.b)("inlineCode",{parentName:"p"},"filename()")," only needs to be specified if the rule file has a different name than the rule itself."),Object(i.b)("p",null,"You do not need to specify all of the properties in the rule, only those you intend to set from your project scripts."),Object(i.b)("p",null,"The external rule file does not need to exist at the time the workspace is generated."))}p.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,m=s["".concat(o,".").concat(f)]||s[f]||d[f]||i;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);