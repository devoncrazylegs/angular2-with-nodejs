import { Component } from "@angular/core";
import { GlobalEventsManager } from "../../services/globalEventsManager.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { userHelper } from "../../helpers/userHelper";
import {messages} from "../../helpers/messages";

@Component({
    selector: 'navbar',
    templateUrl: '/app/views/navbar/navbar.html',
    moduleId: module.id
})

export class NavBarComponent {
    showNavBar: Boolean = false;

    constructor(
        private _globalEventsManager: GlobalEventsManager,
        private _authService: AuthService,
        private _router: Router
    ) {
        if(userHelper.isLoggedIn()) {
            this.showNavBar = true;
        }
        _globalEventsManager.showNavBar.
            subscribe((state) => {
                this.showNavBar = state;
            });

    }

    logout() {
        this._authService.logout({message: messages.messages.logout.success, title:messages.titles.logout.success});
        this._globalEventsManager.showNavBar.emit(false);
        this._router.navigate(['login']);
    }
}