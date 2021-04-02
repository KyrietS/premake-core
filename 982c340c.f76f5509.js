(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(417)),s={title:"Custom Build Commads"},i={unversionedId:"Custom-Build-Commands",id:"Custom-Build-Commands",isDocsHomePage:!1,title:"Custom Build Commads",description:"There are a few different ways that you can add custom commands to your Premake-generated builds: pre- and post-build stages, custom build commands, and custom rules.",source:"@site/docs/Custom-Build-Commands.md",slug:"/Custom-Build-Commands",permalink:"/premake-core/docs/Custom-Build-Commands",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Custom-Build-Commands.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1615992656},l=[{value:"Pre- and Post-Build Stages",id:"pre--and-post-build-stages",children:[]},{value:"Custom Build Commands",id:"custom-build-commands",children:[]},{value:"Custom Rules",id:"custom-rules",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are a few different ways that you can add custom commands to your Premake-generated builds: ",Object(r.b)("em",{parentName:"p"},"pre- and post-build stages"),", ",Object(r.b)("em",{parentName:"p"},"custom build commands"),", and ",Object(r.b)("em",{parentName:"p"},"custom rules"),"."),Object(r.b)("p",null,"You can also use ",Object(r.b)("a",{parentName:"p",href:"makefile-projects"},"Makefile projects")," to execute external shell scripts or makefiles, rather than use the normal build system."),Object(r.b)("h2",{id:"pre--and-post-build-stages"},"Pre- and Post-Build Stages"),Object(r.b)("p",null,"These are the simplest to setup and use: pass one or more command lines to the ",Object(r.b)("a",{parentName:"p",href:"prebuildcommands"},Object(r.b)("inlineCode",{parentName:"a"},"prebuildcommands")),", ",Object(r.b)("a",{parentName:"p",href:"prelinkcommands"},Object(r.b)("inlineCode",{parentName:"a"},"prelinkcommands")),", or ",Object(r.b)("a",{parentName:"p",href:"postbuildcommands"},Object(r.b)("inlineCode",{parentName:"a"},"postbuildcommands"))," functions. You can use ",Object(r.b)("a",{parentName:"p",href:"tokens"},"Tokens")," to create generic commands that will work across platforms and configurations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'-- copy a file from the objects directory to the target directory\npostbuildcommands {\n  "{COPY} %{cfg.objdir}/output.map %{cfg.targetdir}"\n}\n')),Object(r.b)("h2",{id:"custom-build-commands"},"Custom Build Commands"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"As of this writing, the custom build commands feature is still incomplete; see the list of limitations below.")),Object(r.b)("p",null,"Custom build commands provide the ability to compile or process new types of files, other than the C/C++ or C# files Premake supports out of the box. You can compile a Cg shader program, or process an image."),Object(r.b)("p",null,"Here is an example which compiles all Lua files in a project to C:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},"filter 'files:**.lua'\n   -- A message to display while this build step is running (optional)\n   buildmessage 'Compiling %{file.relpath}'\n\n   -- One or more commands to run (required)\n   buildcommands {\n      'luac -o \"%{cfg.objdir}/%{file.basename}.out\" \"%{file.relpath}\"'\n   }\n\n   -- One or more outputs resulting from the build (required)\n   buildoutputs { '%{cfg.objdir}/%{file.basename}.c' }\n\n   -- One or more additional dependencies for this build command (optional)\n   buildinputs { 'path/to/file1.ext', 'path/to/file2.ext' }\n\n")),Object(r.b)("p",null,"The basic syntax follows Visual Studio's model, but it should be easy to see how it would translate to makefiles."),Object(r.b)("p",null,"Build rules follow the same configuration scoping as the rest of the Premake API. You can apply rules to a specific platform or build configuration, to specific files or all files, or to any combination. And you can use ",Object(r.b)("a",{parentName:"p",href:"tokens"},"Tokens")," to create generic commands that will work across platforms and configurations."),Object(r.b)("p",null,"If the outputs include any object files, they will be automatically added to the link step. Ideally, any source code files included in the outputs would be fed back into the build, but that is not the case currently."),Object(r.b)("p",null,"Custom build commands currently have a few shortcomings. Help fixing these issues, or any other gaps, would be most appreciated!"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"There is limited detection of paths in the build commands. Tokens that\nexpand to absolute paths (most of them do, i.e. %{cfg.objdir}) are properly\nmade project relative. Custom tokens, or paths hardcoded inline with the\ncommands, must be specified relative to the generated project location.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Commands that output C/C++ source files are not fed into the build\nprocess yet (but commands that output object files are fed to the\nlinker).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The generated makefile rule only takes the first output into account\nfor dependency checking."))),Object(r.b)("h2",{id:"custom-rules"},"Custom Rules"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"custom-rules"},"custom rules feature")," is similar to custom build commands. It allows you describe how to build a particular kind of file, but in a more generic way, and with variables that can be set in your project script. ",Object(r.b)("a",{parentName:"p",href:"custom-rules"},"Learn more about custom rules here"),"."))}u.isMDXComponent=!0},417:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);