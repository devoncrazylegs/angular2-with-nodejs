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
var FileUploaderDirective = (function () {
    function FileUploaderDirective() {
        this.filesToUpload = [];
    }
    FileUploaderDirective.prototype.upload = function () {
        this.makeFileRequest('url', [], this.filesToUpload)
            .then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    FileUploaderDirective.prototype.fileChangeEvents = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    FileUploaderDirective.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    FileUploaderDirective = __decorate([
        core_1.Component({
            selector: 'file-upload',
            moduleId: module.id,
            templateUrl: '/app/views/files/file-upload.html',
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploaderDirective);
    return FileUploaderDirective;
}());
exports.FileUploaderDirective = FileUploaderDirective;
//# sourceMappingURL=FileUploaderDirective.js.map