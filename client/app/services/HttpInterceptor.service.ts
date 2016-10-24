import { Injectable } from "@angular/core";
import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from "@angular/http";
import { Observable } from "rxjs";
import {HttpHelper} from "../helpers/HttpHelper";

@Injectable()
export class HttpInterceptor extends Http {
    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions
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
        return super.request(url, options).catch(res => {
            if(res.statusCode === 401) {
                console.log('expired');
            }
        });
    }

    handleError() {
        console.log('error');
    }
}