import { Component } from "@angular/core";
import { Manufacturer } from "../../../../classes/Manufacturer";
import { Category } from "../../../../classes/Category";

@Component({
    selector: 'product-search',
    templateUrl: '/app/views/catalog/products/directives/product-search.html',
    moduleId: module.id
})

export class ProductSearchComponent {
    selectedManufacturer:Manufacturer = null;
    manufacturers:Manufacturer[] = [];
    selectedCategory:Category = null;
    categories:Category[] = [];

    productSearchPayload = {
        searchTerm: null
    };

    filtersChange() {

    }

    resetFilters() {

    }

}