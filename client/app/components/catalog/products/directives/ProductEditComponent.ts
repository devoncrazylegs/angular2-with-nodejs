import { Component, Input } from "@angular/core";
import { Product } from "../../../../classes/Product";
import { ProductService } from "../../../../services/product.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
    selector: 'product-edit',
    templateUrl: '/app/views/catalog/products/directives/product-edit.html',
    moduleId: module.id
})

export class ProductEditComponent {
    public product:Product;
    private _subscription: Subscription;
    public id: number;
    public tabs:Array<any> = [
        {title: 'General', content: '', active: true},
        {title: 'Images', content: '', active: false}
    ];

    constructor(
        private _productService: ProductService,
        private _activatedRoute: ActivatedRoute,
        private _location: Location
    ) {

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

    back() {
        this._location.back();
    }

    ngOnInit() {
        var self = this;
        this._subscription = this._activatedRoute.params.subscribe(params => {
            self.id = +params['id'];
            this.getProduct();
        });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}