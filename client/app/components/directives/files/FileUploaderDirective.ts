import { Component } from "@angular/core";
import { routes } from "../../../routes";
import { FilesService } from "../../../services/files.service";

@Component({
    selector    : 'file-upload',
    moduleId    : module.id,
    templateUrl : '/app/views/files/file-upload.html',
})

export class FileUploaderDirective {
    private _filesToUpload: Array<File> = [];

    constructor(private _filesService: FilesService) {

    }

    fileChangeEvents(fileInput: any) {
        this._filesToUpload = <Array<File>> fileInput.target.files;
    }

    upload() {
        let formData: any = new FormData();
        for(var i = 0; i < this._filesToUpload; i++) {
            formData.append('uploads[]', this._filesToUpload[i], this._filesToUpload[i].name)
        }

        this._filesService.sendFile(routes.api.files, [], formData)
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    }
}