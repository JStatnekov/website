(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{516:function(o,e,t){"use strict";t.r(e);var a=t(42),r=Object(a.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"objectpool-hpp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objectpool-hpp"}},[o._v("#")]),o._v(" ObjectPool.hpp"),t("seo")],1),o._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/base/memory/ObjectPool.hpp",target:"_blank",rel:"noopener noreferrer"}},[o._v("This File On Github"),t("OutboundLink")],1),t("br"),o._v(" "),t("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/base/memory/ObjectPool.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[o._v("Ask A Question"),t("OutboundLink")],1)]),o._v(" "),t("p",[t("code",[o._v("API: latest")]),t("br"),o._v(" "),t("code",[o._v("module: oatpp")]),t("br"),o._v(" "),t("code",[o._v('#include "oatpp/core/base/memory/ObjectPool.hpp"')])]),o._v(" "),t("h2",{attrs:{id:"shared-object-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared-object-pool"}},[o._v("#")]),o._v(" SHARED_OBJECT_POOL")]),o._v(" "),t("p",[o._v("Macro to declare object pool class which uses "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/memory/Allocator/#poolsharedobjectallocator"}},[o._v("oatpp::base::memory::PoolSharedObjectAllocator")]),o._v(" to allocate objects. "),t("ul",[t("li",[t("strong",[o._v("@param")]),o._v(" NAME - name of the memory pool. ")]),t("li",[t("strong",[o._v("@param")]),o._v(" TYPE - type of the object. ")]),t("li",[t("strong",[o._v("@param")]),o._v(" CHUNK_SIZE - chunk size for "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[o._v("oatpp::base::memory::MemoryPool")]),o._v(". ")],1)])],1),o._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[o._v("#"),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[o._v("define")]),o._v(" SHARED_OBJECT_POOL(NAME, TYPE, CHUNK_SIZE)")]),o._v("\n")])])]),t("h2",{attrs:{id:"shared-object-pool-thread-local"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared-object-pool-thread-local"}},[o._v("#")]),o._v(" SHARED_OBJECT_POOL_THREAD_LOCAL")]),o._v(" "),t("p",[o._v("Macro to declare object pool class which uses "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/memory/Allocator/#threadlocalpoolsharedobjectallocator"}},[o._v("oatpp::base::memory::ThreadLocalPoolSharedObjectAllocator")]),o._v(" to allocate objects. "),t("ul",[t("li",[t("strong",[o._v("@param")]),o._v(" NAME - name of the memory pool. ")]),t("li",[t("strong",[o._v("@param")]),o._v(" TYPE - type of the object. ")]),t("li",[t("strong",[o._v("@param")]),o._v(" CHUNK_SIZE - chunk size for "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[o._v("oatpp::base::memory::MemoryPool")]),o._v(". ")],1)])],1),o._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[o._v("#"),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[o._v("define")]),o._v(" SHARED_OBJECT_POOL_THREAD_LOCAL(NAME, TYPE, CHUNK_SIZE)")]),o._v("\n")])])]),t("h2",{attrs:{id:"object-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-pool"}},[o._v("#")]),o._v(" OBJECT_POOL")]),o._v(" "),t("p",[o._v("Macro to declare: "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[o._v("oatpp::base::memory::MemoryPool")]),o._v(" for object, plus class-specific operators "),t("code",[o._v("static void* operator new(std::size_t sz)")]),o._v(", "),t("code",[o._v("static void operator delete(void* ptr, std::size_t sz)")]),o._v(", "),t("code",[o._v("static void* operator new(std::size_t sz, void* entry)")]),o._v(", "),t("code",[o._v("static void operator delete(void* ptr, void* entry)")]),o._v(". "),t("ul",[t("li",[t("strong",[o._v("@param")]),o._v(" NAME - name of the memory pool. ")]),t("li",[t("strong",[o._v("@param")]),o._v(" TYPE - type of the object. ")]),t("li",[t("strong",[o._v("@param")]),o._v(" CHUNK_SIZE - chunk size for "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[o._v("oatpp::base::memory::MemoryPool")]),o._v(". ")],1)])],1),o._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[o._v("#"),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[o._v("define")]),o._v(" OBJECT_POOL(POOL_NAME, TYPE, CHUNK_SIZE)")]),o._v("\n")])])]),t("h2",{attrs:{id:"object-pool-thread-local"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-pool-thread-local"}},[o._v("#")]),o._v(" OBJECT_POOL_THREAD_LOCAL")]),o._v(" "),t("p",[o._v("Macro to declare: "),t("code",[o._v("thread_local")]),o._v(" "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[o._v("oatpp::base::memory::MemoryPool")]),o._v(" for object, plus class-specific operators "),t("br"),o._v(" "),t("code",[o._v("static void* operator new(std::size_t sz)")]),o._v(", "),t("code",[o._v("static void operator delete(void* ptr, std::size_t sz)")]),o._v(", "),t("br"),o._v(" "),t("code",[o._v("static void* operator new(std::size_t sz, void* entry)")]),o._v(", "),t("code",[o._v("static void operator delete(void* ptr, void* entry)")]),o._v(". "),t("br"),o._v(" "),t("em",[o._v("Memory pool is NOT "),t("code",[o._v("thread_local")]),o._v(" if built with "),t("code",[o._v("-DOATPP_COMPAT_BUILD_NO_THREAD_LOCAL")]),o._v(" flag")]),o._v(" "),t("ul",[t("li",[t("strong",[o._v("@param")]),o._v(" NAME - name of the memory pool. ")]),t("li",[t("strong",[o._v("@param")]),o._v(" TYPE - type of the object. ")]),t("li",[t("strong",[o._v("@param")]),o._v(" CHUNK_SIZE - chunk size for "),t("RouterLink",{attrs:{to:"/api/latest/oatpp/core/base/memory/MemoryPool/#memorypool"}},[o._v("oatpp::base::memory::MemoryPool")]),o._v(". ")],1)])],1),o._v(" "),t("div",{staticClass:"language-cpp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[o._v("#"),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[o._v("define")]),o._v(" OBJECT_POOL_THREAD_LOCAL(POOL_NAME, TYPE, CHUNK_SIZE)")]),o._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);