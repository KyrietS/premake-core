(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(441)),i={title:"Community Update #6",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},s={permalink:"/premake-core/blog/2020/11/02/community-udpate-6",source:"@site/blog/2020-11-02-community-udpate-6.md",description:"Enter the Exporters",date:"2020-11-02T00:00:00.000Z",tags:[{label:"community-updates",permalink:"/premake-core/blog/tags/community-updates"}],title:"Community Update #6",readingTime:4.55,truncated:!1,prevItem:{title:"Community Update #7",permalink:"/premake-core/blog/2021/02/24/community-update-7"},nextItem:{title:"Community Update #5",permalink:"/premake-core/blog/2020/08/04/community-update-5"}},l=[{value:"Enter the Exporters",id:"enter-the-exporters",children:[]},{value:"What&#39;s Next for Next",id:"whats-next-for-next",children:[]},{value:"What&#39;s New",id:"whats-new",children:[]},{value:"What&#39;s next",id:"whats-next",children:[]},{value:"Thanks to our supporters! \ud83c\udf89",id:"thanks-to-our-supporters-",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"enter-the-exporters"},"Enter the Exporters"),Object(a.b)("p",null,"The focus for this cycle was getting an exporter\u2014I settled on Visual Studio\u2014up and running and able to generate a basic, mostly hardcoded workspace and project. More details below, but TL;DR:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All of the core systems are now in play, with the exception of toolsets and token expansion (more on those below)"),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("strong",{parentName:"li"},"workspace"),", ",Object(a.b)("strong",{parentName:"li"},"project"),", ",Object(a.b)("strong",{parentName:"li"},"location"),", and ",Object(a.b)("strong",{parentName:"li"},"filename")," scripting APIs are implemented, as well as the ability to declare conditional configuration blocks"),Object(a.b)("li",{parentName:"ul"},"A very rudimentary Visual Studio exporter is now in place, with the ability to generate mostly hardcoded C/C++ solutions and projects at the specified locations and filenames")),Object(a.b)("h3",{id:"whats-next-for-next"},"What's Next for Next"),Object(a.b)("p",null,'For those of you who are more interested in "is it done yet?" than "what\'s new?", here\'s my current thinking on what comes next:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Decide if/how/when/where these improvements get merged (or not) with Premake5. I have some thoughts of course, and will be opening an RFC on the issue tracker shortly to gather feedback. I'l announce it on ",Object(a.b)("a",{parentName:"li",href:"https://twitter.com/premakeapp"},"@premakeapp")," when I do."),Object(a.b)("li",{parentName:"ul"},"Get build configurations & files online\u2014be able to generate simple Visual Studio C/C++ projects with no extra switches or dependencies"),Object(a.b)("li",{parentName:"ul"},"Get Make and Xcode up to same level as Visual Studio\u2014going to be some rewriting here as that code has seen a lot of wear and tear, and needs to be brought up to the latest code conventions"),Object(a.b)("li",{parentName:"ul"},"Decide on and build out the new solution for toolset adapters\u2014I'll open an RFC on the issue tracker for this as well"),Object(a.b)("li",{parentName:"ul"},"Add ",Object(a.b)("strong",{parentName:"li"},"kind, links,")," and the most important switches (e.g. ",Object(a.b)("strong",{parentName:"li"},"includedirs, symbols, optimize"),")\u2014be able to support the most common C/C++ builds")),Object(a.b)("p",null,"Somewhere in there I should also backfill the documentation so people know what's working. All of this is subject to change and peer pressure, feedback welcome."),Object(a.b)("h3",{id:"whats-new"},"What's New"),Object(a.b)("p",null,"I'm doing my best to keep ",Object(a.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next/blob/master/docs/Changes-Since-v5.md"},"an inventory of the major changes here"),"; let me know if you spot anything missing (and thanks to those who have already)."),Object(a.b)("h4",{id:"scoping-is-now-explicit"},"Scoping is now explicit"),Object(a.b)("p",null,"Premake4/5's scoping rules have always been a big gotcha. Tough for newcomers, easy to break even for experienced users, and very difficult to debug. I'm proposing that scoping be made explicit using function callbacks. Here's what a simple Hello World script might look with the new approach (apologies again for the images; if OpenCollective's editor supports code blocks I haven't been able to find them yet)."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},"workspace('HelloWorld', function ()\n    configurations { 'Debug', 'Release' }\n\n    project('HelloWorld', function ()\n        kind 'ConsoleApplication'\n        files { '**.h', '**.cpp' }\n\n        when({ configurations='Debug' }, function ()\n            defines { 'DEBUG' }\n            symbols 'On'\n        end)\n\n        when({ configurations='Release' }, function ()\n            defines { 'NDEBUG' }\n            optimize 'On'\n        end)\n    end)\nend)\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"(Keep in mind, only ",Object(a.b)("strong",{parentName:"em"},"workspace, project, location,")," and ",Object(a.b)("strong",{parentName:"em"},"filename")," are implemented so far, the rest will be coming online ASAP. The name ",Object(a.b)("strong",{parentName:"em"},"when()")," is a proposal, feedback welcome.)")),Object(a.b)("p",null,"Under the hood, the provided configuration functions are called immediately. Under the hood, that workspace() helper looks like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},"function workspace(name, fn)\n    workspaces(name)\n    when({ workspaces = name }, function ()\n        baseDir(_SCRIPT_DIR)\n        fn()\n    end)\nend)\n")),Object(a.b)("p",null,"\u2026so things still work the same as in Premake5, but scopes are now clearly explicit, and the indentation actually makes real sense (and gets syntax-aware editor support."),Object(a.b)("p",null,"The syntax is, unfortunately, noisy. Down the road I wouldn't be opposed to tweaking Premake's embedded Lua runtime to provide a simpler syntax."),Object(a.b)("h4",{id:"exporters-are-no-longer-version-specific"},"Exporters are no longer version specific"),Object(a.b)("p",null,"The command to export a project for Visual Studio now looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# target the latest version of Visual Studio we support\npremake6 vstudio\n\n# target a specific version\npremake6 vstudio=2017\n")),Object(a.b)("p",null,"As anyone working on the Visual Studio or Xcode exporters is well aware, tool vendors are no longer waiting for the next major release to add features and change project formats. While more work is needed, the new command line syntax at least opens up the possibility of doing something like\u2026"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"premake6 vstudio=14.0.25431.01\n")),Object(a.b)("p",null,"\u2026which will allow us to support people who need to target a specific build of one of these tools."),Object(a.b)("h4",{id:"container-hierarchy-is-now-more-flexible"},"Container hierarchy is now more flexible"),Object(a.b)("p",null,"In Premake4+, projects were required to be declared within one and only one workspace; this is now loosened up. The earlier Hello, World example could also be written like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},"workspaces { 'HelloWorld' }\nprojects { 'HelloWorld' }\n\nwhen({ 'workspaces:HelloWorld' }, function ()\n    projects { 'HelloWorld' }\nend)\n")),Object(a.b)("p",null,"Projects can be shared between workspaces, or even be completely standalone, if the target toolset supports it."),Object(a.b)("h3",{id:"whats-next"},"What's next"),Object(a.b)("p",null,"I covered this above, but an RFC to coordinate v5 vs. vNext development is currently next on my to-do list."),Object(a.b)("p",null,"These are big changes and I welcome questions, suggestions, and concerns. Everything is up for discussion, from the feature set, to the coding style. You can message or DM me at ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com")),", or open an issue on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"the premake-next GitHub project"),"."),Object(a.b)("h3",{id:"thanks-to-our-supporters-"},"Thanks to our supporters! \ud83c\udf89"),Object(a.b)("p",null,"Many thanks to my co-maintainer ",Object(a.b)("a",{parentName:"p",href:"https://github.com/samsinsane"},"@samsinsane"),", who has been doing a stellar job of keeping the shop running while I've been distracted with the new code, and to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nickclark2016"},"@nickclark2016"),", ",Object(a.b)("a",{parentName:"p",href:"https://github.com/noresources"},"@noresources"),", ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nickgravelyn"},"@nickgravelyn"),", ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Jarod42"},"@Jarod42"),", and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/cos-public"},"@cos-public")," for helping out with issues and new pull requests\u2014very much appreciated!"),Object(a.b)("p",null,"And another big shout out to ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://opencollective.com/_fivem#section-contributions"},"CitizenFX Collective"))," for their continued strong financial support\u2014as well as ","[all of our monthly backers]","(",Object(a.b)("a",{parentName:"p",href:"https://opencollective.com/premake#section-contributors"},"https://opencollective.com/premake#section-contributors"),"!"),Object(a.b)("p",null,"Doing my best to get this new version fully up to speed ASAP for all of you."),Object(a.b)("p",null,"~st."))}p.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);