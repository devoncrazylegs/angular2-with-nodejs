export var userHelper = {
    _user: Object,
    get user() {
        return this._user;
    },
    set user(user) {
        window.localStorage.setItem('user', JSON.stringify(user));
    },
    getToken:function(): String {
        let user = JSON.parse(window.localStorage.getItem('user'));
        return user.token;
    },
    tokenExists: function() {
        if(window.localStorage.getItem('tokenName') && window.localStorage.getItem('tokenName') !== '') {
            return true;
        }
        return false;
    },
    isLoggedIn() {
        if(window.localStorage.getItem('user')) {
            return true;
        }
        return false;
    },
    removeUserFromStorage() {
        window.localStorage.removeItem('user');
    }

};