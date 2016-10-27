"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HttpInterceptor_service_1 = require("./HttpInterceptor.service");
var HttpHelper_1 = require("../helpers/HttpHelper");
var StringHelper_1 = require("../helpers/StringHelper");
var routes_1 = require("../routes");
var auth_service_1 = require("./auth.service");
var CategoryService = (function () {
    function CategoryService(_http, _authService) {
        this._http = _http;
        this._authService = _authService;
        this.emitter = new core_1.EventEmitter();
    }
    CategoryService.prototype.getCategories = function (filters) {
        var _this = this;
        var headers = HttpHelper_1.HttpHelper.createAuthorizationHeader(true);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .get(routes_1.routes.api.categories + StringHelper_1.StringHelper.convertVarsToString(filters), options)
            .map(function (res) {
            if (res.statusCode === 401) {
                _this._authService.logout();
            }
            else {
                return res.json();
            }
        });
    };
    CategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [HttpInterceptor_service_1.HttpInterceptor, auth_service_1.AuthService])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map