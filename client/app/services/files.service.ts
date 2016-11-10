import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpInterceptor } from "./HttpInterceptor.service";
import { HttpHelper } from "../helpers/HttpHelper";
import { RequestOptions } from "@angular/http";

@Injectable()
export class FilesService {

    constructor(private _http: HttpInterceptor) {

    }

    sendFile(url: String, vars: Array<String>, files: File[]) {
        let formData = new FormData();
        formData.append('files', files);
        formData.append('files', 'testfiles');

        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.withCredentials = true;
        xhr.send(formData);
    }

    /*sendFile(url: String, vars: Array<String>, files: File[]):Observable<any> {
        let headers = HttpHelper.createAuthorizationHeader(true);
        let options = new RequestOptions({ headers: headers });
        let files = files;
        const formData = new FormData();

        for(var i = 0; i < files.length; i++){
            formData.append(files[i].name, files[i]);
        }

        return this._http
            .post(url, formData)
            .map((res) => {
                return res.json();
            });
    }*/
}