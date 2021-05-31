(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2036],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6305:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],u={},l={unversionedId:"uuid",id:"uuid",isDocsHomePage:!1,title:"uuid",description:"Sets the Universally Unique Identifier (UUID) for a project.",source:"@site/docs/uuid.md",sourceDirName:".",slug:"/uuid",permalink:"/premake-core/docs/uuid",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/uuid.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622476196,formattedLastUpdatedAt:"5/31/2021",frontMatter:{},sidebar:"docs",previous:{title:"usingdirs",permalink:"/premake-core/docs/usingdirs"},next:{title:"vectorextensions",permalink:"/premake-core/docs/vectorextensions"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sets the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/UUID"},"Universally Unique Identifier")," (UUID) for a project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'uuid ("project_uuid")\n')),(0,i.kt)("p",null,"UUIDs are synonymous (for Premake's purposes) with ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Globally_Unique_Identifier"},"Globally Unique Identifiers")," (GUID)."),(0,i.kt)("p",null,"Premake automatically assigns a UUID to each project, which is used by the Visual Studio generators to identify the project within a workspace. This UUID is essentially random and will change each time the project file is generated. If you are storing the generated Visual Studio project files in a version control system, this will create a lot of unnecessary deltas. Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," function, you can assign a fixed UUID to each project which never changes, removing the randomness from the generated projects."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"project_uuid"),' is the UUID for the current project. It should take the form "01234567-ABCD-ABCD-ABCD-0123456789AB" (see the examples below for some real UUID values). You can use the Visual Studio ',(0,i.kt)("a",{parentName:"p",href:"http://msdn2.microsoft.com/en-us/library/ms241442(VS.80).aspx"},"guidgen")," tool to create new UUIDs, or ",(0,i.kt)("a",{parentName:"p",href:"http://www.famkruithof.net/uuid/uuidgen"},"this website"),", or run Premake once to generate Visual Studio files and copy the assigned UUIDs."),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"Projects."),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,"The current project UUID, or nil if no UUID has been set."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Premake 4.0 or later."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Set the UUID for a current project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'uuid "BE2461B7-236F-4278-81D3-F0D476F9A4C0"\n')))}p.isMDXComponent=!0}}]);