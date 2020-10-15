(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{549:function(r,t,s){"use strict";s.r(t);var a=s(42),e=Object(a.a)({},(function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[s("h1",{attrs:{id:"parsingerror-hpp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsingerror-hpp"}},[r._v("#")]),r._v(" ParsingError.hpp"),s("seo")],1),r._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/parser/ParsingError.hpp",target:"_blank",rel:"noopener noreferrer"}},[r._v("This File On Github"),s("OutboundLink")],1),s("br"),r._v(" "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/parser/ParsingError.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[r._v("Ask A Question"),s("OutboundLink")],1)]),r._v(" "),s("p",[s("code",[r._v("API: latest")]),s("br"),r._v(" "),s("code",[r._v("module: oatpp")]),s("br"),r._v(" "),s("code",[r._v('#include "oatpp/core/parser/ParsingError.hpp"')])]),r._v(" "),s("h2",{attrs:{id:"parsingerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsingerror"}},[r._v("#")]),r._v(" ParsingError")]),r._v(" "),s("p",[r._v("Thrown when parsing error occurred and ParsingCaret object is not accessible for user. If parsing was made via oatpp::parser::ParsingCaret and ParsingCaret is accessible for user then do not throw this error.- User should read error from ParsingCaret::getError()")]),r._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("namespace")]),r._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),r._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("namespace")]),r._v(" parser "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),r._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("class")]),r._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[r._v("ParsingError")]),r._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("public")]),r._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[r._v("::")]),r._v("runtime_error "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),r._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),r._v("\n")])])]),s("h3",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[r._v("#")]),r._v(" Methods")]),r._v(" "),s("table",[s("thead",[s("tr",[s("th",[r._v("Return Type")]),r._v(" "),s("th",[r._v("Name")]),r._v(" "),s("th",[r._v("Summary")])])]),r._v(" "),s("tbody",[s("tr",[s("td",[s("code",[r._v("[none]")])]),r._v(" "),s("td",[s("a",{attrs:{href:"#parsingerror-parsingerror"}},[r._v("ParsingError")])]),r._v(" "),s("td",[r._v("Constructor")])]),r._v(" "),s("tr",[s("td",[s("code",[r._v("oatpp::String")])]),r._v(" "),s("td",[s("a",{attrs:{href:"#parsingerror-getmessage"}},[r._v("getMessage")])]),r._v(" "),s("td",[r._v("get error message")])]),r._v(" "),s("tr",[s("td",[s("code",[r._v("v_int64")])]),r._v(" "),s("td",[s("a",{attrs:{href:"#parsingerror-getcode"}},[r._v("getCode")])]),r._v(" "),s("td",[r._v("get error code")])]),r._v(" "),s("tr",[s("td",[s("code",[r._v("v_buff_size")])]),r._v(" "),s("td",[s("a",{attrs:{href:"#parsingerror-getposition"}},[r._v("getPosition")])]),r._v(" "),s("td",[r._v("get parsing position of the error")])])])]),r._v(" "),s("h3",{attrs:{id:"parsingerror-parsingerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsingerror-parsingerror"}},[r._v("#")]),r._v(" ParsingError::ParsingError")]),r._v(" "),s("p",[r._v("Constructor "),s("ul",[s("li",[s("strong",[r._v("@param")]),r._v(" message ")]),s("li",[s("strong",[r._v("@param")]),r._v(" position ")])])]),r._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[r._v("ParsingError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("const")]),r._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[r._v("::")]),r._v("String "),s("span",{pre:!0,attrs:{class:"token operator"}},[r._v("&")]),r._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(",")]),r._v(" v_int64 code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(",")]),r._v(" v_buff_size position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),r._v("\n")])])]),s("h3",{attrs:{id:"parsingerror-getmessage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsingerror-getmessage"}},[r._v("#")]),r._v(" ParsingError::getMessage")]),r._v(" "),s("p",[r._v("get error message "),s("ul",[s("li",[s("strong",[r._v("@return")])])])]),r._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[r._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[r._v("::")]),r._v("String "),s("span",{pre:!0,attrs:{class:"token function"}},[r._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),r._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("const")]),r._v("\n")])])]),s("h3",{attrs:{id:"parsingerror-getcode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsingerror-getcode"}},[r._v("#")]),r._v(" ParsingError::getCode")]),r._v(" "),s("p",[r._v("get error code "),s("ul",[s("li",[s("strong",[r._v("@return")])])])]),r._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[r._v("v_int64 "),s("span",{pre:!0,attrs:{class:"token function"}},[r._v("getCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),r._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("const")]),r._v("\n")])])]),s("h3",{attrs:{id:"parsingerror-getposition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsingerror-getposition"}},[r._v("#")]),r._v(" ParsingError::getPosition")]),r._v(" "),s("p",[r._v("get parsing position of the error "),s("ul",[s("li",[s("strong",[r._v("@return")])])])]),r._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[r._v("v_buff_size "),s("span",{pre:!0,attrs:{class:"token function"}},[r._v("getPosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v(")")]),r._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("const")]),r._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);