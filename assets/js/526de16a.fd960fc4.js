(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4300],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(r),d=l,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2782:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=r(2122),l=r(9756),a=(r(7294),r(3905)),o=["components"],i={},p={unversionedId:"term.setTextColor",id:"term.setTextColor",isDocsHomePage:!1,title:"term.setTextColor",description:"Changes the color of future text printed to the console",source:"@site/docs/term.setTextColor.md",sourceDirName:".",slug:"/term.setTextColor",permalink:"/premake-core/docs/term.setTextColor",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/term.setTextColor.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"term.pushColor",permalink:"/premake-core/docs/term.pushColor"},next:{title:"zip.extract",permalink:"/premake-core/docs/zip.extract"}},m=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:m};function c(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Changes the color of future text printed to the console"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"term.setTextColor(color)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"color")," - One of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nil")," (default color)"),(0,a.kt)("li",{parentName:"ul"},"term.black"),(0,a.kt)("li",{parentName:"ul"},"term.blue"),(0,a.kt)("li",{parentName:"ul"},"term.green"),(0,a.kt)("li",{parentName:"ul"},"term.cyan"),(0,a.kt)("li",{parentName:"ul"},"term.red"),(0,a.kt)("li",{parentName:"ul"},"term.purple"),(0,a.kt)("li",{parentName:"ul"},"term.brown"),(0,a.kt)("li",{parentName:"ul"},"term.lightGray"),(0,a.kt)("li",{parentName:"ul"},"term.gray"),(0,a.kt)("li",{parentName:"ul"},"term.lightBlue"),(0,a.kt)("li",{parentName:"ul"},"term.lightGreen"),(0,a.kt)("li",{parentName:"ul"},"term.lightCyan"),(0,a.kt)("li",{parentName:"ul"},"term.lightRed"),(0,a.kt)("li",{parentName:"ul"},"term.magenta"),(0,a.kt)("li",{parentName:"ul"},"term.yellow"),(0,a.kt)("li",{parentName:"ul"},"term.white")),(0,a.kt)("p",null,"For specific purposes the following can be used/overridden:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"term.warningColor"),(0,a.kt)("li",{parentName:"ul"},"term.errorColor"),(0,a.kt)("li",{parentName:"ul"},"term.infoColor")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Print text in green"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'term.setTextColor(term.green)\nprint("Hello World")\n')),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/term.getTextColor"},"term.getTextColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/term.pushColor"},"term.pushColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/premake-core/docs/term.popColor"},"term.popColor"))),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 5.0.0 alpha 12 or later."))}c.isMDXComponent=!0}}]);