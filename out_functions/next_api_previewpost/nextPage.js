module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "wRXW");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/F5":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/api-utils");

/***/ }),

/***/ "0Cqj":
/***/ (function(module, exports, __webpack_require__) {

// use commonjs so it can be required without transpiling
const path = __webpack_require__("oyvS");

const normalizeId = id => {
  if (!id) return id;
  if (id.length === 36) return id;

  if (id.length !== 32) {
    throw new Error(`Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`);
  }

  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(16, 4)}-${id.substr(20)}`;
};

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID);
const API_ENDPOINT = 'https://www.notion.so/api/v3';
const BLOG_INDEX_CACHE = path.resolve('.blog_index_data');
module.exports = {
  NOTION_TOKEN,
  BLOG_INDEX_ID,
  API_ENDPOINT,
  BLOG_INDEX_CACHE
};

/***/ }),

/***/ "3fKi":
/***/ (function(module, exports) {

module.exports = require("@next/env");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "5Phu":
/***/ (function(module, exports) {

module.exports = require("github-slugger");

/***/ }),

/***/ "AO39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBlogLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDateStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postIsPublished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeSlug; });
const getBlogLink = slug => {
  return `/blog/${slug}`;
};
const getDateStr = date => {
  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  });
};
const postIsPublished = post => {
  return post.Published === 'Yes';
};
const normalizeSlug = slug => {
  if (typeof slug !== 'string') return slug;
  let startingSlash = slug.startsWith('/');
  let endingSlash = slug.endsWith('/');

  if (startingSlash) {
    slug = slug.substr(1);
  }

  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1);
  }

  return startingSlash || endingSlash ? normalizeSlug(slug) : slug;
};

/***/ }),

/***/ "GX0O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    

    /* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
      return Promise.all([])
    });
  

/***/ }),

/***/ "Jt6k":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/path-match");

/***/ }),

/***/ "KD/O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_notion_getPageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("faLw");
/* harmony import */ var _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ToMw");
/* harmony import */ var _lib_blog_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AO39");



/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (typeof req.query.token !== 'string') {
    return res.status(401).json({
      message: 'invalid token'
    });
  }

  if (req.query.token !== process.env.NOTION_TOKEN) {
    return res.status(404).json({
      message: 'not authorized'
    });
  }

  if (typeof req.query.slug !== 'string') {
    return res.status(401).json({
      message: 'invalid slug'
    });
  }

  const postsTable = await Object(_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  const post = postsTable[req.query.slug];

  if (!post) {
    console.log(`Failed to find post for slug: ${req.query.slug}`);
    return res.status(404).json({
      message: `no post found for ${req.query.slug}`
    });
  }

  const postData = await Object(_lib_notion_getPageData__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(post.id);

  if (!postData) {
    return res.status(401).json({
      message: 'Invalid slug'
    });
  }

  res.setPreviewData({});
  res.writeHead(307, {
    Location: Object(_lib_blog_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getBlogLink */ "a"])(post.Slug)
  });
  res.end();
});

/***/ }),

/***/ "KqAr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    

    /* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
      return Promise.all([])
    });
  

/***/ }),

/***/ "SZzo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rpc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getError; });
/* unused harmony export getJSONHeaders */
/* unused harmony export getBodyOrNull */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return values; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Cqj");
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_constants__WEBPACK_IMPORTED_MODULE_1__);


async function rpc(fnName, body) {
  if (!_server_constants__WEBPACK_IMPORTED_MODULE_1__["NOTION_TOKEN"]) {
    throw new Error('NOTION_TOKEN is not set in env');
  }

  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_server_constants__WEBPACK_IMPORTED_MODULE_1__["API_ENDPOINT"]}/${fnName}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie: `token_v2=${_server_constants__WEBPACK_IMPORTED_MODULE_1__["NOTION_TOKEN"]}`
    },
    body: JSON.stringify(body)
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(await getError(res));
  }
}
async function getError(res) {
  return `Notion API error (${res.status}) \n${getJSONHeaders(res)}\n ${await getBodyOrNull(res)}`;
}
function getJSONHeaders(res) {
  return JSON.stringify(res.headers.raw());
}
function getBodyOrNull(res) {
  try {
    return res.text();
  } catch (err) {
    return null;
  }
}
function values(obj) {
  const vals = [];
  Object.keys(obj).forEach(key => {
    vals.push(obj[key]);
  });
  return vals;
}

/***/ }),

/***/ "Skye":
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":3,\"pages404\":true,\"basePath\":\"\",\"redirects\":[{\"source\":\"/:path+/\",\"destination\":\"/:path+\",\"statusCode\":308,\"regex\":\"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$\"}],\"rewrites\":[],\"headers\":[],\"dynamicRoutes\":[{\"page\":\"/blog/[slug]\",\"regex\":\"^/blog/([^/]+?)(?:/)?$\",\"routeKeys\":{\"slug\":\"slug\"},\"namedRegex\":\"^/blog/(?<slug>[^/]+?)(?:/)?$\"}],\"dataRoutes\":[]}");

/***/ }),

/***/ "ToMw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getBlogIndex; });

// EXTERNAL MODULE: ./src/lib/notion/rpc.ts
var rpc = __webpack_require__("SZzo");

// EXTERNAL MODULE: external "github-slugger"
var external_github_slugger_ = __webpack_require__("5Phu");
var external_github_slugger_default = /*#__PURE__*/__webpack_require__.n(external_github_slugger_);

// CONCATENATED MODULE: ./src/lib/notion/queryCollection.ts

function queryCollection({
  collectionId,
  collectionViewId,
  loader = {},
  query = {}
}) {
  const {
    limit = 999,
    // TODO: figure out Notion's way of handling pagination
    loadContentCover = true,
    type = 'table',
    userLocale = 'en',
    userTimeZone = 'America/Phoenix'
  } = loader;
  const {
    aggregate = [{
      aggregation_type: 'count',
      id: 'count',
      property: 'title',
      type: 'title',
      view_type: 'table'
    }],
    filter = [],
    filter_operator = 'and',
    sort = []
  } = query;
  return Object(rpc["a" /* default */])('queryCollection', {
    collectionId,
    collectionViewId,
    loader: {
      limit,
      loadContentCover,
      type,
      userLocale,
      userTimeZone
    },
    query: {
      aggregate,
      filter,
      filter_operator,
      sort
    }
  });
}
// EXTERNAL MODULE: ./src/lib/blog-helpers.ts
var blog_helpers = __webpack_require__("AO39");

// CONCATENATED MODULE: ./src/lib/notion/getTableData.ts




async function loadTable(collectionBlock, isPosts = false) {
  const slugger = new external_github_slugger_default.a();
  const {
    value
  } = collectionBlock;
  let table = {};
  const col = await queryCollection({
    collectionId: value.collection_id,
    collectionViewId: value.view_ids[0]
  });
  const entries = Object(rpc["c" /* values */])(col.recordMap.block).filter(block => {
    return block.value && block.value.parent_id === value.collection_id;
  });
  const colId = Object.keys(col.recordMap.collection)[0];
  const schema = col.recordMap.collection[colId].value.schema;
  const schemaKeys = Object.keys(schema);

  for (const entry of entries) {
    const props = entry.value && entry.value.properties;
    const row = {};
    if (!props) continue;

    if (entry.value.content) {
      row.id = entry.value.id;
    }

    schemaKeys.forEach(key => {
      // might be undefined
      let val = props[key] && props[key].map(item => {
        if (item.length == 1) {
          return item[0];
        }

        return item;
      });

      if (val.length == 1) {
        val = val[0];
      } // authors and blocks are centralized


      if (val && props[key][0][1]) {
        const type = props[key][0][1][0];

        switch (type[0]) {
          case 'a':
            // link
            val = type[1];
            break;

          case 'u':
            // user
            val = props[key].filter(arr => arr.length > 1).map(arr => arr[1][0][1]);
            break;

          case 'p':
            // page (block)
            const page = col.recordMap.block[type[1]];
            row.id = page.value.id;
            val = page.value.properties.title[0][0];
            break;

          case 'd':
            // date
            // start_date: 2019-06-18
            // start_time: 07:00
            // time_zone: Europe/Berlin, America/Los_Angeles
            if (!type[1].start_date) {
              break;
            } // initial with provided date


            const providedDate = new Date(type[1].start_date + ' ' + (type[1].start_time || '')).getTime(); // calculate offset from provided time zone

            const timezoneOffset = new Date(new Date().toLocaleString('en-US', {
              timeZone: type[1].time_zone
            })).getTime() - new Date().getTime(); // initialize subtracting time zone offset

            val = new Date(providedDate - timezoneOffset).getTime();
            break;

          default:
            console.error('unknown type', type[0], type);
            break;
        }
      }

      if (schema[key].name == "Preview") {
        if (typeof val === 'string') {
          val = [val];
        } //   for (const i in val) {
        //     if (typeof val[i] === 'string') {
        //       val[i] = [val[i]]
        //     }
        //   }

      }

      if (typeof val === 'string') {
        val = val.trim();
      }

      row[schema[key].name] = val || null;
    }); // auto-generate slug from title

    row.Slug = Object(blog_helpers["c" /* normalizeSlug */])(row.Slug || slugger.slug(row.Page || ''));
    const key = row.Slug;
    if (isPosts && !key) continue;

    if (key) {
      table[key] = row;
    } else {
      if (!Array.isArray(table)) table = [];
      table.push(row);
    }
  }

  console.log(table);
  return table;
}
// EXTERNAL MODULE: ./src/lib/fs-helpers.ts
var fs_helpers = __webpack_require__("w0bb");

// EXTERNAL MODULE: ./src/lib/notion/server-constants.js
var server_constants = __webpack_require__("0Cqj");

// CONCATENATED MODULE: ./src/lib/notion/getBlogIndex.ts




async function getBlogIndex(previews = true) {
  let postsTable = null;
  const useCache = process.env.USE_CACHE === 'true';
  const cacheFile = `${server_constants["BLOG_INDEX_CACHE"]}${previews ? '_previews' : ''}`;

  if (useCache) {
    try {
      postsTable = JSON.parse(await Object(fs_helpers["a" /* readFile */])(cacheFile, 'utf8'));
    } catch (_) {
      /* not fatal */
    }
  }

  if (!postsTable) {
    try {
      const data = await Object(rpc["a" /* default */])('loadPageChunk', {
        pageId: server_constants["BLOG_INDEX_ID"],
        limit: 999,
        // TODO: figure out Notion's way of handling pagination
        cursor: {
          stack: []
        },
        chunkNumber: 0,
        verticalColumns: false
      }); // Parse table with posts

      const tableBlock = Object(rpc["c" /* values */])(data.recordMap.block).find(block => block.value.type === 'collection_view');
      postsTable = await loadTable(tableBlock, true);
    } catch (err) {
      console.warn(err);
      console.warn("Failed to load Notion posts.");
      return {};
    }

    if (useCache) {
      Object(fs_helpers["b" /* writeFile */])(cacheFile, JSON.stringify(postsTable), 'utf8').catch(() => {});
    }
  }

  return postsTable;
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "faLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPageData; });
/* unused harmony export loadPageChunk */
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SZzo");

async function getPageData(pageId) {
  try {
    const data = await loadPageChunk({
      pageId
    });
    const blocks = Object(_rpc__WEBPACK_IMPORTED_MODULE_0__[/* values */ "c"])(data.recordMap.block);

    if (blocks[0] && blocks[0].value.content) {
      // remove table blocks
      blocks.splice(0, 3);
    }

    return {
      blocks
    };
  } catch (err) {
    console.error(`Failed to load pageData for ${pageId}`, err);
    return {
      blocks: []
    };
  }
}
function loadPageChunk({
  pageId,
  limit = 100,
  cursor = {
    stack: []
  },
  chunkNumber = 0,
  verticalColumns = false
}) {
  return Object(_rpc__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('loadPageChunk', {
    pageId,
    limit,
    cursor,
    chunkNumber,
    verticalColumns
  });
}

/***/ }),

/***/ "jK02":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "mctB":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/node-polyfill-fetch");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tO8J":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/prepare-destination");

/***/ }),

/***/ "w0bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return readFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return writeFile; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jK02");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


const readFile = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFile);
const writeFile = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile);

/***/ }),

/***/ "wRXW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_plugin_loader_middleware_on_init_server___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GX0O");
/* harmony import */ var next_plugin_loader_middleware_on_error_server___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KqAr");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mctB");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2__);

      
      
      

      
    const { processEnv } = __webpack_require__("3fKi")
    processEnv([])
  
      
      const runtimeConfig = {}
      
      const { parse: parseUrl } = __webpack_require__("bzos")
      const { apiResolver } = __webpack_require__("+/F5")
      const { normalizeLocalePath } = __webpack_require__("zmA9")
      const i18n = {}

      
    const { rewrites } = __webpack_require__("Skye")
    const { pathToRegexp, default: pathMatch } = __webpack_require__("Jt6k")
  

      

      

      
    const getCustomRouteMatcher = pathMatch(true)
    const prepareDestination = __webpack_require__("tO8J").default

    function handleRewrites(parsedUrl) {
      for (const rewrite of rewrites) {
        const matcher = getCustomRouteMatcher(rewrite.source)
        const params = matcher(parsedUrl.pathname)

        if (params) {
          const { parsedDestination } = prepareDestination(
            rewrite.destination,
            params,
            parsedUrl.query,
            true
          )

          Object.assign(parsedUrl.query, parsedDestination.query)
          delete parsedDestination.query

          Object.assign(parsedUrl, parsedDestination)

          let fsPathname = parsedUrl.pathname

          

          

          if (fsPathname === '/api/preview-post'){
            break
          }
          
        }
      }

      return parsedUrl
    }
  

      /* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
        try {
          await Object(next_plugin_loader_middleware_on_init_server___WEBPACK_IMPORTED_MODULE_0__["default"])()

          // We need to trust the dynamic route params from the proxy
          // to ensure we are using the correct values
          const trustQuery = req.headers['x-vercel-id']
          const parsedUrl = handleRewrites(parseUrl(req.url, true))

          if (parsedUrl.query.nextInternalLocale) {
            detectedLocale = parsedUrl.query.nextInternalLocale
            delete parsedUrl.query.nextInternalLocale
          }

          let hasValidParams = true

          
          

          const params = {}

          const resolver = await __webpack_require__("KD/O")
          await apiResolver(
            req,
            res,
            Object.assign({}, parsedUrl.query, params ),
            resolver,
            {previewModeId:"cd99cbae336d9afdff52a3700206fe49",previewModeSigningKey:"c86cbea517e98a79ea4c59aebc8c172f9f87ca75df0229327f2f2e7b0d6dc2f0",previewModeEncryptionKey:"ce05b24796e4ae5c82fa4a71190f6433a844b47802a8c0de809398515046269a"},
            true,
            next_plugin_loader_middleware_on_error_server___WEBPACK_IMPORTED_MODULE_1__["default"]
          )
        } catch (err) {
          console.error(err)
          await Object(next_plugin_loader_middleware_on_error_server___WEBPACK_IMPORTED_MODULE_1__["default"])(err)

          // TODO: better error for DECODE_FAILED?
          if (err.code === 'DECODE_FAILED') {
            res.statusCode = 400
            res.end('Bad Request')
          } else {
            // Throw the error to crash the serverless function
            throw err
          }
        }
      });
    

/***/ }),

/***/ "zmA9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/i18n/normalize-locale-path");

/***/ })

/******/ });