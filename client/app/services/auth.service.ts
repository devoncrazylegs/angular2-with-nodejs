import { Injectable, EventEmitter } from "@angular/core";
import { Http, RequestOptions }  from "@angular/http";
import { Observable } from "rxjs";
import { routes } from '../routes';
import { HttpHelper } from "../helpers/HttpHelper";
import { userHelper } from "../helpers/userHelper";
import { Router } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class AuthService {
    public user;
    public isLoggedIn: EventEmitter<boolean> = new EventEmitter();


    constructor(
        private _http: Http,
        private _router: Router,
        private _toastr: ToastsManager
    ) {
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
    logout(message: Object): void {
        // clear token
        userHelper.removeUserFromStorage();
        this._toastr.success(message.message, message.title);
        this._router.navigateByUrl('login');
    }
}