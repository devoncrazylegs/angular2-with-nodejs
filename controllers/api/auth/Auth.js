var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Auth() {
    Auth.super_.call(this);
    this.requestBaseUrl = Config.brain.url + '/authenticate';
    //ApiBase_RequestLayer.apply(this, arguments);
}

Auth.prototype.login = function(req, res) {
    var self       = this,
        email      = req.body.email,
        password   = req.body.password,
        requestUrl = self.requestBaseUrl + '/login';

    self.preRequestCheck(req, res, function(req, res) {
        self.makeRequest(
            'POST',
            {
                contentType: 'json'
            },
            {
                email: email,
                password: password
            },
            requestUrl
        ).then(function(response) {
            res.json(response);
        });
    });

};

util.inherits(Auth, ApiBase_RequestLayer);

module.exports = Auth;