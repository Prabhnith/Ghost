var ghost = require('ghost');
var express = require('express');
// var path = require('path');

// var parentApp = express();

// parentApp.get('/test', function (req, res) {
//     res.send('Test Page');
// });
// fallback to ghost if a route isn't matched
// ghost().then(function (ghostServer) {
//     parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
//     ghostServer.start(parentApp);
// });


ghost().then(function (ghostServer) {
    ghostServer.start();
});

// var express = require('express');
// var ghost   = require('ghost');

// var parentApp = express();

// parentApp.get('/test', function (req, res) {
//     res.send('Test Page');
// });


// ghost().then(function (ghostServer) {
//     parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
//     ghostServer.start(parentApp);
// });