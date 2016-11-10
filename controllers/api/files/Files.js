var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var multer = require('multer');

var ApiBase_RequestLayer = require('../ApiBase_RequestLayer'),
    Config = require(global.appRoot + '/Config'),
    util = require('util');

function Files() {
    Files.super_.call(this);
    this.requestBaseUrl = Config.brain.url + '/upload';
}

Files.prototype.upload = function(req, res) {
    var form = new formidable.IncomingForm();
    var filesArray = [];

    form.multiples = false;

    //form.uploadDir = path.join(__dirname, '/public/uploads');
    form.on('file', function(field, file) {
        filesArray.push(file);
    });

    form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
    });

    form.on('end', function() {
        res.end('success');
    });

    form.parse(req);


};

util.inherits(Files, ApiBase_RequestLayer);

module.exports = Files;