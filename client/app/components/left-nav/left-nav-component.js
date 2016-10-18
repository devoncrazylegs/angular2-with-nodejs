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
var globalEventsManager_service_1 = require("../../services/globalEventsManager.service");
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("@angular/router");
var userHelper_1 = require("../../helpers/userHelper");
var LeftNavComponent = (function () {
    function LeftNavComponent(_globalEventsManager, _authService, _router) {
        var _this = this;
        this._globalEventsManager = _globalEventsManager;
        this._authService = _authService;
        this._router = _router;
        this.showLeftNav = false;
        if (userHelper_1.userHelper.isLoggedIn()) {
            this.showLeftNav = true;
        }
        _globalEventsManager.showNavBar.
            subscribe(function (state) {
            _this.showLeftNav = state;
        });
    }
    LeftNavComponent.prototype.logout = function () {
        this._authService.logout();
        this._globalEventsManager.showNavBar.emit(false);
        this._router.navigate(['login']);
    };
    LeftNavComponent = __decorate([
        core_1.Component({
            selector: 'left-nav',
            templateUrl: '/app/views/left-nav/left-nav.html',
            moduleId: module.id,
            styleUrls: ['/app/assets/css/left-nav/left-nav.css']
        }), 
        __metadata('design:paramtypes', [globalEventsManager_service_1.GlobalEventsManager, auth_service_1.AuthService, router_1.Router])
    ], LeftNavComponent);
    return LeftNavComponent;
}());
exports.LeftNavComponent = LeftNavComponent;
//# sourceMappingURL=left-nav-component.js.map