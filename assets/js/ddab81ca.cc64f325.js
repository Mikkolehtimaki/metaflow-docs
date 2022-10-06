"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const a={},l="@schedule",c={unversionedId:"api/flow-decorators/schedule",id:"api/flow-decorators/schedule",title:"@schedule",description:"The @schedule decorator specifies the times when the flow should be run when deployed to an external orchestrator like AWS Step Functions or Argo Workflows.",source:"@site/docs/api/flow-decorators/schedule.md",sourceDirName:"api/flow-decorators",slug:"/api/flow-decorators/schedule",permalink:"/api/flow-decorators/schedule",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/api/flow-decorators/schedule.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"@project",permalink:"/api/flow-decorators/project"},next:{title:"Release Notes",permalink:"/internals/release-notes"}},s={},i=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("DocSection"),d=p("SigArgSection"),m=p("SigArg"),f=p("Description"),h=p("ParamSection"),y=p("Parameter"),w={toc:i};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"schedule"},"@schedule"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@schedule")," decorator specifies the times when the flow should be run when deployed to an external orchestrator like AWS Step Functions or Argo Workflows."),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/production/scheduling-metaflow-flows/introduction"},"Scheduling Metaflow Flows"),"."),(0,n.kt)(u,{type:"decorator",name:"schedule",module:"metaflow",show_import:"True",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/plugins/aws/step_functions/schedule_decorator.py#L4",mdxType:"DocSection"},(0,n.kt)(d,{mdxType:"SigArgSection"},(0,n.kt)(m,{name:"...",mdxType:"SigArg"})),(0,n.kt)(f,{summary:"Specifies the times when the flow should be run when running on a\\nproduction scheduler.",mdxType:"Description"}),(0,n.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,n.kt)(y,{name:"hourly",type:"bool",desc:"Run the workflow hourly (Default: False).",mdxType:"Parameter"}),(0,n.kt)(y,{name:"daily",type:"bool",desc:"Run the workflow daily (Default: True).",mdxType:"Parameter"}),(0,n.kt)(y,{name:"weekly",type:"bool",desc:"Run the workflow weekly (Default: False).",mdxType:"Parameter"}),(0,n.kt)(y,{name:"cron",type:"str",desc:"Run the workflow at [a custom Cron schedule](https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html#cron-expressions)\\nspecified by this expression.",mdxType:"Parameter"}))))}b.isMDXComponent=!0}}]);