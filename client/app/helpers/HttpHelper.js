"use strict";
var http_1 = require("@angular/http");
var userHelper_1 = require("./userHelper");
exports.HttpHelper = {
    createAuthorizationHeader: function (token, multipart) {
        var payload;
        if (multipart) {
            payload = {
                'Content-Type': 'multipart/form-data'
            };
        }
        else {
            payload = {
                'Content-Type': 'application/json'
            };
        }
        if (token) {
            payload['Authorization'] = 'Bearer ' + userHelper_1.userHelper.getToken();
        }
        var headers = new http_1.Headers(payload);
        return headers;
    }
};
//# sourceMappingURL=HttpHelper.js.map