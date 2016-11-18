import { Component, Input } from '@angular/core';
import { FilesService } from "./services/files.service";

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl:'/app/views/app.html'
})

export class AppComponent {
    public openFileUploader: boolean = false;
    public fileUploaderScope:any;

    constructor (
        private _filesService: FilesService
    ) {
       let self = this;
       this._filesService.emitter
            .subscribe((response) => {
                self.fileUploaderScope = response.filters;
                self.openFileUploader = response.open;
            },
            () => {

            },
            () => {

            }
        )
    }
}