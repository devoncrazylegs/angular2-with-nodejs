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
var routes_1 = require('../routes');
var HttpHelper_1 = require("../helpers/HttpHelper");
var userHelper_1 = require("../helpers/userHelper");
var router_1 = require("@angular/router");
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var AuthService = (function () {
    function AuthService(_http, _router, _toastr) {
        this._http = _http;
        this._router = _router;
        this._toastr = _toastr;
        this.isLoggedIn = new core_1.EventEmitter();
        //Set token if saved in local storage
        this.user = userHelper_1.userHelper.user;
    }
    /**
     * Login function
     */
    AuthService.prototype.login = function (loginDetails) {
        var body = JSON.stringify(loginDetails);
        var headers = HttpHelper_1.HttpHelper.createAuthorizationHeader(false, false);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .post(routes_1.routes.auth.login, body, options)
            .map(function (res) { return res.json(); });
    };
    /**
     * Logout function
     */
    AuthService.prototype.logout = function (message) {
        // clear token
        userHelper_1.userHelper.removeUserFromStorage();
        this._toastr.success(message.message, message.title);
        this._router.navigateByUrl('login');
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, ng2_toastr_1.ToastsManager])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map