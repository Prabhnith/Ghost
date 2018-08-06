const ghost = require('ghost');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const session = require('express-session');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const utils = require('./node_modules/ghost/core/server/services/url/utils');

mongoose.promise = global.Promise;
const isProduction = process.env.NODE_ENV === 'production';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

require('./models/Articles');
app.use(require('./routes'));
// mongoose.connect('mongodb://localhost/lightblog');
// mongoose.set('debug', true);

ghost().then(function (ghostServer) {
  app.use(utils.getSubdir(), ghostServer.rootApp);
  ghostServer.start(app);
});
