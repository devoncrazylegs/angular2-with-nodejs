import { Headers } from "@angular/http";
import { userHelper } from "./userHelper";

export var HttpHelper = {
    createAuthorizationHeader(token): Headers {
        let payload: Object = {
            'Content-Type': 'application/json'
        };

        if(token) {
            payload['Authorization'] = 'Bearer ' + userHelper.getToken();
        }

        let headers:Headers = new Headers(payload);
        return headers;
    }
};