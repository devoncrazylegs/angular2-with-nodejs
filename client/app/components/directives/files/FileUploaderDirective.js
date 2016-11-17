"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var routes_1 = require("../../../routes");
var files_service_1 = require("../../../services/files.service");
var FileUploaderDirective = (function () {
    function FileUploaderDirective(_filesService) {
        this._filesService = _filesService;
        this.filesLoaded = false;
        this.payload = {};
    }
    FileUploaderDirective.prototype.getFiles = function (filters) {
        var _this = this;
        var self = this;
        this._filesService.getFiles(filters)
            .subscribe(function (files) { _this.files = files; }, function (error) { }, function () { _this.filesLoaded = true; });
    };
    FileUploaderDirective.prototype.fileChangeEvents = function (fileInput) {
        this._filesToUpload = fileInput.target.files;
    };
    FileUploaderDirective.prototype.upload = function () {
        this._filesService.sendFile(routes_1.routes.api.files, [], this._filesToUpload)
            .subscribe(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    FileUploaderDirective.prototype.closeOverlay = function () {
        this._filesService.emitFileOverlayOpen(false, {});
    };
    FileUploaderDirective.prototype.ngOnInit = function () {
        this.getFiles(this.payload);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileUploaderDirective.prototype, "fileUploaderScope", void 0);
    FileUploaderDirective = __decorate([
        core_1.Component({
            selector: 'file-upload',
            moduleId: module.id,
            templateUrl: '/app/views/directives/files/file-upload.html',
        }), 
        __metadata('design:paramtypes', [files_service_1.FilesService])
    ], FileUploaderDirective);
    return FileUploaderDirective;
}());
exports.FileUploaderDirective = FileUploaderDirective;
//# sourceMappingURL=FileUploaderDirective.js.map