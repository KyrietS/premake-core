(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4958],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},593:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],p={title:"Locating Scripts"},l={unversionedId:"Locating-Scripts",id:"Locating-Scripts",isDocsHomePage:!1,title:"Locating Scripts",description:"When Premake needs to load a script file, via a call to dofile() or include(), or a module via a call to require(), it uses the premake.path variable to locate it. This is a semicolon-delimited string which, by default, includes the following locations, in the specified order:",source:"@site/docs/Locating-Scripts.md",sourceDirName:".",slug:"/Locating-Scripts",permalink:"/premake-core/docs/Locating-Scripts",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Locating-Scripts.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{title:"Locating Scripts"}},c=[],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When Premake needs to load a script file, via a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"dofile()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"include()"),", or a module via a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"require()"),", it uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"premake.path")," variable to locate it. This is a semicolon-delimited string which, by default, includes the following locations, in the specified order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Relative to the currently executing script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On the path specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"--scripts")," command line argument")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On the paths listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PREMAKE_PATH")," environment variable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.premake")," directory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/Premake")," directory (Mac OS X only)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/share/premake")," directory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/premake")," directory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the directory containing the currently running Premake executable."))),(0,i.kt)("p",null,"Note that these search paths also work for modules (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.premake/monodevelop"),") and ",(0,i.kt)("a",{parentName:"p",href:"system-scripts"},"system scripts"),"."),(0,i.kt)("p",null,"You are free to add or remove paths from ",(0,i.kt)("inlineCode",{parentName:"p"},"premake.path"),", in either your project or system scripts. Any requests to load scripts after the change will use your modified path."))}u.isMDXComponent=!0}}]);