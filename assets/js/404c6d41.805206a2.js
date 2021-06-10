(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5407],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8817:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),l=["components"],o={title:"Adding Unit Tests"},i={unversionedId:"Adding-Unit-Tests",id:"Adding-Unit-Tests",isDocsHomePage:!1,title:"Adding Unit Tests",description:"Premake includes an automated testing system that you can use the verify the behavior of your new module.",source:"@site/docs/Adding-Unit-Tests.md",sourceDirName:".",slug:"/Adding-Unit-Tests",permalink:"/premake-core/docs/Adding-Unit-Tests",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Adding-Unit-Tests.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Adding Unit Tests"}},u=[{value:"Add your first test",id:"add-your-first-test",children:[]},{value:"Enable the testing module",id:"enable-the-testing-module",children:[]},{value:"Run your test",id:"run-your-test",children:[]},{value:"Passing a test",id:"passing-a-test",children:[]},{value:"Next steps?",id:"next-steps",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Premake includes an automated testing system that you can use the verify the behavior of your new module."),(0,s.kt)("h2",{id:"add-your-first-test"},"Add your first test"),(0,s.kt)("p",null,"Within our ",(0,s.kt)("a",{parentName:"p",href:"/premake-core/docs/Introducing-Modules"},"Lucky module")," folder, create a new folder named ",(0,s.kt)("inlineCode",{parentName:"p"},"tests"),"."),(0,s.kt)("p",null,"Within that folder, create a new file named ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/test_lucky_numbers.lua")," with a simple failing test:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'local suite = test.declare("lucky_numbers")\n\nfunction suite.aFailingTest()\n    test.isequal(2, 3)\nend\n')),(0,s.kt)("p",null,"You'll also need a manifest to list all of your test files. Create another file in that same folder named ",(0,s.kt)("inlineCode",{parentName:"p"},"_tests.lua"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"lucky = require('lucky')  -- replace with name of your module, obviously\n\nreturn {\n    \"test_lucky_numbers.lua\",\n}\n")),(0,s.kt)("p",null,"When you're all done, your module should now look like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"lucky/\n|- lucky.lua\n`- tests/\n    |- _tests.lua\n    `- test_lucky_numbers.lua\n")),(0,s.kt)("h2",{id:"enable-the-testing-module"},"Enable the testing module"),(0,s.kt)("p",null,"Premake's automated testing module is considered an advanced, developer-only feature which is not enabled by default. To enable it, you simply need to add the line ",(0,s.kt)("inlineCode",{parentName:"p"},'test = require("self-test")')," somewhere it will be executed before your tests run."),(0,s.kt)("p",null,"The best place to put it is in your ",(0,s.kt)("a",{parentName:"p",href:"/premake-core/docs/System-Scripts"},"system script"),", which will make the testing action available to all of your projects. But if that isn't feasible for you or your users, you can also place it in your project or testing script."),(0,s.kt)("p",null,"Premake's own code makes use of the latter approach: its ",(0,s.kt)("inlineCode",{parentName:"p"},"premake5.lua"),' script defines a custom action named "test", which in turn enables the built-in testing module:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'newaction {\n    trigger = "test",\n    description = "Run the automated test suite",\n    execute = function ()\n        test = require "self-test"\n        premake.action.call("self-test")\n    end\n    }\n')),(0,s.kt)("h2",{id:"run-your-test"},"Run your test"),(0,s.kt)("p",null,"Once the testing module is enabled, ",(0,s.kt)("inlineCode",{parentName:"p"},"cd")," to your module folder and run the command ",(0,s.kt)("inlineCode",{parentName:"p"},"premake5 self-test"),". You should see your simple failing test fail."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ premake5 self-test\nRunning action 'self-test'...\nlucky_numbers.aFailingTest: ...e/Premake/Modules/lucky/tests/test_lucky_numbers.lua:4: expected 2 but was 3\n0 tests passed, 1 failed in 0.00 seconds\n")),(0,s.kt)("p",null,"If developing new tests for premake itself, it is often beneficial to run smaller subsets of tests with the command-line option --test-only:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ premake5 --test-only=lucky_numbers test\n")),(0,s.kt)("h2",{id:"passing-a-test"},"Passing a test"),(0,s.kt)("p",null,"To complete the example, let's replace our failing test with one which actually calls our module."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'local suite = test.declare("lucky_numbers")\n\nfunction suite.makesEightLucky()\n    local x = lucky.makeNumberLucky(8)\n    test.isequal(56, x)\nend\n')),(0,s.kt)("p",null,"And give it a go:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ premake5 self-test\nRunning action 'self-test'...\n1 tests passed, 0 failed in 0.00 seconds\n")),(0,s.kt)("h2",{id:"next-steps"},"Next steps?"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," folder in the Premake source code contains over 1,000 tests which you can use as examples. The ones in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/tree/master/tests/actions/vstudio/vc2010"},(0,s.kt)("inlineCode",{parentName:"a"},"tests/actions/vstudio/vc2010"))," tend to be the most frequently updated and maintained, and generally make the best examples."),(0,s.kt)("p",null,"You can see the full set of test assertions (",(0,s.kt)("inlineCode",{parentName:"p"},"test.isequal()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"test.capture()"),", etc.) in the Premake source code at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/blob/master/modules/self-test/test_assertions.lua"},(0,s.kt)("inlineCode",{parentName:"a"},"modules/self-test/test_assertions.lua")),"."))}d.isMDXComponent=!0}}]);