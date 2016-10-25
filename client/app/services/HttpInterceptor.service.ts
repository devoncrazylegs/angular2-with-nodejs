import {Injectable, Inject} from "@angular/core";
import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from "@angular/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class HttpInterceptor extends Http {
    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        public _authService: AuthService
    ) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch(res => {
            if(res.statusCode === 401) {
                console.log('expired');
            }
        });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        var obsStream = super.request(url, options);
        obsStream.subscribe((data) => {
            var JSONParsedRes = JSON.parse(data._body);
            if(JSONParsedRes.statusCode) {
                if(JSONParsedRes.statusCode == 401) {
                    this._authService.logout();
                }
            }
        });
        return obsStream;
    }

    handleError() {
        console.log('error');
    }
}