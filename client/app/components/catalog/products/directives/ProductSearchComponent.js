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
var category_service_1 = require("../../../../services/category.service");
var manufacturer_service_1 = require("../../../../services/manufacturer.service");
var product_service_1 = require("../../../../services/product.service");
var ProductSearchComponent = (function () {
    function ProductSearchComponent(_categoriesService, _manufacturerService, _productService) {
        var _this = this;
        this._categoriesService = _categoriesService;
        this._manufacturerService = _manufacturerService;
        this._productService = _productService;
        this.selectedManufacturer = null;
        this.manufacturers = [];
        this.selectedCategory = null;
        this.categories = [];
        this.APIError = false;
        this.filterList = [];
        this.loaded = {
            categories: false,
            manufacturers: false
        };
        this.productSearchPayload = {
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
        this._categoriesService.getCategories({}).subscribe(function (categories) { _this.categories = categories; }, function (error) { _this.APIError = error; }, function () { _this.loaded.categories = true; });
        this._manufacturerService.getManufacturers({}).subscribe(function (manufacturers) { _this.manufacturers = manufacturers; }, function (error) { _this.APIError = error; }, function () { _this.loaded.manufacturers = true; });
    }
    ProductSearchComponent.prototype.getProducts = function () {
        var _this = this;
        this._productService.getProducts(this.productSearchPayload)
            .subscribe(function (products) { _this._productService.emitProducts(products); }, function (error) { _this.APIError = error; }, function () { });
    };
    ProductSearchComponent.prototype.filtersChange = function (value, type) {
        if (type === 'category') {
            if (value == '') {
                this.productSearchPayload.category_id = 0;
            }
            else {
                this.productSearchPayload.category_id = value;
            }
        }
        else if (type === 'manufacturer') {
            if (value == '') {
                this.productSearchPayload.manufacturer = null;
            }
            else {
                this.productSearchPayload.manufacturer = value;
            }
        }
        this.getProducts();
    };
    ProductSearchComponent.prototype.resetFilters = function () {
        this.productSearchPayload = {
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
        this.getProducts();
        this.selectedCategory = null;
        this.selectedManufacturer = null;
    };
    ProductSearchComponent.prototype.ngOnInit = function () {
    };
    ProductSearchComponent = __decorate([
        core_1.Component({
            selector: 'product-search',
            templateUrl: '/app/views/catalog/products/directives/product-search.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService, manufacturer_service_1.ManufacturerService, product_service_1.ProductService])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=ProductSearchComponent.js.map