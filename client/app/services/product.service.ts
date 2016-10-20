import { Injectable, EventEmitter } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import { Product } from "../classes/Product";
import { Observable } from "rxjs";
import { routes } from "../routes";
import { ConfigObject } from "../ConfigObject";
import { StringHelper } from "../helpers/StringHelper";
import { HttpHelper } from "../helpers/HttpHelper";

@Injectable()
export class ProductService {
    public emitter: EventEmitter<any> = new EventEmitter();
    private APIUrl:String;

    constructor(
        private _http: Http
    ) {
        this.emitter = new EventEmitter();
    }

    getProducts(filters): Observable<Product[]> {
        let headers = HttpHelper.createAuthorizationHeader(true);
        let options = new RequestOptions({ headers: headers });
        return this._http
            .get(routes.api.products + StringHelper.convertVarsToString(filters), options)
            .map(res => res.json());
    }
}