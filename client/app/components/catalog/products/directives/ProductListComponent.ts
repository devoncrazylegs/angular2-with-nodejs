import { Component, Input } from "@angular/core";
import { Product } from "../../../../classes/Product";
import { ProductService } from "../../../../services/product.service";

@Component({
    selector: 'product-list',
    templateUrl: '/app/views/catalog/products/directives/product-list.html',
    moduleId: module.id
})

export class ProductListComponent {
    @Input() products;

    constructor(

    ) {

    }
}