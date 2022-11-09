"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,k=d["".concat(i,".").concat(h)]||d[h]||c[h]||s;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={},a="FAQ",u={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"Frequently asked questions regarding your Testkube installation.",source:"@site/docs/13-FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/testkube/FAQ",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/13-FAQ.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secret Variables",permalink:"/testkube/Secrets"}},i={},l=[{value:"<strong>How do I install Testkube?</strong>",id:"how-do-i-install-testkube",level:3},{value:"<strong>Can I run any test in Testkube?</strong>",id:"can-i-run-any-test-in-testkube",level:3},{value:"<strong>How do I expose Testkube to the internet?</strong>",id:"how-do-i-expose-testkube-to-the-internet",level:3},{value:"<strong>How do I setup my CI/CD to trigger tests?</strong>",id:"how-do-i-setup-my-cicd-to-trigger-tests",level:3},{value:"<strong>Does Testkube have customer support?</strong>",id:"does-testkube-have-customer-support",level:3},{value:"<strong>Why is the UI not working or does not return results?</strong>",id:"why-is-the-ui-not-working-or-does-not-return-results",level:3},{value:"<strong>Opening the Dashboard Using CLI Is Not Working</strong>",id:"opening-the-dashboard-using-cli-is-not-working",level:3},{value:"Access the Service Under Test(SUT) Using Testkube",id:"access-the-service-under-testsut-using-testkube",level:3}],p={toc:l};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("p",null,"Frequently asked questions regarding your Testkube installation."),(0,o.kt)("h3",{id:"how-do-i-install-testkube"},(0,o.kt)("strong",{parentName:"h3"},"How do I install Testkube?")),(0,o.kt)("p",null,"To install Testkube, you'll need to install Testkube CLI (which is currently available on MacOS, Linux, and Windows) and install Testkube's API in your cluster using Helm."),(0,o.kt)("p",null,"You can read more about how to install and get Testkube up and running by following the instructions in our ",(0,o.kt)("a",{parentName:"p",href:"https://kubeshop.github.io/testkube/installing"},"Installation Guide"),"."),(0,o.kt)("h3",{id:"can-i-run-any-test-in-testkube"},(0,o.kt)("strong",{parentName:"h3"},"Can I run any test in Testkube?")),(0,o.kt)("p",null,"Yes, if we're not currently supporting a testing framework you need, you can create your custom executor and configure it to run any type of tests that you want. These custom test types can be added to your Testkube installation and/or contributed to our repo. "),(0,o.kt)("p",null,"You can read more about creating Custom Executors ",(0,o.kt)("a",{parentName:"p",href:"https://kubeshop.github.io/testkube/test-types/executor-custom#creating-a-custom-executor"},"here"),"."),(0,o.kt)("h3",{id:"how-do-i-expose-testkube-to-the-internet"},(0,o.kt)("strong",{parentName:"h3"},"How do I expose Testkube to the internet?")),(0,o.kt)("p",null,"To expose Testkube to the Internet, you will need to create ingresses both for Testkube's API and Testkube's dashboard. "),(0,o.kt)("p",null,"You can follow the example ingresses created for our Testkube Demo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/260fcdf810aa4ed0760a3d953170989c82f62a6e/charts/testkube/values-demo.yaml#L124"},"here")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/260fcdf810aa4ed0760a3d953170989c82f62a6e/charts/testkube/values-demo.yaml#L238"},"here"),"."),(0,o.kt)("h3",{id:"how-do-i-setup-my-cicd-to-trigger-tests"},(0,o.kt)("strong",{parentName:"h3"},"How do I setup my CI/CD to trigger tests?")),(0,o.kt)("p",null,"There's different ways to integrate Testkube with your CI/CD pipeline. You can directly use the command-line interface, or if you use GitHub, you can create GitHub actions."),(0,o.kt)("p",null,"Read more about the process ",(0,o.kt)("a",{parentName:"p",href:"https://kubeshop.github.io/testkube/integrations/testkube-automation"},"here"),"."),(0,o.kt)("p",null,"If you're working with ArgoCD, this ",(0,o.kt)("a",{parentName:"p",href:"https://testkube.kubeshop.io/blog/a-gitops-powered-kubernetes-testing-machine-with-argocd-and-testkube"},"blogpost")," will be useful."),(0,o.kt)("h3",{id:"does-testkube-have-customer-support"},(0,o.kt)("strong",{parentName:"h3"},"Does Testkube have customer support?")),(0,o.kt)("p",null,"To contact our team for support, we have a few channels available.\nYou can reach us via our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/6zupCZFQbe"},"Discord server")," by simply posting your issues on #testkube-general or #testkube-bugs."),(0,o.kt)("p",null,"You can also create an issue on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube"},"GitHub"),"."),(0,o.kt)("h3",{id:"why-is-the-ui-not-working-or-does-not-return-results"},(0,o.kt)("strong",{parentName:"h3"},"Why is the UI not working or does not return results?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the API endpoint is configured:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.gif",src:n(42652).Z,width:"600",height:"341"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the endpoint is providing data, e.g. accessing the executors path:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl <endpoint>/v1/executors \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If no data is provided, make sure that all the Testkube components are running properly:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods -n testkube\nNAME                                                        READY   STATUS    RESTARTS   AGE\npod/testkube-api-server-8445fd7b9f-jq5rh                    1/1     Running   0          10d\npod/testkube-dashboard-99f4c6cf5-x4dkz                      1/1     Running   0          12d\npod/testkube-minio-testkube-76786f8f64-9nl4c                1/1     Running   1          24d\npod/testkube-mongodb-74587998bb-8pzl2                       1/1     Running   0          12d\npod/testkube-operator-controller-manager-77ffbb8fdc-rxhvx   2/2     Running   0          5d23h\n")),(0,o.kt)("h3",{id:"opening-the-dashboard-using-cli-is-not-working"},(0,o.kt)("strong",{parentName:"h3"},"Opening the Dashboard Using CLI Is Not Working")),(0,o.kt)("p",null,"If there is a timeout error reported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl-testkube dashboard\nchecking readiness of services (error: timed-out waiting for dashboard and api)\n")),(0,o.kt)("p",null,"Make sure that there is not another dashboard process running in the background like in the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ps aux | grep dashboard\nuser         76005   0.0  0.0 408628368   1648 s002  S+   12:32PM   0:00.00 grep dashboard\nuser         75985   0.0  0.1 409292320  43584 s001  S+   12:32PM   0:00.12 kubectl port-forward --namespace testkube deployment/testkube-dashboard 8080:8080\nuser         75984   0.0  0.1 409263376  37488 s001  S+   12:32PM   0:00.22 testkube dashboard\n")),(0,o.kt)("p",null,"Also, there might be some other process listening on the same port. To debug this, try port-forwarding manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward svc/testkube-dashboard 8080\nkubectl port-forward svc/testkube-api-server 8088\n")),(0,o.kt)("p",null,"Check for errors and try accessing:\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8081/apiEndpoint?apiEndpoint=localhost:8088/v1"},"http://localhost:8081/apiEndpoint?apiEndpoint=localhost:8088/v1")),(0,o.kt)("p",null,"If you see errors like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Unable to listen on port 8080: Listeners failed to create with the following errors: [unable to create listener: Error listen tcp4 127.0.0.1:8080: bind: address already in use unable to create listener: Error listen tcp6 [::1]:8080: bind: address already in use]\nerror: unable to listen on any of the requested ports: [{8080 8080}]\n")),(0,o.kt)("p",null,"Please stop the application that listens on 8080, 8088 ports."),(0,o.kt)("h3",{id:"access-the-service-under-testsut-using-testkube"},"Access the Service Under Test(SUT) Using Testkube"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Services inside the same Kubernetes cluster can be accessed using the address \\<service-name",">",".\\<service-namespace",">",".svc.cluster.local:\\<port-number",">",". If there are network restrictions configured, Testkube will need permissions to access the SUT over the local network of the cluster."),(0,o.kt)("li",{parentName:"ul"},"If Testkube and the SUT are not in the same cluster, SUT will have to be exposed to Testkube using an Ingress or a Load Balancer.")),(0,o.kt)("p",null,"If this does not solve the issue that you encountered or you have other questions or comments, please contact us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/6zupCZFQbe"},"Discord"),"."))}c.isMDXComponent=!0},42652:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/check-dashboard-api-endpoint-601b09015fecd56cd1da990480722a5a.gif"}}]);