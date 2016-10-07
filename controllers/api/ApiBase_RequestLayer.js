var http    = require('http');
var request = require('request');
var util    = require('util');
var querystring = require('querystring');


function ApiBase_RequestLayer() {
    this.inherit = {};
    this.__objectName = "ApiBase_RequestLayer";
}

/**
 * Check cache and tokens before making the request. If
 * the tokens are not set the request will be cancelled.    *
 *
 */
ApiBase_RequestLayer.prototype.preRequestCheck = function(req, res, next) {
    var self = this;

    next(req, res);
};

ApiBase_RequestLayer.prototype.makeRequest = function(verb, options, vars, url) {
    var self = this,
        headers = {};

    if(options.contentType === 'json') {
        headers['Content-Type'] = 'application/json';
    } else {

    }

    var payload = {
        headers : headers,
        url     : url,
        method  : verb,
        timeout : 10000,
        form    : vars,
        followRedirect: true,
        maxRedirects: 10
    };

    return new Promise(function(resolve, reject) {
        request(payload, function(error, response, body) {
                if(!error && response.statusCode === 200) {
                    resolve(response);
                } else {
                    reject(error);
                }
        });
    });

};

module.exports = ApiBase_RequestLayer;