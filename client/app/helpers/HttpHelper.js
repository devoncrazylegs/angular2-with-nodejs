"use strict";
var http_1 = require("@angular/http");
var userHelper_1 = require("./userHelper");
exports.HttpHelper = {
    createAuthorizationHeader: function (token, multipart) {
        var headers = new http_1.Headers();
        if (multipart) {
        }
        else {
            headers.set('Content-Type', 'application/json');
        }
        if (token) {
            headers.set('Authorization', 'Bearer ' + userHelper_1.userHelper.getToken());
        }
        return headers;
    }
};
//# sourceMappingURL=HttpHelper.js.map