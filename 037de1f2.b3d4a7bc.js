(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{448:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(448)),l={},o={unversionedId:"propertydefinition",id:"propertydefinition",isDocsHomePage:!1,title:"propertydefinition",description:"Creates a new property for a custom rule.",source:"@site/docs/propertydefinition.md",slug:"/propertydefinition",permalink:"/premake-core/docs/propertydefinition",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/propertydefinition.md",version:"current",sidebar:"mainSidebar",previous:{title:"project",permalink:"/premake-core/docs/project"},next:{title:"rebuildcommands",permalink:"/premake-core/docs/rebuildcommands"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Old Version issues",id:"old-version-issues",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Creates a new property for a ",Object(i.b)("a",{parentName:"p",href:"Custom-Rules.md"},"custom rule"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "name",\n  kind = "kind",\n  display = "label",\n  description = "message"\n}\n')),Object(i.b)("p",null,"Custom rules, and therefore property definitions, are currently only supported for Visual Studio 2010+."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"The property definition is specified as a table with the following values. Note that no data validation is currently performed on property definition parameters at this time."),Object(i.b)("h4",{id:"name"},"name"),Object(i.b)("p",null,"Required; a name for the rule that will be unique in the projects where it is used. This name will be used as the name of the corresponding XML elements in Visual Studio rule files, so avoid spaces and other special characters."),Object(i.b)("h4",{id:"kind"},"kind"),Object(i.b)("p",null,"The expected data type of the values assigned to this property. Allowed values are:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"A yes or no value.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"integer"),Object(i.b)("td",{parentName:"tr",align:null},"An integer number.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"list"),Object(i.b)("td",{parentName:"tr",align:null},"A list of string values.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"A floating point number.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"path"),Object(i.b)("td",{parentName:"tr",align:null},"A single file system path value.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"A single string value.")))),Object(i.b)("p",null,"For enum properties, this field is ignored and can be omitted. Otherwise it is required."),Object(i.b)("h4",{id:"display"},"display"),Object(i.b)("p",null,"A short description of the property to display in the toolset UI (property sheets, etc.)"),Object(i.b)("h4",{id:"description"},"description"),Object(i.b)("p",null,"A longer description of the property to display in the toolset UI (property sheets, etc.)"),Object(i.b)("h4",{id:"value"},"value"),Object(i.b)("p",null,"The default value of the property, if any."),Object(i.b)("h4",{id:"values"},"values"),Object(i.b)("p",null,"For enum properties, a key-value table of the possible values of the property, along with their text equivalent. See the examples below for more information."),Object(i.b)("h4",{id:"switch"},"switch"),Object(i.b)("p",null,"The value to be placed into the command line for this property. See the examples below for more information."),Object(i.b)("h4",{id:"separator"},"separator"),Object(i.b)("p",null,"For list properties, this sets the value of the list item separator in the command line.\\\ngmake2: Default value is ' '. If a switch is set, the separator is ignored and instead the switch is duplicated.\\\nVS201x: If set, the list is concatenated by the separator and placed behind a single switch. If not set, the switch is duplicated."),Object(i.b)("h4",{id:"category"},"category"),Object(i.b)("p",null,'Visual Studio only.\nIf set, the property is placed in a subcategory with the specified name in the VS project properties section. If not set, the property is placed in the subcategory "General".'),Object(i.b)("h3",{id:"applies-to"},"Applies To"),Object(i.b)("p",null,"Rules."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Available in Premake 5.0 or later for Visual Studio 2010 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,"A simple boolean property to control a switch."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "DebuggingSymbols",\n  kind = "boolean",\n  display = "Debugging Symbols",\n  description = "Add debugging information to the generated output",\n  value = false,\n  switch = "-g"\n}\n')),Object(i.b)("p",null,"To use this property in the rule:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'-- If set to true, evaluates to: `tool.exe -g`\nbuildcommand "tool.exe [DebuggingSymbols]"\n')),Object(i.b)("p",null,"Enum properties allow selection from a list of possible values."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'propertydefinition {\n  name = "OptimizationLevel",\n  display = "Optimization Level",\n  values = {\n    [0] = "None",\n    [1] = "Size",\n    [2] = "Speed",\n  },\n  switch = {\n    [0] = "-O0",\n    [1] = "-O1",\n    [2] = "-O3",\n  },\n  value = 2,\n}\n')),Object(i.b)("p",null,"Enum properties are set using the value names."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'filter "configurations:Release"\n  myCustomRuleVars { OptimizationLevel = "None" }\n')),Object(i.b)("h3",{id:"old-version-issues"},"Old Version issues"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As of premake 5.0 alpha13 and earlier, list properties in VS did not work as intended, contents could only be added once as a single element (preprocessed by a table.concat call) or else the project would be illformatted.")))}c.isMDXComponent=!0}}]);