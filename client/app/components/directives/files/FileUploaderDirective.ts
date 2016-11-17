import { Component, Input } from "@angular/core";
import { routes } from "../../../routes";
import { FilesService } from "../../../services/files.service";
import { File } from "../../../../../classes/File.class";

@Component({
    selector    : 'file-upload',
    moduleId    : module.id,
    templateUrl : '/app/views/directives/files/file-upload.html',
})

export class FileUploaderDirective {
    _filesToUpload: FileList;
    filesLoaded:boolean = false;
    @Input() fileUploaderScope;
    files: File[];
    payload:Object = {

    };

    constructor(
        private _filesService: FilesService
    ) {

    }

    getFiles(filters) {
        var self = this;
        this._filesService.getFiles(filters)
            .subscribe(
                files    => { this.files = files },
                error    => {  },
                ()       => { this.filesLoaded = true }
            );
    }

    fileChangeEvents(fileInput: any) {
        this._filesToUpload = fileInput.target.files;
    }

    upload() {
        this._filesService.sendFile(routes.api.files, [], this._filesToUpload)
            .subscribe((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    }

    closeOverlay() {
        this._filesService.emitFileOverlayOpen(false, {});
    }

    ngOnInit() {
        this.getFiles(this.payload);
    }
}