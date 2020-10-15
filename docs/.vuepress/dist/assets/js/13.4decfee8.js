(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{385:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"client-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-hpp"}},[t._v("#")]),t._v(" Client.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp-consul/blob/master/src/oatpp-consul/Client.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-consul/issues/new?title=API%20question&body=In%20file:%20oatpp-consul/Client.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("API: latest")]),a("br"),t._v(" "),a("code",[t._v("module: oatpp-consul")]),a("br"),t._v(" "),a("code",[t._v('#include "oatpp-consul/Client.hpp"')])]),t._v(" "),a("h2",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")]),t._v(" "),a("p",[t._v("oatpp::consul::Client provides convenience methods  above oatpp::consul::rest::Client")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" consul "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"typedefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typedefs"}},[t._v("#")]),t._v(" Typedefs")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("oatpp::web::client::RequestExecutor")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-requestexecutor"}},[t._v("RequestExecutor")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/client/RequestExecutor/#requestexecutor"}},[t._v("oatpp::web::client::RequestExecutor")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::data::mapping::ObjectMapper")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-objectmapper"}},[t._v("ObjectMapper")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/ObjectMapper/#objectmapper"}},[t._v("oatpp::data::mapping::ObjectMapper")]),t._v(".")],1)])])]),t._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("std::shared_ptr<rest::Client>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-getrestclient"}},[t._v("getRestClient")])]),t._v(" "),a("td",[t._v("get oatpp::consul::rest::Client")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<data::mapping::ObjectMapper>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-getobjectmapper"}},[t._v("getObjectMapper")])]),t._v(" "),a("td",[t._v("Get object mapper initialized in the client instance.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::Object<rest::KVMetadata>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvgetmetadata"}},[t._v("kvGetMetadata")])]),t._v(" "),a("td",[t._v("Get metadata for key containing base64 encoded value along with other fields")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::Object<rest::KVMetadata>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvgetmetadataindc"}},[t._v("kvGetMetadataInDC")])]),t._v(" "),a("td",[t._v("Same as kvGetMetadata(key) but for given datacenter (DC)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::String")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvget"}},[t._v("kvGet")])]),t._v(" "),a("td",[t._v("Get value by key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::String")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvgetindc"}},[t._v("kvGetInDC")])]),t._v(" "),a("td",[t._v("Get value by key for given datacenter")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Type::ObjectWrapper")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvgetasdto"}},[t._v("kvGetAsDto")])]),t._v(" "),a("td",[t._v("Get value by key and deserialize it to DTO object using given objectMapper")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Type::ObjectWrapper")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvgetasdtoindc"}},[t._v("kvGetAsDtoInDC")])]),t._v(" "),a("td",[t._v("Get value by key for given datacenter and deserialize it to DTO object using given objectMapper")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvput"}},[t._v("kvPut")])]),t._v(" "),a("td",[t._v("Put value for key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvputindc"}},[t._v("kvPutInDC")])]),t._v(" "),a("td",[t._v("Put value for key for given datacenter")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvdelete"}},[t._v("kvDelete")])]),t._v(" "),a("td",[t._v("Delete value for key")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-kvdeleteindc"}},[t._v("kvDeleteInDC")])]),t._v(" "),a("td",[t._v("Delete value for key for given datacenter")])])])]),t._v(" "),a("h3",{attrs:{id:"client-requestexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-requestexecutor"}},[t._v("#")]),t._v(" Client::RequestExecutor")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/client/RequestExecutor/#requestexecutor"}},[t._v("oatpp::web::client::RequestExecutor")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("RequestExecutor RequestExecutor\n")])])]),a("h3",{attrs:{id:"client-objectmapper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-objectmapper"}},[t._v("#")]),t._v(" Client::ObjectMapper")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/ObjectMapper/#objectmapper"}},[t._v("oatpp::data::mapping::ObjectMapper")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectMapper ObjectMapper\n")])])]),a("h3",{attrs:{id:"client-getrestclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-getrestclient"}},[t._v("#")]),t._v(" Client::getRestClient")]),t._v(" "),a("p",[t._v("get oatpp::consul::rest::Client  rest::Client provides more flexible")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Client"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRestClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-getobjectmapper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-getobjectmapper"}},[t._v("#")]),t._v(" Client::getObjectMapper")]),t._v(" "),a("p",[t._v("Get object mapper initialized in the client instance.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectMapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getObjectMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvgetmetadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvgetmetadata"}},[t._v("#")]),t._v(" Client::kvGetMetadata")]),t._v(" "),a("p",[t._v("Get metadata for key containing base64 encoded value along with other fields  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("KVMetadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvGetMetadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvgetmetadataindc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvgetmetadataindc"}},[t._v("#")]),t._v(" Client::kvGetMetadataInDC")]),t._v(" "),a("p",[t._v("Same as kvGetMetadata(key) but for given datacenter (DC)  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("KVMetadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvGetMetadataInDC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" datacenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvget"}},[t._v("#")]),t._v(" Client::kvGet")]),t._v(" "),a("p",[t._v("Get value by key  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvgetindc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvgetindc"}},[t._v("#")]),t._v(" Client::kvGetInDC")]),t._v(" "),a("p",[t._v("Get value by key for given datacenter  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvGetInDC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" datacenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvgetasdto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvgetasdto"}},[t._v("#")]),t._v(" Client::kvGetAsDto")]),t._v(" "),a("p",[t._v("Get value by key and deserialize it to DTO object using given objectMapper  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvGetAsDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectMapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" objectMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvgetasdtoindc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvgetasdtoindc"}},[t._v("#")]),t._v(" Client::kvGetAsDtoInDC")]),t._v(" "),a("p",[t._v("Get value by key for given datacenter and deserialize it to DTO object using given objectMapper  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvGetAsDtoInDC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" datacenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectMapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" objectMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvput"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvput"}},[t._v("#")]),t._v(" Client::kvPut")]),t._v(" "),a("p",[t._v("Put value for key  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvPut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvputindc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvputindc"}},[t._v("#")]),t._v(" Client::kvPutInDC")]),t._v(" "),a("p",[t._v("Put value for key for given datacenter  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvPutInDC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" datacenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvdelete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvdelete"}},[t._v("#")]),t._v(" Client::kvDelete")]),t._v(" "),a("p",[t._v("Delete value for key  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvDelete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-kvdeleteindc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-kvdeleteindc"}},[t._v("#")]),t._v(" Client::kvDeleteInDC")]),t._v(" "),a("p",[t._v("Delete value for key for given datacenter  "),a("ul",[a("li",[a("strong",[t._v("@throws")]),t._v(" - "),a("a",{attrs:{href:"#client-error"}},[t._v("Client::Error")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kvDeleteInDC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" datacenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h2",{attrs:{id:"client-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-error"}},[t._v("#")]),t._v(" Client::Error")]),t._v(" "),a("p",[t._v("Client call error.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" consul "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("runtime_error "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"methods-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-2"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-error-error"}},[t._v("Error")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::String&")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-error-getmessage"}},[t._v("getMessage")])]),t._v(" "),a("td",[t._v("Get error message.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("v_int32")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#client-error-gethttperrorcode"}},[t._v("getHttpErrorCode")])]),t._v(" "),a("td",[t._v("Get http error code.")])])])]),t._v(" "),a("h3",{attrs:{id:"client-error-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-error-error"}},[t._v("#")]),t._v(" Client::Error::Error")]),t._v(" "),a("p",[t._v("Constructor. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" message - error message. ")]),a("li",[a("strong",[t._v("@param")]),t._v(" httpErrorCode - http error code. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v_int32 httpErrorCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runtime_error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c_str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("m_message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-error-getmessage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-error-getmessage"}},[t._v("#")]),t._v(" Client::Error::getMessage")]),t._v(" "),a("p",[t._v("Get error message. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/Types/#string"}},[t._v("oatpp::String")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"client-error-gethttperrorcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-error-gethttperrorcode"}},[t._v("#")]),t._v(" Client::Error::getHttpErrorCode")]),t._v(" "),a("p",[t._v("Get http error code. "),a("ul",[a("li",[a("strong",[t._v("@return")]),t._v(" - http error code. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("v_int32 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHttpErrorCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);