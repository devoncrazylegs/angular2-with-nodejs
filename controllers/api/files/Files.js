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
    var self = this;
    var formidable = require('formidable');
    var requestUrl = self.requestBaseUrl;
    var form = new formidable.IncomingForm();
    var filesArray = [];

    form.parse(req, function(err, fields, files) {
        //if(files && files.file) {
            var myBoundary  = 'file' + Date.now(),
                fieldsData  = "\r\n--" + myBoundary + "\r\nContent-Disposition: form-data;";

            if(fields.productId) {
                fieldsData += "\r\n--" + myBoundary + "\r\nContent-Disposition: form-data; name=\"productid\";\r\n\r\n" +  fields.productId;
            }

            fields._method = 'PUT';

            /// Open a stream for reading the file from the disk...
            var stream = fs.createReadStream(files.files.path),

            /// Before boundary in which file properties are defined...
            beforeBoundary  =
                "\r\n--" + myBoundary + "\r\n" +
                "Content-Disposition: form-data; name=\"file\"; filename=\"" + files.files.name + "\"\r\n" +
                "Content-Type: " + files.files.type + "\r\n" +
                "Content-Transfer-Encoding: binary\r\n\r\n",

            /// After boundary will close file definition and file data. File is transferred with binary encoding.
            afterBoundary   = "\r\n\r\n--" + myBoundary + "--\r\n\r\n";

            self.preRequestCheck(req, res, function(req, res, headers) {
                self.makeRequest(
                    'POST',
                    {
                        contentLength : Buffer.byteLength(fieldsData) + Buffer.byteLength(beforeBoundary) + files.files.size + Buffer.byteLength(afterBoundary),
                        boundary      : 'multipart/form-data; boundary=' + myBoundary,
                        body          : beforeBoundary + afterBoundary
                    },
                    {
                        '_method' : 'POST'
                    },
                    requestUrl,
                    headers
                ).then(function(response) {
                    var data = '';
                    /// Read response from the api and assemble it...
                    res.on('data', function(chunk) { data += chunk; });
                    res.on('end', function()
                    {
                        /// Relay the response from the api when reading the response is finished...
                        res.send(data);

                        /// Delete tmp file...
                        fs.unlink(files.files.path);

                        response.write(fieldsData);
                        response.write(beforeBoundary);

                        stream.pipe(response, {end: false});
                        stream.on('end', function() {

                            /// ...now that reading is finished we can close the connection by writing closing boundary.
                            response.end(afterBoundary);
                        });
                    });
                }, function(response) {
                    res.json(response);
                });
            });

        //}
    });
};

util.inherits(Files, ApiBase_RequestLayer);

module.exports = Files;