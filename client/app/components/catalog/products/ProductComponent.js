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
var product_service_1 = require("../../../services/product.service");
var ProductComponent = (function () {
    function ProductComponent(_productService) {
        var _this = this;
        this._productService = _productService;
        this.products = [];
        this.productsLoaded = false;
        this.APIError = [];
        this.productPayload = {
            order: 'asc',
            order_by: 'title',
            category_id: 0,
            resize: true,
            imgHeight: 200,
            imgWidth: 200,
            active: 1,
            searchTerm: '',
            manufacturer: null
        };
        _productService.emitter.subscribe(function (products) { _this.products = products; }, function (error) { _this.APIError = error; }, function () { });
    }
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productsLoaded = false;
        this._productService.getProducts(this.productPayload)
            .subscribe(function (products) { _this.products = products; }, function (error) { _this.APIError = error; }, function () { _this.productsLoaded = true; });
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product-component',
            templateUrl: '/app/views/catalog/products/product-dashboard.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=ProductComponent.js.map