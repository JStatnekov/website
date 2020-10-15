(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{521:function(t,e,a){"use strict";a.r(e);var r=a(42),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"thread-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread-hpp"}},[t._v("#")]),t._v(" Thread.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/concurrency/Thread.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/concurrency/Thread.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("API: latest")]),a("br"),t._v(" "),a("code",[t._v("module: oatpp")]),a("br"),t._v(" "),a("code",[t._v('#include "oatpp/core/concurrency/Thread.hpp"')])]),t._v(" "),a("h2",{attrs:{id:"setthreadaffinitytoonecpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setthreadaffinitytoonecpu"}},[t._v("#")]),t._v(" setThreadAffinityToOneCpu")]),t._v(" "),a("p",[a("strong",[t._v("Namespace:")]),t._v(" "),a("code",[t._v("oatpp::concurrency")])]),t._v(" "),a("p",[t._v("Set thread affinity to one CPU. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" nativeHandle - "),a("code",[t._v("std::thread::native_handle_type")]),t._v(". ")]),a("li",[a("strong",[t._v("@param")]),t._v(" cpuIndex - index of CPU. ")]),a("li",[a("strong",[t._v("@return")]),t._v(" - zero on success. Negative value on failure. -1 if platform that runs application does not support this call. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("v_int32 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setThreadAffinityToOneCpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("thread"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("native_handle_type nativeHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_int32 cpuIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"setthreadaffinitytocpurange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setthreadaffinitytocpurange"}},[t._v("#")]),t._v(" setThreadAffinityToCpuRange")]),t._v(" "),a("p",[a("strong",[t._v("Namespace:")]),t._v(" "),a("code",[t._v("oatpp::concurrency")])]),t._v(" "),a("p",[t._v("Set thread affinity [firstCpuIndex..lastCpuIndex]. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" nativeHandle - "),a("code",[t._v("std::thread::native_handle_type")]),t._v(". ")]),a("li",[a("strong",[t._v("@param")]),t._v(" firstCpuIndex - from CPU-index. ")]),a("li",[a("strong",[t._v("@param")]),t._v(" lastCpuIndex - to CPU-index included. ")]),a("li",[a("strong",[t._v("@return")]),t._v(" - zero on success. Negative value on failure. -1 if platform that runs application does not support this call. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("v_int32 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setThreadAffinityToCpuRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("thread"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("native_handle_type nativeHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_int32 firstCpuIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_int32 lastCpuIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"gethardwareconcurrency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gethardwareconcurrency"}},[t._v("#")]),t._v(" getHardwareConcurrency")]),t._v(" "),a("p",[a("strong",[t._v("Namespace:")]),t._v(" "),a("code",[t._v("oatpp::concurrency")])]),t._v(" "),a("p",[t._v("Get hardware concurrency. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - OATPP_THREAD_HARDWARE_CONCURRENCY config value if set "),a("br"),t._v(" else return std::thread::hardware_concurrency() "),a("br"),t._v(" else return 1. "),a("br")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("v_int32 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHardwareConcurrency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);