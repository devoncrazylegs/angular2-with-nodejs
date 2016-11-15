import { Headers } from "@angular/http";
import { userHelper } from "./userHelper";

export var HttpHelper = {
    createAuthorizationHeader(token, multipart): Headers {
        let headers:Headers = new Headers();
        if(multipart) {
            //headers.set('Content-Type', 'multipart/form-data');
        } else {
            headers.set('Content-Type', 'application/json');
        }

        if(token) {
            headers.set('Authorization', 'Bearer ' + userHelper.getToken());
        }


        return headers;
    }
};