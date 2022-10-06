"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7111],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=o,h=p["".concat(m,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const i={},r="Client API - Accessing past results",s={unversionedId:"api/client",id:"api/client",title:"Client API - Accessing past results",description:"Use these objects to access data from past runs and to manipulate tags. Objects in this module are organized as a hierarchy:",source:"@site/docs/api/client.md",sourceDirName:"api",slug:"/api/client",permalink:"/api/client",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/api/client.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Metaflow API reference",permalink:"/api/"},next:{title:"FlowSpec - Constructing flows",permalink:"/api/flowspec"}},m={},l=[{value:"Instantiating Objects",id:"instantiating-objects",level:3},{value:"Listing objects",id:"listing-objects",level:3},{value:"Accessing children",id:"accessing-children",level:3},{value:"Common attributes",id:"common-attributes",level:3},{value:"Object visibility",id:"object-visibility",level:3},{value:"Object Hierarchy",id:"object-hierarchy",level:2},{value:"Metaflow",id:"metaflow",level:3},{value:"Flow",id:"flow",level:3},{value:"Run",id:"run",level:3},{value:"Step",id:"step",level:3},{value:"Task",id:"task",level:3},{value:"DataArtifact",id:"dataartifact",level:3},{value:"Helper Objects",id:"helper-objects",level:2},{value:"MetaflowData",id:"metaflowdata",level:3},{value:"MetaflowCode",id:"metaflowcode",level:3},{value:"Namespace functions",id:"namespace-functions",level:2},{value:"Metadata functions",id:"metadata-functions",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=c("DocSection"),p=c("SigArgSection"),u=c("Description"),h=c("ParamSection"),y=c("Parameter"),f=c("SigArg"),g={toc:l};function k(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client-api---accessing-past-results"},"Client API - Accessing past results"),(0,o.kt)("p",null,"Use these objects to ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/client"},"access data from past runs and to manipulate tags"),". Objects in this module are organized as a hierarchy:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Object hierarchy",src:a(9792).Z,width:"639",height:"370"})),(0,o.kt)("h3",{id:"instantiating-objects"},"Instantiating Objects"),(0,o.kt)("p",null,"You can instantiate a specific object at any level of the hierarchy by providing a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"pathspec"),", e.g. from Metaflow logs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Metaflow()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Flow('HelloFlow')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Run('HelloFlow/2')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Step('HelloFlow/2/start')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Task('HelloFlow/2/start/1')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DataArtifact('HelloFlow/2/start/1/name')"))),(0,o.kt)("h3",{id:"listing-objects"},"Listing objects"),(0,o.kt)("p",null,"Each object is a container (",(0,o.kt)("em",{parentName:"p"},"an iterable"),") that can be used to iterate over objects that are below it in the hierarchy. For instance, iterating over a ",(0,o.kt)("inlineCode",{parentName:"p"},"list(Flow(...))")," yields a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Run"),"s, and ",(0,o.kt)("inlineCode",{parentName:"p"},"list(Run(...))")," yields a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Step"),"s."),(0,o.kt)("h3",{id:"accessing-children"},"Accessing children"),(0,o.kt)("p",null,"Since each object is a container, you can access its children through the square-bracket notation, as if each object was a dictionary. For instance, you can access the object ",(0,o.kt)("inlineCode",{parentName:"p"},"Task('HelloFlow/2/start/1')")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"Flow('HelloFlow')['2']['start']['1']\n")),(0,o.kt)("p",null,"You can also test if the object has a certain child:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if '2' in Flow('HelloFlow'):\n    print('Run found')\n")),(0,o.kt)("h3",{id:"common-attributes"},"Common attributes"),(0,o.kt)("p",null,"All objects at the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," level and below have the following attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tags")," (set) - tags associated with the run this object belongs to (user and system tags)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user_tags")," (set) - user tags associated with the run this object belongs to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_tags")," (set) - system tags associated with the run this object belongs to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"created_at")," (datetime) - Date and time this object was created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parent")," (Metaflow object) - Parent of this object (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"Run(...).parent")," is a ",(0,o.kt)("inlineCode",{parentName:"li"},"Flow"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pathspec")," (string) - Pathspec of this object (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"HelloFlow/2")," for a ",(0,o.kt)("inlineCode",{parentName:"li"},"Run"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path_components")," (list) - Components of the pathspec."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"origin_pathspec")," (string) - If the object was produced via ",(0,o.kt)("a",{parentName:"li",href:"/metaflow/debugging#how-to-use-the-resume-command"},"resume"),", pathspec of the original object this object was cloned from.")),(0,o.kt)("h3",{id:"object-visibility"},"Object visibility"),(0,o.kt)("p",null,"Note that only objects in ",(0,o.kt)("a",{parentName:"p",href:"/scaling/tagging"},"the current namespace")," can be instantiated. See ",(0,o.kt)("a",{parentName:"p",href:"#namespace"},"Namespace functions")," to see how to switch between namespaces. "),(0,o.kt)("p",null,"This module accesses all objects through the current metadata provider - either Metaflow Service or local metadata. See ",(0,o.kt)("a",{parentName:"p",href:"#metadata"},"Metadata functions")," for utilities related to metadata provider."),(0,o.kt)("h2",{id:"object-hierarchy"},"Object Hierarchy"),(0,o.kt)("h3",{id:"metaflow"},"Metaflow"),(0,o.kt)(d,{type:"class",name:"Metaflow",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L201",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"}),(0,o.kt)(u,{summary:"Entry point to all objects in the Metaflow universe.",extended_summary:"This object can be used to list all the flows present either through the explicit property\\nor by iterating over this object.",mdxType:"Description"}),(0,o.kt)(h,{name:"Attributes",mdxType:"ParamSection"},(0,o.kt)(y,{name:"flows",type:"List[Flow]",desc:"Returns the list of all `Flow` objects known to this metadata provider. Note that only\\nflows present in the current namespace will be returned. A `Flow` is present in a namespace\\nif it has at least one run in the namespace.",mdxType:"Parameter"}))),(0,o.kt)("h3",{id:"flow"},"Flow"),(0,o.kt)(d,{type:"class",name:"Flow",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1946",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"pathspec",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"A Flow represents all existing flows with a certain name, in other words,\\nclasses derived from `FlowSpec`. A container of `Run` objects.",mdxType:"Description"}),(0,o.kt)(h,{name:"Attributes",mdxType:"ParamSection"},(0,o.kt)(y,{name:"latest_run",type:"Run",desc:"Latest `Run` (in progress or completed, successfully or not) of this flow.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"latest_successful_run",type:"Run",desc:"Latest successfully completed `Run` of this flow.",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"method",name:"Flow.runs",module:"metaflow",show_import:"False",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1996",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"self",mdxType:"SigArg"}),(0,o.kt)(f,{name:"*tags",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Returns an iterator over all `Run`s of this flow.",extended_summary:"An optional filter is available that allows you to filter on tags.\\nIf multiple tags are specified, only runs that have all the\\nspecified tags are returned.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"tags",type:"string",desc:"Tags to match.",mdxType:"Parameter"})),(0,o.kt)(h,{name:"Returns",mdxType:"ParamSection"},(0,o.kt)(y,{type:"Iterator[Run]",desc:"Iterator over `Run` objects in this flow.",mdxType:"Parameter"}))),(0,o.kt)("h3",{id:"run"},"Run"),(0,o.kt)(d,{type:"class",name:"Run",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1671",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"pathspec",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"A `Run` represents an execution of a `Flow`. It is a container of `Step`s.",mdxType:"Description"}),(0,o.kt)(h,{name:"Attributes",mdxType:"ParamSection"},(0,o.kt)(y,{name:"data",type:"MetaflowData",desc:"a shortcut to run['end'].task.data, i.e. data produced by this run.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"successful",type:"boolean",desc:"True if the run completed successfully.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"finished",type:"boolean",desc:"True if the run completed.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"finished_at",type:"datetime",desc:"Time this run finished.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"code",type:"MetaflowCode",desc:"Code package for this run (if present). See `MetaflowCode`.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"end_task",type:"Task",desc:"`Task` for the end step (if it is present already).",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"method",name:"Run.add_tag",module:"metaflow",show_import:"False",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1829",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"self",mdxType:"SigArg"}),(0,o.kt)(f,{name:"tag",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Add a tag to this `Run`.",extended_summary:"Note that if the tag is already a system tag, it is not added as a user tag,\\nand no error is thrown.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"tag",type:"string",desc:"Tag to add.",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"method",name:"Run.add_tags",module:"metaflow",show_import:"False",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1851",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"self",mdxType:"SigArg"}),(0,o.kt)(f,{name:"tags",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Add one or more tags to this `Run`.",extended_summary:"Note that if any tag is already a system tag, it is not added as a user tag\\nand no error is thrown.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"tags",type:"Iterable[string]",desc:"Tags to add.",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"method",name:"Run.remove_tag",module:"metaflow",show_import:"False",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1865",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"self",mdxType:"SigArg"}),(0,o.kt)(f,{name:"tag",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Remove one tag from this `Run`.",extended_summary:"Removing a system tag is an error. Removing a non-existent\\nuser tag is a no-op.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"tag",type:"string",desc:"Tag to remove.",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"method",name:"Run.remove_tags",module:"metaflow",show_import:"False",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1887",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"self",mdxType:"SigArg"}),(0,o.kt)(f,{name:"tags",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Remove one or more tags to this `Run`.",extended_summary:"Removing a system tag will result in an error. Removing a non-existent\\nuser tag is a no-op.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"tags",type:"Iterable[string]",desc:"Tags to remove.",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"method",name:"Run.replace_tag",module:"metaflow",show_import:"False",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1901",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"self",mdxType:"SigArg"}),(0,o.kt)(f,{name:"tag_to_remove",mdxType:"SigArg"}),(0,o.kt)(f,{name:"tag_to_add",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Remove a tag and add a tag atomically. Removal is done first.\\nThe rules for `Run.add_tag` and `Run.remove_tag` also apply here.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"tag_to_remove",type:"string",desc:"Tag to remove.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"tag_to_add",type:"string",desc:"Tag to add.",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"method",name:"Run.replace_tags",module:"metaflow",show_import:"False",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1925",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"self",mdxType:"SigArg"}),(0,o.kt)(f,{name:"tags_to_remove",mdxType:"SigArg"}),(0,o.kt)(f,{name:"tags_to_add",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Remove and add tags atomically; the removal is done first.\\nThe rules for `Run.add_tag` and `Run.remove_tag` also apply here.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"tags_to_remove",type:"Iterable[string]",desc:"Tags to remove.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"tags_to_add",type:"Iterable[string]",desc:"Tags to add.",mdxType:"Parameter"}))),(0,o.kt)("h3",{id:"step"},"Step"),(0,o.kt)(d,{type:"class",name:"Step",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1516",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"pathspec",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"A `Step` represents a user-defined step, that is, a method annotated with the `@step` decorator.",extended_summary:"It contains `Task` objects associated with the step, that is, all executions of the\\n`Step`. The step may contain multiple `Task`s in the case of a foreach step.",mdxType:"Description"}),(0,o.kt)(h,{name:"Attributes",mdxType:"ParamSection"},(0,o.kt)(y,{name:"task",type:"Task",desc:"The first `Task` object in this step. This is a shortcut for retrieving the only\\ntask contained in a non-foreach step.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"finished_at",type:"datetime",desc:"Time when the latest `Task` of this step finished. Note that in the case of foreaches,\\nthis time may change during execution of the step.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"environment_info",type:"Dict",desc:"Information about the execution environment.",mdxType:"Parameter"}))),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)(d,{type:"class",name:"Task",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L973",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"pathspec, attempt=None",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"A `Task` represents an execution of a `Step`.",extended_summary:"It contains all `DataArtifact` objects produced by the task as\\nwell as metadata related to execution.\\n\\nNote that the `@retry` decorator may cause multiple attempts of\\nthe task to be present. Usually you want the latest attempt, which\\nis what instantiating a `Task` object returns by default. If\\nyou need to e.g. retrieve logs from a failed attempt, you can\\nexplicitly get information about a specific attempt by using the\\nfollowing syntax when creating a task:\\n\\n`Task('flow/run/step/task', attempt=<attempt>)`\\n\\nwhere `attempt=0` corresponds to the first attempt etc.",mdxType:"Description"}),(0,o.kt)(h,{name:"Attributes",mdxType:"ParamSection"},(0,o.kt)(y,{name:"metadata",type:"List[Metadata]",desc:"List of all metadata events associated with the task.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"metadata_dict",type:"Dict",desc:"A condensed version of `metadata`: A dictionary where keys\\nare names of metadata events and values the latest corresponding event.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"data",type:"MetaflowData",desc:"Container of all data artifacts produced by this task. Note that this\\ncall downloads all data locally, so it can be slower than accessing\\nartifacts individually. See `MetaflowData` for more information.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"artifacts",type:"MetaflowArtifacts",desc:"Container of `DataArtifact` objects produced by this task.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"successful",type:"boolean",desc:"True if the task successfully completed.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"finished",type:"boolean",desc:"True if the task completed.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"exception",type:"object",desc:"Exception raised by this task if there was one.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"finished_at",type:"datetime",desc:"Time this task finished.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"runtime_name",type:"string",desc:"Runtime this task was executed on.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"stdout",type:"string",desc:"Standard output for the task execution.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"stderr",type:"string",desc:"Standard error output for the task execution.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"code",type:"MetaflowCode",desc:"Code package for this task (if present). See `MetaflowCode`.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"environment_info",type:"Dict",desc:"Information about the execution environment.",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"method",name:"Task.loglines",module:"metaflow",show_import:"False",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L1429",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"self",mdxType:"SigArg"}),(0,o.kt)(f,{name:"stream",mdxType:"SigArg"}),(0,o.kt)(f,{name:"as_unicode",default:"True",mdxType:"SigArg"}),(0,o.kt)(f,{name:"meta_dict",default:"None",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Return an iterator over (utc_timestamp, logline) tuples.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"stream",type:"string",desc:"Either 'stdout' or 'stderr'.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"as_unicode",type:"boolean",desc:"If as_unicode=False, each logline is returned as a byte object. Otherwise,\\nit is returned as a (unicode) string.",mdxType:"Parameter"})),(0,o.kt)(h,{name:"Returns",mdxType:"ParamSection"},(0,o.kt)(y,{type:"Iterator[(datetime, string)]",desc:"Iterator over timestamp, logline pairs.",mdxType:"Parameter"}))),(0,o.kt)("h3",{id:"dataartifact"},"DataArtifact"),(0,o.kt)(d,{type:"class",name:"DataArtifact",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L850",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"pathspec",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"A single data artifact and associated metadata. Note that this object does\\nnot contain other objects as it is the leaf object in the hierarchy.",mdxType:"Description"}),(0,o.kt)(h,{name:"Attributes",mdxType:"ParamSection"},(0,o.kt)(y,{name:"data",type:"object",desc:"The data contained in this artifact, that is, the object produced during\\nexecution of this run.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"sha",type:"string",desc:"A unique ID of this artifact.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"finished_at",type:"datetime",desc:"Corresponds roughly to the `Task.finished_at` time of the parent `Task`.\\nAn alias for `DataArtifact.created_at`.",mdxType:"Parameter"}))),(0,o.kt)("h2",{id:"helper-objects"},"Helper Objects"),(0,o.kt)("h3",{id:"metaflowdata"},"MetaflowData"),(0,o.kt)(d,{type:"class",name:"MetaflowData",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L704",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Container of data artifacts produced by a `Task`. This object is\\ninstantiated through `Task.data`.",extended_summary:"`MetaflowData` allows results to be retrieved by their name\\nthrough a convenient dot notation:\\n\\n```python\\nTask(...).data.my_object\\n```\\n\\nYou can also test the existence of an object\\n\\n```python\\nif 'my_object' in Task(...).data:\\n    print('my_object found')\\n```\\n\\nNote that this container relies on the local cache to load all data\\nartifacts. If your `Task` contains a lot of data, a more efficient\\napproach is to load artifacts individually like so\\n\\n```\\nTask(...)['my_object'].data\\n```",mdxType:"Description"})),(0,o.kt)("h3",{id:"metaflowcode"},"MetaflowCode"),(0,o.kt)(d,{type:"class",name:"MetaflowCode",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L748",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Snapshot of the code used to execute this `Run`. Instantiate the object through\\n`Run(...).code` (if all steps are executed remotely) or `Task(...).code` for an\\nindividual task. The code package is the same for all steps of a `Run`.",extended_summary:"`MetaflowCode` includes a package of the user-defined `FlowSpec` class and supporting\\nfiles, as well as a snapshot of the Metaflow library itself.\\n\\nCurrently `MetaflowCode` objects are stored only for `Run`s that have at least one `Step`\\nexecuting outside the user's local environment.\\n\\nYou can extract code in the directory `snapshot` like so:\\n```\\nRun(...).code.extractall(path='snapshot')\\n```",mdxType:"Description"}),(0,o.kt)(h,{name:"Attributes",mdxType:"ParamSection"},(0,o.kt)(y,{name:"path",type:"string",desc:"Location (in the datastore provider) of the code package.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"info",type:"Dict",desc:"Dictionary of information related to this code-package.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"flowspec",type:"string",desc:"Source code of the file containing the `FlowSpec` in this code package.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"tarball",type:"TarFile",desc:"Python standard library `tarfile.TarFile` archive containing all the code.",mdxType:"Parameter"}))),(0,o.kt)("h2",{id:"namespace-functions"},"Namespace functions"),(0,o.kt)(d,{type:"function",name:"namespace",module:"metaflow",show_import:"True",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L145",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"ns",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Switch namespace to the one provided.",extended_summary:"This call has a global effect. No objects outside this namespace\\nwill be accessible. To access all objects regardless of namespaces,\\npass None to this call.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"ns",type:"string",desc:"Namespace to switch to or None to ignore namespaces.",mdxType:"Parameter"})),(0,o.kt)(h,{name:"Returns",mdxType:"ParamSection"},(0,o.kt)(y,{type:"string",desc:"Namespace set (result of get_namespace()).",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"function",name:"get_namespace",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L168",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"}),(0,o.kt)(u,{summary:"Return the current namespace that is currently being used to filter objects.",extended_summary:"The namespace is a tag associated with all objects in Metaflow.",mdxType:"Description"}),(0,o.kt)(h,{name:"Returns",mdxType:"ParamSection"},(0,o.kt)(y,{type:"string or None",desc:"The current namespace used to filter objects.",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"function",name:"default_namespace",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L186",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"}),(0,o.kt)(u,{summary:"Resets the namespace used to filter objects to the default one, i.e. the one that was\\nused prior to any `namespace` calls.",mdxType:"Description"}),(0,o.kt)(h,{name:"Returns",mdxType:"ParamSection"},(0,o.kt)(y,{type:"string",desc:"The result of get_namespace() after the namespace has been reset.",mdxType:"Parameter"}))),(0,o.kt)("h2",{id:"metadata-functions"},"Metadata functions"),(0,o.kt)(d,{type:"function",name:"metadata",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L43",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"ms",mdxType:"SigArg"})),(0,o.kt)(u,{summary:"Switch Metadata provider.",extended_summary:"This call has a global effect. Selecting the local metadata will,\\nfor example, not allow access to information stored in remote\\nmetadata providers.\\n\\nNote that you don't typically have to call this function directly. Usually\\nthe metadata provider is set through the Metaflow configuration file. If you\\nneed to switch between multiple providers, you can use the `METAFLOW_PROFILE`\\nenvironment variable to switch between configurations.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"ms",type:"string",desc:"Can be a path (selects local metadata), a URL starting with http (selects\\nthe service metadata) or an explicit specification <metadata_type>@<info>; as an\\nexample, you can specify local@<path> or service@<url>.",mdxType:"Parameter"})),(0,o.kt)(h,{name:"Returns",mdxType:"ParamSection"},(0,o.kt)(y,{type:"string",desc:"The description of the metadata selected (equivalent to the result of\\nget_metadata()).",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"function",name:"get_metadata",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L95",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"}),(0,o.kt)(u,{summary:"Returns the current Metadata provider.",extended_summary:"If this is not set explicitly using `metadata`, the default value is\\ndetermined through the Metaflow configuration. You can use this call to\\ncheck that your configuration is set up properly.\\n\\nIf multiple configuration profiles are present, this call returns the one\\nselected through the `METAFLOW_PROFILE` environment variable.",mdxType:"Description"}),(0,o.kt)(h,{name:"Returns",mdxType:"ParamSection"},(0,o.kt)(y,{type:"string",desc:"Information about the Metadata provider currently selected. This information typically\\nreturns provider specific information (like URL for remote providers or local paths for\\nlocal providers).",mdxType:"Parameter"}))),(0,o.kt)(d,{type:"function",name:"default_metadata",module:"metaflow",show_import:"False",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/client/core.py#L118",mdxType:"DocSection"},(0,o.kt)(p,{mdxType:"SigArgSection"}),(0,o.kt)(u,{summary:"Resets the Metadata provider to the default value, that is, to the value\\nthat was used prior to any `metadata` calls.",mdxType:"Description"}),(0,o.kt)(h,{name:"Returns",mdxType:"ParamSection"},(0,o.kt)(y,{type:"string",desc:"The result of get_metadata() after resetting the provider.",mdxType:"Parameter"}))))}k.isMDXComponent=!0},9792:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hierarchy-aa136d8e279d276d816b3d826d50319c.png"}}]);