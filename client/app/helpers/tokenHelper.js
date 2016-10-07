"use strict";
exports.tokenHelper = {
    _token: String,
    tokenExists: function () {
        if (window.sessionStorage.getItem('token') && window.sessionStorage.getItem('token') !== '') {
            return true;
        }
        return false;
    },
    get token() {
        return this._token;
    },
    set token(token) {
        window.sessionStorage.setItem('token', token);
    }
};
//# sourceMappingURL=tokenHelper.js.map