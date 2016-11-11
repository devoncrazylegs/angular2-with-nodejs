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
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var tabs_service_1 = require("../../../../services/tabs.service");
var category_service_1 = require("../../../../services/category.service");
var manufacturer_service_1 = require("../../../../services/manufacturer.service");
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var messages_1 = require("../../../../helpers/messages");
var ProductEditComponent = (function () {
    function ProductEditComponent(_productService, _categoryService, _manufacturerService, _activatedRoute, _location, _tabsService, _toastr) {
        var _this = this;
        this._productService = _productService;
        this._categoryService = _categoryService;
        this._manufacturerService = _manufacturerService;
        this._activatedRoute = _activatedRoute;
        this._location = _location;
        this._tabsService = _tabsService;
        this._toastr = _toastr;
        this.categories = [];
        this.manufacturers = [];
        this.catsToShow = [];
        this.allocatedCategories = [];
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
            product[0].active = parseInt(product[0].active);
            product[0].images = JSON.parse(product[0].images);
            product[0].files = JSON.parse(product[0].files);
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
    ProductEditComponent.prototype.alreadyAllocated = function () {
        for (var _i = 0, _a = this.allocatedCategories; _i < _a.length; _i++) {
            var allocatedCategory = _a[_i];
            this.catsToShow.splice(this.findIndexOfObject(allocatedCategory, this.categories), 1);
        }
    };
    ProductEditComponent.prototype.addCategory = function (category) {
        this.catsToShow.splice(this.findIndexOfObject(category, this.catsToShow), 1);
        this.allocatedCategories.push(category);
    };
    ProductEditComponent.prototype.removeCategory = function (category) {
        this.allocatedCategories.splice(this.findIndexOfObject(category, this.catsToShow), 1);
        this.catsToShow.push(category);
    };
    ProductEditComponent.prototype.save = function () {
        var _this = this;
        var payload = {
            product: this.product,
            categories: this.getIdsIndexes(this.allocatedCategories)
        };
        this._productService.editProduct(payload)
            .subscribe(function (response) {
            _this._toastr.success(messages_1.messages.messages.products.productEdited, messages_1.messages.titles.general.success);
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
        Rx_1.Observable.forkJoin([
            this._categoryService.getCategories({}),
            this._categoryService.getCategories({
                product: self.id
            }),
            this._manufacturerService.getManufacturers({})
        ])
            .subscribe(function (response) {
            _this.categories = _this.catsToShow = response[0];
            _this.allocatedCategories = response[1];
            _this.manufacturers = response[2];
            _this.alreadyAllocated();
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ProductEditComponent.prototype.findIndexOfObject = function (categoryToFind, arrayToSearch) {
        return arrayToSearch.findIndex(function (i) {
            return categoryToFind.id === i.id;
        });
    };
    ProductEditComponent.prototype.getIdsIndexes = function (arrayToSearch) {
        var ids = [];
        for (var _i = 0, arrayToSearch_1 = arrayToSearch; _i < arrayToSearch_1.length; _i++) {
            var item = arrayToSearch_1[_i];
            ids.push(item.id);
        }
        return ids;
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'product-edit',
            templateUrl: '/app/views/catalog/products/directives/product-edit.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, category_service_1.CategoryService, manufacturer_service_1.ManufacturerService, router_1.ActivatedRoute, common_1.Location, tabs_service_1.TabsService, ng2_toastr_1.ToastsManager])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=ProductEditComponent.js.map