(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1916],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(r),h=o,k=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return r?a.createElement(k,p(p({ref:t},s),{},{components:r})):a.createElement(k,p({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var m=2;m<n;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8580:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var a=r(2122),o=r(9756),n=(r(7294),r(3905)),p=["components"],i={title:"Community Update #2",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},l={permalink:"/premake-core/blog/2019/10/23/ community-update-2",source:"@site/blog/2019-10-23- community-update-2.md",title:"Community Update #2",description:"For this cycle (I work in eight-week cycles and fill in as much Premake work as I can), I completed a long overdue pruning of the pull request backlog. Working up from the oldest, I was able to get it down to just four, all in striking distance of merging and just needing a little follow-up (assistance welcome!). I'll drop a list of all the PRs that were moved at the bottom of this update. Because\u2026",date:"2019-10-23T00:00:00.000Z",formattedDate:"October 23, 2019",tags:[{label:"community-updates",permalink:"/premake-core/blog/tags/community-updates"}],readingTime:1.885,truncated:!1,prevItem:{title:"Community Update #3",permalink:"/premake-core/blog/2020/01/08/community-update-3"},nextItem:{title:"Community Update #1",permalink:"/premake-core/blog/2019/08/31/community-update-1"}},m=[],s={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,p);return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For this cycle (I work in eight-week cycles and fill in as much Premake work as I can), I completed a long overdue pruning of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next/pulls"},"the pull request backlog"),". Working up from the oldest, I was able to get it down to just four, all in striking distance of merging and just needing a little follow-up (assistance welcome!). I'll drop a list of all the PRs that were moved at the bottom of this update. Because\u2026"),(0,n.kt)("p",null,"\u2026more importantly, while I have this opportunity to log solid blocks of time to Premake (",(0,n.kt)("a",{parentName:"p",href:"https://opencollective.com/premake#section-contributors"},"thank you!"),"), I'm taking on its biggest weakness: the project configuration system, the heart of the program that stores your scripted project settings and serves them back to the exporters and actions. The shortcomings in this system are the reason why it's so difficult to support per-file configurations, why we struggle to express makefiles succinctly, and why we can't do a better job of scaling up to large numbers of platforms/architectures/toolsets/etc. Fixing this fixes many things."),(0,n.kt)("p",null,"To get this done in the most expedient way, and with the least disruption, I\u2019ve ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"spun up a new working space at premake-next"),". For those interested, you can read more about what I'm doing, why, and where it's all headed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"over there"),". And I\u2019ll also continue posting regular updates ",(0,n.kt)("a",{parentName:"p",href:"https://opencollective.com/premake"},"here on the Collective"),"."),(0,n.kt)("p",null,"Which brings me to the part where I give a huge THANK YOU! to our continuing sponsors ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://opencollective.com/_fivem"},"CitizenFX Collective"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://opencollective.com/industriousone"},"Industrious One"),". I would not be able to tackle any of this were it not for your continued support. \ud83d\ude4c"),(0,n.kt)("p",null,"For the next cycle, I plan to start filling in the details of an improved configuration storage approach and, if possible, merge another ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/pulls"},"pull request or two"),"."),(0,n.kt)("p",null,"~st."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Completed Tasks:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Boostrapped ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/starkos/premake-next"},"Premake-next")),(0,n.kt)("li",{parentName:"ul"},"Closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1259"},"PR #1259")," with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1355"},"PR #1355")),(0,n.kt)("li",{parentName:"ul"},"Closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1271"},"PR #1271")," with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1356"},"PR #1356")),(0,n.kt)("li",{parentName:"ul"},"Closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1063"},"PR #1063")," with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1357"},"PR #1357")),(0,n.kt)("li",{parentName:"ul"},"Merged new PRs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1345"},"#1345"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1351"},"1351"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1352"},"1352"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1353"},"1353"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1358"},"1358")),(0,n.kt)("li",{parentName:"ul"},"Closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/issues/38"},"issue #38")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/624"},"PR #624")," with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/issues/1344"},"feature request #1344")),(0,n.kt)("li",{parentName:"ul"},"Closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/issues/237"},"issue #237")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/956"},"PR #956")," with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/issues/1346"},"feature request #1346")),(0,n.kt)("li",{parentName:"ul"},"Closed stale PRs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/968"},"#968"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1003"},"1003"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1054"},"1054"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1112"},"1112"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1119"},"1119"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1196"},"1196"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1252"},"1252"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1301"},"1301")),(0,n.kt)("li",{parentName:"ul"},'Added new "Get help" and "Ask a question" issue templates; improved "Report a bug" and "Request a feature" templates')))}u.isMDXComponent=!0}}]);