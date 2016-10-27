"use strict";
exports.StringHelper = {
    convertVarsToString: function (vars) {
        var URLString = '';
        var i = 0;
        for (var key in vars) {
            URLString += (i === 0) ? '?' : '&';
            URLString += key + "=" + vars[key];
            i++;
        }
        return URLString;
    }
};
//# sourceMappingURL=StringHelper.js.map