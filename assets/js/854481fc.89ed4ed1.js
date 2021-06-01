(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3430],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6156:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],i={},s={unversionedId:"files",id:"files",isDocsHomePage:!1,title:"files",description:"Adds files to a project.",source:"@site/docs/files.md",sourceDirName:".",slug:"/files",permalink:"/premake-core/docs/files",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/files.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622583663,formattedLastUpdatedAt:"6/1/2021",frontMatter:{},sidebar:"docs",previous:{title:"filename",permalink:"/premake-core/docs/filename"},next:{title:"filter",permalink:"/premake-core/docs/filter"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Adds files to a project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'files { "file_list" }\n')),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"file_list")," specifies one or more file patterns. File paths should be specified relative to the currently executing script file. File patterns may contain the ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," wildcard to match against files in the current directory, or the ",(0,l.kt)("inlineCode",{parentName:"p"},"**")," wildcard to perform a recursive match."),(0,l.kt)("p",null,"If a wildcard matches more files than you would like, you may filter the results using the ",(0,l.kt)("a",{parentName:"p",href:"/premake-core/docs/Removing-Values"},"removefiles()")," function."),(0,l.kt)("h3",{id:"applies-to"},"Applies To"),(0,l.kt)("p",null,"Project configurations. ",(0,l.kt)("a",{parentName:"p",href:"/premake-core/docs/Feature-Matrix"},"Not all exporters currently support")," per-configuration file lists however."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Add two files from to the current project, from the same directory that contains the script."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'files { "hello.cpp", "goodbye.cpp" }\n')),(0,l.kt)("p",null,"Add all C++ files from the ",(0,l.kt)("strong",{parentName:"p"},"src/")," directory to the project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'files { "src/*.cpp" }\n')),(0,l.kt)("p",null,"Add all C++ files from the ",(0,l.kt)("strong",{parentName:"p"},"src/")," directory and any subdirectories."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'files { "src/**.cpp" }\n')),(0,l.kt)("p",null,"Add files for specific systems; might not work with all exporters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'filter "system:Windows"\n  files { "src/windows/*.h", "src/windows/*.cpp" }\n\nfilter "system:MacOSX"\n  files { "src/mac/*.h", "src/mac/*.cpp" }\n')),(0,l.kt)("h3",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/Adding-Source-Files"},"Adding Source Files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/Removing-Values"},"Removing Values")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/premake-core/docs/vpaths"},"vpaths"))))}u.isMDXComponent=!0}}]);