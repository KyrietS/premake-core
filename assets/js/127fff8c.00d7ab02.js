(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9857],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1317:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={},c={unversionedId:"filename",id:"filename",isDocsHomePage:!1,title:"filename",description:"Sets the name of a generated workspace, project, or rules file. Use it in conjunction with location to completely control the generated file destination.",source:"@site/docs/filename.md",sourceDirName:".",slug:"/filename",permalink:"/premake-core/docs/filename",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/filename.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{},sidebar:"docs",previous:{title:"fileextension",permalink:"/premake-core/docs/fileextension"},next:{title:"files",permalink:"/premake-core/docs/files"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sets the name of a generated workspace, project, or rules file. Use it in conjunction with ",(0,o.kt)("a",{parentName:"p",href:"/premake-core/docs/location"},"location")," to completely control the generated file destination."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'filename ("name")\n')),(0,o.kt)("p",null,"By default, generated workspace, project, and rule files use their name as the name of the generated file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"filename")," function allows you to change this."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name")," is the desired file name for the generated workspace or project file. Do not specify the file extension, Premake would automatically add the correct extension for the file onto the end."),(0,o.kt)("h3",{id:"applies-to"},"Applies To"),(0,o.kt)("p",null,"Workspaces, projects, and rule files."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,'Change the workspace name to "Master".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n  filename "Master"\n')),(0,o.kt)("p",null,"If you plan to build with multiple tools from the same source tree you might want to split up the project files by toolset. The _ACTION global variable contains the current toolset identifier, as specified on the command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   filename "MyWorkspace_%{_ACTION or \'\'}"\n')),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/location"},"location"))))}u.isMDXComponent=!0}}]);