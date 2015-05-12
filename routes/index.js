var express = require('express'), 
	router = express.Router();


	router.get('/', function(req, res){
		console.log('got here');
		// res.render('layout')
		res.render('index');
	});





	module.exports = router;