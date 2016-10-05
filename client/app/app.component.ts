import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";

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
                response => { console.log(response); },
                error    => {},
                ()       => {

                }
            );
    }
}