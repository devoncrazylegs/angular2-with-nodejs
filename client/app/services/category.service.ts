import { Injectable, EventEmitter } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Category } from "../classes/Category";
import { HttpInterceptor } from "./HttpInterceptor.service";
import { HttpHelper } from "../helpers/HttpHelper";
import { StringHelper } from "../helpers/StringHelper";
import { routes } from "../routes";
import { AuthService } from "./auth.service";

@Injectable()
export class CategoryService {
    public emitter: EventEmitter<any> = new EventEmitter();
    private APIUrl:String;

    constructor(
        private _http: HttpInterceptor,
        private _authService: AuthService,
    ) {

    }

    getCategories(filters): Observable<Category[]> {
        let headers = HttpHelper.createAuthorizationHeader(true);
        let options = new RequestOptions({ headers: headers });
        return this._http
            .get(routes.api.categories + StringHelper.convertVarsToString(filters), options)
            .map((res) => {
                if(res.statusCode === 401) {
                    this._authService.logout();
                } else {
                    return res.json()
                }

            });
    }
}