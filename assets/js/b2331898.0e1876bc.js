"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||r;return n?s.createElement(b,o(o({ref:t},c),{},{components:n})):s.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var s=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"Postman"},o="Postman Collections",l={unversionedId:"test-types/executor-postman",id:"test-types/executor-postman",title:"Postman Collections",description:"\x3c!-- Watch this simple Testkube intro video for Postman collections with Testkube:",source:"@site/docs/4-test-types/executor-postman.md",sourceDirName:"4-test-types",slug:"/test-types/executor-postman",permalink:"/testkube/test-types/executor-postman",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/4-test-types/executor-postman.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Postman"},sidebar:"tutorialSidebar",previous:{title:"Cypress",permalink:"/testkube/test-types/executor-cypress"},next:{title:"SoapUI",permalink:"/testkube/test-types/executor-soapui"}},i={},u=[{value:"<strong>Test Environment</strong>",id:"test-environment",level:2},{value:"<strong>Create a New Postman Test</strong>",id:"create-a-new-postman-test",level:2},{value:"<strong>Create a New Testkube Test Script</strong>",id:"create-a-new-testkube-test-script",level:2},{value:"<strong>Running a Test</strong>",id:"running-a-test",level:2},{value:"<strong>Getting Test Results</strong>",id:"getting-test-results",level:2},{value:"<strong>Summary</strong>",id:"summary",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postman-collections"},"Postman Collections"),(0,a.kt)("p",null,"Testkube is able to run Postman collections inside your Kubernetes cluster so it can be used to test internal or external services."),(0,a.kt)("h2",{id:"test-environment"},(0,a.kt)("strong",{parentName:"h2"},"Test Environment")),(0,a.kt)("p",null,"Let's assume that our SUT (Service Under Test) is an internal Kubernetes service which has\nClusterIP ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," created and is exposed on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8088"),". The service name is ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube-api-server"),"\nand is exposing the ",(0,a.kt)("inlineCode",{parentName:"p"},"/health")," endpoint that we want to test."),(0,a.kt)("p",null,"To call the SUT inside a cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://testkube-api-server:8088/health\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"200 OK\n")),(0,a.kt)("h2",{id:"create-a-new-postman-test"},(0,a.kt)("strong",{parentName:"h2"},"Create a New Postman Test")),(0,a.kt)("p",null,"Create a postman collection and export it as JSON:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman create collection",src:n(6732).Z,width:"1928",height:"544"})),(0,a.kt)("p",null,"Right click and export the given Collection to a file,\nIn this example, it is saved into ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Downloads/API-Health.postman_collection.json")),(0,a.kt)("p",null,"Now we can create a new Testkube based on the saved Postman Collection."),(0,a.kt)("h2",{id:"create-a-new-testkube-test-script"},(0,a.kt)("strong",{parentName:"h2"},"Create a New Testkube Test Script")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --name api-incluster-test --file ~/Downloads/API-Health.postman_collection.json --type postman/collection\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Test created  \ud83e\udd47\n")),(0,a.kt)("p",null,"Test created!"),(0,a.kt)("h2",{id:"running-a-test"},(0,a.kt)("strong",{parentName:"h2"},"Running a Test")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube run test api-incluster-test\n\nType          : postman/collection\nName          : api-incluster-test\nExecution ID  : 615d6398b046f8fbd3d955d4\nExecution name: openly-full-bream\n\nTest queued for execution\nUse the following command to get test execution details:\n$ kubectl testkube get execution 615d6398b046f8fbd3d955d4\n\nor watch test execution until complete:\n$ kubectl testkube watch execution 615d6398b046f8fbd3d955d4\n\n")),(0,a.kt)("p",null,"Test runs can be named. If no name is passed, Testkube will autogenerate a name."),(0,a.kt)("h2",{id:"getting-test-results"},(0,a.kt)("strong",{parentName:"h2"},"Getting Test Results")),(0,a.kt)("p",null,"Now we can watch/get test execution details:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube watch execution 615d6398b046f8fbd3d955d4\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Type          : postman/collection\nName          : api-incluster-test\nExecution ID  : 615d6398b046f8fbd3d955d4\nExecution name: openly-full-bream\n\nWatching for changes\nStatus: success, Duration: 598ms\n\nGetting results\nName: openly-full-bream, Status: success, Duration: 598ms\nnewman\n\nAPI-Health\n\n\u2192 Health\n  GET http://testkube-api-server:8088/health [200 OK, 124B, 297ms]\n  \u2713  Status code is 200\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                         \u2502           executed \u2502            failed \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502              iterations \u2502                  1 \u2502                 0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502                requests \u2502                  1 \u2502                 0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502            test-scripts \u2502                  2 \u2502                 0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502      prerequest-scripts \u2502                  1 \u2502                 0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502              assertions \u2502                  1 \u2502                 0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 total run duration: 523ms                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 total data received: 8B (approx)                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 average response time: 297ms [min: 297ms, max: 297ms, s.d.: 0\xb5s] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nTest execution completed in 598ms\n")),(0,a.kt)("h2",{id:"summary"},(0,a.kt)("strong",{parentName:"h2"},"Summary")),(0,a.kt)("p",null,"Testkube simplifies running tests inside a cluster and stores tests and tests results for later use."))}p.isMDXComponent=!0},6732:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/postman_create_collection-4e59b9f1082d4242ed332b8b527d537d.png"}}]);