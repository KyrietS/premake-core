(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5596],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2606:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={},p={unversionedId:"kind",id:"kind",isDocsHomePage:!1,title:"kind",description:"Sets the kind of binary object being created by the project or configuration, such as a console or windowed application, or a shared or static library.",source:"@site/docs/kind.md",sourceDirName:".",slug:"/kind",permalink:"/premake-core/docs/kind",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/kind.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622583663,formattedLastUpdatedAt:"6/1/2021",frontMatter:{},sidebar:"docs",previous:{title:"intrinsics",permalink:"/premake-core/docs/intrinsics"},next:{title:"language",permalink:"/premake-core/docs/language"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sets the kind of binary object being created by the project or configuration, such as a console or windowed application, or a shared or static library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'kind ("kind")\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kind")," is one of the following string identifiers:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConsoleApp"),(0,i.kt)("td",{parentName:"tr",align:null},"A console or command-line application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WindowedApp"),(0,i.kt)("td",{parentName:"tr",align:null},"An application which runs in a desktop window. This distinction does not apply on Linux, but is important on Windows and Mac OS X.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SharedLib"),(0,i.kt)("td",{parentName:"tr",align:null},"A shared library or DLL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"StaticLib"),(0,i.kt)("td",{parentName:"tr",align:null},"A static library.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Makefile"),(0,i.kt)("td",{parentName:"tr",align:null},"A special configuration type which calls out to one or more external commands. The actual type of binary created is unspecified. See ",(0,i.kt)("a",{parentName:"td",href:"/premake-core/docs/Makefile-Projects"},"Makefile Projects")," for more information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Utility"),(0,i.kt)("td",{parentName:"tr",align:null},"A configuration which contains only custom build rules.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"A configuration which is not included in the build. Useful for projects containing only web pages, header files, or support documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Packaging"),(0,i.kt)("td",{parentName:"tr",align:null},"A configuration type to create .androidproj files, which build the apk in an Android application under Visual Studio. ",(0,i.kt)("em",{parentName:"td"},"Note, this was previously ",(0,i.kt)("inlineCode",{parentName:"em"},"AndroidProj"),"."))))),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"Project configurations."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Makefile"),",  and ",(0,i.kt)("strong",{parentName:"p"},"None")," kinds are only available in Premake 5.0 and later, and are currently only supported for Visual Studio.\nThe ",(0,i.kt)("strong",{parentName:"p"},"Utility")," kind is only available for Visual Studio and gmake2, as well as very limited support in gmake."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Set the project to build a command-line executable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'kind "ConsoleApp"\n')),(0,i.kt)("p",null,"Set the project to build a shared library (DLL)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'kind "SharedLib"\n')),(0,i.kt)("p",null,"Build either a static or a shared library, depending on the selected build configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "DebugLib", "DebugDLL", "ReleaseLib", "ReleaseDLL" }\n\nproject "MyProject"\n\n   filter "*Lib"\n      kind "StaticLib"\n\n   filter "*DLL"\n      kind "SharedLib"\n')),(0,i.kt)("h3",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/premake-core/docs/Makefile-Projects"},"Makefile Projects"))))}s.isMDXComponent=!0}}]);