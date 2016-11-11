import { Component } from "@angular/core";
import { routes } from "../../../routes";
import { FilesService } from "../../../services/files.service";

@Component({
    selector    : 'file-upload',
    moduleId    : module.id,
    templateUrl : '/app/views/directives/files/file-upload.html',
})

export class FileUploaderDirective {
    private _filesToUpload: Array<File> = [];


    constructor(
        private _filesService: FilesService
    ) {

    }

    fileChangeEvents(fileInput: any) {
        this._filesToUpload = <Array<File>> fileInput.target.files;
    }

    upload() {
        this._filesService.sendFile(routes.api.files, [], this._filesToUpload)
            .subscribe((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    }
}