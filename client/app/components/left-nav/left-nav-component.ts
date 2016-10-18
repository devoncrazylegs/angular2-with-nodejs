import { Component } from "@angular/core";
import { GlobalEventsManager } from "../../services/globalEventsManager.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {userHelper} from "../../helpers/userHelper";

@Component({
    selector: 'left-nav',
    templateUrl: '/app/views/left-nav/left-nav.html',
    moduleId: module.id,
    styleUrls: ['/app/assets/css/left-nav/left-nav.css']
})

export class LeftNavComponent {
    showLeftNav: Boolean = false;

    constructor(
        private _globalEventsManager: GlobalEventsManager,
        private _authService: AuthService,
        private _router: Router
    ) {
        if(userHelper.isLoggedIn()) {
            this.showLeftNav = true;
        }

        _globalEventsManager.showNavBar.
        subscribe((state) => {
            this.showLeftNav = state;
        });

    }

    logout() {
        this._authService.logout();
        this._globalEventsManager.showNavBar.emit(false);
        this._router.navigate(['login']);
    }
}