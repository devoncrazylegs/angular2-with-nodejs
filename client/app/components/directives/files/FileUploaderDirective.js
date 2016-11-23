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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var messages_1 = require("../../../helpers/messages");
var FileUploaderDirective = (function () {
    function FileUploaderDirective(_filesService, _toastr) {
        this._filesService = _filesService;
        this._toastr = _toastr;
        this.filesLoaded = false;
        this.fileUploaded = true;
        this.payload = {};
    }
    FileUploaderDirective.prototype.getFiles = function (filters) {
        var _this = this;
        var self = this;
        this._filesService.getFiles(filters)
            .subscribe(function (files) {
            files.forEach(function (file) {
                _this.fileUploaderScope.options.files.forEach(function (assignedFile) {
                    if (file.id === assignedFile.id) {
                        file.assigned = true;
                    }
                });
            });
            if (_this.fileUploaderScope.fileType === 'file') {
                _this.files = files.filter(function (file) {
                    return file.type === 'file';
                });
            }
            else if (_this.fileUploaderScope.fileType === 'image') {
                _this.files = files.filter(function (file) {
                    return file.type === 'image';
                });
            }
            else {
                _this.files = files;
            }
        }, function (error) { }, function () { _this.filesLoaded = true; });
    };
    FileUploaderDirective.prototype.fileChangeEvents = function (fileInput) {
        this._filesToUpload = fileInput.target.files;
    };
    FileUploaderDirective.prototype.upload = function () {
        var _this = this;
        this.fileUploaded = false;
        this._filesService.sendFile(routes_1.routes.api.files, this.fileUploaderScope, this._filesToUpload)
            .subscribe(function (result) {
            _this.files.push(result.body.file);
            _this._toastr.success(messages_1.messages.messages.files.uploadSuccess, messages_1.messages.titles.general.success);
        }, function (error) {
            _this._toastr.error(messages_1.messages.messages.files.uploadError, messages_1.messages.titles.general.error);
        }, function () {
            _this.fileUploaded = true;
        });
    };
    FileUploaderDirective.prototype.mouseOverFile = function (element) {
        console.log(event);
    };
    FileUploaderDirective.prototype.selectFile = function (file) {
        file.assigned = !file.assigned;
    };
    FileUploaderDirective.prototype.saveSelectedFiles = function () {
        this.selectedFiles = this.files.filter(function (file) {
            return file.assigned == true;
        });
        this._filesService.emitSelectedFiles(this.selectedFiles, this.fileUploaderScope.fileType);
        this._filesService.emitFileOverlayOpen(false, {});
    };
    FileUploaderDirective.prototype.closeOverlay = function () {
        this._filesService.emitFileOverlayOpen(false, {});
    };
    FileUploaderDirective.prototype.ngOnInit = function () {
        this.getFiles(this.payload);
    };
    FileUploaderDirective.prototype.selectedFiles = function (filesToCheck) {
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
        __metadata('design:paramtypes', [files_service_1.FilesService, ng2_toastr_1.ToastsManager])
    ], FileUploaderDirective);
    return FileUploaderDirective;
}());
exports.FileUploaderDirective = FileUploaderDirective;
//# sourceMappingURL=FileUploaderDirective.js.map