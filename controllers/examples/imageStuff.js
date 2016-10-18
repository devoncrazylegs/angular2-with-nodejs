var express = require('express');
var router = express.Router();
var fs = require("fs");
var bufferStream = require("../classes/libs/BufferStream");

router.get('/buffer', function(req, res, next) {
    var imageToBuffer = fs.readFileSync(appRoot + '/public/images/example.jpg');

    res.writeHead(
        200,
        "OK",
        {
            "Content-Type": "image/jpg",
            "Content-Disposition": "inline; filename=example.jpg",
            "Content-Length": imageToBuffer.length
        }
    );

    new bufferStream(imageToBuffer)
        .pipe(res);

});

router.get('/stream', function(req, res, next) {
    var imageStream = fs.createReadStream(appRoot + '/public/images/example.jpg');

    res.writeHead(
        200,
        "OK",
        {
            "Content-Type": "image/jpg",
            "Content-Disposition": "inline; filename=example.jpg"
        }
    );

    imageStream.pipe(res);
});

module.exports = router;