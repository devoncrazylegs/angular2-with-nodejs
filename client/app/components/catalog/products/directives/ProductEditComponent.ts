import { Component, Input } from "@angular/core";
import { Product } from "../../../../classes/Product";
import { ProductService } from "../../../../services/product.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { TabsService } from "../../../../services/tabs.service";
import { CategoryService } from "../../../../services/category.service";

@Component({
    selector: 'product-edit',
    templateUrl: '/app/views/catalog/products/directives/product-edit.html',
    moduleId: module.id
})

export class ProductEditComponent {
    public product:Product;
    private categories = {};
    private allocatedCategories = [];
    private searchTerm = '';
    private _subscription: Subscription;
    public id: number;
    public tabs:Array<any> = [
        {title: 'General', content: '', active: true, linked: 'general'},
        {title: 'Images', content: '', active: false, linked: 'images'},
        {title: 'Categories', content: '', active: false, linked: 'categories'},
        {title: 'Manufacturers', content: '', active: false, linked: 'manufacturers'}
    ];
    private selectedTab: Object = this.tabs[0];

        constructor(
        private _productService: ProductService,
        private _categoryService: CategoryService,
        private _activatedRoute: ActivatedRoute,
        private _location: Location,
        private _tabsService: TabsService
    ) {
        this._tabsService.emitter
            .subscribe((tab) => {
                this.tabs.filter((arrayItem) => {
                    if(arrayItem.title === tab.title) {
                        this.selectedTab = arrayItem;
                    }
                });
            }, () => {

            }, () => {

            });

    }

    getProduct() {
        var self = this;
        this._productService.getProduct(this.id)
            .subscribe(
                (product) => {
                    self.product = product[0];
                }
            );
    }

    getCategories(filters) {
        var self = this;
        this._categoryService.getCategories(filters)
            .subscribe((categories) => {
                self.categories = categories;
            });

    }

    getAllocatedCategories() {
        var self = this;
        this._categoryService.getCategories({
            product: self.id
        }).subscribe((categories) => {
            self.allocatedCategories = categories;
        });
    }

    searchCategories() {
        var self = this;
        this.getCategories({
            'search_term' : self.searchTerm
        });
    }

    alreadyAllocated(category) {
        for(var i = 0; i < this.allocatedCategories; i++) {
            if(this.allocatedCategories[i]['id'] == category.id) {
                return false;
            }
        }
        return true;
    }

    save() {
        this._productService.editProduct(this.product)
            .subscribe((response) => {

            });
    }

    back() {
        this._location.back();
    }

    ngOnInit() {
        var self = this;
        this._subscription = this._activatedRoute.params.subscribe(params => {
            self.id = +params['id'];
            this.getProduct();
        });
        this.getCategories({});
        this.getAllocatedCategories();
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}