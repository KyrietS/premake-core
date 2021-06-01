(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5483],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3574:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={title:"Build Settings"},p={unversionedId:"Build-Settings",id:"Build-Settings",isDocsHomePage:!1,title:"Build Settings",description:"Premake provides an ever-growing list of build settings that you can tweak; the following table lists some of the most common configuration tasks with a link to the corresponding functions. For a comprehensive list of available settings and functions, see the Project API and Lua Library Additions.",source:"@site/docs/Build-Settings.md",sourceDirName:".",slug:"/Build-Settings",permalink:"/premake-core/docs/Build-Settings",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Build-Settings.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622583663,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Build Settings"},sidebar:"docs",previous:{title:"Filters",permalink:"/premake-core/docs/Filters"},next:{title:"Command Line Arguments",permalink:"/premake-core/docs/Command-Line-Arguments"}},s=[],c={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Premake provides an ever-growing list of build settings that you can tweak; the following table lists some of the most common configuration tasks with a link to the corresponding functions. For a comprehensive list of available settings and functions, see the ",(0,o.kt)("a",{parentName:"p",href:"/premake-core/docs/Project-API"},"Project API")," and ",(0,o.kt)("a",{parentName:"p",href:"/premake-core/docs/Lua-Library-Additions"},"Lua Library Additions"),"."),(0,o.kt)("p",null,"If you think something should be possible and you can't figure out how to do it, see ",(0,o.kt)("a",{parentName:"p",href:"/community/support"},"Support"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Specify the binary type (executable, library)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/kind"},"kind"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Specify source code files"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/files"},"files"),", ",(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/files"},"removefiles"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Define compiler or preprocessor symbols"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/defines"},"defines"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Locate include files"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/includedirs"},"includedirs"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Set up precompiled headers"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/pchheader"},"pchheader"),", ",(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/pchsource"},"pchsource"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Link libraries, frameworks, or other projects"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/links"},"links"),", ",(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/libdirs"},"libdirs"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Enable debugging information"),(0,o.kt)("td",{parentName:"tr",align:null},"symbols(symbols)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Optimize for size or speed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/optimize"},"optimize"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Add arbitrary build flags"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/buildoptions"},"buildoptions"),", ",(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/linkoptions"},"linkoptions"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Set the name or location of compiled targets"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/targetname"},"targetname"),", ",(0,o.kt)("a",{parentName:"td",href:"/premake-core/docs/targetdir"},"targetdir"))))))}d.isMDXComponent=!0}}]);