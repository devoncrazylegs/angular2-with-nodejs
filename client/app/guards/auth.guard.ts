import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { userHelper } from "../helpers/userHelper";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {

    }

    canActivate() {
        if(userHelper.isLoggedIn()) {
            return true;
        }

        this._authService.isLoggedIn.emit(false);
        this._router.navigate(['/login']);
        return false;
    }
}