var express = require('express');
var model = require('../models/open');
var router = express.Router();

router.get('/', function(req, res, next) {	
	model.openMain();
	model.openFlat();
	res.redirect('/');  
});


router.get('/main', function(req, res, next) {
	model.openMain();
	res.redirect('/');  
});


router.get('/flat', function(req, res, next) {
	model.openFlat();
	res.redirect('/');  
});

module.exports = model;
module.exports = router;
