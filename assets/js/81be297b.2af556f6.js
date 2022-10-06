"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),s=n(7392),l=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:h,groupId:g,className:f}=e,w=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:w.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=w.find((e=>e.props.default)))?void 0:n.props.value)?t:w[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:N}=(0,l.U)(),[T,_]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=g){const e=v[g];null!=e&&e!==T&&k.some((t=>t.value===e))&&_(e)}const I=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==T&&(x(t),_(a),null!=g&&N(g,String(a)))},F=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:F,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(w.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const s={},l="Organizing Results",u={unversionedId:"v/r/metaflow/tagging",id:"v/r/metaflow/tagging",title:"Organizing Results",description:"A boring, under-appreciated part of high-quality science \\(or any project work in general\\), is keeping results organized. This is the key to effective collaboration, versioning of parallel lines of work, and reproducibility.",source:"@site/docs/v/r/metaflow/tagging.md",sourceDirName:"v/r/metaflow",slug:"/v/r/metaflow/tagging",permalink:"/v/r/metaflow/tagging",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/v/r/metaflow/tagging.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"Namespaces",id:"namespaces",level:2},{value:"Switching Namespaces",id:"switching-namespaces",level:3},{value:"Global Namespace",id:"global-namespace",level:3},{value:"Resuming across namespaces",id:"resuming-across-namespaces",level:3},{value:"Production Namespaces",id:"production-namespaces",level:2},{value:"Production tokens",id:"production-tokens",level:3},{value:"Resetting a production namespace",id:"resetting-a-production-namespace",level:3},{value:"Tagging",id:"tagging",level:2},{value:"Accessing Tags",id:"accessing-tags",level:3},{value:"Tags as Namespaces",id:"tags-as-namespaces",level:3},{value:"Accessing Current IDs in a Flow",id:"accessing-current-ids-in-a-flow",level:2}],d={toc:c};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organizing-results"},"Organizing Results"),(0,r.kt)("p",null,"A boring, under-appreciated part of high-quality science ","(","or any project work in general",")",", is keeping results organized. This is the key to effective collaboration, versioning of parallel lines of work, and reproducibility."),(0,r.kt)("p",null,"The good news is that Metaflow does 80% of this work for you without you having to do anything. This document explains how Metaflow keeps things organized with a concept called ",(0,r.kt)("strong",{parentName:"p"},"namespaces")," and how you can optionally make results even neater with ",(0,r.kt)("strong",{parentName:"p"},"tags"),"."),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"As explained in ",(0,r.kt)("a",{parentName:"p",href:"basics"},"Basics of Metaflow"),", Metaflow persists all runs and all the data artifacts they produce. Every run gets a unique run ID, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloFlow/546"),", which can be used to refer to a specific set of results. You can access these results with the ",(0,r.kt)("a",{parentName:"p",href:"client"},"Client API"),"."),(0,r.kt)("p",null,"Many users can use Metaflow concurrently. Imagine that Anne and Will are collaborating on a project that consists of two flows, ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow"),". As they, amongst other people, run their versions independently they end up with the following runs:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8847).Z,width:"596",height:"418"})),(0,r.kt)("p",null,"Anne could analyze her latest ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," results in a notebook by remembering that her latest run is ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow/8"),". Fortunately, Metaflow makes this even easier thanks to ",(0,r.kt)("strong",{parentName:"p"},"namespaces"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5904).Z,width:"686",height:"494"})),(0,r.kt)("p",null,"When Anne runs ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow"),", her runs are automatically ",(0,r.kt)("strong",{parentName:"p"},"tagged")," with her user name, prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"user:"),". By default, when Anne uses the ",(0,r.kt)("a",{parentName:"p",href:"client"},"Client API"),", the API only returns results that are tagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"user:anne"),". Instead of having to remember the exact ID of her latest run, she can simply say:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nrun <- flow_client$new('PredictionFlow')$latest_run\n")),(0,r.kt)("p",null,"For Anne, this will return ",(0,r.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/8'"),". For Will, this will return ",(0,r.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/5'"),"."),(0,r.kt)("h3",{id:"switching-namespaces"},"Switching Namespaces"),(0,r.kt)("p",null,"Namespaces are not about security or access control. They help you to keep results organized. During development, organizing results by the user who produced them is a sensible default."),(0,r.kt)("p",null,"You can freely explore results produced by other people. In a notebook ","(","for example",")",", Anne can write"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nset_namespace('user:will')\nrun <- flow_client$new('PredictionFlow')$latest_run\n")),(0,r.kt)("p",null,"to see Will's latest results, in this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/5'"),"."),(0,r.kt)("p",null,"You can also access a specific run given its ID directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nrun <- flow_client$new('PredictionFlow')$run(\"5\")\n")),(0,r.kt)("p",null,"However, this will fail for Anne, since ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow/5")," is in Will's namespace. An important feature of namespaces is to make sure that you can't accidentally use someone else's results, which could lead to hard to debug, incorrect analyses."),(0,r.kt)("p",null,"If Anne wants to access Will's results, she must do so explicitly by switching to Will's namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nset_namespace('user:will')\nrun <- flow_client$new('PredictionFlow')$run(\"5\")\n")),(0,r.kt)("p",null,"In other words, you can use the Client API freely without having to worry about using incorrect results by accident."),(0,r.kt)("p",null,"If you use the Client API in your flows to access results of other flows, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--namespace")," flag on the command line to switch between namespaces. This is a better approach than hardcoding a ",(0,r.kt)("inlineCode",{parentName:"p"},"set_namespace()")," function call in the code that defines your Metaflow workflow."),(0,r.kt)("h3",{id:"global-namespace"},"Global Namespace"),(0,r.kt)("p",null,"What if you know a run ID but you don't know whose namespace it belongs to? No worries, you can access all results in the Metaflow universe in the ",(0,r.kt)("strong",{parentName:"p"},"global namespace"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nset_namespace(NULL)\nrun <- flow_client$new('PredictionFlow')$run(\"5\")\n")),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"set_namespace(NULL)")," allows you to access all results without limitations. Be careful though: relative references like ",(0,r.kt)("inlineCode",{parentName:"p"},"latest_run")," make little sense in the global namespace since anyone can produce a new run at any time."),(0,r.kt)("h3",{id:"resuming-across-namespaces"},"Resuming across namespaces"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"debugging#how-to-use-the-resume-command"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"resume")," command")," is smart enough to work across production and personal namespaces. You can ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," a production workflow without having to do anything special with namespaces."),(0,r.kt)("p",null,"You can resume runs of other users and you can resume any production runs. The results of your resumed runs are always created in your personal namespace."),(0,r.kt)("h2",{id:"production-namespaces"},"Production Namespaces"),(0,r.kt)("p",null,"During development, namespacing by the user name feels natural. However, when you ",(0,r.kt)("a",{parentName:"p",href:"../going-to-production-with-metaflow/scheduling-metaflow-flows"},"schedule your flow to run automatically"),', runs are not related to a specific user anymore. It is typical for multiple people to collaborate on a project that has a canonical production version. It is not obvious which user "owns" the production version.'),(0,r.kt)("p",null,"Moreover, it is critical that you, and all other people, can keep experimenting on the project without having to worry about breaking the production version. If the production flow ran in the namespace of any individual, relative references like ",(0,r.kt)("inlineCode",{parentName:"p"},"latest_run")," could break the production easily as the user keeps executing experimental runs."),(0,r.kt)("p",null,"As a solution, by default the production namespace is made separate from the user namespace:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2256).Z,width:"881",height:"498"})),(0,r.kt)("p",null,"Isolated production namespaces have three main benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Production tokens allow all users of Metaflow to ",(0,r.kt)("strong",{parentName:"li"},"experiment freely")," with any project without having to worry about accidentally breaking a production deployment. Even if they ran step-functions create, they could not overwrite a production version without explicit consent, via a shared production token, by the person who did the previously authorized deployment."),(0,r.kt)("li",{parentName:"ol"},"An isolated production namespace makes it easy to ",(0,r.kt)("strong",{parentName:"li"},"keep production results separate from any experimental runs")," of the same project running concurrently. You can rest assured that when you switch to a production namespace, you will see only results related to production - nothing more, nothing less."),(0,r.kt)("li",{parentName:"ol"},"By having control over the production namespace, you can ",(0,r.kt)("strong",{parentName:"li"},"alter data that is seen by production flows"),". For instance, if you have separate training and prediction flows in production, the prediction flow can access the previously built model as long as one exists in the same namespace. By changing the production namespace, you can make sure that a new deployment isn't tainted by old results.")),(0,r.kt)("p",null,"If you are a single developer working on a new project, you don't have to do anything special to deal with production namespaces. You can rely on the default behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create"),"."),(0,r.kt)("h3",{id:"production-tokens"},"Production tokens"),(0,r.kt)("p",null,"When you deploy a Flow to production for the first time, Metaflow creates a new, isolated production namespace for your production flow. This namespace is identified by a ",(0,r.kt)("strong",{parentName:"p"},"production token"),", which is a random identifier that identifies a production deployment, e.g. production:PredictionFlow3 above. You can examine production results in a notebook by switching to the production namespace."),(0,r.kt)("p",null,"If another person wants to deploy a new version of the flow to production, they must use the same production token. You, or whoever has the token, are responsible for sharing it with users who are authorized to deploy new versions to production. This manual step should prevent random users from deploying versions to production inadvertently."),(0,r.kt)("p",null,"After you have shared the production token with another person, they can deploy a new version with"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript production_flow.R step-functions create --authorize TOKEN_YOU_SHARED_WITH_THEM\n"))),(0,r.kt)(i.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'  ...\n  step(step = "end",\n       ...)\n  %>%\n  run(step_fucntions = "create",\n    authorize = "TOKEN_YOU_SHARED_WITH_THEM")\n')))),(0,r.kt)("p",null,"They need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--authorize")," option only once. Metaflow stores the token for them after the first deployment, so they need to do this only once."),(0,r.kt)("h3",{id:"resetting-a-production-namespace"},"Resetting a production namespace"),(0,r.kt)("p",null,"If you call ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create")," again, it will deploy an updated version of your code in the existing production namespace of the flow."),(0,r.kt)("p",null,"Sometimes the code has changed so drastically that you want to recreate a fresh namespace for its results. You can do this as follows:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript production_flow.R step-functions create --generate-new-token\n"))),(0,r.kt)(i.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'  ...\n  step(step = "end",\n       ...)\n  %>%\n  run(step_fucntions = "create",\n      generate_new_token = TRUE)\n')))),(0,r.kt)("p",null,"This will deploy a new version in production using a fresh, empty namespace"),(0,r.kt)("h2",{id:"tagging"},"Tagging"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"user:")," tag is assigned by Metaflow automatically. In addition to automatically assigned tags, you can add and remove arbitrary tags in objects. Tags are an excellent way to add extra annotations to runs, tasks etc., which makes it easier for you and other people to find and retrieve results of interest."),(0,r.kt)("p",null,"An easy way to add tags is the ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag")," command line option. You can add multiple tags with multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag")," options. For instance, this will annotate a ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloFlow")," run with a tag ",(0,r.kt)("inlineCode",{parentName:"p"},"crazy_test"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript helloworld.R run --tag crazy_test\n"))),(0,r.kt)(i.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in helloworld.R with\n# run(tag = c("crazy_test"))\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag")," option assigns the specified tag to all objects produced by the run: the run itself, its steps, tasks, and data artifacts."),(0,r.kt)("h3",{id:"accessing-tags"},"Accessing Tags"),(0,r.kt)("p",null,"You can access runs ","(","or steps or tasks",")"," with a certain tag easily using the Client API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\nrun <- flow_client$new("HelloFlow").runs_with_tags("crazy_test")[[1]]\n')),(0,r.kt)("p",null,"This will return the latest run of ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloFlow")," with a tag ",(0,r.kt)("inlineCode",{parentName:"p"},"crazy_test")," in your namespace. Filtering is performed both based on the current ",(0,r.kt)("inlineCode",{parentName:"p"},"set_namespace()")," and the tag filter."),(0,r.kt)("p",null,"You can also filter by multiple tags:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\nrun <- flow_client$new("HelloFlow").runs_with_tags("crazy_test", "date:2020-06-01")[[1]]\n')),(0,r.kt)("p",null,"This requires that all the tags listed, and the current namespace, are present in the object."),(0,r.kt)("p",null,"You can see the set of tags assigned to an object with the ",(0,r.kt)("inlineCode",{parentName:"p"},".tags")," property. In the above case, ",(0,r.kt)("inlineCode",{parentName:"p"},"run.tags")," would return a set with a string ",(0,r.kt)("inlineCode",{parentName:"p"},"crazy_test")," amongst other automatically assigned tags."),(0,r.kt)("h3",{id:"tags-as-namespaces"},"Tags as Namespaces"),(0,r.kt)("p",null,"Let's consider again the earlier example with Anne and Will. They are working on their own versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," but they want to collaborate on ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow"),". They could add a descriptive tag, say ",(0,r.kt)("inlineCode",{parentName:"p"},"xyz_features"),", to ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow")," runs."),(0,r.kt)("p",null,"Now, they can easily get the latest results of ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow")," regardless of the user who ran the flow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nset_namespace('xyz_features')\nrun <- flow_client$new('FeatureFlow')$latest_run\n")),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow/34")," which happened to be run by Anne. If Will runs the flow again, his results will be the latest results in this namespace."),(0,r.kt)("p",null,"We encourage you to use a combination of namespaces, domain-specific tags, and filtering by tags to design a workflow that works well for your project."),(0,r.kt)("h2",{id:"accessing-current-ids-in-a-flow"},"Accessing Current IDs in a Flow"),(0,r.kt)("p",null,"Tagging and namespaces, together with the ",(0,r.kt)("a",{parentName:"p",href:"client"},"Client API"),", are the main ways for accessing results of past runs. Metaflow uses these mechanisms to organize and isolate results automatically, so in most cases you don't have to do anything."),(0,r.kt)("p",null,"However, in some cases you may need to deal with IDs explicitly. For instance, if your flow interacts with external systems, it is a good idea to inform the external system about the identity of the run, so you can trace back any issues to a specific run. Also IDs can come in handy if you need to version externally stored data."),(0,r.kt)("p",null,"For this purpose, Metaflow provides a singleton object ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," that represents the identity of the currently running task. Use it in your ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowSpec")," to retrieve current IDs of interest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="current_flow.R"',title:'"current_flow.R"'},'library(metaflow)\n\nstart <- function(self){\n    print(paste0("flow name: ", current("flow_name")))\n    print(paste0("run id: ", current("run_id")))\n    print(paste0("origin run id: ", current("origin_run_id")))\n    print(paste0("step name: ", current("step_name")))\n    print(paste0("task id: ", current("task_id")))\n    print(paste0("pathspec: ", current("pathspec")))\n    print(paste0("username: ", current("username")))\n}\n\nmetaflow("CurrentFlow") %>%\n    step(step="start",\n         r_function=start,\n         next_step="end") %>%\n    step(step="end") %>%\n    run()\n')),(0,r.kt)("p",null,"You can see the output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'2020-06-19 21:19:03.387 [198/start/1139 (pid 64853)] [1] "flow name: CurrentFlow"\n2020-06-19 21:19:03.387 [198/start/1139 (pid 64853)] [1] "run id: 198"\n2020-06-19 21:19:03.387 [198/start/1139 (pid 64853)] [1] "origin run id: "\n2020-06-19 21:19:03.388 [198/start/1139 (pid 64853)] [1] "step name: start"\n2020-06-19 21:19:03.388 [198/start/1139 (pid 64853)] [1] "task id: 1139"\n2020-06-19 21:19:03.389 [198/start/1139 (pid 64853)] [1] "pathspec: CurrentFlow/198/start/1139"\n2020-06-19 21:19:03.389 [198/start/1139 (pid 64853)] [1] "username: jge"\n2020-06-19 21:19:08.400 [198/start/1139 (pid 64853)] Task finished successfully.\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," singleton also provides programmatic access to the CLI option ",(0,r.kt)("inlineCode",{parentName:"p"},"--origin-run-id")," used by the ",(0,r.kt)("a",{parentName:"p",href:"debugging#how-to-use-the-resume-command"},"resume")," within your flow code."),(0,r.kt)("p",null,"For regular ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," invocations, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},'current("origin_run_id")')," is ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("p",null,"If a user explicitly overrides the CLI option ",(0,r.kt)("inlineCode",{parentName:"p"},"--origin-run-id"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," singleton would reflect that value. Suppose we invoked ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," for the above script to re-run everything from ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," without explicitly overriding the CLI option ",(0,r.kt)("inlineCode",{parentName:"p"},"origin-run-id"),", we can see the value chosen by Metaflow using the ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," singleton:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"Rscript current_flow.R resume start\n"))),(0,r.kt)(i.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in current_flow.R with\n# run(resume = "start")\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"You should see the ",(0,r.kt)("inlineCode",{parentName:"p"},"origin_run_id")," used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," in the output ","(","the exact value for you might be different",")",":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'"origin run id: 198"\n')))}m.isMDXComponent=!0},8847:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assets_metaflow_-lpjn0yp7r49jrnxca_5_-lpjryuuy7v5kovmxtsv_namespace1-0868414851a2703b7058dda77294743a.png"},5904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assets_metaflow_-lpjn0yp7r49jrnxca_5_-lpjryuvqmspdu9w5imb_namespace2-e6724671478c141360319922e3eb45b5.png"},2256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/namespace4_(3)-9e825aaf633bd9c3557c35b34291c647.png"}}]);