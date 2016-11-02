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
var HttpInterceptor_service_1 = require("./HttpInterceptor.service");
var HttpHelper_1 = require("../helpers/HttpHelper");
var http_1 = require("@angular/http");
var FilesService = (function () {
    function FilesService(_http) {
        this._http = _http;
    }
    FilesService.prototype.sendFile = function (url, vars, files) {
        var headers = HttpHelper_1.HttpHelper.createAuthorizationHeader(true);
        var options = new http_1.RequestOptions({ headers: headers });
        var files = files;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append(files[i].name, files[i]);
        }
        return this._http
            .post(url, formData)
            .map(function (res) {
            return res.json();
        });
        /*return new Promise((resolve, reject) => {
            let formData: FormData  = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();
            //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.send(formData);
        });*/
    };
    FilesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [HttpInterceptor_service_1.HttpInterceptor])
    ], FilesService);
    return FilesService;
}());
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map