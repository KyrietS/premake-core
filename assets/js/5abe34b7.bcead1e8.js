(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6150],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3155:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],l={},s={unversionedId:"os.rmdir",id:"os.rmdir",isDocsHomePage:!1,title:"os.rmdir",description:"Removes an existing directory as well as any files or subdirectories it contains.",source:"@site/docs/os.rmdir.md",sourceDirName:".",slug:"/os.rmdir",permalink:"/premake-core/docs/os.rmdir",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.rmdir.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1613420369,formattedLastUpdatedAt:"2/15/2021",frontMatter:{},sidebar:"docs",previous:{title:"os.remove",permalink:"/premake-core/docs/os.remove"},next:{title:"os.stat",permalink:"/premake-core/docs/os.stat"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:c};function p(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Removes an existing directory as well as any files or subdirectories it contains."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'os.rmdir("path")\n')),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"path")," is the file system path to be removed."),(0,o.kt)("h3",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,"True if successful, otherwise nil and an error message."),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Premake 4.0 or later."),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/os.chdir"},"os.chdir")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/os.getcwd"},"os.getcwd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/premake-core/docs/os.mkdir"},"os.mkdir"))))}p.isMDXComponent=!0}}]);