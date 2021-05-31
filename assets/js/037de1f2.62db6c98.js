(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3610],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},978:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={},p={unversionedId:"propertydefinition",id:"propertydefinition",isDocsHomePage:!1,title:"propertydefinition",description:"Creates a new property for a custom rule.",source:"@site/docs/propertydefinition.md",sourceDirName:".",slug:"/propertydefinition",permalink:"/premake-core/docs/propertydefinition",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/propertydefinition.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{},sidebar:"docs",previous:{title:"project",permalink:"/premake-core/docs/project"},next:{title:"rebuildcommands",permalink:"/premake-core/docs/rebuildcommands"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Old Version issues",id:"old-version-issues",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Creates a new property for a ",(0,i.kt)("a",{parentName:"p",href:"/premake-core/docs/Custom-Rules"},"custom rule"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "name",\n  kind = "kind",\n  display = "label",\n  description = "message"\n}\n')),(0,i.kt)("p",null,"Custom rules, and therefore property definitions, are currently only supported for Visual Studio 2010+."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"The property definition is specified as a table with the following values. Note that no data validation is currently performed on property definition parameters at this time."),(0,i.kt)("h4",{id:"name"},"name"),(0,i.kt)("p",null,"Required; a name for the rule that will be unique in the projects where it is used. This name will be used as the name of the corresponding XML elements in Visual Studio rule files, so avoid spaces and other special characters."),(0,i.kt)("h4",{id:"kind"},"kind"),(0,i.kt)("p",null,"The expected data type of the values assigned to this property. Allowed values are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"A yes or no value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"An integer number.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of string values.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"A floating point number.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"A single file system path value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A single string value.")))),(0,i.kt)("p",null,"For enum properties, this field is ignored and can be omitted. Otherwise it is required."),(0,i.kt)("h4",{id:"display"},"display"),(0,i.kt)("p",null,"A short description of the property to display in the toolset UI (property sheets, etc.)"),(0,i.kt)("h4",{id:"description"},"description"),(0,i.kt)("p",null,"A longer description of the property to display in the toolset UI (property sheets, etc.)"),(0,i.kt)("h4",{id:"value"},"value"),(0,i.kt)("p",null,"The default value of the property, if any."),(0,i.kt)("h4",{id:"values"},"values"),(0,i.kt)("p",null,"For enum properties, a key-value table of the possible values of the property, along with their text equivalent. See the examples below for more information."),(0,i.kt)("h4",{id:"switch"},"switch"),(0,i.kt)("p",null,"The value to be placed into the command line for this property. See the examples below for more information."),(0,i.kt)("h4",{id:"separator"},"separator"),(0,i.kt)("p",null,"For list properties, this sets the value of the list item separator in the command line.\\\ngmake2: Default value is ' '. If a switch is set, the separator is ignored and instead the switch is duplicated.\\\nVS201x: If set, the list is concatenated by the separator and placed behind a single switch. If not set, the switch is duplicated."),(0,i.kt)("h4",{id:"category"},"category"),(0,i.kt)("p",null,'Visual Studio only.\nIf set, the property is placed in a subcategory with the specified name in the VS project properties section. If not set, the property is placed in the subcategory "General".'),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"Rules."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Available in Premake 5.0 or later for Visual Studio 2010 or later."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"A simple boolean property to control a switch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "DebuggingSymbols",\n  kind = "boolean",\n  display = "Debugging Symbols",\n  description = "Add debugging information to the generated output",\n  value = false,\n  switch = "-g"\n}\n')),(0,i.kt)("p",null,"To use this property in the rule:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- If set to true, evaluates to: `tool.exe -g`\nbuildcommand "tool.exe [DebuggingSymbols]"\n')),(0,i.kt)("p",null,"Enum properties allow selection from a list of possible values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "OptimizationLevel",\n  display = "Optimization Level",\n  values = {\n    [0] = "None",\n    [1] = "Size",\n    [2] = "Speed",\n  },\n  switch = {\n    [0] = "-O0",\n    [1] = "-O1",\n    [2] = "-O3",\n  },\n  value = 2,\n}\n')),(0,i.kt)("p",null,"Enum properties are set using the value names."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'filter "configurations:Release"\n  myCustomRuleVars { OptimizationLevel = "None" }\n')),(0,i.kt)("h3",{id:"old-version-issues"},"Old Version issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As of premake 5.0 alpha13 and earlier, list properties in VS did not work as intended, contents could only be added once as a single element (preprocessed by a table.concat call) or else the project would be illformatted.")))}d.isMDXComponent=!0}}]);