import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { tokenHelper } from "./helpers/tokenHelper";

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'views/login/login.html'
})

export class AppComponent {
    loginDetails: Object = {
        email      : '',
        password   : ''
    };

    constructor(
        private _authService: AuthService
    ) {

    }

    login() {
        this._authService.login(this.loginDetails)
            .subscribe(
                response => {
                    //if(JSON.parse(response.body).token && !tokenHelper.tokenExists) {
                    if(JSON.parse(response.body).token) {
                        tokenHelper.token(JSON.parse(response.body).token);
                    }
                },
                error    => {},
                ()       => {

                }
            );
    }

    storeToken(token) {

    }
}