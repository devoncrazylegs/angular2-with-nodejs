import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { HttpInterceptor } from "./HttpInterceptor.service";
import { HttpHelper } from "../helpers/HttpHelper";
import { RequestOptions } from "@angular/http";
import { routes } from "../routes";
import { StringHelper } from "../helpers/StringHelper";

@Injectable()
export class FilesService {
    public emitter: EventEmitter<any> = new EventEmitter();
    constructor(private _http: HttpInterceptor) {

    }

    getFiles(filters: Object): Observable<File[]> {
        let headers = HttpHelper.createAuthorizationHeader(true, false);
        let options = new RequestOptions({ headers: headers });
        return this._http
            .get(routes.api.files + StringHelper.convertVarsToString(filters), options)
            .map((response) => {
                return response.json();
            });
    }

    sendFile(url: String, vars: Array<String>, files: FileList):Observable<any> {
        let formData:FormData = new FormData();
        if(files.length > 0) {
            for(let i = 0;  i < files.length; i++) {
                formData.append('files', files[i]);
            }
            //formData.append('_method', 'POST');

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

    public emitFileOverlayOpen(open:boolean, filters: Object): void {
        var payload = {
            open:open,
            filters:filters
        };
        this.emitter.emit(payload);
    }
}