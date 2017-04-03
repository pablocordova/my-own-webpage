var express = require('express');
var path = require('path')
var app = express();

// To gives static content
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views/app')));

//Declare router file address
var routes = require('./routes/index');
app.use('/', routes);

// Set up view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Is necessary BodyParser???

// set Port
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
	console.log('Running on Port: ', app.get('port'));
});

