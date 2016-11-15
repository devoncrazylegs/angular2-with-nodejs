import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpInterceptor } from "./HttpInterceptor.service";
import { HttpHelper } from "../helpers/HttpHelper";
import { RequestOptions } from "@angular/http";

@Injectable()
export class FilesService {

    constructor(private _http: HttpInterceptor) {

    }

    sendFile(url: String, vars: Array<String>, files: FileList):Observable<any> {
        let formData:FormData = new FormData();
        if(files.length > 0) {
            for(let i = 0;  i < files.length; i++) {
                formData.append('files', files[i]);
            }

            let headers = HttpHelper.createAuthorizationHeader(true, true);
            let options = new RequestOptions({ headers: headers });
            var xhr = new XMLHttpRequest;
            xhr.open('POST', '/', true);
            xhr.send(formData);
            return this._http
                .post('http://stdavids-brain.dev/upload', formData, options)
                .map((res) => {
                    return res.json();
                });
        }
    }
}