import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { userHelper } from "../../helpers/userHelper";
import { Router } from "@angular/router";
import { GlobalEventsManager } from "../../services/globalEventsManager.service";


@Component({
    moduleId: module.id,
    templateUrl: '/app/views/login/login.html'
})

export class LoginComponent {
    loginDetails: Object = {
        email      : '',
        password   : ''
    };

    showSpinner: boolean = false;
    errorMessage: string = null;

    constructor(
        private _globalEventsManager: GlobalEventsManager,
        private _authService: AuthService,
        private _router: Router
    ) {
        if(userHelper.isLoggedIn()) {
            this._router.navigate(['/']);
        }
    }

    login() {
        this.showSpinner = true;
        this._authService.login(this.loginDetails)
            .subscribe(
                response => {
                    //if(JSON.parse(response.body).token && !tokenHelper.tokenExists) {
                    this.showSpinner = false;
                    let userResponse = JSON.parse(response.body);
                    if(userResponse.body && userResponse.body.token) {
                        userHelper.user = userResponse.body;
                        this._globalEventsManager.showNavBar.emit(true);
                        this._router.navigate(['/']);
                    } else {
                        this.errorMessage = userResponse;
                    }
                },
                error    => {
                    alert('error');
                }
            );
    }
}