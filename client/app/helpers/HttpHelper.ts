import { Headers } from "@angular/http";
import { userHelper } from "./userHelper";

export var HttpHelper = {
    createAuthorizationHeader(): Headers {
        let headers:Headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userHelper.getToken()
        });
        return headers;
    }
};