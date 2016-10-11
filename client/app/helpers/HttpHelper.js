"use strict";
var http_1 = require("@angular/http");
var userHelper_1 = require("./userHelper");
exports.HttpHelper = {
    createAuthorizationHeader: function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userHelper_1.userHelper.user.token
        });
        return headers;
    }
};
//# sourceMappingURL=HttpHelper.js.map