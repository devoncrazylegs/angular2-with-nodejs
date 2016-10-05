import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions }  from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
    constructor(private _http: Http) {

    }

    login(loginDetails):Observable {
        return this._http
            .post('http://stdavids-brain.dev/api/v1/manufacturer', loginDetails)
            .map(res => res.json());
        /*let body = JSON.stringify(loginDetails);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://stdavids-brain.dev/api/v1', body, options)
            .map(res => res.json());*/
    }
}