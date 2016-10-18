export var StringHelper = {
    convertVarsToString(vars) {
        var URLString = '';
        var i = 0;
        for(var key in vars) {
            URLString += (i === 0) ? '?' : '&';
            URLString += key + "=" + vars[key];
            i++;
        }
        return URLString;
    }
};