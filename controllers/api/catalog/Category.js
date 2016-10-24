var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Category() {
    Category.super_.call(this);
    this.requestBaseUrl = Config.brain.url + Config.brain.api + Config.brain.apiVersion + '/category';
}

Category.prototype.getCategories = function(req, res) {
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
            res.send(response);
        });
    });
};

util.inherits(Category, ApiBase_RequestLayer);

module.exports = Category;