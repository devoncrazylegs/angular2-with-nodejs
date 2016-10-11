import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { userHelper } from "../helpers/userHelper";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {

    }

    canActivate() {
        if(userHelper.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}