"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8513],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8409:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={},s="Advanced, Shareable Cards with Card Templates",p={unversionedId:"python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates",id:"python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates",title:"Advanced, Shareable Cards with Card Templates",description:"The built-in Card Components allow you to create a visual report with a few lines of Python code. This is by far the easiest way to output visualizations using Metaflow\u2019s default visual style and layout.",source:"@site/docs/python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates.md",sourceDirName:"python/metaflow/visualizing-results",slug:"/python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates",permalink:"/metaflow-docs/python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Easy Custom Reports with Card Components",permalink:"/metaflow-docs/python/metaflow/visualizing-results/easy-custom-reports-with-card-components"},next:{title:"Debugging with Metaflow",permalink:"/metaflow-docs/python/metaflow/debugging"}},c=[{value:"Using a Card Template",id:"using-a-card-template",children:[],level:2},{value:"Developing a Card Template",id:"developing-a-card-template",children:[{value:"Managing Dependencies in Card Templates.",id:"managing-dependencies-in-card-templates",children:[],level:4}],level:2}],d={toc:c};function u(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-shareable-cards-with-card-templates"},"Advanced, Shareable Cards with Card Templates"),(0,o.kt)("p",null,"The built-in ",(0,o.kt)("a",{parentName:"p",href:"easy-custom-reports-with-card-components"},(0,o.kt)("em",{parentName:"a"},"Card Components"))," allow you to create a visual report with a few lines of Python code. This is by far the easiest way to output visualizations using Metaflow\u2019s default visual style and layout."),(0,o.kt)("p",null,"This section describes a more advanced concept of ",(0,o.kt)("em",{parentName:"p"},"Card Templates")," which are more flexible than ",(0,o.kt)("a",{parentName:"p",href:"effortless-task-inspection-with-default-cards"},(0,o.kt)("em",{parentName:"a"},"Default Cards"))," and Card Components but they require more upfront effort to create. However, using an existing Card Template is very easy, as shown below. They are a good match for use cases such as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using off-the-shelf Javascript libraries to create advanced visualizations."),(0,o.kt)("li",{parentName:"ul"},"Creating fully customized reports with any visual style and layout."),(0,o.kt)("li",{parentName:"ul"},"Creating a project-specific card template."),(0,o.kt)("li",{parentName:"ul"},"Sharing generally useful card templates publicly.")),(0,o.kt)("p",null,"For instance, if your project involves extracting features from video, you can create a card template that shows metadata, frames from the video, and a sample of features in a predefined format. Everyone working on the project can use the same card template to make it easy to catalogue and compare various approaches."),(0,o.kt)("h2",{id:"using-a-card-template"},"Using a Card Template"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"Card Template")," is a normal Python package, hosted in a Git repository of its own, optionally published to a private or public package repository. By convention, public Card Templates have a ",(0,o.kt)("inlineCode",{parentName:"p"},"metaflow-card")," prefix, so you can easily ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/search/?q=metaflow-card-&o="},"find public card templates on PyPi"),"."),(0,o.kt)("p",null,"Let\u2019s test a public template, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/outerbounds/metaflow-card-html"},"metaflow-card-html"),", which simply converts HTML stored in an artifact to a card. First, install the template using ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip install metaflow-card-html")),(0,o.kt)("p",null,"Now we can use the card in any flow by adding a decorator, ",(0,o.kt)("inlineCode",{parentName:"p"},"@card(type=\u2019html\u2019)"),". The type attribute refers to the template name. Let\u2019s test it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow import FlowSpec, step, card\n\nclass HtmlCardFlow(FlowSpec):\n\n    @card(type=\'html\')\n    @step\n    def start(self):\n        self.html = """\n        <html>\n          <body style=\'color: blue\'>\n            Hello World!\n          </body>\n        </html>\n        """\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == "__main__":\n    HtmlCardFlow\n')),(0,o.kt)("p",null,"Note that this a just a simple example what a custom template can do. Other custom templates don't require writing HTML by hand. Save the flow in ",(0,o.kt)("inlineCode",{parentName:"p"},"htmlcardflow.py"),". Then, you can run it"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python htmlcardflow.py run")),(0,o.kt)("p",null,"and view the card"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python htmlcardflow.py card view start")),(0,o.kt)("p",null,"You should see a blank page with a blue \u201cHello World!\u201d text."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3238).Z,width:"563",height:"158"})),(0,o.kt)("p",null,"A particularly useful feature of card templates is that they work in any compute environment, such as ",(0,o.kt)("a",{parentName:"p",href:"../scaling"},"AWS Batch"),". For instance, if you have AWS Batch set up, you can run the flow as follows:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python htmlcardflow.py run \u2013with batch")),(0,o.kt)("p",null,"The card will get produced without you having to worry about installing anything on the remote instances! You can ",(0,o.kt)("a",{parentName:"p",href:"../../going-to-production-with-metaflow/scheduling-metaflow-flows"},"deploy flows to production")," with custom templates too:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python htmlcardflow.py step-functions create")),(0,o.kt)("p",null,"Now, every time a production run executes, cards will get produced exactly as during prototyping. Behind the scenes, Metaflow takes care of packaging any card templates whenever you execute code remotely."),(0,o.kt)("h2",{id:"developing-a-card-template"},"Developing a Card Template"),(0,o.kt)("p",null,"If you want to develop a card template of your own, it is useful to have a mental model of how cards work under the hood:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(341).Z,width:"561",height:"312"})),(0,o.kt)("p",null,"The blue box is a Metaflow task executing a step from the user\u2019s flow. It is decorated with a ",(0,o.kt)("inlineCode",{parentName:"p"},"@card")," decorator that has a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," attribute referring to your custom template, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"mycard"),". The task executes before the card template. After the task has finished, a new subprocess is started that executes a card template. This ensures that even if the template fails for any reason, it won\u2019t crash the task."),(0,o.kt)("p",null,"The card template is given the Task ID of the task that the card corresponds to. Using this Task ID, the template can use ",(0,o.kt)("a",{parentName:"p",href:"../client"},"the Client API")," to query any information about the task, its parent run, and any past runs. Using this information, the template needs to output a single stand-alone HTML file - the actual card. Note that the HTML file can\u2019t depend on any other local files. In particular, you must include any images as ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/data-uris/"},"Data URIs")," in the file itself."),(0,o.kt)("p",null,"The template itself is a Python class, derived from ",(0,o.kt)("em",{parentName:"p"},"MetaflowCard"),", which needs to implement one method, ",(0,o.kt)("em",{parentName:"p"},"render"),", which is given ",(0,o.kt)("a",{parentName:"p",href:"../client"},"a Task object from the Client API"),". This is the complete implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@card(type='html')")," which we used above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow.cards import MetaflowCard\n\nclass HTMLCard(MetaflowCard):\n\n    type = \'html\'\n\n    def __init__(self, options={"artifact":"html"}, **kwargs):\n        self._attr_nm = options.get("artifact", "html")\n\n    def render(self, task):\n        if self._attr_nm in task:\n            return str(task[self._attr_nm].data)\n\nCARDS = [HTMLCard]\n')),(0,o.kt)("p",null,"The example above used the default ",(0,o.kt)("inlineCode",{parentName:"p"},"self.html")," artifact to pass HTML code to the template. You can choose another artifact by specifying an artifact name in the ",(0,o.kt)("em",{parentName:"p"},"options")," dictionary that is passed to the template: ",(0,o.kt)("inlineCode",{parentName:"p"},"@card(type='html', options={'artifact': 'other_html')"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"render")," method needs to return a self-contained HTML as a string. This template has it easy, since all it has to do is to return the user-defined artifact. Other templates can do much more complex processing to produce a suitable HTML page."),(0,o.kt)("p",null,"To implement and publish a template of your own, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/outerbounds/metaflow-card-html/"},"metaflow-card-html")," repository which shows how to structure the package, as well as step-by-step instructions on how to create one of your own. If you create a Card Template that other people might benefit from, let our ",(0,o.kt)("a",{parentName:"p",href:"http://slack.outerbounds.co"},"Slack community")," know about it!"),(0,o.kt)("h4",{id:"managing-dependencies-in-card-templates"},"Managing Dependencies in Card Templates."),(0,o.kt)("p",null,"Card templates may rely on 3rd party libraries for their functionality, say, to produce advanced visualizations. To make sure the card can be rendered in remote environments that might not have all dependencies already installed, Metaflow takes care of packaging any files included directly in the template itself. However, it can\u2019t handle 3rd party dependencies automatically. Hence, to make sure your template works without friction, you need to pay attention to its dependencies."),(0,o.kt)("p",null,"Here are recommended strategies for handling 3rd party library dependencies in card templates:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can rely on Javascript libraries to move functionality to the frontend side. For instance, instead of producing visualizations in Python, you can produce them in Javascript. Take a look at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/outerbounds/metaflow-card-uplot-timeseries"},"metaflow-card-uplot-timeseries")," template to see how to use a Javascript library in your template."),(0,o.kt)("li",{parentName:"ol"},"You can include small Python libraries in the template package itself, aka ",(0,o.kt)("em",{parentName:"li"},"vendor")," them.")),(0,o.kt)("p",null,"If these approaches don\u2019t work, you can instruct users to include the dependencies of the template in their ",(0,o.kt)("a",{parentName:"p",href:"../dependencies"},"@conda libraries"),". For templates shared privately, you may also rely on dependencies included in a Docker image shared by all users and ",(0,o.kt)("inlineCode",{parentName:"p"},"@batch")," executions."))}u.isMDXComponent=!0},3238:function(e,t,a){t.Z=a.p+"assets/images/card-docs-html_(2)-8bab234a69b91c4a9fc410eb4ef25a40.png"},341:function(e,t,a){t.Z=a.p+"assets/images/card-docs-template_(1)-c41351e9f091400f1151a1c5d7baaebe.png"}}]);