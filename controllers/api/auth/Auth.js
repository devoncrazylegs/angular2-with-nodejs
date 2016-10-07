var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Auth() {
    Auth.super_.call(this);
    this.requestBaseUrl = Config.brain.url + '/authenticate';
    //ApiBase_RequestLayer.apply(this, arguments);
}

Auth.prototype.login = function(req, res) {
    var self     = this,
        email    = req.body.email,
        password = req.body.password;


    //self.preRequestCheck(req, res, function(req, res) {
        self.makeRequest(
            'POST',
            {
                contentType: 'json'
            },
            {
                email: email,
                password: password
            },
            this.requestBaseUrl + '/login'
        ).then(function(response) {
            res.json(response);
        });
    //});

};

util.inherits(Auth, ApiBase_RequestLayer);

module.exports = Auth;