import { Component, Input } from "@angular/core";
import { routes } from "../../../routes";
import { FilesService } from "../../../services/files.service";
import { File } from "../../../../../classes/File.class";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { messages } from "../../../helpers/messages";

@Component({
    selector    : 'file-upload',
    moduleId    : module.id,
    templateUrl : '/app/views/directives/files/file-upload.html',
})

export class FileUploaderDirective {
    _filesToUpload: FileList;
    filesLoaded:boolean = false;
    fileUploaded:boolean = true;
    selectedFiles:File[];
    @Input() fileUploaderScope;
    files: File[];
    selectedFiles:Number[];
    payload:Object = {

    };

    constructor(
        private _filesService: FilesService,
        private _toastr: ToastsManager
    ) {

    }

    getFiles(filters) {
        var self = this;
        this._filesService.getFiles(filters)
            .subscribe(
                files => {
                    files.forEach((file) => {
                        this.fileUploaderScope.options.files.forEach((assignedFile) => {
                            if(parseInt(file.id) == assignedFile.id) {
                                file.assigned = true;
                            }
                        });
                    });

                    if(this.fileUploaderScope.fileType === 'file') {
                        this.files = files.filter((file) => {
                            return file.type === 'file';
                        });
                    } else if(this.fileUploaderScope.fileType === 'image')  {
                        this.files = files.filter((file) => {
                            return file.type === 'image';
                        });
                    } else {
                        this.files = files;
                    }
                },
                error    => {  },
                ()       => { this.filesLoaded = true }
            );
    }

    fileChangeEvents(fileInput: any) {
        this._filesToUpload = fileInput.target.files;
    }

    upload() {
        this.fileUploaded = false;
        this._filesService.sendFile(routes.api.files, this.fileUploaderScope, this._filesToUpload)
            .subscribe((result) => {
                for(let i = 0; i < result.body.length; i++) {
                    this.files.push(result.body[i]);
                }

                this._toastr.success(messages.messages.files.uploadSuccess, messages.titles.general.success);
            }, (error) => {
                this._toastr.error(messages.messages.files.uploadError, messages.titles.general.error);
            }, () => {
                this.fileUploaded = true;
            });
    }

    mouseOverFile(element) {

    }

    selectFile(file) {
        file.assigned = !file.assigned;
    }

    saveSelectedFiles() {
        this.selectedFiles = this.files.filter((file) => {
            return file.assigned == true;
        });
        this._filesService.emitSelectedFiles(this.selectedFiles, this.fileUploaderScope.fileType);
        this._filesService.emitFileOverlayOpen(false, {})
    }

    closeOverlay() {
        this._filesService.emitFileOverlayOpen(false, {});
    }

    ngOnInit() {
        this.getFiles(this.payload);
    }

    private selectedFiles(filesToCheck) {

    }
}