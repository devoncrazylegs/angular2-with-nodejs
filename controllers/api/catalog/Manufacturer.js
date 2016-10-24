var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Manufacturer() {
    Manufacturer.super_.call(this);
    this.requestBaseUrl = Config.brain.url + Config.brain.api + Config.brain.apiVersion + '/manufacturer';
}

Manufacturer.prototype.getManufacturers = function(req, res) {
    var self = this,
        requestUrl = self.requestBaseUrl + '?' + req.url.split('?')[1],
        headers = {};

    headers['Authorization'] = req.headers.authorization;

    self.preRequestCheck(req, res, function(req, res) {
        self.makeRequest(
            'GET',
            {
                contentType: 'json'
            },
            {

            },
            requestUrl,
            headers
        ).then(function(response) {
            res.send(response.body);
        }, function(response) {
            res.json(response);
        });
    });
};

util.inherits(Manufacturer, ApiBase_RequestLayer);

module.exports = Manufacturer;