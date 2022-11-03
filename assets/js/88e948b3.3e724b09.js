"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[3796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=c(r),f=u,m=b["".concat(o,".").concat(f)]||b[f]||p[f]||l;return r?n.createElement(m,a(a({ref:t},i),{},{components:r})):n.createElement(m,a({ref:t},i))}));function f(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var l=r.length,a=new Array(l);a[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:u,a[1]=s;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),u=(r(7294),r(3905));const l={},a=void 0,s={unversionedId:"cli-reference/kubectl-testkube_status_telemetry",id:"cli-reference/kubectl-testkube_status_telemetry",title:"kubectl-testkube_status_telemetry",description:"kubectl-testkube status telemetry",source:"@site/docs/5-cli-reference/kubectl-testkube_status_telemetry.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/kubectl-testkube_status_telemetry",permalink:"/testkube/cli-reference/kubectl-testkube_status_telemetry",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/kubectl-testkube_status_telemetry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubectl-testkube_status_oauth",permalink:"/testkube/cli-reference/kubectl-testkube_status_oauth"},next:{title:"kubectl-testkube_uninstall",permalink:"/testkube/cli-reference/kubectl-testkube_uninstall"}},o={},c=[{value:"kubectl-testkube status telemetry",id:"kubectl-testkube-status-telemetry",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],i={toc:c};function p(e){let{components:t,...r}=e;return(0,u.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"kubectl-testkube-status-telemetry"},"kubectl-testkube status telemetry"),(0,u.kt)("p",null,"Get telemetry status"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"kubectl-testkube status telemetry [flags]\n")),(0,u.kt)("h3",{id:"options"},"Options"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  -h, --help   help for telemetry\n")),(0,u.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,u.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_status"},"kubectl-testkube status"),"\t - Show status of feature or resource")))}p.isMDXComponent=!0}}]);