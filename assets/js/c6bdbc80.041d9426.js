(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5740],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=i.createContext({}),s=function(e){var r=i.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return i.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},f=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(t),m=n,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return t?i.createElement(d,l(l({ref:r},c),{},{components:t})):i.createElement(d,l({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9898:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var i=t(2122),n=t(9756),a=(t(7294),t(3905)),l=["components"],o={},p={unversionedId:"implibsuffix",id:"implibsuffix",isDocsHomePage:!1,title:"implibsuffix",description:"Specifies a file name suffix for the import library base file name. Import libraries are generated for Windows DLL projects.",source:"@site/docs/implibsuffix.md",sourceDirName:".",slug:"/implibsuffix",permalink:"/premake-core/docs/implibsuffix",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/implibsuffix.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{},sidebar:"docs",previous:{title:"implibprefix",permalink:"/premake-core/docs/implibprefix"},next:{title:"includedirs",permalink:"/premake-core/docs/includedirs"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],c={toc:s};function u(e){var r=e.components,t=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specifies a file name suffix for the import library base file name. Import libraries are generated for Windows DLL projects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibsuffix ("suffix")\n')),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"suffix")," is the new filename suffix."),(0,a.kt)("h3",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"Project configurations."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 4.0 or later."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Add "-d" to debug versions of files\nconfiguration "Debug"\n   implibsuffix "-d"\n')),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/implibname"},"implibname")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/implibdir"},"implibdir")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/implibextension"},"implibextension")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/implibprefix"},"implibprefix"))))}u.isMDXComponent=!0}}]);