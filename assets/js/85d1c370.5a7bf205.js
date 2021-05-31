(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2630],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2977:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],l={},s={unversionedId:"disablewarnings",id:"disablewarnings",isDocsHomePage:!1,title:"disablewarnings",description:"Disables specific compiler warnings.",source:"@site/docs/disablewarnings.md",sourceDirName:".",slug:"/disablewarnings",permalink:"/premake-core/docs/disablewarnings",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/disablewarnings.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{},sidebar:"docs",previous:{title:"deploymentoptions",permalink:"/premake-core/docs/deploymentoptions"},next:{title:"display",permalink:"/premake-core/docs/display"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Disables specific compiler warnings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'disablewarnings { "warnings" }\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"warnings")," is a list of warnings to disable."),(0,i.kt)("p",null,"For Visual Studio, the MSC warning number should be used to specify the warning. On other compilers, the warning should be identified by name."),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"Project configurations."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Premake 5.0 or later."),(0,i.kt)("p",null,"Xcode project generation does not yet support ",(0,i.kt)("inlineCode",{parentName:"p"},"disablewarnings"),". As a workaround, you can use [","[xcodebuildsettings]","] like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'xcodebuildsettings { \n    WARNING_CFLAGS = "-Wall -Wextra " ..\n        "-Wno-missing-field-initializers " ..\n        "-Wno-unknown-pragmas " ..\n        "-Wno-unused-parameter " ..\n        "-Wno-unused-local-typedef " ..\n        "-Wno-missing-braces " ..\n        "-Wno-microsoft-anon-tag "\n}\n')),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Disable the GCC warning about using old-style C casts (",(0,i.kt)("inlineCode",{parentName:"p"},"-Wno-old-style-cast")," command line argument):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'filter "options:cc=gcc"\n  disablewarnings "old-style-cast"\n')),(0,i.kt)("h3",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/premake-core/docs/enablewarnings"},"enablewarnings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/premake-core/docs/fatalwarnings"},"fatalwarnings"))))}u.isMDXComponent=!0}}]);