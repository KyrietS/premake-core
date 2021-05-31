(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3469],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4577:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={title:"Adding Source Files"},c={unversionedId:"Adding-Source-Files",id:"Adding-Source-Files",isDocsHomePage:!1,title:"Adding Source Files",description:"You add files\u2014source code, resources, and so on\u2014to your project using the files function.",source:"@site/docs/Adding-Source-Files.md",sourceDirName:".",slug:"/Adding-Source-Files",permalink:"/premake-core/docs/Adding-Source-Files",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Adding-Source-Files.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{title:"Adding Source Files"},sidebar:"docs",previous:{title:"Scopes & Inheritance",permalink:"/premake-core/docs/Scopes-and-Inheritance"},next:{title:"Linking",permalink:"/premake-core/docs/Linking"}},s=[{value:"Excluding Files",id:"excluding-files",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You add files\u2014source code, resources, and so on\u2014to your project using the ",(0,i.kt)("a",{parentName:"p",href:"files"},"files")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'files {\n   "hello.h",  -- you can specify exact names\n   "*.c",      -- or use a wildcard...\n   "**.cpp"    -- ...and recurse into subdirectories\n}\n')),(0,i.kt)("p",null,"You can use wildcards in the file patterns to match a set of files. The wildcard ","*"," will match files in one directory; the wildcard ","*","*"," will match files in one directory and also recurse down into any subdirectories."),(0,i.kt)("p",null,"Files located in other directories should be specified relative to the script file. For example, if the script is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"MyProject/build")," and the source files are at ",(0,i.kt)("inlineCode",{parentName:"p"},"MyProject/src"),", the files should be specified as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'files { "../src/*.cpp" }\n')),(0,i.kt)("p",null,"Paths should always use the forward slash ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," as a separator; Premake will translate to the appropriate platform-specific separator as needed."),(0,i.kt)("h2",{id:"excluding-files"},"Excluding Files"),(0,i.kt)("p",null,"Sometimes you want most, but not all, of the files in a directory. In that case, use the ",(0,i.kt)("a",{parentName:"p",href:"removing-values"},"removefiles()")," function to mask out those few exceptions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'files { "*.c" }\nremovefiles { "a_file.c", "another_file.c" }\n')),(0,i.kt)("p",null,"Excludes may also use wildcards."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'files { "**.c" }\nremovefiles { "tests/*.c" }\n')),(0,i.kt)("p",null,"Sometimes you may want to exclude all the files in a particular directory, but aren't sure where that directory will fall in the source tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'files { "**.c" }\nremovefiles { "**/Win32Specific/**" }\n')))}p.isMDXComponent=!0}}]);