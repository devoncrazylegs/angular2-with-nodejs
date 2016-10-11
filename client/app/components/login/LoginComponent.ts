import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { userHelper } from "../../helpers/userHelper";
import { Router } from "@angular/router";


@Component({
    moduleId: module.id,
    templateUrl: '/app/views/login/login.html'
})

export class LoginComponent {
    loginDetails: Object = {
        email      : '',
        password   : ''
    };

    constructor(
        private _authService: AuthService,
        private router: Router
    ) {

    }

    login() {
        this._authService.login(this.loginDetails)
            .subscribe(
                response => {
                    //if(JSON.parse(response.body).token && !tokenHelper.tokenExists) {
                    let user = JSON.parse(response.body);
                    if(user.body && user.body.token) {
                        userHelper.user = user.body;
                        this.router.navigate(['/']);
                    }
                },
                error    => {
                    alert('error');
                }
            );
    }
}