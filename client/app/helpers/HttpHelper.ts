import { Headers } from "@angular/http";
import { userHelper } from "./userHelper";

export var HttpHelper = {
    createAuthorizationHeader() {
        let headers:Headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userHelper.user.token
        });
        return headers;
    }
};