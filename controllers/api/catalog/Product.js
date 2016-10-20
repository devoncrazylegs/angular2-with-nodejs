var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Product() {
    Product.super_.call(this);
    this.requestBaseUrl = Config.brain.url + Config.brain.api + Config.brain.apiVersion + '/product';
}

Product.prototype.getProducts = function(req, res) {
    var self = this,
        requestUrl = self.requestBaseUrl,
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

Product.prototype.getProduct = function(req, res) {
    console.log('in  here individual');
};

util.inherits(Product, ApiBase_RequestLayer);

module.exports = Product;