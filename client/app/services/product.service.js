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
var routes_1 = require("../routes");
var StringHelper_1 = require("../helpers/StringHelper");
var HttpHelper_1 = require("../helpers/HttpHelper");
var HttpInterceptor_service_1 = require("./HttpInterceptor.service");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.emitter = new core_1.EventEmitter();
    }
    ProductService.prototype.getProduct = function (id) {
        var headers = HttpHelper_1.HttpHelper.createAuthorizationHeader(true);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .get(routes_1.routes.api.products + '/' + id, options)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get all products
     * return Observable
     */
    ProductService.prototype.getProducts = function (filters) {
        var headers = HttpHelper_1.HttpHelper.createAuthorizationHeader(true);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .get(routes_1.routes.api.products + StringHelper_1.StringHelper.convertVarsToString(filters), options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.editProduct = function (payload) {
        var headers = HttpHelper_1.HttpHelper.createAuthorizationHeader(true);
        var options = new http_1.RequestOptions({ headers: headers });
        payload['_method'] = 'PUT';
        return this._http
            .post(routes_1.routes.api.products + '/' + payload.product.id, payload, options)
            .map(function (res) { return res.json(); });
    };
    /**
     * Add products to EventEmitter stream
     */
    ProductService.prototype.emitProducts = function (products) {
        this.emitter.emit(products);
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [HttpInterceptor_service_1.HttpInterceptor])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map