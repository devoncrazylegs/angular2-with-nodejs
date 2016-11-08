import { Injectable, EventEmitter } from "@angular/core";
import { RequestOptions } from "@angular/http";
import { Product } from "../classes/Product";
import { Observable } from "rxjs";
import { routes } from "../routes";
import { StringHelper } from "../helpers/StringHelper";
import { HttpHelper } from "../helpers/HttpHelper";
import { HttpInterceptor } from "./HttpInterceptor.service";

@Injectable()
export class ProductService {
    public emitter: EventEmitter<any> = new EventEmitter();
    private APIUrl:String;

    constructor(
        private _http: HttpInterceptor
    ) {

    }

    getProduct(id:number): Observable<Product> {
        let headers = HttpHelper.createAuthorizationHeader(true);
        let options = new RequestOptions({ headers: headers });
        return this._http
            .get(routes.api.products  + '/' + id, options)
            .map(res => res.json());
    }

    /**
     * Get all products
     * return Observable
     */
    getProducts(filters:Object): Observable<Product[]> {
        let headers = HttpHelper.createAuthorizationHeader(true);
        let options = new RequestOptions({ headers: headers });
        return this._http
            .get(routes.api.products + StringHelper.convertVarsToString(filters), options)
            .map(res => res.json());
    }

    editProduct(product: Product) {
        let headers = HttpHelper.createAuthorizationHeader(true);
        let options = new RequestOptions({ headers: headers });
        product['_method'] = 'PUT';
        return this._http
            .post(routes.api.products + '/' + product.id, product, options)
            .map(res => res.json());
    }

    /**
     * Add products to EventEmitter stream
     */
    public emitProducts(products): void {
        this.emitter.emit(products);
    }
}