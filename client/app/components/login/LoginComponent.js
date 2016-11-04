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
var auth_service_1 = require("../../services/auth.service");
var userHelper_1 = require("../../helpers/userHelper");
var router_1 = require("@angular/router");
var globalEventsManager_service_1 = require("../../services/globalEventsManager.service");
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var messages_1 = require("../../helpers/messages");
var LoginComponent = (function () {
    function LoginComponent(_globalEventsManager, _authService, _router, _toastr) {
        this._globalEventsManager = _globalEventsManager;
        this._authService = _authService;
        this._router = _router;
        this._toastr = _toastr;
        this.loginDetails = {
            email: '',
            password: ''
        };
        this.showSpinner = false;
        this.errorMessage = null;
        if (userHelper_1.userHelper.isLoggedIn()) {
            this._router.navigate(['/']);
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.showSpinner = true;
        this._authService.login(this.loginDetails)
            .subscribe(function (response) {
            //if(JSON.parse(response.body).token && !tokenHelper.tokenExists) {
            _this.showSpinner = false;
            var userResponse = JSON.parse(response.body);
            if (userResponse.body && userResponse.body.token) {
                userHelper_1.userHelper.user = userResponse.body;
                _this._globalEventsManager.showNavBar.emit(true);
                _this._toastr.success(messages_1.messages.messages.login.success, messages_1.messages.titles.login.success);
                _this._router.navigate(['/']);
            }
            else {
                _this.showSpinner = false;
                _this._toastr.error(messages_1.messages.messages.login.incorrectCreds, messages_1.messages.titles.login.error + " : " + userResponse.responseCode);
            }
        }, function (error) {
            _this._toastr.error(messages_1.messages.messages.login.serverError, messages_1.messages.titles.login.error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '/app/views/login/login.html'
        }), 
        __metadata('design:paramtypes', [globalEventsManager_service_1.GlobalEventsManager, auth_service_1.AuthService, router_1.Router, ng2_toastr_1.ToastsManager])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=LoginComponent.js.map