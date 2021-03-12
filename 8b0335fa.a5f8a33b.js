(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{276:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var r=o(3),a=o(7),n=(o(0),o(448)),i={title:"Building Premake"},s={unversionedId:"Building-Premake",id:"Building-Premake",isDocsHomePage:!1,title:"Building Premake",description:"If you downloaded a prebuilt binary package you can skip this page, which discusses how to build the Premake source code. Jump ahead to one of the next sections to learn how to develop with Premake.",source:"@site/docs/Building-Premake.md",slug:"/Building-Premake",permalink:"/premake-core/docs/Building-Premake",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Building-Premake.md",version:"current",sidebar:"mainSidebar",previous:{title:"What is Premake",permalink:"/premake-core/docs/What-Is-Premake"},next:{title:"Getting Premake",permalink:"/premake-core/docs/Getting-Premake"}},l=[{value:"Using a Source Code Package",id:"using-a-source-code-package",children:[]},{value:"Using the Git Code Repository",id:"using-the-git-code-repository",children:[]},{value:"Running the Tests",id:"running-the-tests",children:[]},{value:"Runtime Script Loading",id:"runtime-script-loading",children:[]},{value:"Stuck?",id:"stuck",children:[]}],c={toc:l};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"If you downloaded a prebuilt binary package you can skip this page, which discusses how to build the Premake source code. Jump ahead to one of the next sections to learn how to develop with Premake."),Object(n.b)("h2",{id:"using-a-source-code-package"},"Using a Source Code Package"),Object(n.b)("p",null,"If you have one of the ",Object(n.b)("a",{parentName:"p",href:"http://premake.github.io/download.html"},"official source code packages"),", you'll find that project files for a variety of toolsets have already been generated for you in the ",Object(n.b)("inlineCode",{parentName:"p"},"build/")," folder. Find the right set for your platform and toolset and build as you normally would  (i.e. run ",Object(n.b)("inlineCode",{parentName:"p"},"make"),"). The resulting binaries will be placed in the top-level ",Object(n.b)("inlineCode",{parentName:"p"},"bin/")," folder."),Object(n.b)("p",null,"Skip ahead to the next section to learn more about using the source version of Premake."),Object(n.b)("h2",{id:"using-the-git-code-repository"},"Using the Git Code Repository"),Object(n.b)("p",null,"If you are planning to make changes or contribute to Premake, working directly against the source code repository is the way to go. Premake 5's source code is housed ",Object(n.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core"},"right here on GitHub"),'. To get the source code, see the "Clone" options in the sidebar to the right and follow the instructions there.'),Object(n.b)("p",null,"Once the core source code has been cloned, you can bootstrap your first Premake executable:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"nmake -f Bootstrap.mak windows   # for Windows\nmake -f Bootstrap.mak osx        # for Mac OS X\nmake -f Bootstrap.mak linux      # Linux and similar Posix systems\n")),Object(n.b)("p",null,"If your system or toolset is not fully supported by the bootstrap Makefile, you will need to create new project files using an existing version of Premake, however on Windows you can optionally specify the version of Visual Studio to use for the bootstrap using the MSDEV macro. To successfully compile on Windows with Visual C++ you must run ",Object(n.b)("inlineCode",{parentName:"p"},"vcvars32.bat")," first. If you don't have Visual C++ as part of your environment variables then you need to use the full path ",Object(n.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Microsoft Visual Studio <version>\\VC\\bin\\vcvars32.bat"),". It might be easier to create a batch file with the following contents or copy the contents in appveyor.yml."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},'call "%VS140COMNTOOLS%\\..\\..\\VC\\vcvarsall.bat" # Sets up the necessary environment variables for nmake to run\nnmake -f Bootstrap.mak MSDEV=vs2015 windows    # For Windows with Visual Studio 2015.\n')),Object(n.b)("p",null,"On other platforms, if the bootstrap fails to build, you will need to have a working Premake executable on your system. The easiest way to get one is by ",Object(n.b)("a",{parentName:"p",href:"http://premake.github.io/download.html"},"downloading prebuilt binary package"),". If a binary is not available for your system, or if you would prefer to build one yourself, grab the latest source code package from that same site and follow the steps in ",Object(n.b)("strong",{parentName:"p"},"Using a Source Code Package"),", above."),Object(n.b)("p",null,"Once you have a working Premake available, you can generate the project files for your toolset by running a command like the following in the top-level Premake directory:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"premake5 gmake  # for makefiles\npremake5 vs2012 # for a Visual Studio 2012 solution\npremake --help  # to see a list of supported toolsets\n")),Object(n.b)("p",null,"If this is the first time you have built Premake, or if you have made changes to the Lua scripts, you should prepare them to be embedded into the Premake executable."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"premake5 embed\n")),Object(n.b)("p",null,"This creates a C file (at src/host/scripts.c) which contains all of the Lua scripts as static string buffers. These then get compiled into the executable, which is how we get away with shipping a single file instead of a whole bunch of scripts."),Object(n.b)("p",null,"You should now have a workspace/solution/makefile in the top-level folder, which you can go ahead and build. The resulting binaries will placed into the ",Object(n.b)("strong",{parentName:"p"},"bin/")," folder."),Object(n.b)("h2",{id:"running-the-tests"},"Running the Tests"),Object(n.b)("p",null,"Once you have built an executable, you can verify it by running Premake's unit test suites. From the top-level Premake folder, run:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"bin/debug/premake5 test    # or...\nbin/release/premake5 test\n")),Object(n.b)("h2",{id:"runtime-script-loading"},"Runtime Script Loading"),Object(n.b)("p",null,"If you are modifying or extending Premake, you can skip the embedding and compilation steps and run the scripts directly from the disk. This removes the build from the change-build-test cycle and really speeds up development."),Object(n.b)("p",null,"If you are running Premake from the top of its own source tree (where its  premake5.lua is located) you will get this behavior automatically. If you are running Premake from some other location, use the --scripts option to provide the path to that top-level folder:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"bin/release/premake5 --scripts=../path/to/premake test\n")),Object(n.b)("p",null,"If you find yourself doing this repeatedly, or if you want Premake to be able to find other, custom scripts, you can also set a search path with the PREMAKE_PATH environment variable. Set it just like you would set your system PATH variable."),Object(n.b)("p",null,"Once your changes are complete and you are ready to distribute them to others, embed them into the executable and rebuild:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"bin/release/premake5 embed\nmake config=release   # or via Visual Studio, etc.\n")),Object(n.b)("h2",{id:"stuck"},"Stuck?"),Object(n.b)("p",null,"Give us a shout over in ",Object(n.b)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/premake-development"},"the Developer Forums")," and we'll be glad to help you out."))}u.isMDXComponent=!0},448:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||n;return o?a.a.createElement(m,s(s({ref:t},c),{},{components:o})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);