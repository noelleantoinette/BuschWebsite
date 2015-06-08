var express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	path = require('path'), 
	swig = require('swig'),
	routes = require('./routes/');
	
	var port = process.env.PORT || 1234;

	app.use(bodyParser.json());


	app.use(express.static(path.join(__dirname, '/public')));
	
	
	swig.setDefaults({ cache: false });
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');

	app.use('/', routes);

	var server = app.listen(port, function(){

		var host = server.address().address;
		var port = server.address().port;

		console.log('Busch serve is listening at http://', host, port);
	});



