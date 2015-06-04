var express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	path = require('path'), 
	swig = require('swig'),
	routes = require('./routes/'),
	gulp = require('gulp');
	

	app.use(bodyParser.json());


	app.use(express.static(path.join(__dirname, '/public')));
	
	
	swig.setDefaults({ cache: false });
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');



	

	app.use('/', routes);

	var server = app.listen(1234, function(){

		var host = server.address().address;
		var port = server.address().port;

		console.log('Busch serve is listening at http://', host, port);
	});



