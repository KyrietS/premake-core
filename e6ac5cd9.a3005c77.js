(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{400:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(441)),i={title:"Community Update #4",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},s={permalink:"/premake-core/blog/2020/04/07/community-update-4",source:"@site/blog/2020-04-07-community-update-4.md",description:"It's been much longer than anticipated since the last community update. I was out of the country for a bit, and then shortly after my return the whole Situation hit the fan and things got crazy for a while. I'm back now, up and running and looking ahead to what's next. I hope all of you are also safe and sound and getting your groove back.",date:"2020-04-07T00:00:00.000Z",tags:[{label:"community-updates",permalink:"/premake-core/blog/tags/community-updates"}],title:"Community Update #4",readingTime:2.445,truncated:!1,prevItem:{title:"Community Update #5",permalink:"/premake-core/blog/2020/08/04/community-update-5"},nextItem:{title:"Community Update #3",permalink:"/premake-core/blog/2020/01/08/community-update-3"}},c=[],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's been much longer than anticipated since the last community update. I was out of the country for a bit, and then shortly after my return the whole Situation hit the fan and things got crazy for a while. I'm back now, up and running and looking ahead to what's next. I hope all of you are also safe and sound and getting your groove back."),Object(o.b)("h4",{id:"inbox-zero"},"Inbox Zero"),Object(o.b)("p",null,"Rather than diving right back into ",Object(o.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"premake-next"),", it felt best to take a turn clearing out the lingering pull requests that have been haunting our queue, in some cases for years now. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/samsinsane"},"@saminsane")," has been doing a fantastic job triaging your new PRs and getting them merged; I just had to deal with the older ones which, for various reasons, couldn't easily be landed."),Object(o.b)("p",null,"Long story short: after several years, we're at ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/premakeapp/status/1250780905016303616"},"inbox zero"),". Check out ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"},"Premake's recently closed PR list")," for the details on how we got there."),Object(o.b)("p",null,"Whew!"),Object(o.b)("h4",{id:"alpha-15"},"Alpha-15"),Object(o.b)("p",null,"With inbox zero reached, we also cut ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/releases/tag/v5.0.0-alpha15"},"a new 5.0 alpha release")," with over 50 changes and fixes, from over 20 different contributors. Nicely done everyone, and thanks! \ud83d\ude4c"),Object(o.b)("h4",{id:"premake5-stable"},"Premake5 Stable?"),Object(o.b)("p",null,"Speaking of changes and releases, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/issues/1423"},"#1423")," from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dvzrv"},"@dvzrz")," asks whether it's (finally) time to cut a stable release of Premake5. Fair question! As I responded on the issue, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/samsinsane"},"@saminsane")," and I have discussed this before, and our general feeling is that there are too many big, breaking changes that still need to be made."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Gmake/Gmake2 situation needs to be sorted, the Xcode exporter needs to be made fit for use, both Gmake & Xcode need to be made module-friendly, and the toolset abstractions need to be reworked to support more real-world setups. The internal APIs really should be cleaned up and naming conventions standardized for module developers.")),Object(o.b)("p",null,"Help tackling those areas is, of course, very welcome."),Object(o.b)("p",null,"That said\u2026"),Object(o.b)("h4",{id:"back-to-next"},"Back to Next"),Object(o.b)("p",null,"With the PRs cleared and a new alpha released, I'm now turning my attention back to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"premake-next"),". I'm going to adjust the plan a bit and focus on getting the new storage and query systems online ASAP. Fixing these two systems is the point of whole exercise, and it seems worth getting more eyes on them sooner than later, even if the configuration blocks have to be manually assembled (i.e. the convenience functions like workspace(), project(), defines(), files(), etc. won't be there yet\u2026it will make sense when you see it)."),Object(o.b)("h4",{id:"so-long-and-thanks-for-all-the-fish"},"So long and thanks for all the fish"),Object(o.b)("p",null,"As ever, big and many thanks to everyone who contributed to alpha-15, and to everyone who continues to support ",Object(o.b)("a",{parentName:"p",href:"https://opencollective.com/premake"},"the Premake OpenCollective"),", with an extra special \ud83c\udf89 to new sponsors ",Object(o.b)("a",{parentName:"p",href:"https://opencollective.com/emilio-lopez"},"Emilio Lopez")," and ",Object(o.b)("a",{parentName:"p",href:"https://opencollective.com/benjamin-schlotter"},"Benjamin Schlotter"),", and our stalwart benefactor ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/_fivem"},"CitizenFX Collective")),". I wouldn't be able to get any of this done without your help, and I truly appreciate it."),Object(o.b)("p",null,"Stay safe!"),Object(o.b)("p",null,"~st."),Object(o.b)("p",null,"(Your feedback is welcome and appreciated\u2014come find us at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake"},"github.com/premake")," or ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),".)"))}l.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,b=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return n?r.a.createElement(b,s(s({ref:t},p),{},{components:n})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);