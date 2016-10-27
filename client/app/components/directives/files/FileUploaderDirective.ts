import { Component } from "@angular/core";

@Component({
    selector    : 'file-upload',
    moduleId    : module.id,
    templateUrl : '/app/views/files/file-upload.html',
})

export class FileUploaderDirective {
    private filesToUpload: Array<File>;

    constructor() {
        this.filesToUpload = [];
    }

    upload() {
        this.makeFileRequest('url', [], this.filesToUpload)
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    }

    fileChangeEvents(fileInput: any) {
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }

    makeFileRequest(url: String, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}