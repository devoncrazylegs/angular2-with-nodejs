var express = require('express');
var app = express();
var path = require('path');

global.appRoot = path.resolve(__dirname);

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var redis = require('redis');
var jwt = require('jwt-simple');

// Config file
var config = require('./Config');

// Routes
var routes = require('./routes/index');
var authRoutes = require('./routes/authenticate');
var apiRoutes = require('./routes/api');

// Set Secret
app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// redis
if(config.redis.isEnabled) {
    var client = redis.createClient();
    client.on('error', function (err) {
        console.log("Error " + err);
    });
}

// uncomment after placing your favicon in /assets
//app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('client'));
//app.use(express.static(path.join('/node_modules', __dirname + 'client/node_modules')));
app.use(express.static(path.join(__dirname, '/client/assets')));

app.use(function(req, res, next) {
    // add cookie functionality into here
    next();
});

app.use('/', routes);
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
