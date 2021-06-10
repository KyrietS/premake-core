(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9300],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5170:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={},s={unversionedId:"filter",id:"filter",isDocsHomePage:!1,title:"filter",description:"Limits the subsequent build settings to a particular environment.",source:"@site/docs/filter.md",sourceDirName:".",slug:"/filter",permalink:"/premake-core/docs/filter",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/filter.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"files",permalink:"/premake-core/docs/files"},next:{title:"flags",permalink:"/premake-core/docs/flags"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Clarifying Notes",id:"clarifying-notes",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Limits the subsequent build settings to a particular environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter { "prefix:keywords" }\n')),(0,l.kt)("p",null,"Any settings that appear after this function in the script will be applied only to those contexts that match all of the listed keywords. See below for some usage examples."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keywords")," is a list of identifiers, prefixed by the field against which they should be tested. When all of the keywords in this list match the current context, the settings that follow the ",(0,l.kt)("inlineCode",{parentName:"p"},"filter")," statement will be applied. If any of the keywords fail this test, the settings are ignored. Keywords may contain wildcards, and are not case-sensitive. See below for examples."),(0,l.kt)("p",null,"Each keyword must include a prefix to specify which field should be tested. The following field prefixes are currently supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/_ACTION"},"action")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/architecture"},"architecture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/configurations"},"configurations")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/files"},"files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/kind"},"kind")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/language"},"language")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/_OPTIONS"},"options")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/platforms"},"platforms")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/system"},"system")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/toolset"},"toolset"))),(0,l.kt)("p",null,"Keywords may use the ",(0,l.kt)("inlineCode",{parentName:"p"},"\\*")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"\\*\\*")," wildcards to match more than one term or file. You may also use the modifiers ",(0,l.kt)("inlineCode",{parentName:"p"},"not")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"or")," to build more complex conditions. Again, see the examples below for more information."),(0,l.kt)("h3",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Premake 5.0 or later."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Define a new symbol which applies only to debug builds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n  configurations { "Debug", "Release" }\n\nfilter "configurations:Debug"\n  defines { "_DEBUG" }\n')),(0,l.kt)("p",null,'If no field prefix is specified in the keyword, "configurations" is used as a default.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "Debug"\n  defines { "_DEBUG" }\n')),(0,l.kt)("p",null,"Define a symbol only when targeting Visual Studio 2010."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "action:vs2010"\n  defines { "VISUAL_STUDIO_2005" }\n')),(0,l.kt)("p",null,"Wildcards can be used to match multiple terms. Define a symbol for all versions of Visual Studio."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "action:vs*"\n  defines { "VISUAL_STUDIO" }\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"or")," modifier may be used when several values are possible. Define a value just for library targets."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "kind:SharedLib or StaticLib"\n  defines { "LIBRARY_TARGET" }\n')),(0,l.kt)("p",null,"When multiple keywords are listed, an implicit ",(0,l.kt)("strong",{parentName:"p"},"and")," is assumed between them. Define compiler options only when using GNU Make and GCC."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter { "action:gmake*", "toolset:gcc" }\n  buildoptions {\n    "-Wall", "-Wextra", "-Werror"\n  }\n')),(0,l.kt)("p",null,"If any keyword pattern fails to match the current context, the entire filter is skipped over. Lua's curly bracket list syntax must be used when multiple keywords are present."),(0,l.kt)("p",null,"Add a suffix to the debug versions of libraries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- (configurations == "Debug") and (kind == SharedLib or kind == "StaticLib")\nfilter { "Debug", "kind:SharedLib or StaticLib" }\n  targetsuffix "_d"\n\n-- Could also be written as\nfilter { "Debug", "kind:*Lib" }\n  targetsuffix "_d"\n')),(0,l.kt)("p",null,"Apply settings based on the presence of a ",(0,l.kt)("a",{parentName:"p",href:"/premake-core/docs/Command-Line-Arguments"},"custom command line option"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Using an option like --localized\nfilter "options:localized"\n  files { "src/localizations/**" }\n\n-- Using an option like --renderer=opengl\nfilter "options:renderer=opengl"\n  files { "src/opengl/**.cpp" }\n')),(0,l.kt)("p",null,"Although support is currently limited, you may also apply settings to a particular file or set of files. This example sets the build action for all PNG image files."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "files:*.png"\n  buildaction "Embed"\n')),(0,l.kt)("p",null,"In the case of files you may also use the ",(0,l.kt)("strong",{parentName:"p"},"*","*")," wildcard, which will recurse into subdirectories."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "files:**.png"\n  buildaction "Embed"\n')),(0,l.kt)("p",null,"You can also use ",(0,l.kt)("strong",{parentName:"p"},"not")," to apply the settings to all environments where the identifier is not set."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "system:not windows"\n  defines { "NOT_WINDOWS" }\n')),(0,l.kt)("p",null,"You can combine different prefixes within a single keyword."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "system:windows or language:C#"\n')),(0,l.kt)("p",null,"Finally, you can reset the filter and remove all active keywords by passing the function an empty table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"filter {}\n")),(0,l.kt)("h3",{id:"clarifying-notes"},"Clarifying Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When a filter is set, any previous filter operations will become inactive.  In other words, initiating a filter acts as though a reset occurred first, followed by setting a new filter condition.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Filters can be viewed as a scoping concept.  A currently set filter goes 'out of scope' when either a filter reset operation is invoked or a project definition is started."))),(0,l.kt)("h3",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/Filters"},"Filters"))))}c.isMDXComponent=!0}}]);