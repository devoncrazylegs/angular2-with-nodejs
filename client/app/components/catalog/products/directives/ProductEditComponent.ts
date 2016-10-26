import { Component, Input } from "@angular/core";
import { Product } from "../../../../classes/Product";
import { ProductService } from "../../../../services/product.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'product-edit',
    templateUrl: '/app/views/catalog/products/directives/product-edit.html',
    moduleId: module.id
})

export class ProductEditComponent {
    public product:Product;
    private _subscription: Subscription;
    id: number;

    constructor(
        private _productService: ProductService,
        private _activatedRoute: ActivatedRoute
    ) {

    }

    getProduct() {
        var self = this;
        this._productService.getProduct(this.id)
            .subscribe(
                (product) => {
                    self.product = product;
                }
            );
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