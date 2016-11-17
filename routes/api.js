var express = require('express');
var router = express.Router();
var fs = require("fs");

var productRoutesControllerObject = require('../controllers/api/catalog/Product');
var productRoutesControllerObjectInstance = new productRoutesControllerObject();

var categoryRoutesControllerObject = require('../controllers/api/catalog/Category');
var categoryRoutesControllerObjectInstance = new categoryRoutesControllerObject();

var manufacturerRoutesControllerObject = require('../controllers/api/catalog/Manufacturer');
var manufacturerRoutesControllerObjectInstance = new manufacturerRoutesControllerObject();

var filesRoutesControllerObject = require('../controllers/api/files/Files');
var filesRoutesControllerObjectInstance = new filesRoutesControllerObject();

router.get('/product', function(req, res, next) {
    productRoutesControllerObjectInstance.getProducts(req, res, next);
});

router.get('/product/:productId', function(req, res, next) {
    productRoutesControllerObjectInstance.getProduct(req, res, next);
});

router.post('/product/:productId', function(req, res, next) {
    productRoutesControllerObjectInstance.editProduct(req, res, next);
});

router.get('/categories', function(req, res, next) {
    categoryRoutesControllerObjectInstance.getCategories(req, res, next)
});

router.get('/manufacturer', function(req, res, next) {
    manufacturerRoutesControllerObjectInstance.getManufacturers(req, res, next)
});

router.get('/files', function(req, res, next) {
    filesRoutesControllerObjectInstance.getFiles(req, res, next);
});

router.post('/files', function(req, res, next) {
    filesRoutesControllerObjectInstance.uploadFiles(req, res, next);
});

/*router.get('/product/:productId', function(req, res, next) {
    productRoutesControllerObjectInstance.getSingleProduct(req, res, next);
});*/

module.exports = router;
