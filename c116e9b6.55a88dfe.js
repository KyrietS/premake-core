(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{324:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(417)),i={},l={unversionedId:"linkbuildoutputs",id:"linkbuildoutputs",isDocsHomePage:!1,title:"linkbuildoutputs",description:"Turns on/off the automatic linking of .obj files that are output by custom build commands. The default behaviour is to link .obj files when they are output by custom build commands.",source:"@site/docs/linkbuildoutputs.md",slug:"/linkbuildoutputs",permalink:"/premake-core/docs/linkbuildoutputs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/linkbuildoutputs.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"libdirs",permalink:"/premake-core/docs/libdirs"},next:{title:"linkgroups",permalink:"/premake-core/docs/linkgroups"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],c={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Turns on/off the automatic linking of ",Object(o.b)("inlineCode",{parentName:"p"},".obj")," files that are output by custom build commands. The default behaviour is to link ",Object(o.b)("inlineCode",{parentName:"p"},".obj")," files when they are output by custom build commands."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'linkbuildoutputs "value"\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"value"),' is a boolean value, i.e. "On" or "Off".'),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Project configurations and rules."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Use ",Object(o.b)("a",{parentName:"p",href:"/premake-core/docs/Custom-Build-Commands"},"custom build commands")," to copy Wavefront .obj model files around without the linker trying to link them:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'filter "**/models/**.obj"\n    -- Copy these files into the target directory while preserving the\n    -- folder structure.\n    buildcommands {\n        os.translateCommands \'{mkdir} "%{ path.join(cfg.buildtarget.directory, path.getdirectory(file.relpath)) }"\',\n        os.translateCommands \'{copy} "%{ file.relpath }" "%{ path.join(cfg.buildtarget.directory, path.getdirectory(file.relpath)) }"\'\n    }\n\n    buildoutputs "%{ path.join(cfg.buildtarget.directory, file.relpath) }"\n\n    -- The default behaviour is to link .obj if a custom build command\n    -- outputs them, but we don\'t want that since these are Wavefront .obj\n    -- model files and not object files.\n    linkbuildoutputs "Off"\n')),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/Custom-Build-Commands"},"Custom Build Commands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/Custom-Rules"},"Custom Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/buildcommands"},"buildcommands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/compilebuildoutputs"},"compilebuildoutputs"))))}s.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,l(l({ref:t},c),{},{components:r})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);