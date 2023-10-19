define("36eba318-ae17-44bf-bfb7-76606ee5360f_0.0.1", ["@microsoft/sp-property-pane","@microsoft/sp-loader","bootstrap","@microsoft/sp-core-library","DocSieWebPartStrings","@microsoft/sp-webpart-base","@microsoft/sp-http","jquery"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_StVt__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_beXg__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_vlQI__, __WEBPACK_EXTERNAL_MODULE_xeH2__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "2RqI");
/******/ })
/************************************************************************/
/******/ ({

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "2RqI":
/*!**********************************************!*\
  !*** ./lib/webparts/docSie/DocSieWebPart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DocsieTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DocsieTemplate */ "9GgC");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "StVt");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DocSieWebPart_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DocSieWebPart.module.scss */ "XDuS");
/* harmony import */ var DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! DocSieWebPartStrings */ "beXg");
/* harmony import */ var DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




 // for bootstrap javascript




// import * as appSettings from 'appSettings';
var DocSieWebPart = /** @class */ (function (_super) {
    __extends(DocSieWebPart, _super);
    function DocSieWebPart() {
        var _this = _super.call(this) || this;
        _this._disabledProperty = false;
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8__["SPComponentLoader"].loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css");
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_8__["SPComponentLoader"].loadCss("https://lib.docsie.io/current/styles/docsie.css");
        return _this;
    }
    DocSieWebPart.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.domElement.innerHTML = "\n      <section class=\"".concat(_DocSieWebPart_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].docSie, " ").concat(!!this.context.sdks.microsoftTeams ? _DocSieWebPart_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].teams : '', "\">\n        <nav class=\"navbar bg-body-tertiary\">\n          <div class=\"container-fluid border-bottom border-secondary\">\n            <span class=\"navbar-brand align-middle\" href=\"#\">\n              <img src=\"https://cdn.docsie.io/workspaces/workspace_KzWjPI0dOsVYCpNoU/logo_QKcEpB5kVFDog4BUBePANWyVMVtslBl9I4YxIoSb8PMOM.png\"  \n                alt=\"Logo\" \n                width=\"50\" height=\"50\"><!-- class=\"d-inline-block align-text-top\"> -->\n              Docsie\n            </span>\n          </div>\n        </nav>\n        <div id=\"mainDIV\">\n          <h2>Welcome to Docsie</h2>\n          <p>To begin, let's connect to your account using an API key</p>\n\n          <h4 class=\"text-primary\">Create an API Secret Key:</h4>\n          <p>Before you start using the Docsie API, you must create a secret key.</p>\n          <ul>\n            <li>Go to <i class=\"border\">Settings</i> > <i class=\"border\">Organization</i> > <i class=\"border\">API Keys</i></li>\n            <li>In the menu, click <i class=\"border\">Create secret key +</i></li>\n            <li>Choose a name for the secret key. Then, select an expiration period for the secret key</li>\n            <li>Click <i class=\"border\">Add key</i> to finalize this process. The secret key will appear in the current window, and disappear after you click <i class=\"border\">Close dialog</i>. Please copy and save it securely, as you cannot view the token again.</li>\n            <li>An obfuscated secret key token will appear in the list. Use this as a reference when working with multiple API keys simultaneously.</li>\n          </ul>\n          <h4 class=\"text-primary\">Add the API key to this webpart property:</h4>\n          <ul>\n            <li>Edit this webpart</li>\n            <li>Add the API key to the property pane</li>\n            <li>Click connect</li>\n          </ul>\n        </div\n      </section>\n    ");
                return [2 /*return*/];
            });
        });
    };
    DocSieWebPart.prototype.onInit = function () {
        return this._getEnvironmentMessage().then(function (message) {
            // this._environmentMessage = message;
        });
    };
    DocSieWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
                .then(function (context) {
                var environmentMessage = '';
                switch (context.app.host.name) {
                    case 'Office': // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost ? DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__["AppLocalEnvironmentOffice"] : DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__["AppOfficeEnvironment"];
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__["AppLocalEnvironmentOutlook"] : DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__["AppOutlookEnvironment"];
                        break;
                    case 'Teams': // running in Teams
                        environmentMessage = _this.context.isServedFromLocalhost ? DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__["AppLocalEnvironmentTeams"] : DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__["AppTeamsTabEnvironment"];
                        break;
                    default:
                        throw new Error('Unknown host');
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__["AppLocalEnvironmentSharePoint"] : DocSieWebPartStrings__WEBPACK_IMPORTED_MODULE_7__["AppSharePointEnvironment"]);
    };
    Object.defineProperty(DocSieWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    DocSieWebPart.prototype.getPropertyPaneConfiguration = function () {
        var _this = this;
        return {
            pages: [
                {
                    header: {
                        description: "Docsie.io properties"
                    },
                    groups: [
                        {
                            groupName: "Properties",
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])('description', {
                                    "label": "Client ID",
                                    "description": "Please enter your Docsie ID to connect to your portal",
                                    "disabled": this._disabledProperty
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneButton"])("button", {
                                    "text": "Connect",
                                    "onClick": function () { return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.connectToDocsie().then(function () {
                                                        _this._disabledProperty = true;
                                                    })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                    "disabled": this._disabledProperty
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    DocSieWebPart.prototype.connectToDocsie = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _DocsieTemplate__WEBPACK_IMPORTED_MODULE_3__["default"].getData(this.properties, this.context, 'https://app.docsie.io/api_v2/003/workspaces?expand[]=documentation.books')
                            .then(function (res) {
                            var sectionDIV = _this.domElement.querySelector('#mainDIV');
                            sectionDIV.innerHTML = "\n        <ul class=\"nav nav-pills mb-3\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item border-bottom mb-2\" role=\"presentation\">\n            <button class=\"nav-link active\" id=\"new-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#new-tab-pane\" type=\"button\" role=\"tab\" aria-controls=\"new-tab-pane\" aria-selected=\"true\">Create deployment</button>\n          </li>\n          <li class=\"nav-item\" role=\"presentation\">\n            <button class=\"nav-link\" id=\"get-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#get-tab-pane\" type=\"button\" role=\"tab\" aria-controls=\"get-tab-pane\" aria-selected=\"false\">Existing deployments</button>\n          </li>\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">  \n          <div class=\"tab-pane fade show active\" id=\"new-tab-pane\" role=\"tabpanel\" aria-labelledby=\"new-tab\" tabindex=\"0\">\n            <div id='workSpace' class=\"border-bottom border-secondary pb-2 mb-4\">\n            </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"get-tab-pane\" role=\"tabpanel\" aria-labelledby=\"get-tab\" tabindex=\"0\">\n            <div id='deploymentDiv' class=\"border-bottom border-secondary pb-2 mb-4\">\n            </div>\n          </div>\n        </div>\n      ";
                            var workspaceElement = _this.domElement.querySelector('#workSpace');
                            if (workspaceElement !== null) {
                                workspaceElement.innerHTML = _DocsieTemplate__WEBPACK_IMPORTED_MODULE_3__["default"].createDOM(res);
                                jquery__WEBPACK_IMPORTED_MODULE_2__('#applyBtn').on('click', function () {
                                    var activeTabID = jquery__WEBPACK_IMPORTED_MODULE_2__('.tab-pane.active a.active').attr('aria-controls');
                                    var checkedRadio = jquery__WEBPACK_IMPORTED_MODULE_2__("div#".concat(activeTabID, " input[type=\"radio\"]:checked"));
                                    if (checkedRadio.length === 0) {
                                        alert('none selected');
                                    }
                                    else {
                                        alert(checkedRadio.attr('value'));
                                    }
                                });
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _DocsieTemplate__WEBPACK_IMPORTED_MODULE_3__["default"].getData(this.properties, this.context, 'https://app.docsie.io/api_v2/003/deployments')
                                .then(function (dep) {
                                jquery__WEBPACK_IMPORTED_MODULE_2__('#deploymentDiv').html(_DocsieTemplate__WEBPACK_IMPORTED_MODULE_3__["default"].createDeploymentDOM(dep));
                                jquery__WEBPACK_IMPORTED_MODULE_2__('#deployBTN').on('click', function () {
                                    _this.loadDocsieScript(jquery__WEBPACK_IMPORTED_MODULE_2__("input[type='radio'][name='listGroupRadio']:checked").val());
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DocSieWebPart.prototype.loadDocsieScript = function (ID) {
        // alert(ID)
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = 'https://lib.docsie.io/current/service.js';
        script.dataset.docsie = "docsie_pk_key:".concat(ID);
        // Append the script element to the document's body
        jquery__WEBPACK_IMPORTED_MODULE_2__('#deploymentDiv').html(script);
    };
    return DocSieWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_5__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (DocSieWebPart);


/***/ }),

/***/ "9GgC":
/*!***********************************************!*\
  !*** ./lib/webparts/docSie/DocsieTemplate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// import styles from "./DocSieWebPart.module.scss";

// import {allTypes} from "./DocsieInterfaces";
var DocsieTemplate = /** @class */ (function () {
    function DocsieTemplate() {
    }
    DocsieTemplate.getData = function (prop, context, _endPoint) {
        return __awaiter(this, void 0, void 0, function () {
            var _bearer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _bearer = "Bearer " + prop.description;
                        return [4 /*yield*/, context.httpClient
                                .get(_endPoint, _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"].configurations.v1, {
                                headers: [
                                    ['accept', 'application/json;odata.metadata=none'],
                                    ['Authorization', _bearer]
                                ]
                            })
                                .then(function (res) {
                                // console.log(res.json())
                                return res.json();
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DocsieTemplate.createDOM = function (res) {
        var _this = this;
        this.htmlTemplateTop = "\n        <div class=\"container\">\n            <div class=\"row align-middle\">\n                <div class=\"col\">\n                    <p class=\"align-middle fw-bold\">Workspaces:</p>\n                </div>\n                <div class=\"col\">\n                    <p class=\"align-middle\">Shelves:</p>\n                </div>\n                <div class=\"col\">\n                    <p class=\"align-middle\">Documents:</p>\n                </div>\n            </div>\n            <div class=\"row\" style= \"max-height:10rem; overflow: scroll; scroll-behavior: smooth;\">\n                <div class=\"col-4\">\n                    <div class=\"list-group\" id=\"WSlist-tab\" role=\"tablist\">";
        var i = 0;
        var j = 0;
        // let k: number = 0;
        res.results.forEach(function (item) {
            _this.htmlTemplateTop += i === 0 ?
                "<a class=\"list-group-item list-group-item-action\" id=\"list-".concat(item.id, "-list\" data-bs-toggle=\"list\" href=\"#list-").concat(item.id, "\" role=\"tab\" aria-controls=\"list-").concat(item.id, "\">\n                ").concat(item.name, "\n            </a>") :
                "<a class=\"list-group-item list-group-item-action\" id=\"list-".concat(item.id, "-list\" data-bs-toggle=\"list\" href=\"#list-").concat(item.id, "\" role=\"tab\" aria-controls=\"list-").concat(item.id, "\">\n                ").concat(item.name, "\n            </a>");
            i++;
        });
        this.htmlTemplateTop += "\n                    </div> <!--WSlist-tab--->\n                </div> <!--Col-4--->\n                <div class=\"col-8\"> \n                    <div class=\"tab-content\" id=\"nav-tabContent\"> <!--All tab content Div--->";
        i = 0;
        res.results.forEach(function (item) {
            _this.htmlTemplateTop += i === 0 ?
                "<div class=\"tab-pane fade show\" id=\"list-".concat(item.id, "\" role=\"tabpanel\" aria-labelledby=\"list-").concat(item.id, "-list\">\n            <!--Content ").concat(i, "--->\n                <div class=\"row\">\n                    <div class=\"col-6\">\n            ") :
                "<div class=\"tab-pane fade show\" id=\"list-".concat(item.id, "\" role=\"tabpanel\" aria-labelledby=\"list-").concat(item.id, "-list\">\n            <!--Content ").concat(i, "--->\n                <div class=\"row\">\n                    <div class=\"col-6\">");
            i++;
            _this.htmlTemplateTop += "\n                        <div class=\"list-group\" id=\"list-tab-".concat(item.id, "\" role=\"tablist\">");
            item.documentation.results.forEach(function (doc_item) {
                _this.htmlTemplateTop += j === 0 ?
                    "<a class=\"list-group-item list-group-item-action\" \n                    id=\"list-".concat(doc_item.id, "-list\" data-bs-toggle=\"list\" href=\"#list-").concat(doc_item.id, "\" role=\"tab\" aria-controls=\"list-").concat(doc_item.id, "\">\n                        ").concat(doc_item.name, "\n                </a>") :
                    "<a class=\"list-group-item list-group-item-action\" \n                    id=\"list-".concat(doc_item.id, "-list\" data-bs-toggle=\"list\" href=\"#list-").concat(doc_item.id, "\" role=\"tab\" aria-controls=\"list-").concat(doc_item.id, "\">\n                        ").concat(doc_item.name, "\n                </a>");
                j++;
            });
            _this.htmlTemplateTop += "\n                        </div> <!--Button group closed--->\n                    </div> <!--Col-6 closed--->";
            _this.htmlTemplateTop += "\n                        <div class=\"col-6\">\n                            <div class=\"tab-content\" id=\"nav-tabContent-".concat(item.id, "\">");
            j = 0;
            item.documentation.results.forEach(function (doc_item) {
                _this.htmlTemplateTop += j === 0 ?
                    "<div class=\"tab-pane fade show\" id=\"list-".concat(doc_item.id, "\" role=\"tabpanel\" aria-labelledby=\"list-").concat(doc_item.id, "-list\">\n                    <ul class=\"list-group\" id=\"UL-").concat(doc_item.id, "\">\n                ") :
                    "<div class=\"tab-pane fade show\" id=\"list-".concat(doc_item.id, "\" role=\"tabpanel\" aria-labelledby=\"list-").concat(doc_item.id, "-list\">\n                    <ul class=\"list-group\" id=\"").concat(doc_item.id, "\">\n                ");
                // k = 0;
                doc_item.books.results.forEach(function (book_item) {
                    _this.htmlTemplateTop +=
                        "\n                        <li class=\"list-group-item\">\n                            <input class=\"form-check-input me-1\" type=\"radio\" name=\"listGroupRadio\" value=\"".concat(book_item.name, "\" id=\"").concat(book_item.id, "\">\n                            <label class=\"form-check-label\" for=\"").concat(book_item.id, "\">").concat(book_item.name, "</label>\n                        </li>\n                    ");
                    // k++;
                });
                _this.htmlTemplateTop += "\n                    </ul> <!--UL Closed--->\n                </div> <!--DIV -TABPane Closed-->";
            });
            _this.htmlTemplateTop += "\n            </div> <!--TAB content closed--->\n            </div> <!----COl-6 Closed--->\n            </div> <!--Row Closed-->\n            </div> <!---TAB Pane Closed---->";
        });
        this.htmlTemplateTop += "</div> <!--All tab content closed--->\n    </div> <!--Col-8 closed--->\n    </div> <!---Row--->\n    </div> <!---Container---->\n    <div id='WSDocs' class=\"container text-end\">\n        <button type=\"button\" class=\"btn btn-secondary\" id=\"applyBtn\" >Create</button>\n    </div>";
        return this.htmlTemplateTop;
    };
    DocsieTemplate.createDeploymentDOM = function (res) {
        var _this = this;
        // this.htmlTemplateDeployment = `
        // <h2>Zoheb</h2>
        // `
        this.htmlTemplateDeployment = "\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class =\"col\">\n                        <ul class=\"list-group\">\n        ";
        var i = 0;
        res.results.forEach(function (dep_item) {
            if (!dep_item.deleted) {
                _this.htmlTemplateDeployment += i === 0 ?
                    "\n                <li class=\"list-group-item\">\n                    <input class=\"form-check-input me-1\" type=\"radio\" name=\"listGroupRadio\" value=\"\" id=\"".concat(dep_item.id, "\" checked>\n                    <label class=\"form-check-label\" for=\"").concat(dep_item.id, "\">").concat(dep_item.workspace, "</label>\n                </li>\n                ") : "\n                <li class=\"list-group-item\">\n                    <input class=\"form-check-input me-1\" type=\"radio\" name=\"listGroupRadio\" value=\"".concat(dep_item.id, "\" id=\"").concat(dep_item.id, "\">\n                    <label class=\"form-check-label\" for=\"").concat(dep_item.id, "\">").concat(dep_item.workspace, "</label>\n                </li>\n                ");
            }
            i++;
        });
        this.htmlTemplateDeployment += "\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div id='newDep mb-3' class=\"container text-end\">\n                <button type=\"button\" class=\"btn btn-secondary\" id=\"deployBTN\">Deploy</button>\n            </div>\n        ";
        return this.htmlTemplateDeployment;
    };
    return DocsieTemplate;
}());
/* harmony default export */ __webpack_exports__["default"] = (DocsieTemplate);


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "StVt":
/*!****************************!*\
  !*** external "bootstrap" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_StVt__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "XDuS":
/*!**********************************************************!*\
  !*** ./lib/webparts/docSie/DocSieWebPart.module.scss.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./DocSieWebPart.module.css */ "vIVN");
var styles = {
    docSie: 'docSie_f56b9865',
    teams: 'teams_f56b9865',
    welcome: 'welcome_f56b9865',
    welcomeImage: 'welcomeImage_f56b9865',
    links: 'links_f56b9865',
    'WSlist-tab': 'WSlist-tab_f56b9865',
    active: 'active_f56b9865'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "beXg":
/*!***************************************!*\
  !*** external "DocSieWebPartStrings" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_beXg__;

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "szOv":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/docSie/DocSieWebPart.module.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".docSie_f56b9865{color:\"[theme:bodyText, default: #323130]\";color:var(--bodyText);overflow:hidden;padding:1em}.docSie_f56b9865.teams_f56b9865{font-family:Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif}.welcome_f56b9865{text-align:center}.welcomeImage_f56b9865{max-width:420px;width:100%}.links_f56b9865 a{color:\"[theme:link, default:#03787c]\";color:var(--link);text-decoration:none}.links_f56b9865 a:hover{color:\"[theme:linkHovered, default: #014446]\";color:var(--linkHovered);text-decoration:underline}#WSlist-tab_f56b9865 a.active_f56b9865{background-color:#f08080!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "vIVN":
/*!******************************************************!*\
  !*** ./lib/webparts/docSie/DocSieWebPart.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./DocSieWebPart.module.css */ "szOv");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "vicT":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "xMn6":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
const _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
const _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
const _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
const _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
const now = () => typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
function measure(func) {
    const start = now();
    func();
    const end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    let state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = Object.assign(Object.assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = Object.assign(Object.assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync = false) {
    measure(() => {
        const styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        const { mode, buffer, flushTimer } = _themeState.runState;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(() => {
        const styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        const mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(() => {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option = 3 /* ClearStyleOptions.all */) {
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach((styleRecord) => {
        const styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        const themableStyles = [];
        for (const styleRecord of _themeState.registeredThemableStyles) {
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    const { theme } = _themeState;
    let themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    const resolvedArray = (splitStyleArray || []).map((currentValue) => {
        const themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            const themedValue = theme ? theme[themeSlot] : undefined;
            const defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn(`Theming value not provided for "${themeSlot}". Falling back to "${defaultValue}".`);
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    const result = [];
    if (styles) {
        let pos = 0; // Current position in styles.
        let tokenMatch;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            const matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    const head = document.getElementsByTagName('head')[0];
    const styleElement = document.createElement('style');
    const { styleString, themable } = resolveThemableArray(styleArray);
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    const ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    const record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sp-build-web/node_modules/webpack/buildin/global.js */ "vicT")))

/***/ }),

/***/ "xeH2":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_xeH2__;

/***/ })

/******/ })});;
//# sourceMappingURL=doc-sie-web-part.js.map