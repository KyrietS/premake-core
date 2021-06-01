(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8103],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2974:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),i=["components"],l={title:"Command Line Arguments"},s={unversionedId:"Command-Line-Arguments",id:"Command-Line-Arguments",isDocsHomePage:!1,title:"Command Line Arguments",description:"Premake provides the ability to define and handle new command-line arguments from within your project script using the newaction and newoption functions.",source:"@site/docs/Command-Line-Arguments.md",sourceDirName:".",slug:"/Command-Line-Arguments",permalink:"/premake-core/docs/Command-Line-Arguments",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Command-Line-Arguments.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622583663,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Command Line Arguments"},sidebar:"docs",previous:{title:"Build Settings",permalink:"/premake-core/docs/Build-Settings"},next:{title:"Using Modules",permalink:"/premake-core/docs/Using-Modules"}},p=[{value:"Actions and Options",id:"actions-and-options",children:[]},{value:"Creating New Options",id:"creating-new-options",children:[]},{value:"Creating New Actions",id:"creating-new-actions",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Premake provides the ability to define and handle new command-line arguments from within your project script using the ",(0,r.kt)("a",{parentName:"p",href:"/premake-core/docs/newaction"},"newaction")," and ",(0,r.kt)("a",{parentName:"p",href:"/premake-core/docs/newoption"},"newoption")," functions."),(0,r.kt)("h2",{id:"actions-and-options"},"Actions and Options"),(0,r.kt)("p",null,"Premake recognizes two types of arguments: ",(0,r.kt)("em",{parentName:"p"},"actions")," and ",(0,r.kt)("em",{parentName:"p"},"options"),"."),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"action")," indicates what Premake should do on any given run. For instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"vs2013")," action indicates that Visual Studio 2013 project files should be generated. The ",(0,r.kt)("inlineCode",{parentName:"p"},"clean")," action causes all generated files to be deleted. Only one action may be specified at a time."),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"option")," modifies the behavior of the action. For instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," option is used to change which .NET compiler set is used in the generated files. Options can accept a value, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"--dotnet=mono")," or act as a flag, like ",(0,r.kt)("inlineCode",{parentName:"p"},"--with-opengl"),"."),(0,r.kt)("p",null,"From within your script, you can identify the current action with the ",(0,r.kt)("a",{parentName:"p",href:"/premake-core/docs/_ACTION"},(0,r.kt)("inlineCode",{parentName:"a"},"_ACTION"))," global variable, a string value. You can check for an option using the ",(0,r.kt)("a",{parentName:"p",href:"/premake-core/docs/_OPTIONS"},(0,r.kt)("inlineCode",{parentName:"a"},"_OPTIONS")),' table, which contains a list of key-value pairs. The key is the option identifier ("dotnet"), which references the command line value ("mono") or an empty string for valueless options.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- delete a file if the clean action is running\nif _ACTION == "clean" then\n   -- do something\nend\n\n-- use an option value in a configuration\ntargetdir ( _OPTIONS["outdir"] or "out" )\n')),(0,r.kt)("h2",{id:"creating-new-options"},"Creating New Options"),(0,r.kt)("p",null,"New command-line options are created using the ",(0,r.kt)("a",{parentName:"p",href:"/premake-core/docs/newoption"},(0,r.kt)("inlineCode",{parentName:"a"},"newoption"))," function, passing a table which fully describes the option. This is best illustrated with some examples."),(0,r.kt)("p",null,"Here is an option intended to force the use of OpenGL in a 3D application. It serves as a simple flag, and does not take any value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'newoption {\n   trigger = "with-opengl",\n   description = "Force the use of OpenGL for rendering, regardless of platform"\n}\n')),(0,r.kt)("p",null,"Note the commas after each key-value pair; this is required Lua syntax for a table. Once added to your script, the option will appear in the help text, and you may use the trigger as a keyword in your configuration blocks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'configuration "with-opengl"\n   links { "opengldrv" }\n\nconfiguration "not with-opengl"\n   links { "direct3ddrv" }\n')),(0,r.kt)("p",null,"The next example shows an option with a fixed set of allowed values. Like the example above, it is intended to allow the user to specify a 3D API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'newoption {\n   trigger = "gfxapi",\n   value = "API",\n   description = "Choose a particular 3D API for rendering",\n   allowed = {\n      { "opengl",    "OpenGL" },\n      { "direct3d",  "Direct3D (Windows only)" },\n      { "software",  "Software Renderer" }\n   }\n}\n')),(0,r.kt)("p",null,"As before, this new option will be integrated into the help text, along with a description of each of the allowed values. Premake will check the option value at startup, and raise an error on invalid values. The ",(0,r.kt)("b",null,"value")," field appears in the help text, and is intended to give the user a clue about the type of value that is expected. In this case, the help text will appear like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--gfxapi=API      Choose a particular 3D API for rendering; one of:\n    opengl        OpenGL\n    direct3d      Direct3D (Windows only)\n    software      Software Renderer\n")),(0,r.kt)("p",null,"Unlike the example above, you now use the ",(0,r.kt)("em",{parentName:"p"},"value")," as a keyword in your configuration blocks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'configuration "opengl"\n   links { "opengldrv" }\n\nconfiguration "direct3d"\n    links { "direct3ddrv" }\n\nconfiguration "software"\n    links { "softwaredrv" }\n')),(0,r.kt)("p",null,"Or you could be more clever."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'links { _OPTIONS["gfxapi"] .. "drv" }\n')),(0,r.kt)("p",null,"In this example, you would also want to provide a default behavior for the case where no option is specified. You could place a bit of code like this anywhere in your script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'if not _OPTIONS["gfxapi"] then\n   _OPTIONS["gfxapi"] = "opengl"\nend\n')),(0,r.kt)("p",null,"As a last example of options, you may want to specify an option that accepts an unconstrained value, such as an output path. Just leave off the list of allowed values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'newoption {\n   trigger     = "outdir",\n   value       = "path",\n   description = "Output directory for the compiled executable"\n}\n')),(0,r.kt)("h2",{id:"creating-new-actions"},"Creating New Actions"),(0,r.kt)("p",null,"Actions are defined in much the same way as options, and can be as simple as this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'newaction {\n   trigger     = "install",\n   description = "Install the software",\n   execute = function ()\n      -- copy files, etc. here\n   end\n}\n')),(0,r.kt)("p",null,"The actual code to be executed when the action is fired should be placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," function."),(0,r.kt)("p",null,"That's the simple version, which is great for one-off operations that don't need to access to the specific project information. For a tutorial for writing a more complete action, see ",(0,r.kt)("a",{parentName:"p",href:"/premake-core/docs/Adding-New-Action"},"Adding a New Action"),"."))}u.isMDXComponent=!0}}]);