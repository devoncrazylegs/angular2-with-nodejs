export var userHelper = {
    _user: Object,
    tokenExists: function() {
        if(window.sessionStorage.getItem('token') && window.sessionStorage.getItem('token') !== '') {
            return true;
        }
        return false;
    },
    isLoggedIn() {
        if(window.sessionStorage.getItem('user')) {
            return true;
        }
        return false;
    },
    get user() {
        return this._user;
    },
    set user(user) {
        window.sessionStorage.setItem('user', JSON.stringify(user));
    }
};