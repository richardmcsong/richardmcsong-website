(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/prismjs/components/prism-jsx.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jsx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {

var javascript = Prism.util.clone(Prism.languages.javascript);

Prism.languages.jsx = Prism.languages.extend('markup', javascript);
Prism.languages.jsx.tag.pattern= /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i;

Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;

Prism.languages.insertBefore('inside', 'attr-name', {
	'spread': {
		pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
		inside: {
			'punctuation': /\.{3}|[{}.]/,
			'attr-value': /\w+/
		}
	}
}, Prism.languages.jsx.tag);

Prism.languages.insertBefore('inside', 'attr-value',{
	'script': {
		// Allow for two levels of nesting
		pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
		inside: {
			'script-punctuation': {
				pattern: /^=(?={)/,
				alias: 'punctuation'
			},
			rest: Prism.languages.jsx
		},
		'alias': 'language-javascript'
	}
}, Prism.languages.jsx.tag);

// The following will handle plain text inside tags
var stringifyToken = function (token) {
	if (!token) {
		return '';
	}
	if (typeof token === 'string') {
		return token;
	}
	if (typeof token.content === 'string') {
		return token.content;
	}
	return token.content.map(stringifyToken).join('');
};

var walkTokens = function (tokens) {
	var openedTags = [];
	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		var notTagNorBrace = false;

		if (typeof token !== 'string') {
			if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
				// We found a tag, now find its kind

				if (token.content[0].content[0].content === '</') {
					// Closing tag
					if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
						// Pop matching opening tag
						openedTags.pop();
					}
				} else {
					if (token.content[token.content.length - 1].content === '/>') {
						// Autoclosed tag, ignore
					} else {
						// Opening tag
						openedTags.push({
							tagName: stringifyToken(token.content[0].content[1]),
							openedBraces: 0
						});
					}
				}
			} else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {

				// Here we might have entered a JSX context inside a tag
				openedTags[openedTags.length - 1].openedBraces++;

			} else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {

				// Here we might have left a JSX context inside a tag
				openedTags[openedTags.length - 1].openedBraces--;

			} else {
				notTagNorBrace = true
			}
		}
		if (notTagNorBrace || typeof token === 'string') {
			if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
				// Here we are inside a tag, and not inside a JSX context.
				// That's plain text: drop any tokens matched.
				var plainText = stringifyToken(token);

				// And merge text with adjacent text
				if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
					plainText += stringifyToken(tokens[i + 1]);
					tokens.splice(i + 1, 1);
				}
				if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
					plainText = stringifyToken(tokens[i - 1]) + plainText;
					tokens.splice(i - 1, 1);
					i--;
				}

				tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
			}
		}

		if (token.content && typeof token.content !== 'string') {
			walkTokens(token.content);
		}
	}
};

Prism.hooks.add('after-tokenize', function (env) {
	if (env.language !== 'jsx' && env.language !== 'tsx') {
		return;
	}
	walkTokens(env.tokens);
});

}(Prism));


/***/ }),

/***/ "./src/components/code.tsx":
/*!*********************************!*\
  !*** ./src/components/code.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-yaml */ "./node_modules/prismjs/components/prism-yaml.js");
/* harmony import */ var prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.css */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_themes_prism_twilight_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/themes/prism-twilight.css */ "./node_modules/prismjs/themes/prism-twilight.css");
/* harmony import */ var prismjs_themes_prism_twilight_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_twilight_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-jsx */ "./node_modules/prismjs/components/prism-jsx.js");
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_10__);
var _this = undefined,
    _jsxFileName = "/home/rsong/work/richardmcsong-website/src/components/code.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Code = function Code(_ref) {
  _s();

  var children = _ref.children,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? 'javascript' : _ref$language;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_1___default.a.highlightAll();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("code", {
    className: "language-yaml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, children)));
};

_s(Code, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Code;
/* harmony default export */ __webpack_exports__["default"] = (Code);

var _c;

$RefreshReg$(_c, "Code");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvZGUudHN4Il0sIm5hbWVzIjpbIkNvZGUiLCJjaGlsZHJlbiIsImxhbmd1YWdlIiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0EsbUhBQW1ILFNBQVMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxFQUFFLHlDQUF5Qzs7QUFFek47QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLGNBQWMsTUFBTSxFQUFFLHlDQUF5QztBQUMvRDtBQUNBLHNCQUFzQixFQUFFLElBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLO0FBQ3hEO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLElBQUksdUZBQXVGOztBQUUzRjtBQUNBOztBQUVBLElBQUksNklBQTZJOztBQUVqSjtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIRDtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLFFBQXdDLFFBQXhDQSxRQUF3QztBQUFBLDJCQUE5QkMsUUFBOEI7QUFBQSxNQUE5QkEsUUFBOEIsOEJBQW5CLFlBQW1CO0FBQ3REQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsd0VBQUssQ0FBQ0MsWUFBTjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFFBREgsQ0FERixDQURGLENBREY7QUFTRCxDQWJEOztHQUFNRCxJOztLQUFBQSxJO0FBZVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihQcmlzbSkge1xuXG52YXIgamF2YXNjcmlwdCA9IFByaXNtLnV0aWwuY2xvbmUoUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQpO1xuXG5QcmlzbS5sYW5ndWFnZXMuanN4ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywgamF2YXNjcmlwdCk7XG5QcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5wYXR0ZXJuPSAvPFxcLz8oPzpbXFx3LjotXStcXHMqKD86XFxzKyg/OltcXHcuOiQtXSsoPzo9KD86KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDF8W15cXHN7J1wiPj1dK3xcXHsoPzpcXHsoPzpcXHtbXnt9XSpcXH18W157fV0pKlxcfXxbXnt9XSkrXFx9KSk/fFxce1xccypcXC57M31cXHMqW2Etel8kXVtcXHckXSooPzpcXC5bYS16XyRdW1xcdyRdKikqXFxzKlxcfSkpKlxccypcXC8/KT8+L2k7XG5cblByaXNtLmxhbmd1YWdlcy5qc3gudGFnLmluc2lkZVsndGFnJ10ucGF0dGVybiA9IC9ePFxcLz9bXlxccz5cXC9dKi9pO1xuUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcuaW5zaWRlWydhdHRyLXZhbHVlJ10ucGF0dGVybiA9IC89KD8hXFx7KSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfFteXFxzJ1wiPl0rKS9pO1xuUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcuaW5zaWRlWyd0YWcnXS5pbnNpZGVbJ2NsYXNzLW5hbWUnXSA9IC9eW0EtWl1cXHcqKD86XFwuW0EtWl1cXHcqKSokLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItbmFtZScsIHtcblx0J3NwcmVhZCc6IHtcblx0XHRwYXR0ZXJuOiAvXFx7XFxzKlxcLnszfVxccypbYS16XyRdW1xcdyRdKig/OlxcLlthLXpfJF1bXFx3JF0qKSpcXHMqXFx9Lyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC57M318W3t9Ll0vLFxuXHRcdFx0J2F0dHItdmFsdWUnOiAvXFx3Ky9cblx0XHR9XG5cdH1cbn0sIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnKTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItdmFsdWUnLHtcblx0J3NjcmlwdCc6IHtcblx0XHQvLyBBbGxvdyBmb3IgdHdvIGxldmVscyBvZiBuZXN0aW5nXG5cdFx0cGF0dGVybjogLz0oPzpcXHsoPzpcXHsoPzpcXHtbXnt9XSpcXH18W157fV0pKlxcfXxbXnt9XSkrXFx9KS9pLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3NjcmlwdC1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL149KD89eykvLFxuXHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0fSxcblx0XHRcdHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qc3hcblx0XHR9LFxuXHRcdCdhbGlhcyc6ICdsYW5ndWFnZS1qYXZhc2NyaXB0J1xuXHR9XG59LCBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZyk7XG5cbi8vIFRoZSBmb2xsb3dpbmcgd2lsbCBoYW5kbGUgcGxhaW4gdGV4dCBpbnNpZGUgdGFnc1xudmFyIHN0cmluZ2lmeVRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG5cdGlmICghdG9rZW4pIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblx0aWYgKHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiB0b2tlbi5jb250ZW50O1xuXHR9XG5cdHJldHVybiB0b2tlbi5jb250ZW50Lm1hcChzdHJpbmdpZnlUb2tlbikuam9pbignJyk7XG59O1xuXG52YXIgd2Fsa1Rva2VucyA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcblx0dmFyIG9wZW5lZFRhZ3MgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cdFx0dmFyIG5vdFRhZ05vckJyYWNlID0gZmFsc2U7XG5cblx0XHRpZiAodHlwZW9mIHRva2VuICE9PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09ICd0YWcnICYmIHRva2VuLmNvbnRlbnRbMF0gJiYgdG9rZW4uY29udGVudFswXS50eXBlID09PSAndGFnJykge1xuXHRcdFx0XHQvLyBXZSBmb3VuZCBhIHRhZywgbm93IGZpbmQgaXRzIGtpbmRcblxuXHRcdFx0XHRpZiAodG9rZW4uY29udGVudFswXS5jb250ZW50WzBdLmNvbnRlbnQgPT09ICc8LycpIHtcblx0XHRcdFx0XHQvLyBDbG9zaW5nIHRhZ1xuXHRcdFx0XHRcdGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLnRhZ05hbWUgPT09IHN0cmluZ2lmeVRva2VuKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFsxXSkpIHtcblx0XHRcdFx0XHRcdC8vIFBvcCBtYXRjaGluZyBvcGVuaW5nIHRhZ1xuXHRcdFx0XHRcdFx0b3BlbmVkVGFncy5wb3AoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRva2VuLmNvbnRlbnRbdG9rZW4uY29udGVudC5sZW5ndGggLSAxXS5jb250ZW50ID09PSAnLz4nKSB7XG5cdFx0XHRcdFx0XHQvLyBBdXRvY2xvc2VkIHRhZywgaWdub3JlXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIE9wZW5pbmcgdGFnXG5cdFx0XHRcdFx0XHRvcGVuZWRUYWdzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHR0YWdOYW1lOiBzdHJpbmdpZnlUb2tlbih0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMV0pLFxuXHRcdFx0XHRcdFx0XHRvcGVuZWRCcmFjZXM6IDBcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgdG9rZW4udHlwZSA9PT0gJ3B1bmN0dWF0aW9uJyAmJiB0b2tlbi5jb250ZW50ID09PSAneycpIHtcblxuXHRcdFx0XHQvLyBIZXJlIHdlIG1pZ2h0IGhhdmUgZW50ZXJlZCBhIEpTWCBjb250ZXh0IGluc2lkZSBhIHRhZ1xuXHRcdFx0XHRvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzKys7XG5cblx0XHRcdH0gZWxzZSBpZiAob3BlbmVkVGFncy5sZW5ndGggPiAwICYmIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMgPiAwICYmIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiYgdG9rZW4uY29udGVudCA9PT0gJ30nKSB7XG5cblx0XHRcdFx0Ly8gSGVyZSB3ZSBtaWdodCBoYXZlIGxlZnQgYSBKU1ggY29udGV4dCBpbnNpZGUgYSB0YWdcblx0XHRcdFx0b3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcy0tO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub3RUYWdOb3JCcmFjZSA9IHRydWVcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5vdFRhZ05vckJyYWNlIHx8IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcyA9PT0gMCkge1xuXHRcdFx0XHQvLyBIZXJlIHdlIGFyZSBpbnNpZGUgYSB0YWcsIGFuZCBub3QgaW5zaWRlIGEgSlNYIGNvbnRleHQuXG5cdFx0XHRcdC8vIFRoYXQncyBwbGFpbiB0ZXh0OiBkcm9wIGFueSB0b2tlbnMgbWF0Y2hlZC5cblx0XHRcdFx0dmFyIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2VuKTtcblxuXHRcdFx0XHQvLyBBbmQgbWVyZ2UgdGV4dCB3aXRoIGFkamFjZW50IHRleHRcblx0XHRcdFx0aWYgKGkgPCB0b2tlbnMubGVuZ3RoIC0gMSAmJiAodHlwZW9mIHRva2Vuc1tpICsgMV0gPT09ICdzdHJpbmcnIHx8IHRva2Vuc1tpICsgMV0udHlwZSA9PT0gJ3BsYWluLXRleHQnKSkge1xuXHRcdFx0XHRcdHBsYWluVGV4dCArPSBzdHJpbmdpZnlUb2tlbih0b2tlbnNbaSArIDFdKTtcblx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKGkgKyAxLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaSA+IDAgJiYgKHR5cGVvZiB0b2tlbnNbaSAtIDFdID09PSAnc3RyaW5nJyB8fCB0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwbGFpbi10ZXh0JykpIHtcblx0XHRcdFx0XHRwbGFpblRleHQgPSBzdHJpbmdpZnlUb2tlbih0b2tlbnNbaSAtIDFdKSArIHBsYWluVGV4dDtcblx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKGkgLSAxLCAxKTtcblx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbnNbaV0gPSBuZXcgUHJpc20uVG9rZW4oJ3BsYWluLXRleHQnLCBwbGFpblRleHQsIG51bGwsIHBsYWluVGV4dCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRva2VuLmNvbnRlbnQgJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpO1xuXHRcdH1cblx0fVxufTtcblxuUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0aWYgKGVudi5sYW5ndWFnZSAhPT0gJ2pzeCcgJiYgZW52Lmxhbmd1YWdlICE9PSAndHN4Jykge1xuXHRcdHJldHVybjtcblx0fVxuXHR3YWxrVG9rZW5zKGVudi50b2tlbnMpO1xufSk7XG5cbn0oUHJpc20pKTtcbiIsImltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJ1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IENvZGUgPSAoeyBjaGlsZHJlbiwgbGFuZ3VhZ2UgPSAnamF2YXNjcmlwdCcgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLXlhbWxcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVcbiJdLCJzb3VyY2VSb290IjoiIn0=