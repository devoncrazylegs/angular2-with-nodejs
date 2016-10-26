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
var product_service_1 = require("../../../../services/product.service");
var router_1 = require("@angular/router");
var ProductEditComponent = (function () {
    function ProductEditComponent(_productService, _activatedRoute) {
        this._productService = _productService;
        this._activatedRoute = _activatedRoute;
    }
    ProductEditComponent.prototype.getProduct = function () {
        var self = this;
        this._productService.getProduct(this.id)
            .subscribe(function (product) {
            self.product = product;
        });
    };
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this._subscription = this._activatedRoute.params.subscribe(function (params) {
            self.id = +params['id'];
            _this.getProduct();
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'product-edit',
            templateUrl: '/app/views/catalog/products/directives/product-edit.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=ProductEditComponent.js.map