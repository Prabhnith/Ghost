const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.render('homepage', { title: 'Express' });
});

router.get('/postpage', function (req, res, next) {
    console.log("Postapage\n\n\n");
    res.render('postpage', { title: 'Express' });
});

module.exports = router;