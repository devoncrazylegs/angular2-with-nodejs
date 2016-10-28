import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable
export class FilesService {

    sendFile(url: String, vars: Array<String>, files: FormData): Promise<any> {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            resolve(JSON.parse(xhr.response));
                        } else {
                            reject(xhr.response);
                        }
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(files);
        });
    }



}