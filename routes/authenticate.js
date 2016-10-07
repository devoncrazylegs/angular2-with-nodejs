var express = require('express');
var router = express.Router();
var authRoutesControllerObj = require('../controllers/api/auth/Auth');
var authRoutesControllerInstance = new authRoutesControllerObj();

router.get('/login', function(req, res) {
    res.send('here');
});

router.post('/login', function(req, res) {
    authRoutesControllerInstance.login(req, res);
});

module.exports = router;