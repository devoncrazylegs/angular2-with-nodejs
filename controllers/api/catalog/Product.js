var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Product() {
    Product.super_.call(this);
    this.requestBaseUrl = Config.brain.url + Config.brain.api + Config.brain.apiVersion + '/product';
}

Product.prototype.getProducts = function(req, res) {
    var self = this,
        requestUrl = self.requestBaseUrl + '?' + req.url.split('?')[1];

    self.preRequestCheck(req, res, function(req, res, headers) {
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
    var self = this,
        requestUrl = self.requestBaseUrl + '/' + req.params.productId;

    self.preRequestCheck(req, res, function(req, res, headers) {
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

Product.prototype.editProduct = function(req, res) {var self = this,
        requestUrl = self.requestBaseUrl + '/' + req.params.productId,
        payload = req.body;

        self.preRequestCheck(req, res, function(req, res ,headers) {
            self.makeRequest(
                'POST',
                {
                    contentType: 'json'
                },
                payload,
                requestUrl,
                headers
            ).then(function(response) {
                res.send(response.body);
            }, function(response) {
                res.json(response);
            });
        });
};

util.inherits(Product, ApiBase_RequestLayer);

module.exports = Product;