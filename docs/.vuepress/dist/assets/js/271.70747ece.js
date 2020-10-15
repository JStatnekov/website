(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{643:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oatpp-libressl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oatpp-libressl"}},[t._v("#")]),t._v(" oatpp-libressl "),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp-libressl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repository"),a("OutboundLink")],1),a("br"),t._v(" "),a("RouterLink",{attrs:{to:"/examples/libressl/"}},[t._v("Example Project")])],1),t._v(" "),a("p",[a("strong",[t._v("oatpp-libressl")]),t._v(" - extension of "),a("RouterLink",{attrs:{to:"/docs/modules/oatpp/"}},[t._v("oatpp")]),t._v(" module."),a("br"),t._v("\nIt provides secure server and client connection providers for oatpp applications. Based on "),a("a",{attrs:{href:"https://www.libressl.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LibreSSL"),a("OutboundLink")],1),t._v("."),a("br"),t._v('\nSupports both "Simple" and "Async" oatpp APIs.')],1),t._v(" "),a("h2",{attrs:{id:"requires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requires"}},[t._v("#")]),t._v(" Requires")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("LibreSSL")]),t._v(" - minimum version 3.0.0")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("See: "),a("a",{attrs:{href:"https://github.com/oatpp/example-libressl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full example project TLS-Libressl"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"create-server-connection-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-server-connection-provider"}},[t._v("#")]),t._v(" Create server connection provider")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp-libressl/server/ConnectionProvider.hpp"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp-libressl/Config.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" crtFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/file.crt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pemFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/file.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultServerConfigShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crtFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pemFile "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* private key */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connectionProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"create-client-connection-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-client-connection-provider"}},[t._v("#")]),t._v(" Create client connection provider")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp-libressl/client/ConnectionProvider.hpp"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp-libressl/Config.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connectionProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpbin.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"don-t-forget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#don-t-forget"}},[t._v("#")]),t._v(" Don't forget!")]),t._v(" "),a("p",[t._v("Set libressl lockingCallback and SIGPIPE handler on program start!")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp-libressl/Callbacks.hpp"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* set lockingCallback for libressl */")]),t._v("\noatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("libressl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Callbacks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDefaultCallbacks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<csignal>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ignore SIGPIPE */")]),t._v("\nstd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SIGPIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SIG_IGN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"see-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-more"}},[t._v("#")]),t._v(" See more")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/docs/modules/oatpp-mbedtls/"}},[t._v("oatpp-mbedtls")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);