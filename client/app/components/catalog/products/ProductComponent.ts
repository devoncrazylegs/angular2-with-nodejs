import { Component } from "@angular/core";
import { Product } from "../../../classes/Product";
import { ProductService } from "../../../services/product.service";

@Component({
    selector: 'product-component',
    templateUrl: '/app/views/catalog/products/product-dashboard.html',
    moduleId: module.id
})

export class ProductComponent {
    products: Product[] = [];
    productsLoaded = false;
    APIError = [];

    productPayload = {
        order           : 'asc',
        order_by        : 'title',
        category_id     : 0,
        resize          : true,
        imgHeight       : 200,
        imgWidth        : 200,
        active          : 1,
        searchTerm      : '',
        manufacturer    : null
    };

    constructor(
        private _productService: ProductService
    ) {
        _productService.emitter.subscribe(
            products => { this.products = products },
            error    => { this.APIError = error },
            ()       => { }
        )
    }

    getProducts() {
        this.productsLoaded = false;

        this._productService.getProducts(this.productPayload)
            .subscribe(
                products => {this.products = products},
                error    => {this.APIError = error},
                ()       => {this.productsLoaded = true}
        );
    }

    ngOnInit() {
        this.getProducts();
    }

}