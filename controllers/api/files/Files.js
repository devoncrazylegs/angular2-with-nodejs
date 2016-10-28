var multer = require('multer');
var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Files() {
    Files.super_.call(this);
    this.requestBaseUrl = Config.brain.url + '/upload';
}

Files.prototype.upload = function(req, res) {
    if(req) {

    }
};

util.inherits(Files, ApiBase_RequestLayer);

module.exports = Files;