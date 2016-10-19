import {Injectable, EventEmitter} from "@angular/core";
import { Http, Headers, RequestOptions, Response }  from "@angular/http";
import { Observable } from "rxjs";
import { routes } from '../routes';
import { HttpHelper } from "../helpers/HttpHelper";
import { userHelper } from "../helpers/userHelper";

@Injectable()
export class AuthService {
    public user;
    public isLoggedIn: EventEmitter<boolean> = new EventEmitter();


    constructor(private _http: Http) {
        //Set token if saved in local storage
        this.user = userHelper.user;
    }

    /**
     * Login function
     */
    login(loginDetails):Observable {
        let body = JSON.stringify(loginDetails);
        let headers = HttpHelper.createAuthorizationHeader(false);
        let options = new RequestOptions({ headers: headers });

        return this._http
            .post(routes.auth.login, body, options)
            //.timeout(5000, new Error('delay exceeded'))
            .map(res => res.json());
    }

    /**
     * Logout function
     */
    logout(): void {
        // clear token
        userHelper.removeUserFromStorage();
    }
}