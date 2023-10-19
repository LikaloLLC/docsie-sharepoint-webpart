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
// import styles from "./DocSieWebPart.module.scss";
import { HttpClient } from '@microsoft/sp-http';
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
                                .get(_endPoint, HttpClient.configurations.v1, {
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
export default DocsieTemplate;
//# sourceMappingURL=DocsieTemplate.js.map