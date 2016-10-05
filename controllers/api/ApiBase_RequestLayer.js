module.exports = ApiBase_RequestLayer = function() {

    this.inherit = {};
    this.__objectName = "ApiBase_RequestLayer";

    /**
     * Check cache and tokens before making the request. If
     * the tokens are not set the request will be cancelled.    *
     *
     */
    ApiBase_RequestLayer.prototype.preRequestCheck = function() {
        var self    = this;
    }
};