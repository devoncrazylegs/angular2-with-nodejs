import { Component, Output, EventEmitter } from "@angular/core";
import { Manufacturer } from "../../../../classes/Manufacturer";
import { Category } from "../../../../classes/Category";
import { CategoryService } from "../../../../services/category.service";
import { ManufacturerService } from "../../../../services/manufacturer.service";

@Component({
    selector: 'product-search',
    templateUrl: '/app/views/catalog/products/directives/product-search.html',
    moduleId: module.id
})

export class ProductSearchComponent {
    @Output() productFiltersChange:EventEmitter<any> = new EventEmitter();
    selectedManufacturer:Manufacturer = null;
    manufacturers:Manufacturer[] = [];
    selectedCategory:Category = null;
    categories:Category[] = [];
    APIError = false;
    filterList: Array = [];
    loaded = {
        categories: false,
        manufacturers: false
    };
    productSearchPayload = {
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
        private _categoriesService: CategoryService,
        private _manufacturerService: ManufacturerService,


    ) {
        this._categoriesService.getCategories({

        }).subscribe(
            categories => {this.categories = categories},
            error      => {this.APIError = error},
            ()         => {this.loaded.categories = true}
        );

        this._manufacturerService.getManufacturers({

        }).subscribe(
            manufacturers => {this.manufacturers = manufacturers},
            error         => {this.APIError = error},
            ()            => {this.loaded.manufacturers = true}
        );
    }

    getProducts() {
        this.productFiltersChange.emit(this.productSearchPayload);
    }

    filtersChange($event, value, type) {
        $event.stopPropagation();
        $event.preventDefault();
        if(type === 'category') {
            if(value == '') {
                this.productSearchPayload.category_id = 0;
            } else {
                this.productSearchPayload.category_id = value;
            }
        } else if(type === 'manufacturer') {
            if(value == '') {
                this.productSearchPayload.manufacturer = null;
            } else {
                this.productSearchPayload.manufacturer = value;
            }
        }
        this.getProducts();
    }

    resetFilters() {
        this.productSearchPayload = {
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

        this.getProducts();
        this.selectedCategory = null;
        this.selectedManufacturer = null;
    }

    ngOnInit() {

    }

}