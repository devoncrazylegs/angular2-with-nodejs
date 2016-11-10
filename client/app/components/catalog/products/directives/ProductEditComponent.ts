import { Component, Input } from "@angular/core";
import { Product } from "../../../../classes/Product";
import { ProductService } from "../../../../services/product.service";
import { Subscription } from "rxjs";
import { Observable } from "rxjs/Rx";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { TabsService } from "../../../../services/tabs.service";
import { CategoryService } from "../../../../services/category.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { messages } from "../../../../helpers/messages";

@Component({
    selector: 'product-edit',
    templateUrl: '/app/views/catalog/products/directives/product-edit.html',
    moduleId: module.id
})

export class ProductEditComponent {
    public product:Product;
    private categories = [];
    private catsToShow = [];
    private parsedImages:Array<any>;
    private allocatedCategories = [];
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
        private _tabsService: TabsService,
        private _toastr: ToastsManager

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
                    product[0].active = parseInt(product[0].active);
                    product[0].images = JSON.parse(product[0].images);

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

    alreadyAllocated() {
        for(let allocatedCategory of this.allocatedCategories) {
            this.catsToShow.splice(this.findIndexOfObject(allocatedCategory, this.categories), 1);
        }
    }

    addCategory(category) {
        this.catsToShow.splice(this.findIndexOfObject(category, this.catsToShow), 1);
        this.allocatedCategories.push(category);
    }

    removeCategory(category) {
        this.allocatedCategories.splice(this.findIndexOfObject(category, this.catsToShow), 1);
        this.catsToShow.push(category);
    }

    save() {
        let payload:Object = {
            product: this.product,
            categories: this.getIdsIndexes(this.allocatedCategories)
        };
        this._productService.editProduct(payload)
            .subscribe((response) => {
                this._toastr.success(messages.messages.products.productEdited, messages.titles.general.success);
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
        Observable.forkJoin([
                this._categoryService.getCategories({}),
                this._categoryService.getCategories({
                    product: self.id
                })
            ])
            .subscribe((response) => {
                this.categories = this.catsToShow = response[0];
                this.allocatedCategories = response[1];
                this.alreadyAllocated();
            });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private findIndexOfObject(categoryToFind, arrayToSearch) {
        return arrayToSearch.findIndex((i) => {
            return categoryToFind.id === i.id;
        });
    }

    private getIdsIndexes(arrayToSearch) {
        let ids:Array = [];
        for(let item of arrayToSearch) {
            ids.push(item.id);
        }
        return ids;
    }
}