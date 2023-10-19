var __extends = (this && this.__extends) || (function () {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneButton } from '@microsoft/sp-property-pane';
import * as $ from 'jquery';
import DocsieTemplate from "./DocsieTemplate";
import "bootstrap"; // for bootstrap javascript
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './DocSieWebPart.module.scss';
import * as strings from 'DocSieWebPartStrings';
import { SPComponentLoader } from "@microsoft/sp-loader";
// import * as appSettings from 'appSettings';
var DocSieWebPart = /** @class */ (function (_super) {
    __extends(DocSieWebPart, _super);
    function DocSieWebPart() {
        var _this = _super.call(this) || this;
        _this._disabledProperty = false;
        SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css");
        SPComponentLoader.loadCss("https://lib.docsie.io/current/styles/docsie.css");
        return _this;
    }
    DocSieWebPart.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.domElement.innerHTML = "\n      <section class=\"".concat(styles.docSie, " ").concat(!!this.context.sdks.microsoftTeams ? styles.teams : '', "\">\n        <nav class=\"navbar bg-body-tertiary\">\n          <div class=\"container-fluid border-bottom border-secondary\">\n            <span class=\"navbar-brand align-middle\" href=\"#\">\n              <img src=\"https://cdn.docsie.io/workspaces/workspace_KzWjPI0dOsVYCpNoU/logo_QKcEpB5kVFDog4BUBePANWyVMVtslBl9I4YxIoSb8PMOM.png\"  \n                alt=\"Logo\" \n                width=\"50\" height=\"50\"><!-- class=\"d-inline-block align-text-top\"> -->\n              Docsie\n            </span>\n          </div>\n        </nav>\n        <div id=\"mainDIV\">\n          <h2>Welcome to Docsie</h2>\n          <p>To begin, let's connect to your account using an API key</p>\n\n          <h4 class=\"text-primary\">Create an API Secret Key:</h4>\n          <p>Before you start using the Docsie API, you must create a secret key.</p>\n          <ul>\n            <li>Go to <i class=\"border\">Settings</i> > <i class=\"border\">Organization</i> > <i class=\"border\">API Keys</i></li>\n            <li>In the menu, click <i class=\"border\">Create secret key +</i></li>\n            <li>Choose a name for the secret key. Then, select an expiration period for the secret key</li>\n            <li>Click <i class=\"border\">Add key</i> to finalize this process. The secret key will appear in the current window, and disappear after you click <i class=\"border\">Close dialog</i>. Please copy and save it securely, as you cannot view the token again.</li>\n            <li>An obfuscated secret key token will appear in the list. Use this as a reference when working with multiple API keys simultaneously.</li>\n          </ul>\n          <h4 class=\"text-primary\">Add the API key to this webpart property:</h4>\n          <ul>\n            <li>Edit this webpart</li>\n            <li>Add the API key to the property pane</li>\n            <li>Click connect</li>\n          </ul>\n        </div\n      </section>\n    ");
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
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
                        break;
                    case 'Teams': // running in Teams
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
                        break;
                    default:
                        throw new Error('Unknown host');
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
    };
    Object.defineProperty(DocSieWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
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
                                PropertyPaneTextField('description', {
                                    "label": "Client ID",
                                    "description": "Please enter your Docsie ID to connect to your portal",
                                    "disabled": this._disabledProperty
                                }),
                                PropertyPaneButton("button", {
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
                    case 0: return [4 /*yield*/, DocsieTemplate.getData(this.properties, this.context, 'https://app.docsie.io/api_v2/003/workspaces?expand[]=documentation.books')
                            .then(function (res) {
                            var sectionDIV = _this.domElement.querySelector('#mainDIV');
                            sectionDIV.innerHTML = "\n        <ul class=\"nav nav-pills mb-3\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item border-bottom mb-2\" role=\"presentation\">\n            <button class=\"nav-link active\" id=\"new-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#new-tab-pane\" type=\"button\" role=\"tab\" aria-controls=\"new-tab-pane\" aria-selected=\"true\">Create deployment</button>\n          </li>\n          <li class=\"nav-item\" role=\"presentation\">\n            <button class=\"nav-link\" id=\"get-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#get-tab-pane\" type=\"button\" role=\"tab\" aria-controls=\"get-tab-pane\" aria-selected=\"false\">Existing deployments</button>\n          </li>\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">  \n          <div class=\"tab-pane fade show active\" id=\"new-tab-pane\" role=\"tabpanel\" aria-labelledby=\"new-tab\" tabindex=\"0\">\n            <div id='workSpace' class=\"border-bottom border-secondary pb-2 mb-4\">\n            </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"get-tab-pane\" role=\"tabpanel\" aria-labelledby=\"get-tab\" tabindex=\"0\">\n            <div id='deploymentDiv' class=\"border-bottom border-secondary pb-2 mb-4\">\n            </div>\n          </div>\n        </div>\n      ";
                            var workspaceElement = _this.domElement.querySelector('#workSpace');
                            if (workspaceElement !== null) {
                                workspaceElement.innerHTML = DocsieTemplate.createDOM(res);
                                $('#applyBtn').on('click', function () {
                                    var activeTabID = $('.tab-pane.active a.active').attr('aria-controls');
                                    var checkedRadio = $("div#".concat(activeTabID, " input[type=\"radio\"]:checked"));
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
                        return [4 /*yield*/, DocsieTemplate.getData(this.properties, this.context, 'https://app.docsie.io/api_v2/003/deployments')
                                .then(function (dep) {
                                $('#deploymentDiv').html(DocsieTemplate.createDeploymentDOM(dep));
                                $('#deployBTN').on('click', function () {
                                    _this.loadDocsieScript($("input[type='radio'][name='listGroupRadio']:checked").val());
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
        $('#deploymentDiv').html(script);
    };
    return DocSieWebPart;
}(BaseClientSideWebPart));
export default DocSieWebPart;
//# sourceMappingURL=DocSieWebPart.js.map