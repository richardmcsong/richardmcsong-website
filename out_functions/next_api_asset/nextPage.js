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
/******/ 	return __webpack_require__(__webpack_require__.s = "zUWo");
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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "d5nJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ notionApi; });

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: ./src/lib/notion/rpc.ts
var rpc = __webpack_require__("SZzo");

// EXTERNAL MODULE: ./src/lib/notion/server-constants.js
var server_constants = __webpack_require__("0Cqj");

// CONCATENATED MODULE: ./src/lib/notion/getNotionAssetUrls.ts



async function getNotionAsset(res, assetUrl, blockId) {
  const requestURL = `${server_constants["API_ENDPOINT"]}/getSignedFileUrls`;
  const assetRes = await external_node_fetch_default()(requestURL, {
    method: 'POST',
    headers: {
      cookie: `token_v2=${server_constants["NOTION_TOKEN"]}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      urls: [{
        url: assetUrl,
        permissionRecord: {
          table: 'block',
          id: blockId
        }
      }]
    })
  });

  if (assetRes.ok) {
    return assetRes.json();
  } else {
    console.log('bad request', assetRes.status);
    res.json({
      status: 'error',
      message: 'failed to load Notion asset'
    });
    throw new Error(await Object(rpc["b" /* getError */])(assetRes));
  }
}
// CONCATENATED MODULE: ./src/lib/notion/utils.ts
function setHeaders(req, res) {
  // set SPR/CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'pragma');

  if (req.method === 'OPTIONS') {
    res.status(200);
    res.end();
    return true;
  }

  return false;
}
async function handleData(res, data) {
  data = data || {
    status: 'error',
    message: 'unhandled request'
  };
  res.status(data.status !== 'error' ? 200 : 500);
  res.json(data);
}
function handleError(res, error) {
  console.error(error);
  res.status(500).json({
    status: 'error',
    message: 'an error occurred processing request'
  });
}
// CONCATENATED MODULE: ./src/pages/api/asset.ts
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



async function notionApi(req, res) {
  if (setHeaders(req, res)) return;

  try {
    const {
      assetUrl,
      blockId
    } = req.query;

    if (!assetUrl || !blockId) {
      handleData(res, {
        status: 'error',
        message: 'asset url or blockId missing'
      });
    } else {
      // we need to re-encode it since it's decoded when added to req.query
      const _await$getNotionAsset = await getNotionAsset(res, assetUrl, blockId),
            {
        signedUrls = []
      } = _await$getNotionAsset,
            urlsResponse = _objectWithoutProperties(_await$getNotionAsset, ["signedUrls"]);

      if (signedUrls.length === 0) {
        console.error('Failed to get signedUrls', urlsResponse);
        return handleData(res, {
          status: 'error',
          message: 'Failed to get asset URL'
        });
      }

      res.status(307);
      res.setHeader('Location', signedUrls.pop());
      res.end();
    }
  } catch (error) {
    handleError(res, error);
  }
}

/***/ }),

/***/ "mctB":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/node-polyfill-fetch");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tO8J":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/prepare-destination");

/***/ }),

/***/ "zUWo":
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

          

          

          if (fsPathname === '/api/asset'){
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

          const resolver = await __webpack_require__("d5nJ")
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