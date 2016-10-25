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
var HttpInterceptor_service_1 = require("./HttpInterceptor.service");
var HttpHelper_1 = require("../helpers/HttpHelper");
var http_1 = require("@angular/http");
var routes_1 = require("../routes");
var StringHelper_1 = require("../helpers/StringHelper");
var ManufacturerService = (function () {
    function ManufacturerService(_http) {
        this._http = _http;
        this.emitter = new core_1.EventEmitter();
    }
    ManufacturerService.prototype.getManufacturers = function (filters) {
        var headers = HttpHelper_1.HttpHelper.createAuthorizationHeader(true);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .get(routes_1.routes.api.manufacturers + StringHelper_1.StringHelper.convertVarsToString(filters), options)
            .map(function (res) { return res.json(); });
    };
    ManufacturerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [HttpInterceptor_service_1.HttpInterceptor])
    ], ManufacturerService);
    return ManufacturerService;
}());
exports.ManufacturerService = ManufacturerService;
//# sourceMappingURL=manufacturer.service.js.map