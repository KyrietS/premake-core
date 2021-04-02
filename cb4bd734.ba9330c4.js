(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{346:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(417)),l={},c={unversionedId:"http.download",id:"http.download",isDocsHomePage:!1,title:"http.download",description:"Downloads an HTTP resource from the specified URL to a file.",source:"@site/docs/http.download.md",slug:"/http.download",permalink:"/premake-core/docs/http.download",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/http.download.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"verbosef",permalink:"/premake-core/docs/verbosef"},next:{title:"http.get",permalink:"/premake-core/docs/http.get"}},i=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Values",id:"return-values",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Backward compatible function signature",id:"backward-compatible-function-signature",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Downloads an HTTP resource from the specified URL to a file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"http.download(url, file, { options })\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"url")," is the URL to be downloaded. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"file")," is the destination file that will be written to."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"options")," is a ",Object(o.b)("a",{parentName:"p",href:"/premake-core/docs/http-options-table"},"table of options")," used for this HTTP request. "),Object(o.b)("h3",{id:"return-values"},"Return Values"),Object(o.b)("p",null,"There are two return values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"result_str, response_code = http.download(url, file, { options })\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"result_str"),' is set to "OK" if successful or contains a description of the failure.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"result_code")," is the HTTP ",Object(o.b)("a",{parentName:"li",href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"},"result code")," of the download. ")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local result_str, response_code = http.download("http://example.com/file.zip", "file.zip")\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'function progress(total, current)\n  local ratio = current / total;\n  ratio = math.min(math.max(ratio, 0), 1);\n  local percent = math.floor(ratio * 100);\n  print("Download progress (" .. percent .. "%/100%)")\nend\n\nlocal result_str, response_code = http.download("http://example.com/file.zip", "file.zip", {\n    progress = progress,\n    headers = { "From: Premake", "Referer: Premake" }, \n    userpwd = "username:password"\n})\n')),Object(o.b)("h3",{id:"backward-compatible-function-signature"},"Backward compatible function signature"),Object(o.b)("p",null,"The previous signature of this function was"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"http.download(url, file, progress, headers)\n")),Object(o.b)("p",null,"and continues to be supported. This is equivalent to"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"http.download(url, file, { progress = progress, headers = headers })\n")),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/premake-core/docs/http.get"},"http.get"))))}s.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);