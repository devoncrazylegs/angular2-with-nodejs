import { Injectable, EventEmitter } from "@angular/core";
import { HttpInterceptor } from "./HttpInterceptor.service";
import { Observable } from "rxjs";
import { Manufacturer } from "../classes/Manufacturer";
import { HttpHelper } from "../helpers/HttpHelper";
import { RequestOptions } from "@angular/http";
import { routes } from "../routes";
import { StringHelper } from "../helpers/StringHelper";

@Injectable()
export class ManufacturerService {
    public emitter: EventEmitter<any> = new EventEmitter();
    private APIUrl:String;

    constructor(
        private _http: HttpInterceptor
    ) {

    }

    getManufacturers(filters): Observable<Manufacturer[]> {
        let headers = HttpHelper.createAuthorizationHeader(true, false);
        let options = new RequestOptions({ headers: headers });
        return this._http
            .get(routes.api.manufacturers + StringHelper.convertVarsToString(filters), options)
            .map(res => res.json());
    }
}