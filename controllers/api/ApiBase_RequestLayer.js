var http    = require('http');
var request = require('request');
var util    = require('util');
var querystring = require('querystring');
var Config = require('../../Config');


function ApiBase_RequestLayer() {
    this.inherit = {};
    this.__objectName = "ApiBase_RequestLayer";
    this.querystring = querystring;
}

/**
 * Check cache and tokens before making the request. If
 * the tokens are not set the request will be cancelled.    *
 *
 */
ApiBase_RequestLayer.prototype.preRequestCheck = function(req, res, next) {
    var self = this;
    headers = {};
    if(Config.allowXDebugCookie) {
        headers = {
            'Cookie' : 'XDEBUG_SESSION=PHPSTORM'
        };
    }

    headers['Authorization'] = req.headers.authorization;

    next(req, res, headers);

    /*{
        'Authorization'     : req.headers.authorization,
        'Content-Type'      : 'multipart/form-data; boundary=' + myBoundary,
        'Content-Length'    : Buffer.byteLength(fieldsData) + Buffer.byteLength(beforeBoundary) + files.files.size + Buffer.byteLength(afterBoundary)
    }*/
};

ApiBase_RequestLayer.prototype.makeRequest = function(verb, options, vars, url, headers) {
    var self = this,
        reqHeaders = {};

    // Content Type
    if(options.contentType === 'json') {
        reqHeaders['Content-Type'] = 'application/json';
    } else if(options.contentType === 'files') {

        if(options.boundary) {
            reqHeaders['Content-Type'] = options.boundary
        } else {
            reqHeaders['Content-Type'] = 'multipart/form-data';
        }
    }

    // Content Length
    if(options.contentLength) {
        headers['Content-Length'] = options.contentLength
    }

    if(headers) {
        for(var key in headers) {
            if(!headers.hasOwnProperty(key)) {
                continue;
            }

            reqHeaders[key] = headers[key];
        }
    }

    var payload = {
        headers : reqHeaders,
        url     : url,
        method  : verb,
        timeout : 10000,
        form    : vars,
        followRedirect: true,
        maxRedirects: 10
    };

    return new Promise(function(resolve, reject) {
        request(payload, function(error, response, body) {
                if(response) {
                    if(!error && response.statusCode === 200) {
                        resolve(response, body);
                    } else {
                        if(response.statusCode === 401) {
                            console.log('token expited');
                        }
                        reject(response, body);
                    }
                }
        });
    });

};

module.exports = ApiBase_RequestLayer;