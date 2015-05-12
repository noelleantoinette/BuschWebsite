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
	
	// app.use(function (req, res) {
	// 	res.send('hey there');
	// });

	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');


	

	app.use('/', routes);

	var server = app.listen(1234, function(){

		var host = server.address().address;
		var port = server.address().port;

		console.log('SBPtest is listening at http://', host, port);
	});




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpLFxuXHRhcHAgPSBleHByZXNzKCksXG5cdG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpLFxuXHRib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKSxcblx0cGF0aCA9IHJlcXVpcmUoJ3BhdGgnKSwgXG5cdHN3aWcgPSByZXF1aXJlKCdzd2lnJyksXG5cdHJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzLycpLFxuXHRndWxwID0gcmVxdWlyZSgnZ3VscCcpO1xuXHRcblxuXHRhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuXG5cdGFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9wdWJsaWMnKSkpO1xuXHRcblx0Ly8gYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMpIHtcblx0Ly8gXHRyZXMuc2VuZCgnaGV5IHRoZXJlJyk7XG5cdC8vIH0pO1xuXG5cdGFwcC5lbmdpbmUoJ2h0bWwnLCBzd2lnLnJlbmRlckZpbGUpO1xuXHRhcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJyk7XG5cdGFwcC5zZXQoJ3ZpZXdzJywgX19kaXJuYW1lICsgJy92aWV3cycpO1xuXG5cblx0XG5cblx0YXBwLnVzZSgnLycsIHJvdXRlcyk7XG5cblx0dmFyIHNlcnZlciA9IGFwcC5saXN0ZW4oMTIzNCwgZnVuY3Rpb24oKXtcblxuXHRcdHZhciBob3N0ID0gc2VydmVyLmFkZHJlc3MoKS5hZGRyZXNzO1xuXHRcdHZhciBwb3J0ID0gc2VydmVyLmFkZHJlc3MoKS5wb3J0O1xuXG5cdFx0Y29uc29sZS5sb2coJ1NCUHRlc3QgaXMgbGlzdGVuaW5nIGF0IGh0dHA6Ly8nLCBob3N0LCBwb3J0KTtcblx0fSk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=