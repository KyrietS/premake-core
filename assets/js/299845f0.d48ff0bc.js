(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3640],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,i(i({ref:r},p),{},{components:t})):a.createElement(f,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1342:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=t(2122),n=t(9756),o=(t(7294),t(3905)),i=["components"],c={},l={unversionedId:"workspace",id:"workspace",isDocsHomePage:!1,title:"workspace",description:"Creates a new workspace.",source:"@site/docs/workspace.md",sourceDirName:".",slug:"/workspace",permalink:"/premake-core/docs/workspace",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/workspace.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"warnings",permalink:"/premake-core/docs/warnings"},next:{title:"xcodebuildresources",permalink:"/premake-core/docs/xcodebuildresources"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:s};function u(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates a new workspace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace ("name")\n')),(0,o.kt)("p",null,"Workspaces are the top-level objects in a Premake build script, and are synonymous with a Visual Studio solution. Each workspace contains one or more projects, which in turn contain the settings to generate a single binary target."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name")," is a unique name for the workspace. If a workspace with the given name already exists, it is made active and returned."),(0,o.kt)("p",null,"If no name is given, the current workspace scope is returned, and also made active."),(0,o.kt)("p",null,'If "',"*",'" is used, the "root" configuration scope, which applies to all workspaces, is selected and nil is returned.'),(0,o.kt)("p",null,"By default, the project name will be used as the file name of the generated project file; be careful with spaces and special characters. You can override this default with the ",(0,o.kt)("a",{parentName:"p",href:"/premake-core/docs/filename"},"filename")," call."),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Premake 4.0 or later."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,'Create a new workspace named "MyWorkspace", with debug and release build configurations.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n')),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/project"},"project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/group"},"group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/configuration"},"configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/location"},"location")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/filename"},"filename"))))}u.isMDXComponent=!0}}]);