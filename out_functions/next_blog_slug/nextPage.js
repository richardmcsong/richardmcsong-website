module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		9: 0,
/******/ 		1: 0,
/******/ 		2: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"11":"5450487509197719da20","12":"3caa455fd9cb056db484","13":"ddd11547d596e3ad9c3c"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "Ns2u");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/F5":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/api-utils");

/***/ }),

/***/ "+AD9":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-css");

/***/ }),

/***/ "/43j":
/***/ (function(module, exports) {

module.exports = require("@zeit/react-jsx-parser");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

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

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3fKi":
/***/ (function(module, exports) {

module.exports = require("@next/env");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4lsC":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/send-payload");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "5Phu":
/***/ (function(module, exports) {

module.exports = require("github-slugger");

/***/ }),

/***/ "67Bq":
/***/ (function(module) {

module.exports = JSON.parse("{\"./code\":[{\"id\":\"/jkW\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"0Bsm\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"0G5g\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"284h\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"3WeD\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"3wub\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"6D7l\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"7W2i\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"FYa8\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"J4zp\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"Lab5\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"Nh2W\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"Nsbk\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"PJYZ\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"Qetd\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"S3md\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"SksO\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"TqRt\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"W8MJ\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"WkPL\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"X24+\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"YTqd\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"ZhPi\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"a1gu\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"b48C\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"cDf5\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"dZ6Y\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"elyg\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"fcRV\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"g/15\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"gguc\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"hS4m\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"ls82\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"lwsE\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"m0LI\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"nOHt\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"o0o1\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"qOIg\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"sXyB\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"wTVA\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"wkBG\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"wkBT\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"yLpj\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"yXPU\",\"file\":\"static/chunks/commons.ad8df7247a86533fad63.js\"},{\"id\":\"QWvX\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"RX2a\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"TpNv\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"ZgVT\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"bPOv\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"jHpe\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"kr82\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"wPEV\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"y1X9\",\"file\":\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\"},{\"id\":\"\",\"file\":\"static/css/1e776c3baba392626f32.css\"},{\"id\":\"CjHp\",\"file\":\"static/css/1e776c3baba392626f32.css\"},{\"id\":\"F1I5\",\"file\":\"static/css/1e776c3baba392626f32.css\"},{\"id\":\"\",\"file\":\"static/chunks/17.79f41efbbc52efdd9292.js\"},{\"id\":\"CjHp\",\"file\":\"static/chunks/17.79f41efbbc52efdd9292.js\"},{\"id\":\"F1I5\",\"file\":\"static/chunks/17.79f41efbbc52efdd9292.js\"}],\"./counter\":[{\"id\":\"HY/B\",\"file\":\"static/chunks/18.b59c3bea500f74517144.js\"}],\"./equation\":[{\"id\":\"Oy/b\",\"file\":\"static/chunks/b5f2ed29.84395133ac471de9cc42.js\"},{\"id\":\"3zRB\",\"file\":\"static/chunks/19.eeae2aa8b9673c2c4450.js\"}]}");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9wzx":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-route-from-asset-path");

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

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "BNza":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ext_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eDmn");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("OUhe");
/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const navItems = [{
  label: 'Home',
  page: '/'
}, {
  label: 'Blog',
  page: '/blog'
}];

const Header = ({
  titlePre = ''
}) => {
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx("header", {
    className: _styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.header
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, titlePre ? `${titlePre} |` : '', " Richard."), __jsx("meta", {
    name: "description",
    content: "The blog posts of Richard Song"
  }), __jsx("meta", {
    name: "og:title",
    content: "Posts"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@richardmcsong"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  })), __jsx("ul", null, navItems.map(({
    label,
    page,
    link
  }) => __jsx("li", {
    key: label
  }, page ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: page
  }, __jsx("a", {
    className: pathname === page ? 'active' : undefined
  }, label)) : __jsx(_ext_link__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    href: link
  }, label)))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "EXv2":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-clike");

/***/ }),

/***/ "EZ47":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/route-matcher");

/***/ }),

/***/ "Ef+M":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-yaml");

/***/ }),

/***/ "FwDC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.getRedirectStatus=getRedirectStatus;exports.normalizeRouteRegex=normalizeRouteRegex;exports.default=loadCustomRoutes;exports.allowedStatusCodes=void 0;var pathToRegexp=_interopRequireWildcard(__webpack_require__("zOyy"));var _url=__webpack_require__("bzos");var _constants=__webpack_require__("UJjI");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}const allowedStatusCodes=new Set([301,302,303,307,308]);exports.allowedStatusCodes=allowedStatusCodes;function getRedirectStatus(route){return route.statusCode||(route.permanent?_constants.PERMANENT_REDIRECT_STATUS:_constants.TEMPORARY_REDIRECT_STATUS);}function normalizeRouteRegex(regex){// clean up un-necessary escaping from regex.source which turns / into \\/
return regex.replace(/\\\//g,'/');}function checkRedirect(route){const invalidParts=[];let hadInvalidStatus=false;if(route.statusCode&&!allowedStatusCodes.has(route.statusCode)){hadInvalidStatus=true;invalidParts.push(`\`statusCode\` is not undefined or valid statusCode`);}if(typeof route.permanent!=='boolean'&&!route.statusCode){invalidParts.push(`\`permanent\` is not set to \`true\` or \`false\``);}return{invalidParts,hadInvalidStatus};}function checkHeader(route){const invalidParts=[];if(!Array.isArray(route.headers)){invalidParts.push('`headers` field must be an array');}else{for(const header of route.headers){if(!header||typeof header!=='object'){invalidParts.push("`headers` items must be object with { key: '', value: '' }");break;}if(typeof header.key!=='string'){invalidParts.push('`key` in header item must be string');break;}if(typeof header.value!=='string'){invalidParts.push('`value` in header item must be string');break;}}}return invalidParts;}function tryParsePath(route,handleUrl){const result={};let routePath=route;try{if(handleUrl){const parsedDestination=(0,_url.parse)(route,true);routePath=`${parsedDestination.pathname}${parsedDestination.hash||''}`;}// Make sure we can parse the source properly
result.tokens=pathToRegexp.parse(routePath);pathToRegexp.tokensToRegexp(result.tokens);}catch(err){// If there is an error show our err.sh but still show original error or a formatted one if we can
const errMatches=err.message.match(/at (\d{0,})/);if(errMatches){const position=parseInt(errMatches[1],10);console.error(`\nError parsing \`${route}\` `+`https://err.sh/vercel/next.js/invalid-route-source\n`+`Reason: ${err.message}\n\n`+`  ${routePath}\n`+`  ${new Array(position).fill(' ').join('')}^\n`);}else{console.error(`\nError parsing ${route} https://err.sh/vercel/next.js/invalid-route-source`,err);}result.error=true;}return result;}function checkCustomRoutes(routes,type){if(!Array.isArray(routes)){throw new Error(`${type}s must return an array, received ${typeof routes}.\n`+`See here for more info: https://err.sh/next.js/routes-must-be-array`);}let numInvalidRoutes=0;let hadInvalidStatus=false;const isRedirect=type==='redirect';let allowedKeys;if(type==='rewrite'||isRedirect){allowedKeys=new Set(['source','destination','basePath','locale',...(isRedirect?['statusCode','permanent']:[])]);}else{allowedKeys=new Set(['source','headers','basePath','locale']);}for(const route of routes){if(!route||typeof route!=='object'){console.error(`The route ${JSON.stringify(route)} is not a valid object with \`source\` and \`${type==='header'?'headers':'destination'}\``);numInvalidRoutes++;continue;}if(type==='rewrite'&&route.basePath===false&&!(route.destination.startsWith('http://')||route.destination.startsWith('https://'))){console.error(`The route ${route.source} rewrites urls outside of the basePath. Please use a destination that starts with \`http://\` or \`https://\` https://err.sh/vercel/next.js/invalid-external-rewrite.md`);numInvalidRoutes++;continue;}const keys=Object.keys(route);const invalidKeys=keys.filter(key=>!allowedKeys.has(key));const invalidParts=[];if(typeof route.basePath!=='undefined'&&route.basePath!==false){invalidParts.push('`basePath` must be undefined or false');}if(typeof route.locale!=='undefined'&&route.locale!==false){invalidParts.push('`locale` must be undefined or false');}if(!route.source){invalidParts.push('`source` is missing');}else if(typeof route.source!=='string'){invalidParts.push('`source` is not a string');}else if(!route.source.startsWith('/')){invalidParts.push('`source` does not start with /');}if(type==='header'){invalidParts.push(...checkHeader(route));}else{let _route=route;if(!_route.destination){invalidParts.push('`destination` is missing');}else if(typeof _route.destination!=='string'){invalidParts.push('`destination` is not a string');}else if(type==='rewrite'&&!_route.destination.match(/^(\/|https:\/\/|http:\/\/)/)){invalidParts.push('`destination` does not start with `/`, `http://`, or `https://`');}}if(type==='redirect'){const result=checkRedirect(route);hadInvalidStatus=hadInvalidStatus||result.hadInvalidStatus;invalidParts.push(...result.invalidParts);}let sourceTokens;if(typeof route.source==='string'&&route.source.startsWith('/')){// only show parse error if we didn't already show error
// for not being a string
const{tokens,error}=tryParsePath(route.source);if(error){invalidParts.push('`source` parse failed');}sourceTokens=tokens;}// make sure no unnamed patterns are attempted to be used in the
// destination as this can cause confusion and is not allowed
if(typeof route.destination==='string'){if(route.destination.startsWith('/')&&Array.isArray(sourceTokens)){const unnamedInDest=new Set();for(const token of sourceTokens){if(typeof token==='object'&&typeof token.name==='number'){const unnamedIndex=new RegExp(`:${token.name}(?!\\d)`);if(route.destination.match(unnamedIndex)){unnamedInDest.add(`:${token.name}`);}}}if(unnamedInDest.size>0){invalidParts.push(`\`destination\` has unnamed params ${[...unnamedInDest].join(', ')}`);}else{const{tokens:destTokens,error:destinationParseFailed}=tryParsePath(route.destination,true);if(destinationParseFailed){invalidParts.push('`destination` parse failed');}else{const sourceSegments=new Set(sourceTokens.map(item=>typeof item==='object'&&item.name).filter(Boolean));const invalidDestSegments=new Set();for(const token of destTokens){if(typeof token==='object'&&!sourceSegments.has(token.name)){invalidDestSegments.add(token.name);}}if(invalidDestSegments.size){invalidParts.push(`\`destination\` has segments not in \`source\` (${[...invalidDestSegments].join(', ')})`);}}}}}const hasInvalidKeys=invalidKeys.length>0;const hasInvalidParts=invalidParts.length>0;if(hasInvalidKeys||hasInvalidParts){console.error(`${invalidParts.join(', ')}${invalidKeys.length?(hasInvalidParts?',':'')+` invalid field${invalidKeys.length===1?'':'s'}: `+invalidKeys.join(','):''} for route ${JSON.stringify(route)}`);numInvalidRoutes++;}}if(numInvalidRoutes>0){if(hadInvalidStatus){console.error(`\nValid redirect statusCode values are ${[...allowedStatusCodes].join(', ')}`);}console.error();throw new Error(`Invalid ${type}${numInvalidRoutes===1?'':'s'} found`);}}async function loadRedirects(config){if(typeof config.redirects!=='function'){return[];}const _redirects=await config.redirects();checkCustomRoutes(_redirects,'redirect');return _redirects;}async function loadRewrites(config){if(typeof config.rewrites!=='function'){return[];}const _rewrites=await config.rewrites();checkCustomRoutes(_rewrites,'rewrite');return _rewrites;}async function loadHeaders(config){if(typeof config.headers!=='function'){return[];}const _headers=await config.headers();checkCustomRoutes(_headers,'header');return _headers;}async function loadCustomRoutes(config){const[headers,rewrites,redirects]=await Promise.all([loadHeaders(config),loadRewrites(config),loadRedirects(config)]);if(config.trailingSlash){redirects.unshift({source:'/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',destination:'/:file',permanent:true,locale:config.i18n?false:undefined},{source:'/:notfile((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+)',destination:'/:notfile/',permanent:true,locale:config.i18n?false:undefined});if(config.basePath){redirects.unshift({source:config.basePath,destination:config.basePath+'/',permanent:true,basePath:false,locale:config.i18n?false:undefined});}}else{redirects.unshift({source:'/:path+/',destination:'/:path+',permanent:true,locale:config.i18n?false:undefined});if(config.basePath){redirects.unshift({source:config.basePath+'/',destination:config.basePath,permanent:true,basePath:false,locale:config.i18n?false:undefined});}}return{headers,rewrites,redirects};}
//# sourceMappingURL=load-custom-routes.js.map

/***/ }),

/***/ "GX0O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    

    /* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
      return Promise.all([])
    });
  

/***/ }),

/***/ "JGLs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNotionUsers; });
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SZzo");

async function getNotionUsers(ids) {
  const {
    results = []
  } = await Object(_rpc__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('getRecordValues', {
    requests: ids.map(id => ({
      id,
      table: 'notion_user'
    }))
  });
  const users = {};

  for (const result of results) {
    const {
      value
    } = result || {
      value: {}
    };
    const {
      given_name,
      family_name
    } = value;
    let full_name = given_name || '';

    if (family_name) {
      full_name = `${full_name} ${family_name}`;
    }

    users[value.id] = {
      full_name
    };
  }

  return {
    users
  };
}

/***/ }),

/***/ "Jt6k":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/path-match");

/***/ }),

/***/ "KK5V":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/render");

/***/ }),

/***/ "KqAr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    

    /* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
      return Promise.all([])
    });
  

/***/ }),

/***/ "LZ9C":
/***/ (function(module) {

module.exports = JSON.parse("{\"polyfillFiles\":[\"static/chunks/polyfills-f45e75cb8fe5039fd439.js\"],\"devFiles\":[],\"ampDevFiles\":[],\"lowPriorityFiles\":[\"static/PM-eVhKwoaZblQCky24sm/_buildManifest.js\",\"static/PM-eVhKwoaZblQCky24sm/_ssgManifest.js\"],\"pages\":{\"/\":[\"static/chunks/main-5bbed788d0a23c5c4120.js\",\"static/chunks/webpack-10fa77456f23248f10a8.js\",\"static/chunks/framework.3991bf11582798062b76.js\",\"static/chunks/a9a7754c.b6e45d459889e8e32798.js\",\"static/chunks/cb1608f2.5edc4a95a6dc05457a75.js\",\"static/chunks/commons.ad8df7247a86533fad63.js\",\"static/chunks/778b8c8ff2b5c113838eca6b188c79b41ee7b6aa.d92ed50f94554d34c142.js\",\"static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.bf847b3dd6f3d68e82b1.js\",\"static/css/e568f09f5f43b77b4243.css\",\"static/chunks/pages/index-f3cb33a48273eeb2a914.js\"],\"/_app\":[\"static/chunks/main-5bbed788d0a23c5c4120.js\",\"static/chunks/webpack-10fa77456f23248f10a8.js\",\"static/chunks/framework.3991bf11582798062b76.js\",\"static/chunks/commons.ad8df7247a86533fad63.js\",\"static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.bf847b3dd6f3d68e82b1.js\",\"static/css/5f56881cf21717a9ae1b.css\",\"static/chunks/pages/_app-e0b281a88eb1a228702b.js\"],\"/_error\":[\"static/chunks/main-5bbed788d0a23c5c4120.js\",\"static/chunks/webpack-10fa77456f23248f10a8.js\",\"static/chunks/framework.3991bf11582798062b76.js\",\"static/chunks/commons.ad8df7247a86533fad63.js\",\"static/chunks/pages/_error-4b928d721a33c49a8ee1.js\"],\"/blog\":[\"static/chunks/main-5bbed788d0a23c5c4120.js\",\"static/chunks/webpack-10fa77456f23248f10a8.js\",\"static/chunks/framework.3991bf11582798062b76.js\",\"static/chunks/commons.ad8df7247a86533fad63.js\",\"static/chunks/778b8c8ff2b5c113838eca6b188c79b41ee7b6aa.d92ed50f94554d34c142.js\",\"static/chunks/bfa37fcd0818edd0d3354ea585e5d4d4b3e87fa4.7abcef11b633985e8171.js\",\"static/css/3f5023f5294dea5d43dc.css\",\"static/chunks/pages/blog-13a69cc7118f08f015c3.js\"],\"/blog/[slug]\":[\"static/chunks/main-5bbed788d0a23c5c4120.js\",\"static/chunks/webpack-10fa77456f23248f10a8.js\",\"static/chunks/framework.3991bf11582798062b76.js\",\"static/chunks/commons.ad8df7247a86533fad63.js\",\"static/chunks/8b1bee7783fbff4db5545a1f31bbd8efae96c40e.d49981a575fdbb8d6ba9.js\",\"static/chunks/bfa37fcd0818edd0d3354ea585e5d4d4b3e87fa4.7abcef11b633985e8171.js\",\"static/css/9b1edd633c5cd584c65b.css\",\"static/chunks/pages/blog/[slug]-8a3f2e6f0c6c6cebddc4.js\"]},\"ampFirstPages\":[]}");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "NhTK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/denormalize-page-path");

/***/ }),

/***/ "Ns2u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticParams", function() { return unstable_getStaticParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticProps", function() { return unstable_getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticPaths", function() { return unstable_getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getServerProps", function() { return unstable_getServerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_app", function() { return _app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderReqToHTML", function() { return renderReqToHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var next_plugin_loader_middleware_on_init_server___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GX0O");
/* harmony import */ var next_plugin_loader_middleware_on_error_server___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KqAr");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mctB");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2__);

    
    
    
    const {isResSent} = __webpack_require__("U8mc");

    
    const { processEnv } = __webpack_require__("3fKi")
    processEnv([])
  
    
    const runtimeConfig = {}
    const {parse: parseUrl, format: formatUrl} = __webpack_require__("bzos")
    const {parse: parseQs} = __webpack_require__("8xkj")
    const { renderToHTML } = __webpack_require__("KK5V");
    const { tryGetPreviewData } = __webpack_require__("+/F5");
    const { denormalizePagePath } = __webpack_require__("NhTK")
    const { setLazyProp, getCookieParser } = __webpack_require__("+/F5")
    const {sendPayload} = __webpack_require__("4lsC");
    const {getRedirectStatus} = __webpack_require__("FwDC");
    const {PERMANENT_REDIRECT_STATUS} = __webpack_require__("bsQL")
    const buildManifest = __webpack_require__("LZ9C");
    const reactLoadableManifest = __webpack_require__("67Bq");
    const { normalizeLocalePath } = __webpack_require__("zmA9")
    const i18n = {}

    const appMod = __webpack_require__("hUgY")
    let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

    
    const { getRouteMatcher } = __webpack_require__("EZ47");
      const { getRouteRegex } = __webpack_require__("kj8m");
  
    
    const { rewrites } = __webpack_require__("Skye")
    const { pathToRegexp, default: pathMatch } = __webpack_require__("Jt6k")
  

    const compMod = __webpack_require__("XLqZ")

    let Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
    /* harmony default export */ __webpack_exports__["default"] = (Component);
    let getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
    let getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
    let getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

    // kept for detecting legacy exports
    const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
    const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
    const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
    const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

    
    const dynamicRouteMatcher = getRouteMatcher(getRouteRegex("/blog/[slug]"))
    const defaultRouteMatches = dynamicRouteMatcher("/blog/[slug]")
  
    
      const defaultRouteRegex = getRouteRegex("/blog/[slug]")
    
    
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

          

          

          if (fsPathname === '/blog/[slug]'){
            break
          }
          
            const dynamicParams = dynamicRouteMatcher(fsPathname);            if (dynamicParams) {
              parsedUrl.query = {
                ...parsedUrl.query,
                ...dynamicParams
              }
              break
            }
          
        }
      }

      return parsedUrl
    }
  

    let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
    const _app = App
    async function renderReqToHTML(req, res, renderMode, _renderOpts, _params) {
      let Document
      let Error
      let notFoundMod
      ;[
        getStaticProps,
        getServerSideProps,
        getStaticPaths,
        Component,
        App,
        config,
        { default: Document },
        { default: Error },
        
      ] = await Promise.all([
        getStaticProps,
        getServerSideProps,
        getStaticPaths,
        Component,
        App,
        config,
        __webpack_require__("mT+M"),
        __webpack_require__("/a9y"),
        
      ])

      const fromExport = renderMode === 'export' || renderMode === true;
      const nextStartMode = renderMode === 'passthrough'
      let hasValidParams = true

      
      function normalizeDynamicRouteParams(query) {
        return Object.keys(defaultRouteRegex.groups)
          .reduce((prev, key) => {
            let value = query[key]

            // if the value matches the default value we can't rely
            // on the parsed params, this is used to signal if we need
            // to parse x-now-route-matches or not
            const isDefaultValue = Array.isArray(value)
              ? value.every((val, idx) => val === defaultRouteMatches[key][idx])
              : value === defaultRouteMatches[key]

            if (isDefaultValue || typeof value === 'undefined') {
              hasValidParams = false
            }

            
            if(
              defaultRouteRegex.groups[key].optional &&
              (!value || (
                Array.isArray(value) &&
                value.length === 1 &&
                
                (value[0] === 'index' || value[0] === `[[...${key}]]`)
              ))
            ) {
              value = undefined
              delete query[key]
            }
            
            if (
              value &&
              typeof value === 'string' &&
              defaultRouteRegex.groups[key].repeat
            ) {
              value = value.split('/')
            }

            if (value) {
              prev[key] = value
            }
            return prev
          }, {})
      }
    

      setLazyProp({ req }, 'cookies', getCookieParser(req))

      const options = {
        App,
        Document,
        buildManifest,
        getStaticProps,
        getServerSideProps,
        getStaticPaths,
        reactLoadableManifest,
        canonicalBase: "",
        buildId: "PM-eVhKwoaZblQCky24sm",
        assetPrefix: "",
        runtimeConfig: runtimeConfig.publicRuntimeConfig || {},
        previewProps: {previewModeId:"cd99cbae336d9afdff52a3700206fe49",previewModeSigningKey:"c86cbea517e98a79ea4c59aebc8c172f9f87ca75df0229327f2f2e7b0d6dc2f0",previewModeEncryptionKey:"ce05b24796e4ae5c82fa4a71190f6433a844b47802a8c0de809398515046269a"},
        env: process.env,
        basePath: "",
        ..._renderOpts
      }
      let _nextData = false
      let parsedUrl

      try {
        // We need to trust the dynamic route params from the proxy
        // to ensure we are using the correct values
        const trustQuery = !getStaticProps && req.headers['x-vercel-id']
        let parsedUrl = parseUrl(req.url, true)
        let routeNoAssetPath = parsedUrl.pathname
        const origQuery = Object.assign({}, parsedUrl.query)

        parsedUrl = handleRewrites(parsedUrl)

        

        // remove ?amp=1 from request URL if rendering for export
        if (fromExport && parsedUrl.query.amp) {
          const queryNoAmp = Object.assign({}, origQuery)
          delete queryNoAmp.amp

          req.url = formatUrl({
            ...parsedUrl,
            search: undefined,
            query: queryNoAmp
          })
        }

        if (parsedUrl.pathname.match(/_next\/data/)) {
          const {
            default: getRouteNoAssetPath,
          } = __webpack_require__("9wzx");
          _nextData = true;
          parsedUrl.pathname = getRouteNoAssetPath(
            parsedUrl.pathname.replace(
              new RegExp('/_next/data/PM\-eVhKwoaZblQCky24sm/'),
              '/'
            ),
            '.json'
          );
          routeNoAssetPath = parsedUrl.pathname
        }

        
      const i18n = {}
      const detectedLocale = undefined
      const defaultLocale = undefined
      const locales = undefined
    

        if (parsedUrl.query.nextInternalLocale) {
          detectedLocale = parsedUrl.query.nextInternalLocale
          delete parsedUrl.query.nextInternalLocale
        }

        const renderOpts = Object.assign(
          {
            Component,
            pageConfig: config,
            nextExport: fromExport,
            isDataReq: _nextData,
            locale: detectedLocale,
            locales,
            defaultLocale: i18n.defaultLocale,
          },
          options,
        )

        

        
            const params = (
              fromExport
            ) ? {}
              : normalizeDynamicRouteParams(
                trustQuery
                  ? parsedUrl.query
                  : dynamicRouteMatcher(parsedUrl.pathname)
              )
            

        const nowParams = !hasValidParams && req.headers && req.headers["x-now-route-matches"]
              ? getRouteMatcher(
                  (function() {
                    const { re, groups, routeKeys } = getRouteRegex("/blog/[slug]");
                    return {
                      re: {
                        // Simulate a RegExp match from the `req.url` input
                        exec: str => {
                          const obj = parseQs(str);

                          // favor named matches if available
                          const routeKeyNames = Object.keys(routeKeys)

                          const filterLocaleItem = val => {
                            
                            return false
                          }

                          if (routeKeyNames.every(name => obj[name])) {
                            return routeKeyNames.reduce((prev, keyName) => {
                              const paramName = routeKeys[keyName]

                              if (!filterLocaleItem(obj[keyName])) {
                                prev[groups[paramName].pos] = obj[keyName]
                              }
                              return prev
                            }, {})
                          }

                          return Object.keys(obj).reduce(
                            (prev, key) => {
                              if (!filterLocaleItem(obj[key])) {
                                return Object.assign(prev, {
                                  [key]: obj[key]
                                })
                              }
                              return prev
                            },
                            {}
                          );
                        }
                      },
                      groups
                    };
                  })()
                )(req.headers["x-now-route-matches"])
              : null;
          

        // make sure to set renderOpts to the correct params e.g. _params
        // if provided from worker or params if we're parsing them here
        renderOpts.params = _params || params

        // make sure to normalize req.url on Vercel to strip dynamic params
        // from the query which are added during routing
        
          if (trustQuery) {
            const _parsedUrl = parseUrl(req.url, true)
            delete _parsedUrl.search

            for (const param of Object.keys(defaultRouteRegex.groups)) {
              delete _parsedUrl.query[param]
            }
            req.url = formatUrl(_parsedUrl)
          }
        

        // normalize request URL/asPath for fallback/revalidate pages since the
        // proxy sets the request URL to the output's path for fallback pages
        
            if (nowParams) {
              const _parsedUrl = parseUrl(req.url)

              for (const param of Object.keys(defaultRouteRegex.groups)) {
                const { optional, repeat } = defaultRouteRegex.groups[param]
                let builtParam = `[${repeat ? '...' : ''}${param}]`

                if (optional) {
                  builtParam = `[${builtParam}]`
                }

                const paramIdx = _parsedUrl.pathname.indexOf(builtParam)

                if (paramIdx > -1) {
                  _parsedUrl.pathname = _parsedUrl.pathname.substr(0, paramIdx) +
                    encodeURI(nowParams[param] || '') +
                    _parsedUrl.pathname.substr(paramIdx + builtParam.length)
                }
              }
              parsedUrl.pathname = _parsedUrl.pathname
              req.url = formatUrl(_parsedUrl)
            }
          

        // make sure to normalize asPath for revalidate and _next/data requests
        // since the asPath should match what is shown on the client
        if (
          !fromExport &&
          (getStaticProps || getServerSideProps)
        ) {
          
              // don't include dynamic route params in query while normalizing
              // asPath
              if (trustQuery) {
                delete parsedUrl.search

                for (const param of Object.keys(defaultRouteRegex.groups)) {
                  delete origQuery[param]
                }
              }
            

          parsedUrl.pathname = denormalizePagePath(parsedUrl.pathname)
          renderOpts.resolvedUrl = formatUrl({
            ...parsedUrl,
            query: origQuery
          })

          // For getServerSideProps we need to ensure we use the original URL
          // and not the resolved URL to prevent a hydration mismatch on asPath
          renderOpts.resolvedAsPath = getServerSideProps
            ? formatUrl({
              ...parsedUrl,
              pathname: routeNoAssetPath,
              query: origQuery,
            })
            : renderOpts.resolvedUrl
        }

        const isFallback = parsedUrl.query.__nextFallback

        const previewData = tryGetPreviewData(req, res, options.previewProps)
        const isPreviewMode = previewData !== false
        if (false) {}
        let result = await renderToHTML(req, res, "/blog/[slug]", Object.assign({}, getStaticProps ? { ...(parsedUrl.query.amp ? { amp: '1' } : {}) } : parsedUrl.query, nowParams ? nowParams : params, _params, isFallback ? { __nextFallback: 'true' } : {}), renderOpts)

        if (!renderMode) {
          if (_nextData || getStaticProps || getServerSideProps) {
            if (renderOpts.isNotFound) {
              res.statusCode = 404

              const NotFoundComponent = Error

              const errPathname = "/_error"

              const result = await renderToHTML(req, res, errPathname, parsedUrl.query, Object.assign({}, options, {
                getStaticProps: undefined,
                getStaticPaths: undefined,
                getServerSideProps: undefined,
                Component: NotFoundComponent,
                err: undefined,
                locale: detectedLocale,
                locales,
                defaultLocale,
              }))

              sendPayload(req, res, result, 'html', true, {
                private: isPreviewMode,
                stateful: !!getServerSideProps,
                revalidate: renderOpts.revalidate,
              })
              return null
            } else if (renderOpts.isRedirect && !_nextData) {
              const redirect = {
                destination: renderOpts.pageData.pageProps.__N_REDIRECT,
                statusCode: renderOpts.pageData.pageProps.__N_REDIRECT_STATUS,
                basePath: renderOpts.pageData.pageProps.__N_REDIRECT_BASE_PATH
              }
              const statusCode = getRedirectStatus(redirect)

              if (false) {}

              if (statusCode === PERMANENT_REDIRECT_STATUS) {
                res.setHeader('Refresh', `0;url=${redirect.destination}`)
              }

              res.statusCode = statusCode
              res.setHeader('Location', redirect.destination)
              res.end()
              return null
            } else {
              sendPayload(req, res, _nextData ? JSON.stringify(renderOpts.pageData) : result, _nextData ? 'json' : 'html', true, {
                private: isPreviewMode,
                stateful: !!getServerSideProps,
                revalidate: renderOpts.revalidate,
              })
              return null
            }
          }
        } else if (isPreviewMode) {
          res.setHeader(
            'Cache-Control',
            'private, no-cache, no-store, max-age=0, must-revalidate'
          )
        }

        if (renderMode) return { html: result, renderOpts }
        return result
      } catch (err) {
        if (!parsedUrl) {
          parsedUrl = parseUrl(req.url, true)
        }

        if (err.code === 'ENOENT') {
          res.statusCode = 404
        } else if (err.code === 'DECODE_FAILED') {
          // TODO: better error?
          res.statusCode = 400
        } else {
          console.error('Unhandled error during request:', err)

          // Backwards compat (call getInitialProps in custom error):
          try {
            await renderToHTML(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
              getStaticProps: undefined,
              getStaticPaths: undefined,
              getServerSideProps: undefined,
              Component: Error,
              err: err,
              // Short-circuit rendering:
              isDataReq: true
            }))
          } catch (underErrorErr) {
            console.error('Failed call /_error subroutine, continuing to crash function:', underErrorErr)
          }

          // Throw the error to crash the serverless function
          if (isResSent(res)) {
            console.error('!!! WARNING !!!')
            console.error(
              'Your function crashed, but closed the response before allowing the function to exit.\n' +
              'This may cause unexpected behavior for the next request.'
            )
            console.error('!!! WARNING !!!')
          }
          throw err
        }

        const result = await renderToHTML(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
          getStaticProps: undefined,
          getStaticPaths: undefined,
          getServerSideProps: undefined,
          Component: Error,
          err: res.statusCode === 404 ? undefined : err
        }))
        return result
      }
    }
    async function render (req, res) {
      try {
        await Object(next_plugin_loader_middleware_on_init_server___WEBPACK_IMPORTED_MODULE_0__["default"])()
        const html = await renderReqToHTML(req, res)
        if (html) {
          sendPayload(req, res, html, 'html', {generateEtags: true, poweredByHeader: true})
        }
      } catch(err) {
        console.error(err)
        await Object(next_plugin_loader_middleware_on_error_server___WEBPACK_IMPORTED_MODULE_1__["default"])(err)
        // Throw the error to crash the serverless function
        throw err
      }
    }
  

/***/ }),

/***/ "OUhe":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__WP9pK"
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "TpNv":
/***/ (function(module, exports) {



/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "U8mc":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils");

/***/ }),

/***/ "UJjI":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "VAPu":
/***/ (function(module, exports) {



/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("UJjI");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("kYf9");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__("vHio");

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("AXZJ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && false ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    const cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);
      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(files), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(files), this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", {
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      return /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XLqZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/components/header.tsx
var header = __webpack_require__("BNza");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/styles/heading.module.scss
var heading_module = __webpack_require__("thfK");
var heading_module_default = /*#__PURE__*/__webpack_require__.n(heading_module);

// CONCATENATED MODULE: ./src/components/heading.tsx

var __jsx = external_react_default.a.createElement;


const collectText = (el, acc = []) => {
  if (el) {
    if (typeof el === 'string') acc.push(el);
    if (Array.isArray(el)) el.map(item => collectText(item, acc));
    if (typeof el === 'object') collectText(el.props && el.props.children, acc);
  }

  return acc.join('').trim();
};

const Heading = ({
  children: component,
  id
}) => {
  const children = component.props.children || '';
  let text = children;

  if (null == id) {
    id = collectText(text).toLowerCase().replace(/\s/g, '-').replace(/[?!:]/g, '');
  }

  return __jsx("a", {
    href: `#${id}`,
    id: id,
    className: heading_module_default.a.heading
  }, component);
};

/* harmony default export */ var heading = (Heading);
// EXTERNAL MODULE: ./src/components/dynamic.tsx
var dynamic = __webpack_require__("tjHo");

// EXTERNAL MODULE: external "@zeit/react-jsx-parser"
var react_jsx_parser_ = __webpack_require__("/43j");
var react_jsx_parser_default = /*#__PURE__*/__webpack_require__.n(react_jsx_parser_);

// EXTERNAL MODULE: ./src/styles/blog.module.css
var blog_module = __webpack_require__("qszM");
var blog_module_default = /*#__PURE__*/__webpack_require__.n(blog_module);

// EXTERNAL MODULE: ./src/lib/notion/renderers.ts
var renderers = __webpack_require__("sJtj");

// EXTERNAL MODULE: ./src/lib/notion/getPageData.ts
var getPageData = __webpack_require__("faLw");

// EXTERNAL MODULE: ./src/lib/notion/getBlogIndex.ts + 2 modules
var getBlogIndex = __webpack_require__("ToMw");

// EXTERNAL MODULE: ./src/lib/notion/getNotionUsers.ts
var getNotionUsers = __webpack_require__("JGLs");

// EXTERNAL MODULE: ./src/lib/blog-helpers.ts
var blog_helpers = __webpack_require__("AO39");

// EXTERNAL MODULE: external "prismjs/components/prism-core"
var prism_core_ = __webpack_require__("eLd7");
var prism_core_default = /*#__PURE__*/__webpack_require__.n(prism_core_);

// EXTERNAL MODULE: external "prismjs/components/prism-clike"
var prism_clike_ = __webpack_require__("EXv2");

// EXTERNAL MODULE: external "prismjs/components/prism-markup"
var prism_markup_ = __webpack_require__("Yh2X");

// EXTERNAL MODULE: external "prismjs/components/prism-javascript"
var prism_javascript_ = __webpack_require__("Y9oD");

// EXTERNAL MODULE: external "prismjs/components/prism-css"
var prism_css_ = __webpack_require__("+AD9");

// EXTERNAL MODULE: external "prismjs/components/prism-yaml"
var prism_yaml_ = __webpack_require__("Ef+M");

// EXTERNAL MODULE: ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css
var prism_line_numbers = __webpack_require__("TpNv");

// EXTERNAL MODULE: external "prismjs/plugins/line-numbers/prism-line-numbers"
var prism_line_numbers_ = __webpack_require__("kZ1E");

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism-twilight.css
var prism_twilight = __webpack_require__("kr82");

// CONCATENATED MODULE: ./src/pages/blog/[slug].tsx
var _slug_jsx = external_react_default.a.createElement;























// Get the data for each blog post
async function getStaticProps({
  params: {
    slug
  },
  preview
}) {
  // load the postsTable so that we can get the page's ID
  const postsTable = await Object(getBlogIndex["a" /* default */])();
  const post = postsTable[slug]; // if we can't find the post or if it is unpublished and
  // viewed without preview mode then we just redirect to /blog

  if (!post || post.Published !== 'Yes' && !preview) {
    console.log(`Failed to find post for slug: ${slug}`);
    return {
      props: {
        redirect: '/blog',
        preview: false
      },
      revalidate: 5
    };
  }

  const postData = await Object(getPageData["a" /* default */])(post.id);
  post.content = postData.blocks;

  for (let i = 0; i < postData.blocks.length; i++) {
    const {
      value
    } = postData.blocks[i];
    const {
      type,
      properties
    } = value;

    if (type == 'tweet') {
      const src = properties.source[0][0]; // parse id from https://twitter.com/_ijjk/status/TWEET_ID format

      const tweetId = src.split('/')[5].split('?')[0];
      if (!tweetId) continue;

      try {
        const res = await external_node_fetch_default()(`https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`);
        const json = await res.json();
        properties.html = json.html.split('<script')[0];
        post.hasTweet = true;
      } catch (_) {
        console.log(`Failed to get tweet embed for ${src}`);
      }
    }
  }

  const {
    users
  } = await Object(getNotionUsers["a" /* default */])(post.Authors || []);
  post.Authors = Object.keys(users).map(id => users[id].full_name);
  return {
    props: {
      post,
      preview: preview || false
    },
    revalidate: 10
  };
} // Return our list of blog posts to prerender

async function getStaticPaths() {
  const postsTable = await Object(getBlogIndex["a" /* default */])(); // we fallback for any unpublished posts to save build time
  // for actually published ones

  return {
    paths: Object.keys(postsTable).filter(post => postsTable[post].Published === 'Yes').map(slug => Object(blog_helpers["a" /* getBlogLink */])(slug)),
    fallback: false
  };
}
const listTypes = new Set(['bulleted_list', 'numbered_list']);

const RenderPost = ({
  post,
  redirect,
  preview
}) => {
  const router = Object(router_["useRouter"])();
  let listTagName = null;
  let listLastId = null;
  let listMap = {};
  Object(external_react_["useEffect"])(() => {
    const twitterSrc = 'https://platform.twitter.com/widgets.js'; // make sure to initialize any new widgets loading on
    // client navigation

    if (post && post.hasTweet) {
      var _window, _window$twttr;

      if ((_window = window) === null || _window === void 0 ? void 0 : (_window$twttr = _window.twttr) === null || _window$twttr === void 0 ? void 0 : _window$twttr.widgets) {
        ;
        window.twttr.widgets.load();
      } else if (!document.querySelector(`script[src="${twitterSrc}"]`)) {
        const script = document.createElement('script');
        script.async = true;
        script.src = twitterSrc;
        document.querySelector('body').appendChild(script);
      }
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (redirect && !post) {
      router.replace(redirect);
    }
  }, [redirect, post]);
  Object(external_react_["useEffect"])(() => {
    prism_core_default.a.highlightAll();
  }, []); // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running

  if (router.isFallback) {
    return _slug_jsx("div", null, "Loading...");
  } // if you don't have a post at this point, and are not
  // loading one from fallback then  redirect back to the index


  if (!post) {
    return _slug_jsx("div", {
      className: blog_module_default.a.post
    }, _slug_jsx("p", null, "Woops! didn't find that post, redirecting you back to the blog index"));
  }

  return _slug_jsx(external_react_default.a.Fragment, null, _slug_jsx(header["a" /* default */], {
    titlePre: post.Page
  }), preview && _slug_jsx("div", {
    className: blog_module_default.a.previewAlertContainer
  }, _slug_jsx("div", {
    className: blog_module_default.a.previewAlert
  }, _slug_jsx("b", null, "Note:"), ` `, "Viewing in preview mode", ' ', _slug_jsx(link_default.a, {
    href: `/api/clear-preview?slug=${post.Slug}`
  }, _slug_jsx("button", {
    className: blog_module_default.a.escapePreview
  }, "Exit Preview")))), _slug_jsx("div", {
    className: blog_module_default.a.post
  }, _slug_jsx("h1", null, post.Page || ''), post.Authors.length > 0 && _slug_jsx("div", {
    className: blog_module_default.a.authors
  }, "By: ", post.Authors.join(' ')), post.Date && _slug_jsx("div", {
    className: blog_module_default.a.postDate
  }, "Posted: ", Object(blog_helpers["b" /* getDateStr */])(post.Date)), _slug_jsx("hr", null), (!post.content || post.content.length === 0) && _slug_jsx("p", null, "This post has no content"), (post.content || []).map((block, blockIdx) => {
    const {
      value
    } = block;
    const {
      type,
      properties,
      id,
      parent_id
    } = value;
    const isLast = blockIdx === post.content.length - 1;
    const isList = listTypes.has(type);
    let toRender = [];

    if (isList) {
      listTagName = dynamic["a" /* default */][type === 'bulleted_list' ? 'ul' : 'ol'];
      listLastId = `list${id}`;
      listMap[id] = {
        key: id,
        nested: [],
        children: Object(renderers["c" /* textBlock */])(properties.title, true, id)
      };

      if (listMap[parent_id]) {
        listMap[id].isNested = true;
        listMap[parent_id].nested.push(id);
      }
    }

    if (listTagName && (isLast || !isList)) {
      toRender.push( /*#__PURE__*/external_react_default.a.createElement(listTagName, {
        key: listLastId
      }, Object.keys(listMap).map(itemId => {
        if (listMap[itemId].isNested) return null;

        const createEl = item => /*#__PURE__*/external_react_default.a.createElement(dynamic["a" /* default */].li || 'ul', {
          key: item.key
        }, item.children, item.nested.length > 0 ? /*#__PURE__*/external_react_default.a.createElement(dynamic["a" /* default */].ul || 'ul', {
          key: item + 'sub-list'
        }, item.nested.map(nestedId => createEl(listMap[nestedId]))) : null);

        return createEl(listMap[itemId]);
      })));
      listMap = {};
      listLastId = null;
      listTagName = null;
    }

    const renderHeading = Type => {
      toRender.push(_slug_jsx(heading, {
        key: id
      }, _slug_jsx(Type, {
        key: id
      }, Object(renderers["c" /* textBlock */])(properties.title, true, id))));
    };

    switch (type) {
      case 'page':
      case 'divider':
        break;

      case 'text':
        if (properties) {
          toRender.push(Object(renderers["c" /* textBlock */])(properties.title, false, id));
        }

        break;

      case 'image':
      case 'video':
      case 'embed':
        {
          const {
            format = {}
          } = value;
          const {
            block_width,
            block_height,
            display_source,
            block_aspect_ratio
          } = format;
          const baseBlockWidth = 768;
          const roundFactor = Math.pow(10, 2); // calculate percentages

          const width = block_width ? `${Math.round(block_width / baseBlockWidth * 100 * roundFactor) / roundFactor}%` : block_height || '100%';
          const isImage = type === 'image';
          const Comp = isImage ? 'img' : 'video';
          const useWrapper = block_aspect_ratio && !block_height;
          const childStyle = useWrapper ? {
            width: '100%',
            height: '100%',
            border: 'none',
            position: 'absolute',
            top: 0
          } : {
            width,
            border: 'none',
            height: block_height,
            display: 'block',
            maxWidth: '100%'
          };
          let child = null;

          if (!isImage && !value.file_ids) {
            // external resource use iframe
            child = _slug_jsx("iframe", {
              style: childStyle,
              src: display_source,
              key: !useWrapper ? id : undefined,
              className: !useWrapper ? 'asset-wrapper' : undefined
            });
          } else {
            // notion resource
            child = _slug_jsx(Comp, {
              key: !useWrapper ? id : undefined,
              src: `/api/asset?assetUrl=${encodeURIComponent(display_source)}&blockId=${id}`,
              controls: !isImage,
              alt: `An ${isImage ? 'image' : 'video'} from Notion`,
              loop: !isImage,
              muted: !isImage,
              autoPlay: !isImage,
              style: childStyle
            });
          }

          toRender.push(useWrapper ? _slug_jsx("div", {
            style: {
              paddingTop: `${Math.round(block_aspect_ratio * 100)}%`,
              position: 'relative'
            },
            className: "asset-wrapper",
            key: id
          }, child) : child);
          break;
        }

      case 'header':
        renderHeading('h1');
        break;

      case 'sub_header':
        renderHeading('h2');
        break;

      case 'sub_sub_header':
        renderHeading('h3');
        break;

      case 'code':
        {
          if (properties.title) {
            const content = properties.title[0][0];
            const language = properties.language[0][0];

            if (language === 'LiveScript') {
              // this requires the DOM for now
              toRender.push(_slug_jsx(react_jsx_parser_default.a, {
                key: id,
                jsx: content,
                components: dynamic["a" /* default */],
                componentsOnly: false,
                renderInpost: false,
                allowUnknownElements: true,
                blacklistedTags: ['script', 'style']
              }));
            } else {
              toRender.push(_slug_jsx(dynamic["a" /* default */].Code, {
                key: id,
                language: language || ''
              }, content));
            }
          }

          break;
        }

      case 'quote':
        {
          if (properties.title) {
            toRender.push(Object(renderers["b" /* quoteBlock */])(properties.title, id));
          }

          break;
        }

      case 'callout':
        {
          var _value$format, _value$format2;

          toRender.push(_slug_jsx("div", {
            className: "callout",
            key: id
          }, ((_value$format = value.format) === null || _value$format === void 0 ? void 0 : _value$format.page_icon) && _slug_jsx("div", null, (_value$format2 = value.format) === null || _value$format2 === void 0 ? void 0 : _value$format2.page_icon), _slug_jsx("div", {
            className: "text"
          }, Object(renderers["c" /* textBlock */])(properties.title, true, id))));
          break;
        }

      case 'tweet':
        {
          if (properties.html) {
            toRender.push(_slug_jsx("div", {
              dangerouslySetInnerHTML: {
                __html: properties.html
              },
              key: id
            }));
          }

          break;
        }

      case 'equation':
        {
          if (properties && properties.title) {
            const content = properties.title[0][0];
            toRender.push(_slug_jsx(dynamic["a" /* default */].Equation, {
              key: id,
              displayMode: true
            }, content));
          }

          break;
        }

      default:
        if (false) {}

        break;
    }

    return toRender;
  })));
};

/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (RenderPost);

/***/ }),

/***/ "XOJr":
/***/ (function(module, exports) {

module.exports = require("katex");

/***/ }),

/***/ "Y9oD":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-javascript");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Yh2X":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markup");

/***/ }),

/***/ "bsQL":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eDmn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ExtLink = props => __jsx("a", _extends({}, props, {
  rel: "noopener",
  target: props.target || '_blank'
}));

/* harmony default export */ __webpack_exports__["a"] = (ExtLink);

/***/ }),

/***/ "eLd7":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-core");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

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

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h0OK":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-jsx");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t+Ps");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLJp");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VAPu");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
 // import 'katex/dist/katex.css'



 // Import the CSS

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["config"].autoAddCss = false; // Tell Font Awesome to skip



const a = ({
  Component,
  pageProps
}) => {
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Open+Sans",
    rel: "stylesheet"
  })), __jsx(Component, pageProps));
};

/* harmony default export */ __webpack_exports__["default"] = (a);

/***/ }),

/***/ "jK02":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kZ1E":
/***/ (function(module, exports) {

module.exports = require("prismjs/plugins/line-numbers/prism-line-numbers");

/***/ }),

/***/ "kj8m":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/route-regex");

/***/ }),

/***/ "kr82":
/***/ (function(module, exports) {



/***/ }),

/***/ "mT+M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_0__["Html"], {
      lang: "en"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_0__["Head"], null), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_0__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_0__["NextScript"], null)));
  }

}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheets"]();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect(__jsx(App, props))
  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0___default.a.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "mctB":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/node-polyfill-fetch");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "qszM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blogIndex": "blog_blogIndex__2X5Xe",
	"previewAlertContainer": "blog_previewAlertContainer__3MB5y",
	"previewAlert": "blog_previewAlert__rONJJ",
	"escapePreview": "blog_escapePreview__MKFIW",
	"titleContainer": "blog_titleContainer__-ZUwT",
	"draftBadge": "blog_draftBadge__3dPHr",
	"noPosts": "blog_noPosts__1Bx7y",
	"postPreview": "blog_postPreview__2zw4J",
	"post": "blog_post__39rqQ",
	"authors": "blog_authors__3Ukmz",
	"postDate": "blog_postDate__2B1f1",
	"postPreviewTagline": "blog_postPreviewTagline__3wGPE",
	"card": "blog_card__1hkWn"
};


/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "sJtj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return textBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return quoteBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return previewBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tjHo");



function applyTags(tags = [], children, noPTag = false, key) {
  let child = children;

  for (const tag of tags) {
    const props = {
      key
    };
    let tagName = tag[0];
    if (noPTag && tagName === 'p') tagName = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;
    if (tagName === 'c') tagName = 'code';

    if (tagName === '_') {
      tagName = 'span';
      props.className = 'underline';
    }

    if (tagName === 'a') {
      props.href = tag[1];
    }

    if (tagName === 'e') {
      tagName = _components_dynamic__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Equation;
      props.displayMode = false;
      child = tag[1];
    }

    child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dynamic__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"][tagName] || tagName, props, child);
  }

  return child;
}

function getChildren(text, noPTag = false) {
  const children = [];
  let key = 0;

  for (const textItem of text) {
    key++; // if (textItem.length === 1) {

    if (typeof textItem === 'string') {
      children.push(textItem);
      continue;
    }

    children.push(applyTags(textItem[1], textItem[0], noPTag, key));
  }

  return children;
}

function textBlock(text = [], noPTag = false, mainKey) {
  const children = getChildren(text, noPTag);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(noPTag ? react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment : _components_dynamic__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].p, {
    key: mainKey
  }, ...children, noPTag);
}
function quoteBlock(text = [], mainKey) {
  const children = getChildren(text, false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dynamic__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].blockquote, {
    key: mainKey
  }, ...children);
}
function previewBlock(text, mainKey, className) {
  const children = getChildren(text, true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dynamic__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].p, {
    key: mainKey,
    className: className
  }, ...children, true);
}

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "t+Ps":
/***/ (function(module, exports) {



/***/ }),

/***/ "tO8J":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/prepare-destination");

/***/ }),

/***/ "thfK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"heading": "heading_heading__VtDi7"
};


/***/ }),

/***/ "tjHo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ext_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eDmn");


/* harmony default export */ __webpack_exports__["a"] = ({
  // default tags
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: 'p',
  blockquote: 'blockquote',
  a: _ext_link__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  Code: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, "F1I5")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("F1I5")],
      modules: ['./code']
    }
  }),
  Counter: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "HY/B")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("HY/B")],
      modules: ['./counter']
    }
  }),
  Equation: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "3zRB")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("3zRB")],
      modules: ['./equation']
    }
  })
});

/***/ }),

/***/ "vHio":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zOyy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "zmA9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/i18n/normalize-locale-path");

/***/ })

/******/ });