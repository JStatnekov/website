(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{503:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ioeventworker-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-hpp"}},[t._v("#")]),t._v(" IOEventWorker.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/async/worker/IOEventWorker.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/async/worker/IOEventWorker.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("API: latest")]),a("br"),t._v(" "),a("code",[t._v("module: oatpp")]),a("br"),t._v(" "),a("code",[t._v('#include "oatpp/core/async/worker/IOEventWorker.hpp"')])]),t._v(" "),a("h2",{attrs:{id:"ioeventworker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker"}},[t._v("#")]),t._v(" IOEventWorker")]),t._v(" "),a("p",[t._v("Event-based implementation of I/O worker. "),a("ul",[a("li",[a("code",[t._v("kqueue")]),t._v(" based implementation - for Mac/BSD systems")]),t._v(" "),a("li",[a("code",[t._v("epoll")]),t._v(" based implementation - for Linux systems")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" async "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" worker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOEventWorker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Worker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworker-ioeventworker"}},[t._v("IOEventWorker")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworker-~ioeventworker"}},[t._v("~IOEventWorker")])]),t._v(" "),a("td",[t._v("Virtual destructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworker-pushtasks"}},[t._v("pushTasks")])]),t._v(" "),a("td",[t._v("Push list of tasks to worker.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworker-pushonetask"}},[t._v("pushOneTask")])]),t._v(" "),a("td",[t._v("Push one task to worker.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworker-run"}},[t._v("run")])]),t._v(" "),a("td",[t._v("Run worker.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworker-stop"}},[t._v("stop")])]),t._v(" "),a("td",[t._v("Break run loop.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworker-join"}},[t._v("join")])]),t._v(" "),a("td",[t._v("Join all worker-threads.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworker-detach"}},[t._v("detach")])]),t._v(" "),a("td",[t._v("Detach all worker-threads.")])])])]),t._v(" "),a("h3",{attrs:{id:"ioeventworker-ioeventworker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-ioeventworker"}},[t._v("#")]),t._v(" IOEventWorker::IOEventWorker")]),t._v(" "),a("p",[t._v("Constructor.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IOEventWorker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IOEventWorkerForeman"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" foreman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOEventType specialization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"ioeventworker-ioeventworker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-ioeventworker-2"}},[t._v("#")]),t._v(" IOEventWorker::~IOEventWorker")]),t._v(" "),a("p",[t._v("Virtual destructor.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IOEventWorker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"ioeventworker-pushtasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-pushtasks"}},[t._v("#")]),t._v(" IOEventWorker::pushTasks")]),t._v(" "),a("p",[t._v("Push list of tasks to worker. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" tasks - oatpp::collection::FastQueue of "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinehandle"}},[t._v("oatpp::async::CoroutineHandle")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushTasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("FastQueue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CoroutineHandle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"ioeventworker-pushonetask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-pushonetask"}},[t._v("#")]),t._v(" IOEventWorker::pushOneTask")]),t._v(" "),a("p",[t._v("Push one task to worker. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" task - CoroutineHandle. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushOneTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CoroutineHandle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"ioeventworker-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-run"}},[t._v("#")]),t._v(" IOEventWorker::run")]),t._v(" "),a("p",[t._v("Run worker.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"ioeventworker-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-stop"}},[t._v("#")]),t._v(" IOEventWorker::stop")]),t._v(" "),a("p",[t._v("Break run loop.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"ioeventworker-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-join"}},[t._v("#")]),t._v(" IOEventWorker::join")]),t._v(" "),a("p",[t._v("Join all worker-threads.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"ioeventworker-detach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworker-detach"}},[t._v("#")]),t._v(" IOEventWorker::detach")]),t._v(" "),a("p",[t._v("Detach all worker-threads.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h2",{attrs:{id:"ioeventworkerforeman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworkerforeman"}},[t._v("#")]),t._v(" IOEventWorkerForeman")]),t._v(" "),a("p",[t._v("Class responsible to assign I/O tasks to specific "),a("a",{attrs:{href:"#ioeventworker"}},[t._v("IOEventWorker")]),t._v(' according to worker\'s "specialization". '),a("br"),t._v(" Needed in order to support full-duplex I/O mode without duplicating file-descriptors.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" async "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" worker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOEventWorkerForeman")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Worker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"methods-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-2"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworkerforeman-ioeventworkerforeman"}},[t._v("IOEventWorkerForeman")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworkerforeman-~ioeventworkerforeman"}},[t._v("~IOEventWorkerForeman")])]),t._v(" "),a("td",[t._v("Virtual destructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworkerforeman-pushtasks"}},[t._v("pushTasks")])]),t._v(" "),a("td",[t._v("Push list of tasks to worker.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworkerforeman-pushonetask"}},[t._v("pushOneTask")])]),t._v(" "),a("td",[t._v("Push one task to worker.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworkerforeman-stop"}},[t._v("stop")])]),t._v(" "),a("td",[t._v("Break run loop.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworkerforeman-join"}},[t._v("join")])]),t._v(" "),a("td",[t._v("Join all worker-threads.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("void")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#ioeventworkerforeman-detach"}},[t._v("detach")])]),t._v(" "),a("td",[t._v("Detach all worker-threads.")])])])]),t._v(" "),a("h3",{attrs:{id:"ioeventworkerforeman-ioeventworkerforeman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworkerforeman-ioeventworkerforeman"}},[t._v("#")]),t._v(" IOEventWorkerForeman::IOEventWorkerForeman")]),t._v(" "),a("p",[t._v("Constructor.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IOEventWorkerForeman")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"ioeventworkerforeman-ioeventworkerforeman-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworkerforeman-ioeventworkerforeman-2"}},[t._v("#")]),t._v(" IOEventWorkerForeman::~IOEventWorkerForeman")]),t._v(" "),a("p",[t._v("Virtual destructor.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IOEventWorkerForeman")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"ioeventworkerforeman-pushtasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworkerforeman-pushtasks"}},[t._v("#")]),t._v(" IOEventWorkerForeman::pushTasks")]),t._v(" "),a("p",[t._v("Push list of tasks to worker. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" tasks - oatpp::collection::FastQueue of "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinehandle"}},[t._v("oatpp::async::CoroutineHandle")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushTasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("FastQueue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CoroutineHandle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"ioeventworkerforeman-pushonetask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworkerforeman-pushonetask"}},[t._v("#")]),t._v(" IOEventWorkerForeman::pushOneTask")]),t._v(" "),a("p",[t._v("Push one task to worker. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" task - CoroutineHandle. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushOneTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CoroutineHandle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"ioeventworkerforeman-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworkerforeman-stop"}},[t._v("#")]),t._v(" IOEventWorkerForeman::stop")]),t._v(" "),a("p",[t._v("Break run loop.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"ioeventworkerforeman-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworkerforeman-join"}},[t._v("#")]),t._v(" IOEventWorkerForeman::join")]),t._v(" "),a("p",[t._v("Join all worker-threads.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),a("h3",{attrs:{id:"ioeventworkerforeman-detach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioeventworkerforeman-detach"}},[t._v("#")]),t._v(" IOEventWorkerForeman::detach")]),t._v(" "),a("p",[t._v("Detach all worker-threads.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);