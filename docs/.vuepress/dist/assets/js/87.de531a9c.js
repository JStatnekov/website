(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{459:function(s,e,t){"use strict";t.r(e);var r=t(42),a=Object(r.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"resources-hpp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources-hpp"}},[s._v("#")]),s._v(" Resources.hpp"),t("seo")],1),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/oatpp/oatpp-swagger/blob/master/src/oatpp-swagger/Resources.hpp",target:"_blank",rel:"noopener noreferrer"}},[s._v("This File On Github"),t("OutboundLink")],1),t("br"),s._v(" "),t("a",{attrs:{href:"https://github.com/oatpp/oatpp-swagger/issues/new?title=API%20question&body=In%20file:%20oatpp-swagger/Resources.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ask A Question"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("code",[s._v("API: latest")]),t("br"),s._v(" "),t("code",[s._v("module: oatpp-swagger")]),t("br"),s._v(" "),t("code",[s._v('#include "oatpp-swagger/Resources.hpp"')])]),s._v(" "),t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[s._v("#")]),s._v(" Resources")]),s._v(" "),t("p",[s._v("This class is responsible for loading Swagger-UI resources.")]),s._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" oatpp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" swagger "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Resources")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[s._v("#")]),s._v(" Methods")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Return Type")]),s._v(" "),t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Summary")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("[none]")])]),s._v(" "),t("td",[t("a",{attrs:{href:"#resources-resources"}},[s._v("Resources")])]),s._v(" "),t("td",[s._v("Constructor.")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("std::shared_ptr<Resources>")])]),s._v(" "),t("td",[t("a",{attrs:{href:"#resources-loadresources"}},[s._v("loadResources")])]),s._v(" "),t("td",[s._v("Load and cache Swagger-UI resources.")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("std::shared_ptr<Resources>")])]),s._v(" "),t("td",[t("a",{attrs:{href:"#resources-streamresources"}},[s._v("streamResources")])]),s._v(" "),t("td",[s._v("Stream Swagger-UI resources directly from disk.")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("oatpp::String")])]),s._v(" "),t("td",[t("a",{attrs:{href:"#resources-getresource"}},[s._v("getResource")])]),s._v(" "),t("td",[s._v("Get cached resource by filename.")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("std::shared_ptr<ReadCallback>")])]),s._v(" "),t("td",[t("a",{attrs:{href:"#resources-getresourcestream"}},[s._v("getResourceStream")])]),s._v(" "),t("td",[s._v("Get streamed resource by filename.")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("bool")])]),s._v(" "),t("td",[t("a",{attrs:{href:"#resources-isstreaming"}},[s._v("isStreaming")])]),s._v(" "),t("td",[s._v("Returns true if this is a streaming ressource instance.")])])])]),s._v(" "),t("h3",{attrs:{id:"resources-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources-resources"}},[s._v("#")]),s._v(" Resources::Resources")]),s._v(" "),t("p",[s._v("Constructor. "),t("ul",[t("li",[t("strong",[s._v("@param")]),s._v(" resDir - directory containing swagger-ui resources. ")])])]),s._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" oatpp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" resDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" streaming "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"resources-loadresources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources-loadresources"}},[s._v("#")]),s._v(" Resources::loadResources")]),s._v(" "),t("p",[s._v("Load and cache Swagger-UI resources. "),t("ul",[t("li",[t("strong",[s._v("@param")]),s._v(" resDir - directory containing swagger-ui resources. ")]),t("li",[t("strong",[s._v("@return")]),s._v(" - "),t("code",[s._v("std::shared_ptr")]),s._v(" to Resources. ")])])]),s._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("shared_ptr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadResources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" oatpp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" resDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"resources-streamresources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources-streamresources"}},[s._v("#")]),s._v(" Resources::streamResources")]),s._v(" "),t("p",[s._v("Stream Swagger-UI resources directly from disk. "),t("ul",[t("li",[t("strong",[s._v("@param")]),s._v(" resDir - directory containing swagger-ui resources. ")]),t("li",[t("strong",[s._v("@return")]),s._v(" - "),t("code",[s._v("std::shared_ptr")]),s._v(" to Resources. ")])])]),s._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("shared_ptr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Resources"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("streamResources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" oatpp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" resDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"resources-getresource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources-getresource"}},[s._v("#")]),s._v(" Resources::getResource")]),s._v(" "),t("p",[s._v("Get cached resource by filename. "),t("ul",[t("li",[t("strong",[s._v("@param")]),s._v(" filename - name of the resource file. ")]),t("li",[t("strong",[s._v("@return")]),s._v(" - "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/Types/#string"}},[s._v("oatpp::String")]),s._v(" containing resource binary data. ")],1)])]),s._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("oatpp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("String "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" oatpp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"resources-getresourcestream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources-getresourcestream"}},[s._v("#")]),s._v(" Resources::getResourceStream")]),s._v(" "),t("p",[s._v("Get streamed resource by filename. "),t("ul",[t("li",[t("strong",[s._v("@param")]),s._v(" filename - name of the resource file. ")]),t("li",[t("strong",[s._v("@return")]),s._v(" - "),t("code",[s._v("std::shared_ptr")]),s._v(" to "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#readcallback"}},[s._v("oatpp::data::stream::ReadCallback")]),s._v(' containing resource binary data stream." ')],1)])]),s._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[s._v("std"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("shared_ptr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ReadCallback"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResourceStream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" oatpp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"resources-isstreaming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources-isstreaming"}},[s._v("#")]),s._v(" Resources::isStreaming")]),s._v(" "),t("p",[s._v("Returns true if this is a streaming ressource instance. "),t("ul",[t("li",[t("strong",[s._v("@return")])])])]),s._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isStreaming")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);