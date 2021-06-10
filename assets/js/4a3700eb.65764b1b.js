(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9186],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={},p={unversionedId:"buildaction",id:"buildaction",isDocsHomePage:!1,title:"buildaction",description:"Specifies how a file or set of files should be treated during the compilation process. It is usually paired with a filter to select a file set. If no build action is specified for a file a default action will be used, based on the file's extension.",source:"@site/docs/buildaction.md",sourceDirName:".",slug:"/buildaction",permalink:"/premake-core/docs/buildaction",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/buildaction.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"bindirs",permalink:"/premake-core/docs/bindirs"},next:{title:"buildcommands",permalink:"/premake-core/docs/buildcommands"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Specifies how a file or set of files should be treated during the compilation process. It is usually paired with a filter to select a file set. If no build action is specified for a file a default action will be used, based on the file's extension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'buildaction ("action")\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"For C/C++, ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," is the name of the MSBuild action as defined by the vcxproj format; eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"ClCompile"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FxCompile"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", etc, and may refer to any such action available to MSBuild."),(0,i.kt)("p",null,"For C# projects, ",(0,i.kt)("inlineCode",{parentName:"p"},"buildaction")," behaviour is special to support legacy implementation.\nIn C#, ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," is one of"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Application"),(0,i.kt)("td",{parentName:"tr",align:null},"Mark the file as the application definition XAML for WPF.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compile"),(0,i.kt)("td",{parentName:"tr",align:null},"Treat the file as source code; compile and link it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Component"),(0,i.kt)("td",{parentName:"tr",align:null},"Treat the source file as ",(0,i.kt)("a",{parentName:"td",href:"http://msdn.microsoft.com/en-us/library/ms228287(v=vs.90).aspx"},"a component"),", usually a visual control.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Copy"),(0,i.kt)("td",{parentName:"tr",align:null},"Copy the file to the target directory.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Embed"),(0,i.kt)("td",{parentName:"tr",align:null},"Embed the file into the target binary as a resource.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Form"),(0,i.kt)("td",{parentName:"tr",align:null},"Treat the source file as visual (Windows) form.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Do nothing with this file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Resource"),(0,i.kt)("td",{parentName:"tr",align:null},"Copy/embed the file with the project resources.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UserControl"),(0,i.kt)("td",{parentName:"tr",align:null},"Treat the source file as ",(0,i.kt)("a",{parentName:"td",href:"http://msdn.microsoft.com/en-us/library/a6h7e207(v=vs.71).aspx"},"visual user control"),".")))),(0,i.kt)("p",null,"The descriptive actions such as ",(0,i.kt)("strong",{parentName:"p"},"Component"),", ",(0,i.kt)("strong",{parentName:"p"},"Form*, and "),"UserControl** are only recognized by Visual Studio, and may be considered optional as Visual Studio will automatically deduce the types when it first examines the project. You only need to specify these actions to avoid unnecessary modifications to the project files on save."),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"File configurations."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Build actions are currently supported for C/C++ and C# projects."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Compile"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Copy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Embed"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," are available in Premake 4.4 or later. All actions are available in Premake 5.0 or later."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Embed all PNG images files into the target binary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'filter "files:**.png"\n   buildaction "Embed"\n')))}u.isMDXComponent=!0}}]);