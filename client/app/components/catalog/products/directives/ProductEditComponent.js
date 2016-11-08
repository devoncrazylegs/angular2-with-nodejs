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
var common_1 = require('@angular/common');
var tabs_service_1 = require("../../../../services/tabs.service");
var category_service_1 = require("../../../../services/category.service");
var ProductEditComponent = (function () {
    function ProductEditComponent(_productService, _categoryService, _activatedRoute, _location, _tabsService) {
        var _this = this;
        this._productService = _productService;
        this._categoryService = _categoryService;
        this._activatedRoute = _activatedRoute;
        this._location = _location;
        this._tabsService = _tabsService;
        this.categories = {};
        this.allocatedCategories = [];
        this.searchTerm = '';
        this.tabs = [
            { title: 'General', content: '', active: true, linked: 'general' },
            { title: 'Images', content: '', active: false, linked: 'images' },
            { title: 'Categories', content: '', active: false, linked: 'categories' },
            { title: 'Manufacturers', content: '', active: false, linked: 'manufacturers' }
        ];
        this.selectedTab = this.tabs[0];
        this._tabsService.emitter
            .subscribe(function (tab) {
            _this.tabs.filter(function (arrayItem) {
                if (arrayItem.title === tab.title) {
                    _this.selectedTab = arrayItem;
                }
            });
        }, function () {
        }, function () {
        });
    }
    ProductEditComponent.prototype.getProduct = function () {
        var self = this;
        this._productService.getProduct(this.id)
            .subscribe(function (product) {
            self.product = product[0];
        });
    };
    ProductEditComponent.prototype.getCategories = function (filters) {
        var self = this;
        this._categoryService.getCategories(filters)
            .subscribe(function (categories) {
            self.categories = categories;
        });
    };
    ProductEditComponent.prototype.getAllocatedCategories = function () {
        var self = this;
        this._categoryService.getCategories({
            product: self.id
        }).subscribe(function (categories) {
            self.allocatedCategories = categories;
        });
    };
    ProductEditComponent.prototype.searchCategories = function () {
        var self = this;
        this.getCategories({
            'search_term': self.searchTerm
        });
    };
    ProductEditComponent.prototype.alreadyAllocated = function (category) {
        for (var i = 0; i < this.allocatedCategories; i++) {
            if (this.allocatedCategories[i]['id'] == category.id) {
                return false;
            }
        }
        return true;
    };
    ProductEditComponent.prototype.save = function () {
        this._productService.editProduct(this.product)
            .subscribe(function (response) {
        });
    };
    ProductEditComponent.prototype.back = function () {
        this._location.back();
    };
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this._subscription = this._activatedRoute.params.subscribe(function (params) {
            self.id = +params['id'];
            _this.getProduct();
        });
        this.getCategories({});
        this.getAllocatedCategories();
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
        __metadata('design:paramtypes', [product_service_1.ProductService, category_service_1.CategoryService, router_1.ActivatedRoute, common_1.Location, tabs_service_1.TabsService])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=ProductEditComponent.js.map