(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return m},kt:function(){return f}});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),c=function(e){var r=i.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=c(e.components);return i.createElement(o.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=n,d=u["".concat(o,".").concat(f)]||u[f]||s[f]||a;return t?i.createElement(d,l(l({ref:r},m),{},{components:t})):i.createElement(d,l({ref:r},m))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=u;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},468:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return s}});var i=t(2122),n=t(9756),a=(t(7294),t(3905)),l=["components"],p={},o={unversionedId:"implibprefix",id:"implibprefix",isDocsHomePage:!1,title:"implibprefix",description:"Specifies the import library file name prefix. Import libraries are generated for Windows DLL projects.",source:"@site/docs/implibprefix.md",sourceDirName:".",slug:"/implibprefix",permalink:"/premake-core/docs/implibprefix",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/implibprefix.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"implibname",permalink:"/premake-core/docs/implibname"},next:{title:"implibsuffix",permalink:"/premake-core/docs/implibsuffix"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],m={toc:c};function s(e){var r=e.components,t=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specifies the import library file name prefix. Import libraries are generated for Windows DLL projects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibprefix ("prefix")\n')),(0,a.kt)("p",null,"By default, the system naming convention will be used: no prefix on Windows, a prefix of ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," (as in ",(0,a.kt)("inlineCode",{parentName:"p"},"libMyProject.a"),") on other systems. The ",(0,a.kt)("inlineCode",{parentName:"p"},"implibprefix")," function allows you to change this default."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"prefix")," is the new file name prefix."),(0,a.kt)("h3",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"Project configurations."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 4.0 or later."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibprefix "plugin"\n')),(0,a.kt)("p",null,"The prefix may also be set to an empty string for no prefix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibprefix ""\n')),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/implibname"},"implibname")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/implibdir"},"implibdir")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/implibextension"},"implibextension")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/implibsuffix"},"implibsuffix"))))}s.isMDXComponent=!0}}]);