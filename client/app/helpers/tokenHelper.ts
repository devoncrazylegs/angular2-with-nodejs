export var tokenHelper = {
    _token: String,
    tokenExists: function() {
        if(window.sessionStorage.getItem('token') && window.sessionStorage.getItem('token') !== '') {
            return true;
        }
        return false;
    },
    get token() {
        return this._token;
    },
    set token(token:String) {
        window.sessionStorage.setItem('token', token);
    }
};