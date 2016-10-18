var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Product() {
    Product.super_.call(this);
    this.requestBaseUrl = Config.brain.url + Config.brain.api + Config.brain.apiVersion + '/product';
}

Product.prototype.getProducts = function(req, res) {
    console.log('in  here');
};

Product.prototype.getSingleProduct = function(req, res) {
    console.log('in  here individual');
};

util.inherits(Product, ApiBase_RequestLayer);

module.exports = Product;