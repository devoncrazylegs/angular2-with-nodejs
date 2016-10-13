"use strict";
exports.userHelper = {
    _user: Object,
    get user() {
        return this._user;
    },
    set user(user) {
        window.sessionStorage.setItem('user', JSON.stringify(user));
    },
    tokenExists: function () {
        if (window.sessionStorage.getItem('token') && window.sessionStorage.getItem('token') !== '') {
            return true;
        }
        return false;
    },
    isLoggedIn: function () {
        if (window.sessionStorage.getItem('user')) {
            return true;
        }
        return false;
    },
    removeUserFromStorage: function () {
        window.sessionStorage.removeItem('user');
    }
};
//# sourceMappingURL=userHelper.js.map