import { Component, Input } from '@angular/core';
import { FilesService } from "./services/files.service";

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl:'/app/views/app.html'
})

export class AppComponent {
    openFileUploader: boolean = false;
    fileUploaderScope:any;

    constructor (
        private _filesService: FilesService
    ) {
        _filesService.emitter.subscribe(
            (stream) => {
                this.fileUploaderScope = stream.options;
                this.openFileUploader = stream.open;
            },
            () => {

            },
            () => {

            }
        )
    }
}