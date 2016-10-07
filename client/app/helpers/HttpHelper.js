"use strict";
var http_1 = require("@angular/http");
var tokenHelper_1 = require("./tokenHelper");
exports.HttpHelper = {
    createAuthorizationHeader: function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenHelper_1.tokenHelper._token
        });
        return headers;
    }
};
//# sourceMappingURL=HttpHelper.js.map