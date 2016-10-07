import { Headers } from "@angular/http";
import { tokenHelper } from "./tokenHelper";

export var HttpHelper = {
    createAuthorizationHeader() {
        let headers:Headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenHelper._token
        });
        return headers;
    }
};