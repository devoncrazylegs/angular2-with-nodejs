"use strict";
exports.userHelper = {
    _user: Object,
    get user() {
        return this._user;
    },
    set user(user) {
        window.localStorage.setItem('user', JSON.stringify(user));
    },
    getToken: function () {
        var user = JSON.parse(window.localStorage.getItem('user'));
        return user.token;
    },
    tokenExists: function () {
        if (window.localStorage.getItem('tokenName') && window.localStorage.getItem('tokenName') !== '') {
            return true;
        }
        return false;
    },
    isLoggedIn: function () {
        if (window.localStorage.getItem('user')) {
            return true;
        }
        return false;
    },
    removeUserFromStorage: function () {
        window.localStorage.removeItem('user');
    }
};
//# sourceMappingURL=userHelper.js.map