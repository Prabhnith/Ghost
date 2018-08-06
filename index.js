var ghost = require('ghost');
var express = require('express');
var path = require('path');
var parentApp = express();
var utils = require('./node_modules/ghost/core/server/services/url/utils');
var routes = express.Router();

routes.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.json({
  //         message: "Hello world! "
  //       });
  res.write("<h1>Hi Homepage</h1>");
  res.end();
});
parentApp.use('/', routes);

ghost().then(function (ghostServer) {
  parentApp.use(utils.getSubdir(), ghostServer.rootApp);
  ghostServer.start(parentApp);
});
