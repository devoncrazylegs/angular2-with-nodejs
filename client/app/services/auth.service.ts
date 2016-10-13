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
        let headers = HttpHelper.createAuthorizationHeader();
        let options = new RequestOptions({ headers: headers });

        return this._http
            .post(routes.auth.login, body, options)
            .map(res => res.json());
            /*.map((response: Response) => {
                let user = JSON.parse(response.body);
                if(user.body && user.body.token) {
                    userHelper.user = user.body;
                }
                return user.json();
            });*/
    }

    /**
     * Logout function
     */
    logout(): void {
        // clear token
        userHelper.removeUserFromStorage();
    }
}