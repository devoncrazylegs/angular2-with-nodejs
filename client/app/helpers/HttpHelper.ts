import { Headers } from "@angular/http";
import { userHelper } from "./userHelper";

export var HttpHelper = {
    createAuthorizationHeader(token, multipart): Headers {
        let payload: Object;
        if(multipart) {
            payload = {
                'Content-Type': 'multipart/form-data'
            };
        } else {
            payload = {
                'Content-Type': 'application/json'
            };
        }

        if(token) {
            payload['Authorization'] = 'Bearer ' + userHelper.getToken();
        }

        let headers:Headers = new Headers(payload);
        return headers;
    }
};