var express = require('express');
var router = express.Router();
var fs = require("fs");

var productRoutesControllerObject = require('../controllers/api/catalog/Product');
var productRoutesControllerObjectInstance = new productRoutesControllerObject();

router.get('/product', function(req, res, next) {
    productRoutesControllerObjectInstance.getProducts(req, res, next);
});

router.get('/product/:productId', function(req, res, next) {
    productRoutesControllerObjectInstance.getSingleProduct(req, res, next);
});



module.exports = router;
