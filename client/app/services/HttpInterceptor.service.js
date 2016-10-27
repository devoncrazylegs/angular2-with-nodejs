"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var auth_service_1 = require("./auth.service");
var globalEventsManager_service_1 = require("./globalEventsManager.service");
var messages_1 = require("../helpers/messages");
var HttpInterceptor = (function (_super) {
    __extends(HttpInterceptor, _super);
    function HttpInterceptor(backend, defaultOptions, _authService, _globalEventsManager) {
        _super.call(this, backend, defaultOptions);
        this._authService = _authService;
        this._globalEventsManager = _globalEventsManager;
    }
    HttpInterceptor.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options).catch(function (res) {
            if (res.statusCode === 401) {
                console.log('expired');
            }
        });
    };
    HttpInterceptor.prototype.get = function (url, options) {
        var _this = this;
        var obsStream = _super.prototype.request.call(this, url, options);
        obsStream.subscribe(function (data) {
            var JSONParsedRes = JSON.parse(data._body);
            if (JSONParsedRes.statusCode) {
                if (JSONParsedRes.statusCode == 401) {
                    _this._globalEventsManager.showNavBar.emit(false);
                    _this._authService.logout({ message: messages_1.messages.messages.auth.tokenExpired, title: messages_1.messages.titles.auth.tokenExpired });
                }
            }
        });
        return obsStream;
    };
    HttpInterceptor.prototype.handleError = function () {
        console.log('error');
    };
    HttpInterceptor = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.ConnectionBackend, http_1.RequestOptions, auth_service_1.AuthService, globalEventsManager_service_1.GlobalEventsManager])
    ], HttpInterceptor);
    return HttpInterceptor;
}(http_1.Http));
exports.HttpInterceptor = HttpInterceptor;
//# sourceMappingURL=HttpInterceptor.service.js.map