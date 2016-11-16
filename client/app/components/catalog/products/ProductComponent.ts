import { Component } from "@angular/core";
import { Product } from "../../../classes/Product";
import { ProductService } from "../../../services/product.service";
import { ConfigObject } from "../../../ConfigObject";
import { productHelper } from "../../../helpers/productHelper";


@Component({
    selector: 'product-component',
    templateUrl: '/app/views/catalog/products/product-dashboard.html',
    moduleId: module.id
})

export class ProductComponent {
    globals = ConfigObject;
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
            (products) => {
                this.products = productHelper.processImagesAndDownloads(products);
            },
            error    => { this.APIError = error },
            ()       => { }
        )
    }

    getProducts(filters) {
        this.productsLoaded = false;

        this._productService.getProducts(filters)
            .subscribe(
                products => { this.products = productHelper.processImagesAndDownloads(products)},
                error    => { this.APIError = error },
                ()       => { this.productsLoaded = true }
        );
    }

    ngOnInit() {
        this.getProducts({});
    }

}