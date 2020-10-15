(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{396:function(a,t,s){"use strict";s.r(t);var e=s(42),l=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"callbacks-hpp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callbacks-hpp"}},[a._v("#")]),a._v(" Callbacks.hpp"),s("seo")],1),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp-libressl/blob/master/src/oatpp-libressl/Callbacks.hpp",target:"_blank",rel:"noopener noreferrer"}},[a._v("This File On Github"),s("OutboundLink")],1),s("br"),a._v(" "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp-libressl/issues/new?title=API%20question&body=In%20file:%20oatpp-libressl/Callbacks.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ask A Question"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("code",[a._v("API: latest")]),s("br"),a._v(" "),s("code",[a._v("module: oatpp-libressl")]),s("br"),a._v(" "),s("code",[a._v('#include "oatpp-libressl/Callbacks.hpp"')])]),a._v(" "),s("h2",{attrs:{id:"callbacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callbacks"}},[a._v("#")]),a._v(" Callbacks")]),a._v(" "),s("p",[a._v("Collection of default-implemented callbacks for libressl")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" libressl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Callbacks")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[a._v("#")]),a._v(" Methods")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Return Type")]),a._v(" "),s("th",[a._v("Name")]),a._v(" "),s("th",[a._v("Summary")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("code",[a._v("void")])]),a._v(" "),s("td",[s("a",{attrs:{href:"#callbacks-setdefaultcallbacks"}},[a._v("setDefaultCallbacks")])]),a._v(" "),s("td",[a._v("Set default callbacks for libressl")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("void")])]),a._v(" "),s("td",[s("a",{attrs:{href:"#callbacks-lockingcallback"}},[a._v("lockingCallback")])]),a._v(" "),s("td",[a._v("Oatpp-default implementation of lockingCallback passed to CRYPTO_set_locking_callback().")])])])]),a._v(" "),s("h3",{attrs:{id:"callbacks-setdefaultcallbacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callbacks-setdefaultcallbacks"}},[a._v("#")]),a._v(" Callbacks::setDefaultCallbacks")]),a._v(" "),s("p",[a._v("Set default callbacks for libressl")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setDefaultCallbacks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"callbacks-lockingcallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callbacks-lockingcallback"}},[a._v("#")]),a._v(" Callbacks::lockingCallback")]),a._v(" "),s("p",[a._v("Oatpp-default implementation of lockingCallback passed to CRYPTO_set_locking_callback(). must be set in case libressl is used in multithreaded environment. Locking is done using "),s("RouterLink",{attrs:{to:"/api/latest/oatpp/core/concurrency/SpinLock/#spinlock"}},[a._v("oatpp::concurrency::SpinLock")]),a._v(". "),s("ul",[s("li",[s("strong",[a._v("@param")]),a._v(" mode ")]),s("li",[s("strong",[a._v("@param")]),a._v(" n - index of the lock. ")]),s("li",[s("strong",[a._v("@param")]),a._v(" file - file where lock is set. ")]),s("li",[s("strong",[a._v("@param")]),a._v(" line - line where lock is set. ")])])],1),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("lockingCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);