(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{668:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"microservices-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microservices-example"}},[e._v("#")]),e._v(" Microservices Example "),t("seo")],1),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/oatpp/example-microservices",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Repository"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("This is an example project on how to build microservices with Oat++ Web Framework, and how to utilize the "),t("RouterLink",{attrs:{to:"/docs/monolithization/"}},[e._v("Monolithization")]),e._v(" feature.")],1),e._v(" "),t("h2",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),t("p",[e._v("For more information about this example, see the "),t("RouterLink",{attrs:{to:"/docs/monolithization/"}},[e._v("Monolithization")]),e._v(" article.")],1),e._v(" "),t("h2",{attrs:{id:"inside-this-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inside-this-repository"}},[e._v("#")]),e._v(" Inside This Repository")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("|- user-service/                          // User-Service source code\n|- book-service/                          // Book-Service source code\n|- facade/                                // Facade source code\n|- monolith/all-services/                 // Monolithic config to build all services as a Monolith\n|- build_all.sh                           // Utility script. Build all services\n|- run_all_microservices.sh               // Utility script. Run all services as separate applications\n")])])]),t("h2",{attrs:{id:"build-and-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-and-run"}},[e._v("#")]),e._v(" Build And Run")]),e._v(" "),t("h3",{attrs:{id:"pre-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requirements"}},[e._v("#")]),e._v(" Pre Requirements")]),e._v(" "),t("ul",[t("li",[e._v("Install the "),t("a",{attrs:{href:"https://github.com/oatpp/oatpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("oatpp"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Install the "),t("a",{attrs:{href:"https://github.com/oatpp/oatpp-swagger",target:"_blank",rel:"noopener noreferrer"}},[e._v("oatpp-swagger"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"build-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-all"}},[e._v("#")]),e._v(" Build all")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ./build_all.sh \n")])])]),t("h3",{attrs:{id:"run-as-microservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-as-microservices"}},[e._v("#")]),e._v(" Run as microservices")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ./run_all_microservices.sh \n")])])]),t("h3",{attrs:{id:"run-as-monolith"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-as-monolith"}},[e._v("#")]),e._v(" Run as monolith")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ./monolith/all-services/build/all-services-exe\n")])])]),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/oatpp/example-microservices/master/diagram.svg?sanitize=true"}}),e._v(" "),t("p",[e._v("Facade takes book info from book-service, user info from user-service, merges data, and returns to the client.")]),e._v(" "),t("h3",{attrs:{id:"service-ports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-ports"}},[e._v("#")]),e._v(" Service ports")]),e._v(" "),t("ul",[t("li",[e._v("Facade - 8000")]),e._v(" "),t("li",[e._v("User - 8001")]),e._v(" "),t("li",[e._v("Book - 8002")])]),e._v(" "),t("h3",{attrs:{id:"example-curl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-curl"}},[e._v("#")]),e._v(" Example curl")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ curl http://localhost:8000/books/4\n{"id": 4, "title": "1984", "author": {"id": 4, "name": "George Orwell"}}\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);